'use client';

import { useState } from 'react';
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import Link from 'next/link';

// ── Historical boundary data ────────────────────────────────────────────────
// Source: AQA, Edexcel official grade boundary documents 2021–2025
// 2020 and 2021 were Centre Assessed Grades (CAGs) / TAG — excluded as atypical.
// Data starts from the first normal post-pandemic series (2022).
type Grade = '9' | '8' | '7' | '5' | '4';

const AQA_HIGHER: Record<string, Record<Grade, number>> = {
  '2022': { '9': 198, '8': 165, '7': 133, '5': 84,  '4': 55  },
  '2023': { '9': 210, '8': 176, '7': 142, '5': 90,  '4': 59  },
  '2024': { '9': 213, '8': 178, '7': 144, '5': 93,  '4': 58  },
  '2025': { '9': 219, '8': 183, '7': 148, '5': 96,  '4': 63  },
};

const EDEXCEL_HIGHER: Record<string, Record<Grade, number>> = {
  '2022': { '9': 193, '8': 162, '7': 131, '5': 82,  '4': 48  },
  '2023': { '9': 205, '8': 172, '7': 139, '5': 85,  '4': 50  },
  '2024': { '9': 210, '8': 177, '7': 144, '5': 87,  '4': 49  },
  '2025': { '9': 217, '8': 186, '7': 156, '5': 87,  '4': 53  },
};

const AQA_FOUNDATION: Record<string, Record<Grade, number>> = {
  '2022': { '9': 0,   '8': 0,   '7': 0,   '5': 170, '4': 145 },
  '2023': { '9': 0,   '8': 0,   '7': 0,   '5': 178, '4': 150 },
  '2024': { '9': 0,   '8': 0,   '7': 0,   '5': 184, '4': 155 },
  '2025': { '9': 0,   '8': 0,   '7': 0,   '5': 188, '4': 160 },
};

const YEARS = ['2022', '2023', '2024', '2025'];
const MAX_MARK = 240;

const GRADE_COLORS: Record<Grade, string> = {
  '9': '#34d399',
  '8': '#6366f1',
  '7': '#a855f7',
  '5': '#f59e0b',
  '4': '#ef4444',
};

const GRADE_LABELS: Record<Grade, string> = {
  '9': 'Grade 9',
  '8': 'Grade 8',
  '7': 'Grade 7',
  '5': 'Grade 5 (strong pass)',
  '4': 'Grade 4 (standard pass)',
};

type Board = 'AQA Higher' | 'Edexcel Higher' | 'AQA Foundation';

const DATASETS: Record<Board, Record<string, Record<Grade, number>>> = {
  'AQA Higher':      AQA_HIGHER,
  'Edexcel Higher':  EDEXCEL_HIGHER,
  'AQA Foundation':  AQA_FOUNDATION,
};

const AVAILABLE_GRADES: Record<Board, Grade[]> = {
  'AQA Higher':      ['9', '8', '7', '5', '4'],
  'Edexcel Higher':  ['9', '8', '7', '5', '4'],
  'AQA Foundation':  ['5', '4'],
};

