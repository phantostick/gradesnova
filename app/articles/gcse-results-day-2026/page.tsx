// app/articles/gcse-results-day-2026/page.tsx
import type { Metadata } from 'next';
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'GCSE Results Day 2026: Dates, Times & What to Do | GradesNova',
  description: 'GCSE Results Day 2026 is Thursday 27 August. Find out what time results are released, how to collect them, what to do if grades disappoint, and how grade boundaries work.',
  alternates: { canonical: 'https://gradesnova.com/articles/gcse-results-day-2026' },
  openGraph: {
    title: 'GCSE Results Day 2026: Dates, Times & What to Do',
    description: 'Everything you need to know about GCSE Results Day 2026 — dates, collection times, grade boundaries, and next steps if things go wrong.',
    url: 'https://gradesnova.com/articles/gcse-results-day-2026',
    type: 'article',
    siteName: 'GradesNova',
  },
  robots: { index: true, follow: true },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'GCSE Results Day 2026: Dates, Times & What to Do',
  description: 'A complete guide to GCSE Results Day 2026 covering the official date, what time results are released, grade boundaries, and what to do if your grades are lower than expected.',
  url: 'https://gradesnova.com/articles/gcse-results-day-2026',
  author: { '@type': 'Organization', name: 'GradesNova' },
  publisher: { '@type': 'Organization', name: 'GradesNova', url: 'https://gradesnova.com' },
  dateModified: '2025-05-24',
};

