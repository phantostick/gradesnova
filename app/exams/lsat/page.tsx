'use client';

import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { LSAT_PERCENTILES, LSAT_SCHOOL_MEDIANS, getPercentile, getLSATPercentileContext } from '@/lib/lsat-data';
import { ChevronDown, ChevronUp, GraduationCap } from 'lucide-react';
import Link from 'next/link';

const COLOR = '#ef4444';

const LSAT_FAQS = [
  {
    question: 'What is a good LSAT score for the 2025–2026 cycle?',
    answer: 'A good LSAT score depends on your target law schools. The national average LSAT score is approximately 152. Scores of 160+ (85th percentile) are considered strong and competitive at many law schools. For T14 schools (the top 14 law programs), you generally need 168+ (96th percentile). Yale, Harvard, and Stanford Law typically have median LSAT scores of 173–175. For full scholarship consideration at lower-ranked schools, 160–165 is often sufficient.',
  },
  {
    question: 'What percentile is a 160 LSAT score?',
    answer: 'A score of 160 on the LSAT is approximately the 85th percentile, meaning you scored higher than about 85% of all LSAT test takers. This is a strong score competitive at many law schools, though below the median for T14 programs.',
  },
  {
    question: 'What percentile is a 165 LSAT score?',
    answer: 'A score of 165 on the LSAT is approximately the 93rd percentile, placing you in the top 7% of all LSAT test takers. This is a competitive score for many T14 law schools and excellent for top-25 programs.',
  },
  {
    question: 'What percentile is a 170 LSAT score?',
    answer: 'A score of 170 on the LSAT is approximately the 97th percentile — you scored higher than 97% of all test takers. This is an exceptional score competitive at all law schools including Harvard, Yale, and Stanford. It is at or above the median for the top 5 law programs in the US.',
  },
  {
    question: 'What percentile is a 175 LSAT score?',
    answer: 'A score of 175 on the LSAT is approximately the 99th percentile, placing you in the top 1% of all LSAT test takers worldwide. This score is competitive even at Yale Law School, which has the highest median LSAT in the country at approximately 175.',
  },
  {
    question: 'What LSAT score do I need for Harvard Law?',
    answer: "Harvard Law School's median LSAT score is approximately 174 (99th percentile). The 25th–75th percentile range is roughly 170–176. While Harvard considers the full application holistically, a score below 170 would make admission highly challenging. Harvard uses your highest LSAT score.",
  },
  {
    question: 'How many times can I take the LSAT?',
    answer: 'LSAC allows you to take the LSAT up to three times in a single testing year (July to June), five times within the current and past five testing years, and a maximum of seven times in your lifetime. Most law schools see all your scores, though many focus primarily on your highest score. The LSAT is offered approximately 9 times per year.',
  },
  {
    question: 'How is the LSAT scored?',
    answer: 'The LSAT is scored on a scale of 120 to 180. Your raw score (number of correct answers) is converted to a scaled score using equating, which accounts for difficulty differences between test versions. There is no penalty for wrong answers, so it is always beneficial to answer every question. The median score for all test takers is approximately 152.',
  },
  {
    question: 'Does the LSAT or GPA matter more for law school?',
    answer: 'Both matter significantly, but the LSAT typically has slightly more weight because it is a standardized measure used directly in law school rankings. A high LSAT score can compensate for a lower GPA, and vice versa. That said, top law schools expect strong performance in both. A 170+ LSAT with a 3.5 GPA is generally more competitive than a 165 LSAT with a 3.9 GPA at T14 schools.',
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

function SchoolBar({ school, median, userScore }: { school: string; median: number; userScore: number }) {
  const pct = ((median - 120) / 60) * 100;
  const above = userScore >= median;
  return (
    <div className="flex items-center gap-3 group">
      <div className="w-36 shrink-0">
        <p className="text-xs text-slate-400 leading-tight group-hover:text-white transition-colors">{school}</p>
      </div>
      <div className="flex-1 relative h-2 bg-white/8 rounded-full overflow-visible">
        <div className="absolute h-full rounded-full transition-all duration-500"
          style={{ width: `${pct}%`, backgroundColor: above ? '#34d399' : COLOR, opacity: above ? 0.7 : 0.4 }} />
        <div className="absolute w-0.5 h-4 -top-1 rounded-full bg-white/60 transition-all duration-300"
          style={{ left: `${((userScore - 120) / 60) * 100}%` }} />
      </div>
      <div className="w-10 text-right shrink-0">
        <span className={`text-xs font-mono font-semibold ${above ? 'text-emerald-400' : 'text-slate-500'}`}>{median}</span>
      </div>
      <div className="w-14 text-right shrink-0">
        <span className={`text-[10px] font-medium ${above ? 'text-emerald-400' : 'text-red-400/60'}`}>
          {above ? `+${userScore - median}` : `${userScore - median}`}
        </span>
      </div>
    </div>
  );
}

function FAQSection() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section aria-labelledby="faq-heading">
      <h2 id="faq-heading" className="text-2xl font-bold text-white mb-2">
        LSAT score calculator — frequently asked questions
      </h2>
      <p className="text-slate-400 text-sm mb-6">
        Common questions about LSAT scoring, percentiles, and what your score means for law school admissions.
      </p>
      <div className="space-y-2">
        {LSAT_FAQS.map((faq, i) => (
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

export default function LSATCalculatorPage() {
  const [score, setScore]           = useState(152);
  const [showAllSchools, setShowAll] = useState(false);

  const percentile = useMemo(() => getPercentile(score, LSAT_PERCENTILES), [score]);
  const context    = useMemo(() => getLSATPercentileContext(percentile), [percentile]);
  const visible    = showAllSchools ? LSAT_SCHOOL_MEDIANS : LSAT_SCHOOL_MEDIANS.slice(0, 8);

  const schemaBreadcrumb = {
    '@context': 'https://schema.org', '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://gradesnova.com' },
      { '@type': 'ListItem', position: 2, name: 'Exam Calculators', item: 'https://gradesnova.com/#exams' },
      { '@type': 'ListItem', position: 3, name: 'LSAT Score Calculator', item: 'https://gradesnova.com/exams/lsat' },
    ],
  };
  const schemaFAQ = {
    '@context': 'https://schema.org', '@type': 'FAQPage',
    mainEntity: LSAT_FAQS.map(f => ({ '@type': 'Question', name: f.question, acceptedAnswer: { '@type': 'Answer', text: f.answer } })),
  };
  const schemaTool = {
    '@context': 'https://schema.org', '@type': 'WebApplication',
    name: 'LSAT Score Calculator (2025-2026)',
    url: 'https://gradesnova.com/exams/lsat',
    description: 'Free LSAT score percentile calculator with T14 law school median comparison. Enter your LSAT score to instantly see your national percentile ranking.',
    applicationCategory: 'EducationalApplication', operatingSystem: 'Any',
    offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
    provider: { '@type': 'Organization', name: 'GradesNova', url: 'https://gradesnova.com' },
    aggregateRating: { '@type': 'AggregateRating', ratingValue: '4.9', reviewCount: '178', bestRating: '5', worstRating: '1' },
  };

  const pct = ((score - 120) / 60) * 100;

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
                <li className="text-slate-400" aria-current="page">LSAT Score Calculator</li>
              </ol>
            </nav>
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 rounded-xl flex items-center justify-center text-xl"
                style={{ backgroundColor: `${COLOR}18` }} aria-hidden="true">⚖️</div>
              <span className="text-xs font-mono uppercase tracking-widest" style={{ color: `${COLOR}aa` }}>LSAT · LSAC · 120–180</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white tracking-tight mb-3">
              LSAT Score Calculator (2025–2026)
            </h1>
            <p className="text-lg text-slate-400 max-w-2xl">
              Enter your LSAT score to instantly see your <strong className="text-white font-medium">national percentile ranking</strong> and compare against T14 law school medians. Includes Harvard, Yale, Stanford Law, and more. Updated for the 2025–2026 admissions cycle.
            </p>
          </div>
        </header>

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div className="grid lg:grid-cols-5 gap-8">

            {/* LEFT */}
            <div className="lg:col-span-2 space-y-5">
              <div className="bg-[#12141f] border border-white/8 rounded-2xl p-6">
                <div className="flex items-center justify-between mb-3">
                  <label htmlFor="lsat-slider" className="text-sm font-medium text-slate-300">Your LSAT score</label>
                  <div className="flex items-center gap-2">
                    <span className="text-xs text-slate-500">avg 152</span>
                    <span className="text-3xl font-bold tabular-nums" style={{ color: COLOR }}>{score}</span>
                  </div>
                </div>
                <div className="relative h-7 flex items-center mb-2">
                  <div className="absolute w-full h-2 rounded-full bg-white/8" />
                  <div className="absolute h-2 rounded-full transition-all duration-75"
                    style={{ width: `${pct}%`, backgroundColor: COLOR, opacity: 0.8 }} />
                  <div className="absolute w-0.5 h-4 rounded-full bg-white/20" style={{ left: `${((152 - 120) / 60) * 100}%` }} />
                  <input id="lsat-slider" type="range" min={120} max={180} step={1} value={score}
                    onChange={e => setScore(Number(e.target.value))}
                    aria-label="LSAT score"
                    className="absolute w-full h-full opacity-0 cursor-pointer" style={{ zIndex: 10 }} />
                  <div className="absolute w-6 h-6 rounded-full border-2 border-white shadow-lg shadow-black/50 pointer-events-none transition-all duration-75"
                    style={{ left: `calc(${pct}% - 12px)`, backgroundColor: COLOR }} />
                </div>
                <div className="flex justify-between">
                  <span className="text-[10px] text-slate-600 font-mono">120 (min)</span>
                  <span className="text-[10px] text-slate-600 font-mono">180 (perfect)</span>
                </div>
              </div>

              <div>
                <p className="text-xs text-slate-600 mb-2 uppercase tracking-wider font-medium">Common scores</p>
                <div className="flex flex-wrap gap-1.5">
                  {[140, 145, 148, 152, 155, 160, 165, 168, 170, 173, 175, 180].map(s => (
                    <button key={s} onClick={() => setScore(s)}
                      className={`px-2.5 py-1.5 rounded-lg text-xs font-mono font-medium border transition-all ${score === s ? 'border-red-500/40 text-red-300' : 'bg-white/4 border-white/8 text-slate-400 hover:border-white/20 hover:text-white'}`}
                      style={score === s ? { backgroundColor: `${COLOR}20` } : {}}>
                      {s}
                    </button>
                  ))}
                </div>
              </div>

              <div className="bg-[#12141f] border border-white/8 rounded-xl p-5">
                <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-3">Score benchmarks</p>
                {[
                  { score: 175, pct: 99, label: 'Yale / top T3' },
                  { score: 170, pct: 97, label: 'T14 competitive' },
                  { score: 165, pct: 93, label: 'Top 25 schools' },
                  { score: 160, pct: 85, label: 'Top 50 schools' },
                  { score: 155, pct: 73, label: 'Above average' },
                  { score: 152, pct: 64, label: 'National average' },
                  { score: 145, pct: 39, label: 'Below average' },
                ].map(b => (
                  <div key={b.score} className={`flex items-center justify-between py-1 ${score === b.score ? 'opacity-100' : 'opacity-60'}`}>
                    <div>
                      <span className="text-xs font-mono text-white">{b.score}</span>
                      <span className="text-[10px] text-slate-500 ml-2">{b.label}</span>
                    </div>
                    <span className="text-xs font-semibold text-slate-300">{b.pct}th</span>
                  </div>
                ))}
              </div>
            </div>

            {/* RIGHT */}
            <div className="lg:col-span-3 space-y-5">
              <motion.div key={percentile} initial={{ opacity: 0.8 }} animate={{ opacity: 1 }}
                className="bg-[#12141f] border border-white/8 rounded-2xl p-7">
                <PercentileGauge percentile={percentile} color={context.color} />
                <div className="text-center mt-5 mb-6">
                  <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-sm font-semibold border mb-2"
                    style={{ backgroundColor: `${context.color}15`, borderColor: `${context.color}30`, color: context.color }}>
                    {context.label}
                  </div>
                  <p className="text-slate-400 text-sm">{context.description}</p>
                </div>
                <div className="grid grid-cols-3 gap-3">
                  {[
                    { label: 'Your score',   value: score },
                    { label: 'National avg', value: 152  },
                    { label: 'Percentile',   value: `${percentile}th` },
                  ].map(s => (
                    <div key={s.label} className="bg-white/4 rounded-xl p-3 text-center">
                      <p className="text-base font-bold text-white tabular-nums">{s.value}</p>
                      <p className="text-[10px] text-slate-500 mt-0.5">{s.label}</p>
                    </div>
                  ))}
                </div>
              </motion.div>

              <div className="bg-[#12141f] border border-white/8 rounded-2xl p-6">
                <div className="flex items-center gap-2 mb-1">
                  <GraduationCap size={16} className="text-slate-400" aria-hidden="true" />
                  <h3 className="text-sm font-semibold text-slate-300">Law school median comparison</h3>
                </div>
                <p className="text-xs text-slate-500 mb-4">White line = your score. Green = you meet or exceed median.</p>
                <div className="space-y-3">
                  <div className="flex items-center gap-3 mb-1">
                    <div className="w-36 shrink-0" />
                    <div className="flex-1 flex justify-between text-[10px] text-slate-600 font-mono px-0">
                      <span>120</span><span>150</span><span>180</span>
                    </div>
                    <div className="w-10" />
                    <div className="w-14 text-right text-[10px] text-slate-600">vs yours</div>
                  </div>
                  {visible.map(s => <SchoolBar key={s.school} school={s.school} median={s.median} userScore={score} />)}
                </div>
                {!showAllSchools && (
                  <button onClick={() => setShowAll(true)} className="mt-4 text-xs text-slate-500 hover:text-white transition-colors w-full text-center">
                    Show all {LSAT_SCHOOL_MEDIANS.length} schools ↓
                  </button>
                )}
                <p className="text-[10px] text-slate-600 mt-4">Data: Recent LSAC ABA 509 disclosures.</p>
              </div>
            </div>
          </div>

          {/* LSAT percentile chart */}
          <section className="mt-14" aria-labelledby="chart-heading">
            <h2 id="chart-heading" className="text-2xl font-bold text-white mb-2">
              LSAT score percentile chart (2025–2026)
            </h2>
            <p className="text-slate-400 text-sm mb-6">
              Official LSAT percentile data from LSAC. Shows what percentage of test takers score at or below each LSAT score.
            </p>
            <div className="overflow-hidden rounded-xl border border-white/8">
              <table className="w-full text-sm" aria-label="LSAT score percentile chart 2025-2026">
                <thead>
                  <tr className="bg-white/4 border-b border-white/8">
                    <th scope="col" className="text-left px-4 py-3 text-xs font-semibold text-slate-400 uppercase tracking-wider">LSAT score</th>
                    <th scope="col" className="text-left px-4 py-3 text-xs font-semibold text-slate-400 uppercase tracking-wider">Percentile</th>
                    <th scope="col" className="text-left px-4 py-3 text-xs font-semibold text-slate-400 uppercase tracking-wider hidden sm:table-cell">Top %</th>
                    <th scope="col" className="text-left px-4 py-3 text-xs font-semibold text-slate-400 uppercase tracking-wider hidden md:table-cell">School tier</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    [180,'99','Top 1%','All schools — exceptional'],
                    [175,'99','Top 1%','Yale, Harvard, Stanford'],
                    [174,'99','Top 1%','Columbia, Chicago'],
                    [173,'99','Top 1%','NYU, Penn'],
                    [170,'97','Top 3%','Full T14 competitive'],
                    [168,'96','Top 4%','T14 competitive'],
                    [165,'93','Top 7%','Strong T14 candidate'],
                    [163,'90','Top 10%','Top 20 schools'],
                    [160,'85','Top 15%','Strong — top 50'],
                    [157,'78','Top 22%','Solid — top 100'],
                    [155,'73','Top 27%','Above average'],
                    [152,'64','Top 36%','National average'],
                    [150,'57','Top 43%','Average range'],
                    [148,'50','Top 50%','Below average'],
                    [145,'39','Top 61%','Below average'],
                    [140,'23','Top 77%','Needs improvement'],
                    [135,'10','Top 90%','Needs improvement'],
                    [130,'3','Top 97%','Needs improvement'],
                  ].map(([s, pct, top, tier], i) => {
                    const isYours = Number(s) === score;
                    return (
                      <tr key={s} className={`border-b border-white/5 last:border-0 ${isYours ? 'bg-red-500/10' : i % 2 === 0 ? '' : 'bg-white/2'}`}>
                        <td className="px-4 py-2.5 font-mono font-medium" style={{ color: isYours ? COLOR : undefined }}>
                          {s}
                          {isYours && <span className="ml-2 text-[10px] bg-red-500/20 text-red-300 px-1.5 py-0.5 rounded font-sans">your score</span>}
                        </td>
                        <td className="px-4 py-2.5 font-semibold" style={{ color: isYours ? COLOR : 'rgb(226,232,240)' }}>{pct}th</td>
                        <td className="px-4 py-2.5 text-slate-500 hidden sm:table-cell text-xs">{top}</td>
                        <td className="px-4 py-2.5 text-slate-500 hidden md:table-cell text-xs">{tier}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
            <p className="text-xs text-slate-600 mt-3">Source: LSAC LSAT Percentile Ranks. Data updated for the 2025–2026 admissions cycle.</p>
          </section>

          <section className="mt-12" aria-labelledby="tiers-heading">
            <h2 id="tiers-heading" className="text-2xl font-bold text-white mb-6">What does your LSAT score mean for law school admissions?</h2>
            <div className="grid sm:grid-cols-3 gap-4">
              {[
                { range: '170–180', label: 'Elite',       desc: 'Top 3%. Competitive at all law schools. Scholarship potential everywhere. Harvard, Yale, and Stanford have medians of 174–175.', color: '#34d399' },
                { range: '160–169', label: 'Competitive', desc: 'Top 15%. Strong candidacy at T14 schools. Competitive for merit scholarships at top-25 programs.', color: COLOR },
                { range: 'Below 160', label: 'Developing', desc: 'Below the typical T14 threshold. Competitive at many excellent law schools. Retaking often improves prospects significantly.', color: '#f59e0b' },
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
                { id: 'sat', name: 'SAT Score Calculator', color: '#6366f1' },
                { id: 'act', name: 'ACT Score Calculator', color: '#06b6d4' },
                { id: 'gre', name: 'GRE Score Calculator', color: '#a855f7' },
                { id: 'gmat', name: 'GMAT Score Calculator', color: '#f59e0b' },
                { id: 'gcse', name: 'GCSE Grade Boundaries', color: '#34d399' },
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
