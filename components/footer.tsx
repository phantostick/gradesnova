'use client';

import Link from 'next/link';

const examLinks = [
  { id: 'sat',      name: 'SAT Percentile Calculator' },
  { id: 'act',      name: 'ACT Percentile Calculator' },
  { id: 'gre',      name: 'GRE Percentile Calculator' },
  { id: 'gmat',     name: 'GMAT Percentile Calculator' },
  { id: 'lsat',     name: 'LSAT Percentile Calculator' },
  { id: 'gcse',     name: 'GCSE Grade Predictor' },
  { id: 'a-levels', name: 'A-Level Grade Predictor' },
];

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[#080a12] border-t border-white/6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid md:grid-cols-4 gap-10 mb-12">

          {/* Brand */}
          <div className="md:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-4 group w-fit">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-indigo-500 to-emerald-400 flex items-center justify-center shadow-lg">
                <span className="text-white font-bold text-sm">GN</span>
              </div>
              <span className="font-semibold text-white text-lg tracking-tight">
                Grades<span className="text-indigo-400">Nova</span>
              </span>
            </Link>
            <p className="text-sm text-slate-500 leading-relaxed">
              Know your score before results day. Free percentile calculators for every major exam.
            </p>
          </div>

          {/* Exams */}
          <div>
            <h4 className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-4">Exams</h4>
            <ul className="space-y-2.5">
              {examLinks.map(e => (
                <li key={e.id}>
                  <Link
                    href={`/exams/${e.id}`}
                    className="text-sm text-slate-500 hover:text-white transition-colors"
                  >
                    {e.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-4">Resources</h4>
            <ul className="space-y-2.5">
              {[
                ['/blog', 'Blog'],
                ['/blog/what-is-a-good-sat-score', 'What is a good SAT score?'],
                ['/blog/act-percentile-chart', 'ACT percentile chart'],
                ['/blog/gre-score-percentile', 'GRE score percentile'],
                ['/blog/lsat-percentile', 'LSAT percentile breakdown'],
                ['/blog/gcse-grade-boundaries', 'GCSE grade boundaries'],
              ].map(([href, label]) => (
                <li key={href}>
                  <Link href={href} className="text-sm text-slate-500 hover:text-white transition-colors">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-4">Company</h4>
            <ul className="space-y-2.5">
              {[
                ['/about', 'About'],
                ['/contact', 'Contact'],
                ['/privacy', 'Privacy Policy'],
                ['/terms', 'Terms of Use'],
              ].map(([href, label]) => (
                <li key={href}>
                  <Link href={href} className="text-sm text-slate-500 hover:text-white transition-colors">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/6 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-xs text-slate-600">
            © {year} GradesNova. All rights reserved. Not affiliated with College Board, ACT, ETS, GMAC, LSAC, Ofqual or any exam body.
          </p>
          <p className="text-xs text-slate-600">
            Data sourced from official exam bodies. Updated for 2026.
          </p>
        </div>
      </div>
    </footer>
  );
}
