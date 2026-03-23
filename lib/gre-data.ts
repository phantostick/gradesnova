// GRE Percentile Data — ETS 2022-2023 GRE Guide to the Use of Scores
// Source: https://www.ets.org/pdfs/gre/gre-guide-table-1a.pdf
// Verbal: 130–170, Quant: 130–170, AW: 0–6

import type { PercentileEntry } from './sat-data';
export type { PercentileEntry };
export { getPercentile } from './sat-data';

// GRE Verbal Reasoning percentiles (130–170)
export const GRE_VERBAL_PERCENTILES: PercentileEntry[] = [
  { score: 170, percentile: 99 },
  { score: 169, percentile: 99 },
  { score: 168, percentile: 98 },
  { score: 167, percentile: 98 },
  { score: 166, percentile: 97 },
  { score: 165, percentile: 96 },
  { score: 164, percentile: 94 },
  { score: 163, percentile: 93 },
  { score: 162, percentile: 91 },
  { score: 161, percentile: 89 },
  { score: 160, percentile: 87 },
  { score: 159, percentile: 85 },
  { score: 158, percentile: 82 },
  { score: 157, percentile: 80 },
  { score: 156, percentile: 77 },
  { score: 155, percentile: 74 },
  { score: 154, percentile: 71 },
  { score: 153, percentile: 67 },
  { score: 152, percentile: 63 },
  { score: 151, percentile: 59 },
  { score: 150, percentile: 56 },
  { score: 149, percentile: 52 },
  { score: 148, percentile: 47 },
  { score: 147, percentile: 43 },
  { score: 146, percentile: 39 },
  { score: 145, percentile: 35 },
  { score: 144, percentile: 31 },
  { score: 143, percentile: 27 },
  { score: 142, percentile: 24 },
  { score: 141, percentile: 21 },
  { score: 140, percentile: 17 },
  { score: 139, percentile: 14 },
  { score: 138, percentile: 12 },
  { score: 137, percentile: 9  },
  { score: 136, percentile: 7  },
  { score: 135, percentile: 5  },
  { score: 134, percentile: 4  },
  { score: 133, percentile: 3  },
  { score: 132, percentile: 2  },
  { score: 131, percentile: 1  },
  { score: 130, percentile: 1  },
];

// GRE Quantitative Reasoning percentiles (130–170)
export const GRE_QUANT_PERCENTILES: PercentileEntry[] = [
  { score: 170, percentile: 96 },
  { score: 169, percentile: 90 },
  { score: 168, percentile: 87 },
  { score: 167, percentile: 83 },
  { score: 166, percentile: 80 },
  { score: 165, percentile: 76 },
  { score: 164, percentile: 72 },
  { score: 163, percentile: 68 },
  { score: 162, percentile: 63 },
  { score: 161, percentile: 59 },
  { score: 160, percentile: 54 },
  { score: 159, percentile: 50 },
  { score: 158, percentile: 45 },
  { score: 157, percentile: 41 },
  { score: 156, percentile: 37 },
  { score: 155, percentile: 33 },
  { score: 154, percentile: 29 },
  { score: 153, percentile: 26 },
  { score: 152, percentile: 22 },
  { score: 151, percentile: 19 },
  { score: 150, percentile: 16 },
  { score: 149, percentile: 13 },
  { score: 148, percentile: 11 },
  { score: 147, percentile: 9  },
  { score: 146, percentile: 7  },
  { score: 145, percentile: 5  },
  { score: 144, percentile: 4  },
  { score: 143, percentile: 3  },
  { score: 142, percentile: 2  },
  { score: 141, percentile: 2  },
  { score: 140, percentile: 1  },
  { score: 130, percentile: 1  },
];

// GRE Analytical Writing percentiles (0–6, half-point increments)
export const GRE_AW_PERCENTILES: PercentileEntry[] = [
  { score: 6.0, percentile: 99 },
  { score: 5.5, percentile: 98 },
  { score: 5.0, percentile: 92 },
  { score: 4.5, percentile: 80 },
  { score: 4.0, percentile: 57 },
  { score: 3.5, percentile: 37 },
  { score: 3.0, percentile: 15 },
  { score: 2.5, percentile: 7  },
  { score: 2.0, percentile: 2  },
  { score: 1.5, percentile: 1  },
  { score: 0.0, percentile: 1  },
];

