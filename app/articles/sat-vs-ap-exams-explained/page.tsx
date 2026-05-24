// app/articles/sat-vs-ap-exams-explained/page.tsx
import type { Metadata } from 'next';
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'SAT vs AP Exams Explained 2025: What's the Difference? | GradesNova',
  description: 'SAT vs AP Exams: understand the difference in purpose, scoring, college credit, and how both fit into your college application strategy. Updated for 2025.',
  alternates: { canonical: 'https://gradesnova.com/articles/sat-vs-ap-exams-explained' },
  openGraph: {
    title: "SAT vs AP Exams Explained 2025: What's the Difference?",
    description: 'SAT vs AP Exams: purpose, scoring, college credit, and how both fit your 2025 application strategy.',
    url: 'https://gradesnova.com/articles/sat-vs-ap-exams-explained',
    type: 'article',
    siteName: 'GradesNova',
  },
  robots: { index: true, follow: true },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: "SAT vs AP Exams Explained 2025: What's the Difference?",
  description: 'A clear explanation of how the SAT and AP Exams differ in purpose, scoring, and value for college admissions.',
  url: 'https://gradesnova.com/articles/sat-vs-ap-exams-explained',
  author: { '@type': 'Organization', name: 'GradesNova' },
  publisher: { '@type': 'Organization', name: 'GradesNova', url: 'https://gradesnova.com' },
  dateModified: '2025-05-24',
};

