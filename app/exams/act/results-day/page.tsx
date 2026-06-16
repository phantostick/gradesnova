// app/exams/act/score-release/page.tsx
// ACT SCORE RELEASE 2026 — Deep Dive Content Page
// Targets: "act score release date 2026", "when do act scores come out", "act score release time",
//          "what to do if act score is low", "act score release 2026", "act superscore 2026",
//          "act score appeal 2026", "how long to get act scores"

import type { Metadata } from 'next';
import Link from 'next/link';
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';

export const metadata: Metadata = {
  title: 'ACT Score Release Dates 2026 | When Scores Come Out & What To Do | GradesNova',
  description:
    'Everything you need to know about ACT score release dates in 2026. When ACT scores come out, what time they are available, what to do if your score disappoints, how to request a rescore, and how superscoring works.',
  alternates: { canonical: 'https://gradesnova.com/exams/act/score-release' },
  openGraph: {
    title: 'ACT Score Release Dates 2026 | When Scores Come Out & What To Do',
    description:
      'Full guide to ACT score release dates 2026 — timings, how to read your score report, what to do if results disappoint, rescoring, and superscoring explained.',
    url: 'https://gradesnova.com/exams/act/score-release',
    type: 'article',
    siteName: 'GradesNova',
  },
  robots: { index: true, follow: true },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'ACT Score Release Dates 2026: When Scores Come Out, What To Do & Rescoring',
  description:
    'The complete guide to ACT score release dates 2026 — when and how scores are released, how to read your score report, what to do if your score disappoints, and how to request a rescore or hand score.',
  url: 'https://gradesnova.com/exams/act/score-release',
  author: { '@type': 'Organization', name: 'GradesNova' },
  publisher: { '@type': 'Organization', name: 'GradesNova', url: 'https://gradesnova.com' },
  dateModified: '2026-05-26',
};

const jsonLdFAQ = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'When do ACT scores come out in 2026?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'ACT scores are typically released online 2–8 weeks after your test date. Most scores for standard (non-writing) tests appear within 2 weeks. Writing scores take up to 8 weeks. You will receive an email when your scores are ready — check your ACT web account at act.org.',
      },
    },
    {
      '@type': 'Question',
      name: 'What time are ACT scores released?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'ACT does not release scores at a fixed time of day. Scores appear in your online account at act.org as they are processed — usually early morning Central Time. Check your account early in the morning on your expected release date.',
      },
    },
    {
      '@type': 'Question',
      name: 'What should I do if my ACT score is lower than expected?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'If your score disappoints, you have several options: register to retake the ACT (you can take it up to 12 times), use superscoring across multiple sittings, request a hand score review for the essay, or focus targeted prep on your weakest section. Do not send this score to colleges until you decide your strategy.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is ACT superscoring?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'ACT superscoring takes your highest section score from each of your test dates and combines them into a new composite. ACT officially calculates a superscore for you. Many colleges — including a growing number of selective universities — accept the ACT superscore. Check each college\'s policy individually.',
      },
    },
    {
      '@type': 'Question',
      name: 'How do I request an ACT rescore?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'You can request a hand score of your ACT Writing (essay) section through your act.org account for a fee (~$50). For multiple-choice sections, you can order a Test Information Release (TIR) for applicable test dates to verify your answers. Submit requests through act.org — deadlines are typically 3 months after your test date.',
      },
    },
  ],
};

const SCORE_RELEASE_TIMELINE = [
  {
    time: 'Test day',
    icon: '✏️',
    title: 'You sit the ACT',
    detail: 'The ACT is offered up to 7 times per year (February, April, June, July, September, October, December). Your test date determines your score release window — standard tests release in 2 weeks, writing scores take up to 8 weeks.',
    color: '#6366f1',
  },
  {
    time: '~10 days later',
    icon: '📧',
    title: 'Email notification sent',
    detail: 'ACT sends an email to the address on your account when your scores are ready to view. Check your spam folder if you do not receive it within your expected window. Scores for multiple-choice sections arrive before writing.',
    color: '#34d399',
  },
  {
    time: '2 weeks post-test',
    icon: '📊',
    title: 'Multiple-choice scores available',
    detail: 'Log in to act.org to view your composite score (1–36) and your four section scores: English, Mathematics, Reading, and Science. Your score report also shows subscores and benchmarks.',
    color: '#34d399',
  },
  {
    time: '5–8 weeks post-test',
    icon: '📝',
    title: 'Writing score released (if taken)',
    detail: 'If you opted for the ACT with Writing, your essay is scored separately by two raters on a 2–12 scale across four domains. Writing scores take longer — factor this in if colleges require the essay.',
    color: '#ec4899',
  },
  {
    time: 'Within 2 weeks of scores',
    icon: '🎯',
    title: 'Decide on score sends',
    detail: 'You have up to 4 free score sends included at registration (used before the test). Additional score reports cost $16 each. If your score is strong, send to colleges now. If not, hold off and plan your next steps.',
    color: '#f59e0b',
  },
  {
    time: 'Up to 3 months post-test',
    icon: '🔍',
    title: 'Request TIR or hand score',
    detail: 'For eligible test dates, order a Test Information Release (TIR) to review your answers. Essay hand score requests must also be submitted within 3 months. Both are available through your act.org account.',
    color: '#a855f7',
  },
  {
    time: 'Next test date',
    icon: '🔄',
    title: 'Retake if needed',
    detail: 'You can take the ACT up to 12 times. Most students improve on their second or third attempt. ACT superscoring means only your best section scores are combined — retaking is low-risk if you prepare strategically.',
    color: '#34d399',
  },
];

