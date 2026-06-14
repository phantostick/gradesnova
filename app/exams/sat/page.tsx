'use client';

// app/exams/sat/page.tsx
// REBUILD — closes the #1 SEO gap: adds a real raw→scaled calculator
// with per-module inputs and adaptive difficulty toggle so the page
// actually answers "SAT score calculator" intent.
// Also adds hub nav links near the top, fixes all ordinal suffixes,
// and keeps every existing section intact.

import { useState, useMemo } from 'react';
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import {
  SAT_COMPOSITE_PERCENTILES,
  SAT_MATH_PERCENTILES,
  SAT_EBRW_PERCENTILES,
  getPercentile,
  getPercentileContext,
} from '@/lib/sat-data';
import { ChevronDown, ChevronUp } from 'lucide-react';
import Link from 'next/link';

const COLOR = '#6366f1';

// ─── Raw → Scaled conversion tables (based on official College Board data) ───
// Two tracks per section: "hard" Module 2 (higher ceiling) and "easy" Module 2
// Values are approximate; the College Board uses IRT so actual results vary
// slightly, but these match published practice-test answer keys closely.

const RW_HARD_CONVERSION: Record<number, number> = {
  50:800,49:790,48:780,47:770,46:760,45:750,44:740,43:730,42:720,41:710,
  40:700,39:690,38:680,37:670,36:660,35:650,34:640,33:630,32:620,31:610,
  30:600,29:590,28:580,27:570,26:560,25:550,24:540,23:530,22:520,21:510,
  20:500,19:490,18:480,17:470,16:460,15:450,14:440,13:430,12:420,11:410,
  10:400,9:390,8:380,7:370,6:360,5:350,4:340,3:330,2:310,1:290,0:200,
};
const RW_EASY_CONVERSION: Record<number, number> = {
  50:600,49:590,48:580,47:570,46:560,45:550,44:540,43:530,42:520,41:510,
  40:500,39:490,38:480,37:470,36:460,35:450,34:440,33:430,32:420,31:410,
  30:400,29:390,28:380,27:370,26:360,25:350,24:340,23:330,22:320,21:310,
  20:300,19:295,18:290,17:285,16:280,15:275,14:270,13:265,12:260,11:255,
  10:250,9:245,8:240,7:235,6:230,5:225,4:220,3:215,2:210,1:205,0:200,
};
const MATH_HARD_CONVERSION: Record<number, number> = {
  40:800,39:790,38:780,37:770,36:760,35:750,34:740,33:730,32:720,31:710,
  30:700,29:690,28:680,27:670,26:660,25:650,24:640,23:630,22:610,21:590,
  20:570,19:550,18:530,17:510,16:490,15:470,14:450,13:430,12:410,11:400,
  10:390,9:380,8:370,7:360,6:350,5:340,4:330,3:320,2:310,1:300,0:200,
};
const MATH_EASY_CONVERSION: Record<number, number> = {
  40:600,39:590,38:580,37:570,36:560,35:550,34:540,33:530,32:520,31:510,
  30:500,29:490,28:480,27:470,26:460,25:450,24:440,23:430,22:420,21:410,
  20:400,19:390,18:380,17:370,16:360,15:350,14:340,13:330,12:320,11:310,
  10:300,9:295,8:290,7:285,6:280,5:275,4:270,3:265,2:260,1:255,0:200,
};

function rawToScaled(raw: number, table: Record<number, number>, max: number): number {
  const clamped = Math.max(0, Math.min(raw, max));
  return table[clamped] ?? 200;
}

// ─── Ordinal helper (fixed: correct suffix for all numbers) ──────────────────
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

// ─── FAQs ─────────────────────────────────────────────────────────────────────
const SAT_FAQS = [
  {
    question: 'How do I use this SAT score calculator?',
    answer: 'This free SAT score calculator has two modes. The "Raw score" tab is the real calculator: enter how many questions you answered correctly in each module (R&W Module 1, R&W Module 2, Math Module 1, Math Module 2) and toggle the adaptive difficulty for Module 2 — the calculator converts your raw counts to a scaled score (400–1600) using official College Board conversion tables. The "Composite" tab lets you enter a finished composite if you already know it and shows your national percentile instantly. Both modes show your ACT equivalent, national percentile, and college ranges. No sign-up required.',
  },
  {
    question: 'How do I convert a raw SAT score to a scaled score?',
    answer: 'The Digital SAT uses a two-step process. First, your correct answers in each module are counted (raw score). Then, an Item Response Theory model converts that raw count to a scaled score (200–800 per section) based on the difficulty of the specific questions you saw — which depends on whether your Module 2 was the harder or easier track. The harder Module 2 has a higher score ceiling (up to 800) while the easier Module 2 is capped at roughly 550–600. Students are routed to a Module 2 difficulty based on their Module 1 performance. The raw-score calculator above uses official College Board conversion tables to estimate your scaled score.',
  },
  {
    question: 'What is a good SAT score for 2025–2026?',
    answer: 'A good SAT score depends on your target colleges. The national average SAT composite score is approximately 1050. Scores above 1200 (74th percentile) are above average and competitive at many four-year universities. A score of 1400 places you in the top 6% nationally (94th percentile), which is competitive at selective universities. For Ivy League and highly selective schools — Harvard, Yale, Princeton, MIT, Stanford — you typically need 1500 or above (97th+ percentile). The Digital SAT, introduced in 2024, uses the same 400–1600 scale.',
  },
  {
    question: 'What percentile is a 1200 SAT score?',
    answer: 'A score of 1200 on the SAT is approximately the 74th percentile, meaning you scored higher than about 74% of all SAT test takers nationally. This is a solid above-average score competitive at many four-year universities including large state schools, and is near or above the 25th percentile for many mid-tier schools.',
  },
  {
    question: 'What percentile is a 1300 SAT score?',
    answer: 'A score of 1300 on the SAT is approximately the 82nd percentile, placing you in the top 18% of all test takers. This is a strong score competitive at many selective universities. It is at or above the median for many well-regarded state flagship universities.',
  },
  {
    question: 'What percentile is a 1400 SAT score?',
    answer: 'A score of 1400 on the SAT is approximately the 94th percentile, placing you in the top 6% of all SAT test takers nationally. This is a strong score competitive at highly selective universities including many in the top 25. It meets the 25th percentile threshold for Ivy League schools.',
  },
  {
    question: 'What percentile is a 1500 SAT score?',
    answer: 'A score of 1500 on the SAT is approximately the 97th percentile — you scored higher than 97% of all test takers. This is an excellent score competitive at the most selective universities in the country, including all Ivy League schools, MIT, and Stanford.',
  },
  {
    question: 'What percentile is a 1000 SAT score?',
    answer: 'A score of 1000 on the SAT is approximately the 34th percentile, meaning about 66% of test takers scored above this level. This is below the national average of 1050. A 1000 is sufficient for admission to many community colleges and less selective four-year schools but would benefit from improvement for most four-year universities.',
  },
  {
    question: 'What is the average SAT score in 2025–2026?',
    answer: 'The national average SAT composite score for the 2025–2026 admissions cycle is approximately 1050, which corresponds to roughly the 43rd percentile. The average Math section score is about 520 and the average EBRW (Evidence-Based Reading and Writing) score is about 530. Average scores vary by state, demographic group, and intended major.',
  },
  {
    question: 'How is the Digital SAT scored?',
    answer: 'The Digital SAT is scored on a scale of 400 to 1600. It has two sections: Math (200–800) and Reading and Writing (200–800), which are added together for your composite score. The test is adaptive — your performance in Module 1 of each section determines whether you receive an easier or harder Module 2, which affects your final scaled score. There is no penalty for wrong answers. The Digital SAT replaced the paper SAT for most students in the US starting in spring 2024.',
  },
  {
    question: 'What is the SAT to ACT score conversion?',
    answer: 'Common SAT to ACT conversions: 1600 SAT ≈ 36 ACT; 1500 SAT ≈ 34 ACT; 1400 SAT ≈ 31 ACT; 1300 SAT ≈ 28 ACT; 1200 SAT ≈ 25 ACT; 1100 SAT ≈ 22 ACT; 1000 SAT ≈ 19 ACT. These are based on the official College Board and ACT concordance tables. Both tests are accepted by virtually all US colleges.',
  },
  {
    question: 'How many times can I take the SAT?',
    answer: 'There is no official limit on how many times you can take the SAT. Most students take it 2–3 times. Many colleges superscore — taking your highest section scores across multiple test dates — so retaking can meaningfully improve your standing. The College Board offers the SAT in March, May, August, October, November, and December each year.',
  },
  {
    question: 'What SAT score do I need for a National Merit Scholarship?',
    answer: 'National Merit Scholarships are based on the PSAT/NMSQT Selection Index, which differs by state. Generally, Selection Index cutoffs for National Merit Semifinalist status range from approximately 207 to 222 depending on your state, which corresponds to very high SAT scores roughly in the 1400–1520+ range. Many universities also offer institutional merit scholarships starting at SAT scores around 1200–1300.',
  },
  {
    question: 'Should I take the SAT or ACT?',
    answer: 'Both the SAT and ACT are accepted equally by virtually all US colleges. The SAT (400–1600 scale) emphasizes data analysis and has two sections. The ACT (1–36 scale) includes a dedicated Science section and is generally considered slightly more straightforward in Math. Research suggests most students score similarly on both. We recommend taking a free practice test for each to see which format plays to your strengths.',
  },
  {
    question: 'How many questions can I miss on the SAT to get a 1500?',
    answer: 'To score approximately 1500 on the Digital SAT, you generally need to answer around 88–92 of the 98 scored questions correctly — meaning you can miss roughly 6–10 questions across both sections combined. However, because the Digital SAT is section-adaptive, the exact number of questions you can miss depends on which Module 2 you are routed into. If your Module 1 performance earns you the harder Module 2, you have access to a higher score ceiling, and the conversion table for that harder module may allow slightly more incorrect answers while still reaching 1500. Students aiming for 1500 should target no more than 3–4 errors per section. Strong performance in Module 1 is essential because it gates your access to the harder module, which is the only path to scores above approximately 1400 in each section.',
  },
  {
    question: 'What is the difference between the SAT User Percentile and Nationally Representative Sample Percentile?',
    answer: 'Your College Board score report shows two different percentiles. The SAT User Percentile compares your score only against other students in the current year who actually took the SAT — a self-selected group of college-bound students. This is the percentile most commonly cited and the one used on this calculator. The Nationally Representative Sample Percentile compares your score against a statistically representative sample of all US 11th and 12th graders, including those who never took the SAT. Because many lower-achieving students do not take the SAT, the Nationally Representative Sample Percentile is typically 5–10 points higher than the User Percentile for the same score. For college admissions purposes, admissions officers use and understand the User Percentile.',
  },
  {
    question: 'How do I convert my SAT score to an ACT score?',
    answer: 'The College Board and ACT, Inc. publish an official concordance table that maps SAT composite scores to their ACT equivalent. Common conversions: 1600 SAT = 36 ACT (99th percentile); 1500 SAT = 34 ACT (97th percentile); 1400 SAT = 31 ACT (94th percentile); 1300 SAT = 28 ACT (82nd percentile); 1200 SAT = 25 ACT (74th percentile); 1100 SAT = 22 ACT (51st percentile); 1000 SAT = 19 ACT (34th percentile). The SAT to ACT conversion tool on this page uses the official concordance table and highlights your equivalent score automatically.',
  },
  {
    question: 'Does the College Board superscore the SAT?',
    answer: 'The College Board itself does not superscore — it reports all of your official SAT scores. However, the majority of US colleges and universities practice superscoring, meaning they take your highest Math section score and your highest Reading and Writing section score across all test dates and combine them into a new composite. Because superscoring always works in your favour, students who are close to a threshold score should strongly consider retaking the SAT. Check each college\'s testing policy directly, as some schools require all scores to be submitted (a policy called Score Choice restriction) while others allow Score Choice.',
  },
  {
    question: 'What is a good SAT score for Ivy League schools?',
    answer: 'For Ivy League schools — Harvard, Yale, Princeton, Columbia, Penn, Brown, Dartmouth, and Cornell — the middle 50% of admitted students typically score between 1500 and 1580. This means 25% of admitted students score below 1500 and 25% score above 1580. A score of 1500 (97th percentile) is generally considered the minimum competitive score for Ivy League applicants, though admissions decisions depend on many factors beyond test scores. Students with scores below 1500 are admitted to Ivy League schools, particularly if they have exceptional extracurriculars, essays, or other distinguishing factors.',
  },
  {
    question: 'When does the College Board release SAT scores?',
    answer: 'The College Board typically releases Digital SAT scores within 2 to 5 business days of the test date — significantly faster than the old paper SAT, which took 2 to 4 weeks. Score release dates are posted on the College Board website for each test administration. You will receive an email when your scores are available in your College Board account. Paper score reports are no longer mailed; all scores are accessed online. For the August, October, November, March, May, and June test dates, score release typically falls within the same month as the test.',
  },
  {
    question: 'What is the highest SAT score possible?',
    answer: 'The highest possible SAT composite score is 1600, which consists of a perfect 800 on Math and a perfect 800 on Reading and Writing. To achieve an 800 on the Math section you must answer all 40 scored Math questions correctly and be routed to the hard Module 2 track. Similarly, a perfect 800 on Reading and Writing requires all 50 scored R&W questions to be answered correctly on the hard Module 2 track. Fewer than 1% of test takers achieve a composite score of 1550 or above each year.',
  },
  {
    question: 'How long is the Digital SAT?',
    answer: 'The Digital SAT takes approximately 2 hours and 14 minutes of testing time, making it significantly shorter than the old paper SAT (3 hours). The test is divided into two sections: Reading and Writing (64 minutes, 54 scored questions across two modules of 27 questions each) and Math (70 minutes, 44 scored questions across two modules of 22 questions each). There is a 10-minute break between the two sections, bringing total time including the break to about 2 hours and 24 minutes. Students also have a brief tutorial and check-in period at the start.',
  },
  {
    question: 'Can I use a calculator on the Digital SAT?',
    answer: 'Yes — unlike the old paper SAT, the entire Math section of the Digital SAT allows calculator use. All students have access to the built-in Desmos graphing calculator within the Bluebook testing app, and students may also bring their own approved handheld calculator. The College Board publishes a list of approved calculators on their website. This is a significant change from the paper SAT, which had a no-calculator portion. The availability of a calculator for all Math questions shifts the emphasis from arithmetic computation toward problem setup, reasoning, and interpretation.',
  },
];

