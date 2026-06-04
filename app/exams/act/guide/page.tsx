// app/exams/act/guide/page.tsx
// ACT COMPLETE GUIDE 2026 — Content Hub Page
// Builds topical authority around the ACT calculator
// Targets: "act guide", "what is the act", "act exam explained",
//          "act vs sat", "act scoring explained", "act 2026"

import type { Metadata } from 'next';
import Link from 'next/link';
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';

export const metadata: Metadata = {
  title: 'Complete ACT Guide 2026 | Scoring, Sections & Test Strategy | GradesNova',
  description:
    'The complete ACT guide for 2026. Everything on the four sections, how ACT scoring works, what a good ACT score is, how ACT compares to the SAT, and what scores you need for top colleges.',
  alternates: { canonical: 'https://gradesnova.com/exams/act/guide' },
  openGraph: {
    title: 'Complete ACT Guide 2026 | Scoring, Sections & Test Strategy',
    description:
      'Everything you need to know about the ACT in 2026 — scoring, sections, national averages, college ranges, and how to decide between ACT and SAT.',
    url: 'https://gradesnova.com/exams/act/guide',
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
    { '@type': 'ListItem', position: 3, name: 'Complete ACT Guide 2026', item: 'https://gradesnova.com/exams/act/guide' },
  ],
};

const jsonLdArticle = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Complete ACT Guide 2026: Scoring, Sections & Test Strategy',
  description:
    'The definitive guide to the ACT in 2026, covering all four sections, scoring, national averages, college comparison, and ACT vs SAT.',
  url: 'https://gradesnova.com/exams/act/guide',
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
      name: 'What is the ACT test?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The ACT (American College Testing) is a standardised college admissions test administered by ACT, Inc. It has four sections — English, Mathematics, Reading, and Science — scored on a 1–36 scale each, with a composite score that is the average of all four. It is accepted by every four-year US college and university. The national average ACT composite score is 21.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is a good ACT score in 2026?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A good ACT score depends on your target colleges. The national average is 21. Scores of 24+ (74th percentile) are above average and competitive at many universities. Scores of 28+ (88th percentile) are strong for selective schools. Scores of 33+ (97th percentile) are competitive at Ivy League schools and MIT. A score of 36 is a perfect score.',
      },
    },
    {
      '@type': 'Question',
      name: 'How is the ACT different from the SAT?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The ACT has four sections including a dedicated Science section; the SAT does not. The ACT moves faster — roughly one question per minute across all sections. The SAT is now fully digital and adaptive; the ACT is a fixed paper test (with some digital options). Both are accepted equally at every US college. Most students score similarly on both after practice.',
      },
    },
    {
      '@type': 'Question',
      name: 'How many times can I take the ACT?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'ACT, Inc. does not impose a lifetime limit on retakes. Most students take it 2–3 times. The ACT is offered in February, April, June, July, September, October, and December. Many colleges superscore, taking your highest section scores across multiple test dates.',
      },
    },
    {
      '@type': 'Question',
      name: 'What ACT score do I need for a good college?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Requirements vary widely. State flagship universities typically have middle 50% ranges of 24–30. Selective schools like Georgetown and Notre Dame see ranges of 32–35. Ivy League and MIT median scores are 34–36. Check the specific Common Data Set for each school you are targeting.',
      },
    },
  ],
};

const HUB_PAGES = [
  {
    title: 'ACT Score Percentile Calculator',
    desc: 'Enter your composite or section scores to instantly see your 2026 national percentile and ACT-to-SAT conversion.',
    href: '/exams/act',
    color: '#06b6d4',
    icon: '🧮',
    badge: 'Calculator',
  },
  {
    title: 'ACT Score Chart & Percentile Table',
    desc: 'Full composite and section percentile tables, score-to-college comparison, and ACT-to-SAT crosswalk for 2026.',
    href: '/exams/act/score-chart',
    color: '#6366f1',
    icon: '📊',
    badge: 'Data',
  },
  {
    title: 'ACT vs SAT: Which Should You Take?',
    desc: 'A direct comparison of structure, scoring, difficulty, and which test plays to your specific strengths.',
    href: '/exams/act/vs-sat',
    color: '#a855f7',
    icon: '⚖️',
    badge: 'Comparison',
  },
  {
    title: 'ACT Prep Tips & Test Strategy',
    desc: 'Section-by-section prep strategies, timing tactics, and how to improve your composite score efficiently.',
    href: '/exams/act/prep-tips',
    color: '#f59e0b',
    icon: '📖',
    badge: 'Strategy',
  },
];

