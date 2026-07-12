// app/about/page.tsx
import type { Metadata } from 'next';
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'About GradesNova | Free Exam Score Percentile Calculators',
  description:
    'GradesNova provides free, instant exam score percentile calculators for SAT, ACT, GRE, LSAT, GCSE, and A-Levels. No signup, no paywall — just your score and where it ranks.',
  alternates: { canonical: 'https://gradesnova.com/about' },
};

const exams = [
  { name: 'SAT',      href: '/exams/sat',      color: '#6366f1', desc: 'US college admissions — 400 to 1600' },
  { name: 'ACT',      href: '/exams/act',      color: '#06b6d4', desc: 'US college admissions — 1 to 36' },
  { name: 'GRE',      href: '/exams/gre',      color: '#a855f7', desc: 'Graduate school admissions — 130 to 170' },
  { name: 'LSAT',     href: '/exams/lsat',     color: '#ef4444', desc: 'Law school admissions — 120 to 180' },
  { name: 'GCSE',     href: '/exams/gcse',     color: '#34d399', desc: 'UK secondary — grades 1 to 9' },
  { name: 'A-Levels', href: '/exams/a-levels', color: '#ec4899', desc: 'UK advanced — grades E to A*' },
];

export default function AboutPage() {
  return (
    <main className="bg-[#0a0c14] min-h-screen">
      <Navbar />

      <header className="bg-[#0d0f1a] border-b border-white/6 py-14">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-xl bg-indigo-500/15 flex items-center justify-center text-xl">🎓</div>
            <span className="text-xs font-mono text-indigo-400/70 uppercase tracking-widest">About</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white tracking-tight mb-4">
            About GradesNova
          </h1>
          <p className="text-lg text-slate-400 leading-relaxed">
            Free exam score percentile calculators for every major standardised test — no signup, no paywall, no ads between you and your result.
          </p>
        </div>
      </header>

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-14 space-y-14">

        {/* Mission */}
        <section aria-labelledby="mission-heading">
          <h2 id="mission-heading" className="text-2xl font-bold text-white mb-4">What GradesNova is</h2>
          <div className="prose-custom space-y-4 text-slate-400 leading-relaxed">
            <p>
              GradesNova is a free tool that tells you exactly where your exam score ranks nationally — before results day, after results day, or any time you need to know.
            </p>
            <p>
              You enter your score. We show you your percentile, what it means, and how you compare to every other test taker. That's it. No account required, no email, no premium tier.
            </p>
            <p>
              We cover six major exams: SAT, ACT, GRE, LSAT for US students, and GCSE and A-Levels for UK students. All data comes from official sources — College Board, ACT Inc., ETS, LSAC, AQA, Edexcel, and OCR — and is updated with each new exam series. A GMAT calculator is in progress and will be added once it meets the same data standard as the rest of the site.
            </p>
          </div>
        </section>

        {/* Data sources */}
        <section aria-labelledby="data-heading">
          <h2 id="data-heading" className="text-2xl font-bold text-white mb-4">Where the data comes from</h2>
          <div className="space-y-4 text-slate-400 leading-relaxed">
            <p>
              Every percentile on GradesNova comes directly from the official published data of the relevant exam board. We do not estimate, model, or infer — we use the exact tables that the test makers publish each year.
            </p>
            <div className="bg-[#12141f] border border-white/8 rounded-xl overflow-hidden">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-white/4 border-b border-white/8">
                    <th scope="col" className="text-left px-4 py-3 text-xs font-semibold text-slate-400 uppercase tracking-wider">Exam</th>
                    <th scope="col" className="text-left px-4 py-3 text-xs font-semibold text-slate-400 uppercase tracking-wider">Data source</th>
                    <th scope="col" className="text-left px-4 py-3 text-xs font-semibold text-slate-400 uppercase tracking-wider">Updated</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ['SAT',      'College Board SAT Suite Annual Report',        '2023–2024'],
                    ['ACT',      'ACT National Norms',                           '2023'],
                    ['GRE',      'ETS GRE Guide to the Use of Scores',           '2022–2023'],
                    ['LSAT',     'LSAC Percentile Ranks',                        '2022–2023'],
                    ['GCSE',     'AQA, Edexcel, OCR, WJEC Grade Boundaries',    'June 2025'],
                    ['A-Levels', 'AQA Grade Boundaries',                         'June 2025'],
                  ].map(([exam, source, year], i) => (
                    <tr key={exam} className={`border-b border-white/5 last:border-0 ${i % 2 === 0 ? '' : 'bg-white/2'}`}>
                      <td className="px-4 py-3 text-white font-medium">{exam}</td>
                      <td className="px-4 py-3 text-slate-400 text-xs">{source}</td>
                      <td className="px-4 py-3 text-slate-500 text-xs font-mono">{year}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-sm text-slate-500">
              GradesNova is not affiliated with, nor endorsed by, any of the above organisations. All trademarks are the property of their respective owners.
            </p>
          </div>
        </section>

        {/* Calculators */}
        <section aria-labelledby="tools-heading">
          <h2 id="tools-heading" className="text-2xl font-bold text-white mb-6">Our calculators</h2>
          <div className="grid sm:grid-cols-2 gap-3">
            {exams.map(e => (
              <Link
                key={e.name}
                href={e.href}
                className="bg-[#12141f] border border-white/8 rounded-xl p-4 hover:border-white/16 transition-colors group"
              >
                <p className="text-base font-bold mb-0.5 group-hover:brightness-110 transition-all" style={{ color: e.color }}>
                  {e.name}
                </p>
                <p className="text-xs text-slate-500">{e.desc}</p>
              </Link>
            ))}
          </div>
        </section>

        {/* Philosophy */}
        <section aria-labelledby="philosophy-heading">
          <h2 id="philosophy-heading" className="text-2xl font-bold text-white mb-4">Why it's free</h2>
          <div className="space-y-4 text-slate-400 leading-relaxed">
            <p>
              Knowing where your score ranks is basic information. The data is publicly available. The calculation is simple. There's no reason to charge for it.
            </p>
            <p>
              GradesNova is sustained by Google AdSense — unobtrusive ads that appear around the calculator, never in between you and your result. That's the entire monetisation model.
            </p>
          </div>
        </section>

        {/* Team */}
        <section aria-labelledby="team-heading">
          <h2 id="team-heading" className="text-2xl font-bold text-white mb-4">Who's behind GradesNova</h2>
          <div className="space-y-4 text-slate-400 leading-relaxed">
            <p>
              GradesNova is built and maintained by the GradesNova team, led by a data analyst with prior experience founding and running an education platform that grew to over 500,000 monthly users. That background is why GradesNova is built the way it is: data pulled directly from official exam board publications, no estimates or shortcuts, and a clear "not affiliated" disclosure on every exam we cover.
            </p>
          </div>
        </section>

        {/* Contact CTA */}
        <div className="bg-[#12141f] border border-white/8 rounded-2xl p-7 flex gap-5 items-start">
          <div className="text-2xl shrink-0">✉️</div>
          <div>
            <h3 className="text-base font-semibold text-white mb-1">Questions or corrections?</h3>
            <p className="text-sm text-slate-400 leading-relaxed mb-3">
              If you spot a data error, a broken calculator, or just want to say something — we'd like to hear it.
            </p>
            <Link href="/contact" className="text-sm text-indigo-400 hover:text-indigo-300 transition-colors underline underline-offset-2">
              Get in touch →
            </Link>
          </div>
        </div>

      </div>
      <Footer />
    </main>
  );
}
