// app/articles/ucas-points-a-level-grades/page.tsx
import type { Metadata } from 'next';
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'UCAS Points for Each A-Level Grade: Full Table 2025 | GradesNova',
  description: 'Full UCAS Tariff points table for A-Level grades 2025. See exactly how many UCAS points each grade earns, plus AS-Level, EPQ, BTEC, and T-Level equivalents.',
  alternates: { canonical: 'https://gradesnova.com/articles/ucas-points-a-level-grades' },
  openGraph: {
    title: 'UCAS Points for Each A-Level Grade: Full Table 2025',
    description: 'Complete UCAS Tariff points for A-Level, AS-Level, EPQ, BTEC, and T-Level — updated for 2025 entry.',
    url: 'https://gradesnova.com/articles/ucas-points-a-level-grades',
    type: 'article',
    siteName: 'GradesNova',
  },
  robots: { index: true, follow: true },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'UCAS Points for Each A-Level Grade: Full Table 2025',
  description: 'A complete reference for UCAS Tariff points by A-Level grade, including AS-Level, EPQ, BTEC, and T-Level equivalents.',
  url: 'https://gradesnova.com/articles/ucas-points-a-level-grades',
  author: { '@type': 'Organization', name: 'GradesNova' },
  publisher: { '@type': 'Organization', name: 'GradesNova', url: 'https://gradesnova.com' },
  dateModified: '2025-05-24',
};

