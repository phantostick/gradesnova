// app/exams/gcse/aqa/page.tsx
// AQA GCSE GRADE BOUNDARIES 2026 — DEDICATED PAGE
// Last modified: 2026-05-26
// Results Day: 20 August 2026 at 8:00am

import type { Metadata } from 'next';
import Link from 'next/link';
import { GCSECalculatorClient } from '../gcse-calculator-client';

export const metadata: Metadata = {
  title: 'AQA GCSE Grade Boundaries 2026 | Raw Mark Calculator',
  description:
    'Official AQA GCSE grade boundaries 2026. Enter your raw mark to find your grade instantly. Maths, English Language, English Literature, Biology, Chemistry, Physics, History, Geography and more. Updated Results Day 20 August 2026.',
  keywords: [
    'aqa grade boundaries 2026',
    'aqa gcse grade boundaries 2026',
    'aqa grade boundaries',
    'aqa gcse grade boundaries',
    'aqa grade boundaries maths 2026',
    'aqa grade boundaries english 2026',
    'aqa grade boundaries biology 2026',
    'aqa grade boundaries chemistry 2026',
    'aqa grade boundaries physics 2026',
    'aqa raw grade boundaries 2026',
    'aqa raw mark grade boundaries',
    'raw mark grade boundaries aqa',
    'aqa grade boundaries calculator',
    'aqa gcse maths grade boundaries 2026',
    'aqa gcse english grade boundaries 2026',
    'aqa gcse science grade boundaries 2026',
    'aqa gcse grade boundaries history',
    'aqa gcse grade boundaries geography',
    'aqa grade boundaries results day 2026',
    'aqa gcse results 2026',
    'what percentage is a grade 9 aqa gcse',
    'aqa gcse grade 4 boundary 2026',
    'aqa gcse grade 9 boundary 2026',
  ],
  alternates: { canonical: 'https://gradesnova.com/exams/gcse/aqa' },
  openGraph: {
    title: 'AQA GCSE Grade Boundaries 2026 | Raw Mark Calculator',
    description: 'Enter your AQA raw mark → get your grade instantly. All subjects. Official 2025 data, updated 20 Aug 2026 on Results Day.',
    url: 'https://gradesnova.com/exams/gcse/aqa',
    type: 'website',
    siteName: 'GradesNova',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AQA GCSE Grade Boundaries 2026 | Calculator',
    description: 'Free AQA grade boundary calculator. Enter raw mark, get grade. Updated Results Day 20 Aug 2026.',
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
    { '@type': 'ListItem', position: 2, name: 'GCSE Grade Boundaries 2026', item: 'https://gradesnova.com/exams/gcse' },
    { '@type': 'ListItem', position: 3, name: 'AQA Grade Boundaries 2026', item: 'https://gradesnova.com/exams/gcse/aqa' },
  ],
};

const jsonLdTool = {
  '@context': 'https://schema.org',
  '@type': 'WebApplication',
  name: 'AQA GCSE Grade Boundaries Calculator 2026',
  url: 'https://gradesnova.com/exams/gcse/aqa',
  description: 'Free AQA GCSE grade boundaries calculator for 2026. Enter any raw mark to instantly find your grade for Maths, English, Biology, Chemistry, Physics and more.',
  applicationCategory: 'EducationalApplication',
  operatingSystem: 'Any',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'GBP' },
  provider: { '@type': 'Organization', name: 'GradesNova', url: 'https://gradesnova.com' },
  dateModified: '2026-05-26',
};

const jsonLdDataset = {
  '@context': 'https://schema.org',
  '@type': 'Dataset',
  name: 'AQA GCSE Grade Boundaries 2026',
  description: 'Official AQA GCSE grade boundary data from the June 2025 series, updated to 2026 on Results Day 20 August 2026.',
  url: 'https://gradesnova.com/exams/gcse/aqa',
  creator: { '@type': 'Organization', name: 'GradesNova' },
  publisher: { '@type': 'Organization', name: 'AQA' },
  dateModified: '2026-05-26',
  keywords: 'AQA, GCSE, grade boundaries, 2026, raw marks, Maths, English, Science',
  temporalCoverage: '2025/2026',
  spatialCoverage: 'England, Wales',
  isBasedOn: {
    '@type': 'CreativeWork',
    name: 'AQA GCSE Grade Boundary Documents June 2025',
    publisher: { '@type': 'Organization', name: 'AQA', url: 'https://www.aqa.org.uk' },
  },
};

