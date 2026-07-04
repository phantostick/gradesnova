// app/exams/act/enhanced-act/page.tsx
// ENHANCED ACT — Format Change Deep Dive
// Targets: "enhanced ACT 2025", "ACT format change", "is the ACT shorter now",
//          "ACT science optional", "new ACT 2026", "ACT vs old ACT"

import type { Metadata } from 'next';
import Link from 'next/link';
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';

export const metadata: Metadata = {
  title: 'Enhanced ACT 2026: What Changed, Shorter Test, Optional Science | GradesNova',
  description:
    'The ACT changed in September 2025. Full breakdown of the Enhanced ACT: shorter test time, optional Science section, composite now English+Math+Reading only, fewer questions, and what it means for your score.',
  alternates: { canonical: 'https://gradesnova.com/exams/act/enhanced-act' },
  openGraph: {
    title: 'Enhanced ACT 2026: What Changed and What It Means for Your Score',
    description:
      'Shorter test, optional Science, new composite formula. Everything about the redesigned Enhanced ACT explained.',
    url: 'https://gradesnova.com/exams/act/enhanced-act',
    type: 'article',
    siteName: 'GradesNova',
  },
  robots: { index: true, follow: true },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Enhanced ACT 2026: What Changed and What It Means for Your Score',
  description:
    'A complete breakdown of the September 2025 Enhanced ACT redesign — shorter testing time, optional Science section, new composite formula, and how it affects test-takers.',
  url: 'https://gradesnova.com/exams/act/enhanced-act',
  author: { '@type': 'Organization', name: 'GradesNova' },
  publisher: { '@type': 'Organization', name: 'GradesNova', url: 'https://gradesnova.com' },
  dateModified: '2026-06-20',
};

const jsonLdFAQ = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is the Enhanced ACT?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The Enhanced ACT is the redesigned version of the ACT that rolled out starting with national online testing in April 2025 and full paper testing by September 2025. It is shorter, makes the Science section optional, and changes the composite score to an average of English, Math, and Reading only.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is the Enhanced ACT shorter than the old ACT?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Core testing time (English, Math, Reading) dropped from about 2 hours 55 minutes to approximately 2 hours 5 minutes. The total question count for the core sections was reduced, and each section now gives test-takers more time per question on average.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is Science still on the ACT?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Science is now optional. Students choose whether to take it. If taken, Science is reported as its own scaled score and combines with Math to produce a separate STEM score, but it no longer factors into the main composite score.',
      },
    },
    {
      '@type': 'Question',
      name: 'How is the Enhanced ACT composite calculated?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The composite is the average of your English, Math, and Reading scaled scores (each 1–36), rounded to the nearest whole number. This differs from the pre-2025 ACT, which averaged four sections including Science.',
      },
    },
    {
      '@type': 'Question',
      name: 'Should I take the Science section if it is optional?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Take Science if you are applying to STEM-heavy programs, engineering, or pre-med tracks, since some admissions committees and merit scholarship criteria still look at STEM scores. If your target schools do not emphasize STEM readiness, skipping Science shortens your test day with no effect on your composite.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do colleges know if I took the old ACT format or the Enhanced ACT?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, score reports indicate which format was taken and colleges are aware of the national transition. Admissions offices are adjusting their review processes accordingly, and composite scores remain comparable in meaning even though the underlying formula changed.',
      },
    },
    {
      '@type': 'Question',
      name: 'How does superscoring work with the Enhanced ACT?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Colleges that superscore will continue to take your highest section scores across multiple dates. If you submit a mix of old (4-section) and new (3-section) test scores, the ACT provides a standardized conversion so colleges can calculate your new 3-section composite superscore accurately.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is the Enhanced ACT cheaper if I skip the Science section?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, opting out of the optional Science section generally reduces your registration fee, operating similarly to how the old optional Writing section was priced.',
      },
    },
  ],
};

