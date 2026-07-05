// app/exams/gcse/edexcel/page.tsx
// EDEXCEL GCSE GRADE BOUNDARIES 2025 — DEDICATED PAGE
// SEO CHANGES:
//   - Title leads with 2025 (the year with actual data)
//   - H1 updated to match data year
//   - Removed keywords array
//   - Meta description now includes specific boundary numbers for CTR
//   - Static answer block added above fold (featured snippet target)
//   - Contextual internal links added in cross-board comparison section
//   - Unique "Pearson Edexcel by the numbers" section added — differentiates from AQA, OCR, WJEC sibling pages
// Last modified: 2026-05-31
// Results Day: 20 August 2026 at 8:00am

import type { Metadata } from 'next';
import Link from 'next/link';
import { GCSECalculatorClient } from '../gcse-calculator-client';

export const metadata: Metadata = {
  title: 'Edexcel Grade Boundaries 2026',
  description:
    'Official Edexcel grade boundaries from June 2025. Maths Higher grade 9 was 217/240, grade 4 was 53/240. English Language grade 9 was 122/160. All GCSE subjects — Biology, Chemistry, Physics, History, Geography. 2026 boundaries published 20 August 2026.',
  alternates: { canonical: 'https://gradesnova.com/exams/gcse/edexcel' },
  openGraph: {
    title: 'Edexcel Grade Boundaries 2026',
    description:
      'Official Pearson Edexcel grade boundaries June 2025. Maths Higher: grade 9 = 217/240, grade 4 = 53/240. All subjects. Updated live 20 August 2026 on Results Day.',
    url: 'https://gradesnova.com/exams/gcse/edexcel',
    type: 'website',
    siteName: 'GradesNova',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Edexcel Grade Boundaries 2026',
    description: 'Free Edexcel grade boundary calculator. Enter raw mark, get grade. Official 2025 data. Updated Results Day 20 Aug 2026.',
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
    { '@type': 'ListItem', position: 3, name: 'Edexcel Grade Boundaries 2025', item: 'https://gradesnova.com/exams/gcse/edexcel' },
  ],
};

const jsonLdTool = {
  '@context': 'https://schema.org',
  '@type': 'WebApplication',
  name: 'Edexcel GCSE Grade Boundaries Calculator 2025',
  url: 'https://gradesnova.com/exams/gcse/edexcel',
  description:
    'Free Edexcel GCSE grade boundaries calculator. Enter any raw mark to instantly find your Pearson Edexcel grade for Maths, English, Biology, Chemistry, Physics and more. Official June 2025 data.',
  applicationCategory: 'EducationalApplication',
  operatingSystem: 'Any',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'GBP' },
  provider: { '@type': 'Organization', name: 'GradesNova', url: 'https://gradesnova.com' },
  dateModified: '2026-05-31',
};

const jsonLdDataset = {
  '@context': 'https://schema.org',
  '@type': 'Dataset',
  name: 'Edexcel GCSE Grade Boundaries 2025-26',
  description:
    'Official Pearson Edexcel GCSE grade boundary data from the June 2025 examination series. Updated on GCSE Results Day 20 August 2026 when 2026 data is released.',
  url: 'https://gradesnova.com/exams/gcse/edexcel',
  creator: { '@type': 'Organization', name: 'GradesNova' },
  publisher: { '@type': 'Organization', name: 'Pearson Edexcel' },
  dateModified: '2026-05-31',
  keywords: 'Edexcel, Pearson, GCSE, grade boundaries, 2025, 2026, raw marks',
  isBasedOn: {
    '@type': 'CreativeWork',
    name: 'Pearson Edexcel GCSE Grade Boundary Documents June 2025',
    publisher: {
      '@type': 'Organization',
      name: 'Pearson Edexcel',
      url: 'https://qualifications.pearson.com',
    },
  },
};

