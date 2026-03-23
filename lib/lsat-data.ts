// LSAT Percentile Data — LSAC 2022-2023 Percentile Ranks
// Source: https://www.lsac.org/lsat/lsat-score-percentile-ranks
// Score range: 120–180

import type { PercentileEntry } from './sat-data';
export type { PercentileEntry };
export { getPercentile } from './sat-data';

export const LSAT_PERCENTILES: PercentileEntry[] = [
  { score: 180, percentile: 99 },
  { score: 179, percentile: 99 },
  { score: 178, percentile: 99 },
  { score: 177, percentile: 99 },
  { score: 176, percentile: 99 },
  { score: 175, percentile: 99 },
  { score: 174, percentile: 99 },
  { score: 173, percentile: 99 },
  { score: 172, percentile: 99 },
  { score: 171, percentile: 98 },
  { score: 170, percentile: 97 },
  { score: 169, percentile: 97 },
  { score: 168, percentile: 96 },
  { score: 167, percentile: 95 },
  { score: 166, percentile: 94 },
  { score: 165, percentile: 93 },
  { score: 164, percentile: 92 },
  { score: 163, percentile: 90 },
  { score: 162, percentile: 89 },
  { score: 161, percentile: 87 },
  { score: 160, percentile: 85 },
  { score: 159, percentile: 83 },
  { score: 158, percentile: 81 },
  { score: 157, percentile: 78 },
  { score: 156, percentile: 76 },
  { score: 155, percentile: 73 },
  { score: 154, percentile: 70 },
  { score: 153, percentile: 67 },
  { score: 152, percentile: 64 },
  { score: 151, percentile: 61 },
  { score: 150, percentile: 57 },
  { score: 149, percentile: 54 },
  { score: 148, percentile: 50 },
  { score: 147, percentile: 46 },
  { score: 146, percentile: 43 },
  { score: 145, percentile: 39 },
  { score: 144, percentile: 36 },
  { score: 143, percentile: 32 },
  { score: 142, percentile: 29 },
  { score: 141, percentile: 26 },
  { score: 140, percentile: 23 },
  { score: 139, percentile: 20 },
  { score: 138, percentile: 17 },
  { score: 137, percentile: 15 },
  { score: 136, percentile: 12 },
  { score: 135, percentile: 10 },
  { score: 134, percentile: 8  },
  { score: 133, percentile: 6  },
  { score: 132, percentile: 5  },
  { score: 131, percentile: 4  },
  { score: 130, percentile: 3  },
  { score: 129, percentile: 2  },
  { score: 128, percentile: 1  },
  { score: 120, percentile: 1  },
];

export const LSAT_SCORE_RANGES = {
  min: 120, max: 180, step: 1, avg: 152,
};

// T14 law school median LSAT scores (for context section)
export const LSAT_SCHOOL_MEDIANS = [
  { school: 'Yale Law',          median: 175 },
  { school: 'Harvard Law',       median: 174 },
  { school: 'Columbia Law',      median: 174 },
  { school: 'Stanford Law',      median: 173 },
  { school: 'Chicago Law',       median: 173 },
  { school: 'NYU Law',           median: 172 },
  { school: 'Penn Law',          median: 171 },
  { school: 'Michigan Law',      median: 171 },
  { school: 'Virginia Law',      median: 170 },
  { school: 'Duke Law',          median: 170 },
  { school: 'Northwestern Law',  median: 170 },
  { school: 'Cornell Law',       median: 169 },
  { school: 'Georgetown Law',    median: 168 },
  { school: 'UCLA Law',          median: 168 },
  { school: 'Texas Law',         median: 167 },
  { school: 'Vanderbilt Law',    median: 167 },
];

export function getLSATPercentileContext(percentile: number): { label: string; color: string; description: string } {
  if (percentile >= 99) return { label: 'Exceptional',   color: '#34d399', description: 'Top 1% — competitive for Yale, Harvard, Stanford' };
  if (percentile >= 95) return { label: 'Outstanding',   color: '#34d399', description: `Top ${100 - percentile}% — competitive for T14 law schools` };
  if (percentile >= 90) return { label: 'Excellent',     color: '#ef4444', description: `Top ${100 - percentile}% — strong candidacy at top 20 schools` };
  if (percentile >= 75) return { label: 'Above average', color: '#ef4444', description: `Better than ${percentile}% of LSAT test takers` };
  if (percentile >= 50) return { label: 'Average',       color: '#f59e0b', description: `Better than ${percentile}% of LSAT test takers` };
  if (percentile >= 25) return { label: 'Below average', color: '#f59e0b', description: `Better than ${percentile}% of LSAT test takers` };
  return { label: 'Needs improvement', color: '#6b7280', description: `Better than ${percentile}% of LSAT test takers` };
}

export const LSAT_FAQS = [
  {
    question: 'What is a good LSAT score?',
    answer: 'A good LSAT score depends on your target schools. The average LSAT score is around 152. Scores of 160+ (top 15%) are considered good for many law schools. To be competitive at T14 schools, you generally need 168+ (top 5%). Yale, Harvard, and Stanford typically have median LSAT scores of 173–175.',
  },
  {
    question: 'What percentile is a 160 LSAT score?',
    answer: 'A score of 160 on the LSAT is approximately the 85th percentile, meaning you scored higher than about 85% of all LSAT test takers.',
  },
  {
    question: 'What percentile is a 170 LSAT score?',
    answer: 'A score of 170 on the LSAT is approximately the 97th percentile, placing you in the top 3% of all LSAT test takers. This is considered an exceptional score and is competitive at all law schools including the T14.',
  },
  {
    question: 'How is the LSAT scored?',
    answer: 'The LSAT is scored on a scale of 120 to 180. The raw score (number of correct answers) is converted to a scaled score using a process called equating, which accounts for slight differences in difficulty between test versions. There is no penalty for wrong answers.',
  },
  {
    question: 'How many times can I take the LSAT?',
    answer: 'You can take the LSAT up to three times in a single testing year, five times within the current and past five testing years, and a total of seven times in your lifetime. Law schools typically see all your scores, though many focus on your highest.',
  },
  {
    question: 'What LSAT score do I need for a full scholarship?',
    answer: 'Full scholarship thresholds vary by school. At lower-ranked schools (ranked 50–100), a score of 160–165 can often earn significant merit aid. For T14 schools, you generally need 170+ to be considered for scholarships. Schools often use LSAT scores to award merit scholarships to students who improve their incoming class median.',
  },
];
