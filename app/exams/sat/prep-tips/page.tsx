// app/exams/sat/prep-tips/page.tsx
// SAT PREP TIPS & TEST STRATEGY 2026
// Targets: "sat prep tips 2026", "how to improve sat score", "digital sat study tips",
//          "sat test strategy", "sat timing tips", "how to study for digital sat",
//          "sat math tips", "sat reading writing tips", "sat module strategy"

import type { Metadata } from 'next';
import Link from 'next/link';
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';

export const metadata: Metadata = {
  title: 'SAT Prep Tips 2026 | Digital SAT Section Strategy to Raise Your Score | GradesNova',
  description:
    'Proven Digital SAT prep tips and strategies for 2026. Section-by-section advice for Reading and Writing and Math, adaptive module strategy, how to improve your SAT score efficiently, and a realistic 10-week study plan.',
  alternates: { canonical: 'https://gradesnova.com/exams/sat/prep-tips' },
  openGraph: {
    title: 'SAT Prep Tips 2026 | Digital SAT Section Strategy',
    description: 'Section-by-section Digital SAT strategies, adaptive module tactics, and a realistic study plan to raise your SAT score in 2026.',
    url: 'https://gradesnova.com/exams/sat/prep-tips',
    type: 'article',
    siteName: 'GradesNova',
  },
  robots: { index: true, follow: true },
};

const jsonLdBreadcrumb = {
  '@context': 'https://schema.org', '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://gradesnova.com' },
    { '@type': 'ListItem', position: 2, name: 'SAT Score Calculator', item: 'https://gradesnova.com/exams/sat' },
    { '@type': 'ListItem', position: 3, name: 'SAT Guide', item: 'https://gradesnova.com/exams/sat/guide' },
    { '@type': 'ListItem', position: 4, name: 'SAT Prep Tips', item: 'https://gradesnova.com/exams/sat/prep-tips' },
  ],
};

const jsonLdArticle = {
  '@context': 'https://schema.org', '@type': 'Article',
  headline: 'SAT Prep Tips 2026: Digital SAT Section-by-Section Strategy to Raise Your Score',
  description: 'Proven prep strategies for the Digital SAT — Reading and Writing, Math, adaptive module tactics, and a 10-week study plan.',
  url: 'https://gradesnova.com/exams/sat/prep-tips',
  author: { '@type': 'Organization', name: 'GradesNova' },
  publisher: { '@type': 'Organization', name: 'GradesNova', url: 'https://gradesnova.com' },
  dateModified: '2026-05-31',
};

const jsonLdFAQ = {
  '@context': 'https://schema.org', '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question', name: 'How long should I study for the Digital SAT?',
      acceptedAnswer: { '@type': 'Answer', text: 'Most students see meaningful improvement with 40–100 hours of focused preparation spread over 2–3 months. Students aiming for a 100+ point composite gain typically need 80–120 hours. Students targeting 200+ point gains should plan for 4–6 months of consistent daily practice. The Digital SAT rewards consistent, spaced practice over cramming — the adaptive scoring system means you need reliable accuracy, not just surface familiarity.' },
    },
    {
      '@type': 'Question', name: 'What is the most important SAT prep strategy for the Digital SAT?',
      acceptedAnswer: { '@type': 'Answer', text: 'The single most important strategy for the Digital SAT is to prioritise Module 1 accuracy in both sections. Because the Digital SAT is section-adaptive, your Module 1 performance determines which Module 2 you receive. Routing to the harder Module 2 is the only path to section scores above approximately 650–700. Students who rush through Module 1 to finish early often route themselves to the lower-ceiling Module 2, permanently limiting their composite score on that test.' },
    },
    {
      '@type': 'Question', name: 'Is Khan Academy enough to prepare for the SAT?',
      acceptedAnswer: { '@type': 'Answer', text: 'Khan Academy Official SAT Practice is genuinely excellent and free — built in direct partnership with the College Board using real SAT questions. College Board research shows students who practice 20 hours on Khan Academy gain an average of 115 points. For most students targeting up to 1350–1400, Khan Academy combined with full-length official practice tests is sufficient. Students aiming for 1500+ often benefit from supplementary preparation focused on high-difficulty question types.' },
    },
    {
      '@type': 'Question', name: 'How many full-length SAT practice tests should I take?',
      acceptedAnswer: { '@type': 'Answer', text: 'Take at least 3–5 full-length official Digital SAT practice tests before your test date, spaced 3–4 weeks apart. Complete them in the Bluebook app to replicate real test conditions as closely as possible — the interface, timing, and question format all matter. After each test, spend at least as much time reviewing your wrong answers as you spent taking the test.' },
    },
  ],
};