export const GRE_SCORE_RANGES = {
  verbal: { min: 130, max: 170, step: 1, avg: 151 },
  quant:  { min: 130, max: 170, step: 1, avg: 153 },
  aw:     { min: 0,   max: 6,   step: 0.5, avg: 4.0 },
};

// Average GRE scores by intended graduate major (for context section)
export const GRE_PROGRAM_AVERAGES = [
  { program: 'Computer Science',    verbal: 153, quant: 163 },
  { program: 'Engineering',         verbal: 150, quant: 161 },
  { program: 'Business',            verbal: 153, quant: 156 },
  { program: 'Psychology',          verbal: 156, quant: 149 },
  { program: 'Life Sciences',       verbal: 154, quant: 152 },
  { program: 'Social Sciences',     verbal: 154, quant: 150 },
  { program: 'Education',           verbal: 151, quant: 148 },
  { program: 'Humanities / Arts',   verbal: 158, quant: 149 },
  { program: 'Law',                 verbal: 157, quant: 151 },
  { program: 'Medicine / Health',   verbal: 153, quant: 152 },
];

export function getGREPercentileContext(percentile: number, section: 'verbal' | 'quant'): { label: string; color: string; description: string } {
  const sectionLabel = section === 'verbal' ? 'Verbal' : 'Quant';
  if (percentile >= 95) return { label: 'Exceptional',   color: '#34d399', description: `Top ${100 - percentile}% in GRE ${sectionLabel}` };
  if (percentile >= 85) return { label: 'Excellent',     color: '#a855f7', description: `Top ${100 - percentile}% in GRE ${sectionLabel}` };
  if (percentile >= 70) return { label: 'Above average', color: '#a855f7', description: `Better than ${percentile}% in GRE ${sectionLabel}` };
  if (percentile >= 50) return { label: 'Average',       color: '#f59e0b', description: `Better than ${percentile}% in GRE ${sectionLabel}` };
  if (percentile >= 30) return { label: 'Below average', color: '#f59e0b', description: `Better than ${percentile}% in GRE ${sectionLabel}` };
  return { label: 'Needs improvement', color: '#6b7280', description: `Better than ${percentile}% in GRE ${sectionLabel}` };
}

export const GRE_FAQS = [
  {
    question: 'What is a good GRE score?',
    answer: 'A good GRE score depends on your target programs. Average scores are about 151 for Verbal and 153 for Quantitative. Scores above 160 on either section are generally considered strong. Top PhD programs in STEM often expect 160+ Quant, while humanities programs value high Verbal scores (158+). Check the average scores for your specific programs.',
  },
  {
    question: 'What percentile is a 160 GRE Verbal score?',
    answer: 'A GRE Verbal score of 160 is approximately the 87th percentile, meaning you scored higher than about 87% of all GRE test takers.',
  },
  {
    question: 'What percentile is a 160 GRE Quant score?',
    answer: 'A GRE Quantitative score of 160 is approximately the 54th percentile. Quant scores have a different distribution than Verbal — many STEM applicants score 160+, so a 160 is roughly average for that pool. A 165+ is generally considered strong for STEM programs.',
  },
  {
    question: 'How is the GRE scored?',
    answer: 'The GRE General Test has three sections: Verbal Reasoning (130–170), Quantitative Reasoning (130–170), and Analytical Writing (0–6, in half-point increments). The Verbal and Quant scores are in 1-point increments. Most programs care primarily about Verbal and Quant; AW is secondary unless you are applying to a writing-intensive field.',
  },
  {
    question: 'How long are GRE scores valid?',
    answer: 'GRE scores are valid for five years from the test date. You can take the GRE up to five times in any continuous 12-month period, and no more than once every 21 days.',
  },
  {
    question: 'Do all graduate programs require the GRE?',
    answer: 'No. Many graduate programs — including some top MBA, law, and medical schools — have made the GRE optional or eliminated it entirely. Always check your specific programs. However, many traditional PhD programs in STEM and social sciences still require it.',
  },
];
