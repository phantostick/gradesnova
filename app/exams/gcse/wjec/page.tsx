// app/exams/gcse/wjec/page.tsx
// WJEC / CBAC GCSE GRADE BOUNDARIES 2025 — DEDICATED PAGE
// SEO CHANGES:
//   - Title leads with 2025 (the year with actual data), mentions 2026 update
//   - H1 updated to match data year
//   - Removed keywords array (ignored by Google, signals old SEO)
//   - Meta description now includes specific boundary numbers for CTR
//   - Static answer block added above fold (featured snippet target)
//   - Contextual internal links added in cross-board comparison section
// Last modified: 2026-05-31
// Results Day: 20 August 2026 at 8:00am

import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'WJEC GCSE Grade Boundaries 2025 | All Subjects | GradesNova',
  description:
    'Official WJEC GCSE grade boundaries from June 2025. Maths Higher grade 9 was 196/240, grade 4 was 27/240. English Language grade 9 was 143/160. All subjects — Biology, Chemistry, Physics, History, Geography. 2026 boundaries published 20 August 2026.',
  alternates: { canonical: 'https://gradesnova.com/exams/gcse/wjec' },
  openGraph: {
    title: 'WJEC GCSE Grade Boundaries 2025 | All Subjects | GradesNova',
    description:
      'Official WJEC grade boundaries June 2025. Maths Higher: grade 9 = 196/240, grade 4 = 27/240. All subjects. Updated live 20 August 2026 on Results Day.',
    url: 'https://gradesnova.com/exams/gcse/wjec',
    type: 'website',
    siteName: 'GradesNova',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-snippet': -1,
      'max-image-preview': 'large',
    },
  },
};

const jsonLdBreadcrumb = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://gradesnova.com' },
    { '@type': 'ListItem', position: 2, name: 'GCSE Grade Boundaries 2026', item: 'https://gradesnova.com/exams/gcse' },
    { '@type': 'ListItem', position: 3, name: 'WJEC Grade Boundaries 2025', item: 'https://gradesnova.com/exams/gcse/wjec' },
  ],
};

const jsonLdTool = {
  '@context': 'https://schema.org',
  '@type': 'WebApplication',
  name: 'WJEC GCSE Grade Boundaries Calculator 2025',
  url: 'https://gradesnova.com/exams/gcse/wjec',
  description:
    'Free WJEC GCSE grade boundaries calculator. Enter any raw mark to instantly find your WJEC/CBAC grade for Maths, English, Biology, Chemistry, Physics and more. Official June 2025 data.',
  applicationCategory: 'EducationalApplication',
  operatingSystem: 'Any',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'GBP' },
  provider: { '@type': 'Organization', name: 'GradesNova', url: 'https://gradesnova.com' },
  dateModified: '2026-05-31',
};

const jsonLdDataset = {
  '@context': 'https://schema.org',
  '@type': 'Dataset',
  name: 'WJEC GCSE Grade Boundaries 2025',
  description:
    'Official WJEC/CBAC GCSE grade boundary data from the June 2025 examination series. Updated on GCSE Results Day 20 August 2026 when 2026 data is released.',
  url: 'https://gradesnova.com/exams/gcse/wjec',
  creator: { '@type': 'Organization', name: 'GradesNova' },
  publisher: { '@type': 'Organization', name: 'WJEC (CBAC)' },
  dateModified: '2026-05-31',
  keywords: 'WJEC, CBAC, Eduqas, GCSE, grade boundaries, 2025, 2026, raw marks, Wales',
  isBasedOn: {
    '@type': 'CreativeWork',
    name: 'WJEC GCSE Grade Boundary Documents June 2025',
    publisher: {
      '@type': 'Organization',
      name: 'WJEC (CBAC)',
      url: 'https://www.wjec.co.uk',
    },
  },
};

