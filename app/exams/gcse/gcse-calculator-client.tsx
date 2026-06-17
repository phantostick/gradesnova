'use client';

import { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import {
  ALL_SUBJECTS_2025,
  GCSE_GRADE_INFO,
  GCSE_KEY_THRESHOLDS,
  getGradeFromMark,
  getPercentageFromMark,
  type GCSEBoundary,
} from '@/lib/gcse-data';

const COLOR = '#34d399';

// ── LOCAL BOARD DATA ──
const WJEC_2025: GCSEBoundary[] = [
  { subject: 'Maths', board: 'WJEC', tier: 'Higher', maxMark: 240, boundaries: { 9:196, 8:155, 7:115, 6:85, 5:56, 4:27, 3:12 } },
  { subject: 'Maths', board: 'WJEC', tier: 'Foundation', maxMark: 240, boundaries: { 5:141, 4:111, 3:81, 2:51, 1:21 } },
  { subject: 'English Language', board: 'WJEC', tier: 'Higher', maxMark: 160, boundaries: { 9:143, 8:131, 7:119, 6:107, 5:95, 4:84, 3:63, 2:42, 1:21 } },
  { subject: 'Biology', board: 'WJEC', tier: 'Higher', maxMark: 200, boundaries: { 9:160, 8:144, 7:128, 6:109, 5:90, 4:71, 3:58 } },
  { subject: 'Chemistry', board: 'WJEC', tier: 'Higher', maxMark: 200, boundaries: { 9:162, 8:147, 7:132, 6:110, 5:88, 4:66, 3:52 } },
  { subject: 'Physics', board: 'WJEC', tier: 'Higher', maxMark: 200, boundaries: { 9:161, 8:146, 7:131, 6:109, 5:87, 4:65, 3:51 } },
  { subject: 'History', board: 'WJEC', tier: 'Higher', maxMark: 168, boundaries: { 9:148, 8:136, 7:124, 6:111, 5:98, 4:85, 3:64, 2:43, 1:23 } },
  { subject: 'Geography', board: 'WJEC', tier: 'Higher', maxMark: 200, boundaries: { 9:158, 8:145, 7:132, 6:117, 5:102, 4:87, 3:63, 2:39, 1:15 } },
];

const EDEXCEL_2025: GCSEBoundary[] = [
  { subject: 'Maths', board: 'Edexcel', tier: 'Higher', maxMark: 240, boundaries: { 9:217, 8:186, 7:156, 6:121, 5:87, 4:53, 3:36 } },
  { subject: 'Maths', board: 'Edexcel', tier: 'Foundation', maxMark: 240, boundaries: { 5:175, 4:144, 3:105, 2:67, 1:29 } },
  { subject: 'English Language', board: 'Edexcel', tier: 'Higher', maxMark: 160, boundaries: { 9:122, 8:112, 7:102, 6:92, 5:83, 4:73, 3:55, 2:37, 1:19 } },
  { subject: 'English Literature', board: 'Edexcel', tier: 'Higher', maxMark: 160, boundaries: { 9:132, 8:118, 7:105, 6:89, 5:74, 4:59, 3:44, 2:29, 1:14 } },
  { subject: 'Biology', board: 'Edexcel', tier: 'Higher', maxMark: 200, boundaries: { 9:155, 8:138, 7:121, 6:101, 5:81, 4:61, 3:49 } },
  { subject: 'Chemistry', board: 'Edexcel', tier: 'Higher', maxMark: 200, boundaries: { 9:158, 8:140, 7:122, 6:97, 5:72, 4:47, 3:34 } },
  { subject: 'Physics', board: 'Edexcel', tier: 'Higher', maxMark: 200, boundaries: { 9:156, 8:141, 7:126, 6:106, 5:86, 4:66, 3:57 } },
  { subject: 'History', board: 'Edexcel', tier: 'Higher', maxMark: 168, boundaries: { 9:143, 8:131, 7:119, 6:106, 5:94, 4:81, 3:61, 2:41, 1:21 } },
  { subject: 'Geography', board: 'Edexcel', tier: 'Higher', maxMark: 200, boundaries: { 9:156, 8:143, 7:130, 6:116, 5:102, 4:88, 3:64, 2:41, 1:18 } },
  { subject: 'Religious Studies', board: 'Edexcel', tier: 'Higher', maxMark: 252, boundaries: { 9:190, 8:172, 7:154, 6:134, 5:114, 4:94, 3:71, 2:48, 1:25 } },
  { subject: 'Computer Science', board: 'Edexcel', tier: 'Higher', maxMark: 180, boundaries: { 9:152, 8:139, 7:126, 6:108, 5:90, 4:72, 3:54, 2:36, 1:18 } },
  { subject: 'Physical Education', board: 'Edexcel', tier: 'Higher', maxMark: 200, boundaries: { 9:160, 8:150, 7:140, 6:127, 5:114, 4:102, 3:77, 2:52, 1:27 } },
  { subject: 'Design Technology', board: 'Edexcel', tier: 'Higher', maxMark: 200, boundaries: { 9:175, 8:161, 7:147, 6:130, 5:113, 4:96, 3:70, 2:45, 1:19 } },
];

const OCR_2025: GCSEBoundary[] = [
  { subject: 'Maths', board: 'OCR', tier: 'Higher', maxMark: 300, boundaries: { 9:258, 8:212, 7:166, 6:126, 5:86, 4:47, 3:27 } },
  { subject: 'Maths', board: 'OCR', tier: 'Foundation', maxMark: 300, boundaries: { 5:182, 4:134, 3:95, 2:56, 1:17 } },
  { subject: 'English Language', board: 'OCR', tier: 'Higher', maxMark: 160, boundaries: { 9:120, 8:110, 7:100, 6:90, 5:81, 4:71, 3:53, 2:35, 1:17 } },
  { subject: 'English Literature', board: 'OCR', tier: 'Higher', maxMark: 160, boundaries: { 9:134, 8:120, 7:106, 6:90, 5:75, 4:60, 3:45, 2:30, 1:15 } },
  { subject: 'Biology', board: 'OCR', tier: 'Higher', maxMark: 200, boundaries: { 9:152, 8:136, 7:120, 6:100, 5:80, 4:60, 3:48 } },
  { subject: 'Chemistry', board: 'OCR', tier: 'Higher', maxMark: 200, boundaries: { 9:155, 8:138, 7:121, 6:96, 5:71, 4:46, 3:33 } },
  { subject: 'Physics', board: 'OCR', tier: 'Higher', maxMark: 200, boundaries: { 9:153, 8:138, 7:123, 6:104, 5:85, 4:66, 3:57 } },
  { subject: 'History', board: 'OCR', tier: 'Higher', maxMark: 168, boundaries: { 9:145, 8:133, 7:121, 6:108, 5:96, 4:83, 3:63, 2:43, 1:22 } },
  { subject: 'Geography', board: 'OCR', tier: 'Higher', maxMark: 200, boundaries: { 9:153, 8:140, 7:127, 6:113, 5:100, 4:86, 3:63, 2:40, 1:17 } },
  { subject: 'Religious Studies', board: 'OCR', tier: 'Higher', maxMark: 252, boundaries: { 9:186, 8:168, 7:151, 6:131, 5:111, 4:91, 3:69, 2:46, 1:23 } },
  { subject: 'Computer Science', board: 'OCR', tier: 'Higher', maxMark: 180, boundaries: { 9:150, 8:137, 7:124, 6:106, 5:88, 4:70, 3:53, 2:35, 1:17 } },
  { subject: 'Physical Education', board: 'OCR', tier: 'Higher', maxMark: 200, boundaries: { 9:158, 8:148, 7:138, 6:125, 5:112, 4:100, 3:75, 2:50, 1:25 } },
  { subject: 'Design Technology', board: 'OCR', tier: 'Higher', maxMark: 200, boundaries: { 9:172, 8:158, 7:144, 6:127, 5:110, 4:93, 3:68, 2:43, 1:18 } },
];

const ALL_WITH_BOARDS: GCSEBoundary[] = [
  ...ALL_SUBJECTS_2025,
  ...[...EDEXCEL_2025, ...OCR_2025, ...WJEC_2025].filter(w =>
    !ALL_SUBJECTS_2025.some(a => a.subject === w.subject && a.board === w.board && a.tier === w.tier)
  ),
];

const SUBJECTS = [...new Set(ALL_WITH_BOARDS.map(b => b.subject))];
const BOARDS_FOR = (subject: string) =>
  [...new Set(ALL_WITH_BOARDS.filter(b => b.subject === subject).map(b => b.board))] as ('AQA'|'Edexcel'|'OCR'|'WJEC')[];
const TIERS_FOR = (subject: string, board: string) =>
  ALL_WITH_BOARDS.filter(b => b.subject === subject && b.board === board).map(b => b.tier);

// ── UTILITY COMPONENT ──
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

// ── PATHWAY CTA ──
// Separate component so the logic is readable and both states are explicit.
function PathwayCTA({
  grade,
  subject,
  pathwayUrl,
  boardColor,
}: {
  grade: number | null;
  subject: string;
  pathwayUrl: string;
  boardColor: string;
}) {
  // Zero / no mark entered — tease the feature without showing a broken state
  if (!grade) {
    return (
      <Link href={pathwayUrl} className="block group">
        <div
          className="relative overflow-hidden rounded-2xl border p-6 transition-all duration-200
                     hover:scale-[1.015] hover:shadow-xl hover:shadow-black/30
                     active:scale-[1.01]"
          style={{
            background: `linear-gradient(135deg, ${boardColor}14 0%, ${boardColor}08 100%)`,
            borderColor: `${boardColor}30`,
          }}
        >
          {/* Subtle animated glow on hover */}
          <div
            className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none rounded-2xl"
            style={{ background: `radial-gradient(ellipse at 20% 50%, ${boardColor}18 0%, transparent 60%)` }}
          />

          <div className="relative flex items-center justify-between gap-4">
            <div className="flex-1 min-w-0">
              <p className="text-[10px] font-semibold uppercase tracking-widest mb-1.5" style={{ color: `${boardColor}99` }}>
                After your GCSEs →
              </p>
              <h3 className="text-base font-bold text-white mb-1 group-hover:text-white/90 transition-colors leading-snug">
                Where can {subject} take you?
              </h3>
              <p className="text-slate-400 text-xs leading-relaxed">
                Enter your mark above, then explore A-Level options, university courses, and career paths.
              </p>
            </div>
            <div
              className="shrink-0 w-11 h-11 rounded-full flex items-center justify-center
                         transition-all duration-200 group-hover:scale-110"
              style={{ backgroundColor: `${boardColor}25`, border: `1.5px solid ${boardColor}40` }}
            >
              <span className="text-lg font-bold" style={{ color: boardColor }}>→</span>
            </div>
          </div>
        </div>
      </Link>
    );
  }

  // Grade known — show the personalised, high-urgency CTA
  const gradeInfo = GCSE_GRADE_INFO[grade];

  return (
    <Link href={pathwayUrl} className="block group">
      <div
        className="relative overflow-hidden rounded-2xl border p-6 transition-all duration-200
                   hover:scale-[1.015] hover:shadow-xl hover:shadow-black/30
                   active:scale-[1.01]"
        style={{
          background: `linear-gradient(135deg, ${boardColor}18 0%, ${boardColor}0a 100%)`,
          borderColor: `${boardColor}45`,
        }}
      >
        {/* Animated glow blob */}
        <div
          className="absolute -top-6 -right-6 w-32 h-32 rounded-full blur-2xl opacity-30
                     group-hover:opacity-50 transition-opacity duration-300 pointer-events-none"
          style={{ backgroundColor: boardColor }}
        />
        {/* Grade badge watermark */}
        <div
          className="absolute right-16 top-1/2 -translate-y-1/2 text-8xl font-black opacity-[0.06]
                     select-none pointer-events-none"
          style={{ color: gradeInfo.color }}
        >
          {grade}
        </div>

        <div className="relative flex items-center justify-between gap-4">
          <div className="flex-1 min-w-0">
            <p className="text-[10px] font-semibold uppercase tracking-widest mb-1.5" style={{ color: `${boardColor}bb` }}>
              You got a Grade {grade} — what's next?
            </p>
            <h3 className="text-lg font-bold text-white mb-1.5 group-hover:text-white/90 transition-colors leading-snug">
              See every door your {subject} grade opens
            </h3>
            <p className="text-slate-400 text-xs leading-relaxed max-w-xs">
              A-Levels that accept Grade {grade}, degree courses, apprenticeships, and real career paths.
            </p>
            <div className="mt-3 flex items-center gap-2">
              <span
                className="inline-flex items-center gap-1 text-[11px] font-semibold px-2.5 py-1 rounded-full border"
                style={{
                  color: boardColor,
                  backgroundColor: `${boardColor}18`,
                  borderColor: `${boardColor}35`,
                }}
              >
                Explore pathways
                <svg className="w-3 h-3 group-hover:translate-x-0.5 transition-transform duration-150" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                </svg>
              </span>
            </div>
          </div>
          <div
            className="shrink-0 w-12 h-12 rounded-full flex items-center justify-center
                       transition-all duration-200 group-hover:scale-110 group-hover:rotate-12"
            style={{ backgroundColor: `${boardColor}25`, border: `1.5px solid ${boardColor}50` }}
          >
            <span className="text-xl font-black" style={{ color: boardColor }}>→</span>
          </div>
        </div>
      </div>
    </Link>
  );
}

interface CalculatorProps {
  initialBoard?: 'AQA' | 'Edexcel' | 'OCR' | 'WJEC';
  initialSubject?: string;
}

// ── MAIN CLIENT EXPORT ──
export function GCSECalculatorClient({
  initialBoard = 'AQA',
  initialSubject = 'Maths',
}: CalculatorProps) {
  const [subject,  setSubject]  = useState(initialSubject);
  const [board,    setBoard]    = useState<'AQA'|'Edexcel'|'OCR'|'WJEC'>(initialBoard);
  const [tier,     setTier]     = useState<'Higher'|'Foundation'>('Higher');
  const [inputVal, setInputVal] = useState('');
  const [mark,     setMark]     = useState(0);

  const availBoards = BOARDS_FOR(subject);
  const availTiers  = TIERS_FOR(subject, board);

  useMemo(() => {
    if (!availBoards.includes(board) && availBoards.length > 0) setBoard(availBoards[0]);
  }, [subject, board, availBoards]);

  useMemo(() => {
    if (!availTiers.includes(tier) && availTiers.length > 0) setTier(availTiers[0] as 'Higher' | 'Foundation');
  }, [subject, board, tier, availTiers]);

  const boundary = useMemo<GCSEBoundary | undefined>(() =>
    ALL_WITH_BOARDS.find(b => b.subject === subject && b.board === board && b.tier === tier)
    ?? ALL_WITH_BOARDS.find(b => b.subject === subject && b.board === board)
  , [subject, board, tier]);

  const grade     = useMemo(() => boundary && mark > 0 ? getGradeFromMark(mark, boundary) : null, [mark, boundary]);
  const gradeInfo = useMemo(() => grade ? GCSE_GRADE_INFO[grade] : null, [grade]);
  const pct       = useMemo(() => boundary && mark > 0 ? getPercentageFromMark(mark, boundary.maxMark) : null, [mark, boundary]);

  const subjectSlug = subject.toLowerCase().replace(/\s+/g, '-');
  const pathwayUrl  = `/exams/gcse/${subjectSlug}/sixth-form`;

  // Active board colour (used across CTA + tier buttons)
  const boardColor =
    board === 'Edexcel' ? '#6366f1' :
    board === 'OCR'     ? '#a855f7' :
    board === 'WJEC'    ? '#f59e0b' :
    COLOR;

  return (
    <div className="grid lg:grid-cols-5 gap-8" id="calculator">
      {/* ── CONTROLS ── */}
      <div className="lg:col-span-2 space-y-5">
        <div className="bg-[#12141f] border border-white/8 rounded-2xl p-5 space-y-5 shadow-lg shadow-black/20">

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
                const bColor =
                  b === 'Edexcel' ? '#6366f1' :
                  b === 'OCR'     ? '#a855f7' :
                  b === 'WJEC'    ? '#f59e0b' :
                  COLOR;
                return (
                  <button key={b} type="button" onClick={(e) => { e.preventDefault(); if (avail) setBoard(b); }} disabled={!avail}
                    className={`px-3 py-1.5 rounded-lg text-sm font-medium border transition-all
                      ${board === b && avail ? 'text-white' : avail ? 'bg-white/4 border-white/8 text-slate-400 hover:text-white' : 'border-white/5 text-slate-700 cursor-not-allowed'}`}
                    style={board === b && avail ? { backgroundColor: `${bColor}20`, borderColor: `${bColor}40` } : {}}>
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
                    style={tier === t ? { backgroundColor: `${boardColor}20`, borderColor: `${boardColor}40` } : {}}>
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
              Using 2025 official boundaries — updates on 20 Aug 2026
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
              placeholder={`0 to ${boundary?.maxMark ?? '...'}`}
              className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-xl font-mono text-white placeholder-slate-700 focus:outline-none focus:border-emerald-500/50" />

            {boundary && (
              <div className="mt-4">
                <div className="relative h-7 flex items-center mb-1">
                  <div className="absolute w-full h-2 rounded-full bg-white/8" />
                  <div className="absolute h-2 rounded-full transition-all duration-75"
                    style={{ width: `${(mark / boundary.maxMark) * 100}%`, backgroundColor: boardColor, opacity: 0.8 }} />
                  <input type="range" min={0} max={boundary.maxMark} step={1} value={mark}
                    onChange={e => { const v = Number(e.target.value); setMark(v); setInputVal(String(v)); }}
                    className="absolute w-full h-full opacity-0 cursor-pointer" style={{ zIndex: 10 }} />
                  <div className="absolute w-6 h-6 rounded-full border-2 border-white shadow-lg shadow-black/50 pointer-events-none transition-all duration-75"
                    style={{ left: `calc(${(mark / boundary.maxMark) * 100}% - 12px)`, backgroundColor: boardColor }} />
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

      {/* ── RESULT AREA ── */}
      <div className="lg:col-span-3 space-y-5">
        <div className="bg-[#12141f] border border-white/8 rounded-2xl p-7 min-h-[280px] flex flex-col justify-center shadow-lg shadow-black/20">
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

        {/* ── PATHWAY CTA ── */}
        <PathwayCTA
          grade={grade}
          subject={subject}
          pathwayUrl={pathwayUrl}
          boardColor={boardColor}
        />

        {boundary && mark > 0 && (
          <div className="bg-[#12141f] border border-white/8 rounded-2xl p-5 shadow-lg shadow-black/20">
            <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-4">
              {subject} {tier} — {board} Boundaries
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
                    {isMe && <span className="text-[9px] text-emerald-400 font-semibold shrink-0 w-6">you</span>}
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
