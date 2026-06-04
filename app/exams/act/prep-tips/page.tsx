// app/exams/act/prep-tips/page.tsx
// ACT PREP TIPS & TEST STRATEGY
// Targets: "act prep tips", "how to improve act score", "act study tips",
//          "act test strategy", "act timing tips", "how to study for act"

import type { Metadata } from 'next';
import Link from 'next/link';
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';

export const metadata: Metadata = {
  title: 'ACT Prep Tips 2026 | Section-by-Section Strategy to Raise Your Score | GradesNova',
  description:
    'Proven ACT prep tips and test-taking strategies for 2026. Section-by-section advice for English, Math, Reading, and Science. How to improve your ACT composite score efficiently, with a realistic study plan.',
  alternates: { canonical: 'https://gradesnova.com/exams/act/prep-tips' },
  openGraph: {
    title: 'ACT Prep Tips 2026 | Section-by-Section Strategy',
    description:
      'Section-by-section ACT strategies, timing tactics, and a realistic study plan to raise your ACT composite score.',
    url: 'https://gradesnova.com/exams/act/prep-tips',
    type: 'article',
    siteName: 'GradesNova',
  },
  robots: { index: true, follow: true },
};

const jsonLdBreadcrumb = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://gradesnova.com' },
    { '@type': 'ListItem', position: 2, name: 'ACT Score Calculator', item: 'https://gradesnova.com/exams/act' },
    { '@type': 'ListItem', position: 3, name: 'ACT Guide', item: 'https://gradesnova.com/exams/act/guide' },
    { '@type': 'ListItem', position: 4, name: 'ACT Prep Tips', item: 'https://gradesnova.com/exams/act/prep-tips' },
  ],
};

const jsonLdArticle = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'ACT Prep Tips 2026: Section-by-Section Strategy to Raise Your Score',
  description: 'Proven ACT prep strategies for English, Math, Reading, and Science — plus a realistic study plan.',
  url: 'https://gradesnova.com/exams/act/prep-tips',
  author: { '@type': 'Organization', name: 'GradesNova' },
  publisher: { '@type': 'Organization', name: 'GradesNova', url: 'https://gradesnova.com' },
  dateModified: '2026-05-31',
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
        text: 'Most students see meaningful improvement with 40–80 hours of focused preparation spread over 2–3 months. Students aiming for a 4+ point composite gain typically need 80–120 hours. Cramming in the week before the test is far less effective than consistent, spaced practice over several weeks.',
      },
    },
    {
      '@type': 'Question',
      name: 'How can I improve my ACT score quickly?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The fastest gains come from identifying your weakest section and targeting it specifically. Because your composite is the average of four sections, raising one weak section by 4 points raises your composite by 1 point. Take a full official ACT practice test, identify your section scores, and focus prep time on the section with the most room for improvement.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the best ACT prep strategy for timing?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Timing is the biggest challenge on the ACT. Practice every section under strict timed conditions from your first practice test. For English and Reading: move through questions steadily and do not spend more than 1 minute on any single question — mark it and come back. For Science: read the data first, not the introductory text, and skip passages you find confusing to return to later.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is self-study enough to improve my ACT score?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes — most students who improve significantly on the ACT do so through structured self-study using official ACT prep materials. The key is using official practice tests (not third-party approximations), marking them carefully against the answer explanations, and specifically targeting the types of questions you repeatedly miss.',
      },
    },
  ],
};

