// GCSE Grade Boundary Data
// Sources: AQA, Edexcel, OCR, WJEC official documents

const currentYear = new Date().getFullYear();

export interface GCSEBoundary {
  subject: string;
  board: 'AQA' | 'Edexcel' | 'OCR' | 'WJEC';
  tier: 'Higher' | 'Foundation';
  maxMark: number;
  boundaries: {
    9?: number; 8?: number; 7?: number; 6?: number;
    5?: number; 4?: number; 3?: number; 2?: number; 1?: number;
  };
}

// ─── MATHS 2025 — all four boards ─────────────────────────────────────────
export const MATHS_2025: GCSEBoundary[] = [
  { subject: 'Maths', board: 'AQA',    tier: 'Higher',     maxMark: 240,
    boundaries: { 9:219, 8:191, 7:164, 6:130, 5:96, 4:63, 3:46 } },
  { subject: 'Maths', board: 'AQA',    tier: 'Foundation', maxMark: 240,
    boundaries: { 5:188, 4:160, 3:119, 2:79, 1:39 } },
  { subject: 'Maths', board: 'Edexcel', tier: 'Higher',    maxMark: 240,
    boundaries: { 9:217, 8:186, 7:156, 6:121, 5:87, 4:53, 3:36 } },
  { subject: 'Maths', board: 'Edexcel', tier: 'Foundation', maxMark: 240,
    boundaries: { 5:175, 4:144, 3:105, 2:67, 1:29 } },
  // OCR raw marks out of 300, scaled to 240 shown in brackets — using raw
  { subject: 'Maths', board: 'OCR',    tier: 'Higher',     maxMark: 300,
    boundaries: { 9:258, 8:212, 7:166, 6:126, 5:86, 4:47, 3:27 } },
  { subject: 'Maths', board: 'OCR',    tier: 'Foundation', maxMark: 300,
    boundaries: { 5:182, 4:134, 3:95, 2:56, 1:17 } },
  { subject: 'Maths', board: 'WJEC',   tier: 'Higher',     maxMark: 240,
    boundaries: { 9:196, 8:155, 7:115, 6:85, 5:56, 4:27, 3:12 } },
  { subject: 'Maths', board: 'WJEC',   tier: 'Foundation', maxMark: 240,
    boundaries: { 5:141, 4:111, 3:81, 2:51, 1:21 } },
];

// ─── MATHS 2024 — for historical comparison ───────────────────────────────
export const MATHS_2024: GCSEBoundary[] = [
  { subject: 'Maths', board: 'AQA',    tier: 'Higher',     maxMark: 240,
    boundaries: { 9:219, 8:191, 7:163, 6:129, 5:95, 4:61, 3:44 } },
  { subject: 'Maths', board: 'AQA',    tier: 'Foundation', maxMark: 240,
    boundaries: { 5:186, 4:157, 3:117, 2:77, 1:37 } },
  { subject: 'Maths', board: 'Edexcel', tier: 'Higher',    maxMark: 240,
    boundaries: { 9:197, 8:167, 7:137, 6:105, 5:73, 4:42, 3:26 } },
  { subject: 'Maths', board: 'Edexcel', tier: 'Foundation', maxMark: 240,
    boundaries: { 5:175, 4:142, 3:103, 2:65, 1:27 } },
];

// ─── ALL SUBJECTS 2025 (AQA only — largest board) ────────────────────────
export const ALL_SUBJECTS_2025: GCSEBoundary[] = [
  ...MATHS_2025.filter(b => b.board === 'AQA'),
  { subject: 'English Language', board: 'AQA', tier: 'Higher', maxMark: 160,
    boundaries: { 9:119, 8:109, 7:100, 6:91, 5:82, 4:73, 3:54, 2:35, 1:16 } },
  { subject: 'English Literature', board: 'AQA', tier: 'Higher', maxMark: 160,
    boundaries: { 9:136, 8:122, 7:108, 6:92, 5:77, 4:62, 3:46, 2:30, 1:15 } },
  { subject: 'Biology', board: 'AQA', tier: 'Higher', maxMark: 200,
    boundaries: { 9:141, 8:127, 7:113, 6:94, 5:75, 4:56, 3:46 } },
  { subject: 'Biology', board: 'AQA', tier: 'Foundation', maxMark: 200,
    boundaries: { 5:140, 4:121, 3:87, 2:53, 1:19 } },
  { subject: 'Chemistry', board: 'AQA', tier: 'Higher', maxMark: 200,
    boundaries: { 9:150, 8:132, 7:115, 6:90, 5:66, 4:42, 3:30 } },
  { subject: 'Chemistry', board: 'AQA', tier: 'Foundation', maxMark: 200,
    boundaries: { 5:132, 4:109, 3:80, 2:52, 1:24 } },
  { subject: 'Physics', board: 'AQA', tier: 'Higher', maxMark: 200,
    boundaries: { 9:152, 8:139, 7:126, 6:107, 5:88, 4:70, 3:61 } },
  { subject: 'Physics', board: 'AQA', tier: 'Foundation', maxMark: 200,
    boundaries: { 5:144, 4:131, 3:95, 2:59, 1:24 } },
  { subject: 'Computer Science', board: 'AQA', tier: 'Higher', maxMark: 180,
    boundaries: { 9:155, 8:142, 7:130, 6:111, 5:92, 4:74, 3:55, 2:36, 1:18 } },
  { subject: 'History', board: 'AQA', tier: 'Higher', maxMark: 168,
    boundaries: { 9:146, 8:134, 7:123, 6:110, 5:98, 4:86, 3:65, 2:44, 1:23 } },
  { subject: 'Geography', board: 'AQA', tier: 'Higher', maxMark: 200,
    boundaries: { 9:154, 8:141, 7:129, 6:115, 5:102, 4:89, 3:65, 2:41, 1:18 } },
  { subject: 'Religious Studies', board: 'AQA', tier: 'Higher', maxMark: 252,
    boundaries: { 9:188, 8:170, 7:153, 6:133, 5:113, 4:93, 3:70, 2:47, 1:24 } },
  { subject: 'Food & Nutrition', board: 'AQA', tier: 'Higher', maxMark: 300,
    boundaries: { 9:230, 8:210, 7:190, 6:168, 5:146, 4:125, 3:94, 2:63, 1:33 } },
  { subject: 'Drama', board: 'AQA', tier: 'Higher', maxMark: 200,
    boundaries: { 9:179, 8:169, 7:160, 6:146, 5:132, 4:119, 3:89, 2:59, 1:29 } },
  { subject: 'Music', board: 'AQA', tier: 'Higher', maxMark: 200,
    boundaries: { 9:170, 8:160, 7:150, 6:137, 5:124, 4:112, 3:91, 2:70, 1:49 } },
  { subject: 'Physical Education', board: 'AQA', tier: 'Higher', maxMark: 200,
    boundaries: { 9:163, 8:153, 7:143, 6:130, 5:118, 4:106, 3:80, 2:54, 1:29 } },
  { subject: 'Design Technology', board: 'AQA', tier: 'Higher', maxMark: 200,
    boundaries: { 9:179, 8:165, 7:152, 6:134, 5:117, 4:100, 3:73, 2:46, 1:20 } },
];

