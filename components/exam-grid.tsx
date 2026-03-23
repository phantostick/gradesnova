'use client';

import { motion } from 'framer-motion';
import { exams } from '@/lib/exam-data';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export function ExamGrid() {
  return (
    <section id="exams" className="py-20 bg-[#0a0c14]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">
            Choose your exam
          </h2>
          <p className="text-lg text-slate-400">
            Free percentile calculators for every major standardised test
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {exams.map((exam, i) => (
            <motion.div
              key={exam.id}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.07 }}
              viewport={{ once: true }}
              whileHover={{ y: -4 }}
            >
              <Link href={`/exams/${exam.id}`} className="block h-full">
                <div
                  className="h-full bg-[#12141f] border border-white/8 rounded-2xl p-5 hover:border-opacity-40 transition-all duration-200 group cursor-pointer"
                  style={{ '--exam-color': exam.color } as React.CSSProperties}
                >
                  {/* Icon */}
                  <div
                    className="w-11 h-11 rounded-xl flex items-center justify-center text-xl mb-4 group-hover:scale-110 transition-transform duration-200"
                    style={{ backgroundColor: `${exam.color}18` }}
                  >
                    {exam.icon}
                  </div>

                  {/* Name + score range */}
                  <div className="mb-3">
                    <h3
                      className="text-xl font-bold mb-0.5 transition-colors"
                      style={{ color: exam.color }}
                    >
                      {exam.name}
                    </h3>
                    <p className="text-xs text-slate-500 font-mono">{exam.scoreRange}</p>
                  </div>

                  {/* Description */}
                  <p className="text-sm text-slate-400 leading-snug mb-4">
                    {exam.description}
                  </p>

                  {/* CTA */}
                  <div
                    className="flex items-center gap-1.5 text-xs font-medium transition-colors"
                    style={{ color: exam.color }}
                  >
                    <span>Check percentile</span>
                    <ArrowRight size={12} className="group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
