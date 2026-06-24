// app/exams/act/scores/page.tsx
// ACT SCORES — Deep Dive Content Page
// Targets: "when do ACT scores come out", "ACT score release date 2026",
//          "how to read ACT score report", "ACT hand scoring rescore",
//          "what is a good ACT score", "ACT superscore explained"

import type { Metadata } from 'next';
import Link from 'next/link';
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';

export const metadata: Metadata = {
  title: 'ACT Scores 2026 | When They Come Out, How to Read Them & What To Do | GradesNova',
  description:
    'Everything about ACT scores in 2026. When scores are released (2–4 weeks after test day), how to read your score report, what composite scores mean for college admissions, how superscoring works, and how to request a hand rescore.',
  alternates: { canonical: 'https://gradesnova.com/exams/act/scores' },
  openGraph: {
    title: 'ACT Scores 2026 | When They Come Out, How to Read Them & What To Do',
    description:
      'ACT score release dates, score report breakdown, composite score benchmarks, superscoring, and what to do if you think your score is wrong.',
    url: 'https://gradesnova.com/exams/act/scores',
    type: 'article',
    siteName: 'GradesNova',
  },
  robots: { index: true, follow: true },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'ACT Scores 2026: When They Come Out, How to Read Them & What To Do Next',
  description:
    'Complete guide to ACT score release dates, reading your score report, composite benchmarks, superscoring, and requesting a rescore.',
  url: 'https://gradesnova.com/exams/act/scores',
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
        text: 'Over 97% of ACT multiple-choice scores are released within 2–4 weeks of the test date. The earliest you can receive scores is 10 days after your test. Scores are posted to your MyACT account, typically around midnight Central Time on the release date. Writing scores, if applicable, are released approximately two weeks after multiple-choice scores.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is a good ACT score in 2026?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The national average composite score is approximately 19–20. A score of 24 is around the 74th percentile and competitive for many universities. A 30 is around the 93rd percentile and competitive at selective universities. A 34+ is around the 99th percentile and competitive at Ivy League and top-20 schools. The right target depends on your college list — look at the middle 50% ACT range for each school you are applying to.',
      },
    },
    {
      '@type': 'Question',
      name: 'How is the ACT composite score calculated in 2026?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'From September 2025, the Enhanced ACT composite is the average of your English, Math, and Reading section scores only, rounded to the nearest whole number. Science is now optional and reported separately. It contributes to a STEM score (average of Math and Science) but no longer affects the composite.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is ACT superscoring and how does it work?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'ACT superscoring takes your highest section score from each test date across multiple attempts and averages them to produce a single superscore composite. Many colleges accept superscores, which means each retake gives you a chance to raise individual sections without risking your best overall composite. Science is not included in the superscore calculation from April 2025 onwards.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can I request a rescore of my ACT?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. ACT offers a Score Verification Service (hand scoring) for the multiple-choice sections for a fee of $50. The fee is refunded if a scoring error is discovered. You must request a rescore within 3 months of receiving your scores. For the Writing section, ACT will verify that proper procedures were followed and rescore if errors are found. Rescoring your multiple-choice answers will not result in a lower score.',
      },
    },
  ],
};

const SCORE_RELEASE_DATES = [
  { testDate: 'Feb 8, 2026',  mcRelease: 'Feb 18–Mar 8, 2026',  writingRelease: '~Mar 4–22, 2026',   color: '#34d399' },
  { testDate: 'Apr 11, 2026', mcRelease: 'Apr 21–May 10, 2026', writingRelease: '~May 7–24, 2026',   color: '#6366f1' },
  { testDate: 'Jun 13, 2026', mcRelease: 'Jun 23–Jul 12, 2026', writingRelease: '~Jul 9–26, 2026',   color: '#a855f7' },
  { testDate: 'Jul 11, 2026', mcRelease: 'Jul 21–Aug 9, 2026',  writingRelease: '~Aug 6–23, 2026',   color: '#f59e0b' },
  { testDate: 'Sep 12, 2026', mcRelease: 'Sep 22–Oct 11, 2026', writingRelease: '~Oct 8–25, 2026',   color: '#ec4899' },
];

