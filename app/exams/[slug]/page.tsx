'use client';

import { useParams } from 'next/navigation';
import { motion } from 'framer-motion';
import { exams } from '@/lib/exam-data';
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import Link from 'next/link';
import { ArrowLeft, CalendarDays, Building2, Clock, Users } from 'lucide-react';

export default function ExamDetailPage() {
  const params = useParams();
  const slug = params.slug as string;
  const exam = exams.find(e => e.id === slug);

  if (!exam) {
    return (
      <main className="bg-[#0a0c14] min-h-screen">
        <Navbar />
        <div className="min-h-[60vh] flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-white mb-4">Exam not found</h1>
            <Link href="/" className="text-indigo-400 hover:text-indigo-300 transition-colors">
              ← Back to home
            </Link>
          </div>
        </div>
        <Footer />
      </main>
    );
  }

  return (
    <main className="bg-[#0a0c14] min-h-screen">
      <Navbar />

      <section className="pt-12 pb-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45 }}
          >
            {/* Back */}
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-sm text-slate-500 hover:text-white transition-colors mb-8"
            >
              <ArrowLeft size={15} />
              All exams
            </Link>

            {/* Header */}
            <div className="flex items-center gap-5 mb-10">
              <div
                className="w-16 h-16 rounded-2xl flex items-center justify-center text-3xl shrink-0"
                style={{ backgroundColor: `${exam.color}18` }}
              >
                {exam.icon}
              </div>
              <div>
                <h1
                  className="text-4xl md:text-5xl font-bold tracking-tight"
                  style={{ color: exam.color }}
                >
                  {exam.name}
                </h1>
                <p className="text-lg text-slate-400 mt-1">{exam.description}</p>
              </div>
            </div>

            {/* Predictor placeholder */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15 }}
              className="bg-[#12141f] border border-dashed rounded-2xl p-10 text-center mb-10"
              style={{ borderColor: `${exam.color}30` }}
            >
              <div
                className="w-14 h-14 rounded-2xl flex items-center justify-center text-2xl mx-auto mb-4"
                style={{ backgroundColor: `${exam.color}15` }}
              >
                📊
              </div>
              <h2 className="text-2xl font-bold text-white mb-2">
                {exam.name} Percentile Calculator
              </h2>
              <p className="text-slate-400 text-sm mb-6 max-w-sm mx-auto">
                Enter your {exam.name} score to instantly see your percentile and how you compare to all test takers.
              </p>
              <div
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-medium border"
                style={{
                  backgroundColor: `${exam.color}10`,
                  borderColor: `${exam.color}25`,
                  color: exam.color,
                }}
              >
                <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ backgroundColor: exam.color }} />
                Calculator coming soon
              </div>
            </motion.div>

            {/* Exam info grid */}
            <div className="grid sm:grid-cols-2 gap-4 mb-10">
              {[
                { icon: Building2, label: 'Administered by', value: exam.adminBody },
                { icon: Users,      label: 'Who takes it',   value: exam.audience },
                { icon: CalendarDays, label: 'Test frequency', value: exam.frequency },
                { icon: Clock,     label: 'Score timeline',  value: exam.resultDelay },
              ].map(({ icon: Icon, label, value }) => (
                <div key={label} className="bg-[#12141f] border border-white/7 rounded-xl p-5 flex gap-4">
                  <div
                    className="w-9 h-9 rounded-lg flex items-center justify-center shrink-0 mt-0.5"
                    style={{ backgroundColor: `${exam.color}15` }}
                  >
                    <Icon size={16} style={{ color: exam.color }} />
                  </div>
                  <div>
                    <p className="text-xs text-slate-500 mb-1 font-medium uppercase tracking-wide">{label}</p>
                    <p className="text-sm text-slate-200 leading-snug">{value}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Score range */}
            <div className="bg-[#12141f] border border-white/7 rounded-2xl p-7 mb-6">
              <h3 className="text-lg font-bold text-white mb-4">Scoring explained</h3>
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <p className="text-xs text-slate-500 uppercase tracking-wide font-medium mb-1.5">Score range</p>
                  <p className="text-2xl font-bold" style={{ color: exam.color }}>{exam.scoreRange}</p>
                </div>
                <div>
                  <p className="text-xs text-slate-500 uppercase tracking-wide font-medium mb-1.5">How scoring works</p>
                  <p className="text-sm text-slate-300 leading-relaxed">{exam.scoringNote}</p>
                </div>
              </div>
            </div>

            {/* Other exams */}
            <div>
              <p className="text-sm text-slate-500 mb-3">Other calculators</p>
              <div className="flex flex-wrap gap-2">
                {exams.filter(e => e.id !== exam.id).map(e => (
                  <Link
                    key={e.id}
                    href={`/exams/${e.id}`}
                    className="px-3.5 py-1.5 rounded-full text-xs font-medium border transition-all hover:scale-105"
                    style={{
                      backgroundColor: `${e.color}12`,
                      borderColor: `${e.color}25`,
                      color: e.color,
                    }}
                  >
                    {e.name}
                  </Link>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}