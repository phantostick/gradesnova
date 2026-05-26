// app/articles/a-level-results-day-2026/page.tsx
import type { Metadata } from 'next';
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'A-Level Results Day 2026: Clearing, Grades & Next Steps | GradesNova',
  description: 'A-Level Results Day 2026 is Thursday 20 August. Everything on clearing, grade boundaries, UCAS Track, what to do if you miss your offer, and how to appeal.',
  alternates: { canonical: 'https://gradesnova.com/articles/a-level-results-day-2026' },
  openGraph: {
    title: 'A-Level Results Day 2026: Clearing, Grades & Next Steps',
    description: 'A-Level Results Day 2026 — dates, clearing, grade boundaries, UCAS Track, and exactly what to do if your results disappoint.',
    url: 'https://gradesnova.com/articles/a-level-results-day-2026',
    type: 'article',
    siteName: 'GradesNova',
  },
  robots: { index: true, follow: true },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'A-Level Results Day 2026: Clearing, Grades & Next Steps',
  description: 'The complete guide to A-Level Results Day 2026 covering the date, UCAS Track, clearing, appeals, and what to do if you miss your university offer.',
  url: 'https://gradesnova.com/articles/a-level-results-day-2026',
  author: { '@type': 'Organization', name: 'GradesNova' },
  publisher: { '@type': 'Organization', name: 'GradesNova', url: 'https://gradesnova.com' },
  dateModified: '2025-05-24',
};

