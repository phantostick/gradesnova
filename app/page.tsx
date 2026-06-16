import type { Metadata } from 'next';
import Link from 'next/link';

const currentYear = new Date().getFullYear();
const cycle = `${currentYear - 1}–${currentYear}`;

export const metadata: Metadata = {
  title: `GradesNova — ACT Score Calculator, SAT Score Calculator & GCSE Grade Boundaries ${currentYear}`,
  description: `Free ACT score calculator, SAT score calculator, and GCSE grade boundary checker. Instantly see your score, rank, and what it means for college admissions. No signup. Updated for ${currentYear}.`,
  openGraph: {
    title: `GradesNova — ACT Score Calculator, SAT Score Calculator & GCSE Grade Boundaries ${currentYear}`,
    description: `Free ACT score calculator, SAT score calculator, GCSE grade boundary checker for AQA, Edexcel, OCR & WJEC. Enter your score and instantly see where you stand.`,
    type: 'website',
    url: 'https://gradesnova.com',
  },
  alternates: { canonical: 'https://gradesnova.com' },
};

/* ─── tiny inline SVG icons ─────────────────────────────────────── */
const CheckIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
    <circle cx="8" cy="8" r="8" fill="#22c55e" fillOpacity=".15" />
    <path d="M4.5 8.5l2.5 2.5 5-5" stroke="#22c55e" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const ArrowRight = () => (
  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
    <path d="M2 7h10M8 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

/* ─── data ───────────────────────────────────────────────────────── */
const US_EXAMS = [
  {
    href: '/exams/act',
    emoji: '✏️',
    label: 'ACT',
    title: 'ACT Score Calculator',
    subtitle: `${cycle} · Composite 1–36`,
    desc: 'Enter your ACT composite or section scores to see your national percentile, ACT-to-SAT conversion, and which colleges your score unlocks.',
    cta: 'Calculate ACT score',
    badge: 'Most popular',
    facts: ['National average: 21', 'Top 10%: score 29+', 'Ivy-competitive: 34+'],
  },
  {
    href: '/exams/sat',
    emoji: '📐',
    label: 'SAT',
    title: 'SAT Score Calculator',
    subtitle: `${cycle} · 400–1600`,
    desc: 'Find your SAT score percentile instantly. See how you compare nationally, what your score means for top schools, and your SAT-to-ACT equivalent.',
    cta: 'Calculate SAT score',
    badge: null,
    facts: ['National average: 1060', 'Top 10%: score 1370+', 'Ivy-competitive: 1520+'],
  },
];

const GRAD_EXAMS = [
  {
    href: '/exams/gre',
    emoji: '🎓',
    label: 'GRE',
    title: 'GRE Score Calculator',
    subtitle: '130–170 per section',
    desc: 'Calculate your GRE Verbal and Quantitative percentile rankings for graduate school admissions.',
    cta: 'Calculate GRE score',
  },
  {
    href: '/exams/gmat',
    emoji: '💼',
    label: 'GMAT',
    title: 'GMAT Score Calculator',
    subtitle: '205–805',
    desc: 'See your GMAT percentile and how it compares against MBA applicant pools at top business schools.',
    cta: 'Calculate GMAT score',
  },
  {
    href: '/exams/lsat',
    emoji: '⚖️',
    label: 'LSAT',
    title: 'LSAT Score Calculator',
    subtitle: '120–180',
    desc: 'Instantly find your LSAT percentile and see median scores for every T14 law school.',
    cta: 'Calculate LSAT score',
  },
];

const GCSE_BOARDS = [
  {
    href: '/exams/gcse/aqa',
    title: 'AQA GCSE Grade Boundaries',
    desc: 'The largest GCSE board in England. Look up grade boundaries for AQA Maths, English Language, English Literature, Sciences, and more.',
    subjects: ['Maths', 'English Language', 'Biology', 'Chemistry', 'Physics', 'History'],
    cta: 'AQA grade boundaries',
  },
  {
    href: '/exams/gcse/edexcel',
    title: 'Edexcel GCSE Grade Boundaries',
    desc: 'Pearson Edexcel GCSE boundaries for 2024–2025. Check your grade boundary for Maths, Sciences, English, and all other Edexcel GCSE subjects.',
    subjects: ['Maths', 'English Language', 'Combined Science', 'Geography', 'French', 'Spanish'],
    cta: 'Edexcel grade boundaries',
  },
  {
    href: '/exams/gcse/ocr',
    title: 'OCR GCSE Grade Boundaries',
    desc: 'OCR GCSE and Cambridge Nationals grade boundaries. Includes Gateway Science, 21st Century Science, Maths, and humanities subjects.',
    subjects: ['Gateway Science', 'Maths', 'History', 'Geography', 'Computer Science', 'RS'],
    cta: 'OCR grade boundaries',
  },
  {
    href: '/exams/gcse/wjec',
    title: 'WJEC GCSE Grade Boundaries',
    desc: 'WJEC and Eduqas GCSE grade boundaries for Wales and England. The main awarding body for Welsh-medium and English-medium qualifications.',
    subjects: ['Maths', 'Welsh', 'English', 'Science (Double Award)', 'Geography', 'History'],
    cta: 'WJEC grade boundaries',
  },
];

const GCSE_GRADE_INFO = [
  { grade: '9', label: 'Distinction*', pct: 'Top ~3%', color: '#6366f1' },
  { grade: '8', label: 'Distinction', pct: 'Top ~7%', color: '#8b5cf6' },
  { grade: '7', label: 'A equivalent', pct: 'Top ~17%', color: '#a78bfa' },
  { grade: '6', label: 'B equivalent', pct: 'Top ~30%', color: '#3b82f6' },
  { grade: '5', label: 'Strong pass', pct: 'Top ~43%', color: '#22c55e' },
  { grade: '4', label: 'Standard pass', pct: 'Top ~58%', color: '#84cc16' },
  { grade: '3', label: 'D equivalent', pct: 'Top ~70%', color: '#eab308' },
];

const ACT_PERCENTILES = [
  { score: 36, pct: '99th', label: 'Perfect' },
  { score: 34, pct: '98th', label: 'Exceptional' },
  { score: 33, pct: '97th', label: 'Ivy-competitive' },
  { score: 30, pct: '93rd', label: 'Top 7%' },
  { score: 28, pct: '88th', label: 'Highly competitive' },
  { score: 27, pct: '85th', label: 'Strong' },
  { score: 24, pct: '74th', label: 'Above average' },
  { score: 21, pct: '57th', label: 'National average' },
  { score: 18, pct: '38th', label: 'Below average' },
];

const SAT_MILESTONES = [
  { score: '1580–1600', pct: '99th+', context: 'Perfect / near-perfect' },
  { score: '1500–1580', pct: '96–99th', context: 'Highly selective (Harvard, MIT)' },
  { score: '1400–1500', pct: '94–96th', context: 'Selective (UCLA, Michigan)' },
  { score: '1300–1400', pct: '86–94th', context: 'Competitive (Boston Univ.)' },
  { score: '1200–1300', pct: '74–86th', context: 'Above average' },
  { score: '1060', pct: '57th', context: 'National average' },
];

const STATS = [
  { value: '7', label: 'Exams covered' },
  { value: '4', label: 'GCSE boards' },
  { value: '2026', label: 'Data updated' },
  { value: '100%', label: 'Free, no signup' },
];

const HOW_STEPS = [
  {
    n: '01',
    title: 'Pick your exam',
    body: 'Choose from ACT, SAT, GCSE (AQA, Edexcel, OCR, WJEC), A-Levels, GRE, GMAT, or LSAT.',
  },
  {
    n: '02',
    title: 'Enter your score',
    body: 'Type in your score or drag the slider. For GCSE, select your subject and exam board.',
  },
  {
    n: '03',
    title: 'See where you stand',
    body: 'Get your national percentile, grade boundary context, college ranges, and improvement tips — instantly.',
  },
];

const TESTIMONIALS = [
  {
    quote: 'Checked my AQA Maths boundary the moment results dropped. Knew my grade before I even opened the envelope.',
    name: 'Amara O.',
    context: 'GCSE Results 2025 · AQA Maths',
  },
  {
    quote: 'Got my ACT score and immediately came here. Knowing I hit the 91st percentile made the whole day.',
    name: 'Marcus T.',
    context: 'ACT · Class of 2026',
  },
  {
    quote: 'The SAT score calculator even showed me my ACT equivalent. Made it so easy to decide which test to send.',
    name: 'Priya S.',
    context: 'SAT 1490 · Applying to US colleges',
  },
  {
    quote: 'WJEC boundaries are always hard to find. GradesNova had them up before any other site.',
    name: 'Rhys M.',
    context: 'GCSE Wales · WJEC',
  },
];

const ARTICLES = [
  { href: '/articles/sat-vs-act-complete-comparison', title: 'SAT vs ACT: Which test should you take in 2026?', tag: 'Guide' },
  { href: '/articles/understanding-grade-boundaries-explained', title: 'GCSE Grade Boundaries Explained — how they work and why they change', tag: 'Guide' },
  { href: '/articles/gcse-maths-grade-boundaries-trends', title: 'GCSE Maths Grade Boundary Trends: 5 years of data', tag: 'Analysis' },
  { href: '/articles/gre-vs-gmat-which-exam-should-you-take', title: 'GRE vs GMAT: Which exam do business schools prefer?', tag: 'Guide' },
  { href: '/exams/act/scores', title: 'What is a Good ACT Score? College ranges & percentiles', tag: 'ACT' },
  { href: '/exams/sat/scores', title: 'What is a Good SAT Score? Full breakdown by school selectivity', tag: 'SAT' },
  { href: '/exams/gcse/grade-boundaries-explained', title: 'How GCSE Grade Boundaries Are Set — the official process', tag: 'GCSE' },
  { href: '/exams/act/prep-tips', title: 'ACT Prep Tips: How to improve your composite score', tag: 'ACT' },
];

/* ─── component ──────────────────────────────────────────────────── */
export default function Home() {
  return (
    <main className="overflow-hidden bg-[#0a0c14] text-white">

      {/* ── HERO ───────────────────────────────────────────────────── */}
      <section className="relative pt-28 pb-20 px-4 text-center">
        {/* ambient glow */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 -z-10"
          style={{
            background:
              'radial-gradient(ellipse 80% 50% at 50% -10%, rgba(99,102,241,0.18) 0%, transparent 70%)',
          }}
        />

        <p className="inline-flex items-center gap-2 text-xs font-medium tracking-widest uppercase text-indigo-400 mb-6">
          <span className="inline-block w-1.5 h-1.5 rounded-full bg-indigo-400 animate-pulse" />
          Free · No signup · Updated {currentYear}
        </p>

        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight leading-[1.1] max-w-4xl mx-auto mb-6">
          ACT Score Calculator,{' '}
          <span className="text-indigo-400">SAT Score Calculator</span>
          {' '}&amp; GCSE Grade Boundaries
        </h1>

        <p className="text-lg text-white/60 max-w-2xl mx-auto mb-10 leading-relaxed">
          Enter your score and instantly see your percentile, grade boundary, and what it means for
          college admission or sixth form. Covers ACT, SAT, GRE, GMAT, LSAT, GCSE (AQA, Edexcel,
          OCR, WJEC) and A-Levels. No account needed.
        </p>

        {/* CTA pill nav */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {[
            { href: '/exams/act', label: 'ACT Calculator' },
            { href: '/exams/sat', label: 'SAT Calculator' },
            { href: '/exams/gcse', label: 'GCSE Boundaries' },
            { href: '/exams/a-levels', label: 'A-Level Boundaries' },
            { href: '/exams/gre', label: 'GRE Calculator' },
            { href: '/exams/lsat', label: 'LSAT Calculator' },
          ].map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className="rounded-full border border-white/10 bg-white/5 px-5 py-2 text-sm font-medium text-white/80 hover:bg-indigo-600/30 hover:border-indigo-500/50 hover:text-white transition-all duration-200"
            >
              {label}
            </Link>
          ))}
        </div>

        {/* Hero stats */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-2xl mx-auto">
          {STATS.map(({ value, label }) => (
            <div key={label} className="rounded-xl border border-white/8 bg-white/4 p-4 text-center">
              <p className="text-2xl font-bold text-indigo-300">{value}</p>
              <p className="text-xs text-white/50 mt-1">{label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── US COLLEGE ADMISSIONS ──────────────────────────────────── */}
      <section id="us-exams" className="py-20 px-4 max-w-6xl mx-auto">
        <div className="mb-12">
          <p className="text-xs font-semibold tracking-widest uppercase text-indigo-400 mb-3">US College Admissions</p>
          <h2 className="text-3xl font-bold">ACT &amp; SAT Score Calculators</h2>
          <p className="text-white/50 mt-3 max-w-xl">
            Free calculators for both major US standardised tests. See your percentile, what
            colleges your score reaches, and your conversion between tests.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {US_EXAMS.map((exam) => (
            <Link
              key={exam.href}
              href={exam.href}
              className="group relative rounded-2xl border border-white/10 bg-white/4 p-7 hover:border-indigo-500/40 hover:bg-indigo-950/30 transition-all duration-300"
            >
              {exam.badge && (
                <span className="absolute top-5 right-5 text-[10px] font-bold tracking-wider uppercase bg-indigo-600/30 text-indigo-300 border border-indigo-500/30 rounded-full px-3 py-1">
                  {exam.badge}
                </span>
              )}
              <div className="flex items-center gap-3 mb-4">
                <span className="text-2xl">{exam.emoji}</span>
                <div>
                  <p className="text-xs text-white/40 font-mono">{exam.label}</p>
                  <h3 className="text-xl font-bold">{exam.title}</h3>
                </div>
              </div>
              <p className="text-xs text-indigo-400 font-medium mb-3">{exam.subtitle}</p>
              <p className="text-white/60 text-sm leading-relaxed mb-5">{exam.desc}</p>
              <ul className="space-y-1.5 mb-6">
                {exam.facts.map((f) => (
                  <li key={f} className="flex items-center gap-2 text-sm text-white/70">
                    <CheckIcon />
                    {f}
                  </li>
                ))}
              </ul>
              <span className="inline-flex items-center gap-2 text-sm font-semibold text-indigo-300 group-hover:text-indigo-200 transition-colors">
                {exam.cta} <ArrowRight />
              </span>
            </Link>
          ))}
        </div>
      </section>

      {/* ── ACT NATIONAL PERCENTILES (mini section) ────────────────── */}
      <section className="py-14 px-4 bg-white/[0.025] border-y border-white/6">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-4">
            <div>
              <p className="text-xs font-semibold tracking-widest uppercase text-indigo-400 mb-2">Quick reference</p>
              <h2 className="text-2xl font-bold">ACT National Percentiles {currentYear}</h2>
              <p className="text-white/50 text-sm mt-1">National average composite: <strong className="text-white">21</strong> (57th percentile)</p>
            </div>
            <Link
              href="/exams/act"
              className="text-sm font-semibold text-indigo-300 hover:text-indigo-200 inline-flex items-center gap-1.5 shrink-0"
            >
              Full ACT score calculator <ArrowRight />
            </Link>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-white/10">
                  <th className="text-left py-2.5 pr-6 text-white/40 font-medium">ACT Score</th>
                  <th className="text-left py-2.5 pr-6 text-white/40 font-medium">Percentile</th>
                  <th className="text-left py-2.5 text-white/40 font-medium hidden sm:table-cell">What it means</th>
                </tr>
              </thead>
              <tbody>
                {ACT_PERCENTILES.map(({ score, pct, label }) => (
                  <tr key={score} className="border-b border-white/5 hover:bg-white/3 transition-colors">
                    <td className="py-3 pr-6 font-bold text-indigo-300">{score}</td>
                    <td className="py-3 pr-6 text-white/80">{pct}</td>
                    <td className="py-3 text-white/50 hidden sm:table-cell">{label}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-white/30 mt-4">Source: ACT, Inc. national norms {cycle}. <Link href="/exams/act" className="text-indigo-400 hover:underline">See full table with all scores →</Link></p>
        </div>
      </section>

      {/* ── SAT MILESTONES ─────────────────────────────────────────── */}
      <section className="py-14 px-4 border-b border-white/6">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-4">
            <div>
              <p className="text-xs font-semibold tracking-widest uppercase text-indigo-400 mb-2">Quick reference</p>
              <h2 className="text-2xl font-bold">SAT Score Ranges &amp; What They Mean</h2>
              <p className="text-white/50 text-sm mt-1">National average: <strong className="text-white">1060</strong> (57th percentile)</p>
            </div>
            <Link
              href="/exams/sat"
              className="text-sm font-semibold text-indigo-300 hover:text-indigo-200 inline-flex items-center gap-1.5 shrink-0"
            >
              Full SAT score calculator <ArrowRight />
            </Link>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {SAT_MILESTONES.map(({ score, pct, context }) => (
              <div key={score} className="rounded-xl border border-white/8 bg-white/4 p-4">
                <p className="text-lg font-bold text-indigo-300">{score}</p>
                <p className="text-xs text-white/40 mt-0.5">{pct} percentile</p>
                <p className="text-sm text-white/70 mt-2">{context}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── GCSE GRADE BOUNDARIES ─────────────────────────────────── */}
      <section id="gcse" className="py-20 px-4 max-w-6xl mx-auto">
        <div className="mb-12">
          <p className="text-xs font-semibold tracking-widest uppercase text-indigo-400 mb-3">UK Qualifications</p>
          <h2 className="text-3xl font-bold">GCSE Grade Boundaries by Exam Board</h2>
          <p className="text-white/50 mt-3 max-w-2xl leading-relaxed">
            Grade boundaries differ between AQA, Edexcel, OCR, and WJEC — and between subjects and
            years. Select your board below to find the exact mark you need for each grade.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-5 mb-12">
          {GCSE_BOARDS.map((board) => (
            <Link
              key={board.href}
              href={board.href}
              className="group rounded-2xl border border-white/10 bg-white/4 p-6 hover:border-indigo-500/40 hover:bg-indigo-950/30 transition-all duration-300"
            >
              <h3 className="text-lg font-bold mb-2 group-hover:text-indigo-300 transition-colors">
                {board.title}
              </h3>
              <p className="text-sm text-white/55 leading-relaxed mb-4">{board.desc}</p>
              <div className="flex flex-wrap gap-1.5 mb-5">
                {board.subjects.map((s) => (
                  <span key={s} className="text-[11px] bg-white/6 border border-white/8 rounded-full px-2.5 py-0.5 text-white/60">
                    {s}
                  </span>
                ))}
              </div>
              <span className="inline-flex items-center gap-2 text-sm font-semibold text-indigo-300 group-hover:text-indigo-200 transition-colors">
                {board.cta} <ArrowRight />
              </span>
            </Link>
          ))}
        </div>

        {/* GCSE grade scale explainer */}
        <div className="rounded-2xl border border-white/8 bg-white/3 p-6 md:p-8">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
            <div>
              <h3 className="text-lg font-bold">GCSE Grading Scale: 9–1 Explained</h3>
              <p className="text-sm text-white/50 mt-1">England, Wales &amp; Northern Ireland · 2025 results</p>
            </div>
            <Link href="/exams/gcse" className="text-sm font-semibold text-indigo-300 hover:text-indigo-200 inline-flex items-center gap-1.5 shrink-0">
              GCSE grade boundary checker <ArrowRight />
            </Link>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-3">
            {GCSE_GRADE_INFO.map(({ grade, label, pct, color }) => (
              <div key={grade} className="rounded-xl border border-white/8 bg-white/4 p-3 text-center">
                <p className="text-2xl font-bold" style={{ color }}>{grade}</p>
                <p className="text-xs text-white/60 mt-1">{label}</p>
                <p className="text-[10px] text-white/35 mt-0.5">{pct}</p>
              </div>
            ))}
          </div>
          <p className="text-xs text-white/30 mt-5">
            Approximate national proportions. Grade 5 is the "strong pass" required by many sixth forms and employers.{' '}
            <Link href="/exams/gcse/grade-boundaries-explained" className="text-indigo-400 hover:underline">How grade boundaries work →</Link>
          </p>
        </div>
      </section>

      {/* ── A-LEVELS ──────────────────────────────────────────────── */}
      <section className="py-14 px-4 bg-white/[0.025] border-y border-white/6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row md:items-center gap-8">
          <div className="flex-1">
            <p className="text-xs font-semibold tracking-widest uppercase text-indigo-400 mb-3">UK Advanced Qualifications</p>
            <h2 className="text-2xl font-bold mb-3">A-Level Grade Boundaries &amp; UCAS Points</h2>
            <p className="text-white/55 leading-relaxed mb-4 max-w-lg">
              Find A-Level grade boundaries for AQA, Edexcel, OCR, and WJEC. See how your predicted
              or actual grades convert to UCAS Tariff points and understand what's needed for your
              university offer.
            </p>
            <ul className="space-y-2 text-sm">
              {['A* = 56 UCAS points', 'A = 48 UCAS points', 'B = 40 UCAS points', 'C = 32 UCAS points'].map((f) => (
                <li key={f} className="flex items-center gap-2 text-white/65">
                  <CheckIcon /> {f}
                </li>
              ))}
            </ul>
          </div>
          <div className="md:w-64 shrink-0">
            <Link
              href="/exams/a-levels"
              className="block w-full rounded-2xl border border-indigo-500/30 bg-indigo-600/15 px-6 py-5 text-center hover:bg-indigo-600/25 transition-colors"
            >
              <span className="text-3xl mb-2 block">📚</span>
              <p className="font-bold text-lg text-indigo-200">A-Level Boundaries</p>
              <p className="text-sm text-white/50 mt-1">All boards · {currentYear}</p>
              <p className="mt-4 text-sm font-semibold text-indigo-300 inline-flex items-center gap-1.5">
                Check grade boundaries <ArrowRight />
              </p>
            </Link>
          </div>
        </div>
      </section>

      {/* ── GRAD ADMISSIONS ────────────────────────────────────────── */}
      <section className="py-20 px-4 max-w-6xl mx-auto">
        <div className="mb-12">
          <p className="text-xs font-semibold tracking-widest uppercase text-indigo-400 mb-3">Graduate Admissions</p>
          <h2 className="text-3xl font-bold">GRE, GMAT &amp; LSAT Score Calculators</h2>
          <p className="text-white/50 mt-3 max-w-xl">
            Applying to grad school, business school, or law school? Find your score percentile and
            compare against program medians.
          </p>
        </div>
        <div className="grid sm:grid-cols-3 gap-5">
          {GRAD_EXAMS.map((exam) => (
            <Link
              key={exam.href}
              href={exam.href}
              className="group rounded-2xl border border-white/10 bg-white/4 p-6 hover:border-indigo-500/40 hover:bg-indigo-950/30 transition-all duration-300"
            >
              <span className="text-3xl mb-4 block">{exam.emoji}</span>
              <h3 className="text-lg font-bold mb-1 group-hover:text-indigo-300 transition-colors">{exam.title}</h3>
              <p className="text-xs text-indigo-400 font-medium mb-3">{exam.subtitle}</p>
              <p className="text-sm text-white/55 leading-relaxed mb-5">{exam.desc}</p>
              <span className="inline-flex items-center gap-2 text-sm font-semibold text-indigo-300 group-hover:text-indigo-200 transition-colors">
                {exam.cta} <ArrowRight />
              </span>
            </Link>
          ))}
        </div>
      </section>

      {/* ── HOW IT WORKS ──────────────────────────────────────────── */}
      <section id="how-it-works" className="py-20 px-4 bg-white/[0.025] border-y border-white/6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-xs font-semibold tracking-widest uppercase text-indigo-400 mb-3">How it works</p>
            <h2 className="text-3xl font-bold">From score to insight in seconds</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {HOW_STEPS.map(({ n, title, body }) => (
              <div key={n} className="relative">
                <p className="text-5xl font-black text-white/6 absolute -top-3 -left-1 select-none">{n}</p>
                <div className="relative pl-3">
                  <h3 className="text-lg font-bold mb-2">{title}</h3>
                  <p className="text-white/55 text-sm leading-relaxed">{body}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-12 text-center">
            <p className="text-sm text-white/40">
              No account. No email. No ads obscuring your result.{' '}
              <Link href="/exams/act" className="text-indigo-400 hover:underline">Start with the ACT calculator →</Link>
            </p>
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ─────────────────────────────────────────── */}
      <section className="py-20 px-4 max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-xs font-semibold tracking-widest uppercase text-indigo-400 mb-3">What students say</p>
          <h2 className="text-3xl font-bold">Used on results day worldwide</h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {TESTIMONIALS.map(({ quote, name, context }) => (
            <div key={name} className="rounded-2xl border border-white/8 bg-white/4 p-5">
              <p className="text-yellow-400 text-sm mb-3">★★★★★</p>
              <p className="text-sm text-white/70 leading-relaxed mb-4">"{quote}"</p>
              <p className="text-sm font-semibold text-white">{name}</p>
              <p className="text-xs text-white/35 mt-0.5">{context}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── ARTICLES / RESOURCES ─────────────────────────────────── */}
      <section className="py-20 px-4 bg-white/[0.025] border-y border-white/6">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 gap-4">
            <div>
              <p className="text-xs font-semibold tracking-widest uppercase text-indigo-400 mb-3">Guides &amp; resources</p>
              <h2 className="text-3xl font-bold">Score guides, prep tips &amp; deep dives</h2>
            </div>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {ARTICLES.map(({ href, title, tag }) => (
              <Link
                key={href}
                href={href}
                className="group rounded-xl border border-white/8 bg-white/4 p-5 hover:border-indigo-500/30 hover:bg-indigo-950/20 transition-all duration-200"
              >
                <span className="inline-block text-[10px] font-bold tracking-wider uppercase bg-indigo-600/20 text-indigo-400 border border-indigo-500/20 rounded-full px-2.5 py-0.5 mb-3">
                  {tag}
                </span>
                <p className="text-sm font-medium text-white/80 leading-snug group-hover:text-white transition-colors">
                  {title}
                </p>
                <span className="inline-flex items-center gap-1 mt-3 text-xs text-indigo-400">
                  Read guide <ArrowRight />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── BOTTOM CTA ───────────────────────────────────────────── */}
      <section className="py-24 px-4 text-center relative">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 -z-10"
          style={{
            background:
              'radial-gradient(ellipse 60% 60% at 50% 100%, rgba(99,102,241,0.12) 0%, transparent 70%)',
          }}
        />
        <h2 className="text-3xl sm:text-4xl font-bold mb-4">Ready to see your score?</h2>
        <p className="text-white/50 mb-10 max-w-lg mx-auto">
          Pick your exam below. Free, instant, no signup required.
        </p>
        <div className="flex flex-wrap justify-center gap-3 max-w-2xl mx-auto">
          {[
            { href: '/exams/act', label: 'ACT Score Calculator' },
            { href: '/exams/sat', label: 'SAT Score Calculator' },
            { href: '/exams/gcse', label: 'GCSE Grade Boundaries' },
            { href: '/exams/gcse/aqa', label: 'AQA Boundaries' },
            { href: '/exams/gcse/edexcel', label: 'Edexcel Boundaries' },
            { href: '/exams/gcse/ocr', label: 'OCR Boundaries' },
            { href: '/exams/gcse/wjec', label: 'WJEC Boundaries' },
            { href: '/exams/a-levels', label: 'A-Level Boundaries' },
            { href: '/exams/gre', label: 'GRE Calculator' },
            { href: '/exams/gmat', label: 'GMAT Calculator' },
            { href: '/exams/lsat', label: 'LSAT Calculator' },
          ].map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className="rounded-full border border-white/10 bg-white/5 px-5 py-2 text-sm font-medium text-white/75 hover:bg-indigo-600/25 hover:border-indigo-500/40 hover:text-white transition-all duration-200"
            >
              {label}
            </Link>
          ))}
        </div>
      </section>

    </main>
  );
}
