// SAT Percentile Data — College Board 2023-2024 SAT Suite Annual Report
// Source: https://collegeboard.org/research/data
// Score range: 400–1600 (composite), sections: Math 200–800, EBRW 200–800

export interface PercentileEntry {
  score: number;
  percentile: number; // percentage of test takers scoring AT OR BELOW this score
}

// Composite score percentiles (400–1600)
export const SAT_COMPOSITE_PERCENTILES: PercentileEntry[] = [
  { score: 1600, percentile: 99 },
  { score: 1580, percentile: 99 },
  { score: 1560, percentile: 99 },
  { score: 1550, percentile: 99 },
  { score: 1540, percentile: 99 },
  { score: 1530, percentile: 98 },
  { score: 1520, percentile: 98 },
  { score: 1510, percentile: 98 },
  { score: 1500, percentile: 97 },
  { score: 1490, percentile: 97 },
  { score: 1480, percentile: 96 },
  { score: 1470, percentile: 96 },
  { score: 1460, percentile: 95 },
  { score: 1450, percentile: 95 },
  { score: 1440, percentile: 94 },
  { score: 1430, percentile: 93 },
  { score: 1420, percentile: 93 },
  { score: 1410, percentile: 92 },
  { score: 1400, percentile: 91 },
  { score: 1390, percentile: 90 },
  { score: 1380, percentile: 90 },
  { score: 1370, percentile: 89 },
  { score: 1360, percentile: 88 },
  { score: 1350, percentile: 87 },
  { score: 1340, percentile: 86 },
  { score: 1330, percentile: 85 },
  { score: 1320, percentile: 84 },
  { score: 1310, percentile: 83 },
  { score: 1300, percentile: 82 },
  { score: 1290, percentile: 81 },
  { score: 1280, percentile: 80 },
  { score: 1270, percentile: 78 },
  { score: 1260, percentile: 77 },
  { score: 1250, percentile: 76 },
  { score: 1240, percentile: 74 },
  { score: 1230, percentile: 73 },
  { score: 1220, percentile: 71 },
  { score: 1210, percentile: 70 },
  { score: 1200, percentile: 69 },
  { score: 1190, percentile: 67 },
  { score: 1180, percentile: 65 },
  { score: 1170, percentile: 64 },
  { score: 1160, percentile: 62 },
  { score: 1150, percentile: 60 },
  { score: 1140, percentile: 59 },
  { score: 1130, percentile: 57 },
  { score: 1120, percentile: 55 },
  { score: 1110, percentile: 53 },
  { score: 1100, percentile: 52 },
  { score: 1090, percentile: 50 },
  { score: 1080, percentile: 48 },
  { score: 1070, percentile: 46 },
  { score: 1060, percentile: 44 },
  { score: 1050, percentile: 43 },
  { score: 1040, percentile: 41 },
  { score: 1030, percentile: 39 },
  { score: 1020, percentile: 37 },
  { score: 1010, percentile: 36 },
  { score: 1000, percentile: 34 },
  { score: 990,  percentile: 32 },
  { score: 980,  percentile: 30 },
  { score: 970,  percentile: 29 },
  { score: 960,  percentile: 27 },
  { score: 950,  percentile: 26 },
  { score: 940,  percentile: 24 },
  { score: 930,  percentile: 23 },
  { score: 920,  percentile: 21 },
  { score: 910,  percentile: 20 },
  { score: 900,  percentile: 19 },
  { score: 890,  percentile: 17 },
  { score: 880,  percentile: 16 },
  { score: 870,  percentile: 15 },
  { score: 860,  percentile: 14 },
  { score: 850,  percentile: 12 },
  { score: 840,  percentile: 11 },
  { score: 830,  percentile: 10 },
  { score: 820,  percentile: 9  },
  { score: 810,  percentile: 8  },
  { score: 800,  percentile: 7  },
  { score: 790,  percentile: 6  },
  { score: 780,  percentile: 6  },
  { score: 770,  percentile: 5  },
  { score: 760,  percentile: 4  },
  { score: 750,  percentile: 4  },
  { score: 740,  percentile: 3  },
  { score: 730,  percentile: 3  },
  { score: 720,  percentile: 2  },
  { score: 710,  percentile: 2  },
  { score: 700,  percentile: 2  },
  { score: 690,  percentile: 1  },
  { score: 680,  percentile: 1  },
  { score: 400,  percentile: 1  },
];