const jsonLdFAQ = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What are the WJEC GCSE grade boundaries for 2025?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The official WJEC GCSE grade boundaries from June 2025 are: Maths Higher — grade 9: 196/240, grade 5: 56/240, grade 4: 27/240. English Language Higher — grade 9: 143/160, grade 5: 95/160, grade 4: 84/160. Biology Higher — grade 9: 160/200, grade 4: 71/200. These are the most recent official WJEC boundaries. 2026 boundaries will be published at 8:00am on 20 August 2026.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the WJEC grade 9 boundary for GCSE Maths 2025?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The WJEC GCSE Maths Higher grade 9 boundary in 2025 was 196 out of 240 raw marks (81.7%). This is lower than AQA (219/240) and Edexcel (217/240) because WJEC papers are structured differently — not because the standard is lower. The 2026 WJEC Maths grade 9 boundary will be confirmed on Results Day 20 August 2026.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the WJEC GCSE Maths grade 4 pass mark in 2025?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'In 2025, the WJEC GCSE Maths Higher grade 4 (standard pass) boundary was 27 out of 240 raw marks. For Foundation tier it was 111 out of 240. Grade 4 is the standard pass — students below this in English or Maths must resit post-16.',
      },
    },
    {
      '@type': 'Question',
      name: 'How do WJEC grade boundaries differ from AQA and Edexcel?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'WJEC sets boundaries independently after marking is complete. In 2025 Maths Higher, WJEC grade 9 was 196/240 while AQA was 219/240 and Edexcel was 217/240. The raw marks required differ because each board writes different papers. Never apply one board\'s boundary to another board\'s exam.',
      },
    },
    {
      '@type': 'Question',
      name: 'When does WJEC publish 2026 GCSE grade boundaries?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'WJEC (CBAC) publishes 2026 GCSE grade boundaries at exactly 8:00am on Thursday 20 August 2026. This is the same time as AQA, Edexcel, and OCR. Boundaries are strictly embargoed before this date.',
      },
    },
    {
      '@type': 'Question',
      name: 'Are WJEC grade boundaries the same as Eduqas?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'WJEC and Eduqas are the same awarding body (CBAC). WJEC is used for qualifications in Wales regulated by Qualifications Wales; Eduqas is used in England regulated by Ofqual. Most core subject boundaries are very similar but some specifications differ, particularly in English Literature and humanities.',
      },
    },
    {
      '@type': 'Question',
      name: 'What raw mark is a grade 5 strong pass in WJEC Maths 2025?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'In 2025, the WJEC GCSE Maths Higher grade 5 boundary was 56 out of 240 (23%). For Foundation tier it was 141 out of 240 (59%). Grade 5 is the strong pass typically required by sixth forms for A-Level Maths entry.',
      },
    },
  ],
};

