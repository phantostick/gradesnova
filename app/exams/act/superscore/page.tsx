// app/exams/act/superscore/page.tsx
// ACT SUPERSCORE — Deep Dive Content Page
// Targets: "ACT superscore", "ACT superscoring explained", "how does ACT superscore work",
//          "which colleges superscore the ACT", "ACT superscore calculator"

import type { Metadata } from 'next';
import Link from 'next/link';
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';

export const metadata: Metadata = {
  title: 'ACT Superscore Explained 2026: How It Works & Which Colleges Use It | GradesNova',
  description:
    'What is an ACT superscore and how is it calculated? Full breakdown of ACT superscoring under the Enhanced ACT format, which colleges accept superscores, and whether retaking is worth it.',
  alternates: { canonical: 'https://gradesnova.com/exams/act/superscore' },
  openGraph: {
    title: 'ACT Superscore Explained 2026: How It Works & Which Colleges Use It',
    description:
      'How ACT superscoring is calculated, which colleges accept it, and how to decide if a retake is worth it.',
    url: 'https://gradesnova.com/exams/act/superscore',
    type: 'article',
    siteName: 'GradesNova',
  },
  robots: { index: true, follow: true },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'ACT Superscore Explained 2026: How It Works & Which Colleges Use It',
  description:
    'A complete guide to ACT superscoring — how the calculation works, which colleges accept it, and whether a retake is likely to raise your superscore.',
  url: 'https://gradesnova.com/exams/act/superscore',
  author: { '@type': 'Organization', name: 'GradesNova' },
  publisher: { '@type': 'Organization', name: 'GradesNova', url: 'https://gradesnova.com' },
  dateModified: '2026-06-22',
};

const jsonLdFAQ = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is an ACT superscore?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'An ACT superscore takes your highest individual section score (English, Math, and Reading) across all of your test attempts and averages them together to form a new composite — even if those high scores came from different test dates.',
      },
    },
    {
      '@type': 'Question',
      name: 'How is the ACT superscore calculated under the Enhanced ACT?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'ACT automatically calculates your superscore using your best English, Math, and Reading section scores from any test date, then averages those three numbers and rounds to the nearest whole number. Science is not included in the superscore composite.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do all colleges accept ACT superscores?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No. Superscore policies vary by institution. Many public universities and a large share of private colleges accept or prefer superscores, but some schools only consider your single best test-date composite, and a smaller number require all scores from every attempt. Always check the admissions policy for each school on your list.',
      },
    },
    {
      '@type': 'Question',
      name: 'Does ACT calculate my superscore automatically?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. If you have taken the ACT more than once, ACT automatically calculates and displays your superscore in your MyACT account alongside your individual test-date composites. You do not need to request it separately.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is it worth retaking the ACT for a better superscore?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'It is often worth it if you have one clearly weak section pulling down an otherwise strong composite, since a retake only needs to improve that section to raise your superscore. It is less worthwhile if your section scores are already balanced and close to your best, since further attempts have diminishing returns.',
      },
    },
    {
      '@type': 'Question',
      name: 'Does ACT superscoring work the same way as SAT superscoring?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The concept is similar — both combine your best section-level results across test dates — but the mechanics differ. The SAT combines best Math and best Evidence-Based Reading and Writing scores from two sections, while the ACT combines best English, Math, and Reading scores from three sections. Colleges that superscore one exam do not automatically superscore the other, so check each policy separately.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can superscoring ever lower my results compared to a single test date?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No. A superscore can only match or exceed your best single-sitting composite, since it is built entirely from your highest section scores across every attempt. In the rare case where one test date already contains your best score in every section, the superscore will simply equal that composite.',
      },
    },
  ],
};

const SUPERSCORE_EXAMPLE = [
  { attempt: 'Attempt 1 (Feb)', english: 28, math: 24, reading: 30, composite: 27, color: '#6366f1' },
  { attempt: 'Attempt 2 (Jun)', english: 26, math: 29, reading: 28, composite: 28, color: '#a855f7' },
  { attempt: 'Superscore', english: 28, math: 29, reading: 30, composite: 29, color: '#34d399', best: true },
];

