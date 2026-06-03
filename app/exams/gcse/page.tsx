// app/exams/gcse/page.tsx
// MAIN GCSE GRADE BOUNDARIES PAGE — 2026
// Last modified: 2026-05-26
// Results Day: 20 August 2026 at 8:00am

import type { Metadata } from 'next';
import Link from 'next/link';
import { GCSECalculatorClient } from './gcse-calculator-client';

export const metadata: Metadata = {
  title: 'GCSE Grade Boundaries 2026 | AQA Edexcel OCR WJEC Calculator',
  description:
    'Free GCSE grade boundaries calculator 2026. Enter your raw mark and instantly find your grade for AQA, Edexcel, OCR and WJEC. Maths, English, Sciences and more. Updated 20 August 2026 on Results Day.',
  keywords: [
    'gcse grade boundaries 2026',
    'gcse grade boundaries calculator',
    'aqa grade boundaries 2026',
    'edexcel grade boundaries 2026',
    'ocr grade boundaries 2026',
    'wjec grade boundaries 2026',
    'grade boundary calculator',
    'gcse grade calculator',
    'gcse maths grade boundaries 2026',
    'gcse grade boundaries',
    'grade boundaries 2026',
    'gcse results day 2026',
    'what percentage is a grade 9 gcse',
    'gcse grade 4 how many marks',
    'gcse grade 5 how many marks',
    'aqa gcse grade boundaries 2026',
    'edexcel gcse grade boundaries 2026',
    'ocr gcse grade boundaries 2026',
    'wjec gcse grade boundaries 2026',
    'gcse raw marks to grade',
  ],
  alternates: { canonical: 'https://gradesnova.com/exams/gcse' },
  openGraph: {
    title: 'GCSE Grade Boundaries 2026 | AQA Edexcel OCR WJEC Calculator',
    description: 'Free GCSE grade boundaries calculator. Enter your raw mark → see your grade instantly. All boards, all subjects. Updated Results Day 20 Aug 2026.',
    url: 'https://gradesnova.com/exams/gcse',
    type: 'website',
    siteName: 'GradesNova',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'GCSE Grade Boundaries 2026 | All Boards Calculator',
    description: 'Enter your raw mark, get your GCSE grade instantly. AQA, Edexcel, OCR, WJEC. Free, no signup.',
  },
  robots: {
    index: true, follow: true,
    googleBot: { index: true, follow: true, 'max-snippet': -1, 'max-image-preview': 'large' },
  },
};

const jsonLdBreadcrumb = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://gradesnova.com' },
    { '@type': 'ListItem', position: 2, name: 'Calculators', item: 'https://gradesnova.com/#exams' },
    { '@type': 'ListItem', position: 3, name: 'GCSE Grade Boundaries 2026', item: 'https://gradesnova.com/exams/gcse' },
  ],
};

const jsonLdTool = {
  '@context': 'https://schema.org',
  '@type': 'WebApplication',
  name: 'GCSE Grade Boundaries Calculator 2026',
  url: 'https://gradesnova.com/exams/gcse',
  description: 'Free GCSE grade boundaries calculator for AQA, Edexcel, OCR and WJEC. Enter raw marks to find your grade instantly. Updated with 2026 official boundaries on Results Day 20 August 2026.',
  applicationCategory: 'EducationalApplication',
  operatingSystem: 'Any',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'GBP' },
  provider: { '@type': 'Organization', name: 'GradesNova', url: 'https://gradesnova.com' },
  dateModified: '2026-05-26',
};

