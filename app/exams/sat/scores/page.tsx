// app/exams/sat/scores/page.tsx
// SAT SCORE RELEASE GUIDE 2026
// Targets: "when do SAT scores come out 2026", "how to read SAT score report",
//          "SAT score release date", "SAT score percentile explained",
//          "what to do after SAT scores", "SAT score report 2026"

import type { Metadata } from 'next';
import Link from 'next/link';
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';

export const metadata: Metadata = {
  title: 'SAT Score Release Guide 2026 | When Scores Come Out & What They Mean | GradesNova',
  description:
    'Complete guide to SAT scores in 2026. When Digital SAT scores are released, how to read your score report, the difference between User and Nationally Representative percentiles, what your score means for college applications, and what to do next.',
  alternates: { canonical: 'https://gradesnova.com/exams/sat/scores' },
  openGraph: {
    title: 'SAT Score Release Guide 2026 | When Scores Come Out & What They Mean',
    description: 'When Digital SAT scores are released in 2026, how to read your score report and percentiles, and what to do with your results.',
    url: 'https://gradesnova.com/exams/sat/scores',
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
    { '@type': 'ListItem', position: 3, name: 'SAT Score Release Guide', item: 'https://gradesnova.com/exams/sat/scores' },
  ],
};

const jsonLdArticle = {
  '@context': 'https://schema.org', '@type': 'Article',
  headline: 'SAT Score Release Guide 2026: When Scores Come Out, How to Read Your Report, and What to Do Next',
  description: 'Complete guide to Digital SAT score release dates in 2026, how to interpret your score report and percentiles, and next steps after receiving your SAT scores.',
  url: 'https://gradesnova.com/exams/sat/scores',
  author: { '@type': 'Organization', name: 'GradesNova' },
  publisher: { '@type': 'Organization', name: 'GradesNova', url: 'https://gradesnova.com' },
  dateModified: '2026-05-31',
};

const jsonLdFAQ = {
  '@context': 'https://schema.org', '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question', name: 'When do SAT scores come out in 2026?',
      acceptedAnswer: { '@type': 'Answer', text: 'Digital SAT scores are released approximately 2–5 business days after your test date in 2026. You will receive an email from the College Board when your scores are available. You access them through your College Board account at collegeboard.org. The fast turnaround is one of the significant improvements of the Digital SAT over the paper SAT, which took 2–8 weeks.' },
    },
    {
      '@type': 'Question', name: 'How do I read my SAT score report?',
      acceptedAnswer: { '@type': 'Answer', text: 'Your SAT score report shows: your composite score (400–1600), your Reading and Writing section score (200–800), your Math section score (200–800), a User Percentile for each score, a Nationally Representative Sample Percentile for each score, and subscores for each section\'s content domains. Your composite is the sum of the two section scores. Colleges primarily see and evaluate your composite and section scores.' },
    },
    {
      '@type': 'Question', name: 'What is the difference between SAT User Percentile and Nationally Representative Percentile?',
      acceptedAnswer: { '@type': 'Answer', text: 'The SAT User Percentile compares your score to other students who actually took the SAT — a self-selected, college-bound group. The Nationally Representative Sample Percentile compares you to all US 11th and 12th graders, including those who did not take the SAT. The Nationally Representative Percentile is typically 5–10 points higher for the same score. Colleges use and understand the User Percentile. For example, a 1200 might be at the 74th User Percentile but the 82nd Nationally Representative Percentile.' },
    },
    {
      '@type': 'Question', name: 'Can I cancel my SAT scores?',
      acceptedAnswer: { '@type': 'Answer', text: 'Yes. You can cancel your scores before they are released by contacting the College Board. Once released, you can choose not to send them to colleges through Score Choice — you control which test dates you submit. However, some colleges require you to send all scores, so check each school\'s policy. If you are not satisfied with your scores, your most practical option is to retake and then submit only the scores you choose to send.' },
    },
    {
      '@type': 'Question', name: 'What is SAT Score Choice and do I need to worry about it?',
      acceptedAnswer: { '@type': 'Answer', text: 'Score Choice allows you to choose which test date\'s SAT scores you send to colleges. By default, you only send scores from the dates you select. Most colleges officially accept Score Choice — meaning you only send your best scores. However, a handful of colleges require all scores from all test dates, so check each school\'s policy individually. Sending your best scores and not sending poor ones is the norm, not the exception.' },
    },
  ],
};

