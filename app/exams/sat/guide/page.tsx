// app/exams/sat/guide/page.tsx
// SAT COMPLETE GUIDE 2026 — Content Hub Page
// Builds topical authority around the SAT calculator
// Targets: "sat guide 2026", "what is the sat", "digital sat explained",
//          "sat vs act", "sat scoring explained", "digital sat 2026",
//          "sat sections explained", "how sat is scored"

import type { Metadata } from 'next';
import Link from 'next/link';
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';

export const metadata: Metadata = {
  title: 'Complete SAT Guide 2026 | Digital SAT Scoring, Sections & Strategy | GradesNova',
  description:
    'The complete SAT guide for 2026. Everything on the Digital SAT format, how SAT scoring and percentiles work, what a good SAT score is, how the SAT compares to the ACT, and what scores you need for top colleges.',
  alternates: { canonical: 'https://gradesnova.com/exams/sat/guide' },
  openGraph: {
    title: 'Complete SAT Guide 2026 | Digital SAT Scoring, Sections & Strategy',
    description:
      'Everything you need to know about the Digital SAT in 2026 — scoring, sections, national averages, college ranges, adaptive testing explained, and how to decide between SAT and ACT.',
    url: 'https://gradesnova.com/exams/sat/guide',
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
    { '@type': 'ListItem', position: 2, name: 'SAT Score Calculator', item: 'https://gradesnova.com/exams/sat' },
    { '@type': 'ListItem', position: 3, name: 'Complete SAT Guide 2026', item: 'https://gradesnova.com/exams/sat/guide' },
  ],
};

const jsonLdArticle = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Complete SAT Guide 2026: Digital SAT Scoring, Sections & Strategy',
  description:
    'The definitive guide to the Digital SAT in 2026, covering both sections, adaptive scoring, national averages, college score ranges, and SAT vs ACT comparison.',
  url: 'https://gradesnova.com/exams/sat/guide',
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
      name: 'What is the Digital SAT?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The Digital SAT is the current form of the SAT college admissions test, administered by the College Board on a laptop or tablet. It replaced the paper SAT in the US in spring 2024. The Digital SAT has two sections — Reading and Writing (200–800) and Math (200–800) — for a total composite score of 400–1600. It is section-adaptive: your performance in Module 1 of each section determines the difficulty of Module 2. The national average SAT score is approximately 1050.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is a good SAT score in 2026?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A good SAT score depends on your target colleges. The national average is approximately 1050. Scores of 1200+ (74th percentile) are above average and competitive at many four-year universities. A score of 1400+ places you in the top 6%, competitive at highly selective schools. For Ivy League schools, MIT, and Stanford, you typically need 1500 or above (97th+ percentile).',
      },
    },
    {
      '@type': 'Question',
      name: 'How is the Digital SAT different from the old paper SAT?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The Digital SAT is shorter (about 2 hours 14 minutes vs 3+ hours), has fewer questions (98 vs 154), and is section-adaptive — meaning your Module 2 difficulty is determined by your Module 1 performance. Reading passages are shorter (one passage per question rather than long multi-question passages). The Writing and Language and Reading sections have been merged into a single Reading and Writing section. Math now spans the entire section with a calculator permitted throughout.',
      },
    },
    {
      '@type': 'Question',
      name: 'How many times can I take the SAT?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The College Board does not impose a lifetime limit on SAT retakes. Most students take it 2–3 times. The SAT is offered in March, May, August, October, November, and December each year. Many colleges superscore — taking your highest section scores across multiple test dates — making strategic retakes valuable.',
      },
    },
    {
      '@type': 'Question',
      name: 'What SAT score do I need for a good college?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Requirements vary widely. State flagship universities typically have middle 50% SAT ranges of 1100–1350. Selective schools like Georgetown and Notre Dame see ranges of 1400–1550. Ivy League and MIT median scores cluster around 1500–1580. Always check the specific Common Data Set for each school you are targeting.',
      },
    },
  ],
};

const HUB_PAGES = [
  {
    title: 'SAT Score Percentile Calculator',
    desc: 'Enter your composite or section scores to instantly see your 2026 national percentile, SAT-to-ACT conversion, and college score ranges.',
    href: '/exams/sat',
    color: '#6366f1',
    icon: '🧮',
    badge: 'Calculator',
  },
  {
    title: 'SAT Score Chart & Percentile Table',
    desc: 'Full composite and section percentile tables, score-to-college comparison, and SAT-to-ACT crosswalk for 2026.',
    href: '/exams/sat/score-chart',
    color: '#a855f7',
    icon: '📊',
    badge: 'Data',
  },
  {
    title: 'SAT vs ACT: Which Should You Take?',
    desc: 'A direct comparison of structure, scoring, adaptive format, timing, and which test plays to your specific strengths.',
    href: '/exams/sat/vs-act',
    color: '#06b6d4',
    icon: '⚖️',
    badge: 'Comparison',
  },
  {
    title: 'SAT Prep Tips & Test Strategy',
    desc: 'Section-by-section prep strategies, adaptive test tactics, and how to improve your SAT score efficiently.',
    href: '/exams/sat/prep-tips',
    color: '#f59e0b',
    icon: '📖',
    badge: 'Strategy',
  },
  {
    title: 'SAT Score Release Guide',
    desc: 'When SAT scores come out, how to read your score report, percentile types explained, and what to do next.',
    href: '/exams/sat/scores',
    color: '#34d399',
    icon: '📅',
    badge: 'Scores',
  },
];

