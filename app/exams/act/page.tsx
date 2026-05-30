'use client';

import { useState, useMemo } from 'react';
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
    question: 'What is a good ACT score in 2025–2026?',
    answer: 'A good ACT score depends on your target colleges. The national average ACT composite score is 21. A score of 24 (74th percentile) is above average and competitive at many four-year universities. Scores of 28 or above (88th percentile) are strong for selective schools. A score of 30 or above (93rd percentile) is competitive at highly selective schools, and 33 or above (97th percentile) puts you in the top 3%, competitive at the most elite universities including Ivy League schools, MIT, and Stanford.',
  },
  {
    question: 'What is the national average ACT score in 2025–2026?',
    answer: 'The national average ACT composite score in 2025–2026 is 21 out of 36, placing the average student at approximately the 51st percentile nationally. The average section scores are approximately: English 20, Mathematics 20, Reading 21, and Science 20. Scoring above 21 means you have outperformed more than half of all ACT test takers in the United States. The national average has remained stable between 20 and 21 for several consecutive years.',
  },
  {
    question: 'What percentile is a 24 ACT score?',
    answer: 'A score of 24 on the ACT is approximately the 74th percentile, meaning you scored higher than about 74% of all ACT test takers nationally. This is a solid above-average score that is competitive at many four-year universities, including many state flagship schools where a 24 is at or above the 25th percentile for admitted students.',
  },
  {
    question: 'What percentile is a 28 ACT score?',
    answer: 'A score of 28 on the ACT is approximately the 88th percentile, placing you in the top 12% of all ACT test takers nationally. This is a strong score competitive at selective universities such as the University of Michigan, UCLA, Boston University, and many other schools in the top 50.',
  },
  {
    question: 'What percentile is a 30 ACT score?',
    answer: 'A score of 30 on the ACT is approximately the 93rd percentile. You scored higher than 93% of all test takers, placing you in the top 7% nationally. This score is competitive at highly selective universities including many in the national top 25 and puts you at or above the 25th percentile for schools like Duke, Northwestern, and Georgetown.',
  },
  {
    question: 'What percentile is a 32 ACT score?',
    answer: 'A score of 32 on the ACT is approximately the 96th percentile, placing you in the top 4% of all test takers. This is an excellent score that opens doors at the most competitive universities in the country. A 32 is at or above the 25th percentile for Ivy League schools and puts you in a strong position for merit scholarships everywhere.',
  },
  {
    question: 'What percentile is a 33 ACT score?',
    answer: 'A score of 33 on the ACT is approximately the 97th percentile, placing you in the top 3% of all ACT test takers. This is an exceptional score highly competitive at the most selective universities, including Ivy League schools, MIT, and Stanford. A 33 is at the median for some highly selective schools.',
  },
  {
    question: 'What percentile is a 35 ACT score?',
    answer: 'A score of 35 on the ACT is approximately the 99th percentile, placing you in the top 1% of all test takers nationwide. A 35 is a near-perfect score and is competitive at every university in the country, including Harvard, Yale, Princeton, and MIT — all of which have median ACT scores between 34 and 36.',
  },
  {
    question: 'What percentile is a 20 ACT score?',
    answer: 'A score of 20 on the ACT is approximately the 49th percentile, just below the national average of 21. This is a mid-range score sufficient for admission to many four-year universities and community colleges. Students at this level who retest with focused preparation typically see a 3–5 point improvement.',
  },
  {
    question: 'What is the average ACT score for the class of 2026?',
    answer: 'The average ACT composite score for the class of 2026 is approximately 21 out of 36, consistent with the national average over recent years. This means scoring a 22 or above puts you ahead of the majority of your graduating class nationally. Section averages for the class of 2026 are approximately: English 20, Math 20, Reading 21, and Science 20.',
  },
  {
    question: 'What ACT score do I need for Harvard?',
    answer: "Harvard's middle 50% ACT range for admitted students is 34–36. A score below 33 would be below the typical range for Harvard, though admissions are holistic and test scores are one of many factors. Harvard reports all ACT scores, though they focus on your highest composite.",
  },
  {
    question: 'How is the ACT scored?',
    answer: 'The ACT is scored on a composite scale of 1 to 36. It has four sections: English (1–36), Mathematics (1–36), Reading (1–36), and Science (1–36). Your composite score is the average of these four section scores, rounded to the nearest whole number. There is no penalty for wrong answers — always answer every question. The optional Writing test is scored separately on a scale of 2–12 and does not affect your composite.',
  },
  {
    question: 'ACT vs SAT: which should I take?',
    answer: 'Both tests are accepted equally at virtually every US college. The ACT includes a dedicated Science section and tends to have more straightforward Math. The SAT has a stronger emphasis on data analysis and longer reading passages. Most students perform similarly on both tests. Take a free practice test for each to see which format suits your strengths. If you score higher on the ACT, report that; if higher on the SAT, report that instead.',
  },
  {
    question: 'How many times can I take the ACT?',
    answer: 'ACT, Inc. does not impose a limit on how many times you can take the ACT. Most students take it 2–3 times. Many colleges superscore — taking the highest composite across multiple test dates — so retaking can meaningfully improve your standing. The ACT is offered in February, April, June, July, September, October, and December each year.',
  },
];