const SCORE_RELEASE_DATES = [
  { date: 'August 2025', release: '~5 business days after test', approx: 'Mid-August 2025' },
  { date: 'October 2025', release: '~5 business days after test', approx: 'Mid-October 2025' },
  { date: 'November 2025', release: '~5 business days after test', approx: 'Mid-November 2025' },
  { date: 'December 2025', release: '~5 business days after test', approx: 'Mid-December 2025' },
  { date: 'March 2026', release: '~5 business days after test', approx: 'Mid-March 2026' },
  { date: 'May 2026', release: '~5 business days after test', approx: 'Mid-May 2026' },
];

const SCORE_REPORT_COMPONENTS = [
  {
    n: '1', color: '#6366f1',
    title: 'Composite score (400–1600)',
    body: 'The sum of your Reading and Writing section score and your Math section score. This is the primary score colleges evaluate. It is displayed prominently at the top of your score report. Your composite is accompanied by a User Percentile showing how you compare nationally to other SAT test takers.',
  },
  {
    n: '2', color: '#a855f7',
    title: 'Section scores (200–800 each)',
    body: 'Your Reading and Writing score (200–800) and your Math score (200–800) are reported separately. These are the scores you can superscore — many colleges take the highest RW score from one test date and the highest Math score from another to calculate your best possible composite. STEM-focused programs often pay close attention to your Math section score specifically.',
  },
  {
    n: '3', color: '#34d399',
    title: 'User Percentile',
    body: 'Compares your score to other students who took the SAT in the current year. This is the percentile colleges know and use. A 1200 at the 74th User Percentile means you scored higher than approximately 74% of all SAT test takers nationally. This is the percentile displayed in our SAT calculator.',
  },
  {
    n: '4', color: '#f59e0b',
    title: 'Nationally Representative Sample Percentile',
    body: 'Compares your score to a statistically representative sample of all US 11th and 12th graders, including those who never took the SAT. Because the SAT is taken by a self-selected college-bound population, this percentile is typically 5–10 points higher than your User Percentile for the same score. Use the User Percentile for college planning; the Nationally Representative percentile is primarily used for state and policy reporting.',
  },
  {
    n: '5', color: '#ec4899',
    title: 'Subscores and cross-test scores',
    body: 'Your score report also includes diagnostic subscores (scored 1–15) for Reading and Writing domains (such as Words in Context, Command of Evidence, Standard English Conventions, Expression of Ideas) and Math domains (Heart of Algebra, Problem Solving and Data Analysis, Passport to Advanced Math). These don\'t affect college applications but are invaluable for identifying your strongest and weakest content areas for a retake.',
  },
  {
    n: '6', color: '#06b6d4',
    title: 'Score band (error range)',
    body: 'Every standardised test has measurement error — your "true" score is a range, not a single number. The College Board reports a score band of plus or minus a few points around your reported score. A student who scored 1340 and another who scored 1360 are performing at an essentially equivalent level within the measurement error of the test. This matters when interpreting small score changes across retakes.',
  },
];

