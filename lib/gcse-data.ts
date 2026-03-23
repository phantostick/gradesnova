// GCSE Grade Boundary Data — 2025 + 2024 historical
// Sources: AQA, Edexcel, OCR, WJEC official June 2025 documents
// Published on GCSE Results Day: Thursday 21 August 2025

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

// Alias for backward compatibility
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
    question: 'What are GCSE grade boundaries?',
    answer: 'GCSE grade boundaries are the minimum number of marks needed to achieve each grade from 1 to 9. They are set by exam boards (AQA, Edexcel, OCR, WJEC) after all marking is complete, and vary slightly each year depending on how difficult the papers were. This ensures fairness — if a paper is harder than usual, the grade boundaries are set lower so that students performing at the same level as in previous years receive the same grades. Boundaries are published at 8am on GCSE Results Day each August.',
  },
  {
    question: 'What is a standard pass and a strong pass at GCSE?',
    answer: 'Grade 4 is the "standard pass" — broadly equivalent to the old grade C. It is the minimum required for most further education, apprenticeships, and employment. Grade 5 is the "strong pass" — equivalent to a high C or low B. Most sixth forms and many universities require grade 5 in English and Maths for entry. Students who do not achieve a grade 4 in GCSE English Language or Maths are required to continue studying and resit those subjects.',
  },
  {
    question: 'What percentage do you need for a grade 9 GCSE?',
    answer: 'The percentage required for a grade 9 varies by subject, board, and year. For AQA Maths Higher in 2025, the grade 9 boundary was 219 out of 240 marks (91%). For AQA English Language it was 119 out of 160 (74%). Grade 9 is awarded to the top approximately 3–5% of students nationally in each subject.',
  },
  {
    question: 'When are GCSE grade boundaries released in 2026?',
    answer: 'GCSE grade boundaries for 2026 will be published on GCSE Results Day — Thursday 20 August 2026 — at 8:00am. All exam boards (AQA, Edexcel, OCR, WJEC) publish simultaneously. Boundaries cannot be predicted or released before results day as they are only finalised after all marking is complete.',
  },
  {
    question: 'Why do GCSE grade boundaries change every year?',
    answer: 'Boundaries change each year because exam papers vary in difficulty. Exam boards use a process called "comparable outcomes" to ensure that the same proportion of students achieve each grade as in previous years, adjusting for any differences in cohort ability. If a paper is harder, boundaries drop slightly; if easier, they rise. For example, AQA Maths Higher grade 9 was 219 in both 2024 and 2025, showing high stability, but Edexcel Higher grade 9 moved from 197 in 2024 to 217 in 2025 — a significant shift.',
  },
  {
    question: 'What is the difference between AQA, Edexcel, OCR and WJEC grade boundaries?',
    answer: 'Each exam board sets its own grade boundaries independently because each board writes its own papers. The same raw mark can mean a different grade on different boards. For example, a mark of 186 out of 240 in GCSE Maths Higher is a grade 8 at Edexcel in 2025, but would fall just below grade 8 at AQA (which required 191). However, the proportion of students achieving each grade is kept broadly consistent across all boards by Ofqual.',
  },
  {
    question: 'What is the difference between Higher and Foundation tier at GCSE?',
    answer: 'Foundation tier covers grades 1–5 and is designed for students targeting grades 3–5. Higher tier covers grades 4–9 and is for students targeting 5–9. Grade 4 can be achieved on either tier. Ofqual rules require that on Higher papers, half the marks target grades 7–9 and half target grades 4–6. On Foundation, half the marks target grades 4–5 and half target grades 1–3. This is why grade 4 boundaries on Higher tier are often surprisingly low as a percentage of total marks.',
  },
  {
    question: 'How do the new 9-1 grades compare to the old A*-G grades?',
    answer: 'Grade 9 is above the old A*. Grades 8 and 7 correspond to A* and A. Grades 6, 5, and 4 cover B and C. Grades 3, 2, and 1 correspond to D, E, F, and G. The new system gives more differentiation at the top end. Grade 5 is the new "good pass" equivalent to what universities and employers previously considered a "B grade." The U grade (ungraded) remains the same in both systems.',
  },
];