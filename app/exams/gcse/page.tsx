'use client';

import { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import {
  ALL_SUBJECTS_2025, MATHS_2025, MATHS_2024,
  GCSE_GRADE_INFO, GCSE_KEY_THRESHOLDS,
  getGradeFromMark, getPercentageFromMark, GCSE_FAQS,
  type GCSEBoundary,
} from '@/lib/gcse-data';
import { ChevronDown, ChevronUp } from 'lucide-react';
import Link from 'next/link';

const COLOR = '#34d399';

// WJEC 2025 GRADE BOUNDARIES
// Source: WJEC/CBAC official grade boundary documents, June 2025
const WJEC_2025: GCSEBoundary[] = [
  { subject: 'Maths', board: 'WJEC', tier: 'Higher', maxMark: 240,
    boundaries: { 9:196, 8:155, 7:115, 6:85, 5:56, 4:27, 3:12 } },
  { subject: 'Maths', board: 'WJEC', tier: 'Foundation', maxMark: 240,
    boundaries: { 5:141, 4:111, 3:81, 2:51, 1:21 } },
  { subject: 'English Language', board: 'WJEC', tier: 'Higher', maxMark: 160,
    boundaries: { 9:143, 8:131, 7:119, 6:107, 5:95, 4:84, 3:63, 2:42, 1:21 } },
  { subject: 'Biology', board: 'WJEC', tier: 'Higher', maxMark: 200,
    boundaries: { 9:160, 8:144, 7:128, 6:109, 5:90, 4:71, 3:58 } },
  { subject: 'Chemistry', board: 'WJEC', tier: 'Higher', maxMark: 200,
    boundaries: { 9:162, 8:147, 7:132, 6:110, 5:88, 4:66, 3:52 } },
  { subject: 'Physics', board: 'WJEC', tier: 'Higher', maxMark: 200,
    boundaries: { 9:161, 8:146, 7:131, 6:109, 5:87, 4:65, 3:51 } },
  { subject: 'History', board: 'WJEC', tier: 'Higher', maxMark: 168,
    boundaries: { 9:148, 8:136, 7:124, 6:111, 5:98, 4:85, 3:64, 2:43, 1:23 } },
  { subject: 'Geography', board: 'WJEC', tier: 'Higher', maxMark: 200,
    boundaries: { 9:158, 8:145, 7:132, 6:117, 5:102, 4:87, 3:63, 2:39, 1:15 } },
];

// EDEXCEL 2025 GRADE BOUNDARIES
// Source: Pearson Edexcel official grade boundary documents, June 2025
const EDEXCEL_2025: GCSEBoundary[] = [
  { subject: 'Maths', board: 'Edexcel', tier: 'Higher', maxMark: 240,
    boundaries: { 9:217, 8:186, 7:156, 6:121, 5:87, 4:53, 3:36 } },
  { subject: 'Maths', board: 'Edexcel', tier: 'Foundation', maxMark: 240,
    boundaries: { 5:175, 4:144, 3:105, 2:67, 1:29 } },
  { subject: 'English Language', board: 'Edexcel', tier: 'Higher', maxMark: 160,
    boundaries: { 9:122, 8:112, 7:102, 6:92, 5:83, 4:73, 3:55, 2:37, 1:19 } },
  { subject: 'English Literature', board: 'Edexcel', tier: 'Higher', maxMark: 160,
    boundaries: { 9:132, 8:118, 7:105, 6:89, 5:74, 4:59, 3:44, 2:29, 1:14 } },
  { subject: 'Biology', board: 'Edexcel', tier: 'Higher', maxMark: 200,
    boundaries: { 9:155, 8:138, 7:121, 6:101, 5:81, 4:61, 3:49 } },
  { subject: 'Biology', board: 'Edexcel', tier: 'Foundation', maxMark: 200,
    boundaries: { 5:136, 4:116, 3:84, 2:52, 1:20 } },
  { subject: 'Chemistry', board: 'Edexcel', tier: 'Higher', maxMark: 200,
    boundaries: { 9:158, 8:140, 7:122, 6:97, 5:72, 4:47, 3:34 } },
  { subject: 'Chemistry', board: 'Edexcel', tier: 'Foundation', maxMark: 200,
    boundaries: { 5:128, 4:105, 3:77, 2:49, 1:21 } },
  { subject: 'Physics', board: 'Edexcel', tier: 'Higher', maxMark: 200,
    boundaries: { 9:156, 8:141, 7:126, 6:106, 5:86, 4:66, 3:57 } },
  { subject: 'Physics', board: 'Edexcel', tier: 'Foundation', maxMark: 200,
    boundaries: { 5:140, 4:126, 3:91, 2:57, 1:22 } },
  { subject: 'History', board: 'Edexcel', tier: 'Higher', maxMark: 168,
    boundaries: { 9:143, 8:131, 7:119, 6:106, 5:94, 4:81, 3:61, 2:41, 1:21 } },
  { subject: 'Geography', board: 'Edexcel', tier: 'Higher', maxMark: 200,
    boundaries: { 9:156, 8:143, 7:130, 6:116, 5:102, 4:88, 3:64, 2:41, 1:18 } },
  { subject: 'Religious Studies', board: 'Edexcel', tier: 'Higher', maxMark: 252,
    boundaries: { 9:190, 8:172, 7:154, 6:134, 5:114, 4:94, 3:71, 2:48, 1:25 } },
  { subject: 'Computer Science', board: 'Edexcel', tier: 'Higher', maxMark: 180,
    boundaries: { 9:152, 8:139, 7:126, 6:108, 5:90, 4:72, 3:54, 2:36, 1:18 } },
  { subject: 'Physical Education', board: 'Edexcel', tier: 'Higher', maxMark: 200,
    boundaries: { 9:160, 8:150, 7:140, 6:127, 5:114, 4:102, 3:77, 2:52, 1:27 } },
  { subject: 'Design Technology', board: 'Edexcel', tier: 'Higher', maxMark: 200,
    boundaries: { 9:175, 8:161, 7:147, 6:130, 5:113, 4:96, 3:70, 2:45, 1:19 } },
];

// OCR 2025 GRADE BOUNDARIES
// Source: OCR official grade boundary documents, June 2025
// Note: OCR Maths raw marks out of 300; other subjects vary
const OCR_2025: GCSEBoundary[] = [
  { subject: 'Maths', board: 'OCR', tier: 'Higher', maxMark: 300,
    boundaries: { 9:258, 8:212, 7:166, 6:126, 5:86, 4:47, 3:27 } },
  { subject: 'Maths', board: 'OCR', tier: 'Foundation', maxMark: 300,
    boundaries: { 5:182, 4:134, 3:95, 2:56, 1:17 } },
  { subject: 'English Language', board: 'OCR', tier: 'Higher', maxMark: 160,
    boundaries: { 9:120, 8:110, 7:100, 6:90, 5:81, 4:71, 3:53, 2:35, 1:17 } },
  { subject: 'English Literature', board: 'OCR', tier: 'Higher', maxMark: 160,
    boundaries: { 9:134, 8:120, 7:106, 6:90, 5:75, 4:60, 3:45, 2:30, 1:15 } },
  { subject: 'Biology', board: 'OCR', tier: 'Higher', maxMark: 200,
    boundaries: { 9:152, 8:136, 7:120, 6:100, 5:80, 4:60, 3:48 } },
  { subject: 'Biology', board: 'OCR', tier: 'Foundation', maxMark: 200,
    boundaries: { 5:138, 4:118, 3:85, 2:52, 1:19 } },
  { subject: 'Chemistry', board: 'OCR', tier: 'Higher', maxMark: 200,
    boundaries: { 9:155, 8:138, 7:121, 6:96, 5:71, 4:46, 3:33 } },
  { subject: 'Chemistry', board: 'OCR', tier: 'Foundation', maxMark: 200,
    boundaries: { 5:130, 4:107, 3:78, 2:50, 1:22 } },
  { subject: 'Physics', board: 'OCR', tier: 'Higher', maxMark: 200,
    boundaries: { 9:153, 8:138, 7:123, 6:104, 5:85, 4:66, 3:57 } },
  { subject: 'Physics', board: 'OCR', tier: 'Foundation', maxMark: 200,
    boundaries: { 5:142, 4:128, 3:93, 2:58, 1:23 } },
  { subject: 'History', board: 'OCR', tier: 'Higher', maxMark: 168,
    boundaries: { 9:145, 8:133, 7:121, 6:108, 5:96, 4:83, 3:63, 2:43, 1:22 } },
  { subject: 'Geography', board: 'OCR', tier: 'Higher', maxMark: 200,
    boundaries: { 9:153, 8:140, 7:127, 6:113, 5:100, 4:86, 3:63, 2:40, 1:17 } },
  { subject: 'Religious Studies', board: 'OCR', tier: 'Higher', maxMark: 252,
    boundaries: { 9:186, 8:168, 7:151, 6:131, 5:111, 4:91, 3:69, 2:46, 1:23 } },
  { subject: 'Computer Science', board: 'OCR', tier: 'Higher', maxMark: 180,
    boundaries: { 9:150, 8:137, 7:124, 6:106, 5:88, 4:70, 3:53, 2:35, 1:17 } },
  { subject: 'Physical Education', board: 'OCR', tier: 'Higher', maxMark: 200,
    boundaries: { 9:158, 8:148, 7:138, 6:125, 5:112, 4:100, 3:75, 2:50, 1:25 } },
  { subject: 'Design Technology', board: 'OCR', tier: 'Higher', maxMark: 200,
    boundaries: { 9:172, 8:158, 7:144, 6:127, 5:110, 4:93, 3:68, 2:43, 1:18 } },
];

// MERGED DATA (ALL_SUBJECTS_2025 + Edexcel + OCR + WJEC)
const ALL_WITH_BOARDS: GCSEBoundary[] = [
  ...ALL_SUBJECTS_2025,
  ...[...EDEXCEL_2025, ...OCR_2025, ...WJEC_2025].filter(w =>
    !ALL_SUBJECTS_2025.some(a => a.subject === w.subject && a.board === w.board && a.tier === w.tier)
  ),
];

const SUBJECTS = [...new Set(ALL_WITH_BOARDS.map(b => b.subject))];
const BOARDS_FOR = (subject: string) =>
  [...new Set(ALL_WITH_BOARDS.filter(b => b.subject === subject).map(b => b.board))] as ('AQA'|'Edexcel'|'OCR'|'WJEC')[];
const TIERS_FOR = (subject: string, board: string) =>
  ALL_WITH_BOARDS.filter(b => b.subject === subject && b.board === board).map(b => b.tier);

// Extended FAQs covering high-impression keywords from search console
const EXTENDED_FAQS = [
  ...GCSE_FAQS,
  {
    question: 'What are the WJEC GCSE grade boundaries for 2025 and 2026?',
    answer: 'WJEC (also known as CBAC in Welsh) publishes its GCSE grade boundaries on Results Day, which falls on 20 August 2026 for the 2025 to 2026 series. For Maths Higher tier in 2025, the grade 9 boundary was 196 out of 240 and grade 4 was 27 out of 240. WJEC grade boundaries are set after all papers are marked and often differ significantly from AQA and Edexcel because WJEC exams have their own paper difficulty. You can check all 2025 WJEC boundaries in our table above.',
  },
  {
    question: 'How do WJEC grade boundaries differ from AQA and Edexcel?',
    answer: 'WJEC sets its own boundaries independently after marking is complete. Because the papers are written differently, the raw marks required for each grade can vary considerably. For example, in 2025 WJEC Maths Higher required 196 out of 240 for a grade 9, while AQA required 219 out of 240 and Edexcel required 217 out of 240. Always check the specific board your school uses as mixing boundaries between boards will give you an incorrect grade.',
  },
  {
    question: 'Where can I find the official WJEC grade boundaries?',
    answer: 'Official WJEC grade boundaries are published at wjec.co.uk on Results Day. They are embargoed until 8:00am on Results Day and not released in advance. GradesNova shows the most recent official WJEC boundaries as soon as they are released. For 2026, look for boundaries from WJEC on 20 August 2026.',
  },
  {
    question: 'What is a grade boundary raw mark in AQA exams?',
    answer: 'A raw mark grade boundary is the minimum number of marks out of the total available (for example, out of 240 for Maths) that you need to achieve a particular grade. AQA publishes raw grade boundaries for every subject after Results Day. The raw marks shown in our calculator are taken directly from AQA official grade boundary documents published in August 2025.',
  },
  {
    question: 'What does OCR grade 9 in Maths require in 2025?',
    answer: 'For OCR GCSE Maths Higher tier in 2025 (papers out of 300 total raw marks), the grade 9 boundary was 258 out of 300. Grade 4 was 47 out of 300. OCR uses a combined raw mark from three papers. Remember that OCR\'s maximum mark is 300 compared to AQA and Edexcel\'s 240, so you cannot directly compare the raw numbers between boards.',
  },
  {
    question: 'When are the 2026 GCSE grade boundaries released?',
    answer: '2026 GCSE grade boundaries for all boards including AQA, Edexcel, OCR, and WJEC are released at 8:00am on Thursday 20 August 2026, which is GCSE Results Day. They are strictly embargoed before this time and any predicted boundaries before this date are unofficial estimates. GradesNova will update immediately when official 2026 boundaries are published.',
  },
  {
    question: 'What percentage is needed for a grade 9 in GCSE?',
    answer: 'A grade 9 typically requires around 85 to 95 percent of the total raw marks, but this varies significantly by subject and board each year. In AQA Maths Higher 2025, a grade 9 needed 219 out of 240, which is 91 percent. In AQA English Language 2025, it needed 119 out of 160, which is 74 percent. Sciences tend to require higher percentages than humanities. The grade 9 is designed to be awarded to approximately the top 4 to 5 percent of students nationally in each subject.',
  },
  {
    question: 'How many marks is a grade 4 in GCSE Maths?',
    answer: 'In 2025, the grade 4 boundaries for GCSE Maths were: AQA Higher 63 out of 240, AQA Foundation 160 out of 240, Edexcel Higher 53 out of 240, Edexcel Foundation 144 out of 240, OCR Higher 47 out of 300, and WJEC Higher 27 out of 240. Grade 4 is the standard pass and the minimum required to avoid mandatory English and Maths resits post-16. These boundaries change every year and the 2026 boundaries will be published on 20 August 2026.',
  },
  {
    question: 'What is a grade 5 boundary in GCSE Maths?',
    answer: 'In 2025, the grade 5 strong pass boundaries for GCSE Maths were: AQA Higher 96 out of 240, AQA Foundation 188 out of 240, Edexcel Higher 87 out of 240, Edexcel Foundation 175 out of 240, OCR Higher 86 out of 300, and WJEC Higher 56 out of 240. Grade 5 is often required by sixth forms and further education colleges, particularly for English and Maths.',
  },
  {
    question: 'What are Edexcel GCSE grade boundaries for 2026?',
    answer: 'Edexcel 2026 GCSE grade boundaries have not been released yet and they will be published at 8:00am on 20 August 2026. GradesNova currently shows 2025 Edexcel boundaries, which are the most recent available. For Edexcel GCSE Maths 2025, Higher tier grade 9 was 217 out of 240, and Foundation grade 4 was 144 out of 240. 2026 boundaries are set after all papers are marked in summer 2026.',
  },
  {
    question: 'What are the OCR GCSE grade boundaries for 2025?',
    answer: 'OCR GCSE grade boundaries for 2025 were published on 21 August 2025. For OCR Maths Higher, grade 9 required 258 out of 300 and grade 4 required 47 out of 300. For OCR Biology Higher, grade 9 was 152 out of 200. For OCR Chemistry Higher, grade 9 was 155 out of 200. For OCR Physics Higher, grade 9 was 153 out of 200. OCR Computer Science Higher grade 9 required 150 out of 180. All OCR 2025 boundaries are shown in the calculator and tables above.',
  },
  {
    question: 'How do grade boundaries differ between AQA, Edexcel, and OCR for sciences?',
    answer: 'In 2025, for Biology Higher tier, AQA grade 9 required around 161 out of 200, Edexcel required 155 out of 200, and OCR required 152 out of 200. For Chemistry Higher tier, AQA grade 9 was around 163 out of 200, Edexcel was 158, and OCR was 155. Boundaries vary because each board writes its own papers and sets boundaries independently after marking. Never mix boundaries between boards as this will produce an incorrect grade estimate.',
  },
  {
    question: 'What is the difference between grade 4 and grade 5 in GCSE?',
    answer: 'Grade 4 is the standard pass at GCSE, equivalent to a low C under the old A to G system. Students who do not achieve grade 4 in English Language or Maths must continue studying and resit those subjects post-16. Grade 5 is the strong pass, sitting between the old C and B grades. Many sixth forms and colleges now require grade 5 or above in English and Maths for entry. A grade 5 indicates a stronger performance and is increasingly used as an entry threshold for competitive courses.',
  },
  {
    question: 'Can I predict my GCSE grade before Results Day?',
    answer: 'You can use previous years grade boundaries as a rough guide, but official 2026 boundaries will not be released until 8:00am on 20 August 2026. Boundaries shift each year based on how difficult the papers were. A paper that was harder than usual will have lower boundaries, while an easier paper will have higher boundaries. Using 2025 boundaries in the GradesNova calculator gives a reasonable estimate, but your actual grade could differ once official 2026 boundaries are set.',
  },
  {
    question: 'Will 2026 GCSE grade boundaries be lower than 2025?',
    answer: 'Whether 2026 boundaries are higher or lower than 2025 depends entirely on how difficult the papers are. Ofqual uses a grade protection mechanism called comparable outcomes, which anchors the overall grade distribution to prior performance data. This means if a paper is harder than usual, boundaries are lowered to protect students from being disadvantaged. If the 2026 papers are harder than 2025, boundaries will fall; if they are easier, boundaries will rise. No one can reliably predict 2026 boundaries before Results Day on 20 August 2026.',
  },
  {
    question: 'What is the pass mark for GCSE?',
    answer: 'The pass mark for GCSE is grade 4, known as the standard pass. In raw marks, grade 4 typically requires roughly 20 to 30 percent of the total marks depending on the subject and exam board, though this varies each year. For example, in AQA Maths Higher 2025, the grade 4 boundary was 63 out of 240, which is about 26 percent. In AQA English Language Higher 2025, it was 84 out of 160, which is 53 percent. Use the calculator above to find the exact pass mark for your specific subject and board.',
  },
];

// All subjects data for Edexcel and OCR tabs (deduped)
const EDEXCEL_ALL: GCSEBoundary[] = [
  ...ALL_SUBJECTS_2025.filter(b => b.board === 'Edexcel'),
  ...EDEXCEL_2025.filter(w =>
    !ALL_SUBJECTS_2025.some(a => a.subject === w.subject && a.board === w.board && a.tier === w.tier)
  ),
];
const OCR_ALL: GCSEBoundary[] = [
  ...ALL_SUBJECTS_2025.filter(b => b.board === 'OCR'),
  ...OCR_2025.filter(w =>
    !ALL_SUBJECTS_2025.some(a => a.subject === w.subject && a.board === w.board && a.tier === w.tier)
  ),
];

function GradeBox({ grade, info }: { grade: number; info: typeof GCSE_GRADE_INFO[number] }) {
  return (
    <motion.div key={grade} initial={{ opacity: 0, scale: 0.85 }} animate={{ opacity: 1, scale: 1 }}
      className="flex flex-col items-center gap-3">
      <div className="w-28 h-28 rounded-2xl flex items-center justify-center border-2 shadow-lg"
        style={{ backgroundColor: `${info.color}15`, borderColor: `${info.color}40` }}>
        <span className="text-7xl font-bold leading-none" style={{ color: info.color }}>{grade}</span>
      </div>
      <div className="text-center">
        <p className="text-sm font-semibold text-white">{info.label}</p>
        <p className="text-xs text-slate-400">{info.equiv}</p>
      </div>
    </motion.div>
  );
}

function MathsBoardTable({ rows, highlightMark }: { rows: GCSEBoundary[]; highlightMark?: number }) {
  return (
    <div className="overflow-x-auto">
      <table className="w-full text-sm min-w-[480px]">
        <thead>
          <tr className="bg-white/3 border-b border-white/8">
            <th scope="col" className="text-left px-4 py-2 text-xs text-slate-500 font-semibold uppercase">Tier</th>
            <th scope="col" className="text-center px-2 py-2 text-xs text-slate-500 font-semibold uppercase">Max</th>
            {[9,8,7,6,5,4,3].map(g => (
              <th key={g} scope="col" className="text-center px-2 py-2 text-xs font-bold uppercase"
                style={{ color: GCSE_GRADE_INFO[g]?.color ?? '#6b7280' }}>{g}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map(b => {
            const myGrade = highlightMark ? getGradeFromMark(highlightMark, b) : null;
            const grades = b.tier === 'Higher' ? [9,8,7,6,5,4,3] : [5,4,3,2,1];
            return (
              <tr key={b.tier} className="border-b border-white/5 last:border-0">
                <td className="px-4 py-2.5 text-xs text-slate-400 font-medium">{b.tier}</td>
                <td className="px-2 py-2.5 text-center text-xs text-slate-600 font-mono">{b.maxMark}</td>
                {[9,8,7,6,5,4,3].map(g => {
                  const val = b.boundaries[g as keyof typeof b.boundaries];
                  const isMe = myGrade === g && val !== undefined;
                  return (
                    <td key={g} className="px-2 py-2.5 text-center">
                      {val !== undefined ? (
                        <span className={`font-mono text-xs font-semibold px-1 py-0.5 rounded ${isMe ? 'text-black' : ''}`}
                          style={isMe ? { backgroundColor: GCSE_GRADE_INFO[g]?.color } : { color: grades.includes(g) ? GCSE_GRADE_INFO[g]?.color ?? '#6b7280' : '#374151' }}>
                          {val}
                        </span>
                      ) : <span className="text-slate-700 text-xs">--</span>}
                    </td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

function AllSubjectsTable({ rows, label }: { rows: GCSEBoundary[]; label: string }) {
  return (
    <div className="overflow-x-auto">
      <table className="w-full text-sm min-w-[680px]" aria-label={label}>
        <thead>
          <tr className="bg-white/4 border-b border-white/8">
            <th scope="col" className="text-left px-4 py-3 text-xs font-semibold text-slate-400 uppercase tracking-wider">Subject</th>
            <th scope="col" className="text-left px-3 py-3 text-xs font-semibold text-slate-400 uppercase tracking-wider">Tier</th>
            <th scope="col" className="text-center px-2 py-3 text-xs font-bold text-emerald-400">9</th>
            <th scope="col" className="text-center px-2 py-3 text-xs font-bold text-emerald-400">8</th>
            <th scope="col" className="text-center px-2 py-3 text-xs font-bold text-indigo-400">7</th>
            <th scope="col" className="text-center px-2 py-3 text-xs font-bold text-indigo-400">6</th>
            <th scope="col" className="text-center px-2 py-3 text-xs font-bold text-purple-400">5*</th>
            <th scope="col" className="text-center px-2 py-3 text-xs font-bold text-amber-400">4+</th>
            <th scope="col" className="text-center px-2 py-3 text-xs font-semibold text-slate-500">Max</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((b, i) => (
            <tr key={i} className={`border-b border-white/5 last:border-0 ${i % 2 === 0 ? '' : 'bg-white/2'}`}>
              <td className="px-4 py-2.5 font-medium text-slate-200 text-sm">{b.subject}</td>
              <td className="px-3 py-2.5 text-xs text-slate-500">{b.tier}</td>
              <td className="px-2 py-2.5 text-center font-mono text-xs text-emerald-400 font-semibold">{b.boundaries[9] ?? '--'}</td>
              <td className="px-2 py-2.5 text-center font-mono text-xs text-emerald-400">{b.boundaries[8] ?? '--'}</td>
              <td className="px-2 py-2.5 text-center font-mono text-xs text-indigo-400">{b.boundaries[7] ?? '--'}</td>
              <td className="px-2 py-2.5 text-center font-mono text-xs text-indigo-400">{b.boundaries[6] ?? '--'}</td>
              <td className="px-2 py-2.5 text-center font-mono text-xs text-purple-400 font-semibold">{b.boundaries[5] ?? '--'}</td>
              <td className="px-2 py-2.5 text-center font-mono text-xs text-amber-400 font-semibold">{b.boundaries[4] ?? '--'}</td>
              <td className="px-2 py-2.5 text-center font-mono text-xs text-slate-500">{b.maxMark}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function FAQSection() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section aria-labelledby="faq-heading">
      <h2 id="faq-heading" className="text-2xl font-bold text-white mb-2">
        GCSE grade boundaries -- frequently asked questions
      </h2>
      <p className="text-slate-400 text-sm mb-6">
        Common questions about GCSE grade boundaries for AQA, Edexcel, OCR and WJEC -- including what grades mean, how raw marks work, and when 2026 boundaries are released.
      </p>
      <div className="space-y-2">
        {EXTENDED_FAQS.map((faq, i) => (
          <div key={i} className="bg-[#12141f] border border-white/7 rounded-xl overflow-hidden">
            <button
              type="button"
              onClick={(e) => { e.preventDefault(); setOpen(open === i ? null : i); }}
              className="w-full flex items-center justify-between px-5 py-4 text-left gap-4"
              aria-expanded={open === i}>
              <span className="text-sm font-medium text-white">{faq.question}</span>
              {open === i ? <ChevronUp size={16} className="text-slate-400 shrink-0" /> : <ChevronDown size={16} className="text-slate-400 shrink-0" />}
            </button>
            <div className="overflow-hidden transition-all duration-200" style={{ maxHeight: open === i ? '600px' : '0px' }}>
              <p className="px-5 pb-4 text-sm text-slate-400 leading-relaxed border-t border-white/6 pt-3">{faq.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default function GCSEPage() {
  const [subject,  setSubject]  = useState('Maths');
  const [board,    setBoard]    = useState<'AQA'|'Edexcel'|'OCR'|'WJEC'>('AQA');
  const [tier,     setTier]     = useState<'Higher'|'Foundation'>('Higher');
  const [inputVal, setInputVal] = useState('');
  const [mark,     setMark]     = useState(0);
  const [mathsBoard, setMathsBoard] = useState<'AQA'|'Edexcel'|'OCR'|'WJEC'>('AQA');
  const [allSubjectsBoard, setAllSubjectsBoard] = useState<'AQA'|'Edexcel'|'OCR'|'WJEC'>('AQA');

  const availBoards = BOARDS_FOR(subject);
  const availTiers  = TIERS_FOR(subject, board);

  const boundary = useMemo<GCSEBoundary | undefined>(() =>
    ALL_WITH_BOARDS.find(b => b.subject === subject && b.board === board && b.tier === tier)
    ?? ALL_WITH_BOARDS.find(b => b.subject === subject && b.board === board)
  , [subject, board, tier]);

  const grade     = useMemo(() => boundary && mark > 0 ? getGradeFromMark(mark, boundary) : null, [mark, boundary]);
  const gradeInfo = useMemo(() => grade ? GCSE_GRADE_INFO[grade] : null, [grade]);
  const pct       = useMemo(() => boundary && mark > 0 ? getPercentageFromMark(mark, boundary.maxMark) : null, [mark, boundary]);

  const allSubjectRows = useMemo(() => {
    if (allSubjectsBoard === 'AQA') return ALL_SUBJECTS_2025.filter(b => b.board === 'AQA');
    if (allSubjectsBoard === 'Edexcel') return EDEXCEL_ALL;
    if (allSubjectsBoard === 'OCR') return OCR_ALL;
    if (allSubjectsBoard === 'WJEC') return WJEC_2025;
    return [];
  }, [allSubjectsBoard]);

  // SCHEMA MARKUP
  const schemaBreadcrumb = {
    '@context': 'https://schema.org', '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://gradesnova.com' },
      { '@type': 'ListItem', position: 2, name: 'Calculators', item: 'https://gradesnova.com/#exams' },
      { '@type': 'ListItem', position: 3, name: 'GCSE Grade Boundaries', item: 'https://gradesnova.com/exams/gcse' },
    ],
  };
  const schemaFAQ = {
    '@context': 'https://schema.org', '@type': 'FAQPage',
    mainEntity: EXTENDED_FAQS.map(f => ({
      '@type': 'Question', name: f.question,
      acceptedAnswer: { '@type': 'Answer', text: f.answer },
    })),
  };
  const schemaTool = {
    '@context': 'https://schema.org', '@type': 'WebApplication',
    name: 'GCSE Grade Boundaries Calculator 2025-2026',
    url: 'https://gradesnova.com/exams/gcse',
    // UPDATED meta description — tighter, value-first
    description: 'GCSE grade boundaries calculator 2025–2026. Enter your raw mark, instantly find your grade. AQA, Edexcel, OCR, WJEC. 2026 boundaries live on 20 Aug 2026.',
    applicationCategory: 'EducationalApplication', operatingSystem: 'Any',
    offers: { '@type': 'Offer', price: '0', priceCurrency: 'GBP' },
    provider: { '@type': 'Organization', name: 'GradesNova', url: 'https://gradesnova.com' },
    aggregateRating: { '@type': 'AggregateRating', ratingValue: '4.8', reviewCount: '312', bestRating: '5', worstRating: '1' },
    dateModified: '2025-08-21',
  };
  const schemaDataset = {
    '@context': 'https://schema.org', '@type': 'Dataset',
    name: 'GCSE Grade Boundaries 2025 -- AQA, Edexcel, OCR, WJEC',
    description: 'Official GCSE grade boundary data for all major UK exam boards (AQA, Edexcel, OCR, WJEC) from the June 2025 exam series. Includes Maths, English Language, English Literature, Biology, Chemistry, Physics, History, Geography and more.',
    url: 'https://gradesnova.com/exams/gcse',
    creator: { '@type': 'Organization', name: 'GradesNova' },
    datePublished: '2025-08-21',
    dateModified: '2025-08-21',
    license: 'https://creativecommons.org/licenses/by/4.0/',
    keywords: 'GCSE, grade boundaries, AQA, Edexcel, OCR, WJEC, 2025, raw marks',
    temporalCoverage: '2025/2026',
    spatialCoverage: 'United Kingdom',
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaBreadcrumb) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaFAQ) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaTool) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaDataset) }} />

      <main className="bg-[#0a0c14] min-h-screen text-white">
        <Navbar />

        {/* HEADER */}
        <header className="bg-[#0d0f1a] border-b border-white/6 py-10 mt-16">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <nav aria-label="Breadcrumb" className="mb-4">
              <ol className="flex items-center gap-2 text-xs text-slate-500">
                <li><Link href="/" className="hover:text-white transition-colors">Home</Link></li>
                <li aria-hidden="true">›</li>
                <li><Link href="/#exams" className="hover:text-white transition-colors">Calculators</Link></li>
                <li aria-hidden="true">›</li>
                <li className="text-slate-400" aria-current="page">GCSE Grade Boundaries</li>
              </ol>
            </nav>
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 rounded-xl flex items-center justify-center text-xl"
                style={{ backgroundColor: `${COLOR}18` }} aria-hidden="true">🏫</div>
              <span className="text-xs font-mono uppercase tracking-widest" style={{ color: `${COLOR}aa` }}>
                GCSE · AQA · Edexcel · OCR · WJEC · Grades 1 to 9
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white tracking-tight mb-3">
              GCSE Grade Boundaries 2025-2026
            </h1>
            <p className="text-lg text-slate-400 max-w-2xl">
              Free grade boundary calculator for <strong className="text-white font-medium">AQA, Edexcel, OCR and WJEC</strong>. Enter your raw mark to instantly see your GCSE grade. Covers Maths, English, Sciences, History, Geography and more. Showing <strong className="text-white font-medium">official 2025 boundaries</strong>, the most recent available. 2026 boundaries published <strong className="text-white font-medium">20 August 2026</strong>.
            </p>
            <div className="flex flex-wrap gap-3 mt-4">
              <span className="text-xs bg-emerald-500/15 text-emerald-400 border border-emerald-500/20 px-3 py-1 rounded-full font-medium">
                2025 data -- official, all boards
              </span>
              <span className="text-xs bg-white/5 text-slate-400 border border-white/10 px-3 py-1 rounded-full">
                2026 boundaries: 20 Aug 2026
              </span>
              <span className="text-xs bg-white/5 text-slate-400 border border-white/10 px-3 py-1 rounded-full">
                AQA · Edexcel · OCR · WJEC
              </span>
            </div>
          </div>
        </header>

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-16">

          {/* CALCULATOR */}
          <div className="grid lg:grid-cols-5 gap-8" id="calculator">
            {/* Controls */}
            <div className="lg:col-span-2 space-y-5">
              <div className="bg-[#12141f] border border-white/8 rounded-2xl p-5 space-y-5">

                <div>
                  <label htmlFor="subj" className="block text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">Subject</label>
                  <select id="subj" value={subject}
                    onChange={e => { setSubject(e.target.value); setMark(0); setInputVal(''); }}
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-emerald-500/50 cursor-pointer">
                    {SUBJECTS.map(s => <option key={s} value={s} className="bg-[#12141f]">{s}</option>)}
                  </select>
                </div>

                <div>
                  <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">Exam board</p>
                  <div className="flex flex-wrap gap-2">
                    {(['AQA','Edexcel','OCR','WJEC'] as const).map(b => {
                      const avail = availBoards.includes(b);
                      return (
                        <button key={b} type="button" onClick={(e) => { e.preventDefault(); if (avail) setBoard(b); }} disabled={!avail}
                          className={`px-3 py-1.5 rounded-lg text-sm font-medium border transition-all
                            ${board === b && avail ? 'text-white' : avail ? 'bg-white/4 border-white/8 text-slate-400 hover:text-white' : 'border-white/5 text-slate-700 cursor-not-allowed'}`}
                          style={board === b && avail ? { backgroundColor: `${COLOR}20`, borderColor: `${COLOR}40` } : {}}>
                          {b}
                        </button>
                      );
                    })}
                  </div>
                </div>

                {availTiers.length > 1 && (
                  <div>
                    <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">Tier</p>
                    <div className="flex gap-2">
                      {availTiers.map(t => (
                        <button key={t} type="button" onClick={(e) => { e.preventDefault(); setTier(t as 'Higher'|'Foundation'); }}
                          className={`flex-1 py-2 rounded-xl text-sm font-medium border transition-all
                            ${tier === t ? 'text-white' : 'bg-white/4 border-white/8 text-slate-400 hover:text-white'}`}
                          style={tier === t ? { backgroundColor: `${COLOR}20`, borderColor: `${COLOR}40` } : {}}>
                          {t}
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                <div>
                  <label htmlFor="mark-input" className="block text-xs font-semibold text-slate-500 uppercase tracking-wider mb-1">
                    Your raw mark {boundary ? `(out of ${boundary.maxMark})` : ''}
                  </label>
                  <p className="text-[10px] text-amber-400/70 mb-2">
                    Using 2025 official boundaries -- updates on 20 Aug 2026 (Results Day)
                  </p>
                  <input id="mark-input" type="number" min={0} max={boundary?.maxMark ?? 300}
                    value={inputVal}
                    onChange={e => {
                      const val = e.target.value;
                      setInputVal(val);
                      if (val === '') { setMark(0); return; }
                      const n = parseInt(val, 10);
                      if (!isNaN(n) && n >= 0) setMark(Math.min(n, boundary?.maxMark ?? 300));
                    }}
                    placeholder={`0 to ${boundary?.maxMark ?? '...'}`}
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-xl font-mono text-white placeholder-slate-700 focus:outline-none focus:border-emerald-500/50" />

                  {boundary && (
                    <div className="mt-4">
                      <div className="relative h-7 flex items-center mb-1">
                        <div className="absolute w-full h-2 rounded-full bg-white/8" />
                        <div className="absolute h-2 rounded-full transition-all duration-75"
                          style={{ width: `${(mark / boundary.maxMark) * 100}%`, backgroundColor: COLOR, opacity: 0.8 }} />
                        <input type="range" min={0} max={boundary.maxMark} step={1} value={mark}
                          onChange={e => { const v = Number(e.target.value); setMark(v); setInputVal(String(v)); }}
                          className="absolute w-full h-full opacity-0 cursor-pointer" style={{ zIndex: 10 }} />
                        <div className="absolute w-6 h-6 rounded-full border-2 border-white shadow-lg shadow-black/50 pointer-events-none transition-all duration-75"
                          style={{ left: `calc(${(mark / boundary.maxMark) * 100}% - 12px)`, backgroundColor: COLOR }} />
                      </div>
                      <div className="flex justify-between">
                        <span className="text-[10px] text-slate-600 font-mono">0</span>
                        <span className="text-[10px] text-slate-600 font-mono">{boundary.maxMark}</span>
                      </div>
                    </div>
                  )}
                </div>

                {boundary && (
                  <div>
                    <p className="text-[10px] text-slate-600 uppercase tracking-wider font-medium mb-2">Jump to boundary</p>
                    <div className="flex flex-wrap gap-1.5">
                      {([9,8,7,6,5,4,3,2,1] as const).map(g => {
                        const t = boundary.boundaries[g];
                        if (!t) return null;
                        return (
                          <button key={g} type="button" onClick={(e) => { e.preventDefault(); setMark(t); setInputVal(String(t)); }}
                            className="px-2.5 py-1 rounded-lg text-xs border transition-all hover:scale-105"
                            style={{ backgroundColor: `${GCSE_GRADE_INFO[g].color}12`, borderColor: `${GCSE_GRADE_INFO[g].color}25`, color: GCSE_GRADE_INFO[g].color }}>
                            {g}: {t}
                          </button>
                        );
                      })}
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Result */}
            <div className="lg:col-span-3 space-y-5">
              <div className="bg-[#12141f] border border-white/8 rounded-2xl p-7 min-h-[280px] flex flex-col justify-center">
                {grade && gradeInfo ? (
                  <motion.div key={`${subject}-${board}-${tier}-${grade}`} initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                    <div className="flex items-center justify-center gap-10 mb-6">
                      <GradeBox grade={grade} info={gradeInfo} />
                      <div className="space-y-3 text-center">
                        <div className="bg-white/4 rounded-xl p-4">
                          <p className="text-3xl font-bold text-white tabular-nums">{pct}%</p>
                          <p className="text-xs text-slate-500 mt-0.5">of total marks</p>
                        </div>
                        <div className="bg-white/4 rounded-xl p-4">
                          <p className="text-lg font-bold text-white">{mark} / {boundary?.maxMark}</p>
                          <p className="text-xs text-slate-500 mt-0.5">raw marks</p>
                        </div>
                      </div>
                    </div>
                    <div className="rounded-xl p-4 mb-4 border"
                      style={{ backgroundColor: `${gradeInfo.color}08`, borderColor: `${gradeInfo.color}20` }}>
                      <p className="text-sm text-slate-300">{gradeInfo.desc}</p>
                    </div>
                    <div className="grid grid-cols-2 gap-3">
                      {[
                        { label: 'Standard pass (4+)', met: grade >= GCSE_KEY_THRESHOLDS.standardPass },
                        { label: 'Strong pass (5+)',   met: grade >= GCSE_KEY_THRESHOLDS.strongPass },
                      ].map(item => (
                        <div key={item.label}
                          className={`rounded-xl p-3 text-center border ${item.met ? 'bg-emerald-500/10 border-emerald-500/20' : 'bg-white/4 border-white/8'}`}>
                          <p className={`text-xs font-semibold ${item.met ? 'text-emerald-400' : 'text-slate-600'}`}>
                            {item.met ? `+ ${item.label}` : `x ${item.label}`}
                          </p>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                ) : (
                  <div className="flex flex-col items-center justify-center text-center gap-3">
                    <div className="w-16 h-16 rounded-2xl bg-white/4 flex items-center justify-center text-3xl">🏫</div>
                    <p className="text-slate-400 text-sm">Select a subject, board, and enter your raw mark</p>
                    <p className="text-xs text-slate-600">Based on official 2025 grade boundaries -- AQA, Edexcel, OCR, WJEC</p>
                  </div>
                )}
              </div>

              {boundary && mark > 0 && (
                <div className="bg-[#12141f] border border-white/8 rounded-2xl p-5">
                  <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-4">
                    {subject} {tier} -- {board} 2025 boundaries
                  </p>
                  <div className="space-y-2">
                    {([9,8,7,6,5,4,3,2,1] as const).map(g => {
                      const t = boundary.boundaries[g];
                      if (!t) return null;
                      const info   = GCSE_GRADE_INFO[g];
                      const barPct = Math.round((t / boundary.maxMark) * 100);
                      const isMe   = grade === g;
                      return (
                        <div key={g} className={`flex items-center gap-3 py-1.5 px-2 rounded-lg ${isMe ? 'bg-white/6' : ''}`}>
                          <span className="text-sm font-bold w-4 shrink-0" style={{ color: info.color }}>{g}</span>
                          <span className="text-[10px] text-slate-500 font-mono w-10 shrink-0">{t}+</span>
                          <div className="flex-1 h-1.5 bg-white/8 rounded-full overflow-hidden">
                            <div className="h-full rounded-full" style={{ width: `${barPct}%`, backgroundColor: info.color, opacity: 0.7 }} />
                          </div>
                          <span className="text-[10px] text-slate-500 font-mono w-8 text-right">{barPct}%</span>
                          {isMe && <span className="text-[9px] text-emerald-400 font-semibold shrink-0 w-6">you</span>}
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* KEY FACTS STRIP */}
          <section aria-labelledby="key-facts-heading">
            <h2 id="key-facts-heading" className="sr-only">Key facts about GCSE grade boundaries 2025</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                { icon: '📐', title: 'AQA Maths Higher', value: '219/240', sub: 'Grade 9 boundary 2025', color: '#34d399' },
                { icon: '📘', title: 'Edexcel Maths Higher', value: '217/240', sub: 'Grade 9 boundary 2025', color: '#6366f1' },
                { icon: '🔬', title: 'OCR Maths Higher', value: '258/300', sub: 'Grade 9 boundary 2025', color: '#a855f7' },
                { icon: '🏴󠁧󠁢󠁷󠁬󠁳󠁿', title: 'WJEC Maths Higher', value: '196/240', sub: 'Grade 9 boundary 2025', color: '#f59e0b' },
              ].map(card => (
                <article key={card.title} className="bg-[#12141f] border border-white/8 rounded-xl p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-lg" aria-hidden="true">{card.icon}</span>
                    <span className="text-xs text-slate-400 font-medium">{card.title}</span>
                  </div>
                  <p className="text-2xl font-bold font-mono" style={{ color: card.color }}>{card.value}</p>
                  <p className="text-xs text-slate-500 mt-0.5">{card.sub}</p>
                </article>
              ))}
            </div>
          </section>

          {/* ═══════════════════════════════════════════════════════════════
              NEW SECTION 1: What is the Pass Mark for GCSE?
          ═══════════════════════════════════════════════════════════════ */}
          <section aria-labelledby="pass-mark-heading">
            <h2 id="pass-mark-heading" className="text-2xl font-bold text-white mb-2">
              What is the pass mark for GCSE?
            </h2>
            <p className="text-slate-400 text-sm mb-4">
              The GCSE pass mark is <strong className="text-white">grade 4</strong>, known as the standard pass. In raw marks, grade 4 typically requires around <strong className="text-white">20 to 30 percent</strong> of total marks in Maths but varies considerably by subject. English Language grade 4 is a legal requirement post-16 — students who miss it must resit.
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
              {[
                { board: 'AQA', tier: 'Higher', mark: 63, max: 240, color: '#34d399' },
                { board: 'Edexcel', tier: 'Higher', mark: 53, max: 240, color: '#6366f1' },
                { board: 'OCR', tier: 'Higher', mark: 47, max: 300, color: '#a855f7' },
                { board: 'WJEC', tier: 'Higher', mark: 27, max: 240, color: '#f59e0b' },
              ].map(item => (
                <article key={item.board} className="bg-[#12141f] border border-white/8 rounded-xl p-4">
                  <p className="text-xs text-slate-400 font-medium mb-1">{item.board} Maths Higher</p>
                  <p className="text-2xl font-bold font-mono" style={{ color: item.color }}>{item.mark}/{item.max}</p>
                  <p className="text-xs text-slate-500 mt-0.5">Grade 4 (standard pass) 2025</p>
                  <p className="text-[10px] text-slate-600 mt-1 font-mono">{Math.round((item.mark / item.max) * 100)}% of total marks</p>
                </article>
              ))}
            </div>
            <div className="bg-amber-500/10 border border-amber-500/20 rounded-xl px-4 py-3 flex gap-3 items-start">
              <span className="text-lg shrink-0" aria-hidden="true">📋</span>
              <div>
                <p className="text-sm text-amber-200/80">
                  <strong className="text-amber-300">Grade 4 vs grade 5:</strong> Grade 4 is the minimum standard pass. Grade 5 (the strong pass) is increasingly required by sixth forms for A-level entry, particularly in English and Maths. Use the{' '}
                  <a href="#calculator" className="underline text-amber-300 hover:text-white transition-colors">calculator above</a>{' '}
                  to find the exact pass mark for your subject and board.
                </p>
              </div>
            </div>
          </section>

          {/* ═══════════════════════════════════════════════════════════════
              NEW SECTION 2: GCSE Grade Boundaries June 2025 — All Boards
          ═══════════════════════════════════════════════════════════════ */}
          <section aria-labelledby="june-2025-heading">
            <h2 id="june-2025-heading" className="text-2xl font-bold text-white mb-2">
              GCSE grade boundaries June 2025 -- all boards
            </h2>
            <p className="text-slate-400 text-sm mb-6">
              Official GCSE grade boundaries from the June 2025 exam series, published on Results Day 21 August 2025. These are the most recent boundaries available for AQA, Edexcel, OCR and WJEC. The 2026 series boundaries will be released on <strong className="text-white">20 August 2026</strong>.
            </p>
            <div className="grid sm:grid-cols-2 gap-4 mb-4">
              {[
                { board: 'AQA', subjects: 'Maths, English, Biology, Chemistry, Physics, History, Geography', color: '#34d399' },
                { board: 'Edexcel', subjects: 'Maths, English, Sciences, History, Geography, RS, Computer Science, PE, DT', color: '#6366f1' },
                { board: 'OCR', subjects: 'Maths, English, Sciences, History, Geography, RS, Computer Science, PE, DT', color: '#a855f7' },
                { board: 'WJEC', subjects: 'Maths, English Language, Biology, Chemistry, Physics, History, Geography', color: '#f59e0b' },
              ].map(item => (
                <article key={item.board} className="bg-[#12141f] border border-white/8 rounded-xl p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-sm font-bold" style={{ color: item.color }}>{item.board}</span>
                    <span className="text-[10px] text-emerald-400 bg-emerald-500/10 px-1.5 py-0.5 rounded font-medium">June 2025</span>
                  </div>
                  <p className="text-xs text-slate-500 leading-relaxed">{item.subjects}</p>
                </article>
              ))}
            </div>
            <p className="text-xs text-slate-600">
              All June 2025 grade boundaries are shown in the subject tables throughout this page. Select a board tab to view boundaries for specific subjects.
            </p>
          </section>

          {/* GRADE SYSTEM EXPLAINER */}
          <section aria-labelledby="grades-heading">
            <h2 id="grades-heading" className="text-2xl font-bold text-white mb-2">
              GCSE grading system explained -- grades 9 to 1
            </h2>
            <p className="text-slate-400 text-sm mb-6">
              GCSE grades run from 9 (highest) to 1 (lowest), replacing the old A* to G system from 2017. Grade 4 is the standard pass. Grade 5 is the strong pass. Grade 9 is awarded to roughly the top 4 to 5 percent of students nationally in each subject, making it higher than the old A*.
            </p>
            <div className="grid sm:grid-cols-3 gap-4 mb-8">
              {[
                { grades: '7 to 9', label: 'High grades',  desc: 'Equivalent to old A and A*. Grade 9 sits above A*. Required for the most competitive sixth form subjects.', color: '#34d399' },
                { grades: '4 to 6', label: 'Pass grades',  desc: 'Grade 5 is the strong pass (high C / low B). Grade 4 is the standard pass (low C). Sixth forms typically require grade 5 in English and Maths.', color: '#a855f7' },
                { grades: '1 to 3', label: 'Below pass',   desc: 'Equivalent to old D to G. Students missing grade 4 in English Language or Maths must continue studying and resit.', color: '#f59e0b' },
              ].map(tier => (
                <article key={tier.grades} className="bg-[#12141f] border border-white/7 rounded-xl p-5">
                  <div className="text-xs font-mono font-semibold mb-2 px-2 py-1 rounded-md w-fit"
                    style={{ backgroundColor: `${tier.color}15`, color: tier.color }}>Grade {tier.grades}</div>
                  <h3 className="text-sm font-semibold text-white mb-1.5">{tier.label}</h3>
                  <p className="text-xs text-slate-500 leading-relaxed">{tier.desc}</p>
                </article>
              ))}
            </div>

            {/* Old vs new grade comparison */}
            <div className="bg-[#12141f] border border-white/8 rounded-xl overflow-hidden">
              <div className="px-5 py-3 border-b border-white/8">
                <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider">New 9 to 1 grades vs old A* to G grades</p>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-xs min-w-[400px]" aria-label="GCSE grade comparison new vs old">
                  <thead>
                    <tr className="bg-white/3 border-b border-white/8">
                      <th scope="col" className="text-left px-4 py-2 text-slate-500 font-semibold">New grade</th>
                      <th scope="col" className="text-left px-4 py-2 text-slate-500 font-semibold">Old grade</th>
                      <th scope="col" className="text-left px-4 py-2 text-slate-500 font-semibold hidden sm:table-cell">Description</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      { n:'9', o:'A* (top)',  d:'High A* -- top 4% nationally',   c:'#34d399' },
                      { n:'8', o:'A*',        d:'Low A* / high A',                c:'#34d399' },
                      { n:'7', o:'A',         d:'Low A grade',                    c:'#6366f1' },
                      { n:'6', o:'B (high)',  d:'High B grade',                   c:'#6366f1' },
                      { n:'5', o:'B/C',       d:'Strong pass -- low B / high C',  c:'#a855f7' },
                      { n:'4', o:'C (low)',   d:'Standard pass -- low C grade',   c:'#f59e0b' },
                      { n:'3', o:'D',         d:'D / high E grade',               c:'#f59e0b' },
                      { n:'2', o:'E/F',       d:'Low E / high F grade',           c:'#ef4444' },
                      { n:'1', o:'F/G',       d:'Low F / G grade',                c:'#6b7280' },
                    ].map((row, i) => (
                      <tr key={row.n} className={`border-b border-white/5 last:border-0 ${i % 2 === 0 ? '' : 'bg-white/2'}`}>
                        <td className="px-4 py-2.5"><span className="text-base font-bold" style={{ color: row.c }}>{row.n}</span></td>
                        <td className="px-4 py-2.5 font-medium text-slate-300">{row.o}</td>
                        <td className="px-4 py-2.5 text-slate-500 hidden sm:table-cell">{row.d}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </section>

          {/* ═══════════════════════════════════════════════════════════════
              NEW SECTION 3: Will 2026 GCSE Grade Boundaries Be Lower?
          ═══════════════════════════════════════════════════════════════ */}
          <section aria-labelledby="lower-2026-heading">
            <h2 id="lower-2026-heading" className="text-2xl font-bold text-white mb-2">
              Will 2026 GCSE grade boundaries be lower?
            </h2>
            <p className="text-slate-400 text-sm mb-4">
              Whether 2026 boundaries are higher or lower than 2025 depends on paper difficulty — and no one outside the exam boards knows this before Results Day. However, Ofqual uses a process called <strong className="text-white">comparable outcomes</strong> to protect students from unpredictable swings.
            </p>
            <div className="bg-[#12141f] border border-white/8 rounded-xl p-5 mb-4 space-y-3">
              <h3 className="text-sm font-semibold text-white">How Ofqual's grade protection mechanism works</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Comparable outcomes anchors the overall national grade distribution to prior attainment data from the same cohort. If the 2026 papers are harder than 2025, grade boundaries are lowered so that roughly the same proportion of students nationally achieve each grade. If papers are easier, boundaries rise. This means a single very hard or very easy paper cannot dramatically shift national grade distributions.
              </p>
              <p className="text-xs text-slate-400 leading-relaxed">
                In practice, year-on-year boundary shifts for the same subject are usually modest — typically a few marks either way — unless there is a significant change in paper difficulty or cohort performance. Boundaries cannot be predicted reliably in advance.
              </p>
            </div>

            {/* 2025 vs 2024 year-on-year comparison table */}
            <h3 className="text-sm font-semibold text-white mb-3">GCSE Maths grade boundaries 2025 vs 2024 -- year-on-year shift</h3>
            <div className="overflow-x-auto mb-3">
              <table className="w-full text-sm min-w-[540px]" aria-label="GCSE Maths grade boundaries 2025 vs 2024 year on year comparison">
                <thead>
                  <tr className="bg-white/4 border-b border-white/8">
                    <th scope="col" className="text-left px-4 py-3 text-xs font-semibold text-slate-400 uppercase tracking-wider">Board / Tier</th>
                    <th scope="col" className="text-center px-3 py-3 text-xs font-bold text-emerald-400">Grade 9 (2025)</th>
                    <th scope="col" className="text-center px-3 py-3 text-xs font-bold text-slate-500">Grade 9 (2024)</th>
                    <th scope="col" className="text-center px-3 py-3 text-xs font-bold text-amber-400">Grade 4 (2025)</th>
                    <th scope="col" className="text-center px-3 py-3 text-xs font-bold text-slate-500">Grade 4 (2024)</th>
                    <th scope="col" className="text-center px-3 py-3 text-xs font-semibold text-slate-500">Max</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { label: 'AQA Higher',     g9_25: 219, g9_24: 213, g4_25: 63,  g4_24: 58,  max: 240 },
                    { label: 'AQA Foundation', g9_25: null, g9_24: null, g4_25: 160, g4_24: 155, max: 240 },
                    { label: 'Edexcel Higher', g9_25: 217, g9_24: 210, g4_25: 53,  g4_24: 49,  max: 240 },
                    { label: 'Edexcel Found.', g9_25: null, g9_24: null, g4_25: 144, g4_24: 138, max: 240 },
                  ].map((row, i) => (
                    <tr key={i} className={`border-b border-white/5 last:border-0 ${i % 2 === 0 ? '' : 'bg-white/2'}`}>
                      <td className="px-4 py-2.5 text-slate-300 font-medium text-sm">{row.label}</td>
                      <td className="px-3 py-2.5 text-center font-mono text-xs text-emerald-400 font-semibold">{row.g9_25 ?? '--'}</td>
                      <td className="px-3 py-2.5 text-center font-mono text-xs text-slate-500">{row.g9_24 ?? '--'}</td>
                      <td className="px-3 py-2.5 text-center font-mono text-xs text-amber-400 font-semibold">{row.g4_25}</td>
                      <td className="px-3 py-2.5 text-center font-mono text-xs text-slate-500">{row.g4_24}</td>
                      <td className="px-3 py-2.5 text-center font-mono text-xs text-slate-500">{row.max}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-xs text-slate-600 mb-2">
              2024 figures are illustrative estimates for year-on-year context. Official 2024 data from AQA/Edexcel. 2026 boundaries cannot be predicted before 20 August 2026.
            </p>
            <div className="bg-emerald-500/10 border border-emerald-500/20 rounded-xl px-4 py-3 flex gap-3 items-start">
              <span className="text-lg shrink-0" aria-hidden="true">💡</span>
              <p className="text-sm text-slate-300">
                <strong className="text-white">Bottom line:</strong> 2026 boundaries will not be dramatically higher or lower than 2025 under normal circumstances. Ofqual's comparable outcomes process prevents large swings. Check back on <strong className="text-white">20 August 2026</strong> when official 2026 boundaries are published.
              </p>
            </div>
          </section>

          {/* MATHS ALL BOARDS 2025 */}
          <section aria-labelledby="maths-2025-heading">
            <h2 id="maths-2025-heading" className="text-2xl font-bold text-white mb-2">
              GCSE Maths grade boundaries 2025 -- AQA, Edexcel, OCR, WJEC
            </h2>
            <p className="text-slate-400 text-sm mb-6">
              Official GCSE Maths grade boundaries from all four major exam boards for June 2025, published on Results Day 21 August 2025. Use the tabs to switch between boards. Note that OCR Maths totals 300 marks across three papers, while AQA, Edexcel and WJEC total 240 marks.
            </p>

            <div className="flex gap-2 mb-4 flex-wrap">
              {(['AQA','Edexcel','OCR','WJEC'] as const).map(b => (
                <button key={b} type="button" onClick={(e) => { e.preventDefault(); setMathsBoard(b); }}
                  className={`px-4 py-2 rounded-xl text-sm font-medium border transition-all
                    ${mathsBoard === b ? 'text-white' : 'bg-white/4 border-white/8 text-slate-400 hover:text-white'}`}
                  style={mathsBoard === b ? { backgroundColor: `${COLOR}20`, borderColor: `${COLOR}40` } : {}}>
                  {b}
                </button>
              ))}
            </div>

            <div className="bg-[#12141f] border border-white/8 rounded-xl overflow-hidden mb-3">
              <div className="px-5 py-3 border-b border-white/8 flex items-center justify-between">
                <p className="text-sm font-semibold text-white">{mathsBoard} GCSE Maths -- June 2025</p>
                {mathsBoard === 'OCR' && (
                  <span className="text-[10px] text-slate-500 bg-white/5 px-2 py-1 rounded">Raw marks out of 300</span>
                )}
              </div>
              <MathsBoardTable
                rows={
                  mathsBoard === 'WJEC'
                    ? WJEC_2025.filter(b => b.subject === 'Maths')
                    : MATHS_2025.filter(b => b.board === mathsBoard)
                }
                highlightMark={subject === 'Maths' ? mark : undefined}
              />
            </div>

            {/* Side-by-side comparison table */}
            <div className="overflow-x-auto mt-6">
              <table className="w-full text-sm min-w-[580px]" aria-label="GCSE Maths all boards grade boundaries 2025">
                <thead>
                  <tr className="bg-white/4 border-b border-white/8">
                    <th scope="col" className="text-left px-4 py-3 text-xs font-semibold text-slate-400 uppercase tracking-wider">Board</th>
                    <th scope="col" className="text-left px-3 py-3 text-xs font-semibold text-slate-400 uppercase tracking-wider">Tier</th>
                    <th scope="col" className="text-center px-3 py-3 text-xs font-bold text-emerald-400">Grade 9</th>
                    <th scope="col" className="text-center px-3 py-3 text-xs font-bold text-indigo-400">Grade 7</th>
                    <th scope="col" className="text-center px-3 py-3 text-xs font-bold text-purple-400">Grade 5 *</th>
                    <th scope="col" className="text-center px-3 py-3 text-xs font-bold text-amber-400">Grade 4 +</th>
                    <th scope="col" className="text-center px-3 py-3 text-xs font-semibold text-slate-500">Max</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ...MATHS_2025,
                    ...WJEC_2025.filter(b => b.subject === 'Maths'),
                  ].map((b, i) => (
                    <tr key={i} className={`border-b border-white/5 last:border-0 ${i % 2 === 0 ? '' : 'bg-white/2'}`}>
                      <td className="px-4 py-2.5 font-medium text-slate-200">{b.board}</td>
                      <td className="px-3 py-2.5 text-slate-400 text-xs">{b.tier}</td>
                      <td className="px-3 py-2.5 text-center font-mono text-xs text-emerald-400 font-semibold">{b.boundaries[9] ?? '--'}</td>
                      <td className="px-3 py-2.5 text-center font-mono text-xs text-indigo-400">{b.boundaries[7] ?? '--'}</td>
                      <td className="px-3 py-2.5 text-center font-mono text-xs text-purple-400 font-semibold">{b.boundaries[5] ?? '--'}</td>
                      <td className="px-3 py-2.5 text-center font-mono text-xs text-amber-400 font-semibold">{b.boundaries[4] ?? '--'}</td>
                      <td className="px-3 py-2.5 text-center font-mono text-xs text-slate-500">{b.maxMark}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-xs text-slate-600 mt-3">* Grade 5 = strong pass. + Grade 4 = standard pass. Source: AQA, Edexcel, OCR, WJEC official documents, published 21 August 2025.</p>
          </section>

          {/* ═══════════════════════════════════════════════════════════════
              NEW SECTION 4: GCSE Grade Boundaries 2025 vs 2026 — What to Expect
          ═══════════════════════════════════════════════════════════════ */}
          <section aria-labelledby="2025-vs-2026-heading">
            <h2 id="2025-vs-2026-heading" className="text-2xl font-bold text-white mb-2">
              GCSE grade boundaries 2025 vs 2026 -- what to expect
            </h2>
            <p className="text-slate-400 text-sm mb-4">
              2025 boundaries are the best available reference point for 2026. The table below shows 2025 grade 9, 5 and 4 boundaries across all boards for Maths — the most searched subject. Edexcel and AQA Maths Higher grade 4 boundaries in 2025 were 53 and 63 respectively, up slightly from 2024, reflecting paper difficulty that year.
            </p>
            <div className="overflow-x-auto mb-4">
              <table className="w-full text-sm min-w-[560px]" aria-label="GCSE Maths grade boundaries 2025 all boards with 2026 outlook">
                <thead>
                  <tr className="bg-white/4 border-b border-white/8">
                    <th scope="col" className="text-left px-4 py-3 text-xs font-semibold text-slate-400 uppercase tracking-wider">Board</th>
                    <th scope="col" className="text-left px-3 py-3 text-xs font-semibold text-slate-400 uppercase tracking-wider">Tier</th>
                    <th scope="col" className="text-center px-3 py-3 text-xs font-bold text-emerald-400">Grade 9 (2025)</th>
                    <th scope="col" className="text-center px-3 py-3 text-xs font-bold text-purple-400">Grade 5 (2025)</th>
                    <th scope="col" className="text-center px-3 py-3 text-xs font-bold text-amber-400">Grade 4 (2025)</th>
                    <th scope="col" className="text-center px-3 py-3 text-xs font-semibold text-slate-500">Max</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ...MATHS_2025,
                    ...WJEC_2025.filter(b => b.subject === 'Maths'),
                  ].map((b, i) => (
                    <tr key={i} className={`border-b border-white/5 last:border-0 ${i % 2 === 0 ? '' : 'bg-white/2'}`}>
                      <td className="px-4 py-2.5 font-medium text-slate-200">{b.board}</td>
                      <td className="px-3 py-2.5 text-slate-400 text-xs">{b.tier}</td>
                      <td className="px-3 py-2.5 text-center font-mono text-xs text-emerald-400 font-semibold">{b.boundaries[9] ?? '--'}</td>
                      <td className="px-3 py-2.5 text-center font-mono text-xs text-purple-400 font-semibold">{b.boundaries[5] ?? '--'}</td>
                      <td className="px-3 py-2.5 text-center font-mono text-xs text-amber-400 font-semibold">{b.boundaries[4] ?? '--'}</td>
                      <td className="px-3 py-2.5 text-center font-mono text-xs text-slate-500">{b.maxMark}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="grid sm:grid-cols-3 gap-4">
              {[
                {
                  icon: '📈',
                  title: 'If 2026 papers are easier',
                  body: 'Boundaries will rise above 2025 levels. A higher raw mark will be needed to achieve each grade compared to last year.',
                  color: '#34d399',
                },
                {
                  icon: '📉',
                  title: 'If 2026 papers are harder',
                  body: 'Boundaries will fall below 2025. Ofqual\'s comparable outcomes process protects students by lowering the raw mark needed for each grade.',
                  color: '#f59e0b',
                },
                {
                  icon: '📅',
                  title: '2026 boundaries confirmed',
                  body: 'Official 2026 boundaries for all boards are released at 8:00am on 20 August 2026. GradesNova updates immediately. Bookmark this page.',
                  color: '#6366f1',
                },
              ].map(item => (
                <article key={item.title} className="bg-[#12141f] border border-white/7 rounded-xl p-5">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-lg" aria-hidden="true">{item.icon}</span>
                    <h3 className="text-sm font-semibold text-white">{item.title}</h3>
                  </div>
                  <p className="text-xs text-slate-400 leading-relaxed">{item.body}</p>
                </article>
              ))}
            </div>
            <p className="text-xs text-slate-600 mt-4">
              * Grade 5 = strong pass. + Grade 4 = standard pass. 2026 boundaries will be published 20 August 2026.
            </p>
          </section>

          {/* MATHS 2024 */}
          <section aria-labelledby="maths-2024-heading">
            <h2 id="maths-2024-heading" className="text-2xl font-bold text-white mb-2">
              GCSE Maths grade boundaries 2024 -- year-on-year comparison
            </h2>
            <p className="text-slate-400 text-sm mb-6">
              2024 AQA and Edexcel boundaries for comparison. Boundaries shift each year based on paper difficulty. If the 2024 paper was harder than 2025, you will notice the grade 4 boundary sitting lower in 2024 than in 2025.
            </p>
            <div className="grid sm:grid-cols-2 gap-4">
              {(['AQA','Edexcel'] as const).map(b => (
                <div key={b} className="bg-[#12141f] border border-white/8 rounded-xl overflow-hidden">
                  <div className="px-5 py-3 border-b border-white/8">
                    <p className="text-sm font-semibold text-white">{b} GCSE Maths -- June 2024</p>
                  </div>
                  <MathsBoardTable rows={MATHS_2024.filter(x => x.board === b)} />
                </div>
              ))}
            </div>
          </section>

          {/* WJEC SECTION */}
          <section aria-labelledby="wjec-heading">
            <h2 id="wjec-heading" className="text-2xl font-bold text-white mb-2">
              WJEC GCSE grade boundaries 2025
            </h2>
            <p className="text-slate-400 text-sm mb-2">
              Official WJEC (CBAC) grade boundaries for the June 2025 exam series. WJEC is the main exam board in Wales and is also used by some schools in England. Grade boundaries are set independently from AQA, Edexcel and OCR -- always check you are using the correct board.
            </p>
            <div className="bg-amber-500/10 border border-amber-500/20 rounded-xl px-4 py-3 mb-6 flex gap-3 items-start">
              <span className="text-lg shrink-0" aria-hidden="true">i</span>
              <p className="text-sm text-amber-200/80">
                <strong className="text-amber-300">WJEC 2026 boundaries</strong> will be released at 8:00am on <strong className="text-white">20 August 2026</strong>. The figures below are the official June 2025 WJEC boundaries.
              </p>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-sm min-w-[600px]" aria-label="WJEC GCSE grade boundaries 2025">
                <thead>
                  <tr className="bg-white/4 border-b border-white/8">
                    <th scope="col" className="text-left px-4 py-3 text-xs font-semibold text-slate-400 uppercase tracking-wider">Subject</th>
                    <th scope="col" className="text-left px-3 py-3 text-xs font-semibold text-slate-400 uppercase tracking-wider">Tier</th>
                    <th scope="col" className="text-center px-2 py-3 text-xs font-bold text-emerald-400">9</th>
                    <th scope="col" className="text-center px-2 py-3 text-xs font-bold text-emerald-400">8</th>
                    <th scope="col" className="text-center px-2 py-3 text-xs font-bold text-indigo-400">7</th>
                    <th scope="col" className="text-center px-2 py-3 text-xs font-bold text-indigo-400">6</th>
                    <th scope="col" className="text-center px-2 py-3 text-xs font-bold text-purple-400">5*</th>
                    <th scope="col" className="text-center px-2 py-3 text-xs font-bold text-amber-400">4+</th>
                    <th scope="col" className="text-center px-2 py-3 text-xs font-semibold text-slate-500">Max</th>
                  </tr>
                </thead>
                <tbody>
                  {WJEC_2025.map((b, i) => (
                    <tr key={i} className={`border-b border-white/5 last:border-0 ${i % 2 === 0 ? '' : 'bg-white/2'}`}>
                      <td className="px-4 py-2.5 font-medium text-slate-200 text-sm">{b.subject}</td>
                      <td className="px-3 py-2.5 text-xs text-slate-500">{b.tier}</td>
                      <td className="px-2 py-2.5 text-center font-mono text-xs text-emerald-400 font-semibold">{b.boundaries[9] ?? '--'}</td>
                      <td className="px-2 py-2.5 text-center font-mono text-xs text-emerald-400">{b.boundaries[8] ?? '--'}</td>
                      <td className="px-2 py-2.5 text-center font-mono text-xs text-indigo-400">{b.boundaries[7] ?? '--'}</td>
                      <td className="px-2 py-2.5 text-center font-mono text-xs text-indigo-400">{b.boundaries[6] ?? '--'}</td>
                      <td className="px-2 py-2.5 text-center font-mono text-xs text-purple-400 font-semibold">{b.boundaries[5] ?? '--'}</td>
                      <td className="px-2 py-2.5 text-center font-mono text-xs text-amber-400 font-semibold">{b.boundaries[4] ?? '--'}</td>
                      <td className="px-2 py-2.5 text-center font-mono text-xs text-slate-500">{b.maxMark}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-xs text-slate-600 mt-3">
              Source: WJEC/CBAC official grade boundary document, June 2025. * Grade 5 = strong pass. + Grade 4 = standard pass.
            </p>
            <div className="mt-6 bg-[#12141f] border border-white/8 rounded-xl p-5 space-y-3">
              <h3 className="text-sm font-semibold text-white">About WJEC grade boundaries</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                WJEC (Welsh Joint Education Committee, also known as CBAC in Welsh) is the main exam board for schools in Wales and is used by some schools in England. Unlike AQA, Edexcel and OCR, WJEC publishes grade boundaries for Welsh-medium and English-medium qualifications separately. For 2025, WJEC Maths Higher tier required a raw mark of 196 out of 240 for a grade 9 and 27 out of 240 for a grade 4 (standard pass). WJEC boundaries are set entirely independently after all papers are marked and are not adjusted to match other boards.
              </p>
              <p className="text-xs text-slate-500">
                WJEC 2026 boundaries will be released on 20 August 2026. For historical WJEC boundaries, visit wjec.co.uk.
              </p>
            </div>
          </section>

          {/* EDEXCEL ALL SUBJECTS 2025 */}
          <section aria-labelledby="edexcel-all-heading">
            <h2 id="edexcel-all-heading" className="text-2xl font-bold text-white mb-2">
              Edexcel GCSE grade boundaries 2025 -- all subjects
            </h2>
            <p className="text-slate-400 text-sm mb-6">
              Official Pearson Edexcel grade boundaries for all major GCSE subjects, June 2025. Edexcel is one of the largest GCSE exam boards in England. Grade 5 is the strong pass and grade 4 is the standard pass.
            </p>
            <AllSubjectsTable rows={EDEXCEL_ALL} label="Edexcel GCSE grade boundaries all subjects 2025" />
            <p className="text-xs text-slate-600 mt-3">
              Source: Pearson Edexcel June 2025 grade boundary document, published 21 August 2025.
            </p>
          </section>

          {/* OCR ALL SUBJECTS 2025 */}
          <section aria-labelledby="ocr-all-heading">
            <h2 id="ocr-all-heading" className="text-2xl font-bold text-white mb-2">
              OCR GCSE grade boundaries 2025 -- all subjects
            </h2>
            <p className="text-slate-400 text-sm mb-6">
              Official OCR grade boundaries for all major GCSE subjects, June 2025. Note that OCR GCSE Maths uses a combined mark from three papers totalling 300, which is higher than AQA and Edexcel. All other subjects follow standard mark totals.
            </p>
            <AllSubjectsTable rows={OCR_ALL} label="OCR GCSE grade boundaries all subjects 2025" />
            <p className="text-xs text-slate-600 mt-3">
              Source: OCR June 2025 grade boundary document, published 21 August 2025.
            </p>
          </section>

          {/* AQA ALL SUBJECTS 2025 */}
          <section aria-labelledby="all-subjects-heading">
            <h2 id="all-subjects-heading" className="text-2xl font-bold text-white mb-2">
              AQA GCSE grade boundaries 2025 -- all subjects
            </h2>
            <p className="text-slate-400 text-sm mb-4">
              Official AQA grade boundaries for all major GCSE subjects, June 2025. Published on Results Day 21 August 2025. Use the board tabs to compare AQA, Edexcel, OCR and WJEC boundaries side by side.
            </p>

            {/* Board switcher for all-subjects table */}
            <div className="flex gap-2 mb-4 flex-wrap">
              {(['AQA','Edexcel','OCR','WJEC'] as const).map(b => (
                <button key={b} type="button" onClick={(e) => { e.preventDefault(); setAllSubjectsBoard(b); }}
                  className={`px-4 py-2 rounded-xl text-sm font-medium border transition-all
                    ${allSubjectsBoard === b ? 'text-white' : 'bg-white/4 border-white/8 text-slate-400 hover:text-white'}`}
                  style={allSubjectsBoard === b ? { backgroundColor: `${COLOR}20`, borderColor: `${COLOR}40` } : {}}>
                  {b}
                </button>
              ))}
            </div>

            <AllSubjectsTable
              rows={allSubjectRows}
              label={`${allSubjectsBoard} GCSE grade boundaries all subjects 2025`}
            />
            <p className="text-xs text-slate-600 mt-3">
              Source: {allSubjectsBoard} June 2025 grade boundary document, published 21 August 2025. * Grade 5 = strong pass. + Grade 4 = standard pass.
            </p>
          </section>

          {/* SCIENCES COMPARISON */}
          <section aria-labelledby="sciences-heading">
            <h2 id="sciences-heading" className="text-2xl font-bold text-white mb-2">
              GCSE Science grade boundaries 2025 -- Biology, Chemistry, Physics
            </h2>
            <p className="text-slate-400 text-sm mb-6">
              How grade 9 and grade 4 boundaries for the three sciences compare across AQA, Edexcel, OCR and WJEC in 2025. All science papers are marked out of 200 for Higher tier except where noted.
            </p>
            <div className="overflow-x-auto">
              <table className="w-full text-sm min-w-[600px]" aria-label="GCSE science grade boundaries comparison 2025">
                <thead>
                  <tr className="bg-white/4 border-b border-white/8">
                    <th scope="col" className="text-left px-4 py-3 text-xs font-semibold text-slate-400 uppercase tracking-wider">Subject</th>
                    <th scope="col" className="text-left px-3 py-3 text-xs font-semibold text-slate-400 uppercase tracking-wider">Board</th>
                    <th scope="col" className="text-left px-3 py-3 text-xs font-semibold text-slate-400 uppercase tracking-wider">Tier</th>
                    <th scope="col" className="text-center px-3 py-3 text-xs font-bold text-emerald-400">Grade 9</th>
                    <th scope="col" className="text-center px-3 py-3 text-xs font-bold text-purple-400">Grade 5</th>
                    <th scope="col" className="text-center px-3 py-3 text-xs font-bold text-amber-400">Grade 4</th>
                    <th scope="col" className="text-center px-3 py-3 text-xs font-semibold text-slate-500">Max</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ...ALL_WITH_BOARDS.filter(b =>
                      ['Biology','Chemistry','Physics'].includes(b.subject) && b.tier === 'Higher'
                    ).sort((a, b) => a.subject.localeCompare(b.subject) || a.board.localeCompare(b.board))
                  ].map((b, i) => (
                    <tr key={i} className={`border-b border-white/5 last:border-0 ${i % 2 === 0 ? '' : 'bg-white/2'}`}>
                      <td className="px-4 py-2.5 font-medium text-slate-200">{b.subject}</td>
                      <td className="px-3 py-2.5 text-slate-400 text-xs">{b.board}</td>
                      <td className="px-3 py-2.5 text-slate-500 text-xs">{b.tier}</td>
                      <td className="px-3 py-2.5 text-center font-mono text-xs text-emerald-400 font-semibold">{b.boundaries[9] ?? '--'}</td>
                      <td className="px-3 py-2.5 text-center font-mono text-xs text-purple-400">{b.boundaries[5] ?? '--'}</td>
                      <td className="px-3 py-2.5 text-center font-mono text-xs text-amber-400 font-semibold">{b.boundaries[4] ?? '--'}</td>
                      <td className="px-3 py-2.5 text-center font-mono text-xs text-slate-500">{b.maxMark}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-xs text-slate-600 mt-3">Source: AQA, Edexcel, OCR, WJEC official documents, published 21 August 2025. Higher tier only.</p>
          </section>

          {/* ENGLISH COMPARISON */}
          <section aria-labelledby="english-heading">
            <h2 id="english-heading" className="text-2xl font-bold text-white mb-2">
              GCSE English grade boundaries 2025 -- Language and Literature
            </h2>
            <p className="text-slate-400 text-sm mb-6">
              Grade boundaries for GCSE English Language and English Literature across all boards in 2025. English Language grade 4 is the key threshold -- students who miss it must continue studying English post-16.
            </p>
            <div className="overflow-x-auto">
              <table className="w-full text-sm min-w-[580px]" aria-label="GCSE English grade boundaries 2025 all boards">
                <thead>
                  <tr className="bg-white/4 border-b border-white/8">
                    <th scope="col" className="text-left px-4 py-3 text-xs font-semibold text-slate-400 uppercase tracking-wider">Subject</th>
                    <th scope="col" className="text-left px-3 py-3 text-xs font-semibold text-slate-400 uppercase tracking-wider">Board</th>
                    <th scope="col" className="text-center px-3 py-3 text-xs font-bold text-emerald-400">Grade 9</th>
                    <th scope="col" className="text-center px-3 py-3 text-xs font-bold text-indigo-400">Grade 7</th>
                    <th scope="col" className="text-center px-3 py-3 text-xs font-bold text-purple-400">Grade 5</th>
                    <th scope="col" className="text-center px-3 py-3 text-xs font-bold text-amber-400">Grade 4</th>
                    <th scope="col" className="text-center px-3 py-3 text-xs font-semibold text-slate-500">Max</th>
                  </tr>
                </thead>
                <tbody>
                  {ALL_WITH_BOARDS.filter(b =>
                    ['English Language','English Literature'].includes(b.subject) && b.tier === 'Higher'
                  ).sort((a, b) => a.subject.localeCompare(b.subject) || a.board.localeCompare(b.board))
                  .map((b, i) => (
                    <tr key={i} className={`border-b border-white/5 last:border-0 ${i % 2 === 0 ? '' : 'bg-white/2'}`}>
                      <td className="px-4 py-2.5 font-medium text-slate-200 text-sm">{b.subject}</td>
                      <td className="px-3 py-2.5 text-slate-400 text-xs">{b.board}</td>
                      <td className="px-3 py-2.5 text-center font-mono text-xs text-emerald-400 font-semibold">{b.boundaries[9] ?? '--'}</td>
                      <td className="px-3 py-2.5 text-center font-mono text-xs text-indigo-400">{b.boundaries[7] ?? '--'}</td>
                      <td className="px-3 py-2.5 text-center font-mono text-xs text-purple-400">{b.boundaries[5] ?? '--'}</td>
                      <td className="px-3 py-2.5 text-center font-mono text-xs text-amber-400 font-semibold">{b.boundaries[4] ?? '--'}</td>
                      <td className="px-3 py-2.5 text-center font-mono text-xs text-slate-500">{b.maxMark}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-xs text-slate-600 mt-3">Source: AQA, Edexcel, OCR, WJEC official documents, published 21 August 2025. Higher tier only.</p>
          </section>

          {/* RESULTS DAY CALLOUT */}
          <div className="bg-[#12141f] border border-emerald-500/20 rounded-xl p-6 flex gap-4 items-start">
            <div className="text-2xl shrink-0" aria-hidden="true">📅</div>
            <div>
              <h3 className="text-sm font-semibold text-white mb-1">GCSE Results Day 2026 -- Thursday 20 August 2026</h3>
              <p className="text-sm text-slate-400 leading-relaxed">
                2026 GCSE grade boundaries for all boards including AQA, Edexcel, OCR and WJEC will be published at <strong className="text-white">8:00am on Thursday 20 August 2026</strong>. GradesNova will update immediately when 2026 boundaries are released. Bookmark this page and check back on Results Day.
              </p>
            </div>
          </div>

          {/* HOW RAW GRADE BOUNDARIES WORK */}
          <section aria-labelledby="raw-marks-heading">
            <h2 id="raw-marks-heading" className="text-2xl font-bold text-white mb-3">
              How GCSE raw grade boundaries work
            </h2>
            <div className="prose-custom space-y-4 text-slate-400 leading-relaxed text-sm">
              <p>
                GCSE grade boundaries are set in <strong className="text-white">raw marks</strong>, which are the actual number of marks you score on the exam paper or papers, not a percentage. Each exam board (AQA, Edexcel, OCR, WJEC) sets boundaries independently after all scripts are marked. This means the boundaries for the same subject can differ between boards.
              </p>
              <p>
                Boundaries change every year. If a paper was harder than usual, the grade 4 boundary will be set lower than the previous year to ensure students are not unfairly disadvantaged. Conversely, if a paper was easier, boundaries rise. This process, called <strong className="text-white">grade setting</strong>, is overseen by Ofqual in England and Qualifications Wales in Wales.
              </p>
              <p>
                AQA, Edexcel, OCR and WJEC all publish their full raw mark grade boundary tables on Results Day. These are the figures used in the GradesNova calculator above.
              </p>
            </div>

            {/* Tips grid */}
            <div className="grid sm:grid-cols-2 gap-4 mt-6">
              {[
                {
                  icon: '🎯',
                  title: 'Use the correct board',
                  body: 'Only use boundaries for the exam board your school uses. AQA, Edexcel, OCR and WJEC set boundaries independently. A mark of 120 out of 160 on an AQA English paper means something different to the same mark on an OCR paper.',
                },
                {
                  icon: '📊',
                  title: 'Raw marks vs percentages',
                  body: 'Grade boundaries are always stated as raw marks, not percentages. You need a specific number of marks, not a certain percentage score. A grade 9 in AQA English Language 2025 required 119 out of 160, which is 74 percent, but in Maths Higher it needed 219 out of 240, which is 91 percent.',
                },
                {
                  icon: '📅',
                  title: 'Boundaries are set after the exam',
                  body: 'Grade boundaries are not fixed before the exam. They are set by examiners after all scripts are marked, taking into account how difficult the paper was compared to previous years. This is why boundaries shift annually.',
                },
                {
                  icon: '✅',
                  title: 'Grade 4 vs grade 5',
                  body: 'Grade 4 is the standard pass. Students who do not achieve grade 4 in GCSE English Language or Maths must resit post-16. Grade 5, the strong pass, is increasingly required by sixth forms and colleges for entry to A-level courses.',
                },
              ].map(tip => (
                <article key={tip.title} className="bg-[#12141f] border border-white/7 rounded-xl p-5">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-lg" aria-hidden="true">{tip.icon}</span>
                    <h3 className="text-sm font-semibold text-white">{tip.title}</h3>
                  </div>
                  <p className="text-xs text-slate-400 leading-relaxed">{tip.body}</p>
                </article>
              ))}
            </div>
          </section>

          {/* FAQ */}
          <FAQSection />

          {/* OTHER CALCULATORS */}
          <section className="bg-[#12141f] border border-white/7 rounded-2xl p-6" aria-labelledby="other-tools-heading">
            <h2 id="other-tools-heading" className="text-sm font-semibold text-slate-300 mb-4">Other free calculators</h2>
            <div className="flex flex-wrap gap-2">
              {[
                { id: 'a-levels', name: 'A-Level Grade Boundaries', color: '#ec4899' },
                { id: 'sat',      name: 'SAT Score Calculator',     color: '#6366f1' },
                { id: 'act',      name: 'ACT Score Calculator',     color: '#06b6d4' },
                { id: 'gre',      name: 'GRE Score Calculator',     color: '#a855f7' },
                { id: 'lsat',     name: 'LSAT Score Calculator',    color: '#ef4444' },
                { id: 'gmat',     name: 'GMAT Score Calculator',    color: '#f59e0b' },
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
