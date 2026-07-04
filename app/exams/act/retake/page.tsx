// app/exams/act/retake/page.tsx
// SHOULD I RETAKE THE ACT — Decision Page
// Targets: "should I retake the ACT", "is it worth retaking the ACT",
//          "ACT retake score improvement", "how many times can I take the ACT"

import type { Metadata } from 'next';
import Link from 'next/link';
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';

export const metadata: Metadata = {
  title: 'Should You Retake the ACT? 2026 Decision Guide & Improvement Data | GradesNova',
  description:
    'Should you retake the ACT? Discover average score improvement data by attempt, a decision framework based on your target schools, the impact of the Enhanced ACT format, and superscoring strategies.',
  alternates: { canonical: 'https://gradesnova.com/exams/act/retake' },
  openGraph: {
    title: 'Should You Retake the ACT? 2026 Decision Guide',
    description:
      'A data-driven framework for deciding whether to retake the ACT, including average score improvement by attempt and superscoring math.',
    url: 'https://gradesnova.com/exams/act/retake',
    type: 'article',
    siteName: 'GradesNova',
  },
  robots: { index: true, follow: true },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Should You Retake the ACT? 2026 Decision Guide',
  description:
    'A framework for deciding whether to retake the ACT, covering score improvement trends, superscoring under the new Enhanced ACT format, cost, and target-school fit.',
  url: 'https://gradesnova.com/exams/act/retake',
  author: { '@type': 'Organization', name: 'GradesNova' },
  publisher: { '@type': 'Organization', name: 'GradesNova', url: 'https://gradesnova.com' },
  dateModified: '2026-06-29',
};

const jsonLdFAQ = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Is it worth retaking the ACT?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'It is usually worth retaking if your current score is below the middle 50% range for your target schools, if you have a clear weak section that pulled down your composite, or if you had a specific disruption (illness, testing anxiety, a scheduling issue) during your first attempt. It is less worth it if your score already sits at or above your target schools\' middle 50% range.',
      },
    },
    {
      '@type': 'Question',
      name: 'How much do ACT scores typically improve on a retake?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'ACT data indicates that over 50% of students who retake the exam increase their composite score. The largest average gains (typically 1 to 2 points) occur between a first and second attempt. Gains diminish significantly by the third or fourth attempt unless accompanied by a drastic change in study habits.',
      },
    },
    {
      '@type': 'Question',
      name: 'How many times can you take the ACT?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'You can register for the ACT up to 12 times total. Most competitive applicants take it two to three times. While there is no rule against taking it more, score gains typically flatline after the third attempt, making further testing a poor use of time and money.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can retaking the ACT hurt my application?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Generally no. Because of Score Choice and superscoring, you control which scores get sent to the vast majority of colleges. A very small number of elite universities require your full testing history, but even they understand that taking the test 2-3 times is standard practice.',
      },
    },
    {
      '@type': 'Question',
      name: 'How does the new Enhanced ACT change retake strategy?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Because the Enhanced ACT composite only averages three sections (English, Math, Reading), improving just one weak section has a mathematically larger impact on your overall composite than it did under the old four-section format.',
      },
    },
  ],
};

const STATS_DATA = [
  { metric: '57%', label: 'Of retesters increase their score', color: '#34d399' },
  { metric: '1-2 Pts', label: 'Average gain on 2nd attempt', color: '#6366f1' },
  { metric: '21%', label: 'Of retesters see a score drop', color: '#f59e0b' },
  { metric: '3 Max', label: 'Recommended lifetime attempts', color: '#ec4899' },
];

const IMPROVEMENT_SIGNALS = [
  { icon: '📉', title: 'Below your target school range', color: '#ef4444', body: 'Your composite sits under the 25th percentile for admitted students at your target schools. This is the clearest, most objective signal that a retake could meaningfully shift your application from the "maybe" pile to the "yes" pile.' },
  { icon: '🎯', title: 'One anomalous weak section', color: '#f59e0b', body: 'You scored a 32 on English and Reading, but a 24 on Math. A retake focused intensely on math concepts, combined with a college\'s superscoring policy, can drastically raise your composite without requiring you to perfectly replicate your English/Reading performance.' },
  { icon: '😰', title: 'Test-day disruption or anxiety', color: '#6366f1', body: 'Illness, an incredibly noisy testing center, technical issues with digital testing, or an unusual spike in anxiety affected your performance. If your official score is 3+ points lower than your timed practice tests, retake it.' },
  { icon: '📈', title: 'You took it "cold" the first time', color: '#a855f7', body: 'You sat for your first attempt with minimal preparation just to establish a baseline. Committed, targeted prep before a second attempt almost universally produces the largest single jump in a student\'s scoring history.' },
];

