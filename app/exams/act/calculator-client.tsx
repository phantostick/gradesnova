'use client';

// app/exams/act/calculator-client.tsx
// Interactive island: sliders, Science opt-out toggle, gauge, FAQ accordion.
// All static content lives in page.tsx (server component).

import React, { useState, useMemo } from 'react';
import {
  ACT_COMPOSITE_PERCENTILES,
  ACT_ENGLISH_PERCENTILES,
  ACT_MATH_PERCENTILES,
  ACT_READING_PERCENTILES,
  ACT_SCIENCE_PERCENTILES,
  getPercentile,
  getACTPercentileContext,
} from '@/lib/act-data';
import { ChevronDown, ChevronUp } from 'lucide-react';
import Link from 'next/link';
import { ACT_LAST_MODIFIED, ACT_SAT_CROSSWALK, ACT_FAQS } from '@/lib/act-meta';

const COLOR = '#06b6d4';

// ─── Ordinal helper ───────────────────────────────────────────────────────────
function ordinal(n: number): string {
  const abs = Math.abs(Math.floor(n));
  const v = abs % 100;
  if (v >= 11 && v <= 13) return n + 'th';
  switch (abs % 10) {
    case 1: return n + 'st';
    case 2: return n + 'nd';
    case 3: return n + 'rd';
    default: return n + 'th';
  }
}

// ─── Enhanced ACT (post-April 2025) raw → scaled conversion tables ────────────
// Source: ACT, Inc. published score guides —
// act.org/content/dam/act/unsecured/documents/ACT-Ntl-Enhancements-Scoring-Key-and-Conversion-Tables.pdf
// English: 50 Q, Math: 45 Q, Reading: 36 Q, Science: 40 Q (optional)
// NOTE: On the Enhanced ACT, the composite is the average of English + Math +
// Reading ONLY. Science is always reported as a separate score (plus a STEM
// score combined with Math) and never factors into the composite, regardless
// of whether the student takes it.

const ENG_CONVERSION: Record<number, number> = {
  50:36,49:36,48:36,47:35,46:35,45:34,44:34,43:33,42:32,41:31,
  40:30,39:29,38:28,37:25,36:24,35:24,34:23,33:22,32:22,31:21,
  30:21,29:20,28:20,27:19,26:18,25:18,24:17,23:16,22:16,21:15,
  20:14,19:14,18:13,17:12,16:11,15:10,14:9,13:9,12:8,11:8,
  10:7,9:7,8:6,7:6,6:5,5:4,4:4,3:3,2:2,1:1,0:1,
};
const MATH_CONVERSION: Record<number, number> = {
  45:36,44:36,43:35,42:35,41:34,40:33,39:32,38:32,37:31,36:30,
  35:29,34:28,33:28,32:27,31:27,30:26,29:26,28:25,27:24,26:24,
  25:23,24:22,23:22,22:21,21:20,20:20,19:19,18:19,17:18,16:18,
  15:18,14:17,13:17,12:16,11:16,10:16,9:15,8:15,7:14,6:14,
  5:13,4:12,3:11,2:9,1:6,0:1,
};
const READING_CONVERSION: Record<number, number> = {
  36:36,35:36,34:35,33:33,32:33,31:32,30:31,29:29,28:28,27:27,
  26:26,25:25,24:24,23:23,22:22,21:21,20:20,19:20,18:19,17:18,
  16:17,15:16,14:15,13:14,12:14,11:13,10:12,9:12,8:11,7:11,
  6:10,5:9,4:7,3:6,2:4,1:2,0:1,
};
const SCIENCE_CONVERSION: Record<number, number> = {
  40:36,39:36,38:36,37:35,36:34,35:33,34:32,33:30,32:29,31:28,
  30:26,29:25,28:25,27:24,26:24,25:23,24:22,23:22,22:21,21:20,
  20:20,19:19,18:18,17:18,16:17,15:17,14:16,13:16,12:15,11:14,
  10:13,9:12,8:11,7:10,6:9,5:8,4:7,3:6,2:4,1:3,0:1,
};

