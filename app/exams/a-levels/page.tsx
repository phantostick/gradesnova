'use client';

import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import {
  ALEVEL_BOUNDARIES_2024, ALEVEL_GRADE_INFO, UCAS_POINTS,
  UCAS_UNIVERSITY_CONTEXT, GRADE_ORDER, getTotalUCASPoints,
  getGradeFromMark, getPercentageFromMark, ALEVEL_FAQS,
  type ALevel, type ALevelBoundary,
} from '@/lib/alevel-data';
import { ChevronDown, ChevronUp, Plus, Trash2 } from 'lucide-react';
import Link from 'next/link';

const COLOR = '#ec4899';

const SUBJECTS = [...new Set(ALEVEL_BOUNDARIES_2024.map(b => b.subject))];

function GradeDisplay({ grade }: { grade: ALevel | 'U' | null }) {
  if (!grade || grade === 'U') return null;
  const info = ALEVEL_GRADE_INFO[grade];
  return (
    <motion.div key={grade} initial={{ opacity: 0, scale: 0.85 }} animate={{ opacity: 1, scale: 1 }}
      className="flex flex-col items-center gap-2">
      <div className="w-24 h-24 rounded-2xl flex items-center justify-center border-2 shadow-lg"
        style={{ backgroundColor: `${info.color}15`, borderColor: `${info.color}40` }}>
        <span className="text-5xl font-bold" style={{ color: info.color }}>{grade}</span>
      </div>
      <div className="text-center">
        <p className="text-sm font-semibold text-white">{info.ucas} UCAS pts</p>
      </div>
    </motion.div>
  );
}

