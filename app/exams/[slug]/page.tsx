'use client';

import { useParams } from 'next/navigation';
import { motion } from 'framer-motion';
import { exams } from '@/lib/exam-data';
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import Link from 'next/link';

export default function ExamDetailPage() {
  const params = useParams();
  const slug = params.slug as string;

  const exam = exams.find((e) => e.id === slug);

  if (!exam) {
    return (
      <main>
        <Navbar />
        <div className="min-h-screen flex items-center justify-center bg-background">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-foreground mb-4">Exam not found</h1>
            <Link href="/" className="text-primary hover:underline">
              Back to home
            </Link>
          </div>
        </div>
        <Footer />
      </main>
    );
  }

  return (
    <main>
      <Navbar />
      <section className="min-h-screen bg-background pt-20 pb-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Link
              href="/"
              className="text-primary hover:underline mb-8 inline-block"
            >
              ← Back to exams
            </Link>

            <div className="flex items-center gap-6 mb-12">
              <div
                className="w-20 h-20 rounded-xl flex items-center justify-center text-5xl"
                style={{ backgroundColor: `${exam.color}20` }}
              >
                {exam.icon}
              </div>
              <div>
                <h1
                  className="text-5xl font-bold mb-2"
                  style={{ color: exam.color }}
                >
                  {exam.name}
                </h1>
                <p className="text-xl text-muted-foreground">
                  {exam.description}
                </p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 }}
                className="bg-card border border-border rounded-lg p-8"
              >
                <h3 className="text-2xl font-bold text-foreground mb-4">
                  Exam Overview
                </h3>
                <div className="space-y-4">
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">
                      Maximum Score
                    </p>
                    <p
                      className="text-3xl font-bold"
                      style={{ color: exam.color }}
                    >
                      {exam.maxScore}
                    </p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">
                      Average Score
                    </p>
                    <p className="text-xl text-foreground">{exam.avgScore}</p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 }}
                className="bg-card border border-border rounded-lg p-8"
              >
                <h3 className="text-2xl font-bold text-foreground mb-4">
                  What You'll Get
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <span className="text-secondary mt-1">✓</span>
                    <span className="text-foreground">
                      Personalized study plan tailored to your goals
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-secondary mt-1">✓</span>
                    <span className="text-foreground">
                      Expert-crafted practice questions and full exams
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-secondary mt-1">✓</span>
                    <span className="text-foreground">
                      AI-powered instant feedback on mistakes
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-secondary mt-1">✓</span>
                    <span className="text-foreground">
                      24/7 AI tutor for any question
                    </span>
                  </li>
                </ul>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-gradient-to-r from-primary/10 to-secondary/10 border border-primary/20 rounded-lg p-12 text-center"
            >
              <h2 className="text-3xl font-bold text-foreground mb-4">
                Ready to ace your {exam.name}?
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Join thousands of students who improved their scores with GradesNova
              </p>
              <button
                className="bg-primary text-primary-foreground px-8 py-3 rounded-lg font-semibold hover:bg-primary/90 transition"
              >
                Start Your Free Trial
              </button>
            </motion.div>
          </motion.div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
