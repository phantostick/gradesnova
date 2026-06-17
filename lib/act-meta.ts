// lib/act-meta.ts
// Single source of truth for ACT page metadata, shared data, and last-modified date.
// Update ACT_LAST_MODIFIED here when content changes — it propagates to all JSON-LD schemas.

export const ACT_LAST_MODIFIED = '2026-06-17';
export const ACT_DATE_PUBLISHED = '2024-01-01';

// ─── ACT → SAT concordance ────────────────────────────────────────────────────
// Source: Official College Board / ACT concordance tables
export const ACT_SAT_CROSSWALK = [
  { act: 36, sat: 1590, pct: 99 }, { act: 35, sat: 1560, pct: 99 }, { act: 34, sat: 1530, pct: 98 },
  { act: 33, sat: 1490, pct: 97 }, { act: 32, sat: 1450, pct: 96 }, { act: 31, sat: 1420, pct: 95 },
  { act: 30, sat: 1390, pct: 93 }, { act: 29, sat: 1350, pct: 91 }, { act: 28, sat: 1310, pct: 88 },
  { act: 27, sat: 1280, pct: 85 }, { act: 26, sat: 1240, pct: 82 }, { act: 25, sat: 1210, pct: 78 },
  { act: 24, sat: 1160, pct: 74 }, { act: 23, sat: 1130, pct: 69 }, { act: 22, sat: 1100, pct: 63 },
  { act: 21, sat: 1060, pct: 57 }, { act: 20, sat: 1020, pct: 49 }, { act: 19, sat: 980,  pct: 43 },
  { act: 18, sat: 940,  pct: 38 }, { act: 17, sat: 900,  pct: 31 }, { act: 16, sat: 850,  pct: 25 },
];

