'use client';

import { motion } from 'framer-motion';
import { howItWorks } from '@/lib/exam-data';

export function HowItWorks() {
  return (
    <section id="how" className="py-20 bg-[#0d0f1a] border-y border-white/6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">
            How it works
          </h2>
          <p className="text-lg text-slate-400">
            Three seconds from score to percentile
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 relative">
          {/* Connector line desktop */}
          <div className="hidden md:block absolute top-14 left-[calc(16.66%+1.5rem)] right-[calc(16.66%+1.5rem)] h-px bg-gradient-to-r from-transparent via-indigo-500/30 to-transparent" />

          {howItWorks.map((step, i) => (
            <motion.div
              key={step.step}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: i * 0.12 }}
              viewport={{ once: true }}
              className="relative bg-[#0a0c14] border border-white/8 rounded-2xl p-7 hover:border-indigo-500/25 transition-colors group"
            >
              {/* Step number */}
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-xl bg-indigo-500/12 border border-indigo-500/20 flex items-center justify-center text-lg shrink-0">
                  {step.icon}
                </div>
                <span className="text-xs font-mono text-indigo-400/70 font-medium tracking-wider">
                  STEP {step.step}
                </span>
              </div>

              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-indigo-300 transition-colors">
                {step.title}
              </h3>
              <p className="text-sm text-slate-400 leading-relaxed">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Bottom note */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center text-sm text-slate-600 mt-8"
        >
          No account needed. No email. No ads obscuring your result. Just your score.
        </motion.p>
      </div>
    </section>
  );
}