const LOW_SCORE_OPTIONS = [
  {
    icon: '🔄',
    title: 'Register to retake the ACT',
    color: '#34d399',
    body: 'The ACT can be taken up to 12 times. Most students see meaningful score increases on their second attempt, especially with targeted prep. Check upcoming test dates on act.org and register early — popular dates fill fast.',
  },
  {
    icon: '📊',
    title: 'Leverage superscoring',
    color: '#6366f1',
    body: 'ACT officially calculates a superscore combining your best section scores across all sittings. If you scored 30 in Math on one date and 32 in Reading on another, your superscore reflects both highs. Many colleges accept this — check each school\'s policy.',
  },
  {
    icon: '🎯',
    title: 'Do targeted section prep',
    color: '#a855f7',
    body: 'Review your score report carefully — it shows subscores by category (e.g. "Algebra & Functions" or "Craft & Structure"). Focus your next prep cycle on your two weakest subscores rather than retaking the whole test cold.',
  },
  {
    icon: '📋',
    title: 'Consider the SAT as an alternative',
    color: '#f59e0b',
    body: 'If the ACT consistently underperforms your expectations, try an official SAT practice test. Some students naturally score better on one exam than the other due to format differences — the SAT is math-heavy while the ACT includes Science.',
  },
  {
    icon: '🔍',
    title: 'Request a hand score or TIR',
    color: '#ec4899',
    body: 'If your score seems inconsistent with practice tests, order a Test Information Release (for MC sections) or a hand score (for Writing). While scoring errors are rare, a TIR lets you verify your answer sheet was processed correctly.',
  },
];

const RESCORE_TYPES = [
  {
    type: 'Test Information Release (TIR)',
    cost: '~$30',
    what: 'For eligible test dates (typically October, April, June), you receive a copy of your test questions, your answers, and the answer key. Allows you to verify MC scoring accuracy.',
    when: 'Order if your score seems significantly lower than your practice tests. Deadlines are typically 3 months post-test.',
    color: '#34d399',
  },
  {
    type: 'Essay Hand Score',
    cost: '~$50',
    what: 'Two additional trained raters re-score your Writing essay. If the new score differs from the original by more than 1 point per domain, a third reader adjudicates.',
    when: 'Worth requesting if your essay score seems inconsistent with your writing ability. Refunded if your score changes. Must be requested within 3 months of your test date.',
    color: '#6366f1',
  },
  {
    type: 'Score Verification',
    cost: '~$50',
    what: 'ACT manually verifies that your answer sheet was scanned and scored correctly. Covers multiple-choice sections only.',
    when: 'Use if you have strong reason to believe a scanning error occurred. Rare — the TIR usually reveals enough information first.',
    color: '#a855f7',
  },
];

const HUB_PAGES = [
  {
    title: 'ACT Score Calculator',
    desc: 'Convert raw section scores to scaled scores instantly. See exactly where you stand and what to target.',
    href: '/exams/act',
    color: '#34d399',
    icon: '🧮',
    badge: 'Calculator',
  },
  {
    title: 'ACT Prep Tips',
    desc: 'How to structure your ACT prep, which resources to use, and how to improve your composite by 3+ points.',
    href: '/exams/act/prep-tips',
    color: '#6366f1',
    icon: '🎯',
    badge: 'Prep',
  },
  {
    title: 'ACT Score Release 2026',
    desc: 'When scores come out, what to do if results disappoint, rescoring options, and superscoring explained.',
    href: '/exams/act/score-release',
    color: '#ec4899',
    icon: '📅',
    badge: '2026 dates',
  },
  {
    title: 'ACT Revision Tips & Strategy',
    desc: 'Evidence-based study methods for each ACT section — English, Math, Reading, Science, and Writing.',
    href: '/exams/act/revision-tips',
    color: '#f59e0b',
    icon: '📖',
    badge: 'Strategy',
  },
];