export default function SatVsApPage() {
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
                <li className="text-slate-400" aria-current="page">SAT vs AP Exams</li>
              </ol>
            </nav>
            <div className="flex items-center gap-2 mb-3">
              <span className="text-xs font-semibold uppercase tracking-wider px-2.5 py-1 rounded-full bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">SAT · AP</span>
            </div>
            <h1 className="text-3xl sm:text-4xl font-bold text-white leading-tight mb-4">
              SAT vs AP Exams Explained: What's the Difference in 2025?
            </h1>
            <p className="text-slate-400 leading-relaxed text-base">
              The SAT and AP exams both come from College Board — but they serve completely different purposes. Here's what each one does, how they interact, and how to use both to strengthen your college application.
            </p>
            <div className="flex items-center gap-4 mt-5 text-xs text-slate-500">
              <span>Updated May 2025</span>
              <span>·</span>
              <span>~9 min read</span>
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
              <p className="text-xs text-slate-500 mt-0.5">Admissions eligibility signal</p>
            </div>
            <div className="bg-[#12141f] border border-white/8 rounded-xl p-4">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-lg" aria-hidden="true">🎓</span>
                <span className="text-xs text-slate-400 font-medium">AP Score Range</span>
              </div>
              <p className="text-2xl font-bold font-mono" style={{ color: '#34d399' }}>1–5</p>
              <p className="text-xs text-slate-500 mt-0.5">Subject mastery; may earn credit</p>
            </div>
            <div className="bg-[#12141f] border border-white/8 rounded-xl p-4">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-lg" aria-hidden="true">📚</span>
                <span className="text-xs text-slate-400 font-medium">AP Subjects Available</span>
              </div>
              <p className="text-2xl font-bold font-mono" style={{ color: '#f59e0b' }}>38</p>
              <p className="text-xs text-slate-500 mt-0.5">As of 2024–25 academic year</p>
            </div>
          </div>

          {/* Overview */}
          <section aria-labelledby="overview-heading">
            <h2 id="overview-heading" className="text-2xl font-bold text-white mb-4">SAT vs AP Exams: two completely different roles</h2>
            <p className="text-slate-400 leading-relaxed mb-4">
              The SAT measures general college readiness across reading, writing, and math. It's a standardised aptitude test used to signal to colleges whether an applicant can handle academic work at university level. You take the SAT once or twice (sometimes more) and submit your score as part of your application.
            </p>
            <p className="text-slate-400 leading-relaxed mb-4">
              AP Exams (Advanced Placement) are subject-specific achievement tests. You take an AP Exam at the end of an AP course — courses that follow a College Board curriculum, offered at many US high schools. A score of 3, 4, or 5 can earn you college credit or advanced placement (allowing you to skip introductory courses) at many universities.
            </p>
            <p className="text-slate-400 leading-relaxed">
              Both come from College Board, but their purposes don't overlap. The SAT is about proving you deserve a place at college; AP Exams are about demonstrating mastery of specific subjects, which can affect your course selection once you arrive.
            </p>
          </section>

          {/* Comparison Table */}
          <section aria-labelledby="comparison-heading">
            <h2 id="comparison-heading" className="text-2xl font-bold text-white mb-4">SAT vs AP Exams: key differences at a glance</h2>
            <div className="overflow-x-auto rounded-xl border border-white/8">
              <table className="w-full text-sm min-w-[480px]" aria-label="SAT and AP Exam comparison table">
                <thead>
                  <tr className="bg-white/4 border-b border-white/8">
                    <th scope="col" className="text-left px-4 py-3 text-xs font-semibold text-slate-400 uppercase tracking-wider">Feature</th>
                    <th scope="col" className="text-left px-4 py-3 text-xs font-semibold text-slate-400 uppercase tracking-wider">SAT</th>
                    <th scope="col" className="text-left px-4 py-3 text-xs font-semibold text-slate-400 uppercase tracking-wider">AP Exams</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5">
                  {[
                    { f: 'Purpose', sat: 'College admissions eligibility', ap: 'Subject achievement + potential credit' },
                    { f: 'Score scale', sat: '400–1600', ap: '1–5 per subject' },
                    { f: 'Number of exams', sat: 'One test (two sections)', ap: '38 subjects available' },
                    { f: 'When taken', sat: 'Anytime (year-round dates)', ap: 'Once per year (May)' },
                    { f: 'Test duration', sat: '2h 14m (digital)', ap: '2–3h depending on subject' },
                    { f: 'Earns college credit', sat: 'No', ap: 'Yes, at many colleges (score 3+)' },
                    { f: 'Required for admission', sat: 'Often (test-optional varies)', ap: 'No (but strengthens application)' },
                    { f: 'Cost (US, approx.)', sat: '$60 per sitting', ap: '$97 per exam (2025)' },
                  ].map((row, i) => (
                    <tr key={i} className="hover:bg-white/2 transition-colors">
                      <td className="px-4 py-3 text-slate-300 font-medium">{row.f}</td>
                      <td className="px-4 py-3 text-slate-400">{row.sat}</td>
                      <td className="px-4 py-3 text-slate-400">{row.ap}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-xs text-slate-600 mt-3">Sources: College Board SAT (2024 digital format); College Board AP Program (2024–25 exam year).</p>
          </section>

          {/* AP Scores and College Credit */}
          <section aria-labelledby="credit-heading">
            <h2 id="credit-heading" className="text-2xl font-bold text-white mb-4">How AP scores work — and when they earn college credit</h2>
            <p className="text-slate-400 leading-relaxed mb-4">
              AP Exams are scored on a 1–5 scale. A score of 5 is the highest and is awarded to roughly 10–20% of exam takers depending on the subject. Most colleges award credit or advanced standing for scores of 3 and above, though selective schools (MIT, Yale, Stanford) typically require a 4 or 5.
            </p>
            <p className="text-slate-400 leading-relaxed mb-4">
              It's essential to check each college's AP credit policy before assuming a score of 3 qualifies you. Policies vary significantly — some schools award full course credit, others grant placement into a higher-level course without credit, and some (particularly the most selective) accept AP scores primarily as a signal of academic rigour rather than as a basis for credit.
            </p>

            <div className="overflow-x-auto rounded-xl border border-white/8 mb-4">
              <table className="w-full text-sm min-w-[420px]" aria-label="AP score meanings and typical college credit thresholds">
                <thead>
                  <tr className="bg-white/4 border-b border-white/8">
                    <th scope="col" className="text-left px-4 py-3 text-xs font-semibold text-slate-400 uppercase tracking-wider">AP Score</th>
                    <th scope="col" className="text-left px-4 py-3 text-xs font-semibold text-slate-400 uppercase tracking-wider">Qualification</th>
                    <th scope="col" className="text-left px-4 py-3 text-xs font-semibold text-slate-400 uppercase tracking-wider">Typical Credit Policy</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5">
                  {[
                    { score: '5', qual: 'Extremely well qualified', credit: 'Credit at nearly all colleges', color: '#34d399' },
                    { score: '4', qual: 'Well qualified', credit: 'Credit at most colleges', color: '#6366f1' },
                    { score: '3', qual: 'Qualified', credit: 'Credit at many colleges; check policy', color: '#f59e0b' },
                    { score: '2', qual: 'Possibly qualified', credit: 'Rarely earns credit', color: '#94a3b8' },
                    { score: '1', qual: 'No recommendation', credit: 'Does not earn credit', color: '#64748b' },
                  ].map((row, i) => (
                    <tr key={i} className="hover:bg-white/2 transition-colors">
                      <td className="px-4 py-3 font-mono font-bold" style={{ color: row.color }}>{row.score}</td>
                      <td className="px-4 py-3 text-slate-300">{row.qual}</td>
                      <td className="px-4 py-3 text-slate-400">{row.credit}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-xs text-slate-600 mt-3">Source: College Board AP Score Descriptors (2024); individual college policies vary.</p>
          </section>

          {/* How they work together */}
          <section aria-labelledby="together-heading">
            <h2 id="together-heading" className="text-2xl font-bold text-white mb-4">How the SAT and AP Exams work together in your application</h2>
            <p className="text-slate-400 leading-relaxed mb-4">
              For college admissions, the SAT establishes baseline eligibility — it's the broad filter. AP Exams signal intellectual depth and course rigour — they're the detail. Admissions officers typically look at both. A strong SAT score (1400+) paired with several AP Exams (particularly in your area of intended study) tells a consistent story: this student can handle rigorous academics.
            </p>
            <p className="text-slate-400 leading-relaxed mb-4">
              The number of AP Exams you take matters less than the scores. Three or four AP Exams with scores of 4 or 5 are more valuable to your application than seven or eight AP Exams with mixed results. Prioritise subjects relevant to your intended major — a prospective Engineering student with AP Calculus BC and AP Physics C scores of 5 sends a clear signal.
            </p>

            <div className="bg-indigo-500/10 border border-indigo-500/20 rounded-xl p-5 flex gap-4 items-start">
              <span className="text-xl shrink-0" aria-hidden="true">💡</span>
              <div>
                <p className="text-sm font-semibold text-white mb-1">Test-optional doesn&apos;t mean AP-optional</p>
                <p className="text-sm text-slate-400 leading-relaxed">Many colleges went test-optional after 2020 and have maintained that policy into 2025. Under test-optional policies, a strong SAT score remains a positive signal if submitted — but AP Exam scores become even more valuable as an objective academic achievement metric. Even at test-optional schools, submitting strong AP scores is almost always beneficial.</p>
              </div>
            </div>
          </section>

          {/* SAT Subject Tests note */}
          <section aria-labelledby="subject-tests-heading">
            <h2 id="subject-tests-heading" className="text-2xl font-bold text-white mb-4">What happened to SAT Subject Tests?</h2>
            <p className="text-slate-400 leading-relaxed mb-4">
              College Board discontinued SAT Subject Tests in 2021. Before their elimination, SAT Subject Tests played a role similar to AP Exams — they measured proficiency in specific subjects like Math Level 2, Biology, or US History. AP Exams now fully fill that role. If you are researching admissions requirements and see references to "SAT II" scores, those requirements no longer exist and AP scores are the relevant alternative where subject-level achievement needs to be demonstrated.
            </p>
          </section>

          {/* CTA */}
          <div className="bg-[#12141f] border border-indigo-500/20 rounded-2xl p-7 flex gap-5 items-start">
            <div className="text-2xl shrink-0" aria-hidden="true">🎯</div>
            <div>
              <h3 className="text-base font-semibold text-white mb-1">Check your SAT score percentile</h3>
              <p className="text-sm text-slate-400 leading-relaxed mb-3">Enter your SAT composite or section scores to see your exact national percentile and how you compare to admitted students at your target colleges — free, instant, no account needed.</p>
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
                { title: 'SAT vs ACT: Complete Comparison', href: '/articles/sat-vs-act-complete-comparison', color: '#6366f1' },
                { title: 'ACT vs SAT Difficulty Comparison', href: '/articles/act-vs-sat-difficulty-comparison', color: '#06b6d4' },
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