export const GCSE_BOUNDARIES_2024 = ALL_SUBJECTS_2025;
export const GCSE_BOUNDARIES_2025 = ALL_SUBJECTS_2025;

export const GCSE_GRADE_INFO: Record<number, { label: string; equiv: string; color: string; desc: string }> = {
  9: { label: 'Grade 9', equiv: 'High A*',        color: '#34d399', desc: 'Top ~4% nationally. Exceptional.' },
  8: { label: 'Grade 8', equiv: 'Low A* / high A', color: '#34d399', desc: 'Excellent. Top ~9% nationally.' },
  7: { label: 'Grade 7', equiv: 'Low A',           color: '#6366f1', desc: 'Very strong. University entry standard.' },
  6: { label: 'Grade 6', equiv: 'High B',          color: '#6366f1', desc: 'Strong pass. Above national average.' },
  5: { label: 'Grade 5', equiv: 'Low B / high C',  color: '#a855f7', desc: 'Strong pass. Required by most sixth forms.' },
  4: { label: 'Grade 4', equiv: 'Low C',           color: '#f59e0b', desc: 'Standard pass. Minimum for most further education.' },
  3: { label: 'Grade 3', equiv: 'D / high E',      color: '#f59e0b', desc: 'Below standard pass.' },
  2: { label: 'Grade 2', equiv: 'Low E / high F',  color: '#ef4444', desc: 'Low pass.' },
  1: { label: 'Grade 1', equiv: 'Low F / G',       color: '#6b7280', desc: 'Minimum grade.' },
};

export const GCSE_KEY_THRESHOLDS = { standardPass: 4, strongPass: 5 };

export function getGradeFromMark(mark: number, boundary: GCSEBoundary): number | null {
  const grades = [9, 8, 7, 6, 5, 4, 3, 2, 1] as const;
  for (const grade of grades) {
    const t = boundary.boundaries[grade];
    if (t !== undefined && mark >= t) return grade;
  }
  return null;
}

export function getPercentageFromMark(mark: number, maxMark: number): number {
  return Math.round((mark / maxMark) * 100);
}

export const GCSE_FAQS = [
  {
    question: 'How does the 9-1 GCSE grading system work?',
    answer: 'Introduced in 2017, the 9-1 scale replaced the old A*-G system. 9 is the highest grade, awarded to the top 4-5% of students. A grade 4 is considered a "standard pass" (equivalent to an old C), and a grade 5 is a "strong pass" (equivalent to a high C/low B). Grades 7, 8, and 9 correspond to the old A and A* grades.',
  },
  {
    question: 'What happens if I don\'t get a grade 4 in Maths or English?',
    answer: 'In the UK, achieving a grade 4 (standard pass) in both English Language and Mathematics is a government requirement. If you score a grade 3 or below, you will be required to resit the exams during your post-16 education until you pass or turn 18.',
  },
  {
    question: 'What is the difference between Foundation and Higher tier boundaries?',
    answer: 'Many GCSE subjects (like Maths and Sciences) are split into tiers. Foundation tier papers are easier, but the maximum grade you can achieve is a 5. Higher tier papers are more difficult and allow you to achieve grades 4 through 9. If you score below the boundary for a grade 4 on a Higher paper, you may receive a grade 3 as a safety net, but falling below that results in a U (Unclassified).',
  },
  {
    question: 'When will the 2026 GCSE grade boundaries be published?',
    answer: 'By rule, exam boards (AQA, Edexcel, OCR, WJEC) do not publish grade boundaries until the morning of Results Day to prevent unnecessary panic. For the 2026 academic year, official GCSE boundaries will be released at exactly 8:00am on Thursday, 20 August 2026.',
  },
  {
    question: 'Do grade boundaries change every year?',
    answer: 'Yes. Grade boundaries are not fixed percentages. After all exams are marked, senior examiners review the data. If a paper was exceptionally difficult compared to previous years, the boundaries will be lowered so students are not unfairly disadvantaged. If a paper was easier, boundaries will rise.',
  },
];