const jsonLdDataset = {
  '@context': 'https://schema.org',
  '@type': 'Dataset',
  name: 'GCSE Grade Boundaries 2026 — AQA, Edexcel, OCR, WJEC',
  description: 'Official GCSE grade boundary data for all major UK exam boards from the June 2025 series, updated to 2026 on Results Day 20 August 2026.',
  url: 'https://gradesnova.com/exams/gcse',
  creator: { '@type': 'Organization', name: 'GradesNova' },
  dateModified: '2026-05-26',
  keywords: 'GCSE, grade boundaries, AQA, Edexcel, OCR, WJEC, 2026, raw marks',
  temporalCoverage: '2025/2026',
  spatialCoverage: 'United Kingdom',
  isBasedOn: [
    { '@type': 'CreativeWork', name: 'AQA GCSE Grade Boundary Documents June 2025', publisher: { '@type': 'Organization', name: 'AQA' } },
    { '@type': 'CreativeWork', name: 'Pearson Edexcel GCSE Grade Boundary Documents June 2025', publisher: { '@type': 'Organization', name: 'Pearson Edexcel' } },
    { '@type': 'CreativeWork', name: 'OCR GCSE Grade Boundary Documents June 2025', publisher: { '@type': 'Organization', name: 'OCR' } },
    { '@type': 'CreativeWork', name: 'WJEC GCSE Grade Boundary Documents June 2025', publisher: { '@type': 'Organization', name: 'WJEC' } },
  ],
};

const jsonLdFAQ = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What are the GCSE grade boundaries for 2026?',
      acceptedAnswer: { '@type': 'Answer', text: '2026 GCSE grade boundaries for AQA, Edexcel, OCR and WJEC will be published at 8:00am on Thursday 20 August 2026 (GCSE Results Day). Until then, the 2025 boundaries are the most accurate reference. This calculator uses 2025 boundaries and will update automatically on Results Day.' },
    },
    {
      '@type': 'Question',
      name: 'How many marks do I need for a grade 9 in GCSE Maths?',
      acceptedAnswer: { '@type': 'Answer', text: 'In 2025, you needed 219 out of 240 (91%) for a grade 9 in AQA Maths Higher, 217 out of 240 (90%) for Edexcel Maths Higher, 258 out of 300 (86%) for OCR Maths Higher, and 196 out of 240 (82%) for WJEC Maths Higher. The 2026 boundaries will be published on Results Day 20 August 2026.' },
    },
    {
      '@type': 'Question',
      name: 'What is the pass mark for GCSE in 2026?',
      acceptedAnswer: { '@type': 'Answer', text: 'The GCSE pass mark is grade 4, the standard pass. In AQA Maths Higher 2025 this was 63 out of 240. In Edexcel Maths Higher it was 53 out of 240. In OCR Maths Higher it was 47 out of 300. In WJEC Maths Higher it was 27 out of 240. Grade 5 is the strong pass required by most sixth forms.' },
    },
    {
      '@type': 'Question',
      name: 'When are GCSE grade boundaries released in 2026?',
      acceptedAnswer: { '@type': 'Answer', text: 'GCSE grade boundaries for 2026 are released at exactly 8:00am on Thursday 20 August 2026, which is GCSE Results Day. All exam boards (AQA, Edexcel, OCR, WJEC) publish simultaneously. GradesNova updates this calculator immediately when the 2026 data is available.' },
    },
    {
      '@type': 'Question',
      name: 'What is the difference between grade 4 and grade 5 GCSE?',
      acceptedAnswer: { '@type': 'Answer', text: 'Grade 4 is the standard pass, equivalent to a low C under the old system. Grade 5 is the strong pass, roughly equivalent to a high C or low B. Most sixth forms and colleges require grade 5 or above in English Language and Maths for A-Level entry. Students who fail to achieve grade 4 in English Language or Maths must resit post-16.' },
    },
    {
      '@type': 'Question',
      name: 'Why do GCSE grade boundaries change every year?',
      acceptedAnswer: { '@type': 'Answer', text: 'GCSE grade boundaries change every year because they are set after all papers are marked, based on how difficult that year\'s paper was. If a paper is harder than usual, boundaries are lowered so students are not disadvantaged. This process, called comparable outcomes, is overseen by Ofqual in England. The boundary for grade 4 in Maths can vary by 10-15 marks between years.' },
    },
    {
      '@type': 'Question',
      name: 'Do WJEC grade boundaries differ from AQA?',
      acceptedAnswer: { '@type': 'Answer', text: 'Yes, WJEC sets boundaries independently from AQA, Edexcel and OCR. In 2025, WJEC Maths Higher required 196 out of 240 for grade 9 vs AQA\'s 219 out of 240. Never mix boundaries between boards — always use the specific board your school enters you for.' },
    },
    {
      '@type': 'Question',
      name: 'Will 2026 GCSE grade boundaries be lower than 2025?',
      acceptedAnswer: { '@type': 'Answer', text: 'Whether 2026 boundaries are higher or lower depends on paper difficulty. Ofqual\'s comparable outcomes process means the proportion of students achieving each grade stays broadly similar year-on-year. If 2026 papers are harder, boundaries fall. If easier, they rise. No one can predict exact 2026 boundaries before Results Day on 20 August 2026.' },
    },
  ],
};

