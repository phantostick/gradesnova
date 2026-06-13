'use client';

// app/exams/sat/page.tsx
// PERFORMANCE CHANGES:
//   - Removed framer-motion entirely (~30KB bundle reduction)
//   - PercentileGauge: stroke-dasharray animated via CSS @keyframes
//     (same visual result — arc draws in over ~0.8s on mount/score change)
//   - ScoreSlider thumb and fill: CSS transition already handles these
//   - No behaviour change visible to users

import { useState, useMemo } from 'react';
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
    question: 'How do I use this SAT score calculator?',
    answer: 'Using this free SAT score calculator is simple. Drag the slider to your SAT composite score (400–1600) to instantly see your national percentile ranking, ACT equivalent score, and how you compare against top college SAT ranges. If you want to calculate from section scores, switch to the "By section" tab and enter your Math score (200–800) and EBRW score (200–800) — the calculator will show individual section percentiles and your composite total. All results update in real time. No sign-up required.',
  },
  {
    question: 'What is a good SAT score for 2025–2026?',
    answer: 'A good SAT score depends on your target colleges. The national average SAT composite score is approximately 1050. Scores above 1200 (74th percentile) are above average and competitive at many four-year universities. A score of 1400 places you in the top 6% nationally (94th percentile), which is competitive at selective universities. For Ivy League and highly selective schools — Harvard, Yale, Princeton, MIT, Stanford — you typically need 1500 or above (97th+ percentile). The Digital SAT, introduced in 2024, uses the same 400–1600 scale.',
  },
  {
    question: 'What percentile is a 1200 SAT score?',
    answer: 'A score of 1200 on the SAT is approximately the 74th percentile, meaning you scored higher than about 74% of all SAT test takers nationally. This is a solid above-average score competitive at many four-year universities including large state schools, and is near or above the 25th percentile for many mid-tier schools.',
  },
  {
    question: 'What percentile is a 1300 SAT score?',
    answer: 'A score of 1300 on the SAT is approximately the 82nd percentile, placing you in the top 18% of all test takers. This is a strong score competitive at many selective universities. It is at or above the median for many well-regarded state flagship universities.',
  },
  {
    question: 'What percentile is a 1400 SAT score?',
    answer: 'A score of 1400 on the SAT is approximately the 94th percentile, placing you in the top 6% of all SAT test takers nationally. This is a strong score competitive at highly selective universities including many in the top 25. It meets the 25th percentile threshold for Ivy League schools.',
  },
  {
    question: 'What percentile is a 1500 SAT score?',
    answer: 'A score of 1500 on the SAT is approximately the 97th percentile — you scored higher than 97% of all test takers. This is an excellent score competitive at the most selective universities in the country, including all Ivy League schools, MIT, and Stanford.',
  },
  {
    question: 'What percentile is a 1000 SAT score?',
    answer: 'A score of 1000 on the SAT is approximately the 34th percentile, meaning about 66% of test takers scored above this level. This is below the national average of 1050. A 1000 is sufficient for admission to many community colleges and less selective four-year schools but would benefit from improvement for most four-year universities.',
  },
  {
    question: 'What is the average SAT score in 2025–2026?',
    answer: 'The national average SAT composite score for the 2025–2026 admissions cycle is approximately 1050, which corresponds to roughly the 43rd percentile. The average Math section score is about 520 and the average EBRW (Evidence-Based Reading and Writing) score is about 530. Average scores vary by state, demographic group, and intended major.',
  },
  {
    question: 'How is the Digital SAT scored?',
    answer: 'The Digital SAT is scored on a scale of 400 to 1600. It has two sections: Math (200–800) and Reading and Writing (200–800), which are added together for your composite score. The test is adaptive — your performance in Module 1 of each section determines whether you receive an easier or harder Module 2, which affects your final scaled score. There is no penalty for wrong answers. The Digital SAT replaced the paper SAT for most students in the US starting in spring 2024.',
  },
  {
    question: 'What is the SAT to ACT score conversion?',
    answer: 'Common SAT to ACT conversions: 1600 SAT ≈ 36 ACT; 1500 SAT ≈ 34 ACT; 1400 SAT ≈ 31 ACT; 1300 SAT ≈ 28 ACT; 1200 SAT ≈ 25 ACT; 1100 SAT ≈ 22 ACT; 1000 SAT ≈ 19 ACT. These are based on the official College Board and ACT concordance tables. Both tests are accepted by virtually all US colleges.',
  },
  {
    question: 'How many times can I take the SAT?',
    answer: 'There is no official limit on how many times you can take the SAT. Most students take it 2–3 times. Many colleges superscore — taking your highest section scores across multiple test dates — so retaking can meaningfully improve your standing. The College Board offers the SAT in March, May, August, October, November, and December each year.',
  },
  {
    question: 'What SAT score do I need for a National Merit Scholarship?',
    answer: 'National Merit Scholarships are based on the PSAT/NMSQT Selection Index, which differs by state. Generally, Selection Index cutoffs for National Merit Semifinalist status range from approximately 207 to 222 depending on your state, which corresponds to very high SAT scores roughly in the 1400–1520+ range. Many universities also offer institutional merit scholarships starting at SAT scores around 1200–1300.',
  },
  {
    question: 'Should I take the SAT or ACT?',
    answer: 'Both the SAT and ACT are accepted equally by virtually all US colleges. The SAT (400–1600 scale) emphasizes data analysis and has two sections. The ACT (1–36 scale) includes a dedicated Science section and is generally considered slightly more straightforward in Math. Research suggests most students score similarly on both. We recommend taking a free practice test for each to see which format plays to your strengths.',
  },
  {
    question: 'How many questions can I miss on the SAT to get a 1500?',
    answer: 'To score approximately 1500 on the Digital SAT, you generally need to answer around 88–92 of the 98 scored questions correctly — meaning you can miss roughly 6–10 questions across both sections combined. However, because the Digital SAT is section-adaptive, the exact number of questions you can miss depends on which Module 2 you are routed into. If your Module 1 performance earns you the harder Module 2, you have access to a higher score ceiling, and the conversion table for that harder module may allow slightly more incorrect answers while still reaching 1500. Students aiming for 1500 should target no more than 3–4 errors per section. Strong performance in Module 1 is essential because it gates your access to the harder module, which is the only path to scores above approximately 1400 in each section.',
  },
  {
    question: 'What is the difference between the SAT User Percentile and Nationally Representative Sample Percentile?',
    answer: 'Your College Board score report shows two different percentiles, and understanding the difference matters for interpreting your results correctly. The SAT User Percentile (also called the "Percentile — SAT Users") compares your score only against other students in the current year who actually took the SAT — a self-selected group of college-bound students who tend to be academically motivated. This is the percentile most commonly cited and the one used on this calculator. The Nationally Representative Sample Percentile, by contrast, compares your score against a statistically representative sample of all US 11th and 12th graders, including those who never took the SAT. Because many lower-achieving students do not take the SAT, the Nationally Representative Sample Percentile is typically 5–10 points higher than the User Percentile for the same score. For college admissions purposes, admissions officers use and understand the User Percentile, which is the more meaningful comparison.',
  },
  {
    question: 'How do I convert my SAT score to an ACT score?',
    answer: 'The College Board and ACT, Inc. publish an official concordance table that maps SAT composite scores to their ACT equivalent. Common conversions: 1600 SAT = 36 ACT (99th percentile); 1500 SAT = 34 ACT (97th percentile); 1400 SAT = 31 ACT (94th percentile); 1300 SAT = 28 ACT (82nd percentile); 1200 SAT = 25 ACT (74th percentile); 1100 SAT = 22 ACT (51st percentile); 1000 SAT = 19 ACT (34th percentile). These concordances are based on large-scale statistical studies and represent the score a student would be equally likely to earn on each test. The SAT to ACT conversion tool on this page uses the official concordance table and highlights your equivalent score automatically. If you have taken both tests, colleges will typically evaluate whichever score you submit on its own merits rather than converting between them.',
  },
];

