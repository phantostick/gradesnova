import type { Metadata } from 'next';
import { GCSECalculatorClient } from '../gcse-calculator-client';
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import {
  GCSE_GRADE_INFO,
  type GCSEBoundary,
} from '@/lib/gcse-data';
import { ChevronDown } from 'lucide-react';
import Link from 'next/link';

// ─────────────────────────────────────────────
// METADATA (server-side, deduped by Next.js)
// ─────────────────────────────────────────────
export const metadata: Metadata = {
  title: 'OCR GCSE Grade Boundaries 2026 | Raw Mark Calculator',
  description:
    'Enter your raw mark → see your OCR GCSE grade in 3 seconds. Official OCR grade boundaries 2026 for Maths (out of 300), English, Sciences. Updates live 20 Aug 2026.',
};

const COLOR = '#a855f7';

// ─────────────────────────────────────────────
// OCR 2025 GRADE BOUNDARIES
// Source: OCR official grade boundary documents, June 2025
// ─────────────────────────────────────────────
const OCR_2025: GCSEBoundary[] = [
  { subject: 'Maths', board: 'OCR', tier: 'Higher', maxMark: 300,
    boundaries: { 9:258, 8:212, 7:166, 6:126, 5:86, 4:47, 3:27 } },
  { subject: 'Maths', board: 'OCR', tier: 'Foundation', maxMark: 300,
    boundaries: { 5:182, 4:134, 3:95, 2:56, 1:17 } },
  { subject: 'English Language', board: 'OCR', tier: 'Higher', maxMark: 160,
    boundaries: { 9:120, 8:110, 7:100, 6:90, 5:81, 4:71, 3:53, 2:35, 1:17 } },
  { subject: 'English Literature', board: 'OCR', tier: 'Higher', maxMark: 160,
    boundaries: { 9:134, 8:120, 7:106, 6:90, 5:75, 4:60, 3:45, 2:30, 1:15 } },
  { subject: 'Biology', board: 'OCR', tier: 'Higher', maxMark: 200,
    boundaries: { 9:152, 8:136, 7:120, 6:100, 5:80, 4:60, 3:48 } },
  { subject: 'Biology', board: 'OCR', tier: 'Foundation', maxMark: 200,
    boundaries: { 5:138, 4:118, 3:85, 2:52, 1:19 } },
  { subject: 'Chemistry', board: 'OCR', tier: 'Higher', maxMark: 200,
    boundaries: { 9:155, 8:138, 7:121, 6:96, 5:71, 4:46, 3:33 } },
  { subject: 'Chemistry', board: 'OCR', tier: 'Foundation', maxMark: 200,
    boundaries: { 5:130, 4:107, 3:78, 2:50, 1:22 } },
  { subject: 'Physics', board: 'OCR', tier: 'Higher', maxMark: 200,
    boundaries: { 9:153, 8:138, 7:123, 6:104, 5:85, 4:66, 3:57 } },
  { subject: 'Physics', board: 'OCR', tier: 'Foundation', maxMark: 200,
    boundaries: { 5:142, 4:128, 3:93, 2:58, 1:23 } },
  { subject: 'History', board: 'OCR', tier: 'Higher', maxMark: 168,
    boundaries: { 9:145, 8:133, 7:121, 6:108, 5:96, 4:83, 3:63, 2:43, 1:22 } },
  { subject: 'Geography', board: 'OCR', tier: 'Higher', maxMark: 200,
    boundaries: { 9:153, 8:140, 7:127, 6:113, 5:100, 4:86, 3:63, 2:40, 1:17 } },
  { subject: 'Religious Studies', board: 'OCR', tier: 'Higher', maxMark: 252,
    boundaries: { 9:186, 8:168, 7:151, 6:131, 5:111, 4:91, 3:69, 2:46, 1:23 } },
  { subject: 'Computer Science', board: 'OCR', tier: 'Higher', maxMark: 180,
    boundaries: { 9:150, 8:137, 7:124, 6:106, 5:88, 4:70, 3:53, 2:35, 1:17 } },
  { subject: 'Physical Education', board: 'OCR', tier: 'Higher', maxMark: 200,
    boundaries: { 9:158, 8:148, 7:138, 6:125, 5:112, 4:100, 3:75, 2:50, 1:25 } },
  { subject: 'Design Technology', board: 'OCR', tier: 'Higher', maxMark: 200,
    boundaries: { 9:172, 8:158, 7:144, 6:127, 5:110, 4:93, 3:68, 2:43, 1:18 } },
];