const jsonLdFAQ = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What are the AQA GCSE grade boundaries for 2026?',
      acceptedAnswer: { '@type': 'Answer', text: 'AQA 2026 GCSE grade boundaries will be published at 8:00am on Thursday 20 August 2026, which is GCSE Results Day. The 2025 AQA boundaries shown on this page are the most recent official data and the best reference for 2026. GradesNova updates immediately when 2026 data is released.' },
    },
    {
      '@type': 'Question',
      name: 'What is the AQA grade 9 boundary for GCSE Maths 2026?',
      acceptedAnswer: { '@type': 'Answer', text: 'In 2025, the AQA GCSE Maths Higher grade 9 boundary was 219 out of 240 (91%). The Foundation tier does not award grade 9. The 2026 boundary will be published on Results Day 20 August 2026 and will typically vary by ±5–10 marks from 2025 depending on paper difficulty.' },
    },
    {
      '@type': 'Question',
      name: 'What is the AQA grade 4 pass mark for GCSE Maths?',
      acceptedAnswer: { '@type': 'Answer', text: 'In 2025, the AQA GCSE Maths Higher grade 4 (standard pass) boundary was 63 out of 240. For Foundation tier it was 160 out of 240. Grade 4 is the minimum pass — students below this in English or Maths must resit post-16.' },
    },
    {
      '@type': 'Question',
      name: 'How do AQA raw grade boundaries work?',
      acceptedAnswer: { '@type': 'Answer', text: 'AQA sets grade boundaries as raw marks — the actual number of marks you score on the exam papers. Boundaries are not fixed percentages. They are set after all papers are marked by comparing paper difficulty to previous years using statistical models. A harder paper in 2026 means lower boundaries; an easier paper means higher boundaries.' },
    },
    {
      '@type': 'Question',
      name: 'When does AQA publish grade boundaries for 2026?',
      acceptedAnswer: { '@type': 'Answer', text: 'AQA publishes 2026 GCSE grade boundaries at exactly 8:00am on Thursday 20 August 2026, which is GCSE Results Day. They are not released before this time. GradesNova will update this page with live 2026 AQA boundaries as soon as they are available.' },
    },
  ],
};

