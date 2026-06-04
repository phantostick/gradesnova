// app/exams/act/revision-tips/page.tsx
// ACT REVISION TIPS & STRATEGY — Deep Dive Content Page
// Targets: "how to study for ACT", "ACT prep tips 2026", "ACT study plan",
//          "ACT section strategies", "ACT practice test schedule", "how to improve ACT score"

import type { Metadata } from 'next';
import Link from 'next/link';
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';

export const metadata: Metadata = {
  title: 'ACT Revision Tips & Study Strategy 2026 | How to Prepare | GradesNova',
  description:
    'Evidence-based ACT prep strategies for 2026. How to build a study plan, section-by-section tips for English, Math, Reading, and Science, how to use practice tests effectively, and how to decide when to retest.',
  alternates: { canonical: 'https://gradesnova.com/exams/act/revision-tips' },
  openGraph: {
    title: 'ACT Revision Tips & Study Strategy 2026 | How to Prepare',
    description:
      'How to study for the ACT in 2026 — study plans, section strategies, practice test scheduling, and score improvement tactics.',
    url: 'https://gradesnova.com/exams/act/revision-tips',
    type: 'article',
    siteName: 'GradesNova',
  },
  robots: { index: true, follow: true },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'ACT Revision Tips & Study Strategy 2026: How to Prepare and Improve Your Score',
  description:
    'A complete ACT preparation guide covering study plans, section-by-section strategies, practice test use, and score improvement tactics for 2026.',
  url: 'https://gradesnova.com/exams/act/revision-tips',
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
      name: 'How long should I study for the ACT?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Most students benefit from 3–6 months of structured preparation. If your baseline score is within 4 points of your target, 6–8 weeks of focused study may be sufficient. If you need to improve by 6+ composite points, plan for 3–4 months. Students improving by 10+ points typically need 4–6 months of consistent daily practice.',
      },
    },
    {
      '@type': 'Question',
      name: 'How many practice tests should I take before the ACT?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Take at least 3–5 full-length, timed practice tests before your test date — ideally on paper, under realistic conditions (Saturday morning, no interruptions, official timing). Spacing them every 3–4 weeks gives you time to study the mistakes from each test before the next. One full test per week in the final 5 weeks before the exam is a common strategy.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the most effective way to improve an ACT Math score?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Start by identifying your error patterns from practice tests — most students lose points in a predictable set of topics (trigonometry, coordinate geometry, and advanced algebra are common weak spots). Build a list of every wrong answer with the topic category, then drill those topics specifically using ACT-format questions. Time pressure is often the issue in Math, so practice the full 60-question section under timed conditions weekly.',
      },
    },
    {
      '@type': 'Question',
      name: 'How should I prepare for ACT English?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'ACT English tests grammar, punctuation, sentence structure, and rhetoric. The most effective preparation involves learning the ACT\'s specific grammar rules (comma usage, apostrophes, subject-verb agreement, pronoun antecedent, parallel structure) and practising them in passage context. Many students improve significantly just by learning the 20–25 grammar rules the ACT tests repeatedly.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is the ACT Science section about science knowledge?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Mostly no. ACT Science primarily tests data interpretation, graph reading, and logical reasoning — not memorised scientific facts. You do not need to know biology, chemistry, or physics concepts in depth. The main skills are reading tables and graphs quickly, identifying trends, comparing viewpoints, and extracting information under time pressure. Science is now optional for the composite but remains important for STEM-focused college programs.',
      },
    },
  ],
};

