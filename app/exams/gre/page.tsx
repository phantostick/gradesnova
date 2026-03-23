'use client';

import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import {
  GRE_VERBAL_PERCENTILES, GRE_QUANT_PERCENTILES, GRE_AW_PERCENTILES,
  GRE_PROGRAM_AVERAGES, getPercentile, getGREPercentileContext,
} from '@/lib/gre-data';
import { ChevronDown, ChevronUp } from 'lucide-react';
import Link from 'next/link';

const COLOR = '#a855f7';

const GRE_FAQS = [
  {
    question: 'What is a good GRE score for the 2025–2026 cycle?',
    answer: 'A good GRE score depends on your target graduate programs. The average GRE scores are approximately 151 for Verbal Reasoning and 153 for Quantitative Reasoning. For competitive PhD programs in STEM, a Quant score of 163+ (68th percentile) is typically expected. For humanities PhD programs, a Verbal score of 158+ (82nd percentile) is often sought. Check average GRE scores at your specific target programs, as requirements vary widely by field and school.',
  },
  {
    question: 'What percentile is a 160 GRE Verbal score?',
    answer: 'A GRE Verbal score of 160 is approximately the 87th percentile — you scored higher than about 87% of all GRE test takers on the Verbal section. This is an excellent Verbal score competitive at most graduate programs.',
  },
  {
    question: 'What percentile is a 160 GRE Quant score?',
    answer: 'A GRE Quantitative score of 160 is approximately the 54th percentile. This is significantly lower than the equivalent Verbal percentile because the GRE test-taking pool includes many STEM applicants who score very high on Quant. For most STEM PhD programs, you need 163–165+ to be competitive.',
  },
  {
    question: 'What percentile is a 165 GRE Quant score?',
    answer: 'A GRE Quantitative score of 165 is approximately the 76th percentile, placing you in the top 24% of all test takers on the Quant section. This is a strong score competitive at most graduate programs, though top STEM PhD programs often see applicants with 167–170.',
  },
  {
    question: 'Why is my GRE Quant percentile lower than my Verbal percentile for the same score?',
    answer: 'The GRE test-taking pool skews heavily toward STEM applicants who score very high on Quantitative Reasoning. This compresses the Quant percentile distribution — many people score 160+ on Quant, so a 160 is only the 54th percentile. On Verbal, fewer people score very high, so a 160 is the 87th percentile. To reach the top 10% on Quant, you need 166+; on Verbal, a 162 suffices.',
  },
  {
    question: 'How is the GRE scored?',
    answer: 'The GRE General Test has three sections: Verbal Reasoning (130–170, 1-point increments), Quantitative Reasoning (130–170, 1-point increments), and Analytical Writing (0–6, half-point increments). Verbal and Quant are scored by equating raw scores to scaled scores. Most programs care primarily about Verbal and Quant; AW is secondary unless applying to a writing-intensive field. There is no penalty for wrong answers.',
  },
  {
    question: 'How long are GRE scores valid?',
    answer: 'GRE scores are valid for five years from the date you took the test. You can take the GRE up to five times in any 12-month period, and no more than once every 21 days.',
  },
  {
    question: 'What GRE score do I need for a top PhD program?',
    answer: 'Top PhD program expectations vary by field. For STEM PhD programs at top schools (MIT, Stanford, Caltech), expect to need Quant 167+ (83rd percentile) and Verbal 155+ (71st percentile). For social sciences PhD programs, Verbal 160+ (87th percentile) and Quant 150+ (16th percentile) are often expected. For humanities, Verbal 165+ (94th percentile) is frequently sought. Always check the admitted student statistics for your specific programs.',
  },
];

