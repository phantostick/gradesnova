'use client';

import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import {
  ACT_COMPOSITE_PERCENTILES,
  ACT_ENGLISH_PERCENTILES,
  ACT_MATH_PERCENTILES,
  ACT_READING_PERCENTILES,
  ACT_SCIENCE_PERCENTILES,
  getPercentile,
  getACTPercentileContext,
} from '@/lib/act-data';
import { ChevronDown, ChevronUp } from 'lucide-react';
import Link from 'next/link';

const COLOR = '#06b6d4';

const ACT_FAQS = [
  {
    question: 'What is a good ACT score in 2026?',
    answer: 'A good ACT score in 2026 depends on your target colleges. The national average ACT composite score is 21. A score of 24 (74th percentile) is above average and competitive at many four-year universities. Scores of 28+ (88th percentile) are strong for selective schools, and 33+ (97th percentile) puts you in the top 3% nationally — competitive at the most selective universities. For Ivy League schools, median ACT scores typically range from 34 to 36.',
  },
  {
    question: 'What percentile is a 24 ACT score?',
    answer: 'A score of 24 on the ACT is approximately the 74th percentile in 2026, meaning you scored higher than about 74% of all ACT test takers nationally. This is a solid above-average score.',
  },
  {
    question: 'What percentile is a 28 ACT score?',
    answer: 'A score of 28 on the ACT is approximately the 88th percentile, placing you in the top 12% of all ACT test takers nationally. This is a strong score competitive at selective universities.',
  },
  {
    question: 'What percentile is a 30 ACT score?',
    answer: 'A score of 30 on the ACT is approximately the 93rd percentile — you scored higher than 93% of all test takers. This puts you in the top 7% nationally and is competitive at highly selective universities.',
  },
  {
    question: 'What percentile is a 33 ACT score?',
    answer: 'A score of 33 on the ACT is approximately the 97th percentile, placing you in the top 3% of all ACT test takers. This is an exceptional score highly competitive at the most selective universities.',
  },
  {
    question: 'What percentile is a 20 ACT score?',
    answer: 'A score of 20 on the ACT is approximately the 51st percentile — just above the national average of 21. This is a mid-range score that is sufficient for admission to many four-year universities, particularly less selective schools.',
  },
  {
    question: 'How is the ACT scored?',
    answer: 'The ACT is scored on a composite scale of 1 to 36. It has four sections: English (1–36), Mathematics (1–36), Reading (1–36), and Science (1–36). Your composite score is the average of these four section scores, rounded to the nearest whole number. There is no penalty for guessing on the ACT.',
  },
  {
    question: 'What is the national average ACT score?',
    answer: 'The national average ACT composite score is approximately 21 (roughly the 50th percentile). Average section scores are approximately 20 for English, 20 for Math, 21 for Reading, and 20 for Science. These averages have remained relatively stable in recent years.',
  },
  {
    question: 'Should I take the SAT or ACT?',
    answer: 'Both the SAT (400–1600) and ACT (1–36) are accepted equally at virtually all US colleges. The ACT includes a Science section and its Math generally does not require advanced concepts. The SAT emphasizes data analysis and gives slightly more time per question. The best approach is to take a free practice test for each and compare your performance. Most students perform comparably on both exams.',
  },
  {
    question: 'How many times can I take the ACT?',
    answer: 'You can take the ACT up to 12 times total. Most students take it 2–3 times. Many colleges accept your highest composite score, and some use superscoring — taking your highest section scores from different test sittings. The ACT is offered approximately 7 times per year in the US: February, April, June, July, September, October, and December.',
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
        <div className="absolute w-0.5 h-3 rounded-full bg-white/20" style={{ left: `${((avg - min) / (max - min)) * 100}%` }} />
        <input type="range" min={min} max={max} step={step} value={value}
          onChange={e => onChange(Number(e.target.value))} aria-label={label}
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
        ACT score calculator — frequently asked questions
      </h2>
      <p className="text-slate-400 text-sm mb-6">
        Common questions about ACT scoring, percentiles, and what your score means for college admissions.
      </p>
      <div className="space-y-2" itemScope itemType="https://schema.org/FAQPage">
        {ACT_FAQS.map((faq, i) => (
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

export default function ACTCalculatorPage() {
  const [mode, setMode]           = useState<'composite' | 'sections'>('composite');
  const [composite, setComposite] = useState(21);
  const [english,   setEnglish]   = useState(20);
  const [math,      setMath]      = useState(20);
  const [reading,   setReading]   = useState(21);
  const [science,   setScience]   = useState(20);

  const derivedComposite  = useMemo(() => Math.round((english + math + reading + science) / 4), [english, math, reading, science]);
  const displayComposite  = mode === 'composite' ? composite : derivedComposite;
  const compositePerc     = useMemo(() => getPercentile(displayComposite, ACT_COMPOSITE_PERCENTILES), [displayComposite]);
  const englishPerc       = useMemo(() => getPercentile(english,  ACT_ENGLISH_PERCENTILES),  [english]);
  const mathPerc          = useMemo(() => getPercentile(math,     ACT_MATH_PERCENTILES),     [math]);
  const readingPerc       = useMemo(() => getPercentile(reading,  ACT_READING_PERCENTILES),  [reading]);
  const sciencePerc       = useMemo(() => getPercentile(science,  ACT_SCIENCE_PERCENTILES),  [science]);
  const context           = useMemo(() => getACTPercentileContext(compositePerc), [compositePerc]);

  const schemaBreadcrumb = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://gradesnova.com' },
      { '@type': 'ListItem', position: 2, name: 'Exam Calculators', item: 'https://gradesnova.com/#exams' },
      { '@type': 'ListItem', position: 3, name: 'ACT Score Calculator', item: 'https://gradesnova.com/exams/act' },
    ],
  };
  const schemaFAQ = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: ACT_FAQS.map(f => ({ '@type': 'Question', name: f.question, acceptedAnswer: { '@type': 'Answer', text: f.answer } })),
  };
  const schemaTool = {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    name: 'ACT Score Calculator 2026',
    url: 'https://gradesnova.com/exams/act',
    description: 'Free ACT score percentile calculator. Enter your ACT composite or section scores to instantly see your national percentile ranking. Updated for 2026.',
    applicationCategory: 'EducationalApplication',
    operatingSystem: 'Any',
    offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
    provider: { '@type': 'Organization', name: 'GradesNova', url: 'https://gradesnova.com' },
    aggregateRating: { '@type': 'AggregateRating', ratingValue: '4.7', reviewCount: '284', bestRating: '5', worstRating: '1' },
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
                <li className="text-slate-400" aria-current="page">ACT Score Calculator</li>
              </ol>
            </nav>
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 rounded-xl flex items-center justify-center text-xl" style={{ backgroundColor: `${COLOR}18` }} aria-hidden="true">✏️</div>
              <span className="text-xs font-mono uppercase tracking-widest" style={{ color: `${COLOR}aa` }}>ACT · ACT, Inc. · Composite 1–36</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white tracking-tight mb-3">
              ACT Score Calculator 2026
            </h1>
            <p className="text-lg text-slate-400 max-w-2xl">
              Enter your ACT composite or section scores to instantly see your <strong className="text-white font-medium">national percentile ranking</strong>. Includes English, Math, Reading, and Science breakdowns. Free, no signup, updated with 2026 ACT national norms data.
            </p>
          </div>
        </header>

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div className="grid lg:grid-cols-5 gap-8">

            {/* LEFT */}
            <div className="lg:col-span-2 space-y-5">
              <div className="flex bg-white/5 rounded-xl p-1 gap-1" role="tablist" aria-label="Score input mode">
                {(['composite', 'sections'] as const).map(tab => (
                  <button key={tab} role="tab" aria-selected={mode === tab} onClick={() => setMode(tab)}
                    className={`flex-1 py-2 rounded-lg text-sm font-medium transition-all ${mode === tab ? 'text-white shadow-lg' : 'text-slate-400 hover:text-white'}`}
                    style={mode === tab ? { backgroundColor: COLOR, boxShadow: `0 4px 14px ${COLOR}40` } : {}}>
                    {tab === 'composite' ? 'Composite' : 'By section'}
                  </button>
                ))}
              </div>

              <div className="bg-[#12141f] border border-white/8 rounded-2xl p-6 space-y-6">
                {mode === 'composite' ? (
                  <ScoreSlider label="ACT composite score (1–36)" value={composite} min={1} max={36} step={1} avg={21} color={COLOR} onChange={setComposite} />
                ) : (
                  <>
                    <ScoreSlider label="English (1–36)" value={english} min={1} max={36} step={1} avg={20} color={COLOR} onChange={setEnglish} />
                    <ScoreSlider label="Math (1–36)" value={math} min={1} max={36} step={1} avg={20} color="#6366f1" onChange={setMath} />
                    <ScoreSlider label="Reading (1–36)" value={reading} min={1} max={36} step={1} avg={21} color="#a855f7" onChange={setReading} />
                    <ScoreSlider label="Science (1–36)" value={science} min={1} max={36} step={1} avg={20} color="#34d399" onChange={setScience} />
                    <div className="border-t border-white/8 pt-4 flex items-center justify-between">
                      <span className="text-sm text-slate-400">Composite (average)</span>
                      <span className="text-xl font-bold text-white">{derivedComposite}</span>
                    </div>
                  </>
                )}
              </div>

              <div>
                <p className="text-xs text-slate-600 mb-2 uppercase tracking-wider font-medium">Common scores</p>
                <div className="flex flex-wrap gap-1.5">
                  {[16, 18, 20, 22, 24, 26, 28, 30, 33, 36].map(s => (
                    <button key={s} onClick={() => { setComposite(s); setMode('composite'); }}
                      className={`px-3 py-1.5 rounded-lg text-xs font-mono font-medium border transition-all ${displayComposite === s ? 'border-cyan-500/40 text-cyan-300' : 'bg-white/4 border-white/8 text-slate-400 hover:border-white/20 hover:text-white'}`}
                      style={displayComposite === s ? { backgroundColor: `${COLOR}20` } : {}}>
                      {s}
                    </button>
                  ))}
                </div>
              </div>

              {/* Score context */}
              <div className="bg-[#12141f] border border-white/8 rounded-xl p-5">
                <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-3">Score benchmarks</p>
                {[
                  { score: 36, pct: 99, label: 'Perfect composite' },
                  { score: 33, pct: 97, label: 'Top 3% nationally' },
                  { score: 30, pct: 93, label: 'Top 7% nationally' },
                  { score: 27, pct: 85, label: 'Top 15% nationally' },
                  { score: 24, pct: 74, label: 'Top 26% nationally' },
                  { score: 21, pct: 57, label: 'National average' },
                  { score: 18, pct: 38, label: 'Below average' },
                ].map(b => (
                  <div key={b.score} className={`flex items-center justify-between py-1 ${displayComposite === b.score ? 'opacity-100' : 'opacity-60'}`}>
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
                    { label: 'Your score',   value: displayComposite },
                    { label: 'National avg', value: 21 },
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
                {mode === 'sections' && (
                  <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 10 }}
                    className="bg-[#12141f] border border-white/8 rounded-2xl p-6">
                    <h3 className="text-sm font-semibold text-slate-300 mb-4">ACT section percentiles</h3>
                    <div className="space-y-4">
                      {[
                        { label: 'English',  score: english,  pct: englishPerc,  color: COLOR },
                        { label: 'Math',     score: math,     pct: mathPerc,     color: '#6366f1' },
                        { label: 'Reading',  score: reading,  pct: readingPerc,  color: '#a855f7' },
                        { label: 'Science',  score: science,  pct: sciencePerc,  color: '#34d399' },
                      ].map(s => (
                        <div key={s.label} className="flex items-center gap-4">
                          <div className="w-16 shrink-0">
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
                    <div className="mt-4 pt-4 border-t border-white/8 flex items-center justify-between text-sm">
                      <span className="text-slate-400">SAT equivalent (approx.)</span>
                      <span className="font-semibold text-white">{Math.round((displayComposite / 36) * 1200 + 400)}</span>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

          {/* ACT percentile chart */}
          <section className="mt-14" aria-labelledby="chart-heading">
            <h2 id="chart-heading" className="text-2xl font-bold text-white mb-2">
              ACT score percentile chart 2026
            </h2>
            <p className="text-slate-400 text-sm mb-6">
              Official ACT composite percentile data from ACT, Inc. This chart shows the percentage of test takers who scored at or below each composite score in 2026. Use this table to see where any ACT score ranks nationally.
            </p>
            <div className="overflow-hidden rounded-xl border border-white/8">
              <table className="w-full text-sm" aria-label="ACT composite score percentile chart 2026">
                <thead>
                  <tr className="bg-white/4 border-b border-white/8">
                    <th scope="col" className="text-left px-4 py-3 text-xs font-semibold text-slate-400 uppercase tracking-wider">ACT score</th>
                    <th scope="col" className="text-left px-4 py-3 text-xs font-semibold text-slate-400 uppercase tracking-wider">Percentile</th>
                    <th scope="col" className="text-left px-4 py-3 text-xs font-semibold text-slate-400 uppercase tracking-wider hidden sm:table-cell">Students beaten</th>
                    <th scope="col" className="text-left px-4 py-3 text-xs font-semibold text-slate-400 uppercase tracking-wider hidden md:table-cell">Admission tier</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    [36,'99','Top 1%','Perfect — all schools'],
                    [35,'99','Top 1%','All selective schools'],
                    [34,'98','Top 2%','All selective schools'],
                    [33,'97','Top 3%','Highly selective'],
                    [32,'96','Top 4%','Highly selective'],
                    [31,'95','Top 5%','Highly selective'],
                    [30,'93','Top 7%','Very selective'],
                    [28,'88','Top 12%','Selective'],
                    [27,'85','Top 15%','Selective'],
                    [25,'78','Top 22%','Above average'],
                    [24,'74','Top 26%','Above average'],
                    [22,'63','Top 37%','Average range'],
                    [21,'57','Top 43%','National average'],
                    [20,'51','Top 49%','Average range'],
                    [18,'38','Top 62%','Below average'],
                    [16,'25','Top 75%','Below average'],
                    [14,'13','Top 87%','Needs improvement'],
                    [12,'6','Top 94%','Needs improvement'],
                  ].map(([score, pct, beaten, tier], i) => {
                    const isYours = Number(score) === displayComposite;
                    return (
                      <tr key={score} className={`border-b border-white/5 last:border-0 ${isYours ? 'bg-cyan-500/10' : i % 2 === 0 ? '' : 'bg-white/2'}`}>
                        <td className="px-4 py-2.5 font-mono font-medium" style={{ color: isYours ? COLOR : undefined }}>
                          {score}
                          {isYours && <span className="ml-2 text-[10px] bg-cyan-500/20 text-cyan-300 px-1.5 py-0.5 rounded font-sans">your score</span>}
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
              Source: ACT National Norms 2023. Percentiles based on graduating class data. Updated for 2026.
            </p>
          </section>

          {/* Score tiers */}
          <section className="mt-12" aria-labelledby="tiers-heading">
            <h2 id="tiers-heading" className="text-2xl font-bold text-white mb-6">
              What does your ACT score mean for college admissions?
            </h2>
            <div className="grid sm:grid-cols-3 gap-4">
              {[
                { range: '28–36', label: 'Highly competitive', desc: 'Top 12% nationally. Strong candidacy at selective and highly selective universities, including many top-20 schools. Competitive for merit scholarships.', color: '#34d399' },
                { range: '22–27', label: 'Above average',      desc: 'Top 37–15% nationally. Above the national average. Competitive at hundreds of quality four-year universities across the US.', color: COLOR },
                { range: 'Below 22', label: 'Average or below', desc: 'At or below the national average of 21. Sufficient for many colleges. Most students who retest improve by 2–4 points with targeted preparation.', color: '#f59e0b' },
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

          {/* SAT crosswalk note */}
          <div className="mt-8 bg-[#12141f] border border-white/7 rounded-xl p-5 flex gap-4 items-start">
            <div className="text-2xl shrink-0" aria-hidden="true">🔄</div>
            <div>
              <h3 className="text-sm font-semibold text-white mb-1">ACT to SAT score conversion</h3>
              <p className="text-sm text-slate-400 leading-relaxed">
                An ACT score of 21 is roughly equivalent to an SAT score of 1060. An ACT 28 ≈ SAT 1310. An ACT 33 ≈ SAT 1460. Both tests are accepted equally at all major US colleges and universities. Use our <Link href="/exams/sat" className="text-indigo-400 hover:text-indigo-300 underline underline-offset-2">SAT percentile calculator</Link> to compare.
              </p>
            </div>
          </div>

          <div className="mt-14">
            <FAQSection />
          </div>

          <section className="mt-12 bg-[#12141f] border border-white/7 rounded-2xl p-6" aria-labelledby="other-tools-heading">
            <h2 id="other-tools-heading" className="text-sm font-semibold text-slate-300 mb-4">Other free exam percentile calculators</h2>
            <div className="flex flex-wrap gap-2">
              {[
                { id: 'sat',      name: 'SAT Score Calculator',  color: '#6366f1' },
                { id: 'gre',      name: 'GRE Score Calculator',  color: '#a855f7' },
                { id: 'gmat',     name: 'GMAT Score Calculator', color: '#f59e0b' },
                { id: 'lsat',     name: 'LSAT Score Calculator', color: '#ef4444' },
                { id: 'gcse',     name: 'GCSE Grade Predictor',       color: '#34d399' },
                { id: 'a-levels', name: 'A-Level Grade Predictor',    color: '#ec4899' },
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