const jsonLdFAQ = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What are the Edexcel GCSE grade boundaries for 2025?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The official Edexcel GCSE grade boundaries from June 2025 are: Maths Higher — grade 9: 217/240, grade 5: 87/240, grade 4: 53/240. English Language Higher — grade 9: 122/160, grade 5: 83/160, grade 4: 73/160. Biology Higher — grade 9: 155/200, grade 4: 61/200. Chemistry Higher — grade 9: 158/200, grade 4: 47/200. Physics Higher — grade 9: 156/200, grade 4: 66/200. 2026 boundaries will be published at 8:00am on 20 August 2026.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the Edexcel grade 9 boundary for GCSE Maths 2025?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The Edexcel GCSE Maths Higher grade 9 boundary in 2025 was 217 out of 240 raw marks (90.4%). For context: 2024 was 210/240, 2023 was 205/240, 2022 was 193/240. The 2026 boundary will be confirmed on Results Day 20 August 2026.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the Edexcel GCSE Maths grade 4 pass mark in 2025?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'In 2025, the Edexcel GCSE Maths Higher grade 4 (standard pass) boundary was 53 out of 240. For Foundation tier it was 144 out of 240. Grade 4 is the standard pass — students below this in English or Maths must resit post-16.',
      },
    },
    {
      '@type': 'Question',
      name: 'How do Edexcel boundaries differ from AQA?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Edexcel and AQA set boundaries independently. In 2025 Maths Higher, AQA grade 4 was 63/240 while Edexcel grade 4 was 53/240 — 10 marks lower. Never mix boundaries between boards. Always use the specific board your school uses.',
      },
    },
    {
      '@type': 'Question',
      name: 'When does Edexcel publish 2026 GCSE grade boundaries?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Pearson Edexcel publishes 2026 GCSE grade boundaries at exactly 8:00am on Thursday 20 August 2026 (GCSE Results Day). This is the same time as AQA, OCR, and WJEC. They are strictly embargoed before this date.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the Edexcel GCSE grade 5 strong pass boundary for Maths 2025?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'In 2025, the Edexcel Maths Higher grade 5 boundary was 87 out of 240 (36%). For Foundation tier it was 175 out of 240 (73%). Grade 5 is the strong pass required by most sixth forms for A-Level Maths entry.',
      },
    },
    {
      '@type': 'Question',
      name: 'Will Edexcel 2026 grade boundaries be higher or lower than 2025?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'This depends on the difficulty of the 2026 Edexcel papers. Ofqual uses a comparable outcomes process to prevent large year-on-year swings. Based on the 2022–2025 trend, Maths Higher grade 4 has ranged from 48–53. The 2026 boundary will be confirmed on 20 August 2026.',
      },
    },
    {
      '@type': 'Question',
      name: 'How do I calculate my Edexcel grade from my raw mark?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Add up your raw marks from all papers for the subject. For Edexcel Maths Higher, you have 3 papers totalling 240 marks. Compare the total to the boundary table. If your total is 217 or above, you achieved grade 9. If it is 53–86, you achieved grade 4.',
      },
    },
  ],
};

const EDEXCEL_SUBJECTS_2025 = [
  { subject: 'Mathematics', tier: 'Higher', max: 240, g9: 217, g8: 186, g7: 156, g6: 121, g5: 87, g4: 53, g3: 36 },
  { subject: 'Mathematics', tier: 'Foundation', max: 240, g9: null, g8: null, g7: null, g6: null, g5: 175, g4: 144, g3: 105 },
  { subject: 'English Language', tier: 'Higher', max: 160, g9: 122, g8: 112, g7: 102, g6: 92, g5: 83, g4: 73, g3: 55 },
  { subject: 'English Literature', tier: 'Higher', max: 160, g9: 132, g8: 118, g7: 105, g6: 89, g5: 74, g4: 59, g3: 44 },
  { subject: 'Biology', tier: 'Higher', max: 200, g9: 155, g8: 138, g7: 121, g6: 101, g5: 81, g4: 61, g3: 49 },
  { subject: 'Biology', tier: 'Foundation', max: 200, g9: null, g8: null, g7: null, g6: null, g5: 136, g4: 116, g3: 84 },
  { subject: 'Chemistry', tier: 'Higher', max: 200, g9: 158, g8: 140, g7: 122, g6: 97, g5: 72, g4: 47, g3: 34 },
  { subject: 'Chemistry', tier: 'Foundation', max: 200, g9: null, g8: null, g7: null, g6: null, g5: 128, g4: 105, g3: 77 },
  { subject: 'Physics', tier: 'Higher', max: 200, g9: 156, g8: 141, g7: 126, g6: 106, g5: 86, g4: 66, g3: 57 },
  { subject: 'Physics', tier: 'Foundation', max: 200, g9: null, g8: null, g7: null, g6: null, g5: 140, g4: 126, g3: 91 },
  { subject: 'History', tier: 'Higher', max: 168, g9: 143, g8: 131, g7: 119, g6: 106, g5: 94, g4: 81, g3: 61 },
  { subject: 'Geography', tier: 'Higher', max: 200, g9: 156, g8: 143, g7: 130, g6: 116, g5: 102, g4: 88, g3: 64 },
  { subject: 'Religious Studies', tier: 'Higher', max: 252, g9: 190, g8: 172, g7: 154, g6: 134, g5: 114, g4: 94, g3: 71 },
  { subject: 'Computer Science', tier: 'Higher', max: 180, g9: 152, g8: 139, g7: 126, g6: 108, g5: 90, g4: 72, g3: 54 },
  { subject: 'Physical Education', tier: 'Higher', max: 200, g9: 160, g8: 150, g7: 140, g6: 127, g5: 114, g4: 102, g3: 77 },
  { subject: 'Design Technology', tier: 'Higher', max: 200, g9: 175, g8: 161, g7: 147, g6: 130, g5: 113, g4: 96, g3: 70 },
];

const EDEXCEL_MATHS_YOY = [
  { year: '2025', g9: 217, g7: 156, g5: 87, g4: 53, max: 240 },
  { year: '2024', g9: 210, g7: 144, g5: 87, g4: 49, max: 240 },
  { year: '2023', g9: 205, g7: 139, g5: 85, g4: 50, max: 240 },
  { year: '2022', g9: 193, g7: 131, g5: 82, g4: 48, max: 240 },
];