const CHANGES = [
  {
    title: 'Shorter test time',
    before: '~2 hr 55 min (core sections)',
    after: '~2 hr 5 min (core sections)',
    color: '#34d399',
    icon: '⏱️',
    body: 'Total time spent in the test room dropped by nearly 50 minutes for the core English, Math, and Reading sections, significantly reducing test-taker fatigue. You now have more time per question, making the test feel less like a sprint.',
  },
  {
    title: 'Science section',
    before: 'Required, part of composite',
    after: 'Optional, separate STEM score',
    color: '#6366f1',
    icon: '🔬',
    badge: 'Biggest change',
    body: 'Science is no longer mandatory and does not affect your composite. It pairs with Math to form an optional STEM score for students who want to showcase science readiness to engineering or pre-med programs.',
  },
  {
    title: 'Composite formula',
    before: 'Avg. of English, Math, Reading, Science',
    after: 'Avg. of English, Math, Reading only',
    color: '#a855f7',
    icon: '🧮',
    body: 'Dropping Science from the composite means English, Math, and Reading now each carry exactly 33.3% of the weight in your headline score, up from 25%. Strong readers and mathematicians benefit greatly from this shift.',
  },
  {
    title: 'Fewer questions',
    before: '215 total core questions',
    after: 'Significantly reduced question counts',
    color: '#f59e0b',
    icon: '📝',
    body: 'Question counts were trimmed across English, Math, and Reading. The difficulty of the questions remains the same, but the reduction allows for deeper focus and fewer careless errors caused by rushing.',
  },
  {
    title: 'Reporting categories',
    before: 'Composite + 4 section scores',
    after: 'Composite, section scores, STEM score, ELA score',
    color: '#ec4899',
    icon: '📊',
    body: 'New optional STEM (Math + Science) and ELA (English + Reading + Writing) scores give colleges a more granular view of your specific academic strengths without altering the core 1-36 composite.',
  },
];

const PREP_TIPS = [
  {
    title: 'Adjust Your Pacing Strategy',
    desc: 'With fewer questions and a shorter overall time, the "minutes-per-question" ratio has increased. Take updated practice tests to get a feel for this new, slightly more relaxed pacing. Do not rush out of habit.',
  },
  {
    title: 'Double Down on English & Reading',
    desc: 'Combined, the reading-heavy sections now make up 66.6% of your composite score. If you previously relied on Science to boost a lower Reading score, you will need to shift your study focus heavily toward grammar rules and reading comprehension.',
  },
  {
    title: 'Make an Early Decision on Science',
    desc: 'Research your target colleges and majors early. If none require the STEM score, you can completely eliminate Science from your study plan, freeing up dozens of hours to perfect your Math and English concepts.',
  },
];

const HUB_PAGES = [
  { title: 'ACT Score Calculator', desc: 'Enter raw scores for the Enhanced ACT format and get your composite instantly.', href: '/exams/act', color: '#34d399', icon: '🧮' },
  { title: 'ACT Superscore Explained', desc: 'How superscoring works under the new composite formula.', href: '/exams/act/superscore', color: '#ec4899', icon: '⭐' },
  { title: 'ACT Scores Guide', desc: 'Release dates, score reports, and what your composite means.', href: '/exams/act/scores', color: '#6366f1', icon: '📊' },
  { title: 'Complete ACT Guide 2026', desc: 'Full test structure, scoring, and prep overview.', href: '/exams/act/guide', color: '#a855f7', icon: '🎓' },
];