const SECTIONS = [
  {
    name: 'Reading and Writing',
    icon: '📖',
    color: '#a855f7',
    time: '64 min',
    questions: 54,
    modules: '2 modules of 27 questions each',
    scoreRange: '200–800',
    avg: 530,
    scored: 50,
    desc: 'The Reading and Writing section tests comprehension, grammar, rhetoric, and evidence-based reasoning. Unlike the old SAT, each passage is short — typically one to three sentences up to a paragraph — and paired with a single question. This design means you must quickly grasp the purpose and context of a passage rather than tracking long, multi-page arguments.',
    domains: [
      { name: 'Craft and Structure', pct: '~28%', detail: 'Words in context, text structure and purpose, cross-text connections' },
      { name: 'Information and Ideas', pct: '~26%', detail: 'Central ideas, command of evidence (textual and quantitative), inferences' },
      { name: 'Standard English Conventions', pct: '~26%', detail: 'Boundaries (run-ons, fragments), form, structure, and sense (agreement, tense)' },
      { name: 'Expression of Ideas', pct: '~20%', detail: 'Rhetorical synthesis, transitions, supporting details' },
    ],
    tip: 'The short-passage format rewards fast context-switching rather than deep reading. Practice reading very short passages and answering one question before moving to the next — this mirrors the real test rhythm more accurately than reading long excerpts.',
    adaptive: 'Module 1 of RW serves all students. Strong Module 1 performance routes you to the harder Module 2, which has a higher score ceiling (above approximately 670). Poor Module 1 performance routes you to an easier Module 2 with a score cap. Your Module 2 determines whether 700+ is achievable.',
  },
  {
    name: 'Math',
    icon: '📐',
    color: '#6366f1',
    time: '70 min',
    questions: 44,
    modules: '2 modules of 22 questions each',
    scoreRange: '200–800',
    avg: 520,
    scored: 40,
    desc: 'The Math section covers algebra, advanced math, problem-solving and data analysis, and geometry and trigonometry. A calculator is permitted throughout — unlike the old SAT, which had a no-calculator subsection. About 75% of Math questions are multiple choice; the remaining 25% are student-produced responses (grid-ins) where you enter your own answer.',
    domains: [
      { name: 'Algebra', pct: '~35%', detail: 'Linear equations and systems, linear functions, linear inequalities' },
      { name: 'Advanced Math', pct: '~35%', detail: 'Nonlinear functions, nonlinear equations and systems, equivalent expressions' },
      { name: 'Problem-Solving & Data Analysis', pct: '~15%', detail: 'Ratios, rates, percentages, units, data distributions, scatterplots, probability' },
      { name: 'Geometry & Trigonometry', pct: '~15%', detail: 'Area, volume, lines and angles, right triangles, trig functions, circles' },
    ],
    tip: 'The Digital SAT Math section is heavily weighted toward algebra and advanced math (about 70% combined). Students who are strong in algebraic reasoning and comfortable with nonlinear functions have a significant edge. Geometry and trig are tested but at lower volume — do not over-invest there relative to algebra.',
    adaptive: 'Math Module 1 routes you to either a harder or easier Module 2. The harder Module 2 is the only path to scores above approximately 650. Students aiming for 700+ Math must prioritise Module 1 accuracy. Even one or two errors in Module 1 can route you to the easier track.',
  },
];

const SCORE_TIERS = [
  { range: '1500–1600', pct: 'Top 3%', label: 'Elite', desc: 'Competitive at every US university. At or above the 75th percentile for Ivy League and MIT. Qualifies for merit scholarships at virtually every institution.', color: '#34d399', colleges: 'Harvard, Yale, Princeton, MIT, Stanford, Columbia' },
  { range: '1400–1490', pct: 'Top 6–7%', label: 'Highly Competitive', desc: 'Competitive at highly selective schools including Duke, Northwestern, Georgetown, and top-25 universities. Strong merit scholarship candidate everywhere.', color: '#6366f1', colleges: 'Duke, Northwestern, Georgetown, UVA, Michigan' },
  { range: '1200–1390', pct: 'Top 18–26%', label: 'Above Average', desc: 'Competitive at hundreds of strong four-year universities including most state flagships. At or above the median for many mid-tier selective schools.', color: '#a855f7', colleges: 'State flagships, Boston University, Tulane, Northeastern' },
  { range: '1050–1190', pct: 'Top 43–51%', label: 'Average', desc: 'Around or just above the national average of 1050. Sufficient for many four-year colleges. Most students in this range see meaningful improvement with focused prep.', color: '#f59e0b', colleges: 'Most four-year state colleges, community colleges' },
  { range: '900–1040', pct: 'Bottom 34–43%', label: 'Below Average', desc: 'Below the national average. Sufficient for many less selective schools. A 100+ point composite gain is achievable with structured preparation.', color: '#ec4899', colleges: 'Less selective four-year colleges, community colleges' },
  { range: '400–890', pct: 'Bottom 17%', label: 'Needs Improvement', desc: 'Significantly below average. Strong gains are common with systematic preparation. Consider PSAT practice materials and a 3–6 month structured plan.', color: '#ef4444', colleges: 'Community colleges, less selective schools' },
];