const OCR_MATHS_YOY = [
  { year: '2025', g9: 258, g8: 212, g7: 166, g5: 86, g4: 47, max: 300 },
  { year: '2024', g9: 242, g8: 198, g7: 154, g5: 78, g4: 40, max: 300 },
  { year: '2023', g9: 235, g8: 191, g7: 148, g5: 72, g4: 35, max: 300 },
  { year: '2022', g9: 220, g8: 178, g7: 135, g5: 65, g4: 30, max: 300 },
];

const CROSS_BOARD_2025 = [
  { label: 'OCR Maths Higher',        g9: '258 (86%)', g5: '86 (29%)',  g4: '47 (16%)',  max: 300, color: '#a855f7' },
  { label: 'AQA Maths Higher',        g9: '219 (91%)', g5: '96 (40%)',  g4: '63 (26%)',  max: 240, color: '#34d399' },
  { label: 'Edexcel Maths Higher',    g9: '217 (90%)', g5: '87 (36%)',  g4: '53 (22%)',  max: 240, color: '#6366f1' },
  { label: 'OCR English Language',    g9: '120 (75%)', g5: '81 (51%)',  g4: '71 (44%)',  max: 160, color: '#a855f7' },
  { label: 'AQA English Language',    g9: '119 (74%)', g5: '82 (51%)',  g4: '73 (46%)',  max: 160, color: '#34d399' },
  { label: 'Edexcel English Language',g9: '122 (76%)', g5: '83 (52%)',  g4: '73 (46%)',  max: 160, color: '#6366f1' },
];

const OCR_FAQS = [
  {
    question: 'Why is OCR GCSE Maths out of 300 marks?',
    answer: 'Unlike AQA and Edexcel (which sum three 80-mark papers for a total of 240), OCR designs their GCSE Maths assessment using three 100-mark papers. Therefore, the total raw mark for OCR GCSE Maths is 300. You must never compare an OCR raw mark directly to another board without calculating the percentage first.',
  },
  {
    question: 'When are the OCR GCSE grade boundaries for 2026 released?',
    answer: 'OCR 2026 GCSE grade boundaries will be officially published at 8:00am on Thursday 20 August 2026 (GCSE Results Day). The 2025 OCR boundaries shown on this page are the most recent official data available. GradesNova updates immediately when 2026 data is released.',
  },
  {
    question: 'What is the OCR grade 9 boundary for GCSE Maths 2026?',
    answer: 'In 2025, the OCR GCSE Maths Higher grade 9 boundary was 258 out of 300 (86%). The 2026 OCR Maths boundary will be confirmed on Results Day 20 August 2026. Given the year-on-year trend, boundaries may shift slightly based on paper difficulty.',
  },
  {
    question: 'What is the OCR GCSE Maths grade 4 pass mark?',
    answer: 'In 2025, the OCR GCSE Maths Higher grade 4 (standard pass) boundary was 47 out of 300 raw marks (15.6%). For Foundation tier it was 134 out of 300 (44.6%). Students falling below grade 4 must resit post-16.',
  },
  {
    question: 'What is a grade 9 in OCR Computer Science?',
    answer: 'In the 2025 series, a grade 9 in OCR GCSE Computer Science (which is marked out of 180 total raw marks) required 150 raw marks. A grade 4 required 70 marks.',
  },
  {
    question: 'Will OCR 2026 grade boundaries be higher or lower than 2025?',
    answer: 'This depends entirely on the difficulty of the 2026 OCR papers. Ofqual uses a comparable outcomes process to ensure grading remains fair year-on-year. If the 2026 exams are harder, the boundaries will drop. If they are easier, the boundaries will rise.',
  },
];

