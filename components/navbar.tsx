'use client';

import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { ChevronDown, Menu, X } from 'lucide-react';

const examLinks = [
  { id: 'sat',      name: 'SAT',      desc: 'Scholastic Assessment Test',    color: '#6366f1' },
  { id: 'act',      name: 'ACT',      desc: 'American College Testing',      color: '#06b6d4' },
  { id: 'gre',      name: 'GRE',      desc: 'Graduate Record Exam',          color: '#a855f7' },
  { id: 'gmat',     name: 'GMAT',     desc: 'Graduate Management Test',      color: '#f59e0b' },
  { id: 'lsat',     name: 'LSAT',     desc: 'Law School Admission Test',     color: '#ef4444' },
  { id: 'gcse',     name: 'GCSE',     desc: 'General Certificate of Edu.',   color: '#34d399' },
  { id: 'a-levels', name: 'A-Levels', desc: 'Advanced Level Qualifications', color: '#ec4899' },
];

export function Navbar() {
  const [toolsOpen, setToolsOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <motion.nav
      initial={{ opacity: 0, y: -16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#0a0c14]/95 backdrop-blur-xl border-b border-white/8 shadow-lg shadow-black/20'
          : 'bg-[#0a0c14]/80 backdrop-blur-md border-b border-white/5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">

          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 group">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-indigo-500 to-emerald-400 flex items-center justify-center shadow-lg shadow-indigo-500/25 group-hover:shadow-indigo-500/40 transition-shadow">
              <span className="text-white font-bold text-sm tracking-tight">GN</span>
            </div>
            <span className="font-semibold text-lg text-white tracking-tight">
              Grades<span className="text-indigo-400">Nova</span>
            </span>
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-1">

            {/* Tools dropdown */}
            <div className="relative">
              <button
                onMouseEnter={() => setToolsOpen(true)}
                onMouseLeave={() => setToolsOpen(false)}
                onClick={() => setToolsOpen(v => !v)}
                className="flex items-center gap-1.5 px-3.5 py-2 rounded-lg text-sm text-slate-300 hover:text-white hover:bg-white/6 transition-all"
              >
                Tools
                <ChevronDown
                  size={14}
                  className={`transition-transform duration-200 ${toolsOpen ? 'rotate-180' : ''}`}
                />
              </button>

              <AnimatePresence>
                {toolsOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 6, scale: 0.97 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 6, scale: 0.97 }}
                    transition={{ duration: 0.15 }}
                    onMouseEnter={() => setToolsOpen(true)}
                    onMouseLeave={() => setToolsOpen(false)}
                    className="absolute top-full left-0 mt-1.5 w-72 bg-[#12141f] border border-white/10 rounded-xl shadow-2xl shadow-black/40 overflow-hidden"
                  >
                    <div className="p-2">
                      {examLinks.map(exam => (
                        <Link
                          key={exam.id}
                          href={`/exams/${exam.id}`}
                          onClick={() => setToolsOpen(false)}
                          className="flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-white/6 transition-colors group"
                        >
                          <div
                            className="w-8 h-8 rounded-md flex items-center justify-center text-xs font-bold shrink-0"
                            style={{ backgroundColor: `${exam.color}20`, color: exam.color }}
                          >
                            {exam.name.slice(0, 2)}
                          </div>
                          <div>
                            <p className="text-sm font-medium text-white group-hover:text-indigo-300 transition-colors">{exam.name}</p>
                            <p className="text-xs text-slate-500">{exam.desc}</p>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <Link href="/#how" className="px-3.5 py-2 rounded-lg text-sm text-slate-300 hover:text-white hover:bg-white/6 transition-all">
              How It Works
            </Link>
            <Link href="/blog" className="px-3.5 py-2 rounded-lg text-sm text-slate-300 hover:text-white hover:bg-white/6 transition-all">
              Blog
            </Link>
            <Link href="/about" className="px-3.5 py-2 rounded-lg text-sm text-slate-300 hover:text-white hover:bg-white/6 transition-all">
              About
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 rounded-lg text-slate-400 hover:text-white hover:bg-white/6 transition-all"
            onClick={() => setMobileOpen(v => !v)}
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden border-t border-white/8 bg-[#0a0c14]/98 backdrop-blur-xl overflow-hidden"
          >
            <div className="px-4 py-4 space-y-1">
              <p className="text-xs font-medium text-slate-500 uppercase tracking-wider px-3 mb-2">Tools</p>
              {examLinks.map(exam => (
                <Link
                  key={exam.id}
                  href={`/exams/${exam.id}`}
                  onClick={() => setMobileOpen(false)}
                  className="flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-white/6 transition-colors"
                >
                  <div
                    className="w-7 h-7 rounded-md flex items-center justify-center text-xs font-bold shrink-0"
                    style={{ backgroundColor: `${exam.color}20`, color: exam.color }}
                  >
                    {exam.name.slice(0, 2)}
                  </div>
                  <span className="text-sm text-slate-300">{exam.name} Percentile Calculator</span>
                </Link>
              ))}
              <div className="border-t border-white/8 my-2" />
              {[['/#how', 'How It Works'], ['/blog', 'Blog'], ['/about', 'About']].map(([href, label]) => (
                <Link key={href} href={href} onClick={() => setMobileOpen(false)}
                  className="block px-3 py-2.5 rounded-lg text-sm text-slate-300 hover:text-white hover:bg-white/6 transition-all">
                  {label}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