const SAT_ACT_COMPARE = [
  { feature: 'Score scale', sat: '400–1600 composite', act: '1–36 composite' },
  { feature: 'Sections', sat: 'Reading & Writing, Math', act: 'English, Math, Reading, Science' },
  { feature: 'Science section', sat: '✗ No dedicated section', act: '✓ Yes (40 questions)' },
  { feature: 'Total questions', sat: '98 questions (scored)', act: '215 questions' },
  { feature: 'Total time', sat: '~2h 14m (digital)', act: '2h 55m (paper)' },
  { feature: 'Format', sat: 'Fully digital, section-adaptive', act: 'Fixed paper (some digital centres)' },
  { feature: 'Pace', sat: 'More time per question on average', act: 'Very fast (~1 min/question)' },
  { feature: 'Calculator', sat: 'Entire Math section', act: 'Entire Math section' },
  { feature: 'Adaptive difficulty', sat: '✓ Yes — module routing', act: '✗ Fixed question set' },
  { feature: 'Reading passage length', sat: 'Short (1 passage per question)', act: 'Long (4 full passages)' },
  { feature: 'Superscoring', sat: 'Most colleges superscore', act: 'Many colleges superscore' },
  { feature: 'Test dates per year', sat: '6 per year (US)', act: '7 per year' },
  { feature: 'Cost (approx.)', sat: '$60', act: '$65 (no Writing)' },
  { feature: 'Score turnaround', sat: '~2–5 days (digital)', act: '2–8 weeks' },
];

const ADAPTIVE_EXPLAINED = [
  {
    step: '1',
    title: 'Everyone takes Module 1',
    color: '#6366f1',
    body: 'All students receive the same Module 1 for each section (Reading & Writing and Math). Module 1 contains a mix of easy, medium, and hard questions. Your raw score on Module 1 determines which Module 2 you are routed to.',
  },
  {
    step: '2',
    title: 'Module 1 score routes you to Module 2',
    color: '#a855f7',
    body: 'Strong Module 1 performance → harder Module 2 (higher score ceiling, typically above 650 per section). Weaker Module 1 performance → easier Module 2 (score ceiling capped, typically below 600 per section). You cannot see which Module 2 you received — the interface looks identical.',
  },
  {
    step: '3',
    title: 'Scaled score combines both modules',
    color: '#34d399',
    body: 'Your final section score is calculated using an Item Response Theory model that accounts for the difficulty of every question you saw across both modules. Answering a hard question correctly is worth more than answering an easy question correctly. The adaptive routing means two students who both answer 32/44 Math questions correctly can receive different scaled scores if they were routed to different difficulty Module 2s.',
  },
  {
    step: '4',
    title: 'Composite = RW + Math',
    color: '#f59e0b',
    body: 'Your SAT composite score is the sum of your Reading and Writing scaled score (200–800) and your Math scaled score (200–800). The composite ranges from 400 to 1600. There is no weighting — both sections contribute equally to your composite.',
  },
];

const COLLEGE_RANGES = [
  { school: 'MIT', range: '1520–1580', lo: 1520, hi: 1580, rate: '4%', note: 'Top STEM programs' },
  { school: 'Harvard', range: '1500–1580', lo: 1500, hi: 1580, rate: '4%', note: 'Holistic review' },
  { school: 'Yale', range: '1500–1580', lo: 1500, hi: 1580, rate: '5%', note: 'Holistic review' },
  { school: 'Princeton', range: '1500–1570', lo: 1500, hi: 1570, rate: '5%', note: 'Holistic review' },
  { school: 'Stanford', range: '1500–1570', lo: 1500, hi: 1570, rate: '4%', note: 'Holistic review' },
  { school: 'Columbia', range: '1500–1560', lo: 1500, hi: 1560, rate: '4%', note: 'Holistic review' },
  { school: 'Duke', range: '1480–1570', lo: 1480, hi: 1570, rate: '7%', note: 'Strong RW + Math' },
  { school: 'Northwestern', range: '1480–1560', lo: 1480, hi: 1560, rate: '7%', note: 'Strong composite' },
  { school: 'UChicago', range: '1500–1570', lo: 1500, hi: 1570, rate: '7%', note: 'Strong composite' },
  { school: 'Georgetown', range: '1410–1550', lo: 1410, hi: 1550, rate: '12%', note: 'Varies by school' },
  { school: 'Univ. of Michigan', range: '1360–1530', lo: 1360, hi: 1530, rate: '18%', note: 'Strong in-state comp.' },
  { school: 'UCLA', range: '1290–1510', lo: 1290, hi: 1510, rate: '9%', note: 'GPA-weighted' },
  { school: 'Univ. of Virginia', range: '1360–1520', lo: 1360, hi: 1520, rate: '18%', note: 'In-state advantage' },
  { school: 'Univ. of Texas Austin', range: '1210–1490', lo: 1210, hi: 1490, rate: '29%', note: 'Auto-admit top 6%' },
  { school: 'Penn State', range: '1150–1360', lo: 1150, hi: 1360, rate: '54%', note: 'Broad intake' },
];