const SECTION_STRATEGIES = [
  {
    name: 'English',
    icon: '📝',
    color: '#06b6d4',
    time: '45 min · 75 questions · ~36 sec/question',
    overview: 'ACT English tests grammar and rhetorical skills across five prose passages. Most questions ask you to choose the best version of an underlined portion — or confirm it is correct as written.',
    strategies: [
      {
        title: 'Learn the core grammar rules cold',
        body: 'Unlike Reading, English rewards direct rule knowledge. There are roughly 15–20 grammar rules that ACT English tests repeatedly: comma usage, apostrophe placement, subject-verb agreement, pronoun case, modifier placement, parallel structure, and sentence fragments/run-ons. Learn these rules explicitly — don\'t rely on "sounds right."',
      },
      {
        title: '"No Change" is correct about 25% of the time',
        body: 'Many students avoid selecting "NO CHANGE" out of a feeling that they must fix something. Resist this. If the original version is grammatically and rhetorically correct, "NO CHANGE" is the right answer. Always genuinely evaluate whether a change is needed before selecting an alternative.',
      },
      {
        title: 'For rhetorical questions, read the surrounding paragraph',
        body: 'Questions about transitions, sentence order, adding/deleting sentences, and paragraph organisation require understanding the broader context of the passage. Don\'t answer these based on the underlined portion alone — read at least the full paragraph around it.',
      },
      {
        title: 'Eliminate wordy and redundant options',
        body: 'ACT English strongly rewards conciseness. If two options say the same thing but one is shorter, the shorter version is almost always correct. If an option adds a phrase that repeats information already stated, eliminate it.',
      },
    ],
    timing: 'You have 36 seconds per question on average. Move steadily. If a question is taking more than 60 seconds, mark it and continue — come back at the end.',
    practice: 'ACT official prep book (5 practice tests), ACT.org free test. Grammar-specific: ACT Grammar Workbook by George Ehrenhaft.',
  },
  {
    name: 'Mathematics',
    icon: '📐',
    color: '#34d399',
    time: '60 min · 60 questions · ~60 sec/question',
    overview: 'ACT Math covers pre-algebra through trigonometry. Questions progress roughly in difficulty (Q1 easiest, Q60 hardest). A calculator is permitted throughout. No formula sheet is provided — you must know formulas.',
    strategies: [
      {
        title: 'Know your formulas — there is no reference sheet',
        body: 'Unlike some standardised tests, the ACT provides no formula sheet. Memorise: area and perimeter of basic shapes, the Pythagorean theorem, SOHCAHTOA for trig, distance/midpoint formulas, slope formula, and the quadratic formula. These appear on almost every ACT.',
      },
      {
        title: 'The early questions are gifts — don\'t rush them',
        body: 'Questions 1–20 are generally straightforward. Many students make careless errors here by moving too fast. Slow down slightly on the first 20 questions and check your work — these are points you should not be dropping.',
      },
      {
        title: 'Skip and return on hard questions',
        body: 'If question 45 is stumping you after 90 seconds, mark it and move on. You need to reach questions 46–60 — even if you can only make educated guesses on some of them. A blank is just as wrong as a wrong answer, so guess on anything you can\'t finish.',
      },
      {
        title: 'Plug in numbers on algebra questions',
        body: 'For questions with variables in the answer choices, pick simple numbers (2, 3, 5) and plug them into the question and the answer choices. The answer choice that matches your result is likely correct. This strategy is especially powerful on abstract algebraic manipulation questions.',
      },
      {
        title: 'ACT trigonometry is basic — learn three things',
        body: 'ACT trig is limited to: SOH-CAH-TOA definitions, the unit circle (basic values at 0°, 30°, 45°, 60°, 90°), and one or two trig identities (sin²θ + cos²θ = 1). You don\'t need full trig mastery — just these fundamentals.',
      },
    ],
    timing: '60 seconds per question on average. Questions 1–30 should take under 45 seconds each. Budget the extra time for questions 40–60.',
    practice: 'ACT official prep book. Specific topics: Khan Academy for gaps in algebra, geometry, or trig. ACT Math workbook by Barron\'s for volume practice.',
  },
  {
    name: 'Reading',
    icon: '📖',
    color: '#a855f7',
    time: '35 min · 40 questions · ~53 sec/question',
    overview: 'Four passages — literary narrative, social science, humanities, and natural science. 10 questions per passage. Timing is the primary challenge: 35 minutes for four long passages and 40 questions is extremely tight.',
    strategies: [
      {
        title: 'Read the questions before the passage',
        body: 'For each passage, skim the 10 questions first (15–20 seconds). This tells you what to look for as you read. Line-reference questions are especially useful to note — you can go directly to that section when you reach it.',
      },
      {
        title: 'Find your passage order',
        body: 'You do not have to do passages in order. Most students have a weaker passage type (often literary narrative or natural science). Do your strongest passage types first to bank easy points and save time. Many test-takers do passages in order: Social Science → Humanities → Natural Science → Literary Narrative.',
      },
      {
        title: 'All answers are supported by the text',
        body: 'Every correct answer is directly supported by something in the passage. If you are choosing between two options, one will have specific textual support and one will not. Go back to the passage and find the line(s) that justify the answer — don\'t work from memory.',
      },
      {
        title: 'Eliminate extreme answer choices',
        body: 'ACT Reading answer choices that use words like "always," "never," "all," or "only" are very often wrong. The passage rarely makes such absolute claims. Answer choices using words like "some," "often," or "suggests" are more likely to be correct.',
      },
    ],
    timing: 'Budget roughly 8–8.5 minutes per passage. If a passage is unusually difficult, move on and return — don\'t let one hard passage derail your time for the others.',
    practice: 'Official ACT practice tests are the gold standard. Third-party reading passages are often much harder than real ACT Reading — over-preparing on them can damage your confidence and pacing.',
  },
  {
    name: 'Science',
    icon: '🔬',
    color: '#f59e0b',
    time: '35 min · 40 questions · ~53 sec/question',
    overview: 'ACT Science is NOT a content knowledge test. It tests your ability to read and interpret scientific data — graphs, tables, and experimental results. You do not need to know chemistry, biology, or physics to score well.',
    strategies: [
      {
        title: 'Go to the data first, not the introductory text',
        body: 'Each Science passage opens with an introduction that explains the experiment or study. Skip it initially. Go directly to the figures (graphs, tables, diagrams) and understand what variables are being measured and how. The introduction is a reference — use it only when a question requires it.',
      },
      {
        title: 'For data representation passages: read the axes first',
        body: 'Before looking at any question, identify the x-axis variable, y-axis variable, and what each line or bar represents. Most data representation questions are just testing whether you can read the graph correctly — don\'t overthink them.',
      },
      {
        title: 'For conflicting viewpoints passages: map each position',
        body: 'The conflicting viewpoints passage (usually the last one) presents two or three scientists with different hypotheses. Before reading questions, briefly note: what does Scientist 1 claim? What does Scientist 2 claim? Where do they disagree? Questions will ask you to distinguish between positions — having a mental map prevents confusion.',
      },
      {
        title: 'You can look up almost everything in the passage',
        body: 'Unlike Reading, where you\'re tested on broader comprehension, most Science questions are directly answerable by looking at the right figure. If you\'re confused, go back to the data — the answer is usually right there.',
      },
      {
        title: 'Save the most complex passage for last',
        body: 'Science passages vary in difficulty. Most students find one passage significantly harder than the others. If you hit a wall, skip to the next passage and return. Guessing on 3–4 hard questions is better than spending 10 minutes on them and running out of time on easier ones.',
      },
    ],
    timing: 'Budget 5–6 minutes per passage. The conflicting viewpoints passage typically takes slightly longer. Strict timing practice is essential — this is where most students lose points.',
    practice: 'Official ACT practice tests. For Science specifically: the official tests are the best representation. Third-party Science passages are often significantly harder and less representative.',
  },
];