// ─────────────────────────────────────────────
// SCHEMA MARKUP (static, defined at module level)
// ─────────────────────────────────────────────
const schemaBreadcrumb = {
  '@context': 'https://schema.org', '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://gradesnova.com' },
    { '@type': 'ListItem', position: 2, name: 'GCSE Calculators', item: 'https://gradesnova.com/exams/gcse' },
    { '@type': 'ListItem', position: 3, name: 'OCR Grade Boundaries', item: 'https://gradesnova.com/exams/gcse/ocr' },
  ],
};
const schemaFAQ = {
  '@context': 'https://schema.org', '@type': 'FAQPage',
  mainEntity: OCR_FAQS.map(f => ({
    '@type': 'Question', name: f.question,
    acceptedAnswer: { '@type': 'Answer', text: f.answer },
  })),
};
const schemaTool = {
  '@context': 'https://schema.org', '@type': 'WebApplication',
  name: 'OCR GCSE Grade Boundaries Calculator 2026',
  url: 'https://gradesnova.com/exams/gcse/ocr',
  description: 'OCR GCSE grade boundaries calculator 2026. Enter your raw mark, instantly find your grade. Official OCR data. 2026 boundaries live on 20 Aug 2026.',
  applicationCategory: 'EducationalApplication', operatingSystem: 'Any',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'GBP' },
  provider: { '@type': 'Organization', name: 'GradesNova', url: 'https://gradesnova.com' },
  dateModified: '2026-05-26',
};
const schemaDataset = {
  '@context': 'https://schema.org', '@type': 'Dataset',
  name: 'OCR GCSE Grade Boundaries 2026',
  description: 'Official GCSE grade boundary data for OCR (Oxford Cambridge and RSA) from the June 2025 exam series. Includes Maths, English Language, English Literature, Biology, Chemistry, Physics, History, Geography and Computer Science.',
  url: 'https://gradesnova.com/exams/gcse/ocr',
  creator: { '@type': 'Organization', name: 'GradesNova' },
  datePublished: '2025-08-21',
  dateModified: '2026-05-26',
  keywords: 'GCSE, grade boundaries, OCR, Oxford Cambridge and RSA, 2026, raw marks',
  temporalCoverage: '2025/2026',
  spatialCoverage: 'United Kingdom',
  isBasedOn: ['https://www.ocr.org.uk/administration/grade-boundaries/'],
};