const SUPERSCORE_EXAMPLE_TWO = [
  { attempt: 'Attempt 1 (Sep)', english: 22, math: 26, reading: 24, composite: 24, color: '#6366f1' },
  { attempt: 'Attempt 2 (Dec)', english: 25, math: 23, reading: 27, composite: 25, color: '#a855f7' },
  { attempt: 'Attempt 3 (Apr)', english: 24, math: 27, reading: 25, composite: 25, color: '#f59e0b' },
  { attempt: 'Superscore', english: 25, math: 27, reading: 27, composite: 26, color: '#34d399', best: true },
];

const HUB_PAGES = [
  { title: 'ACT Score Calculator', desc: 'Estimate your composite and section scores instantly.', href: '/exams/act', color: '#34d399', icon: '🧮' },
  { title: 'Enhanced ACT Explained', desc: 'What changed in the 2025 ACT redesign.', href: '/exams/act/enhanced-act', color: '#6366f1', icon: '🆕' },
  { title: 'ACT Scores Guide', desc: 'Release dates, score reports, and rescoring.', href: '/exams/act/scores', color: '#ec4899', icon: '📊' },
  { title: 'What Colleges Can I Get Into?', desc: 'Every ACT score explained with example schools.', href: '/exams/act/colleges', color: '#a855f7', icon: '🎓' },
];

