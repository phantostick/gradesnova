// Server component — CSS animations, no Framer Motion
import { howItWorks } from '@/lib/exam-data';

export function HowItWorks() {
  return (
    <section id="how" className="py-20 bg-[#0d0f1a] border-y border-white/6">
      <style>{`
        @keyframes howFadeUp {
          from { opacity: 0; transform: translateY(28px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .how-heading { animation: howFadeUp 0.5s ease both; }
        .how-step {
          opacity: 0;
          animation: howFadeUp 0.45s ease forwards;
          transition: border-color 0.2s ease;
        }
        .how-step:hover { border-color: rgba(99,102,241,0.25); }
        .how-step:nth-child(1) { animation-delay: 0.08s; }
        .how-step:nth-child(2) { animation-delay: 0.18s; }
        .how-step:nth-child(3) { animation-delay: 0.28s; }
        .how-title { transition: color 0.2s ease; }
        .how-step:hover .how-title { color: rgb(165, 180, 252); }
        .how-note { animation: howFadeUp 0.45s ease both 0.4s; }
      `}</style>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="how-heading text-center mb-14">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">
            How it works
          </h2>
          <p className="text-lg text-slate-400">Three seconds from score to percentile</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 relative">
          {/* Connector line */}
          <div
            className="hidden md:block absolute top-14 h-px bg-gradient-to-r from-transparent via-indigo-500/30 to-transparent pointer-events-none"
            style={{ left: 'calc(16.66% + 1.5rem)', right: 'calc(16.66% + 1.5rem)' }}
            aria-hidden="true"
          />

          {howItWorks.map(step => (
            <div
              key={step.step}
              className="how-step relative bg-[#0a0c14] border border-white/8 rounded-2xl p-7"
            >
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-xl bg-indigo-500/12 border border-indigo-500/20 flex items-center justify-center text-lg shrink-0">
                  {step.icon}
                </div>
                <span className="text-xs font-mono text-indigo-400/70 font-medium tracking-wider">
                  STEP {step.step}
                </span>
              </div>
              <h3 className="how-title text-xl font-bold text-white mb-3">{step.title}</h3>
              <p className="text-sm text-slate-400 leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>

        <p className="how-note text-center text-sm text-slate-600 mt-8">
          No account needed. No email. No ads obscuring your result. Just your score.
        </p>
      </div>
    </section>
  );
}