const STUDY_TIMELINE = [
  {
    phase: '3–4 months out',
    icon: '📐',
    color: '#34d399',
    title: 'Baseline & planning',
    steps: [
      'Take one full official practice test under timed, realistic conditions to establish your baseline composite and identify weak sections.',
      'Set your target score based on the middle 50% ACT ranges for your college list.',
      'Build a weekly study schedule: 5–7 hours per week is realistic for meaningful improvement.',
      'Order or download official ACT prep materials. Official ACT practice tests are the gold standard.',
    ],
  },
  {
    phase: '2–3 months out',
    icon: '📚',
    color: '#6366f1',
    title: 'Systematic content review',
    steps: [
      'Work through each section\'s core content: English grammar rules, Math topic areas, Reading passage strategies, Science data interpretation.',
      'Focus more time on your two weakest sections — composite improvement comes fastest from raising low scores.',
      'Take one full practice test every 3–4 weeks. After each test, categorise every wrong answer by topic.',
      'Use the ACT My Answer Key service (if available for your test date) or official prep books for pattern recognition.',
    ],
  },
  {
    phase: '4–6 weeks out',
    icon: '🎯',
    color: '#a855f7',
    title: 'Timed practice & drilling',
    steps: [
      'Switch to near-daily timed section practice. Speed matters — all four sections are time-pressured.',
      'Drill your specific error categories intensively. Don\'t re-read content you already know.',
      'Take one full practice test per week. Simulate test-day conditions: Saturday morning, full time, no phone.',
      'Review every wrong answer immediately after the test. Don\'t just note the answer — understand why the correct answer is correct.',
    ],
  },
  {
    phase: '1–2 weeks out',
    icon: '🏁',
    color: '#f59e0b',
    title: 'Final prep & logistics',
    steps: [
      'Take one final full practice test about 10 days before your real test to confirm your current level.',
      'Reduce study intensity in the final 3–4 days. Light review of your most common error types only.',
      'Confirm your test centre, admission ticket, ID, pencils, calculator (approved models only), and snacks.',
      'Prioritise sleep in the week before the test. Fatigue affects performance on a 3-hour exam significantly.',
    ],
  },
];