const WHAT_TO_DO = [
  {
    icon: '📊',
    title: 'Compare to your target college ranges first',
    color: '#6366f1',
    body: 'Before reacting to your score emotionally, compare it specifically to the middle 50% SAT ranges for each college on your list. If your composite is at or above the 25th percentile for your target schools, you are in a competitive position. If your score is below the 25th percentile for most of your target schools, a retake is worth considering. Use the GradesNova SAT calculator to see exactly how your score compares to specific college ranges.',
  },
  {
    icon: '📈',
    title: 'Decide whether to retake based on evidence, not emotion',
    color: '#34d399',
    body: 'A score that feels disappointing may still be competitive for your actual target schools. Conversely, a score that feels good might be below what your reach schools typically see. Base your retake decision on the data: compare your score to each school\'s 25th–75th percentile SAT range, consider whether you have adequate preparation time before the next test date, and check whether the schools you care about superscore.',
  },
  {
    icon: '🔄',
    title: 'Check superscoring policies before planning a retake',
    color: '#a855f7',
    body: 'Most US colleges that require or consider the SAT accept superscoring — combining your best Reading and Writing score from one date with your best Math score from another. If your target schools superscore, retaking with a focus on your weaker section is a low-risk, high-reward strategy. Even a 30–40 point gain in one section can meaningfully improve your effective composite when combined with a strong previous section score.',
  },
  {
    icon: '📬',
    title: 'Send scores strategically using Score Choice',
    color: '#f59e0b',
    body: 'Score Choice lets you decide which test dates to send to colleges. Most colleges accept Score Choice, meaning you only need to send your best results. However, a small number of colleges (check each school\'s website) require all scores from all test dates. If all your target schools accept Score Choice, you have full control over which scores they see. If one or more require all scores, factor this into your retake decision — a lower score from an early attempt will be visible to those schools.',
  },
  {
    icon: '🔍',
    title: 'Request a score verification if something seems wrong',
    color: '#ec4899',
    body: 'If your Digital SAT score seems significantly lower than your practice test average (more than 80–100 points below), a score verification may be worth requesting. The College Board offers a hand-scoring service (for RW open-ended items) and can verify that your answers were correctly processed. This is rare but worth knowing about. Contact the College Board through your College Board account to request a review. Unlike the ACT\'s priority review, the Digital SAT\'s automated scoring leaves less room for rescoring, but processing errors can occasionally occur.',
  },
  {
    icon: '📋',
    title: 'Update your college list if needed',
    color: '#06b6d4',
    body: 'If your SAT score is significantly different from what you expected, revisit your college list. A lower-than-expected score is a signal to add more match and safety schools where you are comfortably within the middle 50% range. A higher-than-expected score is an opportunity to add one or two reach schools to your list. Neither outcome changes how you should approach your essays, extracurriculars, or recommendations — holistic admissions weigh many factors.',
  },
];

const SUPERSCORE_EXPLAINER = [
  { test: 'Test 1 (March)', rw: 640, math: 700 },
  { test: 'Test 2 (October)', rw: 690, math: 670 },
];