function rawToScaled(raw: number, table: Record<number, number>): number {
  return table[Math.max(0, raw)] ?? 1;
}

// ─── Static lookup data (hoisted — never recreated on render) ────────────────
// These used to be inline array literals inside JSX, which meant JavaScript
// reallocated them on every single render — i.e. on every slider drag tick.
// Hoisting them to module scope means they're created exactly once.

const SCORE_BENCHMARKS = [
  { score: 36, pct: 99, label: 'Perfect score' },
  { score: 33, pct: 97, label: 'Ivy-competitive' },
  { score: 30, pct: 93, label: 'Top 7%' },
  { score: 27, pct: 85, label: 'Top 15%' },
  { score: 24, pct: 74, label: 'Above average' },
  { score: 21, pct: 57, label: 'National average' },
  { score: 18, pct: 38, label: 'Below average' },
];

const FORMAT_OVERVIEW = [
  { icon: '📝', label: 'English',     color: COLOR,     time: '35 min', q: '50 questions',            detail: 'Grammar, punctuation, sentence structure, rhetorical skills' },
  { icon: '📐', label: 'Mathematics', color: '#6366f1', time: '50 min', q: '45 questions',            detail: 'Pre-algebra through trig. Calculator permitted the entire section' },
  { icon: '📖', label: 'Reading',     color: '#a855f7', time: '40 min', q: '36 questions',            detail: 'Literary narrative, social science, humanities, natural science' },
  { icon: '🔬', label: 'Science',     color: '#34d399', time: '40 min', q: '40 questions (optional, scored separately)', detail: 'Scientific reasoning, data interpretation, experimental design' },
];

const GAUGE_RADIUS = 72;
const GAUGE_CIRC = 2 * Math.PI * GAUGE_RADIUS;

// ─── CSS-transitioned gauge ────────────────────────────────────────────────────
// PERFORMANCE FIX: this previously remounted on every percentile change
// (parent wrapped it in `key={compositePerc}`) and injected a brand-new
// <style> tag with a uniquely-named @keyframes rule on every remount. While
// dragging a slider, that fires dozens of times per second — forcing a style
// recalculation + reflow on every tick, which directly hurts INP (Interaction
// to Next Paint), a Core Web Vital.
// Fix: no remount, no per-value <style> tag. Just transition stroke-dasharray
// directly via a static CSS transition — the browser animates it smoothly on
// its own compositor thread without any DOM/stylesheet churn.
const PercentileGauge = React.memo(function PercentileGauge({
  percentile, color,
}: { percentile: number; color: string }) {
  const dash = GAUGE_CIRC * Math.min(percentile / 100, 1);

  return (
    <div className="relative w-44 h-44 mx-auto" role="img" aria-label={`${ordinal(percentile)} percentile`}>
      <svg className="w-full h-full -rotate-90" viewBox="0 0 160 160">
        <circle cx="80" cy="80" r={GAUGE_RADIUS} fill="none" stroke="rgba(255,255,255,0.05)" strokeWidth="14" />
        <circle
          cx="80" cy="80" r={GAUGE_RADIUS} fill="none"
          stroke={color} strokeWidth="14" strokeLinecap="round"
          style={{
            strokeDasharray: `${dash} ${GAUGE_CIRC - dash}`,
            transition: 'stroke-dasharray 0.35s cubic-bezier(0.4,0,0.2,1), stroke 0.35s ease',
          }}
        />
      </svg>
      <div className="absolute inset-0 flex flex-col items-center justify-center gap-0.5">
        <span className="text-4xl font-bold text-white tabular-nums">
          {percentile}<span className="text-lg text-slate-400 font-normal">th</span>
        </span>
        <span className="text-xs text-slate-500">percentile</span>
      </div>
    </div>
  );
});

