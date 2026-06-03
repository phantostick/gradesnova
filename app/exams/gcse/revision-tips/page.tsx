// app/exams/gcse/revision-tips/page.tsx
// GCSE REVISION TIPS & STRATEGY — Long-tail content capture
// Targets: "gcse revision tips", "how to revise for gcse", "gcse study tips",
//          "best revision methods gcse", "gcse revision plan", "active recall gcse"

import type { Metadata } from 'next';
import Link from 'next/link';
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';

export const metadata: Metadata = {
  title: 'GCSE Revision Tips 2026 | Study Methods That Actually Work | GradesNova',
  description:
    'Evidence-based GCSE revision tips for 2026. How to use active recall, spaced repetition, and past papers effectively. Subject-by-subject advice for Maths, English, and Science. Build a revision plan that works.',
  alternates: { canonical: 'https://gradesnova.com/exams/gcse/revision-tips' },
  openGraph: {
    title: 'GCSE Revision Tips 2026 | Study Methods That Actually Work',
    description:
      'The science-backed revision methods that improve GCSE grades — active recall, spaced repetition, past papers, and how to build a plan that sticks.',
    url: 'https://gradesnova.com/exams/gcse/revision-tips',
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
    { '@type': 'ListItem', position: 2, name: 'GCSE Grade Boundaries', item: 'https://gradesnova.com/exams/gcse' },
    { '@type': 'ListItem', position: 3, name: 'GCSE Guide', item: 'https://gradesnova.com/exams/gcse/guide' },
    { '@type': 'ListItem', position: 4, name: 'Revision Tips', item: 'https://gradesnova.com/exams/gcse/revision-tips' },
  ],
};

const jsonLdArticle = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'GCSE Revision Tips 2026: Study Methods That Actually Work',
  description:
    'Evidence-based GCSE revision strategies — active recall, spaced repetition, past papers, and subject-by-subject advice.',
  url: 'https://gradesnova.com/exams/gcse/revision-tips',
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
      name: 'What is the best revision method for GCSEs?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The most effective revision methods supported by cognitive science are active recall (testing yourself on material rather than re-reading it) and spaced repetition (spreading revision sessions over time rather than cramming). Past papers are the single most useful tool because they combine both: they test your recall and, if you do them repeatedly over weeks, space your practice.',
      },
    },
    {
      '@type': 'Question',
      name: 'When should I start revising for GCSEs?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Most students begin structured revision in January or February of Year 11, using mock results to identify weak areas. Light, consistent revision from September onwards — 20–30 minutes per subject a few times a week — is more effective than heavy cramming from April. By Easter, revision should be daily and structured around past papers.',
      },
    },
    {
      '@type': 'Question',
      name: 'How many hours a day should I revise for GCSEs?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'During term time, 1.5–2.5 focused hours per evening is sustainable and effective for most students. Quality matters more than quantity — 90 minutes of active recall beats 3 hours of passive re-reading. During the Easter holidays, 4–5 focused hours per day is a realistic and productive target. Avoid revising for more than 90 minutes without a proper break.',
      },
    },
    {
      '@type': 'Question',
      name: 'Are past papers the best way to revise for GCSEs?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Past papers are the single most effective GCSE revision tool available, but only when used correctly. Doing a past paper under timed, exam conditions and then marking it carefully (identifying exactly what you got wrong and why) is the full cycle. Re-reading notes or watching videos without testing yourself is significantly less effective.',
      },
    },
    {
      '@type': 'Question',
      name: 'What revision methods should I avoid?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Re-reading notes, highlighting, and copying out content are the least effective revision methods according to cognitive science research, because they create an illusion of familiarity without actually testing your ability to recall information. These feel productive but produce poor results under exam conditions. Replace them with flashcards, practice questions, and past papers.',
      },
    },
  ],
};