export default function GcseResultsDay2026Page() {
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
                <li className="text-slate-400" aria-current="page">GCSE Results Day 2026</li>
              </ol>
            </nav>
            <div className="flex items-center gap-2 mb-3">
              <span className="text-xs font-semibold uppercase tracking-wider px-2.5 py-1 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">GCSE · 2026</span>
            </div>
            <h1 className="text-3xl sm:text-4xl font-bold text-white leading-tight mb-4">
              GCSE Results Day 2026: Everything You Need to Know
            </h1>
            <p className="text-slate-400 leading-relaxed text-base">
              GCSE Results Day 2026 falls on Thursday 27 August. This guide covers exactly what time results drop, how to collect them, what the grade boundaries mean for your score, and what to do if your results are not what you hoped for.
            </p>
            <div className="flex items-center gap-4 mt-5 text-xs text-slate-500">
              <span>Updated May 2025</span>
              <span>·</span>
              <span>~12 min read</span>
            </div>
          </div>
        </header>

        <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">

          {/* Key stat cards */}
          <div className="grid sm:grid-cols-3 gap-4">
            <div className="bg-[#12141f] border border-white/8 rounded-xl p-4">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-lg" aria-hidden="true">📅</span>
                <span className="text-xs text-slate-400 font-medium">Results Day</span>
              </div>
              <p className="text-2xl font-bold font-mono" style={{ color: '#34d399' }}>27 Aug 2026</p>
              <p className="text-xs text-slate-500 mt-0.5">Thursday — same week as A-Level results</p>
            </div>
            <div className="bg-[#12141f] border border-white/8 rounded-xl p-4">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-lg" aria-hidden="true">🕗</span>
                <span className="text-xs text-slate-400 font-medium">Online access opens</span>
              </div>
              <p className="text-2xl font-bold font-mono" style={{ color: '#34d399' }}>8:00 AM</p>
              <p className="text-xs text-slate-500 mt-0.5">Most school portals; varies by centre</p>
            </div>
            <div className="bg-[#12141f] border border-white/8 rounded-xl p-4">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-lg" aria-hidden="true">📊</span>
                <span className="text-xs text-slate-400 font-medium">Grading scale</span>
              </div>
              <p className="text-2xl font-bold font-mono" style={{ color: '#34d399' }}>9 – 1</p>
              <p className="text-xs text-slate-500 mt-0.5">9 is highest; U is ungraded</p>
            </div>
          </div>

          {/* Date and time */}
          <section aria-labelledby="date-heading">
            <h2 id="date-heading" className="text-2xl font-bold text-white mb-4">When is GCSE Results Day 2026?</h2>
            <p className="text-slate-400 leading-relaxed mb-4">
              GCSE Results Day 2026 is confirmed as <strong className="text-white">Thursday 27 August 2026</strong>. This is the same date as in most recent years — the fourth Thursday of August, one week after A-Level Results Day (Thursday 20 August 2026).
            </p>
            <p className="text-slate-400 leading-relaxed mb-4">
              Results are not released at a single national moment. Most schools make results available from <strong className="text-white">8:00 AM</strong> either in person at school or through an online student portal. Some schools open slightly earlier; a small number open later. Check your school&apos;s communications from June or July 2026 to confirm the exact time and method for your centre.
            </p>
            <p className="text-slate-400 leading-relaxed mb-5">
              If you are collecting in person, bring a form of ID. If a friend or family member is collecting on your behalf, your school will require a signed letter of authorisation — confirm this process with your school in advance.
            </p>

            <div className="overflow-x-auto rounded-xl border border-white/8">
              <table className="w-full text-sm min-w-[420px]" aria-label="Key GCSE and A-Level results dates for 2026">
                <thead>
                  <tr className="bg-white/4 border-b border-white/8">
                    <th scope="col" className="text-left px-4 py-3 text-xs font-semibold text-slate-400 uppercase tracking-wider">Event</th>
                    <th scope="col" className="text-left px-4 py-3 text-xs font-semibold text-slate-400 uppercase tracking-wider">Date</th>
                    <th scope="col" className="text-left px-4 py-3 text-xs font-semibold text-slate-400 uppercase tracking-wider">Notes</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5">
                  {[
                    { event: 'A-Level Results Day 2026', date: 'Thu 20 August 2026', note: 'UCAS Track updates from ~6 AM' },
                    { event: 'GCSE Results Day 2026', date: 'Thu 27 August 2026', note: 'Most schools open from 8 AM' },
                    { event: 'Remarks deadline (clerical check)', date: '~5 Sep 2026', note: 'Varies by board; check early' },
                    { event: 'Remarks deadline (full review)', date: '~18 Sep 2026', note: 'AQA, Edexcel, OCR deadlines differ' },
                    { event: 'Coursework re-mark requests', date: '~25 Sep 2026', note: 'Subject to board rules' },
                  ].map((row, i) => (
                    <tr key={i} className="hover:bg-white/2 transition-colors">
                      <td className="px-4 py-3 text-slate-300 font-medium">{row.event}</td>
                      <td className="px-4 py-3 font-mono text-emerald-400 text-xs">{row.date}</td>
                      <td className="px-4 py-3 text-slate-500 text-xs">{row.note}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-xs text-slate-600 mt-3">Source: Ofqual exam timetable guidance; individual board deadlines confirmed closer to results day. Remark deadlines are estimated based on 2024 and 2025 patterns.</p>
          </section>

          {/* Grade scale */}
          <section aria-labelledby="grades-heading">
            <h2 id="grades-heading" className="text-2xl font-bold text-white mb-4">Understanding the GCSE 9–1 grading scale</h2>
            <p className="text-slate-400 leading-relaxed mb-4">
              GCSEs in England use a 9–1 grading scale, introduced between 2017 and 2020 to replace the old A*–G system. Grade 9 is the highest achievable grade, awarded to the very top performers in each subject — roughly the top 3–5% of entries nationally, depending on subject.
            </p>
            <p className="text-slate-400 leading-relaxed mb-5">
              The key benchmark grades you will hear about most often are as follows. Grade 4 is the government&apos;s standard pass, required for sixth form entry at many schools and often listed as a minimum by employers. Grade 5 is the "strong pass," broadly equivalent to the old grade C/B boundary, and is required for entry to the most competitive sixth forms and A-Level courses. Grade 7 and above corresponds roughly to the old A/A* range.
            </p>

            <div className="overflow-x-auto rounded-xl border border-white/8">
              <table className="w-full text-sm min-w-[400px]" aria-label="GCSE 9 to 1 grade scale with old grade equivalents and benchmarks">
                <thead>
                  <tr className="bg-white/4 border-b border-white/8">
                    <th scope="col" className="text-left px-4 py-3 text-xs font-semibold text-slate-400 uppercase tracking-wider">Grade</th>
                    <th scope="col" className="text-left px-4 py-3 text-xs font-semibold text-slate-400 uppercase tracking-wider">Old equivalent</th>
                    <th scope="col" className="text-left px-4 py-3 text-xs font-semibold text-slate-400 uppercase tracking-wider">Benchmark</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5">
                  {[
                    { grade: '9', old: 'A* (top)', bench: 'Top ~3–5% nationally', color: '#34d399' },
                    { grade: '8', old: 'A*/A', bench: 'High distinction', color: '#34d399' },
                    { grade: '7', old: 'A', bench: 'Distinction', color: '#6366f1' },
                    { grade: '6', old: 'B', bench: 'Merit', color: '#6366f1' },
                    { grade: '5', old: 'B/C', bench: 'Strong pass', color: '#f59e0b' },
                    { grade: '4', old: 'C', bench: 'Standard pass', color: '#f59e0b' },
                    { grade: '3', old: 'D', bench: 'Below standard pass', color: '#94a3b8' },
                    { grade: '2', old: 'E', bench: '', color: '#64748b' },
                    { grade: '1', old: 'F/G', bench: '', color: '#64748b' },
                    { grade: 'U', old: 'U', bench: 'Ungraded', color: '#ef4444' },
                  ].map((row, i) => (
                    <tr key={i} className="hover:bg-white/2 transition-colors">
                      <td className="px-4 py-3 font-mono font-bold text-lg" style={{ color: row.color }}>{row.grade}</td>
                      <td className="px-4 py-3 text-slate-300">{row.old}</td>
                      <td className="px-4 py-3 text-slate-400 text-xs">{row.bench}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-xs text-slate-600 mt-3">Source: Ofqual GCSE grading explainer (2024). Equivalences are approximate; Ofqual does not publish a direct conversion table.</p>
          </section>

          {/* Grade boundaries */}
          <section aria-labelledby="boundaries-heading">
            <h2 id="boundaries-heading" className="text-2xl font-bold text-white mb-4">What are grade boundaries and when are they published?</h2>
            <p className="text-slate-400 leading-relaxed mb-4">
              Grade boundaries are the minimum raw mark required to achieve each grade in a specific exam paper. They are set by each awarding body after the papers have been marked, taking into account the difficulty of that year&apos;s paper and the overall national performance of students.
            </p>
            <p className="text-slate-400 leading-relaxed mb-4">
              Boundaries are published on results day itself — you cannot access them before your results. AQA, Edexcel (Pearson), OCR, and WJEC all release boundaries on their websites from the morning of results day. Once boundaries are published, you can use your raw mark (if your school has shared it) to verify your grade independently.
            </p>
            <p className="text-slate-400 leading-relaxed mb-4">
              Boundaries vary significantly from year to year and between exam series. A grade 5 in GCSE Maths might require 60 out of 80 in one year and 54 out of 80 the following year, depending on paper difficulty. This is intentional — the boundary-setting process is designed to ensure that a grade 5 represents the same standard of attainment regardless of which year a student sits the exam.
            </p>

            <div className="bg-emerald-500/10 border border-emerald-500/20 rounded-xl p-5 flex gap-4 items-start">
              <span className="text-xl shrink-0" aria-hidden="true">💡</span>
              <div>
                <p className="text-sm font-semibold text-white mb-1">Your raw mark is the key number to request</p>
                <p className="text-sm text-slate-400 leading-relaxed">Your results slip shows your grade, not your raw mark. Request your raw mark from your school as soon as possible on results day — you&apos;ll need it to check where you fell relative to grade boundaries and to decide whether a remark is worth pursuing. Schools can usually provide raw marks the same day or within a few days.</p>
              </div>
            </div>
          </section>

          {/* What to do if disappointed */}
          <section aria-labelledby="disappointed-heading">
            <h2 id="disappointed-heading" className="text-2xl font-bold text-white mb-4">What to do if your GCSE results are lower than expected</h2>
            <p className="text-slate-400 leading-relaxed mb-4">
              First: do not make any decisions in the first hour. Sit with your results, look at the grade boundaries relative to your raw mark, and identify exactly which subjects are below your expectations and by how much. A grade 4 when you needed a grade 5 in Maths is a very different situation from a grade 2 when you needed a grade 5.
            </p>
            <p className="text-slate-400 leading-relaxed mb-4">
              If you are one or two marks below a grade boundary, a priority review or a full remark may be worth requesting. A priority review (clerical check) costs around £10–15 per paper and verifies that all pages were marked, marks were added up correctly, and the result was recorded accurately. A full re-mark involves an examiner remarking your paper from scratch, which typically costs £40–60 and takes longer. Both options are initiated through your school, not directly with the board.
            </p>
            <p className="text-slate-400 leading-relaxed mb-4">
              If you did not achieve the grades required for your sixth form place, contact the school immediately — many schools have a process for borderline cases. If your sixth form offer is withdrawn, other local sixth forms and further education colleges typically accept enrolments through August and into September. Do not assume the door is closed; places remain available in most areas well into the new term.
            </p>
            <p className="text-slate-400 leading-relaxed">
              For students who need to resit GCSE English Language or Maths to meet the grade 4 threshold, resit options are available through further education colleges, sixth forms, and private candidates. The November resit series (offered for Maths and English Language only) is the earliest opportunity. Results for November resits are typically released in January.
            </p>
          </section>

          {/* November resits */}
          <section aria-labelledby="resits-heading">
            <h2 id="resits-heading" className="text-2xl font-bold text-white mb-4">GCSE resit options: November series and beyond</h2>
            <p className="text-slate-400 leading-relaxed mb-4">
              Only GCSE English Language and GCSE Maths are offered in the November series. All other GCSE subjects can only be resit in the following May/June series. If you need to resit other subjects, you will typically need to register through a school, college, or as a private candidate by around February of the following year.
            </p>
            <p className="text-slate-400 leading-relaxed mb-4">
              Students in post-16 education who have not yet achieved a grade 4 in GCSE English Language or Maths are legally required to continue studying toward those qualifications. Schools and colleges are obligated to support this. If you are in this position, your sixth form or college will automatically enrol you for the relevant resit course.
            </p>

            <div className="bg-white/4 border border-white/8 rounded-xl p-5 flex gap-4 items-start">
              <span className="text-xl shrink-0" aria-hidden="true">📋</span>
              <div>
                <p className="text-sm font-semibold text-white mb-1">Private candidate resits: what you need to know</p>
                <p className="text-sm text-slate-400 leading-relaxed">If you are not enrolled at a school or college, you can sit GCSEs as a private candidate through an approved exam centre. Costs vary by centre — typically £100–200 per subject including entry fees. Register early: many centres have limited capacity and close entries by February for the May/June series. Search Ofqual&apos;s register of exam centres to find one near you.</p>
              </div>
            </div>
          </section>

          {/* CTA */}
          <div className="bg-[#12141f] border border-emerald-500/20 rounded-2xl p-7 flex gap-5 items-start">
            <div className="text-2xl shrink-0" aria-hidden="true">🎯</div>
            <div>
              <h3 className="text-base font-semibold text-white mb-1">Check your GCSE grade boundaries instantly</h3>
              <p className="text-sm text-slate-400 leading-relaxed mb-3">Enter your raw marks to see exactly which grade you achieved and how close you were to the next boundary — for AQA, Edexcel, OCR, and WJEC, across all subjects.</p>
              <Link href="/exams/gcse" className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white px-5 py-2.5 rounded-xl font-semibold text-sm transition-all hover:shadow-lg hover:-translate-y-0.5">
                Check GCSE Grade Boundaries →
              </Link>
            </div>
          </div>

          {/* Related */}
          <section aria-labelledby="related-heading" className="border-t border-white/8 pt-10">
            <h2 id="related-heading" className="text-sm font-semibold text-slate-500 uppercase tracking-wider mb-4">Related articles</h2>
            <div className="grid sm:grid-cols-2 gap-3">
              {[
                { title: 'A-Level Results Day 2026: Clearing, Grades & Next Steps', href: '/articles/a-level-results-day-2026', color: '#ec4899' },
                { title: 'Do University Offers Account for Grade Boundaries?', href: '/articles/do-university-offers-account-for-grade-boundaries', color: '#6366f1' },
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
