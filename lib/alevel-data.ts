// A-Level Grade Boundary Data — AQA June 2024
// Source: AQA A-Level Grade Boundaries June 2024 (filestore.aqa.org.uk)
// Grades: A* (highest), A, B, C, D, E (minimum pass)
// UCAS tariff points map directly to grades

const currentYear = new Date().getFullYear();

export interface ALevelBoundary {
  subject: string;
  board: 'AQA' | 'Edexcel' | 'OCR';
  maxMark: number;
  boundaries: {
    'A*': number;
    'A': number;
    'B': number;
    'C': number;
    'D': number;
    'E': number;
  };
}

// AQA A-Level grade boundaries June 2024 — real data from official AQA document
export const ALEVEL_BOUNDARIES_2024: ALevelBoundary[] = [
  {
    subject: 'Mathematics', board: 'AQA', maxMark: 300,
    boundaries: { 'A*': 249, 'A': 213, 'B': 177, 'C': 141, 'D': 106, 'E': 71 },
  },
  {
    subject: 'Biology', board: 'AQA', maxMark: 260,
    boundaries: { 'A*': 192, 'A': 165, 'B': 140, 'C': 115, 'D': 91, 'E': 67 },
  },
  {
    subject: 'Chemistry', board: 'AQA', maxMark: 300,
    boundaries: { 'A*': 239, 'A': 198, 'B': 162, 'C': 126, 'D': 90, 'E': 55 },
  },
  {
    subject: 'Physics', board: 'AQA', maxMark: 250,
    boundaries: { 'A*': 171, 'A': 138, 'B': 114, 'C': 91, 'D': 68, 'E': 45 },
  },
  {
    subject: 'Psychology', board: 'AQA', maxMark: 288,
    boundaries: { 'A*': 220, 'A': 196, 'B': 163, 'C': 130, 'D': 97, 'E': 64 },
  },
  {
    subject: 'English Language', board: 'AQA', maxMark: 500,
    boundaries: { 'A*': 433, 'A': 399, 'B': 342, 'C': 286, 'D': 230, 'E': 174 },
  },
  {
    subject: 'History', board: 'AQA', maxMark: 300,
    boundaries: { 'A*': 243, 'A': 213, 'B': 177, 'C': 141, 'D': 106, 'E': 71 },
  },
  {
    subject: 'Geography', board: 'AQA', maxMark: 270,
    boundaries: { 'A*': 218, 'A': 195, 'B': 162, 'C': 130, 'D': 98, 'E': 66 },
  },
  {
    subject: 'Business', board: 'AQA', maxMark: 300,
    boundaries: { 'A*': 234, 'A': 204, 'B': 168, 'C': 132, 'D': 96, 'E': 60 },
  },
  {
    subject: 'Computer Science', board: 'AQA', maxMark: 240,
    boundaries: { 'A*': 174, 'A': 147, 'B': 120, 'C': 93, 'D': 66, 'E': 39 },
  },
  {
    subject: 'Economics', board: 'AQA', maxMark: 240,
    boundaries: { 'A*': 194, 'A': 168, 'B': 138, 'C': 108, 'D': 78, 'E': 49 },
  },
  {
    subject: 'Sociology', board: 'AQA', maxMark: 240,
    boundaries: { 'A*': 191, 'A': 173, 'B': 148, 'C': 123, 'D': 98, 'E': 73 },
  },
];

// UCAS tariff points 2024 — official UCAS tariff
export const UCAS_POINTS: Record<string, number> = {
  'A*': 56,
  'A':  48,
  'B':  40,
  'C':  32,
  'D':  24,
  'E':  16,
};

// Grade info with context
export const ALEVEL_GRADE_INFO: Record<string, { color: string; desc: string; ucas: number }> = {
  'A*': { color: '#34d399', ucas: 56, desc: 'Exceptional. Required for Oxbridge and most competitive courses.' },
  'A':  { color: '#34d399', ucas: 48, desc: 'Excellent. Meets entry requirements for top universities.' },
  'B':  { color: '#6366f1', ucas: 40, desc: 'Good. Competitive for most university courses.' },
  'C':  { color: '#a855f7', ucas: 32, desc: 'Satisfactory. Meets many university entry requirements.' },
  'D':  { color: '#f59e0b', ucas: 24, desc: 'Pass. Below the threshold for many competitive courses.' },
  'E':  { color: '#f59e0b', ucas: 16, desc: 'Minimum pass. May not meet university entry requirements.' },
};

export const GRADE_ORDER = ['A*', 'A', 'B', 'C', 'D', 'E'] as const;
export type ALevel = typeof GRADE_ORDER[number];

