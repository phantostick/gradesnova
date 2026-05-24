// app/articles/gre-vs-cat-for-mba-abroad/page.tsx
import type { Metadata } from 'next';
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'GRE vs CAT for MBA Abroad 2025: Which Exam Opens More Doors? | GradesNova',
  description: 'GRE vs CAT for MBA abroad: can your CAT score get you into a foreign business school? Compare global MBA acceptance, scoring, and strategic advice for Indian applicants.',
  alternates: { canonical: 'https://gradesnova.com/articles/gre-vs-cat-for-mba-abroad' },
  openGraph: {
    title: 'GRE vs CAT for MBA Abroad 2025: Which Exam Opens More Doors?',
    description: 'GRE vs CAT for MBA abroad: compare global acceptance, scoring, and which exam to take for international business school.',
    url: 'https://gradesnova.com/articles/gre-vs-cat-for-mba-abroad',
    type: 'article',
    siteName: 'GradesNova',
  },
  robots: { index: true, follow: true },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'GRE vs CAT for MBA Abroad 2025: Which Exam Opens More Doors?',
  description: 'A guide for Indian applicants comparing GRE and CAT for international MBA admissions.',
  url: 'https://gradesnova.com/articles/gre-vs-cat-for-mba-abroad',
  author: { '@type': 'Organization', name: 'GradesNova' },
  publisher: { '@type': 'Organization', name: 'GradesNova', url: 'https://gradesnova.com' },
  dateModified: '2025-05-24',
};

