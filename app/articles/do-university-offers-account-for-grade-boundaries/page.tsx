// app/articles/do-university-offers-account-for-grade-boundaries/page.tsx
import type { Metadata } from 'next';
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Do University Offers Account for Grade Boundaries? | GradesNova',
  description: 'Do UK universities adjust offers based on grade boundaries? A clear explainer on contextual admissions, how grade boundaries affect offers, and what it means for you.',
  alternates: { canonical: 'https://gradesnova.com/articles/do-university-offers-account-for-grade-boundaries' },
  openGraph: {
    title: 'Do University Offers Account for Grade Boundaries?',
    description: 'How contextual admissions works in the UK, whether grade boundaries affect university offers, and what students need to know.',
    url: 'https://gradesnova.com/articles/do-university-offers-account-for-grade-boundaries',
    type: 'article',
    siteName: 'GradesNova',
  },
  robots: { index: true, follow: true },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Do University Offers Account for Grade Boundaries?',
  description: 'An explainer on contextual admissions in UK universities, how grade boundaries interact with offers, and what students should know about admissions flexibility.',
  url: 'https://gradesnova.com/articles/do-university-offers-account-for-grade-boundaries',
  author: { '@type': 'Organization', name: 'GradesNova' },
  publisher: { '@type': 'Organization', name: 'GradesNova', url: 'https://gradesnova.com' },
  dateModified: '2025-05-24',
};