const SKIP_SIGNALS = [
  { icon: '✅', title: 'Already safely above target', color: '#34d399', body: 'Your composite already sits at or above the 75th percentile for every school on your list. Moving from a 34 to a 35 will not be the deciding factor in your admission — your time is better spent perfecting your personal statement.' },
  { icon: '🔁', title: 'Hitting the "Testing Wall"', color: '#6b7280', body: 'You have tested 3 or more times using the same preparation approach, and your scores have flatlined. Without a fundamental change to how you are studying (like hiring a specialized tutor), another attempt is unlikely to yield new results.' },
  { icon: '⏳', title: 'Seniors facing deadline pressure', color: '#ec4899', body: 'It is late fall of your senior year. Your remaining test dates don\'t guarantee scores will arrive before Early Action/Early Decision deadlines, leaving you no runway for meaningful additional prep.' },
];

const HUB_PAGES = [
  { title: 'ACT Score Calculator', desc: 'Estimate your composite under the Enhanced format.', href: '/exams/act', color: '#34d399', icon: '🧮' },
  { title: 'ACT Superscore Explained', desc: 'How your best sections combine across attempts.', href: '/exams/act/superscore', color: '#ec4899', icon: '⭐' },
  { title: 'Enhanced ACT Deep Dive', desc: 'What changed in the new 2026 test format.', href: '/exams/act/enhanced-act', color: '#6366f1', icon: '🆕' },
  { title: 'ACT Revision Tips', desc: 'Study strategy for your next attempt.', href: '/exams/act/revision-tips', color: '#f59e0b', icon: '📖' },
];