const SECTION_STRATEGIES = [
  {
    name: 'Reading and Writing',
    icon: '📖',
    color: '#a855f7',
    time: '64 min · 54 questions (50 scored) · ~71 sec/question',
    overview: 'The Reading and Writing section tests comprehension, grammar, rhetoric, and evidence analysis through very short paired passages — typically one passage per question. This is a significant format shift from both the old SAT and the ACT, and it rewards a specific set of skills that are learnable with targeted practice.',
    strategies: [
      {
        title: 'Understand the four content domains before you prep',
        body: 'The RW section is divided into four domains: Craft and Structure (~28% of questions, including vocabulary in context and text structure), Information and Ideas (~26%, including main idea and evidence-based reasoning), Standard English Conventions (~26%, covering grammar and punctuation), and Expression of Ideas (~20%, covering transitions and rhetorical synthesis). Knowing which domains you are weak in is more valuable than generic "read more" advice. Your Khan Academy or practice test subscores show you exactly where you are losing points.',
      },
      {
        title: 'Learn the grammar rules for Standard English Conventions',
        body: 'About a quarter of the RW section is pure grammar — and grammar is rule-based, so it rewards explicit learning more than other question types. The Digital SAT tests: sentence boundaries (run-ons, comma splices, fragments), subject-verb agreement, pronoun agreement, verb tense and form, parallel structure, punctuation within sentences (commas, colons, semicolons, dashes), and modifier placement. Learn each rule with examples. Students who can apply these rules confidently are nearly guaranteed to score well on a quarter of the RW section.',
      },
      {
        title: 'For vocabulary questions: use the passage context, never your prior knowledge',
        body: 'SAT vocabulary questions ask for the meaning of a word "as used in the passage" or ask you to complete a sentence with the best word from four choices. The correct answer always fits the specific context of that passage — not just the general meaning of the word. Read the surrounding sentences, understand what the author is trying to convey, then select the word that serves that exact purpose. Students who answer from general word knowledge, rather than from passage context, miss these frequently.',
      },
      {
        title: 'For Evidence-Based questions: find the specific line that supports your answer',
        body: 'Many RW questions ask you to identify which quotation from the passage best supports a claim, or ask you to make an inference based on a specific line. The correct answer is always one that is directly and fully supported by the provided text. Read the question carefully to understand exactly what kind of support is required — an inference question needs text that implies a conclusion; a "best evidence" question needs text that directly backs a stated claim. Eliminate options that are tangential, extreme, or only partially supported.',
      },
      {
        title: 'Treat short passages with the same attention as long ones',
        body: 'The Digital SAT\'s single-passage-per-question format can create a false sense of speed. Because each passage is short (one sentence to one paragraph), students sometimes read too quickly and miss the author\'s precise meaning or tone. Slow down just enough to understand the exact claim, purpose, or structure of the passage before looking at the question. The brevity of the passage does not make the question easier — it often makes the nuance more compressed.',
      },
      {
        title: 'Expression of Ideas: know what "effective transition" means in practice',
        body: 'Transition questions ask you to choose the word or phrase that most logically connects two ideas. The key is identifying the relationship between the two sentences: are they adding information (furthermore, additionally), contrasting (however, in contrast), showing cause and effect (therefore, as a result), or summarising (in short, ultimately)? Read the ideas on both sides of the blank before choosing — do not pick a transition word you like in isolation.',
      },
    ],
    timing: 'You have approximately 71 seconds per question. Because questions vary widely in difficulty — some passages need 30 seconds, others 90 — don\'t self-impose strict per-question timers. Instead, track your passage-group progress: aim to complete roughly 14 questions every 17 minutes.',
    practice: 'Bluebook app (free, official), Khan Academy Official SAT Practice (free), College Board full-length practice tests. For grammar specifically: College Board\'s SAT Question of the Day (grammar category). Third-party prep books: Princeton Review Digital SAT Premium and Kaplan SAT Prep are well-reviewed.',
  },
  {
    name: 'Math',
    icon: '📐',
    color: '#6366f1',
    time: '70 min · 44 questions (40 scored) · ~95 sec/question',
    overview: 'SAT Math covers algebra, advanced math, problem-solving and data analysis, and geometry and trigonometry. A calculator is permitted throughout — the Bluebook app provides a built-in Desmos graphing calculator. Approximately 75% of questions are multiple choice; 25% are student-produced responses where you type in your own numerical answer.',
    strategies: [
      {
        title: 'Know the topic distribution and allocate prep time accordingly',
        body: 'Algebra and Advanced Math together account for roughly 70% of SAT Math questions. Mastering these two domains is the most efficient path to a high Math score. Problem-Solving and Data Analysis (ratios, percentages, probability, scatterplots) accounts for about 15%, and Geometry and Trigonometry accounts for about 15%. Students who over-invest in geometry and trig while neglecting linear functions and quadratics are optimising for the wrong 15%.',
      },
      {
        title: 'Use the Desmos calculator strategically — not reflexively',
        body: 'The Desmos graphing calculator is built into Bluebook and is genuinely powerful — it can graph functions, solve systems of equations, and evaluate expressions instantly. Use it for: graphing a quadratic to find its vertex or roots, visualising a system of equations to find intersection points, and checking numerical answers. Do not use it for arithmetic you can do mentally in 3 seconds — switching to the calculator for simple addition or multiplication wastes more time than it saves.',
      },
      {
        title: 'On student-produced response questions: check your work on grid-ins',
        body: 'About 25% of Math questions require you to type in your own answer rather than choose from options. This means you cannot back-solve from the answers or use process of elimination. Check your setup — make sure you\'re solving for the right variable and that your equation matches the problem. Common errors on grid-ins include solving for the wrong variable, ignoring constraints (e.g. the problem says x > 0), and arithmetic slips when no answer choices catch the error.',
      },
      {
        title: 'For hard algebra questions: define variables explicitly before solving',
        body: 'SAT Math word problems often contain multiple unknown quantities and several conditions. Before setting up equations, write down: what each variable represents, what each condition translates to algebraically, and what the question is actually asking you to find (it may differ from what you just solved for). Many errors on word problems come from solving correctly for a quantity the question didn\'t ask for.',
      },
      {
        title: 'Plug in numbers on abstract algebra and function questions',
        body: 'When a question uses variables throughout the answer choices and the relationship is abstract, pick a simple number (2 or 3) that satisfies the conditions, compute the expected result, then test each answer choice with the same number. The choice that returns your expected result is correct. This strategy is especially powerful on "equivalent expression" questions where you need to identify which algebraic form is equal to a given expression.',
      },
      {
        title: 'For data analysis questions: read the table or graph before the question',
        body: 'About 15% of Math questions use tables, scatterplots, or bar charts. Before reading the question, spend 5–10 seconds understanding the axes, units, and what\'s being measured. Most errors on data questions come from misreading the axes or confusing what variable is on which axis. The questions themselves are often straightforward once you understand the data.',
      },
      {
        title: 'Geometry and trig: memorise the 6 key formulas',
        body: 'The Digital SAT provides a formula reference sheet (unlike the ACT, which provides nothing). However, you still need to know: the Pythagorean theorem, SOHCAHTOA for basic trig, the special right triangle ratios (30-60-90 and 45-45-90), the unit circle (at least 0°, 30°, 45°, 60°, 90°), circle equation (x-h)² + (y-k)² = r², and the distance formula. These appear repeatedly. The formula sheet saves you from memorising area/volume formulas but not these fundamentals.',
      },
    ],
    timing: 'You have approximately 95 seconds per question on average. The Math section gives you meaningfully more time than the ACT\'s 60 seconds per question. Use this time advantage: attempt harder problems more methodically, check your work on grid-ins, and use Desmos on questions that benefit from it.',
    practice: 'Bluebook app (the only place to practice adaptive Digital SAT Math in realistic conditions). Khan Academy SAT Math (free, personalised). College Board official practice tests. For supplementary drilling: Princeton Review SAT Premium Math sections and Barron\'s Digital SAT are well-regarded.',
  },
];

