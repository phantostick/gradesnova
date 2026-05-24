import type { Metadata } from 'next';
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Understanding Grade Boundaries: Why Do They Change Every Year? | GradesNova',
  description:
    'A plain-English breakdown of how AQA, Edexcel, OCR and WJEC calculate GCSE and A-Level grade boundaries, why a harder paper means lower boundaries, and how to use past data to set realistic targets.',
  alternates: { canonical: 'https://gradesnova.com/articles/understanding-grade-boundaries-explained' },
  openGraph: {
    title: 'Understanding Grade Boundaries: Why Do They Change Every Year?',
    description: 'How exam boards calculate grade boundaries, why harder papers mean lower marks, and how to use this knowledge to plan your revision.',
    url: 'https://gradesnova.com/articles/understanding-grade-boundaries-explained',
    type: 'article',
    siteName: 'GradesNova',
  },
  robots: { index: true, follow: true },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Understanding Grade Boundaries: Why Do They Change Every Year?',
  description:
    'A breakdown of how exam boards calculate grade boundaries, why a hard paper means lower boundaries, and how statistical modelling helps predict them.',
  url: 'https://gradesnova.com/articles/understanding-grade-boundaries-explained',
  author: { '@type': 'Organization', name: 'GradesNova' },
  publisher: { '@type': 'Organization', name: 'GradesNova', url: 'https://gradesnova.com' },
  dateModified: '2026-05-24',
};

export default function GradeBoundariesExplainedPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <main className="bg-[#0a0c14] min-h-screen text-white">
        <Navbar />

        <header className="bg-[#0d0f1a] border-b border-white/6 py-12 mt-16">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <nav aria-label="Breadcrumb" className="mb-5">
              <ol className="flex items-center gap-2 text-xs text-slate-500">
                <li><Link href="/" className="hover:text-white transition-colors">Home</Link></li>
                <li aria-hidden="true">›</li>
                <li><Link href="/articles" className="hover:text-white transition-colors">Articles</Link></li>
                <li aria-hidden="true">›</li>
                <li className="text-slate-400" aria-current="page">Understanding Grade Boundaries</li>
              </ol>
            </nav>

            <div className="flex items-center gap-3 mb-4">
              <span className="text-xs font-mono uppercase tracking-widest text-emerald-400/70">Explainer · GCSE · A-Level</span>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-white tracking-tight mb-4 leading-tight">
              Understanding Grade Boundaries:<br className="hidden sm:block" /> Why Do They Change Every Year?
            </h1>
            <p className="text-base text-slate-400 leading-relaxed max-w-2xl">
              Every August, students search frantically for grade boundaries before they even have their results. But most don't fully understand what those numbers mean — or why they move. This guide explains the whole system, plainly.
            </p>
            <div className="flex items-center gap-4 mt-5 text-xs text-slate-500">
              <span>Updated May 2026</span>
              <span>·</span>
              <span>8 min read</span>
            </div>
          </div>
        </header>

        <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">

          {/* Section 1 */}
          <section aria-labelledby="what-is-heading">
            <h2 id="what-is-heading" className="text-2xl font-bold text-white mb-4">What is a grade boundary?</h2>
            <div className="space-y-4 text-slate-400 leading-relaxed">
              <p>
                A <strong className="text-white">grade boundary</strong> is the minimum raw mark — the actual number of marks you score on the paper — required to achieve a particular grade. It is not a percentage target. It is not a fixed number. And it is not decided before you sit the exam.
              </p>
              <p>
                For GCSE, boundaries are set on a scale of 1 to 9. For A-Level, they run from E to A*. For every subject and every exam board — AQA, Edexcel, OCR, WJEC — the boundaries are set separately, after all papers are marked.
              </p>
              <div className="bg-[#12141f] border border-white/8 rounded-xl p-5">
                <p className="text-sm font-semibold text-white mb-2">Quick example</p>
                <p className="text-sm text-slate-400">
                  In AQA GCSE Maths Higher 2025, the grade 4 boundary was 63 marks out of 240. That means answering roughly 26% of the paper correctly was enough to pass. In English Language Higher, the grade 4 boundary was 84 out of 160 — about 53%. The subject changes everything.
                </p>
              </div>
            </div>
          </section>

          {/* Section 2 */}
          <section aria-labelledby="why-change-heading">
            <h2 id="why-change-heading" className="text-2xl font-bold text-white mb-4">Why do boundaries change every year?</h2>
            <div className="space-y-4 text-slate-400 leading-relaxed">
              <p>
                The single biggest reason boundaries move is <strong className="text-white">paper difficulty</strong>. If examiners write a harder paper than usual, students will score fewer marks — so the boundaries are lowered to compensate. If the paper is easier, students score more, and boundaries rise.
              </p>
              <p>
                This system is overseen by <strong className="text-white">Ofqual</strong> (in England) and <strong className="text-white">Qualifications Wales</strong>. They use a process called <strong className="text-white">comparable outcomes</strong>, which anchors the overall national grade distribution to prior attainment data from the same cohort. In plain terms: the percentage of students nationally who achieve a grade 7 in GCSE Maths should be broadly similar from year to year — not because boundaries are fixed, but because they are adjusted to reflect paper difficulty.
              </p>
            </div>

            {/* Callout */}
            <div className="mt-6 bg-indigo-500/10 border border-indigo-500/20 rounded-xl p-5 flex gap-4 items-start">
              <span className="text-xl shrink-0" aria-hidden="true">💡</span>
              <div>
                <p className="text-sm font-semibold text-white mb-1">The key insight</p>
                <p className="text-sm text-slate-400 leading-relaxed">
                  A hard paper is not unfair — it just means the grade boundary will be lower. Ofqual's comparable outcomes process means that the proportion of students achieving each grade is protected from year-to-year swings in paper difficulty.
                </p>
              </div>
            </div>
          </section>

          {/* Section 3: Step by step */}
          <section aria-labelledby="how-set-heading">
            <h2 id="how-set-heading" className="text-2xl font-bold text-white mb-6">How boundaries are actually set: step by step</h2>
            <div className="space-y-4">
              {[
                {
                  step: '01',
                  title: 'Papers are marked',
                  body: "Every student's paper is marked by examiners — either human markers or on-screen marking systems. This produces a raw score for each student.",
                  color: '#6366f1',
                },
                {
                  step: '02',
                  title: 'Grade setting meeting',
                  body: 'Senior examiners from the exam board meet to review the paper and a sample of student scripts. They make judgements about what standard of work represents a grade 4, 7, or A, etc.',
                  color: '#a855f7',
                },
                {
                  step: '03',
                  title: 'Statistical modelling',
                  body: 'The exam board runs prior attainment data for the cohort through statistical models. This tells them where boundaries should land to maintain comparable outcomes with previous years.',
                  color: '#06b6d4',
                },
                {
                  step: '04',
                  title: 'Boundaries are fixed',
                  body: 'The final boundaries are agreed and locked. They are embargoed until Results Day — 8:00am — when they are published simultaneously for all schools and students.',
                  color: '#34d399',
                },
                {
                  step: '05',
                  title: 'Results are issued',
                  body: 'Your raw mark is looked up against the boundary table for your specific paper and board. Your grade is determined at that moment — there is no human discretion applied to individual results.',
                  color: '#f59e0b',
                },
              ].map((item) => (
                <div key={item.step} className="bg-[#12141f] border border-white/8 rounded-xl p-5 flex gap-4">
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center text-xs font-bold shrink-0 mt-0.5 font-mono"
                    style={{ backgroundColor: `${item.color}20`, color: item.color }}
                  >
                    {item.step}
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-white mb-1">{item.title}</p>
                    <p className="text-sm text-slate-400 leading-relaxed">{item.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Section 4 */}
          <section aria-labelledby="predict-heading">
            <h2 id="predict-heading" className="text-2xl font-bold text-white mb-4">Can boundaries be predicted in advance?</h2>
            <div className="space-y-4 text-slate-400 leading-relaxed">
              <p>
                Not with precision — because the key variable (paper difficulty) cannot be known until after the exam. However, past boundary data gives you a useful working range. If AQA GCSE Maths Higher grade 7 has required between 155 and 175 marks out of 240 over the past five years, that range is a reasonable planning target for revision.
              </p>
              <p>
                Statistical modelling — the kind exam boards themselves use — can narrow the range further by accounting for cohort attainment trends. GradesNova uses official published boundaries from the most recent year as the reference point for all calculators, updated the moment new data is released each Results Day.
              </p>
              <p>
                For 2026, no one outside the exam boards knows the boundaries yet. They will be released at <strong className="text-white">8:00am on 21 August 2026</strong> for GCSE and <strong className="text-white">13 August 2026</strong> for A-Level.
              </p>
            </div>
          </section>

          {/* Section 5 */}
          <section aria-labelledby="different-boards-heading">
            <h2 id="different-boards-heading" className="text-2xl font-bold text-white mb-4">Why do different exam boards have different boundaries for the same subject?</h2>
            <div className="space-y-4 text-slate-400 leading-relaxed">
              <p>
                AQA, Edexcel, OCR, and WJEC all write their own papers and set their own boundaries independently. There is no coordination between boards on boundary levels. Because each paper is different in difficulty and structure, the raw marks required for each grade will differ — sometimes significantly.
              </p>
              <p>
                This is why you should <strong className="text-white">only ever use boundaries for the specific board your school uses</strong>. An Edexcel grade 9 boundary for Maths Higher applied to an AQA paper will give you a completely wrong estimate.
              </p>
            </div>

            {/* Comparison table */}
            <div className="mt-6 overflow-x-auto">
              <table className="w-full text-sm min-w-[420px]" aria-label="GCSE Maths Higher grade 9 and grade 4 boundaries by board 2025">
                <thead>
                  <tr className="bg-white/4 border-b border-white/8">
                    <th scope="col" className="text-left px-4 py-3 text-xs font-semibold text-slate-400 uppercase tracking-wider">Board</th>
                    <th scope="col" className="text-center px-4 py-3 text-xs font-semibold text-emerald-400 uppercase tracking-wider">Grade 9</th>
                    <th scope="col" className="text-center px-4 py-3 text-xs font-semibold text-amber-400 uppercase tracking-wider">Grade 4</th>
                    <th scope="col" className="text-center px-4 py-3 text-xs font-semibold text-slate-500 uppercase tracking-wider">Max mark</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { board: 'AQA', g9: 219, g4: 63, max: 240 },
                    { board: 'Edexcel', g9: 217, g4: 53, max: 240 },
                    { board: 'OCR', g9: 258, g4: 47, max: 300 },
                    { board: 'WJEC', g9: 196, g4: 27, max: 240 },
                  ].map((row, i) => (
                    <tr key={row.board} className={`border-b border-white/5 last:border-0 ${i % 2 === 0 ? '' : 'bg-white/2'}`}>
                      <td className="px-4 py-2.5 font-medium text-white">{row.board}</td>
                      <td className="px-4 py-2.5 text-center font-mono text-xs text-emerald-400 font-semibold">{row.g9}</td>
                      <td className="px-4 py-2.5 text-center font-mono text-xs text-amber-400 font-semibold">{row.g4}</td>
                      <td className="px-4 py-2.5 text-center font-mono text-xs text-slate-500">{row.max}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <p className="text-xs text-slate-600 mt-2">GCSE Maths Higher tier, June 2025. Note: OCR uses 300 total marks across three papers.</p>
            </div>
          </section>

          {/* Section 6 */}
          <section aria-labelledby="use-this-heading">
            <h2 id="use-this-heading" className="text-2xl font-bold text-white mb-4">How to use this knowledge in your revision</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                {
                  icon: '🎯',
                  title: 'Use past boundaries as a target range',
                  body: 'Look at 3–5 years of boundaries for your subject and board. The range tells you how much the paper can vary. Aim for the top of that range in your revision targets.',
                },
                {
                  icon: '📊',
                  title: 'Think in raw marks, not percentages',
                  body: 'Grade boundaries are always raw marks. Calculate how many marks you need per paper, not what percentage — the papers are different lengths.',
                },
                {
                  icon: '🏫',
                  title: 'Check your specific board',
                  body: 'Your teacher will know which board your school uses. Only use boundaries for that board. Never mix AQA boundaries with an Edexcel paper.',
                },
                {
                  icon: '📅',
                  title: 'Use the calculator on Results Day',
                  body: 'As soon as official 2026 boundaries are published, enter your raw mark into GradesNova to see your exact grade — before opening any envelopes.',
                },
              ].map((tip) => (
                <div key={tip.title} className="bg-[#12141f] border border-white/8 rounded-xl p-5">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-lg" aria-hidden="true">{tip.icon}</span>
                    <h3 className="text-sm font-semibold text-white">{tip.title}</h3>
                  </div>
                  <p className="text-xs text-slate-400 leading-relaxed">{tip.body}</p>
                </div>
              ))}
            </div>
          </section>

          {/* CTA */}
          <div className="bg-[#12141f] border border-emerald-500/20 rounded-2xl p-7 flex gap-5 items-start">
            <div className="text-2xl shrink-0" aria-hidden="true">🏫</div>
            <div>
              <h3 className="text-base font-semibold text-white mb-1">Check your mark now</h3>
              <p className="text-sm text-slate-400 leading-relaxed mb-3">
                Enter your raw mark into the GradesNova GCSE calculator to instantly see your grade based on the latest official 2025 boundaries for AQA, Edexcel, OCR and WJEC.
              </p>
              <Link
                href="/exams/gcse"
                className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white px-5 py-2.5 rounded-xl font-semibold text-sm transition-all hover:shadow-lg hover:-translate-y-0.5"
              >
                GCSE Grade Boundary Calculator →
              </Link>
            </div>
          </div>

          {/* Related */}
          <section aria-labelledby="related-heading" className="border-t border-white/8 pt-10">
            <h2 id="related-heading" className="text-sm font-semibold text-slate-500 uppercase tracking-wider mb-4">Related articles</h2>
            <div className="grid sm:grid-cols-2 gap-3">
              {[
                { title: '5-Year Trends in GCSE Maths Grade Boundaries', href: '/articles/gcse-maths-grade-boundaries-trends', color: '#34d399' },
                { title: 'Which A-Level Science Has the Most Unforgiving Grade Boundaries?', href: '/articles/a-level-sciences-hardest-papers', color: '#ec4899' },
              ].map((a) => (
                <Link
                  key={a.href}
                  href={a.href}
                  className="bg-[#12141f] border border-white/8 rounded-xl p-4 hover:border-white/16 transition-colors group"
                >
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
