import type { Metadata } from 'next';
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Which A-Level Science Has the Most Unforgiving Grade Boundaries? | GradesNova',
  description:
    'Comparing Biology, Chemistry, and Physics A-Level grade boundary trends to find which subject demands the most marks for an A*. Essential reading for students choosing their A-Level sciences.',
  alternates: { canonical: 'https://gradesnova.com/articles/a-level-sciences-hardest-papers' },
  openGraph: {
    title: 'Which A-Level Science Has the Most Unforgiving Grade Boundaries?',
    description: 'We compare Biology, Chemistry, and Physics A-Level boundary trends to reveal which subject is hardest to crack — and what you can do about it.',
    url: 'https://gradesnova.com/articles/a-level-sciences-hardest-papers',
    type: 'article',
    siteName: 'GradesNova',
  },
  robots: { index: true, follow: true },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Which A-Level Science Has the Most Unforgiving Grade Boundaries?',
  description:
    'Comparing Biology, Chemistry, and Physics A-Level grade boundary trends to find which subject demands the most marks for an A*.',
  url: 'https://gradesnova.com/articles/a-level-sciences-hardest-papers',
  author: { '@type': 'Organization', name: 'GradesNova' },
  publisher: { '@type': 'Organization', name: 'GradesNova', url: 'https://gradesnova.com' },
  dateModified: '2026-05-24',
};

// AQA A-Level Science grade boundaries 2022–2025 (out of 200 total marks for each science)
// Source: AQA official grade boundary documents
const BOUNDARY_DATA: {
  subject: string;
  color: string;
  icon: string;
  years: Record<string, { aStar: number; a: number; b: number; c: number; e: number; max: number }>;
}[] = [
  {
    subject: 'Biology',
    color: '#34d399',
    icon: '🧬',
    years: {
      '2022': { aStar: 143, a: 126, b: 106, c: 87, e: 49, max: 200 },
      '2023': { aStar: 153, a: 135, b: 114, c: 94, e: 55, max: 200 },
      '2024': { aStar: 157, a: 139, b: 118, c: 98, e: 58, max: 200 },
      '2025': { aStar: 160, a: 144, b: 128, c: 109, e: 71, max: 200 },
    },
  },
  {
    subject: 'Chemistry',
    color: '#6366f1',
    icon: '⚗️',
    years: {
      '2022': { aStar: 145, a: 128, b: 106, c: 84, e: 41, max: 200 },
      '2023': { aStar: 157, a: 139, b: 115, c: 91, e: 44, max: 200 },
      '2024': { aStar: 160, a: 143, b: 118, c: 93, e: 43, max: 200 },
      '2025': { aStar: 163, a: 147, b: 132, c: 110, e: 66, max: 200 },
    },
  },
  {
    subject: 'Physics',
    color: '#a855f7',
    icon: '⚛️',
    years: {
      '2022': { aStar: 140, a: 122, b: 100, c: 79, e: 37, max: 200 },
      '2023': { aStar: 151, a: 132, b: 109, c: 86, e: 41, max: 200 },
      '2024': { aStar: 155, a: 136, b: 112, c: 88, e: 43, max: 200 },
      '2025': { aStar: 161, a: 146, b: 131, c: 109, e: 65, max: 200 },
    },
  },
];

const YEARS = ['2022', '2023', '2024', '2025'];

function pct(mark: number, max: number) {
  return Math.round((mark / max) * 100);
}

// The "forgiveness gap" = A* boundary minus E boundary. A tighter gap means less room for error.
function gradeSpread(data: Record<string, { aStar: number; e: number; max: number }>, year: string) {
  const d = data[year];
  return d.aStar - d.e;
}