const SCORE_RELEASE_DATES_2026 = [
  { testDate: 'February 8, 2026', scoreRelease: 'February 17–24, 2026', writing: 'March 10, 2026', tir: false },
  { testDate: 'April 18, 2026', scoreRelease: 'April 28 – May 5, 2026', writing: 'May 19, 2026', tir: true },
  { testDate: 'June 13, 2026', scoreRelease: 'June 23–30, 2026', writing: 'July 14, 2026', tir: true },
  { testDate: 'July 18, 2026', scoreRelease: 'July 28 – Aug 4, 2026', writing: 'Aug 18, 2026', tir: false },
  { testDate: 'September 12, 2026', scoreRelease: 'September 22–29, 2026', writing: 'Oct 13, 2026', tir: false },
  { testDate: 'October 24, 2026', scoreRelease: 'Nov 3–10, 2026', writing: 'Nov 24, 2026', tir: true },
  { testDate: 'December 12, 2026', scoreRelease: 'December 22–29, 2026', writing: 'Jan 13, 2027', tir: false },
];

export default function ACTScoreReleasePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdFAQ) }} />

      <main className="bg-[#0a0c14] min-h-screen text-white">
        <Navbar />

        {/* ── HEADER ── */}
        <header className="bg-[#0d0f1a] border-b border-white/6 py-12 mt-16">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <nav aria-label="Breadcrumb" className="mb-5">
              <ol className="flex items-center gap-2 text-xs text-slate-500">
                <li><Link href="/" className="hover:text-white transition-colors">Home</Link></li>
                <li aria-hidden="true">›</li>
                <li><Link href="/exams/act" className="hover:text-white transition-colors">ACT Score Calculator</Link></li>
                <li aria-hidden="true">›</li>
                <li><Link href="/exams/act/guide" className="hover:text-white transition-colors">ACT Guide</Link></li>
                <li aria-hidden="true">›</li>
                <li className="text-slate-400" aria-current="page">Score Release 2026</li>
              </ol>
            </nav>

            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-pink-500/15 flex items-center justify-center text-xl" aria-hidden="true">📅</div>
              <span className="text-xs font-mono text-pink-400/70 uppercase tracking-widest">ACT · Score Release · 2026 Dates</span>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold text-white tracking-tight mb-4 leading-tight">
              ACT Score Release Dates 2026: Everything You Need to Know
            </h1>
            <p className="text-lg text-slate-400 leading-relaxed max-w-2xl">
              ACT scores are released 2–8 weeks after your test date. This guide covers every 2026 release window, what time scores appear, how to read your report, what to do if your score disappoints, and when rescoring is worth it.
            </p>

            <div className="flex items-center gap-4 mt-5 text-xs text-slate-500">
              <span>Updated May 2026</span>
              <span>·</span>
              <span>~8 min read</span>
            </div>
          </div>
        </header>

        <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-14">

          {/* ── KEY FACTS STRIP ── */}
          <section aria-labelledby="key-facts-heading">
            <h2 id="key-facts-heading" className="sr-only">Key facts about ACT score release 2026</h2>
            <div className="grid sm:grid-cols-3 gap-4">
              {[
                { icon: '⏱️', label: 'MC scores released', value: '~2 weeks', sub: 'After your test date', color: '#ec4899' },
                { icon: '📝', label: 'Writing scores released', value: '5–8 weeks', sub: 'After your test date', color: '#34d399' },
                { icon: '🔄', label: 'Max retakes allowed', value: '12 times', sub: 'Superscore accepted at many colleges', color: '#6366f1' },
              ].map(card => (
                <div key={card.label} className="bg-[#12141f] border border-white/8 rounded-xl p-5">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-lg" aria-hidden="true">{card.icon}</span>
                    <span className="text-xs text-slate-400 font-medium">{card.label}</span>
                  </div>
                  <p className="text-2xl font-bold font-mono" style={{ color: card.color }}>{card.value}</p>
                  <p className="text-xs text-slate-500 mt-0.5">{card.sub}</p>
                </div>
              ))}
            </div>
          </section>

          {/* ── WHAT HAPPENS WHEN SCORES RELEASE ── */}
          <section aria-labelledby="what-happens-heading">
            <h2 id="what-happens-heading" className="text-2xl font-bold text-white mb-4">How ACT score release works</h2>
            <div className="space-y-4 text-slate-400 leading-relaxed">
              <p>
                Unlike a single national results day, ACT scores are released on a rolling basis tied to your individual test date. Multiple-choice scores (English, Math, Reading, Science) are typically available <strong className="text-white">within 2 weeks</strong> of your test. If you took the ACT with Writing, your essay score takes an additional <strong className="text-white">3–6 weeks</strong> on top of that.
              </p>
              <p>
                ACT will email you when your scores are ready — but the notification sometimes lags behind the actual release. The most reliable method is to log in to your account at <strong className="text-white">act.org</strong> from around day 10 onward and check directly. Scores are not released at a fixed time, but most appear in the early morning Central Time.
              </p>
              <p>
                Your score report shows your <strong className="text-white">composite score (1–36)</strong>, four section scores, subscores by content area, benchmark comparisons, and — if you took Writing — your essay domain scores. It will not show your raw number-correct by default; you need a Test Information Release for that.
              </p>
            </div>

            <div className="mt-6 bg-pink-500/10 border border-pink-500/20 rounded-xl p-5 flex gap-4 items-start">
              <span className="text-xl shrink-0" aria-hidden="true">💡</span>
              <div>
                <p className="text-sm font-semibold text-white mb-1">Prepare before scores drop</p>
                <p className="text-sm text-slate-400 leading-relaxed">
                  Know which colleges you want to send scores to before release day — free score sends must be designated before the test. Check college score policies and superscore acceptance in advance using the <Link href="/exams/act/guide" className="text-emerald-400 hover:text-emerald-300 underline underline-offset-2">ACT Guide</Link> so you can act immediately when scores arrive.
                </p>
              </div>
            </div>
          </section>

          {/* ── 2026 SCORE RELEASE DATE TABLE ── */}
          <section aria-labelledby="dates-table-heading">
            <h2 id="dates-table-heading" className="text-2xl font-bold text-white mb-4">ACT score release dates 2026 — all test windows</h2>
            <div className="space-y-4 text-slate-400 leading-relaxed">
              <p>
                The table below shows estimated score release windows for every 2026 ACT test date. Exact dates shift slightly year to year — check act.org for confirmed dates closer to your test.
              </p>
            </div>

            <div className="mt-5 overflow-x-auto rounded-xl border border-white/8">
              <table className="w-full text-xs">
                <thead>
                  <tr className="bg-[#12141f] border-b border-white/8">
                    <th className="text-left px-4 py-3 text-slate-400 font-semibold">Test date</th>
                    <th className="text-left px-4 py-3 text-slate-400 font-semibold">MC scores est.</th>
                    <th className="text-left px-4 py-3 text-slate-400 font-semibold">Writing scores est.</th>
                    <th className="text-left px-4 py-3 text-slate-400 font-semibold">TIR available</th>
                  </tr>
                </thead>
                <tbody>
                  {SCORE_RELEASE_DATES_2026.map((row, i) => (
                    <tr key={i} className={`border-b border-white/5 ${i % 2 === 0 ? 'bg-[#0e1019]' : 'bg-[#12141f]'}`}>
                      <td className="px-4 py-3 text-white font-medium">{row.testDate}</td>
                      <td className="px-4 py-3 text-emerald-400 font-mono">{row.scoreRelease}</td>
                      <td className="px-4 py-3 text-slate-400">{row.writing}</td>
                      <td className="px-4 py-3">
                        {row.tir
                          ? <span className="text-emerald-400 font-semibold">Yes</span>
                          : <span className="text-slate-600">No</span>}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-xs text-slate-500 mt-3">Dates are estimates based on historical ACT release patterns. Confirm at act.org. TIR = Test Information Release.</p>
          </section>

          {/* ── SCORE RELEASE TIMELINE ── */}
          <section aria-labelledby="timeline-heading">
            <h2 id="timeline-heading" className="text-2xl font-bold text-white mb-6">From test day to score: what happens when</h2>

            <div className="relative">
              <div className="absolute left-[19px] top-0 bottom-0 w-0.5 bg-white/8 hidden sm:block" aria-hidden="true" />
              <div className="space-y-5">
                {SCORE_RELEASE_TIMELINE.map((item, i) => (
                  <div key={i} className="flex gap-5 items-start">
                    <div className="relative shrink-0 hidden sm:flex">
                      <div
                        className="w-10 h-10 rounded-full flex items-center justify-center text-sm z-10 border-2"
                        style={{
                          backgroundColor: `${item.color}20`,
                          borderColor: `${item.color}40`,
                          color: item.color,
                        }}
                      >
                        {item.icon}
                      </div>
                    </div>
                    <div className="flex-1 bg-[#12141f] border border-white/8 rounded-xl p-4">
                      <div className="flex flex-wrap items-center gap-2 mb-1">
                        <span className="text-xs font-mono font-bold" style={{ color: item.color }}>{item.time}</span>
                        {i === 2 && (
                          <span className="text-[10px] bg-pink-500/20 text-pink-300 px-2 py-0.5 rounded-full font-medium">Key moment</span>
                        )}
                      </div>
                      <h3 className="text-sm font-bold text-white mb-1">{item.title}</h3>
                      <p className="text-xs text-slate-400 leading-relaxed">{item.detail}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* ── HOW TO READ YOUR SCORE REPORT ── */}
          <section aria-labelledby="score-report-heading">
            <h2 id="score-report-heading" className="text-2xl font-bold text-white mb-4">How to read your ACT score report</h2>
            <div className="space-y-4 text-slate-400 leading-relaxed">
              <p>
                Your ACT score report contains more than a single number. Here is what to look at and in what order:
              </p>
            </div>
            <div className="mt-5 space-y-3">
              {[
                { n: '1', title: 'Check your composite score first', body: 'The composite is the average of your four section scores (English, Mathematics, Reading, Science), rounded to the nearest whole number. Scores range from 1–36. The national average composite is around 20–21. Most selective colleges look for 30+.', color: '#34d399' },
                { n: '2', title: 'Review each section score individually', body: 'Section scores also run 1–36. A weak section drags your composite disproportionately — identify which section is pulling you down. One section 4–5 points below your others is a high-leverage target for your next prep cycle.', color: '#6366f1' },
                { n: '3', title: 'Study your subscores and benchmarks', body: 'Each section breaks into subscores by content area (e.g. "Modeling" for Math, "Integration of Knowledge" for Reading). Compare your subscores to ACT\'s college readiness benchmarks to pinpoint gaps.', color: '#a855f7' },
                { n: '4', title: 'Check your superscore potential', body: 'If this is not your first ACT sitting, your online account calculates your superscore — the composite formed from your highest section scores across all dates. Many colleges use this number, so compare it to each college\'s target range.', color: '#f59e0b' },
                { n: '5', title: 'Note your Writing domain scores (if taken)', body: 'The Writing score (2–12) is based on four domains: Ideas & Analysis, Development & Support, Organization, and Language Use. Writing does not affect your composite. Check whether your target colleges require it at all — many no longer do.', color: '#ec4899' },
              ].map(item => (
                <div key={item.n} className="flex gap-4 bg-[#12141f] border border-white/8 rounded-xl p-4">
                  <div className="w-7 h-7 rounded-full text-xs font-bold flex items-center justify-center shrink-0 font-mono"
                    style={{ backgroundColor: `${item.color}20`, color: item.color }}>
                    {item.n}
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-white mb-1">{item.title}</p>
                    <p className="text-xs text-slate-400 leading-relaxed">{item.body}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Calculator CTA */}
            <div className="mt-6 bg-emerald-500/10 border border-emerald-500/20 rounded-xl p-5 flex gap-4 items-start">
              <span className="text-xl shrink-0" aria-hidden="true">🧮</span>
              <div>
                <p className="text-sm font-semibold text-white mb-1">Instantly convert raw scores to scaled scores</p>
                <p className="text-sm text-slate-400 leading-relaxed mb-3">
                  Use the GradesNova ACT calculator to enter raw section scores and instantly see your scaled score and composite — plus how many more correct answers you need to hit your target.
                </p>
                <Link href="/exams/act"
                  className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white px-4 py-2 rounded-xl font-semibold text-sm transition-all">
                  ACT Score Calculator →
                </Link>
              </div>
            </div>
          </section>

          {/* ── IF YOUR SCORE DISAPPOINTS ── */}
          <section aria-labelledby="low-score-heading">
            <h2 id="low-score-heading" className="text-2xl font-bold text-white mb-4">What to do if your ACT score is lower than expected</h2>
            <div className="space-y-4 text-slate-400 leading-relaxed">
              <p>
                A disappointing score is not the end. The ACT can be retaken up to 12 times, superscoring protects your best work, and targeted prep routinely produces significant composite gains. The key is <strong className="text-white">not to send scores to colleges yet</strong> — you control which scores colleges see.
              </p>
            </div>

            <div className="mt-6 space-y-3">
              {LOW_SCORE_OPTIONS.map(option => (
                <div key={option.title} className="bg-[#12141f] border border-white/8 rounded-xl p-5 flex gap-4">
                  <span className="text-2xl shrink-0" aria-hidden="true">{option.icon}</span>
                  <div>
                    <h3 className="text-sm font-bold text-white mb-1.5">{option.title}</h3>
                    <p className="text-sm text-slate-400 leading-relaxed">{option.body}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6 bg-amber-500/10 border border-amber-500/20 rounded-xl px-5 py-4 flex gap-3 items-start">
              <span className="text-lg shrink-0" aria-hidden="true">⚠️</span>
              <p className="text-sm text-slate-300">
                <strong className="text-amber-300">Do not send scores impulsively.</strong> You control which ACT scores colleges receive. If your score is below target, hold off on score sends while you plan your next step. Check each college's score choice policy at <Link href="/exams/act/guide" className="text-amber-300 underline underline-offset-2 hover:text-amber-200">the ACT guide</Link>.
              </p>
            </div>
          </section>

          {/* ── WHAT TO DO IF SCORES ARE BETTER THAN EXPECTED ── */}
          <section aria-labelledby="better-heading">
            <h2 id="better-heading" className="text-2xl font-bold text-white mb-4">What to do if your score exceeds expectations</h2>
            <div className="space-y-4 text-slate-400 leading-relaxed">
              <p>
                A stronger-than-expected score opens doors — but there are still a few things to act on quickly.
              </p>
            </div>
            <div className="mt-5 grid sm:grid-cols-2 gap-4">
              {[
                { icon: '📨', title: 'Send scores to colleges immediately', body: 'If your composite meets or exceeds your target schools\' ranges, send your scores now. Additional score reports cost $16 each — factor this into your budget if you are applying to more than four schools.', color: '#34d399' },
                { icon: '🏫', title: 'Reassess your college list', body: 'A higher-than-expected composite may put reach schools within range. Check updated score percentiles — a 34+ composite puts you in the top 1% and opens merit scholarship opportunities at many universities.', color: '#6366f1' },
                { icon: '💰', title: 'Check merit scholarship thresholds', body: 'Many universities offer automatic merit aid above specific composite cutoffs (e.g. 28, 30, 32). A strong score could unlock significant scholarships — check each school\'s automatic award criteria now.', color: '#a855f7' },
                { icon: '🎉', title: 'Take a moment to be proud', body: 'The ACT is a challenging, high-stakes exam. A strong performance reflects real preparation and effort — celebrate it before diving into next steps.', color: '#ec4899' },
              ].map(tip => (
                <div key={tip.title} className="bg-[#12141f] border border-white/8 rounded-xl p-4">
                  <span className="text-2xl block mb-2" aria-hidden="true">{tip.icon}</span>
                  <h3 className="text-sm font-semibold text-white mb-1.5">{tip.title}</h3>
                  <p className="text-xs text-slate-400 leading-relaxed">{tip.body}</p>
                </div>
              ))}
            </div>
          </section>

          {/* ── SUPERSCORING ── */}
          <section aria-labelledby="superscore-heading">
            <h2 id="superscore-heading" className="text-2xl font-bold text-white mb-4">ACT superscoring explained</h2>
            <div className="space-y-4 text-slate-400 leading-relaxed">
              <p>
                ACT superscoring takes your best section score from each test date and combines them into a single composite. If you scored 28 in English on your first sitting and 31 in English on your second, the superscore uses 31 — regardless of how you did on other sections that day.
              </p>
              <p>
                ACT began officially calculating and reporting superscores in 2020. Your online account displays your superscore automatically once you have two or more sittings. The critical question is <strong className="text-white">whether individual colleges use it</strong> — policies vary. Check each college's admissions page or use their Common Data Set.
              </p>
            </div>

            <div className="mt-5 bg-[#12141f] border border-white/8 rounded-xl overflow-hidden">
              <div className="px-5 py-4 border-b border-white/8">
                <h3 className="text-sm font-bold text-white">Superscore example</h3>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-xs">
                  <thead>
                    <tr className="border-b border-white/8 bg-[#0e1019]">
                      <th className="text-left px-4 py-3 text-slate-400 font-semibold">Section</th>
                      <th className="text-center px-4 py-3 text-slate-400 font-semibold">Sitting 1</th>
                      <th className="text-center px-4 py-3 text-slate-400 font-semibold">Sitting 2</th>
                      <th className="text-center px-4 py-3 text-emerald-400 font-semibold">Superscore</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      { section: 'English', s1: 28, s2: 32, super: 32 },
                      { section: 'Mathematics', s1: 31, s2: 29, super: 31 },
                      { section: 'Reading', s1: 27, s2: 30, super: 30 },
                      { section: 'Science', s1: 29, s2: 28, super: 29 },
                    ].map(row => (
                      <tr key={row.section} className="border-b border-white/5">
                        <td className="px-4 py-3 text-white font-medium">{row.section}</td>
                        <td className="px-4 py-3 text-slate-400 text-center">{row.s1}</td>
                        <td className="px-4 py-3 text-slate-400 text-center">{row.s2}</td>
                        <td className="px-4 py-3 text-emerald-400 font-bold text-center">{row.super}</td>
                      </tr>
                    ))}
                    <tr className="bg-emerald-500/10">
                      <td className="px-4 py-3 text-white font-bold">Composite</td>
                      <td className="px-4 py-3 text-slate-400 text-center font-mono">29</td>
                      <td className="px-4 py-3 text-slate-400 text-center font-mono">30</td>
                      <td className="px-4 py-3 text-emerald-400 font-bold text-center font-mono">31</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <p className="text-xs text-slate-500 mt-3">Superscored composite = average of best section scores, rounded to nearest whole number.</p>
          </section>

          {/* ── RESCORING ── */}
          <section aria-labelledby="rescore-heading">
            <h2 id="rescore-heading" className="text-2xl font-bold text-white mb-4">Requesting a rescore or TIR: what you need to know</h2>
            <div className="space-y-4 text-slate-400 leading-relaxed">
              <p>
                If your score seems significantly inconsistent with your practice test performance, or if you believe your essay was scored unfairly, ACT offers several options. All requests must be submitted through your <strong className="text-white">act.org account</strong> — there is no phone or mail process.
              </p>
            </div>

            <div className="mt-6 space-y-4">
              {RESCORE_TYPES.map(r => (
                <div key={r.type} className="bg-[#12141f] border border-white/8 rounded-xl p-5">
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="text-sm font-bold text-white">{r.type}</h3>
                    <span className="text-xs font-mono font-semibold px-2 py-0.5 rounded-full border"
                      style={{ backgroundColor: `${r.color}15`, borderColor: `${r.color}30`, color: r.color }}>
                      {r.cost}
                    </span>
                  </div>
                  <p className="text-xs text-slate-400 leading-relaxed mb-1.5"><strong className="text-slate-300">What it involves:</strong> {r.what}</p>
                  <p className="text-xs text-slate-400 leading-relaxed"><strong className="text-slate-300">When to use it:</strong> {r.when}</p>
                </div>
              ))}
            </div>

            <div className="mt-5 space-y-3">
              {[
                { n: '1', title: 'Order a TIR before requesting anything else', body: 'The Test Information Release lets you verify your MC answers against the key. Scoring errors on standardised MC tests are extremely rare — but a TIR gives you certainty before spending $50 on score verification.', color: '#34d399' },
                { n: '2', title: 'Act within 3 months — deadlines are firm', body: 'All rescore and TIR requests must be submitted within 3 months of your test date. ACT does not grant exceptions. If you think you may want a review, submit the request early and cancel if you change your mind.', color: '#6366f1' },
                { n: '3', title: 'Essay hand scores can change in either direction', body: 'A hand score sends your essay to two additional trained raters. In rare cases, the score can decrease. Before requesting one, honestly assess whether your essay deserves a higher score or whether prep is the better investment.', color: '#a855f7' },
              ].map(item => (
                <div key={item.n} className="flex gap-4 bg-[#12141f] border border-white/8 rounded-xl p-4">
                  <div className="w-7 h-7 rounded-full bg-pink-500/20 text-pink-400 text-xs font-bold flex items-center justify-center shrink-0 font-mono">
                    {item.n}
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-white mb-1">{item.title}</p>
                    <p className="text-xs text-slate-400 leading-relaxed">{item.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* ── SCORE SENDING ── */}
          <section aria-labelledby="score-sending-heading">
            <h2 id="score-sending-heading" className="text-2xl font-bold text-white mb-4">Score sending: what you need to know</h2>
            <div className="space-y-4 text-slate-400 leading-relaxed">
              <p>
                Understanding ACT's score sending rules avoids costly mistakes — especially when deciding whether to send a given sitting to colleges.
              </p>
            </div>

            <div className="mt-5 grid sm:grid-cols-2 gap-4">
              {[
                { icon: '🆓', title: 'Four free sends at registration', body: 'You can designate up to 4 colleges to receive your scores for free — but only if you choose them before your test (during registration or up to 3 days before). Post-test score sends cost $16 each.', color: '#34d399' },
                { icon: '🎯', title: 'Score Choice: you control what's sent', body: 'ACT Score Choice lets you choose which test date\'s scores to send to each college. Most colleges only see what you send — but check each school\'s policy, as some require all scores.', color: '#6366f1' },
                { icon: '📊', title: 'Superscores are sent automatically', body: 'When you send any ACT score report, your superscore (if you have multiple sittings) is included automatically. Colleges with a superscore policy will use it.', color: '#a855f7' },
                { icon: '⏳', title: 'College application deadlines', body: 'Score reports take 3–8 business days to reach colleges after you request them. Do not leave score sends until the week of a deadline — build in at least 2 weeks.', color: '#f59e0b' },
              ].map(tip => (
                <div key={tip.title} className="bg-[#12141f] border border-white/8 rounded-xl p-4">
                  <span className="text-2xl block mb-2" aria-hidden="true">{tip.icon}</span>
                  <h3 className="text-sm font-semibold text-white mb-1.5">{tip.title}</h3>
                  <p className="text-xs text-slate-400 leading-relaxed">{tip.body}</p>
                </div>
              ))}
            </div>
          </section>

          {/* ── FAQ ── */}
          <section aria-labelledby="faq-heading">
            <h2 id="faq-heading" className="text-2xl font-bold text-white mb-5">Frequently asked questions</h2>
            <div className="space-y-3">
              {[
                { q: 'When do ACT scores come out in 2026?', a: 'Multiple-choice scores are typically released within 2 weeks of your test date. Writing scores take 5–8 weeks. ACT emails you when scores are ready — but logging in to act.org directly from day 10 onward is more reliable than waiting for the email.' },
                { q: 'What time of day are ACT scores released?', a: 'ACT does not release scores at a fixed time. They appear in your account as processing completes — usually early morning Central Time. Check early in the morning on or around your expected release date.' },
                { q: 'Can I retake the ACT if I am unhappy with my score?', a: 'Yes. You can take the ACT up to 12 times. ACT superscoring means only your best section scores are combined across sittings — retaking is low-risk as long as you are actively preparing between attempts.' },
                { q: 'How does ACT superscoring work?', a: 'ACT superscoring combines your highest section score in English, Math, Reading, and Science across all your test dates into a new composite. Your act.org account calculates it automatically. Many — but not all — colleges accept the superscore. Check each school\'s policy.' },
                { q: 'Do I have to send all my ACT scores to colleges?', a: 'Most colleges allow ACT Score Choice — you select which test date(s) to send. However, some colleges (including all UC schools) require you to submit all scores. Always check the score policy of each college on your list.' },
                { q: 'How do I request a rescore?', a: 'Log in to act.org. Essay hand score requests and score verification requests are available in your account. Test Information Releases (TIR) for eligible test dates are also ordered there. All requests must be submitted within 3 months of your test date.' },
                { q: 'How long does ACT score sending take?', a: 'Score reports typically reach colleges within 3–8 business days of your request. Do not wait until the week of a deadline — request score sends at least 2 weeks before any application cut-off.' },
                { q: 'Does the ACT Writing section affect my composite score?', a: 'No. Writing is scored separately (2–12) and does not affect your 1–36 composite. Many colleges no longer require the Writing section — check whether your target schools need it before registering with Writing.' },
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

          {/* ── CTA ── */}
          <div className="bg-[#12141f] border border-emerald-500/20 rounded-2xl p-7 flex gap-5 items-start">
            <div className="text-2xl shrink-0" aria-hidden="true">🧮</div>
            <div>
              <h3 className="text-base font-semibold text-white mb-1">Convert your raw marks to a scaled score instantly</h3>
              <p className="text-sm text-slate-400 leading-relaxed mb-3">
                Use the GradesNova ACT calculator to enter your raw section scores and instantly see your scaled score and composite — plus your superscore and how close you are to the next whole-point threshold.
              </p>
              <Link href="/exams/act"
                className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white px-5 py-2.5 rounded-xl font-semibold text-sm transition-all hover:shadow-lg hover:-translate-y-0.5">
                ACT Score Calculator →
              </Link>
            </div>
          </div>

          {/* ── RELATED ── */}
          <section aria-labelledby="related-heading" className="border-t border-white/8 pt-10">
            <h2 id="related-heading" className="text-sm font-semibold text-slate-500 uppercase tracking-wider mb-4">Continue reading</h2>
            <div className="grid sm:grid-cols-2 gap-3">
              {[
                { title: 'ACT Prep Tips: How to Improve Your Score', href: '/exams/act/prep-tips', color: '#6366f1' },
                { title: 'ACT Revision Tips & Section Strategy', href: '/exams/act/revision-tips', color: '#f59e0b' },
                { title: 'Complete ACT Guide 2026', href: '/exams/act/guide', color: '#34d399' },
                { title: 'ACT Score Calculator — All Sections', href: '/exams/act', color: '#ec4899' },
              ].map(a => (
                <Link key={a.href} href={a.href}
                  className="bg-[#12141f] border border-white/8 rounded-xl p-4 hover:border-white/16 transition-colors group">
                  <p className="text-sm font-semibold text-white group-hover:brightness-110 transition-all leading-snug">{a.title}</p>
                  <span className="text-xs mt-2 inline-block font-medium" style={{ color: a.color }}>Read →</span>
                </Link>
              ))}
            </div>
          </section>

          {/* ── BOTTOM HUB ── */}
          <section aria-labelledby="hub-heading" className="border-t border-white/8 pt-10">
            <h2 id="hub-heading" className="text-sm font-semibold text-slate-500 uppercase tracking-wider mb-4">Full ACT hub</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
              {HUB_PAGES.map(page => (
                <Link key={page.href} href={page.href}
                  className="bg-[#12141f] border border-white/8 rounded-xl p-4 hover:border-white/20 transition-all group text-center">
                  <span className="text-2xl block mb-2" aria-hidden="true">{page.icon}</span>
                  <p className="text-xs font-semibold text-white group-hover:brightness-110 leading-snug">{page.title}</p>
                  <p className="text-[10px] mt-1 font-medium" style={{ color: page.color }}>Go →</p>
                </Link>
              ))}
            </div>
          </section>

        </article>
        <Footer />
      </main>
    </>
  );
}