// ── ALL AQA 2025 SUBJECT BOUNDARIES ──────────────────────────────────────
const AQA_SUBJECTS_2025 = [
  {
    subject: 'Mathematics', tier: 'Higher', max: 240,
    g9: 219, g8: 191, g7: 164, g6: 130, g5: 96, g4: 63, g3: 46, g2: null, g1: null,
  },
  {
    subject: 'Mathematics', tier: 'Foundation', max: 240,
    g9: null, g8: null, g7: null, g6: null, g5: 188, g4: 160, g3: 119, g2: 79, g1: 39,
  },
  {
    subject: 'English Language', tier: 'Higher', max: 160,
    g9: 119, g8: 109, g7: 100, g6: 91, g5: 82, g4: 73, g3: 54, g2: 35, g1: 16,
  },
  {
    subject: 'English Literature', tier: 'Higher', max: 160,
    g9: 136, g8: 122, g7: 108, g6: 92, g5: 77, g4: 62, g3: 46, g2: 30, g1: 15,
  },
  {
    subject: 'Biology', tier: 'Higher', max: 200,
    g9: 141, g8: 127, g7: 113, g6: 94, g5: 75, g4: 56, g3: 46, g2: null, g1: null,
  },
  {
    subject: 'Biology', tier: 'Foundation', max: 200,
    g9: null, g8: null, g7: null, g6: null, g5: 140, g4: 121, g3: 87, g2: 53, g1: 19,
  },
  {
    subject: 'Chemistry', tier: 'Higher', max: 200,
    g9: 150, g8: 132, g7: 115, g6: 90, g5: 66, g4: 42, g3: 30, g2: null, g1: null,
  },
  {
    subject: 'Chemistry', tier: 'Foundation', max: 200,
    g9: null, g8: null, g7: null, g6: null, g5: 132, g4: 109, g3: 80, g2: 52, g1: 24,
  },
  {
    subject: 'Physics', tier: 'Higher', max: 200,
    g9: 152, g8: 139, g7: 126, g6: 107, g5: 88, g4: 70, g3: 61, g2: null, g1: null,
  },
  {
    subject: 'Physics', tier: 'Foundation', max: 200,
    g9: null, g8: null, g7: null, g6: null, g5: 144, g4: 131, g3: 95, g2: 59, g1: 24,
  },
  {
    subject: 'History', tier: 'Higher', max: 168,
    g9: 146, g8: 134, g7: 123, g6: 110, g5: 98, g4: 86, g3: 65, g2: 44, g1: 23,
  },
  {
    subject: 'Geography', tier: 'Higher', max: 200,
    g9: 154, g8: 141, g7: 129, g6: 115, g5: 102, g4: 89, g3: 65, g2: 41, g1: 18,
  },
  {
    subject: 'Religious Studies', tier: 'Higher', max: 252,
    g9: 188, g8: 170, g7: 153, g6: 133, g5: 113, g4: 93, g3: 70, g2: 47, g1: 24,
  },
  {
    subject: 'Computer Science', tier: 'Higher', max: 180,
    g9: 155, g8: 142, g7: 130, g6: 111, g5: 92, g4: 74, g3: 55, g2: 36, g1: 18,
  },
  {
    subject: 'Physical Education', tier: 'Higher', max: 200,
    g9: 163, g8: 153, g7: 143, g6: 130, g5: 118, g4: 106, g3: 80, g2: 54, g1: 29,
  },
  {
    subject: 'Design Technology', tier: 'Higher', max: 200,
    g9: 179, g8: 165, g7: 152, g6: 134, g5: 117, g4: 100, g3: 73, g2: 46, g1: 20,
  },
  {
    subject: 'Drama', tier: 'Higher', max: 200,
    g9: 179, g8: 169, g7: 160, g6: 146, g5: 132, g4: 119, g3: 89, g2: 59, g1: 29,
  },
  {
    subject: 'Music', tier: 'Higher', max: 200,
    g9: 170, g8: 160, g7: 150, g6: 137, g5: 124, g4: 112, g3: 91, g2: 70, g1: 49,
  },
  {
    subject: 'Food & Nutrition', tier: 'Higher', max: 300,
    g9: 230, g8: 210, g7: 190, g6: 168, g5: 146, g4: 125, g3: 94, g2: 63, g1: 33,
  },
];

// ── MATHS YEAR-ON-YEAR ───────────────────────────────────────────────────
const AQA_MATHS_YOY = [
  { year: '2025', g9: 219, g8: 191, g7: 164, g5: 96, g4: 63, max: 240 },
  { year: '2024', g9: 213, g8: 178, g7: 144, g5: 93, g4: 58, max: 240 },
  { year: '2023', g9: 210, g8: 176, g7: 142, g5: 90, g4: 59, max: 240 },
  { year: '2022', g9: 198, g8: 165, g7: 133, g5: 84, g4: 55, max: 240 },
];

const GRADE_COLORS: Record<string, string> = {
  g9: '#34d399', g8: '#34d399', g7: '#6366f1', g6: '#6366f1',
  g5: '#a855f7', g4: '#f59e0b', g3: '#f59e0b', g2: '#ef4444', g1: '#6b7280',
};