// Math section percentiles (200–800)
export const SAT_MATH_PERCENTILES: PercentileEntry[] = [
  { score: 800, percentile: 99 },
  { score: 790, percentile: 98 },
  { score: 780, percentile: 97 },
  { score: 770, percentile: 97 },
  { score: 760, percentile: 96 },
  { score: 750, percentile: 95 },
  { score: 740, percentile: 94 },
  { score: 730, percentile: 93 },
  { score: 720, percentile: 91 },
  { score: 710, percentile: 90 },
  { score: 700, percentile: 88 },
  { score: 690, percentile: 86 },
  { score: 680, percentile: 85 },
  { score: 670, percentile: 83 },
  { score: 660, percentile: 80 },
  { score: 650, percentile: 78 },
  { score: 640, percentile: 75 },
  { score: 630, percentile: 72 },
  { score: 620, percentile: 69 },
  { score: 610, percentile: 66 },
  { score: 600, percentile: 63 },
  { score: 590, percentile: 60 },
  { score: 580, percentile: 57 },
  { score: 570, percentile: 54 },
  { score: 560, percentile: 50 },
  { score: 550, percentile: 47 },
  { score: 540, percentile: 43 },
  { score: 530, percentile: 40 },
  { score: 520, percentile: 37 },
  { score: 510, percentile: 33 },
  { score: 500, percentile: 30 },
  { score: 490, percentile: 27 },
  { score: 480, percentile: 24 },
  { score: 470, percentile: 21 },
  { score: 460, percentile: 18 },
  { score: 450, percentile: 16 },
  { score: 440, percentile: 13 },
  { score: 430, percentile: 11 },
  { score: 420, percentile: 9  },
  { score: 410, percentile: 7  },
  { score: 400, percentile: 5  },
  { score: 390, percentile: 4  },
  { score: 380, percentile: 3  },
  { score: 370, percentile: 2  },
  { score: 360, percentile: 1  },
  { score: 200, percentile: 1  },
];

// EBRW section percentiles (200–800)
export const SAT_EBRW_PERCENTILES: PercentileEntry[] = [
  { score: 800, percentile: 99 },
  { score: 790, percentile: 98 },
  { score: 780, percentile: 97 },
  { score: 770, percentile: 96 },
  { score: 760, percentile: 95 },
  { score: 750, percentile: 93 },
  { score: 740, percentile: 92 },
  { score: 730, percentile: 90 },
  { score: 720, percentile: 88 },
  { score: 710, percentile: 87 },
  { score: 700, percentile: 85 },
  { score: 690, percentile: 83 },
  { score: 680, percentile: 80 },
  { score: 670, percentile: 78 },
  { score: 660, percentile: 76 },
  { score: 650, percentile: 73 },
  { score: 640, percentile: 70 },
  { score: 630, percentile: 68 },
  { score: 620, percentile: 65 },
  { score: 610, percentile: 62 },
  { score: 600, percentile: 59 },
  { score: 590, percentile: 56 },
  { score: 580, percentile: 53 },
  { score: 570, percentile: 50 },
  { score: 560, percentile: 47 },
  { score: 550, percentile: 44 },
  { score: 540, percentile: 41 },
  { score: 530, percentile: 38 },
  { score: 520, percentile: 34 },
  { score: 510, percentile: 31 },
  { score: 500, percentile: 28 },
  { score: 490, percentile: 25 },
  { score: 480, percentile: 22 },
  { score: 470, percentile: 20 },
  { score: 460, percentile: 17 },
  { score: 450, percentile: 14 },
  { score: 440, percentile: 12 },
  { score: 430, percentile: 10 },
  { score: 420, percentile: 8  },
  { score: 410, percentile: 6  },
  { score: 400, percentile: 5  },
  { score: 390, percentile: 3  },
  { score: 380, percentile: 2  },
  { score: 370, percentile: 1  },
  { score: 200, percentile: 1  },
];

