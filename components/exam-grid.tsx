'use client';

import { motion } from 'framer-motion';
import { exams } from '@/lib/exam-data';
import Link from 'next/link';

export function ExamGrid() {
  return (
    <section id="exams" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Master All Major Exams
          </h2>
          <p className="text-xl text-muted-foreground">
            Comprehensive prep for SAT, ACT, GRE, GMAT, LSAT, GCSE, and A-Levels
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-6">
          {exams.map((exam, index) => (
            <motion.div
              key={exam.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -8 }}
            >
              <Link href={`/exams/${exam.id}`}>
                <div className="h-full bg-card border border-border rounded-lg p-6 hover:border-primary transition cursor-pointer group">
                  <div
                    className="w-12 h-12 rounded-lg flex items-center justify-center text-2xl mb-4 group-hover:scale-110 transition"
                    style={{ backgroundColor: `${exam.color}20` }}
                  >
                    {exam.icon}
                  </div>
                  <h3
                    className="text-2xl font-bold mb-2 transition"
                    style={{ color: exam.color }}
                  >
                    {exam.name}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    {exam.description}
                  </p>
                  <div className="pt-4 border-t border-border">
                    <p className="text-xs text-muted-foreground">
                      Max Score: <span className="text-foreground font-semibold">{exam.maxScore}</span>
                    </p>
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