const BOARD_PAGES = [
  { name: 'AQA', href: '/exams/gcse/aqa', color: '#34d399', desc: 'England\'s largest GCSE board', icon: '📗' },
  { name: 'Edexcel', href: '/exams/gcse/edexcel', color: '#6366f1', desc: 'Pearson — widely used in England', icon: '📘' },
  { name: 'OCR', href: '/exams/gcse/ocr', color: '#a855f7', desc: 'Oxford Cambridge and RSA', icon: '📙' },
  { name: 'WJEC', href: '/exams/gcse/wjec', color: '#f59e0b', desc: 'Welsh Joint Education Committee', icon: '📒' },
];

const QUICK_STATS = [
  { label: 'AQA Maths Higher — grade 9 (2025)', value: '219/240', sub: '91% of total marks', color: '#34d399' },
  { label: 'Edexcel Maths Higher — grade 9 (2025)', value: '217/240', sub: '90% of total marks', color: '#6366f1' },
  { label: 'OCR Maths Higher — grade 9 (2025)', value: '258/300', sub: '86% of total marks', color: '#a855f7' },
  { label: 'WJEC Maths Higher — grade 9 (2025)', value: '196/240', sub: '82% of total marks', color: '#f59e0b' },
];

export default function GCSEMainPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdBreadcrumb) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdTool) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdDataset) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdFAQ) }} />

      <main className="bg-[#0a0c14] min-h-screen text-white">
        {/* ── HEADER ── */}
        <header className="bg-[#0d0f1a] border-b border-white/6 py-10 mt-16">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <nav aria-label="Breadcrumb" className="mb-4">
              <ol className="flex items-center gap-2 text-xs text-slate-500">
                <li><Link href="/" className="hover:text-white transition-colors">Home</Link></li>
                <li aria-hidden="true">›</li>
                <li><Link href="/#exams" className="hover:text-white transition-colors">Calculators</Link></li>
                <li aria-hidden="true">›</li>
                <li className="text-slate-400" aria-current="page">GCSE Grade Boundaries 2026</li>
              </ol>
            </nav>

            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 rounded-xl flex items-center justify-center text-xl bg-emerald-500/18" aria-hidden="true">🏫</div>
              <span className="text-xs font-mono text-emerald-400/70 uppercase tracking-widest">GCSE · AQA · Edexcel · OCR · WJEC · Grades 1–9</span>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold text-white tracking-tight mb-3">
              GCSE Grade Boundaries 2026
            </h1>
            <p className="text-lg text-slate-400 max-w-2xl leading-relaxed">
              Free grade boundary calculator for <strong className="text-white">AQA, Edexcel, OCR and WJEC</strong>. Enter your raw mark — get your grade instantly. Covers Maths, English, Sciences, History, Geography and more. Showing <strong className="text-white">2025 boundaries</strong> (most recent available). <strong className="text-white">2026 boundaries published 20 August 2026 at 8:00am.</strong>
            </p>

            <div className="flex flex-wrap gap-3 mt-4">
              <span className="text-xs bg-emerald-500/15 text-emerald-400 border border-emerald-500/20 px-3 py-1 rounded-full font-medium">
                📅 Results Day: 20 Aug 2026
              </span>
              <span className="text-xs bg-white/5 text-slate-400 border border-white/10 px-3 py-1 rounded-full">
                Last verified: 26 May 2026
              </span>
              <span className="text-xs bg-white/5 text-slate-400 border border-white/10 px-3 py-1 rounded-full">
                AQA · Edexcel · OCR · WJEC
              </span>
            </div>
          </div>
        </header>

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-16">

          {/* ── BOARD SHORTCUTS ── */}
          <section aria-labelledby="board-select-heading">
            <h2 id="board-select-heading" className="text-xl font-bold text-white mb-4">Go straight to your exam board</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {BOARD_PAGES.map(board => (
                <Link
                  key={board.name}
                  href={board.href}
                  className="bg-[#12141f] border border-white/8 rounded-2xl p-5 hover:border-white/20 transition-all hover:-translate-y-1 group"
                >
                  <div className="text-2xl mb-3" aria-hidden="true">{board.icon}</div>
                  <h3 className="text-lg font-bold mb-1 group-hover:brightness-110 transition-all" style={{ color: board.color }}>
                    {board.name} Grade Boundaries 2026
                  </h3>
                  <p className="text-xs text-slate-500">{board.desc}</p>
                  <p className="text-xs mt-2 font-medium" style={{ color: board.color }}>View all {board.name} boundaries →</p>
                </Link>
              ))}
            </div>
          </section>

          {/* ── CALCULATOR (client component) ── */}
          <GCSECalculatorClient />
          {/* ── ESSENTIAL RESOURCES ── */}