export default function AQAGCSEPage() {
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
                <li><Link href="/exams/gcse" className="hover:text-white transition-colors">GCSE Grade Boundaries 2026</Link></li>
                <li aria-hidden="true">›</li>
                <li className="text-slate-400" aria-current="page">AQA</li>
              </ol>
            </nav>

            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 rounded-xl flex items-center justify-center text-xl bg-emerald-500/18" aria-hidden="true">📗</div>
              <span className="text-xs font-mono text-emerald-400/70 uppercase tracking-widest">AQA · GCSE · Grades 1–9 · England</span>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold text-white tracking-tight mb-3">
              AQA GCSE Grade Boundaries 2026
            </h1>
            <p className="text-lg text-slate-400 max-w-2xl leading-relaxed">
              Official AQA GCSE grade boundaries for all subjects. Enter your raw mark to find your grade instantly. Covers Maths, English, Biology, Chemistry, Physics, History, Geography and more. Showing <strong className="text-white">AQA June 2025 boundaries</strong> — the most recent available. <strong className="text-white">2026 boundaries published 20 August 2026 at 8:00am.</strong>
            </p>

            <div className="flex flex-wrap gap-3 mt-4">
              <span className="text-xs bg-emerald-500/15 text-emerald-400 border border-emerald-500/20 px-3 py-1 rounded-full font-medium">
                📅 Results Day: 20 Aug 2026
              </span>
              <span className="text-xs bg-white/5 text-slate-400 border border-white/10 px-3 py-1 rounded-full">
                Source: AQA official boundary documents
              </span>
              <span className="text-xs bg-white/5 text-slate-400 border border-white/10 px-3 py-1 rounded-full">
                Verified: 26 May 2026
              </span>
            </div>
          </div>
        </header>

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-16">

          {/* ── QUICK FACTS ── */}
          <section aria-labelledby="quick-facts-heading">
            <h2 id="quick-facts-heading" className="sr-only">AQA GCSE 2025 key boundaries at a glance</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                { label: 'Maths Higher — Grade 9', value: '219/240', sub: '91% of total marks', color: '#34d399' },
                { label: 'Maths Higher — Grade 5', value: '96/240', sub: '40% — strong pass', color: '#a855f7' },
                { label: 'Maths Higher — Grade 4', value: '63/240', sub: '26% — standard pass', color: '#f59e0b' },
                { label: 'English Lang — Grade 9', value: '119/160', sub: '74% of total marks', color: '#34d399' },
              ].map(stat => (
                <article key={stat.label} className="bg-[#12141f] border border-white/8 rounded-xl p-4">
                  <p className="text-xs text-slate-400 font-medium mb-1 leading-tight">{stat.label}</p>
                  <p className="text-2xl font-bold font-mono" style={{ color: stat.color }}>{stat.value}</p>
                  <p className="text-xs text-slate-500 mt-0.5">{stat.sub}</p>
                </article>
              ))}
            </div>
          </section>

          {/* ── RESULTS DAY BANNER ── */}
          <div className="bg-emerald-500/10 border border-emerald-500/25 rounded-2xl p-6 flex gap-4 items-start">
            <div className="text-2xl shrink-0" aria-hidden="true">📅</div>
            <div>
              <h2 className="text-base font-bold text-white mb-1">AQA Results Day 2026 — Thursday 20 August 2026</h2>
              <p className="text-sm text-slate-400 leading-relaxed">
                AQA publishes all 2026 GCSE grade boundaries at <strong className="text-white">8:00am on Thursday 20 August 2026</strong>. GradesNova updates with live 2026 AQA data the moment boundaries are released. Bookmark this page and return on Results Day for instant, accurate grade checking with official 2026 data.
              </p>
            </div>
          </div>

          {/* ── INTERACTIVE CALCULATOR ── */}
          <section aria-labelledby="calculator-heading" className="scroll-mt-24">
            <h2 id="calculator-heading" className="text-2xl font-bold text-white mb-2">
              AQA GCSE grade boundaries calculator
            </h2>
            <p className="text-slate-400 text-sm mb-6">
              Select your subject and enter your raw mark to instantly find your AQA GCSE grade based on the latest 2025 boundaries.
            </p>
            <GCSECalculatorClient />
          </section>

          {/* ── MAIN BOUNDARY TABLE ── */}
          <section aria-labelledby="all-subjects-heading">
            <h2 id="all-subjects-heading" className="text-2xl font-bold text-white mb-2">
              AQA GCSE grade boundaries 2025 — all subjects
            </h2>
            <p className="text-slate-400 text-sm mb-6">
              Complete official AQA grade boundaries from the June 2025 examination series, published 21 August 2025. These are the most recent AQA GCSE boundaries available. 2026 boundaries are published on Results Day 20 August 2026.
            </p>

            <div className="overflow-x-auto">
              <table className="w-full text-sm min-w-[780px]" aria-label="AQA GCSE grade boundaries 2025 all subjects">
                <thead>
                  <tr className="bg-white/4 border-b border-white/8">
                    <th scope="col" className="text-left px-4 py-3 text-xs font-semibold text-slate-400 uppercase tracking-wider">Subject</th>
                    <th scope="col" className="text-left px-3 py-3 text-xs font-semibold text-slate-400 uppercase tracking-wider">Tier</th>
                    <th scope="col" className="text-center px-2 py-3 text-xs font-bold text-emerald-400">9</th>
                    <th scope="col" className="text-center px-2 py-3 text-xs font-bold text-emerald-400">8</th>
                    <th scope="col" className="text-center px-2 py-3 text-xs font-bold text-indigo-400">7</th>
                    <th scope="col" className="text-center px-2 py-3 text-xs font-bold text-indigo-400">6</th>
                    <th scope="col" className="text-center px-2 py-3 text-xs font-bold text-purple-400">5★</th>
                    <th scope="col" className="text-center px-2 py-3 text-xs font-bold text-amber-400">4+</th>
                    <th scope="col" className="text-center px-2 py-3 text-xs font-semibold text-slate-400">3</th>
                    <th scope="col" className="text-center px-2 py-3 text-xs font-semibold text-slate-500">Max</th>
                  </tr>
                </thead>
                <tbody>
                  {AQA_SUBJECTS_2025.map((row, i) => (
                    <tr key={`${row.subject}-${row.tier}`} className={`border-b border-white/5 last:border-0 ${i % 2 === 0 ? '' : 'bg-white/2'}`}>
                      <td className="px-4 py-2.5 font-medium text-slate-200 text-sm">{row.subject}</td>
                      <td className="px-3 py-2.5 text-xs text-slate-500">{row.tier}</td>
                      <td className="px-2 py-2.5 text-center font-mono text-xs font-semibold text-emerald-400">{row.g9 ?? '—'}</td>
                      <td className="px-2 py-2.5 text-center font-mono text-xs text-emerald-400">{row.g8 ?? '—'}</td>
                      <td className="px-2 py-2.5 text-center font-mono text-xs text-indigo-400">{row.g7 ?? '—'}</td>
                      <td className="px-2 py-2.5 text-center font-mono text-xs text-indigo-400">{row.g6 ?? '—'}</td>
                      <td className="px-2 py-2.5 text-center font-mono text-xs text-purple-400 font-semibold">{row.g5 ?? '—'}</td>
                      <td className="px-2 py-2.5 text-center font-mono text-xs text-amber-400 font-semibold">{row.g4 ?? '—'}</td>
                      <td className="px-2 py-2.5 text-center font-mono text-xs text-slate-400">{row.g3 ?? '—'}</td>
                      <td className="px-2 py-2.5 text-center font-mono text-xs text-slate-500">{row.max}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-xs text-slate-600 mt-3">
              ★ Grade 5 = strong pass. + Grade 4 = standard pass. Source: AQA official grade boundary documents, June 2025. Not affiliated with AQA. Verified: 26 May 2026.
            </p>
          </section>

          {/* ── MATHS YEAR ON YEAR ── */}
          <section aria-labelledby="maths-yoy-heading">
            <h2 id="maths-yoy-heading" className="text-2xl font-bold text-white mb-2">
              AQA GCSE Maths grade boundaries 2022–2025
            </h2>
            <p className="text-slate-400 text-sm mb-6">
              Four-year trend for AQA GCSE Maths Higher tier. Boundaries have risen consistently since 2022, reflecting improved cohort performance post-pandemic. Use this range to estimate where 2026 boundaries might fall — though only the 20 August 2026 release confirms exact figures.
            </p>
            <div className="overflow-x-auto">
              <table className="w-full text-sm min-w-[500px]" aria-label="AQA GCSE Maths Higher grade boundaries 2022 to 2025">
                <thead>
                  <tr className="bg-white/4 border-b border-white/8">
                    <th scope="col" className="text-left px-4 py-3 text-xs font-semibold text-slate-400 uppercase">Year</th>
                    <th scope="col" className="text-center px-3 py-3 text-xs font-bold text-emerald-400">Grade 9</th>
                    <th scope="col" className="text-center px-3 py-3 text-xs font-bold text-indigo-400">Grade 7</th>
                    <th scope="col" className="text-center px-3 py-3 text-xs font-bold text-purple-400">Grade 5</th>
                    <th scope="col" className="text-center px-3 py-3 text-xs font-bold text-amber-400">Grade 4</th>
                    <th scope="col" className="text-center px-3 py-3 text-xs font-semibold text-slate-500">Max</th>
                  </tr>
                </thead>
                <tbody>
                  {AQA_MATHS_YOY.map((row, i) => (
                    <tr key={row.year} className={`border-b border-white/5 last:border-0 ${i === 0 ? 'bg-emerald-500/5' : i % 2 === 0 ? '' : 'bg-white/2'}`}>
                      <td className="px-4 py-3 font-mono font-semibold text-white">
                        {row.year}
                        {i === 0 && <span className="ml-2 text-[10px] bg-emerald-500/20 text-emerald-300 px-1.5 py-0.5 rounded font-sans">latest</span>}
                      </td>
                      <td className="px-3 py-3 text-center font-mono text-xs text-emerald-400 font-semibold">{row.g9}</td>
                      <td className="px-3 py-3 text-center font-mono text-xs text-indigo-400">{row.g7}</td>
                      <td className="px-3 py-3 text-center font-mono text-xs text-purple-400 font-semibold">{row.g5}</td>
                      <td className="px-3 py-3 text-center font-mono text-xs text-amber-400 font-semibold">{row.g4}</td>
                      <td className="px-3 py-3 text-center font-mono text-xs text-slate-500">{row.max}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-xs text-slate-600 mt-3">AQA GCSE Mathematics Higher tier, June series 2022–2025. Source: AQA official documents.</p>
          </section>

          {/* ── SUBJECT DEEP DIVES ── */}
          <section aria-labelledby="subjects-heading">
            <h2 id="subjects-heading" className="text-2xl font-bold text-white mb-2">
              AQA GCSE grade boundaries by subject — 2025
            </h2>
            <p className="text-slate-400 text-sm mb-6">Detailed grade 9, 5 and 4 boundaries for the most searched AQA GCSE subjects.</p>

            <div className="grid sm:grid-cols-2 gap-4">
              {[
                {
                  subject: 'Mathematics', icon: '📐',
                  higher: { max: 240, g9: 219, g5: 96, g4: 63 },
                  foundation: { max: 240, g5: 188, g4: 160 },
                  note: 'Higher tier required for grade 6–9. Foundation max is grade 5.',
                  color: '#34d399',
                },
                {
                  subject: 'English Language', icon: '📝',
                  higher: { max: 160, g9: 119, g5: 82, g4: 73 },
                  foundation: null,
                  note: 'Grade 4 is legally required. Single tier in most cases.',
                  color: '#6366f1',
                },
                {
                  subject: 'Biology', icon: '🧬',
                  higher: { max: 200, g9: 141, g5: 75, g4: 56 },
                  foundation: { max: 200, g5: 140, g4: 121 },
                  note: 'Separate science. Combined Science boundaries differ.',
                  color: '#34d399',
                },
                {
                  subject: 'Chemistry', icon: '⚗️',
                  higher: { max: 200, g9: 150, g5: 66, g4: 42 },
                  foundation: { max: 200, g5: 132, g4: 109 },
                  note: 'Separate science. Chemistry Higher has a relatively low grade 4 boundary.',
                  color: '#a855f7',
                },
                {
                  subject: 'Physics', icon: '⚛️',
                  higher: { max: 200, g9: 152, g5: 88, g4: 70 },
                  foundation: { max: 200, g5: 144, g4: 131 },
                  note: 'Separate science. Physics Foundation grade 4 is high at 131/200.',
                  color: '#f59e0b',
                },
                {
                  subject: 'History', icon: '📜',
                  higher: { max: 168, g9: 146, g5: 98, g4: 86 },
                  foundation: null,
                  note: 'Single tier. High boundaries reflect essay-based assessment.',
                  color: '#ef4444',
                },
                {
                  subject: 'Geography', icon: '🌍',
                  higher: { max: 200, g9: 154, g5: 102, g4: 89 },
                  foundation: null,
                  note: 'Single tier. Grade 9 requires 77% of total marks.',
                  color: '#06b6d4',
                },
                {
                  subject: 'Computer Science', icon: '💻',
                  higher: { max: 180, g9: 155, g5: 92, g4: 74 },
                  foundation: null,
                  note: 'Single tier. Programming knowledge heavily tested.',
                  color: '#ec4899',
                },
              ].map(s => (
                <article key={s.subject} className="bg-[#12141f] border border-white/8 rounded-xl p-5">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-xl" aria-hidden="true">{s.icon}</span>
                    <h3 className="text-base font-bold" style={{ color: s.color }}>{s.subject}</h3>
                  </div>

                  <div className="space-y-3 mb-3">
                    <div>
                      <p className="text-[10px] text-slate-500 uppercase tracking-wider font-medium mb-1.5">Higher Tier (out of {s.higher.max})</p>
                      <div className="flex gap-3">
                        {[
                          { label: 'Grade 9', val: s.higher.g9, color: '#34d399' },
                          { label: 'Grade 5★', val: s.higher.g5, color: '#a855f7' },
                          { label: 'Grade 4+', val: s.higher.g4, color: '#f59e0b' },
                        ].map(g => (
                          <div key={g.label} className="flex-1 bg-white/4 rounded-lg p-2 text-center">
                            <p className="text-sm font-bold font-mono" style={{ color: g.color }}>{g.val ?? '—'}</p>
                            <p className="text-[10px] text-slate-500 mt-0.5">{g.label}</p>
                          </div>
                        ))}
                      </div>
                    </div>

                    {s.foundation && (
                      <div>
                        <p className="text-[10px] text-slate-500 uppercase tracking-wider font-medium mb-1.5">Foundation Tier (out of {s.foundation.max})</p>
                        <div className="flex gap-3">
                          <div className="flex-1 bg-white/4 rounded-lg p-2 text-center">
                            <p className="text-sm font-bold font-mono text-purple-400">{s.foundation.g5}</p>
                            <p className="text-[10px] text-slate-500 mt-0.5">Grade 5 (max)</p>
                          </div>
                          <div className="flex-1 bg-white/4 rounded-lg p-2 text-center">
                            <p className="text-sm font-bold font-mono text-amber-400">{s.foundation.g4}</p>
                            <p className="text-[10px] text-slate-500 mt-0.5">Grade 4+</p>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>

                  <p className="text-xs text-slate-500 leading-relaxed">{s.note}</p>
                </article>
              ))}
            </div>
            <p className="text-xs text-slate-600 mt-4">Source: AQA official grade boundary documents, June 2025. ★ = strong pass. + = standard pass.</p>
          </section>

          {/* ── HOW AQA SETS BOUNDARIES ── */}
          <section aria-labelledby="how-aqa-heading">
            <h2 id="how-aqa-heading" className="text-2xl font-bold text-white mb-4">How AQA sets GCSE grade boundaries</h2>
            <div className="space-y-4 text-sm text-slate-400 leading-relaxed">
              <p>
                AQA does not decide grade boundaries before your exam. Boundaries are set <strong className="text-white">after all papers are marked</strong>, in a process involving senior examiners and statistical models. Here is how it works step by step.
              </p>
            </div>
            <div className="mt-5 space-y-3">
              {[
                { step: '01', title: 'Papers are marked', body: 'All AQA GCSE papers are marked by trained examiners, producing a raw mark for every student. For Maths Higher, the maximum raw mark is 240 across three papers.', color: '#34d399' },
                { step: '02', title: 'Grade setting meeting', body: 'Senior AQA examiners review a sample of actual student scripts from across the mark range. They make professional judgements about what standard of work represents each grade.', color: '#6366f1' },
                { step: '03', title: 'Statistical modelling', body: 'AQA uses Ofqual\'s comparable outcomes methodology. It compares this year\'s cohort prior attainment data with previous years to determine where boundaries should sit to maintain consistent national grade distributions.', color: '#a855f7' },
                { step: '04', title: 'Boundaries are locked', body: 'Final boundaries are agreed and embargoed. AQA submits them to Ofqual for approval. They are not released until exactly 8:00am on Results Day — 20 August 2026 for the 2026 series.', color: '#f59e0b' },
                { step: '05', title: 'Results are issued', body: 'Your raw mark is looked up against the AQA boundary table for your specific subject and tier. Your grade is determined automatically — no human discretion is applied to individual results.', color: '#ef4444' },
              ].map(item => (
                <div key={item.step} className="bg-[#12141f] border border-white/8 rounded-xl p-5 flex gap-4">
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center text-xs font-bold shrink-0 font-mono"
                    style={{ backgroundColor: `${item.color}20`, color: item.color }}>
                    {item.step}
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-white mb-1">{item.title}</p>
                    <p className="text-xs text-slate-400 leading-relaxed">{item.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* ── FAQ ── */}
          <section aria-labelledby="faq-heading">
            <h2 id="faq-heading" className="text-2xl font-bold text-white mb-2">AQA GCSE grade boundaries 2026 — FAQs</h2>
            <p className="text-slate-400 text-sm mb-6">The most common questions about AQA grade boundaries, raw marks, and Results Day 2026.</p>
            <div className="space-y-3">
              {[
                {
                  q: 'What are the AQA GCSE grade boundaries for 2026?',
                  a: 'AQA 2026 GCSE grade boundaries are published at 8:00am on Thursday 20 August 2026. Until then, the 2025 boundaries shown on this page are the best available reference. The grade 9 boundary for AQA Maths Higher was 219/240 in 2025; expect the 2026 figure to fall within ±10 marks of this depending on paper difficulty.',
                },
                {
                  q: 'What is the AQA Maths grade 9 boundary for 2026?',
                  a: 'The 2026 AQA Maths Higher grade 9 boundary will be confirmed on 20 August 2026. In 2025 it was 219/240 (91%). In 2024 it was 213/240. In 2023 it was 210/240. The 4-year trend shows a gradual rise. A realistic working target for 2026 is around 210–225 out of 240, but only the official release confirms the exact figure.',
                },
                {
                  q: 'How do I use AQA raw mark boundaries?',
                  a: 'AQA boundaries are always in raw marks — the actual total marks you score across all papers for a subject. For Maths Higher (3 papers, 80 marks each = 240 total), add your marks from all three papers and compare to the boundary table. A raw mark of 63 or more was grade 4 in 2025; 219 or more was grade 9.',
                },
                {
                  q: 'What is the AQA grade 4 boundary for English Language?',
                  a: 'In 2025, the AQA GCSE English Language grade 4 boundary was 73 out of 160. Grade 9 required 119 out of 160 (74%). English Language grade 4 is legally significant — students who do not achieve it must resit the subject in post-16 education.',
                },
                {
                  q: 'Are AQA and Edexcel grade boundaries the same?',
                  a: 'No. AQA and Edexcel set boundaries independently. In 2025 for Maths Higher, AQA grade 4 was 63/240 while Edexcel grade 4 was 53/240 — a difference of 10 marks. Never apply AQA boundaries to an Edexcel paper. Always check which board your school uses.',
                },
                {
                  q: 'What percentage do I need for grade 9 in AQA GCSE Maths?',
                  a: 'In 2025, you needed 219 out of 240 (91.25%) for grade 9 in AQA Maths Higher. For English Language, grade 9 needed 119/160 (74.4%). For Biology Higher, 141/200 (70.5%). The percentage required varies significantly by subject — Maths typically requires the highest percentage.',
                },
                {
                  q: 'Will AQA 2026 grade boundaries be lower than 2025?',
                  a: 'This depends on paper difficulty. If 2026 AQA papers are harder than 2025, boundaries will fall. Ofqual\'s comparable outcomes process prevents large swings. Based on 2022–2025 trends, Maths Higher grade 4 has ranged from 55–63. A dramatic drop below 55 would be unusual unless the paper was significantly harder.',
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

          {/* ── OTHER BOARDS ── */}
          <section aria-labelledby="other-boards-heading">
            <h2 id="other-boards-heading" className="text-sm font-semibold text-slate-400 uppercase tracking-wider mb-4">Other GCSE exam boards</h2>
            <div className="flex flex-wrap gap-3">
              {[
                { name: 'Edexcel Grade Boundaries 2026', href: '/exams/gcse/edexcel', color: '#6366f1' },
                { name: 'OCR Grade Boundaries 2026', href: '/exams/gcse/ocr', color: '#a855f7' },
                { name: 'WJEC Grade Boundaries 2026', href: '/exams/gcse/wjec', color: '#f59e0b' },
                { name: 'All Boards — GCSE 2026', href: '/exams/gcse', color: '#34d399' },
              ].map(b => (
                <Link key={b.name} href={b.href}
                  className="px-4 py-2 rounded-xl text-xs font-medium border transition-all hover:scale-105"
                  style={{ backgroundColor: `${b.color}12`, borderColor: `${b.color}30`, color: b.color }}>
                  {b.name}
                </Link>
              ))}
            </div>
          </section>

        </div>
      </main>
    </>
  );
}
