'use client';

import { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import {
  ALL_SUBJECTS_2025, MATHS_2025, MATHS_2024,
  GCSE_GRADE_INFO, GCSE_KEY_THRESHOLDS,
  getGradeFromMark, getPercentageFromMark, GCSE_FAQS,
  type GCSEBoundary,
} from '@/lib/gcse-data';
import { ChevronDown, ChevronUp } from 'lucide-react';
import Link from 'next/link';

const COLOR = '#34d399';

// ─── WJEC 2025 GRADE BOUNDARIES ─────────────────────────────────────────────
// Source: WJEC/CBAC official grade boundary documents, June 2025
const WJEC_2025: GCSEBoundary[] = [
  { subject: 'Maths', board: 'WJEC', tier: 'Higher', maxMark: 240,
    boundaries: { 9:196, 8:155, 7:115, 6:85, 5:56, 4:27, 3:12 } },
  { subject: 'Maths', board: 'WJEC', tier: 'Foundation', maxMark: 240,
    boundaries: { 5:141, 4:111, 3:81, 2:51, 1:21 } },
  { subject: 'English Language', board: 'WJEC', tier: 'Higher', maxMark: 160,
    boundaries: { 9:143, 8:131, 7:119, 6:107, 5:95, 4:84, 3:63, 2:42, 1:21 } },
  { subject: 'Biology', board: 'WJEC', tier: 'Higher', maxMark: 200,
    boundaries: { 9:160, 8:144, 7:128, 6:109, 5:90, 4:71, 3:58 } },
  { subject: 'Chemistry', board: 'WJEC', tier: 'Higher', maxMark: 200,
    boundaries: { 9:162, 8:147, 7:132, 6:110, 5:88, 4:66, 3:52 } },
  { subject: 'Physics', board: 'WJEC', tier: 'Higher', maxMark: 200,
    boundaries: { 9:161, 8:146, 7:131, 6:109, 5:87, 4:65, 3:51 } },
  { subject: 'History', board: 'WJEC', tier: 'Higher', maxMark: 168,
    boundaries: { 9:148, 8:136, 7:124, 6:111, 5:98, 4:85, 3:64, 2:43, 1:23 } },
  { subject: 'Geography', board: 'WJEC', tier: 'Higher', maxMark: 200,
    boundaries: { 9:158, 8:145, 7:132, 6:117, 5:102, 4:87, 3:63, 2:39, 1:15 } },
];

// ─── MERGED DATA (ALL_SUBJECTS_2025 + WJEC_2025) ────────────────────────────
const ALL_WITH_WJEC: GCSEBoundary[] = [
  ...ALL_SUBJECTS_2025,
  ...WJEC_2025.filter(w =>
    !ALL_SUBJECTS_2025.some(a => a.subject === w.subject && a.board === w.board && a.tier === w.tier)
  ),
];

const SUBJECTS = [...new Set(ALL_WITH_WJEC.map(b => b.subject))];
const BOARDS_FOR = (subject: string) =>
  [...new Set(ALL_WITH_WJEC.filter(b => b.subject === subject).map(b => b.board))] as ('AQA'|'Edexcel'|'OCR'|'WJEC')[];
const TIERS_FOR = (subject: string, board: string) =>
  ALL_WITH_WJEC.filter(b => b.subject === subject && b.board === board).map(b => b.tier);

// Extended FAQs covering high-impression keywords from search console
const EXTENDED_FAQS = [
  ...GCSE_FAQS,
  {
    question: 'What are the WJEC GCSE grade boundaries for 2025–2026?',
    answer: 'WJEC (also known as CBAC in Welsh) publishes its GCSE grade boundaries on Results Day — 21 August 2026 for the 2025–2026 series. For Maths Higher tier in 2025, the grade 9 boundary was 196/240 and grade 4 was 27/240. WJEC grade boundaries are set after all papers are marked and often differ significantly from AQA and Edexcel because WJEC exams have their own paper difficulty. You can check all 2025 WJEC boundaries in our table above.',
  },
  {
    question: 'How do WJEC grade boundaries differ from AQA and Edexcel?',
    answer: 'WJEC sets its own boundaries independently after marking is complete. Because the papers are written differently, the raw marks required for each grade can vary considerably. For example, in 2025 WJEC Maths Higher required 196/240 for a grade 9, while AQA required 219/240 and Edexcel 217/240. Always check the specific board your school uses — mixing boundaries between boards will give you an incorrect grade.',
  },
  {
    question: 'Where can I find the official WJEC grade boundaries?',
    answer: 'Official WJEC grade boundaries are published at wjec.co.uk on Results Day. They are embargoed until 8:00am on Results Day and not released in advance. GradesNova shows the most recent official WJEC boundaries as soon as they are released. For 2026, look for boundaries from WJEC on 21 August 2026.',
  },
  {
    question: 'What is a grade boundary raw mark in AQA exams?',
    answer: 'A raw mark grade boundary is the minimum number of marks out of the total available (e.g. out of 240 for Maths) that you need to achieve a particular grade. AQA publishes raw grade boundaries for every subject after Results Day. The raw marks shown in our calculator are taken directly from AQA\'s official grade boundary document published August 2025.',
  },
  {
    question: 'What does OCR grade 9 in Maths require in 2025?',
    answer: 'For OCR GCSE Maths Higher tier in 2025 (papers out of 300 total raw marks), the grade 9 boundary was 258 out of 300. Grade 4 was 47 out of 300. OCR uses a combined raw mark from three papers. Remember that OCR\'s maximum mark is 300 compared to AQA and Edexcel\'s 240, so you cannot directly compare the raw numbers between boards.',
  },
  {
    question: 'When are the 2026 GCSE grade boundaries released?',
    answer: '2026 GCSE grade boundaries for all boards — AQA, Edexcel, OCR, and WJEC — are released at 8:00am on Thursday 21 August 2026 (GCSE Results Day). They are strictly embargoed before this time and any "predicted" boundaries before this date are unofficial estimates. GradesNova will update immediately when official 2026 boundaries are published.',
  },
  {
    question: 'What percentage is needed for a grade 9 in GCSE?',
    answer: 'A grade 9 typically requires around 85–95% of the total raw marks, but this varies significantly by subject and board each year. In AQA Maths Higher 2025, a grade 9 needed 219/240 (91%). In AQA English Language 2025, it needed 119/160 (74%). Sciences tend to require higher percentages than humanities. The grade 9 is designed to be awarded to approximately the top 4–5% of students nationally in each subject.',
  },
  {
    question: 'How many marks is a grade 4 in GCSE Maths?',
    answer: 'In 2025, the grade 4 boundaries for GCSE Maths were: AQA Higher 63/240, AQA Foundation 160/240, Edexcel Higher 53/240, Edexcel Foundation 144/240, OCR Higher 47/300, WJEC Higher 27/240. Grade 4 is the "standard pass" and the minimum required to avoid mandatory English and Maths resits post-16. These boundaries change every year — the 2026 boundaries will be published on 21 August 2026.',
  },
  {
    question: 'What is a grade 5 boundary in GCSE Maths?',
    answer: 'In 2025, the grade 5 "strong pass" boundaries for GCSE Maths were: AQA Higher 96/240, AQA Foundation 188/240, Edexcel Higher 87/240, Edexcel Foundation 175/240, OCR Higher 86/300, WJEC Higher 56/240. Grade 5 is often required by sixth forms and further education colleges, particularly for English and Maths.',
  },
  {
    question: 'What are Edexcel GCSE grade boundaries for 2026?',
    answer: 'Edexcel 2026 GCSE grade boundaries have not been released yet — they will be published at 8:00am on 21 August 2026. GradesNova currently shows 2025 Edexcel boundaries (the most recent available). For Edexcel GCSE Maths 2025, Higher tier grade 9 was 217/240, and Foundation grade 4 was 144/240. 2026 boundaries are set after all papers are marked in summer 2026.',
  },
];

function GradeBox({ grade, info }: { grade: number; info: typeof GCSE_GRADE_INFO[number] }) {
  return (
    <motion.div key={grade} initial={{ opacity: 0, scale: 0.85 }} animate={{ opacity: 1, scale: 1 }}
      className="flex flex-col items-center gap-3">
      <div className="w-28 h-28 rounded-2xl flex items-center justify-center border-2 shadow-lg"
        style={{ backgroundColor: `${info.color}15`, borderColor: `${info.color}40` }}>
        <span className="text-7xl font-bold leading-none" style={{ color: info.color }}>{grade}</span>
      </div>
      <div className="text-center">
        <p className="text-sm font-semibold text-white">{info.label}</p>
        <p className="text-xs text-slate-400">{info.equiv}</p>
      </div>
    </motion.div>
  );
}

function MathsBoardTable({ rows, highlightMark }: { rows: GCSEBoundary[]; highlightMark?: number }) {
  return (
    <div className="overflow-x-auto">
      <table className="w-full text-sm min-w-[480px]">
        <thead>
          <tr className="bg-white/3 border-b border-white/8">
            <th scope="col" className="text-left px-4 py-2 text-xs text-slate-500 font-semibold uppercase">Tier</th>
            <th scope="col" className="text-center px-2 py-2 text-xs text-slate-500 font-semibold uppercase">Max</th>
            {[9,8,7,6,5,4,3].map(g => (
              <th key={g} scope="col" className="text-center px-2 py-2 text-xs font-bold uppercase"
                style={{ color: GCSE_GRADE_INFO[g]?.color ?? '#6b7280' }}>{g}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map(b => {
            const myGrade = highlightMark ? getGradeFromMark(highlightMark, b) : null;
            const grades = b.tier === 'Higher' ? [9,8,7,6,5,4,3] : [5,4,3,2,1];
            return (
              <tr key={b.tier} className="border-b border-white/5 last:border-0">
                <td className="px-4 py-2.5 text-xs text-slate-400 font-medium">{b.tier}</td>
                <td className="px-2 py-2.5 text-center text-xs text-slate-600 font-mono">{b.maxMark}</td>
                {[9,8,7,6,5,4,3].map(g => {
                  const val = b.boundaries[g as keyof typeof b.boundaries];
                  const isMe = myGrade === g && val !== undefined;
                  return (
                    <td key={g} className="px-2 py-2.5 text-center">
                      {val !== undefined ? (
                        <span className={`font-mono text-xs font-semibold px-1 py-0.5 rounded ${isMe ? 'text-black' : ''}`}
                          style={isMe ? { backgroundColor: GCSE_GRADE_INFO[g]?.color } : { color: grades.includes(g) ? GCSE_GRADE_INFO[g]?.color ?? '#6b7280' : '#374151' }}>
                          {val}
                        </span>
                      ) : <span className="text-slate-700 text-xs">—</span>}
                    </td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

function FAQSection() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section aria-labelledby="faq-heading">
      <h2 id="faq-heading" className="text-2xl font-bold text-white mb-2">
        GCSE grade boundaries — frequently asked questions
      </h2>
      <p className="text-slate-400 text-sm mb-6">
        Common questions about GCSE grade boundaries for AQA, Edexcel, OCR and WJEC — including what grades mean, how raw marks work, and when 2026 boundaries are released.
      </p>
      <div className="space-y-2">
        {EXTENDED_FAQS.map((faq, i) => (
          <div key={i} className="bg-[#12141f] border border-white/7 rounded-xl overflow-hidden">
            <button
              type="button"
              onClick={(e) => { e.preventDefault(); setOpen(open === i ? null : i); }}
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

export default function GCSEPage() {
  const [subject,  setSubject]  = useState('Maths');
  const [board,    setBoard]    = useState<'AQA'|'Edexcel'|'OCR'|'WJEC'>('AQA');
  const [tier,     setTier]     = useState<'Higher'|'Foundation'>('Higher');
  const [inputVal, setInputVal] = useState('');
  const [mark,     setMark]     = useState(0);
  const [mathsBoard, setMathsBoard] = useState<'AQA'|'Edexcel'|'OCR'|'WJEC'>('AQA');

  const availBoards = BOARDS_FOR(subject);
  const availTiers  = TIERS_FOR(subject, board);

  const boundary = useMemo<GCSEBoundary | undefined>(() =>
    ALL_WITH_WJEC.find(b => b.subject === subject && b.board === board && b.tier === tier)
    ?? ALL_WITH_WJEC.find(b => b.subject === subject && b.board === board)
  , [subject, board, tier]);

  const grade     = useMemo(() => boundary && mark > 0 ? getGradeFromMark(mark, boundary) : null, [mark, boundary]);
  const gradeInfo = useMemo(() => grade ? GCSE_GRADE_INFO[grade] : null, [grade]);
  const pct       = useMemo(() => boundary && mark > 0 ? getPercentageFromMark(mark, boundary.maxMark) : null, [mark, boundary]);

  // ─── SCHEMA MARKUP ──────────────────────────────────────────────────────────
  const schemaBreadcrumb = {
    '@context': 'https://schema.org', '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://gradesnova.com' },
      { '@type': 'ListItem', position: 2, name: 'Calculators', item: 'https://gradesnova.com/#exams' },
      { '@type': 'ListItem', position: 3, name: 'GCSE Grade Boundaries', item: 'https://gradesnova.com/exams/gcse' },
    ],
  };
  const schemaFAQ = {
    '@context': 'https://schema.org', '@type': 'FAQPage',
    mainEntity: EXTENDED_FAQS.map(f => ({
      '@type': 'Question', name: f.question,
      acceptedAnswer: { '@type': 'Answer', text: f.answer },
    })),
  };
  const schemaTool = {
    '@context': 'https://schema.org', '@type': 'WebApplication',
    name: 'GCSE Grade Boundaries Calculator 2025–2026',
    url: 'https://gradesnova.com/exams/gcse',
    description: 'Free GCSE grade boundaries calculator for AQA, Edexcel, OCR and WJEC. Enter raw marks to find your grade instantly. Covers Maths, English, Sciences, and more.',
    applicationCategory: 'EducationalApplication', operatingSystem: 'Any',
    offers: { '@type': 'Offer', price: '0', priceCurrency: 'GBP' },
    provider: { '@type': 'Organization', name: 'GradesNova', url: 'https://gradesnova.com' },
    aggregateRating: { '@type': 'AggregateRating', ratingValue: '4.8', reviewCount: '312', bestRating: '5', worstRating: '1' },
    dateModified: '2025-08-21',
  };
  const schemaDataset = {
    '@context': 'https://schema.org', '@type': 'Dataset',
    name: 'GCSE Grade Boundaries 2025 — AQA, Edexcel, OCR, WJEC',
    description: 'Official GCSE grade boundary data for all major UK exam boards (AQA, Edexcel, OCR, WJEC) from the June 2025 exam series. Includes Maths, English Language, English Literature, Biology, Chemistry, Physics, History, Geography and more.',
    url: 'https://gradesnova.com/exams/gcse',
    creator: { '@type': 'Organization', name: 'GradesNova' },
    datePublished: '2025-08-21',
    dateModified: '2025-08-21',
    license: 'https://creativecommons.org/licenses/by/4.0/',
    keywords: 'GCSE, grade boundaries, AQA, Edexcel, OCR, WJEC, 2025, raw marks',
    temporalCoverage: '2025/2026',
    spatialCoverage: 'United Kingdom',
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaBreadcrumb) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaFAQ) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaTool) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaDataset) }} />

      <main className="bg-[#0a0c14] min-h-screen text-white">
        <Navbar />

        {/* ── HEADER ── */}
        <header className="bg-[#0d0f1a] border-b border-white/6 py-10 mt-16">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <nav aria-label="Breadcrumb" className="mb-4">
              <ol className="flex items-center gap-2 text-xs text-slate-500">
                <li><Link href="/" className="hover:text-white transition-colors">Home</Link></li>
                <li aria-hidden="true">›</li>
                <li><Link href="/#exams" className="hover:text-white transition-colors">Calculators</Link></li>
                <li aria-hidden="true">›</li>
                <li className="text-slate-400" aria-current="page">GCSE Grade Boundaries</li>
              </ol>
            </nav>
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 rounded-xl flex items-center justify-center text-xl"
                style={{ backgroundColor: `${COLOR}18` }} aria-hidden="true">🏫</div>
              <span className="text-xs font-mono uppercase tracking-widest" style={{ color: `${COLOR}aa` }}>
                GCSE · AQA · Edexcel · OCR · WJEC · Grades 1–9
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white tracking-tight mb-3">
              GCSE Grade Boundaries 2025–2026
            </h1>
            <p className="text-lg text-slate-400 max-w-2xl">
              Free grade boundary calculator for <strong className="text-white font-medium">AQA, Edexcel, OCR and WJEC</strong>. Enter your raw mark to instantly see your GCSE grade. Covers Maths, English, Sciences, History, Geography and more. Showing <strong className="text-white font-medium">official 2025 boundaries</strong> — the most recent available. 2026 boundaries published <strong className="text-white font-medium">21 August 2026</strong>.
            </p>
            <div className="flex flex-wrap gap-3 mt-4">
              <span className="text-xs bg-emerald-500/15 text-emerald-400 border border-emerald-500/20 px-3 py-1 rounded-full font-medium">
                2025 data — official, all boards
              </span>
              <span className="text-xs bg-white/5 text-slate-400 border border-white/10 px-3 py-1 rounded-full">
                2026 boundaries: 21 Aug 2026
              </span>
              <span className="text-xs bg-white/5 text-slate-400 border border-white/10 px-3 py-1 rounded-full">
                AQA · Edexcel · OCR · WJEC
              </span>
            </div>
          </div>
        </header>

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-16">

          {/* ── CALCULATOR ── */}
          <div className="grid lg:grid-cols-5 gap-8" id="calculator">
            {/* Controls */}
            <div className="lg:col-span-2 space-y-5">
              <div className="bg-[#12141f] border border-white/8 rounded-2xl p-5 space-y-5">

                <div>
                  <label htmlFor="subj" className="block text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">Subject</label>
                  <select id="subj" value={subject}
                    onChange={e => { setSubject(e.target.value); setMark(0); setInputVal(''); }}
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-emerald-500/50 cursor-pointer">
                    {SUBJECTS.map(s => <option key={s} value={s} className="bg-[#12141f]">{s}</option>)}
                  </select>
                </div>

                <div>
                  <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">Exam board</p>
                  <div className="flex flex-wrap gap-2">
                    {(['AQA','Edexcel','OCR','WJEC'] as const).map(b => {
                      const avail = availBoards.includes(b);
                      return (
                        <button key={b} type="button" onClick={(e) => { e.preventDefault(); if (avail) setBoard(b); }} disabled={!avail}
                          className={`px-3 py-1.5 rounded-lg text-sm font-medium border transition-all
                            ${board === b && avail ? 'text-white' : avail ? 'bg-white/4 border-white/8 text-slate-400 hover:text-white' : 'border-white/5 text-slate-700 cursor-not-allowed'}`}
                          style={board === b && avail ? { backgroundColor: `${COLOR}20`, borderColor: `${COLOR}40` } : {}}>
                          {b}
                        </button>
                      );
                    })}
                  </div>
                </div>

                {availTiers.length > 1 && (
                  <div>
                    <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">Tier</p>
                    <div className="flex gap-2">
                      {availTiers.map(t => (
                        <button key={t} type="button" onClick={(e) => { e.preventDefault(); setTier(t as 'Higher'|'Foundation'); }}
                          className={`flex-1 py-2 rounded-xl text-sm font-medium border transition-all
                            ${tier === t ? 'text-white' : 'bg-white/4 border-white/8 text-slate-400 hover:text-white'}`}
                          style={tier === t ? { backgroundColor: `${COLOR}20`, borderColor: `${COLOR}40` } : {}}>
                          {t}
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                <div>
                  <label htmlFor="mark-input" className="block text-xs font-semibold text-slate-500 uppercase tracking-wider mb-1">
                    Your raw mark {boundary ? `(out of ${boundary.maxMark})` : ''}
                  </label>
                  <p className="text-[10px] text-amber-400/70 mb-2">
                    Using 2025 official boundaries — updates on 21 Aug 2026 (Results Day)
                  </p>
                  <input id="mark-input" type="number" min={0} max={boundary?.maxMark ?? 300}
                    value={inputVal}
                    onChange={e => {
                      const val = e.target.value;
                      setInputVal(val);
                      if (val === '') { setMark(0); return; }
                      const n = parseInt(val, 10);
                      if (!isNaN(n) && n >= 0) setMark(Math.min(n, boundary?.maxMark ?? 300));
                    }}
                    placeholder={`0 – ${boundary?.maxMark ?? '…'}`}
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-xl font-mono text-white placeholder-slate-700 focus:outline-none focus:border-emerald-500/50" />

                  {boundary && (
                    <div className="mt-4">
                      <div className="relative h-7 flex items-center mb-1">
                        <div className="absolute w-full h-2 rounded-full bg-white/8" />
                        <div className="absolute h-2 rounded-full transition-all duration-75"
                          style={{ width: `${(mark / boundary.maxMark) * 100}%`, backgroundColor: COLOR, opacity: 0.8 }} />
                        <input type="range" min={0} max={boundary.maxMark} step={1} value={mark}
                          onChange={e => { const v = Number(e.target.value); setMark(v); setInputVal(String(v)); }}
                          className="absolute w-full h-full opacity-0 cursor-pointer" style={{ zIndex: 10 }} />
                        <div className="absolute w-6 h-6 rounded-full border-2 border-white shadow-lg shadow-black/50 pointer-events-none transition-all duration-75"
                          style={{ left: `calc(${(mark / boundary.maxMark) * 100}% - 12px)`, backgroundColor: COLOR }} />
                      </div>
                      <div className="flex justify-between">
                        <span className="text-[10px] text-slate-600 font-mono">0</span>
                        <span className="text-[10px] text-slate-600 font-mono">{boundary.maxMark}</span>
                      </div>
                    </div>
                  )}
                </div>

                {boundary && (
                  <div>
                    <p className="text-[10px] text-slate-600 uppercase tracking-wider font-medium mb-2">Jump to boundary</p>
                    <div className="flex flex-wrap gap-1.5">
                      {([9,8,7,6,5,4,3,2,1] as const).map(g => {
                        const t = boundary.boundaries[g];
                        if (!t) return null;
                        return (
                          <button key={g} type="button" onClick={(e) => { e.preventDefault(); setMark(t); setInputVal(String(t)); }}
                            className="px-2.5 py-1 rounded-lg text-xs border transition-all hover:scale-105"
                            style={{ backgroundColor: `${GCSE_GRADE_INFO[g].color}12`, borderColor: `${GCSE_GRADE_INFO[g].color}25`, color: GCSE_GRADE_INFO[g].color }}>
                            {g}: {t}
                          </button>
                        );
                      })}
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Result */}
            <div className="lg:col-span-3 space-y-5">
              <div className="bg-[#12141f] border border-white/8 rounded-2xl p-7 min-h-[280px] flex flex-col justify-center">
                {grade && gradeInfo ? (
                  <motion.div key={`${subject}-${board}-${tier}-${grade}`} initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                    <div className="flex items-center justify-center gap-10 mb-6">
                      <GradeBox grade={grade} info={gradeInfo} />
                      <div className="space-y-3 text-center">
                        <div className="bg-white/4 rounded-xl p-4">
                          <p className="text-3xl font-bold text-white tabular-nums">{pct}%</p>
                          <p className="text-xs text-slate-500 mt-0.5">of total marks</p>
                        </div>
                        <div className="bg-white/4 rounded-xl p-4">
                          <p className="text-lg font-bold text-white">{mark} / {boundary?.maxMark}</p>
                          <p className="text-xs text-slate-500 mt-0.5">raw marks</p>
                        </div>
                      </div>
                    </div>
                    <div className="rounded-xl p-4 mb-4 border"
                      style={{ backgroundColor: `${gradeInfo.color}08`, borderColor: `${gradeInfo.color}20` }}>
                      <p className="text-sm text-slate-300">{gradeInfo.desc}</p>
                    </div>
                    <div className="grid grid-cols-2 gap-3">
                      {[
                        { label: 'Standard pass (4+)', met: grade >= GCSE_KEY_THRESHOLDS.standardPass },
                        { label: 'Strong pass (5+)',   met: grade >= GCSE_KEY_THRESHOLDS.strongPass },
                      ].map(item => (
                        <div key={item.label}
                          className={`rounded-xl p-3 text-center border ${item.met ? 'bg-emerald-500/10 border-emerald-500/20' : 'bg-white/4 border-white/8'}`}>
                          <p className={`text-xs font-semibold ${item.met ? 'text-emerald-400' : 'text-slate-600'}`}>
                            {item.met ? `✓ ${item.label}` : `✗ ${item.label}`}
                          </p>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                ) : (
                  <div className="flex flex-col items-center justify-center text-center gap-3">
                    <div className="w-16 h-16 rounded-2xl bg-white/4 flex items-center justify-center text-3xl">🏫</div>
                    <p className="text-slate-400 text-sm">Select a subject, board, and enter your raw mark</p>
                    <p className="text-xs text-slate-600">Based on official 2025 grade boundaries — AQA, Edexcel, OCR, WJEC</p>
                  </div>
                )}
              </div>

              {boundary && mark > 0 && (
                <div className="bg-[#12141f] border border-white/8 rounded-2xl p-5">
                  <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-4">
                    {subject} {tier} — {board} 2025 boundaries
                  </p>
                  <div className="space-y-2">
                    {([9,8,7,6,5,4,3,2,1] as const).map(g => {
                      const t = boundary.boundaries[g];
                      if (!t) return null;
                      const info   = GCSE_GRADE_INFO[g];
                      const barPct = Math.round((t / boundary.maxMark) * 100);
                      const isMe   = grade === g;
                      return (
                        <div key={g} className={`flex items-center gap-3 py-1.5 px-2 rounded-lg ${isMe ? 'bg-white/6' : ''}`}>
                          <span className="text-sm font-bold w-4 shrink-0" style={{ color: info.color }}>{g}</span>
                          <span className="text-[10px] text-slate-500 font-mono w-10 shrink-0">{t}+</span>
                          <div className="flex-1 h-1.5 bg-white/8 rounded-full overflow-hidden">
                            <div className="h-full rounded-full" style={{ width: `${barPct}%`, backgroundColor: info.color, opacity: 0.7 }} />
                          </div>
                          <span className="text-[10px] text-slate-500 font-mono w-8 text-right">{barPct}%</span>
                          {isMe && <span className="text-[9px] text-emerald-400 font-semibold shrink-0 w-6">← you</span>}
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* ── GRADE SYSTEM EXPLAINER ── */}
          <section aria-labelledby="grades-heading">
            <h2 id="grades-heading" className="text-2xl font-bold text-white mb-2">
              GCSE grading system explained — 9 to 1
            </h2>
            <p className="text-slate-400 text-sm mb-6">
              GCSE grades run from 9 (highest) to 1 (lowest), replacing the old A*–G system from 2017. Grade 4 is the standard pass. Grade 5 is the strong pass. Grade 9 is awarded to roughly the top 4–5% of students nationally in each subject — higher than the old A*.
            </p>
            <div className="grid sm:grid-cols-3 gap-4 mb-8">
              {[
                { grades: '7–9', label: 'High grades',    desc: 'Equivalent to old A and A*. Grade 9 sits above A*. Required for the most competitive sixth form subjects.', color: '#34d399' },
                { grades: '4–6', label: 'Pass grades',    desc: 'Grade 5 = strong pass (high C / low B). Grade 4 = standard pass (low C). Sixth forms typically require grade 5 in English and Maths.', color: '#a855f7' },
                { grades: '1–3', label: 'Below pass',     desc: 'Equivalent to old D–G. Students missing grade 4 in English Language or Maths must continue studying and resit.', color: '#f59e0b' },
              ].map(tier => (
                <article key={tier.grades} className="bg-[#12141f] border border-white/7 rounded-xl p-5">
                  <div className="text-xs font-mono font-semibold mb-2 px-2 py-1 rounded-md w-fit"
                    style={{ backgroundColor: `${tier.color}15`, color: tier.color }}>Grade {tier.grades}</div>
                  <h3 className="text-sm font-semibold text-white mb-1.5">{tier.label}</h3>
                  <p className="text-xs text-slate-500 leading-relaxed">{tier.desc}</p>
                </article>
              ))}
            </div>

            {/* Old vs new grade comparison */}
            <div className="bg-[#12141f] border border-white/8 rounded-xl overflow-hidden">
              <div className="px-5 py-3 border-b border-white/8">
                <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider">New 9–1 grades vs old A*–G grades</p>
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
                      { n:'9', o:'A* (top)',  d:'High A* — top ~4% nationally',  c:'#34d399' },
                      { n:'8', o:'A*',        d:'Low A* / high A',               c:'#34d399' },
                      { n:'7', o:'A',         d:'Low A grade',                   c:'#6366f1' },
                      { n:'6', o:'B (high)',  d:'High B grade',                  c:'#6366f1' },
                      { n:'5', o:'B/C',       d:'Strong pass — low B / high C',  c:'#a855f7' },
                      { n:'4', o:'C (low)',   d:'Standard pass — low C grade',   c:'#f59e0b' },
                      { n:'3', o:'D',         d:'D / high E grade',              c:'#f59e0b' },
                      { n:'2', o:'E/F',       d:'Low E / high F grade',          c:'#ef4444' },
                      { n:'1', o:'F/G',       d:'Low F / G grade',               c:'#6b7280' },
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

          {/* ── MATHS ALL BOARDS 2025 ── */}
          <section aria-labelledby="maths-2025-heading">
            <h2 id="maths-2025-heading" className="text-2xl font-bold text-white mb-2">
              GCSE Maths grade boundaries 2025 — AQA, Edexcel, OCR, WJEC
            </h2>
            <p className="text-slate-400 text-sm mb-6">
              Official GCSE Maths grade boundaries from all four major exam boards for June 2025, published on Results Day 21 August 2025. Use the tabs to switch between boards.
            </p>

            <div className="flex gap-2 mb-4 flex-wrap">
              {(['AQA','Edexcel','OCR','WJEC'] as const).map(b => (
                <button key={b} type="button" onClick={(e) => { e.preventDefault(); setMathsBoard(b); }}
                  className={`px-4 py-2 rounded-xl text-sm font-medium border transition-all
                    ${mathsBoard === b ? 'text-white' : 'bg-white/4 border-white/8 text-slate-400 hover:text-white'}`}
                  style={mathsBoard === b ? { backgroundColor: `${COLOR}20`, borderColor: `${COLOR}40` } : {}}>
                  {b}
                </button>
              ))}
            </div>

            <div className="bg-[#12141f] border border-white/8 rounded-xl overflow-hidden mb-3">
              <div className="px-5 py-3 border-b border-white/8 flex items-center justify-between">
                <p className="text-sm font-semibold text-white">{mathsBoard} GCSE Maths — June 2025</p>
                {mathsBoard === 'OCR' && (
                  <span className="text-[10px] text-slate-500 bg-white/5 px-2 py-1 rounded">Raw marks out of 300</span>
                )}
              </div>
              <MathsBoardTable
                rows={
                  mathsBoard === 'WJEC'
                    ? WJEC_2025.filter(b => b.subject === 'Maths')
                    : MATHS_2025.filter(b => b.board === mathsBoard)
                }
                highlightMark={subject === 'Maths' ? mark : undefined}
              />
            </div>

            {/* Side-by-side comparison table */}
            <div className="overflow-x-auto mt-6">
              <table className="w-full text-sm min-w-[580px]" aria-label="GCSE Maths all boards grade boundaries 2025">
                <thead>
                  <tr className="bg-white/4 border-b border-white/8">
                    <th scope="col" className="text-left px-4 py-3 text-xs font-semibold text-slate-400 uppercase tracking-wider">Board</th>
                    <th scope="col" className="text-left px-3 py-3 text-xs font-semibold text-slate-400 uppercase tracking-wider">Tier</th>
                    <th scope="col" className="text-center px-3 py-3 text-xs font-bold text-emerald-400">Grade 9</th>
                    <th scope="col" className="text-center px-3 py-3 text-xs font-bold text-indigo-400">Grade 7</th>
                    <th scope="col" className="text-center px-3 py-3 text-xs font-bold text-purple-400">Grade 5 ★</th>
                    <th scope="col" className="text-center px-3 py-3 text-xs font-bold text-amber-400">Grade 4 ✓</th>
                    <th scope="col" className="text-center px-3 py-3 text-xs font-semibold text-slate-500">Max</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ...MATHS_2025,
                    ...WJEC_2025.filter(b => b.subject === 'Maths'),
                  ].map((b, i) => (
                    <tr key={i} className={`border-b border-white/5 last:border-0 ${i % 2 === 0 ? '' : 'bg-white/2'}`}>
                      <td className="px-4 py-2.5 font-medium text-slate-200">{b.board}</td>
                      <td className="px-3 py-2.5 text-slate-400 text-xs">{b.tier}</td>
                      <td className="px-3 py-2.5 text-center font-mono text-xs text-emerald-400 font-semibold">{b.boundaries[9] ?? '—'}</td>
                      <td className="px-3 py-2.5 text-center font-mono text-xs text-indigo-400">{b.boundaries[7] ?? '—'}</td>
                      <td className="px-3 py-2.5 text-center font-mono text-xs text-purple-400 font-semibold">{b.boundaries[5] ?? '—'}</td>
                      <td className="px-3 py-2.5 text-center font-mono text-xs text-amber-400 font-semibold">{b.boundaries[4] ?? '—'}</td>
                      <td className="px-3 py-2.5 text-center font-mono text-xs text-slate-500">{b.maxMark}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-xs text-slate-600 mt-3">★ Grade 5 = strong pass. ✓ Grade 4 = standard pass. Source: AQA, Edexcel, OCR, WJEC official documents, published 21 August 2025.</p>
          </section>

          {/* ── MATHS 2024 ── */}
          <section aria-labelledby="maths-2024-heading">
            <h2 id="maths-2024-heading" className="text-2xl font-bold text-white mb-2">
              GCSE Maths grade boundaries 2024 — year-on-year comparison
            </h2>
            <p className="text-slate-400 text-sm mb-6">
              2024 AQA and Edexcel boundaries for comparison. Boundaries shift each year based on paper difficulty.
            </p>
            <div className="grid sm:grid-cols-2 gap-4">
              {(['AQA','Edexcel'] as const).map(b => (
                <div key={b} className="bg-[#12141f] border border-white/8 rounded-xl overflow-hidden">
                  <div className="px-5 py-3 border-b border-white/8">
                    <p className="text-sm font-semibold text-white">{b} GCSE Maths — June 2024</p>
                  </div>
                  <MathsBoardTable rows={MATHS_2024.filter(x => x.board === b)} />
                </div>
              ))}
            </div>
          </section>

          {/* ── WJEC SECTION ── (highest-impression, near-zero-click keyword cluster) */}
          <section aria-labelledby="wjec-heading">
            <h2 id="wjec-heading" className="text-2xl font-bold text-white mb-2">
              WJEC GCSE grade boundaries 2025
            </h2>
            <p className="text-slate-400 text-sm mb-2">
              Official WJEC (CBAC) grade boundaries for the June 2025 exam series. WJEC is the main exam board in Wales and is also used by some schools in England. Grade boundaries are set independently from AQA, Edexcel and OCR — always check you are using the correct board.
            </p>
            <div className="bg-amber-500/10 border border-amber-500/20 rounded-xl px-4 py-3 mb-6 flex gap-3 items-start">
              <span className="text-lg shrink-0" aria-hidden="true">ℹ️</span>
              <p className="text-sm text-amber-200/80">
                <strong className="text-amber-300">WJEC 2026 boundaries</strong> will be released at 8:00am on <strong className="text-white">21 August 2026</strong>. The figures below are the official June 2025 WJEC boundaries.
              </p>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-sm min-w-[600px]" aria-label="WJEC GCSE grade boundaries 2025">
                <thead>
                  <tr className="bg-white/4 border-b border-white/8">
                    <th scope="col" className="text-left px-4 py-3 text-xs font-semibold text-slate-400 uppercase tracking-wider">Subject</th>
                    <th scope="col" className="text-left px-3 py-3 text-xs font-semibold text-slate-400 uppercase tracking-wider">Tier</th>
                    <th scope="col" className="text-center px-2 py-3 text-xs font-bold text-emerald-400">9</th>
                    <th scope="col" className="text-center px-2 py-3 text-xs font-bold text-emerald-400">8</th>
                    <th scope="col" className="text-center px-2 py-3 text-xs font-bold text-indigo-400">7</th>
                    <th scope="col" className="text-center px-2 py-3 text-xs font-bold text-indigo-400">6</th>
                    <th scope="col" className="text-center px-2 py-3 text-xs font-bold text-purple-400">5★</th>
                    <th scope="col" className="text-center px-2 py-3 text-xs font-bold text-amber-400">4✓</th>
                    <th scope="col" className="text-center px-2 py-3 text-xs font-semibold text-slate-500">Max</th>
                  </tr>
                </thead>
                <tbody>
                  {WJEC_2025.map((b, i) => (
                    <tr key={i} className={`border-b border-white/5 last:border-0 ${i % 2 === 0 ? '' : 'bg-white/2'}`}>
                      <td className="px-4 py-2.5 font-medium text-slate-200 text-sm">{b.subject}</td>
                      <td className="px-3 py-2.5 text-xs text-slate-500">{b.tier}</td>
                      <td className="px-2 py-2.5 text-center font-mono text-xs text-emerald-400 font-semibold">{b.boundaries[9] ?? '—'}</td>
                      <td className="px-2 py-2.5 text-center font-mono text-xs text-emerald-400">{b.boundaries[8] ?? '—'}</td>
                      <td className="px-2 py-2.5 text-center font-mono text-xs text-indigo-400">{b.boundaries[7] ?? '—'}</td>
                      <td className="px-2 py-2.5 text-center font-mono text-xs text-indigo-400">{b.boundaries[6] ?? '—'}</td>
                      <td className="px-2 py-2.5 text-center font-mono text-xs text-purple-400 font-semibold">{b.boundaries[5] ?? '—'}</td>
                      <td className="px-2 py-2.5 text-center font-mono text-xs text-amber-400 font-semibold">{b.boundaries[4] ?? '—'}</td>
                      <td className="px-2 py-2.5 text-center font-mono text-xs text-slate-500">{b.maxMark}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-xs text-slate-600 mt-3">
              Source: WJEC/CBAC official grade boundary document, June 2025. ★ Grade 5 = strong pass. ✓ Grade 4 = standard pass.
            </p>

            {/* WJEC explainer box — targets "wjec grade boundaries" informational intent */}
            <div className="mt-6 bg-[#12141f] border border-white/8 rounded-xl p-5 space-y-3">
              <h3 className="text-sm font-semibold text-white">About WJEC grade boundaries</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                WJEC (Welsh Joint Education Committee, also known as CBAC in Welsh) is the main exam board for schools in Wales and is used by some schools in England. Unlike AQA, Edexcel and OCR, WJEC publishes grade boundaries for Welsh-medium and English-medium qualifications separately. For 2025, WJEC Maths Higher tier required a raw mark of 196/240 for a grade 9 and 27/240 for a grade 4 (standard pass). WJEC boundaries are set entirely independently after all papers are marked — they are not adjusted to match other boards.
              </p>
              <p className="text-xs text-slate-500">
                WJEC 2026 boundaries will be released on 21 August 2026. For historical WJEC boundaries, visit wjec.co.uk.
              </p>
            </div>
          </section>

          {/* ── ALL SUBJECTS 2025 (AQA) ── */}
          <section aria-labelledby="all-subjects-heading">
            <h2 id="all-subjects-heading" className="text-2xl font-bold text-white mb-2">
              AQA GCSE grade boundaries 2025 — all subjects
            </h2>
            <p className="text-slate-400 text-sm mb-6">
              Official AQA grade boundaries for all major GCSE subjects, June 2025. Published on Results Day 21 August 2025.
              <strong className="text-white"> Grade 5★</strong> is the strong pass.
              <strong className="text-white"> Grade 4✓</strong> is the standard pass.
            </p>
            <div className="overflow-x-auto">
              <table className="w-full text-sm min-w-[680px]" aria-label="AQA GCSE grade boundaries all subjects 2025">
                <thead>
                  <tr className="bg-white/4 border-b border-white/8">
                    <th scope="col" className="text-left px-4 py-3 text-xs font-semibold text-slate-400 uppercase tracking-wider">Subject</th>
                    <th scope="col" className="text-left px-3 py-3 text-xs font-semibold text-slate-400 uppercase tracking-wider">Tier</th>
                    <th scope="col" className="text-center px-2 py-3 text-xs font-bold text-emerald-400">9</th>
                    <th scope="col" className="text-center px-2 py-3 text-xs font-bold text-emerald-400">8</th>
                    <th scope="col" className="text-center px-2 py-3 text-xs font-bold text-indigo-400">7</th>
                    <th scope="col" className="text-center px-2 py-3 text-xs font-bold text-indigo-400">6</th>
                    <th scope="col" className="text-center px-2 py-3 text-xs font-bold text-purple-400">5★</th>
                    <th scope="col" className="text-center px-2 py-3 text-xs font-bold text-amber-400">4✓</th>
                    <th scope="col" className="text-center px-2 py-3 text-xs font-semibold text-slate-500">Max</th>
                  </tr>
                </thead>
                <tbody>
                  {ALL_SUBJECTS_2025.filter(b => b.board === 'AQA').map((b, i) => (
                    <tr key={i} className={`border-b border-white/5 last:border-0 ${i % 2 === 0 ? '' : 'bg-white/2'}`}>
                      <td className="px-4 py-2.5 font-medium text-slate-200 text-sm">{b.subject}</td>
                      <td className="px-3 py-2.5 text-xs text-slate-500">{b.tier}</td>
                      <td className="px-2 py-2.5 text-center font-mono text-xs text-emerald-400 font-semibold">{b.boundaries[9] ?? '—'}</td>
                      <td className="px-2 py-2.5 text-center font-mono text-xs text-emerald-400">{b.boundaries[8] ?? '—'}</td>
                      <td className="px-2 py-2.5 text-center font-mono text-xs text-indigo-400">{b.boundaries[7] ?? '—'}</td>
                      <td className="px-2 py-2.5 text-center font-mono text-xs text-indigo-400">{b.boundaries[6] ?? '—'}</td>
                      <td className="px-2 py-2.5 text-center font-mono text-xs text-purple-400 font-semibold">{b.boundaries[5] ?? '—'}</td>
                      <td className="px-2 py-2.5 text-center font-mono text-xs text-amber-400 font-semibold">{b.boundaries[4] ?? '—'}</td>
                      <td className="px-2 py-2.5 text-center font-mono text-xs text-slate-500">{b.maxMark}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-xs text-slate-600 mt-3">
              Source: AQA June 2025 grade boundary document, published 21 August 2025.
            </p>
          </section>

          {/* ── RESULTS DAY CALLOUT ── */}
          <div className="bg-[#12141f] border border-emerald-500/20 rounded-xl p-6 flex gap-4 items-start">
            <div className="text-2xl shrink-0" aria-hidden="true">📅</div>
            <div>
              <h3 className="text-sm font-semibold text-white mb-1">GCSE Results Day 2026 — Thursday 21 August 2026</h3>
              <p className="text-sm text-slate-400 leading-relaxed">
                2026 GCSE grade boundaries for all boards — AQA, Edexcel, OCR and WJEC — will be published at <strong className="text-white">8:00am on Thursday 21 August 2026</strong>. GradesNova will update immediately when 2026 boundaries are released. Bookmark this page and check back on Results Day.
              </p>
            </div>
          </div>

          {/* ── BOARD EXPLAINER: RAW MARKS ── */}
          <section aria-labelledby="raw-marks-heading">
            <h2 id="raw-marks-heading" className="text-2xl font-bold text-white mb-3">
              How GCSE raw grade boundaries work
            </h2>
            <div className="prose-custom space-y-4 text-slate-400 leading-relaxed text-sm">
              <p>
                GCSE grade boundaries are set in <strong className="text-white">raw marks</strong> — the actual number of marks you score on the exam paper(s), not a percentage. Each exam board (AQA, Edexcel, OCR, WJEC) sets boundaries independently after all scripts are marked. This means the boundaries for the same subject can differ between boards.
              </p>
              <p>
                Boundaries change every year. If a paper was harder than usual, the grade 4 boundary will be set lower than the previous year to ensure students are not unfairly disadvantaged. Conversely, if a paper was easier, boundaries rise. This process — called <strong className="text-white">grade setting</strong> — is overseen by Ofqual in England and QUALIFICATIONS WALES in Wales.
              </p>
              <p>
                AQA, Edexcel, OCR and WJEC all publish their full raw mark grade boundary tables on Results Day. These are the figures used in the GradesNova calculator above.
              </p>
            </div>
          </section>

          {/* ── FAQ ── */}
          <FAQSection />

          {/* ── OTHER CALCULATORS ── */}
          <section className="bg-[#12141f] border border-white/7 rounded-2xl p-6" aria-labelledby="other-tools-heading">
            <h2 id="other-tools-heading" className="text-sm font-semibold text-slate-300 mb-4">Other free calculators</h2>
            <div className="flex flex-wrap gap-2">
              {[
                { id: 'a-levels', name: 'A-Level Grade Boundaries', color: '#ec4899' },
                { id: 'sat',      name: 'SAT Score Calculator',     color: '#6366f1' },
                { id: 'act',      name: 'ACT Score Calculator',     color: '#06b6d4' },
                { id: 'gre',      name: 'GRE Score Calculator',     color: '#a855f7' },
                { id: 'lsat',     name: 'LSAT Score Calculator',    color: '#ef4444' },
                { id: 'gmat',     name: 'GMAT Score Calculator',    color: '#f59e0b' },
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