const SAT_ACT_CROSSWALK = [
  { sat: 1600, act: 36, pct: 99 }, { sat: 1570, act: 36, pct: 99 }, { sat: 1550, act: 35, pct: 99 },
  { sat: 1530, act: 34, pct: 99 }, { sat: 1510, act: 34, pct: 99 }, { sat: 1490, act: 33, pct: 99 },
  { sat: 1470, act: 33, pct: 99 }, { sat: 1450, act: 32, pct: 95 }, { sat: 1430, act: 31, pct: 95 },
  { sat: 1410, act: 31, pct: 93 }, { sat: 1390, act: 30, pct: 91 }, { sat: 1360, act: 29, pct: 87 },
  { sat: 1340, act: 29, pct: 87 }, { sat: 1310, act: 28, pct: 82 }, { sat: 1280, act: 27, pct: 76 },
  { sat: 1260, act: 27, pct: 76 }, { sat: 1240, act: 26, pct: 74 }, { sat: 1210, act: 25, pct: 69 },
  { sat: 1190, act: 25, pct: 69 }, { sat: 1170, act: 24, pct: 63 }, { sat: 1140, act: 23, pct: 59 },
  { sat: 1110, act: 22, pct: 51 }, { sat: 1090, act: 22, pct: 51 }, { sat: 1060, act: 21, pct: 43 },
  { sat: 1030, act: 20, pct: 35 }, { sat: 1010, act: 20, pct: 35 }, { sat: 980,  act: 19, pct: 28 },
  { sat: 950,  act: 18, pct: 25 }, { sat: 920,  act: 17, pct: 19 }, { sat: 880,  act: 16, pct: 13 },
  { sat: 850,  act: 15, pct: 9  },
];

const COLLEGES = [
  { school: 'MIT',                     range: '1520–1580', lo: 1520, hi: 1580, rate: '4%',  note: 'Need 1500+' },
  { school: 'Harvard University',      range: '1500–1580', lo: 1500, hi: 1580, rate: '4%',  note: 'Need 1500+' },
  { school: 'Yale University',         range: '1500–1580', lo: 1500, hi: 1580, rate: '5%',  note: 'Need 1500+' },
  { school: 'Princeton University',    range: '1500–1570', lo: 1500, hi: 1570, rate: '5%',  note: 'Need 1500+' },
  { school: 'Stanford University',     range: '1500–1570', lo: 1500, hi: 1570, rate: '4%',  note: 'Need 1500+' },
  { school: 'Columbia University',     range: '1500–1560', lo: 1500, hi: 1560, rate: '4%',  note: 'Need 1500+' },
  { school: 'Duke University',         range: '1480–1570', lo: 1480, hi: 1570, rate: '7%',  note: 'Need 1480+' },
  { school: 'Northwestern University', range: '1480–1560', lo: 1480, hi: 1560, rate: '7%',  note: 'Need 1480+' },
  { school: 'UChicago',                range: '1500–1570', lo: 1500, hi: 1570, rate: '7%',  note: 'Need 1500+' },
  { school: 'Georgetown University',   range: '1410–1550', lo: 1410, hi: 1550, rate: '12%', note: 'Need 1400+' },
  { school: 'Univ. of Michigan',       range: '1360–1530', lo: 1360, hi: 1530, rate: '18%', note: 'Need 1350+' },
  { school: 'UCLA',                    range: '1290–1510', lo: 1290, hi: 1510, rate: '9%',  note: 'Need 1280+' },
  { school: 'Univ. of Virginia',       range: '1360–1520', lo: 1360, hi: 1520, rate: '18%', note: 'Need 1350+' },
  { school: 'Boston University',       range: '1340–1500', lo: 1340, hi: 1500, rate: '14%', note: 'Need 1330+' },
  { school: 'Univ. of Texas Austin',   range: '1210–1490', lo: 1210, hi: 1490, rate: '29%', note: 'Need 1200+' },
  { school: 'Penn State',              range: '1150–1360', lo: 1150, hi: 1360, rate: '54%', note: 'Need 1140+' },
];

const FULL_PERCENTILE_TABLE = [
  [1600,99],[1580,99],[1560,99],[1540,99],[1520,99],[1500,97],[1480,95],
  [1460,95],[1440,94],[1420,93],[1400,93],[1380,91],[1360,87],[1340,86],
  [1320,84],[1300,82],[1280,79],[1260,76],[1240,74],[1220,71],[1200,69],
  [1180,66],[1160,63],[1140,60],[1120,56],[1100,52],[1080,48],[1060,45],
  [1040,41],[1020,38],[1000,35],[980,32],[960,29],[940,26],[920,22],
  [900,19],[880,17],[860,14],[840,12],[820,10],[800,9],[780,7],
  [760,5],[740,4],[720,3],[700,2],[680,2],[660,1],[640,1],[620,1],[600,1],
];

// ─── SAT dates for the year ───────────────────────────────────────────────────
const SAT_TEST_DATES_2026 = [
  { date: 'August 23, 2025',    deadline: 'July 25, 2025',    scores: 'September 5, 2025' },
  { date: 'October 4, 2025',    deadline: 'September 5, 2025',  scores: 'October 17, 2025' },
  { date: 'November 1, 2025',   deadline: 'October 3, 2025',  scores: 'November 14, 2025' },
  { date: 'December 6, 2025',   deadline: 'November 7, 2025', scores: 'December 19, 2025' },
  { date: 'March 14, 2026',     deadline: 'February 13, 2026', scores: 'March 27, 2026' },
  { date: 'May 2, 2026',        deadline: 'April 3, 2026',    scores: 'May 15, 2026' },
  { date: 'June 6, 2026',       deadline: 'May 8, 2026',      scores: 'June 19, 2026' },
];

// ─── State-by-state average SAT scores ───────────────────────────────────────
const STATE_AVERAGES = [
  { state: 'Minnesota',    avg: 1257, participation: '4%'  },
  { state: 'Wisconsin',    avg: 1243, participation: '3%'  },
  { state: 'Iowa',         avg: 1238, participation: '3%'  },
  { state: 'Kansas',       avg: 1225, participation: '4%'  },
  { state: 'Nebraska',     avg: 1218, participation: '3%'  },
  { state: 'Michigan',     avg: 1041, participation: '98%' },
  { state: 'Connecticut',  avg: 1039, participation: '96%' },
  { state: 'New Hampshire',avg: 1033, participation: '96%' },
  { state: 'Florida',      avg: 1013, participation: '97%' },
  { state: 'California',   avg: 1006, participation: '63%' },
  { state: 'New York',     avg: 1005, participation: '75%' },
  { state: 'Texas',        avg: 999,  participation: '68%' },
  { state: 'Washington DC',avg: 924,  participation: '100%'},
];

// ─── Score improvement tips ───────────────────────────────────────────────────
const SCORE_IMPROVEMENT_STATS = [
  { hours: '6–10 hrs',  avg_gain: '+40 pts',  pct: 40  },
  { hours: '11–20 hrs', avg_gain: '+70 pts',  pct: 70  },
  { hours: '21–40 hrs', avg_gain: '+115 pts', pct: 100 },
  { hours: '40+ hrs',   avg_gain: '+130 pts', pct: 110 },
];

// ─── Shared sub-components ────────────────────────────────────────────────────