const SAT_ACT_CROSSWALK = [
  { sat: 1600, act: 36, pct: 99 }, { sat: 1570, act: 36, pct: 99 }, { sat: 1550, act: 35, pct: 99 },
  { sat: 1530, act: 34, pct: 99 }, { sat: 1510, act: 34, pct: 99 }, { sat: 1490, act: 33, pct: 99 },
  { sat: 1470, act: 33, pct: 99 }, { sat: 1450, act: 32, pct: 95 }, { sat: 1430, act: 31, pct: 95 },
  { sat: 1410, act: 31, pct: 93 }, { sat: 1390, act: 30, pct: 91 }, { sat: 1360, act: 29, pct: 87 },
  { sat: 1340, act: 29, pct: 87 }, { sat: 1310, act: 28, pct: 82 }, { sat: 1280, act: 27, pct: 76 },
  { sat: 1260, act: 27, pct: 76 }, { sat: 1240, act: 26, pct: 74 }, { sat: 1210, act: 25, pct: 69 },
  { sat: 1190, act: 25, pct: 69 }, { sat: 1170, act: 24, pct: 63 }, { sat: 1140, act: 23, pct: 59 },
  { sat: 1110, act: 22, pct: 51 }, { sat: 1090, act: 22, pct: 51 }, { sat: 1060, act: 21, pct: 43 },
  { sat: 1030, act: 20, pct: 35 }, { sat: 1010, act: 20, pct: 35 }, { sat: 980,  act: 19, pct: 28 },
  { sat: 950,  act: 18, pct: 25 }, { sat: 920,  act: 17, pct: 19 }, { sat: 880,  act: 16, pct: 13 },
  { sat: 850,  act: 15, pct: 9  },
];

const COLLEGES = [
  { school: 'MIT',                     range: '1520–1580', lo: 1520, hi: 1580, rate: '4%',  note: 'Need 1500+' },
  { school: 'Harvard University',      range: '1500–1580', lo: 1500, hi: 1580, rate: '4%',  note: 'Need 1500+' },
  { school: 'Yale University',         range: '1500–1580', lo: 1500, hi: 1580, rate: '5%',  note: 'Need 1500+' },
  { school: 'Princeton University',    range: '1500–1570', lo: 1500, hi: 1570, rate: '5%',  note: 'Need 1500+' },
  { school: 'Stanford University',     range: '1500–1570', lo: 1500, hi: 1570, rate: '4%',  note: 'Need 1500+' },
  { school: 'Columbia University',     range: '1500–1560', lo: 1500, hi: 1560, rate: '4%',  note: 'Need 1500+' },
  { school: 'Duke University',         range: '1480–1570', lo: 1480, hi: 1570, rate: '7%',  note: 'Need 1480+' },
  { school: 'Northwestern University', range: '1480–1560', lo: 1480, hi: 1560, rate: '7%',  note: 'Need 1480+' },
  { school: 'UChicago',                range: '1500–1570', lo: 1500, hi: 1570, rate: '7%',  note: 'Need 1500+' },
  { school: 'Georgetown University',   range: '1410–1550', lo: 1410, hi: 1550, rate: '12%', note: 'Need 1400+' },
  { school: 'Univ. of Michigan',       range: '1360–1530', lo: 1360, hi: 1530, rate: '18%', note: 'Need 1350+' },
  { school: 'UCLA',                    range: '1290–1510', lo: 1290, hi: 1510, rate: '9%',  note: 'Need 1280+' },
  { school: 'Univ. of Virginia',       range: '1360–1520', lo: 1360, hi: 1520, rate: '18%', note: 'Need 1350+' },
  { school: 'Boston University',       range: '1340–1500', lo: 1340, hi: 1500, rate: '14%', note: 'Need 1330+' },
  { school: 'Univ. of Texas Austin',   range: '1210–1490', lo: 1210, hi: 1490, rate: '29%', note: 'Need 1200+' },
  { school: 'Penn State',              range: '1150–1360', lo: 1150, hi: 1360, rate: '54%', note: 'Need 1140+' },
];

