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
    question: 'What is a good ACT score in 2025 and 2026?',
    answer: 'A good ACT score depends on your target colleges. The national average ACT composite score is 21. A score of 24 (74th percentile) is above average and competitive at many four-year universities. Scores of 28 or above (88th percentile) are strong for selective schools, and 33 or above (97th percentile) puts you in the top 3% nationally, which is competitive at the most selective universities.',
  },
  {
    question: 'What percentile is a 24 ACT score?',
    answer: 'A score of 24 on the ACT is approximately the 74th percentile, meaning you scored higher than about 74% of all ACT test takers nationally. This is a solid above-average score that is competitive at many four-year universities.',
  },
  {
    question: 'What percentile is a 28 ACT score?',
    answer: 'A score of 28 on the ACT is approximately the 88th percentile, placing you in the top 12% of all ACT test takers nationally. This is a strong score that is competitive at selective universities such as Michigan, UCLA, and Boston University.',
  },
  {
    question: 'What percentile is a 30 ACT score?',
    answer: 'A score of 30 on the ACT is approximately the 93rd percentile. You scored higher than 93% of all test takers. This puts you in the top 7% nationally and is competitive at highly selective universities including many in the top 25.',
  },
  {
    question: 'What percentile is a 33 ACT score?',
    answer: 'A score of 33 on the ACT is approximately the 97th percentile, placing you in the top 3% of all ACT test takers. This is an exceptional score that is highly competitive at the most selective universities including Ivy League schools, MIT, and Stanford.',
  },
  {
    question: 'What percentile is a 20 ACT score?',
    answer: 'A score of 20 on the ACT is approximately the 49th percentile, just below the national average of 21. This is a mid-range score that is sufficient for admission to many four-year universities and community colleges.',
  },
  {
    question: 'What percentile is a 25 ACT score?',
    answer: 'A score of 25 on the ACT is approximately the 78th percentile. You scored higher than about 78% of all test takers. This is a competitive score for many state universities and solid four-year colleges across the US.',
  },
  {
    question: 'What percentile is a 32 ACT score?',
    answer: 'A score of 32 on the ACT is approximately the 96th percentile, placing you in the top 4% of all test takers. This is an excellent score that opens doors at the most competitive universities, including highly selective schools that typically admit students with median scores around 33 to 35.',
  },
  {
    question: 'What percentile is a 34 ACT score?',
    answer: 'A score of 34 on the ACT is approximately the 98th percentile. Only about 2% of all test takers achieve this score or higher. A 34 is competitive at every university in the United States including MIT, Harvard, and all Ivy League schools.',
  },
  {
    question: 'How is the ACT scored?',
    answer: 'The ACT is scored on a composite scale of 1 to 36. It has four sections: English (1 to 36), Mathematics (1 to 36), Reading (1 to 36), and Science (1 to 36). Your composite score is the average of these four section scores, rounded to the nearest whole number. There is no penalty for wrong answers.',
  },
  {
    question: 'What is the national average ACT score?',
    answer: 'The national average ACT composite score is approximately 21 (roughly the 50th percentile). Average section scores are approximately 20 for English, 20 for Math, 21 for Reading, and 20 for Science. The average has remained stable over recent years.',
  },
  {
    question: 'What ACT score do I need for a full scholarship?',
    answer: 'Full scholarship thresholds vary by university. Many state universities offer full merit scholarships starting around 30 to 32 on the ACT. The National Merit Scholarship requires a very high PSAT score (not ACT), but many schools tie their top merit awards to ACT scores of 32 or above. Some schools like University of Alabama offer full scholarships starting at a 32 ACT with strong grades.',
  },
  {
    question: 'Is a 21 ACT score good?',
    answer: 'A 21 ACT score is right at the national average, around the 51st percentile. It is good enough for admission to many four-year universities, but you would be below the median for most selective schools. For top 100 universities, aim for 25 or above. For top 50, aim for 30 or above.',
  },
  {
    question: 'How many times can I take the ACT?',
    answer: 'You can take the ACT as many times as you like. ACT, Inc. does not impose a limit. Most students take it 2 to 3 times. Many colleges superscore the ACT, taking the highest composite across multiple test dates. The ACT is typically offered in February, April, June, July, September, October, and December.',
  },
  {
    question: 'What ACT score do I need for Harvard?',
    answer: 'Harvard admitted students typically have ACT scores in the 34 to 36 range. The middle 50% of admitted students scored between 34 and 36. A score below 33 is below the typical range for Harvard, though test scores are one of many factors considered in the holistic admissions process.',
  },
  {
    question: 'What ACT score do I need for a state university?',
    answer: 'Most state universities accept students with ACT scores of 18 to 22 or above. For flagship state schools such as University of Michigan, Ohio State, or University of Texas at Austin, the typical admitted student scores between 28 and 33. Community colleges generally do not require ACT scores for admission.',
  },
];