const METHODS = [
  {
    rank: '01',
    title: 'Active recall',
    effectiveness: 'Very high',
    effectColor: '#34d399',
    icon: '🧠',
    desc: 'Testing yourself on material — rather than re-reading or highlighting — is the most effective revision method supported by cognitive science. Every time you retrieve information from memory, the memory trace strengthens. Re-reading doesn\'t do this.',
    howTo: [
      'Cover your notes and try to write down everything you remember about a topic',
      'Use flashcards — write a question on one side, the answer on the other, then test yourself',
      'Use apps like Anki or Quizlet to make digital flashcard decks for each subject',
      'After reading a page of notes, close the book and summarise it from memory',
    ],
    avoid: 'Don\'t just re-read your notes or highlight text. It feels productive but produces very little learning.',
  },
  {
    rank: '02',
    title: 'Spaced repetition',
    effectiveness: 'Very high',
    effectColor: '#34d399',
    icon: '📅',
    desc: 'Spreading revision sessions over time is dramatically more effective than massing all your revision into one long session (cramming). Your brain consolidates memories during sleep and downtime — you need time between sessions for learning to stick.',
    howTo: [
      'Revise a topic, then revisit it 1 day later, then 3 days later, then 1 week later',
      'Build a rolling revision timetable that cycles back through covered topics',
      'Anki\'s spaced repetition algorithm does this automatically for flashcards',
      'Mark topics as "confident," "uncertain," or "needs work" and prioritise accordingly',
    ],
    avoid: 'Don\'t spend an entire day on one subject then not touch it for two weeks. Spread it out.',
  },
  {
    rank: '03',
    title: 'Past papers under timed conditions',
    effectiveness: 'Very high',
    effectColor: '#34d399',
    icon: '📝',
    desc: 'Past papers are the single most useful GCSE revision tool — but only when done properly. The full cycle is: sit the paper under real time pressure, mark it against the mark scheme, identify every mark you lost and why, then revise those specific topics.',
    howTo: [
      'Find past papers on your exam board\'s website (AQA, Edexcel, OCR, WJEC all publish them free)',
      'Sit the paper with the real time limit — no pausing, no looking things up',
      'Mark it immediately using the official mark scheme',
      'For every mark lost: identify the topic, find it in your notes, and revise it the same day',
      'Keep a log of topics where you repeatedly lose marks — these are your priority areas',
    ],
    avoid: 'Don\'t do past papers without marking them carefully afterwards. The marking is where most of the learning happens.',
  },
  {
    rank: '04',
    title: 'Interleaving subjects',
    effectiveness: 'High',
    effectColor: '#6366f1',
    icon: '🔀',
    desc: 'Switching between subjects within a revision session — rather than spending 3 hours on one topic — is more cognitively demanding but produces stronger long-term retention. It also prevents the fatigue that comes from staring at one subject for too long.',
    howTo: [
      'Structure sessions as 40–50 minutes on Subject A, 10-minute break, 40–50 minutes on Subject B',
      'Don\'t switch so rapidly that you can\'t build momentum — 40 minutes minimum per subject',
      'Alternate between subjects that use different parts of your brain (e.g. Maths then English)',
      'Use a timetable to ensure all subjects get adequate coverage across the week',
    ],
    avoid: 'Don\'t confuse interleaving with distraction. Each block should be focused and free from your phone.',
  },
  {
    rank: '05',
    title: 'Retrieval practice with mark schemes',
    effectiveness: 'High',
    effectColor: '#6366f1',
    icon: '✅',
    desc: 'For written subjects (History, English, RS, Geography), writing answers to past questions and marking them against the official mark scheme trains you to produce exactly what the examiner wants. Most students lose marks not because they don\'t know the content but because they don\'t present it in the expected format.',
    howTo: [
      'Download mark schemes from your exam board\'s website — they\'re free',
      'Write a full answer to a past question (timed), then compare it to the mark scheme',
      'Highlight every point in the mark scheme you missed — these are your gaps',
      'Rewrite the answer incorporating the missed points',
      'For 6-mark+ questions, study the "levels" descriptors to understand what distinguishes high-level responses',
    ],
    avoid: 'Don\'t skip the mark scheme. The mark scheme is the answer. Learn its language and structure.',
  },
  {
    rank: '06',
    title: 'Teaching the material',
    effectiveness: 'Medium-high',
    effectColor: '#a855f7',
    icon: '🗣️',
    desc: 'Explaining a topic out loud — to a family member, a friend, or even just to yourself — exposes gaps in your understanding that passive reading hides. If you can\'t explain it simply, you don\'t understand it yet.',
    howTo: [
      'Pick a topic and explain it out loud as if to someone who knows nothing about it',
      'Pause whenever you get stuck or vague — those are your gaps',
      'Record yourself on your phone and play it back — it\'s uncomfortable but highly effective',
      'Revise group sessions with friends where you take turns teaching each other topics',
    ],
    avoid: 'Don\'t use this as the primary method for every topic — it\'s slow. Use it for topics you struggle to explain clearly.',
  },
];