export default function ALevelResultsDay2026Page() {
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
                <li className="text-slate-400" aria-current="page">A-Level Results Day 2026</li>
              </ol>
            </nav>
            <div className="flex items-center gap-2 mb-3">
              <span className="text-xs font-semibold uppercase tracking-wider px-2.5 py-1 rounded-full bg-pink-500/10 text-pink-400 border border-pink-500/20">A-Level · 2026</span>
            </div>
            <h1 className="text-3xl sm:text-4xl font-bold text-white leading-tight mb-4">
              A-Level Results Day 2026: Clearing, Grades & Next Steps
            </h1>
            <p className="text-slate-400 leading-relaxed text-base">
              A-Level Results Day 2026 is Thursday 20 August. Here is everything you need to know — when UCAS Track updates, how clearing works, what to do if you miss your offer, and how to appeal a grade.
            </p>
            <div className="flex items-center gap-4 mt-5 text-xs text-slate-500">
              <span>Updated May 2025</span>
              <span>·</span>
              <span>~13 min read</span>
            </div>
          </div>
        </header>

        <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">

          {/* Stat Cards */}
          <div className="grid sm:grid-cols-3 gap-4">
            <div className="bg-[#12141f] border border-white/8 rounded-xl p-4">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-lg" aria-hidden="true">📅</span>
                <span className="text-xs text-slate-400 font-medium">Results Day</span>
              </div>
              <p className="text-2xl font-bold font-mono" style={{ color: '#ec4899' }}>20 Aug 2026</p>
              <p className="text-xs text-slate-500 mt-0.5">Thursday — one week before GCSEs</p>
            </div>
            <div className="bg-[#12141f] border border-white/8 rounded-xl p-4">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-lg" aria-hidden="true">🕕</span>
                <span className="text-xs text-slate-400 font-medium">UCAS Track opens</span>
              </div>
              <p className="text-2xl font-bold font-mono" style={{ color: '#ec4899' }}>~6:00 AM</p>
              <p className="text-xs text-slate-500 mt-0.5">Historically from around 6 AM</p>
            </div>
            <div className="bg-[#12141f] border border-white/8 rounded-xl p-4">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-lg" aria-hidden="true">📞</span>
                <span className="text-xs text-slate-400 font-medium">Clearing opens</span>
              </div>
              <p className="text-2xl font-bold font-mono" style={{ color: '#ec4899' }}>~8:00 AM</p>
              <p className="text-xs text-slate-500 mt-0.5">Phone lines open at most universities</p>
            </div>
          </div>

          {/* Date and timeline */}
          <section aria-labelledby="date-heading">
            <h2 id="date-heading" className="text-2xl font-bold text-white mb-4">When is A-Level Results Day 2026?</h2>
            <p className="text-slate-400 leading-relaxed mb-4">
              A-Level Results Day 2026 is <strong className="text-white">Thursday 20 August 2026</strong>. Results are not published at a single national time — there are two separate moments that matter. UCAS Track, the online system where your university decisions are confirmed, has historically updated from around 6:00 AM. Your school will make physical results available from around 8:00 AM, though exact times vary by centre.
            </p>
            <p className="text-slate-400 leading-relaxed mb-4">
              Many students check UCAS Track from their phone before arriving at school. If your Track shows your firm choice as "Unconditional" or "Offer confirmed," your place is secured. If it shows "Unsuccessful" or "Offer declined by institution," you are in clearing regardless of what your results slip says — the grade conditions were not met as the university recorded them.
            </p>

            <div className="overflow-x-auto rounded-xl border border-white/8">
              <table className="w-full text-sm min-w-[440px]" aria-label="A-Level Results Day 2026 timeline of key events">
                <thead>
                  <tr className="bg-white/4 border-b border-white/8">
                    <th scope="col" className="text-left px-4 py-3 text-xs font-semibold text-slate-400 uppercase tracking-wider">Time</th>
                    <th scope="col" className="text-left px-4 py-3 text-xs font-semibold text-slate-400 uppercase tracking-wider">Event</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5">
                  {[
                    { time: '~6:00 AM', event: 'UCAS Track updates — check your university decision first' },
                    { time: '~8:00 AM', event: 'Schools open; results slips available; clearing lines open' },
                    { time: '8:00 AM+', event: 'Awarding body grade boundary documents published online' },
                    { time: 'All day', event: 'Adjustment opens for students who exceeded their offer' },
                    { time: 'All day', event: 'Clearing hotlines at universities fully staffed' },
                    { time: '~5 Sep', event: 'Priority review (clerical check) deadline — approximate' },
                    { time: '~18 Sep', event: 'Full re-mark request deadline — approximate' },
                  ].map((row, i) => (
                    <tr key={i} className="hover:bg-white/2 transition-colors">
                      <td className="px-4 py-3 font-mono text-pink-400 text-xs whitespace-nowrap">{row.time}</td>
                      <td className="px-4 py-3 text-slate-300">{row.event}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-xs text-slate-600 mt-3">Times are based on 2024 and 2025 patterns. UCAS and awarding bodies confirm exact timings in August 2026.</p>
          </section>

          {/* If you meet your offer */}
          <section aria-labelledby="met-heading">
            <h2 id="met-heading" className="text-2xl font-bold text-white mb-4">If you meet or exceed your university offer</h2>
            <p className="text-slate-400 leading-relaxed mb-4">
              If UCAS Track confirms your firm choice, your university place is secured. You will receive joining instructions — typically by email — from your university within hours to days. Keep your student email address accessible and check it regularly throughout August.
            </p>
            <p className="text-slate-400 leading-relaxed mb-4">
              If you exceeded your firm offer — for example, you needed AAB and achieved AAA — you may be eligible for <strong className="text-white">Adjustment</strong>. Adjustment allows you to apply to a higher-tariff university while holding your existing confirmed place as a safety net. It runs for five calendar days from results day and is operated through UCAS. You contact universities directly; they are not obliged to consider you, but many do take Adjustment applicants. This is a low-risk process: your existing place remains confirmed unless you explicitly release it.
            </p>

            <div className="bg-pink-500/10 border border-pink-500/20 rounded-xl p-5 flex gap-4 items-start">
              <span className="text-xl shrink-0" aria-hidden="true">💡</span>
              <div>
                <p className="text-sm font-semibold text-white mb-1">Adjustment: register first, then call</p>
                <p className="text-sm text-slate-400 leading-relaxed">To use Adjustment, you must first register for it in UCAS Track — it does not activate automatically. Once registered, call universities directly with your UCAS number and predicted grades. Adjustment places are limited and fill quickly at popular courses, so act on the morning of results day if you intend to use it.</p>
              </div>
            </div>
          </section>

          {/* If you miss your offer */}
          <section aria-labelledby="missed-heading">
            <h2 id="missed-heading" className="text-2xl font-bold text-white mb-4">If you miss your offer: how clearing works</h2>
            <p className="text-slate-400 leading-relaxed mb-4">
              Clearing is UCAS&apos;s system for matching applicants who do not have a confirmed university place with courses that still have vacancies. It opens on results day and runs until October. In 2025, over 74,000 students entered university through clearing — it is not a last resort; it is a well-established route.
            </p>
            <p className="text-slate-400 leading-relaxed mb-4">
              The process works as follows. You find a clearing vacancy — universities publish these on their websites and on the UCAS search tool. You call the university&apos;s clearing hotline with your UCAS Personal ID, your results, and your clearing number (visible in UCAS Track once you enter clearing). If the university offers you a place verbally, you add it in UCAS Track as a "clearing choice" and the university confirms it. Do not accept a verbal offer without adding it to Track — it is not binding until it appears there.
            </p>
            <p className="text-slate-400 leading-relaxed mb-4">
              When researching clearing courses, be strategic. A course at a university slightly below your original choice may be a better fit than a scramble for a similar course at a similar institution. Consider: do you actually want to study this subject for three to four years? Does the university have strong placement or graduate employment rates for this course? Clearing is also a legitimate moment to reconsider your subject entirely.
            </p>
            <p className="text-slate-400 leading-relaxed">
              If you decide not to go through clearing this cycle, you can withdraw from UCAS and reapply the following year with stronger predicted or actual grades. A gap year is not a disadvantage at the vast majority of UK universities.
            </p>
          </section>

          {/* Remarks and appeals */}
          <section aria-labelledby="remarks-heading">
            <h2 id="remarks-heading" className="text-2xl font-bold text-white mb-4">Appealing your A-Level grade: reviews and remarks</h2>
            <p className="text-slate-400 leading-relaxed mb-4">
              If you believe a grade does not reflect your performance, you can request a review through your school. There are two main options. A priority review (clerical check) verifies that marks were totalled correctly and all pages were marked — it does not involve re-marking. A full re-mark involves an examiner re-marking your script from scratch.
            </p>
            <p className="text-slate-400 leading-relaxed mb-4">
              Priority reviews typically cost around £15–25 per paper and have quick turnaround — results are often available before university enrolment deadlines. Full re-marks cost £40–80 per paper and take longer. Both must be requested through your school. Your school has until the awarding body&apos;s deadline to submit — typically mid-September — so act quickly.
            </p>
            <p className="text-slate-400 leading-relaxed mb-4">
              Most universities will hold your place pending a remark if you contact them on results day and explain the situation. Get your school to call or email the university directly — a school-backed request carries more weight. Do not assume your place is gone without making contact.
            </p>

            <div className="bg-white/4 border border-white/8 rounded-xl p-5 flex gap-4 items-start">
              <span className="text-xl shrink-0" aria-hidden="true">⚠️</span>
              <div>
                <p className="text-sm font-semibold text-white mb-1">Grades can go down as well as up on re-mark</p>
                <p className="text-sm text-slate-400 leading-relaxed">A full re-mark is not guaranteed to improve your grade — in some cases, re-marks result in a lower grade. Before requesting a full re-mark, check your raw mark against the grade boundary. If you are more than 5–6 marks above the lower boundary of your grade, a re-mark is unlikely to lift you to the next grade and carries risk. A priority clerical check is lower-risk and worth doing first.</p>
              </div>
            </div>
          </section>

          {/* Gap year */}
          <section aria-labelledby="gap-heading">
            <h2 id="gap-heading" className="text-2xl font-bold text-white mb-4">Considering a gap year or resitting A-Levels</h2>
            <p className="text-slate-400 leading-relaxed mb-4">
              Students who do not secure a place through clearing, or who choose not to, can defer entry by reapplying through UCAS in the next cycle (applications open in September, with a January deadline for most courses). If you intend to resit A-Level papers, you can do so the following summer as an external or private candidate, or by returning to a sixth form or college.
            </p>
            <p className="text-slate-400 leading-relaxed">
              A gap year, when spent purposefully — work experience, travel, volunteering — is viewed neutrally by the vast majority of UK universities. UCAS personal statements for the following year&apos;s cycle should address what you did during the gap year and what you learned. There is no inherent disadvantage to applying a year later with stronger or retaken grades.
            </p>
          </section>

          {/* CTA */}
          <div className="bg-[#12141f] border border-pink-500/20 rounded-2xl p-7 flex gap-5 items-start">
            <div className="text-2xl shrink-0" aria-hidden="true">📊</div>
            <div>
              <h3 className="text-base font-semibold text-white mb-1">Check your A-Level grade boundaries</h3>
              <p className="text-sm text-slate-400 leading-relaxed mb-3">Enter your raw marks to see exactly where you fell relative to each grade boundary — and how many marks away from the next grade you were. Covers AQA, Edexcel, OCR, and WJEC.</p>
              <Link href="/exams/a-levels" className="inline-flex items-center gap-2 bg-pink-600 hover:bg-pink-500 text-white px-5 py-2.5 rounded-xl font-semibold text-sm transition-all hover:shadow-lg hover:-translate-y-0.5">
                Check A-Level Grade Boundaries →
              </Link>
            </div>
          </div>

          {/* Related */}
          <section aria-labelledby="related-heading" className="border-t border-white/8 pt-10">
            <h2 id="related-heading" className="text-sm font-semibold text-slate-500 uppercase tracking-wider mb-4">Related articles</h2>
            <div className="grid sm:grid-cols-2 gap-3">
              {[
                { title: 'GCSE Results Day 2026: Everything You Need to Know', href: '/articles/gcse-results-day-2026', color: '#34d399' },
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