const SECTION_STRATEGIES = [
  {
    section: 'English',
    icon: '📝',
    color: '#34d399',
    time: '45 min · 75 questions',
    overview: 'The ACT English section tests grammar, punctuation, sentence structure, and rhetorical skills across five prose passages. It is the section most amenable to rule-based preparation.',
    tips: [
      { title: 'Learn the ACT grammar rules cold', body: 'The ACT tests a specific set of ~25 grammar rules repeatedly: commas, apostrophes, subject-verb agreement, pronoun antecedent, parallel structure, run-ons, and sentence fragments. Learn these rules explicitly and you will recognise them on every passage.' },
      { title: 'Watch for "NO CHANGE" traps', body: '"NO CHANGE" is the correct answer roughly 25% of the time. Students who are biased to always change something lose easy points. If the original reads correctly and clearly, trust it.' },
      { title: 'Read the passage for context', body: 'Rhetoric questions (organisation, transitions, author\'s purpose) require understanding the whole paragraph or passage. Don\'t answer these in isolation — re-read the surrounding sentences.' },
      { title: 'Choose concise, clear answers', body: 'When two options are grammatically correct, the ACT almost always prefers the shorter, cleaner version. Wordiness is almost always wrong.' },
    ],
  },
  {
    section: 'Math',
    icon: '📐',
    color: '#6366f1',
    time: '60 min · 60 questions',
    overview: 'ACT Math covers pre-algebra, elementary algebra, intermediate algebra, coordinate geometry, plane geometry, and trigonometry. Questions increase in difficulty, though not perfectly linearly.',
    tips: [
      { title: 'Know the topic distribution', body: 'Pre-algebra and elementary algebra together account for roughly 40% of Math questions. Mastering these basics pays dividends quickly. Trigonometry and advanced topics account for only 15–20% — don\'t over-invest at the expense of core algebra.' },
      { title: 'Use your calculator strategically', body: 'A graphing calculator is permitted and valuable on hard questions — but slower than mental math on easy ones. Practise deciding in real time which questions to calculator-check and which to solve directly.' },
      { title: 'Skip and return', body: 'Hard questions can absorb several minutes. If a problem is taking too long, mark it, move on, and return at the end. Spending 4 minutes on one question while leaving three 30-second questions unanswered is poor time management.' },
      { title: 'Plug in numbers on algebra questions', body: 'Many algebra and abstract questions can be solved faster by substituting simple numbers (1, 2, 0) into the answer choices and testing which one fits. This is a legitimate, fast strategy on the ACT.' },
    ],
  },
  {
    section: 'Reading',
    icon: '📖',
    color: '#a855f7',
    time: '35 min · 40 questions',
    overview: 'Four passages (Literary Narrative, Social Science, Humanities, Natural Science) with 10 questions each. Time pressure is the primary challenge — most students can answer the questions if given unlimited time.',
    tips: [
      { title: 'Develop your passage order strategy', body: 'You don\'t have to answer passages in order. Many students do best by starting with the passage type they find easiest. Identify your fastest passage type in practice and tackle it first on test day.' },
      { title: 'Read actively, not passively', body: 'Don\'t read every passage from top to bottom before looking at the questions. Read actively: note the main idea of each paragraph, the author\'s tone, and where the passage\'s argument shifts. This takes 3–4 minutes per passage and makes question answering faster.' },
      { title: 'Use line references', body: 'Many questions cite specific line numbers. Go back to that line and read 2–3 sentences around it before answering. Never answer from memory alone.' },
      { title: 'Eliminate extreme language', body: 'ACT Reading answer choices that use absolute language ("always", "never", "all students") are almost always wrong. The ACT favours carefully qualified language in its correct answers.' },
    ],
  },
  {
    section: 'Science',
    icon: '🔬',
    color: '#f59e0b',
    time: '35 min · 40 questions (optional from Sep 2025)',
    overview: 'Science tests data interpretation, graph reading, and reasoning — not memorised science facts. Three passage types: Data Representation, Research Summaries, and Conflicting Viewpoints.',
    tips: [
      { title: 'Treat it as a data reading test', body: 'You rarely need outside science knowledge. Almost every answer is extractable from the passage\'s tables, graphs, or experimental descriptions. Trust the data, not your science intuition.' },
      { title: 'Do Conflicting Viewpoints last', body: 'Conflicting Viewpoints passages (usually one per test) require the most reading and are time-intensive. Most students score better by doing Data Representation and Research Summaries first, then returning to Conflicting Viewpoints.' },
      { title: 'Read the axes and units carefully', body: 'Graph-reading errors come from misreading axes or units. Before answering, identify what each axis measures, what the units are, and what direction (increase/decrease) the data moves.' },
      { title: 'Know basic experimental design', body: 'You don\'t need to know biology or chemistry, but you do need to understand concepts like controlled variables, independent/dependent variables, and what makes an experiment valid. These appear on almost every test.' },
    ],
  },
];

const HUB_PAGES = [
  {
    title: 'ACT Score Calculator',
    desc: 'Enter your raw marks for each section → get your composite and section scores instantly.',
    href: '/exams/act',
    color: '#34d399',
    icon: '🧮',
    badge: 'Calculator',
  },
  {
    title: 'ACT Scores: When They Come Out & What They Mean',
    desc: 'Score release dates, how to read your report, superscoring, and what to do if you need a rescore.',
    href: '/exams/act/scores',
    color: '#ec4899',
    icon: '📊',
    badge: '2–4 weeks',
  },
  {
    title: 'ACT Revision Tips & Strategy',
    desc: 'Evidence-based study methods, section-by-section prep, and how to build a realistic study plan.',
    href: '/exams/act/revision-tips',
    color: '#f59e0b',
    icon: '📖',
    badge: 'Strategy',
  },
  {
    title: 'Complete ACT Guide 2026',
    desc: 'Everything about the ACT — test structure, scoring, dates, what scores mean for college applications.',
    href: '/exams/act/guide',
    color: '#6366f1',
    icon: '🎓',
    badge: 'Full guide',
  },
];