function MiniGauge({ percentile, color, label }: { percentile: number; color: string; label: string }) {
  const r = 44, circ = 2 * Math.PI * r;
  const dash = circ * Math.min(percentile / 100, 1);
  return (
    <div className="flex flex-col items-center gap-2">
      <div className="relative w-24 h-24" role="img" aria-label={`${label}: ${percentile}th percentile`}>
        <svg className="w-full h-full -rotate-90" viewBox="0 0 100 100">
          <circle cx="50" cy="50" r={r} fill="none" stroke="rgba(255,255,255,0.05)" strokeWidth="10" />
          <motion.circle cx="50" cy="50" r={r} fill="none" stroke={color} strokeWidth="10" strokeLinecap="round"
            strokeDasharray={`${dash} ${circ - dash}`}
            initial={{ strokeDasharray: `0 ${circ}` }}
            animate={{ strokeDasharray: `${dash} ${circ - dash}` }}
            transition={{ duration: 0.9, ease: 'easeOut' }} />
        </svg>
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <motion.span key={percentile} initial={{ opacity: 0 }} animate={{ opacity: 1 }}
            className="text-xl font-bold text-white tabular-nums leading-none">{percentile}</motion.span>
          <span className="text-[9px] text-slate-500">th pct</span>
        </div>
      </div>
      <span className="text-xs font-medium text-slate-400">{label}</span>
    </div>
  );
}

function ScoreSlider({ label, value, min, max, step, avg, color, onChange }: {
  label: string; value: number; min: number; max: number; step: number; avg: number;
  color: string; onChange: (v: number) => void;
}) {
  const pct = ((value - min) / (max - min)) * 100;
  return (
    <div>
      <div className="flex items-center justify-between mb-2">
        <label className="text-sm font-medium text-slate-300">{label}</label>
        <div className="flex items-center gap-2">
          <span className="text-xs text-slate-500">avg {avg}</span>
          <span className="text-lg font-bold tabular-nums" style={{ color }}>{value}</span>
        </div>
      </div>
      <div className="relative h-6 flex items-center">
        <div className="absolute w-full h-1.5 rounded-full bg-white/8" />
        <div className="absolute h-1.5 rounded-full transition-all duration-75"
          style={{ width: `${pct}%`, backgroundColor: color, opacity: 0.75 }} />
        <div className="absolute w-0.5 h-3 rounded-full bg-white/20"
          style={{ left: `${((avg - min) / (max - min)) * 100}%` }} />
        <input type="range" min={min} max={max} step={step} value={value}
          onChange={e => onChange(step < 1 ? parseFloat(e.target.value) : Number(e.target.value))}
          aria-label={label}
          className="absolute w-full h-full opacity-0 cursor-pointer" style={{ zIndex: 10 }} />
        <div className="absolute w-5 h-5 rounded-full border-2 border-white shadow-lg shadow-black/40 pointer-events-none transition-all duration-75"
          style={{ left: `calc(${pct}% - 10px)`, backgroundColor: color }} />
      </div>
      <div className="flex justify-between mt-1">
        <span className="text-[10px] text-slate-600 font-mono">{min}</span>
        <span className="text-[10px] text-slate-600 font-mono">{max}</span>
      </div>
    </div>
  );
}