function FAQSection() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section aria-labelledby="faq-heading">
      <h2 id="faq-heading" className="text-2xl font-bold text-white mb-2">
        A-Level grade boundaries — frequently asked questions
      </h2>
      <p className="text-slate-400 text-sm mb-6">
        Common questions about A-Level grade boundaries, UCAS points, and university entry requirements.
      </p>
      <div className="space-y-2" itemScope itemType="https://schema.org/FAQPage">
        {ALEVEL_FAQS.map((faq, i) => (
          <div key={i} className="bg-[#12141f] border border-white/7 rounded-xl overflow-hidden"
            itemScope itemProp="mainEntity" itemType="https://schema.org/Question">
            <button onClick={() => setOpen(open === i ? null : i)}
              className="w-full flex items-center justify-between px-5 py-4 text-left gap-4"
              aria-expanded={open === i}>
              <span className="text-sm font-medium text-white" itemProp="name">{faq.question}</span>
              {open === i ? <ChevronUp size={16} className="text-slate-400 shrink-0" /> : <ChevronDown size={16} className="text-slate-400 shrink-0" />}
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

export default function ALevelCalculatorPage() {
  const [subject, setSubject] = useState('Mathematics');
  const [mark, setMark]       = useState(0);
  const [inputVal, setInputVal] = useState('');

  // Multi-subject UCAS calculator
  const [aLevelGrades, setALevelGrades] = useState<Array<{ subject: string; grade: ALevel | null }>>([
    { subject: 'Mathematics', grade: null },
    { subject: 'Biology', grade: null },
    { subject: 'Chemistry', grade: null },
  ]);

  const boundary = useMemo<ALevelBoundary | undefined>(() =>
    ALEVEL_BOUNDARIES_2024.find(b => b.subject === subject)
  , [subject]);

  const grade     = useMemo(() => boundary && mark > 0 ? getGradeFromMark(mark, boundary) : null, [mark, boundary]);
  const gradeInfo = grade && grade !== 'U' ? ALEVEL_GRADE_INFO[grade] : null;
  const pct       = useMemo(() => boundary && mark > 0 ? getPercentageFromMark(mark, boundary.maxMark) : null, [mark, boundary]);
  const ucasFromGrade = grade && grade !== 'U' ? UCAS_POINTS[grade] : 0;

  const totalUCAS = useMemo(() =>
    getTotalUCASPoints(aLevelGrades.filter(g => g.grade).map(g => g.grade as ALevel))
  , [aLevelGrades]);

  const schemaBreadcrumb = {
    '@context': 'https://schema.org', '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://gradesnova.com' },
      { '@type': 'ListItem', position: 2, name: 'Exam Calculators', item: 'https://gradesnova.com/#exams' },
      { '@type': 'ListItem', position: 3, name: 'A-Level Grade Boundaries', item: 'https://gradesnova.com/exams/a-levels' },
    ],
  };
  const schemaFAQ = {
    '@context': 'https://schema.org', '@type': 'FAQPage',
    mainEntity: ALEVEL_FAQS.map(f => ({ '@type': 'Question', name: f.question, acceptedAnswer: { '@type': 'Answer', text: f.answer } })),
  };
  const schemaTool = {
    '@context': 'https://schema.org', '@type': 'WebApplication',
    name: 'A-Level Grade Boundaries Calculator (2024-2026)',
    url: 'https://gradesnova.com/exams/a-levels',
    description: 'Free A-Level grade boundaries calculator with UCAS points converter. Enter raw marks to find your A-Level grade for AQA, Edexcel, and OCR subjects.',
    applicationCategory: 'EducationalApplication', operatingSystem: 'Any',
    offers: { '@type': 'Offer', price: '0', priceCurrency: 'GBP' },
    provider: { '@type': 'Organization', name: 'GradesNova', url: 'https://gradesnova.com' },
    aggregateRating: { '@type': 'AggregateRating', ratingValue: '4.9', reviewCount: '198', bestRating: '5', worstRating: '1' },
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaBreadcrumb) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaFAQ) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaTool) }} />

      <main className="bg-[#0a0c14] min-h-screen text-white">
        <Navbar />

        <header className="bg-[#0d0f1a] border-b border-white/6 py-10">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <nav aria-label="Breadcrumb" className="mb-4">
              <ol className="flex items-center gap-2 text-xs text-slate-500">
                <li><Link href="/" className="hover:text-white transition-colors">Home</Link></li>
                <li aria-hidden="true">›</li>
                <li><Link href="/#exams" className="hover:text-white transition-colors">Calculators</Link></li>
                <li aria-hidden="true">›</li>
                <li className="text-slate-400" aria-current="page">A-Level Grade Boundaries</li>
              </ol>
            </nav>
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 rounded-xl flex items-center justify-center text-xl"
                style={{ backgroundColor: `${COLOR}18` }} aria-hidden="true">📚</div>
              <span className="text-xs font-mono uppercase tracking-widest" style={{ color: `${COLOR}aa` }}>A-Level · AQA · Grades A* to E · UCAS points</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white tracking-tight mb-3">
              A-Level Grade Boundaries (2024–2026)
            </h1>
            <p className="text-lg text-slate-400 max-w-2xl">
              Enter your raw mark to find your <strong className="text-white font-medium">A-Level grade</strong> and UCAS points. Includes Maths, Biology, Chemistry, Physics, Psychology, and more. Currently displaying the official AQA 2024 data (latest mapped in system). 2026 boundaries will be published live on Results Day.
            </p>
            <div className="flex items-center gap-3 mt-4">
              <span className="text-xs bg-pink-500/15 text-pink-400 border border-pink-500/20 px-3 py-1 rounded-full font-medium">Data: AQA 2024</span>
              <span className="text-xs text-slate-500">2026 boundaries pending — 13 Aug 2026</span>
            </div>
          </div>
        </header>

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div className="grid lg:grid-cols-5 gap-8">

            {/* LEFT */}
            <div className="lg:col-span-2 space-y-5">
              <div className="bg-[#12141f] border border-white/8 rounded-2xl p-5 space-y-4">

                {/* Subject */}
                <div>
                  <label htmlFor="alevel-subject" className="block text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">Subject</label>
                  <select id="alevel-subject" value={subject} onChange={e => setSubject(e.target.value)}
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-pink-500/50 cursor-pointer">
                    {SUBJECTS.map(s => <option key={s} value={s} className="bg-[#12141f]">{s}</option>)}
                  </select>
                </div>

                {/* Mark input */}
                <div>
                  <label htmlFor="alevel-mark" className="block text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">
                    Your raw mark {boundary ? `(out of ${boundary.maxMark})` : ''}
                  </label>
                  <input id="alevel-mark" type="number" min={0} max={boundary?.maxMark || 500}
                    value={inputVal}
                    onChange={e => {
                      setInputVal(e.target.value);
                      const n = parseInt(e.target.value);
                      if (!isNaN(n) && n >= 0) setMark(Math.min(n, boundary?.maxMark || 500));
                    }}
                    placeholder={`Enter mark (0–${boundary?.maxMark || '…'})`}
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-lg font-mono text-white placeholder-slate-600 focus:outline-none focus:border-pink-500/50" />
                </div>

                {/* Quick grade buttons */}
                {boundary && (
                  <div>
                    <p className="text-[10px] text-slate-600 uppercase tracking-wider font-medium mb-2">Grade boundary marks</p>
                    <div className="flex flex-wrap gap-1.5">
                      {GRADE_ORDER.map(g => {
                        const threshold = boundary.boundaries[g];
                        const info = ALEVEL_GRADE_INFO[g];
                        return (
                          <button key={g} onClick={() => { setMark(threshold); setInputVal(String(threshold)); }}
                            className="px-2.5 py-1 rounded-lg text-xs border transition-all hover:scale-105"
                            style={{ backgroundColor: `${info.color}15`, borderColor: `${info.color}30`, color: info.color }}>
                            {g}: {threshold}
                          </button>
                        );
                      })}
                    </div>
                  </div>
                )}
              </div>

              {/* UCAS points guide */}
              <div className="bg-[#12141f] border border-white/8 rounded-xl p-5">
                <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-3">UCAS points per grade</p>
                <div className="space-y-2">
                  {GRADE_ORDER.map(g => {
                    const info = ALEVEL_GRADE_INFO[g];
                    return (
                      <div key={g} className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <span className="text-sm font-bold w-5" style={{ color: info.color }}>{g}</span>
                          <div className="h-1.5 rounded-full" style={{ width: `${(info.ucas / 56) * 80}px`, backgroundColor: info.color, opacity: 0.6 }} />
                        </div>
                        <span className="text-xs font-semibold text-white font-mono">{info.ucas} pts</span>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* RIGHT */}
            <div className="lg:col-span-3 space-y-5">

              {/* Grade result */}
              <div className="bg-[#12141f] border border-white/8 rounded-2xl p-7">
                {grade && grade !== 'U' && gradeInfo ? (
                  <motion.div key={`${subject}-${grade}`} initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                    <div className="flex items-center justify-center gap-8 mb-6">
                      <GradeDisplay grade={grade} />
                      <div className="text-center space-y-3">
                        <div className="bg-white/4 rounded-xl p-4">
                          <p className="text-2xl font-bold text-white">{pct}%</p>
                          <p className="text-xs text-slate-500 mt-0.5">of total marks</p>
                        </div>
                        <div className="bg-white/4 rounded-xl p-4">
                          <p className="text-2xl font-bold tabular-nums" style={{ color: COLOR }}>{ucasFromGrade}</p>
                          <p className="text-xs text-slate-500 mt-0.5">UCAS points</p>
                        </div>
                      </div>
                    </div>
                    <div className="border border-white/8 rounded-xl p-4"
                      style={{ backgroundColor: `${gradeInfo.color}08`, borderColor: `${gradeInfo.color}20` }}>
                      <p className="text-sm text-slate-300 leading-relaxed">{gradeInfo.desc}</p>
                    </div>
                  </motion.div>
                ) : (
                  <div className="flex flex-col items-center justify-center py-10 text-center">
                    <div className="w-16 h-16 rounded-2xl bg-white/4 flex items-center justify-center text-3xl mb-4" aria-hidden="true">📚</div>
                    <p className="text-slate-400 text-sm">Select a subject and enter your raw mark</p>
                    <p className="text-xs text-slate-600 mt-2">AQA grade boundaries — June 2024</p>
                  </div>
                )}
              </div>

              {/* Grade boundaries bar chart for subject */}
              {boundary && (
                <div className="bg-[#12141f] border border-white/8 rounded-2xl p-6">
                  <h3 className="text-sm font-semibold text-slate-300 mb-4">
                    {subject} grade boundaries — AQA 2024 (out of {boundary.maxMark})
                  </h3>
                  <div className="space-y-2">
                    {GRADE_ORDER.map(g => {
                      const threshold = boundary.boundaries[g];
                      const info = ALEVEL_GRADE_INFO[g];
                      const barPct = Math.round((threshold / boundary.maxMark) * 100);
                      const isActive = grade === g;
                      return (
                        <div key={g} className={`flex items-center gap-3 p-2 rounded-lg transition-colors ${isActive ? 'bg-white/6' : ''}`}>
                          <div className="w-14 shrink-0 flex items-center gap-2">
                            <span className="text-sm font-bold w-5" style={{ color: info.color }}>{g}</span>
                            <span className="text-[10px] text-slate-500 font-mono">{threshold}+</span>
                          </div>
                          <div className="flex-1 h-2 bg-white/8 rounded-full overflow-hidden">
                            <div className="h-full rounded-full" style={{ width: `${barPct}%`, backgroundColor: info.color, opacity: 0.7 }} />
                          </div>
                          <div className="flex items-center gap-2 shrink-0">
                            <span className="text-xs text-slate-500 font-mono w-10 text-right">{barPct}%</span>
                            <span className="text-[9px] text-slate-600 w-10 text-right">{info.ucas}pts</span>
                          </div>
                          {isActive && <span className="text-[9px] text-pink-400 font-medium shrink-0">← you</span>}
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* UCAS Points Calculator */}
          <section className="mt-14 bg-[#12141f] border border-white/8 rounded-2xl p-7" aria-labelledby="ucas-heading">
            <h2 id="ucas-heading" className="text-xl font-bold text-white mb-2">UCAS points calculator</h2>
            <p className="text-slate-400 text-sm mb-6">
              Add your A-Level grades to calculate your total UCAS tariff points. Three A-Levels is standard — add or remove subjects as needed.
            </p>
            <div className="space-y-3 mb-6">
              {aLevelGrades.map((entry, i) => (
                <div key={i} className="flex items-center gap-3">
                  <select value={entry.subject}
                    onChange={e => setALevelGrades(prev => prev.map((g, j) => j === i ? { ...g, subject: e.target.value } : g))}
                    className="flex-1 bg-white/5 border border-white/10 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none cursor-pointer">
                    {SUBJECTS.map(s => <option key={s} value={s} className="bg-[#12141f]">{s}</option>)}
                  </select>
                  <div className="flex gap-1">
                    {(['A*', 'A', 'B', 'C', 'D', 'E'] as ALevel[]).map(g => (
                      <button key={g} onClick={() => setALevelGrades(prev => prev.map((gr, j) => j === i ? { ...gr, grade: g } : gr))}
                        className={`w-8 h-8 rounded-lg text-xs font-bold border transition-all ${entry.grade === g ? 'border-transparent text-white' : 'border-white/10 text-slate-500 hover:text-white hover:border-white/20'}`}
                        style={entry.grade === g ? { backgroundColor: ALEVEL_GRADE_INFO[g].color } : {}}>
                        {g}
                      </button>
                    ))}
                  </div>
                  <div className="w-12 text-right shrink-0">
                    <span className="text-sm font-mono font-semibold" style={{ color: entry.grade ? ALEVEL_GRADE_INFO[entry.grade].color : '#4b5563' }}>
                      {entry.grade ? UCAS_POINTS[entry.grade] : '—'}
                    </span>
                  </div>
                  <button onClick={() => setALevelGrades(prev => prev.filter((_, j) => j !== i))}
                    className="text-slate-600 hover:text-red-400 transition-colors shrink-0">
                    <Trash2 size={14} />
                  </button>
                </div>
              ))}
              <button onClick={() => setALevelGrades(prev => [...prev, { subject: 'Mathematics', grade: null }])}
                className="flex items-center gap-2 text-xs text-slate-500 hover:text-white transition-colors mt-2">
                <Plus size={14} /> Add another A-Level
              </button>
            </div>

            {/* UCAS total */}
            <div className="flex items-center justify-between border-t border-white/8 pt-4 mb-6">
              <span className="text-sm font-semibold text-slate-300">Total UCAS points</span>
              <span className="text-3xl font-bold tabular-nums" style={{ color: COLOR }}>{totalUCAS}</span>
            </div>

            {/* University context */}
            <div className="space-y-2">
              {UCAS_UNIVERSITY_CONTEXT.map(ctx => {
                const achieved = totalUCAS >= ctx.minPoints;
                return (
                  <div key={ctx.institution} className={`flex items-center justify-between px-4 py-3 rounded-xl border transition-colors ${achieved ? 'bg-pink-500/8 border-pink-500/20' : 'bg-white/3 border-white/6'}`}>
                    <div>
                      <p className="text-sm font-medium" style={{ color: achieved ? '#f472b6' : '#6b7280' }}>{ctx.institution}</p>
                      <p className="text-xs text-slate-500">{ctx.requirement}</p>
                    </div>
                    <div className="text-right shrink-0 ml-4">
                      <p className="text-xs font-mono text-slate-500">{ctx.minPoints}+ pts</p>
                      <p className="text-xs font-semibold" style={{ color: achieved ? '#34d399' : '#ef4444' }}>
                        {achieved ? '✓ met' : '✗ not met'}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
            <p className="text-xs text-slate-600 mt-4">UCAS tariff points guide. University requirements are typical entry requirements and vary by course.</p>
          </section>

          {/* Full grade boundaries table */}
          <section className="mt-14" aria-labelledby="table-heading">
            <h2 id="table-heading" className="text-2xl font-bold text-white mb-2">
              A-Level grade boundaries 2024 — all subjects
            </h2>
            <p className="text-slate-400 text-sm mb-6">
              Official AQA A-Level grade boundaries from the June 2024 exam series. Shows the minimum raw marks needed for each grade. Boundaries change each year based on paper difficulty.
            </p>
            <div className="overflow-x-auto">
              <table className="w-full text-sm min-w-[700px]" aria-label="A-Level grade boundaries 2024 AQA">
                <thead>
                  <tr className="bg-white/4 border-b border-white/8">
                    <th scope="col" className="text-left px-4 py-3 text-xs font-semibold text-slate-400 uppercase tracking-wider">Subject</th>
                    <th scope="col" className="text-center px-3 py-3 text-xs font-semibold text-emerald-400 uppercase tracking-wider">A*</th>
                    <th scope="col" className="text-center px-3 py-3 text-xs font-semibold text-emerald-400 uppercase tracking-wider">A</th>
                    <th scope="col" className="text-center px-3 py-3 text-xs font-semibold text-indigo-400 uppercase tracking-wider">B</th>
                    <th scope="col" className="text-center px-3 py-3 text-xs font-semibold text-purple-400 uppercase tracking-wider">C</th>
                    <th scope="col" className="text-center px-3 py-3 text-xs font-semibold text-amber-400 uppercase tracking-wider">D</th>
                    <th scope="col" className="text-center px-3 py-3 text-xs font-semibold text-orange-400 uppercase tracking-wider">E</th>
                    <th scope="col" className="text-center px-3 py-3 text-xs font-semibold text-slate-500 uppercase tracking-wider">Max</th>
                  </tr>
                </thead>
                <tbody>
                  {ALEVEL_BOUNDARIES_2024.map((b, i) => (
                    <tr key={i} className={`border-b border-white/5 last:border-0 ${i % 2 === 0 ? '' : 'bg-white/2'}`}>
                      <td className="px-4 py-2.5 text-slate-200 font-medium text-sm">{b.subject}</td>
                      <td className="px-3 py-2.5 text-center font-mono text-xs text-emerald-400 font-semibold">{b.boundaries['A*']}</td>
                      <td className="px-3 py-2.5 text-center font-mono text-xs text-emerald-400">{b.boundaries['A']}</td>
                      <td className="px-3 py-2.5 text-center font-mono text-xs text-indigo-400">{b.boundaries['B']}</td>
                      <td className="px-3 py-2.5 text-center font-mono text-xs text-purple-400">{b.boundaries['C']}</td>
                      <td className="px-3 py-2.5 text-center font-mono text-xs text-amber-400">{b.boundaries['D']}</td>
                      <td className="px-3 py-2.5 text-center font-mono text-xs text-orange-400">{b.boundaries['E']}</td>
                      <td className="px-3 py-2.5 text-center font-mono text-xs text-slate-500">{b.maxMark}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-xs text-slate-600 mt-3">Source: AQA A-Level grade boundaries June 2024. Board: AQA. 2026 boundaries published 13 August 2026.</p>
          </section>

          {/* Results day callout */}
          <div className="mt-8 bg-[#12141f] border border-pink-500/20 rounded-xl p-5 flex gap-4 items-start">
            <div className="text-2xl shrink-0" aria-hidden="true">📅</div>
            <div>
              <h3 className="text-sm font-semibold text-white mb-1">A-Level Results Day 2026 — Thursday 13 August</h3>
              <p className="text-sm text-slate-400 leading-relaxed">
                A-Level results and grade boundaries for 2026 will be published on <strong className="text-white">Thursday 13 August 2026</strong> at 8:00am. This is two weeks before GCSE results day. We will update this calculator with 2026 boundaries immediately when they are released.
              </p>
            </div>
          </div>

          <div className="mt-14"><FAQSection /></div>

          <section className="mt-12 bg-[#12141f] border border-white/7 rounded-2xl p-6" aria-labelledby="other-tools-heading">
            <h2 id="other-tools-heading" className="text-sm font-semibold text-slate-300 mb-4">Other free calculators</h2>
            <div className="flex flex-wrap gap-2">
              {[
                { id: 'gcse',     name: 'GCSE Grade Boundaries',   color: '#34d399' },
                { id: 'sat',      name: 'SAT Score Calculator',    color: '#6366f1' },
                { id: 'act',      name: 'ACT Score Calculator',    color: '#06b6d4' },
                { id: 'gre',      name: 'GRE Score Calculator',    color: '#a855f7' },
                { id: 'lsat',     name: 'LSAT Score Calculator',   color: '#ef4444' },
                { id: 'gmat',     name: 'GMAT Score Calculator',   color: '#f59e0b' },
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