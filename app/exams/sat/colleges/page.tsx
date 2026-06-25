// app/exams/sat/colleges/page.tsx
// "WHAT COLLEGES CAN I GET INTO WITH MY SAT SCORE" — Deep Dive Content Page
// Targets: "what colleges can I get into with a [X] SAT score", "SAT score college chart",
//          "is a [X] SAT good", "colleges for [X] SAT score"
// Every composite score in 10-point increments from 400–1600 gets its own anchor + detailed
// writeup, so the SAT calculator can deep-link straight to the user's exact score.

import type { Metadata } from 'next';
import Link from 'next/link';
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { SAT_COLLEGE_GUIDE } from '@/lib/sat-college-data';

export const metadata: Metadata = {
  title: 'What Colleges Can You Get Into With Your SAT Score? Full 400–1600 Breakdown | GradesNova',
  description:
    'Every SAT composite score from 400 to 1600, explained in detail: your national percentile, what tier of college is realistic, real example schools at each level, and what to do next. Find out what colleges your SAT score can get you into.',
  alternates: { canonical: 'https://gradesnova.com/exams/sat/colleges' },
  openGraph: {
    title: 'What Colleges Can You Get Into With Your SAT Score?',
    description:
      'A detailed score-by-score breakdown of every SAT composite from 400–1600 — percentile, college tier, and real example schools.',
    url: 'https://gradesnova.com/exams/sat/colleges',
    type: 'article',
    siteName: 'GradesNova',
  },
  robots: { index: true, follow: true },
};

const SAT_COLLEGES_LAST_MODIFIED = '2026-06-24';

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'What Colleges Can You Get Into With Your SAT Score? Full 400–1600 Breakdown',
  description:
    'Every SAT composite score from 400 to 1600 explained: national percentile, realistic college tier, and example schools at each score.',
  url: 'https://gradesnova.com/exams/sat/colleges',
  author: { '@type': 'Organization', name: 'GradesNova' },
  publisher: { '@type': 'Organization', name: 'GradesNova', url: 'https://gradesnova.com' },
  dateModified: SAT_COLLEGES_LAST_MODIFIED,
};

const FAQS = [
  {
    q: 'What colleges can I get into with my SAT score?',
    a: 'It depends on your composite and the specific college\'s middle 50% admitted range. As a rough guide: 1490–1600 is competitive at Ivy League and elite STEM schools; 1350–1480 at top-30 national universities; 1140–1340 at most state flagships; 1000–1130 at the large majority of four-year universities; below 1000 narrows options to open-enrollment and community colleges, though many schools are now test-optional.',
  },
  {
    q: 'Is a 1200 SAT score good enough for a four-year college?',
    a: 'Yes. A 1200 is approximately the 69th percentile nationally and is sufficient for admission to the large majority of four-year colleges and universities in the US, including many respected public universities.',
  },
  {
    q: 'Should I submit my SAT score if it is below average?',
    a: 'Not necessarily. The majority of US colleges and universities are now test-optional. If your SAT composite is below a school\'s middle 50% range but your GPA and coursework are strong, you can typically choose not to submit a score and be evaluated on the rest of your application instead.',
  },
  {
    q: 'How much does 10–20 SAT points matter for admissions?',
    a: 'A single 10-point step rarely changes an admissions decision on its own, but moving across a tier boundary (for example from 1190 to 1210, or from 990 to 1010) can shift which schools\' middle 50% range you fall into, and can affect eligibility for specific merit scholarship thresholds, which are often set at exact score cutoffs.',
  },
];

const jsonLdFAQ = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: FAQS.map(f => ({
    '@type': 'Question',
    name: f.q,
    acceptedAnswer: { '@type': 'Answer', text: f.a },
  })),
};