const SUBJECT_TIPS = [
  {
    subject: 'Maths',
    icon: '📐',
    color: '#34d399',
    board: 'AQA / Edexcel / OCR / WJEC',
    tips: [
      'Do past papers above all else. Maths is almost entirely skill-based — reading notes helps very little. You need to practice doing questions.',
      'Build a "formula sheet" of every formula you need (even ones given in the exam — knowing them saves time). Test yourself on it weekly.',
      'When you get a question wrong, don\'t just copy the answer — redo it from scratch without looking until you get it right.',
      'Focus on topics that appear every year (algebra, statistics, geometry) before niche topics.',
      'For Higher tier: the last 20–25% of the paper (questions 20+) is very difficult. Secure grades 4–6 topics first, then work up.',
    ],
    resources: 'Corbettmaths (free video lessons for every GCSE Maths topic + practice papers), Mathsgenie, your board\'s official past papers.',
  },
  {
    subject: 'English Language',
    icon: '📝',
    color: '#6366f1',
    board: 'AQA / Edexcel / OCR / WJEC',
    tips: [
      'English Language is about skill, not memory. You can\'t revise the content — you can only practice the skills. Do as many past papers as you can find.',
      'Learn the exact mark scheme language for each question type. "Connotations," "semantic field," "structure," "form" — examiners reward this vocabulary explicitly.',
      'For reading questions: always embed a quote in your answer, then analyse the specific language choices (not just "it makes the reader feel").',
      'For writing questions: plan before you write. Students who plan for 2–3 minutes consistently produce better-structured responses.',
      'Practise writing under strict time conditions. Most students struggle with timing more than content.',
    ],
    resources: 'Mr Salles Teaches English (YouTube), your exam board\'s mark schemes and examiner reports.',
  },
  {
    subject: 'English Literature',
    icon: '📚',
    color: '#a855f7',
    board: 'AQA / Edexcel / OCR / WJEC',
    tips: [
      'Learn a bank of strong, short quotations for each text — aim for 8–10 per text that you can deploy flexibly across different questions.',
      'Learn context for each text: when it was written, what was happening socially/historically, and how that affects the text\'s themes.',
      'Practice writing responses that address: a specific quote → language analysis → effect on reader → context → broader theme.',
      'For the unseen poetry question: slow down. Read the poem twice before writing anything. Look for: tone, imagery, structure, and what shifts.',
      'Use past questions and mark schemes to understand what "Grade 8–9 level analysis" looks like — then model your responses on it.',
    ],
    resources: 'MrBruff (YouTube), CGP revision guides, Sparknotes for context (verify against your specification).',
  },
  {
    subject: 'Combined / Triple Science',
    icon: '🔬',
    color: '#34d399',
    board: 'AQA / Edexcel / OCR',
    tips: [
      'Science has two elements: recall (knowledge) and application (using that knowledge in unfamiliar scenarios). Revision must cover both.',
      'Use active recall flashcards for definitions, equations, and key facts. The required practicals are heavily tested — know them in detail.',
      'For calculations: learn the equation, practice rearranging it, then do 10+ practice questions with different values until it\'s automatic.',
      'Past papers are essential. Science examiners reuse the same types of questions — you\'ll start recognising patterns.',
      'Required practical questions appear every year. Make a detailed set of notes on each one: method, variables, safety, analysis.',
    ],
    resources: 'Freesciencelessons (YouTube, free, covers entire AQA spec), your board\'s required practical documents.',
  },
  {
    subject: 'History',
    icon: '📜',
    color: '#f59e0b',
    board: 'AQA / Edexcel / OCR / WJEC',
    tips: [
      'History requires both knowledge (events, dates, key figures) and analytical skills (causation, significance, change and continuity). Revise both.',
      'Build a detailed timeline for each topic. Understanding chronological sequence is essential for analysis questions.',
      'For 12-mark+ questions: always write a plan before you start. A good structure (cause A → evidence → cause B → evidence → which was more important and why) scores far higher than unstructured knowledge dumps.',
      'Learn the specific mark scheme language: "developed explanation," "supported judgement," "sustained argument." These are not vague — they tell you exactly what the examiner wants.',
      'Source/interpretation questions reward specific analysis of the provenance (author, date, purpose) as much as the content.',
    ],
    resources: 'Your class notes, your exam board\'s past papers and mark schemes, Mr Allsop History (YouTube).',
  },
  {
    subject: 'Geography',
    icon: '🌍',
    color: '#06b6d4',
    board: 'AQA / Edexcel / OCR / WJEC',
    tips: [
      'Geography case studies are non-negotiable — you must know specific examples with specific facts (place names, dates, statistics) for the highest marks.',
      'Make a case study revision card for each required example: location, key facts, causes, effects, responses, evaluation.',
      'Fieldwork questions appear every year. Know your personal fieldwork (methods, data, evaluation) in detail.',
      'For 6-mark questions: always refer to specific place examples. "Some areas" or "many countries" will not access the top levels.',
      'Maps, graphs, and data are always included. Practice interpreting different types of geographical data (climate graphs, population pyramids, choropleth maps).',
    ],
    resources: 'Cool Geography (coolgeography.co.uk), your exam board\'s spec and past papers.',
  },
];