export default function ACTRevisionTipsPage() {
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
                <li className="text-slate-400" aria-current="page">Revision Tips</li>
              </ol>
            </nav>

            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-amber-500/15 flex items-center justify-center text-xl" aria-hidden="true">📖</div>
              <span className="text-xs font-mono text-amber-400/70 uppercase tracking-widest">ACT · Revision · Strategy 2026</span>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold text-white tracking-tight mb-4 leading-tight">
              ACT Revision Tips & Study Strategy 2026
            </h1>
            <p className="text-lg text-slate-400 leading-relaxed max-w-2xl">
              How to prepare for the ACT, from baseline diagnostic to test day. Study plan templates, section-by-section strategies, how to use practice tests properly, and the tactics that actually move composite scores.
            </p>

            <div className="flex items-center gap-4 mt-5 text-xs text-slate-500">
              <span>Updated May 2026</span>
              <span>·</span>
              <span>~12 min read</span>
            </div>
          </div>
        </header>

        <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-14">

          {/* ── KEY STATS ── */}
          <section aria-labelledby="prep-stats-heading">
            <h2 id="prep-stats-heading" className="sr-only">ACT preparation at a glance</h2>
            <div className="grid sm:grid-cols-3 gap-4">
              {[
                { icon: '🗓️', label: 'Recommended prep time', value: '3–6 months', sub: 'Depending on target improvement', color: '#34d399' },
                { icon: '📝', label: 'Practice tests to take', value: '3–5 minimum', sub: 'Full-length, timed, realistic conditions', color: '#f59e0b' },
                { icon: '🎯', label: 'Avg composite improvement', value: '+2–5 pts', sub: 'With structured, consistent study', color: '#a855f7' },
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

          {/* ── START WITH A BASELINE ── */}
          <section aria-labelledby="baseline-heading">
            <h2 id="baseline-heading" className="text-2xl font-bold text-white mb-4">Start with a diagnostic test — not content review</h2>
            <div className="space-y-4 text-slate-400 leading-relaxed">
              <p>
                The single most common ACT preparation mistake is starting with content review before taking a baseline test. Without a baseline, you don't know which sections need the most work — and you'll spend time reviewing material you already know at the expense of your actual weak spots.
              </p>
              <p>
                Take one complete, official ACT practice test under <strong className="text-white">realistic conditions</strong> before you open a prep book. That means a Saturday morning, a quiet room, official timing, no phone, and a real pencil. Your score on this test establishes where you are starting from — and the gap to your target tells you how much time you need.
              </p>
            </div>

            <div className="mt-6 grid sm:grid-cols-3 gap-4">
              {[
                { gap: '1–4 points', time: '6–8 weeks', intensity: 'Focused drilling on weak areas', color: '#34d399' },
                { gap: '5–7 points', time: '3–4 months', intensity: 'Systematic content + timed practice', color: '#f59e0b' },
                { gap: '8+ points', time: '4–6 months', intensity: 'Full curriculum rebuild + heavy practice', color: '#ec4899' },
              ].map(row => (
                <div key={row.gap} className="bg-[#12141f] border border-white/8 rounded-xl p-4">
                  <p className="text-xs text-slate-500 uppercase tracking-wider mb-1">Gap to target</p>
                  <p className="text-xl font-bold font-mono mb-2" style={{ color: row.color }}>{row.gap}</p>
                  <p className="text-xs text-slate-300 font-semibold mb-1">{row.time}</p>
                  <p className="text-xs text-slate-500 leading-relaxed">{row.intensity}</p>
                </div>
              ))}
            </div>
          </section>

          {/* ── STUDY TIMELINE ── */}
          <section aria-labelledby="timeline-heading">
            <h2 id="timeline-heading" className="text-2xl font-bold text-white mb-6">ACT study plan: phase by phase</h2>

            <div className="relative">
              <div className="absolute left-[19px] top-0 bottom-0 w-0.5 bg-white/8 hidden sm:block" aria-hidden="true" />
              <div className="space-y-6">
                {STUDY_TIMELINE.map((phase, i) => (
                  <div key={i} className="flex gap-5 items-start">
                    <div className="relative shrink-0 hidden sm:flex">
                      <div
                        className="w-10 h-10 rounded-full flex items-center justify-center text-lg z-10 border-2"
                        style={{ backgroundColor: `${phase.color}20`, borderColor: `${phase.color}40`, color: phase.color }}
                      >
                        {phase.icon}
                      </div>
                    </div>
                    <div className="flex-1 bg-[#12141f] border border-white/8 rounded-xl p-5">
                      <div className="flex flex-wrap items-center gap-2 mb-2">
                        <span className="text-xs font-mono font-bold" style={{ color: phase.color }}>{phase.phase}</span>
                      </div>
                      <h3 className="text-sm font-bold text-white mb-3">{phase.title}</h3>
                      <ul className="space-y-2">
                        {phase.steps.map((step, j) => (
                          <li key={j} className="flex gap-2 text-xs text-slate-400 leading-relaxed">
                            <span className="shrink-0 mt-0.5 text-slate-600">▸</span>
                            <span>{step}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* ── HOW TO USE PRACTICE TESTS ── */}
          <section aria-labelledby="practice-heading">
            <h2 id="practice-heading" className="text-2xl font-bold text-white mb-4">How to use practice tests effectively</h2>
            <div className="space-y-4 text-slate-400 leading-relaxed">
              <p>
                Practice tests are the highest-leverage preparation activity for the ACT — but only if you review them properly. Taking tests and not analysing your mistakes is almost useless. The test itself reveals nothing; the review reveals everything.
              </p>
            </div>

            <div className="mt-5 space-y-3">
              {[
                { n: '1', title: 'Use official ACT practice tests only', body: 'Third-party practice tests vary widely in quality and often don\'t match the difficulty distribution of real ACT questions. Use official tests from act.org or the Red Book (The Real ACT Prep Guide). Your score on official tests is a much more reliable predictor than scores on unofficial material.', color: '#34d399' },
                { n: '2', title: 'Simulate real conditions every time', body: 'Time every section exactly. No pausing, no re-reading after time is called, no phone. The ACT is a stamina test as much as a knowledge test — taking shortcuts in practice means you\'ll be underprepared for the real thing.', color: '#6366f1' },
                { n: '3', title: 'Build an error log', body: 'After every practice test, log every wrong answer with: the section, the question number, the topic (e.g. "comma splice", "coordinate geometry", "graph reading"), and why you got it wrong (content gap, misread, careless error, or timing). Patterns in your error log are your study agenda.', color: '#a855f7' },
                { n: '4', title: 'Study your error categories, not random content', body: 'If your error log shows 8 errors in "coordinate geometry" and 1 in "trigonometry", spend your study time on coordinate geometry — not trigonometry. This sounds obvious but most students review content in the order a book presents it rather than in the order their mistakes demand.', color: '#f59e0b' },
                { n: '5', title: 'Track composite trends over time', body: 'Plot your composite and section scores after each practice test. You want to see a trend, not just isolated snapshots. If a section score is stalling despite study, that\'s a signal to change your approach for that section — not just study harder.', color: '#ec4899' },
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
          </section>

          {/* ── SECTION BY SECTION ── */}
          <section aria-labelledby="sections-heading">
            <h2 id="sections-heading" className="text-2xl font-bold text-white mb-2">Section-by-section strategies</h2>
            <p className="text-slate-400 text-sm mb-6 leading-relaxed">
              Each ACT section rewards different skills. The most effective strategies are not universal — they depend on your specific error patterns and time management habits on that section.
            </p>

            <div className="space-y-6">
              {SECTION_STRATEGIES.map(section => (
                <div key={section.section} className="bg-[#12141f] border border-white/8 rounded-2xl overflow-hidden">
                  {/* Section header */}
                  <div className="px-5 py-4 border-b border-white/8 flex items-center gap-3"
                    style={{ backgroundColor: `${section.color}08` }}>
                    <span className="text-2xl" aria-hidden="true">{section.icon}</span>
                    <div>
                      <div className="flex items-center gap-3">
                        <h3 className="text-base font-bold" style={{ color: section.color }}>{section.section}</h3>
                        <span className="text-[10px] font-mono text-slate-500">{section.time}</span>
                      </div>
                      <p className="text-xs text-slate-400 mt-0.5">{section.overview}</p>
                    </div>
                  </div>
                  {/* Tips */}
                  <div className="p-4 space-y-3">
                    {section.tips.map(tip => (
                      <div key={tip.title} className="flex gap-3">
                        <span className="text-xs font-bold shrink-0 mt-0.5" style={{ color: section.color }}>▸</span>
                        <div>
                          <p className="text-xs font-semibold text-white mb-0.5">{tip.title}</p>
                          <p className="text-xs text-slate-400 leading-relaxed">{tip.body}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* ── TIMING STRATEGIES ── */}
          <section aria-labelledby="timing-heading">
            <h2 id="timing-heading" className="text-2xl font-bold text-white mb-4">Time management on the ACT</h2>
            <div className="space-y-4 text-slate-400 leading-relaxed">
              <p>
                The ACT is one of the most time-pressured standardised tests in the US. Many students who know the content still underperform because they run out of time. Here is the per-question budget for each section:
              </p>
            </div>

            <div className="mt-5 overflow-x-auto rounded-xl border border-white/8">
              <table className="w-full text-sm min-w-[480px]" aria-label="ACT time per question by section">
                <thead>
                  <tr className="bg-white/4 border-b border-white/8">
                    <th scope="col" className="text-left px-4 py-3 text-xs font-semibold text-slate-400 uppercase">Section</th>
                    <th scope="col" className="text-center px-4 py-3 text-xs font-semibold text-slate-400 uppercase">Questions</th>
                    <th scope="col" className="text-center px-4 py-3 text-xs font-semibold text-slate-400 uppercase">Time</th>
                    <th scope="col" className="text-center px-4 py-3 text-xs font-semibold text-slate-400 uppercase">Per question</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { section: 'English', q: 75, min: 45, perQ: '36 sec', color: '#34d399' },
                    { section: 'Math', q: 60, min: 60, perQ: '60 sec', color: '#6366f1' },
                    { section: 'Reading', q: 40, min: 35, perQ: '52 sec', color: '#a855f7' },
                    { section: 'Science', q: 40, min: 35, perQ: '52 sec', color: '#f59e0b' },
                  ].map((row, i) => (
                    <tr key={row.section} className={`border-b border-white/5 last:border-0 ${i % 2 === 0 ? '' : 'bg-white/2'}`}>
                      <td className="px-4 py-3 font-semibold text-sm" style={{ color: row.color }}>{row.section}</td>
                      <td className="px-4 py-3 text-center text-xs text-slate-400 font-mono">{row.q}</td>
                      <td className="px-4 py-3 text-center text-xs text-slate-400 font-mono">{row.min} min</td>
                      <td className="px-4 py-3 text-center text-xs font-bold font-mono" style={{ color: row.color }}>{row.perQ}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="mt-5 grid sm:grid-cols-2 gap-4">
              {[
                { icon: '⏭️', title: 'Skip hard questions immediately', body: 'If a question will take more than 90 seconds, mark it and move on. Answer all the straightforward questions first, then return to hard ones with remaining time. Never sacrifice 3 easy questions for 1 hard one.', color: '#34d399' },
                { icon: '✏️', title: 'Answer every question', body: 'The ACT has no penalty for wrong answers. If you are running out of time, fill in the same letter (e.g. "C") for every unanswered question. Random guessing gives you ~25% of those marks; blank answers give you 0%.', color: '#6366f1' },
                { icon: '⌚', title: 'Track your pace per passage', body: 'In Reading and Science, you have about 8–9 minutes per passage. Check your watch at the end of passage 1 and passage 2 to calibrate. If you\'re behind, shorten the time you spend reading and answer more questions from inference.', color: '#a855f7' },
                { icon: '🔢', title: 'In Math, sequence matters', body: 'Early questions in Math are generally easier. If you find yourself stuck on question 15, that\'s a warning sign you\'re in a harder cluster — skip and move forward. Finishing the section and returning to skipped questions is almost always better than grinding on one problem.', color: '#f59e0b' },
              ].map(tip => (
                <div key={tip.title} className="bg-[#12141f] border border-white/8 rounded-xl p-4">
                  <span className="text-2xl block mb-2" aria-hidden="true">{tip.icon}</span>
                  <h3 className="text-sm font-semibold text-white mb-1.5">{tip.title}</h3>
                  <p className="text-xs text-slate-400 leading-relaxed">{tip.body}</p>
                </div>
              ))}
            </div>
          </section>

          {/* ── WHEN TO RETEST ── */}
          <section aria-labelledby="retest-heading">
            <h2 id="retest-heading" className="text-2xl font-bold text-white mb-4">When to retest — and when not to</h2>
            <div className="space-y-4 text-slate-400 leading-relaxed">
              <p>
                The ACT can be taken up to 12 times. Most students who improve meaningfully do so on the second or third attempt with deliberate preparation between sittings. Beyond three attempts with consistent preparation, additional gains become less predictable.
              </p>
            </div>

            <div className="mt-5 grid sm:grid-cols-2 gap-4">
              <div className="bg-emerald-500/10 border border-emerald-500/20 rounded-xl p-5">
                <p className="text-sm font-bold text-emerald-400 mb-3">✓ Retest if...</p>
                <ul className="space-y-2 text-xs text-slate-400">
                  {[
                    'Your composite is below your target for your top-choice colleges.',
                    'Your practice test scores consistently exceed your official score (test anxiety or conditions may be a factor).',
                    'You have identified clear, specific gaps in one or two sections.',
                    'You have a retake date before your application deadline.',
                    'Superscoring is accepted by your top schools and one or two sections are significantly weak.',
                  ].map((item, i) => (
                    <li key={i} className="flex gap-2">
                      <span className="text-emerald-400 shrink-0">▸</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-red-500/10 border border-red-500/20 rounded-xl p-5">
                <p className="text-sm font-bold text-red-400 mb-3">✗ Don't retest if...</p>
                <ul className="space-y-2 text-xs text-slate-400">
                  {[
                    'Your score is already at or above the 75th percentile of your target schools.',
                    'You don\'t have a specific, changed preparation plan for the retake.',
                    'Your score has plateaued across three attempts despite preparation.',
                    'The retake date is within 2 weeks of a major college application deadline.',
                    'Time spent on retake prep would cost significantly more than it gains in application strength.',
                  ].map((item, i) => (
                    <li key={i} className="flex gap-2">
                      <span className="text-red-400 shrink-0">▸</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="mt-4 bg-[#12141f] border border-white/8 rounded-xl p-5 flex gap-4 items-start">
              <span className="text-xl shrink-0" aria-hidden="true">💡</span>
              <div>
                <p className="text-sm font-semibold text-white mb-1">Use the My Answer Key service before retesting</p>
                <p className="text-sm text-slate-400 leading-relaxed">
                  On October, April, and June test dates, ACT offers the My Answer Key service — you can purchase your actual test questions, your answers, and the correct answers. This is the best possible preparation data for a retake. Use it to see exactly where you lost marks, not to guess from memory.
                </p>
              </div>
            </div>
          </section>

          {/* ── CALCULATOR CTA ── */}
          <div className="bg-[#12141f] border border-emerald-500/20 rounded-2xl p-7 flex gap-5 items-start">
            <div className="text-2xl shrink-0" aria-hidden="true">🧮</div>
            <div>
              <h3 className="text-base font-semibold text-white mb-1">Calculate your practice test composite instantly</h3>
              <p className="text-sm text-slate-400 leading-relaxed mb-3">
                After every practice test, enter your raw section scores into the GradesNova ACT calculator to get your estimated composite and see your percentile — faster than consulting the scoring tables in the back of the prep book.
              </p>
              <Link href="/exams/act"
                className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white px-5 py-2.5 rounded-xl font-semibold text-sm transition-all hover:shadow-lg hover:-translate-y-0.5">
                ACT Score Calculator →
              </Link>
            </div>
          </div>

          {/* ── FAQ ── */}
          <section aria-labelledby="faq-heading">
            <h2 id="faq-heading" className="text-2xl font-bold text-white mb-5">Frequently asked questions</h2>
            <div className="space-y-3">
              {[
                { q: 'How long should I study for the ACT?', a: 'Most students benefit from 3–6 months of structured preparation. If your baseline is within 4 points of your target, 6–8 weeks of focused work may be enough. Larger gaps — 6 or more composite points — typically require 3–4 months. The more consistent your daily study habit, the faster you progress.' },
                { q: 'How many practice tests should I take?', a: 'A minimum of 3–5 full-length official tests before your real test date. Space them every 3–4 weeks to allow time to study your mistakes between tests. In the final 5 weeks, one timed full test per week is a common high-intensity strategy.' },
                { q: 'Is the ACT Science section hard?', a: 'ACT Science is primarily a data interpretation and reasoning test — not a test of memorised science facts. Most students find that with targeted practice on graph reading and experimental design, their Science score improves faster than other sections. It is now optional for the composite from September 2025, but still important for STEM program applicants.' },
                { q: 'Should I take the ACT Writing section?', a: 'Check your target schools\' requirements first. Most colleges do not require the Writing section, and a small but non-zero number prefer or require it. If any school on your list requires it, take it. If none do, it is optional — but taking it can\'t hurt your composite since it is reported separately.' },
                { q: 'What is the best ACT prep book?', a: 'The official ACT prep materials (from act.org and the ACT Red Book "The Real ACT Prep Guide") are the gold standard for practice tests. For content review and strategy, Princeton Review Cracking the ACT and Kaplan ACT Prep are widely regarded as effective. Avoid prep materials from publishers whose tests are not based on real ACT questions.' },
                { q: 'Does the ACT have a penalty for wrong answers?', a: 'No. The ACT only counts correct answers — wrong answers and blank answers both score zero. You should always answer every question, even if you are guessing. Never leave a question blank: a random guess gives you a roughly 25% chance of a correct answer; a blank gives you 0%.' },
                { q: 'What calculator can I use on the ACT?', a: 'Most scientific and graphing calculators are permitted on the Math section. Prohibited calculators include those with CAS (computer algebra system), devices that can communicate wirelessly, and stylus-driven tablets. The TI-84 and TI-Nspire (non-CAS) are universally accepted and commonly used. Always verify on act.org before your test date.' },
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

          {/* ── RELATED ── */}
          <section aria-labelledby="related-heading" className="border-t border-white/8 pt-10">
            <h2 id="related-heading" className="text-sm font-semibold text-slate-500 uppercase tracking-wider mb-4">Continue reading</h2>
            <div className="grid sm:grid-cols-2 gap-3">
              {[
                { title: 'ACT Scores: When They Come Out & What They Mean', href: '/exams/act/scores', color: '#ec4899' },
                { title: 'Complete ACT Guide 2026', href: '/exams/act/guide', color: '#6366f1' },
                { title: 'ACT Test Dates & Registration 2026', href: '/exams/act/test-dates', color: '#34d399' },
                { title: 'ACT vs SAT: Which Should You Take?', href: '/exams/act/act-vs-sat', color: '#a855f7' },
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
