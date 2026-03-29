'use client';

import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import {
  SAT_COMPOSITE_PERCENTILES,
  SAT_MATH_PERCENTILES,
  SAT_EBRW_PERCENTILES,
  getPercentile,
  getPercentileContext,
} from '@/lib/sat-data';
import { ChevronDown, ChevronUp } from 'lucide-react';
import Link from 'next/link';

const COLOR = '#6366f1';

const SAT_FAQS = [
  {
    question: 'What is a good SAT score for the 2025–2026 cycle?',
    answer: 'A good SAT score depends on your target colleges. The national average SAT score is 1050. Scores above 1200 (74th percentile) are above average. A score of 1400 puts you in the top 6% nationally (94th percentile), which is competitive at selective universities. For Ivy League and highly selective schools, you typically need 1500 or above (97th+ percentile).',
  },
  {
    question: 'What percentile is a 1200 SAT score?',
    answer: 'A score of 1200 on the SAT is approximately the 74th percentile, meaning you scored higher than about 74% of all SAT test takers nationally. This is a solid above-average score that is competitive at many four-year universities.',
  },
  {
    question: 'What percentile is a 1400 SAT score?',
    answer: 'A score of 1400 on the SAT is approximately the 94th percentile, placing you in the top 6% of all SAT test takers. This is a strong score that demonstrates exceptional academic ability and is competitive at highly selective universities.',
  },
  {
    question: 'What percentile is a 1500 SAT score?',
    answer: 'A score of 1500 on the SAT is approximately the 97th percentile, meaning you scored higher than 97% of all test takers. This is an excellent score that is competitive at the most selective universities, including Ivy League schools.',
  },
  {
    question: 'What percentile is a 1000 SAT score?',
    answer: 'A score of 1000 on the SAT is approximately the 34th percentile, meaning about 34% of test takers scored at or below this level. This is a below-average score (national average is 1050), but it is sufficient for admission to many community colleges and less selective four-year schools.',
  },
  {
    question: 'How is the SAT scored?',
    answer: 'The SAT is scored on a scale of 400 to 1600. It has two sections: Math (scored 200–800) and Evidence-Based Reading and Writing, or EBRW (scored 200–800). The two section scores are added together to produce your composite score. There is no penalty for wrong answers on the current SAT format.',
  },
  {
    question: 'How many times can I take the SAT?',
    answer: 'There is no official limit on how many times you can take the SAT. Most students take it 2–3 times. Many colleges consider your highest single-sitting score, and some use "superscoring" — taking the highest section scores from multiple test dates. The College Board offers the SAT multiple times per year, typically in March, May, August, October, November, and December.',
  },
  {
    question: 'What SAT score do I need for a scholarship?',
    answer: 'Scholarship thresholds vary widely by institution and program. National Merit Scholarships typically require a selection index of 207–222 depending on your state, which corresponds to very high SAT scores (roughly 1400–1520+). Many universities offer merit scholarships starting at scores around 1200–1300.',
  },
  {
    question: 'What is the difference between the SAT and ACT?',
    answer: 'Both the SAT and ACT are standardized tests accepted by virtually all US colleges. The SAT (400–1600 scale) focuses more on data analysis and has no Science section. The ACT (1–36 scale) includes a Science section and its Math is generally considered more straightforward. Most students perform similarly on both — try a practice test for each to see which suits you better.',
  },
  {
    question: 'What is the average SAT score?',
    answer: 'The national average SAT composite score is approximately 1050 (roughly the 43rd percentile). The average Math section score is about 520 and the average EBRW score is about 530. Average scores vary significantly by demographic group, state, and intended major.',
  },
];