const PLAN_PHASES = [
  {
    phase: 'Phase 1',
    when: 'Sept – Jan (Year 11)',
    title: 'Light, consistent coverage',
    color: '#34d399',
    desc: 'This is not yet serious revision season — your teachers are still completing the syllabus. But 20–30 minutes per subject, 3–4 times per week, keeps content fresh and prevents the "I\'ve forgotten everything" panic in spring.',
    actions: ['Make a list of all your GCSE subjects and their key topics', 'Create an initial flashcard deck for each subject as topics are taught', 'Review your first mock results carefully — identify your 3 weakest subjects'],
  },
  {
    phase: 'Phase 2',
    when: 'Jan – Easter (Year 11)',
    title: 'Structured revision begins',
    color: '#6366f1',
    desc: 'After January mocks, you have real data on where you stand. Now is the time to build a proper revision timetable. Prioritise subjects where you are closest to a grade boundary — small improvements there make the biggest difference to your overall results.',
    actions: ['Build a weekly timetable with 2–3 sessions per subject', 'Start doing past papers (mark them carefully, don\'t skip this)', 'Use active recall methods: flashcards, practice questions, teaching topics aloud', 'Focus disproportionately on your weakest areas — it\'s where gains are largest'],
  },
  {
    phase: 'Phase 3',
    when: 'Easter holidays',
    title: 'Intensive past paper phase',
    color: '#a855f7',
    desc: 'Easter is the highest-leverage revision period — two weeks without school, before the real exams begin. If you use it well, you can achieve more in these two weeks than in the previous two months of term-time revision.',
    actions: ['4–5 focused hours per day — quality over quantity', 'One full past paper per subject per week, marked carefully', 'Repeat topics where you repeatedly lose marks', 'Sleep properly — consolidation happens during sleep, not at 2am'],
  },
  {
    phase: 'Phase 4',
    when: 'May – exam day',
    title: 'Final preparation and exam technique',
    color: '#ec4899',
    desc: 'By May your knowledge should be largely in place. The focus now shifts to exam technique, timing practice, and maintaining confidence. Avoid trying to learn large amounts of new content in the final week — consolidate what you know.',
    actions: ['One past paper per subject in the fortnight before each exam', 'Re-read your strongest flashcard decks the day before each exam', 'In the final 2–3 days: lighter revision, good sleep, normal meals', 'On the morning: brief review of key facts only — no new learning'],
  },
];

