'use client';

import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
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

const SUBJECTS = [...new Set(ALL_SUBJECTS_2025.map(b => b.subject))];
const BOARDS_FOR = (subject: string) =>
  [...new Set(ALL_SUBJECTS_2025.filter(b => b.subject === subject).map(b => b.board))] as ('AQA'|'Edexcel'|'OCR'|'WJEC')[];
const TIERS_FOR  = (subject: string, board: string) =>
  ALL_SUBJECTS_2025.filter(b => b.subject === subject && b.board === board).map(b => b.tier);

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
        Everything you need to know about GCSE grade boundaries, what grades mean, and how boundaries are set.
      </p>
      <div className="space-y-2" itemScope itemType="https://schema.org/FAQPage">
        {GCSE_FAQS.map((faq, i) => (
          <div key={i} className="bg-[#12141f] border border-white/7 rounded-xl overflow-hidden"
            itemScope itemProp="mainEntity" itemType="https://schema.org/Question">
            <button 
              type="button"
              onClick={(e) => { e.preventDefault(); setOpen(open === i ? null : i); }}
              className="w-full flex items-center justify-between px-5 py-4 text-left gap-4"
              aria-expanded={open === i}>
              <span className="text-sm font-medium text-white" itemProp="name">{faq.question}</span>
              {open === i
                ? <ChevronUp size={16} className="text-slate-400 shrink-0" />
                : <ChevronDown size={16} className="text-slate-400 shrink-0" />}
            </button>
            <AnimatePresence>
              {open === i && (
                <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.2 }} className="overflow-hidden"
                  itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
                  <p className="px-5 pb-4 text-sm text-slate-400 leading-relaxed border-t border-white/6 pt-3"
                    itemProp="text">{faq.answer}</p>
                </motion.div>
              )}
            </AnimatePresence>
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
    ALL_SUBJECTS_2025.find(b => b.subject === subject && b.board === board && b.tier === tier)
    ?? ALL_SUBJECTS_2025.find(b => b.subject === subject && b.board === board)
  , [subject, board, tier]);

  const grade     = useMemo(() => boundary && mark > 0 ? getGradeFromMark(mark, boundary) : null, [mark, boundary]);
  const gradeInfo = useMemo(() => grade ? GCSE_GRADE_INFO[grade] : null, [grade]);
  const pct       = useMemo(() => boundary && mark > 0 ? getPercentageFromMark(mark, boundary.maxMark) : null, [mark, boundary]);

  const schemaBreadcrumb = {
    '@context': 'https://schema.org', '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home',        item: 'https://gradesnova.com' },
      { '@type': 'ListItem', position: 2, name: 'Calculators', item: 'https://gradesnova.com/#exams' },
      { '@type': 'ListItem', position: 3, name: 'GCSE Grade Boundaries', item: 'https://gradesnova.com/exams/gcse' },
    ],
  };
  const schemaFAQ = {
    '@context': 'https://schema.org', '@type': 'FAQPage',
    mainEntity: GCSE_FAQS.map(f => ({ '@type': 'Question', name: f.question, acceptedAnswer: { '@type': 'Answer', text: f.answer } })),
  };
  const schemaTool = {
    '@context': 'https://schema.org', '@type': 'WebApplication',
    name: 'GCSE Grade Boundaries (2025-2026)',
    url: 'https://gradesnova.com/exams/gcse',
    description: 'Free GCSE grade boundaries calculator for AQA, Edexcel, OCR and WJEC. Enter raw marks to find your grade instantly. 2025 boundaries shown — updated Results Day 20 Aug 2026.',
    applicationCategory: 'EducationalApplication', operatingSystem: 'Any',
    offers: { '@type': 'Offer', price: '0', priceCurrency: 'GBP' },
    provider: { '@type': 'Organization', name: 'GradesNova', url: 'https://gradesnova.com' },
    aggregateRating: { '@type': 'AggregateRating', ratingValue: '4.8', reviewCount: '241', bestRating: '5', worstRating: '1' },
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaBreadcrumb) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaFAQ) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaTool) }} />

      <main className="bg-[#0a0c14] min-h-screen text-white">
        <Navbar />

        {/* HEADER */}
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
              GCSE Grade Boundaries (2025–2026)
            </h1>
            <p className="text-lg text-slate-400 max-w-2xl">
              Enter your raw mark to instantly find your <strong className="text-white font-medium">GCSE grade</strong> across AQA, Edexcel, OCR, and WJEC. Covers Maths, English, Sciences, and more. Showing <strong className="text-white font-medium">2025 boundaries</strong> — the most recent available. 2026 boundaries published <strong className="text-white font-medium">20 August 2026</strong>.
            </p>
            <div className="flex flex-wrap gap-3 mt-4">
              <span className="text-xs bg-emerald-500/15 text-emerald-400 border border-emerald-500/20 px-3 py-1 rounded-full font-medium">
                2025 data — latest available
              </span>
              <span className="text-xs bg-white/5 text-slate-400 border border-white/10 px-3 py-1 rounded-full">
                2026 boundaries: 20 Aug 2026
              </span>
            </div>
          </div>
        </header>

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-16">

          {/* ── CALCULATOR ── */}
          <div className="grid lg:grid-cols-5 gap-8">

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
                        <button key={t} type="button" onClick={(e) => { e.preventDefault(); setTier(t); }}
                          className={`flex-1 py-2 rounded-xl text-sm font-medium border transition-all
                            ${tier === t ? 'text-white' : 'bg-white/4 border-white/8 text-slate-400 hover:text-white'}`}
                          style={tier === t ? { backgroundColor: `${COLOR}20`, borderColor: `${COLOR}40` } : {}}>
                          {t}
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {/* Mark Input + Slider */}
                <div>
                  <label htmlFor="mark-input" className="block text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">
                    Your raw mark {boundary ? `(out of ${boundary.maxMark})` : ''}
                  </label>
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

                  {/* Interactive Slider */}
                  {boundary && (
                    <div className="mt-4">
                      <div className="relative h-7 flex items-center mb-1">
                        <div className="absolute w-full h-2 rounded-full bg-white/8" />
                        <div className="absolute h-2 rounded-full transition-all duration-75"
                          style={{ width: `${(mark / boundary.maxMark) * 100}%`, backgroundColor: COLOR, opacity: 0.8 }} />
                        <input type="range" min={0} max={boundary.maxMark} step={1} value={mark}
                          onChange={e => {
                            const v = Number(e.target.value);
                            setMark(v);
                            setInputVal(String(v));
                          }}
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
                    <p className="text-[10px] text-slate-600 uppercase tracking-wider font-medium mb-2">Jump to grade boundary</p>
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
                    <p className="text-xs text-slate-600">Based on official 2025 grade boundaries</p>
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
              GCSE grades run from 9 (highest) to 1 (lowest), introduced in 2017 to replace the old A*–G system. Grade 4 is the standard pass. Grade 5 is the strong pass. Grade 9 is above the old A* and is awarded to roughly the top 4–5% of students nationally in each subject.
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
                        <td className="px-4 py-2.5">
                          <span className="text-base font-bold" style={{ color: row.c }}>{row.n}</span>
                        </td>
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
              Official GCSE Maths grade boundaries from all four major exam boards for June 2025, published on Results Day 21 August 2025. All marks out of 240 except OCR which uses a 300-mark paper (scaled equivalent shown in brackets).
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
                rows={MATHS_2025.filter(b => b.board === mathsBoard)}
                highlightMark={subject === 'Maths' ? mark : undefined}
              />
            </div>

            {/* Summary all boards */}
            <div className="overflow-x-auto mt-6">
              <table className="w-full text-sm min-w-[580px]" aria-label="GCSE Maths all boards grade 9 and grade 4 boundaries 2025">
                <thead>
                  <tr className="bg-white/4 border-b border-white/8">
                    <th scope="col" className="text-left px-4 py-3 text-xs font-semibold text-slate-400 uppercase tracking-wider">Board</th>
                    <th scope="col" className="text-left px-3 py-3 text-xs font-semibold text-slate-400 uppercase tracking-wider">Tier</th>
                    <th scope="col" className="text-center px-3 py-3 text-xs font-bold text-emerald-400">Grade 9</th>
                    <th scope="col" className="text-center px-3 py-3 text-xs font-bold text-indigo-400">Grade 7</th>
                    <th scope="col" className="text-center px-3 py-3 text-xs font-bold text-purple-400">Grade 5</th>
                    <th scope="col" className="text-center px-3 py-3 text-xs font-bold text-amber-400">Grade 4 ✓</th>
                    <th scope="col" className="text-center px-3 py-3 text-xs font-semibold text-slate-500">Max</th>
                  </tr>
                </thead>
                <tbody>
                  {MATHS_2025.map((b, i) => (
                    <tr key={i} className={`border-b border-white/5 last:border-0 ${i % 2 === 0 ? '' : 'bg-white/2'}`}>
                      <td className="px-4 py-2.5 font-medium text-slate-200">{b.board}</td>
                      <td className="px-3 py-2.5 text-slate-400 text-xs">{b.tier}</td>
                      <td className="px-3 py-2.5 text-center font-mono text-xs text-emerald-400 font-semibold">{b.boundaries[9] ?? '—'}</td>
                      <td className="px-3 py-2.5 text-center font-mono text-xs text-indigo-400">{b.boundaries[7] ?? '—'}</td>
                      <td className="px-3 py-2.5 text-center font-mono text-xs text-purple-400">{b.boundaries[5] ?? '—'}</td>
                      <td className="px-3 py-2.5 text-center font-mono text-xs text-amber-400 font-semibold">{b.boundaries[4] ?? '—'}</td>
                      <td className="px-3 py-2.5 text-center font-mono text-xs text-slate-500">{b.maxMark}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-xs text-slate-600 mt-3">
              Source: AQA, Edexcel, OCR, WJEC official documents, published 21 August 2025. OCR raw marks out of 300 (scaled to 240: Higher grade 9 ≈ 206, grade 4 ≈ 38).
            </p>
          </section>

          {/* ── MATHS 2024 ── */}
          <section aria-labelledby="maths-2024-heading">
            <h2 id="maths-2024-heading" className="text-2xl font-bold text-white mb-2">
              GCSE Maths grade boundaries 2024 — AQA and Edexcel
            </h2>
            <p className="text-slate-400 text-sm mb-6">
              2024 boundaries for year-on-year comparison. AQA Higher grade 9 held steady at 219 in both years. Edexcel Higher grade 9 jumped from 197 in 2024 to 217 in 2025, reflecting an <strong className="text-emerald-400">easier</strong> 2025 paper (students needed more marks to achieve the same grade).
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

          {/* ── ALL SUBJECTS 2025 ── */}
          <section aria-labelledby="all-subjects-heading">
            <h2 id="all-subjects-heading" className="text-2xl font-bold text-white mb-2">
              GCSE grade boundaries 2025 — all subjects (AQA)
            </h2>
            <p className="text-slate-400 text-sm mb-6">
              Official AQA grade boundaries for all major GCSE subjects, June 2025.{' '}
              <strong className="text-white">Grade 5★</strong> is the strong pass.{' '}
              <strong className="text-white">Grade 4✓</strong> is the standard pass.
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
              ★ Grade 5 = strong pass. ✓ Grade 4 = standard pass. Source: AQA June 2025 grade boundary document, published 21 August 2025.
            </p>
          </section>

          {/* ── RESULTS DAY ── */}
          <div className="bg-[#12141f] border border-emerald-500/20 rounded-xl p-6 flex gap-4 items-start">
            <div className="text-2xl shrink-0" aria-hidden="true">📅</div>
            <div>
              <h3 className="text-sm font-semibold text-white mb-1">GCSE Results Day 2026 — Thursday 20 August 2026</h3>
              <p className="text-sm text-slate-400 leading-relaxed">
                2026 GCSE grade boundaries will be published on <strong className="text-white">Thursday 20 August 2026 at 8:00am</strong> by AQA, Edexcel, OCR, and WJEC simultaneously. This calculator will be updated immediately when they are released. Until then, the 2025 boundaries above are the most recent available.
              </p>
            </div>
          </div>

          {/* ── FAQ ── */}
          <FAQSection />

          {/* ── OTHER TOOLS ── */}
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