const SECTIONS = [
  {
    name: 'English',
    icon: '📝',
    color: '#06b6d4',
    time: '45 min',
    questions: 75,
    secPerQ: '36s',
    scoreRange: '1–36',
    avg: 20,
    desc: 'Tests grammar, punctuation, sentence structure, and rhetorical skills (organisation and style). Five prose passages with underlined portions — you choose the best replacement or confirm it is correct as written.',
    topics: ['Punctuation (commas, apostrophes, semicolons)', 'Sentence structure (fragments, run-ons, modifiers)', 'Agreement (subject-verb, pronoun)', 'Rhetorical skills (transitions, organisation, style)', 'Word choice and idiom'],
    tip: 'English is the section most improved by targeted grammar study. Learning the 15–20 core grammar rules tested by ACT English and applying them consistently is more reliable than relying on "sounds right."',
  },
  {
    name: 'Mathematics',
    icon: '📐',
    color: '#34d399',
    time: '60 min',
    questions: 60,
    secPerQ: '60s',
    scoreRange: '1–36',
    avg: 20,
    desc: 'Covers pre-algebra through trigonometry and basic matrix operations. A calculator is permitted throughout. Questions progress roughly in difficulty — earlier questions are easier. No penalty for wrong answers.',
    topics: ['Pre-algebra and elementary algebra', 'Intermediate algebra and coordinate geometry', 'Plane geometry (angles, triangles, circles)', 'Trigonometry (SOH-CAH-TOA, basic identities)', 'Statistics and probability'],
    tip: 'ACT Math covers more topics than SAT Math (trigonometry, matrices) but at a more accessible depth. If your school hasn\'t covered trig yet, the SAT may be the better choice — otherwise, ACT Math rewards broad preparation.',
  },
  {
    name: 'Reading',
    icon: '📖',
    color: '#a855f7',
    time: '35 min',
    questions: 40,
    secPerQ: '53s',
    scoreRange: '1–36',
    avg: 21,
    desc: 'Four passages — one each from: literary narrative/prose fiction, social science, humanities, and natural science. 10 questions per passage. Tests literal comprehension, inference, vocabulary in context, and main idea.',
    topics: ['Main idea and purpose', 'Specific detail retrieval', 'Inference and implication', 'Vocabulary in context', 'Comparative/paired passages'],
    tip: 'Timing is the critical challenge in ACT Reading — 35 minutes for 40 questions and 4 long passages is very fast. Most students benefit from reading the questions for a passage first, then reading the passage with those questions in mind.',
  },
  {
    name: 'Science',
    icon: '🔬',
    color: '#f59e0b',
    time: '35 min',
    questions: 40,
    secPerQ: '53s',
    scoreRange: '1–36',
    avg: 20,
    desc: 'NOT a content knowledge test — it tests data interpretation and scientific reasoning. Six or seven sets of scientific data (graphs, tables, experimental results) with questions about what the data shows and what it implies.',
    topics: ['Data representation (reading graphs and tables)', 'Research summaries (understanding experimental design)', 'Conflicting viewpoints (evaluating competing hypotheses)', 'Drawing conclusions from data', 'Scientific vocabulary in context'],
    tip: 'You don\'t need to know biology, chemistry, or physics to score well on ACT Science. You need to read data carefully and reason logically. Students who are strong data readers often find this section easier than it looks.',
  },
];

const SCORE_TIERS = [
  { range: '33–36', pct: 'Top 3%', label: 'Exceptional', desc: 'Competitive at every US university. At or above the 75th percentile for Ivy League and MIT.', color: '#34d399', colleges: 'Harvard, Yale, Princeton, MIT, Stanford' },
  { range: '29–32', pct: 'Top 5–9%', label: 'Excellent', desc: 'Competitive at highly selective schools. Strong merit scholarship candidate everywhere.', color: '#06b6d4', colleges: 'Duke, Northwestern, Georgetown, UVA, Michigan' },
  { range: '24–28', pct: 'Top 12–26%', label: 'Strong', desc: 'Competitive at many strong universities. At or above the median for state flagships.', color: '#6366f1', colleges: 'State flagships, Boston University, Tulane' },
  { range: '20–23', pct: 'Top 37–51%', label: 'Average', desc: 'Around the national average. Sufficient for many four-year colleges.', color: '#a855f7', colleges: 'Most four-year state colleges' },
  { range: 'Below 20', pct: 'Bottom 49%', label: 'Below average', desc: 'Below the national average. A retake with preparation typically improves composite by 3–5 points.', color: '#f59e0b', colleges: 'Less selective four-year colleges, community college' },
];