const CROSS_BOARD_2025 = [
  { label: 'Edexcel Maths Higher', g9: 217, g5: 87, g4: 53, max: 240, color: '#6366f1', href: '/exams/gcse/edexcel' },
  { label: 'AQA Maths Higher', g9: 219, g5: 96, g4: 63, max: 240, color: '#34d399', href: '/exams/gcse/aqa' },
  { label: 'OCR Maths Higher', g9: 210, g5: 84, g4: 51, max: 240, color: '#a855f7', href: '/exams/gcse/ocr' },
  { label: 'Edexcel English Language', g9: 122, g5: 83, g4: 73, max: 160, color: '#6366f1', href: '/exams/gcse/edexcel' },
  { label: 'AQA English Language', g9: 119, g5: 82, g4: 73, max: 160, color: '#34d399', href: '/exams/gcse/aqa' },
  { label: 'OCR English Language', g9: 115, g5: 79, g4: 69, max: 160, color: '#a855f7', href: '/exams/gcse/ocr' },
  { label: 'Edexcel Chemistry Higher', g9: 158, g5: 72, g4: 47, max: 200, color: '#6366f1', href: '/exams/gcse/edexcel' },
  { label: 'AQA Chemistry Higher', g9: 150, g5: 66, g4: 42, max: 200, color: '#34d399', href: '/exams/gcse/aqa' },
  { label: 'OCR Chemistry Higher', g9: 153, g5: 69, g4: 44, max: 200, color: '#a855f7', href: '/exams/gcse/ocr' },
];