const ACT_FULL_TABLE = [
  { score: 36, pct: 99, tier: 'Perfect score',     schools: 'All universities' },
  { score: 35, pct: 99, tier: 'Top 1%',            schools: 'All Ivy League, MIT, Stanford' },
  { score: 34, pct: 98, tier: 'Top 2%',            schools: 'All highly selective' },
  { score: 33, pct: 97, tier: 'Top 3%',            schools: 'Ivy League, top 10 universities' },
  { score: 32, pct: 96, tier: 'Top 4%',            schools: 'Top 15 universities' },
  { score: 31, pct: 95, tier: 'Top 5%',            schools: 'Top 20 universities' },
  { score: 30, pct: 93, tier: 'Top 7%',            schools: 'Top 25 universities' },
  { score: 29, pct: 91, tier: 'Top 9%',            schools: 'Top 30 universities' },
  { score: 28, pct: 88, tier: 'Top 12%',           schools: 'Selective universities' },
  { score: 27, pct: 85, tier: 'Top 15%',           schools: 'Selective universities' },
  { score: 26, pct: 82, tier: 'Top 18%',           schools: 'Above average colleges' },
  { score: 25, pct: 78, tier: 'Top 22%',           schools: 'Above average colleges' },
  { score: 24, pct: 74, tier: 'Top 26%',           schools: 'Many four-year colleges' },
  { score: 23, pct: 69, tier: 'Top 31%',           schools: 'Many four-year colleges' },
  { score: 22, pct: 63, tier: 'Top 37%',           schools: 'Most four-year colleges' },
  { score: 21, pct: 57, tier: 'National average',  schools: 'Most four-year colleges' },
  { score: 20, pct: 49, tier: 'Average range',     schools: 'Most four-year colleges' },
  { score: 19, pct: 43, tier: 'Average range',     schools: 'Many four-year colleges' },
  { score: 18, pct: 38, tier: 'Below average',     schools: 'Less selective colleges' },
  { score: 17, pct: 31, tier: 'Below average',     schools: 'Less selective colleges' },
  { score: 16, pct: 25, tier: 'Below average',     schools: 'Community colleges' },
  { score: 15, pct: 19, tier: 'Needs improvement', schools: 'Community colleges' },
  { score: 14, pct: 13, tier: 'Needs improvement', schools: 'Community colleges' },
  { score: 12, pct: 6,  tier: 'Needs improvement', schools: 'Community colleges' },
];

const ACT_SAT_CROSSWALK = [
  { act: 36, sat: 1590, pct: 99 }, { act: 35, sat: 1560, pct: 99 }, { act: 34, sat: 1530, pct: 98 },
  { act: 33, sat: 1490, pct: 97 }, { act: 32, sat: 1450, pct: 96 }, { act: 31, sat: 1420, pct: 95 },
  { act: 30, sat: 1390, pct: 93 }, { act: 29, sat: 1350, pct: 91 }, { act: 28, sat: 1310, pct: 88 },
  { act: 27, sat: 1280, pct: 85 }, { act: 26, sat: 1240, pct: 82 }, { act: 25, sat: 1210, pct: 78 },
  { act: 24, sat: 1160, pct: 74 }, { act: 23, sat: 1130, pct: 69 }, { act: 22, sat: 1100, pct: 63 },
  { act: 21, sat: 1060, pct: 57 }, { act: 20, sat: 1020, pct: 49 }, { act: 19, sat: 980, pct: 43 },
  { act: 18, sat: 940, pct: 38 },  { act: 17, sat: 900, pct: 31 },  { act: 16, sat: 850, pct: 25 },
];