export default function ContextualAdmissionsPage() {
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
                <li className="text-slate-400" aria-current="page">Grade Boundaries and University Offers</li>
              </ol>
            </nav>
            <div className="flex items-center gap-2 mb-3">
              <span className="text-xs font-semibold uppercase tracking-wider px-2.5 py-1 rounded-full bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">Admissions · A-Level</span>
            </div>
            <h1 className="text-3xl sm:text-4xl font-bold text-white leading-tight mb-4">
              Do University Offers Account for Grade Boundaries? Contextual Admissions Explained
            </h1>
            <p className="text-slate-400 leading-relaxed text-base">
              Grade boundaries change every year, but university offers stay fixed at AAB or ABB regardless. So do universities actually adjust for this — and what is contextual admissions? Here is the honest, specific answer.
            </p>
            <div className="flex items-center gap-4 mt-5 text-xs text-slate-500">
              <span>Updated May 2025</span>
              <span>·</span>
              <span>~11 min read</span>
            </div>
          </div>
        </header>

        <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">

          {/* Stat Cards */}
          <div className="grid sm:grid-cols-3 gap-4">
            <div className="bg-[#12141f] border border-white/8 rounded-xl p-4">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-lg" aria-hidden="true">🏛️</span>
                <span className="text-xs text-slate-400 font-medium">Universities with contextual offers</span>
              </div>
              <p className="text-2xl font-bold font-mono" style={{ color: '#6366f1' }}>100+</p>
              <p className="text-xs text-slate-500 mt-0.5">Including most Russell Group</p>
            </div>
            <div className="bg-[#12141f] border border-white/8 rounded-xl p-4">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-lg" aria-hidden="true">📉</span>
                <span className="text-xs text-slate-400 font-medium">Typical contextual reduction</span>
              </div>
              <p className="text-2xl font-bold font-mono" style={{ color: '#6366f1' }}>1–2 grades</p>
              <p className="text-xs text-slate-500 mt-0.5">e.g. AAA standard → ABB contextual</p>
            </div>
            <div className="bg-[#12141f] border border-white/8 rounded-xl p-4">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-lg" aria-hidden="true">🔍</span>
                <span className="text-xs text-slate-400 font-medium">Grade boundaries set by</span>
              </div>
              <p className="text-2xl font-bold font-mono" style={{ color: '#6366f1' }}>Ofqual</p>
              <p className="text-xs text-slate-500 mt-0.5">Not universities — separate system</p>
            </div>
          </div>

          {/* Core question */}
          <section aria-labelledby="core-heading">
            <h2 id="core-heading" className="text-2xl font-bold text-white mb-4">Do universities adjust their offers based on that year&apos;s grade boundaries?</h2>
            <p className="text-slate-400 leading-relaxed mb-4">
              No — and this is one of the most common points of confusion in UK admissions. University offers are set in advance, typically in January or February for September entry, before that year&apos;s exams have been sat, let alone marked or boundaried. An offer of AAB means AAB regardless of whether the grade boundaries for that year&apos;s papers were higher or lower than the previous year.
            </p>
            <p className="text-slate-400 leading-relaxed mb-4">
              Grade boundaries are set by Ofqual-regulated awarding bodies (AQA, Edexcel, OCR, WJEC) to ensure a grade represents a consistent standard of attainment across years. If a paper was harder in 2026 than in 2025, the grade B boundary might be set 4 marks lower — meaning the same raw mark earns grade B in both years. From a university&apos;s perspective, a grade B is a grade B. The boundary-setting process is designed precisely so that the grade is the comparable unit, not the raw mark.
            </p>
            <p className="text-slate-400 leading-relaxed">
              In short: the boundary system is intended to make grade-based offers fair across cohorts. The mechanism works at the boundary-setting stage, not at the university offer stage.
            </p>
          </section>

          {/* What contextual admissions actually is */}
          <section aria-labelledby="contextual-heading">
            <h2 id="contextual-heading" className="text-2xl font-bold text-white mb-4">What contextual admissions actually means</h2>
            <p className="text-slate-400 leading-relaxed mb-4">
              Contextual admissions is a completely separate policy from grade boundary adjustment. It refers to universities making lower offers — or considering applicants more favourably — to students from disadvantaged backgrounds or underrepresented groups. The rationale is that a student from a low-performing school who achieves ABB may have demonstrated equivalent potential to a student from a top independent school who achieves AAA.
            </p>
            <p className="text-slate-400 leading-relaxed mb-4">
              Contextual flags are applied using data that universities obtain through UCAS or other sources. Common flags include: being in receipt of Free School Meals, living in a low-participation neighbourhood (measured by POLAR or TUNDRA data), attending a state school with below-average attainment, being in local authority care, or being a first-generation university student. You do not apply separately for contextual consideration — universities apply the flag automatically if your data matches their criteria.
            </p>

            <div className="bg-indigo-500/10 border border-indigo-500/20 rounded-xl p-5 flex gap-4 items-start">
              <span className="text-xl shrink-0" aria-hidden="true">💡</span>
              <div>
                <p className="text-sm font-semibold text-white mb-1">You will not always know if you received a contextual offer</p>
                <p className="text-sm text-slate-400 leading-relaxed">Many universities do not explicitly label an offer as contextual. You may simply receive an offer one or two grades lower than the standard offer without explanation. If you are in any of the flagged groups and receive an offer lower than the published standard, it is likely contextual. Check the university&apos;s widening participation pages to see their stated contextual criteria.</p>
              </div>
            </div>
          </section>

          {/* Which universities */}
          <section aria-labelledby="which-universities-heading">
            <h2 id="which-universities-heading" className="text-2xl font-bold text-white mb-4">Which universities offer contextual admissions, and by how much?</h2>
            <p className="text-slate-400 leading-relaxed mb-5">
              Most Russell Group universities now operate contextual admissions schemes, though the criteria, reductions, and transparency vary considerably. Below are published examples from specific institutions — always verify on the university&apos;s own widening participation pages as policies are updated annually.
            </p>

            <div className="overflow-x-auto rounded-xl border border-white/8">
              <table className="w-full text-sm min-w-[480px]" aria-label="Examples of contextual admissions offers at selected UK universities">
                <thead>
                  <tr className="bg-white/4 border-b border-white/8">
                    <th scope="col" className="text-left px-4 py-3 text-xs font-semibold text-slate-400 uppercase tracking-wider">University</th>
                    <th scope="col" className="text-left px-4 py-3 text-xs font-semibold text-slate-400 uppercase tracking-wider">Standard offer (example)</th>
                    <th scope="col" className="text-left px-4 py-3 text-xs font-semibold text-slate-400 uppercase tracking-wider">Contextual offer</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5">
                  {[
                    { uni: 'University of Bristol', standard: 'AAA', contextual: 'ABB (2 grade reduction)' },
                    { uni: 'University of Leeds', standard: 'AAB', contextual: 'ABB (1 grade reduction)' },
                    { uni: 'University of Manchester', standard: 'AAB', contextual: 'ABB (1 grade reduction)' },
                    { uni: 'King&apos;s College London', standard: 'AAB', contextual: 'ABB (1 grade reduction)' },
                    { uni: 'University of Exeter', standard: 'AAB', contextual: 'ABB (1 grade reduction)' },
                    { uni: 'University of Liverpool', standard: 'ABB', contextual: 'BBB (1 grade reduction)' },
                    { uni: 'Oxford (access schemes)', standard: 'Course dependent', contextual: 'Varies; separate foundation year routes' },
                  ].map((row, i) => (
                    <tr key={i} className="hover:bg-white/2 transition-colors">
                      <td className="px-4 py-3 text-slate-300 font-medium">{row.uni}</td>
                      <td className="px-4 py-3 font-mono text-slate-400">{row.standard}</td>
                      <td className="px-4 py-3 font-mono text-indigo-400">{row.contextual}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-xs text-slate-600 mt-3">Source: Individual university widening participation and admissions pages, 2024–25. Examples shown are for indicative courses only; offers vary by subject. Verify directly with each university.</p>
          </section>

          {/* What happens on results day */}
          <section aria-labelledby="results-day-heading">
            <h2 id="results-day-heading" className="text-2xl font-bold text-white mb-4">What happens on results day if you narrowly miss your offer?</h2>
            <p className="text-slate-400 leading-relaxed mb-4">
              Universities do exercise discretion on results day. If you miss your offer by a small margin — one grade, or within a subject where you still performed strongly — the admissions team reviews your full application before making a final decision. This is not guaranteed, and it is more likely at universities that have remaining capacity in your course.
            </p>
            <p className="text-slate-400 leading-relaxed mb-4">
              If you miss your firm offer and your place is initially declined, contact the admissions office directly on results day. Schools can call on behalf of students, which is often more effective. Provide your UCAS number, explain your circumstances clearly, and ask whether a place is still possible. Admissions teams field hundreds of calls on results day, so be concise and have your details ready.
            </p>
            <p className="text-slate-400 leading-relaxed mb-4">
              A grade boundary argument — "I missed by one mark and the boundary was very close" — is unlikely to be decisive in an admissions conversation. However, if you have a genuine case for a remark (your raw mark puts you within 2–3 marks of the next grade boundary), mention that you intend to request a priority review and ask whether the university can hold the decision. Many universities will give you a short window.
            </p>

            <div className="bg-white/4 border border-white/8 rounded-xl p-5 flex gap-4 items-start">
              <span className="text-xl shrink-0" aria-hidden="true">📞</span>
              <div>
                <p className="text-sm font-semibold text-white mb-1">What to say when you call the admissions office</p>
                <p className="text-sm text-slate-400 leading-relaxed">Be brief and specific: "I missed my offer by one grade in [subject]. I am [X marks] below the grade boundary and intend to request a priority review through my school today. Is there any flexibility on my offer, or could you hold the decision pending the remark?" Admissions staff respect candidates who are informed and calm. Avoid starting with an explanation of why you underperformed — lead with the facts and your next steps.</p>
              </div>
            </div>
          </section>

          {/* Predicted grades vs boundaries */}
          <section aria-labelledby="predicted-heading">
            <h2 id="predicted-heading" className="text-2xl font-bold text-white mb-4">How grade boundaries relate to predicted grades and university offers</h2>
            <p className="text-slate-400 leading-relaxed mb-4">
              Predicted grades, which teachers submit to UCAS in autumn of Year 13, are not based on grade boundaries — they are based on the teacher&apos;s assessment of likely performance. Universities use predicted grades to make conditional offers. The grade boundaries are only relevant once the actual papers have been sat and marked.
            </p>
            <p className="text-slate-400 leading-relaxed mb-4">
              One area where grade boundaries become indirectly relevant to predictions is when teachers use past performance benchmarked against published boundary data to estimate likely grades. A student consistently scoring at the grade A boundary in mock exams under past-paper conditions is a strong candidate for a grade A prediction. But the prediction itself is the teacher&apos;s professional judgement, not an automated output from boundary tables.
            </p>
            <p className="text-slate-400 leading-relaxed">
              The most important thing to understand is that the Ofqual boundary-setting system and the university admissions system operate largely independently. Boundaries ensure grade consistency over time; admissions offices use grades (not raw marks or percentiles) as the primary currency of conditional offers. If you want to use raw marks and boundaries to understand your own performance in detail, the GradesNova calculator will give you that picture clearly.
            </p>
          </section>

          {/* CTA */}
          <div className="bg-[#12141f] border border-indigo-500/20 rounded-2xl p-7 flex gap-5 items-start">
            <div className="text-2xl shrink-0" aria-hidden="true">📊</div>
            <div>
              <h3 className="text-base font-semibold text-white mb-1">See exactly where you fell relative to grade boundaries</h3>
              <p className="text-sm text-slate-400 leading-relaxed mb-3">Enter your raw marks to see your grade, how many marks from the next boundary, and how you compare to other students nationally — for all major A-Level boards.</p>
              <Link href="/exams/a-levels" className="inline-flex items-center gap-2 bg-indigo-600 hover:bg-indigo-500 text-white px-5 py-2.5 rounded-xl font-semibold text-sm transition-all hover:shadow-lg hover:-translate-y-0.5">
                Check A-Level Grade Boundaries →
              </Link>
            </div>
          </div>

          {/* Related */}
          <section aria-labelledby="related-heading" className="border-t border-white/8 pt-10">
            <h2 id="related-heading" className="text-sm font-semibold text-slate-500 uppercase tracking-wider mb-4">Related articles</h2>
            <div className="grid sm:grid-cols-2 gap-3">
              {[
                { title: 'A-Level Results Day 2026: Clearing, Grades & Next Steps', href: '/articles/a-level-results-day-2026', color: '#ec4899' },
                { title: 'What UCAS Points Does Each A-Level Grade Give You?', href: '/articles/ucas-points-a-level-grades', color: '#ec4899' },
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