const HUB_PAGES = [
  { title: 'SAT Score Calculator', desc: 'Enter raw module scores or a composite → get your percentile instantly.', href: '/exams/sat', color: '#34d399', icon: '🧮' },
  { title: 'SAT Scores Explained', desc: 'Release dates, score reports, superscoring, and concordance.', href: '/exams/sat/scores', color: '#ec4899', icon: '📊' },
  { title: 'SAT Prep Tips & Strategy', desc: 'Evidence-based prep methods and study plans.', href: '/exams/sat/prep-tips', color: '#f59e0b', icon: '📚' },
  { title: 'Complete SAT Guide 2026', desc: 'Digital SAT format, timing, sections, and registration.', href: '/exams/sat/guide', color: '#6366f1', icon: '📘' },
];

export default function SATCollegesPage() {
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
                <li><Link href="/exams/sat" className="hover:text-white transition-colors">SAT Score Calculator</Link></li>
                <li aria-hidden="true">›</li>
                <li className="text-slate-400" aria-current="page">What Colleges Can I Get Into</li>
              </ol>
            </nav>

            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-indigo-500/15 flex items-center justify-center text-xl" aria-hidden="true">🎓</div>
              <span className="text-xs font-mono text-indigo-400/70 uppercase tracking-widest">SAT · College Match · 2026</span>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold text-white tracking-tight mb-4 leading-tight">
              What Colleges Can You Get Into With Your SAT Score?
            </h1>
            <p className="text-lg text-slate-400 leading-relaxed">
              A detailed breakdown of every SAT composite from 400 to 1600, in 10-point steps —
              your national percentile, the realistic tier of college, real example schools, and
              what to do next. Jump straight to your score below.
            </p>
            <p className="text-xs text-slate-600 mt-4">Last updated {SAT_COLLEGES_LAST_MODIFIED}</p>
          </div>
        </header>

        <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-14">

          {/* ── IMPORTANT CONTEXT ── */}
          <section className="bg-[#12141f] border border-amber-500/20 rounded-2xl p-6">
            <h2 className="text-sm font-semibold text-amber-300 mb-2 flex items-center gap-2">
              <span aria-hidden="true">⚠</span> Before you read your score below
            </h2>
            <p className="text-sm text-slate-400 leading-relaxed">
              College admission is holistic. SAT score alone never guarantees or rules out admission —
              GPA, course rigor, essays, recommendations, and extracurriculars all matter, and a growing
              majority of US colleges are <strong className="text-white">test-optional</strong>. The
              example schools below illustrate the typical admitted range for each tier; always check a
              specific school's published middle 50% range before treating any number as a hard cutoff.
            </p>
          </section>

          {/* ── JUMP NAV ── */}
          <section aria-labelledby="jump-heading">
            <h2 id="jump-heading" className="text-sm font-semibold text-slate-500 uppercase tracking-wider mb-4">
              Jump to your score
            </h2>
            <div className="grid grid-cols-6 sm:grid-cols-8 lg:grid-cols-11 gap-2 max-h-64 overflow-y-auto pr-1">
              {SAT_COLLEGE_GUIDE.map(e => (
                <a
                  key={e.score}
                  href={`#score-${e.score}`}
                  className="flex items-center justify-center h-9 rounded-lg text-xs font-mono font-semibold border transition-all hover:scale-105"
                  style={{ backgroundColor: `${e.color}12`, borderColor: `${e.color}30`, color: e.color }}
                >
                  {e.score}
                </a>
              ))}
            </div>
          </section>

          {/* ── SCORE BY SCORE ── */}
          <section aria-labelledby="breakdown-heading" className="space-y-6">
            <h2 id="breakdown-heading" className="text-2xl font-bold text-white">
              Every SAT score, 400 through 1600
            </h2>

            {SAT_COLLEGE_GUIDE.map(entry => (
              <div
                key={entry.score}
                id={`score-${entry.score}`}
                className="bg-[#12141f] border border-white/8 rounded-2xl p-6 scroll-mt-24"
              >
                <div className="flex flex-wrap items-center gap-3 mb-3">
                  <span
                    className="text-lg font-bold tabular-nums w-16 h-14 rounded-xl flex items-center justify-center border"
                    style={{ backgroundColor: `${entry.color}15`, borderColor: `${entry.color}30`, color: entry.color }}
                  >
                    {entry.score}
                  </span>
                  <div>
                    <div className="flex items-center gap-2">
                      <h3 className="text-base font-semibold text-white">SAT {entry.score}</h3>
                      <span
                        className="text-[10px] font-semibold uppercase tracking-wide px-2 py-0.5 rounded-full border"
                        style={{ backgroundColor: `${entry.color}15`, borderColor: `${entry.color}30`, color: entry.color }}
                      >
                        {entry.tier}
                      </span>
                    </div>
                    <p className="text-xs text-slate-500 mt-0.5">~{entry.percentile}th percentile nationally</p>
                  </div>
                </div>

                <p className="text-sm text-slate-400 leading-relaxed mb-4">{entry.summary}</p>

                <div className="mb-3">
                  <p className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider mb-2">
                    Example schools in this range
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {entry.schools.map(s => (
                      <span key={s} className="text-xs px-2.5 py-1 rounded-lg bg-white/5 text-slate-300 border border-white/8">
                        {s}
                      </span>
                    ))}
                  </div>
                </div>

                <p className="text-xs text-slate-500 border-t border-white/6 pt-3 leading-relaxed">
                  <strong className="text-slate-400">Strategy:</strong> {entry.note}
                </p>
              </div>
            ))}
          </section>

          {/* ── CALCULATOR CTA ── */}
          <div className="bg-[#12141f] border border-indigo-500/20 rounded-2xl p-7 flex gap-5 items-start">
            <div className="text-2xl shrink-0" aria-hidden="true">🧮</div>
            <div>
              <h3 className="text-base font-semibold text-white mb-1">Don't know your composite yet?</h3>
              <p className="text-sm text-slate-400 leading-relaxed mb-3">
                Use the GradesNova SAT calculator to estimate your composite from your raw module scores,
                then come back to this page to see your tier.
              </p>
              <Link href="/exams/sat"
                className="inline-flex items-center gap-2 bg-indigo-600 hover:bg-indigo-500 text-white px-5 py-2.5 rounded-xl font-semibold text-sm transition-all hover:shadow-lg hover:-translate-y-0.5">
                SAT Score Calculator →
              </Link>
            </div>
          </div>

          {/* ── FAQ ── */}
          <section aria-labelledby="faq-heading">
            <h2 id="faq-heading" className="text-2xl font-bold text-white mb-5">Frequently asked questions</h2>
            <div className="space-y-3">
              {FAQS.map((faq, i) => (
                <details key={i} className="bg-[#12141f] border border-white/7 rounded-xl overflow-hidden group">
                  <summary className="px-5 py-4 text-sm font-medium text-white cursor-pointer list-none flex items-center justify-between gap-4">
                    {faq.q}
                    <span className="text-slate-400 shrink-0 group-open:rotate-180 transition-transform duration-200" aria-hidden="true">↓</span>
                  </summary>
                  <div className="px-5 pb-4 pt-3 border-t border-white/6">
                    <p className="text-sm text-slate-400 leading-relaxed">{faq.a}</p>
                  </div>
                </details>
              ))}
            </div>
          </section>

          {/* ── HUB ── */}
          <section aria-labelledby="hub-heading" className="border-t border-white/8 pt-10">
            <h2 id="hub-heading" className="text-sm font-semibold text-slate-500 uppercase tracking-wider mb-4">Continue reading</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
              {HUB_PAGES.map(page => (
                <Link key={page.href} href={page.href}
                  className="bg-[#12141f] border border-white/8 rounded-xl p-4 hover:border-white/20 transition-all group text-center">
                  <span className="text-2xl block mb-2" aria-hidden="true">{page.icon}</span>
                  <p className="text-xs font-semibold text-white group-hover:brightness-110 leading-snug">{page.title}</p>
                  <p className="text-[10px] mt-1 text-slate-500">{page.desc}</p>
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
