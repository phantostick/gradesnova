// app/exams/act/writing/page.tsx
// ACT WRITING — Optional Essay Deep Dive
// Targets: "ACT writing score", "is ACT writing optional", "ACT essay scoring 2–12",
//          "which colleges require ACT writing", "ACT writing section format"

import type { Metadata } from 'next';
import Link from 'next/link';
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';

export const metadata: Metadata = {
  title: 'ACT Writing (Essay) 2026: Format, Scoring & Which Colleges Require It | GradesNova',
  description:
    'Everything about the optional ACT Writing test — the 2–12 scoring scale, essay prompt format, how it factors into your ELA score, and which colleges still require or recommend it.',
  alternates: { canonical: 'https://gradesnova.com/exams/act/writing' },
  openGraph: {
    title: 'ACT Writing (Essay) 2026: Format, Scoring & Which Colleges Require It',
    description:
      'The optional ACT Writing test explained — format, 2–12 scoring scale, ELA score, and college requirements.',
    url: 'https://gradesnova.com/exams/act/writing',
    type: 'article',
    siteName: 'GradesNova',
  },
  robots: { index: true, follow: true },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'ACT Writing (Essay) 2026: Format, Scoring & Which Colleges Require It',
  description:
    'A complete guide to the optional ACT Writing test — format, scoring, ELA score, and which colleges still require it.',
  url: 'https://gradesnova.com/exams/act/writing',
  author: { '@type': 'Organization', name: 'GradesNova' },
  publisher: { '@type': 'Organization', name: 'GradesNova', url: 'https://gradesnova.com' },
  dateModified: '2026-06-28',
};

const jsonLdFAQ = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Is the ACT Writing test optional?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. The Writing test is optional on every ACT test date. You choose whether to add it when registering, and it comes with an additional fee. Most colleges no longer require it, but a small number still recommend or require it, so check your target schools before deciding.',
      },
    },
    {
      '@type': 'Question',
      name: 'How is the ACT essay scored?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The essay is scored on a 2–12 scale. Two trained readers each score your essay from 1–6 across four domains — Ideas and Analysis, Development and Support, Organization, and Language Use — and the domain scores are combined and averaged to produce your final 2–12 score. A third reader is used if the two scores differ significantly.',
      },
    },
    {
      '@type': 'Question',
      name: 'Does the ACT Writing score affect my composite?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No. The Writing score is reported separately and never affects your composite score. It does factor into your ELA score, which averages your English, Reading, and Writing scores, but the ELA score is also separate from the main composite.',
      },
    },
    {
      '@type': 'Question',
      name: 'How long is the ACT Writing test?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'You have 40 minutes to plan and write a single essay responding to a prompt that presents an issue with three different perspectives. You are asked to evaluate the perspectives, state your own view, and explain how it relates to the others.',
      },
    },
    {
      '@type': 'Question',
      name: 'Which colleges require the ACT Writing test?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The vast majority of colleges no longer require the ACT Writing section, mirroring the broader move away from mandatory essays across standardized testing. A small number of institutions, primarily some military academies and a handful of selective colleges, still require or recommend it. Always confirm current requirements directly on the admissions page of each school you are applying to.',
      },
    },
    {
      '@type': 'Question',
      name: 'How should I structure my time during the ACT essay?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A common approach is to spend roughly 8–10 minutes reading the prompt and planning your position and examples, about 25 minutes writing, and the remaining time reviewing for clarity and errors. Spending too little time planning often leads to a disorganized essay, which directly affects the Organization domain score.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is the ACT essay similar to the discontinued SAT essay?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'They are related in spirit — both were optional, timed persuasive-writing tasks — but the prompts differ. The ACT essay asks you to evaluate three given perspectives on an issue and develop your own view, while the discontinued SAT essay asked students to analyze how a given author built an argument in a source text.',
      },
    },
  ],
};

const DOMAINS = [
  { name: 'Ideas and Analysis', icon: '💡', color: '#34d399', body: 'Assesses how well you generate a nuanced argument, engage with multiple perspectives on the issue, and analyze the implications of your position.' },
  { name: 'Development and Support', icon: '🧱', color: '#6366f1', body: 'Assesses how thoroughly you explain and illustrate your ideas with reasoning, examples, and specific detail rather than vague generalities.' },
  { name: 'Organization', icon: '🗂️', color: '#a855f7', body: 'Assesses the logical structure of your essay — a clear progression of ideas, effective transitions, and a coherent overall shape.' },
  { name: 'Language Use', icon: '✍️', color: '#f59e0b', body: 'Assesses word choice, sentence variety, and command of standard written English conventions appropriate for the purpose and audience.' },
];