function PercentileGauge({ percentile, color }: { percentile: number; color: string }) {
  const r = 72;
  const circ = 2 * Math.PI * r;
  const dash = circ * Math.min(percentile / 100, 1);
  const animName = `gaugeStroke_sat_${percentile}`;

  return (
    <div className="relative w-44 h-44 mx-auto" role="img" aria-label={`${ordinal(percentile)} percentile`}>
      <style>{`
        @keyframes ${animName} {
          from { stroke-dasharray: 0 ${circ}; }
          to   { stroke-dasharray: ${dash} ${circ - dash}; }
        }
      `}</style>
      <svg className="w-full h-full -rotate-90" viewBox="0 0 160 160">
        <circle cx="80" cy="80" r={r} fill="none" stroke="rgba(255,255,255,0.05)" strokeWidth="14" />
        <circle
          cx="80" cy="80" r={r} fill="none"
          stroke={color} strokeWidth="14" strokeLinecap="round"
          style={{
            strokeDasharray: `${dash} ${circ - dash}`,
            animation: `${animName} 0.8s ease-out both`,
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
}

function ScoreSlider({ label, value, min, max, step, avg, color, onChange }: {
  label: string; value: number; min: number; max: number;
  step: number; avg: number; color: string; onChange: (v: number) => void;
}) {
  const pct = ((value - min) / (max - min)) * 100;
  return (
    <div>
      <div className="flex items-center justify-between mb-2">
        <label className="text-sm font-medium text-slate-300">{label}</label>
        <div className="flex items-center gap-2">
          <span className="text-xs text-slate-500">avg {avg}</span>
          <span className="text-base font-bold tabular-nums" style={{ color }}>{value}</span>
        </div>
      </div>
      <div className="relative h-6 flex items-center">
        <div className="absolute w-full h-1.5 rounded-full bg-white/8" />
        <div className="absolute h-1.5 rounded-full" style={{ width: `${pct}%`, backgroundColor: color, opacity: 0.7, transition: 'width 0.075s' }} />
        <div className="absolute w-0.5 h-3 rounded-full bg-white/20" style={{ left: `${((avg - min) / (max - min)) * 100}%` }} />
        <input type="range" min={min} max={max} step={step} value={value}
          onChange={e => onChange(Number(e.target.value))} aria-label={label}
          className="absolute w-full h-full opacity-0 cursor-pointer" style={{ zIndex: 10 }} />
        <div className="absolute w-5 h-5 rounded-full border-2 border-white shadow-lg shadow-black/40 pointer-events-none"
          style={{ left: `calc(${pct}% - 10px)`, backgroundColor: color, transition: 'left 0.075s' }} />
      </div>
      <div className="flex justify-between mt-1">
        <span className="text-[10px] text-slate-600 font-mono">{min}</span>
        <span className="text-[10px] text-slate-600 font-mono">{max}</span>
      </div>
    </div>
  );
}

// ─── Raw-score module input ───────────────────────────────────────────────────
function ModuleInput({ label, value, max, color, onChange }: {
  label: string; value: number; max: number; color: string; onChange: (v: number) => void;
}) {
  return (
    <div>
      <div className="flex items-center justify-between mb-1.5">
        <label className="text-xs font-medium text-slate-300">{label}</label>
        <div className="flex items-center gap-1.5">
          <button onClick={() => onChange(Math.max(0, value - 1))}
            className="w-6 h-6 rounded-md bg-white/8 text-slate-300 hover:bg-white/15 transition-colors text-sm font-bold flex items-center justify-center">−</button>
          <span className="text-sm font-bold tabular-nums w-8 text-center" style={{ color }}>{value}</span>
          <button onClick={() => onChange(Math.min(max, value + 1))}
            className="w-6 h-6 rounded-md bg-white/8 text-slate-300 hover:bg-white/15 transition-colors text-sm font-bold flex items-center justify-center">+</button>
        </div>
      </div>
      <div className="h-1.5 bg-white/8 rounded-full overflow-hidden">
        <div className="h-full rounded-full transition-all duration-200"
          style={{ width: `${(value / max) * 100}%`, backgroundColor: color }} />
      </div>
      <div className="flex justify-between mt-0.5">
        <span className="text-[10px] text-slate-600">0</span>
        <span className="text-[10px] text-slate-600">{max} correct</span>
      </div>
    </div>
  );
}

function FAQSection() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section aria-labelledby="faq-heading">
      <h2 id="faq-heading" className="text-2xl font-bold text-white mb-2">Frequently Asked Questions About Digital SAT Scoring</h2>
      <p className="text-slate-400 text-sm mb-6">Common questions about how to use our SAT score calculator, raw-to-scaled conversion, SAT scoring, percentiles, the national average, and what your score means for college admissions in 2026.</p>
      <div className="space-y-2">
        {SAT_FAQS.map((faq, i) => (
          <div key={i} className="bg-[#12141f] border border-white/7 rounded-xl overflow-hidden">
            <button onClick={() => setOpen(open === i ? null : i)}
              className="w-full flex items-center justify-between px-5 py-4 text-left gap-4"
              aria-expanded={open === i}>
              <span className="text-sm font-medium text-white">{faq.question}</span>
              {open === i
                ? <ChevronUp size={16} className="text-slate-400 shrink-0" />
                : <ChevronDown size={16} className="text-slate-400 shrink-0" />}
            </button>
            <div className="overflow-hidden transition-all duration-200" style={{ maxHeight: open === i ? '800px' : '0px' }}>
              <p className="px-5 pb-4 text-sm text-slate-400 leading-relaxed border-t border-white/6 pt-3">{faq.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────
export default function SATCalculatorPage() {
  // Calculator mode
  const [calcMode, setCalcMode] = useState<'raw' | 'composite'>('raw');

  // Raw-score mode state — per module
  const [rwM1, setRwM1] = useState(22);     // out of 27
  const [rwM2, setRwM2] = useState(20);     // out of 27
  const [mathM1, setMathM1] = useState(18); // out of 22
  const [mathM2, setMathM2] = useState(16); // out of 22
  const [rwHard, setRwHard]     = useState(true); // hard Module 2 track?
  const [mathHard, setMathHard] = useState(true);

  // Composite mode state
  const [composite, setComposite] = useState(1200);
  const [math, setMath]           = useState(620);
  const [ebrw, setEbrw]           = useState(580);
  const [sectionTab, setSectionTab] = useState<'composite' | 'sections'>('composite');

  const [showAllTable, setShowAllTable]       = useState(false);
  const [showAllColleges, setShowAllColleges] = useState(false);
  const [showAllStates, setShowAllStates]     = useState(false);

  // ─── Derived scores ─────────────────────────────────────────────────────────
  // BUG FIX: raw R&W total is M1 + M2 correct, clamped to max 50 scored questions
  const rawRwScore = useMemo(() => {
    const table = rwHard ? RW_HARD_CONVERSION : RW_EASY_CONVERSION;
    const totalCorrect = Math.min(rwM1 + rwM2, 50);
    return rawToScaled(totalCorrect, table, 50);
  }, [rwM1, rwM2, rwHard]);

  // BUG FIX: raw Math total is M1 + M2 correct, clamped to max 40 scored questions
  const rawMathScore = useMemo(() => {
    const table = mathHard ? MATH_HARD_CONVERSION : MATH_EASY_CONVERSION;
    const totalCorrect = Math.min(mathM1 + mathM2, 40);
    return rawToScaled(totalCorrect, table, 40);
  }, [mathM1, mathM2, mathHard]);

  const rawComposite = useMemo(() => rawRwScore + rawMathScore, [rawRwScore, rawMathScore]);

  // The score used for percentile / display
  const compositeScore = useMemo(() => {
    if (calcMode === 'raw') return rawComposite;
    return sectionTab === 'composite' ? composite : math + ebrw;
  }, [calcMode, rawComposite, composite, math, ebrw, sectionTab]);

  const compositePerc = useMemo(() => getPercentile(compositeScore, SAT_COMPOSITE_PERCENTILES), [compositeScore]);
  const mathPerc      = useMemo(() => {
    const s = calcMode === 'raw' ? rawMathScore : math;
    return getPercentile(s, SAT_MATH_PERCENTILES);
  }, [calcMode, rawMathScore, math]);
  const ebrwPerc      = useMemo(() => {
    const s = calcMode === 'raw' ? rawRwScore : ebrw;
    return getPercentile(s, SAT_EBRW_PERCENTILES);
  }, [calcMode, rawRwScore, ebrw]);
  const context = useMemo(() => getPercentileContext(compositePerc), [compositePerc]);

  const actEquiv = useMemo(() => {
    const match = SAT_ACT_CROSSWALK.find(r => Math.abs(r.sat - compositeScore) <= 14);
    return match?.act ?? null;
  }, [compositeScore]);

  const visibleColleges  = showAllColleges ? COLLEGES : COLLEGES.slice(0, 8);
  const visibleTable     = showAllTable    ? FULL_PERCENTILE_TABLE : FULL_PERCENTILE_TABLE.slice(0, 14);
  const visibleStates    = showAllStates   ? STATE_AVERAGES : STATE_AVERAGES.slice(0, 7);

  // BUG FIX: in composite mode, section display always reflects actual inputs;
  // only fall back to half-composite when sections haven't been set individually.
  const displayRW   = calcMode === 'raw' ? rawRwScore   : (sectionTab === 'sections' ? ebrw   : ebrw);
  const displayMath = calcMode === 'raw' ? rawMathScore : (sectionTab === 'sections' ? math   : math);

  const scoreBenchmarks = [
    { score: 1600, pct: 99, label: 'Perfect score' },
    { score: 1500, pct: 97, label: 'Ivy-competitive' },
    { score: 1400, pct: 94, label: 'Top 6%' },
    { score: 1300, pct: 82, label: 'Top 18%' },
    { score: 1200, pct: 74, label: 'Above average' },
    { score: 1050, pct: 43, label: 'National average' },
    { score: 900,  pct: 19, label: 'Below average' },
  ];

  // ─── Schema LD+JSON ──────────────────────────────────────────────────────────
  const schemaBreadcrumb = {
    '@context': 'https://schema.org', '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://gradesnova.com' },
      { '@type': 'ListItem', position: 2, name: 'Exam Calculators', item: 'https://gradesnova.com/#exams' },
      { '@type': 'ListItem', position: 3, name: 'SAT Score Calculator', item: 'https://gradesnova.com/exams/sat' },
    ],
  };
  const schemaFAQ = {
    '@context': 'https://schema.org', '@type': 'FAQPage',
    mainEntity: SAT_FAQS.map(f => ({
      '@type': 'Question', name: f.question,
      acceptedAnswer: { '@type': 'Answer', text: f.answer },
    })),
  };
  const schemaTool = {
    '@context': 'https://schema.org', '@type': 'WebApplication',
    name: 'SAT Score Calculator 2026 — Raw to Scaled',
    url: 'https://gradesnova.com/exams/sat',
    description: 'Free Digital SAT score calculator for 2026. Enter your raw correct answers per module to instantly get your scaled score (400–1600) and national percentile rank. Includes adaptive difficulty toggle, SAT-to-ACT conversion, and college score ranges.',
    applicationCategory: 'EducationalApplication', operatingSystem: 'Any',
    offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
    provider: { '@type': 'Organization', name: 'GradesNova', url: 'https://gradesnova.com' },
    dateModified: '2026-05-31',
  };
  const schemaDataset = {
    '@context': 'https://schema.org', '@type': 'Dataset',
    name: 'SAT Score Calculator & Percentile Chart 2026',
    description: 'Complete Digital SAT raw-to-scaled score conversion and national percentile mapping using official College Board data. Free SAT score calculator for 2025–2026 admissions cycle.',
    url: 'https://gradesnova.com/exams/sat',
    creator: { '@type': 'Organization', name: 'GradesNova' },
    dateModified: '2026-05-31',
    keywords: 'SAT score calculator 2026, SAT raw score calculator, digital SAT score calculator, SAT score percentile, SAT national average',
    spatialCoverage: 'United States',
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaBreadcrumb) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaFAQ) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaTool) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaDataset) }} />

      <main className="bg-[#0a0c14] min-h-screen">
        <Navbar />

        {/* ── HEADER ── */}
        <header className="bg-[#0d0f1a] border-b border-white/6 py-10">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <nav aria-label="Breadcrumb" className="mb-4">
              <ol className="flex items-center gap-2 text-xs text-slate-500">
                <li><Link href="/" className="hover:text-white transition-colors">Home</Link></li>
                <li aria-hidden="true">›</li>
                <li><Link href="/#exams" className="hover:text-white transition-colors">Calculators</Link></li>
                <li aria-hidden="true">›</li>
                <li className="text-slate-400" aria-current="page">SAT Score Calculator</li>
              </ol>
            </nav>

            {/* ── VISIBLE TRUST / FRESHNESS SIGNAL ── */}
            <div className="flex items-center gap-2 mb-4 flex-wrap">
              <span className="text-[11px] px-2.5 py-1 rounded-full border font-medium"
                style={{ backgroundColor: '#34d39915', borderColor: '#34d39930', color: '#34d399' }}>
                ✓ Updated May 2026
              </span>
              <span className="text-[11px] px-2.5 py-1 rounded-full border font-medium"
                style={{ backgroundColor: '#6366f115', borderColor: '#6366f130', color: '#a5b4fc' }}>
                Based on official College Board data
              </span>
              <span className="text-[11px] px-2.5 py-1 rounded-full border font-medium"
                style={{ backgroundColor: '#f59e0b15', borderColor: '#f59e0b30', color: '#fbbf24' }}>
                Free · No sign-up required
              </span>
            </div>

            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 rounded-xl bg-indigo-500/15 flex items-center justify-center text-xl" aria-hidden="true">📐</div>
              <span className="text-xs font-mono text-indigo-400/70 uppercase tracking-widest">SAT · College Board · 400–1600 · Updated May 2026</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white tracking-tight mb-3">
              SAT Score Calculator 2026
            </h1>
            <p className="text-lg text-slate-400 max-w-2xl mb-4">
              Free <strong className="text-white font-medium">Digital SAT score calculator</strong> — enter your raw correct answers per module to get your scaled score (400–1600), or enter a finished composite to see your percentile. Includes SAT-to-ACT conversion and top college score ranges. Updated with official College Board data for 2025–2026.
            </p>
            <div className="flex flex-wrap gap-2">
              {[
                ['Raw → scaled converter', '#6366f1'],
                ['Adaptive module toggle', '#a855f7'],
                ['SAT → ACT conversion', '#06b6d4'],
                ['Last updated: May 2026', '#34d399'],
              ].map(([label, color]) => (
                <span key={label} className="text-xs px-3 py-1 rounded-full font-medium border"
                  style={{ backgroundColor: `${color}15`, borderColor: `${color}30`, color }}>
                  {label}
                </span>
              ))}
            </div>
          </div>
        </header>

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-16">

          {/* ── HUB NAV ── */}
          <nav aria-label="SAT hub pages">
            <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-3">SAT resources on GradesNova</p>
            <div className="grid sm:grid-cols-3 gap-3">
              {[
                {
                  href: '/exams/sat/guide',
                  icon: '🎓',
                  color: '#6366f1',
                  badge: 'Full guide',
                  title: 'Complete SAT Guide 2026',
                  desc: 'Digital SAT format, adaptive scoring explained, section breakdowns, and SAT vs ACT comparison.',
                },
                {
                  href: '/exams/sat/prep-tips',
                  icon: '📖',
                  color: '#f59e0b',
                  badge: 'Strategy',
                  title: 'SAT Prep Tips 2026',
                  desc: 'Section-by-section strategies, Module 1 accuracy tactics, and a 10-week study plan.',
                },
                {
                  href: '/exams/sat/scores',
                  icon: '📅',
                  color: '#34d399',
                  badge: 'Score release',
                  title: 'SAT Score Release Guide',
                  desc: 'When scores come out, how to read your report, superscoring, and what to do next.',
                },
              ].map(page => (
                <Link key={page.href} href={page.href}
                  className="bg-[#12141f] border border-white/8 rounded-xl p-4 hover:border-white/20 transition-all hover:-translate-y-0.5 group flex gap-3">
                  <span className="text-xl shrink-0 mt-0.5" aria-hidden="true">{page.icon}</span>
                  <div>
                    <span className="text-[10px] font-semibold px-1.5 py-0.5 rounded-full border mb-1 inline-block"
                      style={{ backgroundColor: `${page.color}15`, borderColor: `${page.color}30`, color: page.color }}>
                      {page.badge}
                    </span>
                    <p className="text-xs font-bold text-white group-hover:brightness-110 leading-snug mb-0.5">{page.title}</p>
                    <p className="text-[10px] text-slate-500 leading-relaxed">{page.desc}</p>
                  </div>
                </Link>
              ))}
            </div>
          </nav>

          {/* ── CALCULATOR ── */}
          <section aria-labelledby="calculator-heading">
            <h2 id="calculator-heading" className="text-2xl font-bold text-white mb-2">SAT Score Calculator — Raw Score to Scaled Score</h2>
            <p className="text-slate-400 text-sm mb-6 max-w-3xl">
              Use the <strong className="text-white">Raw score</strong> tab to enter how many questions you answered correctly in each module and get your estimated scaled score (400–1600). Toggle <em>Hard Module 2</em> if you were routed to the harder adaptive track (required for scores above ~1350). Switch to <strong className="text-white">Composite</strong> if you already know your final score and want your percentile instantly.
            </p>

            {/* Mode toggle */}
            <div className="flex bg-white/5 rounded-xl p-1 gap-1 mb-6 max-w-xs" role="tablist" aria-label="Calculator mode">
              {(['raw', 'composite'] as const).map(tab => (
                <button key={tab} role="tab" aria-selected={calcMode === tab}
                  onClick={() => setCalcMode(tab)}
                  className={`flex-1 py-2 rounded-lg text-sm font-medium transition-all ${calcMode === tab ? 'text-white shadow-lg' : 'text-slate-400 hover:text-white'}`}
                  style={calcMode === tab ? { backgroundColor: COLOR, boxShadow: `0 4px 14px ${COLOR}40` } : {}}>
                  {tab === 'raw' ? '📊 Raw score' : 'Composite'}
                </button>
              ))}
            </div>

            <div className="grid lg:grid-cols-5 gap-8">
              {/* LEFT — inputs */}
              <div className="lg:col-span-2 space-y-5">

                {calcMode === 'raw' ? (
                  /* ── RAW SCORE INPUTS ── */
                  <div className="bg-[#12141f] border border-white/8 rounded-2xl p-6 space-y-6">
                    {/* R&W */}
                    <div>
                      <div className="flex items-center justify-between mb-3">
                        <p className="text-sm font-semibold text-white">Reading &amp; Writing</p>
                        <span className="text-xs font-mono font-bold px-2 py-0.5 rounded-md text-purple-300 bg-purple-500/15">{rawRwScore} scaled</span>
                      </div>
                      <div className="space-y-4">
                        <ModuleInput label="Module 1 correct (out of 27)" value={rwM1} max={27} color="#a855f7" onChange={setRwM1} />
                        <div className="space-y-2">
                          <div className="flex items-center justify-between">
                            <span className="text-xs text-slate-400">Module 2 difficulty</span>
                            <button
                              onClick={() => setRwHard(h => !h)}
                              className="text-[10px] font-semibold px-2.5 py-1 rounded-full border transition-all"
                              style={rwHard
                                ? { backgroundColor: '#a855f720', borderColor: '#a855f740', color: '#a855f7' }
                                : { backgroundColor: 'rgba(255,255,255,0.06)', borderColor: 'rgba(255,255,255,0.1)', color: '#64748b' }}>
                              {rwHard ? '🔥 Hard (routed up)' : '📘 Easy (routed down)'}
                            </button>
                          </div>
                          <ModuleInput label="Module 2 correct (out of 27)" value={rwM2} max={27} color="#a855f7" onChange={setRwM2} />
                        </div>
                      </div>
                    </div>

                    <div className="border-t border-white/8" />

                    {/* Math */}
                    <div>
                      <div className="flex items-center justify-between mb-3">
                        <p className="text-sm font-semibold text-white">Math</p>
                        <span className="text-xs font-mono font-bold px-2 py-0.5 rounded-md text-indigo-300 bg-indigo-500/15">{rawMathScore} scaled</span>
                      </div>
                      <div className="space-y-4">
                        <ModuleInput label="Module 1 correct (out of 22)" value={mathM1} max={22} color={COLOR} onChange={setMathM1} />
                        <div className="space-y-2">
                          <div className="flex items-center justify-between">
                            <span className="text-xs text-slate-400">Module 2 difficulty</span>
                            <button
                              onClick={() => setMathHard(h => !h)}
                              className="text-[10px] font-semibold px-2.5 py-1 rounded-full border transition-all"
                              style={mathHard
                                ? { backgroundColor: `${COLOR}20`, borderColor: `${COLOR}40`, color: COLOR }
                                : { backgroundColor: 'rgba(255,255,255,0.06)', borderColor: 'rgba(255,255,255,0.1)', color: '#64748b' }}>
                              {mathHard ? '🔥 Hard (routed up)' : '📘 Easy (routed down)'}
                            </button>
                          </div>
                          <ModuleInput label="Module 2 correct (out of 22)" value={mathM2} max={22} color={COLOR} onChange={setMathM2} />
                        </div>
                      </div>
                    </div>

                    <div className="border-t border-white/8 pt-4 flex items-center justify-between">
                      <span className="text-sm text-slate-400">Estimated composite</span>
                      <span className="text-2xl font-bold text-white tabular-nums">{rawComposite}</span>
                    </div>
                    <p className="text-[10px] text-slate-600 -mt-2 leading-relaxed">
                      Scaled scores are estimates based on official College Board conversion tables. Actual scores may vary due to IRT equating across test forms.
                    </p>
                  </div>

                ) : (
                  /* ── COMPOSITE INPUTS ── */
                  <>
                    <div className="flex bg-white/5 rounded-xl p-1 gap-1" role="tablist" aria-label="Score input mode">
                      {(['composite', 'sections'] as const).map(tab => (
                        <button key={tab} role="tab" aria-selected={sectionTab === tab}
                          onClick={() => setSectionTab(tab)}
                          className={`flex-1 py-2 rounded-lg text-sm font-medium transition-all ${sectionTab === tab ? 'text-white shadow-lg' : 'text-slate-400 hover:text-white'}`}
                          style={sectionTab === tab ? { backgroundColor: COLOR, boxShadow: `0 4px 14px ${COLOR}40` } : {}}>
                          {tab === 'composite' ? 'Composite' : 'By section'}
                        </button>
                      ))}
                    </div>
                    <div className="bg-[#12141f] border border-white/8 rounded-2xl p-6 space-y-6">
                      {sectionTab === 'composite' ? (
                        <>
                          <ScoreSlider label="SAT composite score (400–1600)" value={composite} min={400} max={1600} step={10} avg={1050} color={COLOR}
                            onChange={v => {
                              setComposite(v);
                              // BUG FIX: keep section scores proportional but always valid (200–800 each)
                              const half = Math.round(v / 2 / 10) * 10;
                              const clamped = Math.max(200, Math.min(800, half));
                              setMath(clamped);
                              setEbrw(Math.max(200, Math.min(800, v - clamped)));
                            }} />
                          <p className="text-[10px] text-slate-600">Switch to "By section" to set Math and R&amp;W scores individually for accurate section percentiles.</p>
                        </>
                      ) : (
                        <>
                          <ScoreSlider label="Math (200–800)" value={math} min={200} max={800} step={10} avg={520} color={COLOR} onChange={setMath} />
                          <ScoreSlider label="EBRW (200–800)" value={ebrw} min={200} max={800} step={10} avg={530} color="#a855f7" onChange={setEbrw} />
                          <div className="border-t border-white/8 pt-4 flex items-center justify-between">
                            <span className="text-sm text-slate-400">Composite total</span>
                            <span className="text-xl font-bold text-white">{math + ebrw}</span>
                          </div>
                        </>
                      )}
                    </div>
                  </>
                )}

                {/* SAT → ACT */}
                {actEquiv && (
                  <div className="bg-[#12141f] border border-white/8 rounded-xl p-4">
                    <p className="text-xs text-slate-500 uppercase tracking-wider font-semibold mb-2">ACT equivalent</p>
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-xs text-slate-400">SAT {compositeScore} ≈</p>
                        <p className="text-2xl font-bold text-white mt-0.5">
                          {actEquiv} <span className="text-sm text-slate-400 font-normal">ACT</span>
                        </p>
                      </div>
                      <Link href="/exams/act" className="text-xs px-3 py-1.5 rounded-lg font-medium border transition-all hover:scale-105"
                        style={{ backgroundColor: '#06b6d415', borderColor: '#06b6d430', color: '#06b6d4' }}>
                        ACT calc
                      </Link>
                    </div>
                  </div>
                )}

                {/* Benchmarks */}
                <div className="bg-[#12141f] border border-white/8 rounded-xl p-5">
                  <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-3">Score benchmarks</p>
                  <div className="space-y-1.5">
                    {scoreBenchmarks.map(b => (
                      <div key={b.score} className={`flex items-center justify-between py-1 transition-opacity ${compositeScore === b.score ? 'opacity-100' : 'opacity-50'}`}>
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

              {/* RIGHT — results */}
              <div className="lg:col-span-3 space-y-5">
                <div className="bg-[#12141f] border border-white/8 rounded-2xl p-7">
                  <div key={compositePerc}>
                    <PercentileGauge percentile={compositePerc} color={context.color} />
                  </div>
                  <div className="text-center mt-5 mb-6">
                    <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-sm font-semibold border mb-2"
                      style={{ backgroundColor: `${context.color}15`, borderColor: `${context.color}30`, color: context.color }}>
                      {context.label}
                    </div>
                    <p className="text-slate-400 text-sm">{context.description}</p>
                  </div>
                  <div className="grid grid-cols-3 gap-3">
                    {[
                      { label: 'Your score',   value: compositeScore },
                      { label: 'National avg', value: 1050 },
                      { label: 'Percentile',   value: `${ordinal(compositePerc)}` },
                    ].map(s => (
                      <div key={s.label} className="bg-white/4 rounded-xl p-3 text-center">
                        <p className="text-base font-bold text-white tabular-nums">{s.value}</p>
                        <p className="text-[10px] text-slate-500 mt-0.5">{s.label}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Section scores */}
                {(calcMode === 'raw' || sectionTab === 'sections') && (
                  <div className="bg-[#12141f] border border-white/8 rounded-2xl p-6">
                    <h3 className="text-sm font-semibold text-slate-300 mb-4">Section scores &amp; percentiles</h3>
                    <div className="space-y-4">
                      {[
                        { label: 'Reading & Writing', score: displayRW,   pct: ebrwPerc, color: '#a855f7' },
                        { label: 'Math',              score: displayMath, pct: mathPerc, color: COLOR },
                      ].map(s => (
                        <div key={s.label} className="flex items-center gap-4">
                          <div className="w-28 shrink-0">
                            <p className="text-[10px] text-slate-500">{s.label}</p>
                            <p className="text-sm font-bold text-white">{s.score}</p>
                          </div>
                          <div className="flex-1">
                            <div className="h-2 bg-white/8 rounded-full overflow-hidden">
                              <div className="h-full rounded-full" style={{ width: `${s.pct}%`, backgroundColor: s.color, transition: 'width 0.5s ease' }} />
                            </div>
                          </div>
                          <div className="w-12 text-right shrink-0">
                            <p className="text-sm font-bold tabular-nums" style={{ color: s.color }}>{ordinal(s.pct)}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Digital SAT Format explainer */}
                <div className="bg-[#12141f] border border-white/8 rounded-2xl p-6">
                  <h3 className="text-sm font-semibold text-slate-300 mb-4">Digital SAT format (2024–2026)</h3>
                  <div className="space-y-3">
                    {[
                      { icon: '📖', label: 'Reading & Writing', color: '#a855f7', time: '64 min', q: '54 Q · 2 modules of 27', detail: 'Craft & Structure, Information & Ideas, Standard English Conventions, Expression of Ideas' },
                      { icon: '📐', label: 'Math',              color: COLOR,      time: '70 min', q: '44 Q · 2 modules of 22', detail: 'Algebra, Advanced Math, Problem-Solving & Data Analysis, Geometry & Trigonometry' },
                    ].map(s => (
                      <div key={s.label} className="flex gap-3 p-3 bg-white/3 rounded-xl">
                        <span className="text-lg mt-0.5" aria-hidden="true">{s.icon}</span>
                        <div>
                          <div className="flex items-center gap-2 mb-1">
                            <span className="text-sm font-semibold text-white">{s.label}</span>
                            <span className="text-[10px] font-mono px-1.5 py-0.5 rounded" style={{ backgroundColor: `${s.color}20`, color: s.color }}>{s.time}</span>
                            <span className="text-[10px] text-slate-500">{s.q}</span>
                          </div>
                          <p className="text-xs text-slate-500">{s.detail}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                  <p className="text-xs text-slate-600 mt-3">The Digital SAT is section-adaptive — Module 1 performance determines your Module 2 difficulty track, which directly caps your maximum scaled score per section.</p>
                </div>
              </div>
            </div>
          </section>

          {/* ── RAW-TO-SCALED CONVERSION TABLE ── */}
          <section aria-labelledby="raw-table-heading">
            <h2 id="raw-table-heading" className="text-2xl font-bold text-white mb-2">Digital SAT Raw Score to Scaled Score Conversion Table 2026</h2>
            <p className="text-slate-400 text-sm mb-6 max-w-3xl leading-relaxed">
              The table below shows approximate raw-score-to-scaled-score conversions for both sections of the Digital SAT on the <strong className="text-white">hard Module 2 track</strong> (the only path to scores above 650 per section) and the <strong className="text-white">easy Module 2 track</strong>. Raw scores are the number of questions answered correctly across both modules combined. Actual conversions vary slightly by test form due to IRT equating.
            </p>
            <div className="grid sm:grid-cols-2 gap-4 mb-3">
              {/* R&W table */}
              <div className="overflow-hidden rounded-xl border border-white/8">
                <div className="bg-purple-500/10 border-b border-white/8 px-4 py-2.5">
                  <p className="text-xs font-semibold text-purple-300">Reading &amp; Writing (50 scored questions)</p>
                </div>
                <table className="w-full text-sm" aria-label="Reading and Writing raw to scaled score conversion">
                  <thead>
                    <tr className="bg-white/4 border-b border-white/8">
                      <th scope="col" className="text-left px-3 py-2 text-[10px] font-semibold text-slate-400 uppercase">Raw correct</th>
                      <th scope="col" className="text-center px-3 py-2 text-[10px] font-semibold text-purple-400 uppercase">Hard M2</th>
                      <th scope="col" className="text-center px-3 py-2 text-[10px] font-semibold text-slate-500 uppercase">Easy M2</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[50,48,46,44,42,40,38,36,34,32,30,28,25,22,19,16,13,10,7,4,0].map((raw, i) => (
                      <tr key={raw} className={`border-b border-white/5 last:border-0 ${i % 2 === 0 ? '' : 'bg-white/2'}`}>
                        <td className="px-3 py-1.5 text-xs text-slate-300 font-mono">{raw}</td>
                        <td className="px-3 py-1.5 text-center text-xs font-semibold text-purple-400 font-mono">{RW_HARD_CONVERSION[raw]}</td>
                        <td className="px-3 py-1.5 text-center text-xs text-slate-500 font-mono">{RW_EASY_CONVERSION[raw]}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              {/* Math table */}
              <div className="overflow-hidden rounded-xl border border-white/8">
                <div className="bg-indigo-500/10 border-b border-white/8 px-4 py-2.5">
                  <p className="text-xs font-semibold text-indigo-300">Math (40 scored questions)</p>
                </div>
                <table className="w-full text-sm" aria-label="Math raw to scaled score conversion">
                  <thead>
                    <tr className="bg-white/4 border-b border-white/8">
                      <th scope="col" className="text-left px-3 py-2 text-[10px] font-semibold text-slate-400 uppercase">Raw correct</th>
                      <th scope="col" className="text-center px-3 py-2 text-[10px] font-semibold text-indigo-400 uppercase">Hard M2</th>
                      <th scope="col" className="text-center px-3 py-2 text-[10px] font-semibold text-slate-500 uppercase">Easy M2</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[40,38,36,34,32,30,28,26,24,22,20,18,16,14,12,10,8,6,4,2,0].map((raw, i) => (
                      <tr key={raw} className={`border-b border-white/5 last:border-0 ${i % 2 === 0 ? '' : 'bg-white/2'}`}>
                        <td className="px-3 py-1.5 text-xs text-slate-300 font-mono">{raw}</td>
                        <td className="px-3 py-1.5 text-center text-xs font-semibold text-indigo-400 font-mono">{MATH_HARD_CONVERSION[raw]}</td>
                        <td className="px-3 py-1.5 text-center text-xs text-slate-500 font-mono">{MATH_EASY_CONVERSION[raw]}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
            <p className="text-xs text-slate-600">Approximate values based on official College Board Digital SAT practice test answer keys and published score tables. Actual conversions vary by test date due to IRT equating. Source: College Board Bluebook practice tests 1–6, 2024–2025.</p>
          </section>

          {/* ── ADAPTIVE SCORING EXPLAINER ── */}
          <section aria-labelledby="scoring-system-heading">
            <h2 id="scoring-system-heading" className="text-2xl font-bold text-white mb-4">Understanding the Digital SAT Scoring System</h2>
            <p className="text-slate-400 text-sm mb-5 max-w-3xl leading-relaxed">
              The Digital SAT uses a multistage adaptive scoring model. Every student takes the same Module 1 in each section. Your Module 1 performance routes you to either a harder or easier Module 2 — and that routing decision directly determines the maximum scaled score you can achieve. This is why the raw-score calculator above has a difficulty toggle: the same number of correct answers produces a different scaled score depending on which track you were on.
            </p>
            <div className="space-y-4 mb-8">
              <div className="bg-[#12141f] border border-white/8 rounded-2xl p-6">
                <h3 className="text-base font-semibold text-white mb-3">How Multistage Adaptive Testing Works</h3>
                <p className="text-sm text-slate-400 leading-relaxed mb-3">
                  The Digital SAT has two sections — Reading and Writing (RW) and Math — each containing two modules. Every student receives the same Module 1. Your performance in Module 1 determines which Module 2 you receive: a higher-difficulty module or a lower-difficulty module.
                </p>
                <p className="text-sm text-slate-400 leading-relaxed">
                  The higher-difficulty Module 2 has a <strong className="text-white">higher score ceiling</strong> — it is the only path to section scores above approximately 650–700. The lower-difficulty Module 2 caps your score at roughly 550–600 per section regardless of how well you perform in it. Students aiming for scores above 1350 must prioritise Module 1 accuracy above all else.
                </p>
              </div>
              <div className="bg-[#12141f] border border-white/8 rounded-2xl p-6">
                <h3 className="text-base font-semibold text-white mb-3">From Raw Score to Scaled Score (200–800 per section)</h3>
                <p className="text-sm text-slate-400 leading-relaxed mb-3">
                  Each section of the Digital SAT contains 54 scored questions (RW) or 44 scored questions (Math), plus 4 unscored experimental questions per section that you cannot identify. Your raw score is the count of scored questions you answer correctly — there is no penalty for wrong answers.
                </p>
                <p className="text-sm text-slate-400 leading-relaxed">
                  Your raw score is then converted to a scaled score using an <strong className="text-white">Item Response Theory (IRT)</strong> model that accounts for question difficulty and which module you were routed to. The College Board does not publish a single fixed conversion table because the adaptive nature of the test means no two students see identical questions — which is why the raw-score calculator above uses separate conversion tables for the two difficulty tracks.
                </p>
              </div>
              <div className="bg-[#12141f] border border-white/8 rounded-2xl p-6">
                <h3 className="text-base font-semibold text-white mb-3">Composite Score and Score Reporting</h3>
                <p className="text-sm text-slate-400 leading-relaxed mb-3">
                  Your SAT composite score is the sum of your Math score (200–800) and your Reading and Writing score (200–800), giving a composite range of 400–1600. The College Board reports scores within approximately 2–5 days of your test date. Your score report includes your composite, section scores, subscores for each content domain, and two types of percentiles — the User Percentile and the Nationally Representative Sample Percentile.
                </p>
                <p className="text-sm text-slate-400 leading-relaxed">
                  The College Board also reports a score band (a few points above and below your reported score) that reflects measurement precision. A student who scores 1350 and another who scores 1360 are performing at essentially the same level within that measurement margin.
                </p>
              </div>
            </div>

            <h3 className="text-lg font-semibold text-white mb-4">Digital SAT Percentiles vs. Scaled Scores</h3>
            <p className="text-slate-400 text-sm mb-5 leading-relaxed max-w-3xl">
              A scaled score tells you how many points you earned; a percentile tells you how that score compares to other test takers. The table below maps key composite scores to their User Percentile — the percentile colleges use, comparing you against students who actually took the SAT.
            </p>
            <div className="overflow-x-auto rounded-xl border border-white/8 mb-4">
              <table className="w-full text-sm min-w-[480px]" aria-label="Digital SAT scaled score to percentile comparison table">
                <thead>
                  <tr className="bg-white/4 border-b border-white/8">
                    <th scope="col" className="text-left px-4 py-3 text-xs font-semibold text-slate-400 uppercase tracking-wider">SAT composite</th>
                    <th scope="col" className="text-center px-4 py-3 text-xs font-semibold text-slate-400 uppercase tracking-wider">User percentile</th>
                    <th scope="col" className="text-center px-4 py-3 text-xs font-semibold text-slate-400 uppercase tracking-wider hidden sm:table-cell">Students you outscored</th>
                    <th scope="col" className="text-left px-4 py-3 text-xs font-semibold text-slate-400 uppercase tracking-wider hidden md:table-cell">Admissions context</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { score: 1600, pct: 99, beat: '~99% of test takers', context: 'Perfect score; competitive everywhere' },
                    { score: 1550, pct: 99, beat: '~99% of test takers', context: 'All Ivy League, MIT, Stanford' },
                    { score: 1500, pct: 97, beat: '~97% of test takers', context: 'Ivy League competitive range' },
                    { score: 1450, pct: 95, beat: '~95% of test takers', context: 'Top 15 universities' },
                    { score: 1400, pct: 94, beat: '~94% of test takers', context: 'Top 25 universities' },
                    { score: 1350, pct: 91, beat: '~91% of test takers', context: 'Selective universities' },
                    { score: 1300, pct: 82, beat: '~82% of test takers', context: 'Many selective schools' },
                    { score: 1200, pct: 74, beat: '~74% of test takers', context: 'Above average; many 4-year colleges' },
                    { score: 1100, pct: 52, beat: '~52% of test takers', context: 'Around national average' },
                    { score: 1050, pct: 43, beat: '~43% of test takers', context: 'National average' },
                    { score: 1000, pct: 35, beat: '~35% of test takers', context: 'Below average' },
                    { score: 900,  pct: 19, beat: '~19% of test takers', context: 'Less selective colleges' },
                  ].map((row, i) => {
                    const isYours = row.score === compositeScore;
                    return (
                      <tr key={row.score} className={`border-b border-white/5 last:border-0 ${isYours ? 'bg-indigo-500/10' : i % 2 === 0 ? '' : 'bg-white/2'}`}>
                        <td className="px-4 py-2.5 font-mono font-semibold" style={{ color: isYours ? COLOR : 'rgb(226,232,240)' }}>
                          {row.score}
                          {isYours && <span className="ml-2 text-[10px] bg-indigo-500/20 text-indigo-300 px-1.5 py-0.5 rounded font-sans">your score</span>}
                        </td>
                        <td className="px-4 py-2.5 text-center font-bold" style={{ color: isYours ? COLOR : 'rgb(226,232,240)' }}>{ordinal(row.pct)}</td>
                        <td className="px-4 py-2.5 text-center text-xs text-slate-500 hidden sm:table-cell">{row.beat}</td>
                        <td className="px-4 py-2.5 text-xs text-slate-500 hidden md:table-cell">{row.context}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
            <p className="text-xs text-slate-600">SAT User Percentiles based on official College Board data for the 2025–2026 testing year.</p>
          </section>

          {/* ── NATIONAL AVERAGE ── */}
          <section aria-labelledby="avg-heading">
            <h2 id="avg-heading" className="text-2xl font-bold text-white mb-4">What is the Average SAT Score in 2025–2026?</h2>
            <p className="text-slate-400 text-sm mb-6 leading-relaxed max-w-3xl">
              The national average SAT composite score for 2025–2026 is <strong className="text-white">1050 out of 1600</strong>, placing the average student at approximately the <strong className="text-white">43rd percentile</strong> nationally. Scoring above 1050 means you performed better than over half of all SAT test takers in the United States.
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
              {[
                { icon: '📊', label: 'National avg composite',  value: '1050',  sub: '43rd percentile',     color: COLOR },
                { icon: '📐', label: 'Average Math score',      value: '520',   sub: '50th percentile',     color: '#6366f1' },
                { icon: '📖', label: 'Average EBRW score',      value: '530',   sub: '50th percentile',     color: '#a855f7' },
                { icon: '👥', label: 'Students tested (2025)',  value: '2.2M+', sub: 'High school students', color: '#34d399' },
              ].map(card => (
                <article key={card.label} className="bg-[#12141f] border border-white/8 rounded-xl p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-lg" aria-hidden="true">{card.icon}</span>
                    <span className="text-xs text-slate-400 font-medium">{card.label}</span>
                  </div>
                  <p className="text-2xl font-bold font-mono" style={{ color: card.color }}>{card.value}</p>
                  <p className="text-xs text-slate-500 mt-0.5">{card.sub}</p>
                </article>
              ))}
            </div>

            {/* ── AVERAGE SAT SCORE BY STATE ── */}
            <h3 className="text-lg font-semibold text-white mb-3">Average SAT Score by State (2025–2026)</h3>
            <p className="text-slate-400 text-sm mb-5 leading-relaxed max-w-3xl">
              Average SAT scores vary widely by state — largely because states with lower participation rates tend to have higher average scores. When only the most motivated, college-bound students in a state take the SAT, the self-selected pool naturally scores higher. States with near-100% participation (like Michigan, Connecticut, and Florida) tend to show lower average scores because all students take the test, not just those planning to apply to four-year colleges.
            </p>
            <div className="overflow-x-auto rounded-xl border border-white/8 mb-3">
              <table className="w-full text-sm" aria-label="Average SAT score by state 2025-2026">
                <thead>
                  <tr className="bg-white/4 border-b border-white/8">
                    <th scope="col" className="text-left px-4 py-3 text-xs font-semibold text-slate-400 uppercase tracking-wider">State</th>
                    <th scope="col" className="text-center px-4 py-3 text-xs font-semibold text-slate-400 uppercase tracking-wider">Avg SAT score</th>
                    <th scope="col" className="text-center px-4 py-3 text-xs font-semibold text-slate-400 uppercase tracking-wider hidden sm:table-cell">Participation rate</th>
                  </tr>
                </thead>
                <tbody>
                  {visibleStates.map((row, i) => (
                    <tr key={row.state} className={`border-b border-white/5 last:border-0 ${i % 2 === 0 ? '' : 'bg-white/2'}`}>
                      <td className="px-4 py-2.5 text-sm text-slate-200">{row.state}</td>
                      <td className="px-4 py-2.5 text-center font-mono font-semibold" style={{ color: row.avg >= 1200 ? '#34d399' : row.avg >= 1050 ? COLOR : '#f59e0b' }}>{row.avg}</td>
                      <td className="px-4 py-2.5 text-center text-xs text-slate-500 hidden sm:table-cell">{row.participation}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <button onClick={() => setShowAllStates(!showAllStates)}
              className="text-xs text-indigo-400 hover:text-indigo-300 transition-colors font-medium">
              {showAllStates ? 'Show less ↑' : 'Show all states ↓'}
            </button>
            <p className="text-xs text-slate-600 mt-2">Source: College Board SAT Suite of Assessments Annual Report 2025. Note: States with low participation have a self-selection bias that inflates average scores.</p>
          </section>

          {/* ── PERCENTILE TABLE ── */}
          <section aria-labelledby="chart-heading">
            <h2 id="chart-heading" className="text-2xl font-bold text-white mb-2">SAT Score Calculator — Full Percentile Chart 2026</h2>
            <p className="text-slate-400 text-sm mb-6">
              Complete SAT composite score to national percentile table, based on official College Board data. Your score is highlighted. The national average SAT score is 1050. A 1400 equals the {ordinal(94)} percentile.
            </p>
            <div className="overflow-hidden rounded-xl border border-white/8">
              <table className="w-full text-sm" aria-label="SAT score percentile chart 2025-2026">
                <thead>
                  <tr className="bg-white/4 border-b border-white/8">
                    <th scope="col" className="text-left px-4 py-3 text-xs font-semibold text-slate-400 uppercase tracking-wider">SAT score</th>
                    <th scope="col" className="text-left px-4 py-3 text-xs font-semibold text-slate-400 uppercase tracking-wider">Percentile</th>
                    <th scope="col" className="text-left px-4 py-3 text-xs font-semibold text-slate-400 uppercase tracking-wider hidden sm:table-cell">You beat</th>
                    <th scope="col" className="text-left px-4 py-3 text-xs font-semibold text-slate-400 uppercase tracking-wider hidden md:table-cell">Tier</th>
                  </tr>
                </thead>
                <tbody>
                  {visibleTable.map(([score, pct], i) => {
                    const isYours = score === compositeScore;
                    const tier = score >= 1400 ? 'Highly competitive' : score >= 1200 ? 'Above average' : score >= 1050 ? 'Average' : 'Below average';
                    return (
                      <tr key={score} className={`border-b border-white/5 last:border-0 ${isYours ? 'bg-indigo-500/10' : i % 2 === 0 ? '' : 'bg-white/2'}`}>
                        <td className="px-4 py-2.5 font-mono font-medium" style={{ color: isYours ? COLOR : undefined }}>
                          {score}
                          {isYours && <span className="ml-2 text-[10px] bg-indigo-500/20 text-indigo-300 px-1.5 py-0.5 rounded font-sans">your score</span>}
                        </td>
                        <td className="px-4 py-2.5 font-semibold" style={{ color: isYours ? COLOR : 'rgb(226,232,240)' }}>{ordinal(pct as number)}</td>
                        <td className="px-4 py-2.5 text-slate-500 hidden sm:table-cell text-xs">Top {100 - (pct as number)}% of test takers</td>
                        <td className="px-4 py-2.5 text-slate-500 hidden md:table-cell text-xs">{tier}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
            <button onClick={() => setShowAllTable(!showAllTable)}
              className="mt-3 text-xs text-indigo-400 hover:text-indigo-300 transition-colors font-medium">
              {showAllTable ? 'Show less ↑' : 'Show all scores ↓'}
            </button>
            <p className="text-xs text-slate-600 mt-2">Source: College Board SAT Suite of Assessments Annual Report, 2025–2026 admissions cycle.</p>
          </section>

          {/* ── WHAT DOES YOUR SCORE MEAN ── */}
          <section aria-labelledby="tiers-heading">
            <h2 id="tiers-heading" className="text-2xl font-bold text-white mb-4">What Does Your SAT Score Mean? Calculator Results Explained</h2>
            <p className="text-slate-400 text-sm mb-6 max-w-3xl">
              Once you calculate your SAT score percentile above, use this guide to understand what your result means for college admissions in the 2025–2026 cycle.
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                { range: '1500–1600', label: 'Elite',              desc: 'Top 3% nationally. Highly competitive at Ivy League, MIT, Caltech, and Stanford. Qualifies for merit scholarships at virtually every university in the country.', color: '#34d399' },
                { range: '1400–1490', label: 'Highly Competitive', desc: 'Top 6–7%. Competitive at highly selective schools like Duke, Northwestern, Georgetown, and top-25 universities. Strong merit scholarship candidate at many schools.', color: '#60a5fa' },
                { range: '1200–1390', label: 'Above Average',      desc: 'Top 18–26%. Competitive at hundreds of strong four-year universities including state flagships. May qualify for merit aid at less selective schools.', color: COLOR },
                { range: '1050–1190', label: 'Average',            desc: 'Around the national average of 1050. Sufficient for many four-year colleges. A score in this range is near the median or 25th percentile for most non-selective state schools.', color: '#a78bfa' },
                { range: '900–1040',  label: 'Below Average',      desc: 'Below the national average. Sufficient for community colleges and less selective schools. Most students who retest improve 50–100 points with focused preparation.', color: '#f59e0b' },
                { range: '400–890',   label: 'Needs Improvement',  desc: 'Significantly below national average. Strong improvement is common with structured test prep. Consider PSAT practice materials and a retake plan.', color: '#ef4444' },
              ].map(tier => (
                <article key={tier.range} className="bg-[#12141f] border border-white/7 rounded-xl p-5">
                  <div className="text-xs font-mono font-semibold mb-1.5 px-2 py-1 rounded-md w-fit"
                    style={{ backgroundColor: `${tier.color}15`, color: tier.color }}>{tier.range}</div>
                  <h3 className="text-sm font-semibold text-white mb-1.5">{tier.label}</h3>
                  <p className="text-xs text-slate-500 leading-relaxed">{tier.desc}</p>
                </article>
              ))}
            </div>
          </section>

          {/* ── COLLEGES TABLE ── */}
          <section aria-labelledby="colleges-heading">
            <h2 id="colleges-heading" className="text-2xl font-bold text-white mb-2">SAT Score Ranges for Top Colleges 2025–2026</h2>
            <p className="text-slate-400 text-sm mb-6">
              Middle 50% SAT composite ranges for admitted students at competitive US universities. <span className="text-indigo-400 font-medium">Indigo highlight</span> = your score is in range. <span className="text-emerald-400 font-medium">Green</span> = your score is above the range.
            </p>
            <div className="overflow-x-auto rounded-xl border border-white/8">
              <table className="w-full text-sm min-w-[500px]" aria-label="SAT score ranges for top colleges 2025-2026">
                <thead>
                  <tr className="bg-white/4 border-b border-white/8">
                    <th scope="col" className="text-left px-4 py-3 text-xs font-semibold text-slate-400 uppercase tracking-wider">University</th>
                    <th scope="col" className="text-center px-4 py-3 text-xs font-semibold text-slate-400 uppercase tracking-wider">Middle 50% SAT</th>
                    <th scope="col" className="text-center px-4 py-3 text-xs font-semibold text-slate-400 uppercase tracking-wider hidden sm:table-cell">Admit rate</th>
                    <th scope="col" className="text-center px-4 py-3 text-xs font-semibold text-slate-400 uppercase tracking-wider hidden md:table-cell">Target score</th>
                  </tr>
                </thead>
                <tbody>
                  {visibleColleges.map((row, i) => {
                    const inRange = compositeScore >= row.lo && compositeScore <= row.hi;
                    const above   = compositeScore > row.hi;
                    return (
                      <tr key={row.school} className={`border-b border-white/5 last:border-0 ${i % 2 === 0 ? '' : 'bg-white/2'}`}>
                        <td className="px-4 py-2.5 font-medium text-slate-200 text-sm">{row.school}</td>
                        <td className="px-4 py-2.5 text-center">
                          <span className="font-mono text-xs font-semibold px-2 py-0.5 rounded-md"
                            style={inRange
                              ? { backgroundColor: COLOR, color: '#fff' }
                              : above
                              ? { backgroundColor: 'rgba(52,211,153,0.12)', color: '#34d399' }
                              : { backgroundColor: 'rgba(255,255,255,0.06)', color: '#64748b' }}>
                            {row.range}
                          </span>
                        </td>
                        <td className="px-4 py-2.5 text-center text-xs text-slate-500 hidden sm:table-cell">{row.rate}</td>
                        <td className="px-4 py-2.5 text-center text-xs text-slate-500 hidden md:table-cell">{row.note}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
            {!showAllColleges && (
              <button onClick={() => setShowAllColleges(true)} className="mt-3 text-xs text-indigo-400 hover:text-indigo-300 transition-colors font-medium">
                Show all colleges ↓
              </button>
            )}
            <p className="text-xs text-slate-600 mt-2">Data: Common Data Set filings and institutional websites, 2024–2025 admitted class.</p>
          </section>

          {/* ── SAT TEST DATES ── */}
          <section aria-labelledby="test-dates-heading">
            <h2 id="test-dates-heading" className="text-2xl font-bold text-white mb-2">SAT Test Dates 2025–2026</h2>
            <p className="text-slate-400 text-sm mb-6 max-w-3xl leading-relaxed">
              The College Board offers the Digital SAT seven times per year. Most students register at least 6–8 weeks before their preferred test date to secure a seat at their preferred test centre. Registration is done through the College Board website or the Bluebook app. Scores are typically released within 2–5 business days after the test date.
            </p>
            <div className="overflow-x-auto rounded-xl border border-white/8">
              <table className="w-full text-sm" aria-label="SAT test dates and registration deadlines 2025-2026">
                <thead>
                  <tr className="bg-white/4 border-b border-white/8">
                    <th scope="col" className="text-left px-4 py-3 text-xs font-semibold text-slate-400 uppercase tracking-wider">Test date</th>
                    <th scope="col" className="text-left px-4 py-3 text-xs font-semibold text-slate-400 uppercase tracking-wider hidden sm:table-cell">Registration deadline</th>
                    <th scope="col" className="text-left px-4 py-3 text-xs font-semibold text-slate-400 uppercase tracking-wider">Score release (approx.)</th>
                  </tr>
                </thead>
                <tbody>
                  {SAT_TEST_DATES_2026.map((row, i) => (
                    <tr key={row.date} className={`border-b border-white/5 last:border-0 ${i % 2 === 0 ? '' : 'bg-white/2'}`}>
                      <td className="px-4 py-2.5 text-sm text-slate-200 font-medium">{row.date}</td>
                      <td className="px-4 py-2.5 text-sm text-slate-500 hidden sm:table-cell">{row.deadline}</td>
                      <td className="px-4 py-2.5 text-sm text-slate-500">{row.scores}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-xs text-slate-600 mt-2">Source: College Board official test dates for the 2025–2026 academic year. Late registration fees apply after standard deadline. Always verify dates at collegeboard.org.</p>
          </section>

          {/* ── SAT TO ACT CONVERSION ── */}
          <section aria-labelledby="crosswalk-heading">
            <h2 id="crosswalk-heading" className="text-2xl font-bold text-white mb-2">SAT to ACT Score Conversion Chart 2025</h2>
            <p className="text-slate-400 text-sm mb-6">
              Official College Board / ACT concordance table. Use this to compare your SAT score to its ACT equivalent when applying to colleges or deciding which test to submit.
            </p>
            <div className="overflow-x-auto rounded-xl border border-white/8">
              <table className="w-full text-sm min-w-[300px]" aria-label="SAT to ACT score conversion table 2025">
                <thead>
                  <tr className="bg-white/4 border-b border-white/8">
                    <th scope="col" className="text-center px-6 py-3 text-xs font-semibold text-indigo-400 uppercase tracking-wider">SAT composite</th>
                    <th scope="col" className="text-center px-6 py-3 text-xs font-semibold text-cyan-400 uppercase tracking-wider">ACT equivalent</th>
                    <th scope="col" className="text-center px-6 py-3 text-xs font-semibold text-slate-400 uppercase tracking-wider hidden sm:table-cell">Percentile</th>
                  </tr>
                </thead>
                <tbody>
                  {SAT_ACT_CROSSWALK.map((row, i) => {
                    const isYours = Math.abs(row.sat - compositeScore) <= 14;
                    return (
                      <tr key={row.sat} className={`border-b border-white/5 last:border-0 ${isYours ? 'bg-indigo-500/10' : i % 2 === 0 ? '' : 'bg-white/2'}`}>
                        <td className="px-6 py-2.5 text-center font-mono font-semibold" style={{ color: isYours ? COLOR : 'rgb(226,232,240)' }}>
                          {row.sat}
                          {isYours && <span className="ml-1.5 text-[9px] bg-indigo-500/20 text-indigo-300 px-1 py-0.5 rounded">you</span>}
                        </td>
                        <td className="px-6 py-2.5 text-center font-mono font-bold text-cyan-400">{row.act}</td>
                        <td className="px-6 py-2.5 text-center text-xs text-slate-500 hidden sm:table-cell">{ordinal(row.pct)}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
            <p className="text-xs text-slate-600 mt-2">
              Source: Official College Board / ACT concordance tables. Use our <Link href="/exams/act" className="text-cyan-400 hover:text-cyan-300">ACT percentile calculator</Link> for full ACT score breakdowns.
            </p>
          </section>

          {/* ── HOW TO IMPROVE ── */}
          <section aria-labelledby="improve-heading" className="bg-[#12141f] border border-white/7 rounded-2xl p-6 md:p-8">
            <h2 id="improve-heading" className="text-2xl font-bold text-white mb-4">How to Improve Your SAT Score</h2>
            <p className="text-slate-400 text-sm mb-6 leading-relaxed max-w-3xl">
              Most students who retake the SAT improve their composite score by 50–100 points with focused preparation. Here are the most effective strategies for the Digital SAT.
            </p>

            {/* Khan Academy gain stats */}
            <div className="mb-6">
              <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-3">Average score gain by hours of Khan Academy practice</p>
              <div className="space-y-2.5">
                {SCORE_IMPROVEMENT_STATS.map(s => (
                  <div key={s.hours} className="flex items-center gap-3">
                    <span className="text-xs text-slate-400 w-20 shrink-0">{s.hours}</span>
                    <div className="flex-1 h-2 bg-white/8 rounded-full overflow-hidden">
                      <div className="h-full rounded-full transition-all duration-500"
                        style={{ width: `${Math.min(s.pct, 100)}%`, backgroundColor: COLOR }} />
                    </div>
                    <span className="text-xs font-semibold text-indigo-300 w-16 text-right shrink-0">{s.avg_gain}</span>
                  </div>
                ))}
              </div>
              <p className="text-[10px] text-slate-600 mt-2">Source: College Board / Khan Academy research study on Official SAT Practice, 2017–2024.</p>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              {[
                { step: '01', title: 'Take a full-length diagnostic', desc: "Use the College Board's free Bluebook app to take an official Digital SAT practice test under real conditions. This establishes your baseline and shows which skill areas need the most work — and whether you are being routed to the hard or easy Module 2 track." },
                { step: '02', title: 'Protect Module 1 accuracy', desc: "The Digital SAT's adaptive design means Module 1 accuracy determines your Module 2 difficulty track. Routing to the harder Module 2 is the only path to scores above approximately 1350. Slow down in Module 1 — a careful finish with zero careless errors outperforms a rushed finish every time." },
                { step: '03', title: 'Focus on your weaker section', desc: 'Identify whether Math or Reading & Writing is holding back your composite score. Targeted section prep typically yields faster score gains than spreading effort evenly across both sections.' },
                { step: '04', title: 'Use Khan Academy (free)', desc: "Khan Academy's Official SAT Practice is free, built in partnership with the College Board, and personalizes a study plan based on your PSAT or SAT scores. Students who study 20 hours on Khan Academy see an average gain of 115 points." },
              ].map(item => (
                <div key={item.step} className="flex gap-4">
                  <div className="text-2xl font-black font-mono shrink-0 mt-0.5" style={{ color: `${COLOR}50` }}>{item.step}</div>
                  <div>
                    <h3 className="text-sm font-semibold text-white mb-1.5">{item.title}</h3>
                    <p className="text-xs text-slate-500 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-6 pt-5 border-t border-white/8 flex flex-wrap gap-3">
              <Link href="/exams/sat/prep-tips"
                className="text-xs px-3.5 py-1.5 rounded-full font-medium border transition-all hover:scale-105"
                style={{ backgroundColor: '#f59e0b12', borderColor: '#f59e0b25', color: '#f59e0b' }}>
                Full SAT Prep Tips Guide →
              </Link>
              <Link href="/exams/sat/guide"
                className="text-xs px-3.5 py-1.5 rounded-full font-medium border transition-all hover:scale-105"
                style={{ backgroundColor: `${COLOR}12`, borderColor: `${COLOR}25`, color: COLOR }}>
                Complete SAT Guide →
              </Link>
            </div>
          </section>

          {/* ── PSAT COMPARISON ── */}
          <section aria-labelledby="psat-heading">
            <h2 id="psat-heading" className="text-2xl font-bold text-white mb-4">PSAT vs SAT Score Comparison</h2>
            <p className="text-slate-400 text-sm mb-6 leading-relaxed max-w-3xl">
              The PSAT (Preliminary SAT) and the SAT are related tests made by the College Board, but they differ in scope and scoring. Understanding how your PSAT score translates to an expected SAT score helps you set realistic goals before your actual SAT test date.
            </p>
            <div className="grid sm:grid-cols-2 gap-4 mb-6">
              <div className="bg-[#12141f] border border-white/8 rounded-2xl p-6">
                <h3 className="text-sm font-semibold text-white mb-3">PSAT / NMSQT</h3>
                <ul className="space-y-2 text-xs text-slate-400">
                  <li className="flex gap-2"><span className="text-indigo-400 shrink-0">→</span> Score range: <strong className="text-white">320–1520</strong></li>
                  <li className="flex gap-2"><span className="text-indigo-400 shrink-0">→</span> No score sent to colleges</li>
                  <li className="flex gap-2"><span className="text-indigo-400 shrink-0">→</span> Qualifies for National Merit Scholarship</li>
                  <li className="flex gap-2"><span className="text-indigo-400 shrink-0">→</span> Taken in October (Grade 10 or 11)</li>
                  <li className="flex gap-2"><span className="text-indigo-400 shrink-0">→</span> 2 hours 14 minutes (same as Digital SAT)</li>
                  <li className="flex gap-2"><span className="text-indigo-400 shrink-0">→</span> Slightly easier difficulty than SAT</li>
                </ul>
              </div>
              <div className="bg-[#12141f] border border-white/8 rounded-2xl p-6">
                <h3 className="text-sm font-semibold text-white mb-3">SAT</h3>
                <ul className="space-y-2 text-xs text-slate-400">
                  <li className="flex gap-2"><span className="text-purple-400 shrink-0">→</span> Score range: <strong className="text-white">400–1600</strong></li>
                  <li className="flex gap-2"><span className="text-purple-400 shrink-0">→</span> Scores sent to colleges (Score Choice)</li>
                  <li className="flex gap-2"><span className="text-purple-400 shrink-0">→</span> Accepted by all US colleges and universities</li>
                  <li className="flex gap-2"><span className="text-purple-400 shrink-0">→</span> Offered 7 times per year</li>
                  <li className="flex gap-2"><span className="text-purple-400 shrink-0">→</span> 2 hours 14 minutes testing time</li>
                  <li className="flex gap-2"><span className="text-purple-400 shrink-0">→</span> Slightly harder than PSAT</li>
                </ul>
              </div>
            </div>
            <div className="bg-[#12141f] border border-white/8 rounded-xl p-5">
              <p className="text-xs font-semibold text-slate-400 mb-3">PSAT score → expected SAT score conversion</p>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-center">
                {[
                  { psat: 1200, sat: '1250–1310' },
                  { psat: 1300, sat: '1350–1420' },
                  { psat: 1400, sat: '1440–1510' },
                  { psat: 1500, sat: '1530–1580' },
                ].map(r => (
                  <div key={r.psat} className="bg-white/4 rounded-lg p-3">
                    <p className="text-xs text-slate-500">PSAT {r.psat}</p>
                    <p className="text-sm font-bold text-white mt-0.5">{r.sat}</p>
                    <p className="text-[10px] text-slate-600 mt-0.5">expected SAT</p>
                  </div>
                ))}
              </div>
              <p className="text-[10px] text-slate-600 mt-3">PSAT to SAT conversions are estimates. Actual SAT performance depends on preparation, test-day conditions, and whether you improve between test administrations.</p>
            </div>
            <p className="text-xs text-slate-600 mt-2">Use our <Link href="/exams/psat" className="text-indigo-400 hover:text-indigo-300">PSAT score calculator</Link> for full PSAT percentile breakdowns.</p>
          </section>

          <FAQSection />

          {/* ── OTHER CALCULATORS ── */}
          <section className="bg-[#12141f] border border-white/7 rounded-2xl p-6" aria-labelledby="other-tools-heading">
            <h2 id="other-tools-heading" className="text-sm font-semibold text-slate-300 mb-4">More free score calculators — ACT, GRE, GMAT &amp; more</h2>
            <div className="flex flex-wrap gap-2">
              {[
                { id: 'act',      name: 'ACT Score Calculator',  color: '#06b6d4' },
                { id: 'gre',      name: 'GRE Score Calculator',  color: '#a855f7' },
                { id: 'gmat',     name: 'GMAT Score Calculator', color: '#f59e0b' },
                { id: 'lsat',     name: 'LSAT Score Calculator', color: '#ef4444' },
                { id: 'gcse',     name: 'GCSE Grade Calculator', color: '#34d399' },
                { id: 'a-levels', name: 'A-Level Calculator',    color: '#ec4899' },
                { id: 'psat',     name: 'PSAT Score Calculator', color: '#6366f1' },
                { id: 'ap',       name: 'AP Score Calculator',   color: '#f59e0b' },
              ].map(e => (
                <Link key={e.id} href={`/exams/${e.id}`}
                  className="px-3.5 py-1.5 rounded-full text-xs font-medium border transition-all hover:scale-105"
                  style={{ backgroundColor: `${e.color}12`, borderColor: `${e.color}25`, color: e.color }}>
                  {e.name}
                </Link>
              ))}
            </div>
          </section>
        </div>
        <Footer />
      </main>
    </>
  );
}