const SCORE_BANDS = [
  {
    range: '34–36',
    label: 'Exceptional',
    percentile: '~99th',
    color: '#34d399',
    desc: 'Top 1% nationally. Competitive at every university in the US, including all Ivy League, MIT, Stanford, and Caltech.',
    examples: 'Harvard, MIT, Yale, Princeton, Stanford',
  },
  {
    range: '31–33',
    label: 'Excellent',
    percentile: '~97–99th',
    color: '#6366f1',
    desc: 'Top 1–3% nationally. Strong at all Ivy League schools; comfortably above median at most top-20 universities.',
    examples: 'Columbia, Penn, Brown, Dartmouth, Duke',
  },
  {
    range: '27–30',
    label: 'Very competitive',
    percentile: '~86–93rd',
    color: '#a855f7',
    desc: 'Top 7–14% nationally. Competitive at selective and top public universities. Qualifies for merit scholarships at many schools.',
    examples: 'Univ. of Michigan, UVA, Georgetown, Boston College',
  },
  {
    range: '24–26',
    label: 'Above average',
    percentile: '~74–80th',
    color: '#f59e0b',
    desc: 'Top 20–26% nationally. Competitive at many respected state universities and private colleges.',
    examples: 'Univ. of Arizona, Iowa State, Oregon State',
  },
  {
    range: '20–23',
    label: 'Average',
    percentile: '~50–63rd',
    color: '#f97316',
    desc: 'Around the national average. Meets baseline requirements at most four-year colleges.',
    examples: 'Many community colleges and open-enrollment universities',
  },
  {
    range: '1–19',
    label: 'Below average',
    percentile: 'Below 50th',
    color: '#6b7280',
    desc: 'Below national average. Still eligible for open-enrollment colleges. Consider retesting with targeted preparation.',
    examples: 'Open-enrollment and community colleges',
  },
];