const STUDY_PLAN = [
  {
    phase: 'Week 1–2',
    title: 'Baseline and honest diagnosis',
    color: '#34d399',
    tasks: [
      'Complete a full official Digital SAT practice test in the Bluebook app under strict timed conditions — no pausing, no looking up answers mid-test',
      'Record your composite, RW section score, Math section score, and estimated module routing (which Module 2 did you appear to get?)',
      'Review every wrong answer and every question you guessed correctly: understand why the correct answer is right, category by category',
      'Identify your two weakest content domains within each section (e.g. "Advanced Math" and "Information and Ideas") — these drive your prep plan',
      'Set a realistic target composite based on the middle 50% SAT ranges for your college list',
    ],
  },
  {
    phase: 'Week 3–5',
    title: 'Domain-targeted content work',
    color: '#6366f1',
    tasks: [
      'Spend 60–70% of study time on your weakest content domains — not randomly across all topics',
      'For RW: work through Standard English Conventions rules explicitly, complete 2–3 passages from each content domain per session',
      'For Math: drill Algebra and Advanced Math (70% of questions) with timed section practices, then fill Geometry/Trig gaps',
      'Use Khan Academy Official SAT Practice daily (30–45 min sessions) — it adapts to your exact error patterns',
      'Take one full-section timed practice (RW or Math) per weak area per week to build pacing alongside content knowledge',
    ],
  },
  {
    phase: 'Week 6–8',
    title: 'Adaptive module strategy and full tests',
    color: '#a855f7',
    tasks: [
      'Take one full official Digital SAT practice test per week in the Bluebook app — simulate real test day conditions',
      'Specifically practice Module 1 discipline: aim for zero careless errors, use remaining time to check rather than rushing to finish',
      'After each test, categorise every wrong answer by domain and track error trends across weeks — look for improving patterns',
      'Simulate harder Module 2 conditions using the hardest official practice questions available — exposure to high-difficulty items reduces surprises',
      'Review timing: identify any section where you are consistently running short and adjust pacing strategy',
    ],
  },
  {
    phase: 'Week 9–10',
    title: 'Simulation and final consolidation',
    color: '#f59e0b',
    tasks: [
      'One more full official practice test in week 9 — ideally at the same time of day as your scheduled test date',
      'Analyse your composite trend across all practice tests: if scores are still rising, your preparation is working; if plateaued, identify whether it\'s a content gap or a test-taking pattern issue',
      'Stop introducing new content in the final week — only reinforce what you already know',
      'Brief review of your highest-frequency error types: the 5–8 question categories you miss most',
      'Test logistics: confirm Bluebook is installed and updated on your laptop, review approved calculator policy, pack approved ID',
      'Final two nights: normal sleep schedule (7–9 hours), no intense studying, light review of key formulas only on the morning before the test',
    ],
  },
];