export default function UcasPointsALevelPage() {
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
                <li className="text-slate-400" aria-current="page">UCAS Points by A-Level Grade</li>
              </ol>
            </nav>
            <div className="flex items-center gap-2 mb-3">
              <span className="text-xs font-semibold uppercase tracking-wider px-2.5 py-1 rounded-full bg-pink-500/10 text-pink-400 border border-pink-500/20">A-Level · UCAS</span>
            </div>
            <h1 className="text-3xl sm:text-4xl font-bold text-white leading-tight mb-4">
              What UCAS Points Does Each A-Level Grade Give You? Full Table 2025
            </h1>
            <p className="text-slate-400 leading-relaxed text-base">
              The UCAS Tariff converts your qualifications into a points score used by universities to set and compare entry requirements. This page has the complete table for A-Level grades, plus AS-Level, EPQ, BTEC, and T-Level equivalents.
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
                <span className="text-lg" aria-hidden="true">🏆</span>
                <span className="text-xs text-slate-400 font-medium">A-Level A* points</span>
              </div>
              <p className="text-2xl font-bold font-mono" style={{ color: '#ec4899' }}>56</p>
              <p className="text-xs text-slate-500 mt-0.5">Highest single A-Level tariff</p>
            </div>
            <div className="bg-[#12141f] border border-white/8 rounded-xl p-4">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-lg" aria-hidden="true">📊</span>
                <span className="text-xs text-slate-400 font-medium">Max from 3 A-Levels</span>
              </div>
              <p className="text-2xl font-bold font-mono" style={{ color: '#ec4899' }}>168</p>
              <p className="text-xs text-slate-500 mt-0.5">Three A* grades (3 × 56)</p>
            </div>
            <div className="bg-[#12141f] border border-white/8 rounded-xl p-4">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-lg" aria-hidden="true">🎓</span>
                <span className="text-xs text-slate-400 font-medium">Typical Russell Group req.</span>
              </div>
              <p className="text-2xl font-bold font-mono" style={{ color: '#ec4899' }}>120–144</p>
              <p className="text-xs text-slate-500 mt-0.5">AAB to AAA equivalent</p>
            </div>
          </div>

          {/* Intro */}
          <section aria-labelledby="intro-heading">
            <h2 id="intro-heading" className="text-2xl font-bold text-white mb-4">How do UCAS Tariff points work for A-Level grades?</h2>
            <p className="text-slate-400 leading-relaxed mb-4">
              The UCAS Tariff is a points system that translates academic grades into a numerical score. Each grade at each qualification level is assigned a fixed number of points. Universities use these points in two ways: to set minimum entry requirements (for example, "112 UCAS points from three A-Levels") and to compare applicants across different qualification types.
            </p>
            <p className="text-slate-400 leading-relaxed mb-4">
              It is important to understand that not all universities use UCAS points as their primary admissions mechanism. The most selective universities — Oxford, Cambridge, Imperial, LSE, and most medical schools — specify exact grade requirements (e.g. A*AA) rather than a points total. UCAS points are more commonly used by universities that take a flexible approach to entry qualifications, accepting a broader mix of A-Levels, BTECs, and T-Levels.
            </p>
            <p className="text-slate-400 leading-relaxed">
              Always check your specific course and university requirements — a points-based requirement and a grades-based requirement are different things, and conflating them can lead to incorrect assumptions about your eligibility.
            </p>
          </section>

          {/* Main A-Level table */}
          <section aria-labelledby="a-level-table-heading">
            <h2 id="a-level-table-heading" className="text-2xl font-bold text-white mb-4">A-Level UCAS Tariff points: full table</h2>
            <p className="text-slate-400 leading-relaxed mb-5">
              The table below shows the UCAS Tariff points for each A-Level grade, as set by UCAS for the 2025 entry cycle. These values have been stable since the 2017 tariff reform.
            </p>
            <div className="overflow-x-auto rounded-xl border border-white/8">
              <table className="w-full text-sm min-w-[360px]" aria-label="UCAS Tariff points for each A-Level grade">
                <thead>
                  <tr className="bg-white/4 border-b border-white/8">
                    <th scope="col" className="text-left px-4 py-3 text-xs font-semibold text-slate-400 uppercase tracking-wider">A-Level Grade</th>
                    <th scope="col" className="text-left px-4 py-3 text-xs font-semibold text-slate-400 uppercase tracking-wider">UCAS Points</th>
                    <th scope="col" className="text-left px-4 py-3 text-xs font-semibold text-slate-400 uppercase tracking-wider">3 A-Levels Total</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5">
                  {[
                    { grade: 'A*', pts: 56, total: 168, color: '#ec4899' },
                    { grade: 'A', pts: 48, total: 144, color: '#ec4899' },
                    { grade: 'B', pts: 40, total: 120, color: '#f59e0b' },
                    { grade: 'C', pts: 32, total: 96, color: '#f59e0b' },
                    { grade: 'D', pts: 24, total: 72, color: '#94a3b8' },
                    { grade: 'E', pts: 16, total: 48, color: '#64748b' },
                  ].map((row) => (
                    <tr key={row.grade} className="hover:bg-white/2 transition-colors">
                      <td className="px-4 py-3 font-mono font-bold text-xl" style={{ color: row.color }}>{row.grade}</td>
                      <td className="px-4 py-3 font-mono font-semibold text-white text-lg">{row.pts}</td>
                      <td className="px-4 py-3 font-mono text-slate-400">{row.total}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-xs text-slate-600 mt-3">Source: UCAS Tariff Tables, 2025 entry. Values unchanged from 2024 entry.</p>
          </section>

          {/* Common combinations */}
          <section aria-labelledby="combos-heading">
            <h2 id="combos-heading" className="text-2xl font-bold text-white mb-4">Common A-Level grade combinations and their UCAS points total</h2>
            <p className="text-slate-400 leading-relaxed mb-5">
              Most university offers are expressed as a combination of three A-Level grades. Here are the most commonly referenced combinations and their total UCAS points.
            </p>
            <div className="overflow-x-auto rounded-xl border border-white/8">
              <table className="w-full text-sm min-w-[380px]" aria-label="Common A-Level grade combinations and UCAS points totals">
                <thead>
                  <tr className="bg-white/4 border-b border-white/8">
                    <th scope="col" className="text-left px-4 py-3 text-xs font-semibold text-slate-400 uppercase tracking-wider">Grade Combination</th>
                    <th scope="col" className="text-left px-4 py-3 text-xs font-semibold text-slate-400 uppercase tracking-wider">UCAS Points</th>
                    <th scope="col" className="text-left px-4 py-3 text-xs font-semibold text-slate-400 uppercase tracking-wider">Typical use</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5">
                  {[
                    { combo: 'A* A* A*', pts: 168, note: 'Medicine, Oxbridge (some courses)', color: '#ec4899' },
                    { combo: 'A* A* A', pts: 160, note: 'Top Russell Group', color: '#ec4899' },
                    { combo: 'A* A A', pts: 152, note: 'Russell Group, competitive courses', color: '#ec4899' },
                    { combo: 'A A A', pts: 144, note: 'Standard Russell Group offer', color: '#f59e0b' },
                    { combo: 'A A B', pts: 136, note: 'Mid-tier Russell Group', color: '#f59e0b' },
                    { combo: 'A B B', pts: 128, note: 'Strong university offers', color: '#f59e0b' },
                    { combo: 'B B B', pts: 120, note: 'Many university entry offers', color: '#f59e0b' },
                    { combo: 'B B C', pts: 112, note: 'Broad range of universities', color: '#94a3b8' },
                    { combo: 'B C C', pts: 104, note: 'Post-92 and many modern universities', color: '#94a3b8' },
                    { combo: 'C C C', pts: 96, note: 'Many open-entry courses', color: '#64748b' },
                  ].map((row, i) => (
                    <tr key={i} className="hover:bg-white/2 transition-colors">
                      <td className="px-4 py-3 font-mono font-semibold" style={{ color: row.color }}>{row.combo}</td>
                      <td className="px-4 py-3 font-mono font-bold text-white">{row.pts}</td>
                      <td className="px-4 py-3 text-slate-400 text-xs">{row.note}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-xs text-slate-600 mt-3">Source: UCAS Tariff Tables 2025; typical use notes are indicative only — always verify with individual course requirements.</p>
          </section>

          {/* AS Level and EPQ */}
          <section aria-labelledby="other-quals-heading">
            <h2 id="other-quals-heading" className="text-2xl font-bold text-white mb-4">AS-Level, EPQ, BTEC, and T-Level UCAS points</h2>
            <p className="text-slate-400 leading-relaxed mb-5">
              Other Level 3 qualifications also earn UCAS Tariff points and count toward your total. Whether universities accept them depends on the course — always check. AS-Levels are now standalone qualifications (not co-taught with A-Levels in most schools), and many universities still count them where a student has completed them.
            </p>
            <div className="overflow-x-auto rounded-xl border border-white/8">
              <table className="w-full text-sm min-w-[440px]" aria-label="UCAS Tariff points for AS-Level, EPQ, BTEC, and T-Level qualifications">
                <thead>
                  <tr className="bg-white/4 border-b border-white/8">
                    <th scope="col" className="text-left px-4 py-3 text-xs font-semibold text-slate-400 uppercase tracking-wider">Qualification</th>
                    <th scope="col" className="text-left px-4 py-3 text-xs font-semibold text-slate-400 uppercase tracking-wider">Grade</th>
                    <th scope="col" className="text-left px-4 py-3 text-xs font-semibold text-slate-400 uppercase tracking-wider">UCAS Points</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5">
                  {[
                    { qual: 'AS-Level', grade: 'A', pts: 20 },
                    { qual: 'AS-Level', grade: 'B', pts: 16 },
                    { qual: 'AS-Level', grade: 'C', pts: 12 },
                    { qual: 'AS-Level', grade: 'D', pts: 10 },
                    { qual: 'AS-Level', grade: 'E', pts: 6 },
                    { qual: 'EPQ (A-Level)', grade: 'A*', pts: 28 },
                    { qual: 'EPQ (A-Level)', grade: 'A', pts: 24 },
                    { qual: 'EPQ (A-Level)', grade: 'B', pts: 20 },
                    { qual: 'BTEC Level 3 Ext. Diploma', grade: 'D*D*D*', pts: 168 },
                    { qual: 'BTEC Level 3 Ext. Diploma', grade: 'D*D*D', pts: 160 },
                    { qual: 'BTEC Level 3 Ext. Diploma', grade: 'DDD', pts: 144 },
                    { qual: 'BTEC Level 3 Ext. Diploma', grade: 'DDM', pts: 128 },
                    { qual: 'T-Level', grade: 'A* (Distinction*)', pts: 168 },
                    { qual: 'T-Level', grade: 'A (Distinction)', pts: 144 },
                    { qual: 'T-Level', grade: 'B (Merit)', pts: 120 },
                  ].map((row, i) => (
                    <tr key={i} className="hover:bg-white/2 transition-colors">
                      <td className="px-4 py-3 text-slate-300">{row.qual}</td>
                      <td className="px-4 py-3 font-mono text-pink-400">{row.grade}</td>
                      <td className="px-4 py-3 font-mono font-bold text-white">{row.pts}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-xs text-slate-600 mt-3">Source: UCAS Tariff Tables 2025 entry. EPQ points shown for the A-Level sized EPQ. T-Level points based on overall grade only; core and occupational specialism graded separately.</p>
          </section>

          {/* How universities use points */}
          <section aria-labelledby="usage-heading">
            <h2 id="usage-heading" className="text-2xl font-bold text-white mb-4">Do all universities use UCAS points to make offers?</h2>
            <p className="text-slate-400 leading-relaxed mb-4">
              No. The most selective universities in the UK — Oxford, Cambridge, Imperial College London, LSE, UCL, and medical schools — express their offers almost exclusively in specific grades (e.g. A*AA), not UCAS points. For these institutions, achieving the right grades in the right subjects matters more than a points total. Substituting subjects to hit a points threshold will not work if the offer specifies subjects.
            </p>
            <p className="text-slate-400 leading-relaxed mb-4">
              Post-92 universities and many modern universities frequently use UCAS points as their primary admissions mechanism, which makes BTEC and T-Level qualifications straightforwardly comparable to A-Levels in their processes. Some universities use a hybrid — a minimum points threshold plus specific grade conditions for certain subjects.
            </p>

            <div className="bg-pink-500/10 border border-pink-500/20 rounded-xl p-5 flex gap-4 items-start">
              <span className="text-xl shrink-0" aria-hidden="true">📌</span>
              <div>
                <p className="text-sm font-semibold text-white mb-1">Always read the full entry requirements — not just the points total</p>
                <p className="text-sm text-slate-400 leading-relaxed">A course might say "112 UCAS points" but also require Maths A-Level at grade B as a separate condition. You can hit 112 points through other combinations and still not meet the offer. Read the full requirements on each university&apos;s course page, not just the headline points figure on comparison sites.</p>
              </div>
            </div>
          </section>

          {/* CTA */}
          <div className="bg-[#12141f] border border-pink-500/20 rounded-2xl p-7 flex gap-5 items-start">
            <div className="text-2xl shrink-0" aria-hidden="true">📐</div>
            <div>
              <h3 className="text-base font-semibold text-white mb-1">Check your A-Level grade boundaries and percentile</h3>
              <p className="text-sm text-slate-400 leading-relaxed mb-3">See exactly how your raw marks translate to grades across AQA, Edexcel, OCR, and WJEC — and find out how your results compare nationally.</p>
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