const TIME_BREAKDOWN = [
  { phase: 'Read & Plan', minutes: '8–10 min', color: '#34d399', body: 'Read all three perspectives carefully, decide your own position, and jot down 2–3 concrete examples or lines of reasoning before writing a single sentence.' },
  { phase: 'Write', minutes: '~25 min', color: '#6366f1', body: 'Draft your essay following your plan. Aim for a clear intro that states your position, body paragraphs that develop and support it, and engagement with at least one alternate perspective.' },
  { phase: 'Review', minutes: '5–7 min', color: '#f59e0b', body: 'Reread for clarity, fix grammar or spelling slips, and check that your conclusion ties back to your stated position rather than introducing a brand-new idea.' },
];

const HUB_PAGES = [
  { title: 'ACT Score Calculator', desc: 'Estimate your composite and section scores instantly.', href: '/exams/act', color: '#34d399', icon: '🧮' },
  { title: 'Enhanced ACT Explained', desc: 'What changed in the 2025 ACT redesign.', href: '/exams/act/enhanced-act', color: '#6366f1', icon: '🆕' },
  { title: 'ACT Scores Guide', desc: 'Release dates, score reports, and percentiles explained.', href: '/exams/act/scores', color: '#ec4899', icon: '📊' },
  { title: 'ACT Superscore Explained', desc: 'How superscoring works across attempts.', href: '/exams/act/superscore', color: '#a855f7', icon: '⭐' },
];