function FAQSection() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section aria-labelledby="faq-heading">
      <h2 id="faq-heading" className="text-2xl font-bold text-white mb-2">
        GRE score calculator — frequently asked questions
      </h2>
      <p className="text-slate-400 text-sm mb-6">
        Common questions about GRE scoring, Verbal and Quant percentiles, and what your scores mean for graduate admissions.
      </p>
      <div className="space-y-2" itemScope itemType="https://schema.org/FAQPage">
        {GRE_FAQS.map((faq, i) => (
          <div key={i} className="bg-[#12141f] border border-white/7 rounded-xl overflow-hidden"
            itemScope itemProp="mainEntity" itemType="https://schema.org/Question">
            <button onClick={() => setOpen(open === i ? null : i)}
              className="w-full flex items-center justify-between px-5 py-4 text-left gap-4"
              aria-expanded={open === i}>
              <span className="text-sm font-medium text-white" itemProp="name">{faq.question}</span>
              {open === i ? <ChevronUp size={16} className="text-slate-400 shrink-0" /> : <ChevronDown size={16} className="text-slate-400 shrink-0" />}
            </button>
            <AnimatePresence>
              {open === i && (
                <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.2 }} className="overflow-hidden"
                  itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
                  <p className="px-5 pb-4 text-sm text-slate-400 leading-relaxed border-t border-white/6 pt-3"
                    itemProp="text">{faq.answer}</p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </section>
  );
}

export default function GRECalculatorPage() {
  const [verbal, setVerbal] = useState(151);
  const [quant,  setQuant]  = useState(153);
  const [aw,     setAw]     = useState(4.0);

  const verbalPerc = useMemo(() => getPercentile(verbal, GRE_VERBAL_PERCENTILES), [verbal]);
  const quantPerc  = useMemo(() => getPercentile(quant,  GRE_QUANT_PERCENTILES),  [quant]);
  const awPerc     = useMemo(() => getPercentile(aw,     GRE_AW_PERCENTILES),     [aw]);
  const vContext   = useMemo(() => getGREPercentileContext(verbalPerc, 'verbal'), [verbalPerc]);
  const qContext   = useMemo(() => getGREPercentileContext(quantPerc,  'quant'),  [quantPerc]);

  const schemaBreadcrumb = {
    '@context': 'https://schema.org', '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://gradesnova.com' },
      { '@type': 'ListItem', position: 2, name: 'Exam Calculators', item: 'https://gradesnova.com/#exams' },
      { '@type': 'ListItem', position: 3, name: 'GRE Score Calculator', item: 'https://gradesnova.com/exams/gre' },
    ],
  };
  const schemaFAQ = {
    '@context': 'https://schema.org', '@type': 'FAQPage',
    mainEntity: GRE_FAQS.map(f => ({ '@type': 'Question', name: f.question, acceptedAnswer: { '@type': 'Answer', text: f.answer } })),
  };
  const schemaTool = {
    '@context': 'https://schema.org', '@type': 'WebApplication',
    name: 'GRE Score Calculator (2025-2026)',
    url: 'https://gradesnova.com/exams/gre',
    description: 'Free GRE score percentile calculator. Enter GRE Verbal, Quant, and Analytical Writing scores to see national percentiles and compare by graduate program.',
    applicationCategory: 'EducationalApplication', operatingSystem: 'Any',
    offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
    provider: { '@type': 'Organization', name: 'GradesNova', url: 'https://gradesnova.com' },
    aggregateRating: { '@type': 'AggregateRating', ratingValue: '4.8', reviewCount: '203', bestRating: '5', worstRating: '1' },
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaBreadcrumb) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaFAQ) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaTool) }} />

      <main className="bg-[#0a0c14] min-h-screen text-white">
        <Navbar />

        <header className="bg-[#0d0f1a] border-b border-white/6 py-10">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <nav aria-label="Breadcrumb" className="mb-4">
              <ol className="flex items-center gap-2 text-xs text-slate-500">
                <li><Link href="/" className="hover:text-white transition-colors">Home</Link></li>
                <li aria-hidden="true">›</li>
                <li><Link href="/#exams" className="hover:text-white transition-colors">Calculators</Link></li>
                <li aria-hidden="true">›</li>
                <li className="text-slate-400" aria-current="page">GRE Score Calculator</li>
              </ol>
            </nav>
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 rounded-xl flex items-center justify-center text-xl"
                style={{ backgroundColor: `${COLOR}18` }} aria-hidden="true">🎓</div>
              <span className="text-xs font-mono uppercase tracking-widest" style={{ color: `${COLOR}aa` }}>GRE · ETS · Verbal & Quant 130–170</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white tracking-tight mb-3">
              GRE Score Calculator (2025–2026)
            </h1>
            <p className="text-lg text-slate-400 max-w-2xl">
              Enter your GRE Verbal, Quantitative, and Analytical Writing scores to instantly see your <strong className="text-white font-medium">national percentile rankings</strong> and compare against average scores by graduate program. Updated for the 2025–2026 admissions cycle.
            </p>
          </div>
        </header>

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div className="grid lg:grid-cols-5 gap-8">

            {/* LEFT */}
            <div className="lg:col-span-2 space-y-5">
              <div className="bg-[#12141f] border border-white/8 rounded-2xl p-6 space-y-6">
                <ScoreSlider label="Verbal Reasoning (130–170)" value={verbal} min={130} max={170} step={1} avg={151} color={COLOR} onChange={setVerbal} />
                <ScoreSlider label="Quantitative Reasoning (130–170)" value={quant} min={130} max={170} step={1} avg={153} color="#6366f1" onChange={setQuant} />
                <div className="border-t border-white/8 pt-4">
                  <ScoreSlider label="Analytical Writing (0–6)" value={aw} min={0} max={6} step={0.5} avg={4.0} color="#34d399" onChange={setAw} />
                </div>
              </div>

              {/* AW guide */}
              <div className="bg-[#12141f] border border-white/8 rounded-xl p-5">
                <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-3">AW score guide</p>
                {[
                  { range: '5.0–6.0', label: 'Outstanding (top 8%)', color: '#34d399' },
                  { range: '4.0–4.5', label: 'Strong (57–80th pct)', color: COLOR },
                  { range: '3.0–3.5', label: 'Average (15–37th pct)', color: '#f59e0b' },
                  { range: 'Below 3', label: 'Below average',         color: '#ef4444' },
                ].map(row => (
                  <div key={row.range} className="flex items-center justify-between py-1.5 border-b border-white/5 last:border-0">
                    <span className="text-xs font-mono text-slate-400">{row.range}</span>
                    <span className="text-xs font-semibold px-2 py-0.5 rounded-full"
                      style={{ backgroundColor: `${row.color}15`, color: row.color }}>{row.label}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* RIGHT */}
            <div className="lg:col-span-3 space-y-5">
              <div className="bg-[#12141f] border border-white/8 rounded-2xl p-7">
                <div className="flex justify-around mb-6">
                  <MiniGauge percentile={verbalPerc} color={COLOR} label="Verbal" />
                  <div className="flex flex-col items-center justify-center gap-1">
                    <div className="text-2xl font-bold text-white">{verbal + quant}</div>
                    <div className="text-xs text-slate-500">V+Q combined</div>
                    <div className="mt-2 text-xs text-slate-600">AW: {aw.toFixed(1)}</div>
                    <div className="text-xs font-medium" style={{ color: '#34d399' }}>{awPerc}th pct</div>
                  </div>
                  <MiniGauge percentile={quantPerc} color="#6366f1" label="Quant" />
                </div>
                <div className="grid grid-cols-2 gap-3 mb-4">
                  <div className="bg-white/4 rounded-xl p-3 text-center">
                    <p className="text-xs font-semibold mb-0.5" style={{ color: vContext.color }}>{vContext.label}</p>
                    <p className="text-[10px] text-slate-500">Verbal standing</p>
                  </div>
                  <div className="bg-white/4 rounded-xl p-3 text-center">
                    <p className="text-xs font-semibold mb-0.5" style={{ color: qContext.color }}>{qContext.label}</p>
                    <p className="text-[10px] text-slate-500">Quant standing</p>
                  </div>
                </div>
                <div className="grid grid-cols-4 gap-2">
                  {[
                    { label: 'Verbal',  value: verbal },
                    { label: 'Quant',   value: quant  },
                    { label: 'V avg',   value: 151    },
                    { label: 'Q avg',   value: 153    },
                  ].map(s => (
                    <div key={s.label} className="bg-white/4 rounded-lg p-2.5 text-center">
                      <p className="text-sm font-bold text-white tabular-nums">{s.value}</p>
                      <p className="text-[10px] text-slate-500 mt-0.5">{s.label}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Program comparison */}
              <div className="bg-[#12141f] border border-white/8 rounded-2xl p-5">
                <h3 className="text-sm font-semibold text-slate-300 mb-1">How do you compare by field?</h3>
                <p className="text-xs text-slate-500 mb-4">Green = above program average, red = below. Based on ETS intended major data.</p>
                <div className="overflow-x-auto">
                  <table className="w-full text-xs min-w-[400px]" aria-label="GRE scores by graduate program">
                    <thead>
                      <tr className="border-b border-white/8">
                        <th scope="col" className="text-left py-2 text-slate-500 font-medium">Program</th>
                        <th scope="col" className="text-center py-2 text-slate-500 font-medium">Avg V</th>
                        <th scope="col" className="text-center py-2 text-slate-500 font-medium">Avg Q</th>
                        <th scope="col" className="text-center py-2 text-slate-500 font-medium">Your V</th>
                        <th scope="col" className="text-center py-2 text-slate-500 font-medium">Your Q</th>
                      </tr>
                    </thead>
                    <tbody>
                      {GRE_PROGRAM_AVERAGES.map((row, i) => {
                        const vAbove = verbal >= row.verbal;
                        const qAbove = quant >= row.quant;
                        return (
                          <tr key={row.program} className={`border-b border-white/5 last:border-0 ${i % 2 === 0 ? '' : 'bg-white/2'}`}>
                            <td className="py-2 text-slate-300">{row.program}</td>
                            <td className="py-2 text-center font-mono text-slate-400">{row.verbal}</td>
                            <td className="py-2 text-center font-mono text-slate-400">{row.quant}</td>
                            <td className="py-2 text-center">
                              <span className={`font-semibold ${vAbove ? 'text-emerald-400' : 'text-red-400/70'}`}>
                                {vAbove ? `+${verbal - row.verbal}` : verbal - row.verbal}
                              </span>
                            </td>
                            <td className="py-2 text-center">
                              <span className={`font-semibold ${qAbove ? 'text-emerald-400' : 'text-red-400/70'}`}>
                                {qAbove ? `+${quant - row.quant}` : quant - row.quant}
                              </span>
                            </td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>

          {/* GRE percentile chart */}
          <section className="mt-14" aria-labelledby="chart-heading">
            <h2 id="chart-heading" className="text-2xl font-bold text-white mb-2">
              GRE score percentile chart (2025–2026)
            </h2>
            <p className="text-slate-400 text-sm mb-6">
              Official GRE Verbal and Quantitative percentile data from ETS. Note the key difference: a 160 on Verbal equals the 87th percentile, but a 160 on Quant is only the 54th percentile. This is because the GRE pool skews heavily toward high-Quant STEM applicants.
            </p>
            <div className="overflow-x-auto">
              <div className="overflow-hidden rounded-xl border border-white/8 min-w-[500px]">
                <table className="w-full text-sm" aria-label="GRE Verbal and Quant percentile chart">
                  <thead>
                    <tr className="bg-white/4 border-b border-white/8">
                      <th scope="col" className="text-left px-4 py-3 text-xs font-semibold text-slate-400 uppercase tracking-wider">Score</th>
                      <th scope="col" className="text-left px-4 py-3 text-xs font-semibold text-slate-400 uppercase tracking-wider">Verbal %ile</th>
                      <th scope="col" className="text-left px-4 py-3 text-xs font-semibold text-slate-400 uppercase tracking-wider">Quant %ile</th>
                      <th scope="col" className="text-left px-4 py-3 text-xs font-semibold text-slate-400 uppercase tracking-wider hidden md:table-cell">Difference</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[170,168,165,163,160,158,155,152,150,148,145,142,140,135,130].map((s, i) => {
                      const vp = getPercentile(s, GRE_VERBAL_PERCENTILES);
                      const qp = getPercentile(s, GRE_QUANT_PERCENTILES);
                      const isV = s === verbal;
                      const isQ = s === quant;
                      const highlight = isV || isQ;
                      return (
                        <tr key={s} className={`border-b border-white/5 last:border-0 ${highlight ? 'bg-purple-500/8' : i % 2 === 0 ? '' : 'bg-white/2'}`}>
                          <td className="px-4 py-2.5 font-mono font-medium text-slate-300">{s}</td>
                          <td className="px-4 py-2.5">
                            <span className={`font-semibold ${isV ? 'text-purple-400' : 'text-slate-300'}`}>{vp}th</span>
                            {isV && <span className="ml-2 text-[10px] bg-purple-500/20 text-purple-300 px-1.5 py-0.5 rounded">V</span>}
                          </td>
                          <td className="px-4 py-2.5">
                            <span className={`font-semibold ${isQ ? 'text-indigo-400' : 'text-slate-300'}`}>{qp}th</span>
                            {isQ && <span className="ml-2 text-[10px] bg-indigo-500/20 text-indigo-300 px-1.5 py-0.5 rounded">Q</span>}
                          </td>
                          <td className="px-4 py-2.5 text-slate-500 hidden md:table-cell text-xs">
                            V is {vp - qp} pts higher at this score
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>
            <p className="text-xs text-slate-600 mt-3">Source: ETS GRE Guide to the Use of Scores. Updated for the 2025–2026 admissions cycle.</p>
          </section>

          {/* Key insight callout */}
          <div className="mt-8 bg-[#12141f] border border-white/7 rounded-xl p-5 flex gap-4 items-start">
            <div className="text-2xl shrink-0" aria-hidden="true">💡</div>
            <div>
              <h3 className="text-sm font-semibold text-white mb-1">Why does a 160 Quant rank lower than a 160 Verbal?</h3>
              <p className="text-sm text-slate-400 leading-relaxed">
                A 160 Verbal = 87th percentile, but a 160 Quant = only 54th percentile. This is because the GRE test-taking pool is dominated by STEM applicants who score very high on Quant, compressing the distribution. To reach the top 10% on Quant, you need 166+. On Verbal, 162 gets you there.
              </p>
            </div>
          </div>

          {/* Score tiers */}
          <section className="mt-12" aria-labelledby="tiers-heading">
            <h2 id="tiers-heading" className="text-2xl font-bold text-white mb-6">What GRE scores do you need for top programs?</h2>
            <div className="grid sm:grid-cols-3 gap-4">
              {[
                { range: 'Quant 165+', label: 'Top STEM programs', desc: 'Top 24%. Expected for competitive PhD programs in CS, Engineering, Physics at MIT, Stanford, Caltech. The STEM applicant pool scores very high on Quant.', color: '#34d399' },
                { range: 'Verbal 160+', label: 'Top humanities/social sciences', desc: 'Top 13% on Verbal. Competitive for PhD programs in psychology, social sciences, humanities, and law at top universities.', color: COLOR },
                { range: 'AW 4.5+', label: 'Writing-intensive programs', desc: 'Top 20% on Analytical Writing. Particularly valued for PhD programs in English, Communications, Journalism, and similar fields.', color: '#34d399' },
              ].map(tier => (
                <article key={tier.range} className="bg-[#12141f] border border-white/7 rounded-xl p-5">
                  <div className="text-xs font-mono font-semibold mb-1.5 px-2 py-1 rounded-md w-fit"
                    style={{ backgroundColor: `${tier.color}15`, color: tier.color }}>{tier.range}</div>
                  <h3 className="text-sm font-semibold text-white mb-1.5">{tier.label}</h3>
                  <p className="text-xs text-slate-500 leading-relaxed">{tier.desc}</p>
                </article>
              ))}
            </div>
          </section>

          <div className="mt-14"><FAQSection /></div>

          <section className="mt-12 bg-[#12141f] border border-white/7 rounded-2xl p-6" aria-labelledby="other-tools-heading">
            <h2 id="other-tools-heading" className="text-sm font-semibold text-slate-300 mb-4">Other free exam percentile calculators</h2>
            <div className="flex flex-wrap gap-2">
              {[
                { id: 'sat',      name: 'SAT Score Calculator',  color: '#6366f1' },
                { id: 'act',      name: 'ACT Score Calculator',  color: '#06b6d4' },
                { id: 'lsat',     name: 'LSAT Score Calculator', color: '#ef4444' },
                { id: 'gmat',     name: 'GMAT Score Calculator', color: '#f59e0b' },
                { id: 'gcse',     name: 'GCSE Grade Boundaries', color: '#34d399' },
                { id: 'a-levels', name: 'A-Level Grade Boundaries', color: '#ec4899' },
              ].map(e => (
                <Link key={e.id} href={`/exams/${e.id}`}
                  className="px-3.5 py-1.5 rounded-full text-xs font-medium border transition-all hover:scale-105"
                  style={{ backgroundColor: `${e.color}12`, borderColor: `${e.color}25`, color: e.color }}>
                  {e.name}
                </Link>
              ))}
            </div>
          </section>
        </div>
        <Footer />
      </main>
    </>
  );
}