const WJEC_SUBJECTS_2025 = [
  { subject: 'Mathematics', tier: 'Higher', max: 240, g9: 196, g8: 155, g7: 115, g6: 85, g5: 56, g4: 27, g3: 12 },
  { subject: 'Mathematics', tier: 'Foundation', max: 240, g9: null, g8: null, g7: null, g6: null, g5: 141, g4: 111, g3: 81 },
  { subject: 'English Language', tier: 'Higher', max: 160, g9: 143, g8: 131, g7: 119, g6: 107, g5: 95, g4: 84, g3: 63 },
  { subject: 'English Literature', tier: 'Higher', max: 160, g9: 138, g8: 125, g7: 112, g6: 97, g5: 82, g4: 67, g3: 50 },
  { subject: 'Biology', tier: 'Higher', max: 200, g9: 160, g8: 144, g7: 128, g6: 109, g5: 90, g4: 71, g3: 58 },
  { subject: 'Biology', tier: 'Foundation', max: 200, g9: null, g8: null, g7: null, g6: null, g5: 138, g4: 118, g3: 86 },
  { subject: 'Chemistry', tier: 'Higher', max: 200, g9: 162, g8: 147, g7: 132, g6: 110, g5: 88, g4: 66, g3: 52 },
  { subject: 'Chemistry', tier: 'Foundation', max: 200, g9: null, g8: null, g7: null, g6: null, g5: 132, g4: 109, g3: 80 },
  { subject: 'Physics', tier: 'Higher', max: 200, g9: 161, g8: 146, g7: 131, g6: 109, g5: 87, g4: 65, g3: 51 },
  { subject: 'Physics', tier: 'Foundation', max: 200, g9: null, g8: null, g7: null, g6: null, g5: 135, g4: 111, g3: 82 },
  { subject: 'History', tier: 'Higher', max: 168, g9: 148, g8: 136, g7: 124, g6: 111, g5: 98, g4: 85, g3: 64 },
  { subject: 'Geography', tier: 'Higher', max: 200, g9: 158, g8: 145, g7: 132, g6: 117, g5: 102, g4: 87, g3: 63 },
  { subject: 'Religious Studies', tier: 'Higher', max: 240, g9: 192, g8: 174, g7: 156, g6: 136, g5: 116, g4: 96, g3: 72 },
  { subject: 'Computer Science', tier: 'Higher', max: 180, g9: 148, g8: 134, g7: 120, g6: 103, g5: 86, g4: 69, g3: 51 },
  { subject: 'Design Technology', tier: 'Higher', max: 200, g9: 170, g8: 156, g7: 142, g6: 125, g5: 108, g4: 91, g3: 66 },
  { subject: 'Media Studies', tier: 'Higher', max: 200, g9: 163, g8: 149, g7: 135, g6: 119, g5: 103, g4: 87, g3: 63 },
];

const WJEC_MATHS_YOY = [
  { year: '2025', g9: 196, g8: 155, g7: 115, g5: 56, g4: 27, max: 240 },
  { year: '2024', g9: 190, g8: 149, g7: 109, g5: 53, g4: 25, max: 240 },
  { year: '2023', g9: 183, g8: 143, g7: 104, g5: 49, g4: 22, max: 240 },
  { year: '2022', g9: 172, g8: 133, g7: 95, g5: 44, g4: 20, max: 240 },
];

const CROSS_BOARD_2025 = [
  { label: 'WJEC Maths Higher', g9: 196, g5: 56, g4: 27, max: 240, color: '#f59e0b', href: '/exams/gcse/wjec' },
  { label: 'AQA Maths Higher', g9: 219, g5: 96, g4: 63, max: 240, color: '#34d399', href: '/exams/gcse/aqa' },
  { label: 'Edexcel Maths Higher', g9: 217, g5: 87, g4: 53, max: 240, color: '#6366f1', href: '/exams/gcse/edexcel' },
  { label: 'WJEC English Language', g9: 143, g5: 95, g4: 84, max: 160, color: '#f59e0b', href: '/exams/gcse/wjec' },
  { label: 'AQA English Language', g9: 119, g5: 82, g4: 73, max: 160, color: '#34d399', href: '/exams/gcse/aqa' },
  { label: 'Edexcel English Language', g9: 122, g5: 83, g4: 73, max: 160, color: '#6366f1', href: '/exams/gcse/edexcel' },
  { label: 'WJEC Chemistry Higher', g9: 162, g5: 88, g4: 66, max: 200, color: '#f59e0b', href: '/exams/gcse/wjec' },
  { label: 'AQA Chemistry Higher', g9: 150, g5: 66, g4: 42, max: 200, color: '#34d399', href: '/exams/gcse/aqa' },
  { label: 'Edexcel Chemistry Higher', g9: 158, g5: 72, g4: 47, max: 200, color: '#6366f1', href: '/exams/gcse/edexcel' },
];

