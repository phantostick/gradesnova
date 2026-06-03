// app/exams/gcse/grade-boundaries-explained/page.tsx
// GCSE GRADE BOUNDARIES EXPLAINED — Deep Dive Content Page
// Targets: "how do grade boundaries work", "why do grade boundaries change",
//          "ofqual comparable outcomes", "gcse raw marks explained"

import type { Metadata } from 'next';
import Link from 'next/link';
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';

export const metadata: Metadata = {
  title: 'How GCSE Grade Boundaries Work 2026 | Why They Change Every Year | GradesNova',
  description:
    'A clear, complete explanation of how GCSE grade boundaries are set by AQA, Edexcel, OCR and WJEC. Why they change every year, what comparable outcomes means, and how to use raw marks to check your grade.',
  alternates: { canonical: 'https://gradesnova.com/exams/gcse/grade-boundaries-explained' },
  openGraph: {
    title: 'How GCSE Grade Boundaries Work 2026 | Why They Change Every Year',
    description:
      'Everything about GCSE grade boundaries — how they are set, why they change, and what they mean for your grade.',
    url: 'https://gradesnova.com/exams/gcse/grade-boundaries-explained',
    type: 'article',
    siteName: 'GradesNova',
  },
  robots: { index: true, follow: true },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'How GCSE Grade Boundaries Work: Why They Change Every Year',
  description:
    'A complete explanation of how GCSE grade boundaries are set, what comparable outcomes means, and how to use raw marks.',
  url: 'https://gradesnova.com/exams/gcse/grade-boundaries-explained',
  author: { '@type': 'Organization', name: 'GradesNova' },
  publisher: { '@type': 'Organization', name: 'GradesNova', url: 'https://gradesnova.com' },
  dateModified: '2026-05-26',
};

const jsonLdFAQ = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Why do GCSE grade boundaries change every year?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'GCSE grade boundaries change because they are set after the papers have been marked, based on how difficult that year\'s paper was. If a paper is harder than usual, the boundary is lowered so students are not disadvantaged. This process — called comparable outcomes — is overseen by Ofqual and ensures that the proportion of students achieving each grade stays broadly similar year on year.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is a GCSE grade boundary?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A grade boundary is the minimum raw mark — the actual number of marks you score on the exam — required to achieve a particular grade. Boundaries are not fixed percentages. They are published by each exam board on Results Day at 8:00am and cannot be accessed before then.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is Ofqual comparable outcomes?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Comparable outcomes is Ofqual\'s statistical process for setting grade boundaries. It anchors the national grade distribution to prior attainment data from the same cohort. In simple terms: the percentage of students nationally who achieve grade 5 in GCSE Maths should be broadly similar from year to year, adjusted by how difficult that year\'s paper was. It prevents grades from drifting up or down due to changes in paper difficulty alone.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can I predict my GCSE grade from my raw mark?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes — after Results Day, when official boundaries are published. Enter your raw mark (the actual number of marks you scored) into the GradesNova calculator to instantly see your grade under official boundaries. Before Results Day, you can use the previous year\'s boundaries as a rough estimate, but the exact 2026 boundaries are only known on 27 August 2026.',
      },
    },
    {
      '@type': 'Question',
      name: 'Are GCSE grade boundaries the same for all exam boards?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No. AQA, Edexcel, OCR, and WJEC each set their own boundaries independently. In 2025, the AQA Maths Higher grade 4 boundary was 63/240 while Edexcel\'s was 53/240. Never apply one board\'s boundary to another board\'s paper. Always check which board your school uses.',
      },
    },
  ],
};

