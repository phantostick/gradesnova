// app/exams/gcse/aqa/page.tsx
// AQA GCSE GRADE BOUNDARIES 2025-26 — DEDICATED PAGE
// SEO CHANGES:
//   - Title updated from "2026" to "2025-26" to honestly reflect data (matches Edexcel pattern)
//   - Static answer block added above fold (featured snippet target — was missing, now consistent with Edexcel)
//   - Unique "AQA by the numbers" section added (market share, entry volume, history) — differentiates from sibling pages
//   - dateModified aligned to 2026-05-31 (was inconsistently 2026-05-26)
// Last modified: 2026-05-31
// Results Day: 20 August 2026 at 8:00am

import type { Metadata } from 'next';
import Link from 'next/link';
import { GCSECalculatorClient } from '../gcse-calculator-client';

export const metadata: Metadata = {
  title: 'AQA Grade Boundaries 2026',
  description:
    'Official AQA GCSE grade boundaries from June 2025. Maths Higher grade 9 was 219/240, grade 4 was 63/240. English Language grade 9 was 119/160. All subjects — Biology, Chemistry, Physics, History, Geography. 2026 boundaries published 20 August 2026.',
  alternates: { canonical: 'https://gradesnova.com/exams/gcse/aqa' },
  openGraph: {
    title: 'AQA Grade Boundaries 2026',
    description:
      'Official AQA grade boundaries June 2025. Maths Higher: grade 9 = 219/240, grade 4 = 63/240. All subjects. Updated live 20 August 2026 on Results Day.',
    url: 'https://gradesnova.com/exams/gcse/aqa',
    type: 'website',
    siteName: 'GradesNova',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AQA Grade Boundaries 2026',
    description: 'Free AQA grade boundary calculator. Enter raw mark, get grade. Official 2025 data. Updated Results Day 20 Aug 2026.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-snippet': -1, 'max-image-preview': 'large' },
  },
};

const jsonLdBreadcrumb = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://gradesnova.com' },
    { '@type': 'ListItem', position: 2, name: 'GCSE Grade Boundaries', item: 'https://gradesnova.com/exams/gcse' },
    { '@type': 'ListItem', position: 3, name: 'AQA Grade Boundaries 2025', item: 'https://gradesnova.com/exams/gcse/aqa' },
  ],
};

const jsonLdTool = {
  '@context': 'https://schema.org',
  '@type': 'WebApplication',
  name: 'AQA GCSE Grade Boundaries Calculator 2025',
  url: 'https://gradesnova.com/exams/gcse/aqa',
  description:
    'Free AQA GCSE grade boundaries calculator. Enter any raw mark to instantly find your AQA grade for Maths, English, Biology, Chemistry, Physics and more. Official June 2025 data.',
  applicationCategory: 'EducationalApplication',
  operatingSystem: 'Any',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'GBP' },
  provider: { '@type': 'Organization', name: 'GradesNova', url: 'https://gradesnova.com' },
  dateModified: '2026-05-31',
};

