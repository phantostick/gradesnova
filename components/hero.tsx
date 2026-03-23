'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

const examPills = [
  { name: 'SAT', color: '#6366f1' },
  { name: 'ACT', color: '#06b6d4' },
  { name: 'GRE', color: '#a855f7' },
  { name: 'GMAT', color: '#f59e0b' },
  { name: 'LSAT', color: '#ef4444' },
  { name: 'GCSE', color: '#34d399' },
  { name: 'A-Levels', color: '#ec4899' },
];

export function Hero() {
  return (
    <section className="relative min-h-[88vh] flex items-center overflow-hidden bg-[#0a0c14]">

      {/* Grid */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(99,102,241,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(99,102,241,0.8) 1px, transparent 1px)',
          backgroundSize: '52px 52px',
        }}
      />

      {/* Glow blobs */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-indigo-600/8 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-emerald-500/6 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -32 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.65, delay: 0.1 }}
          >
            {/* Label */}
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 bg-indigo-500/10 border border-indigo-500/20 rounded-full px-3.5 py-1.5 mb-6"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-xs font-medium text-indigo-300 tracking-wide">Free · No signup · Updated 2026</span>
            </motion.div>

            <h1 className="text-5xl md:text-6xl font-bold text-white mb-5 leading-[1.08] tracking-tight">
              Know your score<br />
              <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-emerald-400 bg-clip-text text-transparent">
                before results day.
              </span>
            </h1>

            <p className="text-lg text-slate-400 mb-8 leading-relaxed max-w-lg">
              Enter your score and instantly see your percentile, rank, and how you compare nationally.
              Free calculators for SAT, ACT, GRE, GMAT, LSAT, GCSE and A-Levels.
            </p>

            {/* Exam pills */}
            <div className="flex flex-wrap gap-2 mb-8">
              {examPills.map((e, i) => (
                <motion.div
                  key={e.name}
                  initial={{ opacity: 0, scale: 0.85 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.35 + i * 0.05 }}
                >
                  <Link
                    href={`/exams/${e.name.toLowerCase().replace(' ', '-')}`}
                    className="px-3 py-1.5 rounded-full text-xs font-semibold border transition-all hover:scale-105"
                    style={{
                      backgroundColor: `${e.color}15`,
                      borderColor: `${e.color}30`,
                      color: e.color,
                    }}
                  >
                    {e.name}
                  </Link>
                </motion.div>
              ))}
            </div>

            <div className="flex items-center gap-4">
              <Link
                href="#exams"
                className="bg-indigo-600 hover:bg-indigo-500 text-white px-7 py-3 rounded-xl font-semibold text-sm transition-all hover:shadow-lg hover:shadow-indigo-600/30 hover:-translate-y-0.5"
              >
                Pick your exam →
              </Link>
              <Link
                href="#how"
                className="text-sm text-slate-400 hover:text-white transition-colors underline underline-offset-4 decoration-slate-600 hover:decoration-slate-400"
              >
                How it works
              </Link>
            </div>
          </motion.div>

          {/* Right — Score card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.65, delay: 0.25 }}
            className="flex items-center justify-center"
          >
            <div className="relative w-full max-w-sm">

              {/* Glow behind card */}
              <div className="absolute inset-0 bg-indigo-600/12 rounded-3xl blur-2xl scale-105" />

              <div className="relative bg-[#12141f] border border-white/10 rounded-2xl p-8 shadow-2xl">

                {/* Card label */}
                <div className="flex items-center justify-between mb-6">
                  <span className="text-xs font-medium text-slate-500 uppercase tracking-wider">SAT Score Result</span>
                  <span className="text-xs bg-emerald-500/15 text-emerald-400 border border-emerald-500/20 px-2.5 py-1 rounded-full font-medium">2026 data</span>
                </div>

                {/* Gauge */}
                <div className="flex justify-center mb-6">
                  <div className="relative w-48 h-48">
                    <svg className="w-full h-full -rotate-90" viewBox="0 0 160 160">
                      <circle cx="80" cy="80" r="64" fill="none" stroke="rgba(255,255,255,0.05)" strokeWidth="12" />
                      <motion.circle
                        cx="80" cy="80" r="64"
                        fill="none"
                        stroke="url(#gaugeGrad)"
                        strokeWidth="12"
                        strokeLinecap="round"
                        strokeDasharray={`${2 * Math.PI * 64}`}
                        strokeDashoffset={`${2 * Math.PI * 64 * 0.12}`}
                        initial={{ strokeDashoffset: 2 * Math.PI * 64 }}
                        animate={{ strokeDashoffset: 2 * Math.PI * 64 * 0.12 }}
                        transition={{ duration: 1.8, ease: 'easeOut', delay: 0.6 }}
                      />
                      <defs>
                        <linearGradient id="gaugeGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                          <stop offset="0%" stopColor="#6366f1" />
                          <stop offset="100%" stopColor="#34d399" />
                        </linearGradient>
                      </defs>
                    </svg>
                    <div className="absolute inset-0 flex flex-col items-center justify-center">
                      <motion.span
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1.2 }}
                        className="text-4xl font-bold text-white"
                      >
                        94<span className="text-xl text-slate-400">th</span>
                      </motion.span>
                      <span className="text-xs text-slate-500 mt-1">percentile</span>
                    </div>
                  </div>
                </div>

                {/* Stats row */}
                <div className="grid grid-cols-3 gap-3 mb-5">
                  {[
                    { label: 'Your score', value: '1480' },
                    { label: 'Avg score', value: '1050' },
                    { label: 'Beat', value: '94%' },
                  ].map(s => (
                    <div key={s.label} className="bg-white/4 rounded-xl p-3 text-center">
                      <p className="text-base font-bold text-white">{s.value}</p>
                      <p className="text-[10px] text-slate-500 mt-0.5">{s.label}</p>
                    </div>
                  ))}
                </div>

                <div className="bg-indigo-500/10 border border-indigo-500/20 rounded-xl px-4 py-3 text-center">
                  <p className="text-sm text-indigo-300 font-medium">
                    Top 6% of all SAT test takers
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
