// app/articles/sat-vs-act-complete-comparison/page.tsx
import type { Metadata } from 'next';
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'SAT vs ACT: Complete Comparison 2025 | GradesNova',
  description: 'SAT vs ACT: compare scoring, structure, difficulty, and which test suits you best. Includes 2025 score ranges, section breakdowns, and a free percentile calculator.',
  alternates: { canonical: 'https://gradesnova.com/articles/sat-vs-act-complete-comparison' },
  openGraph: {
    title: 'SAT vs ACT: Complete Comparison 2025',
    description: 'SAT vs ACT: compare scoring, structure, difficulty, and which test suits you best in 2025.',
    url: 'https://gradesnova.com/articles/sat-vs-act-complete-comparison',
    type: 'article',
    siteName: 'GradesNova',
  },
  robots: { index: true, follow: true },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'SAT vs ACT: Complete Comparison 2025',
  description: 'A full comparison of the SAT and ACT covering scoring, structure, content, and which exam is right for you.',
  url: 'https://gradesnova.com/articles/sat-vs-act-complete-comparison',
  author: { '@type': 'Organization', name: 'GradesNova' },
  publisher: { '@type': 'Organization', name: 'GradesNova', url: 'https://gradesnova.com' },
  dateModified: '2025-05-24',
};