export default function EnhancedActPage() {
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
                <li><Link href="/exams/act" className="hover:text-white transition-colors">ACT Content Hub</Link></li>
                <li aria-hidden="true">›</li>
                <li className="text-slate-400" aria-current="page">Enhanced ACT</li>
              </ol>
            </nav>

            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-indigo-500/15 flex items-center justify-center text-xl" aria-hidden="true">🆕</div>
              <span className="text-xs font-mono text-indigo-400/70 uppercase tracking-widest">ACT · Format Change · 2026</span>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold text-white tracking-tight mb-4 leading-tight">
              Enhanced ACT 2026: What Changed and What It Means for Your Score
            </h1>
            <p className="text-lg text-slate-400 leading-relaxed max-w-2xl">
              Since September 2025, every ACT test-taker sits the redesigned &quot;Enhanced ACT.&quot; It&apos;s shorter, makes Science optional, and changes how your composite is calculated. Here&apos;s exactly what&apos;s different from the old format — and how you can use these changes to your advantage.
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
            <h2 id="key-facts-heading" className="sr-only">Key facts about the Enhanced ACT</h2>
            <div className="grid sm:grid-cols-3 gap-4">
              {[
                { icon: '⏱️', label: 'Core test time', value: '~2h 5m', sub: 'Down from ~2h 55m', color: '#34d399' },
                { icon: '🔬', label: 'Science section', value: 'Optional', sub: 'No longer in composite', color: '#6366f1' },
                { icon: '🧮', label: 'Composite formula', value: 'E + M + R ÷ 3', sub: 'Science excluded', color: '#ec4899' },
              ].map(card => (
                <div key={card.label} className="bg-[#12141f] border border-white/8 rounded-xl p-5 hover:border-white/20 transition-colors">
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

          {/* WHY IT CHANGED */}
          <section aria-labelledby="why-heading">
            <h2 id="why-heading" className="text-2xl font-bold text-white mb-4">Why did the ACT change?</h2>
            <div className="space-y-4 text-slate-400 leading-relaxed">
              <p>
                The ACT began rolling out the Enhanced format with <strong className="text-white">online national testing in April 2025</strong>, extending to all paper testing by <strong className="text-white">September 2025</strong>. The organization cited student and educator feedback requesting a shorter, less fatiguing test that still measures the same core academic readiness.
              </p>
              <p>
                Rather than a full redesign of content difficulty (like the recent digital SAT overhaul), the ACT changes focus heavily on <strong className="text-white">test length, section structure, and optionality</strong>. The underlying skills tested in English, Math, and Reading remain consistent with prior versions. Because the difficulty remains stable, historical percentile benchmarks and college score expectations have not shifted dramatically.
              </p>
            </div>
          </section>

          {/* WHAT CHANGED — CARDS */}
          <section aria-labelledby="changes-heading">
            <h2 id="changes-heading" className="text-2xl font-bold text-white mb-5">Old ACT vs Enhanced ACT: every change</h2>
            <div className="space-y-4">
              {CHANGES.map(change => (
                <div key={change.title} className="bg-[#12141f] border border-white/8 rounded-xl p-5">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-xl" aria-hidden="true">{change.icon}</span>
                    <h3 className="text-base font-semibold text-white">{change.title}</h3>
                    {change.badge && (
                      <span className="text-[10px] font-semibold uppercase tracking-wider px-2 py-0.5 rounded-full bg-amber-500/10 text-amber-400 border border-amber-500/20">{change.badge}</span>
                    )}
                  </div>
                  <div className="grid sm:grid-cols-2 gap-3 mb-3">
                    <div className="bg-white/4 rounded-lg p-3">
                      <p className="text-[10px] uppercase tracking-wider text-slate-500 mb-1">Before (pre-2025)</p>
                      <p className="text-sm text-slate-300 font-medium">{change.before}</p>
                    </div>
                    <div className="rounded-lg p-3" style={{ backgroundColor: `${change.color}15` }}>
                      <p className="text-[10px] uppercase tracking-wider mb-1" style={{ color: change.color }}>Now (Enhanced ACT)</p>
                      <p className="text-sm text-white font-medium">{change.after}</p>
                    </div>
                  </div>
                  <p className="text-sm text-slate-400 leading-relaxed">{change.body}</p>
                </div>
              ))}
            </div>
          </section>

          {/* SCORING IMPACT */}
          <section aria-labelledby="scoring-impact-heading" className="bg-indigo-500/5 border border-indigo-500/20 rounded-2xl p-6 md:p-8">
            <h2 id="scoring-impact-heading" className="text-2xl font-bold text-white mb-4">The Math Behind the New Composite</h2>
            <p className="text-slate-400 leading-relaxed mb-6">
              Removing the Science section from the core composite fundamentally changes how your score is weighted. Previously, each section accounted for 25% of your final score. Now, the remaining three sections carry significantly more weight.
            </p>
            <div className="grid sm:grid-cols-2 gap-6">
              <div>
                <h4 className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-3">Old Weighting (÷ 4)</h4>
                <ul className="space-y-2">
                  <li className="flex justify-between text-sm"><span className="text-slate-300">English</span><span className="font-mono text-slate-500">25%</span></li>
                  <li className="flex justify-between text-sm"><span className="text-slate-300">Math</span><span className="font-mono text-slate-500">25%</span></li>
                  <li className="flex justify-between text-sm"><span className="text-slate-300">Reading</span><span className="font-mono text-slate-500">25%</span></li>
                  <li className="flex justify-between text-sm"><span className="text-slate-300">Science</span><span className="font-mono text-slate-500">25%</span></li>
                </ul>
              </div>
              <div>
                <h4 className="text-xs font-semibold text-indigo-400 uppercase tracking-wider mb-3">New Weighting (÷ 3)</h4>
                <ul className="space-y-2">
                  <li className="flex justify-between text-sm"><span className="text-white">English</span><span className="font-mono text-indigo-400">33.3%</span></li>
                  <li className="flex justify-between text-sm"><span className="text-white">Math</span><span className="font-mono text-indigo-400">33.3%</span></li>
                  <li className="flex justify-between text-sm"><span className="text-white">Reading</span><span className="font-mono text-indigo-400">33.3%</span></li>
                  <li className="flex justify-between text-sm line-through opacity-50"><span className="text-slate-400">Science</span><span className="font-mono text-slate-500">Excluded</span></li>
                </ul>
              </div>
            </div>
            <div className="mt-6 p-4 bg-[#0a0c14] rounded-lg border border-white/5">
              <p className="text-sm text-slate-400">
                <strong className="text-white">The Takeaway:</strong> If you excel in ELA (English/Reading), this format heavily favors you, as language skills now dictate 66.6% of your composite score. If Science was historically your strongest subject, you will need to double down on Math to maintain a high STEM profile.
              </p>
            </div>
          </section>

          {/* SHOULD YOU TAKE SCIENCE */}
          <section aria-labelledby="science-heading">
            <h2 id="science-heading" className="text-2xl font-bold text-white mb-4">Should you still take the Science section?</h2>
            <div className="space-y-4 text-slate-400 leading-relaxed">
              <p>
                Since Science no longer affects your core composite score out of 36, the decision to sit for the extra section comes down to your intended major and target colleges. 
              </p>
            </div>
            <div className="mt-5 grid sm:grid-cols-2 gap-4">
              <div className="bg-[#12141f] border border-emerald-500/20 rounded-xl p-5 hover:border-emerald-500/40 transition-colors">
                <span className="text-2xl block mb-3" aria-hidden="true">✅</span>
                <h3 className="text-base font-semibold text-white mb-2">Take it if you&apos;re applying to:</h3>
                <p className="text-sm text-slate-400 leading-relaxed">Engineering, pre-med, computer science, or any STEM program where admissions or scholarship criteria specifically reference a STEM score. It is also worth taking if you are naturally a strong science student—providing an extra data point of excellence on your application rarely hurts.</p>
              </div>
              <div className="bg-[#12141f] border border-white/8 rounded-xl p-5 hover:border-white/20 transition-colors">
                <span className="text-2xl block mb-3" aria-hidden="true">⏭️</span>
                <h3 className="text-base font-semibold text-white mb-2">Skip it if you&apos;re applying to:</h3>
                <p className="text-sm text-slate-400 leading-relaxed">Humanities, business, nursing, or liberal arts programs with no heavy STEM emphasis. Skipping it shortens your test day significantly, saves you money on registration, and has zero effect on your headline composite score.</p>
              </div>
            </div>
          </section>

          {/* PREP STRATEGIES */}
          <section aria-labelledby="prep-heading">
            <h2 id="prep-heading" className="text-2xl font-bold text-white mb-5">How to prepare for the new format</h2>
            <div className="grid gap-4">
              {PREP_TIPS.map((tip, idx) => (
                <div key={idx} className="flex gap-4 p-5 bg-[#12141f] border border-white/8 rounded-xl">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-indigo-500/20 text-indigo-400 flex items-center justify-center font-bold text-sm">
                    {idx + 1}
                  </div>
                  <div>
                    <h3 className="text-base font-semibold text-white mb-1.5">{tip.title}</h3>
                    <p className="text-sm text-slate-400 leading-relaxed">{tip.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* CALCULATOR CTA */}
          <div className="bg-gradient-to-br from-[#12141f] to-[#1a1f33] border border-emerald-500/30 rounded-2xl p-7 md:p-10 flex flex-col sm:flex-row gap-6 items-start sm:items-center justify-between shadow-2xl shadow-emerald-900/10">
            <div className="max-w-md">
              <div className="text-3xl mb-3" aria-hidden="true">🧮</div>
              <h3 className="text-xl font-bold text-white mb-2">See your Enhanced ACT composite</h3>
              <p className="text-sm text-slate-400 leading-relaxed">
                Our calculator is fully updated for the new Enhanced ACT formula. Enter your raw English, Math, and Reading scores to see how the new 3-section average affects your final score and national percentile.
              </p>
            </div>
            <Link href="/exams/act"
              className="shrink-0 inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white px-6 py-3 rounded-xl font-bold transition-all hover:shadow-lg hover:shadow-emerald-600/20 hover:-translate-y-0.5">
              ACT Score Calculator →
            </Link>
          </div>

          {/* FAQ */}
          <section aria-labelledby="faq-heading">
            <h2 id="faq-heading" className="text-2xl font-bold text-white mb-5">Frequently asked questions</h2>
            <div className="space-y-3">
              {jsonLdFAQ.mainEntity.map((faq, i) => (
                <details key={i} className="bg-[#12141f] border border-white/7 rounded-xl overflow-hidden group">
                  <summary className="px-5 py-4 text-sm font-medium text-white cursor-pointer list-none flex items-center justify-between gap-4">
                    {faq.name}
                    <span className="text-slate-400 shrink-0 group-open:rotate-180 transition-transform duration-200" aria-hidden="true">↓</span>
                  </summary>
                  <div className="px-5 pb-4 pt-3 border-t border-white/6">
                    <p className="text-sm text-slate-400 leading-relaxed">{faq.acceptedAnswer.text}</p>
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
                { title: 'ACT Superscore Explained', href: '/exams/act/superscore', color: '#ec4899' },
                { title: 'ACT Scores: Release Dates & Reports', href: '/exams/act/scores', color: '#6366f1' },
                { title: 'ACT Revision Tips & Strategy 2026', href: '/exams/act/revision-tips', color: '#f59e0b' },
                { title: 'SAT vs ACT: Complete Comparison', href: '/articles/sat-vs-act-complete-comparison', color: '#a855f7' },
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