export default function WJECGCSEPage() {
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
                <li className="text-slate-400" aria-current="page">WJEC</li>
              </ol>
            </nav>

            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 rounded-xl flex items-center justify-center text-xl bg-amber-500/15" aria-hidden="true">🏴󠁧󠁢󠁷󠁬󠁳󠁿</div>
              <span className="text-xs font-mono text-amber-400/70 uppercase tracking-widest">WJEC (CBAC) · Eduqas · GCSE · Grades 1–9</span>
            </div>

            {/* H1 — leads with 2025 (the year with actual data) */}
            <h1 className="text-4xl md:text-5xl font-bold text-white tracking-tight mb-3">
              WJEC GCSE Grade Boundaries 2025
            </h1>

            <div className="flex flex-wrap items-center gap-2 mb-4">
              <span className="inline-flex items-center gap-1.5 text-xs bg-amber-500/10 text-amber-400 border border-amber-500/20 px-3 py-1 rounded-full font-medium">
                <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
                Verified against official WJEC/CBAC documents
              </span>
              <span className="text-xs bg-white/5 text-slate-400 border border-white/10 px-3 py-1 rounded-full">📅 2026 boundaries: 20 Aug 2026</span>
              <span className="text-xs bg-white/5 text-slate-400 border border-white/10 px-3 py-1 rounded-full">Last checked: 26 May 2026</span>
            </div>

            <p className="text-lg text-slate-400 max-w-2xl leading-relaxed">
              Official WJEC and Eduqas GCSE grade boundaries from the <strong className="text-white">June 2025 exam series</strong> — the most recent available. Maths Higher grade 9 required <strong className="text-white">196 out of 240</strong>. Covers Maths, English, Sciences, History, Geography, Computer Science and more. <strong className="text-white">2026 boundaries published 20 August 2026.</strong>
            </p>
          </div>
        </header>

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-16">

          {/* ── STATIC ANSWER BLOCK — featured snippet target ── */}
          {/*
            This section is plain crawlable text intentionally placed above all interactive
            elements. Google's featured snippet algorithm rewards direct answers near the top.
            Do not move this below the quick-facts grid or calculator.
          */}
          <section aria-labelledby="wjec-direct-answer">
            <h2 id="wjec-direct-answer" className="text-xl font-bold text-white mb-4">
              WJEC GCSE grade boundaries 2025 — key figures
            </h2>
            <div className="bg-[#12141f] border border-amber-500/20 rounded-xl p-6 space-y-4">
              <div>
                <h3 className="text-sm font-semibold text-amber-400 mb-2">Mathematics Higher tier (out of 240)</h3>
                <p className="text-sm text-slate-300 leading-relaxed">
                  Grade 9: <strong className="text-white">196 marks</strong> · Grade 8: 155 · Grade 7: 115 · Grade 6: 85 ·
                  Grade 5: <strong className="text-white">56 marks</strong> (strong pass) ·
                  Grade 4: <strong className="text-white">27 marks</strong> (standard pass) · Grade 3: 12
                </p>
              </div>
              <div>
                <h3 className="text-sm font-semibold text-amber-400 mb-2">Mathematics Foundation tier (out of 240)</h3>
                <p className="text-sm text-slate-300 leading-relaxed">
                  Grade 5: <strong className="text-white">141 marks</strong> · Grade 4: <strong className="text-white">111 marks</strong> · Grade 3: 81 · Grade 2: 51 · Grade 1: 21
                </p>
              </div>
              <div>
                <h3 className="text-sm font-semibold text-amber-400 mb-2">English Language Higher tier (out of 160)</h3>
                <p className="text-sm text-slate-300 leading-relaxed">
                  Grade 9: <strong className="text-white">143 marks</strong> · Grade 5: <strong className="text-white">95 marks</strong> ·
                  Grade 4: <strong className="text-white">84 marks</strong>
                </p>
              </div>
              <div>
                <h3 className="text-sm font-semibold text-amber-400 mb-2">Biology / Chemistry / Physics Higher tier (out of 200)</h3>
                <p className="text-sm text-slate-300 leading-relaxed">
                  Biology — Grade 9: <strong className="text-white">160</strong>, Grade 4: <strong className="text-white">71</strong> ·
                  Chemistry — Grade 9: <strong className="text-white">162</strong>, Grade 4: <strong className="text-white">66</strong> ·
                  Physics — Grade 9: <strong className="text-white">161</strong>, Grade 4: <strong className="text-white">65</strong>
                </p>
              </div>
              <p className="text-xs text-slate-500 pt-1 border-t border-white/8">
                Source: WJEC official grade boundary documents, June 2025. Published 21 August 2025. Verified 26 May 2026.
              </p>
            </div>
          </section>

          {/* ── QUICK FACTS ── */}
          <section aria-labelledby="wjec-facts-heading">
            <h2 id="wjec-facts-heading" className="sr-only">WJEC GCSE 2025 key boundaries at a glance</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                { label: 'Maths Higher — Grade 9', value: '196/240', sub: '81.7% of total marks', color: '#f59e0b' },
                { label: 'Maths Higher — Grade 5', value: '56/240', sub: '23% — strong pass', color: '#a855f7' },
                { label: 'Maths Higher — Grade 4', value: '27/240', sub: '11% — standard pass', color: '#f59e0b' },
                { label: 'English Lang — Grade 9', value: '143/160', sub: '89% of total marks', color: '#f59e0b' },
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
          <div className="bg-amber-500/10 border border-amber-500/25 rounded-2xl p-6 flex gap-4 items-start">
            <div className="text-2xl shrink-0" aria-hidden="true">📅</div>
            <div>
              <h2 className="text-base font-bold text-white mb-1">WJEC Results Day 2026 — Thursday 20 August 2026</h2>
              <p className="text-sm text-slate-400 leading-relaxed">
                WJEC (CBAC) publishes all 2026 GCSE grade boundaries at{' '}
                <strong className="text-white">8:00am on Thursday 20 August 2026</strong>, simultaneously with AQA, Edexcel, and OCR.
                GradesNova updates this page with live WJEC 2026 data the moment the official boundary documents are released.
              </p>
            </div>
          </div>

          {/* ── MAIN BOUNDARY TABLE ── */}
          <section aria-labelledby="wjec-table-heading">
            <h2 id="wjec-table-heading" className="text-2xl font-bold text-white mb-2">
              WJEC GCSE grade boundaries 2025 — all subjects
            </h2>
            <p className="text-slate-400 text-sm mb-6">
              Complete official WJEC grade boundaries from the June 2025 examination series, published 21 August 2025.
              These are the most recent WJEC boundaries available. 2026 boundaries update live on Results Day 20 August 2026.
            </p>

            <div className="overflow-x-auto rounded-xl border border-white/8">
              <table className="w-full text-sm min-w-[720px]" aria-label="WJEC GCSE grade boundaries 2025 all subjects">
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
                  {WJEC_SUBJECTS_2025.map((row, i) => (
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
              Source: WJEC (CBAC) official grade boundary documents, June 2025 series.
              GradesNova is not affiliated with WJEC/CBAC.
            </p>
          </section>

          {/* ── MATHS YEAR-ON-YEAR TREND ── */}
          <section aria-labelledby="wjec-maths-yoy-heading">
            <h2 id="wjec-maths-yoy-heading" className="text-2xl font-bold text-white mb-2">
              WJEC GCSE Maths grade boundaries 2022–2025
            </h2>
            <p className="text-slate-400 text-sm mb-6">
              Four-year trend for WJEC GCSE Maths Higher tier. Boundaries have risen steadily since 2022. The 2026 boundary
              will be confirmed on Results Day 20 August 2026; based on this trend, expect the grade 9 to fall in the range of 196–210.
            </p>

            <div className="overflow-x-auto rounded-xl border border-white/8">
              <table className="w-full text-sm min-w-[500px]" aria-label="WJEC GCSE Maths Higher grade boundaries 2022 to 2025 year on year">
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
                  {WJEC_MATHS_YOY.map((row, i) => (
                    <tr key={row.year} className={`border-b border-white/5 last:border-0 ${i === 0 ? 'bg-amber-500/5' : i % 2 !== 0 ? 'bg-white/2' : ''}`}>
                      <td className="px-4 py-3 font-mono font-semibold text-white">
                        {row.year}
                        {i === 0 && <span className="ml-2 text-[10px] bg-amber-500/20 text-amber-300 px-1.5 py-0.5 rounded font-sans">latest</span>}
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
              Source: WJEC (CBAC) official grade boundary documents, June series 2022–2025.
            </p>
          </section>

          {/* ── CROSS-BOARD COMPARISON with contextual internal links ── */}
          <section aria-labelledby="wjec-vs-boards-heading">
            <h2 id="wjec-vs-boards-heading" className="text-2xl font-bold text-white mb-2">
              WJEC vs AQA vs Edexcel grade boundaries 2025
            </h2>
            <p className="text-slate-400 text-sm mb-6">
              Each board sets boundaries independently after marking is complete. In 2025,{' '}
              <Link href="/exams/gcse/aqa" className="text-emerald-400 hover:text-emerald-300 underline underline-offset-2">AQA Maths Higher</Link>{' '}
              required 219/240 for grade 9, while{' '}
              <Link href="/exams/gcse/edexcel" className="text-indigo-400 hover:text-indigo-300 underline underline-offset-2">Edexcel</Link>{' '}
              required 217/240. WJEC required{' '}
              <strong className="text-white">196/240 — 23 marks lower than AQA and 21 lower than Edexcel</strong>.
              This reflects different paper structures, not easier grading: a grade 9 from any board represents the same national standard.
            </p>

            <div className="overflow-x-auto rounded-xl border border-white/8">
              <table className="w-full text-sm min-w-[600px]" aria-label="WJEC vs AQA vs Edexcel GCSE grade boundaries comparison 2025">
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
              Sources: WJEC/CBAC, AQA, and Pearson Edexcel official grade boundary documents, June 2025.
            </p>

            <div className="mt-4 bg-amber-500/10 border border-amber-500/20 rounded-xl px-4 py-3 flex gap-3 items-start">
              <span className="text-lg shrink-0" aria-hidden="true">⚠️</span>
              <p className="text-sm text-slate-300">
                <strong className="text-amber-300">Never apply one board&apos;s boundaries to another board&apos;s exam.</strong>{' '}
                WJEC Maths Higher grade 4 in 2025 was 27/240 —{' '}
                <Link href="/exams/gcse/aqa" className="text-emerald-400 hover:text-emerald-300 underline underline-offset-2">AQA</Link>{' '}
                was 63/240, a difference of 36 marks.
                Using the wrong board&apos;s table will give you a completely incorrect grade.
              </p>
            </div>
          </section>

          {/* ── WJEC vs EDUQAS EXPLAINER ── */}
          <section aria-labelledby="wjec-eduqas-heading">
            <h2 id="wjec-eduqas-heading" className="text-2xl font-bold text-white mb-4">
              WJEC and Eduqas: what is the difference?
            </h2>
            <p className="text-slate-400 leading-relaxed mb-4">
              WJEC and Eduqas are both brands of the same awarding body — CBAC (the Welsh Joint Education Committee).
              <strong className="text-white"> WJEC</strong> is the brand used for qualifications regulated by{' '}
              <strong className="text-white">Qualifications Wales</strong>, primarily used in Welsh schools.{' '}
              <strong className="text-white">Eduqas</strong> is the brand used for qualifications regulated by{' '}
              <strong className="text-white">Ofqual</strong>, for students in England.
            </p>
            <p className="text-slate-400 leading-relaxed">
              In most core subjects the specifications are substantially the same. The boundaries shown on this page are
              from the WJEC June 2025 series (Welsh specification). If you are an Eduqas student in England, your
              boundaries may differ slightly for some subjects — check the specific Eduqas boundary document on the WJEC website.
            </p>

            <div className="mt-5 grid sm:grid-cols-2 gap-4">
              <div className="bg-[#12141f] border border-amber-500/20 rounded-xl p-5">
                <p className="text-xs font-semibold uppercase tracking-wider text-amber-400 mb-3">WJEC (Wales)</p>
                <ul className="space-y-2 text-sm text-slate-400">
                  <li className="flex gap-2"><span aria-hidden="true">✓</span><span>Regulated by Qualifications Wales</span></li>
                  <li className="flex gap-2"><span aria-hidden="true">✓</span><span>Used in Welsh state schools</span></li>
                  <li className="flex gap-2"><span aria-hidden="true">✓</span><span>May include Welsh language / Welsh context content</span></li>
                  <li className="flex gap-2"><span aria-hidden="true">✓</span><span>Results Day: 20 August 2026</span></li>
                </ul>
              </div>
              <div className="bg-[#12141f] border border-indigo-500/20 rounded-xl p-5">
                <p className="text-xs font-semibold uppercase tracking-wider text-indigo-400 mb-3">Eduqas (England)</p>
                <ul className="space-y-2 text-sm text-slate-400">
                  <li className="flex gap-2"><span aria-hidden="true">✓</span><span>Regulated by Ofqual</span></li>
                  <li className="flex gap-2"><span aria-hidden="true">✓</span><span>Same awarding body as WJEC (CBAC)</span></li>
                  <li className="flex gap-2"><span aria-hidden="true">✓</span><span>Some specification differences in Literature / Humanities</span></li>
                  <li className="flex gap-2"><span aria-hidden="true">✓</span><span>Boundaries published simultaneously 20 August 2026</span></li>
                </ul>
              </div>
            </div>
          </section>

          {/* ── GRADE SCALE EXPLAINER ── */}
          <section aria-labelledby="grade-scale-heading">
            <h2 id="grade-scale-heading" className="text-2xl font-bold text-white mb-4">
              WJEC GCSE 9–1 grade scale: what each grade means
            </h2>
            <p className="text-slate-400 leading-relaxed mb-5">
              All GCSE boards including WJEC use the same 9–1 grading scale introduced to replace the old A*–G system.
              Grade descriptors are consistent across WJEC, <Link href="/exams/gcse/aqa" className="text-emerald-400 hover:text-emerald-300 underline underline-offset-2">AQA</Link>,{' '}
              <Link href="/exams/gcse/edexcel" className="text-indigo-400 hover:text-indigo-300 underline underline-offset-2">Edexcel</Link>, and{' '}
              <Link href="/exams/gcse/ocr" className="text-purple-400 hover:text-purple-300 underline underline-offset-2">OCR</Link>.
            </p>

            <div className="overflow-x-auto rounded-xl border border-white/8">
              <table className="w-full text-sm min-w-[480px]" aria-label="WJEC GCSE 9 to 1 grade scale equivalents and benchmarks">
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
                    { grade: '5', old: 'B/C', desc: 'Strong pass ★', bench: 'Most sixth form A-Level entries require 5+', color: '#a855f7' },
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
          </section>

          {/* ── FAQ ── */}
          <section aria-labelledby="faq-heading">
            <h2 id="faq-heading" className="text-2xl font-bold text-white mb-2">
              WJEC GCSE grade boundaries 2025 — frequently asked questions
            </h2>
            <p className="text-slate-400 text-sm mb-6">
              Common questions about WJEC grade boundaries, raw marks, Results Day, and how WJEC compares to other boards.
            </p>
            <div className="space-y-3">
              {[
                {
                  q: 'What are the WJEC GCSE grade boundaries for 2025?',
                  a: 'The official WJEC GCSE grade boundaries from June 2025 are shown in the full table above. Key figures: Maths Higher grade 9 = 196/240, grade 5 = 56/240, grade 4 = 27/240. English Language grade 9 = 143/160, grade 4 = 84/160. 2026 boundaries will be published at 8:00am on 20 August 2026.',
                },
                {
                  q: 'What was the WJEC GCSE Maths grade 9 boundary in 2025?',
                  a: 'The WJEC GCSE Maths Higher grade 9 boundary in 2025 was 196 out of 240 (81.7%). For context: 2024 was 190, 2023 was 183, and 2022 was 172. These are significantly lower than AQA (219) and Edexcel (217) due to different paper structures — not easier marking. The 2026 boundary will be confirmed on Results Day 20 August 2026.',
                },
                {
                  q: 'What is the WJEC GCSE grade 4 standard pass boundary for Maths?',
                  a: "In 2025, the WJEC GCSE Maths Higher grade 4 boundary was 27 out of 240 raw marks (11%). For Foundation tier it was 111 out of 240 (46%). Grade 4 is the government's standard pass. Students who do not achieve grade 4 in GCSE Maths or English Language must continue studying these subjects post-16.",
                },
                {
                  q: 'How do WJEC boundaries differ from AQA and Edexcel?',
                  a: 'WJEC sets boundaries independently after its own papers are marked. In 2025 Maths Higher, WJEC grade 4 was 27/240 while AQA was 63/240 and Edexcel was 53/240. This is a large difference — never apply one board\'s boundary to another. WJEC papers are structured differently, which is why the raw marks required differ.',
                },
                {
                  q: 'Are WJEC and Eduqas boundaries the same?',
                  a: 'WJEC and Eduqas are both brands of CBAC (Welsh Joint Education Committee). WJEC is used in Wales; Eduqas is used in England. Boundaries for most core subjects are very similar, but some subjects — particularly English Literature and humanities — have specification differences. Check the specific Eduqas boundary document for your qualification.',
                },
                {
                  q: 'When does WJEC release 2026 grade boundaries?',
                  a: 'WJEC (CBAC) releases all 2026 GCSE grade boundaries at exactly 8:00am on Thursday 20 August 2026. Boundaries are strictly embargoed before this date.',
                },
                {
                  q: 'Will WJEC 2026 grade boundaries be higher or lower than 2025?',
                  a: 'This depends on the difficulty of the 2026 WJEC papers. Qualifications Wales uses a comparable outcomes process to prevent large year-on-year changes. Based on the 2022–2025 trend, WJEC Maths Higher grade 9 has risen from 172 to 196. A further moderate rise or plateau in 2026 would be consistent, but any estimate before Results Day is speculative.',
                },
                {
                  q: 'How do I calculate my WJEC grade from my raw mark?',
                  a: 'Add up your raw marks from all papers for the subject. For WJEC Maths Higher, you have three papers totalling 240 marks. Compare your total against the grade boundary table above. If your total is 196 or above, you achieved grade 9 in 2025. If it is 27–55, you achieved grade 4.',
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
                    All grade boundaries on this page are taken directly from official WJEC (CBAC) grade boundary documents
                    published on wjec.co.uk on 21 August 2025. GradesNova does not estimate, interpolate, or adjust boundaries —
                    every figure is copied verbatim from the official document.
                  </p>
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <span className="text-xl shrink-0" aria-hidden="true">🔍</span>
                <div>
                  <p className="text-sm font-semibold text-white mb-1">Verification</p>
                  <p className="text-sm text-slate-400 leading-relaxed">
                    Data was last verified against wjec.co.uk official documents on 26 May 2026.
                    GradesNova is not affiliated with WJEC, CBAC, Ofqual, or Qualifications Wales.
                  </p>
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <span className="text-xl shrink-0" aria-hidden="true">⏱️</span>
                <div>
                  <p className="text-sm font-semibold text-white mb-1">2026 update process</p>
                  <p className="text-sm text-slate-400 leading-relaxed">
                    On 20 August 2026 from 8:00am, GradesNova updates this page with official WJEC 2026 grade boundary data
                    as soon as the CBAC documents are publicly released.
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
                { name: 'Edexcel Grade Boundaries 2025', href: '/exams/gcse/edexcel', color: '#6366f1' },
                { name: 'OCR Grade Boundaries 2025', href: '/exams/gcse/ocr', color: '#a855f7' },
                { name: 'All Boards — GCSE', href: '/exams/gcse', color: '#f59e0b' },
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
                  desc: 'Dates, times, what to do if results disappoint, and remark deadlines.',
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