const BOUNDARY_COMPARISON = [
  { board: 'AQA', g9: 219, g5: 96, g4: 63, max: 240, color: '#34d399', href: '/exams/gcse/aqa' },
  { board: 'Edexcel', g9: 217, g5: 87, g4: 53, max: 240, color: '#6366f1', href: '/exams/gcse/edexcel' },
  { board: 'OCR', g9: 258, g5: 86, g4: 47, max: 300, color: '#a855f7', href: '/exams/gcse/ocr' },
  { board: 'WJEC', g9: 196, g5: 56, g4: 27, max: 240, color: '#f59e0b', href: '/exams/gcse/wjec' },
];

const YEAR_ON_YEAR = [
  { year: '2022', g9: 198, g5: 84, g4: 55 },
  { year: '2023', g9: 210, g5: 90, g4: 59 },
  { year: '2024', g9: 213, g5: 93, g4: 58 },
  { year: '2025', g9: 219, g5: 96, g4: 63 },
];

const MAX_MARK = 240;

export default function GCSEBoundariesExplainedPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdFAQ) }} />

      <main className="bg-[#0a0c14] min-h-screen text-white">
        <Navbar />

        {/* ── HEADER ── */}
        <header className="bg-[#0d0f1a] border-b border-white/6 py-12 mt-16">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <nav aria-label="Breadcrumb" className="mb-5">
              <ol className="flex items-center gap-2 text-xs text-slate-500">
                <li><Link href="/" className="hover:text-white transition-colors">Home</Link></li>
                <li aria-hidden="true">›</li>
                <li><Link href="/exams/gcse" className="hover:text-white transition-colors">GCSE Grade Boundaries</Link></li>
                <li aria-hidden="true">›</li>
                <li><Link href="/exams/gcse/guide" className="hover:text-white transition-colors">GCSE Guide</Link></li>
                <li aria-hidden="true">›</li>
                <li className="text-slate-400" aria-current="page">How Boundaries Work</li>
              </ol>
            </nav>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-indigo-500/15 flex items-center justify-center text-xl" aria-hidden="true">📊</div>
              <span className="text-xs font-mono text-indigo-400/70 uppercase tracking-widest">Explainer · GCSE · Grade Boundaries</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white tracking-tight mb-4 leading-tight">
              How GCSE Grade Boundaries Work — And Why They Change Every Year
            </h1>
            <p className="text-lg text-slate-400 leading-relaxed max-w-2xl">
              Every August, students search frantically for grade boundaries. But most don't understand what the numbers actually mean — or why they're different every year. This guide explains everything, clearly.
            </p>
            <div className="flex items-center gap-4 mt-5 text-xs text-slate-500">
              <span>Updated May 2026</span>
              <span>·</span>
              <span>~10 min read</span>
            </div>
          </div>
        </header>

        <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-14">

          {/* What is a boundary */}
          <section aria-labelledby="what-heading">
            <h2 id="what-heading" className="text-2xl font-bold text-white mb-4">What is a grade boundary?</h2>
            <div className="space-y-4 text-slate-400 leading-relaxed">
              <p>
                A <strong className="text-white">grade boundary</strong> is the minimum raw mark — the actual number of marks you scored on the paper — required to achieve a particular grade. It is not a percentage. It is not fixed in advance. And it is not the same every year.
              </p>
              <p>
                For GCSE, boundaries are set on a 1–9 scale. For every subject and every exam board — AQA, Edexcel, OCR, WJEC — the boundaries are set separately, after all papers are marked.
              </p>
            </div>
            <div className="mt-6 bg-[#12141f] border border-white/8 rounded-xl p-5">
              <p className="text-sm font-semibold text-white mb-2">Concrete example — AQA Maths Higher 2025</p>
              <p className="text-sm text-slate-400 leading-relaxed">
                The total mark for AQA GCSE Maths Higher is 240 (three papers of 80 marks each). In 2025, the grade 4 (standard pass) boundary was <strong className="text-white">63 marks out of 240 — just 26% of the paper</strong>. The grade 9 boundary was 219 out of 240 (91%). Scoring 63 anywhere was exactly enough for a grade 4. Scoring 62 was a grade 3.
              </p>
            </div>
          </section>

          {/* Why they change */}
          <section aria-labelledby="why-heading">
            <h2 id="why-heading" className="text-2xl font-bold text-white mb-4">Why do grade boundaries change every year?</h2>
            <div className="space-y-4 text-slate-400 leading-relaxed">
              <p>
                The single biggest reason boundaries move is <strong className="text-white">paper difficulty</strong>. If examiners write a harder paper than usual, students score fewer marks — so the boundary is lowered to ensure a grade 5 this year represents the same standard of attainment as a grade 5 last year.
              </p>
              <p>
                This process is overseen by <strong className="text-white">Ofqual</strong> (in England) using a method called <strong className="text-white">comparable outcomes</strong>. It uses statistical modelling to anchor the grade distribution to the prior attainment of the current cohort — ensuring that a bad paper doesn't mean an entire year group gets worse grades.
              </p>
            </div>

            <div className="mt-6 bg-indigo-500/10 border border-indigo-500/20 rounded-xl p-5 flex gap-4 items-start">
              <span className="text-xl shrink-0" aria-hidden="true">💡</span>
              <div>
                <p className="text-sm font-semibold text-white mb-1">The key insight</p>
                <p className="text-sm text-slate-400 leading-relaxed">
                  A hard paper is not unfair. It just means the grade boundary will be lower. Ofqual's comparable outcomes process protects students — the proportion achieving each grade stays broadly consistent year on year, regardless of paper difficulty.
                </p>
              </div>
            </div>

            {/* Year-on-year data */}
            <div className="mt-8">
              <h3 className="text-base font-semibold text-white mb-3">AQA GCSE Maths Higher — 4-year boundary movement</h3>
              <div className="overflow-x-auto rounded-xl border border-white/8">
                <table className="w-full text-sm min-w-[480px]" aria-label="AQA GCSE Maths Higher grade boundaries 2022 to 2025">
                  <thead>
                    <tr className="bg-white/4 border-b border-white/8">
                      <th scope="col" className="text-left px-4 py-3 text-xs font-semibold text-slate-400 uppercase">Year</th>
                      <th scope="col" className="text-center px-4 py-3 text-xs font-bold text-emerald-400">Grade 9</th>
                      <th scope="col" className="text-center px-4 py-3 text-xs font-bold text-purple-400">Grade 5</th>
                      <th scope="col" className="text-center px-4 py-3 text-xs font-bold text-amber-400">Grade 4</th>
                      <th scope="col" className="text-center px-4 py-3 text-xs font-semibold text-slate-500">Max</th>
                    </tr>
                  </thead>
                  <tbody>
                    {YEAR_ON_YEAR.map((row, i) => (
                      <tr key={row.year} className={`border-b border-white/5 last:border-0 ${i === 3 ? 'bg-emerald-500/5' : i % 2 === 0 ? '' : 'bg-white/2'}`}>
                        <td className="px-4 py-3 font-mono font-semibold text-white">
                          {row.year}
                          {i === 3 && <span className="ml-2 text-[10px] bg-emerald-500/20 text-emerald-300 px-1.5 py-0.5 rounded">latest</span>}
                        </td>
                        <td className="px-4 py-3 text-center font-mono text-xs text-emerald-400 font-semibold">{row.g9}</td>
                        <td className="px-4 py-3 text-center font-mono text-xs text-purple-400 font-semibold">{row.g5}</td>
                        <td className="px-4 py-3 text-center font-mono text-xs text-amber-400 font-semibold">{row.g4}</td>
                        <td className="px-4 py-3 text-center font-mono text-xs text-slate-500">{MAX_MARK}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="text-xs text-slate-600 mt-2">
                Note how boundaries rose steadily from 2022 to 2025 — this reflects improved post-pandemic cohort performance, not easier grading. Source: AQA official documents.
              </p>
            </div>
          </section>

          {/* How boundaries are set step by step */}
          <section aria-labelledby="process-heading">
            <h2 id="process-heading" className="text-2xl font-bold text-white mb-6">How exam boards set grade boundaries: step by step</h2>
            <div className="space-y-4">
              {[
                { step: '01', color: '#34d399', title: 'All papers are marked', body: 'Every student\'s paper is marked by trained examiners. This produces a raw mark for every student. For AQA Maths Higher, the maximum raw mark is 240 across three papers.' },
                { step: '02', color: '#6366f1', title: 'Grade setting meeting', body: 'Senior examiners review a sample of actual student scripts from across the mark range. They make professional judgements about what standard of work represents each grade — comparing against previous years.' },
                { step: '03', color: '#a855f7', title: 'Statistical modelling', body: 'The exam board runs the cohort\'s prior attainment data through Ofqual\'s comparable outcomes models. This identifies where boundaries should land to keep national grade distributions broadly stable.' },
                { step: '04', color: '#f59e0b', title: 'Boundaries are locked and embargoed', body: 'Final boundaries are agreed, submitted to Ofqual for approval, and strictly embargoed. Nobody outside the exam boards knows the exact figures until Results Day.' },
                { step: '05', color: '#ec4899', title: 'Published at 8:00am on Results Day', body: 'On GCSE Results Day (27 August 2026), all boards publish boundaries simultaneously. Your raw mark is looked up against the boundary table — your grade is determined at that moment.' },
              ].map(item => (
                <div key={item.step} className="bg-[#12141f] border border-white/8 rounded-xl p-5 flex gap-4">
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center text-xs font-bold font-mono shrink-0"
                    style={{ backgroundColor: `${item.color}20`, color: item.color }}>
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

          {/* Boards are different */}
          <section aria-labelledby="boards-heading">
            <h2 id="boards-heading" className="text-2xl font-bold text-white mb-4">Why different exam boards have different boundaries</h2>
            <div className="space-y-4 text-slate-400 leading-relaxed">
              <p>
                AQA, Edexcel, OCR, and WJEC all write their own papers and set their own boundaries independently. There is no coordination between boards on boundary levels. Because each paper has a different difficulty and structure, the raw marks required for each grade differ — sometimes significantly.
              </p>
              <p>
                This is why you should <strong className="text-white">only ever use boundaries for the specific board your school uses</strong>. An Edexcel grade 4 boundary applied to an AQA paper will give you the wrong grade.
              </p>
            </div>

            <div className="mt-6 overflow-x-auto rounded-xl border border-white/8">
              <table className="w-full text-sm min-w-[500px]" aria-label="GCSE Maths Higher grade boundaries by board 2025">
                <thead>
                  <tr className="bg-white/4 border-b border-white/8">
                    <th scope="col" className="text-left px-4 py-3 text-xs font-semibold text-slate-400 uppercase">Board</th>
                    <th scope="col" className="text-center px-3 py-3 text-xs font-bold text-emerald-400">Grade 9</th>
                    <th scope="col" className="text-center px-3 py-3 text-xs font-bold text-purple-400">Grade 5</th>
                    <th scope="col" className="text-center px-3 py-3 text-xs font-bold text-amber-400">Grade 4</th>
                    <th scope="col" className="text-center px-3 py-3 text-xs font-semibold text-slate-500">Max</th>
                  </tr>
                </thead>
                <tbody>
                  {BOUNDARY_COMPARISON.map((row, i) => (
                    <tr key={row.board} className={`border-b border-white/5 last:border-0 ${i % 2 === 0 ? '' : 'bg-white/2'}`}>
                      <td className="px-4 py-3">
                        <Link href={row.href} className="font-bold text-sm hover:underline" style={{ color: row.color }}>
                          {row.board}
                        </Link>
                      </td>
                      <td className="px-3 py-3 text-center font-mono text-xs text-emerald-400 font-semibold">{row.g9}</td>
                      <td className="px-3 py-3 text-center font-mono text-xs text-purple-400 font-semibold">{row.g5}</td>
                      <td className="px-3 py-3 text-center font-mono text-xs text-amber-400 font-semibold">{row.g4}</td>
                      <td className="px-3 py-3 text-center font-mono text-xs text-slate-500">{row.max}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-xs text-slate-600 mt-2">GCSE Maths Higher tier, June 2025. Note OCR uses 300 total marks (3 × 100 papers).</p>

            <div className="mt-4 bg-amber-500/10 border border-amber-500/20 rounded-xl px-4 py-3 flex gap-3 items-start">
              <span className="text-lg shrink-0" aria-hidden="true">⚠️</span>
              <p className="text-sm text-slate-300">
                <strong className="text-amber-300">Never mix boards.</strong> The 36-mark difference between the AQA grade 4 boundary (63) and the WJEC boundary (27) doesn't mean one board is harder — they use different papers. Each board's boundary only applies to that board's papers.
              </p>
            </div>
          </section>

          {/* How to use raw marks */}
          <section aria-labelledby="raw-heading">
            <h2 id="raw-heading" className="text-2xl font-bold text-white mb-4">How to use your raw marks to find your grade</h2>
            <div className="space-y-4 text-slate-400 leading-relaxed">
              <p>
                Your results slip shows your grade — not your raw mark. But your raw mark is the actual number that determines your grade. Here's how to access it and use it.
              </p>
            </div>
            <div className="mt-5 space-y-3">
              {[
                { n: '1', title: 'Request your raw mark from your school', body: 'Schools can access raw marks on Results Day or shortly after through the exam board\'s online portal. Ask your exam officer or form tutor. You\'ll need it to check boundaries and decide on remarks.' },
                { n: '2', title: 'Find the boundary document for your board and subject', body: 'AQA, Edexcel, OCR, and WJEC all publish PDF boundary documents on Results Day at 8:00am. Or use the GradesNova calculator below — it does this instantly for you.' },
                { n: '3', title: 'Compare your mark to the boundary table', body: 'Find the row for your subject and tier. Your grade is the highest boundary you meet or exceed. If your raw mark is 65 and the grade 4 boundary is 63, you achieved grade 4.' },
                { n: '4', title: 'Check how close you are to the next grade', body: 'If you are 1–3 marks above a lower boundary, a priority review or remark may be worth requesting. If you are 4+ marks into a grade band, a remark is unlikely to change your outcome.' },
              ].map(item => (
                <div key={item.n} className="flex gap-4 bg-[#12141f] border border-white/8 rounded-xl p-4">
                  <div className="w-7 h-7 rounded-full bg-indigo-500/20 text-indigo-400 text-xs font-bold flex items-center justify-center shrink-0 font-mono">
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

          {/* How to use in revision */}
          <section aria-labelledby="revision-heading">
            <h2 id="revision-heading" className="text-2xl font-bold text-white mb-4">Using past boundaries in your GCSE revision</h2>
            <div className="space-y-4 text-slate-400 leading-relaxed">
              <p>
                You can't predict 2026 boundaries exactly — they depend on paper difficulty that hasn't been set yet. But <strong className="text-white">past boundaries give you a working range</strong>. If the AQA Maths Higher grade 5 boundary has ranged from 84 to 96 over four years, targeting 97+ in mock exams gives you a buffer against any year's boundary.
              </p>
            </div>
            <div className="mt-5 grid sm:grid-cols-3 gap-4">
              {[
                { icon: '🎯', title: 'Set mock targets above the historical peak', body: 'Find 3–4 years of boundaries for your subject. Aim for the top of the range in mock conditions to build a buffer.', color: '#34d399' },
                { icon: '📏', title: 'Think in raw marks, not percentages', body: 'Grade boundaries are always raw marks. Calculate how many marks per paper you need — not a percentage — since papers have different lengths.', color: '#6366f1' },
                { icon: '🏫', title: 'Use only your board\'s data', body: 'Your teacher will tell you which board your school uses. Only AQA data applies to AQA papers. Never mix boundaries across boards.', color: '#a855f7' },
              ].map(tip => (
                <div key={tip.title} className="bg-[#12141f] border border-white/8 rounded-xl p-4">
                  <span className="text-2xl block mb-2" aria-hidden="true">{tip.icon}</span>
                  <h3 className="text-sm font-semibold text-white mb-1.5">{tip.title}</h3>
                  <p className="text-xs text-slate-400 leading-relaxed">{tip.body}</p>
                </div>
              ))}
            </div>
          </section>

          {/* FAQ */}
          <section aria-labelledby="faq-heading">
            <h2 id="faq-heading" className="text-2xl font-bold text-white mb-5">Frequently asked questions</h2>
            <div className="space-y-3">
              {[
                { q: 'Why do GCSE grade boundaries change every year?', a: 'Boundaries change because they are set after marking, based on that year\'s paper difficulty. Harder papers = lower boundaries. Ofqual\'s comparable outcomes process ensures the overall national grade distribution stays broadly stable regardless of paper difficulty.' },
                { q: 'Can I find out my grade boundaries before Results Day?', a: 'No. Grade boundaries are strictly embargoed and not published until 8:00am on Results Day (27 August 2026). Any "predicted boundaries" before this date are unofficial estimates, not official data.' },
                { q: 'What is the difference between raw marks and UMS?', a: 'UMS (Uniform Mark Scale) was used for older AS and A-Level qualifications. Modern GCSEs and A-Levels use raw marks directly. Your grade is determined by your raw mark total compared to the grade boundary table for your specific board and subject.' },
                { q: 'Will GCSE boundaries be lower in 2026?', a: 'This depends entirely on the difficulty of the 2026 papers, which cannot be known until after the exams. Ofqual\'s comparable outcomes process prevents dramatic swings. Based on 2022–2025 trends, year-on-year shifts of 3–10 marks per grade are typical.' },
                { q: 'Are grade boundaries the same as pass marks?', a: 'Not exactly. The "pass mark" for a GCSE is typically taken as the grade 4 (standard pass) boundary. But there is no single fixed pass mark — it changes every year based on paper difficulty.' },
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
          <div className="bg-[#12141f] border border-emerald-500/20 rounded-2xl p-7 flex gap-5 items-start">
            <div className="text-2xl shrink-0" aria-hidden="true">🧮</div>
            <div>
              <h3 className="text-base font-semibold text-white mb-1">Check your grade from a raw mark</h3>
              <p className="text-sm text-slate-400 leading-relaxed mb-3">
                Enter any raw mark into the GradesNova calculator to instantly see your grade under 2025 official boundaries — AQA, Edexcel, OCR, and WJEC, all subjects.
              </p>
              <Link href="/exams/gcse"
                className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white px-5 py-2.5 rounded-xl font-semibold text-sm transition-all hover:shadow-lg hover:-translate-y-0.5">
                GCSE Grade Boundary Calculator →
              </Link>
            </div>
          </div>

          {/* Related */}
          <section aria-labelledby="related-heading" className="border-t border-white/8 pt-10">
            <h2 id="related-heading" className="text-sm font-semibold text-slate-500 uppercase tracking-wider mb-4">Continue reading</h2>
            <div className="grid sm:grid-cols-2 gap-3">
              {[
                { title: 'GCSE Results Day 2026: Everything You Need to Know', href: '/exams/gcse/results-day', color: '#ec4899' },
                { title: 'GCSE Revision Tips & Strategy', href: '/exams/gcse/revision-tips', color: '#f59e0b' },
                { title: 'AQA Grade Boundaries 2025 — All Subjects', href: '/exams/gcse/aqa', color: '#34d399' },
                { title: 'Complete GCSE Guide 2026', href: '/exams/gcse/guide', color: '#6366f1' },
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