export default function ActRetakePage() {
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
                <li className="text-slate-400" aria-current="page">Should I Retake?</li>
              </ol>
            </nav>

            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-pink-500/15 flex items-center justify-center text-xl" aria-hidden="true">🔁</div>
              <span className="text-xs font-mono text-pink-400/70 uppercase tracking-widest">ACT · Retake Strategy</span>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold text-white tracking-tight mb-4 leading-tight">
              Should You Retake the ACT? A Complete Decision Guide
            </h1>
            <p className="text-lg text-slate-400 leading-relaxed max-w-2xl">
              Deciding to retake the ACT shouldn&apos;t be based on a vague desire for a &quot;better&quot; score. It requires a data-driven look at your target schools, superscoring math, and the reality of diminishing returns. Here is how to make the right call.
            </p>

            <div className="flex items-center gap-4 mt-5 text-xs text-slate-500">
              <span>Updated June 2026</span>
              <span>·</span>
              <span>~10 min read</span>
            </div>
          </div>
        </header>

        <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">

          {/* THE DATA BEHIND RETAKING */}
          <section aria-labelledby="data-heading">
            <h2 id="data-heading" className="text-2xl font-bold text-white mb-6">The Data: What actually happens on a retake?</h2>
            <p className="text-slate-400 leading-relaxed mb-6">
              Before committing time and money to another test date, it helps to look at the statistical reality of ACT retesting. The ACT\'s own historical data shows clear trends for students taking the exam a second or third time.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {STATS_DATA.map(stat => (
                <div key={stat.label} className="bg-[#12141f] border border-white/8 rounded-xl p-4 text-center hover:border-white/20 transition-colors">
                  <p className="text-2xl md:text-3xl font-bold font-mono mb-2" style={{ color: stat.color }}>{stat.metric}</p>
                  <p className="text-xs text-slate-400 leading-snug">{stat.label}</p>
                </div>
              ))}
            </div>
            <div className="mt-6 p-5 bg-indigo-500/5 border border-indigo-500/20 rounded-xl">
              <p className="text-sm text-slate-300 leading-relaxed">
                <strong className="text-white">The Diminishing Returns Rule:</strong> The biggest leap in score almost always happens between the first and second attempt as students adjust to the pacing. By attempt number four, scores tend to plateau—or even drop—due to test burnout.
              </p>
            </div>
          </section>

          {/* SIGNALS TO RETAKE */}
          <section aria-labelledby="retake-signals-heading">
            <h2 id="retake-signals-heading" className="text-2xl font-bold text-white mb-5">Green Lights: Signs a retake is worth it</h2>
            <div className="space-y-4">
              {IMPROVEMENT_SIGNALS.map(s => (
                <div key={s.title} className="bg-[#12141f] border border-white/8 rounded-xl p-5 md:p-6 flex flex-col sm:flex-row gap-4 sm:gap-6">
                  <div className="w-12 h-12 shrink-0 rounded-full bg-white/5 flex items-center justify-center text-2xl border border-white/5" aria-hidden="true">
                    {s.icon}
                  </div>
                  <div>
                    <h3 className="text-base font-semibold text-white mb-2" style={{ color: s.color }}>{s.title}</h3>
                    <p className="text-sm text-slate-400 leading-relaxed">{s.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* SIGNALS TO SKIP */}
          <section aria-labelledby="skip-signals-heading">
            <h2 id="skip-signals-heading" className="text-2xl font-bold text-white mb-5">Red Lights: Signs you should move on</h2>
            <div className="space-y-4">
              {SKIP_SIGNALS.map(s => (
                <div key={s.title} className="bg-[#12141f] border border-white/8 rounded-xl p-5 md:p-6 flex flex-col sm:flex-row gap-4 sm:gap-6">
                  <div className="w-12 h-12 shrink-0 rounded-full bg-white/5 flex items-center justify-center text-2xl border border-white/5" aria-hidden="true">
                    {s.icon}
                  </div>
                  <div>
                    <h3 className="text-base font-semibold text-white mb-2" style={{ color: s.color }}>{s.title}</h3>
                    <p className="text-sm text-slate-400 leading-relaxed">{s.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* SUPERSCORE & ENHANCED ACT MATH */}
          <section aria-labelledby="superscore-math-heading">
            <h2 id="superscore-math-heading" className="text-2xl font-bold text-white mb-4">The new math of Superscoring</h2>
            <div className="space-y-5 text-slate-400 leading-relaxed">
              <p>
                When a college <Link href="/exams/act/superscore" className="text-emerald-400 hover:underline">superscores the ACT</Link>, they take your highest individual section scores across all dates you tested and combine them into a new, optimized composite score.
              </p>
              <div className="bg-[#12141f] border border-emerald-500/20 rounded-xl p-5 md:p-6">
                <h3 className="text-white font-semibold mb-3">Why this matters more in 2026:</h3>
                <p className="text-sm mb-4">
                  Under the new Enhanced ACT format, the core composite is derived from only <strong>three</strong> sections (English, Math, Reading), with Science being optional. 
                </p>
                <ul className="list-disc pl-5 space-y-2 text-sm text-slate-300">
                  <li>Previously, raising one section by 3 points only raised your overall composite by 0.75 points (since it was divided by 4).</li>
                  <li>Now, raising one section by 3 points raises your overall composite by a full <strong>1.0 point</strong> (divided by 3).</li>
                </ul>
              </div>
              <p>
                If your target schools superscore, a retake only needs to beat your <em>weakest</em> section. You can walk into the testing center with zero pressure regarding the sections you\'ve already crushed, allowing for laser-focused preparation.
              </p>
            </div>
          </section>

          {/* TIMING YOUR RETAKE */}
          <section aria-labelledby="timing-heading" className="border-t border-white/8 pt-12">
            <h2 id="timing-heading" className="text-2xl font-bold text-white mb-4">When is the best time to retake?</h2>
            <p className="text-slate-400 leading-relaxed mb-6">
              Timing is critical. You need enough distance from your last exam to actually learn new material, but you don\'t want to wait so long that you forget your test-taking strategies.
            </p>
            <div className="grid sm:grid-cols-2 gap-5">
              <div className="bg-white/5 rounded-xl p-5 border border-white/5">
                <h4 className="text-white font-semibold mb-2">The Spring Junior Strategy</h4>
                <p className="text-sm text-slate-400">Taking the test initially in February/March gives you the perfect runway to study your weak points and retake the exam in June or July. You finish testing before senior year even begins.</p>
              </div>
              <div className="bg-white/5 rounded-xl p-5 border border-white/5">
                <h4 className="text-white font-semibold mb-2">The Fall Senior Push</h4>
                <p className="text-sm text-slate-400">If you took it in late Spring and need one final bump, the September and October test dates are your last resort. Ensure you check if October scores will arrive in time for November 1st Early Action deadlines.</p>
              </div>
            </div>
          </section>

          {/* CALCULATOR CTA */}
          <div className="bg-gradient-to-br from-[#12141f] to-[#1a1f33] border border-pink-500/30 rounded-2xl p-7 md:p-10 flex flex-col sm:flex-row gap-6 items-start sm:items-center justify-between shadow-2xl shadow-pink-900/10">
            <div className="max-w-md">
              <div className="text-3xl mb-3" aria-hidden="true">🧮</div>
              <h3 className="text-xl font-bold text-white mb-2">Model your potential retake score</h3>
              <p className="text-sm text-slate-400 leading-relaxed">
                Enter a projected, improved raw score for your weakest section alongside your existing strong sections to see what composite a targeted retake could realistically produce.
              </p>
            </div>
            <Link href="/exams/act"
              className="shrink-0 inline-flex items-center gap-2 bg-pink-600 hover:bg-pink-500 text-white px-6 py-3 rounded-xl font-bold transition-all hover:shadow-lg hover:shadow-pink-600/20 hover:-translate-y-0.5">
              Launch ACT Calculator →
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
                { title: 'Enhanced ACT 2026: What Changed', href: '/exams/act/enhanced-act', color: '#34d399' },
                { title: 'ACT Revision Tips & Strategy', href: '/exams/act/revision-tips', color: '#f59e0b' },
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