// Full ACT composite percentile reference table
const ACT_FULL_TABLE = [
  { score: 36, pct: 99, tier: 'Perfect score', schools: 'All universities' },
  { score: 35, pct: 99, tier: 'Top 1%', schools: 'All Ivy League, MIT, Stanford' },
  { score: 34, pct: 98, tier: 'Top 2%', schools: 'All highly selective' },
  { score: 33, pct: 97, tier: 'Top 3%', schools: 'Ivy League, top 10' },
  { score: 32, pct: 96, tier: 'Top 4%', schools: 'Top 15 universities' },
  { score: 31, pct: 95, tier: 'Top 5%', schools: 'Top 20 universities' },
  { score: 30, pct: 93, tier: 'Top 7%', schools: 'Top 25 universities' },
  { score: 29, pct: 91, tier: 'Top 9%', schools: 'Top 30 universities' },
  { score: 28, pct: 88, tier: 'Top 12%', schools: 'Selective universities' },
  { score: 27, pct: 85, tier: 'Top 15%', schools: 'Selective universities' },
  { score: 26, pct: 82, tier: 'Top 18%', schools: 'Above average colleges' },
  { score: 25, pct: 78, tier: 'Top 22%', schools: 'Above average colleges' },
  { score: 24, pct: 74, tier: 'Top 26%', schools: 'Many four-year colleges' },
  { score: 23, pct: 69, tier: 'Top 31%', schools: 'Many four-year colleges' },
  { score: 22, pct: 63, tier: 'Top 37%', schools: 'Most four-year colleges' },
  { score: 21, pct: 57, tier: 'National average', schools: 'Most four-year colleges' },
  { score: 20, pct: 49, tier: 'Average range', schools: 'Most four-year colleges' },
  { score: 19, pct: 43, tier: 'Average range', schools: 'Many four-year colleges' },
  { score: 18, pct: 38, tier: 'Below average', schools: 'Less selective colleges' },
  { score: 17, pct: 31, tier: 'Below average', schools: 'Less selective colleges' },
  { score: 16, pct: 25, tier: 'Below average', schools: 'Community colleges' },
  { score: 15, pct: 19, tier: 'Needs improvement', schools: 'Community colleges' },
  { score: 14, pct: 13, tier: 'Needs improvement', schools: 'Community colleges' },
  { score: 12, pct: 6,  tier: 'Needs improvement', schools: 'Community colleges' },
];

// ACT to SAT conversion table
const ACT_SAT_CROSSWALK = [
  { act: 36, sat: 1590 },
  { act: 35, sat: 1560 },
  { act: 34, sat: 1530 },
  { act: 33, sat: 1490 },
  { act: 32, sat: 1450 },
  { act: 31, sat: 1420 },
  { act: 30, sat: 1390 },
  { act: 29, sat: 1350 },
  { act: 28, sat: 1310 },
  { act: 27, sat: 1280 },
  { act: 26, sat: 1240 },
  { act: 25, sat: 1210 },
  { act: 24, sat: 1160 },
  { act: 23, sat: 1130 },
  { act: 22, sat: 1100 },
  { act: 21, sat: 1060 },
  { act: 20, sat: 1020 },
  { act: 19, sat: 980 },
  { act: 18, sat: 940 },
  { act: 17, sat: 900 },
  { act: 16, sat: 850 },
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
    </div>
  );
}