// ─── Raw score module input ───────────────────────────────────────────────────
// PERFORMANCE FIX: wrapped in React.memo. This is a pure presentational
// component, so memoizing it means dragging the English slider no longer
// re-renders the Math, Reading, and Science sliders too.
const ModuleInput = React.memo(function ModuleInput({
  label, value, max, color, scaledScore, onChange,
}: {
  label: string; value: number; max: number; color: string; scaledScore: number; onChange: (v: number) => void;
}) {
  const pct = (value / max) * 100;
  return (
    <div>
      <div className="flex items-center justify-between mb-2">
        <label className="text-xs font-medium text-slate-300">{label}</label>
        <div className="flex items-center gap-2">
          <span className="text-xs font-semibold tabular-nums" style={{ color }}>→ scaled {scaledScore}</span>
          <span className="text-sm font-bold tabular-nums w-6 text-right" style={{ color }}>{value}</span>
        </div>
      </div>
      <div className="relative h-6 flex items-center">
        <div className="absolute w-full h-1.5 rounded-full bg-white/8" />
        <div
          className="absolute h-1.5 rounded-full"
          style={{ width: `${pct}%`, backgroundColor: color, opacity: 0.7, transition: 'width 0.075s' }}
        />
        <input
          type="range" min={0} max={max} step={1} value={value}
          onChange={e => onChange(Number(e.target.value))}
          aria-label={label}
          className="absolute w-full h-full opacity-0 cursor-pointer" style={{ zIndex: 10 }}
        />
        <div
          className="absolute w-4 h-4 rounded-full border-2 border-white shadow-lg shadow-black/40 pointer-events-none"
          style={{ left: `calc(${pct}% - 8px)`, backgroundColor: color, transition: 'left 0.075s' }}
        />
      </div>
      <div className="flex justify-between mt-1">
        <span className="text-[10px] text-slate-600 font-mono">0</span>
        <span className="text-[10px] text-slate-600 font-mono">{max} correct</span>
      </div>
    </div>
  );
});

