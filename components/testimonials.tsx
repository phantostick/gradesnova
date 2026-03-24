// Server component — no Framer Motion
import { testimonials } from '@/lib/exam-data';

export function Testimonials() {
  return (
    <section id="testimonials" className="py-20 bg-[#0a0c14]">
      <style>{`
        @keyframes testiFadeUp {
          from { opacity: 0; transform: translateY(28px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .testi-heading { animation: testiFadeUp 0.5s ease both; }
        .testi-card {
          opacity: 0;
          animation: testiFadeUp 0.45s ease forwards;
          transition: border-color 0.2s ease;
        }
        .testi-card:hover { border-color: rgba(255,255,255,0.14); }
        .testi-card:nth-child(1) { animation-delay: 0.08s; }
        .testi-card:nth-child(2) { animation-delay: 0.16s; }
        .testi-card:nth-child(3) { animation-delay: 0.24s; }
      `}</style>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="testi-heading text-center mb-14">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">
            What students say
          </h2>
          <p className="text-lg text-slate-400">From students who checked their scores on results day</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map(t => (
            <article key={t.name} className="testi-card bg-[#12141f] border border-white/8 rounded-2xl p-7">
              <div className="flex gap-0.5 mb-4" aria-label="5 stars" role="img">
                {Array.from({ length: 5 }).map((_, j) => (
                  <span key={j} className="text-amber-400 text-sm" aria-hidden="true">★</span>
                ))}
              </div>
              <blockquote className="text-slate-300 leading-relaxed mb-6 text-sm">
                &ldquo;{t.quote}&rdquo;
              </blockquote>
              <footer className="flex items-center gap-3 border-t border-white/6 pt-5">
                <span className="text-2xl" aria-hidden="true">{t.image}</span>
                <div>
                  <p className="text-sm font-semibold text-white">{t.name}</p>
                  <p className="text-xs text-slate-500">{t.role}</p>
                </div>
              </footer>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
