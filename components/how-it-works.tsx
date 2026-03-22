'use client';

import { motion } from 'framer-motion';
import { howItWorks } from '@/lib/exam-data';

export function HowItWorks() {
  return (
    <section id="how" className="py-20 bg-card/50 border-y border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            How It Works
          </h2>
          <p className="text-xl text-muted-foreground">
            Three simple steps to transform your test scores
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {howItWorks.map((item, index) => (
            <motion.div
              key={item.step}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              viewport={{ once: true }}
            >
              <div className="bg-background rounded-lg p-8 border border-border h-full">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-5xl">{item.icon}</span>
                  <span className="text-4xl font-bold text-primary/30">
                    {item.step}
                  </span>
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-3">
                  {item.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