const ACT_SAT_COMPARE = [
  { feature: 'Score scale', act: '1–36 composite', sat: '400–1600 composite' },
  { feature: 'Sections', act: 'English, Math, Reading, Science', sat: 'Reading & Writing, Math' },
  { feature: 'Science section', act: '✓ Yes (40 questions)', sat: '✗ No' },
  { feature: 'Total questions', act: '215 questions', sat: '98 questions' },
  { feature: 'Total time', act: '2h 55m', sat: '2h 14m (digital)' },
  { feature: 'Format', act: 'Fixed paper (some digital centres)', sat: 'Fully digital, adaptive' },
  { feature: 'Pace', act: 'Very fast (~1 min/question)', sat: 'More time per question' },
  { feature: 'Calculator', act: 'Entire Math section', sat: 'Entire Math section' },
  { feature: 'Superscoring', act: 'Many colleges superscore', sat: 'Most colleges superscore' },
  { feature: 'Test dates', act: '7 per year', sat: '6 per year' },
  { feature: 'Cost (approx.)', act: '$65 (no Writing)', sat: '$60' },
];

export default function ACTGuidePage() {
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
                <li><Link href="/exams/act" className="hover:text-white transition-colors">ACT Score Calculator</Link></li>
                <li aria-hidden="true">›</li>
                <li className="text-slate-400" aria-current="page">Complete ACT Guide</li>
              </ol>
            </nav>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl flex items-center justify-center text-xl"
                style={{ backgroundColor: '#06b6d415' }} aria-hidden="true">✏️</div>
              <span className="text-xs font-mono uppercase tracking-widest" style={{ color: '#06b6d470' }}>ACT · Complete Guide · 2026</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white tracking-tight mb-4 leading-tight">
              Complete ACT Guide 2026
            </h1>
            <p className="text-lg text-slate-400 max-w-2xl leading-relaxed">
              Everything you need to know about the ACT in 2026 — how the four sections work, how scoring and percentiles work, what a good score is, how it compares to the SAT, and what scores top colleges expect.
            </p>
            <div className="flex flex-wrap gap-3 mt-5">
              {[
                ['All 4 sections explained', '#06b6d4'],
                ['Scoring & percentiles', '#6366f1'],
                ['ACT vs SAT comparison', '#a855f7'],
                ['College score ranges', '#34d399'],
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
            <h2 id="hub-heading" className="text-xl font-bold text-white mb-2">Everything in the ACT hub</h2>
            <p className="text-slate-400 text-sm mb-6">Jump to any tool or guide in the GradesNova ACT hub.</p>
            <div className="grid sm:grid-cols-2 gap-4">
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

          {/* What is the ACT */}
          <section aria-labelledby="what-heading">
            <h2 id="what-heading" className="text-3xl font-bold text-white mb-6">What is the ACT?</h2>
            <div className="space-y-4 text-slate-400 leading-relaxed">
              <p>
                The ACT (American College Testing) is a standardised college admissions test administered by ACT, Inc. It is accepted by every four-year college and university in the United States as an alternative to the SAT. Over 1.4 million students take the ACT each year.
              </p>
              <p>
                The test has four sections — English, Mathematics, Reading, and Science — each scored on a 1–36 scale. Your composite score is the average of the four section scores, rounded to the nearest whole number. The national average composite score is <strong className="text-white">21</strong>.
              </p>
              <p>
                Unlike the SAT, the ACT includes a dedicated Science section and moves significantly faster — students answer approximately one question per minute across the test. An optional Writing section (scored separately, not part of the composite) is available at some test centres.
              </p>
            </div>

            <div className="grid sm:grid-cols-4 gap-4 mt-8">
              {[
                { icon: '📊', label: 'Score range', value: '1–36', sub: 'Average of 4 sections', color: '#06b6d4' },
                { icon: '⏱️', label: 'Total time', value: '2h 55m', sub: 'Without Writing section', color: '#34d399' },
                { icon: '❓', label: 'Total questions', value: '215', sub: 'Across all 4 sections', color: '#a855f7' },
                { icon: '🌎', label: 'National average', value: '21', sub: '51st percentile', color: '#f59e0b' },
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

          {/* The four sections */}
          <section aria-labelledby="sections-heading">
            <h2 id="sections-heading" className="text-3xl font-bold text-white mb-2">The four ACT sections</h2>
            <p className="text-slate-400 text-sm mb-8 leading-relaxed">
              Each section is scored independently on a 1–36 scale. Your composite is the average. Understanding what each section tests — and what it doesn't — is the foundation of an effective prep strategy.
            </p>

            <div className="space-y-6">
              {SECTIONS.map(section => (
                <div key={section.name} className="bg-[#12141f] border border-white/8 rounded-2xl p-6">
                  <div className="flex flex-wrap items-center gap-3 mb-4">
                    <span className="text-2xl" aria-hidden="true">{section.icon}</span>
                    <h3 className="text-xl font-bold" style={{ color: section.color }}>{section.name}</h3>
                    <div className="flex gap-2 ml-auto">
                      {[
                        { label: section.time, icon: '⏱️' },
                        { label: `${section.questions}Q`, icon: '❓' },
                        { label: `~${section.secPerQ}/Q`, icon: '🏃' },
                        { label: `Avg: ${section.avg}`, icon: '📊' },
                      ].map(stat => (
                        <span key={stat.label} className="text-[10px] font-mono px-2 py-1 rounded-lg bg-white/5 text-slate-400">
                          {stat.icon} {stat.label}
                        </span>
                      ))}
                    </div>
                  </div>

                  <p className="text-sm text-slate-400 leading-relaxed mb-4">{section.desc}</p>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <p className="text-xs font-semibold text-white uppercase tracking-wider mb-2">Topics tested</p>
                      <ul className="space-y-1">
                        {section.topics.map(t => (
                          <li key={t} className="flex items-start gap-2 text-xs text-slate-400">
                            <span style={{ color: section.color }} className="shrink-0 mt-0.5">→</span>
                            {t}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="bg-white/3 rounded-xl p-4 border border-white/6">
                      <p className="text-xs font-semibold text-white mb-2">💡 Key strategy</p>
                      <p className="text-xs text-slate-400 leading-relaxed">{section.tip}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Scoring explained */}
          <section aria-labelledby="scoring-heading">
            <h2 id="scoring-heading" className="text-3xl font-bold text-white mb-4">How ACT scoring works</h2>
            <div className="space-y-4 text-slate-400 leading-relaxed">
              <p>
                Each of the four ACT sections is scored on a scale of 1–36. Your composite score is the average of these four section scores, rounded to the nearest whole number. There is no penalty for wrong answers — always answer every question, even if you have to guess.
              </p>
              <p>
                Your composite is what colleges primarily see. However, some STEM programs pay close attention to Math scores specifically, and some humanities programs look at English and Reading scores. Always check the specific requirements of programs you're targeting.
              </p>
            </div>

            <div className="mt-6 bg-[#12141f] border border-white/8 rounded-xl p-5">
              <p className="text-sm font-semibold text-white mb-3">How your composite is calculated</p>
              <div className="flex flex-wrap items-center gap-2 text-sm font-mono">
                {[
                  { label: 'English', score: 24, color: '#06b6d4' },
                  { label: 'Math', score: 28, color: '#34d399' },
                  { label: 'Reading', score: 26, color: '#a855f7' },
                  { label: 'Science', score: 22, color: '#f59e0b' },
                ].map((s, i, arr) => (
                  <span key={s.label} className="flex items-center gap-2">
                    <span className="px-3 py-1.5 rounded-lg text-white font-bold" style={{ backgroundColor: `${s.color}25`, border: `1px solid ${s.color}40` }}>
                      <span style={{ color: s.color }}>{s.label}</span> {s.score}
                    </span>
                    {i < arr.length - 1 && <span className="text-slate-600">+</span>}
                  </span>
                ))}
                <span className="text-slate-600 mx-1">) ÷ 4 =</span>
                <span className="px-3 py-1.5 rounded-lg font-bold text-white bg-cyan-500/20 border border-cyan-500/40">
                  Composite <span className="text-cyan-400">25</span>
                </span>
              </div>
              <p className="text-xs text-slate-500 mt-3">(24 + 28 + 26 + 22) ÷ 4 = 25.0 → rounds to composite of 25</p>
            </div>

            <div className="mt-6 bg-cyan-500/10 border border-cyan-500/20 rounded-xl p-5 flex gap-4 items-start">
              <span className="text-xl shrink-0" aria-hidden="true">💡</span>
              <div>
                <p className="text-sm font-semibold text-white mb-1">Superscoring: use it strategically</p>
                <p className="text-sm text-slate-400 leading-relaxed">
                  Many colleges superscore the ACT — taking your highest section score from each test date and combining them into a new composite. If you scored 28 English on Test 1 and 30 Math on Test 2, some colleges will calculate a superscore using 28 + 30 (plus your best Reading and Science). Always check each college's superscoring policy before deciding how many times to retake.
                </p>
              </div>
            </div>
          </section>

          {/* Score tiers */}
          <section aria-labelledby="tiers-heading">
            <h2 id="tiers-heading" className="text-3xl font-bold text-white mb-2">What is a good ACT score in 2026?</h2>
            <p className="text-slate-400 text-sm mb-6 leading-relaxed">
              "Good" is relative to your target schools. Here is how score ranges break down nationally and what they mean for college admissions.
            </p>
            <div className="space-y-3">
              {SCORE_TIERS.map(tier => (
                <div key={tier.range} className="bg-[#12141f] border border-white/8 rounded-xl p-5 flex gap-4 items-start">
                  <div className="shrink-0 text-right min-w-[64px]">
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
                <p className="text-sm font-semibold text-white mb-0.5">See your exact percentile</p>
                <p className="text-xs text-slate-400">Enter your ACT score to instantly see your national percentile and how you compare to top colleges.</p>
              </div>
              <Link href="/exams/act"
                className="shrink-0 bg-cyan-600 hover:bg-cyan-500 text-white px-4 py-2 rounded-xl font-semibold text-xs transition-all">
                Calculator →
              </Link>
            </div>
          </section>

          {/* ACT vs SAT */}
          <section aria-labelledby="vs-sat-heading">
            <h2 id="vs-sat-heading" className="text-3xl font-bold text-white mb-2">ACT vs SAT: the key differences</h2>
            <p className="text-slate-400 text-sm mb-6 leading-relaxed">
              Both tests are accepted equally by every US college. The choice between them should come down to which format suits your strengths — not which you think colleges prefer.
            </p>

            <div className="overflow-x-auto rounded-xl border border-white/8">
              <table className="w-full text-sm min-w-[500px]" aria-label="ACT vs SAT comparison table">
                <thead>
                  <tr className="bg-white/4 border-b border-white/8">
                    <th scope="col" className="text-left px-4 py-3 text-xs font-semibold text-slate-400 uppercase tracking-wider">Feature</th>
                    <th scope="col" className="text-center px-4 py-3 text-xs font-bold" style={{ color: '#06b6d4' }}>ACT</th>
                    <th scope="col" className="text-center px-4 py-3 text-xs font-bold text-indigo-400">SAT</th>
                  </tr>
                </thead>
                <tbody>
                  {ACT_SAT_COMPARE.map((row, i) => (
                    <tr key={row.feature} className={`border-b border-white/5 last:border-0 ${i % 2 === 0 ? '' : 'bg-white/2'}`}>
                      <td className="px-4 py-2.5 text-slate-300 text-xs font-medium">{row.feature}</td>
                      <td className="px-4 py-2.5 text-center text-xs" style={{ color: '#06b6d4' }}>{row.act}</td>
                      <td className="px-4 py-2.5 text-center text-xs text-indigo-400">{row.sat}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="mt-6 grid sm:grid-cols-2 gap-4">
              <div className="bg-[#12141f] border border-cyan-500/20 rounded-xl p-5">
                <p className="text-xs font-semibold uppercase tracking-wider mb-3" style={{ color: '#06b6d4' }}>Take the ACT if you…</p>
                <ul className="space-y-2 text-sm text-slate-400">
                  {['Read quickly and work well under time pressure', 'Have covered trigonometry in school', 'Are comfortable interpreting graphs and scientific data', 'Prefer a predictable, fixed-format test'].map(p => (
                    <li key={p} className="flex gap-2"><span className="text-cyan-400 shrink-0">✓</span>{p}</li>
                  ))}
                </ul>
              </div>
              <div className="bg-[#12141f] border border-indigo-500/20 rounded-xl p-5">
                <p className="text-xs font-semibold uppercase tracking-wider mb-3 text-indigo-400">Take the SAT if you…</p>
                <ul className="space-y-2 text-sm text-slate-400">
                  {['Prefer more time per question', 'Are stronger in algebra than trigonometry', 'Like targeted evidence-based reading', 'Prefer a shorter, fully digital adaptive test'].map(p => (
                    <li key={p} className="flex gap-2"><span className="text-indigo-400 shrink-0">✓</span>{p}</li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="mt-4">
              <Link href="/exams/act/vs-sat"
                className="text-sm font-medium transition-colors" style={{ color: '#06b6d4' }}>
                Full ACT vs SAT comparison: which should you take? →
              </Link>
            </div>
          </section>

          {/* Test dates */}
          <section aria-labelledby="dates-heading">
            <h2 id="dates-heading" className="text-3xl font-bold text-white mb-4">ACT test dates 2025–2026</h2>
            <div className="space-y-4 text-slate-400 leading-relaxed">
              <p>
                The ACT is offered seven times per year in the United States. Registration typically closes 4–5 weeks before the test date. Late registration (with a fee) is available until about 2–3 weeks before the test.
              </p>
            </div>
            <div className="mt-5 overflow-x-auto rounded-xl border border-white/8">
              <table className="w-full text-sm min-w-[400px]" aria-label="ACT test dates 2025 to 2026">
                <thead>
                  <tr className="bg-white/4 border-b border-white/8">
                    <th scope="col" className="text-left px-4 py-3 text-xs font-semibold text-slate-400 uppercase">Test date</th>
                    <th scope="col" className="text-left px-4 py-3 text-xs font-semibold text-slate-400 uppercase">Registration deadline (approx.)</th>
                    <th scope="col" className="text-left px-4 py-3 text-xs font-semibold text-slate-400 uppercase">Score release (approx.)</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ['September 2025', 'August 2025', 'Late September 2025'],
                    ['October 2025', 'September 2025', 'Late October 2025'],
                    ['December 2025', 'November 2025', 'Late December 2025'],
                    ['February 2026', 'January 2026', 'Late February 2026'],
                    ['April 2026', 'March 2026', 'Late April 2026'],
                    ['June 2026', 'May 2026', 'Late June 2026'],
                    ['July 2026', 'June 2026', 'Mid August 2026'],
                  ].map(([date, reg, scores], i) => (
                    <tr key={date} className={`border-b border-white/5 last:border-0 ${i % 2 === 0 ? '' : 'bg-white/2'}`}>
                      <td className="px-4 py-2.5 font-mono text-xs font-semibold" style={{ color: '#06b6d4' }}>{date}</td>
                      <td className="px-4 py-2.5 text-slate-400 text-xs">{reg}</td>
                      <td className="px-4 py-2.5 text-slate-400 text-xs">{scores}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-xs text-slate-600 mt-2">Dates are approximate. Verify exact dates and registration deadlines at act.org before registering.</p>
          </section>

          {/* FAQ */}
          <section aria-labelledby="faq-heading">
            <h2 id="faq-heading" className="text-3xl font-bold text-white mb-5">Frequently asked questions</h2>
            <div className="space-y-3">
              {[
                { q: 'What is the ACT test?', a: 'The ACT is a standardised college admissions test with four sections — English, Math, Reading, and Science — each scored 1–36. Your composite is the average. It is accepted by every four-year US college. The national average composite is 21.' },
                { q: 'What is a good ACT score in 2026?', a: 'It depends on your target schools. 24+ is above average and competitive at many universities. 28+ is strong for selective schools. 33+ is competitive at Ivy League and MIT. Always check the specific score ranges for schools you are targeting.' },
                { q: 'How is the ACT composite calculated?', a: 'The composite is the average of your four section scores (English, Math, Reading, Science), rounded to the nearest whole number. There is no penalty for wrong answers — guess if unsure.' },
                { q: 'Should I take the ACT or the SAT?', a: 'Take a free practice test for each and compare your scores using the official concordance table. Both are accepted equally everywhere. The ACT is faster-paced and includes Science; the SAT is digital, adaptive, and shorter.' },
                { q: 'How many times can I take the ACT?', a: 'There is no lifetime limit. Most students take it 2–3 times. It is offered in September, October, December, February, April, June, and July.' },
                { q: 'What is the ACT Writing section and do I need it?', a: 'The optional Writing section is a 40-minute essay scored separately on a 2–12 scale. It does NOT affect your composite score. Most colleges do not require it. Check specific requirements for schools you are applying to — a small number still require or recommend it.' },
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
            <h2 id="next-heading" className="text-2xl font-bold text-white mb-2">Explore the full ACT hub</h2>
            <p className="text-slate-400 text-sm mb-6">Every tool and guide you need for the ACT, in one place.</p>
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

        </div>
        <Footer />
      </main>
    </>
  );
}