<section aria-labelledby="resources-heading" className="grid grid-cols-2 md:grid-cols-4 gap-4">
  <Link href="/exams/gcse/guide" className="bg-[#12141f] border border-white/8 rounded-xl p-4 hover:border-white/20 transition-all flex flex-col gap-2">
    <span className="text-xl">📖</span>
    <span className="text-sm font-semibold text-slate-200">GCSE Guide</span>
  </Link>
  <Link href="/exams/gcse/revision-tips" className="bg-[#12141f] border border-white/8 rounded-xl p-4 hover:border-white/20 transition-all flex flex-col gap-2">
    <span className="text-xl">🧠</span>
    <span className="text-sm font-semibold text-slate-200">Revision Tips</span>
  </Link>
  <Link href="/exams/gcse/results-day" className="bg-[#12141f] border border-white/8 rounded-xl p-4 hover:border-white/20 transition-all flex flex-col gap-2">
    <span className="text-xl">📊</span>
    <span className="text-sm font-semibold text-slate-200">Results Day</span>
  </Link>
  <Link href="/exams/gcse/grade-boundaries-explained" className="bg-[#12141f] border border-white/8 rounded-xl p-4 hover:border-white/20 transition-all flex flex-col gap-2">
    <span className="text-xl">💡</span>
    <span className="text-sm font-semibold text-slate-200">Boundaries Explained</span>
  </Link>