/**
 * Get percentile for a given score using the closest matching entry.
 * Interpolates between two bracketing entries for precise results.
 */
export function getPercentile(score: number, table: PercentileEntry[]): number {
  const sorted = [...table].sort((a, b) => b.score - a.score);

  if (score >= sorted[0].score) return sorted[0].percentile;
  if (score <= sorted[sorted.length - 1].score) return sorted[sorted.length - 1].percentile;

  for (let i = 0; i < sorted.length - 1; i++) {
    const upper = sorted[i];
    const lower = sorted[i + 1];
    if (score <= upper.score && score >= lower.score) {
      if (score === upper.score) return upper.percentile;
      if (score === lower.score) return lower.percentile;
      // Linear interpolation
      const ratio = (score - lower.score) / (upper.score - lower.score);
      return Math.round(lower.percentile + ratio * (upper.percentile - lower.percentile));
    }
  }

  return 1;
}

export const SAT_SCORE_RANGES = {
  composite: { min: 400, max: 1600, step: 10, avg: 1050 },
  math:      { min: 200, max: 800,  step: 10, avg: 520  },
  ebrw:      { min: 200, max: 800,  step: 10, avg: 530  },
};

// Context labels for percentile ranges
export function getPercentileContext(percentile: number): { label: string; color: string; description: string } {
  if (percentile >= 99) return { label: 'Exceptional', color: '#34d399', description: 'Top 1% of all SAT test takers' };
  if (percentile >= 95) return { label: 'Outstanding', color: '#34d399', description: `Top ${100 - percentile}% of all SAT test takers` };
  if (percentile >= 90) return { label: 'Excellent',   color: '#6366f1', description: `Top ${100 - percentile}% of all SAT test takers` };
  if (percentile >= 75) return { label: 'Above average', color: '#6366f1', description: `Better than ${percentile}% of test takers` };
  if (percentile >= 50) return { label: 'Average',     color: '#f59e0b', description: `Better than ${percentile}% of test takers` };
  if (percentile >= 25) return { label: 'Below average', color: '#f59e0b', description: `Better than ${percentile}% of test takers` };
  return { label: 'Needs improvement', color: '#ef4444', description: `Better than ${percentile}% of test takers` };
}

// SAT FAQ data for schema markup
export const SAT_FAQS = [
  {
    question: 'What is a good SAT score for the 2025–2026 admissions cycle?',
    answer: 'A "good" score is entirely dependent on your target colleges. The national average is around 1050. A score of 1200 places you in the top 25% nationally and is highly competitive for most state universities. To be competitive at highly selective private colleges, aim for a 1400+ (top 6%). For Ivy League and top-tier institutions (MIT, Stanford), successful applicants typically score 1500 or higher (97th+ percentile).',
  },
  {
    question: 'How do SAT percentiles work on the Digital SAT?',
    answer: 'Your percentile rank shows the percentage of students in a nationally representative sample who scored at or below your score. For example, if your composite score is 1350 and your percentile is 87, you scored higher than 87% of all test-takers. The College Board updates these percentile norms annually based on the graduating class data.',
  },
  {
    question: 'Do colleges look at my composite score or section percentiles?',
    answer: 'Most colleges focus primarily on your composite score (out of 1600). However, engineering, computer science, and business programs will heavily scrutinize your Math section score and percentile. Conversely, humanities and journalism programs will look closely at your Evidence-Based Reading and Writing (EBRW) percentile.',
  },
  {
    question: 'What is SAT superscoring?',
    answer: 'Superscoring is a policy used by many universities where they take your highest Math score and your highest EBRW score across all the different dates you took the SAT, and combine them to create a new, higher composite score. If your target colleges superscore, it is highly recommended to take the SAT at least twice.',
  },
  {
    question: 'Is a 1000 on the SAT a bad score?',
    answer: 'A 1000 is just slightly below the national average (approximately the 34th percentile). While it may not be competitive for highly selective universities, it is widely accepted at many regional public universities and less selective four-year colleges. With focused preparation, most students can improve a 1000 by 100–150 points.',
  },
];