const COLLEGES = [
  { school: 'MIT',                     range: '35–36', lo: 35, hi: 36, rate: '4%' },
  { school: 'Harvard University',      range: '34–36', lo: 34, hi: 36, rate: '4%' },
  { school: 'Yale University',         range: '34–36', lo: 34, hi: 36, rate: '5%' },
  { school: 'Princeton University',    range: '34–36', lo: 34, hi: 36, rate: '5%' },
  { school: 'Stanford University',     range: '34–36', lo: 34, hi: 36, rate: '4%' },
  { school: 'Duke University',         range: '33–35', lo: 33, hi: 35, rate: '7%' },
  { school: 'Northwestern University', range: '33–35', lo: 33, hi: 35, rate: '7%' },
  { school: 'Georgetown University',   range: '32–35', lo: 32, hi: 35, rate: '12%' },
  { school: 'Univ. of Michigan',       range: '31–34', lo: 31, hi: 34, rate: '18%' },
  { school: 'UCLA',                    range: '28–34', lo: 28, hi: 34, rate: '9%' },
  { school: 'Univ. of Virginia',       range: '31–34', lo: 31, hi: 34, rate: '18%' },
  { school: 'Boston University',       range: '31–34', lo: 31, hi: 34, rate: '14%' },
  { school: 'Univ. of Texas Austin',   range: '25–32', lo: 25, hi: 32, rate: '29%' },
  { school: 'Penn State',              range: '25–31', lo: 25, hi: 31, rate: '54%' },
];

function PercentileGauge({ percentile, color }: { percentile: number; color: string }) {
  const r = 72, circ = 2 * Math.PI * r;
  const dash = circ * Math.min(percentile / 100, 1);
  return (
    <div className="relative w-44 h-44 mx-auto" role="img" aria-label={`${percentile}th percentile`}>
      <svg className="w-full h-full -rotate-90" viewBox="0 0 160 160">
        <circle cx="80" cy="80" r={r} fill="none" stroke="rgba(255,255,255,0.05)" strokeWidth="14" />
        <circle cx="80" cy="80" r={r} fill="none" stroke={color} strokeWidth="14" strokeLinecap="round"
          strokeDasharray={`${dash} ${circ - dash}`}
          style={{ transition: 'stroke-dasharray 0.8s ease-out' }} />
      </svg>
      <div className="absolute inset-0 flex flex-col items-center justify-center gap-0.5">
        <span className="text-4xl font-bold text-white tabular-nums">
          {percentile}<span className="text-lg text-slate-400 font-normal">th</span>
        </span>
        <span className="text-xs text-slate-500">percentile</span>
      </div>
    </div>
  );
}

function ScoreSlider({ label, value, min, max, step, avg, color, onChange }: {
  label: string; value: number; min: number; max: number;
  step: number; avg: number; color: string; onChange: (v: number) => void;
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
        <div className="absolute h-1.5 rounded-full" style={{ width: `${pct}%`, backgroundColor: color, opacity: 0.7, transition: 'width 0.075s' }} />
        <div className="absolute w-0.5 h-3 rounded-full bg-white/20" style={{ left: `${((avg - min) / (max - min)) * 100}%` }} />
        <input type="range" min={min} max={max} step={step} value={value}
          onChange={e => onChange(Number(e.target.value))} aria-label={label}
          className="absolute w-full h-full opacity-0 cursor-pointer" style={{ zIndex: 10 }} />
        <div className="absolute w-5 h-5 rounded-full border-2 border-white shadow-lg shadow-black/40 pointer-events-none"
          style={{ left: `calc(${pct}% - 10px)`, backgroundColor: color, transition: 'left 0.075s' }} />
      </div>
    </div>
  );
}