const FULL_PERCENTILE_TABLE = [
  [1600,99],[1580,99],[1560,99],[1540,99],[1520,99],[1500,97],[1480,95],
  [1460,95],[1440,94],[1420,93],[1400,93],[1380,91],[1360,87],[1340,86],
  [1320,84],[1300,82],[1280,79],[1260,76],[1240,74],[1220,71],[1200,69],
  [1180,66],[1160,63],[1140,60],[1120,56],[1100,52],[1080,48],[1060,45],
  [1040,41],[1020,38],[1000,35],[980,32],[960,29],[940,26],[920,22],
  [900,19],[880,17],[860,14],[840,12],[820,10],[800,9],[780,7],
  [760,5],[740,4],[720,3],[700,2],[680,2],[660,1],[640,1],[620,1],[600,1],
];

// CSS-animated gauge — no Framer Motion.
// A unique @keyframes name per percentile value ensures the stroke
// animation restarts cleanly when the user changes their score.
function PercentileGauge({ percentile, color }: { percentile: number; color: string }) {
  const r = 72;
  const circ = 2 * Math.PI * r;
  const dash = circ * Math.min(percentile / 100, 1);
  const animName = `gaugeStroke_sat_${percentile}`;

  return (
    <div className="relative w-44 h-44 mx-auto" role="img" aria-label={`${percentile}th percentile`}>
      <style>{`
        @keyframes ${animName} {
          from { stroke-dasharray: 0 ${circ}; }
          to   { stroke-dasharray: ${dash} ${circ - dash}; }
        }
      `}</style>
      <svg className="w-full h-full -rotate-90" viewBox="0 0 160 160">
        <circle cx="80" cy="80" r={r} fill="none" stroke="rgba(255,255,255,0.05)" strokeWidth="14" />
        <circle
          cx="80" cy="80" r={r} fill="none"
          stroke={color} strokeWidth="14" strokeLinecap="round"
          style={{
            strokeDasharray: `${dash} ${circ - dash}`,
            animation: `${animName} 0.8s ease-out both`,
          }}
        />
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
        <div
          className="absolute h-1.5 rounded-full"
          style={{ width: `${pct}%`, backgroundColor: color, opacity: 0.7, transition: 'width 0.075s' }}
        />
        <div className="absolute w-0.5 h-3 rounded-full bg-white/20" style={{ left: `${((avg - min) / (max - min)) * 100}%` }} />
        <input
          type="range" min={min} max={max} step={step} value={value}
          onChange={e => onChange(Number(e.target.value))} aria-label={label}
          className="absolute w-full h-full opacity-0 cursor-pointer" style={{ zIndex: 10 }}
        />
        <div
          className="absolute w-5 h-5 rounded-full border-2 border-white shadow-lg shadow-black/40 pointer-events-none"
          style={{ left: `calc(${pct}% - 10px)`, backgroundColor: color, transition: 'left 0.075s' }}
        />
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
      <h2 id="faq-heading" className="text-2xl font-bold text-white mb-2">Frequently Asked Questions About Digital SAT Scoring</h2>
      <p className="text-slate-400 text-sm mb-6">Common questions about how to use our SAT score calculator, SAT scoring, percentiles, the national average, and what your score means for college admissions in 2026.</p>
      <div className="space-y-2">
        {SAT_FAQS.map((faq, i) => (
          <div key={i} className="bg-[#12141f] border border-white/7 rounded-xl overflow-hidden">
            <button
              onClick={() => setOpen(open === i ? null : i)}
              className="w-full flex items-center justify-between px-5 py-4 text-left gap-4"
              aria-expanded={open === i}
            >
              <span className="text-sm font-medium text-white">{faq.question}</span>
              {open === i
                ? <ChevronUp size={16} className="text-slate-400 shrink-0" />
                : <ChevronDown size={16} className="text-slate-400 shrink-0" />}
            </button>
            <div
              className="overflow-hidden transition-all duration-200"
              style={{ maxHeight: open === i ? '600px' : '0px' }}
            >
              <p className="px-5 pb-4 text-sm text-slate-400 leading-relaxed border-t border-white/6 pt-3">{faq.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default function SATCalculatorPage() {
  const [composite, setComposite] = useState(1200);
  const [math, setMath]           = useState(620);
  const [ebrw, setEbrw]           = useState(580);
  const [activeTab, setActiveTab] = useState<'composite' | 'sections'>('composite');
  const [showAllTable, setShowAllTable]       = useState(false);
  const [showAllColleges, setShowAllColleges] = useState(false);

  const compositeScore = activeTab === 'composite' ? composite : math + ebrw;
  const compositePerc  = useMemo(() => getPercentile(compositeScore, SAT_COMPOSITE_PERCENTILES), [compositeScore]);
  const mathPerc       = useMemo(() => getPercentile(math, SAT_MATH_PERCENTILES), [math]);
  const ebrwPerc       = useMemo(() => getPercentile(ebrw, SAT_EBRW_PERCENTILES), [ebrw]);
  const context        = useMemo(() => getPercentileContext(compositePerc), [compositePerc]);

  const actEquiv = useMemo(() => {
    const match = SAT_ACT_CROSSWALK.find(r => Math.abs(r.sat - compositeScore) <= 14);
    return match?.act ?? null;
  }, [compositeScore]);

  const visibleColleges = showAllColleges ? COLLEGES : COLLEGES.slice(0, 8);
  const visibleTable    = showAllTable    ? FULL_PERCENTILE_TABLE : FULL_PERCENTILE_TABLE.slice(0, 14);

  const scoreBenchmarks = [
    { score: 1600, pct: 99, label: 'Perfect score' },
    { score: 1500, pct: 97, label: 'Ivy-competitive' },
    { score: 1400, pct: 94, label: 'Top 6%' },
    { score: 1300, pct: 82, label: 'Top 18%' },
    { score: 1200, pct: 74, label: 'Above average' },
    { score: 1050, pct: 43, label: 'National average' },
    { score: 900,  pct: 19, label: 'Below average' },
  ];

  const schemaBreadcrumb = {
    '@context': 'https://schema.org', '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://gradesnova.com' },
      { '@type': 'ListItem', position: 2, name: 'Exam Calculators', item: 'https://gradesnova.com/#exams' },
      { '@type': 'ListItem', position: 3, name: 'SAT Score Calculator', item: 'https://gradesnova.com/exams/sat' },
    ],
  };
  const schemaFAQ = {
    '@context': 'https://schema.org', '@type': 'FAQPage',
    mainEntity: SAT_FAQS.map(f => ({ '@type': 'Question', name: f.question, acceptedAnswer: { '@type': 'Answer', text: f.answer } })),
  };
  const schemaTool = {
    '@context': 'https://schema.org', '@type': 'WebApplication',
    name: 'SAT Score Calculator 2026',
    url: 'https://gradesnova.com/exams/sat',
    description: 'Free SAT score calculator 2026. Enter your SAT composite, Math, or EBRW score to instantly calculate your national percentile ranking for the 2025-2026 admissions cycle. Includes SAT-to-ACT conversion and college SAT score ranges.',
    applicationCategory: 'EducationalApplication', operatingSystem: 'Any',
    offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
    provider: { '@type': 'Organization', name: 'GradesNova', url: 'https://gradesnova.com' },
    dateModified: '2026-05-31',
  };
  const schemaDataset = {
    '@context': 'https://schema.org', '@type': 'Dataset',
    name: 'SAT Score Calculator & Percentile Chart 2026',
    description: 'Complete SAT composite score to national percentile mapping using official College Board data. Free SAT score calculator for 2025-2026 admissions cycle. Includes section percentiles for Math and EBRW.',
    url: 'https://gradesnova.com/exams/sat',
    creator: { '@type': 'Organization', name: 'GradesNova' },
    dateModified: '2026-05-31',
    keywords: 'SAT score calculator 2026, SAT score percentile, SAT national average, SAT score chart, sat score calculator',
    spatialCoverage: 'United States',
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaBreadcrumb) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaFAQ) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaTool) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaDataset) }} />

      <main className="bg-[#0a0c14] min-h-screen">
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
                <li className="text-slate-400" aria-current="page">SAT Score Calculator</li>
              </ol>
            </nav>
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 rounded-xl bg-indigo-500/15 flex items-center justify-center text-xl" aria-hidden="true">📐</div>
              <span className="text-xs font-mono text-indigo-400/70 uppercase tracking-widest">SAT · College Board · 400–1600</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white tracking-tight mb-3">
              SAT Score Calculator 2026
            </h1>
            <p className="text-lg text-slate-400 max-w-2xl mb-4">
              Free <strong className="text-white font-medium">SAT score calculator</strong> for the 2025–2026 admissions cycle. Enter your SAT composite, Math, or EBRW score to instantly calculate your national percentile ranking, SAT-to-ACT conversion, and how you compare to top college ranges. Updated with official College Board data.
            </p>
            <div className="flex flex-wrap gap-2">
              {[
                ['Official College Board data', '#6366f1'],
                ['Digital SAT 2025–2026', '#a855f7'],
                ['SAT → ACT conversion', '#06b6d4'],
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
          <section aria-labelledby="calculator-heading">
            <h2 id="calculator-heading" className="text-2xl font-bold text-white mb-2">SAT Score Calculator — Enter Your Score</h2>
            <p className="text-slate-400 text-sm mb-6 max-w-3xl">
              Use this free <strong className="text-white">SAT score calculator</strong> to find your 2026 percentile ranking in seconds. Drag the slider to your SAT composite score (400–1600) or switch to "By section" to enter your Math and EBRW scores separately. The calculator instantly shows your national percentile, ACT equivalent, and where you stand against top colleges.
            </p>
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
                  <ScoreSlider
                    label="SAT composite score (400–1600)"
                    value={composite} min={400} max={1600} step={10} avg={1050} color={COLOR}
                    onChange={v => {
                      setComposite(v);
                      setMath(Math.round(v / 2 / 10) * 10);
                      setEbrw(v - Math.round(v / 2 / 10) * 10);
                    }}
                  />
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

              {/* SAT → ACT */}
              {actEquiv && (
                <div className="bg-[#12141f] border border-white/8 rounded-xl p-4">
                  <p className="text-xs text-slate-500 uppercase tracking-wider font-semibold mb-2">ACT equivalent</p>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-xs text-slate-400">SAT {compositeScore} ≈</p>
                      <p className="text-2xl font-bold text-white mt-0.5">
                        {actEquiv} <span className="text-sm text-slate-400 font-normal">ACT</span>
                      </p>
                    </div>
                    <Link href="/exams/act" className="text-xs px-3 py-1.5 rounded-lg font-medium border transition-all hover:scale-105"
                      style={{ backgroundColor: '#06b6d415', borderColor: '#06b6d430', color: '#06b6d4' }}>
                      ACT calc
                    </Link>
                  </div>
                </div>
              )}

              {/* Benchmarks */}
              <div className="bg-[#12141f] border border-white/8 rounded-xl p-5">
                <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-3">Score benchmarks</p>
                <div className="space-y-1.5">
                  {scoreBenchmarks.map(b => (
                    <div key={b.score} className={`flex items-center justify-between py-1 ${compositeScore === b.score ? 'opacity-100' : 'opacity-50'}`}>
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
                {/* key forces CSS animation to restart when percentile changes */}
                <div key={compositePerc}>
                  <PercentileGauge percentile={compositePerc} color={context.color} />
                </div>
                <div className="text-center mt-5 mb-6">
                  <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-sm font-semibold border mb-2"
                    style={{ backgroundColor: `${context.color}15`, borderColor: `${context.color}30`, color: context.color }}>
                    {context.label}
                  </div>
                  <p className="text-slate-400 text-sm">{context.description}</p>
                </div>
                <div className="grid grid-cols-3 gap-3">
                  {[
                    { label: 'Your score',  value: compositeScore },
                    { label: 'National avg', value: 1050 },
                    { label: 'Percentile',  value: `${compositePerc}th` },
                  ].map(s => (
                    <div key={s.label} className="bg-white/4 rounded-xl p-3 text-center">
                      <p className="text-base font-bold text-white tabular-nums">{s.value}</p>
                      <p className="text-[10px] text-slate-500 mt-0.5">{s.label}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Section percentiles */}
              {activeTab === 'sections' && (
                <div className="bg-[#12141f] border border-white/8 rounded-2xl p-6">
                  <h3 className="text-sm font-semibold text-slate-300 mb-4">Section percentiles</h3>
                  <div className="space-y-4">
                    {[
                      { label: 'Math', score: math, pct: mathPerc, color: COLOR },
                      { label: 'EBRW', score: ebrw, pct: ebrwPerc, color: '#a855f7' },
                    ].map(s => (
                      <div key={s.label} className="flex items-center gap-4">
                        <div className="w-12 shrink-0">
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

              {/* Digital SAT Format explainer */}
              <div className="bg-[#12141f] border border-white/8 rounded-2xl p-6">
                <h3 className="text-sm font-semibold text-slate-300 mb-4">Digital SAT format (2024–2026)</h3>
                <div className="space-y-3">
                  {[
                    { icon: '📖', label: 'Reading & Writing', color: '#a855f7', time: '64 min', q: '54 questions', detail: 'Grammar, rhetoric, data analysis, literary comprehension' },
                    { icon: '📐', label: 'Math',              color: COLOR,      time: '70 min', q: '44 questions', detail: 'Algebra, problem solving, data analysis, advanced math, geometry' },
                  ].map(s => (
                    <div key={s.label} className="flex gap-3 p-3 bg-white/3 rounded-xl">
                      <span className="text-lg mt-0.5" aria-hidden="true">{s.icon}</span>
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
                <p className="text-xs text-slate-600 mt-3">The Digital SAT is section-adaptive — Module 1 performance determines your Module 2 difficulty, affecting your final scaled score.</p>
              </div>
            </div>
          </div>
          </section>

          {/* UNDERSTANDING THE DIGITAL SAT SCORING SYSTEM — NEW SECTION */}
          <section aria-labelledby="scoring-system-heading">
            <h2 id="scoring-system-heading" className="text-2xl font-bold text-white mb-4">Understanding the Digital SAT Scoring System</h2>
            <p className="text-slate-400 text-sm mb-5 max-w-3xl leading-relaxed">
              The Digital SAT, administered by the College Board since spring 2024, uses a multistage adaptive scoring model that differs significantly from the paper-based SAT it replaced. Understanding how the Digital SAT converts your performance into a scaled score helps you interpret your results, plan your test strategy, and set realistic score goals.
            </p>

            <div className="space-y-5 mb-8">
              <div className="bg-[#12141f] border border-white/8 rounded-2xl p-6">
                <h3 className="text-base font-semibold text-white mb-3">How Multistage Adaptive Testing Works</h3>
                <p className="text-sm text-slate-400 leading-relaxed mb-3">
                  The Digital SAT is divided into two sections — Reading and Writing (RW) and Math — each of which contains two modules. Every student receives the same Module 1 for each section. Your performance in Module 1 determines which Module 2 you are routed to: a higher-difficulty module or a lower-difficulty module. This routing decision is made automatically by the testing platform based on how many questions you answered correctly in Module 1.
                </p>
                <p className="text-sm text-slate-400 leading-relaxed">
                  The higher-difficulty Module 2 contains harder questions and has a <strong className="text-white">higher score ceiling</strong> — it is the only path to section scores above approximately 650–700 out of 800. The lower-difficulty Module 2 has an <strong className="text-white">upper cap on the score you can achieve</strong>. This means your accuracy in Module 1 has a disproportionate impact on your final scaled score. Students aiming for scores above 1400 must prioritize Module 1 accuracy above all else.
                </p>
              </div>

              <div className="bg-[#12141f] border border-white/8 rounded-2xl p-6">
                <h3 className="text-base font-semibold text-white mb-3">From Raw Score to Scaled Score (200–800 per section)</h3>
                <p className="text-sm text-slate-400 leading-relaxed mb-3">
                  Each section of the Digital SAT contains 54 questions (RW) or 44 questions (Math), of which 4 questions per section are unscored experimental items used by the College Board to calibrate future tests. You will not know which questions are unscored, so treat every question as if it counts. Your raw score is the count of scored questions you answer correctly — there is no penalty for wrong answers on the Digital SAT.
                </p>
                <p className="text-sm text-slate-400 leading-relaxed">
                  Your raw score is then converted to a scaled score on a 200–800 scale using an <strong className="text-white">Item Response Theory (IRT)</strong> model that accounts for the difficulty of the specific questions you saw, which module you were routed to, and statistical equating across test forms. The College Board does not publish precise raw-to-scaled conversion tables for the Digital SAT, because the adaptive nature of the test means no two students see the exact same sequence of questions.
                </p>
              </div>

              <div className="bg-[#12141f] border border-white/8 rounded-2xl p-6">
                <h3 className="text-base font-semibold text-white mb-3">Composite Score and Score Reporting</h3>
                <p className="text-sm text-slate-400 leading-relaxed mb-3">
                  Your SAT composite score is the sum of your Math section score (200–800) and your Reading and Writing section score (200–800), giving a total composite range of 400–1600. The College Board reports scores within approximately 2–5 days of your test date for the Digital SAT, significantly faster than the paper-based SAT. Your score report includes your composite score, section scores, subscores (such as Heart of Algebra, Problem Solving and Data Analysis, and Passport to Advanced Math for Math), cross-test scores, and two types of percentiles — the User Percentile and the Nationally Representative Sample Percentile.
                </p>
                <p className="text-sm text-slate-400 leading-relaxed">
                  The College Board also provides a score band — a range of plus or minus a few points around your reported score — that reflects the inherent measurement precision of any standardized test. This means a student who scores 1350 and another who scores 1360 are performing at essentially the same level, within the margin of measurement error.
                </p>
              </div>
            </div>

            <h3 className="text-lg font-semibold text-white mb-4">Digital SAT Percentiles vs. Scaled Scores</h3>
            <p className="text-slate-400 text-sm mb-5 leading-relaxed max-w-3xl">
              A scaled score tells you how many points you earned; a percentile tells you how that score compares to other test takers. Both are reported on your score report, but they measure different things. The table below maps key Digital SAT composite scores to their approximate User Percentile — the percentile most commonly referenced in college admissions, which compares you against students who actually took the SAT in a given year.
            </p>
            <p className="text-slate-400 text-sm mb-5 leading-relaxed max-w-3xl">
              Percentile rankings can be counterintuitive at the high end of the scale. Because so few students score in the 1550–1600 range, even a 50-point drop from a perfect 1600 to a 1550 still keeps you in the 99th percentile. By contrast, in the 1000–1200 range, each 50-point increment moves you roughly 8–10 percentile points, representing a meaningful jump in competitive positioning for college admissions. This is why students who are already scoring above 1450 often see diminishing admissions returns from further score improvement, while students in the 1100–1350 range can significantly open up their college options by improving 100–150 points.
            </p>
            <div className="overflow-x-auto rounded-xl border border-white/8 mb-4">
              <table className="w-full text-sm min-w-[480px]" aria-label="Digital SAT scaled score to percentile comparison table">
                <thead>
                  <tr className="bg-white/4 border-b border-white/8">
                    <th scope="col" className="text-left px-4 py-3 text-xs font-semibold text-slate-400 uppercase tracking-wider">SAT composite</th>
                    <th scope="col" className="text-center px-4 py-3 text-xs font-semibold text-slate-400 uppercase tracking-wider">User percentile</th>
                    <th scope="col" className="text-center px-4 py-3 text-xs font-semibold text-slate-400 uppercase tracking-wider hidden sm:table-cell">Students you outscored</th>
                    <th scope="col" className="text-left px-4 py-3 text-xs font-semibold text-slate-400 uppercase tracking-wider hidden md:table-cell">Admissions context</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { score: 1600, pct: 99, beat: '~99% of test takers', context: 'Perfect score; competitive everywhere' },
                    { score: 1550, pct: 99, beat: '~99% of test takers', context: 'All Ivy League, MIT, Stanford' },
                    { score: 1500, pct: 97, beat: '~97% of test takers', context: 'Ivy League competitive range' },
                    { score: 1450, pct: 95, beat: '~95% of test takers', context: 'Top 15 universities' },
                    { score: 1400, pct: 94, beat: '~94% of test takers', context: 'Top 25 universities' },
                    { score: 1350, pct: 91, beat: '~91% of test takers', context: 'Selective universities' },
                    { score: 1300, pct: 82, beat: '~82% of test takers', context: 'Many selective schools' },
                    { score: 1200, pct: 74, beat: '~74% of test takers', context: 'Above average; many 4-year colleges' },
                    { score: 1100, pct: 52, beat: '~52% of test takers', context: 'Around national average' },
                    { score: 1050, pct: 43, beat: '~43% of test takers', context: 'National average' },
                    { score: 1000, pct: 35, beat: '~35% of test takers', context: 'Below average' },
                    { score: 900,  pct: 19, beat: '~19% of test takers', context: 'Less selective colleges' },
                  ].map((row, i) => {
                    const isYours = row.score === compositeScore;
                    return (
                      <tr key={row.score} className={`border-b border-white/5 last:border-0 ${isYours ? 'bg-indigo-500/10' : i % 2 === 0 ? '' : 'bg-white/2'}`}>
                        <td className="px-4 py-2.5 font-mono font-semibold" style={{ color: isYours ? COLOR : 'rgb(226,232,240)' }}>
                          {row.score}
                          {isYours && <span className="ml-2 text-[10px] bg-indigo-500/20 text-indigo-300 px-1.5 py-0.5 rounded font-sans">your score</span>}
                        </td>
                        <td className="px-4 py-2.5 text-center font-bold" style={{ color: isYours ? COLOR : 'rgb(226,232,240)' }}>{row.pct}th</td>
                        <td className="px-4 py-2.5 text-center text-xs text-slate-500 hidden sm:table-cell">{row.beat}</td>
                        <td className="px-4 py-2.5 text-xs text-slate-500 hidden md:table-cell">{row.context}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
            <p className="text-xs text-slate-600">SAT User Percentiles based on official College Board data for the 2025–2026 testing year.</p>
          </section>

          <section aria-labelledby="avg-heading">
            <h2 id="avg-heading" className="text-2xl font-bold text-white mb-4">What is the Average SAT Score in 2025–2026?</h2>
            <p className="text-slate-400 text-sm mb-6 leading-relaxed max-w-3xl">
              The national average SAT composite score for 2025–2026 is <strong className="text-white">1050 out of 1600</strong>, placing the average student at approximately the <strong className="text-white">43rd percentile</strong> nationally. Scoring above 1050 means you performed better than over half of all SAT test takers in the United States.
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
              {[
                { icon: '📊', label: 'National avg composite',    value: '1050',  sub: '43rd percentile',     color: COLOR },
                { icon: '📐', label: 'Average Math score',        value: '520',   sub: '50th percentile',     color: '#6366f1' },
                { icon: '📖', label: 'Average EBRW score',        value: '530',   sub: '50th percentile',     color: '#a855f7' },
                { icon: '👥', label: 'Students tested (2025)',    value: '2.2M+', sub: 'High school students', color: '#34d399' },
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
            <h2 id="chart-heading" className="text-2xl font-bold text-white mb-2">SAT Score Calculator — Full Percentile Chart 2026</h2>
            <p className="text-slate-400 text-sm mb-6">
              Use our SAT score calculator above or browse the complete SAT composite score to national percentile table below, based on official College Board data. Your score is highlighted. The national average SAT score is 1050. A 1400 equals the 94th percentile.
            </p>
            <div className="overflow-hidden rounded-xl border border-white/8">
              <table className="w-full text-sm" aria-label="SAT score percentile chart 2025-2026">
                <thead>
                  <tr className="bg-white/4 border-b border-white/8">
                    <th scope="col" className="text-left px-4 py-3 text-xs font-semibold text-slate-400 uppercase tracking-wider">SAT score</th>
                    <th scope="col" className="text-left px-4 py-3 text-xs font-semibold text-slate-400 uppercase tracking-wider">Percentile</th>
                    <th scope="col" className="text-left px-4 py-3 text-xs font-semibold text-slate-400 uppercase tracking-wider hidden sm:table-cell">You beat</th>
                    <th scope="col" className="text-left px-4 py-3 text-xs font-semibold text-slate-400 uppercase tracking-wider hidden md:table-cell">Tier</th>
                  </tr>
                </thead>
                <tbody>
                  {visibleTable.map(([score, pct], i) => {
                    const isYours = score === compositeScore;
                    const tier = score >= 1400 ? 'Highly competitive' : score >= 1200 ? 'Above average' : score >= 1050 ? 'Average' : 'Below average';
                    return (
                      <tr key={score} className={`border-b border-white/5 last:border-0 ${isYours ? 'bg-indigo-500/10' : i % 2 === 0 ? '' : 'bg-white/2'}`}>
                        <td className="px-4 py-2.5 font-mono font-medium" style={{ color: isYours ? COLOR : undefined }}>
                          {score}
                          {isYours && <span className="ml-2 text-[10px] bg-indigo-500/20 text-indigo-300 px-1.5 py-0.5 rounded font-sans">your score</span>}
                        </td>
                        <td className="px-4 py-2.5 font-semibold" style={{ color: isYours ? COLOR : 'rgb(226,232,240)' }}>{pct}th</td>
                        <td className="px-4 py-2.5 text-slate-500 hidden sm:table-cell text-xs">Top {100 - pct}% of test takers</td>
                        <td className="px-4 py-2.5 text-slate-500 hidden md:table-cell text-xs">{tier}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
            <button onClick={() => setShowAllTable(!showAllTable)}
              className="mt-3 text-xs text-indigo-400 hover:text-indigo-300 transition-colors font-medium">
              {showAllTable ? 'Show less ↑' : 'Show all scores ↓'}
            </button>
            <p className="text-xs text-slate-600 mt-2">Source: College Board SAT Suite of Assessments Annual Report, 2025–2026 admissions cycle.</p>
          </section>

          {/* WHAT DOES YOUR SAT SCORE MEAN */}
          <section aria-labelledby="tiers-heading">
            <h2 id="tiers-heading" className="text-2xl font-bold text-white mb-4">What Does Your SAT Score Mean? Calculator Results Explained</h2>
            <p className="text-slate-400 text-sm mb-6 max-w-3xl">
              Once you calculate your SAT score percentile above, use this guide to understand what your result means for college admissions in the 2025–2026 cycle.
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                { range: '1500–1600', label: 'Elite',              desc: 'Top 3% nationally. Highly competitive at Ivy League, MIT, Caltech, and Stanford. Qualifies for merit scholarships at virtually every university in the country.', color: '#34d399' },
                { range: '1400–1490', label: 'Highly Competitive', desc: 'Top 6–7%. Competitive at highly selective schools like Duke, Northwestern, Georgetown, and top-25 universities. Strong merit scholarship candidate at many schools.', color: '#60a5fa' },
                { range: '1200–1390', label: 'Above Average',      desc: 'Top 18–26%. Competitive at hundreds of strong four-year universities including state flagships. May qualify for merit aid at less selective schools.', color: COLOR },
                { range: '1050–1190', label: 'Average',            desc: 'Around the national average of 1050. Sufficient for many four-year colleges. A score in this range is near the median or 25th percentile for most non-selective state schools.', color: '#a78bfa' },
                { range: '900–1040',  label: 'Below Average',      desc: 'Below the national average. Sufficient for community colleges and less selective schools. Most students who retest improve 50–100 points with focused preparation.', color: '#f59e0b' },
                { range: '400–890',   label: 'Needs Improvement',  desc: 'Significantly below national average. Strong improvement is common with structured test prep. Consider PSAT practice materials and a retake plan.', color: '#ef4444' },
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

          {/* COLLEGES TABLE */}
          <section aria-labelledby="colleges-heading">
            <h2 id="colleges-heading" className="text-2xl font-bold text-white mb-2">SAT Score Ranges for Top Colleges 2025–2026</h2>
            <p className="text-slate-400 text-sm mb-6">
              Middle 50% SAT composite ranges for admitted students at competitive US universities. <span className="text-indigo-400 font-medium">Indigo highlight</span> = your score is in range. <span className="text-emerald-400 font-medium">Green</span> = your score is above the range.
            </p>
            <div className="overflow-x-auto rounded-xl border border-white/8">
              <table className="w-full text-sm min-w-[500px]" aria-label="SAT score ranges for top colleges 2025-2026">
                <thead>
                  <tr className="bg-white/4 border-b border-white/8">
                    <th scope="col" className="text-left px-4 py-3 text-xs font-semibold text-slate-400 uppercase tracking-wider">University</th>
                    <th scope="col" className="text-center px-4 py-3 text-xs font-semibold text-slate-400 uppercase tracking-wider">Middle 50% SAT</th>
                    <th scope="col" className="text-center px-4 py-3 text-xs font-semibold text-slate-400 uppercase tracking-wider hidden sm:table-cell">Admit rate</th>
                    <th scope="col" className="text-center px-4 py-3 text-xs font-semibold text-slate-400 uppercase tracking-wider hidden md:table-cell">Target score</th>
                  </tr>
                </thead>
                <tbody>
                  {visibleColleges.map((row, i) => {
                    const inRange = compositeScore >= row.lo && compositeScore <= row.hi;
                    const above   = compositeScore > row.hi;
                    return (
                      <tr key={row.school} className={`border-b border-white/5 last:border-0 ${i % 2 === 0 ? '' : 'bg-white/2'}`}>
                        <td className="px-4 py-2.5 font-medium text-slate-200 text-sm">{row.school}</td>
                        <td className="px-4 py-2.5 text-center">
                          <span className="font-mono text-xs font-semibold px-2 py-0.5 rounded-md"
                            style={inRange
                              ? { backgroundColor: COLOR, color: '#fff' }
                              : above
                              ? { backgroundColor: 'rgba(52,211,153,0.12)', color: '#34d399' }
                              : { backgroundColor: 'rgba(255,255,255,0.06)', color: '#64748b' }}>
                            {row.range}
                          </span>
                        </td>
                        <td className="px-4 py-2.5 text-center text-xs text-slate-500 hidden sm:table-cell">{row.rate}</td>
                        <td className="px-4 py-2.5 text-center text-xs text-slate-500 hidden md:table-cell">{row.note}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
            {!showAllColleges && (
              <button onClick={() => setShowAllColleges(true)} className="mt-3 text-xs text-indigo-400 hover:text-indigo-300 transition-colors font-medium">
                Show all colleges ↓
              </button>
            )}
            <p className="text-xs text-slate-600 mt-2">Data: Common Data Set filings and institutional websites, 2024–2025 admitted class.</p>
          </section>

          {/* SAT TO ACT CONVERSION */}
          <section aria-labelledby="crosswalk-heading">
            <h2 id="crosswalk-heading" className="text-2xl font-bold text-white mb-2">SAT to ACT Score Conversion Chart 2025</h2>
            <p className="text-slate-400 text-sm mb-6">
              Official College Board / ACT concordance table. Use this to compare your SAT score to its ACT equivalent when applying to colleges or deciding which test to submit.
            </p>
            <div className="overflow-x-auto rounded-xl border border-white/8">
              <table className="w-full text-sm min-w-[300px]" aria-label="SAT to ACT score conversion table 2025">
                <thead>
                  <tr className="bg-white/4 border-b border-white/8">
                    <th scope="col" className="text-center px-6 py-3 text-xs font-semibold text-indigo-400 uppercase tracking-wider">SAT composite</th>
                    <th scope="col" className="text-center px-6 py-3 text-xs font-semibold text-cyan-400 uppercase tracking-wider">ACT equivalent</th>
                    <th scope="col" className="text-center px-6 py-3 text-xs font-semibold text-slate-400 uppercase tracking-wider hidden sm:table-cell">Percentile</th>
                  </tr>
                </thead>
                <tbody>
                  {SAT_ACT_CROSSWALK.map((row, i) => {
                    const isYours = Math.abs(row.sat - compositeScore) <= 14;
                    return (
                      <tr key={row.sat} className={`border-b border-white/5 last:border-0 ${isYours ? 'bg-indigo-500/10' : i % 2 === 0 ? '' : 'bg-white/2'}`}>
                        <td className="px-6 py-2.5 text-center font-mono font-semibold" style={{ color: isYours ? COLOR : 'rgb(226,232,240)' }}>
                          {row.sat}
                          {isYours && <span className="ml-1.5 text-[9px] bg-indigo-500/20 text-indigo-300 px-1 py-0.5 rounded">you</span>}
                        </td>
                        <td className="px-6 py-2.5 text-center font-mono font-bold text-cyan-400">{row.act}</td>
                        <td className="px-6 py-2.5 text-center text-xs text-slate-500 hidden sm:table-cell">{row.pct}th</td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
            <p className="text-xs text-slate-600 mt-2">
              Source: Official College Board / ACT concordance tables. Use our <Link href="/exams/act" className="text-cyan-400 hover:text-cyan-300">ACT percentile calculator</Link> for full ACT breakdowns.
            </p>
          </section>

          {/* HOW TO IMPROVE */}
          <section aria-labelledby="improve-heading" className="bg-[#12141f] border border-white/7 rounded-2xl p-6 md:p-8">
            <h2 id="improve-heading" className="text-2xl font-bold text-white mb-4">How to Improve Your SAT Score</h2>
            <p className="text-slate-400 text-sm mb-6 leading-relaxed max-w-3xl">
              Most students who retake the SAT improve their composite score by 50–100 points with focused preparation. Here are the most effective strategies for the Digital SAT.
            </p>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                { step: '01', title: 'Take a full-length diagnostic', desc: "Use the College Board's free Bluebook app to take an official Digital SAT practice test under real conditions. This establishes your baseline and shows which skill areas need the most work." },
                { step: '02', title: 'Focus on your weaker section', desc: 'Identify whether Math or Reading & Writing is holding back your composite score. Targeted section prep typically yields faster score gains than spreading effort evenly across both sections.' },
                { step: '03', title: 'Practice the adaptive format', desc: "The Digital SAT's adaptive design rewards accuracy in Module 1 of each section. A strong Module 1 routes you to the harder (higher-ceiling) Module 2, which is necessary for scores above 650 per section." },
                { step: '04', title: 'Use Khan Academy (free)', desc: "Khan Academy's Official SAT Practice is free, built in partnership with the College Board, and personalizes a study plan based on your PSAT or SAT scores. Students who study 20 hours on Khan Academy see an average gain of 115 points." },
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
            <h2 id="other-tools-heading" className="text-sm font-semibold text-slate-300 mb-4">More free score calculators — ACT, GRE, GMAT & more</h2>
            <div className="flex flex-wrap gap-2">
              {[
                { id: 'act',      name: 'ACT Score Calculator',  color: '#06b6d4' },
                { id: 'gre',      name: 'GRE Score Calculator',  color: '#a855f7' },
                { id: 'gmat',     name: 'GMAT Score Calculator', color: '#f59e0b' },
                { id: 'lsat',     name: 'LSAT Score Calculator', color: '#ef4444' },
                { id: 'gcse',     name: 'GCSE Grade Calculator', color: '#34d399' },
                { id: 'a-levels', name: 'A-Level Calculator',    color: '#ec4899' },
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
