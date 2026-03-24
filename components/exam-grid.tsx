// Server component — CSS transitions for hover, no Framer Motion
import { exams } from '@/lib/exam-data';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export function ExamGrid() {
  return (
    <section id="exams" className="py-20 bg-[#0a0c14]">
      <style>{`
        @keyframes gridFadeUp {
          from { opacity: 0; transform: translateY(28px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .exam-heading { animation: gridFadeUp 0.5s ease both; }
        .exam-card {
          opacity: 0;
          animation: gridFadeUp 0.4s ease forwards;
          transition: transform 0.18s ease, border-color 0.18s ease, box-shadow 0.18s ease;
        }
        .exam-card:hover { transform: translateY(-4px); box-shadow: 0 12px 32px rgba(0,0,0,0.3); }
        .exam-card:nth-child(1) { animation-delay: 0.05s; }
        .exam-card:nth-child(2) { animation-delay: 0.10s; }
        .exam-card:nth-child(3) { animation-delay: 0.15s; }
        .exam-card:nth-child(4) { animation-delay: 0.20s; }
        .exam-card:nth-child(5) { animation-delay: 0.25s; }
        .exam-card:nth-child(6) { animation-delay: 0.30s; }
        .exam-card:nth-child(7) { animation-delay: 0.35s; }
        .exam-icon { transition: transform 0.18s ease; }
        .exam-card:hover .exam-icon { transform: scale(1.1); }
        .exam-arrow { transition: transform 0.18s ease; }
        .exam-card:hover .exam-arrow { transform: translateX(3px); }
      `}</style>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="exam-heading text-center mb-14">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">
            Choose your exam
          </h2>
          <p className="text-lg text-slate-400">
            Free percentile calculators for every major standardised test
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {exams.map(exam => (
            <Link key={exam.id} href={`/exams/${exam.id}`} className="block h-full exam-card">
              <div
                className="h-full bg-[#12141f] border border-white/8 rounded-2xl p-5 cursor-pointer"
                style={{ borderColor: 'rgba(255,255,255,0.08)' }}
              >
                <div
                  className="exam-icon w-11 h-11 rounded-xl flex items-center justify-center text-xl mb-4"
                  style={{ backgroundColor: `${exam.color}18` }}
                  aria-hidden="true"
                >
                  {exam.icon}
                </div>

                <div className="mb-3">
                  <h3 className="text-xl font-bold mb-0.5" style={{ color: exam.color }}>
                    {exam.name}
                  </h3>
                  <p className="text-xs text-slate-500 font-mono">{exam.scoreRange}</p>
                </div>

                <p className="text-sm text-slate-400 leading-snug mb-4">{exam.description}</p>

                <div className="flex items-center gap-1.5 text-xs font-medium" style={{ color: exam.color }}>
                  <span>Check percentile</span>
                  <ArrowRight size={12} className="exam-arrow" aria-hidden="true" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