export default function SATGuidePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdBreadcrumb) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdArticle) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdFAQ) }} />

      <main className="bg-[#0a0c14] min-h-screen text-white">
        <Navbar />

        {/* HEADER */}
        <header className="bg-[#0d0f1a] border-b border-white/6 py-12 mt-16">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <nav aria-label="Breadcrumb" className="mb-5">
              <ol className="flex items-center gap-2 text-xs text-slate-500">
                <li><Link href="/" className="hover:text-white transition-colors">Home</Link></li>
                <li aria-hidden="true">›</li>
                <li><Link href="/exams/sat" className="hover:text-white transition-colors">SAT Score Calculator</Link></li>
                <li aria-hidden="true">›</li>
                <li className="text-slate-400" aria-current="page">Complete SAT Guide</li>
              </ol>
            </nav>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-indigo-500/15 flex items-center justify-center text-xl" aria-hidden="true">📐</div>
              <span className="text-xs font-mono text-indigo-400/70 uppercase tracking-widest">SAT · Complete Guide · 2026</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white tracking-tight mb-4 leading-tight">
              Complete SAT Guide 2026
            </h1>
            <p className="text-lg text-slate-400 max-w-2xl leading-relaxed">
              Everything you need to know about the Digital SAT in 2026 — how the two sections work, how adaptive scoring determines your final score, what a good SAT score is, how it compares to the ACT, and what scores top colleges expect from applicants.
            </p>
            <div className="flex flex-wrap gap-3 mt-5">
              {[
                ['Digital SAT format explained', '#6366f1'],
                ['Adaptive scoring deep dive', '#a855f7'],
                ['SAT vs ACT comparison', '#06b6d4'],
                ['College score ranges', '#34d399'],
                ['Test dates & registration', '#f59e0b'],
              ].map(([label, color]) => (
                <span key={label} className="text-xs px-3 py-1 rounded-full font-medium border"
                  style={{ backgroundColor: `${color}15`, borderColor: `${color}30`, color }}>
                  {label}
                </span>
              ))}
            </div>
          </div>
        </header>

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-20">

          {/* Hub navigation */}
          <section aria-labelledby="hub-heading">
            <h2 id="hub-heading" className="text-xl font-bold text-white mb-2">Everything in the SAT hub</h2>
            <p className="text-slate-400 text-sm mb-6">Jump to any tool or guide in the GradesNova SAT hub.</p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {HUB_PAGES.map(page => (
                <Link key={page.href} href={page.href}
                  className="bg-[#12141f] border border-white/8 rounded-2xl p-5 hover:border-white/20 transition-all hover:-translate-y-0.5 group flex gap-4">
                  <div className="text-2xl shrink-0 mt-0.5" aria-hidden="true">{page.icon}</div>
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full border"
                        style={{ backgroundColor: `${page.color}15`, borderColor: `${page.color}30`, color: page.color }}>
                        {page.badge}
                      </span>
                    </div>
                    <h3 className="text-sm font-bold text-white group-hover:brightness-110 transition-all leading-snug mb-1">{page.title}</h3>
                    <p className="text-xs text-slate-500 leading-relaxed">{page.desc}</p>
                  </div>
                </Link>
              ))}
            </div>
          </section>

          {/* What is the SAT */}
          <section aria-labelledby="what-heading">
            <h2 id="what-heading" className="text-3xl font-bold text-white mb-6">What is the SAT?</h2>
            <div className="space-y-4 text-slate-400 leading-relaxed">
              <p>
                The SAT (Scholastic Assessment Test) is a standardised college admissions test administered by the College Board. It is accepted by every four-year college and university in the United States and is one of the two primary admissions tests used by US colleges, alongside the ACT.
              </p>
              <p>
                Since spring 2024, the SAT has been delivered exclusively in digital format in the US — the Digital SAT replaced the paper test for all domestic testing. The Digital SAT is administered on a laptop or tablet provided by the test centre using the College Board's Bluebook app. It has two sections — Reading and Writing (scored 200–800) and Math (scored 200–800) — for a total composite score of 400–1600.
              </p>
              <p>
                A defining feature of the Digital SAT is its <strong className="text-white">section-adaptive design</strong>: each section has two modules, and your performance in Module 1 determines the difficulty of Module 2. This means all students have an equal opportunity to demonstrate their ability level, and the test can accurately measure a wider range of student performance with fewer questions than the old paper SAT required.
              </p>
              <p>
                The national average SAT composite score is approximately <strong className="text-white">1050</strong>, placing the average student at the 43rd percentile nationally. Over 2 million US high school students take the SAT each year, making it one of the most widely administered standardised tests in the world.
              </p>
            </div>

            <div className="grid sm:grid-cols-4 gap-4 mt-8">
              {[
                { icon: '📊', label: 'Score range', value: '400–1600', sub: 'RW + Math sections', color: '#6366f1' },
                { icon: '⏱️', label: 'Total time', value: '~2h 14m', sub: 'Digital format, no breaks required', color: '#34d399' },
                { icon: '❓', label: 'Scored questions', value: '98', sub: '+4 unscored per section', color: '#a855f7' },
                { icon: '🌎', label: 'National average', value: '1050', sub: '43rd percentile', color: '#f59e0b' },
              ].map(card => (
                <div key={card.label} className="bg-[#12141f] border border-white/8 rounded-xl p-4">
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

          {/* The two sections */}
          <section aria-labelledby="sections-heading">
            <h2 id="sections-heading" className="text-3xl font-bold text-white mb-2">The two Digital SAT sections</h2>
            <p className="text-slate-400 text-sm mb-8 leading-relaxed max-w-3xl">
              Each section is scored independently on a 200–800 scale. Your composite is the sum of both scores. Understanding what each section tests — and how the adaptive module system affects your ceiling — is essential for effective preparation.
            </p>
            <div className="space-y-6">
              {SECTIONS.map(section => (
                <div key={section.name} className="bg-[#12141f] border border-white/8 rounded-2xl p-6">
                  <div className="flex flex-wrap items-center gap-3 mb-4">
                    <span className="text-2xl" aria-hidden="true">{section.icon}</span>
                    <h3 className="text-xl font-bold" style={{ color: section.color }}>{section.name}</h3>
                    <div className="flex flex-wrap gap-2 ml-auto">
                      {[
                        { label: section.time },
                        { label: `${section.questions}Q total` },
                        { label: section.modules },
                        { label: `Avg: ${section.avg}` },
                      ].map(stat => (
                        <span key={stat.label} className="text-[10px] font-mono px-2 py-1 rounded-lg bg-white/5 text-slate-400">
                          {stat.label}
                        </span>
                      ))}
                    </div>
                  </div>
                  <p className="text-sm text-slate-400 leading-relaxed mb-5">{section.desc}</p>

                  <div className="grid sm:grid-cols-2 gap-5 mb-5">
                    <div>
                      <p className="text-xs font-semibold text-white uppercase tracking-wider mb-3">Content domains & question share</p>
                      <div className="space-y-2">
                        {section.domains.map(d => (
                          <div key={d.name} className="flex gap-3 items-start">
                            <span className="text-xs font-bold font-mono shrink-0 mt-0.5" style={{ color: section.color }}>{d.pct}</span>
                            <div>
                              <p className="text-xs font-semibold text-slate-300">{d.name}</p>
                              <p className="text-[10px] text-slate-500 leading-relaxed">{d.detail}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className="space-y-3">
                      <div className="bg-white/3 rounded-xl p-4 border border-white/6">
                        <p className="text-xs font-semibold text-white mb-2">💡 Key strategy</p>
                        <p className="text-xs text-slate-400 leading-relaxed">{section.tip}</p>
                      </div>
                      <div className="rounded-xl p-4 border" style={{ backgroundColor: `${section.color}08`, borderColor: `${section.color}20` }}>
                        <p className="text-xs font-semibold mb-2" style={{ color: section.color }}>🎯 Adaptive module impact</p>
                        <p className="text-xs text-slate-400 leading-relaxed">{section.adaptive}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* How adaptive scoring works */}
          <section aria-labelledby="adaptive-heading">
            <h2 id="adaptive-heading" className="text-3xl font-bold text-white mb-4">How Digital SAT adaptive scoring works</h2>
            <p className="text-slate-400 text-sm mb-8 leading-relaxed max-w-3xl">
              The adaptive scoring system is the most important feature of the Digital SAT to understand — it directly determines what scores are achievable for you and shapes the entire preparation strategy for students aiming above 1400.
            </p>
            <div className="grid sm:grid-cols-2 gap-4 mb-8">
              {ADAPTIVE_EXPLAINED.map(item => (
                <div key={item.step} className="bg-[#12141f] border border-white/8 rounded-2xl p-5">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold font-mono shrink-0"
                      style={{ backgroundColor: `${item.color}20`, color: item.color }}>
                      {item.step}
                    </div>
                    <h3 className="text-sm font-bold text-white">{item.title}</h3>
                  </div>
                  <p className="text-xs text-slate-400 leading-relaxed">{item.body}</p>
                </div>
              ))}
            </div>

            <div className="bg-indigo-500/10 border border-indigo-500/20 rounded-2xl p-6">
              <h3 className="text-base font-semibold text-white mb-3">What adaptive scoring means for test strategy</h3>
              <div className="grid sm:grid-cols-2 gap-5 text-sm text-slate-400">
                <div>
                  <p className="font-semibold text-white mb-2">If you're aiming for 1400+</p>
                  <p className="leading-relaxed mb-3">Module 1 accuracy is everything. Even 2–3 errors in Module 1 can route you to the easier Module 2, hard-capping your section score below your target. Prioritise accuracy over speed in Module 1. Spend extra time checking on difficult Module 1 questions rather than rushing to finish early.</p>
                  <p className="leading-relaxed">Once routed to the harder Module 2, you can score in the high 600s to 800 on that section depending on your performance. The harder module is more difficult but also the only path to truly elite scores.</p>
                </div>
                <div>
                  <p className="font-semibold text-white mb-2">If you're aiming for 1000–1350</p>
                  <p className="leading-relaxed mb-3">Module routing still matters, but the pressure is lower. Even the easier Module 2 allows scores up to approximately 550–600 per section. Consistent accuracy across both modules will produce a strong result in this range without the same tunnel-focus on Module 1 perfection.</p>
                  <p className="leading-relaxed">Focus equally on both modules, manage your time well, and guess intelligently on questions you cannot solve. The adaptive system gives you a fair ceiling that matches your actual skill level — do not fear the routing.</p>
                </div>
              </div>
            </div>
          </section>

          {/* Scoring explained */}
          <section aria-labelledby="scoring-heading">
            <h2 id="scoring-heading" className="text-3xl font-bold text-white mb-4">How SAT scoring works</h2>
            <div className="space-y-4 text-slate-400 leading-relaxed">
              <p>
                Each Digital SAT section is scored on a 200–800 scale using an Item Response Theory (IRT) model. Your composite score is the sum of your two section scores, ranging from 400 to 1600. There is no penalty for wrong answers — fill in every question, even if you are guessing.
              </p>
              <p>
                The IRT model means that not all correct answers are worth the same number of scaled points. Correctly answering a difficult question contributes more to your scaled score than correctly answering an easy one. This is why two students who get the same number of questions right can end up with different scaled scores if they were routed to different Module 2 difficulty levels.
              </p>
            </div>

            <div className="mt-6 bg-[#12141f] border border-white/8 rounded-xl p-5">
              <p className="text-sm font-semibold text-white mb-3">How your composite is calculated</p>
              <div className="flex flex-wrap items-center gap-3 text-sm font-mono">
                <span className="px-3 py-1.5 rounded-lg text-white font-bold bg-indigo-500/20 border border-indigo-500/30">
                  <span className="text-indigo-400">Reading & Writing</span> 670
                </span>
                <span className="text-slate-600 text-lg">+</span>
                <span className="px-3 py-1.5 rounded-lg text-white font-bold bg-purple-500/20 border border-purple-500/30">
                  <span className="text-purple-400">Math</span> 710
                </span>
                <span className="text-slate-600 text-lg">=</span>
                <span className="px-3 py-1.5 rounded-lg font-bold text-white bg-indigo-600/25 border border-indigo-500/40">
                  Composite <span className="text-indigo-300">1380</span>
                </span>
              </div>
              <p className="text-xs text-slate-500 mt-3">SAT composite = RW score + Math score. Both sections contribute equally — there is no weighting.</p>
            </div>

            <div className="mt-5 grid sm:grid-cols-3 gap-4">
              {[
                { title: 'Section scores', value: '200–800 each', detail: 'RW and Math scored separately on the same scale. Each contributes equally to your composite.', color: '#6366f1' },
                { title: 'Composite score', value: '400–1600', detail: 'Sum of your two section scores. Used in college applications and for national percentile reporting.', color: '#a855f7' },
                { title: 'Subscores', value: '1–15 each', detail: 'Additional diagnostic scores for Reading and Writing and Math content areas — useful for identifying specific weaknesses.', color: '#34d399' },
              ].map(card => (
                <div key={card.title} className="bg-[#12141f] border border-white/8 rounded-xl p-4">
                  <p className="text-xs text-slate-500 uppercase tracking-wider font-semibold mb-1">{card.title}</p>
                  <p className="text-xl font-bold font-mono mb-2" style={{ color: card.color }}>{card.value}</p>
                  <p className="text-xs text-slate-400 leading-relaxed">{card.detail}</p>
                </div>
              ))}
            </div>

            <div className="mt-5 bg-indigo-500/10 border border-indigo-500/20 rounded-xl p-5 flex gap-4 items-start">
              <span className="text-xl shrink-0" aria-hidden="true">💡</span>
              <div>
                <p className="text-sm font-semibold text-white mb-1">Superscoring: how to use it to your advantage</p>
                <p className="text-sm text-slate-400 leading-relaxed">
                  Most US colleges that require the SAT accept or actively use superscoring — combining your highest Reading and Writing score from one test date with your highest Math score from another. If your Math is stronger on your October test and your RW is stronger on your March test, your effective composite is those two best scores combined. Always check each school's superscoring policy. If they superscore, focusing one retake on your weaker section is a highly efficient strategy.
                </p>
              </div>
            </div>
          </section>

          {/* Score tiers */}
          <section aria-labelledby="tiers-heading">
            <h2 id="tiers-heading" className="text-3xl font-bold text-white mb-2">What is a good SAT score in 2026?</h2>
            <p className="text-slate-400 text-sm mb-6 leading-relaxed">
              A "good" SAT score is entirely relative to your target schools, your intended major, and scholarship eligibility thresholds. Here is how score ranges map to college admissions outcomes and what each band means nationally.
            </p>
            <div className="space-y-3">
              {SCORE_TIERS.map(tier => (
                <div key={tier.range} className="bg-[#12141f] border border-white/8 rounded-xl p-5 flex gap-4 items-start">
                  <div className="shrink-0 text-right min-w-[80px]">
                    <p className="text-xl font-bold font-mono" style={{ color: tier.color }}>{tier.range}</p>
                    <p className="text-[10px] text-slate-500 font-mono mt-0.5">{tier.pct}</p>
                  </div>
                  <div className="flex-1 border-l border-white/8 pl-4">
                    <p className="text-sm font-semibold text-white mb-0.5">{tier.label}</p>
                    <p className="text-xs text-slate-400 leading-relaxed mb-1">{tier.desc}</p>
                    <p className="text-[10px] text-slate-500">Examples: {tier.colleges}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-6 flex gap-4 items-center bg-[#12141f] border border-white/8 rounded-xl p-4">
              <span className="text-xl" aria-hidden="true">🧮</span>
              <div className="flex-1">
                <p className="text-sm font-semibold text-white mb-0.5">See your exact SAT percentile</p>
                <p className="text-xs text-slate-400">Enter your SAT score to instantly see your 2026 national percentile and compare to top college ranges.</p>
              </div>
              <Link href="/exams/sat"
                className="shrink-0 bg-indigo-600 hover:bg-indigo-500 text-white px-4 py-2 rounded-xl font-semibold text-xs transition-all">
                Calculator →
              </Link>
            </div>
          </section>

          {/* SAT vs ACT */}
          <section aria-labelledby="vs-act-heading">
            <h2 id="vs-act-heading" className="text-3xl font-bold text-white mb-2">SAT vs ACT: the key differences</h2>
            <p className="text-slate-400 text-sm mb-6 leading-relaxed max-w-3xl">
              Both the SAT and ACT are accepted equally by every US college. The choice between them should come down to which format suits your strengths — neither is inherently "easier" or "harder," but students consistently perform better on one than the other. Take a free practice test for each before deciding.
            </p>
            <div className="overflow-x-auto rounded-xl border border-white/8 mb-6">
              <table className="w-full text-sm min-w-[560px]" aria-label="SAT vs ACT comparison table 2026">
                <thead>
                  <tr className="bg-white/4 border-b border-white/8">
                    <th scope="col" className="text-left px-4 py-3 text-xs font-semibold text-slate-400 uppercase tracking-wider">Feature</th>
                    <th scope="col" className="text-center px-4 py-3 text-xs font-bold text-indigo-400">SAT</th>
                    <th scope="col" className="text-center px-4 py-3 text-xs font-bold" style={{ color: '#06b6d4' }}>ACT</th>
                  </tr>
                </thead>
                <tbody>
                  {SAT_ACT_COMPARE.map((row, i) => (
                    <tr key={row.feature} className={`border-b border-white/5 last:border-0 ${i % 2 === 0 ? '' : 'bg-white/2'}`}>
                      <td className="px-4 py-2.5 text-slate-300 text-xs font-medium">{row.feature}</td>
                      <td className="px-4 py-2.5 text-center text-xs text-indigo-400">{row.sat}</td>
                      <td className="px-4 py-2.5 text-center text-xs" style={{ color: '#06b6d4' }}>{row.act}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="bg-[#12141f] border border-indigo-500/20 rounded-xl p-5">
                <p className="text-xs font-semibold uppercase tracking-wider mb-3 text-indigo-400">Take the SAT if you…</p>
                <ul className="space-y-2 text-sm text-slate-400">
                  {[
                    'Prefer fewer, longer questions with more processing time',
                    'Are stronger in algebra and data analysis than trigonometry',
                    'Like reading and interpreting short, focused passages',
                    'Prefer a digital, adaptive test format',
                    'Want faster score turnaround (2–5 days vs 2–8 weeks for ACT)',
                  ].map(p => (
                    <li key={p} className="flex gap-2"><span className="text-indigo-400 shrink-0">✓</span>{p}</li>
                  ))}
                </ul>
              </div>
              <div className="bg-[#12141f] border border-cyan-500/20 rounded-xl p-5">
                <p className="text-xs font-semibold uppercase tracking-wider mb-3" style={{ color: '#06b6d4' }}>Take the ACT if you…</p>
                <ul className="space-y-2 text-sm text-slate-400">
                  {[
                    'Work well under fast, consistent time pressure',
                    'Have studied trigonometry and feel confident in it',
                    'Enjoy science and data interpretation in a dedicated section',
                    'Prefer a fixed, paper-based format with no adaptive routing',
                    'Want to take the test 7 times per year rather than 6',
                  ].map(p => (
                    <li key={p} className="flex gap-2"><span className="shrink-0" style={{ color: '#06b6d4' }}>✓</span>{p}</li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="mt-4">
              <Link href="/exams/sat/vs-act" className="text-sm font-medium text-indigo-400 hover:text-indigo-300 transition-colors">
                Full SAT vs ACT comparison guide: which should you take in 2026? →
              </Link>
            </div>
          </section>

          {/* College score ranges table */}
          <section aria-labelledby="colleges-heading">
            <h2 id="colleges-heading" className="text-3xl font-bold text-white mb-4">SAT scores for top colleges 2025–2026</h2>
            <p className="text-slate-400 text-sm mb-6 leading-relaxed max-w-3xl">
              Middle 50% SAT composite ranges for admitted students at competitive US universities, based on the most recent Common Data Set filings. The middle 50% range means 25% of admitted students scored below the lower number and 25% scored above the upper number — you do not need to be at the top of the range to be admitted.
            </p>
            <div className="overflow-x-auto rounded-xl border border-white/8">
              <table className="w-full text-sm min-w-[500px]" aria-label="SAT score ranges for top colleges 2025-2026">
                <thead>
                  <tr className="bg-white/4 border-b border-white/8">
                    <th scope="col" className="text-left px-4 py-3 text-xs font-semibold text-slate-400 uppercase tracking-wider">University</th>
                    <th scope="col" className="text-center px-4 py-3 text-xs font-semibold text-slate-400 uppercase tracking-wider">Middle 50% SAT</th>
                    <th scope="col" className="text-center px-4 py-3 text-xs font-semibold text-slate-400 uppercase tracking-wider hidden sm:table-cell">Admit rate</th>
                    <th scope="col" className="text-center px-4 py-3 text-xs font-semibold text-slate-400 uppercase tracking-wider hidden md:table-cell">Note</th>
                  </tr>
                </thead>
                <tbody>
                  {COLLEGE_RANGES.map((row, i) => (
                    <tr key={row.school} className={`border-b border-white/5 last:border-0 ${i % 2 === 0 ? '' : 'bg-white/2'}`}>
                      <td className="px-4 py-2.5 font-medium text-slate-200 text-sm">{row.school}</td>
                      <td className="px-4 py-2.5 text-center font-mono text-xs font-semibold text-indigo-400">{row.range}</td>
                      <td className="px-4 py-2.5 text-center text-xs text-slate-500 hidden sm:table-cell">{row.rate}</td>
                      <td className="px-4 py-2.5 text-center text-xs text-slate-500 hidden md:table-cell">{row.note}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-xs text-slate-600 mt-2">Data: Common Data Set filings and institutional websites, 2024–2025 admitted class.</p>
          </section>

          {/* Test dates */}
          <section aria-labelledby="dates-heading">
            <h2 id="dates-heading" className="text-3xl font-bold text-white mb-4">SAT test dates 2025–2026</h2>
            <div className="space-y-4 text-slate-400 leading-relaxed max-w-3xl">
              <p>
                The SAT is offered six times per year in the United States. Registration typically opens several months before each test date and closes about 3–4 weeks before the exam. Late registration is available for an additional fee up to approximately 2 weeks before the test date.
              </p>
              <p>
                The School Day SAT — administered during regular school hours — is also available at some schools, typically in spring, and may be offered free to students in certain states. Check with your school or state education department to see if School Day SAT is available.
              </p>
            </div>
            <div className="mt-5 overflow-x-auto rounded-xl border border-white/8">
              <table className="w-full text-sm min-w-[440px]" aria-label="SAT test dates 2025 to 2026">
                <thead>
                  <tr className="bg-white/4 border-b border-white/8">
                    <th scope="col" className="text-left px-4 py-3 text-xs font-semibold text-slate-400 uppercase">Test date</th>
                    <th scope="col" className="text-left px-4 py-3 text-xs font-semibold text-slate-400 uppercase">Registration deadline (approx.)</th>
                    <th scope="col" className="text-left px-4 py-3 text-xs font-semibold text-slate-400 uppercase">Score release (approx.)</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ['August 2025', 'July 2025', '~5 days after test'],
                    ['October 2025', 'September 2025', '~5 days after test'],
                    ['November 2025', 'October 2025', '~5 days after test'],
                    ['December 2025', 'November 2025', '~5 days after test'],
                    ['March 2026', 'February 2026', '~5 days after test'],
                    ['May 2026', 'April 2026', '~5 days after test'],
                  ].map(([date, reg, scores], i) => (
                    <tr key={date} className={`border-b border-white/5 last:border-0 ${i % 2 === 0 ? '' : 'bg-white/2'}`}>
                      <td className="px-4 py-2.5 font-mono text-xs font-semibold text-indigo-400">{date}</td>
                      <td className="px-4 py-2.5 text-slate-400 text-xs">{reg}</td>
                      <td className="px-4 py-2.5 text-slate-400 text-xs">{scores}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-xs text-slate-600 mt-2">Dates are approximate. Verify exact dates and registration deadlines at collegeboard.org before registering. A School Day SAT may also be available at your school in spring — check with your school counselor.</p>
          </section>

          {/* FAQ */}
          <section aria-labelledby="faq-heading">
            <h2 id="faq-heading" className="text-3xl font-bold text-white mb-5">Frequently asked questions</h2>
            <div className="space-y-3">
              {[
                { q: 'What is the Digital SAT?', a: 'The Digital SAT is the current format of the SAT college admissions test, administered on a laptop or tablet using the College Board\'s Bluebook app. It replaced the paper SAT in the US in spring 2024. It has two sections — Reading and Writing and Math — scored 200–800 each, for a total composite of 400–1600. The test is section-adaptive, meaning Module 2 difficulty is set by your Module 1 performance.' },
                { q: 'What is a good SAT score in 2026?', a: 'It depends entirely on your target schools. The national average is approximately 1050. A 1200+ (74th percentile) is above average and competitive at many universities. A 1400+ (94th percentile) is strong for highly selective schools. For Ivy League schools and MIT, you typically need 1500 or above (97th+ percentile). Use the GradesNova SAT calculator to see your exact percentile and compare to specific colleges.' },
                { q: 'How is the SAT scored in 2026?', a: 'The Digital SAT uses an Item Response Theory (IRT) model that accounts for question difficulty. Your raw score (correct answers) is converted to a scaled score of 200–800 per section. Your composite is the sum of your two scaled section scores (400–1600). The adaptive module structure means students on the harder Module 2 track can access higher section scores than those on the easier Module 2 track.' },
                { q: 'What is the difference between the SAT User Percentile and the Nationally Representative Percentile?', a: 'The SAT User Percentile compares your score only against students who actually took the SAT — a self-selected, college-bound group. The Nationally Representative Sample Percentile compares you against all US 11th and 12th graders, including those who did not take the SAT. The Nationally Representative Percentile is typically 5–10 points higher for the same score. Colleges use and understand the User Percentile, which is the one displayed on this calculator.' },
                { q: 'Should I take the SAT or the ACT?', a: 'Take a free practice test for both and compare your scores using the official concordance table. Both are accepted by all US colleges. The SAT is shorter, fully digital, and adaptive. The ACT is longer, paper-based, and includes a dedicated Science section. Most students score similarly on both with practice; take whichever suits your strengths.' },
                { q: 'How many times can I take the SAT?', a: 'The College Board does not limit the number of times you can take the SAT. Most students take it 2–3 times. Many colleges superscore, taking your best section scores across test dates. The SAT is offered 6 times per year in the US.' },
                { q: 'What is Khan Academy Official SAT Practice?', a: 'Khan Academy offers free, official SAT preparation in partnership with the College Board. Practice is personalised based on your PSAT or previous SAT scores and focuses on your specific areas of weakness. Students who complete 20 hours of practice on Khan Academy show an average score gain of 115 points, according to College Board research.' },
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

          {/* Bottom hub CTA */}
          <section aria-labelledby="next-heading" className="border-t border-white/8 pt-12">
            <h2 id="next-heading" className="text-2xl font-bold text-white mb-2">Explore the full SAT hub</h2>
            <p className="text-slate-400 text-sm mb-6">Every tool and guide you need for the SAT, in one place.</p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
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

        </div>
        <Footer />
      </main>
    </>
  );
}
