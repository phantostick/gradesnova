'use client';

import { motion } from 'framer-motion';

const stats = [
  { value: '7',    label: 'Exams covered',    sub: 'SAT, ACT, GRE, GMAT, LSAT, GCSE, A-Levels' },
  { value: '100%', label: 'Free forever',      sub: 'No signup, no paywall, no catch' },
  { value: '2026', label: 'Data updated',      sub: 'Latest official percentile tables' },
  { value: '40+',  label: 'Countries',         sub: 'Students worldwide use GradesNova' },
];

export function TrustBar() {
  return (
    <section className="py-14 bg-[#0d0f1a] border-y border-white/6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-white/6 rounded-2xl overflow-hidden">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: i * 0.08 }}
              viewport={{ once: true }}
              className="bg-[#0d0f1a] px-6 py-7 text-center"
            >
              <p className="text-4xl font-bold bg-gradient-to-r from-indigo-400 to-emerald-400 bg-clip-text text-transparent mb-1">
                {stat.value}
              </p>
              <p className="text-sm font-medium text-white mb-1">{stat.label}</p>
              <p className="text-xs text-slate-500 leading-snug">{stat.sub}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
