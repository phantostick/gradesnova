'use client';

import { motion } from 'framer-motion';

export function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-background">
      {/* Grid background */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage:
            'linear-gradient(rgba(99, 102, 241, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(99, 102, 241, 0.1) 1px, transparent 1px)',
          backgroundSize: '50px 50px',
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6 leading-tight">
              Master Any Test with{' '}
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                AI-Powered Learning
              </span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Personalized study plans, intelligent tutoring, and real exam-like practice tests to help you achieve your target score.
            </p>
            <div className="flex gap-4">
              <button className="bg-primary text-primary-foreground px-8 py-3 rounded-lg font-semibold hover:bg-primary/90 transition">
                Get Started
              </button>
              <button className="border border-border text-foreground px-8 py-3 rounded-lg font-semibold hover:bg-card transition">
                View Demo
              </button>
            </div>
          </motion.div>

          {/* Right Visualization */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative h-96 flex items-center justify-center"
          >
            <div className="relative w-64 h-64">
              {/* Animated percentile gauge */}
              <svg
                className="w-full h-full"
                viewBox="0 0 200 200"
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* Background circle */}
                <circle
                  cx="100"
                  cy="100"
                  r="80"
                  fill="none"
                  stroke="rgb(55, 65, 81)"
                  strokeWidth="2"
                  opacity="0.3"
                />

                {/* Progress arc */}
                <motion.circle
                  cx="100"
                  cy="100"
                  r="80"
                  fill="none"
                  stroke="url(#grad)"
                  strokeWidth="8"
                  strokeLinecap="round"
                  strokeDasharray="502.65"
                  strokeDashoffset="0"
                  initial={{ strokeDashoffset: 502.65 }}
                  animate={{ strokeDashoffset: 100 }}
                  transition={{ duration: 2, ease: 'easeOut', delay: 0.4 }}
                  transform="rotate(-90 100 100)"
                />

                {/* Gradient definition */}
                <defs>
                  <linearGradient
                    id="grad"
                    x1="0%"
                    y1="0%"
                    x2="100%"
                    y2="100%"
                  >
                    <stop
                      offset="0%"
                      style={{ stopColor: 'rgb(99, 102, 241)', stopOpacity: 1 }}
                    />
                    <stop
                      offset="100%"
                      style={{ stopColor: 'rgb(52, 211, 153)', stopOpacity: 1 }}
                    />
                  </linearGradient>
                </defs>
              </svg>

              {/* Center text */}
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1 }}
                  className="text-center"
                >
                  <p className="text-4xl font-bold text-foreground">94%</p>
                  <p className="text-sm text-muted-foreground">Percentile</p>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