export default function SATScoreReleasePage() {
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
                <li><Link href="/exams/sat" className="hover:text-white transition-colors">SAT Score Calculator</Link></li>
                <li aria-hidden="true">›</li>
                <li className="text-slate-400" aria-current="page">SAT Score Release Guide</li>
              </ol>
            </nav>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-emerald-500/15 flex items-center justify-center text-xl" aria-hidden="true">📅</div>
              <span className="text-xs font-mono text-emerald-400/70 uppercase tracking-widest">SAT · Score Release · 2026</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white tracking-tight mb-4 leading-tight">
              SAT Score Release Guide 2026
            </h1>
            <p className="text-lg text-slate-400 leading-relaxed max-w-2xl">
              When Digital SAT scores are released, how to read every number on your score report, what the difference between percentile types means, and what to do with your results — whether they are what you hoped for or not.
            </p>
            <div className="flex items-center gap-4 mt-5 text-xs text-slate-500">
              <span>Updated May 2026</span>
              <span>·</span>
              <span>~10 min read</span>
            </div>
          </div>
        </header>

        <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-14">

          {/* Key facts */}
          <section aria-labelledby="key-facts-heading">
            <h2 id="key-facts-heading" className="sr-only">SAT score release key facts</h2>
            <div className="grid sm:grid-cols-3 gap-4">
              {[
                { icon: '⚡', label: 'Score release speed', value: '2–5 days', sub: 'After your test date', color: '#34d399' },
                { icon: '📧', label: 'How you\'re notified', value: 'Email', sub: 'From College Board when ready', color: '#6366f1' },
                { icon: '🌐', label: 'Where to access', value: 'collegeboard.org', sub: 'Log in to your account', color: '#a855f7' },
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

          {/* When scores come out */}
          <section aria-labelledby="when-heading">
            <h2 id="when-heading" className="text-2xl font-bold text-white mb-4">When do SAT scores come out in 2026?</h2>
            <div className="space-y-4 text-slate-400 leading-relaxed">
              <p>
                Digital SAT scores are released approximately <strong className="text-white">2–5 business days</strong> after your test date — one of the most significant improvements of the Digital SAT over the paper test, which took 2–8 weeks. The College Board sends you an email when your scores are available. You access them by logging in to your College Board account at collegeboard.org.
              </p>
              <p>
                Score release timing can vary slightly — sometimes scores appear faster than the stated window, sometimes at the end of it. Check your email and your College Board account rather than relying on a predicted exact date. Your scores will remain accessible in your College Board account indefinitely.
              </p>
            </div>
            <div className="mt-6 overflow-x-auto rounded-xl border border-white/8">
              <table className="w-full text-sm min-w-[440px]" aria-label="SAT 2026 score release dates">
                <thead>
                  <tr className="bg-white/4 border-b border-white/8">
                    <th scope="col" className="text-left px-4 py-3 text-xs font-semibold text-slate-400 uppercase">Test date</th>
                    <th scope="col" className="text-left px-4 py-3 text-xs font-semibold text-slate-400 uppercase">Score release window</th>
                    <th scope="col" className="text-left px-4 py-3 text-xs font-semibold text-slate-400 uppercase hidden sm:table-cell">Approximate release</th>
                  </tr>
                </thead>
                <tbody>
                  {SCORE_RELEASE_DATES.map((row, i) => (
                    <tr key={row.date} className={`border-b border-white/5 last:border-0 ${i % 2 === 0 ? '' : 'bg-white/2'}`}>
                      <td className="px-4 py-2.5 font-mono text-xs font-semibold text-indigo-400">{row.date}</td>
                      <td className="px-4 py-2.5 text-slate-400 text-xs">{row.release}</td>
                      <td className="px-4 py-2.5 text-slate-500 text-xs hidden sm:table-cell">{row.approx}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-xs text-slate-600 mt-2">Exact release dates vary. You will receive an email from the College Board when your specific scores are ready. Verify current release schedules at collegeboard.org.</p>
          </section>

          {/* How to read your score report */}
          <section aria-labelledby="report-heading">
            <h2 id="report-heading" className="text-2xl font-bold text-white mb-4">How to read your SAT score report</h2>
            <div className="space-y-4 text-slate-400 leading-relaxed">
              <p>
                Your SAT score report contains more information than most students know to look for. Understanding every component — not just the composite — helps you make smart decisions about retaking, college planning, and identifying what to improve.
              </p>
            </div>
            <div className="mt-5 space-y-3">
              {SCORE_REPORT_COMPONENTS.map(item => (
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

            <div className="mt-6 bg-emerald-500/10 border border-emerald-500/20 rounded-xl p-5 flex gap-4 items-start">
              <span className="text-xl shrink-0" aria-hidden="true">🧮</span>
              <div>
                <p className="text-sm font-semibold text-white mb-1">Check your score percentile instantly</p>
                <p className="text-sm text-slate-400 leading-relaxed mb-3">
                  Enter your composite or section scores to see your User Percentile, compare to top college ranges, and find your SAT-to-ACT equivalent — all updated for the 2025–2026 cycle.
                </p>
                <Link href="/exams/sat" className="inline-flex items-center gap-2 bg-indigo-600 hover:bg-indigo-500 text-white px-4 py-2 rounded-xl font-semibold text-sm transition-all">
                  SAT Score Calculator →
                </Link>
              </div>
            </div>
          </section>

          {/* Percentile types explained */}
          <section aria-labelledby="percentiles-heading">
            <h2 id="percentiles-heading" className="text-2xl font-bold text-white mb-4">User Percentile vs Nationally Representative Percentile: explained</h2>
            <div className="space-y-4 text-slate-400 leading-relaxed">
              <p>
                Your score report shows two different percentiles for every score. This confuses most students — and the confusion can lead to misinterpreting how competitive your score is. Here is the clear explanation:
              </p>
            </div>
            <div className="mt-5 grid sm:grid-cols-2 gap-4">
              <div className="bg-[#12141f] border border-indigo-500/20 rounded-xl p-5">
                <h3 className="text-sm font-bold text-indigo-400 mb-3">SAT User Percentile</h3>
                <div className="space-y-3 text-xs text-slate-400">
                  <p><strong className="text-slate-300">What it compares:</strong> Your score against all students who took the SAT in the current year.</p>
                  <p><strong className="text-slate-300">Who these students are:</strong> A self-selected group of college-bound high school students. They tend to be academically motivated and planning to attend four-year colleges.</p>
                  <p><strong className="text-slate-300">Why it matters:</strong> This is the percentile colleges know and reference. When an admissions officer sees "74th percentile," they mean User Percentile. Use this for all college planning.</p>
                  <p><strong className="text-slate-300">Example:</strong> A 1200 SAT = approximately 74th User Percentile = you scored higher than 74% of SAT test takers.</p>
                </div>
              </div>
              <div className="bg-[#12141f] border border-emerald-500/20 rounded-xl p-5">
                <h3 className="text-sm font-bold text-emerald-400 mb-3">Nationally Representative Sample Percentile</h3>
                <div className="space-y-3 text-xs text-slate-400">
                  <p><strong className="text-slate-300">What it compares:</strong> Your score against a statistically representative sample of all US 11th and 12th graders, including those who never sat for the SAT.</p>
                  <p><strong className="text-slate-300">Who these students are:</strong> The full range of US high school juniors and seniors, regardless of college plans or academic preparation.</p>
                  <p><strong className="text-slate-300">Why it's higher:</strong> Because many lower-achieving students do not take the SAT, the SAT-taking population skews higher than the full national population. This inflates the Nationally Representative percentile.</p>
                  <p><strong className="text-slate-300">Example:</strong> A 1200 SAT ≈ 82nd Nationally Representative Percentile — but this overstates your competitive position for college purposes.</p>
                </div>
              </div>
            </div>
            <div className="mt-5 bg-amber-500/10 border border-amber-500/20 rounded-xl p-4 flex gap-3 items-start">
              <span className="text-lg shrink-0" aria-hidden="true">⚠️</span>
              <p className="text-sm text-slate-300">
                <strong className="text-amber-300">Bottom line:</strong> Always use the <strong>User Percentile</strong> when evaluating your score for college applications. The Nationally Representative Percentile sounds impressive but is not what admissions offices reference.
              </p>
            </div>
          </section>

          {/* Superscoring */}
          <section aria-labelledby="superscore-heading">
            <h2 id="superscore-heading" className="text-2xl font-bold text-white mb-4">How SAT superscoring works — and how to use it</h2>
            <div className="space-y-4 text-slate-400 leading-relaxed">
              <p>
                Superscoring is the practice of combining your best Reading and Writing score from one test date with your best Math score from another date to create a higher effective composite. Most US colleges that require the SAT superscore — meaning they calculate your best possible composite from across all your test dates and evaluate that score.
              </p>
              <p>
                Superscoring is almost always to your advantage. It means that focusing one retake entirely on your weaker section — without trying to maintain your stronger section — is a legitimate and efficient strategy. Your stronger section score from a previous test date is preserved in the superscore calculation.
              </p>
            </div>

            <div className="mt-6 bg-[#12141f] border border-white/8 rounded-xl p-5">
              <p className="text-sm font-semibold text-white mb-4">Superscore example</p>
              <div className="overflow-x-auto">
                <table className="w-full text-sm min-w-[380px]" aria-label="SAT superscore calculation example">
                  <thead>
                    <tr className="border-b border-white/8">
                      <th scope="col" className="text-left pb-3 text-xs font-semibold text-slate-400">Test date</th>
                      <th scope="col" className="text-center pb-3 text-xs font-semibold text-purple-400">Reading & Writing</th>
                      <th scope="col" className="text-center pb-3 text-xs font-semibold text-indigo-400">Math</th>
                      <th scope="col" className="text-center pb-3 text-xs font-semibold text-slate-400">Composite</th>
                    </tr>
                  </thead>
                  <tbody className="space-y-2">
                    {SUPERSCORE_EXPLAINER.map((row, i) => (
                      <tr key={i} className="border-b border-white/5">
                        <td className="py-2.5 text-xs text-slate-400">{row.test}</td>
                        <td className="py-2.5 text-center text-xs font-mono font-semibold text-purple-400">{row.rw}</td>
                        <td className="py-2.5 text-center text-xs font-mono font-semibold text-indigo-400">{row.math}</td>
                        <td className="py-2.5 text-center text-xs font-mono font-semibold text-slate-300">{row.rw + row.math}</td>
                      </tr>
                    ))}
                    <tr className="border-t-2 border-white/20 mt-2">
                      <td className="pt-3 text-xs font-bold text-white">Superscore</td>
                      <td className="pt-3 text-center">
                        <span className="text-xs font-mono font-bold text-purple-400 bg-purple-500/15 px-2 py-0.5 rounded">690 ✓ best</span>
                      </td>
                      <td className="pt-3 text-center">
                        <span className="text-xs font-mono font-bold text-indigo-400 bg-indigo-500/15 px-2 py-0.5 rounded">700 ✓ best</span>
                      </td>
                      <td className="pt-3 text-center">
                        <span className="text-xs font-mono font-bold text-white bg-white/10 px-2 py-0.5 rounded">1390</span>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="text-xs text-slate-500 mt-3">Neither single test date produced a 1390. Superscoring combined the best RW (690, October) and best Math (700, March) for an effective composite 50 points higher than either test date alone.</p>
            </div>

            <div className="mt-5 space-y-3">
              {[
                { n: '1', title: 'Check each college\'s superscoring policy', body: 'Superscoring policies vary by institution. Most selective colleges superscore, but some accept all scores and evaluate the highest single sitting. A small number require you to submit all scores from all test dates regardless. Check the Common Data Set or the admissions FAQ for every school you are applying to.', color: '#6366f1' },
                { n: '2', title: 'If they superscore: focus one retake on your weaker section', body: 'If your target colleges superscore, you can strategically focus a retake on improving just your weaker section without worrying about maintaining your stronger section score. Your best RW and best Math will be combined, regardless of which test date they came from. This removes one major pressure from retaking.', color: '#34d399' },
                { n: '3', title: 'If they require all scores: consider timing more carefully', body: 'A handful of colleges require all SAT scores from all sittings. If you have low scores from early practice attempts, these will be visible to those schools. For this reason, many students prefer to take the SAT only after adequate preparation rather than using early sittings as "practice." Consider using official Bluebook tests as your practice before registering for a real test.', color: '#a855f7' },
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

          {/* What to do with your scores */}
          <section aria-labelledby="next-steps-heading">
            <h2 id="next-steps-heading" className="text-2xl font-bold text-white mb-4">What to do after you receive your SAT scores</h2>
            <div className="space-y-4 text-slate-400 leading-relaxed">
              <p>
                Your first instinct when seeing your scores — whether relief, disappointment, or surprise — is rarely the right basis for a decision. Take a breath, then work through the steps below methodically.
              </p>
            </div>
            <div className="mt-5 space-y-3">
              {WHAT_TO_DO.map(item => (
                <div key={item.title} className="bg-[#12141f] border border-white/8 rounded-xl p-5 flex gap-4">
                  <span className="text-2xl shrink-0" aria-hidden="true">{item.icon}</span>
                  <div>
                    <h3 className="text-sm font-bold text-white mb-1.5">{item.title}</h3>
                    <p className="text-sm text-slate-400 leading-relaxed">{item.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Score reporting and College Board */}
          <section aria-labelledby="sending-heading">
            <h2 id="sending-heading" className="text-2xl font-bold text-white mb-4">Sending your SAT scores to colleges</h2>
            <div className="space-y-4 text-slate-400 leading-relaxed">
              <p>
                SAT scores are sent to colleges electronically through the College Board. You send them through your College Board account. Most students send scores after receiving them, though you can also designate colleges to receive scores when you register for the test (free at registration).
              </p>
            </div>
            <div className="mt-5 space-y-3">
              {[
                { icon: '🎯', title: 'Use Score Choice: only send what you want', body: 'Score Choice allows you to choose which test dates to send to each college. You are not required to send every test date. Most colleges officially accept Score Choice. However, verify each school\'s policy — a small number require all scores from all sittings, and sending partial scores to these schools would be a policy violation.', color: '#6366f1' },
                { icon: '💰', title: 'Free score sends vs fee-based sends', body: 'When you register for the SAT, you can designate up to 4 colleges to receive your scores for free. After scores are released, additional score sends cost approximately $13 per college. Many students save their 4 free sends for their top choices and pay for additional reports only if needed. If you are applying to more than 4 schools, factor this into your budget.', color: '#34d399' },
                { icon: '📅', title: 'Check college score reporting deadlines', body: 'Colleges set their own SAT score reporting deadlines, which may differ from application deadlines. Some require scores to be received by the application deadline; others allow scores submitted a few weeks later. Check each school\'s admissions website for their specific policy. Sending scores early (before application deadlines) eliminates last-minute logistical pressure.', color: '#a855f7' },
                { icon: '🏛️', title: 'QuestBridge and financial aid considerations', body: 'If you are applying through QuestBridge, CSS Profile financial aid programs, or scholarship competitions with SAT requirements, their score reporting rules may differ from individual colleges. Always verify the specific requirements for any external program you are applying to.', color: '#f59e0b' },
              ].map(item => (
                <div key={item.title} className="bg-[#12141f] border border-white/8 rounded-xl p-4 flex gap-4">
                  <span className="text-2xl shrink-0" aria-hidden="true">{item.icon}</span>
                  <div>
                    <h3 className="text-sm font-semibold text-white mb-1">{item.title}</h3>
                    <p className="text-xs text-slate-400 leading-relaxed">{item.body}</p>
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
                { q: 'When do SAT scores come out in 2026?', a: 'Digital SAT scores are released approximately 2–5 business days after your test date. You will receive an email from the College Board when your scores are ready. Access them through your College Board account at collegeboard.org. This is significantly faster than the paper SAT, which took 2–8 weeks.' },
                { q: 'How do I read my SAT score report?', a: 'Your score report shows your composite (400–1600), Reading and Writing section score (200–800), and Math section score (200–800). Each comes with a User Percentile and a Nationally Representative Sample Percentile. You also receive diagnostic subscores for content domains within each section. The User Percentile is the one colleges use; the Nationally Representative Percentile is typically 5–10 points higher for the same score.' },
                { q: 'Can I cancel my SAT scores before they are sent to colleges?', a: 'You can cancel your scores before they are processed by contacting the College Board immediately after your test. Once scores are released to your account, you can use Score Choice to decide which scores to send to colleges — you are not required to submit scores from a particular test date. The College Board does not notify colleges of cancelled scores.' },
                { q: 'What is SAT Score Choice?', a: 'Score Choice lets you choose which test dates\' scores to send to each college. Most colleges accept Score Choice, meaning you only send your best scores. A small number of colleges require all scores from all test dates (check each school\'s policy). Score Choice is free to use and does not cost anything to exercise.' },
                { q: 'My score is lower than my practice tests. What happened?', a: 'A score 50–80 points below your practice average is within normal variability. A score 100+ points below is worth investigating. Possible causes include test anxiety, a different adaptive routing experience than practice, fatigue, or distractions on test day. Before requesting a score verification, compare your pacing and strategy on the real test to your practice tests. If you consistently score higher on official Bluebook tests than on the real test, consider anxiety management strategies for your next sitting.' },
                { q: 'Should I retake the SAT?', a: 'Compare your score to the middle 50% SAT range for each school on your college list. If you are below the 25th percentile for most of your target schools, a retake is worth considering. If you are within or above the middle 50%, evaluate whether the time investment in retaking is better spent on other application components (essays, activities). Most students improve 50–100 points on a structured retake.' },
                { q: 'How long are SAT scores valid?', a: 'SAT scores do not expire — the College Board retains your scores indefinitely. However, many colleges have informal policies about preferring recent scores (typically within the last 2–3 years for applications). For college applications during the standard junior/senior year cycle, score recency is not typically an issue. For adult learners or students taking time off, check with individual schools about their preferences.' },
                { q: 'Does the College Board report my scores to colleges automatically?', a: 'No. The College Board sends your scores only to colleges you specifically designate. Scores are not reported automatically to any institution. You control exactly which colleges receive your scores and from which test dates. However, if your college uses the Common App, your self-reported scores may be visible to schools during the application process before official scores arrive.' },
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
              <h3 className="text-base font-semibold text-white mb-1">See exactly where your SAT score ranks nationally</h3>
              <p className="text-sm text-slate-400 leading-relaxed mb-3">
                Enter your composite or section scores to instantly see your 2026 national percentile, SAT-to-ACT conversion, and how you compare to the middle 50% ranges for top colleges.
              </p>
              <Link href="/exams/sat" className="inline-flex items-center gap-2 bg-indigo-600 hover:bg-indigo-500 text-white px-5 py-2.5 rounded-xl font-semibold text-sm transition-all hover:shadow-lg hover:-translate-y-0.5">
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
                { title: 'What Colleges Can I Get Into?', href: '/exams/sat/colleges', color: '#a855f7' },
                { title: 'SAT Prep Tips & Digital SAT Strategy', href: '/exams/sat/prep-tips', color: '#f59e0b' },
                { title: 'SAT vs ACT: Which Should You Take?', href: '/exams/sat/vs-act', color: '#06b6d4' },
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