export default function SatVsActPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <main className="bg-[#0a0c14] min-h-screen text-white">
        <Navbar />

        <header className="bg-[#0d0f1a] border-b border-white/8 py-10">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <nav aria-label="Breadcrumb" className="mb-5">
              <ol className="flex items-center gap-2 text-xs text-slate-500">
                <li><Link href="/" className="hover:text-white transition-colors">Home</Link></li>
                <li aria-hidden="true">›</li>
                <li><Link href="/articles" className="hover:text-white transition-colors">Articles</Link></li>
                <li aria-hidden="true">›</li>
                <li className="text-slate-400" aria-current="page">SAT vs ACT</li>
              </ol>
            </nav>
            <div className="flex items-center gap-2 mb-3">
              <span className="text-xs font-semibold uppercase tracking-wider px-2.5 py-1 rounded-full bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">SAT · ACT</span>
            </div>
            <h1 className="text-3xl sm:text-4xl font-bold text-white leading-tight mb-4">
              SAT vs ACT: Complete Comparison for 2025
            </h1>
            <p className="text-slate-400 leading-relaxed text-base">
              Both exams are accepted equally by all US colleges — but they test different strengths. This guide breaks down every key difference so you can choose the right test and maximise your score.
            </p>
            <div className="flex items-center gap-4 mt-5 text-xs text-slate-500">
              <span>Updated May 2025</span>
              <span>·</span>
              <span>~10 min read</span>
            </div>
          </div>
        </header>

        <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">

          {/* Stat Cards */}
          <div className="grid sm:grid-cols-3 gap-4">
            <div className="bg-[#12141f] border border-white/8 rounded-xl p-4">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-lg" aria-hidden="true">📊</span>
                <span className="text-xs text-slate-400 font-medium">SAT Score Range</span>
              </div>
              <p className="text-2xl font-bold font-mono" style={{ color: '#6366f1' }}>400–1600</p>
              <p className="text-xs text-slate-500 mt-0.5">Two sections × 800 pts each</p>
            </div>
            <div className="bg-[#12141f] border border-white/8 rounded-xl p-4">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-lg" aria-hidden="true">📈</span>
                <span className="text-xs text-slate-400 font-medium">ACT Score Range</span>
              </div>
              <p className="text-2xl font-bold font-mono" style={{ color: '#06b6d4' }}>1–36</p>
              <p className="text-xs text-slate-500 mt-0.5">Four sections averaged</p>
            </div>
            <div className="bg-[#12141f] border border-white/8 rounded-xl p-4">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-lg" aria-hidden="true">⏱️</span>
                <span className="text-xs text-slate-400 font-medium">Test Duration</span>
              </div>
              <p className="text-2xl font-bold font-mono" style={{ color: '#a855f7' }}>2h 14m / 2h 55m</p>
              <p className="text-xs text-slate-500 mt-0.5">SAT (digital) / ACT</p>
            </div>
          </div>

          {/* Overview */}
          <section aria-labelledby="overview-heading">
            <h2 id="overview-heading" className="text-2xl font-bold text-white mb-4">What&apos;s the difference between the SAT and ACT?</h2>
            <p className="text-slate-400 leading-relaxed mb-4">
              The SAT and ACT are the two dominant US college admissions tests. Every four-year college accepts both scores interchangeably — no school prefers one over the other. The decision of which to take comes down to your strengths, your pacing under pressure, and how you process science-style data questions.
            </p>
            <p className="text-slate-400 leading-relaxed mb-4">
              As of 2024, the SAT is fully digital and adaptive: the difficulty of your second module adjusts based on how you did in the first. The ACT remains a fixed paper test (with a digital option at some centres), and it moves significantly faster — students answer roughly one question per minute across all four sections.
            </p>
            <p className="text-slate-400 leading-relaxed">
              The ACT includes a dedicated Science section; the SAT does not. However, the SAT's Math section goes deeper into algebra and data analysis. Neither exam penalises wrong answers, so you should always guess rather than leave a question blank.
            </p>
          </section>

          {/* Structure Comparison Table */}
          <section aria-labelledby="structure-heading">
            <h2 id="structure-heading" className="text-2xl font-bold text-white mb-4">SAT vs ACT structure and timing</h2>
            <p className="text-slate-400 leading-relaxed mb-5">
              The table below shows each section, its question count, and your time per question. A lower seconds-per-question figure means more time pressure.
            </p>
            <div className="overflow-x-auto rounded-xl border border-white/8">
              <table className="w-full text-sm min-w-[520px]" aria-label="SAT vs ACT section structure and timing comparison">
                <thead>
                  <tr className="bg-white/4 border-b border-white/8">
                    <th scope="col" className="text-left px-4 py-3 text-xs font-semibold text-slate-400 uppercase tracking-wider">Section</th>
                    <th scope="col" className="text-left px-4 py-3 text-xs font-semibold text-slate-400 uppercase tracking-wider">Exam</th>
                    <th scope="col" className="text-left px-4 py-3 text-xs font-semibold text-slate-400 uppercase tracking-wider">Questions</th>
                    <th scope="col" className="text-left px-4 py-3 text-xs font-semibold text-slate-400 uppercase tracking-wider">Time</th>
                    <th scope="col" className="text-left px-4 py-3 text-xs font-semibold text-slate-400 uppercase tracking-wider">Sec/Q</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5">
                  {[
                    { section: 'Reading & Writing', exam: 'SAT', q: '54', time: '64 min', spq: '71s', color: '#6366f1' },
                    { section: 'Math', exam: 'SAT', q: '44', time: '70 min', spq: '95s', color: '#6366f1' },
                    { section: 'English', exam: 'ACT', q: '75', time: '45 min', spq: '36s', color: '#06b6d4' },
                    { section: 'Mathematics', exam: 'ACT', q: '60', time: '60 min', spq: '60s', color: '#06b6d4' },
                    { section: 'Reading', exam: 'ACT', q: '40', time: '35 min', spq: '53s', color: '#06b6d4' },
                    { section: 'Science', exam: 'ACT', q: '40', time: '35 min', spq: '53s', color: '#06b6d4' },
                  ].map((row, i) => (
                    <tr key={i} className="hover:bg-white/2 transition-colors">
                      <td className="px-4 py-3 text-slate-300">{row.section}</td>
                      <td className="px-4 py-3">
                        <span className="font-mono text-xs font-semibold px-2 py-0.5 rounded-full" style={{ color: row.color, background: `${row.color}18` }}>{row.exam}</span>
                      </td>
                      <td className="px-4 py-3 font-mono text-slate-300">{row.q}</td>
                      <td className="px-4 py-3 font-mono text-slate-300">{row.time}</td>
                      <td className="px-4 py-3 font-mono text-slate-400">{row.spq}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-xs text-slate-600 mt-3">Source: College Board (SAT 2024 digital format), ACT Inc. (2024–25 test specifications).</p>
          </section>

          {/* Scoring */}
          <section aria-labelledby="scoring-heading">
            <h2 id="scoring-heading" className="text-2xl font-bold text-white mb-4">How SAT and ACT scoring works</h2>
            <p className="text-slate-400 leading-relaxed mb-4">
              The SAT produces a composite score between 400 and 1600, split equally between the Evidence-Based Reading and Writing section and the Math section. Each section is scored on a 200–800 scale. For context, a 1200 composite puts a student at roughly the 74th percentile nationally (Class of 2024).
            </p>
            <p className="text-slate-400 leading-relaxed mb-4">
              The ACT composite is the average of four section scores (English, Math, Reading, Science), each on a 1–36 scale, rounded to the nearest whole number. A composite of 24 corresponds to approximately the 74th percentile — a useful rough equivalence to the SAT 1200.
            </p>

            <div className="bg-indigo-500/10 border border-indigo-500/20 rounded-xl p-5 flex gap-4 items-start">
              <span className="text-xl shrink-0" aria-hidden="true">💡</span>
              <div>
                <p className="text-sm font-semibold text-white mb-1">Superscoring: use it to your advantage</p>
                <p className="text-sm text-slate-400 leading-relaxed">Most colleges superscore both exams — meaning they take your highest section scores across all test dates. If you sit the SAT twice and score 700 Math / 620 EBRW the first time and 680 Math / 680 EBRW the second time, many schools will construct a superscore of 700 + 680 = 1380. Always check each college&apos;s policy, but sitting both exams at least twice is generally worth it.</p>
              </div>
            </div>
          </section>

          {/* Content Differences */}
          <section aria-labelledby="content-heading">
            <h2 id="content-heading" className="text-2xl font-bold text-white mb-4">Content and difficulty: SAT vs ACT compared</h2>
            <p className="text-slate-400 leading-relaxed mb-4">
              The ACT Science section is the single biggest structural difference between the two tests. It is not a biology or chemistry test — it tests your ability to read graphs, interpret data, and evaluate competing scientific hypotheses quickly. Students who are strong data readers tend to find ACT Science manageable; students who read slowly under pressure often struggle with its pace.
            </p>
            <p className="text-slate-400 leading-relaxed mb-4">
              SAT Math covers fewer topics than ACT Math but goes deeper. The digital SAT removed the no-calculator section, so you now use a calculator throughout. ACT Math covers trigonometry and matrices — topics that do not appear on the SAT. If your school hasn't covered trig yet, the SAT may be the safer choice.
            </p>
            <p className="text-slate-400 leading-relaxed mb-4">
              On reading comprehension, the SAT now uses shorter, more focused passages with each question tied to a specific piece of evidence. The ACT uses longer passages with a wider range of question types. Students who prefer zooming in on targeted evidence tend to prefer the SAT; students who read fast and can hold longer texts in mind often score higher on the ACT.
            </p>

            <div className="grid sm:grid-cols-2 gap-4">
              <div className="bg-[#12141f] border border-indigo-500/20 rounded-xl p-5">
                <p className="text-xs font-semibold uppercase tracking-wider text-indigo-400 mb-3">Take the SAT if you…</p>
                <ul className="space-y-2 text-sm text-slate-400">
                  <li className="flex gap-2"><span aria-hidden="true">✓</span><span>Prefer more time per question</span></li>
                  <li className="flex gap-2"><span aria-hidden="true">✓</span><span>Are stronger in algebra than trig</span></li>
                  <li className="flex gap-2"><span aria-hidden="true">✓</span><span>Like targeted evidence-based reading</span></li>
                  <li className="flex gap-2"><span aria-hidden="true">✓</span><span>Prefer a fully digital, adaptive format</span></li>
                </ul>
              </div>
              <div className="bg-[#12141f] border border-cyan-500/20 rounded-xl p-5">
                <p className="text-xs font-semibold uppercase tracking-wider text-cyan-400 mb-3">Take the ACT if you…</p>
                <ul className="space-y-2 text-sm text-slate-400">
                  <li className="flex gap-2"><span aria-hidden="true">✓</span><span>Read quickly and work well under pace</span></li>
                  <li className="flex gap-2"><span aria-hidden="true">✓</span><span>Have covered trig and broader math topics</span></li>
                  <li className="flex gap-2"><span aria-hidden="true">✓</span><span>Are comfortable interpreting scientific data</span></li>
                  <li className="flex gap-2"><span aria-hidden="true">✓</span><span>Prefer a predictable, non-adaptive format</span></li>
                </ul>
              </div>
            </div>
          </section>

          {/* Which to choose */}
          <section aria-labelledby="choose-heading">
            <h2 id="choose-heading" className="text-2xl font-bold text-white mb-4">How to decide which exam to take</h2>
            <p className="text-slate-400 leading-relaxed mb-4">
              The most reliable method is to sit a full-length official practice test for each exam under timed conditions, then convert your scores to a common scale and see where you perform better. College Board and ACT Inc. both publish free official practice tests.
            </p>
            <p className="text-slate-400 leading-relaxed mb-4">
              Use a concordance table to compare: a 1200 SAT is broadly equivalent to a 24 ACT. A 1400 SAT is roughly equivalent to a 31 ACT. If your practice scores diverge significantly, prioritise the exam where you score higher — admissions officers see both as equivalent, so play to your strengths.
            </p>
            <p className="text-slate-400 leading-relaxed">
              If your scores are similar on both, consider logistics: test availability in your region, school-day testing options (some states offer free in-school ACT or SAT), and the essay requirement at your target schools (the ACT optional Writing section is distinct from the main composite; the SAT no longer offers an essay).
            </p>
          </section>

          {/* CTA */}
          <div className="bg-[#12141f] border border-indigo-500/20 rounded-2xl p-7 flex gap-5 items-start">
            <div className="text-2xl shrink-0" aria-hidden="true">🎯</div>
            <div>
              <h3 className="text-base font-semibold text-white mb-1">Find your SAT score percentile instantly</h3>
              <p className="text-sm text-slate-400 leading-relaxed mb-3">Enter your SAT composite or section scores to see exactly where you rank nationally and how your score compares to admitted students at top colleges.</p>
              <Link href="/exams/sat" className="inline-flex items-center gap-2 bg-indigo-600 hover:bg-indigo-500 text-white px-5 py-2.5 rounded-xl font-semibold text-sm transition-all hover:shadow-lg hover:-translate-y-0.5">
                Check SAT Percentile →
              </Link>
            </div>
          </div>

          {/* Related */}
          <section aria-labelledby="related-heading" className="border-t border-white/8 pt-10">
            <h2 id="related-heading" className="text-sm font-semibold text-slate-500 uppercase tracking-wider mb-4">Related articles</h2>
            <div className="grid sm:grid-cols-2 gap-3">
              {[
                { title: 'ACT vs SAT Difficulty Comparison', href: '/articles/act-vs-sat-difficulty-comparison', color: '#06b6d4' },
                { title: 'SAT vs AP Exams Explained', href: '/articles/sat-vs-ap-exams-explained', color: '#6366f1' },
              ].map((a) => (
                <Link key={a.href} href={a.href} className="bg-[#12141f] border border-white/8 rounded-xl p-4 hover:border-white/16 transition-colors group">
                  <p className="text-sm font-semibold text-white group-hover:brightness-110 transition-all leading-snug">{a.title}</p>
                  <span className="text-xs mt-2 inline-block font-medium" style={{ color: a.color }}>Read article →</span>
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