export function getGradeFromMark(mark: number, boundary: ALevelBoundary): ALevel | 'U' {
  for (const grade of GRADE_ORDER) {
    if (mark >= boundary.boundaries[grade]) return grade;
  }
  return 'U';
}

export function getPercentageFromMark(mark: number, maxMark: number): number {
  return Math.round((mark / maxMark) * 100);
}

export function getTotalUCASPoints(grades: ALevel[]): number {
  return grades.reduce((sum, g) => sum + (UCAS_POINTS[g] || 0), 0);
}

// University entry context for UCAS points
export const UCAS_UNIVERSITY_CONTEXT = [
  { institution: 'Oxford / Cambridge',    minPoints: 168, requirement: 'A*A*A minimum (+ interview/tests)' },
  { institution: 'Imperial / LSE / UCL',  minPoints: 152, requirement: 'A*AA typical' },
  { institution: 'Russell Group (top)',   minPoints: 136, requirement: 'AAA typical' },
  { institution: 'Russell Group (other)', minPoints: 120, requirement: 'AAB–ABB typical' },
  { institution: 'Good universities',     minPoints: 104, requirement: 'ABB–BBB typical' },
  { institution: 'Most universities',     minPoints: 88,  requirement: 'BBC–BCC typical' },
  { institution: 'Many universities',     minPoints: 64,  requirement: 'CCC typical' },
  { institution: 'Foundation / access',   minPoints: 32,  requirement: 'DDD+ or equivalent' },
];

export const ALEVEL_FAQS = [
  {
    question: 'What are A-Level grade boundaries?',
    answer: `A-Level grade boundaries are the minimum number of raw marks needed to achieve each grade (A*, A, B, C, D, or E). They are set by exam boards (AQA, Edexcel, OCR) after all papers are marked for each June exam series. Boundaries shift slightly each year depending on the difficulty of the papers. They are published at 8am on A-Level Results Day — typically the second Thursday of August.`,
  },
  {
    question: 'What percentage do you need for an A* at A-Level?',
    answer: 'For an A* at A-Level you typically need around 80–90% of the total marks, depending on the subject and exam board. For AQA Maths in 2024, the A* boundary was 249 out of 300 marks (83%). For AQA Chemistry it was 239 out of 300 (80%). The A* grade was introduced to differentiate the very top performers from those achieving a solid A.',
  },
  {
    question: 'What UCAS points does each A-Level grade give?',
    answer: 'Under the UCAS tariff, A-Level grades convert to points as follows: A* = 56 points, A = 48 points, B = 40 points, C = 32 points, D = 24 points, E = 16 points. Three A grades (AAA) gives 144 UCAS points. Three A* grades (A*A*A*) gives 168 points. Most universities publish entry requirements as both a grade offer (e.g. AAB) and a UCAS points threshold.',
  },
  {
    question: `When are A-Level grade boundaries published in ${currentYear}?`,
    answer: `A-Level grade boundaries for ${currentYear} will be published on A-Level Results Day (mid-August) at 8:00am. AQA, Edexcel, OCR, and other boards publish simultaneously. They cannot be released in advance as they are only set after all marking is complete. Our tool will be updated with ${currentYear} boundaries as soon as they are released.`,
  },
  {
    question: 'How do A-Level grade boundaries affect university offers?',
    answer: 'Universities make conditional offers based on predicted grades, typically requiring specific A-Level grades (e.g. AAB). If your actual grades meet or exceed the offer, you are confirmed into the course. If you miss by one grade in one subject, many universities will still accept you. If you significantly miss your grades, you can use Clearing to find alternative courses. Grade boundaries can work in your favour — if you are close to a higher grade, the marking process means small differences in boundaries can change your outcome.',
  },
  {
    question: 'What is the difference between an A and an A* at A-Level?',
    answer: 'Both A and A* are excellent grades. The A* grade (introduced in 2010) is awarded to students who achieve 90% or above on their A2 units and an overall A grade. It was designed to help universities differentiate the very strongest students. Nationally, only about 8-9% of A-Level entries are awarded A*. For the most competitive university courses (Medicine, Law at Oxbridge, Engineering at top universities), A*s are often expected or required.',
  },
  {
    question: 'Do A-Level grade boundaries change every year?',
    answer: 'Yes — A-Level grade boundaries change every year for every subject and exam board. They are adjusted based on the difficulty of the papers and statistical measures of comparable outcomes between cohorts. If a paper was harder than usual, the A boundary might drop by a few marks.',
  },
];