export default function GreVsCatPage() {
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
                <li className="text-slate-400" aria-current="page">GRE vs CAT for MBA Abroad</li>
              </ol>
            </nav>
            <div className="flex items-center gap-2 mb-3">
              <span className="text-xs font-semibold uppercase tracking-wider px-2.5 py-1 rounded-full bg-purple-500/10 text-purple-400 border border-purple-500/20">GRE · CAT · MBA</span>
            </div>
            <h1 className="text-3xl sm:text-4xl font-bold text-white leading-tight mb-4">
              GRE vs CAT for MBA Abroad: Which Exam Should Indian Students Take?
            </h1>
            <p className="text-slate-400 leading-relaxed text-base">
              A strong CAT score will get you into IIM — but will it help you get into INSEAD, LBS, or MIT Sloan? Here's the honest answer, and when the GRE is the better path.
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
                <span className="text-lg" aria-hidden="true">🌍</span>
                <span className="text-xs text-slate-400 font-medium">GRE Accepted Schools</span>
              </div>
              <p className="text-2xl font-bold font-mono" style={{ color: '#a855f7' }}>1,300+</p>
              <p className="text-xs text-slate-500 mt-0.5">Business programs globally</p>
            </div>
            <div className="bg-[#12141f] border border-white/8 rounded-xl p-4">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-lg" aria-hidden="true">🇮🇳</span>
                <span className="text-xs text-slate-400 font-medium">CAT Accepted Schools</span>
              </div>
              <p className="text-2xl font-bold font-mono" style={{ color: '#f59e0b' }}>~200</p>
              <p className="text-xs text-slate-500 mt-0.5">Almost entirely within India</p>
            </div>
            <div className="bg-[#12141f] border border-white/8 rounded-xl p-4">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-lg" aria-hidden="true">📊</span>
                <span className="text-xs text-slate-400 font-medium">GRE Score Range</span>
              </div>
              <p className="text-2xl font-bold font-mono" style={{ color: '#34d399' }}>260–340</p>
              <p className="text-xs text-slate-500 mt-0.5">Verbal + Quant (ETS)</p>
            </div>
          </div>

          {/* Overview */}
          <section aria-labelledby="overview-heading">
            <h2 id="overview-heading" className="text-2xl font-bold text-white mb-4">GRE vs CAT: do they even compete for the same goal?</h2>
            <p className="text-slate-400 leading-relaxed mb-4">
              The Common Admission Test (CAT), conducted annually by the IIMs, is India's premier MBA entrance exam. It determines admission to all 20 IIMs, as well as roughly 200 other Indian business schools. CAT scores are not accepted by any major international business school outside India.
            </p>
            <p className="text-slate-400 leading-relaxed mb-4">
              The GRE General Test, administered by ETS, is accepted by over 1,300 business programs globally and has become an increasingly viable alternative to the GMAT at schools like Harvard Business School, MIT Sloan, INSEAD, and London Business School. If you want an MBA outside India, the GRE (or GMAT) is your route — CAT is not.
            </p>
            <p className="text-slate-400 leading-relaxed">
              Where things get interesting is for students who haven't decided between IIM and an overseas MBA. In that scenario, a strategic dual-exam approach — CAT for domestic optionality, GRE for global optionality — is worth considering, though both require substantial dedicated preparation.
            </p>
          </section>

          {/* Schools Table */}
          <section aria-labelledby="schools-heading">
            <h2 id="schools-heading" className="text-2xl font-bold text-white mb-4">Which top MBA programs accept GRE vs CAT?</h2>
            <div className="overflow-x-auto rounded-xl border border-white/8">
              <table className="w-full text-sm min-w-[480px]" aria-label="MBA program acceptance of GRE vs CAT scores">
                <thead>
                  <tr className="bg-white/4 border-b border-white/8">
                    <th scope="col" className="text-left px-4 py-3 text-xs font-semibold text-slate-400 uppercase tracking-wider">Program</th>
                    <th scope="col" className="text-left px-4 py-3 text-xs font-semibold text-slate-400 uppercase tracking-wider">GRE</th>
                    <th scope="col" className="text-left px-4 py-3 text-xs font-semibold text-slate-400 uppercase tracking-wider">GMAT</th>
                    <th scope="col" className="text-left px-4 py-3 text-xs font-semibold text-slate-400 uppercase tracking-wider">CAT</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5">
                  {[
                    { school: 'Harvard Business School', gre: '✓', gmat: '✓', cat: '✗' },
                    { school: 'MIT Sloan', gre: '✓', gmat: '✓', cat: '✗' },
                    { school: 'Wharton (UPenn)', gre: '✓', gmat: '✓', cat: '✗' },
                    { school: 'London Business School', gre: '✓', gmat: '✓', cat: '✗' },
                    { school: 'INSEAD', gre: '✓', gmat: '✓', cat: '✗' },
                    { school: 'ISB Hyderabad', gre: '✓', gmat: '✓', cat: '✓ (PGP)' },
                    { school: 'IIM Ahmedabad', gre: '✗', gmat: '✗', cat: '✓' },
                    { school: 'IIM Bangalore', gre: '✗', gmat: '✗', cat: '✓' },
                  ].map((row, i) => (
                    <tr key={i} className="hover:bg-white/2 transition-colors">
                      <td className="px-4 py-3 text-slate-300 font-medium">{row.school}</td>
                      <td className="px-4 py-3">
                        <span className={row.gre === '✓' ? 'text-emerald-400' : 'text-slate-600'}>{row.gre}</span>
                      </td>
                      <td className="px-4 py-3">
                        <span className={row.gmat === '✓' ? 'text-emerald-400' : 'text-slate-600'}>{row.gmat}</span>
                      </td>
                      <td className="px-4 py-3">
                        <span className={row.cat.includes('✓') ? 'text-emerald-400' : 'text-slate-600'}>{row.cat}</span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-xs text-slate-600 mt-3">Sources: Individual school admissions pages, verified May 2025. ISB PGP accepts CAT; ISB PGPpro requires GMAT/GRE.</p>
          </section>

          {/* Content Comparison */}
          <section aria-labelledby="content-heading">
            <h2 id="content-heading" className="text-2xl font-bold text-white mb-4">How the GRE and CAT compare in content and difficulty</h2>
            <p className="text-slate-400 leading-relaxed mb-4">
              CAT has three sections: Verbal Ability & Reading Comprehension (VARC), Data Interpretation & Logical Reasoning (DILR), and Quantitative Aptitude (QA). The Quantitative section of CAT is widely considered harder than GRE Quant — it goes deeper into number theory, arithmetic, and combinatorics without an on-screen calculator. GRE Quant provides a calculator and focuses on a broader but less deep set of topics.
            </p>
            <p className="text-slate-400 leading-relaxed mb-4">
              GRE Verbal is harder than CAT VARC for most Indian students. CAT VARC is in English but tests reading comprehension, para-jumbles, and odd-sentence-out in a format many Indian students have practiced extensively. GRE Verbal adds advanced vocabulary questions (Text Completion, Sentence Equivalence) using words that are rarely encountered in standard Indian schooling.
            </p>

            <div className="bg-purple-500/10 border border-purple-500/20 rounded-xl p-5 flex gap-4 items-start">
              <span className="text-xl shrink-0" aria-hidden="true">🧠</span>
              <div>
                <p className="text-sm font-semibold text-white mb-1">GRE Quant is easier than CAT Quant — strategically useful</p>
                <p className="text-sm text-slate-400 leading-relaxed">Students who have prepared seriously for CAT QA often find GRE Quant straightforward. A 99th percentile CAT student who also prepares GRE Verbal can realistically target a 330+ GRE composite, which is competitive for top global MBA programs. The asymmetry works in your favour: your CAT prep gives you a head start on the harder part of the GRE.</p>
              </div>
            </div>
          </section>

          {/* Strategic advice */}
          <section aria-labelledby="strategy-heading">
            <h2 id="strategy-heading" className="text-2xl font-bold text-white mb-4">Strategic advice: when to sit GRE alongside or instead of CAT</h2>
            <p className="text-slate-400 leading-relaxed mb-4">
              If you're in your final year of a bachelor's degree and are undecided between an IIM and a top global MBA, a practical approach is to take CAT in November (the standard annual window) and sit the GRE either in the October–November period (if your target schools allow deferred admission with GRE) or after CAT results in January, when you have clarity on your IIM outcomes.
            </p>
            <p className="text-slate-400 leading-relaxed mb-4">
              Most top international MBA programs require 2–5 years of work experience before applying. This gives you time post-graduation to decide: if you want an IIM MBA immediately, use your CAT score. If you're accumulating work experience toward a global MBA in your late 20s, the GRE (or GMAT) is the right prep project, and you have time to do it well.
            </p>
            <p className="text-slate-400 leading-relaxed">
              One school that sits at the intersection is ISB Hyderabad. ISB accepts both CAT (for its 1-year PGP) and GMAT/GRE (for both PGP and PGPpro). With a global AACSB-accredited MBA and strong placement, ISB is increasingly a direct competitor to one-year programs at LBS and INSEAD for Indian candidates.
            </p>
          </section>

          {/* CTA */}
          <div className="bg-[#12141f] border border-purple-500/20 rounded-2xl p-7 flex gap-5 items-start">
            <div className="text-2xl shrink-0" aria-hidden="true">📐</div>
            <div>
              <h3 className="text-base font-semibold text-white mb-1">See where your GRE score ranks for MBA admissions</h3>
              <p className="text-sm text-slate-400 leading-relaxed mb-3">Use our free GRE percentile calculator to convert your Verbal and Quant scores to national percentiles — and benchmark against admitted students at Harvard, Wharton, and MIT Sloan.</p>
              <Link href="/exams/gre" className="inline-flex items-center gap-2 bg-purple-600 hover:bg-purple-500 text-white px-5 py-2.5 rounded-xl font-semibold text-sm transition-all hover:shadow-lg hover:-translate-y-0.5">
                Check GRE Percentile →
              </Link>
            </div>
          </div>

          {/* Related */}
          <section aria-labelledby="related-heading" className="border-t border-white/8 pt-10">
            <h2 id="related-heading" className="text-sm font-semibold text-slate-500 uppercase tracking-wider mb-4">Related articles</h2>
            <div className="grid sm:grid-cols-2 gap-3">
              {[
                { title: 'GRE vs GMAT: Which Exam Should You Take?', href: '/articles/gre-vs-gmat-which-exam-should-you-take', color: '#a855f7' },
                { title: 'SAT vs JEE for Indian Students', href: '/articles/sat-vs-jee-for-indian-students', color: '#6366f1' },
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
