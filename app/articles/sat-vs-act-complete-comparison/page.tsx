// app/articles/sat-vs-act-complete-comparison/page.tsx
import type { Metadata } from 'next';
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'SAT vs ACT: Complete Comparison 2026 | GradesNova',
  description: 'SAT vs ACT: compare scoring, structure, difficulty, and which test suits you best. Includes 2026 score ranges, the new Enhanced ACT format, and a free percentile calculator.',
  alternates: { canonical: 'https://gradesnova.com/articles/sat-vs-act-complete-comparison' },
  openGraph: {
    title: 'SAT vs ACT: Complete Comparison 2026',
    description: 'SAT vs ACT: compare scoring, structure, difficulty, and which test suits you best, including the redesigned Enhanced ACT.',
    url: 'https://gradesnova.com/articles/sat-vs-act-complete-comparison',
    type: 'article',
    siteName: 'GradesNova',
  },
  robots: { index: true, follow: true },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'SAT vs ACT: Complete Comparison 2026',
  description: 'A full comparison of the SAT and the redesigned Enhanced ACT covering scoring, structure, content, and which exam is right for you.',
  url: 'https://gradesnova.com/articles/sat-vs-act-complete-comparison',
  author: { '@type': 'Organization', name: 'GradesNova' },
  publisher: { '@type': 'Organization', name: 'GradesNova', url: 'https://gradesnova.com' },
  dateModified: '2026-06-15',
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
              <span className="text-xs font-semibold uppercase tracking-wider px-2.5 py-1 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">Updated for the Enhanced ACT</span>
            </div>
            <h1 className="text-3xl sm:text-4xl font-bold text-white leading-tight mb-4">
              SAT vs ACT: Complete Comparison for 2026
            </h1>
            <p className="text-slate-400 leading-relaxed text-base">
              Both exams are accepted equally by all US colleges — but they test different strengths, and the ACT changed significantly in 2025. This guide breaks down every key difference, including the new Enhanced ACT format, so you can choose the right test and maximise your score.
            </p>
            <div className="flex items-center gap-4 mt-5 text-xs text-slate-500">
              <span>Updated June 2026</span>
              <span>·</span>
              <span>~12 min read</span>
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
              <p className="text-xs text-slate-500 mt-0.5">English, Math & Reading averaged</p>
            </div>
            <div className="bg-[#12141f] border border-white/8 rounded-xl p-4">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-lg" aria-hidden="true">⏱️</span>
                <span className="text-xs text-slate-400 font-medium">Core Test Duration</span>
              </div>
              <p className="text-2xl font-bold font-mono" style={{ color: '#a855f7' }}>2h 14m / ~2h 5m</p>
              <p className="text-xs text-slate-500 mt-0.5">SAT (digital) / Enhanced ACT (no Science)</p>
            </div>
          </div>

          {/* Overview */}
          <section aria-labelledby="overview-heading">
            <h2 id="overview-heading" className="text-2xl font-bold text-white mb-4">What&apos;s the difference between the SAT and ACT?</h2>
            <p className="text-slate-400 leading-relaxed mb-4">
              The SAT and ACT are the two dominant US college admissions tests. Every four-year college accepts both scores interchangeably — no school prefers one over the other. The decision of which to take comes down to your strengths, your pacing under pressure, and how comfortable you are opting in or out of ACT Science.
            </p>
            <p className="text-slate-400 leading-relaxed mb-4">
              The SAT is fully digital and adaptive: the difficulty of your second module adjusts based on how you did in the first. The ACT went through its biggest overhaul in decades starting in 2025 — often called the &quot;Enhanced ACT&quot; — which shortened the core test, cut the total question count, and made the Science section optional rather than required. The rollout happened in phases: online national testing switched over in April 2025, paper national testing in September 2025, and school-day testing in spring 2026, so virtually every student now takes the Enhanced ACT.
            </p>
            <p className="text-slate-400 leading-relaxed mb-4">
              Because Science is now optional, the ACT composite score is calculated only from English, Math, and Reading. Students who take Science still receive a separate Science score and a combined STEM score (the average of Math and Science), but Science no longer factors into the main 1–36 composite. The SAT still has no Science section, but its Math and Reading & Writing questions do test scientific data interpretation.
            </p>
            <p className="text-slate-400 leading-relaxed">
              Neither exam penalises wrong answers, so you should always guess rather than leave a question blank.
            </p>
          </section>

          {/* Structure Comparison Table */}
          <section aria-labelledby="structure-heading">
            <h2 id="structure-heading" className="text-2xl font-bold text-white mb-4">SAT vs ACT structure and timing</h2>
            <p className="text-slate-400 leading-relaxed mb-5">
              The table below shows each section, its question count, and your time per question. A lower seconds-per-question figure means more time pressure. ACT Science is shown separately since it&apos;s now an optional add-on rather than a required core section.
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
                    { section: 'English', exam: 'ACT', q: '50', time: '35 min', spq: '42s', color: '#06b6d4' },
                    { section: 'Mathematics', exam: 'ACT', q: '45', time: '50 min', spq: '67s', color: '#06b6d4' },
                    { section: 'Reading', exam: 'ACT', q: '36', time: '40 min', spq: '67s', color: '#06b6d4' },
                    { section: 'Science (optional, $ add-on)', exam: 'ACT', q: '40', time: '40 min', spq: '60s', color: '#06b6d4' },
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
            <p className="text-xs text-slate-600 mt-3">Source: College Board (digital SAT format) and ACT Inc. (Enhanced ACT specifications, phased in 2025–2026). Core ACT time excluding Science is roughly 2 hours 5 minutes; adding Science brings it to about 2 hours 45 minutes.</p>
          </section>

          {/* The ACT redesign explainer — new section */}
          <section aria-labelledby="act-redesign-heading">
            <h2 id="act-redesign-heading" className="text-2xl font-bold text-white mb-4">The Enhanced ACT, explained</h2>
            <p className="text-slate-400 leading-relaxed mb-4">
              If you researched the ACT before 2025, most of what you read is now out of date. Here&apos;s what actually changed:
            </p>
            <ul className="space-y-3 text-sm text-slate-400 mb-4">
              <li className="flex gap-2"><span className="text-cyan-400" aria-hidden="true">•</span><span><strong className="text-slate-300">Fewer questions, more time each.</strong> The core question count dropped from 215 to 131, while testing time dropped less sharply — so students get roughly 18–22% more time per question than before.</span></li>
              <li className="flex gap-2"><span className="text-cyan-400" aria-hidden="true">•</span><span><strong className="text-slate-300">Science is optional.</strong> You choose whether to add the 40-question Science section (an extra $4–5 at registration). It no longer counts toward your composite score; instead you get a standalone Science score and a STEM score (Math + Science averaged).</span></li>
              <li className="flex gap-2"><span className="text-cyan-400" aria-hidden="true">•</span><span><strong className="text-slate-300">Math now has 4 answer choices instead of 5.</strong> This slightly improves your odds on a guess and brings Math in line with the other sections.</span></li>
              <li className="flex gap-2"><span className="text-cyan-400" aria-hidden="true">•</span><span><strong className="text-slate-300">Shorter passages.</strong> English and Reading passages were trimmed to reduce fatigue, and the scale itself stayed at 1–36 throughout.</span></li>
              <li className="flex gap-2"><span className="text-cyan-400" aria-hidden="true">•</span><span><strong className="text-slate-300">Both paper and digital remain available.</strong> Unlike the SAT, which is now 100% digital, the ACT still offers a paper option — and unlike the SAT, the ACT is linear, not adaptive.</span></li>
            </ul>
            <p className="text-slate-400 leading-relaxed">
              Should you take Science? Check whether your target colleges require or recommend it — some STEM-heavy schools and military academies still do — and consider it if science is a strength that would raise your application profile. If none of your target schools ask for it, skipping it gets you out of the testing room sooner with no penalty to your composite.
            </p>
          </section>

          {/* Scoring */}
          <section aria-labelledby="scoring-heading">
            <h2 id="scoring-heading" className="text-2xl font-bold text-white mb-4">How SAT and ACT scoring works</h2>
            <p className="text-slate-400 leading-relaxed mb-4">
              The SAT produces a composite score between 400 and 1600, split equally between the Evidence-Based Reading and Writing section and the Math section. Each section is scored on a 200–800 scale. For context, a 1200 composite has historically landed a student in roughly the mid-70s percentile nationally — check the College Board&apos;s current percentile tables for the exact figure for your test year, since the pool of test-takers shifts each year.
            </p>
            <p className="text-slate-400 leading-relaxed mb-4">
              The Enhanced ACT composite is the average of three section scores — English, Math, and Reading — each on a 1–36 scale, rounded to the nearest whole number. Science, if taken, is reported separately and does not affect the composite. A composite around 24 has traditionally been roughly comparable to an SAT composite around 1200, and a composite around 31 has roughly matched an SAT composite around 1400 — treat these as rough concordance benchmarks rather than exact conversions, since the tables are periodically revised.
            </p>

            <div className="bg-indigo-500/10 border border-indigo-500/20 rounded-xl p-5 flex gap-4 items-start">
              <span className="text-xl shrink-0" aria-hidden="true">💡</span>
              <div>
                <p className="text-sm font-semibold text-white mb-1">Superscoring: use it to your advantage</p>
                <p className="text-sm text-slate-400 leading-relaxed">Many colleges superscore both exams — meaning they take your highest section scores across all test dates. If you sit the SAT twice and score 700 Math / 620 EBRW the first time and 680 Math / 680 EBRW the second time, many schools will construct a superscore of 700 + 680 = 1380. ACT&apos;s own official superscore report combines your best English, Math, and Reading scores across attempts, and does not fold in Science even if you took it. Always check each college&apos;s specific policy, since superscoring practices vary and some schools superscore one exam but not the other.</p>
              </div>
            </div>
          </section>

          {/* Content Differences */}
          <section aria-labelledby="content-heading">
            <h2 id="content-heading" className="text-2xl font-bold text-white mb-4">Content and difficulty: SAT vs ACT compared</h2>
            <p className="text-slate-400 leading-relaxed mb-4">
              ACT Science — now optional — remains the single biggest structural difference between the two tests when you choose to take it. It is not a biology or chemistry knowledge test; it tests your ability to read graphs, interpret data, and evaluate competing scientific hypotheses quickly. Students who are strong data readers tend to find it manageable; students who read slowly under pressure often find its pace the hardest part of the ACT.
            </p>
            <p className="text-slate-400 leading-relaxed mb-4">
              SAT Math covers fewer topics than ACT Math but goes deeper. The digital SAT uses a calculator throughout the entire Math section. ACT Math still covers trigonometry and matrices — topics that do not appear on the SAT. If your school hasn&apos;t covered trig yet, the SAT may be the more comfortable choice.
            </p>
            <p className="text-slate-400 leading-relaxed mb-4">
              On reading comprehension, the SAT uses short, single-question passages, so each question is tied to a specific, self-contained piece of evidence. The ACT&apos;s Reading and English sections were shortened in the 2025 redesign but still use longer passages with a wider range of question types than the SAT. Students who prefer zooming in on targeted evidence tend to prefer the SAT; students who read fast and can hold longer texts in mind often score higher on the ACT.
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
                  <li className="flex gap-2"><span aria-hidden="true">✓</span><span>Want the option to opt out of Science entirely</span></li>
                  <li className="flex gap-2"><span aria-hidden="true">✓</span><span>Prefer a predictable, linear (non-adaptive) format</span></li>
                </ul>
              </div>
            </div>
          </section>

          {/* Do colleges require scores again — new content */}
          <section aria-labelledby="required-heading">
            <h2 id="required-heading" className="text-2xl font-bold text-white mb-4">Are SAT and ACT scores required again?</h2>
            <p className="text-slate-400 leading-relaxed mb-4">
              Test-optional policies expanded widely after 2020, but that trend has partly reversed. A number of highly selective universities have reinstated mandatory testing for admission, citing evidence linking test scores to first-year college performance. If you&apos;re applying to highly selective schools, don&apos;t assume &quot;test-optional&quot; still applies everywhere — policies now vary significantly by institution, so check each school&apos;s current admissions requirements directly rather than relying on what was true a year or two ago.
            </p>
            <p className="text-slate-400 leading-relaxed">
              This shift is one more reason to sit for at least one exam early, so you have real scores in hand well before application deadlines regardless of how a given school&apos;s policy shakes out.
            </p>
          </section>

          {/* Which to choose */}
          <section aria-labelledby="choose-heading">
            <h2 id="choose-heading" className="text-2xl font-bold text-white mb-4">How to decide which exam to take</h2>
            <p className="text-slate-400 leading-relaxed mb-4">
              The most reliable method is to sit a full-length official practice test for each exam under timed conditions, then convert your scores to a common scale and see where you perform better. College Board and ACT Inc. both publish free official practice tests — make sure any ACT practice material you use reflects the Enhanced ACT format, since older practice tests still show the retired 4-section, 215-question structure.
            </p>
            <p className="text-slate-400 leading-relaxed mb-4">
              Use a concordance table to compare: a 1200 SAT is broadly comparable to a 24 ACT, and a 1400 SAT to roughly a 31 ACT. If your practice scores diverge significantly, prioritise the exam where you score higher — admissions officers see both as equivalent, so play to your strengths.
            </p>
            <p className="text-slate-400 leading-relaxed">
              If your scores are similar on both, consider logistics: test availability in your region, school-day testing options (some states offer free in-school ACT or SAT), whether you want to opt into ACT Science for a target school, and the essay requirement at your target schools (the ACT&apos;s optional Writing section is separate from the main composite; the digital SAT has no essay option at all).
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