export default function SATPrepTipsPage() {
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
                <li><Link href="/exams/sat" className="hover:text-white transition-colors">SAT Calculator</Link></li>
                <li aria-hidden="true">›</li>
                <li><Link href="/exams/sat/guide" className="hover:text-white transition-colors">SAT Guide</Link></li>
                <li aria-hidden="true">›</li>
                <li className="text-slate-400" aria-current="page">Prep Tips</li>
              </ol>
            </nav>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-amber-500/15 flex items-center justify-center text-xl" aria-hidden="true">📖</div>
              <span className="text-xs font-mono text-amber-400/70 uppercase tracking-widest">SAT · Prep Strategy · 2026</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white tracking-tight mb-4 leading-tight">
              SAT Prep Tips 2026: Digital SAT Section-by-Section Strategy
            </h1>
            <p className="text-lg text-slate-400 leading-relaxed max-w-2xl">
              The Digital SAT rewards specific skills and a specific approach to the adaptive module system. This guide breaks down exactly what to study, how to train for Module 1 under pressure, and how to build a prep plan that produces consistent composite gains.
            </p>
            <div className="flex items-center gap-4 mt-5 text-xs text-slate-500">
              <span>Updated May 2026</span>
              <span>·</span>
              <span>~16 min read</span>
            </div>
          </div>
        </header>

        <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">

          {/* The core insight */}
          <section aria-labelledby="core-heading">
            <h2 id="core-heading" className="text-2xl font-bold text-white mb-4">The most important thing to understand about Digital SAT prep</h2>
            <div className="space-y-4 text-slate-400 leading-relaxed">
              <p>
                The Digital SAT is <strong className="text-white">section-adaptive</strong>. This changes how you should prepare in ways that most generic SAT advice ignores. Every section has two modules. Module 1 is identical for all students. Your Module 1 accuracy determines which Module 2 you receive — and your Module 2 difficulty determines the highest score you can achieve on that section.
              </p>
              <p>
                Students routed to the harder Module 2 can score up to 800 per section. Students routed to the easier Module 2 face a hard ceiling of roughly 550–600 per section — no matter how well they perform in Module 2. This is not about speed. It is entirely about accuracy in Module 1.
              </p>
              <p>
                The strategic implication: your entire test-taking strategy should prioritise answering Module 1 questions correctly, even if that means slowing down. Finishing Module 1 in 28 minutes with two careless errors is worse than finishing in 32 minutes with zero errors. Routing to the harder Module 2 is the single highest-leverage action you can take on test day.
              </p>
            </div>
            <div className="mt-6 bg-indigo-500/10 border border-indigo-500/20 rounded-xl p-5">
              <p className="text-sm font-semibold text-white mb-3">The Module 1 rule: accuracy first, speed second</p>
              <div className="grid sm:grid-cols-2 gap-4 text-xs text-slate-400">
                <div>
                  <p className="font-semibold text-indigo-300 mb-2">✓ What to do in Module 1</p>
                  <ul className="space-y-1.5">
                    {['Work at a careful pace — not rushed', 'Check your work on every question if time allows', 'Skip questions you\'re unsure about and return with fresh eyes', 'Never guess carelessly on an early question to "save time"', 'Aim for zero careless errors above all else'].map(i => (
                      <li key={i} className="flex gap-2"><span className="text-indigo-400 shrink-0">→</span>{i}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <p className="font-semibold text-red-400 mb-2">✗ What to avoid in Module 1</p>
                  <ul className="space-y-1.5">
                    {['Rushing to finish early to "have time to check"', 'Spending 3+ minutes on one hard question (skip and return)', 'Changing an answer without a clear reason to do so', 'Treating Module 1 questions as less important than Module 2', 'Guessing on questions you could solve with 30 more seconds'].map(i => (
                      <li key={i} className="flex gap-2"><span className="text-red-400 shrink-0">→</span>{i}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* When to take a diagnostic */}
          <section aria-labelledby="diagnostic-heading">
            <h2 id="diagnostic-heading" className="text-2xl font-bold text-white mb-4">Step one: take an official diagnostic before anything else</h2>
            <div className="space-y-4 text-slate-400 leading-relaxed">
              <p>
                Before you read a prep book, watch a video, or drill any practice questions, sit a full official Digital SAT practice test in the Bluebook app under realistic timed conditions. This is the only way to know your actual baseline — and your baseline dictates everything about how you should prepare.
              </p>
              <p>
                Your section scores, subsection scores, and the domains where you missed questions most frequently are more valuable than any study guide's general advice. Without a diagnostic, you will spend time reviewing things you already know at the cost of the areas that actually need work.
              </p>
            </div>
            <div className="mt-6 grid sm:grid-cols-3 gap-4">
              {[
                { gap: 'Up to 100 pts', time: '6–8 weeks', intensity: 'Focused domain drilling + 3 full tests', color: '#34d399' },
                { gap: '100–200 pts', time: '3–4 months', intensity: 'Systematic content + weekly full tests', color: '#f59e0b' },
                { gap: '200+ pts', time: '4–6 months', intensity: 'Full curriculum rebuild + heavy volume practice', color: '#ec4899' },
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

          {/* Section strategies */}
          <section aria-labelledby="sections-heading">
            <h2 id="sections-heading" className="text-2xl font-bold text-white mb-2">Section-by-section strategies</h2>
            <p className="text-slate-400 text-sm mb-8 leading-relaxed">
              The Digital SAT's two sections reward fundamentally different skills and preparation approaches. Apply the correct strategy to each — generic test-taking advice applied equally to both sections is one of the most common prep mistakes.
            </p>
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
            <h2 id="testday-heading" className="text-2xl font-bold text-white mb-5">Universal Digital SAT test-day tactics</h2>
            <div className="space-y-3">
              {[
                {
                  icon: '🎯',
                  title: 'Protect Module 1 at all costs',
                  body: 'As detailed above, the adaptive routing decision is made after Module 1. Every careless error in Module 1 risks routing you to a lower-ceiling Module 2. Approach Module 1 of both sections as the highest-stakes part of the test — not because the questions are harder, but because the consequences of careless errors are largest there.',
                },
                {
                  icon: '⏭️',
                  title: 'Skip and flag — never stall',
                  body: 'The Bluebook app has a built-in flag feature. If a question is taking more than 90 seconds, flag it and move on. A blank answer at the end of the section is just as wrong as a wrong answer, and running out of time on easy questions while stalling on hard ones is the most common timing mistake on the Digital SAT.',
                },
                {
                  icon: '✏️',
                  title: 'Answer everything — no penalty for wrong answers',
                  body: 'The Digital SAT has no penalty for wrong answers. If you are running out of time, select an answer for every remaining question — even if it is a random guess. A 25% chance of a correct answer is always better than 0% for a blank. In the final 5 minutes of a section, skip to unanswered questions and fill them all in.',
                },
                {
                  icon: '🖥️',
                  title: 'Know the Bluebook app before test day',
                  body: 'The Bluebook app has specific interface features: a built-in flagging system, a built-in Desmos calculator, a reference sheet (Math), and an annotation tool for highlighting or striking through text. Practice with these features in the Bluebook practice tests so they feel automatic on test day. Students who encounter the interface for the first time on their real test date waste valuable time learning it.',
                },
                {
                  icon: '📐',
                  title: 'Use the Desmos calculator on hard Math questions — but know when not to',
                  body: 'The built-in Desmos graphing calculator is more powerful than a handheld calculator. Graphing a quadratic to find its vertex, visualising a system of equations, or evaluating a complex expression can be done in seconds. However, switching to Desmos for simple mental arithmetic (adding fractions, simplifying small expressions) costs more time than it saves. Build the instinct in practice for which questions benefit from Desmos and which you should solve directly.',
                },
                {
                  icon: '🛌',
                  title: 'Sleep the night before is worth more than one more study session',
                  body: 'Sleep is not optional luxury before a standardised test — it is preparation. Memory consolidation, pattern recognition, and processing speed all degrade significantly with even mild sleep deprivation. The night before your SAT, stop studying by 9pm, sleep 8–9 hours, and eat a real breakfast. This outperforms an extra 2 hours of studying every time.',
                },
                {
                  icon: '📱',
                  title: 'Check your laptop and Bluebook the day before',
                  body: 'On the Digital SAT, your device is part of the test infrastructure. The day before: confirm Bluebook is installed and updated, check that your laptop battery holds charge for 3+ hours, bring the power adapter to the test centre anyway, and ensure your device is not in low-power mode. A device failure on test day is the only catastrophic scenario the SAT has that the ACT does not.',
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

          {/* 10-week study plan */}
          <section aria-labelledby="plan-heading">
            <h2 id="plan-heading" className="text-2xl font-bold text-white mb-2">10-week Digital SAT study plan</h2>
            <p className="text-slate-400 text-sm mb-8 leading-relaxed max-w-2xl">
              This plan assumes approximately 6–10 hours of focused study per week. Adjust volume based on your target score gap and time available. The structure — diagnostic, targeted work, simulation, consolidation — matters more than the exact weekly hours.
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

          {/* Resources */}
          <section aria-labelledby="resources-heading">
            <h2 id="resources-heading" className="text-2xl font-bold text-white mb-5">Best SAT prep resources for 2026</h2>
            <div className="space-y-3">
              {[
                { name: 'Bluebook app (College Board)', tier: 'Essential', color: '#6366f1', detail: 'The official Digital SAT testing app. Free, available on Mac and Windows. All official practice tests must be taken here for realistic adaptive-format practice. Download and set up before you start any prep.' },
                { name: 'Khan Academy Official SAT Practice', tier: 'Essential · Free', color: '#34d399', detail: 'Free, built in partnership with the College Board. Personalised to your error patterns. Research shows 20 hours of practice here produces an average 115-point composite gain. Link your College Board account to automatically import your practice test scores as a personalisation baseline.' },
                { name: 'College Board Official SAT Practice Tests', tier: 'Essential', color: '#a855f7', detail: 'Available free through Bluebook. These are the only tests that accurately replicate the adaptive module routing of the real Digital SAT. Taking third-party tests on paper is useful for content review but will not train you on the adaptive interface. Download all available official tests from collegeboard.org.' },
                { name: 'Princeton Review Digital SAT Premium', tier: 'Supplementary', color: '#f59e0b', detail: 'Well-structured prep book with Digital SAT-specific content, including section strategies and full-length practice tests. Particularly strong for Reading and Writing content coverage and grammar rules.' },
                { name: 'Kaplan SAT Prep', tier: 'Supplementary', color: '#ec4899', detail: 'Strong for Math content review and drilling. Kaplan\'s question bank is large and useful for topic-specific practice once you\'ve identified your weak domains from official tests.' },
                { name: 'College Board Question Bank', tier: 'Supplementary · Free', color: '#06b6d4', detail: 'The College Board offers a searchable bank of real SAT questions at satsuite.collegeboard.org. You can filter by domain, difficulty, and question type — invaluable for drilling specific weak categories after you\'ve identified them from practice tests.' },
              ].map(res => (
                <div key={res.name} className="bg-[#12141f] border border-white/8 rounded-xl p-5">
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="text-sm font-bold text-white">{res.name}</h3>
                    <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full border"
                      style={{ backgroundColor: `${res.color}15`, borderColor: `${res.color}30`, color: res.color }}>
                      {res.tier}
                    </span>
                  </div>
                  <p className="text-xs text-slate-400 leading-relaxed">{res.detail}</p>
                </div>
              ))}
            </div>
          </section>

          {/* FAQ */}
          <section aria-labelledby="faq-heading">
            <h2 id="faq-heading" className="text-2xl font-bold text-white mb-5">Frequently asked questions</h2>
            <div className="space-y-3">
              {[
                { q: 'How long should I study for the Digital SAT?', a: 'Most students see meaningful gains with 40–100 hours over 2–3 months. Students targeting 100+ point gains typically need 80–120 hours. Students aiming for 200+ points should plan 4–6 months of structured daily practice. The key is consistent, spaced practice with error analysis after each session — not marathon cramming.' },
                { q: 'Is Khan Academy enough to prepare for the SAT?', a: 'For most students targeting up to approximately 1350–1400, Khan Academy Official SAT Practice combined with 3–5 full Bluebook practice tests is a complete preparation package. Students aiming for 1500+ often benefit from supplementary preparation on high-difficulty question types, particularly in Advanced Math and Evidence-Based Reading. Even for top scorers, Khan Academy is the best starting point.' },
                { q: 'What is the most important SAT prep strategy?', a: 'Protecting Module 1 accuracy in both sections. The Digital SAT\'s adaptive design means Module 1 performance gates your maximum possible score. Students who rush through Module 1 to save time and then perform well in Module 2 often score far below their potential because they were routed to the lower-ceiling Module 2 by careless early errors.' },
                { q: 'How many SAT practice tests should I take?', a: 'A minimum of 3–5 full-length official Digital SAT practice tests, taken in the Bluebook app under real conditions. Space them every 3–4 weeks to allow time to study your errors between tests. In the final 5 weeks before your test date, one full test per week is a strong high-intensity strategy.' },
                { q: 'Should I retake the SAT?', a: 'If your score is below your target for your top-choice colleges and you have time before the application deadline, yes. Most students improve 50–150 points on a structured retake. Check whether your target colleges superscore — if they do, focusing one retake on your weaker section is the most efficient path to a higher effective composite.' },
                { q: 'Does the Digital SAT give a formula sheet?', a: 'Yes — the Bluebook app displays a Math reference sheet containing area and volume formulas for common geometric shapes. This is one difference from the ACT, which provides no formulas. However, the SAT reference sheet does not include trig ratios, the Pythagorean theorem, or algebraic formulas — you still need to know these. And having the sheet doesn\'t eliminate the need to know when and how to use the formulas it contains.' },
                { q: 'What calculator can I use on the Digital SAT?', a: 'The Bluebook app includes a built-in Desmos graphing calculator that is available for the entire Math section. You may also bring your own approved handheld calculator as a backup. Most graphing and scientific calculators are permitted; calculators with CAS (computer algebra systems) are not. Check collegeboard.org for the full approved calculator list before your test date.' },
                { q: 'What is the difference between the SAT and PSAT?', a: 'The PSAT (Preliminary SAT) is a shorter, slightly easier version of the SAT scored on a 320–1520 scale instead of 400–1600. It is used for National Merit Scholarship qualification and as a practice tool. PSAT scores do not go to colleges and do not affect your SAT scores. However, linking your PSAT scores to Khan Academy creates a personalised SAT practice plan based on your actual performance.' },
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
          <div className="bg-[#12141f] border border-indigo-500/20 rounded-2xl p-7 flex gap-5 items-start">
            <div className="text-2xl shrink-0" aria-hidden="true">🧮</div>
            <div>
              <h3 className="text-base font-semibold text-white mb-1">See where your current SAT score ranks</h3>
              <p className="text-sm text-slate-400 leading-relaxed mb-3">
                Enter your practice test composite or section scores to see your national percentile and how you compare to top college SAT ranges — instantly, free.
              </p>
              <Link href="/exams/sat"
                className="inline-flex items-center gap-2 text-white px-5 py-2.5 rounded-xl font-semibold text-sm transition-all hover:shadow-lg hover:-translate-y-0.5 bg-indigo-600 hover:bg-indigo-500">
                SAT Score Calculator →
              </Link>
            </div>
          </div>

          {/* Related */}
          <section aria-labelledby="related-heading" className="border-t border-white/8 pt-10">
            <h2 id="related-heading" className="text-sm font-semibold text-slate-500 uppercase tracking-wider mb-4">More from the SAT hub</h2>
            <div className="grid sm:grid-cols-2 gap-3">
              {[
                { title: 'Complete SAT Guide 2026', href: '/exams/sat/guide', color: '#6366f1' },
                { title: 'SAT vs ACT: Which Should You Take?', href: '/exams/sat/vs-act', color: '#06b6d4' },
                { title: 'SAT Score Chart & Full Percentile Table', href: '/exams/sat/score-chart', color: '#a855f7' },
                { title: 'SAT Score Percentile Calculator', href: '/exams/sat', color: '#34d399' },
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