// ─────────────────────────────────────────────
// SUB-COMPONENTS (server-renderable)
// ─────────────────────────────────────────────
function OCRSubjectsTable({ rows }: { rows: GCSEBoundary[] }) {
  return (
    <div className="overflow-x-auto">
      <table className="w-full text-sm min-w-[680px]" aria-label="OCR GCSE grade boundaries all subjects 2025">
        <thead>
          <tr className="bg-white/4 border-b border-white/8">
            <th scope="col" className="text-left px-4 py-3 text-xs font-semibold text-slate-400 uppercase tracking-wider">Subject</th>
            <th scope="col" className="text-left px-3 py-3 text-xs font-semibold text-slate-400 uppercase tracking-wider">Tier</th>
            <th scope="col" className="text-center px-2 py-3 text-xs font-bold text-emerald-400">9</th>
            <th scope="col" className="text-center px-2 py-3 text-xs font-bold text-emerald-400">8</th>
            <th scope="col" className="text-center px-2 py-3 text-xs font-bold text-indigo-400">7</th>
            <th scope="col" className="text-center px-2 py-3 text-xs font-bold text-indigo-400">6</th>
            <th scope="col" className="text-center px-2 py-3 text-xs font-bold text-purple-400">5*</th>
            <th scope="col" className="text-center px-2 py-3 text-xs font-bold text-amber-400">4+</th>
            <th scope="col" className="text-center px-2 py-3 text-xs font-semibold text-slate-500">Max</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((b, i) => (
            <tr key={i} className={`border-b border-white/5 last:border-0 ${i % 2 === 0 ? '' : 'bg-white/2'}`}>
              <td className="px-4 py-2.5 font-medium text-slate-200 text-sm">{b.subject}</td>
              <td className="px-3 py-2.5 text-xs text-slate-500">{b.tier}</td>
              <td className="px-2 py-2.5 text-center font-mono text-xs text-emerald-400 font-semibold">{b.boundaries[9] ?? '--'}</td>
              <td className="px-2 py-2.5 text-center font-mono text-xs text-emerald-400">{b.boundaries[8] ?? '--'}</td>
              <td className="px-2 py-2.5 text-center font-mono text-xs text-indigo-400">{b.boundaries[7] ?? '--'}</td>
              <td className="px-2 py-2.5 text-center font-mono text-xs text-indigo-400">{b.boundaries[6] ?? '--'}</td>
              <td className="px-2 py-2.5 text-center font-mono text-xs text-purple-400 font-semibold">{b.boundaries[5] ?? '--'}</td>
              <td className="px-2 py-2.5 text-center font-mono text-xs text-amber-400 font-semibold">{b.boundaries[4] ?? '--'}</td>
              <td className="px-2 py-2.5 text-center font-mono text-xs text-slate-500">{b.maxMark}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function FAQSection() {
  return (
    <section aria-labelledby="faq-heading">
      <h2 id="faq-heading" className="text-2xl font-bold text-white mb-2">
        OCR GCSE grade boundaries 2026 — frequently asked questions
      </h2>
      <p className="text-slate-400 text-sm mb-6">
        Common questions about OCR grade boundaries, raw marks, Results Day, and the 300-mark Maths rule.
      </p>
      <div className="space-y-2">
        {OCR_FAQS.map((faq, i) => (
          <details key={i} className="group bg-[#12141f] border border-white/7 rounded-xl overflow-hidden [&_summary::-webkit-details-marker]:hidden">
            <summary className="w-full flex items-center justify-between px-5 py-4 text-left gap-4 cursor-pointer">
              <span className="text-sm font-medium text-white">{faq.question}</span>
              <ChevronDown size={16} className="text-slate-400 shrink-0 group-open:-rotate-180 transition-transform duration-200" />
            </summary>
            <div className="px-5 pb-4 text-sm text-slate-400 leading-relaxed border-t border-white/6 pt-3">
              <p>{faq.answer}</p>
            </div>
          </details>
        ))}
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────
// PAGE (SERVER COMPONENT)
// ─────────────────────────────────────────────
export default function OCRGCSEPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaBreadcrumb) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaFAQ) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaTool) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaDataset) }} />

      <main className="bg-[#0a0c14] min-h-screen text-white">
        <Navbar />

        {/* HEADER */}
        <header className="bg-[#0d0f1a] border-b border-white/6 py-10 mt-16 relative overflow-hidden">
          <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl pointer-events-none" />
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <nav aria-label="Breadcrumb" className="mb-4">
              <ol className="flex items-center gap-2 text-xs text-slate-500">
                <li><Link href="/" className="hover:text-white transition-colors">Home</Link></li>
                <li aria-hidden="true">›</li>
                <li><Link href="/exams/gcse" className="hover:text-white transition-colors">GCSE Grade Boundaries</Link></li>
                <li aria-hidden="true">›</li>
                <li className="text-slate-400" aria-current="page">OCR</li>
              </ol>
            </nav>
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 rounded-xl flex items-center justify-center text-xl"
                style={{ backgroundColor: `${COLOR}18` }} aria-hidden="true">🔬</div>
              <span className="text-xs font-mono uppercase tracking-widest" style={{ color: `${COLOR}aa` }}>
                OCR · Oxford Cambridge and RSA · GCSE
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white tracking-tight mb-3">
              OCR GCSE Grade Boundaries 2026
            </h1>
            <div className="flex items-center gap-3 mb-5 py-2">
              <span className="text-xs text-slate-400 flex items-center gap-1.5 bg-white/5 px-3 py-1.5 rounded-full border border-white/10">
                <svg className="w-3.5 h-3.5 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Verified against official OCR releases. Updated: 26 May 2026
              </span>
            </div>
            <p className="text-lg text-slate-400 max-w-2xl">
              Dedicated grade boundary calculator for <strong className="text-white font-medium">OCR</strong> exams.
              Enter your raw mark to instantly see your exact 9 to 1 grade. Covers Maths (out of 300 marks), English,
              Sciences, Computer Science and more. Showing <strong className="text-white font-medium">official 2025
              boundaries</strong>, the most recent available. 2026 boundaries published{' '}
              <strong className="text-white font-medium">20 August 2026</strong>.
            </p>
            <div className="flex flex-wrap gap-3 mt-4">
              <span className="text-xs bg-purple-500/15 text-purple-400 border border-purple-500/20 px-3 py-1 rounded-full font-medium">
                2025 data — official OCR
              </span>
              <span className="text-xs bg-white/5 text-slate-400 border border-white/10 px-3 py-1 rounded-full">
                2026 boundaries: 20 Aug 2026
              </span>
            </div>
          </div>
        </header>

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-16">

          {/* CALCULATOR — reuses shared client component, locked to OCR */}
          <GCSECalculatorClient initialBoard="OCR" initialSubject="Maths" />

          {/* KEY FACTS STRIP */}
          <section aria-labelledby="key-facts-heading">
            <h2 id="key-facts-heading" className="sr-only">Key facts about OCR GCSE grade boundaries 2025</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                { icon: '🔬', title: 'Maths Higher — Grade 9', value: '258/300', sub: '86% of total marks',    color: COLOR },
                { icon: '🔬', title: 'Maths Higher — Grade 5', value: '86/300',  sub: '28.6% — strong pass',  color: COLOR },
                { icon: '🔬', title: 'Maths Higher — Grade 4', value: '47/300',  sub: '15.6% — standard pass', color: COLOR },
                { icon: '📝', title: 'English Lang — Grade 9', value: '120/160', sub: '75% of total marks',    color: COLOR },
              ].map(card => (
                <article key={card.title} className="bg-[#12141f] border border-white/8 rounded-xl p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-lg" aria-hidden="true">{card.icon}</span>
                    <span className="text-xs text-slate-400 font-medium">{card.title}</span>
                  </div>
                  <p className="text-2xl font-bold font-mono" style={{ color: card.color }}>{card.value}</p>
                  <p className="text-xs text-slate-500 mt-0.5">{card.sub}</p>
                </article>
              ))}
            </div>
          </section>

          {/* RESULTS DAY CALLOUT */}
          <div className="bg-purple-500/10 border border-purple-500/25 rounded-2xl p-6 flex gap-4 items-start">
            <div className="text-2xl shrink-0" aria-hidden="true">📅</div>
            <div>
              <h2 className="text-base font-bold text-white mb-1">OCR Results Day 2026 — Thursday 20 August 2026</h2>
              <p className="text-sm text-slate-400 leading-relaxed">
                OCR publishes all 2026 GCSE grade boundaries at{' '}
                <strong className="text-white">8:00am on Thursday 20 August 2026</strong>.
                GradesNova updates this calculator with live OCR 2026 data the moment the official boundary documents are released.
              </p>
            </div>
          </div>

          {/* THE 300 MARK RULE EXPLAINER */}
          <section aria-labelledby="ocr-300-rule-heading">
            <h2 id="ocr-300-rule-heading" className="text-2xl font-bold text-white mb-4">
              Why OCR Maths grade boundaries look different (The 300-Mark Rule)
            </h2>
            <p className="text-slate-400 leading-relaxed mb-4 text-sm">
              If you compare OCR GCSE Maths boundaries to AQA or Edexcel, you will notice the raw mark numbers are
              significantly higher. This is <strong className="text-white">not</strong> because OCR is harder or grades
              more harshly — it is simply because the exams are structured differently.
            </p>
            <div className="mt-5 grid sm:grid-cols-2 gap-4">
              <div className="bg-[#12141f] border border-purple-500/20 rounded-xl p-5">
                <p className="text-xs font-semibold uppercase tracking-wider text-purple-400 mb-3">OCR Maths Structure</p>
                <ul className="space-y-2 text-sm text-slate-400">
                  <li className="flex gap-2"><span aria-hidden="true">✓</span><span>3 Papers × 100 marks each</span></li>
                  <li className="flex gap-2"><span aria-hidden="true">✓</span><span>Total Max Mark: <strong className="text-white">300</strong></span></li>
                  <li className="flex gap-2"><span aria-hidden="true">✓</span><span>Example: Grade 4 requires ~47/300</span></li>
                </ul>
              </div>
              <div className="bg-[#12141f] border border-slate-500/20 rounded-xl p-5">
                <p className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-3">AQA & Edexcel Structure</p>
                <ul className="space-y-2 text-sm text-slate-400">
                  <li className="flex gap-2"><span aria-hidden="true">✓</span><span>3 Papers × 80 marks each</span></li>
                  <li className="flex gap-2"><span aria-hidden="true">✓</span><span>Total Max Mark: <strong className="text-white">240</strong></span></li>
                  <li className="flex gap-2"><span aria-hidden="true">✓</span><span>Example: Grade 4 requires ~60/240</span></li>
                </ul>
              </div>
            </div>
            <p className="text-slate-400 leading-relaxed mt-4 text-sm">
              Because of this difference in maximum marks, you must convert the raw mark into a percentage before
              comparing boards. A grade 9 represents the exact same national standard regardless of the board.
            </p>
          </section>

          {/* OCR ALL SUBJECTS 2025 */}
          <section aria-labelledby="ocr-all-heading">
            <h2 id="ocr-all-heading" className="text-2xl font-bold text-white mb-2">
              OCR GCSE grade boundaries 2025 — all subjects
            </h2>
            <p className="text-slate-400 text-sm mb-6">
              Official OCR grade boundaries for all major GCSE subjects, June 2025. 2026 boundaries update live on
              20 August 2026. Verified against official OCR documents.
            </p>
            <OCRSubjectsTable rows={OCR_2025} />
            <p className="text-xs text-slate-600 mt-3">
              Source: OCR June 2025 grade boundary document, published 21 August 2025.
              * Grade 5 = strong pass. + Grade 4 = standard pass.
            </p>
          </section>

          {/* GRADE SYSTEM EXPLAINER */}
          <section aria-labelledby="grades-heading">
            <h2 id="grades-heading" className="text-2xl font-bold text-white mb-2">
              OCR GCSE grading system explained — grades 9 to 1
            </h2>
            <p className="text-slate-400 text-sm mb-6">
              OCR uses the standard 9 to 1 grading scale. Grade 4 is the standard pass. Grade 5 is the strong pass.
              Grade 9 is awarded to roughly the top 4 to 5 percent of students nationally.
            </p>
            <div className="bg-[#12141f] border border-white/8 rounded-xl overflow-hidden">
              <div className="px-5 py-3 border-b border-white/8">
                <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider">New 9 to 1 grades vs old A* to G grades</p>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-xs min-w-[400px]" aria-label="GCSE grade comparison new vs old">
                  <thead>
                    <tr className="bg-white/3 border-b border-white/8">
                      <th scope="col" className="text-left px-4 py-2 text-slate-500 font-semibold">New grade</th>
                      <th scope="col" className="text-left px-4 py-2 text-slate-500 font-semibold">Old grade</th>
                      <th scope="col" className="text-left px-4 py-2 text-slate-500 font-semibold hidden sm:table-cell">Description</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      { n:'9', o:'A* (top)',  d:'High A* — top 4% nationally',   c:'#34d399' },
                      { n:'8', o:'A*',        d:'Low A* / high A',                c:'#34d399' },
                      { n:'7', o:'A',         d:'Low A grade',                    c:'#6366f1' },
                      { n:'6', o:'B (high)',  d:'High B grade',                   c:'#6366f1' },
                      { n:'5', o:'B/C',       d:'Strong pass — low B / high C',  c:'#a855f7' },
                      { n:'4', o:'C (low)',   d:'Standard pass — low C grade',   c:'#f59e0b' },
                      { n:'3', o:'D',         d:'D / high E grade',               c:'#f59e0b' },
                      { n:'2', o:'E/F',       d:'Low E / high F grade',           c:'#ef4444' },
                      { n:'1', o:'F/G',       d:'Low F / G grade',                c:'#6b7280' },
                    ].map((row, i) => (
                      <tr key={row.n} className={`border-b border-white/5 last:border-0 ${i % 2 === 0 ? '' : 'bg-white/2'}`}>
                        <td className="px-4 py-2.5"><span className="text-base font-bold" style={{ color: row.c }}>{row.n}</span></td>
                        <td className="px-4 py-2.5 font-medium text-slate-300">{row.o}</td>
                        <td className="px-4 py-2.5 text-slate-500 hidden sm:table-cell">{row.d}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </section>

          {/* MATHS YEAR-ON-YEAR TREND */}
          <section aria-labelledby="ocr-maths-yoy-heading">
            <h2 id="ocr-maths-yoy-heading" className="text-2xl font-bold text-white mb-2">
              OCR GCSE Maths grade boundaries 2022–2025
            </h2>
            <p className="text-slate-400 text-sm mb-6">
              Four-year trend for OCR GCSE Maths Higher tier (out of 300). The 2026 boundary will be confirmed on Results Day.
            </p>
            <div className="overflow-x-auto rounded-xl border border-white/8">
              <table className="w-full text-sm min-w-[500px]" aria-label="OCR GCSE Maths Higher grade boundaries year on year">
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
                  {OCR_MATHS_YOY.map((row, i) => (
                    <tr key={row.year} className={`border-b border-white/5 last:border-0 ${i === 0 ? 'bg-purple-500/5' : i % 2 !== 0 ? 'bg-white/2' : ''}`}>
                      <td className="px-4 py-3 font-mono font-semibold text-white">{row.year}</td>
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
          </section>

          {/* OCR vs AQA vs EDEXCEL */}
          <section aria-labelledby="ocr-vs-boards-heading">
            <h2 id="ocr-vs-boards-heading" className="text-2xl font-bold text-white mb-2">
              OCR vs AQA vs Edexcel grade boundaries 2025
            </h2>
            <p className="text-slate-400 text-sm mb-6">
              Because OCR Maths is out of 300 marks and AQA/Edexcel are out of 240, we calculate the percentage of
              total marks required to accurately compare the difficulty.
            </p>
            <div className="overflow-x-auto rounded-xl border border-white/8 mt-6">
              <table className="w-full text-sm min-w-[600px]" aria-label="OCR vs AQA vs Edexcel GCSE grade boundaries comparison 2025">
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
                      <td className="px-4 py-2.5 font-medium text-sm" style={{ color: row.color }}>{row.label}</td>
                      <td className="px-3 py-2.5 text-center font-mono text-xs text-emerald-400 font-semibold">{row.g9}</td>
                      <td className="px-3 py-2.5 text-center font-mono text-xs text-purple-400 font-semibold">{row.g5}</td>
                      <td className="px-3 py-2.5 text-center font-mono text-xs text-amber-400 font-semibold">{row.g4}</td>
                      <td className="px-3 py-2.5 text-center font-mono text-xs text-slate-500">{row.max}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* FAQ */}
          <FAQSection />

          {/* OTHER CALCULATORS */}
          <section className="bg-[#12141f] border border-white/7 rounded-2xl p-6" aria-labelledby="other-tools-heading">
            <h2 id="other-tools-heading" className="text-sm font-semibold text-slate-300 mb-4">Other free calculators</h2>
            <div className="flex flex-wrap gap-2">
              {[
                { id: 'gcse/aqa',     name: 'AQA Boundaries 2026',      color: '#34d399' },
                { id: 'gcse/edexcel', name: 'Edexcel Boundaries 2026',  color: '#6366f1' },
                { id: 'gcse/wjec',   name: 'WJEC Boundaries 2026',     color: '#f59e0b' },
                { id: 'gcse',         name: 'All Boards Comparison',     color: '#ec4899' },
                { id: 'a-levels',     name: 'A-Level Grade Boundaries',  color: '#ec4899' },
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
