// Server component — no 'use client', no Framer Motion bundle
// Animations done via CSS @keyframes — zero JS cost, instant LCP

import Link from 'next/link';

const examPills = [
  { name: 'SAT',      href: '/exams/sat',      color: '#6366f1' },
  { name: 'ACT',      href: '/exams/act',      color: '#06b6d4' },
  { name: 'GRE',      href: '/exams/gre',      color: '#a855f7' },
  { name: 'GMAT',     href: '/exams/gmat',     color: '#f59e0b' },
  { name: 'LSAT',     href: '/exams/lsat',     color: '#ef4444' },
  { name: 'GCSE',     href: '/exams/gcse',     color: '#34d399' },
  { name: 'A-Levels', href: '/exams/a-levels', color: '#ec4899' },
];

export function Hero() {
  return (
    <section className="relative min-h-[88vh] flex items-center overflow-hidden bg-[#0a0c14]">
      <style>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(24px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to   { opacity: 1; }
        }
        @keyframes scaleIn {
          from { opacity: 0; transform: scale(0.92); }
          to   { opacity: 1; transform: scale(1); }
        }
        @keyframes gaugeStroke {
          from { stroke-dashoffset: 402; }
          to   { stroke-dashoffset: 48; }
        }
        .hero-left    { animation: fadeUp  0.55s ease both; }
        .hero-badge   { animation: fadeIn  0.4s  ease both 0.05s; }
        .hero-pills   { animation: fadeIn  0.4s  ease both 0.15s; }
        .hero-cta     { animation: fadeUp  0.4s  ease both 0.2s; }
        .hero-card    { animation: scaleIn 0.55s ease both 0.1s; }
        .gauge-circle { animation: gaugeStroke 1.4s cubic-bezier(.4,0,.2,1) both 0.3s; }
        .gauge-text   { animation: fadeIn  0.5s  ease both 1.0s; }
      `}</style>

      {/* Grid background */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(99,102,241,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(99,102,241,0.8) 1px, transparent 1px)',
          backgroundSize: '52px 52px',
        }}
        aria-hidden="true"
      />

      {/* Glow blobs — CSS only, no JS */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-indigo-600/8 rounded-full blur-3xl pointer-events-none" aria-hidden="true" />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-emerald-500/6 rounded-full blur-3xl pointer-events-none" aria-hidden="true" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left */}
          <div className="hero-left">
            <div className="hero-badge inline-flex items-center gap-2 bg-indigo-500/10 border border-indigo-500/20 rounded-full px-3.5 py-1.5 mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" aria-hidden="true" />
              <span className="text-xs font-medium text-indigo-300 tracking-wide">Free · No signup · Updated 2026</span>
            </div>

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

            {/* Exam pills — static, no animation overhead per-pill */}
            <div className="hero-pills flex flex-wrap gap-2 mb-8">
              {examPills.map(e => (
                <Link
                  key={e.name}
                  href={e.href}
                  className="px-3 py-1.5 rounded-full text-xs font-semibold border transition-transform hover:scale-105 hover:brightness-110"
                  style={{
                    backgroundColor: `${e.color}15`,
                    borderColor: `${e.color}30`,
                    color: e.color,
                  }}
                >
                  {e.name}
                </Link>
              ))}
            </div>

            <div className="hero-cta flex items-center gap-4">
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
          </div>

          {/* Right — Score card (pure CSS animation) */}
          <div className="hero-card flex items-center justify-center">
            <div className="relative w-full max-w-sm">
              <div className="absolute inset-0 bg-indigo-600/12 rounded-3xl blur-2xl scale-105" aria-hidden="true" />
              <div className="relative bg-[#12141f] border border-white/10 rounded-2xl p-8 shadow-2xl">

                <div className="flex items-center justify-between mb-6">
                  <span className="text-xs font-medium text-slate-500 uppercase tracking-wider">SAT Score Result</span>
                  <span className="text-xs bg-emerald-500/15 text-emerald-400 border border-emerald-500/20 px-2.5 py-1 rounded-full font-medium">2026 data</span>
                </div>

                {/* Gauge — SVG CSS animation, no React state */}
                <div className="flex justify-center mb-6" aria-label="94th percentile gauge" role="img">
                  <div className="relative w-48 h-48">
                    <svg className="w-full h-full -rotate-90" viewBox="0 0 160 160" aria-hidden="true">
                      <circle cx="80" cy="80" r="64" fill="none" stroke="rgba(255,255,255,0.05)" strokeWidth="12" />
                      <circle
                        cx="80" cy="80" r="64"
                        fill="none"
                        stroke="url(#gaugeGrad)"
                        strokeWidth="12"
                        strokeLinecap="round"
                        strokeDasharray="402"
                        strokeDashoffset="48"
                        className="gauge-circle"
                      />
                      <defs>
                        <linearGradient id="gaugeGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                          <stop offset="0%" stopColor="#6366f1" />
                          <stop offset="100%" stopColor="#34d399" />
                        </linearGradient>
                      </defs>
                    </svg>
                    <div className="absolute inset-0 flex flex-col items-center justify-center gauge-text">
                      <span className="text-4xl font-bold text-white">94<span className="text-xl text-slate-400">th</span></span>
                      <span className="text-xs text-slate-500 mt-1">percentile</span>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-3 mb-5">
                  {[
                    { label: 'Your score', value: '1480' },
                    { label: 'Avg score',  value: '1050' },
                    { label: 'Beat',       value: '94%'  },
                  ].map(s => (
                    <div key={s.label} className="bg-white/4 rounded-xl p-3 text-center">
                      <p className="text-base font-bold text-white">{s.value}</p>
                      <p className="text-[10px] text-slate-500 mt-0.5">{s.label}</p>
                    </div>
                  ))}
                </div>

                <div className="bg-indigo-500/10 border border-indigo-500/20 rounded-xl px-4 py-3 text-center">
                  <p className="text-sm text-indigo-300 font-medium">Top 6% of all SAT test takers</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