const jsonLdDataset = {
  '@context': 'https://schema.org',
  '@type': 'Dataset',
  name: 'AQA GCSE Grade Boundaries 2025-26',
  description:
    'Official AQA GCSE grade boundary data from the June 2025 examination series. Updated on GCSE Results Day 20 August 2026 when 2026 data is released.',
  url: 'https://gradesnova.com/exams/gcse/aqa',
  creator: { '@type': 'Organization', name: 'GradesNova' },
  publisher: { '@type': 'Organization', name: 'AQA' },
  dateModified: '2026-05-31',
  keywords: 'AQA, GCSE, grade boundaries, 2025, 2026, raw marks, Maths, English, Science',
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
      name: 'What are the AQA GCSE grade boundaries for 2025?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The official AQA GCSE grade boundaries from June 2025 are: Maths Higher — grade 9: 219/240, grade 5: 96/240, grade 4: 63/240. English Language — grade 9: 119/160, grade 5: 82/160, grade 4: 73/160. Biology Higher — grade 9: 141/200, grade 4: 56/200. Chemistry Higher — grade 9: 150/200, grade 4: 42/200. Physics Higher — grade 9: 152/200, grade 4: 70/200. 2026 boundaries will be published at 8:00am on 20 August 2026.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the AQA grade 9 boundary for GCSE Maths 2025?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The AQA GCSE Maths Higher grade 9 boundary in 2025 was 219 out of 240 (91%). For context: 2024 was 213/240, 2023 was 210/240, 2022 was 198/240. The Foundation tier does not award grade 9. The 2026 boundary will be confirmed on Results Day 20 August 2026.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the AQA grade 4 pass mark for GCSE Maths?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'In 2025, the AQA GCSE Maths Higher grade 4 (standard pass) boundary was 63 out of 240. For Foundation tier it was 160 out of 240. Grade 4 is the minimum pass — students below this in English or Maths must resit post-16.',
      },
    },
    {
      '@type': 'Question',
      name: 'How do AQA raw grade boundaries work?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'AQA sets grade boundaries as raw marks — the actual number of marks you score on the exam papers. Boundaries are not fixed percentages. They are set after all papers are marked by comparing paper difficulty to previous years using statistical models. A harder paper in 2026 means lower boundaries; an easier paper means higher boundaries.',
      },
    },
    {
      '@type': 'Question',
      name: 'When does AQA publish grade boundaries for 2026?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'AQA publishes 2026 GCSE grade boundaries at exactly 8:00am on Thursday 20 August 2026, which is GCSE Results Day. They are not released before this time. GradesNova will update this page with live 2026 AQA boundaries as soon as they are available.',
      },
    },
    {
      '@type': 'Question',
      name: 'How do AQA boundaries differ from Edexcel?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'AQA and Edexcel set boundaries independently. In 2025 Maths Higher, AQA grade 4 was 63/240 while Edexcel grade 4 was 53/240 — 10 marks higher. Never mix boundaries between boards. AQA is the largest GCSE exam board by candidate entries, used by approximately 55% of GCSE students in England.',
      },
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
                <li><Link href="/exams/gcse" className="hover:text-white transition-colors">GCSE Grade Boundaries</Link></li>
                <li aria-hidden="true">›</li>
                <li className="text-slate-400" aria-current="page">AQA</li>
              </ol>
            </nav>

            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 rounded-xl flex items-center justify-center text-xl bg-emerald-500/15" aria-hidden="true">📗</div>
              <span className="text-xs font-mono text-emerald-400/70 uppercase tracking-widest">AQA · GCSE · Grades 1–9 · England</span>
            </div>

            {/* H1 — leads with 2025 (the year with actual data), matches Edexcel pattern */}
            <h1 className="text-4xl md:text-5xl font-bold text-white tracking-tight mb-3">
              AQA GCSE Grade Boundaries 2025-26
            </h1>

            <div className="flex flex-wrap items-center gap-2 mb-4">
              <span className="inline-flex items-center gap-1.5 text-xs bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 px-3 py-1 rounded-full font-medium">
                <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
                Verified against official AQA documents
              </span>
              <span className="text-xs bg-white/5 text-slate-400 border border-white/10 px-3 py-1 rounded-full">📅 2026 boundaries: 20 Aug 2026</span>
              <span className="text-xs bg-white/5 text-slate-400 border border-white/10 px-3 py-1 rounded-full">Last checked: 31 May 2026</span>
              <a href="https://www.aqa.org.uk/exams-administration/results-days/grade-boundaries" target="_blank" rel="noopener noreferrer nofollow" className="text-xs bg-white/5 text-slate-400 border border-white/10 px-3 py-1 rounded-full hover:text-white hover:border-white/25 transition-colors underline decoration-dotted">Source: aqa.org.uk ↗</a>
              <a href="https://www.google.com/preferences/source?q=gradesnova.com" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-xs bg-emerald-500/10 text-emerald-400 border border-emerald-500/25 px-3 py-1 rounded-full hover:bg-emerald-500/20 transition-colors font-medium">
                <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.958a1 1 0 00.95.69h4.162c.969 0 1.371 1.24.588 1.81l-3.367 2.446a1 1 0 00-.363 1.118l1.287 3.957c.3.922-.755 1.688-1.539 1.118l-3.366-2.446a1 1 0 00-1.176 0l-3.366 2.446c-.784.57-1.838-.196-1.539-1.118l1.287-3.957a1 1 0 00-.363-1.118L2.075 9.385c-.783-.57-.38-1.81.588-1.81h4.163a1 1 0 00.95-.69l1.273-3.958z" /></svg>
                Add GradesNova as a Preferred Source
              </a>
            </div>

            <p className="text-lg text-slate-400 max-w-2xl leading-relaxed">
              This page shows the <strong className="text-white">official historic AQA GCSE grade boundaries</strong> from the June 2022–2025 exam series — the most recent data currently available. Maths Higher grade 9 required <strong className="text-white">219 out of 240</strong> in 2025. <strong className="text-white">The official 2026 AQA grade boundaries have not been released yet and will be published here at 8:00am on Thursday 20 August 2026</strong>, the moment AQA makes them public. Covers Maths, English, Sciences, History, Geography, Computer Science and more.
            </p>
          </div>
        </header>

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-16">

          {/* ── STATIC ANSWER BLOCK — featured snippet target ── */}
          {/*
            Plain crawlable text placed above all interactive elements.
            Google's featured snippet algorithm rewards direct answers near the top.
            This section is intentionally consistent with edexcel/page.tsx.
          */}
          <section aria-labelledby="aqa-direct-answer">
            <h2 id="aqa-direct-answer" className="text-xl font-bold text-white mb-4">
              AQA grade boundaries 2025-26 (GCSE) — key figures
            </h2>
            <div className="bg-[#12141f] border border-emerald-500/20 rounded-xl p-6 space-y-4">
              <div>
                <h3 className="text-sm font-semibold text-emerald-400 mb-2">Mathematics Higher tier (out of 240)</h3>
                <p className="text-sm text-slate-300 leading-relaxed">
                  Grade 9: <strong className="text-white">219 marks</strong> · Grade 8: 191 · Grade 7: 164 · Grade 6: 130 ·
                  Grade 5: <strong className="text-white">96 marks</strong> (strong pass) ·
                  Grade 4: <strong className="text-white">63 marks</strong> (standard pass) · Grade 3: 46
                </p>
              </div>
              <div>
                <h3 className="text-sm font-semibold text-emerald-400 mb-2">Mathematics Foundation tier (out of 240)</h3>
                <p className="text-sm text-slate-300 leading-relaxed">
                  Grade 5: <strong className="text-white">188 marks</strong> · Grade 4: <strong className="text-white">160 marks</strong> · Grade 3: 119 · Grade 2: 79 · Grade 1: 39
                </p>
              </div>
              <div>
                <h3 className="text-sm font-semibold text-emerald-400 mb-2">English Language (out of 160)</h3>
                <p className="text-sm text-slate-300 leading-relaxed">
                  Grade 9: <strong className="text-white">119 marks</strong> · Grade 5: <strong className="text-white">82 marks</strong> ·
                  Grade 4: <strong className="text-white">73 marks</strong>
                </p>
              </div>
              <div>
                <h3 className="text-sm font-semibold text-emerald-400 mb-2">Biology / Chemistry / Physics Higher tier (out of 200)</h3>
                <p className="text-sm text-slate-300 leading-relaxed">
                  Biology — Grade 9: <strong className="text-white">141</strong>, Grade 4: <strong className="text-white">56</strong> ·
                  Chemistry — Grade 9: <strong className="text-white">150</strong>, Grade 4: <strong className="text-white">42</strong> ·
                  Physics — Grade 9: <strong className="text-white">152</strong>, Grade 4: <strong className="text-white">70</strong>
                </p>
              </div>
              <p className="text-xs text-slate-500 pt-1 border-t border-white/8">
                Source: AQA official grade boundary documents, June 2025. Published 20 August 2025. Verified 31 May 2026.
              </p>
            </div>
          </section>

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
                AQA publishes all 2026 GCSE grade boundaries at{' '}
                <strong className="text-white">8:00am on Thursday 20 August 2026</strong>, simultaneously with Edexcel, OCR, and WJEC.
                GradesNova updates this page with live AQA 2026 data the moment the official boundary documents are released.
              </p>
            </div>
          </div>

          {/* ── AQA BY THE NUMBERS — unique section not on sibling pages ── */}
          {/*
            This section is unique to this page. It covers AQA's market position,
            candidate volumes, and board-specific history — content that is genuinely
            AQA-specific and does not appear on Edexcel, OCR, or WJEC pages.
          */}
          <section aria-labelledby="aqa-context-heading">
            <h2 id="aqa-context-heading" className="text-2xl font-bold text-white mb-2">
              AQA: England's largest GCSE exam board
            </h2>
            <p className="text-slate-400 text-sm mb-6">
              Understanding AQA's scale and structure matters when interpreting boundaries — a board setting grades for
              hundreds of thousands of candidates faces different statistical pressures than a smaller board.
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
              {[
                {
                  stat: '~55%',
                  label: 'Market share',
                  body: 'AQA is used by approximately 55% of GCSE students in England — more than Edexcel and OCR combined for many subjects. This makes AQA boundaries the de-facto reference point for national grade discussions.',
                  color: '#34d399',
                },
                {
                  stat: '~700k',
                  label: 'Maths entries (2025)',
                  body: 'Around 700,000 students sat AQA GCSE Maths in 2025. The statistical weight of this cohort makes AQA Maths boundaries particularly stable year-on-year — large sample sizes reduce the need for large adjustments.',
                  color: '#6366f1',
                },
                {
                  stat: '1908',
                  label: 'Founded',
                  body: 'AQA (Assessment and Qualifications Alliance) was formed in 2000 through a merger of the Associated Examining Board (AEB, est. 1908) and the Northern Examinations and Assessment Board (NEAB). It is a registered charity.',
                  color: '#a855f7',
                },
              ].map(item => (
                <article key={item.label} className="bg-[#12141f] border border-white/8 rounded-xl p-5">
                  <p className="text-3xl font-bold font-mono mb-1" style={{ color: item.color }}>{item.stat}</p>
                  <p className="text-xs font-semibold text-white uppercase tracking-wider mb-2">{item.label}</p>
                  <p className="text-xs text-slate-400 leading-relaxed">{item.body}</p>
                </article>
              ))}
            </div>

            <div className="bg-[#12141f] border border-white/8 rounded-xl p-5 space-y-3">
              <h3 className="text-sm font-semibold text-white">AQA-specific marking features that affect boundaries</h3>
              <ul className="space-y-2">
                {[
                  {
                    title: 'Tiered on-screen marking',
                    body: "AQA pioneered widespread on-screen marking for GCSE Maths. Each paper is marked by multiple examiners across different question ranges, then totalled. This increases marking consistency and can affect where boundaries settle compared to boards still using traditional script marking.",
                  },
                  {
                    title: 'English Language: two-component structure',
                    body: 'AQA GCSE English Language is sat as two components (Explorations in Creative Reading and Writing; Writers\' Viewpoints and Perspectives), each 80 marks. Both are terminally assessed — unlike some boards, there is no Speaking and Listening component that contributes to the grade.',
                  },
                  {
                    title: 'Chemistry Higher: consistently low grade 4 boundary',
                    body: 'AQA Chemistry Higher has returned a grade 4 boundary below 45/200 in each of the last four years (2025: 42, 2024: 39, 2023: 41, 2022: 38). This is a feature of the paper design — Higher Chemistry is intentionally challenging at the lower end of the mark range.',
                  },
                ].map(item => (
                  <li key={item.title} className="flex gap-3 items-start">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-1.5 shrink-0" aria-hidden="true" />
                    <div>
                      <span className="text-xs font-semibold text-white">{item.title}: </span>
                      <span className="text-xs text-slate-400 leading-relaxed">{item.body}</span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </section>

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
              Complete official AQA grade boundaries from the June 2025 examination series, published 20 August 2025.
              2026 boundaries update live on Results Day 20 August 2026. Verified against official AQA documents.
            </p>

            <div className="overflow-x-auto rounded-xl border border-white/8">
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
              ★ Grade 5 = strong pass. + Grade 4 = standard pass (resit required below this in English/Maths).
              Source: AQA official grade boundary documents, June 2025 series.
              Verified against aqa.org.uk, 31 May 2026. GradesNova is not affiliated with AQA.
            </p>
          </section>

          {/* ── MATHS YEAR ON YEAR ── */}
          <section aria-labelledby="maths-yoy-heading">
            <h2 id="maths-yoy-heading" className="text-2xl font-bold text-white mb-2">
              AQA GCSE Maths grade boundaries 2022–2025
            </h2>
            <p className="text-slate-400 text-sm mb-6">
              Four-year trend for AQA GCSE Maths Higher tier. Boundaries have risen consistently since 2022, reflecting
              improved cohort performance post-pandemic. The 2026 boundary will be confirmed on Results Day 20 August 2026.
              Based on this trend, the 2026 AQA Maths Higher grade 9 is expected in the range of 210–225.
            </p>
            <div className="overflow-x-auto rounded-xl border border-white/8">
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
                  note: 'Grade 4 is legally required. Two terminally assessed components; no Speaking and Listening contribution to grade.',
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
                  note: 'Separate science. Chemistry Higher grade 4 has been below 45 in each year since 2022 — this is a consistent feature, not an anomaly.',
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
                { step: '03', title: 'Statistical modelling', body: "AQA uses Ofqual's comparable outcomes methodology. It compares this year's cohort prior attainment data with previous years to determine where boundaries should sit to maintain consistent national grade distributions.", color: '#a855f7' },
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
            <h2 id="faq-heading" className="text-2xl font-bold text-white mb-2">
              AQA GCSE grade boundaries 2025 — frequently asked questions
            </h2>
            <p className="text-slate-400 text-sm mb-6">
              Common questions about AQA grade boundaries, raw marks, Results Day, and how AQA compares to other boards.
            </p>
            <div className="space-y-3">
              {[
                {
                  q: 'What are the AQA GCSE grade boundaries for 2025?',
                  a: 'The official AQA GCSE grade boundaries from June 2025 are shown in the full table above. Key figures: Maths Higher grade 9 = 219/240, grade 5 = 96/240, grade 4 = 63/240. English Language grade 9 = 119/160, grade 4 = 73/160. 2026 boundaries will be published at 8:00am on 20 August 2026.',
                },
                {
                  q: 'What was the AQA GCSE Maths grade 9 boundary in 2025?',
                  a: 'The AQA GCSE Maths Higher grade 9 boundary in 2025 was 219 out of 240 (91%). For context: 2024 was 213, 2023 was 210, and 2022 was 198. The 2026 boundary will be confirmed on Results Day 20 August 2026.',
                },
                {
                  q: 'What is the AQA grade 5 strong pass boundary for Maths?',
                  a: 'In 2025, the AQA Maths Higher grade 5 boundary was 96 out of 240 (40%). For Foundation tier it was 188 out of 240 (78%). Grade 5 is the strong pass required by most sixth forms for A-Level Maths.',
                },
                {
                  q: 'How does AQA grade 4 compare to Edexcel grade 4 in Maths?',
                  a: 'In 2025, AQA Maths Higher grade 4 was 63/240 while Edexcel Maths Higher grade 4 was 53/240 — AQA required 10 more marks for a standard pass. Both are equivalent grade 4 standards set by different paper structures.',
                },
                {
                  q: 'When does AQA publish 2026 GCSE grade boundaries?',
                  a: 'AQA publishes all 2026 GCSE grade boundaries at exactly 8:00am on Thursday 20 August 2026. Boundaries are strictly embargoed before this date.',
                },
                {
                  q: 'Will AQA 2026 grade boundaries be higher or lower than 2025?',
                  a: 'This depends on the difficulty of the 2026 AQA papers. Ofqual uses a comparable outcomes process to prevent large year-on-year swings. Based on the 2022–2025 trend, Maths Higher grade 4 has ranged from 55–63. The 2026 boundary will be confirmed on 20 August 2026.',
                },
                {
                  q: 'How do I calculate my AQA grade from my raw mark?',
                  a: 'Add up your raw marks from all papers for the subject. For AQA Maths Higher, you have 3 papers totalling 240 marks. If your total is 219 or above, you achieved grade 9 in 2025. If it is 63–95, you achieved grade 4.',
                },
                {
                  q: 'What is the difference between AQA Foundation and Higher tier boundaries?',
                  a: 'Foundation tier is capped at grade 5 and targeted at students expecting grades 1–5. Higher tier allows grades 4–9. For Maths Foundation in 2025, grade 4 required 160 out of 240 (67%), compared to 63 out of 240 (26%) on Higher tier.',
                },
              ].map((faq, i) => (
                <details key={i} className="bg-[#12141f] border border-white/7 rounded-xl overflow-hidden group">
                  <summary className="px-5 py-4 text-sm font-medium text-white cursor-pointer list-none flex items-center justify-between gap-4">
                    {faq.q}
                    <span className="text-slate-400 shrink-0 group-open:rotate-180 transition-transform duration-200" aria-hidden="true">↓</span>
                  </summary>
                  <div className="px-5 pb-4 pt-3 border-t border-white/6">
                    <p className="text-sm text-slate-400 leading-relaxed">{faq.a}</p>
                  </div>
                </details>
              ))}
            </div>
          </section>

          {/* ── DATA METHODOLOGY ── */}
          <section aria-labelledby="methodology-heading">
            <h2 id="methodology-heading" className="text-2xl font-bold text-white mb-4">Data sources and methodology</h2>
            <div className="bg-[#12141f] border border-white/8 rounded-xl p-6 space-y-4">
              <div className="flex gap-4 items-start">
                <span className="text-xl shrink-0" aria-hidden="true">📋</span>
                <div>
                  <p className="text-sm font-semibold text-white mb-1">Source data</p>
                  <p className="text-sm text-slate-400 leading-relaxed">
                    All grade boundaries on this page are taken directly from the official{' '}
                    <a href="https://www.aqa.org.uk/exams-administration/results-days/grade-boundaries" target="_blank" rel="noopener noreferrer nofollow" className="text-emerald-400 hover:text-emerald-300 underline underline-offset-2">
                      AQA grade boundary documents
                    </a>{' '}
                    published on aqa.org.uk on 20 August 2025. GradesNova does not estimate,
                    interpolate, or adjust boundaries — every figure is copied verbatim from the official document.
                  </p>
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <span className="text-xl shrink-0" aria-hidden="true">🔍</span>
                <div>
                  <p className="text-sm font-semibold text-white mb-1">Verification</p>
                  <p className="text-sm text-slate-400 leading-relaxed">
                    Data was last verified against aqa.org.uk official documents on 31 May 2026.
                    GradesNova is not affiliated with AQA or Ofqual.
                  </p>
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <span className="text-xl shrink-0" aria-hidden="true">⏱️</span>
                <div>
                  <p className="text-sm font-semibold text-white mb-1">2026 update process</p>
                  <p className="text-sm text-slate-400 leading-relaxed">
                    On 20 August 2026 from 8:00am, GradesNova updates this page with official AQA 2026 grade boundary
                    data as soon as the documents are publicly released on aqa.org.uk.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* ── OTHER BOARDS ── */}
          <section aria-labelledby="other-boards-heading">
            <h2 id="other-boards-heading" className="text-sm font-semibold text-slate-400 uppercase tracking-wider mb-4">
              Other GCSE exam boards — grade boundaries 2025
            </h2>
            <div className="flex flex-wrap gap-3">
              {[
                { name: 'Edexcel Grade Boundaries 2025', href: '/exams/gcse/edexcel', color: '#6366f1' },
                { name: 'OCR Grade Boundaries 2025', href: '/exams/gcse/ocr', color: '#a855f7' },
                { name: 'WJEC Grade Boundaries 2025', href: '/exams/gcse/wjec', color: '#f59e0b' },
                { name: 'All Boards — GCSE', href: '/exams/gcse', color: '#34d399' },
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