export default function ActSuperscorePage() {
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
                <li className="text-slate-400" aria-current="page">Superscore</li>
              </ol>
            </nav>

            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-emerald-500/15 flex items-center justify-center text-xl" aria-hidden="true">⭐</div>
              <span className="text-xs font-mono text-emerald-400/70 uppercase tracking-widest">ACT · Superscore · 2026</span>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold text-white tracking-tight mb-4 leading-tight">
              ACT Superscore Explained: How It Works & Which Colleges Use It
            </h1>
            <p className="text-lg text-slate-400 leading-relaxed max-w-2xl">
              If you&apos;ve taken the ACT more than once, your superscore might already be higher than any single test-date composite you&apos;ve seen. Here&apos;s exactly how it&apos;s calculated, which schools accept it, and whether a retake is worth your time.
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
            <h2 id="key-facts-heading" className="sr-only">Key facts about ACT superscoring</h2>
            <div className="grid sm:grid-cols-3 gap-4">
              {[
                { icon: '🧮', label: 'Calculated by', value: 'ACT automatically', sub: 'Shown in MyACT account', color: '#34d399' },
                { icon: '📚', label: 'Sections used', value: 'E + M + R', sub: 'Science excluded', color: '#6366f1' },
                { icon: '🎓', label: 'College acceptance', value: 'Varies', sub: 'Check each school\'s policy', color: '#ec4899' },
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

          {/* WHAT IS SUPERSCORE */}
          <section aria-labelledby="what-heading">
            <h2 id="what-heading" className="text-2xl font-bold text-white mb-4">What is an ACT superscore?</h2>
            <div className="space-y-4 text-slate-400 leading-relaxed">
              <p>
                An ACT superscore takes your <strong className="text-white">highest section score</strong> — English, Math, and Reading — from across every test date you&apos;ve sat, and averages them into a single new composite. It doesn&apos;t matter if your best English score came from February and your best Math score came from June; the superscore combines your peak performance in each area.
              </p>
              <p>
                Under the Enhanced ACT format, Science is <strong className="text-white">not included</strong> in the superscore calculation, consistent with its removal from the regular composite. If you take Science on multiple dates, ACT still reports your best Science attempt separately, but it won&apos;t factor into your superscore composite.
              </p>
              <p>
                Superscoring exists because standardized test performance is noisy on any single day — fatigue, timing pressure on one section, an unfamiliar passage topic, or simple bad luck with a harder question set can all pull down one section without reflecting your actual ability. By letting your best section-level results stand on their own, the superscore is meant to represent a more accurate picture of your skill ceiling than any one sitting alone.
              </p>
            </div>
          </section>

          {/* WORKED EXAMPLE */}
          <section aria-labelledby="example-heading">
            <h2 id="example-heading" className="text-2xl font-bold text-white mb-4">Worked example</h2>
            <p className="text-slate-400 leading-relaxed mb-5">
              Here&apos;s how superscoring plays out for a student who tested twice:
            </p>
            <div className="overflow-x-auto rounded-xl border border-white/8">
              <table className="w-full text-sm min-w-[480px]" aria-label="ACT superscore worked example">
                <thead>
                  <tr className="bg-white/4 border-b border-white/8">
                    <th scope="col" className="text-left px-4 py-3 text-xs font-semibold text-slate-400 uppercase">Attempt</th>
                    <th scope="col" className="text-left px-4 py-3 text-xs font-semibold text-slate-400 uppercase">English</th>
                    <th scope="col" className="text-left px-4 py-3 text-xs font-semibold text-slate-400 uppercase">Math</th>
                    <th scope="col" className="text-left px-4 py-3 text-xs font-semibold text-slate-400 uppercase">Reading</th>
                    <th scope="col" className="text-left px-4 py-3 text-xs font-semibold text-slate-400 uppercase">Composite</th>
                  </tr>
                </thead>
                <tbody>
                  {SUPERSCORE_EXAMPLE.map(row => (
                    <tr key={row.attempt} className={`border-b border-white/5 last:border-0 ${row.best ? 'bg-emerald-500/8' : ''}`}>
                      <td className="px-4 py-3 font-semibold text-xs" style={{ color: row.color }}>{row.attempt}</td>
                      <td className="px-4 py-3 text-xs text-slate-300 font-mono">{row.english}</td>
                      <td className="px-4 py-3 text-xs text-slate-300 font-mono">{row.math}</td>
                      <td className="px-4 py-3 text-xs text-slate-300 font-mono">{row.reading}</td>
                      <td className="px-4 py-3 text-xs font-mono font-bold" style={{ color: row.color }}>{row.composite}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-sm text-slate-500 mt-3">
              Neither test date alone reached a 29 composite — but combining the best English (28), best Math (29), and best Reading (30) from across both attempts produces a superscore of 29, two points higher than either individual sitting.
            </p>

            <p className="text-slate-400 leading-relaxed mt-8 mb-5">
              Superscoring compounds further across three or more attempts. Here&apos;s a second example with a student who tested three times, showing a smaller but still meaningful gain per additional sitting:
            </p>
            <div className="overflow-x-auto rounded-xl border border-white/8">
              <table className="w-full text-sm min-w-[480px]" aria-label="Second ACT superscore worked example across three attempts">
                <thead>
                  <tr className="bg-white/4 border-b border-white/8">
                    <th scope="col" className="text-left px-4 py-3 text-xs font-semibold text-slate-400 uppercase">Attempt</th>
                    <th scope="col" className="text-left px-4 py-3 text-xs font-semibold text-slate-400 uppercase">English</th>
                    <th scope="col" className="text-left px-4 py-3 text-xs font-semibold text-slate-400 uppercase">Math</th>
                    <th scope="col" className="text-left px-4 py-3 text-xs font-semibold text-slate-400 uppercase">Reading</th>
                    <th scope="col" className="text-left px-4 py-3 text-xs font-semibold text-slate-400 uppercase">Composite</th>
                  </tr>
                </thead>
                <tbody>
                  {SUPERSCORE_EXAMPLE_TWO.map(row => (
                    <tr key={row.attempt} className={`border-b border-white/5 last:border-0 ${row.best ? 'bg-emerald-500/8' : ''}`}>
                      <td className="px-4 py-3 font-semibold text-xs" style={{ color: row.color }}>{row.attempt}</td>
                      <td className="px-4 py-3 text-xs text-slate-300 font-mono">{row.english}</td>
                      <td className="px-4 py-3 text-xs text-slate-300 font-mono">{row.math}</td>
                      <td className="px-4 py-3 text-xs text-slate-300 font-mono">{row.reading}</td>
                      <td className="px-4 py-3 text-xs font-mono font-bold" style={{ color: row.color }}>{row.composite}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-sm text-slate-500 mt-3">
              Notice the gain shrinks as attempts add up — the jump from two to three sittings only added one point here, versus a two-point jump in the first example after just two attempts. This pattern (fast early gains, then diminishing returns) is common and is discussed further in the retake section below.
            </p>
          </section>

          {/* SUPERSCORE VS SCORE CHOICE */}
          <section aria-labelledby="vs-heading">
            <h2 id="vs-heading" className="text-2xl font-bold text-white mb-4">Superscoring vs. Score Choice: what&apos;s the difference?</h2>
            <div className="space-y-4 text-slate-400 leading-relaxed">
              <p>
                It&apos;s easy to confuse two separate concepts: <strong className="text-white">superscoring</strong> and <strong className="text-white">choosing which score reports to send</strong>. Superscoring is something a college does on its end, combining your best sections across whichever score reports you submit. Sending scores is something you control — you decide which test dates to release to which schools.
              </p>
              <p>
                This matters strategically. If a school superscores, sending all of your test dates generally helps you, since more data points mean more chances for a high section score to enter the mix. If a school does <em>not</em> superscore and only looks at your best single composite, sending every date still doesn&apos;t hurt you at most schools — but it&apos;s worth confirming, since a few institutions do ask you to self-report every attempt regardless of which one they ultimately consider.
              </p>
            </div>
          </section>

          {/* WHICH COLLEGES USE IT */}
          <section aria-labelledby="colleges-heading">
            <h2 id="colleges-heading" className="text-2xl font-bold text-white mb-4">Which colleges accept ACT superscores?</h2>
            <div className="space-y-4 text-slate-400 leading-relaxed mb-5">
              <p>
                Superscore policy is set by each individual college, not by ACT. Policies generally fall into three categories:
              </p>
            </div>
            <div className="grid sm:grid-cols-3 gap-4">
              <div className="bg-[#12141f] border border-emerald-500/20 rounded-xl p-4">
                <span className="text-xl block mb-2" aria-hidden="true">⭐</span>
                <h3 className="text-sm font-semibold text-white mb-1.5">Accepts superscore</h3>
                <p className="text-xs text-slate-400 leading-relaxed">The majority of public universities and many private colleges use your superscore for admissions review, often automatically pulling your best sections across submitted score reports.</p>
              </div>
              <div className="bg-[#12141f] border border-white/8 rounded-xl p-4">
                <span className="text-xl block mb-2" aria-hidden="true">📄</span>
                <h3 className="text-sm font-semibold text-white mb-1.5">Best single date only</h3>
                <p className="text-xs text-slate-400 leading-relaxed">Some schools consider only your highest composite from one sitting, ignoring cross-date section combinations. Check whether you can choose which date to send.</p>
              </div>
              <div className="bg-[#12141f] border border-white/8 rounded-xl p-4">
                <span className="text-xl block mb-2" aria-hidden="true">📚</span>
                <h3 className="text-sm font-semibold text-white mb-1.5">Requires all scores</h3>
                <p className="text-xs text-slate-400 leading-relaxed">A smaller number of selective schools require every test date you&apos;ve sat to be reported, though many still calculate their own superscore internally from those scores.</p>
              </div>
            </div>
            <div className="mt-5 bg-indigo-500/10 border border-indigo-500/20 rounded-xl p-5 flex gap-4 items-start">
              <span className="text-xl shrink-0" aria-hidden="true">💡</span>
              <div>
                <p className="text-sm font-semibold text-white mb-1">Always verify on the school&apos;s admissions page</p>
                <p className="text-sm text-slate-400 leading-relaxed">
                  Superscore policies change and are not standardized. Search &quot;[college name] ACT superscore policy&quot; or check the admissions FAQ before deciding which scores to send.
                </p>
              </div>
            </div>
          </section>

          {/* TEST-OPTIONAL CONTEXT */}
          <section aria-labelledby="optional-heading">
            <h2 id="optional-heading" className="text-2xl font-bold text-white mb-4">How superscoring fits into test-optional admissions</h2>
            <div className="space-y-4 text-slate-400 leading-relaxed">
              <p>
                Many schools have adopted test-optional or test-flexible policies in recent admissions cycles, meaning you can choose whether to submit ACT scores at all. This doesn&apos;t eliminate the relevance of superscoring — if you do decide to submit, a superscore-friendly school will still combine your best sections the same way it always has.
              </p>
              <p>
                The practical decision point is different, though: at a test-optional school, you&apos;re weighing whether your superscore (not just your best single composite) is strong enough to help your application, versus omitting scores entirely and letting other parts of your file speak for you. Because policies shift from year to year and school to school, it&apos;s worth checking the current testing policy for each college on your list well before decision deadlines.
              </p>
            </div>
          </section>

          {/* SHOULD YOU RETAKE */}
          <section aria-labelledby="retake-heading">
            <h2 id="retake-heading" className="text-2xl font-bold text-white mb-4">Should you retake the ACT to raise your superscore?</h2>
            <div className="mt-2 grid sm:grid-cols-2 gap-4">
              {[
                { icon: '✅', title: 'Worth retaking if...', body: 'One section is clearly your weak point while the others are already strong — a retake focused on that section can meaningfully raise your superscore without risking your other scores.', color: '#34d399' },
                { icon: '⚖️', title: 'Think twice if...', body: 'Your section scores are already balanced and close to your ceiling, or your target schools only consider single-sitting composites — in that case, a retake carries more cost (time, fees, stress) than likely upside.', color: '#f59e0b' },
              ].map(tip => (
                <div key={tip.title} className="bg-[#12141f] border border-white/8 rounded-xl p-4">
                  <span className="text-2xl block mb-2" aria-hidden="true">{tip.icon}</span>
                  <h3 className="text-sm font-semibold text-white mb-1.5">{tip.title}</h3>
                  <p className="text-xs text-slate-400 leading-relaxed">{tip.body}</p>
                </div>
              ))}
            </div>
            <div className="mt-6 space-y-4 text-slate-400 leading-relaxed">
              <p>
                A useful way to decide is to look at the spread between your highest and lowest section scores from your most recent attempt. A wide spread — say a 6-point gap between your strongest and weakest section — usually means there&apos;s real upside in a targeted retake, since raising just one section can shift your superscore composite meaningfully. A narrow spread of a point or two suggests you&apos;re closer to your natural ceiling, and further attempts are more likely to produce small, incremental gains rather than another jump.
              </p>
              <p>
                It&apos;s also worth weighing test fatigue. Some students see their scores plateau or even dip on a third or fourth attempt if they haven&apos;t meaningfully changed their prep between sittings. If you&apos;re retaking primarily for superscore purposes, focus your prep specifically on the one or two sections holding your composite back rather than re-studying everything evenly.
              </p>
            </div>
          </section>

          {/* CALCULATOR CTA */}
          <div className="bg-[#12141f] border border-emerald-500/20 rounded-2xl p-7 flex gap-5 items-start">
            <div className="text-2xl shrink-0" aria-hidden="true">🧮</div>
            <div>
              <h3 className="text-base font-semibold text-white mb-1">Calculate your composite for each attempt</h3>
              <p className="text-sm text-slate-400 leading-relaxed mb-3">
                Run your raw section scores from each test date through the calculator, then compare them side by side to estimate your own superscore before ACT posts it officially.
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
                { q: 'What is an ACT superscore?', a: 'Your highest English, Math, and Reading section scores across all test dates, averaged into a new composite — even if the high scores came from different sittings.' },
                { q: 'Does ACT calculate my superscore for me?', a: 'Yes, automatically, and it appears in your MyACT account once you have more than one test date on file. You do not need to request it.' },
                { q: 'Is Science included in the ACT superscore?', a: 'No. Under the Enhanced ACT format, the superscore composite is based only on English, Math, and Reading, matching the regular composite formula.' },
                { q: 'Do all colleges use ACT superscores?', a: 'No. Policies vary — many colleges accept or prefer superscores, some only look at your best single test-date composite, and a few require all scores. Check each school directly.' },
                { q: 'How many times should I take the ACT to maximize my superscore?', a: 'Most students see the best return from 2–3 attempts with focused prep between sittings targeting a specific weak section. Beyond three attempts, incremental gains typically shrink.' },
                { q: 'Does ACT superscoring work the same way as SAT superscoring?', a: 'The idea is similar, but the mechanics differ — the SAT combines two sections (Math and Evidence-Based Reading and Writing) while the ACT combines three (English, Math, Reading). Check each exam\'s policy separately at each school.' },
                { q: 'Can a superscore end up lower than my best single test date?', a: 'No. A superscore can only equal or exceed your best single-sitting composite, since it is always built from your highest section scores across all attempts.' },
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
                { title: 'What Colleges Can I Get Into?', href: '/exams/act/colleges', color: '#a855f7' },
                { title: 'ACT Revision Tips & Strategy 2026', href: '/exams/act/revision-tips', color: '#f59e0b' },
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