function PercentileGauge({ percentile, color }: { percentile: number; color: string }) {
  const r = 72, circ = 2 * Math.PI * r;
  const dash = circ * Math.min(percentile / 100, 1);
  return (
    <div className="relative w-44 h-44 mx-auto" role="img" aria-label={`${percentile}th percentile`}>
      <svg className="w-full h-full -rotate-90" viewBox="0 0 160 160">
        <circle cx="80" cy="80" r={r} fill="none" stroke="rgba(255,255,255,0.05)" strokeWidth="14" />
        <motion.circle cx="80" cy="80" r={r} fill="none" stroke={color} strokeWidth="14" strokeLinecap="round"
          strokeDasharray={`${dash} ${circ - dash}`}
          initial={{ strokeDasharray: `0 ${circ}` }}
          animate={{ strokeDasharray: `${dash} ${circ - dash}` }}
          transition={{ duration: 1.0, ease: 'easeOut' }} />
      </svg>
      <div className="absolute inset-0 flex flex-col items-center justify-center gap-0.5">
        <motion.span key={percentile} initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }}
          className="text-4xl font-bold text-white tabular-nums">
          {percentile}<span className="text-lg text-slate-400 font-normal">th</span>
        </motion.span>
        <span className="text-xs text-slate-500">percentile</span>
      </div>
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
          <span className="text-base font-bold tabular-nums" style={{ color }}>{value}</span>
        </div>
      </div>
      <div className="relative h-6 flex items-center">
        <div className="absolute w-full h-1.5 rounded-full bg-white/8" />
        <div className="absolute h-1.5 rounded-full transition-all duration-75"
          style={{ width: `${pct}%`, backgroundColor: color, opacity: 0.7 }} />
        <div className="absolute w-0.5 h-3 rounded-full bg-white/20"
          style={{ left: `${((avg - min) / (max - min)) * 100}%` }} />
        <input type="range" min={min} max={max} step={step} value={value}
          onChange={e => onChange(Number(e.target.value))}
          aria-label={label}
          className="absolute w-full h-full opacity-0 cursor-pointer" style={{ zIndex: 10 }} />
        <div className="absolute w-5 h-5 rounded-full border-2 border-white shadow-lg shadow-black/40 transition-all duration-75 pointer-events-none"
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
        SAT score calculator — frequently asked questions
      </h2>
      <p className="text-slate-400 text-sm mb-6">
        Common questions about SAT scoring, percentiles, and what your score means for college admissions.
      </p>
      <div className="space-y-2">
        {SAT_FAQS.map((faq, i) => (
          <div key={i} className="bg-[#12141f] border border-white/7 rounded-xl overflow-hidden">
            <button onClick={() => setOpen(open === i ? null : i)}
              className="w-full flex items-center justify-between px-5 py-4 text-left gap-4"
              aria-expanded={open === i}>
              <span className="text-sm font-medium text-white">{faq.question}</span>
              {open === i ? <ChevronUp size={16} className="text-slate-400 shrink-0" /> : <ChevronDown size={16} className="text-slate-400 shrink-0" />}
            </button>
            <div
              className="overflow-hidden transition-all duration-200"
              style={{ maxHeight: open === i ? '600px' : '0px' }}>
              <p className="px-5 pb-4 text-sm text-slate-400 leading-relaxed border-t border-white/6 pt-3">
                {faq.answer}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default function SATCalculatorPage() {
  const [composite, setComposite] = useState(1200);
  const [math,      setMath]      = useState(620);
  const [ebrw,      setEbrw]      = useState(580);
  const [activeTab, setActiveTab] = useState<'composite' | 'sections'>('composite');

  const compositeScore    = activeTab === 'composite' ? composite : math + ebrw;
  const compositePerc     = useMemo(() => getPercentile(compositeScore, SAT_COMPOSITE_PERCENTILES), [compositeScore]);
  const mathPerc          = useMemo(() => getPercentile(math, SAT_MATH_PERCENTILES), [math]);
  const ebrwPerc          = useMemo(() => getPercentile(ebrw, SAT_EBRW_PERCENTILES), [ebrw]);
  const context           = useMemo(() => getPercentileContext(compositePerc), [compositePerc]);

  const scoreBenchmarks = [
    { score: 1600, pct: getPercentile(1600, SAT_COMPOSITE_PERCENTILES), label: 'Perfect score' },
    { score: 1500, pct: getPercentile(1500, SAT_COMPOSITE_PERCENTILES), label: 'Ivy-competitive' },
    { score: 1400, pct: getPercentile(1400, SAT_COMPOSITE_PERCENTILES), label: 'Top 6%' },
    { score: 1300, pct: getPercentile(1300, SAT_COMPOSITE_PERCENTILES), label: 'Top 18%' },
    { score: 1200, pct: getPercentile(1200, SAT_COMPOSITE_PERCENTILES), label: 'Above average' },
    { score: 1050, pct: getPercentile(1050, SAT_COMPOSITE_PERCENTILES), label: 'National average' },
    { score: 900,  pct: getPercentile(900,  SAT_COMPOSITE_PERCENTILES), label: 'Below average' },
  ];

  const schemaBreadcrumb = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://gradesnova.com' },
      { '@type': 'ListItem', position: 2, name: 'Exam Calculators', item: 'https://gradesnova.com/#exams' },
      { '@type': 'ListItem', position: 3, name: 'SAT Score Calculator', item: 'https://gradesnova.com/exams/sat' },
    ],
  };

  const schemaFAQ = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: SAT_FAQS.map(f => ({
      '@type': 'Question',
      name: f.question,
      acceptedAnswer: { '@type': 'Answer', text: f.answer },
    })),
  };

  const schemaTool = {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    name: 'SAT Score Calculator (2025–2026)',
    url: 'https://gradesnova.com/exams/sat',
    description: 'Free SAT score percentile calculator. Enter your SAT composite, Math, or EBRW score to instantly see your national percentile ranking for the 2025-2026 admissions cycle.',
    applicationCategory: 'EducationalApplication',
    operatingSystem: 'Any',
    browserRequirements: 'Requires JavaScript',
    offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
    provider: { '@type': 'Organization', name: 'GradesNova', url: 'https://gradesnova.com' },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.8',
      reviewCount: '312',
      bestRating: '5',
      worstRating: '1',
    },
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaBreadcrumb) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaFAQ) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaTool) }} />

      <main className="bg-[#0a0c14] min-h-screen">
        <Navbar />

        <header className="bg-[#0d0f1a] border-b border-white/6 py-10">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <nav aria-label="Breadcrumb" className="mb-4">
              <ol className="flex items-center gap-2 text-xs text-slate-500">
                <li><Link href="/" className="hover:text-white transition-colors">Home</Link></li>
                <li aria-hidden="true">›</li>
                <li><Link href="/#exams" className="hover:text-white transition-colors">Calculators</Link></li>
                <li aria-hidden="true">›</li>
                <li className="text-slate-400" aria-current="page">SAT Score Calculator</li>
              </ol>
            </nav>

            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 rounded-xl bg-indigo-500/15 flex items-center justify-center text-xl" aria-hidden="true">📐</div>
              <span className="text-xs font-mono text-indigo-400/70 uppercase tracking-widest">SAT · College Board · 400–1600</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white tracking-tight mb-3">
              SAT Score Calculator (2025–2026)
            </h1>
            <p className="text-lg text-slate-400 max-w-2xl">
              Enter your SAT score to instantly see your <strong className="text-white font-medium">national percentile ranking</strong> and exactly how you compare among all test takers. Updated for the 2025–2026 admissions cycle using official College Board data.
            </p>
          </div>
        </header>

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div className="grid lg:grid-cols-5 gap-8">

            {/* LEFT */}
            <div className="lg:col-span-2 space-y-5">
              <div className="flex bg-white/5 rounded-xl p-1 gap-1" role="tablist" aria-label="Score input mode">
                {(['composite', 'sections'] as const).map(tab => (
                  <button key={tab} role="tab" aria-selected={activeTab === tab}
                    onClick={() => setActiveTab(tab)}
                    className={`flex-1 py-2 rounded-lg text-sm font-medium transition-all ${activeTab === tab ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-600/25' : 'text-slate-400 hover:text-white'}`}>
                    {tab === 'composite' ? 'Composite' : 'By section'}
                  </button>
                ))}
              </div>

              <div className="bg-[#12141f] border border-white/8 rounded-2xl p-6 space-y-6">
                {activeTab === 'composite' ? (
                  <ScoreSlider label="SAT composite score (400–1600)" value={composite} min={400} max={1600} step={10} avg={1050} color={COLOR}
                    onChange={v => { setComposite(v); setMath(Math.round(v / 2 / 10) * 10); setEbrw(v - Math.round(v / 2 / 10) * 10); }} />
                ) : (
                  <>
                    <ScoreSlider label="Math (200–800)" value={math} min={200} max={800} step={10} avg={520} color={COLOR} onChange={setMath} />
                    <ScoreSlider label="EBRW (200–800)" value={ebrw} min={200} max={800} step={10} avg={530} color="#a855f7" onChange={setEbrw} />
                    <div className="border-t border-white/8 pt-4 flex items-center justify-between">
                      <span className="text-sm text-slate-400">Composite total</span>
                      <span className="text-xl font-bold text-white">{math + ebrw}</span>
                    </div>
                  </>
                )}
              </div>

              <div className="bg-[#12141f] border border-white/8 rounded-xl p-5">
                <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-3">Score benchmarks</p>
                <div className="space-y-2">
                  {scoreBenchmarks.map(b => (
                    <div key={b.score} className={`flex items-center justify-between py-1 ${compositeScore === b.score ? 'opacity-100' : 'opacity-60'}`}>
                      <div>
                        <span className="text-xs font-mono text-white">{b.score}</span>
                        <span className="text-[10px] text-slate-500 ml-2">{b.label}</span>
                      </div>
                      <span className="text-xs font-semibold text-slate-300">{b.pct}th</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* RIGHT */}
            <div className="lg:col-span-3 space-y-5">
              <motion.div key={compositePerc} initial={{ opacity: 0.8 }} animate={{ opacity: 1 }}
                className="bg-[#12141f] border border-white/8 rounded-2xl p-7">
                <PercentileGauge percentile={compositePerc} color={context.color} />
                <div className="text-center mt-5 mb-6">
                  <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-sm font-semibold border mb-2"
                    style={{ backgroundColor: `${context.color}15`, borderColor: `${context.color}30`, color: context.color }}>
                    {context.label}
                  </div>
                  <p className="text-slate-400 text-sm">{context.description}</p>
                </div>
                <div className="grid grid-cols-3 gap-3">
                  {[
                    { label: 'Your score',   value: compositeScore },
                    { label: 'National avg', value: 1050 },
                    { label: 'Percentile',   value: `${compositePerc}th` },
                  ].map(s => (
                    <div key={s.label} className="bg-white/4 rounded-xl p-3 text-center">
                      <p className="text-base font-bold text-white tabular-nums">{s.value}</p>
                      <p className="text-[10px] text-slate-500 mt-0.5">{s.label}</p>
                    </div>
                  ))}
                </div>
              </motion.div>

              <AnimatePresence>
                {activeTab === 'sections' && (
                  <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 10 }}
                    className="bg-[#12141f] border border-white/8 rounded-2xl p-6">
                    <h3 className="text-sm font-semibold text-slate-300 mb-4">Section percentiles</h3>
                    <div className="space-y-4">
                      {[
                        { label: 'Math',  score: math,  pct: mathPerc,  color: COLOR },
                        { label: 'EBRW', score: ebrw,  pct: ebrwPerc,  color: '#a855f7' },
                      ].map(s => (
                        <div key={s.label} className="flex items-center gap-4">
                          <div className="w-12 shrink-0">
                            <p className="text-xs text-slate-500">{s.label}</p>
                            <p className="text-sm font-bold text-white">{s.score}</p>
                          </div>
                          <div className="flex-1">
                            <div className="h-2 bg-white/8 rounded-full overflow-hidden">
                              <motion.div className="h-full rounded-full" style={{ backgroundColor: s.color }}
                                initial={{ width: 0 }} animate={{ width: `${s.pct}%` }} transition={{ duration: 0.6 }} />
                            </div>
                          </div>
                          <div className="w-12 text-right shrink-0">
                            <p className="text-sm font-bold tabular-nums" style={{ color: s.color }}>{s.pct}th</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

          <section className="mt-14" aria-labelledby="chart-heading">
            <h2 id="chart-heading" className="text-2xl font-bold text-white mb-2">
              SAT score percentile chart (2025–2026)
            </h2>
            <p className="text-slate-400 text-sm mb-6">
              Official SAT percentile data from the College Board. The table below shows what percentile each SAT composite score corresponds to during the 2025–2026 admissions cycle.
            </p>
            <div className="overflow-hidden rounded-xl border border-white/8">
              <table className="w-full text-sm" aria-label="SAT score percentile chart 2025-2026">
                <thead>
                  <tr className="bg-white/4 border-b border-white/8">
                    <th scope="col" className="text-left px-4 py-3 text-xs font-semibold text-slate-400 uppercase tracking-wider">SAT score</th>
                    <th scope="col" className="text-left px-4 py-3 text-xs font-semibold text-slate-400 uppercase tracking-wider">Percentile</th>
                    <th scope="col" className="text-left px-4 py-3 text-xs font-semibold text-slate-400 uppercase tracking-wider hidden sm:table-cell">Students beaten</th>
                    <th scope="col" className="text-left px-4 py-3 text-xs font-semibold text-slate-400 uppercase tracking-wider hidden md:table-cell">Tier</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    [1600,'99','Top 1%','Exceptional'],
                    [1550,'99','Top 1%','Exceptional'],
                    [1500,'97','Top 3%','Outstanding'],
                    [1450,'95','Top 5%','Outstanding'],
                    [1400,'94','Top 6%','Excellent'],
                    [1350,'87','Top 13%','Excellent'],
                    [1300,'82','Top 18%','Above average'],
                    [1250,'76','Top 24%','Above average'],
                    [1200,'74','Top 26%','Above average'],
                    [1150,'60','Top 40%','Average'],
                    [1100,'52','Top 48%','Average'],
                    [1050,'43','Top 57%','Average'],
                    [1000,'34','Top 66%','Below average'],
                    [950,'26','Top 74%','Below average'],
                    [900,'19','Top 81%','Below average'],
                    [800,'7','Top 93%','Needs work'],
                    [700,'2','Top 98%','Needs work'],
                  ].map(([score, pct, beaten, tier], i) => {
                    const isYours = Number(score) === compositeScore;
                    return (
                      <tr key={score} className={`border-b border-white/5 last:border-0 ${isYours ? 'bg-indigo-500/10' : i % 2 === 0 ? '' : 'bg-white/2'}`}>
                        <td className="px-4 py-2.5 font-mono font-medium" style={{ color: isYours ? COLOR : undefined }}>
                          {score}
                          {isYours && <span className="ml-2 text-[10px] bg-indigo-500/20 text-indigo-300 px-1.5 py-0.5 rounded font-sans">your score</span>}
                        </td>
                        <td className="px-4 py-2.5 font-semibold" style={{ color: isYours ? COLOR : 'rgb(226,232,240)' }}>{pct}th</td>
                        <td className="px-4 py-2.5 text-slate-500 hidden sm:table-cell text-xs">{beaten} of test takers</td>
                        <td className="px-4 py-2.5 text-slate-500 hidden md:table-cell text-xs">{tier}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
            <p className="text-xs text-slate-600 mt-3">
              Source: College Board SAT Suite of Assessments Annual Report. Data updated for the 2025–2026 admissions cycle.
            </p>
          </section>

          <section className="mt-12" aria-labelledby="tiers-heading">
            <h2 id="tiers-heading" className="text-2xl font-bold text-white mb-6">
              What does your SAT score mean for college admissions?
            </h2>
            <div className="grid sm:grid-cols-3 gap-4">
              {[
                { range: '1400–1600', label: 'Highly competitive', desc: 'Top 6% nationally. Required for Ivy League, MIT, Stanford, and similarly selective schools. These scores qualify you for merit scholarships at most universities.', color: '#34d399' },
                { range: '1200–1390', label: 'Above average',      desc: 'Top 26–18% nationally. Competitive at hundreds of excellent four-year universities. May qualify for merit aid at less selective schools.', color: COLOR },
                { range: 'Below 1200', label: 'Average to below',  desc: 'Sufficient for many community colleges and less selective four-year schools. Retaking the SAT is worth considering — most students improve 50–100 points with focused prep.', color: '#f59e0b' },
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
                { id: 'act',      name: 'ACT Score Calculator',  color: '#06b6d4' },
                { id: 'gre',      name: 'GRE Score Calculator',  color: '#a855f7' },
                { id: 'gmat',     name: 'GMAT Score Calculator', color: '#f59e0b' },
                { id: 'lsat',     name: 'LSAT Score Calculator', color: '#ef4444' },
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