</section>
          {/* ── KEY STATS ── */}
          <section aria-labelledby="key-stats-heading">
            <h2 id="key-stats-heading" className="text-2xl font-bold text-white mb-2">GCSE Maths grade 9 boundaries 2025 — all boards</h2>
            <p className="text-slate-400 text-sm mb-6">How many marks you needed for a grade 9 in GCSE Maths across each board in 2025 (the most recent series). 2026 boundaries will be published 20 August 2026.</p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {QUICK_STATS.map(stat => (
                <article key={stat.label} className="bg-[#12141f] border border-white/8 rounded-xl p-4">
                  <p className="text-xs text-slate-400 font-medium mb-1 leading-tight">{stat.label}</p>
                  <p className="text-2xl font-bold font-mono" style={{ color: stat.color }}>{stat.value}</p>
                  <p className="text-xs text-slate-500 mt-0.5 font-mono">{stat.sub}</p>
                </article>
              ))}
            </div>
          </section>

          {/* ── RESULTS DAY BANNER ── */}
          <div className="bg-emerald-500/10 border border-emerald-500/25 rounded-2xl p-6 flex gap-4 items-start">
            <div className="text-2xl shrink-0" aria-hidden="true">📅</div>
            <div>
              <h3 className="text-base font-bold text-white mb-1">GCSE Results Day 2026 — Thursday 20 August 2026</h3>
              <p className="text-sm text-slate-400 leading-relaxed">
                All 2026 GCSE grade boundaries for AQA, Edexcel, OCR and WJEC are published simultaneously at <strong className="text-white">8:00am on Thursday 20 August 2026</strong>. GradesNova will update this calculator with live 2026 data the moment boundaries are released. Bookmark this page and check back on Results Day for instant grade checking.
              </p>
            </div>
          </div>

          {/* ── WHAT ARE GRADE BOUNDARIES ── */}
          <section aria-labelledby="what-are-heading">
            <h2 id="what-are-heading" className="text-2xl font-bold text-white mb-4">What are GCSE grade boundaries?</h2>
            <div className="space-y-4 text-slate-400 leading-relaxed text-sm">
              <p>
                A GCSE grade boundary is the minimum number of raw marks you need to achieve a particular grade. Boundaries are not fixed percentages — they are set <strong className="text-white">after all papers are marked</strong>, once examiners know how hard the paper was. If a paper was harder than usual, the boundaries are lowered. If it was easier, they rise.
              </p>
              <p>
                This process is called <strong className="text-white">comparable outcomes</strong> and is overseen by Ofqual in England and Qualifications Wales in Wales. It ensures that the overall national grade distribution stays broadly similar from year to year, regardless of paper difficulty.
              </p>
              <p>
                Each exam board sets boundaries independently. An AQA grade 9 in Maths requires a different number of marks from an Edexcel grade 9 — you cannot mix boundaries between boards. Always use the specific board your school enters you for.
              </p>
            </div>

            {/* Grade scale explainer */}
            <div className="mt-6 bg-[#12141f] border border-white/8 rounded-xl overflow-hidden">
              <div className="px-5 py-3 border-b border-white/8">
                <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider">GCSE grades 9–1 explained</p>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-sm min-w-[500px]" aria-label="GCSE grade meanings and equivalents">
                  <thead>
                    <tr className="bg-white/3 border-b border-white/8">
                      <th scope="col" className="text-left px-4 py-2 text-xs text-slate-500 font-semibold">Grade</th>
                      <th scope="col" className="text-left px-4 py-2 text-xs text-slate-500 font-semibold">Old equivalent</th>
                      <th scope="col" className="text-left px-4 py-2 text-xs text-slate-500 font-semibold hidden sm:table-cell">What it means</th>
                      <th scope="col" className="text-left px-4 py-2 text-xs text-slate-500 font-semibold">Post-16 status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      { g: '9', old: 'A* (high)', meaning: 'Exceptional — top ~4% nationally', post: 'Required for competitive A-Levels', color: '#34d399' },
                      { g: '8', old: 'A*', meaning: 'Excellent — top ~9% nationally', post: 'Strong sixth form entry', color: '#34d399' },
                      { g: '7', old: 'A', meaning: 'Very strong — top ~18% nationally', post: 'University standard', color: '#6366f1' },
                      { g: '6', old: 'B (high)', meaning: 'Strong — above average', post: 'Sixth form entry for most subjects', color: '#6366f1' },
                      { g: '5', old: 'B/C', meaning: 'Strong pass — high C / low B', post: '✓ Required by most sixth forms', color: '#a855f7' },
                      { g: '4', old: 'C (low)', meaning: 'Standard pass — low C', post: '✓ Minimum pass, prevents resit', color: '#f59e0b' },
                      { g: '3', old: 'D', meaning: 'Below standard pass', post: '✗ Must resit English/Maths', color: '#f59e0b' },
                      { g: '2', old: 'E/F', meaning: 'Low grade', post: '✗ Must resit English/Maths', color: '#ef4444' },
                      { g: '1', old: 'F/G', meaning: 'Minimum grade', post: '✗ Must resit English/Maths', color: '#6b7280' },
                    ].map((row, i) => (
                      <tr key={row.g} className={`border-b border-white/5 last:border-0 ${i % 2 === 0 ? '' : 'bg-white/2'}`}>
                        <td className="px-4 py-2.5"><span className="text-lg font-bold" style={{ color: row.color }}>{row.g}</span></td>
                        <td className="px-4 py-2.5 text-slate-300 text-xs">{row.old}</td>
                        <td className="px-4 py-2.5 text-slate-400 text-xs hidden sm:table-cell">{row.meaning}</td>
                        <td className="px-4 py-2.5 text-slate-400 text-xs">{row.post}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </section>

          {/* ── MATHS BOUNDARIES ALL BOARDS ── */}
          <section aria-labelledby="maths-all-heading">
            <h2 id="maths-all-heading" className="text-2xl font-bold text-white mb-2">GCSE Maths grade boundaries 2025 — AQA, Edexcel, OCR, WJEC</h2>
            <p className="text-slate-400 text-sm mb-6">
              Official grade boundaries from the June 2025 series. OCR Maths totals 300 marks across three papers; all other boards total 240. 2026 boundaries will be published on <strong className="text-white">20 August 2026</strong>.
            </p>
            <div className="overflow-x-auto">
              <table className="w-full text-sm min-w-[640px]" aria-label="GCSE Maths grade boundaries 2025 all boards">
                <thead>
                  <tr className="bg-white/4 border-b border-white/8">
                    <th scope="col" className="text-left px-4 py-3 text-xs font-semibold text-slate-400 uppercase tracking-wider">Board</th>
                    <th scope="col" className="text-left px-3 py-3 text-xs font-semibold text-slate-400 uppercase tracking-wider">Tier</th>
                    <th scope="col" className="text-center px-3 py-3 text-xs font-bold text-emerald-400">9</th>
                    <th scope="col" className="text-center px-3 py-3 text-xs font-bold text-emerald-400">8</th>
                    <th scope="col" className="text-center px-3 py-3 text-xs font-bold text-indigo-400">7</th>
                    <th scope="col" className="text-center px-3 py-3 text-xs font-bold text-purple-400">5★</th>
                    <th scope="col" className="text-center px-3 py-3 text-xs font-bold text-amber-400">4+</th>
                    <th scope="col" className="text-center px-3 py-3 text-xs font-semibold text-slate-500">Max</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { board: 'AQA', tier: 'Higher', g9: 219, g8: 191, g7: 164, g5: 96, g4: 63, max: 240, color: '#34d399' },
                    { board: 'AQA', tier: 'Foundation', g9: null, g8: null, g7: null, g5: 188, g4: 160, max: 240, color: '#34d399' },
                    { board: 'Edexcel', tier: 'Higher', g9: 217, g8: 186, g7: 156, g5: 87, g4: 53, max: 240, color: '#6366f1' },
                    { board: 'Edexcel', tier: 'Foundation', g9: null, g8: null, g7: null, g5: 175, g4: 144, max: 240, color: '#6366f1' },
                    { board: 'OCR', tier: 'Higher', g9: 258, g8: 212, g7: 166, g5: 86, g4: 47, max: 300, color: '#a855f7' },
                    { board: 'OCR', tier: 'Foundation', g9: null, g8: null, g7: null, g5: 182, g4: 134, max: 300, color: '#a855f7' },
                    { board: 'WJEC', tier: 'Higher', g9: 196, g8: 155, g7: 115, g5: 56, g4: 27, max: 240, color: '#f59e0b' },
                    { board: 'WJEC', tier: 'Foundation', g9: null, g8: null, g7: null, g5: 141, g4: 111, max: 240, color: '#f59e0b' },
                  ].map((row, i) => (
                    <tr key={`${row.board}-${row.tier}`} className={`border-b border-white/5 last:border-0 ${i % 2 === 0 ? '' : 'bg-white/2'}`}>
                      <td className="px-4 py-2.5 font-bold text-sm" style={{ color: row.color }}>{row.board}</td>
                      <td className="px-3 py-2.5 text-slate-400 text-xs">{row.tier}</td>
                      <td className="px-3 py-2.5 text-center font-mono text-xs text-emerald-400 font-semibold">{row.g9 ?? '—'}</td>
                      <td className="px-3 py-2.5 text-center font-mono text-xs text-emerald-400">{row.g8 ?? '—'}</td>
                      <td className="px-3 py-2.5 text-center font-mono text-xs text-indigo-400">{row.g7 ?? '—'}</td>
                      <td className="px-3 py-2.5 text-center font-mono text-xs text-purple-400 font-semibold">{row.g5}</td>
                      <td className="px-3 py-2.5 text-center font-mono text-xs text-amber-400 font-semibold">{row.g4}</td>
                      <td className="px-3 py-2.5 text-center font-mono text-xs text-slate-500">{row.max}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-xs text-slate-600 mt-3">★ Grade 5 = strong pass. + Grade 4 = standard pass. Source: Official board documents, June 2025. Verified: 26 May 2026.</p>

            {/* Board-specific links */}
            <div className="mt-6 flex flex-wrap gap-3">
              {BOARD_PAGES.map(b => (
                <Link key={b.name} href={b.href}
                  className="text-xs px-4 py-2 rounded-xl font-medium border transition-all hover:scale-105"
                  style={{ backgroundColor: `${b.color}12`, borderColor: `${b.color}30`, color: b.color }}>
                  All {b.name} boundaries 2026 →
                </Link>
              ))}
            </div>
          </section>

          {/* ── GRADE 4 PASS MARK ── */}
          <section aria-labelledby="pass-mark-heading">
            <h2 id="pass-mark-heading" className="text-2xl font-bold text-white mb-4">What is the GCSE pass mark in 2026?</h2>
            <div className="space-y-4 text-slate-400 text-sm leading-relaxed">
              <p>
                The GCSE pass mark is <strong className="text-white">grade 4</strong>, officially called the standard pass. Students who do not achieve grade 4 in GCSE English Language or GCSE Maths are required to continue studying and resit those subjects in post-16 education.
              </p>
              <p>
                <strong className="text-white">Grade 5</strong>, the strong pass, sits between the old C and B grades. Most sixth forms and colleges require grade 5 in both English and Maths for A-Level entry. Some competitive programmes require even higher grades.
              </p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-5">
              {[
                { board: 'AQA Higher', g4: '63/240', g5: '96/240', g4pct: '26%', g5pct: '40%', color: '#34d399' },
                { board: 'Edexcel Higher', g4: '53/240', g5: '87/240', g4pct: '22%', g5pct: '36%', color: '#6366f1' },
                { board: 'OCR Higher', g4: '47/300', g5: '86/300', g4pct: '16%', g5pct: '29%', color: '#a855f7' },
                { board: 'WJEC Higher', g4: '27/240', g5: '56/240', g4pct: '11%', g5pct: '23%', color: '#f59e0b' },
              ].map(row => (
                <article key={row.board} className="bg-[#12141f] border border-white/8 rounded-xl p-4">
                  <p className="text-xs text-slate-400 font-medium mb-3">{row.board} — Maths 2025</p>
                  <div className="space-y-2">
                    <div>
                      <p className="text-[10px] text-slate-500 uppercase tracking-wider">Grade 4 (pass)</p>
                      <p className="text-lg font-bold font-mono" style={{ color: row.color }}>{row.g4}</p>
                      <p className="text-[10px] text-slate-600 font-mono">{row.g4pct} of total</p>
                    </div>
                    <div className="border-t border-white/6 pt-2">
                      <p className="text-[10px] text-slate-500 uppercase tracking-wider">Grade 5 (strong pass)</p>
                      <p className="text-lg font-bold font-mono" style={{ color: row.color }}>{row.g5}</p>
                      <p className="text-[10px] text-slate-600 font-mono">{row.g5pct} of total</p>
                    </div>
                  </div>
                </article>
              ))}
            </div>
            <p className="text-xs text-slate-600 mt-3">Maths Higher tier only. June 2025 official boundaries. 2026 boundaries published 20 August 2026.</p>
          </section>

          {/* ── FAQ ── */}
          <section aria-labelledby="faq-heading">
            <h2 id="faq-heading" className="text-2xl font-bold text-white mb-2">GCSE grade boundaries 2026 — frequently asked questions</h2>
            <p className="text-slate-400 text-sm mb-6">Answers to the most common questions about GCSE grade boundaries for AQA, Edexcel, OCR and WJEC in 2026.</p>
            <div className="space-y-4">
              {[
                {
                  q: 'What are the GCSE grade boundaries for 2026?',
                  a: '2026 GCSE grade boundaries for all boards will be published at 8:00am on Thursday 20 August 2026 (GCSE Results Day). Until then, the 2025 boundaries shown in this calculator are the most accurate reference point. GradesNova updates with live 2026 data the moment it is released.',
                },
                {
                  q: 'How many marks do I need for a grade 9 in GCSE Maths 2026?',
                  a: 'Based on 2025 boundaries (the best available reference), you needed 219/240 (91%) for AQA Higher, 217/240 (90%) for Edexcel Higher, 258/300 (86%) for OCR Higher, and 196/240 (82%) for WJEC Higher. The 2026 grade 9 boundary typically varies by ±5–10 marks from the previous year.',
                },
                {
                  q: 'When are GCSE grade boundaries released in 2026?',
                  a: 'GCSE Results Day 2026 is Thursday 20 August 2026. All grade boundaries are released at exactly 8:00am. They are strictly embargoed before this time — any "predicted boundaries" before this date are unofficial estimates.',
                },
                {
                  q: 'Why do grade boundaries change every year?',
                  a: 'Boundaries change because they are set after marking is complete, based on paper difficulty. Ofqual\'s comparable outcomes process anchors the grade distribution to prior attainment data, meaning the proportion of students achieving each grade stays broadly stable even when papers vary in difficulty.',
                },
                {
                  q: 'Will 2026 GCSE grade boundaries be lower than 2025?',
                  a: 'This depends entirely on 2026 paper difficulty, which cannot be known until after the exam. If papers are harder than 2025, boundaries will fall. If easier, they will rise. The Ofqual comparable outcomes process prevents dramatic swings. Year-on-year shifts are typically 3–10 marks.',
                },
                {
                  q: 'Can I use these boundaries to predict my 2026 grade?',
                  a: 'Yes, with caution. The 2025 boundaries shown here are the best available estimate for 2026. Use them to understand approximately where you stand. But treat them as a guide, not a guarantee — the actual 2026 boundaries will differ. Check back on 20 August 2026 for exact figures.',
                },
                {
                  q: 'What is the difference between Foundation and Higher tier boundaries?',
                  a: 'Foundation tier papers are easier, and the maximum grade you can achieve is grade 5. Higher tier papers allow grades 4–9. If you sit Higher tier and fall below the grade 4 boundary, you may receive grade 3 as a safety net. Foundation tier grade 5 boundaries are typically higher as a percentage of the paper than Higher tier grade 5, because Foundation papers are easier.',
                },
                {
                  q: 'Do WJEC boundaries differ from AQA and Edexcel?',
                  a: 'Yes. WJEC sets boundaries entirely independently from AQA, Edexcel and OCR. In 2025, WJEC Maths Higher required only 27/240 for grade 4 vs AQA\'s 63/240 — a significant difference. Always use boundaries for your specific board. Use the WJEC grade boundaries page for dedicated WJEC data.',
                },
              ].map((faq, i) => (
                <details key={i} className="bg-[#12141f] border border-white/7 rounded-xl overflow-hidden group">
                  <summary className="px-5 py-4 text-sm font-medium text-white cursor-pointer list-none flex items-center justify-between gap-4">
                    {faq.q}
                    <span className="text-slate-400 shrink-0 group-open:rotate-180 transition-transform duration-200">↓</span>
                  </summary>
                  <div className="px-5 pb-4 pt-2 border-t border-white/6">
                    <p className="text-sm text-slate-400 leading-relaxed">{faq.a}</p>
                  </div>
                </details>
              ))}
            </div>
          </section>

          {/* ── OTHER CALCULATORS ── */}
          <section className="bg-[#12141f] border border-white/7 rounded-2xl p-6" aria-labelledby="other-tools-heading">
            <h2 id="other-tools-heading" className="text-sm font-semibold text-slate-300 mb-4">Other free exam calculators</h2>
            <div className="flex flex-wrap gap-2">
              {[
                { id: 'a-levels', name: 'A-Level Grade Boundaries', color: '#ec4899' },
                { id: 'sat', name: 'SAT Score Calculator', color: '#6366f1' },
                { id: 'act', name: 'ACT Score Calculator', color: '#06b6d4' },
                { id: 'gre', name: 'GRE Score Calculator', color: '#a855f7' },
                { id: 'lsat', name: 'LSAT Score Calculator', color: '#ef4444' },
                { id: 'gmat', name: 'GMAT Score Calculator', color: '#f59e0b' },
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
      </main>
    </>
  );
}
