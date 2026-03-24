import type { Metadata } from 'next';
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';

export const metadata: Metadata = {
  title: 'Contact | GradesNova',
  description: 'Get in touch with GradesNova — report a data error, suggest a feature, or just say hello.',
  alternates: { canonical: 'https://gradesnova.com/contact' },
  robots: { index: true, follow: true },
};

export default function ContactPage() {
  return (
    <main className="bg-[#0a0c14] min-h-screen">
      <Navbar />

      <header className="bg-[#0d0f1a] border-b border-white/6 py-14">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-xl bg-indigo-500/15 flex items-center justify-center text-xl">✉️</div>
            <span className="text-xs font-mono text-indigo-400/70 uppercase tracking-widest">Contact</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white tracking-tight mb-4">Get in touch</h1>
          <p className="text-lg text-slate-400 leading-relaxed">
            Found a data error? Have a suggestion? We read everything.
          </p>
        </div>
      </header>

      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-14 space-y-10">

        {/* Reasons to contact */}
        <div className="grid sm:grid-cols-3 gap-4">
          {[
            { icon: '🐛', title: 'Data error',    desc: 'A boundary or percentile looks wrong' },
            { icon: '💡', title: 'Suggestion',    desc: 'A feature or exam you want to see' },
            { icon: '👋', title: 'General',       desc: 'Anything else on your mind' },
          ].map(r => (
            <div key={r.title} className="bg-[#12141f] border border-white/8 rounded-xl p-5 text-center">
              <div className="text-2xl mb-2">{r.icon}</div>
              <p className="text-sm font-semibold text-white mb-1">{r.title}</p>
              <p className="text-xs text-slate-500">{r.desc}</p>
            </div>
          ))}
        </div>

        {/* Email */}
        <div className="bg-[#12141f] border border-white/8 rounded-2xl p-8">
          <h2 className="text-lg font-bold text-white mb-2">Email us</h2>
          <p className="text-slate-400 text-sm mb-5 leading-relaxed">
            The fastest way to reach us. We aim to reply within 48 hours for data corrections and feature requests.
          </p>
          <a
            href="mailto:hello@gradesnova.com"
            className="inline-flex items-center gap-2 bg-indigo-600 hover:bg-indigo-500 text-white px-6 py-3 rounded-xl font-semibold text-sm transition-all hover:shadow-lg hover:shadow-indigo-600/30 hover:-translate-y-0.5"
          >
            <span>✉️</span>
            hello@gradesnova.com
          </a>
        </div>

        {/* What to include */}
        <div className="bg-[#12141f] border border-white/8 rounded-xl p-6">
          <h3 className="text-sm font-semibold text-white mb-3">For data corrections — please include:</h3>
          <ul className="space-y-2 text-sm text-slate-400">
            {[
              'Which exam and which page (e.g. AQA GCSE Maths Higher 2025)',
              'The value shown on GradesNova',
              'The correct value and your source (official board document preferred)',
            ].map(item => (
              <li key={item} className="flex items-start gap-2">
                <span className="text-indigo-400 mt-0.5 shrink-0">→</span>
                {item}
              </li>
            ))}
          </ul>
        </div>

        <p className="text-xs text-slate-600 text-center">
          GradesNova is not affiliated with College Board, ACT Inc., ETS, GMAC, LSAC, AQA, Edexcel, OCR, or WJEC.
        </p>
      </div>

      <Footer />
    </main>
  );
}