export default function ActWritingPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdFAQ) }} />

      <main className="bg-[#0a0c14] min-h-screen text-white">
        <Navbar />

        <header className="bg-[#0d0f1a] border-b border-white/6 py-12 mt-16">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <nav aria-label="Breadcrumb" className="mb-5">
              <ol className="flex items-center gap-2 text-xs text-slate-500">
                <li><Link href="/" className="hover:text-white transition-colors">Home</Link></li>
                <li aria-hidden="true">›</li>
                <li><Link href="/exams/act" className="hover:text-white transition-colors">ACT Score Calculator</Link></li>
                <li aria-hidden="true">›</li>
                <li className="text-slate-400" aria-current="page">Writing</li>
              </ol>
            </nav>

            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-amber-500/15 flex items-center justify-center text-xl" aria-hidden="true">✍️</div>
              <span className="text-xs font-mono text-amber-400/70 uppercase tracking-widest">ACT · Writing · 2026</span>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold text-white tracking-tight mb-4 leading-tight">
              ACT Writing (Essay): Format, Scoring & Which Colleges Require It
            </h1>
            <p className="text-lg text-slate-400 leading-relaxed max-w-2xl">
              The ACT Writing test is optional — but is it optional for you? Here&apos;s the full format, how the 2–12 scale actually works, and which schools still want to see it.
            </p>

            <div className="flex items-center gap-4 mt-5 text-xs text-slate-500">
              <span>Updated June 2026</span>
              <span>·</span>
              <span>~10 min read</span>
            </div>
          </div>
        </header>

        <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-14">

          {/* KEY FACTS */}
          <section aria-labelledby="key-facts-heading">
            <h2 id="key-facts-heading" className="sr-only">Key facts about ACT Writing</h2>
            <div className="grid sm:grid-cols-3 gap-4">
              {[
                { icon: '⏱️', label: 'Time given', value: '40 min', sub: 'One essay, one prompt', color: '#34d399' },
                { icon: '🎯', label: 'Score scale', value: '2–12', sub: 'Two readers, 4 domains', color: '#6366f1' },
                { icon: '🧮', label: 'Affects composite?', value: 'No', sub: 'Reported separately', color: '#ec4899' },
              ].map(card => (
                <div key={card.label} className="bg-[#12141f] border border-white/8 rounded-xl p-5">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-lg" aria-hidden="true">{card.icon}</span>
                    <span className="text-xs text-slate-400 font-medium">{card.label}</span>
                  </div>
                  <p className="text-2xl font-bold font-mono" style={{ color: card.color }}>{card.value}</p>
                  <p className="text-xs text-slate-500 mt-0.5">{card.sub}</p>
                </div>
              ))}
            </div>
          </section>

          {/* FORMAT */}
          <section aria-labelledby="format-heading">
            <h2 id="format-heading" className="text-2xl font-bold text-white mb-4">What the ACT Writing test actually looks like</h2>
            <div className="space-y-4 text-slate-400 leading-relaxed">
              <p>
                You get <strong className="text-white">40 minutes</strong> to respond to a prompt describing a complex issue along with <strong className="text-white">three different perspectives</strong> on it. Your task is to evaluate and analyze those perspectives, develop your own point of view, and explain how your position relates to the ones given.
              </p>
              <p>
                It&apos;s always scheduled as the <strong className="text-white">last section</strong> of your test day, after the multiple-choice sections, so it doesn&apos;t affect your pacing on English, Math, Reading, or Science.
              </p>
              <p>
                Prompts are deliberately written to be accessible without specialized outside knowledge — they typically center on issues relevant to student life, technology, or society broadly, rather than requiring familiarity with a specific book, historical event, or academic subject. The goal is to test how you reason and write under time pressure, not what you already know about a niche topic.
              </p>
            </div>
          </section>

          {/* HOW TO APPROACH IT */}
          <section aria-labelledby="approach-heading">
            <h2 id="approach-heading" className="text-2xl font-bold text-white mb-4">How to approach your 40 minutes</h2>
            <p className="text-slate-400 leading-relaxed mb-5">
              A rough time budget helps keep you from either rushing into writing without a plan or running out of time to review:
            </p>
            <div className="grid sm:grid-cols-3 gap-4">
              {TIME_BREAKDOWN.map(step => (
                <div key={step.phase} className="bg-[#12141f] border border-white/8 rounded-xl p-4">
                  <p className="text-xs font-semibold uppercase tracking-wide mb-1" style={{ color: step.color }}>{step.phase}</p>
                  <p className="text-lg font-bold font-mono text-white mb-2">{step.minutes}</p>
                  <p className="text-xs text-slate-400 leading-relaxed">{step.body}</p>
                </div>
              ))}
            </div>
            <div className="mt-5 space-y-4 text-slate-400 leading-relaxed">
              <p>
                One detail that trips up a lot of students: the prompt gives you three perspectives, but your essay does not need to agree entirely with any single one of them. You can build a position that borrows from two perspectives, pushes back on all three, or lands somewhere in between — what matters for the Ideas and Analysis domain is that you show genuine engagement with the complexity of the issue rather than picking one option and restating it.
              </p>
              <p>
                For the Development and Support domain, specific examples do more work than broad generalizations. A concrete, well-explained example — even a simple one — tends to score better than several vague, unsupported claims stacked together.
              </p>
            </div>
          </section>

          {/* SCORING */}
          <section aria-labelledby="scoring-heading">
            <h2 id="scoring-heading" className="text-2xl font-bold text-white mb-4">How the 2–12 score is calculated</h2>
            <div className="space-y-4 text-slate-400 leading-relaxed mb-5">
              <p>
                Two trained readers independently score your essay from <strong className="text-white">1–6</strong> across four writing domains. Your domain scores from both readers are added together, giving each domain a score from 2–12, and the four domain scores are averaged and rounded to produce your final Writing score of 2–12.
              </p>
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              {DOMAINS.map(d => (
                <div key={d.name} className="bg-[#12141f] border border-white/8 rounded-xl p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-lg" aria-hidden="true">{d.icon}</span>
                    <h3 className="text-sm font-semibold text-white">{d.name}</h3>
                  </div>
                  <p className="text-xs text-slate-400 leading-relaxed">{d.body}</p>
                </div>
              ))}
            </div>
            <div className="mt-5 bg-indigo-500/10 border border-indigo-500/20 rounded-xl p-5 flex gap-4 items-start">
              <span className="text-xl shrink-0" aria-hidden="true">💡</span>
              <div>
                <p className="text-sm font-semibold text-white mb-1">If the two readers disagree significantly</p>
                <p className="text-sm text-slate-400 leading-relaxed">
                  A third, more experienced reader scores the essay independently, and that score is used to resolve the discrepancy. This keeps scoring consistent even when an essay is borderline between two domain levels.
                </p>
              </div>
            </div>
          </section>

          {/* HOW IT FITS WITH COMPOSITE/ELA */}
          <section aria-labelledby="composite-heading">
            <h2 id="composite-heading" className="text-2xl font-bold text-white mb-4">Does Writing affect your composite or ELA score?</h2>
            <div className="space-y-4 text-slate-400 leading-relaxed">
              <p>
                Your Writing score <strong className="text-white">never affects your composite</strong>. It is one of the clearest separations in ACT&apos;s scoring system — the composite is calculated purely from English, Math, and Reading under the Enhanced ACT format.
              </p>
              <p>
                Writing does factor into your optional <strong className="text-white">ELA score</strong>, which averages your English, Reading, and Writing scaled scores (each 1–36, with your 2–12 Writing score converted to the same scale for this purpose). The ELA score is a supplementary figure some colleges use to evaluate language and writing readiness — it does not replace or affect your composite.
              </p>
              <p>
                Because the ELA score sits outside your headline composite, it&apos;s easy to overlook on your score report. If a school you&apos;re applying to has specifically mentioned reviewing writing ability or ELA scores in its admissions materials, it&apos;s worth double-checking your ELA figure rather than assuming your composite tells the full story.
              </p>
            </div>
          </section>

          {/* HOW IT COMPARES TO SAT ESSAY */}
          <section aria-labelledby="compare-heading">
            <h2 id="compare-heading" className="text-2xl font-bold text-white mb-4">How the ACT essay compares to other optional writing tests</h2>
            <div className="space-y-4 text-slate-400 leading-relaxed">
              <p>
                The College Board discontinued the optional SAT Essay, so the ACT Writing test is now one of the few optional writing components left among major US standardized admissions tests. The formats were never identical: the SAT Essay asked students to analyze how an author built an argument within a provided source passage, while the ACT essay asks you to reason through three given perspectives and construct your own argument from scratch.
              </p>
              <p>
                If a school&apos;s admissions materials reference an essay requirement carried over from older testing policies, it&apos;s worth confirming directly with the admissions office whether they mean the ACT Writing test, a separate application essay, or a now-discontinued exam component — policy pages aren&apos;t always updated as quickly as testing formats change.
              </p>
            </div>
          </section>

          {/* WHO REQUIRES IT */}
          <section aria-labelledby="requires-heading">
            <h2 id="requires-heading" className="text-2xl font-bold text-white mb-4">Should you take the Writing test?</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="bg-[#12141f] border border-emerald-500/20 rounded-xl p-4">
                <span className="text-xl block mb-2" aria-hidden="true">✅</span>
                <h3 className="text-sm font-semibold text-white mb-1.5">Take it if...</h3>
                <p className="text-xs text-slate-400 leading-relaxed">Any school on your list requires or recommends it (check admissions pages directly — a small number of colleges and some military academies still do), or you're a strong writer and want an extra data point on your application.</p>
              </div>
              <div className="bg-[#12141f] border border-white/8 rounded-xl p-4">
                <span className="text-xl block mb-2" aria-hidden="true">⏭️</span>
                <h3 className="text-sm font-semibold text-white mb-1.5">Skip it if...</h3>
                <p className="text-xs text-slate-400 leading-relaxed">None of your target schools require it. Skipping saves 40 minutes of test-day fatigue and the additional fee with zero effect on your composite score.</p>
              </div>
            </div>
            <div className="mt-5 space-y-4 text-slate-400 leading-relaxed">
              <p>
                If you&apos;re still finalizing your college list and unsure whether any school might end up requiring the essay, a common approach is to add Writing to your first attempt, when you&apos;re already investing significant time and energy into test day, rather than adding it later once your list has narrowed. That way you avoid a scenario where a late addition to your list requires a score you don&apos;t have and can&apos;t retroactively add to a past sitting.
              </p>
            </div>
            <div className="mt-5 bg-amber-500/10 border border-amber-500/20 rounded-xl p-5 flex gap-4 items-start">
              <span className="text-xl shrink-0" aria-hidden="true">⚠️</span>
              <div>
                <p className="text-sm font-semibold text-white mb-1">Policies change — verify directly</p>
                <p className="text-sm text-slate-400 leading-relaxed">
                  Essay requirements have shifted rapidly across US admissions in recent years. Don&apos;t rely on older forum posts or outdated guides — check the current admissions requirements page for each school on your list before registering.
                </p>
              </div>
            </div>
          </section>

          {/* CALCULATOR CTA */}
          <div className="bg-[#12141f] border border-emerald-500/20 rounded-2xl p-7 flex gap-5 items-start">
            <div className="text-2xl shrink-0" aria-hidden="true">🧮</div>
            <div>
              <h3 className="text-base font-semibold text-white mb-1">Calculate your composite (Writing not required)</h3>
              <p className="text-sm text-slate-400 leading-relaxed mb-3">
                Your composite is based on English, Math, and Reading only — enter your raw scores to see your composite and national percentile instantly.
              </p>
              <Link href="/exams/act"
                className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white px-5 py-2.5 rounded-xl font-semibold text-sm transition-all hover:shadow-lg hover:-translate-y-0.5">
                ACT Score Calculator →
              </Link>
            </div>
          </div>

          {/* FAQ */}
          <section aria-labelledby="faq-heading">
            <h2 id="faq-heading" className="text-2xl font-bold text-white mb-5">Frequently asked questions</h2>
            <div className="space-y-3">
              {[
                { q: 'Is the ACT Writing test optional?', a: 'Yes, on every test date. You choose whether to add it during registration for an additional fee.' },
                { q: 'How is the ACT essay scored?', a: 'On a 2–12 scale, based on two readers scoring four domains from 1–6 each: Ideas and Analysis, Development and Support, Organization, and Language Use.' },
                { q: 'Does Writing affect my ACT composite?', a: 'No. The composite is calculated purely from English, Math, and Reading. Writing is reported separately and only feeds into the optional ELA score.' },
                { q: 'How long do I have for the ACT essay?', a: '40 minutes to read the prompt, plan, and write your response.' },
                { q: 'Do most colleges still require ACT Writing?', a: 'No, the large majority of colleges no longer require it. A small number of schools, including some military academies, still require or recommend it — always check directly.' },
                { q: 'How should I split my 40 minutes?', a: 'A common approach is roughly 8–10 minutes reading and planning, about 25 minutes writing, and 5–7 minutes reviewing for clarity and errors.' },
                { q: 'Is the ACT essay the same as the old SAT essay?', a: 'No. Both were optional persuasive-writing sections, but the ACT gives you three perspectives to evaluate and respond to, while the discontinued SAT essay asked you to analyze an author\'s argument in a provided passage.' },
              ].map((faq, i) => (
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

          {/* RELATED */}
          <section aria-labelledby="related-heading" className="border-t border-white/8 pt-10">
            <h2 id="related-heading" className="text-sm font-semibold text-slate-500 uppercase tracking-wider mb-4">Continue reading</h2>
            <div className="grid sm:grid-cols-2 gap-3">
              {[
                { title: 'Enhanced ACT: What Changed in 2025', href: '/exams/act/enhanced-act', color: '#6366f1' },
                { title: 'ACT Scores: Release Dates & Reports', href: '/exams/act/scores', color: '#ec4899' },
                { title: 'ACT Superscore Explained', href: '/exams/act/superscore', color: '#a855f7' },
                { title: 'Complete ACT Guide 2026', href: '/exams/act/guide', color: '#34d399' },
              ].map(a => (
                <Link key={a.href} href={a.href}
                  className="bg-[#12141f] border border-white/8 rounded-xl p-4 hover:border-white/16 transition-colors group">
                  <p className="text-sm font-semibold text-white group-hover:brightness-110 transition-all leading-snug">{a.title}</p>
                  <span className="text-xs mt-2 inline-block font-medium" style={{ color: a.color }}>Read →</span>
                </Link>
              ))}
            </div>
          </section>

          {/* BOTTOM HUB */}
          <section aria-labelledby="hub-heading" className="border-t border-white/8 pt-10">
            <h2 id="hub-heading" className="text-sm font-semibold text-slate-500 uppercase tracking-wider mb-4">Full ACT hub</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
              {HUB_PAGES.map(page => (
                <Link key={page.href} href={page.href}
                  className="bg-[#12141f] border border-white/8 rounded-xl p-4 hover:border-white/20 transition-all group text-center">
                  <span className="text-2xl block mb-2" aria-hidden="true">{page.icon}</span>
                  <p className="text-xs font-semibold text-white group-hover:brightness-110 leading-snug">{page.title}</p>
                  <p className="text-[10px] mt-1 font-medium" style={{ color: page.color }}>Go →</p>
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
