// A-Level Grade Boundary Data — AQA June 2025
// Source: AQA A-Level Grade Boundaries June 2025 (Official Release)
// Grades: A* (highest), A, B, C, D, E (minimum pass)
// UCAS tariff points map directly to grades

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

// AQA A-Level grade boundaries June 2025 — Official Data
export const ALEVEL_BOUNDARIES_2025: ALevelBoundary[] = [
  {
    subject: 'Mathematics', board: 'AQA', maxMark: 300,
    boundaries: { 'A*': 260, 'A': 221, 'B': 183, 'C': 145, 'D': 108, 'E': 71 },
  },
  {
    subject: 'Biology', board: 'AQA', maxMark: 260,
    boundaries: { 'A*': 192, 'A': 165, 'B': 139, 'C': 113, 'D': 88, 'E': 63 },
  },
  {
    subject: 'Chemistry', board: 'AQA', maxMark: 300,
    boundaries: { 'A*': 239, 'A': 197, 'B': 162, 'C': 127, 'D': 93, 'E': 59 },
  },
  {
    subject: 'Physics', board: 'AQA', maxMark: 250,
    boundaries: { 'A*': 182, 'A': 152, 'B': 126, 'C': 100, 'D': 75, 'E': 50 },
  },
  {
    subject: 'Psychology', board: 'AQA', maxMark: 288,
    boundaries: { 'A*': 220, 'A': 196, 'B': 163, 'C': 130, 'D': 97, 'E': 64 },
  },
  {
    subject: 'English Language', board: 'AQA', maxMark: 500,
    boundaries: { 'A*': 433, 'A': 397, 'B': 341, 'C': 285, 'D': 229, 'E': 174 },
  },
  {
    subject: 'History', board: 'AQA', maxMark: 300,
    boundaries: { 'A*': 245, 'A': 215, 'B': 179, 'C': 143, 'D': 107, 'E': 72 },
  },
  {
    subject: 'Geography', board: 'AQA', maxMark: 300,
    boundaries: { 'A*': 241, 'A': 213, 'B': 183, 'C': 153, 'D': 123, 'E': 94 },
  },
  {
    subject: 'Business', board: 'AQA', maxMark: 300,
    boundaries: { 'A*': 219, 'A': 197, 'B': 168, 'C': 139, 'D': 110, 'E': 82 },
  },
  {
    subject: 'Computer Science', board: 'AQA', maxMark: 375,
    boundaries: { 'A*': 300, 'A': 245, 'B': 201, 'C': 157, 'D': 113, 'E': 69 },
  },
  {
    subject: 'Economics', board: 'AQA', maxMark: 240,
    boundaries: { 'A*': 177, 'A': 153, 'B': 130, 'C': 107, 'D': 84, 'E': 61 },
  },
  {
    subject: 'Sociology', board: 'AQA', maxMark: 240,
    boundaries: { 'A*': 190, 'A': 171, 'B': 147, 'C': 123, 'D': 99, 'E': 76 },
  },
];

// UCAS tariff points 2025 — official UCAS tariff
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
    question: 'How are A-Level grade boundaries decided?',
    answer: 'A-Level boundaries are set after all student papers have been marked. Senior examiners look at statistical data and review actual student answers to determine the minimum raw mark required for each grade (A*, A, B, C, D, E). This ensures fairness: if a specific paper was much harder than the previous year, the boundaries will be lowered to compensate.',
  },
  {
    question: 'How many marks do I need for an A* at A-Level?',
    answer: 'The A* grade was introduced to differentiate exceptional students. Generally, you need to score roughly 80% to 90% of the total raw marks across your papers to secure an A*. The exact threshold varies wildly by subject and exam board. For example, AQA Mathematics often requires around 85%, whereas AQA Physics might require around 70%.',
  },
  {
    question: 'How do UCAS tariff points work with A-Level grades?',
    answer: 'Universities use UCAS points to standardize entry requirements. An A* is worth 56 points, A = 48, B = 40, C = 32, D = 24, and E = 16. If a university course requires 120 UCAS points, you could achieve this with BBB (40+40+40) or ABC (48+40+32).',
  },
  {
    question: 'What happens if I miss my university conditional offer by one grade?',
    answer: 'If your offer was AAB and you achieve ABB, you are not automatically rejected. Universities will wait until A-Level Results Day to see how their overall applicant pool performed. If many students missed their offers, the university may still accept you. Otherwise, you will automatically be entered into UCAS Clearing to find alternative courses.',
  },
  {
    question: 'When will the 2026 A-Level grade boundaries be released?',
    answer: 'Official 2026 A-Level grade boundaries will be released by all major exam boards (AQA, Edexcel, OCR) simultaneously at 8:00am on Thursday, 13 August 2026 (A-Level Results Day). They are strictly embargoed until this exact time.',
  },
];