// ─── FAQs ─────────────────────────────────────────────────────────────────────
// NOTE: Keep answer phrasing varied across entries — several entries reference the
// national average of 21; vary the framing to avoid keyword padding on a single page.
export const ACT_FAQS = [
  {
    question: 'How do I use this ACT score calculator?',
    answer: 'This free ACT score calculator takes your raw correct answers per section and instantly converts them to scaled scores (1–36) and a national percentile ranking for 2026. Enter how many questions you answered correctly in English (out of 50), Math (out of 45), Reading (out of 36), and Science (out of 40 — optional under the Enhanced ACT). The calculator computes your composite from those scaled section scores and shows where you stand nationally. No sign-up needed.',
  },
  {
    question: 'What changed about the ACT in 2025?',
    answer: 'Starting in September 2025, ACT, Inc. introduced the Enhanced ACT (sometimes called ACT Next). The key changes: (1) The test is now shorter — English dropped from 75 to 50 questions, Math from 60 to 45, Reading from 40 to 36, and total testing time decreased from 2 hours 55 minutes to approximately 2 hours. (2) The Science section is now optional for students testing in the US, similar to the old Writing section. (3) Students can choose to test on a computer or on paper at most test centres. (4) The composite scoring method remains the same — an average of the four section scores (or three, if Science is skipped), rounded to the nearest whole number. (5) Superscoring policies at many colleges are being updated to reflect the new format. Always check your specific target college\'s policy for the Enhanced ACT.',
  },
  {
    question: 'What is a good ACT score in 2025–2026?',
    answer: 'A good ACT score depends on your target colleges. Scoring at or above 24 (74th percentile) is above average and competitive at many four-year universities. Scores of 28 or above place you in the top 12%, which is strong for selective schools. A 30 or above (93rd percentile) is competitive at highly selective schools, and 33 or above puts you in the top 3% — the range competitive at the most elite universities including Ivy League schools, MIT, and Stanford.',
  },
  {
    question: 'What is the national average ACT score in 2025–2026?',
    answer: 'The national average ACT composite score is 21 out of 36, placing the average student at approximately the 51st percentile. The average section scores are approximately: English 20, Mathematics 20, Reading 21, and Science 20. The national average has remained stable between 20 and 21 for several consecutive years, making any score above 21 above the midpoint nationally.',
  },
  {
    question: 'What percentile is a 24 ACT score?',
    answer: 'A score of 24 on the ACT is approximately the 74th percentile, meaning you scored higher than about 74% of all ACT test takers nationally. This is a solid above-average score that is competitive at many four-year universities, including many state flagship schools where a 24 is at or above the 25th percentile for admitted students.',
  },
  {
    question: 'What percentile is a 28 ACT score?',
    answer: 'A score of 28 on the ACT is approximately the 88th percentile, placing you in the top 12% of all ACT test takers nationally. This is a strong score competitive at selective universities such as the University of Michigan, UCLA, Boston University, and many other schools in the top 50.',
  },
  {
    question: 'What percentile is a 30 ACT score?',
    answer: 'A score of 30 on the ACT is approximately the 93rd percentile — top 7% nationally. This score is competitive at highly selective universities including many in the national top 25 and puts you at or above the 25th percentile for schools like Duke, Northwestern, and Georgetown.',
  },
  {
    question: 'What percentile is a 32 ACT score?',
    answer: 'A score of 32 on the ACT is approximately the 96th percentile, placing you in the top 4% of all test takers. This is an excellent score that opens doors at the most competitive universities in the country. A 32 is at or above the 25th percentile for Ivy League schools and puts you in a strong position for merit scholarships everywhere.',
  },
  {
    question: 'What percentile is a 33 ACT score?',
    answer: 'A score of 33 on the ACT is approximately the 97th percentile — top 3% nationally. This is an exceptional score highly competitive at the most selective universities, including Ivy League schools, MIT, and Stanford. A 33 is at the median for some highly selective schools.',
  },
  {
    question: 'What percentile is a 35 ACT score?',
    answer: 'A score of 35 on the ACT is approximately the 99th percentile, placing you in the top 1% of all test takers nationwide. A 35 is a near-perfect score and is competitive at every university in the country, including Harvard, Yale, Princeton, and MIT — all of which have median ACT scores between 34 and 36.',
  },
  {
    question: 'What percentile is a 20 ACT score?',
    answer: 'A score of 20 on the ACT is approximately the 49th percentile — just below the midpoint nationally. This is a mid-range score sufficient for admission to many four-year universities and community colleges. Students at this level who retest with focused preparation typically see a 3–5 point improvement.',
  },
  {
    question: 'What is the average ACT score for the class of 2026?',
    answer: 'The average ACT composite for the class of 2026 is approximately 21 out of 36, consistent with national trends over recent years. Scoring a 22 or above puts you ahead of the majority of your graduating class nationally. Section averages for the class of 2026 are approximately: English 20, Math 20, Reading 21, and Science 20.',
  },
  {
    question: 'What ACT score do I need for Harvard?',
    answer: "Harvard's middle 50% ACT range for admitted students is 34–36. A score below 33 would be below the typical range for Harvard, though admissions are holistic and test scores are one of many factors. Harvard reports all ACT scores, though they focus on your highest composite.",
  },
  {
    question: 'How is the ACT scored?',
    answer: 'The ACT is scored on a composite scale of 1 to 36. It has four sections: English, Mathematics, Reading, and Science — each scored 1–36. Your composite is the average of these four section scores, rounded to the nearest whole number. Under the 2025 Enhanced ACT, Science is optional for US students, in which case the composite averages the remaining three sections. There is no penalty for wrong answers — always answer every question. The optional Writing test is scored separately on a scale of 2–12 and does not affect your composite.',
  },
  {
    question: 'ACT vs SAT: which should I take?',
    answer: 'Both tests are accepted equally at virtually every US college. The ACT includes a dedicated Science section and tends to have more straightforward Math. The SAT has a stronger emphasis on data analysis and longer reading passages. Most students perform similarly on both tests. Take a free practice test for each to see which format suits your strengths. If you score higher on the ACT, report that; if higher on the SAT, report that instead.',
  },
  {
    question: 'How many times can I take the ACT?',
    answer: 'ACT, Inc. does not impose a limit on how many times you can take the ACT. Most students take it 2–3 times. Many colleges superscore — taking the highest composite across multiple test dates — so retaking can meaningfully improve your standing. The ACT is offered in February, April, June, July, September, October, and December each year.',
  },
  {
    question: 'Does the ACT Writing section affect my composite score?',
    answer: 'No. The optional ACT Writing (Essay) test does not affect your ACT composite score in any way. Your composite is calculated solely from the four required sections: English, Mathematics, Reading, and Science. The Writing test is scored separately on a scale of 2–12. While some colleges previously required Writing, the vast majority of US universities no longer require or consider it for admission. Before registering, check each college\'s specific requirements — if none of your target schools require it, you can skip it.',
  },
  {
    question: 'How do colleges calculate an ACT Superscore?',
    answer: 'An ACT Superscore is calculated by taking your highest section score from each of your test dates and averaging those four best-ever scores into a new composite. For example, if you scored English 28, Math 30, Reading 26, Science 27 in April, and then English 32, Math 29, Reading 30, Science 28 in October, your Superscore would use English 32, Math 30, Reading 30, Science 28 — giving a Superscore composite of approximately 30. Not every college superscores the ACT; policies vary by institution. If your target college superscores, retaking with a focus on improving just one or two weaker sections is a highly efficient strategy.',
  },
];