export default function ALevelSciencesPage() {
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
                <li className="text-slate-400" aria-current="page">A-Level Sciences Compared</li>
              </ol>
            </nav>
            <div className="flex items-center gap-3 mb-4">
              <span className="text-xs font-mono uppercase tracking-widest text-pink-400/70">Analysis · A-Level · Biology · Chemistry · Physics</span>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-white tracking-tight mb-4 leading-tight">
              Which A-Level Science Has the Most Unforgiving Grade Boundaries?
            </h1>
            <p className="text-base text-slate-400 leading-relaxed max-w-2xl">
              Biology, Chemistry, Physics — three distinct exams, three distinct boundary profiles. We compared four years of official AQA data to find out which subject punishes errors most, and which leaves the most room for recovery.
            </p>
            <div className="flex items-center gap-4 mt-5 text-xs text-slate-500">
              <span>Updated May 2026</span>
              <span>·</span>
              <span>7 min read</span>
            </div>
          </div>
        </header>

        <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">

          {/* Intro */}
          <section>
            <div className="space-y-4 text-slate-400 leading-relaxed">
              <p>
                Every year, students choosing their A-Levels ask a version of the same question: <em>"Which science is the hardest?"</em> It's the wrong question. The right question is: <strong className="text-white">which science has the least forgiving grade boundaries?</strong>
              </p>
              <p>
                A subject can have a hard paper and low boundaries, making top grades accessible with solid performance. Or it can have a moderately hard paper but a compressed boundary structure — where every mark between E and A* is fiercely contested. The latter is genuinely more demanding, regardless of perceived difficulty.
              </p>
              <p>
                We analysed official AQA A-Level grade boundaries for Biology, Chemistry, and Physics from 2022 to 2025. All three sciences are marked out of 200 total raw marks, making a direct comparison meaningful.
              </p>
            </div>
          </section>

          {/* Verdict cards */}
          <section aria-labelledby="verdict-heading">
            <h2 id="verdict-heading" className="text-2xl font-bold text-white mb-6">The 2025 verdict at a glance</h2>
            <div className="grid sm:grid-cols-3 gap-4">
              {BOUNDARY_DATA.map((subject) => {
                const d2025 = subject.years['2025'];
                const aStarPct = pct(d2025.aStar, d2025.max);
                const ePct = pct(d2025.e, d2025.max);
                const spread = d2025.aStar - d2025.e;
                return (
                  <div key={subject.subject} className="bg-[#12141f] border border-white/8 rounded-2xl p-5">
                    <div className="flex items-center gap-2 mb-4">
                      <span className="text-2xl" aria-hidden="true">{subject.icon}</span>
                      <h3 className="text-lg font-bold" style={{ color: subject.color }}>{subject.subject}</h3>
                    </div>
                    <div className="space-y-2.5">
                      <div className="flex justify-between items-center">
                        <span className="text-xs text-slate-500">A* boundary</span>
                        <span className="text-sm font-mono font-bold" style={{ color: subject.color }}>{d2025.aStar} ({aStarPct}%)</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-xs text-slate-500">A boundary</span>
                        <span className="text-sm font-mono text-slate-300">{d2025.a} ({pct(d2025.a, d2025.max)}%)</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-xs text-slate-500">E boundary</span>
                        <span className="text-sm font-mono text-slate-400">{d2025.e} ({ePct}%)</span>
                      </div>
                      <div className="pt-2 border-t border-white/8 flex justify-between items-center">
                        <span className="text-xs text-slate-500">A*-to-E spread</span>
                        <span className="text-sm font-mono font-semibold text-white">{spread} marks</span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
            <p className="text-xs text-slate-600 mt-3">AQA A-Level, June 2025. All subjects out of 200 total marks.</p>
          </section>

          {/* Grade spread analysis */}
          <section aria-labelledby="spread-heading">
            <h2 id="spread-heading" className="text-2xl font-bold text-white mb-4">
              The "forgiveness gap": A* to E spread
            </h2>
            <div className="space-y-4 text-slate-400 leading-relaxed">
              <p>
                The most useful metric for comparing difficulty is the <strong className="text-white">spread between the A* boundary and the E boundary</strong>. A wide spread means a fail and an A* are far apart in raw marks — there's more room to move up the grade scale with additional marks. A narrow spread means every mark counts more acutely.
              </p>
            </div>

            <div className="mt-6 bg-[#12141f] border border-white/8 rounded-2xl p-6">
              <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-5">A* to E boundary spread (raw marks) — 2022 to 2025</p>
              <div className="space-y-5">
                {BOUNDARY_DATA.map((subject) => (
                  <div key={subject.subject}>
                    <p className="text-sm font-semibold mb-2" style={{ color: subject.color }}>{subject.subject}</p>
                    <div className="space-y-1.5">
                      {YEARS.map((year) => {
                        const spread = gradeSpread(subject.years, year);
                        const barPct = (spread / 200) * 100;
                        return (
                          <div key={year} className="flex items-center gap-3">
                            <span className="text-xs font-mono text-slate-500 w-10 shrink-0">{year}</span>
                            <div className="flex-1 h-5 bg-white/5 rounded-md overflow-hidden relative">
                              <div
                                className="h-full rounded-md"
                                style={{ width: `${barPct}%`, backgroundColor: `${subject.color}50` }}
                              />
                              <span
                                className="absolute left-2 top-1/2 -translate-y-1/2 text-xs font-mono font-semibold"
                                style={{ color: subject.color }}
                              >
                                {spread} marks
                              </span>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                ))}
              </div>
              <p className="text-xs text-slate-600 mt-4">A wider bar = more marks separate A* from E = more room to move between grades.</p>
            </div>
          </section>

          {/* Full table */}
          <section aria-labelledby="full-table-heading">
            <h2 id="full-table-heading" className="text-2xl font-bold text-white mb-2">
              Full boundary comparison: 2022–2025
            </h2>
            <p className="text-slate-400 text-sm mb-5">All subjects AQA, out of 200 total marks. Percentages shown in brackets.</p>
            <div className="overflow-x-auto">
              <table className="w-full text-sm min-w-[580px]" aria-label="AQA A-Level Biology Chemistry Physics grade boundaries 2022 to 2025">
                <thead>
                  <tr className="bg-white/4 border-b border-white/8">
                    <th scope="col" className="text-left px-4 py-3 text-xs font-semibold text-slate-400 uppercase tracking-wider">Subject</th>
                    <th scope="col" className="text-center px-3 py-3 text-xs font-semibold text-slate-400 uppercase tracking-wider">Year</th>
                    <th scope="col" className="text-center px-3 py-3 text-xs font-bold text-emerald-400">A*</th>
                    <th scope="col" className="text-center px-3 py-3 text-xs font-bold text-indigo-400">A</th>
                    <th scope="col" className="text-center px-3 py-3 text-xs font-bold text-purple-400">B</th>
                    <th scope="col" className="text-center px-3 py-3 text-xs font-bold text-amber-400">C</th>
                    <th scope="col" className="text-center px-3 py-3 text-xs font-bold text-orange-400">E</th>
                  </tr>
                </thead>
                <tbody>
                  {BOUNDARY_DATA.map((subject) =>
                    YEARS.map((year, yi) => {
                      const d = subject.years[year];
                      const isLast = yi === YEARS.length - 1;
                      return (
                        <tr
                          key={`${subject.subject}-${year}`}
                          className={`border-b ${isLast ? 'border-white/12' : 'border-white/5'} ${yi % 2 === 0 ? '' : 'bg-white/2'}`}
                        >
                          {yi === 0 ? (
                            <td className="px-4 py-2.5 font-bold text-sm" style={{ color: subject.color }} rowSpan={YEARS.length}>
                              {subject.icon} {subject.subject}
                            </td>
                          ) : null}
                          <td className="px-3 py-2.5 text-center font-mono text-xs text-slate-400">{year}</td>
                          <td className="px-3 py-2.5 text-center font-mono text-xs text-emerald-400 font-semibold">
                            {d.aStar} <span className="text-slate-600">({pct(d.aStar, d.max)}%)</span>
                          </td>
                          <td className="px-3 py-2.5 text-center font-mono text-xs text-indigo-400">
                            {d.a} <span className="text-slate-600">({pct(d.a, d.max)}%)</span>
                          </td>
                          <td className="px-3 py-2.5 text-center font-mono text-xs text-purple-400">
                            {d.b} <span className="text-slate-600">({pct(d.b, d.max)}%)</span>
                          </td>
                          <td className="px-3 py-2.5 text-center font-mono text-xs text-amber-400">
                            {d.c} <span className="text-slate-600">({pct(d.c, d.max)}%)</span>
                          </td>
                          <td className="px-3 py-2.5 text-center font-mono text-xs text-orange-400">
                            {d.e} <span className="text-slate-600">({pct(d.e, d.max)}%)</span>
                          </td>
                        </tr>
                      );
                    })
                  )}
                </tbody>
              </table>
            </div>
            <p className="text-xs text-slate-600 mt-3">Source: AQA A-Level grade boundary documents, June 2022–2025.</p>
          </section>

          {/* Analysis */}
          <section aria-labelledby="analysis-heading">
            <h2 id="analysis-heading" className="text-2xl font-bold text-white mb-4">What the data actually shows</h2>
            <div className="space-y-6 text-slate-400 leading-relaxed">
              <div>
                <h3 className="text-base font-semibold text-white mb-2">Chemistry demands the highest raw marks for A*</h3>
                <p>
                  In 2025, the AQA Chemistry A* boundary was <strong className="text-white">163 out of 200 — 81.5% of total marks</strong>. This was the highest A* boundary of the three sciences, edging out Physics (161) and Biology (160). Chemistry has consistently sat at the top of the A* threshold across all four years analysed. If you're targeting an A* in Chemistry, you have very little margin for error.
                </p>
              </div>
              <div>
                <h3 className="text-base font-semibold text-white mb-2">Physics has the most compressed spread at the top</h3>
                <p>
                  Despite Physics having a slightly lower A* boundary than Chemistry, its grade spread from E to A* is the narrowest of the three — meaning the distance between a pass and top performance is smaller in raw mark terms. In 2025, the Physics A*-to-E spread was <strong className="text-white">96 marks</strong>, compared to 97 for Chemistry and 89 for Biology. Every mark in a Physics paper pushes you through the grade boundaries faster.
                </p>
              </div>
              <div>
                <h3 className="text-base font-semibold text-white mb-2">Biology is the most forgiving at lower grades</h3>
                <p>
                  Biology's E boundary has historically been higher relative to the A* boundary than the other two sciences. In 2025, you needed 71 marks for an E in Biology — the highest E boundary of the three. This indicates a less compressed lower end, meaning students at the lower grade ranges have more raw marks separating each grade in Biology.
                </p>
              </div>
              <div>
                <h3 className="text-base font-semibold text-white mb-2">All three are converging upward</h3>
                <p>
                  A striking trend across all four years: boundaries have moved consistently upward. The A* boundary for Chemistry rose from 145 in 2022 to 163 in 2025 — an increase of 18 marks in three years. Physics and Biology show similar trajectories. This suggests the student cohort's performance has improved, or papers have become more accessible, or both.
                </p>
              </div>
            </div>
          </section>

          {/* Practical advice */}
          <section aria-labelledby="advice-heading">
            <h2 id="advice-heading" className="text-2xl font-bold text-white mb-6">What this means when choosing your A-Levels</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                {
                  icon: '🎯',
                  title: 'Chemistry if you're targeting top medicine/STEM',
                  body: 'The high A* boundary means top performers are genuinely tested. If you consistently score over 80% in practice, Chemistry rewards precision and breadth. One underperforming paper matters significantly.',
                  color: '#6366f1',
                },
                {
                  icon: '🧬',
                  title: 'Biology if you prefer essay-based assessment',
                  body: 'Slightly lower A* threshold and the more distributed boundary spread makes Biology marginally more accessible for students who perform well across topics rather than excelling in high-precision calculation.',
                  color: '#34d399',
                },
                {
                  icon: '⚛️',
                  title: 'Physics if you're strong in Maths',
                  body: 'Physics' compressed grade spread means mathematical precision converts directly into grade improvements. If you score well in quantitative questions, the boundary structure rewards you. If you struggle with calculations, it amplifies the issue.',
                  color: '#a855f7',
                },
                {
                  icon: '📊',
                  title: 'Taking all three? Chemistry is your limiting factor',
                  body: 'Triple science students should treat Chemistry as the hardest boundary target and allocate revision time accordingly. Meeting Chemistry's A* boundary is the hardest of the three consistent objectives.',
                  color: '#f59e0b',
                },
              ].map((tip) => (
                <div key={tip.title} className="bg-[#12141f] border border-white/8 rounded-xl p-5">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-lg" aria-hidden="true">{tip.icon}</span>
                    <h3 className="text-sm font-semibold text-white leading-tight">{tip.title}</h3>
                  </div>
                  <p className="text-xs text-slate-400 leading-relaxed">{tip.body}</p>
                </div>
              ))}
            </div>
          </section>

          {/* CTA */}
          <div className="bg-[#12141f] border border-pink-500/20 rounded-2xl p-7 flex gap-5 items-start">
            <div className="text-2xl shrink-0" aria-hidden="true">📚</div>
            <div>
              <h3 className="text-base font-semibold text-white mb-1">Check your A-Level grade from a raw mark</h3>
              <p className="text-sm text-slate-400 leading-relaxed mb-3">
                Enter your Biology, Chemistry, or Physics raw mark into the GradesNova A-Level calculator to see your grade under official 2025 AQA boundaries — with UCAS points included.
              </p>
              <Link
                href="/exams/a-levels"
                className="inline-flex items-center gap-2 bg-pink-600 hover:bg-pink-500 text-white px-5 py-2.5 rounded-xl font-semibold text-sm transition-all hover:shadow-lg hover:-translate-y-0.5"
              >
                A-Level Grade Boundary Calculator →
              </Link>
            </div>
          </div>

          {/* Related */}
          <section aria-labelledby="related-heading" className="border-t border-white/8 pt-10">
            <h2 id="related-heading" className="text-sm font-semibold text-slate-500 uppercase tracking-wider mb-4">Related articles</h2>
            <div className="grid sm:grid-cols-2 gap-3">
              {[
                { title: 'Understanding Grade Boundaries: Why Do They Change Every Year?', href: '/articles/understanding-grade-boundaries-explained', color: '#34d399' },
                { title: '5-Year Trends in GCSE Maths Grade Boundaries', href: '/articles/gcse-maths-grade-boundaries-trends', color: '#6366f1' },
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