function FAQSection() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section aria-labelledby="faq-heading">
      <h2 id="faq-heading" className="text-2xl font-bold text-white mb-2">ACT score percentile — frequently asked questions</h2>
      <p className="text-slate-400 text-sm mb-6">Common questions about ACT scoring, percentiles, the national average ACT score in 2026, and what scores get you into top schools.</p>
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
  const [english, setEnglish]     = useState(20);
  const [math, setMath]           = useState(20);
  const [reading, setReading]     = useState(21);
  const [science, setScience]     = useState(20);
  const [showFullTable, setShowFullTable] = useState(false);
  const [showAllColleges, setShowAllColleges] = useState(false);

  const derivedComposite = useMemo(() => Math.round((english + math + reading + science) / 4), [english, math, reading, science]);
  const displayComposite = mode === 'composite' ? composite : derivedComposite;
  const compositePerc    = useMemo(() => getPercentile(displayComposite, ACT_COMPOSITE_PERCENTILES), [displayComposite]);
  const englishPerc      = useMemo(() => getPercentile(english, ACT_ENGLISH_PERCENTILES), [english]);
  const mathPerc         = useMemo(() => getPercentile(math, ACT_MATH_PERCENTILES), [math]);
  const readingPerc      = useMemo(() => getPercentile(reading, ACT_READING_PERCENTILES), [reading]);
  const sciencePerc      = useMemo(() => getPercentile(science, ACT_SCIENCE_PERCENTILES), [science]);
  const context          = useMemo(() => getACTPercentileContext(compositePerc), [compositePerc]);

  const satEquiv = useMemo(() => ACT_SAT_CROSSWALK.find(r => r.act === displayComposite)?.sat ?? null, [displayComposite]);
  const visibleColleges = showAllColleges ? COLLEGES : COLLEGES.slice(0, 8);

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
    name: 'ACT Score Calculator 2025–2026',
    url: 'https://gradesnova.com/exams/act',
    description: 'Free ACT score percentile calculator. Enter your ACT composite or section scores to instantly see your national percentile ranking. Updated for 2025–2026.',
    applicationCategory: 'EducationalApplication', operatingSystem: 'Any',
    offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
    provider: { '@type': 'Organization', name: 'GradesNova', url: 'https://gradesnova.com' },
    dateModified: '2025-08-01',
  };
  const schemaDataset = {
    '@context': 'https://schema.org', '@type': 'Dataset',
    name: 'ACT Score Percentile Chart 2025–2026',
    description: 'Complete ACT composite score to national percentile mapping based on official ACT national norms. Includes section percentiles for English, Math, Reading, and Science.',
    url: 'https://gradesnova.com/exams/act',
    creator: { '@type': 'Organization', name: 'GradesNova' },
    dateModified: '2025-08-01',
    keywords: 'ACT score percentile, ACT national average, ACT score chart, ACT calculator 2026',
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

        {/* HEADER */}
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
              <div className="w-10 h-10 rounded-xl flex items-center justify-center text-xl"
                style={{ backgroundColor: `${COLOR}18` }} aria-hidden="true">✏️</div>
              <span className="text-xs font-mono uppercase tracking-widest" style={{ color: `${COLOR}aa` }}>ACT · ACT, Inc. · Composite 1–36</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white tracking-tight mb-3">
              ACT Score Percentile Calculator (2025–2026)
            </h1>
            <p className="text-lg text-slate-400 max-w-2xl mb-4">
              Enter your ACT composite or section scores to instantly see your <strong className="text-white font-medium">national percentile ranking</strong>. The <strong className="text-white font-medium">national average ACT score in 2025–2026 is 21</strong> — see exactly how you compare. Includes section breakdowns, ACT-to-SAT conversion, and college ranges. Updated with official ACT national norms.
            </p>
            <div className="flex flex-wrap gap-2">
              {[
                ['Official ACT norms 2025–2026', COLOR],
                ['Composite + 4 section percentiles', '#a855f7'],
                ['ACT → SAT conversion', '#6366f1'],
                ['Last updated: May 2026', '#34d399'],
              ].map(([label, color]) => (
                <span key={label} className="text-xs px-3 py-1 rounded-full font-medium border"
                  style={{ backgroundColor: `${color}15`, borderColor: `${color}30`, color }}>
                  {label}
                </span>
              ))}
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
                  <ScoreSlider label="ACT composite score (1–36)" value={composite} min={1} max={36} step={1} avg={21} color={COLOR} onChange={setComposite} />
                ) : (
                  <>
                    <ScoreSlider label="English (1–36)" value={english} min={1} max={36} step={1} avg={20} color={COLOR} onChange={setEnglish} />
                    <ScoreSlider label="Math (1–36)" value={math} min={1} max={36} step={1} avg={20} color="#6366f1" onChange={setMath} />
                    <ScoreSlider label="Reading (1–36)" value={reading} min={1} max={36} step={1} avg={21} color="#a855f7" onChange={setReading} />
                    <ScoreSlider label="Science (1–36)" value={science} min={1} max={36} step={1} avg={20} color="#34d399" onChange={setScience} />
                    <div className="border-t border-white/8 pt-4 flex items-center justify-between">
                      <span className="text-sm text-slate-400">Composite (average of 4)</span>
                      <span className="text-xl font-bold text-white">{derivedComposite}</span>
                    </div>
                  </>
                )}
              </div>

              {/* ACT → SAT */}
              {satEquiv && (
                <div className="bg-[#12141f] border border-white/8 rounded-xl p-4">
                  <p className="text-xs text-slate-500 uppercase tracking-wider font-semibold mb-2">SAT equivalent</p>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-xs text-slate-400">ACT {displayComposite} ≈</p>
                      <p className="text-2xl font-bold text-white mt-0.5">
                        {satEquiv} <span className="text-sm text-slate-400 font-normal">SAT</span>
                      </p>
                    </div>
                    <Link href="/exams/sat" className="text-xs px-3 py-1.5 rounded-lg font-medium border transition-all hover:scale-105"
                      style={{ backgroundColor: '#6366f115', borderColor: '#6366f130', color: '#6366f1' }}>
                      SAT calc
                    </Link>
                  </div>
                </div>
              )}

              {/* Benchmarks */}
              <div className="bg-[#12141f] border border-white/8 rounded-xl p-5">
                <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-3">Score benchmarks</p>
                <div className="space-y-1.5">
                  {[
                    { score: 36, pct: 99, label: 'Perfect score' },
                    { score: 33, pct: 97, label: 'Ivy-competitive' },
                    { score: 30, pct: 93, label: 'Top 7%' },
                    { score: 27, pct: 85, label: 'Top 15%' },
                    { score: 24, pct: 74, label: 'Above average' },
                    { score: 21, pct: 57, label: 'National average' },
                    { score: 18, pct: 38, label: 'Below average' },
                  ].map(b => (
                    <div key={b.score} className={`flex items-center justify-between py-1 ${displayComposite === b.score ? 'opacity-100' : 'opacity-50'}`}>
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
              <div className="bg-[#12141f] border border-white/8 rounded-2xl p-7">
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
                    { label: 'Your score', value: displayComposite },
                    { label: 'National avg', value: 21 },
                    { label: 'Percentile', value: `${compositePerc}th` },
                  ].map(s => (
                    <div key={s.label} className="bg-white/4 rounded-xl p-3 text-center">
                      <p className="text-base font-bold text-white tabular-nums">{s.value}</p>
                      <p className="text-[10px] text-slate-500 mt-0.5">{s.label}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Section percentiles */}
              {mode === 'sections' && (
                <div className="bg-[#12141f] border border-white/8 rounded-2xl p-6">
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
                            <div className="h-full rounded-full" style={{ width: `${s.pct}%`, backgroundColor: s.color, transition: 'width 0.5s ease' }} />
                          </div>
                        </div>
                        <div className="w-12 text-right shrink-0">
                          <p className="text-sm font-bold tabular-nums" style={{ color: s.color }}>{s.pct}th</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* ACT format explainer */}
              <div className="bg-[#12141f] border border-white/8 rounded-2xl p-6">
                <h3 className="text-sm font-semibold text-slate-300 mb-4">ACT format overview</h3>
                <div className="space-y-3">
                  {[
                    { icon: '📝', label: 'English', color: COLOR, time: '45 min', q: '75 questions', detail: 'Grammar, punctuation, sentence structure, rhetorical skills' },
                    { icon: '📐', label: 'Mathematics', color: '#6366f1', time: '60 min', q: '60 questions', detail: 'Pre-algebra through trig. Calculator permitted the entire section' },
                    { icon: '📖', label: 'Reading', color: '#a855f7', time: '35 min', q: '40 questions', detail: 'Literary narrative, social science, humanities, natural science' },
                    { icon: '🔬', label: 'Science', color: '#34d399', time: '35 min', q: '40 questions', detail: 'Scientific reasoning, data interpretation, experimental design' },
                  ].map(s => (
                    <div key={s.label} className="flex gap-3 p-3 bg-white/3 rounded-xl">
                      <span className="text-base mt-0.5" aria-hidden="true">{s.icon}</span>
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <span className="text-sm font-semibold text-white">{s.label}</span>
                          <span className="text-[10px] font-mono px-1.5 py-0.5 rounded" style={{ backgroundColor: `${s.color}20`, color: s.color }}>{s.time}</span>
                          <span className="text-[10px] text-slate-500">{s.q}</span>
                        </div>
                        <p className="text-xs text-slate-500">{s.detail}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* NATIONAL AVERAGE */}
          <section aria-labelledby="avg-heading">
            <h2 id="avg-heading" className="text-2xl font-bold text-white mb-4">What is the National Average ACT Score in 2025–2026?</h2>
            <p className="text-slate-400 text-sm mb-6 leading-relaxed max-w-3xl">
              The national average ACT composite score in 2025–2026 is <strong className="text-white">21 out of 36</strong>, placing the average student at the <strong className="text-white">51st percentile</strong> nationally. Scoring above 21 means you have outperformed more than half of all ACT test takers. The national average has stayed between 20 and 21 for several consecutive years.
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
              {[
                { icon: '📊', label: 'National avg composite', value: '21',   sub: '51st percentile', color: COLOR },
                { icon: '📝', label: 'Avg English score',      value: '20',   sub: '49th percentile', color: '#a855f7' },
                { icon: '📐', label: 'Avg Math score',         value: '20',   sub: '37th percentile', color: '#6366f1' },
                { icon: '📖', label: 'Avg Reading score',      value: '21',   sub: '46th percentile', color: '#34d399' },
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

          {/* WHAT IS A GOOD ACT SCORE */}
          <section aria-labelledby="tiers-heading">
            <h2 id="tiers-heading" className="text-2xl font-bold text-white mb-4">What is a Good ACT Score in 2025–2026?</h2>
            <p className="text-slate-400 text-sm mb-6 max-w-3xl">
              A good ACT score depends entirely on your target colleges. Here is how score ranges break down nationally for the 2025–2026 admissions cycle.
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                { range: '33–36', label: 'Exceptional',    desc: 'Top 3% nationally. Competitive at Ivy League, MIT, Stanford, and all highly selective universities. Qualifies for merit aid at virtually every school.', color: '#34d399' },
                { range: '28–32', label: 'Strong',         desc: 'Top 4–12%. Competitive at selective schools — Michigan, UCLA, Georgetown, Notre Dame, and most top-30 universities.', color: COLOR },
                { range: '24–27', label: 'Above average',  desc: 'Top 15–26%. Competitive at many solid four-year universities. At or above the median for most state flagship schools.', color: '#6366f1' },
                { range: '21–23', label: 'Average',        desc: 'Around the national average of 21. Sufficient for many four-year colleges. Most students see meaningful improvement with focused prep.', color: '#a855f7' },
                { range: '18–20', label: 'Below average',  desc: 'Below the national average. Many four-year schools accept this range. A 3–5 point gain is common with structured preparation.', color: '#f59e0b' },
                { range: '1–17',  label: 'Needs work',     desc: 'Significantly below average. Community college pathways available. Structured prep with a tutor yields consistent improvement.', color: '#ef4444' },
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

          {/* KEY FACTS */}
          <section aria-labelledby="facts-heading">
            <h2 id="facts-heading" className="sr-only">ACT key facts 2025–2026</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                { icon: '📊', label: 'National average', value: '21',    sub: 'Composite (51st pct)', color: COLOR },
                { icon: '🎯', label: 'Top 10% threshold', value: '29',   sub: '91st percentile', color: '#34d399' },
                { icon: '🏆', label: 'Ivy League range',  value: '34–36', sub: '98th–99th percentile', color: '#a855f7' },
                { icon: '📅', label: 'Test dates / year', value: '7',    sub: 'Feb Apr Jun Jul Sep Oct Dec', color: '#f59e0b' },
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

          {/* PERCENTILE TABLE */}
          <section aria-labelledby="chart-heading">
            <h2 id="chart-heading" className="text-2xl font-bold text-white mb-2">ACT Score Percentile Chart 2025–2026</h2>
            <p className="text-slate-400 text-sm mb-6">
              Complete ACT composite score to national percentile table based on official ACT, Inc. national norms. The national average ACT score is 21. A score of 28 equals the 88th percentile. A score of 33 equals the 97th percentile.
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
              <button onClick={() => setShowFullTable(true)} className="mt-3 text-xs font-medium transition-colors" style={{ color: COLOR }}>
                Show all scores (12 to 36) ↓
              </button>
            )}
            <p className="text-xs text-slate-600 mt-2">Source: ACT National Norms, updated for 2025–2026 admissions cycle.</p>
          </section>

          {/* COLLEGES */}
          <section aria-labelledby="colleges-heading">
            <h2 id="colleges-heading" className="text-2xl font-bold text-white mb-2">ACT Scores for Top Colleges 2025–2026</h2>
            <p className="text-slate-400 text-sm mb-6">
              Middle 50% ACT composite ranges for admitted students at competitive US universities. <span style={{ color: COLOR }} className="font-medium">Cyan highlight</span> = your score is in range. <span className="text-emerald-400 font-medium">Green</span> = you exceed the range.
            </p>
            <div className="overflow-x-auto rounded-xl border border-white/8">
              <table className="w-full text-sm min-w-[500px]" aria-label="ACT scores for top colleges 2025-2026">
                <thead>
                  <tr className="bg-white/4 border-b border-white/8">
                    <th scope="col" className="text-left px-4 py-3 text-xs font-semibold text-slate-400 uppercase tracking-wider">University</th>
                    <th scope="col" className="text-center px-4 py-3 text-xs font-semibold text-slate-400 uppercase tracking-wider">Middle 50% ACT</th>
                    <th scope="col" className="text-center px-4 py-3 text-xs font-semibold text-slate-400 uppercase tracking-wider hidden sm:table-cell">Admit rate</th>
                  </tr>
                </thead>
                <tbody>
                  {visibleColleges.map((row, i) => {
                    const inRange = displayComposite >= row.lo && displayComposite <= row.hi;
                    const above   = displayComposite > row.hi;
                    return (
                      <tr key={row.school} className={`border-b border-white/5 last:border-0 ${i % 2 === 0 ? '' : 'bg-white/2'}`}>
                        <td className="px-4 py-2.5 font-medium text-slate-200 text-sm">{row.school}</td>
                        <td className="px-4 py-2.5 text-center">
                          <span className="font-mono text-xs font-semibold px-2 py-0.5 rounded-md"
                            style={inRange
                              ? { backgroundColor: COLOR, color: '#000' }
                              : above
                              ? { backgroundColor: 'rgba(52,211,153,0.12)', color: '#34d399' }
                              : { backgroundColor: 'rgba(255,255,255,0.06)', color: '#64748b' }}>
                            {row.range}
                          </span>
                        </td>
                        <td className="px-4 py-2.5 text-center text-xs text-slate-500 hidden sm:table-cell">{row.rate}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
            {!showAllColleges && (
              <button onClick={() => setShowAllColleges(true)} className="mt-3 text-xs font-medium transition-colors" style={{ color: COLOR }}>
                Show all colleges ↓
              </button>
            )}
          </section>

          {/* ACT TO SAT CONVERSION */}
          <section aria-labelledby="crosswalk-heading">
            <h2 id="crosswalk-heading" className="text-2xl font-bold text-white mb-2">ACT to SAT Score Conversion Chart 2025</h2>
            <p className="text-slate-400 text-sm mb-6">
              Official College Board and ACT concordance table. Convert your ACT score to its SAT equivalent when deciding which test to submit or comparing scores.
            </p>
            <div className="overflow-x-auto rounded-xl border border-white/8">
              <table className="w-full text-sm min-w-[300px]" aria-label="ACT to SAT score conversion chart 2025">
                <thead>
                  <tr className="bg-white/4 border-b border-white/8">
                    <th scope="col" className="text-center px-6 py-3 text-xs font-semibold uppercase tracking-wider" style={{ color: COLOR }}>ACT composite</th>
                    <th scope="col" className="text-center px-6 py-3 text-xs font-semibold text-indigo-400 uppercase tracking-wider">SAT equivalent</th>
                    <th scope="col" className="text-center px-6 py-3 text-xs font-semibold text-slate-400 uppercase tracking-wider hidden sm:table-cell">Percentile</th>
                  </tr>
                </thead>
                <tbody>
                  {ACT_SAT_CROSSWALK.map((row, i) => {
                    const isYours = row.act === displayComposite;
                    return (
                      <tr key={row.act} className={`border-b border-white/5 last:border-0 ${isYours ? 'bg-cyan-500/10' : i % 2 === 0 ? '' : 'bg-white/2'}`}>
                        <td className="px-6 py-2.5 text-center font-mono font-semibold" style={{ color: isYours ? COLOR : 'rgb(226,232,240)' }}>
                          {row.act}
                          {isYours && <span className="ml-1.5 text-[9px] bg-cyan-500/20 text-cyan-300 px-1 py-0.5 rounded">you</span>}
                        </td>
                        <td className="px-6 py-2.5 text-center font-mono font-bold text-indigo-400">{row.sat}</td>
                        <td className="px-6 py-2.5 text-center text-xs text-slate-500 hidden sm:table-cell">{row.pct}th</td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
            <p className="text-xs text-slate-600 mt-2">Source: Official College Board / ACT concordance tables. Use our <Link href="/exams/sat" className="text-indigo-400 hover:text-indigo-300">SAT percentile calculator</Link> for full SAT score breakdowns.</p>
          </section>

          {/* HOW TO IMPROVE */}
          <section aria-labelledby="improve-heading" className="bg-[#12141f] border border-white/7 rounded-2xl p-6 md:p-8">
            <h2 id="improve-heading" className="text-2xl font-bold text-white mb-4">How to Improve Your ACT Score</h2>
            <p className="text-slate-400 text-sm mb-6 max-w-3xl">
              Most students improve their ACT composite by 2–5 points on a retake with targeted preparation. Because the ACT composite is an average of four sections, improving even one section by 3–4 points meaningfully moves your composite.
            </p>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                { step: '01', title: 'Identify your weakest section', desc: 'Use official ACT practice tests to identify which of the four sections is limiting your composite. Gaining 4 points in one section increases your composite by 1 point — focused prep beats studying everything equally.' },
                { step: '02', title: 'Time yourself strictly', desc: 'The ACT is faster-paced than the SAT. English is only 36 seconds per question. Practice under strict time conditions from day one. Pacing is the #1 factor that separates students who improve from those who don\'t.' },
                { step: '03', title: 'Use official ACT prep materials', desc: 'ACT, Inc. publishes official practice tests on act.org. These are the most accurate representation of what you will see on test day. Third-party materials vary widely in quality.' },
                { step: '04', title: 'Retake strategically', desc: 'Many colleges superscore the ACT, meaning they take the highest composite across multiple test dates. If your school of choice superscores, retaking even with a slight improvement in just one section can meaningfully improve your standing.' },
              ].map(item => (
                <div key={item.step} className="flex gap-4">
                  <div className="text-2xl font-black font-mono shrink-0 mt-0.5" style={{ color: `${COLOR}50` }}>{item.step}</div>
                  <div>
                    <h3 className="text-sm font-semibold text-white mb-1.5">{item.title}</h3>
                    <p className="text-xs text-slate-500 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <FAQSection />

          {/* OTHER CALCULATORS */}
          <section className="bg-[#12141f] border border-white/7 rounded-2xl p-6" aria-labelledby="other-tools-heading">
            <h2 id="other-tools-heading" className="text-sm font-semibold text-slate-300 mb-4">Other free exam percentile calculators</h2>
            <div className="flex flex-wrap gap-2">
              {[
                { id: 'sat',      name: 'SAT Score Calculator',     color: '#6366f1' },
                { id: 'gre',      name: 'GRE Score Calculator',     color: '#a855f7' },
                { id: 'gmat',     name: 'GMAT Score Calculator',    color: '#f59e0b' },
                { id: 'lsat',     name: 'LSAT Score Calculator',    color: '#ef4444' },
                { id: 'gcse',     name: 'GCSE Grade Calculator',    color: '#34d399' },
                { id: 'a-levels', name: 'A-Level Calculator',       color: '#ec4899' },
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
