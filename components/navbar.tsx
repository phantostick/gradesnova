'use client';

import { motion } from 'framer-motion';

export function Navbar() {
  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="sticky top-0 z-50 backdrop-blur-md bg-background/80 border-b border-border"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center">
              <span className="text-white font-bold">GN</span>
            </div>
            <span className="font-bold text-lg text-foreground">GradesNova</span>
          </div>
          <div className="hidden md:flex gap-8">
            <a href="#exams" className="text-muted-foreground hover:text-foreground transition">Exams</a>
            <a href="#how" className="text-muted-foreground hover:text-foreground transition">How It Works</a>
            <a href="#testimonials" className="text-muted-foreground hover:text-foreground transition">Testimonials</a>
          </div>
          <button className="bg-primary text-primary-foreground px-6 py-2 rounded-lg font-medium hover:bg-primary/90 transition">
            Get Started
          </button>
        </div>
      </div>
    </motion.nav>
  );
}