export default function GCSERevisionTipsPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdBreadcrumb) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdArticle) }} />
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
                <li><Link href="/exams/gcse" className="hover:text-white transition-colors">GCSE Grade Boundaries</Link></li>
                <li aria-hidden="true">›</li>
                <li><Link href="/exams/gcse/guide" className="hover:text-white transition-colors">GCSE Guide</Link></li>
                <li aria-hidden="true">›</li>
                <li className="text-slate-400" aria-current="page">Revision Tips</li>
              </ol>
            </nav>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-amber-500/15 flex items-center justify-center text-xl" aria-hidden="true">📖</div>
              <span className="text-xs font-mono text-amber-400/70 uppercase tracking-widest">GCSE · Revision Tips · 2026</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white tracking-tight mb-4 leading-tight">
              GCSE Revision Tips 2026: Study Methods That Actually Work
            </h1>
            <p className="text-lg text-slate-400 leading-relaxed max-w-2xl">
              Most students revise in ways that feel productive but produce weak results under exam conditions. This guide covers the methods that cognitive science says actually work — and how to apply them subject by subject.
            </p>
            <div className="flex items-center gap-4 mt-5 text-xs text-slate-500">
              <span>Updated May 2026</span>
              <span>·</span>
              <span>~15 min read</span>
            </div>
          </div>
        </header>

        <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">

          {/* What doesn't work */}
          <section aria-labelledby="doesnt-work-heading">
            <h2 id="doesnt-work-heading" className="text-2xl font-bold text-white mb-4">Why most revision doesn't work</h2>
            <div className="space-y-4 text-slate-400 leading-relaxed">
              <p>
                The most popular revision methods — re-reading notes, highlighting, copying out content, watching videos passively — feel productive because they create a sense of familiarity. But familiarity is not memory. Under exam conditions, recognition of something you've re-read doesn't translate to being able to retrieve and use it.
              </p>
              <p>
                The methods that actually work all share one property: they force your brain to <strong className="text-white">actively retrieve information</strong> rather than passively consume it. Every time you successfully retrieve a memory, that memory becomes stronger and more durable. Every time you re-read without retrieval, almost nothing is added to long-term memory.
              </p>
            </div>

            <div className="mt-6 grid sm:grid-cols-2 gap-4">
              <div className="bg-red-500/8 border border-red-500/20 rounded-xl p-5">
                <p className="text-sm font-bold text-red-400 mb-3">❌ Low-effectiveness methods</p>
                <ul className="space-y-2 text-sm text-slate-400">
                  {['Re-reading notes', 'Highlighting textbooks', 'Copying content into neat notes', 'Watching YouTube videos without pause', 'Making revision cards you never actually test yourself on'].map(m => (
                    <li key={m} className="flex items-start gap-2">
                      <span className="text-red-400/60 shrink-0 mt-0.5">✗</span>
                      {m}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-emerald-500/8 border border-emerald-500/20 rounded-xl p-5">
                <p className="text-sm font-bold text-emerald-400 mb-3">✓ High-effectiveness methods</p>
                <ul className="space-y-2 text-sm text-slate-400">
                  {['Active recall (testing yourself)', 'Spaced repetition (spreading sessions over time)', 'Past papers under timed conditions', 'Marking your own work against mark schemes', 'Teaching topics out loud to yourself or others'].map(m => (
                    <li key={m} className="flex items-start gap-2">
                      <span className="text-emerald-400 shrink-0 mt-0.5">✓</span>
                      {m}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>

          {/* The methods */}
          <section aria-labelledby="methods-heading">
            <h2 id="methods-heading" className="text-2xl font-bold text-white mb-2">The 6 best revision methods for GCSEs</h2>
            <p className="text-slate-400 text-sm mb-8">Ranked by effectiveness based on cognitive science research. Use the top three first.</p>

            <div className="space-y-8">
              {METHODS.map(method => (
                <div key={method.rank} className="bg-[#12141f] border border-white/8 rounded-2xl p-6">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="text-3xl shrink-0" aria-hidden="true">{method.icon}</div>
                    <div className="flex-1">
                      <div className="flex flex-wrap items-center gap-2 mb-1">
                        <span className="text-xs font-mono text-slate-500">{method.rank}</span>
                        <h3 className="text-lg font-bold text-white">{method.title}</h3>
                        <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full border"
                          style={{ backgroundColor: `${method.effectColor}15`, borderColor: `${method.effectColor}30`, color: method.effectColor }}>
                          {method.effectiveness}
                        </span>
                      </div>
                      <p className="text-sm text-slate-400 leading-relaxed">{method.desc}</p>
                    </div>
                  </div>

                  <div className="ml-0 sm:ml-16 space-y-4">
                    <div>
                      <p className="text-xs font-semibold text-white uppercase tracking-wider mb-2">How to do it</p>
                      <ul className="space-y-1.5">
                        {method.howTo.map(tip => (
                          <li key={tip} className="flex items-start gap-2 text-sm text-slate-400">
                            <span className="text-emerald-400 shrink-0 mt-0.5">→</span>
                            {tip}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="bg-amber-500/8 border border-amber-500/15 rounded-lg px-4 py-3">
                      <p className="text-xs text-amber-300/80"><strong className="text-amber-300">Watch out:</strong> {method.avoid}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Revision plan */}
          <section aria-labelledby="plan-heading">
            <h2 id="plan-heading" className="text-2xl font-bold text-white mb-2">Building a GCSE revision plan that works</h2>
            <p className="text-slate-400 text-sm mb-8 leading-relaxed">
              The biggest mistake students make is having no plan — revising whatever subject they feel like, as and when they feel like it. A revision plan doesn't have to be rigid. It just needs to ensure every subject gets consistent attention and that you're not leaving key topics to the week before the exam.
            </p>

            <div className="space-y-6">
              {PLAN_PHASES.map((phase, i) => (
                <div key={phase.phase} className="relative pl-0 sm:pl-14">
                  {/* Step number */}
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
                      <span className="text-xs font-mono text-slate-500">{phase.when}</span>
                    </div>
                    <h3 className="text-base font-bold text-white mb-2">{phase.title}</h3>
                    <p className="text-sm text-slate-400 leading-relaxed mb-4">{phase.desc}</p>
                    <ul className="space-y-1.5">
                      {phase.actions.map(action => (
                        <li key={action} className="flex items-start gap-2 text-sm text-slate-400">
                          <span className="shrink-0 mt-0.5" style={{ color: phase.color }}>→</span>
                          {action}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>

            {/* Timetable tips */}
            <div className="mt-8 bg-[#12141f] border border-white/8 rounded-xl p-5">
              <h3 className="text-sm font-bold text-white mb-3">Practical timetable rules</h3>
              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  { tip: 'Use 40–50 minute blocks', detail: 'Short enough to stay focused, long enough to make real progress. Take a proper 10-minute break between blocks.' },
                  { tip: 'Alternate subjects', detail: 'Don\'t do 3 hours of Maths in a row. Switch between subjects — it\'s more demanding but much more effective.' },
                  { tip: 'Protect sleep', detail: 'Revision after midnight is mostly wasted. Memory consolidation happens during sleep. Going to bed at 11pm and sleeping 8 hours will outperform a 2am session every time.' },
                  { tip: 'Revision off screens', detail: 'Written flashcards and paper past papers tend to produce better focus than screen-based equivalents. Phones off (not just on silent) during sessions.' },
                ].map(item => (
                  <div key={item.tip}>
                    <p className="text-xs font-semibold text-white mb-0.5">{item.tip}</p>
                    <p className="text-xs text-slate-500 leading-relaxed">{item.detail}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Subject tips */}
          <section aria-labelledby="subjects-heading">
            <h2 id="subjects-heading" className="text-2xl font-bold text-white mb-2">Subject-by-subject revision advice</h2>
            <p className="text-slate-400 text-sm mb-8">Each GCSE subject rewards a slightly different approach. Here is the most important advice for the most-studied subjects.</p>

            <div className="space-y-6">
              {SUBJECT_TIPS.map(subj => (
                <div key={subj.subject} className="bg-[#12141f] border border-white/8 rounded-2xl p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-2xl" aria-hidden="true">{subj.icon}</span>
                    <div>
                      <h3 className="text-lg font-bold" style={{ color: subj.color }}>{subj.subject}</h3>
                      <p className="text-[10px] text-slate-500 font-mono">{subj.board}</p>
                    </div>
                  </div>
                  <ul className="space-y-2 mb-4">
                    {subj.tips.map(tip => (
                      <li key={tip} className="flex items-start gap-2 text-sm text-slate-400 leading-relaxed">
                        <span className="shrink-0 mt-0.5" style={{ color: subj.color }}>→</span>
                        {tip}
                      </li>
                    ))}
                  </ul>
                  <div className="border-t border-white/8 pt-3">
                    <p className="text-xs text-slate-500"><strong className="text-slate-400">Resources: </strong>{subj.resources}</p>
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
                {
                  q: 'What is the best revision method for GCSEs?',
                  a: 'Active recall and spaced repetition are the most effective methods supported by cognitive science. In practice: flashcards you test yourself on regularly, past papers done under timed conditions and marked carefully, and teaching topics aloud. Avoid re-reading notes — it feels productive but produces little learning.',
                },
                {
                  q: 'When should I start revising for GCSEs?',
                  a: 'Light, consistent revision from September or October of Year 11 is better than heavy cramming from April. After January mocks, begin structured daily revision. By Easter, aim for 4–5 focused hours per day with a clear timetable.',
                },
                {
                  q: 'How many hours a day should I revise?',
                  a: 'During term time: 1.5–2.5 focused hours per evening. During Easter holidays: 4–5 hours per day is sustainable. Quality matters more than quantity — 90 minutes of active recall beats 3 hours of passive re-reading. Take proper breaks between sessions.',
                },
                {
                  q: 'Are past papers the best way to revise?',
                  a: 'Past papers are the single most effective GCSE revision tool — but only when done properly. Sit the paper under real time pressure, mark it against the mark scheme, identify every mark you lost and why, then revise those topics the same day. The marking is where most of the learning happens.',
                },
                {
                  q: 'What revision methods should I avoid?',
                  a: 'Re-reading notes, highlighting, and copying content are the least effective methods. They create an illusion of familiarity without building real recall ability. Replace them with active retrieval: flashcards, practice questions, and past papers.',
                },
                {
                  q: 'How do I revise if I\'m behind?',
                  a: 'Prioritise ruthlessly. Identify which subjects are closest to a grade boundary for you — that\'s where small improvements make the biggest difference. Focus on high-frequency exam topics first. Use past papers to identify exactly what the examiner tests, and target your revision accordingly. Don\'t try to cover everything.',
                },
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

          {/* Grade boundary CTA */}
          <div className="bg-[#12141f] border border-emerald-500/20 rounded-2xl p-7 flex gap-5 items-start">
            <div className="text-2xl shrink-0" aria-hidden="true">🧮</div>
            <div>
              <h3 className="text-base font-semibold text-white mb-1">Check where your mock mark falls against real boundaries</h3>
              <p className="text-sm text-slate-400 leading-relaxed mb-3">
                Enter your raw mock score into the GradesNova calculator to see which grade it corresponds to under official 2025 boundaries — and how many marks you are from the next grade up.
              </p>
              <Link href="/exams/gcse"
                className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white px-5 py-2.5 rounded-xl font-semibold text-sm transition-all hover:shadow-lg hover:-translate-y-0.5">
                GCSE Grade Boundary Calculator →
              </Link>
            </div>
          </div>

          {/* Related */}
          <section aria-labelledby="related-heading" className="border-t border-white/8 pt-10">
            <h2 id="related-heading" className="text-sm font-semibold text-slate-500 uppercase tracking-wider mb-4">More from the GCSE hub</h2>
            <div className="grid sm:grid-cols-2 gap-3">
              {[
                { title: 'Complete GCSE Guide 2026', href: '/exams/gcse/guide', color: '#34d399' },
                { title: 'How Grade Boundaries Work', href: '/exams/gcse/grade-boundaries-explained', color: '#6366f1' },
                { title: 'GCSE Results Day 2026', href: '/exams/gcse/results-day', color: '#ec4899' },
                { title: 'GCSE Grade Boundary Calculator', href: '/exams/gcse', color: '#f59e0b' },
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