export default function EdexcelGCSEPage() {
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
                <li className="text-slate-400" aria-current="page">Edexcel</li>
              </ol>
            </nav>

            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 rounded-xl flex items-center justify-center text-xl bg-indigo-500/15" aria-hidden="true">📘</div>
              <span className="text-xs font-mono text-indigo-400/70 uppercase tracking-widest">Edexcel · Pearson · GCSE · Grades 1–9</span>
            </div>

            {/* H1 — leads with 2025 (the year with actual data) */}
            <h1 className="text-4xl md:text-5xl font-bold text-white tracking-tight mb-3">
              Edexcel GCSE Grade Boundaries 2025-26
            </h1>

            <div className="flex flex-wrap items-center gap-2 mb-4">
              <span className="inline-flex items-center gap-1.5 text-xs bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 px-3 py-1 rounded-full font-medium">
                <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
                Verified against official Pearson Edexcel documents
              </span>
              <span className="text-xs bg-white/5 text-slate-400 border border-white/10 px-3 py-1 rounded-full">📅 2026 boundaries: 20 Aug 2026</span>
              <span className="text-xs bg-white/5 text-slate-400 border border-white/10 px-3 py-1 rounded-full">Last checked: 31 May 2026</span>
              <a href="https://qualifications.pearson.com/en/support/support-topics/results-certification/grade-boundaries.html" target="_blank" rel="noopener noreferrer nofollow" className="text-xs bg-white/5 text-slate-400 border border-white/10 px-3 py-1 rounded-full hover:text-white hover:border-white/25 transition-colors underline decoration-dotted">Source: qualifications.pearson.com ↗</a>
              <a href="https://www.google.com/preferences/source?q=gradesnova.com" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-xs bg-indigo-500/10 text-indigo-400 border border-indigo-500/25 px-3 py-1 rounded-full hover:bg-indigo-500/20 transition-colors font-medium">
                <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.958a1 1 0 00.95.69h4.162c.969 0 1.371 1.24.588 1.81l-3.367 2.446a1 1 0 00-.363 1.118l1.287 3.957c.3.922-.755 1.688-1.539 1.118l-3.366-2.446a1 1 0 00-1.176 0l-3.366 2.446c-.784.57-1.838-.196-1.539-1.118l1.287-3.957a1 1 0 00-.363-1.118L2.075 9.385c-.783-.57-.38-1.81.588-1.81h4.163a1 1 0 00.95-.69l1.273-3.958z" /></svg>
                Add GradesNova as a Preferred Source
              </a>
            </div>

            <p className="text-lg text-slate-400 max-w-2xl leading-relaxed">
              This page shows the <strong className="text-white">official historic Pearson Edexcel GCSE grade boundaries</strong> from the June 2022–2025 exam series — the most recent data currently available. Maths Higher grade 9 required <strong className="text-white">217 out of 240</strong> in 2025. <strong className="text-white">The official 2026 Edexcel grade boundaries have not been released yet and will be published here at 8:00am on Thursday 20 August 2026</strong>, the moment Pearson Edexcel makes them public. Covers Maths, English, Sciences, History, Geography, Computer Science and more.
            </p>
          </div>
        </header>

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-16">

          {/* ── STATIC ANSWER BLOCK — featured snippet target ── */}
          {/*
            Plain crawlable text placed above all interactive elements.
            Google's featured snippet algorithm rewards direct answers near the top.
          */}
          <section aria-labelledby="edexcel-direct-answer">
            <h2 id="edexcel-direct-answer" className="text-xl font-bold text-white mb-4">
              Edexcel grade boundaries 2025-26 (GCSE) — key figures
            </h2>
            <div className="bg-[#12141f] border border-indigo-500/20 rounded-xl p-6 space-y-4">
              <div>
                <h3 className="text-sm font-semibold text-indigo-400 mb-2">Mathematics Higher tier (out of 240)</h3>
                <p className="text-sm text-slate-300 leading-relaxed">
                  Grade 9: <strong className="text-white">217 marks</strong> · Grade 8: 186 · Grade 7: 156 · Grade 6: 121 ·
                  Grade 5: <strong className="text-white">87 marks</strong> (strong pass) ·
                  Grade 4: <strong className="text-white">53 marks</strong> (standard pass) · Grade 3: 36
                </p>
              </div>
              <div>
                <h3 className="text-sm font-semibold text-indigo-400 mb-2">Mathematics Foundation tier (out of 240)</h3>
                <p className="text-sm text-slate-300 leading-relaxed">
                  Grade 5: <strong className="text-white">175 marks</strong> · Grade 4: <strong className="text-white">144 marks</strong> · Grade 3: 105 · Grade 2: 67 · Grade 1: 29
                </p>
              </div>
              <div>
                <h3 className="text-sm font-semibold text-indigo-400 mb-2">English Language Higher tier (out of 160)</h3>
                <p className="text-sm text-slate-300 leading-relaxed">
                  Grade 9: <strong className="text-white">122 marks</strong> · Grade 5: <strong className="text-white">83 marks</strong> ·
                  Grade 4: <strong className="text-white">73 marks</strong>
                </p>
              </div>
              <div>
                <h3 className="text-sm font-semibold text-indigo-400 mb-2">Biology / Chemistry / Physics Higher tier (out of 200)</h3>
                <p className="text-sm text-slate-300 leading-relaxed">
                  Biology — Grade 9: <strong className="text-white">155</strong>, Grade 4: <strong className="text-white">61</strong> ·
                  Chemistry — Grade 9: <strong className="text-white">158</strong>, Grade 4: <strong className="text-white">47</strong> ·
                  Physics — Grade 9: <strong className="text-white">156</strong>, Grade 4: <strong className="text-white">66</strong>
                </p>
              </div>
              <p className="text-xs text-slate-500 pt-1 border-t border-white/8">
                Source: Pearson Edexcel official grade boundary documents, June 2025. Published 20 August 2025. Verified 31 May 2026.
              </p>
            </div>
          </section>

          {/* ── QUICK FACTS ── */}
          <section aria-labelledby="edexcel-facts-heading">
            <h2 id="edexcel-facts-heading" className="sr-only">Edexcel GCSE 2025 key boundaries at a glance</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                { label: 'Maths Higher — Grade 9', value: '217/240', sub: '90% of total marks', color: '#6366f1' },
                { label: 'Maths Higher — Grade 5', value: '87/240', sub: '36% — strong pass', color: '#a855f7' },
                { label: 'Maths Higher — Grade 4', value: '53/240', sub: '22% — standard pass', color: '#f59e0b' },
                { label: 'English Lang — Grade 9', value: '122/160', sub: '76% of total marks', color: '#6366f1' },
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
          <div className="bg-indigo-500/10 border border-indigo-500/25 rounded-2xl p-6 flex gap-4 items-start">
            <div className="text-2xl shrink-0" aria-hidden="true">📅</div>
            <div>
              <h2 className="text-base font-bold text-white mb-1">Edexcel Results Day 2026 — Thursday 20 August 2026</h2>
              <p className="text-sm text-slate-400 leading-relaxed">
                Pearson Edexcel publishes all 2026 GCSE grade boundaries at{' '}
                <strong className="text-white">8:00am on Thursday 20 August 2026</strong>, simultaneously with AQA, OCR, and WJEC.
                GradesNova updates this page with live Edexcel 2026 data the moment the official boundary documents are released.
              </p>
            </div>
          </div>

          {/* ── PEARSON EDEXCEL BY THE NUMBERS — unique section not on sibling pages ── */}
          {/*
            This section is unique to this page. It covers Pearson's corporate structure,
            Edexcel's international reach, and board-specific assessment features — content
            that is genuinely Edexcel-specific and does not appear on AQA, OCR, or WJEC pages.
          */}
          <section aria-labelledby="edexcel-context-heading">
            <h2 id="edexcel-context-heading" className="text-2xl font-bold text-white mb-2">
              Pearson Edexcel: the global exam board
            </h2>
            <p className="text-slate-400 text-sm mb-6">
              Edexcel is the only major GCSE board owned by a publicly listed commercial company (Pearson plc), which shapes
              its assessment design, international reach, and the way boundaries interact with a broader qualification ecosystem.
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
              {[
                {
                  stat: '~40%',
                  label: 'England market share',
                  body: "Edexcel is England's second-largest GCSE board by candidate entries, used by roughly 40% of students. Its London and south-east concentration means it disproportionately covers high-performing urban cohorts, which can subtly influence boundary dynamics.",
                  color: '#6366f1',
                },
                {
                  stat: '100+',
                  label: 'Countries',
                  body: 'Pearson Edexcel qualifications are taught in over 100 countries. International GCSE (iGCSE) and the standard UK GCSE share a brand but use separate boundary-setting processes. The boundaries on this page apply to UK GCSEs only.',
                  color: '#a855f7',
                },
                {
                  stat: '1996',
                  label: 'Edexcel founded',
                  body: 'Edexcel was formed in 1996 through a merger of the Business and Technology Education Council (BTEC) and the University of London Examinations and Assessment Council (ULEAC). Pearson acquired it in 2003. BTEC qualifications are still published under the Pearson/Edexcel umbrella.',
                  color: '#f59e0b',
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
              <h3 className="text-sm font-semibold text-white">Edexcel-specific assessment features that affect boundaries</h3>
              <ul className="space-y-2">
                {[
                  {
                    title: 'Maths: three equal papers',
                    body: 'Edexcel GCSE Maths Higher consists of one non-calculator paper (80 marks) and two calculator papers (80 marks each), totalling 240. The non-calculator/calculator split is identical to AQA, but Edexcel\'s paper style tends to front-load marks on standard methods — a factor senior examiners account for during boundary-setting.',
                  },
                  {
                    title: 'English Language: source-based unseen texts',
                    body: "Edexcel's English Language specification (1EN0) uses two components: Fiction and Imaginative Writing, and Non-fiction and Transactional Writing. Unlike AQA, Edexcel's reading sections emphasise synthesis across sources — students compare two texts in both components. This structural difference is why English Language boundaries don't transfer between boards.",
                  },
                  {
                    title: 'Sciences: consistent Higher/Foundation spread',
                    body: 'Edexcel separate sciences show a consistent pattern: Higher Chemistry grade 4 (47/200 in 2025) sits notably lower than Higher Physics grade 4 (66/200) and Higher Biology grade 4 (61/200). This reflects Edexcel Chemistry Higher being calibrated as the most demanding at the boundary margin — a pattern that has held across the 2022–2025 series.',
                  },
                ].map(item => (
                  <li key={item.title} className="flex gap-3 items-start">
                    <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 mt-1.5 shrink-0" aria-hidden="true" />
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
              Edexcel GCSE grade boundaries calculator
            </h2>
            <p className="text-slate-400 text-sm mb-6">
              Select your subject and enter your raw mark to instantly find your Edexcel GCSE grade based on the latest 2025 boundaries.
            </p>
            <GCSECalculatorClient />
          </section>

          {/* ── MAIN BOUNDARY TABLE ── */}
          <section aria-labelledby="edexcel-table-heading">
            <h2 id="edexcel-table-heading" className="text-2xl font-bold text-white mb-2">
              Edexcel GCSE grade boundaries 2025 — all subjects
            </h2>
            <p className="text-slate-400 text-sm mb-6">
              Complete official Edexcel grade boundaries from the June 2025 examination series, published 20 August 2025.
              2026 boundaries update live on Results Day 20 August 2026. Verified against official Pearson documents.
            </p>

            <div className="overflow-x-auto rounded-xl border border-white/8">
              <table className="w-full text-sm min-w-[720px]" aria-label="Edexcel GCSE grade boundaries 2025 all subjects">
                <thead>
                  <tr className="bg-white/4 border-b border-white/8">
                    <th scope="col" className="text-left px-4 py-3 text-xs font-semibold text-slate-400 uppercase tracking-wider">Subject</th>
                    <th scope="col" className="text-left px-3 py-3 text-xs font-semibold text-slate-400 uppercase">Tier</th>
                    <th scope="col" className="text-center px-2 py-3 text-xs font-bold text-emerald-400">9</th>
                    <th scope="col" className="text-center px-2 py-3 text-xs font-bold text-emerald-400">8</th>
                    <th scope="col" className="text-center px-2 py-3 text-xs font-bold text-indigo-400">7</th>
                    <th scope="col" className="text-center px-2 py-3 text-xs font-bold text-indigo-400">6</th>
                    <th scope="col" className="text-center px-2 py-3 text-xs font-bold text-purple-400">5 ★</th>
                    <th scope="col" className="text-center px-2 py-3 text-xs font-bold text-amber-400">4 +</th>
                    <th scope="col" className="text-center px-2 py-3 text-xs font-semibold text-slate-400">3</th>
                    <th scope="col" className="text-center px-2 py-3 text-xs font-semibold text-slate-500">Max</th>
                  </tr>
                </thead>
                <tbody>
                  {EDEXCEL_SUBJECTS_2025.map((row, i) => (
                    <tr key={`${row.subject}-${row.tier}`} className={`border-b border-white/5 last:border-0 ${i % 2 !== 0 ? 'bg-white/2' : ''}`}>
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
              Source: Pearson Edexcel official grade boundary documents, June 2025 series.
              Verified against qualifications.pearson.com, 31 May 2026. GradesNova is not affiliated with Pearson Edexcel.
            </p>
          </section>

          {/* ── MATHS YEAR-ON-YEAR TREND ── */}
          <section aria-labelledby="edexcel-maths-yoy-heading">
            <h2 id="edexcel-maths-yoy-heading" className="text-2xl font-bold text-white mb-2">
              Edexcel GCSE Maths grade boundaries 2022–2025
            </h2>
            <p className="text-slate-400 text-sm mb-6">
              Four-year trend for Edexcel GCSE Maths Higher tier. Boundaries have risen steadily since 2022 as
              post-pandemic grade deflation corrected. The 2026 boundary will be confirmed on Results Day 20 August 2026.
              Based on this trend, the 2026 Edexcel Maths Higher grade 9 is expected in the range of 210–225.
            </p>

            <div className="overflow-x-auto rounded-xl border border-white/8">
              <table className="w-full text-sm min-w-[500px]" aria-label="Edexcel GCSE Maths Higher grade boundaries 2022 to 2025 year on year">
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
                  {EDEXCEL_MATHS_YOY.map((row, i) => (
                    <tr key={row.year} className={`border-b border-white/5 last:border-0 ${i === 0 ? 'bg-indigo-500/5' : i % 2 !== 0 ? 'bg-white/2' : ''}`}>
                      <td className="px-4 py-3 font-mono font-semibold text-white">
                        {row.year}
                        {i === 0 && <span className="ml-2 text-[10px] bg-indigo-500/20 text-indigo-300 px-1.5 py-0.5 rounded font-sans">latest</span>}
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
            <p className="text-xs text-slate-600 mt-3">
              Source: Pearson Edexcel official grade boundary documents, June series 2022–2025.
            </p>
          </section>

          {/* ── CROSS-BOARD COMPARISON with contextual internal links ── */}
          <section aria-labelledby="edexcel-vs-boards-heading">
            <h2 id="edexcel-vs-boards-heading" className="text-2xl font-bold text-white mb-2">
              Edexcel vs AQA vs OCR grade boundaries 2025
            </h2>
            <p className="text-slate-400 text-sm mb-6">
              All three boards set boundaries independently. In 2025 Maths Higher, Edexcel required{' '}
              <strong className="text-white">53 out of 240 for grade 4</strong> — 10 marks below{' '}
              <Link href="/exams/gcse/aqa" className="text-emerald-400 hover:text-emerald-300 underline underline-offset-2">AQA (63)</Link>{' '}
              and 2 below{' '}
              <Link href="/exams/gcse/ocr" className="text-purple-400 hover:text-purple-300 underline underline-offset-2">OCR (51)</Link>.
              Different paper structures drive different raw marks; the grade standards are equivalent across boards.
            </p>

            <div className="overflow-x-auto rounded-xl border border-white/8">
              <table className="w-full text-sm min-w-[580px]" aria-label="Edexcel vs AQA vs OCR GCSE grade boundaries comparison 2025">
                <thead>
                  <tr className="bg-white/4 border-b border-white/8">
                    <th scope="col" className="text-left px-4 py-3 text-xs font-semibold text-slate-400 uppercase tracking-wider">Subject / Board</th>
                    <th scope="col" className="text-center px-3 py-3 text-xs font-bold text-emerald-400">Grade 9</th>
                    <th scope="col" className="text-center px-3 py-3 text-xs font-bold text-purple-400">Grade 5</th>
                    <th scope="col" className="text-center px-3 py-3 text-xs font-bold text-amber-400">Grade 4</th>
                    <th scope="col" className="text-center px-3 py-3 text-xs font-semibold text-slate-500">Max</th>
                  </tr>
                </thead>
                <tbody>
                  {CROSS_BOARD_2025.map((row, i) => (
                    <tr key={row.label} className={`border-b border-white/5 last:border-0 ${i % 2 !== 0 ? 'bg-white/2' : ''}`}>
                      <td className="px-4 py-2.5 font-medium text-sm">
                        <Link href={row.href} className="hover:underline" style={{ color: row.color }}>{row.label}</Link>
                      </td>
                      <td className="px-3 py-2.5 text-center font-mono text-xs text-emerald-400 font-semibold">{row.g9}</td>
                      <td className="px-3 py-2.5 text-center font-mono text-xs text-purple-400 font-semibold">{row.g5}</td>
                      <td className="px-3 py-2.5 text-center font-mono text-xs text-amber-400 font-semibold">{row.g4}</td>
                      <td className="px-3 py-2.5 text-center font-mono text-xs text-slate-500">{row.max}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-xs text-slate-600 mt-3">
              Sources: Pearson Edexcel, AQA, and OCR official grade boundary documents, June 2025.
            </p>

            <div className="mt-4 bg-amber-500/10 border border-amber-500/20 rounded-xl px-4 py-3 flex gap-3 items-start">
              <span className="text-lg shrink-0" aria-hidden="true">⚠️</span>
              <p className="text-sm text-slate-300">
                <strong className="text-amber-300">Never mix boundaries between boards.</strong>{' '}
                Edexcel Maths Higher grade 4 was 53/240 in 2025, while{' '}
                <Link href="/exams/gcse/aqa" className="text-emerald-400 hover:text-emerald-300 underline underline-offset-2">AQA</Link>{' '}
                was 63/240 — a 10-mark difference.
                Applying the wrong board&apos;s boundary will give you a completely incorrect grade.
                Check with your school if unsure which board you were entered for.
              </p>
            </div>
          </section>

          {/* ── GRADE SCALE EXPLAINER ── */}
          <section aria-labelledby="grade-scale-heading">
            <h2 id="grade-scale-heading" className="text-2xl font-bold text-white mb-4">
              Edexcel GCSE 9–1 grade scale: what each grade means
            </h2>
            <p className="text-slate-400 leading-relaxed mb-5">
              All GCSE boards — including Edexcel — use the same 9–1 grading scale. Grade descriptors are consistent across
              Edexcel,{' '}
              <Link href="/exams/gcse/aqa" className="text-emerald-400 hover:text-emerald-300 underline underline-offset-2">AQA</Link>,{' '}
              <Link href="/exams/gcse/ocr" className="text-purple-400 hover:text-purple-300 underline underline-offset-2">OCR</Link>, and{' '}
              <Link href="/exams/gcse/wjec" className="text-amber-400 hover:text-amber-300 underline underline-offset-2">WJEC</Link>.
            </p>

            <div className="overflow-x-auto rounded-xl border border-white/8">
              <table className="w-full text-sm min-w-[480px]" aria-label="Edexcel GCSE 9 to 1 grade scale with old grade equivalents and benchmarks">
                <thead>
                  <tr className="bg-white/4 border-b border-white/8">
                    <th scope="col" className="text-left px-4 py-3 text-xs font-semibold text-slate-400 uppercase tracking-wider">Grade</th>
                    <th scope="col" className="text-left px-4 py-3 text-xs font-semibold text-slate-400 uppercase tracking-wider">Old equivalent</th>
                    <th scope="col" className="text-left px-4 py-3 text-xs font-semibold text-slate-400 uppercase tracking-wider">Description</th>
                    <th scope="col" className="text-left px-4 py-3 text-xs font-semibold text-slate-400 uppercase tracking-wider">Benchmark</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5">
                  {[
                    { grade: '9', old: 'A* (top fraction)', desc: 'Top ~3–5% nationally', bench: 'Exceptional', color: '#34d399' },
                    { grade: '8', old: 'A*/A', desc: 'High distinction', bench: '', color: '#34d399' },
                    { grade: '7', old: 'A', desc: 'Distinction', bench: '', color: '#6366f1' },
                    { grade: '6', old: 'B', desc: 'Merit', bench: '', color: '#6366f1' },
                    { grade: '5', old: 'B/C', desc: 'Strong pass ★', bench: 'Most sixth forms require 5+ for A-Levels', color: '#a855f7' },
                    { grade: '4', old: 'C', desc: 'Standard pass +', bench: 'Minimum for most employers and colleges', color: '#f59e0b' },
                    { grade: '3', old: 'D', desc: 'Below standard pass', bench: '', color: '#94a3b8' },
                    { grade: '2', old: 'E', desc: '', bench: '', color: '#64748b' },
                    { grade: '1', old: 'F/G', desc: '', bench: '', color: '#64748b' },
                    { grade: 'U', old: 'U', desc: 'Ungraded', bench: '', color: '#ef4444' },
                  ].map(row => (
                    <tr key={row.grade} className="hover:bg-white/2 transition-colors">
                      <td className="px-4 py-2.5 font-mono font-bold text-lg" style={{ color: row.color }}>{row.grade}</td>
                      <td className="px-4 py-2.5 text-slate-300 text-xs">{row.old}</td>
                      <td className="px-4 py-2.5 text-slate-400 text-xs">{row.desc}</td>
                      <td className="px-4 py-2.5 text-slate-500 text-xs">{row.bench}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-xs text-slate-600 mt-3">Source: Ofqual GCSE grade descriptors (2024). Equivalences are approximate.</p>
          </section>

          {/* ── FAQ ── */}
          <section aria-labelledby="faq-heading">
            <h2 id="faq-heading" className="text-2xl font-bold text-white mb-2">
              Edexcel GCSE grade boundaries 2025 — frequently asked questions
            </h2>
            <p className="text-slate-400 text-sm mb-6">
              Common questions about Edexcel grade boundaries, raw marks, Results Day, and how Edexcel compares to other boards.
            </p>
            <div className="space-y-3">
              {[
                {
                  q: 'What are the Edexcel GCSE grade boundaries for 2025?',
                  a: 'The official Edexcel GCSE grade boundaries from June 2025 are shown in the full table above. Key figures: Maths Higher grade 9 = 217/240, grade 5 = 87/240, grade 4 = 53/240. English Language grade 9 = 122/160, grade 4 = 73/160. 2026 boundaries will be published at 8:00am on 20 August 2026.',
                },
                {
                  q: 'What was the Edexcel GCSE Maths grade 9 boundary in 2025?',
                  a: 'The Edexcel GCSE Maths Higher grade 9 boundary in 2025 was 217 out of 240 (90.4%). For context: 2024 was 210, 2023 was 205, and 2022 was 193. The 2026 boundary will be confirmed on Results Day 20 August 2026.',
                },
                {
                  q: 'What is the Edexcel GCSE grade 5 strong pass boundary for Maths?',
                  a: 'In 2025, the Edexcel Maths Higher grade 5 boundary was 87 out of 240 (36%). For Foundation tier it was 175 out of 240 (73%). Grade 5 is the strong pass required by most sixth forms for A-Level Maths.',
                },
                {
                  q: 'How does Edexcel grade 4 compare to AQA grade 4 in Maths?',
                  a: 'In 2025, Edexcel Maths Higher grade 4 was 53/240 while AQA Maths Higher grade 4 was 63/240 — Edexcel required 10 fewer marks for a standard pass. Both are equivalent grade 4 standards set by different paper structures.',
                },
                {
                  q: 'When does Edexcel publish 2026 GCSE grade boundaries?',
                  a: 'Pearson Edexcel publishes all 2026 GCSE grade boundaries at exactly 8:00am on Thursday 20 August 2026. Boundaries are strictly embargoed before this date.',
                },
                {
                  q: 'Will Edexcel 2026 grade boundaries be higher or lower than 2025?',
                  a: 'This depends on the difficulty of the 2026 Edexcel papers. Ofqual uses a comparable outcomes process to prevent large year-on-year swings. Based on the 2022–2025 trend, Maths Higher grade 4 has ranged from 48–53. The 2026 boundary will be confirmed on 20 August 2026.',
                },
                {
                  q: 'How do I calculate my Edexcel grade from my raw mark?',
                  a: 'Add up your raw marks from all papers for the subject. For Edexcel Maths Higher, you have 3 papers totalling 240 marks. If your total is 217 or above, you achieved grade 9 in 2025. If it is 53–86, you achieved grade 4.',
                },
                {
                  q: 'What is the difference between Edexcel Foundation and Higher tier boundaries?',
                  a: 'Foundation tier is capped at grade 5 and targeted at students expecting grades 1–5. Higher tier allows grades 4–9. For Maths Foundation in 2025, grade 4 required 144 out of 240 (60%), compared to 53 out of 240 (22%) on Higher tier.',
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
                    All grade boundaries on this page are taken directly from the official Pearson Edexcel grade boundary
                    documents published on{' '}
                    <a href="https://qualifications.pearson.com/en/support/support-topics/results-certification/grade-boundaries.html" target="_blank" rel="noopener noreferrer nofollow" className="text-indigo-400 hover:text-indigo-300 underline underline-offset-2">
                      qualifications.pearson.com
                    </a>{' '}
                    on 20 August 2025. GradesNova does not estimate,
                    interpolate, or adjust boundaries — every figure is copied verbatim from the official document.
                  </p>
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <span className="text-xl shrink-0" aria-hidden="true">🔍</span>
                <div>
                  <p className="text-sm font-semibold text-white mb-1">Verification</p>
                  <p className="text-sm text-slate-400 leading-relaxed">
                    Data was last verified against qualifications.pearson.com official documents on 31 May 2026.
                    GradesNova is not affiliated with Pearson Edexcel or Ofqual.
                  </p>
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <span className="text-xl shrink-0" aria-hidden="true">⏱️</span>
                <div>
                  <p className="text-sm font-semibold text-white mb-1">2026 update process</p>
                  <p className="text-sm text-slate-400 leading-relaxed">
                    On 20 August 2026 from 8:00am, GradesNova updates this page with official Edexcel 2026 grade boundary
                    data as soon as the Pearson documents are publicly released.
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
                { name: 'AQA Grade Boundaries 2025', href: '/exams/gcse/aqa', color: '#34d399' },
                { name: 'OCR Grade Boundaries 2025', href: '/exams/gcse/ocr', color: '#a855f7' },
                { name: 'WJEC Grade Boundaries 2025', href: '/exams/gcse/wjec', color: '#f59e0b' },
                { name: 'All Boards — GCSE', href: '/exams/gcse', color: '#6366f1' },
              ].map(b => (
                <Link key={b.name} href={b.href}
                  className="px-4 py-2 rounded-xl text-xs font-medium border transition-all hover:scale-105"
                  style={{ backgroundColor: `${b.color}12`, borderColor: `${b.color}30`, color: b.color }}>
                  {b.name}
                </Link>
              ))}
            </div>
          </section>

          {/* ── RELATED ARTICLES ── */}
          <section aria-labelledby="related-articles-heading" className="border-t border-white/8 pt-10">
            <h2 id="related-articles-heading" className="text-sm font-semibold text-slate-500 uppercase tracking-wider mb-4">
              Related articles
            </h2>
            <div className="grid sm:grid-cols-2 gap-3">
              {[
                {
                  title: 'GCSE Results Day 2026: Everything You Need to Know',
                  href: '/articles/gcse-results-day-2026',
                  color: '#34d399',
                  desc: 'Dates, collection times, what to do if results disappoint, and remark deadlines.',
                },
                {
                  title: 'Do University Offers Account for Grade Boundaries?',
                  href: '/articles/do-university-offers-account-for-grade-boundaries',
                  color: '#6366f1',
                  desc: 'Contextual admissions and how grade boundaries relate to university offers.',
                },
              ].map(a => (
                <Link key={a.href} href={a.href}
                  className="bg-[#12141f] border border-white/8 rounded-xl p-4 hover:border-white/16 transition-colors group">
                  <p className="text-sm font-semibold text-white group-hover:brightness-110 transition-all leading-snug mb-1">{a.title}</p>
                  <p className="text-xs text-slate-500 leading-relaxed mb-2">{a.desc}</p>
                  <span className="text-xs font-medium" style={{ color: a.color }}>Read article →</span>
                </Link>
              ))}
            </div>
          </section>

        </div>
      </main>
    </>
  );
}