const STUDY_PLAN = [
  {
    phase: 'Week 1–2',
    title: 'Baseline and diagnosis',
    color: '#34d399',
    tasks: [
      'Take a full official ACT practice test under strict timed conditions (no pausing)',
      'Score it carefully and identify your section scores — this is your baseline',
      'Identify your two weakest sections — these get the most prep time',
      'Review every wrong answer: understand why the correct answer is right, not just why yours was wrong',
    ],
  },
  {
    phase: 'Week 3–6',
    title: 'Targeted section work',
    color: '#06b6d4',
    tasks: [
      'Spend 60–70% of study time on your two weakest sections',
      'Learn grammar rules explicitly for English (not by feel)',
      'Complete 2–3 full section timed practices per week per weak section',
      'Use error logs: record every question you miss, the category, and why you missed it',
      'Do a full practice test at the end of week 4 to measure improvement',
    ],
  },
  {
    phase: 'Week 7–8',
    title: 'Full test simulation',
    color: '#a855f7',
    tasks: [
      'One full official practice test per week under real conditions (same time of day as your test date)',
      'Continue error log analysis — look for patterns in question types you repeatedly miss',
      'Shift focus from learning new content to reinforcing what you know',
      'Review timing strategy per section — adjust based on where you\'re losing time',
    ],
  },
  {
    phase: 'Final week',
    title: 'Consolidation and confidence',
    color: '#ec4899',
    tasks: [
      'One more full practice test at the start of the week — no new tests after this',
      'Review your error log summaries: the 5–10 question types you miss most',
      'Light review of formulas and grammar rules — no new learning',
      'Good sleep, normal meals, and physical activity the day before',
      'Morning of test: brief review of key formulas only — not a study session',
    ],
  },
];