function BarChart({ board }: { board: Board }) {
  const data = DATASETS[board];
  const grades = AVAILABLE_GRADES[board];

  return (
    <div className="overflow-x-auto">
      <div className="min-w-[500px]">
        {grades.map((grade) => (
          <div key={grade} className="mb-6">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-semibold" style={{ color: GRADE_COLORS[grade] }}>
                {GRADE_LABELS[grade]}
              </span>
            </div>
            <div className="space-y-1.5">
              {YEARS.map((year) => {
                const mark = data[year]?.[grade] ?? 0;
                if (mark === 0) return null;
                const pct = Math.round((mark / MAX_MARK) * 100);
                return (
                  <div key={year} className="flex items-center gap-3">
                    <span className="text-xs font-mono text-slate-500 w-10 shrink-0">{year}</span>
                    <div className="flex-1 h-6 bg-white/5 rounded-md overflow-hidden relative">
                      <div
                        className="h-full rounded-md transition-all duration-500 flex items-center"
                        style={{ width: `${pct}%`, backgroundColor: `${GRADE_COLORS[grade]}60` }}
                      />
                      <span
                        className="absolute left-2 top-1/2 -translate-y-1/2 text-xs font-mono font-semibold"
                        style={{ color: GRADE_COLORS[grade] }}
                      >
                        {mark} / {MAX_MARK} ({pct}%)
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function GCSEMathsTrendsPage() {
  const [activeBoard, setActiveBoard] = useState<Board>('AQA Higher');

  return (
    <main className="bg-[#0a0c14] min-h-screen text-white">
      <Navbar />

      <header className="bg-[#0d0f1a] border-b border-white/6 py-12 mt-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav aria-label="Breadcrumb" className="mb-5">
            <ol className="flex items-center gap-2 text-xs text-slate-500">
              <li><Link href="/" className="hover:text-white transition-colors">Home</Link></li>
              <li aria-hidden="true">›</li>
              <li><Link href="/articles" className="hover:text-white transition-colors">Articles</Link></li>
              <li aria-hidden="true">›</li>
              <li className="text-slate-400" aria-current="page">GCSE Maths Boundary Trends</li>
            </ol>
          </nav>
          <div className="flex items-center gap-3 mb-4">
            <span className="text-xs font-mono uppercase tracking-widest text-emerald-400/70">Data · GCSE Maths · 2022–2025</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-white tracking-tight mb-4 leading-tight">
            5-Year Trends in GCSE Maths<br className="hidden sm:block" /> Grade Boundaries
          </h1>
          <p className="text-base text-slate-400 leading-relaxed max-w-2xl">
            What percentage of marks do you really need for a 7, 8, or 9 in GCSE Maths? Four years of official AQA and Edexcel data — visualised — to help you set realistic mock targets.
          </p>
          <div className="flex items-center gap-4 mt-5 text-xs text-slate-500">
            <span>Updated May 2026</span>
            <span>·</span>
            <span>6 min read</span>
          </div>
        </div>
      </header>

      <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">

        {/* Intro */}
        <section>
          <div className="space-y-4 text-slate-400 leading-relaxed">
            <p>
              One of the most common questions before Results Day: <em>"What percentage do I need for a grade 9?"</em> The answer is never a fixed number — it depends on the year, the paper difficulty, and your exam board. But looking at past data gives you a realistic working range.
            </p>
            <p>
              Below, we've charted the official AQA and Edexcel GCSE Maths Higher and Foundation grade boundaries from 2022 to 2025 — the four normal examination years since the pandemic disruption. The 2020 and 2021 series used teacher-assessed grades and are excluded as unrepresentative.
            </p>
          </div>
        </section>

        {/* Key stats strip */}
        <div className="grid sm:grid-cols-3 gap-4">
          {[
            { icon: '📐', label: 'AQA grade 9 range (Higher)', value: '198–219 / 240', sub: '83–91% of total marks', color: '#34d399' },
            { icon: '📘', label: 'Grade 4 range (AQA Higher)', value: '55–63 / 240',   sub: '23–26% of total marks', color: '#f59e0b' },
            { icon: '📊', label: 'Typical year-on-year shift', value: '±5–10 marks',  sub: 'Grade 9 boundary movement', color: '#a855f7' },
          ].map((card) => (
            <div key={card.label} className="bg-[#12141f] border border-white/8 rounded-xl p-4">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-lg" aria-hidden="true">{card.icon}</span>
                <span className="text-xs text-slate-400 font-medium leading-tight">{card.label}</span>
              </div>
              <p className="text-xl font-bold font-mono" style={{ color: card.color }}>{card.value}</p>
              <p className="text-xs text-slate-500 mt-0.5">{card.sub}</p>
            </div>
          ))}
        </div>

        {/* Interactive chart */}
        <section aria-labelledby="chart-heading">
          <h2 id="chart-heading" className="text-2xl font-bold text-white mb-2">
            Boundary chart: 2022–2025
          </h2>
          <p className="text-slate-400 text-sm mb-5">
            Select a board and tier to see how boundaries for each grade have moved year on year. All marks are out of 240.
          </p>

          <div className="flex gap-2 mb-6 flex-wrap">
            {(['AQA Higher', 'Edexcel Higher', 'AQA Foundation'] as Board[]).map((b) => (
              <button
                key={b}
                type="button"
                onClick={() => setActiveBoard(b)}
                className={`px-4 py-2 rounded-xl text-sm font-medium border transition-all ${activeBoard === b ? 'text-white' : 'bg-white/4 border-white/8 text-slate-400 hover:text-white'}`}
                style={activeBoard === b ? { backgroundColor: '#34d39920', borderColor: '#34d39940' } : {}}
              >
                {b}
              </button>
            ))}
          </div>

          <div className="bg-[#12141f] border border-white/8 rounded-2xl p-6">
            <p className="text-xs text-slate-500 mb-5 font-mono uppercase tracking-wider">{activeBoard} — raw marks out of 240</p>
            <BarChart board={activeBoard} />
          </div>
          <p className="text-xs text-slate-600 mt-3">
            Source: Official AQA and Edexcel grade boundary documents, June 2022–2025.
          </p>
        </section>

        {/* Full data table */}
        <section aria-labelledby="table-heading">
          <h2 id="table-heading" className="text-2xl font-bold text-white mb-2">
            Full boundary data: AQA Higher 2022–2025
          </h2>
          <p className="text-slate-400 text-sm mb-5">
            The complete picture for AQA GCSE Maths Higher tier, showing all key grade boundaries and the percentage of total marks each represents.
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm min-w-[520px]" aria-label="AQA GCSE Maths Higher grade boundaries 2022 to 2025">
              <thead>
                <tr className="bg-white/4 border-b border-white/8">
                  <th scope="col" className="text-left px-4 py-3 text-xs font-semibold text-slate-400 uppercase tracking-wider">Year</th>
                  {(['9','8','7','5','4'] as Grade[]).map((g) => (
                    <th key={g} scope="col" className="text-center px-3 py-3 text-xs font-bold uppercase tracking-wider" style={{ color: GRADE_COLORS[g] }}>
                      Grade {g}
                    </th>
                  ))}
                  <th scope="col" className="text-center px-3 py-3 text-xs font-semibold text-slate-500 uppercase tracking-wider">Max</th>
                </tr>
              </thead>
              <tbody>
                {YEARS.map((year, i) => (
                  <tr key={year} className={`border-b border-white/5 last:border-0 ${i % 2 === 0 ? '' : 'bg-white/2'}`}>
                    <td className="px-4 py-3 font-mono font-semibold text-white">{year}</td>
                    {(['9','8','7','5','4'] as Grade[]).map((g) => {
                      const mark = AQA_HIGHER[year]?.[g] ?? 0;
                      const pct = Math.round((mark / MAX_MARK) * 100);
                      return (
                        <td key={g} className="px-3 py-3 text-center">
                          <span className="font-mono text-xs font-semibold" style={{ color: GRADE_COLORS[g] }}>{mark}</span>
                          <span className="text-[10px] text-slate-600 ml-1">({pct}%)</span>
                        </td>
                      );
                    })}
                    <td className="px-3 py-3 text-center font-mono text-xs text-slate-500">{MAX_MARK}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-slate-600 mt-3">Source: AQA official grade boundary documents. * Grade 5 = strong pass. Grade 4 = standard pass.</p>
        </section>

        {/* What this means */}
        <section aria-labelledby="targets-heading">
          <h2 id="targets-heading" className="text-2xl font-bold text-white mb-4">
            What this means for your mock targets
          </h2>
          <div className="space-y-4 text-slate-400 leading-relaxed">
            <p>
              The data tells a clear story. Over the four years shown, the grade 9 boundary for AQA Higher has ranged from <strong className="text-white">198 to 219 marks</strong> out of 240 — a spread of 21 marks. That's the difference between answering 82% and 91% of the paper correctly.
            </p>
            <p>
              The grade 4 boundary has been far more stable, ranging from <strong className="text-white">55 to 63 marks</strong> — around 23–26% of the paper. If you're targeting a pass, consistency matters more than cramming for last-minute marks.
            </p>
            <p>
              For mock revision, <strong className="text-white">aim for the top of the historical range for your target grade</strong>. If you can reliably hit the hardest year's boundary in practice papers, you're protected against a difficult exam. If 2026 turns out to be an easier paper, your grade can only benefit.
            </p>
          </div>

          <div className="mt-6 grid sm:grid-cols-3 gap-4">
            {[
              { grade: '9', target: '220+ / 240', pct: '92%+', note: 'Shoot for above the historical peak to be safe', color: '#34d399' },
              { grade: '7', target: '148+ / 240', pct: '62%+', note: 'Broadly stable — achievable with good topic coverage', color: '#a855f7' },
              { grade: '4', target: '63+ / 240',  pct: '26%+', note: 'Focus on securing marks in familiar topics first', color: '#f59e0b' },
            ].map((row) => (
              <div key={row.grade} className="bg-[#12141f] border border-white/8 rounded-xl p-4">
                <p className="text-xs text-slate-500 mb-1">Mock target for grade {row.grade}</p>
                <p className="text-xl font-bold font-mono" style={{ color: row.color }}>{row.target}</p>
                <p className="text-xs text-slate-500 mt-0.5 mb-2">approx. {row.pct}</p>
                <p className="text-xs text-slate-400 leading-relaxed">{row.note}</p>
              </div>
            ))}
          </div>
          <p className="text-xs text-slate-600 mt-3">Mock targets based on AQA Higher historical peak 2022–2025. Adjust proportionally for Edexcel or OCR.</p>
        </section>

        {/* Key takeaways */}
        <section className="bg-[#12141f] border border-white/8 rounded-2xl p-7">
          <h2 className="text-lg font-bold text-white mb-4">Key takeaways</h2>
          <ul className="space-y-3">
            {[
              'The grade 9 boundary moves more than any other — it reflects how many top students there are in that year, not a fixed difficulty threshold.',
              'The grade 4 standard pass boundary is relatively stable. If you can consistently score 65+ in AQA Higher mocks, you are in a strong position.',
              'Edexcel and AQA boundaries run close to each other in most years, but never assume they are identical.',
              'The Foundation tier grade 5 strong pass requires over 75% of marks — often a bigger challenge than students expect.',
              '2026 boundaries will be published at 8:00am on 21 August 2026. Until then, treat 2025 as your best reference point.',
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-3 text-sm text-slate-400">
                <span className="text-emerald-400 shrink-0 mt-0.5">→</span>
                {item}
              </li>
            ))}
          </ul>
        </section>

        {/* CTA */}
        <div className="bg-[#12141f] border border-emerald-500/20 rounded-2xl p-7 flex gap-5 items-start">
          <div className="text-2xl shrink-0" aria-hidden="true">📐</div>
          <div>
            <h3 className="text-base font-semibold text-white mb-1">Calculate your grade from a raw mark</h3>
            <p className="text-sm text-slate-400 leading-relaxed mb-3">
              Enter any raw mark into the GradesNova GCSE Maths calculator to instantly see what grade it corresponds to under 2025 official boundaries for AQA, Edexcel, OCR and WJEC.
            </p>
            <Link
              href="/exams/gcse"
              className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white px-5 py-2.5 rounded-xl font-semibold text-sm transition-all hover:shadow-lg hover:-translate-y-0.5"
            >
              GCSE Grade Boundary Calculator →
            </Link>
          </div>
        </div>

        {/* Related */}
        <section aria-labelledby="related-heading" className="border-t border-white/8 pt-10">
          <h2 id="related-heading" className="text-sm font-semibold text-slate-500 uppercase tracking-wider mb-4">Related articles</h2>
          <div className="grid sm:grid-cols-2 gap-3">
            {[
              { title: 'Understanding Grade Boundaries: Why Do They Change Every Year?', href: '/articles/understanding-grade-boundaries-explained', color: '#34d399' },
              { title: 'Which A-Level Science Has the Most Unforgiving Grade Boundaries?', href: '/articles/a-level-sciences-hardest-papers', color: '#ec4899' },
            ].map((a) => (
              <Link
                key={a.href}
                href={a.href}
                className="bg-[#12141f] border border-white/8 rounded-xl p-4 hover:border-white/16 transition-colors group"
              >
                <p className="text-sm font-semibold text-white group-hover:brightness-110 transition-all leading-snug">{a.title}</p>
                <span className="text-xs mt-2 inline-block font-medium" style={{ color: a.color }}>Read article →</span>
              </Link>
            ))}
          </div>
        </section>
      </article>

      <Footer />
    </main>
  );
}