const SCORE_REPORT_SECTIONS = [
  {
    n: '1',
    title: 'Composite score',
    color: '#34d399',
    body: 'Your headline number — the average of your English, Math, and Reading scaled scores (1–36), rounded to the nearest whole number. From September 2025, Science is no longer included. This is the number colleges see first on your application.',
  },
  {
    n: '2',
    title: 'Section scores',
    color: '#6366f1',
    body: 'Four individual scores — English (75 questions), Math (60 questions), Reading (40 questions), and Science (40 questions, optional from Sep 2025) — each on a 1–36 scale. Colleges may examine section scores for specific programs (e.g. high Math for engineering; high English for humanities).',
  },
  {
    n: '3',
    title: 'STEM score',
    color: '#a855f7',
    body: 'Available if you took the optional Science section. The STEM score is the average of your Math and Science scaled scores (1–36). Highly relevant for students applying to engineering, medicine, computer science, or physical sciences programs.',
  },
  {
    n: '4',
    title: 'ELA score',
    color: '#f59e0b',
    body: 'Available if you took the optional Writing section. The ELA score is the average of your English, Reading, and Writing scores (1–36). Does not affect your composite. Some colleges use it as a supplementary measure of writing ability.',
  },
  {
    n: '5',
    title: 'Writing score',
    color: '#ec4899',
    body: 'Optional. Scored on a 2–12 scale by two trained readers. Does not affect your composite or ELA score unless a third reader is needed. A small number of colleges still require or recommend it — check each school\'s specific requirements.',
  },
  {
    n: '6',
    title: 'National percentile ranks',
    color: '#34d399',
    body: 'Shown for each section and the composite. Your percentile rank tells you what percentage of test-takers nationally scored at or below your score. A composite of 30 is approximately the 93rd percentile — meaning you scored higher than 93% of test-takers.',
  },
  {
    n: '7',
    title: 'College readiness benchmarks',
    color: '#6366f1',
    body: 'ACT publishes official benchmarks by subject: English 18, Math 22, Reading 22, Science 23. Scoring at or above a benchmark indicates a 50% probability of earning a B or better in a corresponding first-year college course. These are reference points, not admissions thresholds.',
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
    title: 'What Colleges Can I Get Into?',
    desc: 'Every ACT score 1–36 explained in detail, with example schools at each level.',
    href: '/exams/act/colleges',
    color: '#a855f7',
    icon: '🎓',
    badge: 'New',
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

export default function ACTScoresPage() {
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
                <li className="text-slate-400" aria-current="page">ACT Scores</li>
              </ol>
            </nav>

            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-pink-500/15 flex items-center justify-center text-xl" aria-hidden="true">📊</div>
              <span className="text-xs font-mono text-pink-400/70 uppercase tracking-widest">ACT · Scores · 2026</span>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold text-white tracking-tight mb-4 leading-tight">
              ACT Scores 2026: When They Come Out, How to Read Them & What To Do Next
            </h1>
            <p className="text-lg text-slate-400 leading-relaxed max-w-2xl">
              You sat the test. Now you wait. This guide covers every score release date for 2025–2026, how to read your score report, what your composite means for college applications, how superscoring works, and what to do if something looks wrong.
            </p>

            <div className="flex items-center gap-4 mt-5 text-xs text-slate-500">
              <span>Updated May 2026</span>
              <span>·</span>
              <span>~10 min read</span>
            </div>
          </div>
        </header>

        <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-14">

          {/* ── KEY FACTS STRIP ── */}
          <section aria-labelledby="key-facts-heading">
            <h2 id="key-facts-heading" className="sr-only">Key facts about ACT scores</h2>
            <div className="grid sm:grid-cols-3 gap-4">
              {[
                { icon: '⏱️', label: 'Typical score release', value: '2–4 weeks', sub: 'After your test date', color: '#34d399' },
                { icon: '🎯', label: 'Score scale', value: '1–36', sub: 'Composite: English + Math + Reading', color: '#6366f1' },
                { icon: '📈', label: 'National average', value: '~19–20', sub: 'Based on 2025 cohort data', color: '#ec4899' },
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

          {/* ── WHEN DO SCORES COME OUT ── */}
          <section aria-labelledby="release-heading">
            <h2 id="release-heading" className="text-2xl font-bold text-white mb-4">When do ACT scores come out in 2026?</h2>
            <div className="space-y-4 text-slate-400 leading-relaxed">
              <p>
                Over <strong className="text-white">97% of ACT multiple-choice scores</strong> are released within 2–4 weeks of the test date. The earliest scores can appear is 10 days after your test. Scores are posted to your <strong className="text-white">MyACT account</strong> at approximately midnight Central Time on the release date — which means East Coast students can check from 1:00am, West Coast from 10:00pm the previous evening.
              </p>
              <p>
                If you took the optional Writing section, those scores arrive approximately <strong className="text-white">two weeks after your multiple-choice scores</strong> — your complete score report (including ELA) is only available once Writing scores are processed.
              </p>
            </div>

            <div className="mt-6 bg-indigo-500/10 border border-indigo-500/20 rounded-xl p-5 flex gap-4 items-start">
              <span className="text-xl shrink-0" aria-hidden="true">💡</span>
              <div>
                <p className="text-sm font-semibold text-white mb-1">Scores can take up to 8 weeks</p>
                <p className="text-sm text-slate-400 leading-relaxed">
                  On certain test dates, ACT conducts equating activities to ensure scores represent the same ability level across different test forms. This can delay release beyond the typical 2–4 week window. If your scores haven't appeared after 4 weeks, check your MyACT account for a status update before contacting ACT directly.
                </p>
              </div>
            </div>

            {/* Score release table */}
            <div className="mt-8">
              <h3 className="text-base font-semibold text-white mb-3">2025–2026 ACT score release schedule</h3>
              <div className="overflow-x-auto rounded-xl border border-white/8">
                <table className="w-full text-sm min-w-[520px]" aria-label="ACT 2025-2026 test dates and score release windows">
                  <thead>
                    <tr className="bg-white/4 border-b border-white/8">
                      <th scope="col" className="text-left px-4 py-3 text-xs font-semibold text-slate-400 uppercase">Test date</th>
                      <th scope="col" className="text-left px-4 py-3 text-xs font-semibold text-slate-400 uppercase">MC scores released</th>
                      <th scope="col" className="text-left px-4 py-3 text-xs font-semibold text-slate-400 uppercase">Writing scores</th>
                    </tr>
                  </thead>
                  <tbody>
                    {SCORE_RELEASE_DATES.map((row, i) => (
                      <tr key={row.testDate} className={`border-b border-white/5 last:border-0 ${i % 2 === 0 ? '' : 'bg-white/2'}`}>
                        <td className="px-4 py-3 font-mono font-semibold text-xs" style={{ color: row.color }}>{row.testDate}</td>
                        <td className="px-4 py-3 text-xs text-slate-300">{row.mcRelease}</td>
                        <td className="px-4 py-3 text-xs text-slate-500">{row.writingRelease}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="text-xs text-slate-600 mt-2">
                Dates represent the expected release window. Most scores arrive at the earlier end. Writing dates are approximate. Source: act.org and test-ninjas.com.
              </p>
            </div>
          </section>

          {/* ── HOW SCORING WORKS ── */}
          <section aria-labelledby="scoring-heading">
            <h2 id="scoring-heading" className="text-2xl font-bold text-white mb-4">How ACT scoring works in 2026</h2>
            <div className="space-y-4 text-slate-400 leading-relaxed">
              <p>
                The ACT uses a two-step scoring process. First, your <strong className="text-white">raw score</strong> — the number of questions you answered correctly — is calculated for each section. There is no penalty for wrong answers, so you should never leave a question blank. Then, raw scores are converted to <strong className="text-white">scaled scores</strong> (1–36) using a conversion table specific to that test form.
              </p>
              <p>
                The <strong className="text-white">Enhanced ACT</strong> (from September 2025) changed the composite calculation. Your composite is now the average of your English, Math, and Reading scaled scores only, rounded to the nearest whole number. Science is optional — reported separately and in a STEM score — but no longer part of the composite.
              </p>
            </div>

            <div className="mt-6 bg-[#12141f] border border-white/8 rounded-xl p-5">
              <p className="text-sm font-semibold text-white mb-3">Composite calculation — worked example</p>
              <div className="grid grid-cols-3 gap-3 mb-3">
                {[
                  { section: 'English', score: 30, color: '#34d399' },
                  { section: 'Math', score: 27, color: '#6366f1' },
                  { section: 'Reading', score: 29, color: '#a855f7' },
                ].map(s => (
                  <div key={s.section} className="bg-white/5 rounded-lg p-3 text-center">
                    <p className="text-[10px] text-slate-500 uppercase tracking-wider mb-1">{s.section}</p>
                    <p className="text-2xl font-bold font-mono" style={{ color: s.color }}>{s.score}</p>
                  </div>
                ))}
              </div>
              <p className="text-xs text-slate-400">
                Average: (30 + 27 + 29) ÷ 3 = 28.67 → rounded to <strong className="text-white">composite 29</strong>. Science score (e.g. 28) is reported separately.
              </p>
            </div>
          </section>

          {/* ── HOW TO READ YOUR SCORE REPORT ── */}
          <section aria-labelledby="report-heading">
            <h2 id="report-heading" className="text-2xl font-bold text-white mb-4">How to read your ACT score report</h2>
            <div className="space-y-4 text-slate-400 leading-relaxed">
              <p>
                Your score report in MyACT contains more than just the composite. Here is what every component means and what to pay attention to.
              </p>
            </div>
            <div className="mt-5 space-y-3">
              {SCORE_REPORT_SECTIONS.map(item => (
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

          {/* ── WHAT IS A GOOD ACT SCORE ── */}
          <section aria-labelledby="benchmarks-heading">
            <h2 id="benchmarks-heading" className="text-2xl font-bold text-white mb-2">What is a good ACT score?</h2>
            <p className="text-slate-400 text-sm mb-6 leading-relaxed">
              There is no single universal "good" ACT score — what matters is how your composite compares to the <strong className="text-white">middle 50% range</strong> of admitted students at your target schools. Here is how scores map to college tiers nationally.
            </p>

            <div className="overflow-x-auto rounded-xl border border-white/8">
              <table className="w-full text-sm min-w-[600px]" aria-label="ACT composite score bands and college tiers">
                <thead>
                  <tr className="bg-white/4 border-b border-white/8">
                    <th scope="col" className="text-left px-4 py-3 text-xs font-semibold text-slate-400 uppercase">Composite</th>
                    <th scope="col" className="text-left px-4 py-3 text-xs font-semibold text-slate-400 uppercase">Band</th>
                    <th scope="col" className="text-left px-4 py-3 text-xs font-semibold text-slate-400 uppercase">Percentile</th>
                    <th scope="col" className="text-left px-4 py-3 text-xs font-semibold text-slate-400 uppercase">College context</th>
                  </tr>
                </thead>
                <tbody>
                  {SCORE_BANDS.map((band, i) => (
                    <tr key={band.range} className={`border-b border-white/5 last:border-0 ${i % 2 === 0 ? '' : 'bg-white/2'}`}>
                      <td className="px-4 py-3">
                        <span className="text-xl font-bold font-mono" style={{ color: band.color }}>{band.range}</span>
                      </td>
                      <td className="px-4 py-3">
                        <span className="text-xs font-semibold px-2 py-0.5 rounded-full border"
                          style={{ backgroundColor: `${band.color}15`, borderColor: `${band.color}30`, color: band.color }}>
                          {band.label}
                        </span>
                      </td>
                      <td className="px-4 py-3 text-slate-400 text-xs font-mono">{band.percentile}</td>
                      <td className="px-4 py-3 text-slate-400 text-xs leading-relaxed">{band.examples}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-xs text-slate-600 mt-3">
              Percentiles based on 2025 cohort data (~1.4 million test-takers). College examples indicate typical mid-50% admitted student ranges. Source: ACT National Ranks, individual college Common Data Sets.
            </p>

            <div className="mt-6 bg-pink-500/10 border border-pink-500/20 rounded-xl p-5 flex gap-4 items-start">
              <span className="text-xl shrink-0" aria-hidden="true">🎯</span>
              <div>
                <p className="text-sm font-semibold text-white mb-1">How to set your personal target score</p>
                <p className="text-sm text-slate-400 leading-relaxed">
                  Look up the middle 50% ACT range on the Common Data Set for each school you are applying to. Aim to be at or above the 75th percentile (the top of that range) for your target schools. For reach schools, being at the 50th percentile is acceptable if your GPA, essays, and extracurriculars are strong.
                </p>
              </div>
            </div>
          </section>

          {/* ── SUPERSCORING ── */}
          <section aria-labelledby="superscore-heading">
            <h2 id="superscore-heading" className="text-2xl font-bold text-white mb-4">How ACT superscoring works</h2>
            <div className="space-y-4 text-slate-400 leading-relaxed">
              <p>
                ACT superscoring takes your <strong className="text-white">highest section score from each test date</strong> across multiple attempts and averages them into a single superscore composite. This means a stronger performance on Math in April can combine with a stronger English from September, even if neither single-sitting composite was your best overall.
              </p>
              <p>
                From April 2025, the ACT superscore is calculated from English, Math, and Reading only — Science is excluded from the superscore calculation but is still reported as part of your STEM score.
              </p>
              <p>
                <strong className="text-white">Many — but not all — colleges accept superscores.</strong> Check each school's admissions page directly. When you submit a superscore to a college, ACT also sends your highest full composite score alongside it.
              </p>
            </div>

            <div className="mt-6 bg-[#12141f] border border-white/8 rounded-xl p-5">
              <p className="text-sm font-semibold text-white mb-3">Superscore — worked example</p>
              <div className="overflow-x-auto">
                <table className="w-full text-xs min-w-[400px]" aria-label="ACT superscore worked example">
                  <thead>
                    <tr className="border-b border-white/8">
                      <th scope="col" className="text-left py-2 text-slate-500 uppercase tracking-wider">Attempt</th>
                      <th scope="col" className="text-center py-2 text-emerald-400">English</th>
                      <th scope="col" className="text-center py-2 text-indigo-400">Math</th>
                      <th scope="col" className="text-center py-2 text-purple-400">Reading</th>
                      <th scope="col" className="text-center py-2 text-slate-500">Composite</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-white/5">
                      <td className="py-2 text-slate-400">September 2025</td>
                      <td className="text-center py-2 font-mono font-bold text-emerald-400">31</td>
                      <td className="text-center py-2 font-mono text-slate-400">26</td>
                      <td className="text-center py-2 font-mono text-slate-400">27</td>
                      <td className="text-center py-2 font-mono text-slate-500">28</td>
                    </tr>
                    <tr className="border-b border-white/5">
                      <td className="py-2 text-slate-400">February 2026</td>
                      <td className="text-center py-2 font-mono text-slate-400">28</td>
                      <td className="text-center py-2 font-mono font-bold text-indigo-400">30</td>
                      <td className="text-center py-2 font-mono font-bold text-purple-400">31</td>
                      <td className="text-center py-2 font-mono text-slate-500">30</td>
                    </tr>
                    <tr className="bg-emerald-500/5">
                      <td className="py-2 font-semibold text-white">Superscore</td>
                      <td className="text-center py-2 font-mono font-bold text-emerald-400">31</td>
                      <td className="text-center py-2 font-mono font-bold text-indigo-400">30</td>
                      <td className="text-center py-2 font-mono font-bold text-purple-400">31</td>
                      <td className="text-center py-2 font-mono font-bold text-emerald-400">31</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="text-xs text-slate-500 mt-3">
                The superscore composite (31) is higher than either single-sitting composite (28 and 30), because it uses the best section from each attempt.
              </p>
            </div>
          </section>

          {/* ── IF SCORES LOOK WRONG ── */}
          <section aria-labelledby="rescore-heading">
            <h2 id="rescore-heading" className="text-2xl font-bold text-white mb-4">What to do if you think your score is wrong</h2>
            <div className="space-y-4 text-slate-400 leading-relaxed">
              <p>
                ACT uses computerised scoring, which is highly accurate — but errors occasionally occur. If a section score seems significantly inconsistent with your practice test results or your other section scores, you can request verification.
              </p>
            </div>

            <div className="mt-5 space-y-4">
              {[
                {
                  type: 'Score Verification (hand scoring)',
                  cost: '$50 per section',
                  color: '#34d399',
                  what: 'ACT manually verifies that your answer sheet was correctly scanned and that marks were accurately totalled. For paper tests, this involves a physical re-check. For online tests, ACT reviews the digital record.',
                  when: 'If you believe a section score is significantly lower than expected and inconsistent with other evidence (e.g. practice test history). You have 3 months from receiving scores to request.',
                  refund: 'Fee is refunded if a scoring error is discovered and your score changes.',
                },
                {
                  type: 'Writing Score Verification',
                  cost: 'Fee applies',
                  color: '#6366f1',
                  what: 'ACT verifies that your essay was scored by two independent qualified readers, that a third reader was used if their scores differed, and that the essay was properly captured and displayed. If errors are found, the essay is rescored. Results arrive by letter approximately 3–5 weeks after the request.',
                  when: 'If your Writing score seems inconsistent with your performance on the English section or your practice essays.',
                  refund: 'ACT will inform you of the outcome in writing.',
                },
              ].map(r => (
                <div key={r.type} className="bg-[#12141f] border border-white/8 rounded-xl p-5">
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="text-sm font-bold text-white">{r.type}</h3>
                    <span className="text-xs font-mono font-semibold px-2 py-0.5 rounded-full border"
                      style={{ backgroundColor: `${r.color}15`, borderColor: `${r.color}30`, color: r.color }}>
                      {r.cost}
                    </span>
                  </div>
                  <p className="text-xs text-slate-400 leading-relaxed mb-1.5"><strong className="text-slate-300">What it involves:</strong> {r.what}</p>
                  <p className="text-xs text-slate-400 leading-relaxed mb-1.5"><strong className="text-slate-300">When to use it:</strong> {r.when}</p>
                  <p className="text-xs text-slate-500 leading-relaxed"><strong className="text-slate-400">Refund policy:</strong> {r.refund}</p>
                </div>
              ))}
            </div>

            <div className="mt-5 bg-amber-500/10 border border-amber-500/20 rounded-xl px-5 py-4 flex gap-3 items-start">
              <span className="text-lg shrink-0" aria-hidden="true">⚠️</span>
              <p className="text-sm text-slate-300">
                <strong className="text-amber-300">Important:</strong> Score verification confirms ACT followed its procedures correctly — it is not a re-marking of your answers against the mark scheme. Unlike the GCSE system, ACT does not re-read or re-judge your responses for correctness. If you believe an answer was marked wrong, use the My Answer Key service (available on select test dates: October, April, June) to review your actual answers against the correct ones before deciding whether to retest.
              </p>
            </div>
          </section>

          {/* ── SENDING SCORES TO COLLEGES ── */}
          <section aria-labelledby="sending-heading">
            <h2 id="sending-heading" className="text-2xl font-bold text-white mb-4">Sending your ACT scores to colleges</h2>
            <div className="space-y-4 text-slate-400 leading-relaxed">
              <p>
                When you register for the ACT, you can designate up to four colleges to receive your scores for free. Additional score reports cost <strong className="text-white">$20 per recipient</strong>. You choose whether to send scores from a specific test date or your superscore.
              </p>
            </div>
            <div className="mt-5 grid sm:grid-cols-2 gap-4">
              {[
                { icon: '📤', title: 'Test-date score report', body: 'Sends all scores from a single test date — composite, all section scores, and Writing if taken. Use when your best single sitting is stronger than your superscore would be.', color: '#34d399' },
                { icon: '⭐', title: 'Superscore report', body: 'Sends your superscore alongside your highest full composite. ACT automatically sends both when you request a superscore report. Most colleges that accept superscores prefer this format.', color: '#6366f1' },
                { icon: '🔒', title: 'Score choice', body: 'You choose which scores to send — ACT does not automatically send all test dates to colleges. However, some schools (particularly Ivy League) require all scores. Check each school\'s policy before sending.', color: '#a855f7' },
                { icon: '📅', title: 'Deadline awareness', body: 'Most college application deadlines are November 1 (Early Decision/Action) or January 1 (Regular Decision). Allow at least 3–5 business days for score delivery, and plan your final test date accordingly.', color: '#f59e0b' },
              ].map(tip => (
                <div key={tip.title} className="bg-[#12141f] border border-white/8 rounded-xl p-4">
                  <span className="text-2xl block mb-2" aria-hidden="true">{tip.icon}</span>
                  <h3 className="text-sm font-semibold text-white mb-1.5">{tip.title}</h3>
                  <p className="text-xs text-slate-400 leading-relaxed">{tip.body}</p>
                </div>
              ))}
            </div>
          </section>

          {/* ── CALCULATOR CTA ── */}
          <div className="bg-[#12141f] border border-emerald-500/20 rounded-2xl p-7 flex gap-5 items-start">
            <div className="text-2xl shrink-0" aria-hidden="true">🧮</div>
            <div>
              <h3 className="text-base font-semibold text-white mb-1">Calculate your ACT composite instantly</h3>
              <p className="text-sm text-slate-400 leading-relaxed mb-3">
                Enter your raw section scores into the GradesNova ACT calculator to instantly see your estimated composite, section percentiles, and how you compare to the middle 50% range at your target schools.
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
                { q: 'When do ACT scores come out?', a: 'Over 97% of multiple-choice scores are available within 2–4 weeks after your test date. The earliest possible release is 10 days after the test. Scores appear in your MyACT account at approximately midnight Central Time on the release date. Writing scores follow about two weeks after multiple-choice scores.' },
                { q: 'How is the ACT composite score calculated in 2026?', a: 'From September 2025, the Enhanced ACT composite is the average of your English, Math, and Reading section scores only, rounded to the nearest whole number. Science is now optional and no longer included in the composite — it contributes to a separate STEM score instead.' },
                { q: 'Can I retake specific sections of the ACT?', a: 'No. If you retake the ACT, you must retake the entire test. However, superscoring means colleges that accept superscores will use your best section score from each attempt — so retaking to improve one weak section is still worth doing if you are confident in your other sections.' },
                { q: 'What is the ACT My Answer Key service?', a: 'My Answer Key (formerly Test Information Release) lets you purchase a copy of your actual test questions, your answers, and the correct answers for select test dates — October, April, and June. It costs a fee per section and is available for up to 6 months after the test date. It is invaluable for identifying exactly where you lost marks and targeting revision for a retake.' },
                { q: 'Does taking the Writing section affect my composite?', a: 'No. The Writing section score is reported separately and does not affect your composite score. It contributes to the ELA score (average of English, Reading, and Writing). Most colleges do not require the Writing section, but a small number still prefer or require it — check each school\'s requirements before your test date.' },
                { q: 'How many times can I take the ACT?', a: 'You can take the ACT up to 12 times. Most students take it 2–3 times. Research shows meaningful score improvement is most likely on the second and third attempts with focused preparation between sittings. Beyond three attempts, gains are statistically less predictable.' },
                { q: 'What does my ACT score mean for merit scholarships?', a: 'Many universities offer merit-based scholarships tied to ACT score thresholds. These vary significantly by institution — a 28 might unlock a $5,000/year award at one school and nothing at another. Check each university\'s merit aid page directly. National Merit Scholarship eligibility is based on PSAT scores, not ACT.' },
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
                { title: 'ACT Revision Tips & Strategy 2026', href: '/exams/act/revision-tips', color: '#f59e0b' },
                { title: 'Complete ACT Guide 2026', href: '/exams/act/guide', color: '#6366f1' },
                { title: 'ACT Test Dates & Registration 2026', href: '/exams/act/test-dates', color: '#34d399' },
                { title: 'ACT vs SAT: Which Should You Take?', href: '/exams/act/act-vs-sat', color: '#ec4899' },
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