// ─── FAQ accordion (client — needs open/close state) ─────────────────────────
export function FAQSection() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section id="faq" aria-labelledby="faq-heading">
      <h2 id="faq-heading" className="text-2xl font-bold text-white mb-2">
        Frequently Asked Questions About ACT Scores
      </h2>
      <p className="text-slate-400 text-sm mb-6">
        Common questions about our ACT score calculator, ACT scoring, the 2025 Enhanced ACT format
        change, percentiles, the national average ACT score in 2026, and what scores get you into
        top schools.
      </p>
      <div className="space-y-2">
        {ACT_FAQS.map((faq, i) => (
          <div key={i} className="bg-[#12141f] border border-white/7 rounded-xl overflow-hidden">
            <button
              onClick={() => setOpen(open === i ? null : i)}
              className="w-full flex items-center justify-between px-5 py-4 text-left gap-4"
              aria-expanded={open === i}
            >
              <span className="text-sm font-medium text-white">{faq.question}</span>
              {open === i
                ? <ChevronUp size={16} className="text-slate-400 shrink-0" />
                : <ChevronDown size={16} className="text-slate-400 shrink-0" />}
            </button>
            <div
              className="overflow-hidden transition-all duration-200"
              style={{ maxHeight: open === i ? '800px' : '0px' }}
            >
              <p className="px-5 pb-4 text-sm text-slate-400 leading-relaxed border-t border-white/6 pt-3">
                {faq.answer}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

// ─── Main interactive calculator ──────────────────────────────────────────────
export default function ACTCalculatorClient() {
  const [rawEng,      setRawEng]      = useState(35);
  const [rawMath,     setRawMath]     = useState(30);
  const [rawReading,  setRawReading]  = useState(24);
  const [rawScience,  setRawScience]  = useState(28);
  // Whether the student is taking/reporting the optional Science section.
  // This ONLY controls whether Science inputs/results are shown — it never
  // changes the composite, because Science is never part of the Enhanced
  // ACT composite (English + Math + Reading only).
  const [scienceOptOut, setScienceOptOut] = useState(false);

  const scaledEng     = useMemo(() => rawToScaled(rawEng,     ENG_CONVERSION),     [rawEng]);
  const scaledMath    = useMemo(() => rawToScaled(rawMath,    MATH_CONVERSION),    [rawMath]);
  const scaledReading = useMemo(() => rawToScaled(rawReading, READING_CONVERSION), [rawReading]);
  const scaledScience = useMemo(() => rawToScaled(rawScience, SCIENCE_CONVERSION), [rawScience]);

  // Enhanced ACT composite = average of English, Math, and Reading ONLY.
  // Science is always excluded — taking it produces a separate Science score
  // and a combined STEM score (with Math), but neither affects the composite.
  const displayComposite = useMemo(() => {
    const sections = [scaledEng, scaledMath, scaledReading];
    return Math.round(sections.reduce((a, b) => a + b, 0) / sections.length);
  }, [scaledEng, scaledMath, scaledReading]);

  // STEM score: average of Math and Science, only meaningful if Science was taken.
  const stemScore = useMemo(() => {
    if (scienceOptOut) return null;
    return Math.round((scaledMath + scaledScience) / 2);
  }, [scaledMath, scaledScience, scienceOptOut]);

  const compositePerc = useMemo(() => getPercentile(displayComposite, ACT_COMPOSITE_PERCENTILES), [displayComposite]);
  const englishPerc   = useMemo(() => getPercentile(scaledEng,     ACT_ENGLISH_PERCENTILES),  [scaledEng]);
  const mathPerc      = useMemo(() => getPercentile(scaledMath,    ACT_MATH_PERCENTILES),     [scaledMath]);
  const readingPerc   = useMemo(() => getPercentile(scaledReading, ACT_READING_PERCENTILES),  [scaledReading]);
  const sciencePerc   = useMemo(() => getPercentile(scaledScience, ACT_SCIENCE_PERCENTILES),  [scaledScience]);
  const context       = useMemo(() => getACTPercentileContext(compositePerc), [compositePerc]);

  const satEquiv = useMemo(
    () => ACT_SAT_CROSSWALK.find(r => r.act === displayComposite)?.sat ?? null,
    [displayComposite],
  );

  // PERFORMANCE NOTE: this array depends on state (scaledEng/Math/Reading/
  // Science + scienceOptOut), so it has to be rebuilt on render — that's
  // unavoidable and cheap. Only the truly static arrays (benchmarks, format
  // overview) were hoisted above, since those never change.
  const sectionRows = useMemo(() => ([
    { label: 'English', scaled: scaledEng,     pct: englishPerc, color: COLOR      },
    { label: 'Math',    scaled: scaledMath,    pct: mathPerc,    color: '#6366f1'  },
    { label: 'Reading', scaled: scaledReading, pct: readingPerc, color: '#a855f7'  },
    ...(!scienceOptOut ? [{ label: 'Science*', scaled: scaledScience, pct: sciencePerc, color: '#34d399' }] : []),
  ]), [scaledEng, scaledMath, scaledReading, scaledScience, englishPerc, mathPerc, readingPerc, sciencePerc, scienceOptOut]);

  return (
    <div className="grid lg:grid-cols-5 gap-8">
      {/* ── LEFT: raw score inputs ── */}
      <div className="lg:col-span-2 space-y-5">
        <div className="bg-[#12141f] border border-white/8 rounded-2xl p-6 space-y-6">

          <ModuleInput
            label="English — correct out of 50"
            value={rawEng} max={50} color={COLOR}
            scaledScore={scaledEng}
            onChange={setRawEng}
          />

          <ModuleInput
            label="Math — correct out of 45"
            value={rawMath} max={45} color="#6366f1"
            scaledScore={scaledMath}
            onChange={setRawMath}
          />

          <ModuleInput
            label="Reading — correct out of 36"
            value={rawReading} max={36} color="#a855f7"
            scaledScore={scaledReading}
            onChange={setRawReading}
          />

          {/* Science (optional — does not affect composite) */}
          <div>
            <div className="flex items-center justify-between mb-1.5">
              <div className="flex items-center gap-2">
                <label className="text-xs font-medium text-slate-300">Science — correct out of 40</label>
                <span className="text-[10px] text-amber-400/80 font-medium">(optional · not in composite)</span>
              </div>
              <button
                onClick={() => setScienceOptOut(v => !v)}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-[11px] font-semibold transition-all hover:scale-105 active:scale-95 border"
                style={scienceOptOut
                  ? { backgroundColor: 'rgba(255,255,255,0.06)', borderColor: 'rgba(255,255,255,0.12)', color: '#64748b' }
                  : { backgroundColor: '#34d39922', borderColor: '#34d39960', color: '#34d399', boxShadow: '0 0 10px #34d39930' }}>
                <span
                  className="w-1.5 h-1.5 rounded-full shrink-0"
                  style={{ backgroundColor: scienceOptOut ? '#475569' : '#34d399' }}
                />
                {scienceOptOut ? 'Skipped' : 'Taken'}
              </button>
            </div>

            {!scienceOptOut ? (
              <>
                <ModuleInput
                  label="correct out of 40"
                  value={rawScience} max={40} color="#34d399"
                  scaledScore={scaledScience}
                  onChange={setRawScience}
                />
                <p className="text-[10px] text-slate-600 mt-1.5">
                  Science is reported as its own score and combined with Math into a STEM score —
                  it does not change your composite either way.
                </p>
              </>
            ) : (
              <p className="text-[10px] text-slate-600 mt-1.5">
                Science skipped. This has no effect on your composite — Science never counts
                toward it, even when taken.
              </p>
            )}
          </div>

          {/* Composite total */}
          <div className="border-t border-white/8 pt-4 flex items-center justify-between">
            <span className="text-sm text-slate-400">Estimated composite</span>
            <span className="text-2xl font-bold text-white tabular-nums">{displayComposite}</span>
          </div>
          <p className="text-[10px] text-slate-600 -mt-2 leading-relaxed">
            Composite = average of English, Math &amp; Reading only (Enhanced ACT, post-April 2025
            rules). Question counts: English 50 Q · Math 45 Q · Reading 36 Q · Science 40 Q
            (optional, scored separately). Scaled scores are estimates — actual conversions vary by
            test form.
          </p>

          <Link
            href={`/exams/act/colleges#score-${displayComposite}`}
            className="flex items-center justify-center gap-2 w-full rounded-xl px-4 py-3 text-sm font-semibold text-white transition-all hover:scale-[1.02] active:scale-95"
            style={{ background: 'linear-gradient(135deg, #6366f1, #a855f7)' }}
          >
            🎓 What colleges can I get into with a {displayComposite}?
          </Link>
        </div>

        {/* ACT → SAT */}
        {satEquiv && (
          <div className="bg-[#12141f] border border-white/8 rounded-xl p-4">
            <p className="text-xs text-slate-500 uppercase tracking-wider font-semibold mb-2">SAT equivalent</p>
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs text-slate-400">ACT {displayComposite} ≈</p>
                <p className="text-2xl font-bold text-white mt-0.5">
                  {satEquiv} <span className="text-sm text-slate-400 font-normal">SAT</span>
                </p>
              </div>
              <Link href="/exams/sat"
                className="text-xs px-3 py-1.5 rounded-lg font-medium border transition-all hover:scale-105"
                style={{ backgroundColor: '#6366f115', borderColor: '#6366f130', color: '#6366f1' }}>
                SAT calc
              </Link>
            </div>
          </div>
        )}

        {/* Benchmarks */}
        <div className="bg-[#12141f] border border-white/8 rounded-xl p-5">
          <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-3">Score benchmarks</p>
          <div className="space-y-1.5">
            {SCORE_BENCHMARKS.map(b => (
              <div key={b.score}
                className={`flex items-center justify-between py-1 transition-opacity ${displayComposite === b.score ? 'opacity-100' : 'opacity-50'}`}>
                <div>
                  <span className="text-xs font-mono text-white">{b.score}</span>
                  <span className="text-[10px] text-slate-500 ml-2">{b.label}</span>
                </div>
                <span className="text-xs font-semibold text-slate-300">{ordinal(b.pct)}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── RIGHT: results ── */}
      <div className="lg:col-span-3 space-y-5">
        <div className="bg-[#12141f] border border-white/8 rounded-2xl p-7">
          <PercentileGauge percentile={compositePerc} color={context.color} />
          <div className="text-center mt-5 mb-6">
            <div
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-sm font-semibold border mb-2"
              style={{ backgroundColor: `${context.color}15`, borderColor: `${context.color}30`, color: context.color }}>
              {context.label}
            </div>
            <p className="text-slate-400 text-sm">{context.description}</p>
          </div>
          <div className="grid grid-cols-3 gap-3">
            {[
              { label: 'Your score',   value: displayComposite },
              { label: 'National avg', value: 21 },
              { label: 'Percentile',   value: `${ordinal(compositePerc)}` },
            ].map(s => (
              <div key={s.label} className="bg-white/4 rounded-xl p-3 text-center">
                <p className="text-base font-bold text-white tabular-nums">{s.value}</p>
                <p className="text-[10px] text-slate-500 mt-0.5">{s.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Section percentiles */}
        <div className="bg-[#12141f] border border-white/8 rounded-2xl p-6">
          <h3 className="text-sm font-semibold text-slate-300 mb-1">Section scores &amp; percentiles</h3>
          <p className="text-[10px] text-slate-600 mb-4">
            English, Math &amp; Reading make up your composite. Science (if taken) is shown for
            reference only.
          </p>
          <div className="space-y-4">
            {sectionRows.map(s => (
              <div key={s.label} className="flex items-center gap-4">
                <div className="w-16 shrink-0">
                  <p className="text-[10px] text-slate-500">{s.label}</p>
                  <p className="text-sm font-bold text-white">{s.scaled}</p>
                </div>
                <div className="flex-1">
                  <div className="h-2 bg-white/8 rounded-full overflow-hidden">
                    <div className="h-full rounded-full"
                      style={{ width: `${s.pct}%`, backgroundColor: s.color, transition: 'width 0.35s ease' }} />
                  </div>
                </div>
                <div className="w-12 text-right shrink-0">
                  <p className="text-sm font-bold tabular-nums" style={{ color: s.color }}>{ordinal(s.pct)}</p>
                </div>
              </div>
            ))}
          </div>
          {!scienceOptOut && stemScore !== null && (
            <div className="flex items-center justify-between mt-4 pt-3 border-t border-white/6">
              <p className="text-[11px] text-slate-500">
                STEM score* <span className="text-slate-600">(avg. of Math + Science)</span>
              </p>
              <p className="text-sm font-bold text-white tabular-nums">{stemScore}</p>
            </div>
          )}
          {!scienceOptOut && (
            <p className="text-[10px] text-slate-600 mt-3">
              *Science and STEM scores are reported separately and do not affect your composite.
            </p>
          )}
          {scienceOptOut && (
            <p className="text-[10px] text-slate-600 pt-1">Science skipped — not reported.</p>
          )}
        </div>

        {/* ACT format overview */}
        <div className="bg-[#12141f] border border-white/8 rounded-2xl p-6">
          <h3 className="text-sm font-semibold text-slate-300 mb-1">ACT format overview</h3>
          <p className="text-[10px] text-amber-400/80 mb-3">⚠ Enhanced ACT (post-April 2025) question counts shown.</p>
          <div className="space-y-3">
            {FORMAT_OVERVIEW.map(s => (
              <div key={s.label} className="flex gap-3 p-3 bg-white/3 rounded-xl">
                <span className="text-base mt-0.5" aria-hidden="true">{s.icon}</span>
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-sm font-semibold text-white">{s.label}</span>
                    <span className="text-[10px] font-mono px-1.5 py-0.5 rounded"
                      style={{ backgroundColor: `${s.color}20`, color: s.color }}>{s.time}</span>
                    <span className="text-[10px] text-slate-500">{s.q}</span>
                  </div>
                  <p className="text-xs text-slate-500">{s.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
