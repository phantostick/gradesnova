'use client';

import Link from 'next/link';
import Image from 'next/image';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#0a0c14] border-t border-white/10 pt-16 pb-8 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-8 mb-12">
          {/* Brand Col */}
          <div className="md:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-4 group">
              {/* Logo */}
              <Image 
                src="/image.svg" 
                alt="GradesNova Logo" 
                width={32} 
                height={32} 
                className="group-hover:scale-105 transition-transform"
              />
              <span className="font-bold text-xl tracking-tight text-white">
                Grades<span className="text-emerald-400">Nova</span>
              </span>
            </Link>
            <p className="text-sm text-slate-400 leading-relaxed mb-6">
              Free, instant exam score percentile calculators. Know exactly where you stand before results day.
            </p>
          </div>

          {/* Calculators Col */}
          <div>
            <h3 className="text-sm font-semibold text-white mb-4">US Admissions</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/exams/sat" className="text-sm text-slate-400 hover:text-emerald-400 transition-colors">SAT Calculator</Link>
              </li>
              <li>
                <Link href="/exams/act" className="text-sm text-slate-400 hover:text-emerald-400 transition-colors">ACT Calculator</Link>
              </li>
            </ul>
            
            <h3 className="text-sm font-semibold text-white mt-6 mb-4">UK Qualifications</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/exams/gcse" className="text-sm text-slate-400 hover:text-emerald-400 transition-colors">GCSE Boundaries</Link>
              </li>
              <li>
                <Link href="/exams/a-levels" className="text-sm text-slate-400 hover:text-emerald-400 transition-colors">A-Level Boundaries</Link>
              </li>
            </ul>
          </div>

          {/* Grad School Col */}
          <div>
            <h3 className="text-sm font-semibold text-white mb-4">Graduate Admissions</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/exams/gre" className="text-sm text-slate-400 hover:text-emerald-400 transition-colors">GRE Calculator</Link>
              </li>
              <li>
                <Link href="/exams/gmat" className="text-sm text-slate-400 hover:text-emerald-400 transition-colors">GMAT Calculator</Link>
              </li>
              <li>
                <Link href="/exams/lsat" className="text-sm text-slate-400 hover:text-emerald-400 transition-colors">LSAT Calculator</Link>
              </li>
            </ul>
          </div>

          {/* Articles & Resources Col */}
          <div>
            <h3 className="text-sm font-semibold text-white mb-4">Articles & Resources</h3>
            <ul className="space-y-3">
              <li><Link href="/articles/sat-vs-act-complete-comparison" className="text-sm text-slate-400 hover:text-emerald-400 transition-colors">SAT vs ACT</Link></li>
              <li><Link href="/articles/act-vs-sat-difficulty-comparison" className="text-sm text-slate-400 hover:text-emerald-400 transition-colors">ACT vs SAT Difficulty</Link></li>
              <li><Link href="/articles/sat-vs-ap-exams-explained" className="text-sm text-slate-400 hover:text-emerald-400 transition-colors">SAT vs AP Exams</Link></li>
              <li><Link href="/articles/sat-vs-jee-for-indian-students" className="text-sm text-slate-400 hover:text-emerald-400 transition-colors">SAT vs JEE</Link></li>
              <li><Link href="/articles/gre-vs-gmat-which-exam-should-you-take" className="text-sm text-slate-400 hover:text-emerald-400 transition-colors">GRE vs GMAT</Link></li>
              <li><Link href="/articles/gre-vs-cat-for-mba-abroad" className="text-sm text-slate-400 hover:text-emerald-400 transition-colors">GRE vs CAT</Link></li>
              <li><Link href="/articles/understanding-grade-boundaries-explained" className="text-sm text-slate-400 hover:text-emerald-400 transition-colors">Grade Boundaries</Link></li>
              <li><Link href="/articles/gcse-maths-grade-boundaries-trends" className="text-sm text-slate-400 hover:text-emerald-400 transition-colors">GCSE Maths Trends</Link></li>
              <li><Link href="/articles/a-level-sciences-hardest-papers" className="text-sm text-slate-400 hover:text-emerald-400 transition-colors">A-Level Sciences</Link></li>
            </ul>
          </div>

          {/* Legal / Info Col */}
          <div>
            <h3 className="text-sm font-semibold text-white mb-4">Legal & Support</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/contact" className="text-sm text-slate-500 hover:text-emerald-400 transition-colors">Contact Us</Link>
              </li>
              <li>
                <Link href="/privacy" className="text-sm text-slate-500 hover:text-emerald-400 transition-colors">Privacy Policy</Link>
              </li>
              <li>
                <Link href="/terms" className="text-sm text-slate-500 hover:text-emerald-400 transition-colors">Terms of Service</Link>
              </li>
            </ul>
            <div className="mt-6 p-4 bg-white/5 rounded-xl border border-white/10">
              <p className="text-xs text-slate-500 leading-relaxed">
                GradesNova is not affiliated with, nor endorsed by, the College Board, ACT Inc., ETS, GMAC, LSAC, AQA, Edexcel, OCR, or WJEC.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-slate-500">
            © {currentYear} GradesNova. All rights reserved.
          </p>
          <div className="flex items-center gap-2 text-sm text-slate-500">
            Built for the {currentYear - 1}–{currentYear} admissions cycle.
          </div>
        </div>
      </div>
    </footer>
  );
}