export default function ACTPrepTipsPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdBreadcrumb) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdArticle) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdFAQ) }} />

      <main className="bg-[#0a0c14] min-h-screen text-white">
        <Navbar />

        <header className="bg-[#0d0f1a] border-b border-white/6 py-12 mt-16">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <nav aria-label="Breadcrumb" className="mb-5">
              <ol className="flex items-center gap-2 text-xs text-slate-500">
                <li><Link href="/" className="hover:text-white transition-colors">Home</Link></li>
                <li aria-hidden="true">›</li>
                <li><Link href="/exams/act" className="hover:text-white transition-colors">ACT Calculator</Link></li>
                <li aria-hidden="true">›</li>
                <li><Link href="/exams/act/guide" className="hover:text-white transition-colors">ACT Guide</Link></li>
                <li aria-hidden="true">›</li>
                <li className="text-slate-400" aria-current="page">Prep Tips</li>
              </ol>
            </nav>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl flex items-center justify-center text-xl"
                style={{ backgroundColor: '#f59e0b15' }} aria-hidden="true">📖</div>
              <span className="text-xs font-mono uppercase tracking-widest" style={{ color: '#f59e0b70' }}>ACT · Prep Strategy · 2026</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white tracking-tight mb-4 leading-tight">
              ACT Prep Tips 2026: Section-by-Section Strategy
            </h1>
            <p className="text-lg text-slate-400 leading-relaxed max-w-2xl">
              Most ACT prep advice is generic. This guide is specific — section-by-section tactics, timing strategies, and a realistic 8-week study plan based on how the test actually works.
            </p>
            <div className="flex items-center gap-4 mt-5 text-xs text-slate-500">
              <span>Updated May 2026</span>
              <span>·</span>
              <span>~14 min read</span>
            </div>
          </div>
        </header>

        <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">

          {/* The core principle */}
          <section aria-labelledby="core-heading">
            <h2 id="core-heading" className="text-2xl font-bold text-white mb-4">The most important thing to understand about ACT prep</h2>
            <div className="space-y-4 text-slate-400 leading-relaxed">
              <p>
                Your ACT composite is the <strong className="text-white">average of four section scores</strong>. This has a critical implication for prep strategy: improving your weakest section produces the most composite gain per hour of study.
              </p>
              <p>
                If you score 28 English, 30 Math, 24 Reading, and 20 Science, your composite is 25. Raising Science from 20 to 24 raises your composite to 26. Raising Math from 30 to 34 (much harder, from an already strong position) also raises your composite to 26. The weak section is the leverage point.
              </p>
            </div>
            <div className="mt-6 bg-[#12141f] border border-cyan-500/20 rounded-xl p-5">
              <p className="text-sm font-semibold text-white mb-3">Step 1: Take an official diagnostic test before anything else</p>
              <p className="text-sm text-slate-400 leading-relaxed mb-3">
                Before you do any prep, sit a full official ACT practice test under real timed conditions — all four sections, no breaks beyond the standard ones. Score it. Your section scores tell you exactly where to invest your prep time. Without a diagnostic, you're guessing.
              </p>
              <p className="text-xs text-slate-500">Download free official practice tests from act.org or use the official ACT prep book (5 full tests).</p>
            </div>
          </section>

          {/* Section strategies */}
          <section aria-labelledby="sections-heading">
            <h2 id="sections-heading" className="text-2xl font-bold text-white mb-2">Section-by-section strategies</h2>
            <p className="text-slate-400 text-sm mb-8">Each section rewards a different approach. Applying generic test-taking advice to all four sections equally is one of the most common prep mistakes.</p>

            <div className="space-y-8">
              {SECTION_STRATEGIES.map(section => (
                <div key={section.name} className="bg-[#12141f] border border-white/8 rounded-2xl p-6">
                  <div className="flex flex-wrap items-center gap-3 mb-2">
                    <span className="text-2xl" aria-hidden="true">{section.icon}</span>
                    <h3 className="text-xl font-bold" style={{ color: section.color }}>{section.name}</h3>
                    <span className="text-[10px] font-mono text-slate-500">{section.time}</span>
                  </div>
                  <p className="text-sm text-slate-400 leading-relaxed mb-5">{section.overview}</p>

                  <div className="space-y-4 mb-5">
                    {section.strategies.map(strat => (
                      <div key={strat.title} className="border-l-2 pl-4" style={{ borderColor: `${section.color}40` }}>
                        <p className="text-sm font-semibold text-white mb-1">{strat.title}</p>
                        <p className="text-sm text-slate-400 leading-relaxed">{strat.body}</p>
                      </div>
                    ))}
                  </div>

                  <div className="grid sm:grid-cols-2 gap-3">
                    <div className="bg-white/4 rounded-xl p-4">
                      <p className="text-xs font-semibold text-white mb-1">⏱️ Timing</p>
                      <p className="text-xs text-slate-400 leading-relaxed">{section.timing}</p>
                    </div>
                    <div className="bg-white/4 rounded-xl p-4">
                      <p className="text-xs font-semibold text-white mb-1">📚 Best practice resources</p>
                      <p className="text-xs text-slate-400 leading-relaxed">{section.practice}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Universal test day tips */}
          <section aria-labelledby="testday-heading">
            <h2 id="testday-heading" className="text-2xl font-bold text-white mb-5">Universal test-day tactics</h2>
            <div className="space-y-3">
              {[
                {
                  icon: '⏭️',
                  title: 'Skip and return — never stall',
                  body: 'If a question takes more than 90 seconds, mark it and move on. A blank and a wrong answer are worth the same (nothing). Spending 3 minutes on one hard question while 3 easy questions go unanswered is a guaranteed score loss.',
                },
                {
                  icon: '✏️',
                  title: 'Always guess — never leave a blank',
                  body: 'The ACT has no penalty for wrong answers. If you can\'t answer a question, pick your designated guess letter (many test-takers use B or H for all blind guesses) and move on. Statistically, random guessing gets roughly 25% correct — better than 0% for blanks.',
                },
                {
                  icon: '🔄',
                  title: 'Use process of elimination aggressively',
                  body: 'Even when you\'re unsure, you can often eliminate 1–2 wrong choices, raising your odds from 25% to 50% or higher. A choice that contradicts the passage, violates a grammar rule, or produces an extreme claim is usually wrong.',
                },
                {
                  icon: '🛌',
                  title: 'Sleep matters more than last-minute studying',
                  body: 'The night before the ACT, a full 8–9 hours of sleep will outperform 3 more hours of study. Memory consolidation and information retrieval both degrade significantly with sleep deprivation. Review only your key formulas and grammar rules briefly, then stop.',
                },
                {
                  icon: '🍎',
                  title: 'Eat a real breakfast, bring a snack',
                  body: 'The ACT runs nearly 3 hours — blood sugar matters. Eat a real, protein-rich breakfast. Bring a high-protein snack for the break. Avoid heavy sugar before the test.',
                },
                {
                  icon: '🧘',
                  title: 'Simulate test conditions in every practice test',
                  body: 'Practice under the exact conditions of test day: same time of day (usually 8am), no music, phone away, strict time limits, pencil on paper. If your practice is comfortable and your test day is uncomfortable, you\'ve trained for the wrong environment.',
                },
              ].map(tip => (
                <div key={tip.title} className="bg-[#12141f] border border-white/8 rounded-xl p-5 flex gap-4">
                  <span className="text-2xl shrink-0" aria-hidden="true">{tip.icon}</span>
                  <div>
                    <p className="text-sm font-bold text-white mb-1">{tip.title}</p>
                    <p className="text-sm text-slate-400 leading-relaxed">{tip.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* 8-week study plan */}
          <section aria-labelledby="plan-heading">
            <h2 id="plan-heading" className="text-2xl font-bold text-white mb-2">8-week ACT study plan</h2>
            <p className="text-slate-400 text-sm mb-8 leading-relaxed">
              This plan assumes 6–8 hours of prep per week. Adjust volume up or down based on your target score gap and time available. The structure — diagnostic first, targeted work in the middle, simulation at the end — is more important than the exact weekly hours.
            </p>
            <div className="space-y-5">
              {STUDY_PLAN.map((phase, i) => (
                <div key={phase.phase} className="relative pl-0 sm:pl-14">
                  <div className="hidden sm:flex absolute left-0 top-0 w-10 h-10 rounded-xl items-center justify-center text-xs font-bold font-mono"
                    style={{ backgroundColor: `${phase.color}20`, color: phase.color }}>
                    {i + 1}
                  </div>
                  <div className="bg-[#12141f] border border-white/8 rounded-2xl p-5">
                    <div className="flex flex-wrap items-center gap-2 mb-1">
                      <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full border"
                        style={{ backgroundColor: `${phase.color}15`, borderColor: `${phase.color}30`, color: phase.color }}>
                        {phase.phase}
                      </span>
                    </div>
                    <h3 className="text-base font-bold text-white mb-3">{phase.title}</h3>
                    <ul className="space-y-2">
                      {phase.tasks.map(task => (
                        <li key={task} className="flex items-start gap-2 text-sm text-slate-400">
                          <span className="shrink-0 mt-0.5" style={{ color: phase.color }}>→</span>
                          {task}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* FAQ */}
          <section aria-labelledby="faq-heading">
            <h2 id="faq-heading" className="text-2xl font-bold text-white mb-5">Frequently asked questions</h2>
            <div className="space-y-3">
              {[
                { q: 'How long should I study for the ACT?', a: 'Most students see meaningful improvement with 40–80 hours of focused preparation over 2–3 months. A 4+ point composite gain typically requires 80–120 hours. Quality matters more than total hours — consistent, spaced practice with error analysis beats marathon cramming sessions.' },
                { q: 'How can I improve my ACT score quickly?', a: 'Identify your weakest section and target it specifically. Raising one weak section by 4 points raises your composite by 1. Take an official diagnostic test, find the gap, and allocate 60–70% of your prep time there.' },
                { q: 'What is the best ACT timing strategy?', a: 'Practice every section under strict timed conditions from day one. For English and Reading: mark hard questions and come back — never stall. For Math: slow down on Q1–20 (easy points) and budget remaining time for Q40–60. For Science: figures first, introduction second.' },
                { q: 'Is self-study enough to improve my ACT score?', a: 'Yes — most significant ACT improvements come through structured self-study using official materials. Official ACT practice tests are the single most important resource. Mark them carefully using the answer explanations, not just the answer key.' },
                { q: 'Should I retake the ACT?', a: 'If you scored below your target and have time before application deadlines, yes. Most students improve 2–4 points on a retake with targeted preparation. Many colleges superscore, making retakes even more valuable. Check each target school\'s superscoring policy.' },
              ].map((faq, i) => (
                <details key={i} className="bg-[#12141f] border border-white/7 rounded-xl overflow-hidden group">
                  <summary className="px-5 py-4 text-sm font-medium text-white cursor-pointer list-none flex items-center justify-between gap-4">
                    {faq.q}
                    <span className="text-slate-400 shrink-0 group-open:rotate-180 transition-transform duration-200">↓</span>
                  </summary>
                  <div className="px-5 pb-4 pt-3 border-t border-white/6">
                    <p className="text-sm text-slate-400 leading-relaxed">{faq.a}</p>
                  </div>
                </details>
              ))}
            </div>
          </section>

          {/* CTA */}
          <div className="bg-[#12141f] border border-cyan-500/20 rounded-2xl p-7 flex gap-5 items-start">
            <div className="text-2xl shrink-0" aria-hidden="true">🧮</div>
            <div>
              <h3 className="text-base font-semibold text-white mb-1">See where your current ACT score ranks</h3>
              <p className="text-sm text-slate-400 leading-relaxed mb-3">
                Enter your practice test composite or section scores to see your national percentile and how you compare against top college score ranges — instantly, free.
              </p>
              <Link href="/exams/act"
                className="inline-flex items-center gap-2 text-white px-5 py-2.5 rounded-xl font-semibold text-sm transition-all hover:shadow-lg hover:-translate-y-0.5"
                style={{ backgroundColor: '#0891b2' }}>
                ACT Score Calculator →
              </Link>
            </div>
          </div>

          {/* Related */}
          <section aria-labelledby="related-heading" className="border-t border-white/8 pt-10">
            <h2 id="related-heading" className="text-sm font-semibold text-slate-500 uppercase tracking-wider mb-4">More from the ACT hub</h2>
            <div className="grid sm:grid-cols-2 gap-3">
              {[
                { title: 'Complete ACT Guide 2026', href: '/exams/act/guide', color: '#06b6d4' },
                { title: 'ACT vs SAT: Which Should You Take?', href: '/exams/act/vs-sat', color: '#a855f7' },
                { title: 'ACT Score Chart & Full Percentile Table', href: '/exams/act/score-chart', color: '#6366f1' },
                { title: 'ACT Score Percentile Calculator', href: '/exams/act', color: '#34d399' },
              ].map(a => (
                <Link key={a.href} href={a.href}
                  className="bg-[#12141f] border border-white/8 rounded-xl p-4 hover:border-white/16 transition-colors group">
                  <p className="text-sm font-semibold text-white group-hover:brightness-110 transition-all leading-snug">{a.title}</p>
                  <span className="text-xs mt-2 inline-block font-medium" style={{ color: a.color }}>Read →</span>
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