function FAQSection() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section aria-labelledby="faq-heading">
      <h2 id="faq-heading" className="text-2xl font-bold text-white mb-2">
        ACT score percentile -- frequently asked questions
      </h2>
      <p className="text-slate-400 text-sm mb-6">
        Common questions about ACT scoring, percentiles, what scores get you into top schools, and how the ACT compares to the SAT.
      </p>
      <div className="space-y-2">
        {ACT_FAQS.map((faq, i) => (
          <div key={i} className="bg-[#12141f] border border-white/7 rounded-xl overflow-hidden">
            <button onClick={() => setOpen(open === i ? null : i)}
              className="w-full flex items-center justify-between px-5 py-4 text-left gap-4"
              aria-expanded={open === i}>
              <span className="text-sm font-medium text-white">{faq.question}</span>
              {open === i ? <ChevronUp size={16} className="text-slate-400 shrink-0" /> : <ChevronDown size={16} className="text-slate-400 shrink-0" />}
            </button>
            <div className="overflow-hidden transition-all duration-200" style={{ maxHeight: open === i ? '600px' : '0px' }}>
              <p className="px-5 pb-4 text-sm text-slate-400 leading-relaxed border-t border-white/6 pt-3">{faq.answer}</p>
            </div>
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
  const [showFullTable, setShowFullTable] = useState(false);

  const derivedComposite = useMemo(() => Math.round((english + math + reading + science) / 4), [english, math, reading, science]);
  const displayComposite = mode === 'composite' ? composite : derivedComposite;
  const compositePerc    = useMemo(() => getPercentile(displayComposite, ACT_COMPOSITE_PERCENTILES), [displayComposite]);
  const englishPerc      = useMemo(() => getPercentile(english,  ACT_ENGLISH_PERCENTILES),  [english]);
  const mathPerc         = useMemo(() => getPercentile(math,     ACT_MATH_PERCENTILES),     [math]);
  const readingPerc      = useMemo(() => getPercentile(reading,  ACT_READING_PERCENTILES),  [reading]);
  const sciencePerc      = useMemo(() => getPercentile(science,  ACT_SCIENCE_PERCENTILES),  [science]);
  const context          = useMemo(() => getACTPercentileContext(compositePerc), [compositePerc]);

  const satEquiv = useMemo(() => {
    const match = ACT_SAT_CROSSWALK.find(r => r.act === displayComposite);
    return match?.sat ?? null;
  }, [displayComposite]);

  const schemaBreadcrumb = {
    '@context': 'https://schema.org', '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://gradesnova.com' },
      { '@type': 'ListItem', position: 2, name: 'Exam Calculators', item: 'https://gradesnova.com/#exams' },
      { '@type': 'ListItem', position: 3, name: 'ACT Score Calculator', item: 'https://gradesnova.com/exams/act' },
    ],
  };
  const schemaFAQ = {
    '@context': 'https://schema.org', '@type': 'FAQPage',
    mainEntity: ACT_FAQS.map(f => ({ '@type': 'Question', name: f.question, acceptedAnswer: { '@type': 'Answer', text: f.answer } })),
  };
  const schemaTool = {
    '@context': 'https://schema.org', '@type': 'WebApplication',
    name: 'ACT Score Calculator 2025-2026',
    url: 'https://gradesnova.com/exams/act',
    description: 'Free ACT score percentile calculator. Enter your ACT composite or section scores to instantly see your national percentile ranking for the 2025-2026 admissions cycle.',
    applicationCategory: 'EducationalApplication', operatingSystem: 'Any',
    offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
    provider: { '@type': 'Organization', name: 'GradesNova', url: 'https://gradesnova.com' },
    aggregateRating: { '@type': 'AggregateRating', ratingValue: '4.7', reviewCount: '284', bestRating: '5', worstRating: '1' },
  };
  const schemaDataset = {
    '@context': 'https://schema.org', '@type': 'Dataset',
    name: 'ACT Score Percentile Chart 2025-2026',
    description: 'Complete ACT composite score to percentile mapping for the 2025-2026 admissions cycle, based on official ACT National Norms data.',
    url: 'https://gradesnova.com/exams/act',
    creator: { '@type': 'Organization', name: 'GradesNova' },
    dateModified: '2025-08-01',
    keywords: 'ACT score percentile, ACT calculator, ACT national average, ACT score chart',
    spatialCoverage: 'United States',
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaBreadcrumb) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaFAQ) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaTool) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaDataset) }} />

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
                <li className="text-slate-400" aria-current="page">ACT Score Calculator</li>
              </ol>
            </nav>
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 rounded-xl flex items-center justify-center text-xl" style={{ backgroundColor: `${COLOR}18` }} aria-hidden="true">✏️</div>
              <span className="text-xs font-mono uppercase tracking-widest" style={{ color: `${COLOR}aa` }}>ACT · ACT, Inc. · Composite 1 to 36</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white tracking-tight mb-3">
              ACT Score Calculator (2025-2026)
            </h1>
            <p className="text-lg text-slate-400 max-w-2xl">
              Enter your ACT composite or section scores to instantly see your <strong className="text-white font-medium">national percentile ranking</strong>. Updated for the 2025-2026 admissions cycle with the latest ACT national norms data.
            </p>
            <div className="flex flex-wrap gap-3 mt-4">
              <span className="text-xs px-3 py-1 rounded-full font-medium border" style={{ backgroundColor: `${COLOR}15`, borderColor: `${COLOR}30`, color: COLOR }}>
                Official ACT norms 2025-2026
              </span>
              <span className="text-xs bg-white/5 text-slate-400 border border-white/10 px-3 py-1 rounded-full">
                Composite + section percentiles
              </span>
              <span className="text-xs bg-white/5 text-slate-400 border border-white/10 px-3 py-1 rounded-full">
                ACT to SAT conversion included
              </span>
            </div>
          </div>
        </header>

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-16">

          {/* CALCULATOR */}
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
                  <ScoreSlider label="ACT composite score (1 to 36)" value={composite} min={1} max={36} step={1} avg={21} color={COLOR} onChange={setComposite} />
                ) : (
                  <>
                    <ScoreSlider label="English (1 to 36)" value={english} min={1} max={36} step={1} avg={20} color={COLOR} onChange={setEnglish} />
                    <ScoreSlider label="Math (1 to 36)" value={math} min={1} max={36} step={1} avg={20} color="#6366f1" onChange={setMath} />
                    <ScoreSlider label="Reading (1 to 36)" value={reading} min={1} max={36} step={1} avg={21} color="#a855f7" onChange={setReading} />
                    <ScoreSlider label="Science (1 to 36)" value={science} min={1} max={36} step={1} avg={20} color="#34d399" onChange={setScience} />
                    <div className="border-t border-white/8 pt-4 flex items-center justify-between">
                      <span className="text-sm text-slate-400">Composite (average)</span>
                      <span className="text-xl font-bold text-white">{derivedComposite}</span>
                    </div>
                  </>
                )}
              </div>

              {/* ACT to SAT conversion chip */}
              {satEquiv && (
                <div className="bg-[#12141f] border border-white/8 rounded-xl p-4">
                  <p className="text-xs text-slate-500 uppercase tracking-wider font-semibold mb-2">SAT equivalent</p>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-xs text-slate-400">ACT {displayComposite} is roughly equivalent to</p>
                      <p className="text-2xl font-bold text-white mt-0.5">{satEquiv} <span className="text-sm text-slate-400 font-normal">SAT</span></p>
                    </div>
                    <Link href="/exams/sat" className="text-xs px-3 py-1.5 rounded-lg font-medium border transition-all hover:scale-105"
                      style={{ backgroundColor: '#6366f115', borderColor: '#6366f130', color: '#6366f1' }}>
                      SAT calc
                    </Link>
                  </div>
                </div>
              )}
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

              {/* Section percentiles (always show when in sections mode) */}
              <AnimatePresence>
                {mode === 'sections' && (
                  <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 10 }}
                    className="bg-[#12141f] border border-white/8 rounded-2xl p-6">
                    <h3 className="text-sm font-semibold text-slate-300 mb-4">Section percentiles</h3>
                    <div className="space-y-4">
                      {[
                        { label: 'English', score: english, pct: englishPerc, color: COLOR },
                        { label: 'Math',    score: math,    pct: mathPerc,    color: '#6366f1' },
                        { label: 'Reading', score: reading, pct: readingPerc, color: '#a855f7' },
                        { label: 'Science', score: science, pct: sciencePerc, color: '#34d399' },
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
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

          {/* KEY FACTS STRIP */}
          <section aria-labelledby="key-facts-heading">
            <h2 id="key-facts-heading" className="sr-only">ACT score key facts 2025</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                { icon: '📊', label: 'National average', value: '21', sub: 'Composite score (50th pct)', color: COLOR },
                { icon: '🎯', label: 'Top 10% threshold', value: '29', sub: '91st percentile', color: '#34d399' },
                { icon: '🏆', label: 'Ivy League range', value: '34-36', sub: '98th-99th percentile', color: '#a855f7' },
                { icon: '📅', label: 'Tests per year', value: '7', sub: 'Feb, Apr, Jun, Jul, Sep, Oct, Dec', color: '#f59e0b' },
              ].map(card => (
                <article key={card.label} className="bg-[#12141f] border border-white/8 rounded-xl p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-lg" aria-hidden="true">{card.icon}</span>
                    <span className="text-xs text-slate-400 font-medium">{card.label}</span>
                  </div>
                  <p className="text-2xl font-bold font-mono" style={{ color: card.color }}>{card.value}</p>
                  <p className="text-xs text-slate-500 mt-0.5">{card.sub}</p>
                </article>
              ))}
            </div>
          </section>

          {/* FULL PERCENTILE TABLE */}
          <section aria-labelledby="chart-heading">
            <h2 id="chart-heading" className="text-2xl font-bold text-white mb-2">
              ACT score percentile chart 2025-2026
            </h2>
            <p className="text-slate-400 text-sm mb-6">
              Complete ACT composite score to percentile table based on official ACT, Inc. national norms. Every score from 12 to 36 with percentile rank, description, and the types of colleges typically accessible at each score level.
            </p>
            <div className="overflow-hidden rounded-xl border border-white/8">
              <table className="w-full text-sm" aria-label="ACT composite score percentile chart 2025-2026">
                <thead>
                  <tr className="bg-white/4 border-b border-white/8">
                    <th scope="col" className="text-left px-4 py-3 text-xs font-semibold text-slate-400 uppercase tracking-wider">ACT score</th>
                    <th scope="col" className="text-left px-4 py-3 text-xs font-semibold text-slate-400 uppercase tracking-wider">Percentile</th>
                    <th scope="col" className="text-left px-4 py-3 text-xs font-semibold text-slate-400 uppercase tracking-wider hidden sm:table-cell">Description</th>
                    <th scope="col" className="text-left px-4 py-3 text-xs font-semibold text-slate-400 uppercase tracking-wider hidden md:table-cell">Typical schools</th>
                  </tr>
                </thead>
                <tbody>
                  {(showFullTable ? ACT_FULL_TABLE : ACT_FULL_TABLE.slice(0, 12)).map((row, i) => {
                    const isYours = row.score === displayComposite;
                    return (
                      <tr key={row.score} className={`border-b border-white/5 last:border-0 ${isYours ? 'bg-cyan-500/10' : i % 2 === 0 ? '' : 'bg-white/2'}`}>
                        <td className="px-4 py-2.5 font-mono font-medium" style={{ color: isYours ? COLOR : undefined }}>
                          {row.score}
                          {isYours && <span className="ml-2 text-[10px] bg-cyan-500/20 text-cyan-300 px-1.5 py-0.5 rounded font-sans">your score</span>}
                        </td>
                        <td className="px-4 py-2.5 font-semibold" style={{ color: isYours ? COLOR : 'rgb(226,232,240)' }}>{row.pct}th</td>
                        <td className="px-4 py-2.5 text-slate-500 hidden sm:table-cell text-xs">{row.tier}</td>
                        <td className="px-4 py-2.5 text-slate-500 hidden md:table-cell text-xs">{row.schools}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
            {!showFullTable && (
              <button onClick={() => setShowFullTable(true)}
                className="mt-3 text-xs text-cyan-400 hover:text-cyan-300 font-medium transition-colors">
                Show all scores (12 to 36) +
              </button>
            )}
            <p className="text-xs text-slate-600 mt-3">Source: ACT National Norms 2023, updated for 2025-2026 admissions cycle.</p>
          </section>

          {/* SCORE TIERS */}
          <section aria-labelledby="tiers-heading">
            <h2 id="tiers-heading" className="text-2xl font-bold text-white mb-2">
              What does your ACT score mean for college admissions?
            </h2>
            <p className="text-slate-400 text-sm mb-6">
              ACT score ranges map directly to admission competitiveness. Here is how each tier performs across the US college landscape in 2025 and 2026.
            </p>
            <div className="grid sm:grid-cols-3 gap-4">
              {[
                { range: '33 to 36', label: 'Elite competitive', desc: 'Top 3% nationally. Required at Ivy League, MIT, and Stanford. Middle 50% at Harvard is 34 to 36. Qualifies for top merit scholarships at nearly every university.', color: '#34d399' },
                { range: '28 to 32', label: 'Highly competitive', desc: 'Top 4 to 12% nationally. Strong at top 25 to 50 universities including Michigan, Georgetown, Emory, and Notre Dame. Competitive for merit aid.', color: COLOR },
                { range: '24 to 27', label: 'Above average',      desc: 'Top 15 to 26% nationally. Competitive at hundreds of solid four-year universities. Above the median at most state flagship schools.', color: '#6366f1' },
                { range: '20 to 23', label: 'Average range',      desc: 'Around or just above the national average of 21. Sufficient for admission at many four-year schools. Retesting often improves results by 2 to 4 points.', color: '#a855f7' },
                { range: '16 to 19', label: 'Below average',      desc: 'Below the national average. Many four-year schools accept this range but fewer merit aid options are available. Consider retesting after focused preparation.', color: '#f59e0b' },
                { range: '1 to 15',  label: 'Needs improvement',  desc: 'Significantly below the national average. Community college pathways are available. Strong retesting improvement is common with structured prep.', color: '#ef4444' },
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

          {/* TOP SCHOOLS AND MEDIAN ACT SCORES */}
          <section aria-labelledby="schools-heading">
            <h2 id="schools-heading" className="text-2xl font-bold text-white mb-2">
              ACT scores for top colleges 2025-2026
            </h2>
            <p className="text-slate-400 text-sm mb-6">
              Median (50th percentile) ACT composite scores for admitted students at competitive US universities. These are the middle 50% ranges, meaning half of admitted students scored within this band.
            </p>
            <div className="overflow-x-auto rounded-xl border border-white/8">
              <table className="w-full text-sm min-w-[500px]" aria-label="ACT scores for top US colleges 2025">
                <thead>
                  <tr className="bg-white/4 border-b border-white/8">
                    <th scope="col" className="text-left px-4 py-3 text-xs font-semibold text-slate-400 uppercase tracking-wider">University</th>
                    <th scope="col" className="text-center px-4 py-3 text-xs font-semibold text-slate-400 uppercase tracking-wider">Middle 50% ACT</th>
                    <th scope="col" className="text-center px-4 py-3 text-xs font-semibold text-slate-400 uppercase tracking-wider hidden sm:table-cell">Admission rate</th>
                    <th scope="col" className="text-left px-4 py-3 text-xs font-semibold text-slate-400 uppercase tracking-wider hidden md:table-cell">Tier</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { school: 'MIT',                    range: '35-36', rate: '4%',  tier: 'Ultra selective' },
                    { school: 'Harvard University',     range: '34-36', rate: '4%',  tier: 'Ultra selective' },
                    { school: 'Yale University',        range: '34-36', rate: '5%',  tier: 'Ultra selective' },
                    { school: 'Princeton University',   range: '34-36', rate: '5%',  tier: 'Ultra selective' },
                    { school: 'Stanford University',    range: '34-36', rate: '4%',  tier: 'Ultra selective' },
                    { school: 'Columbia University',    range: '34-36', rate: '4%',  tier: 'Ultra selective' },
                    { school: 'Duke University',        range: '33-35', rate: '7%',  tier: 'Highly selective' },
                    { school: 'Dartmouth College',      range: '33-35', rate: '7%',  tier: 'Highly selective' },
                    { school: 'Johns Hopkins',          range: '33-35', rate: '7%',  tier: 'Highly selective' },
                    { school: 'Northwestern University',range: '33-35', rate: '7%',  tier: 'Highly selective' },
                    { school: 'Vanderbilt University',  range: '33-35', rate: '9%',  tier: 'Highly selective' },
                    { school: 'Georgetown University',  range: '32-35', rate: '12%', tier: 'Very selective' },
                    { school: 'Notre Dame',             range: '33-35', rate: '13%', tier: 'Very selective' },
                    { school: 'Emory University',       range: '32-34', rate: '14%', tier: 'Very selective' },
                    { school: 'Univ. of Michigan',      range: '31-34', rate: '18%', tier: 'Selective' },
                    { school: 'UC Berkeley',            range: '29-34', rate: '14%', tier: 'Selective' },
                    { school: 'UCLA',                   range: '28-34', rate: '9%',  tier: 'Selective' },
                    { school: 'Univ. of Virginia',      range: '31-34', rate: '18%', tier: 'Selective' },
                    { school: 'Univ. of North Carolina','29-34', rate: '19%', tier: 'Selective' },
                    { school: 'Boston University',      range: '31-34', rate: '14%', tier: 'Selective' },
                  ].map((row, i) => {
                    const [lo, hi] = row.range.split('-').map(Number);
                    const isInRange = displayComposite >= lo && displayComposite <= hi;
                    const isAbove   = displayComposite > hi;
                    return (
                      <tr key={row.school} className={`border-b border-white/5 last:border-0 ${i % 2 === 0 ? '' : 'bg-white/2'}`}>
                        <td className="px-4 py-2.5 font-medium text-slate-200 text-sm">{row.school}</td>
                        <td className="px-4 py-2.5 text-center">
                          <span className={`font-mono text-xs font-semibold px-2 py-0.5 rounded-md ${isInRange ? 'text-black' : isAbove ? 'text-emerald-400' : 'text-slate-400'}`}
                            style={isInRange ? { backgroundColor: COLOR } : {}}>
                            {row.range}
                          </span>
                        </td>
                        <td className="px-4 py-2.5 text-center text-xs text-slate-500 hidden sm:table-cell">{row.rate}</td>
                        <td className="px-4 py-2.5 text-xs text-slate-500 hidden md:table-cell">{row.tier}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
            <p className="text-xs text-slate-600 mt-3">
              Middle 50% ranges highlight where your score falls. Green = your score exceeds the range. Cyan = your score is within the range. Data from Common Data Sets 2024-2025.
            </p>
          </section>

          {/* ACT TO SAT CONVERSION TABLE */}
          <section aria-labelledby="crosswalk-heading">
            <h2 id="crosswalk-heading" className="text-2xl font-bold text-white mb-2">
              ACT to SAT score conversion chart 2025
            </h2>
            <p className="text-slate-400 text-sm mb-6">
              Official College Board and ACT concordance table. Use this to convert your ACT score to its SAT equivalent, or to decide which test to submit when colleges accept both.
            </p>
            <div className="overflow-x-auto rounded-xl border border-white/8">
              <table className="w-full text-sm min-w-[300px]" aria-label="ACT to SAT score conversion chart 2025">
                <thead>
                  <tr className="bg-white/4 border-b border-white/8">
                    <th scope="col" className="text-center px-6 py-3 text-xs font-semibold text-cyan-400 uppercase tracking-wider">ACT</th>
                    <th scope="col" className="text-center px-6 py-3 text-xs font-semibold text-indigo-400 uppercase tracking-wider">SAT equivalent</th>
                    <th scope="col" className="text-center px-6 py-3 text-xs font-semibold text-slate-400 uppercase tracking-wider hidden sm:table-cell">Percentile</th>
                  </tr>
                </thead>
                <tbody>
                  {ACT_SAT_CROSSWALK.map((row, i) => {
                    const isYours = row.act === displayComposite;
                    const pct = ACT_FULL_TABLE.find(r => r.score === row.act)?.pct;
                    return (
                      <tr key={row.act} className={`border-b border-white/5 last:border-0 ${isYours ? 'bg-cyan-500/10' : i % 2 === 0 ? '' : 'bg-white/2'}`}>
                        <td className="px-6 py-2.5 text-center font-mono font-semibold" style={{ color: isYours ? COLOR : 'rgb(226,232,240)' }}>
                          {row.act}
                          {isYours && <span className="ml-1.5 text-[9px] bg-cyan-500/20 text-cyan-300 px-1 py-0.5 rounded">you</span>}
                        </td>
                        <td className="px-6 py-2.5 text-center font-mono text-indigo-400">{row.sat}</td>
                        <td className="px-6 py-2.5 text-center text-xs text-slate-500 hidden sm:table-cell">{pct ? `${pct}th` : '--'}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
            <p className="text-xs text-slate-600 mt-3">Source: Official College Board / ACT concordance tables. Use our <Link href="/exams/sat" className="text-indigo-400 hover:text-indigo-300">SAT percentile calculator</Link> for full SAT score breakdowns.</p>
          </section>

          {/* ACT SECTION SCORE INFO */}
          <section aria-labelledby="sections-heading">
            <h2 id="sections-heading" className="text-2xl font-bold text-white mb-2">
              ACT section scores explained
            </h2>
            <p className="text-slate-400 text-sm mb-6">
              Each ACT section is scored from 1 to 36. Your composite is the average of all four. Here is what each section tests and the average score for each.
            </p>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                { section: 'English', avg: 20, color: COLOR, icon: '📝',
                  desc: '75 questions in 45 minutes. Tests grammar, punctuation, sentence structure, and rhetorical skills. This is often the easiest section for strong readers.' },
                { section: 'Mathematics', avg: 20, color: '#6366f1', icon: '📐',
                  desc: '60 questions in 60 minutes. Covers pre-algebra through basic trigonometry. Calculators are permitted for the full section, unlike the SAT.' },
                { section: 'Reading', avg: 21, color: '#a855f7', icon: '📖',
                  desc: '40 questions in 35 minutes. Four passages covering literary narrative, social science, humanities, and natural science. Tests close reading and inference.' },
                { section: 'Science', avg: 20, color: '#34d399', icon: '🔬',
                  desc: '40 questions in 35 minutes. Tests scientific reasoning using data interpretation and experimental design. Prior science knowledge is helpful but not required.' },
              ].map(s => (
                <article key={s.section} className="bg-[#12141f] border border-white/7 rounded-xl p-5">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-xl" aria-hidden="true">{s.icon}</span>
                    <div>
                      <h3 className="text-sm font-semibold text-white">{s.section}</h3>
                      <p className="text-xs text-slate-500">National average: <span className="font-semibold" style={{ color: s.color }}>{s.avg}</span></p>
                    </div>
                  </div>
                  <p className="text-xs text-slate-400 leading-relaxed">{s.desc}</p>
                </article>
              ))}
            </div>
          </section>

          {/* FAQ */}
          <FAQSection />

          {/* OTHER CALCULATORS */}
          <section className="bg-[#12141f] border border-white/7 rounded-2xl p-6" aria-labelledby="other-tools-heading">
            <h2 id="other-tools-heading" className="text-sm font-semibold text-slate-300 mb-4">Other free exam calculators</h2>
            <div className="flex flex-wrap gap-2">
              {[
                { id: 'sat',      name: 'SAT Score Calculator',     color: '#6366f1' },
                { id: 'gre',      name: 'GRE Score Calculator',     color: '#a855f7' },
                { id: 'gmat',     name: 'GMAT Score Calculator',    color: '#f59e0b' },
                { id: 'lsat',     name: 'LSAT Score Calculator',    color: '#ef4444' },
                { id: 'gcse',     name: 'GCSE Grade Boundaries',    color: '#34d399' },
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
