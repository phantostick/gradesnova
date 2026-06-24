// lib/act-college-data.ts
// Auto-structured ACT score → college fit guide, score by score (1–36).
// Tiering reflects published middle-50% ACT ranges and national percentile data.
// Source for percentiles: lib/act-data.ts (ACT_COMPOSITE_PERCENTILES). School examples
// are illustrative of each tier's typical admitted range, not exhaustive lists.

export interface ACTCollegeScoreEntry {
  score: number;
  percentile: number;
  tier: string;
  color: string;
  summary: string;
  schools: string[];
  note: string;
}

export const ACT_COLLEGE_GUIDE: ACTCollegeScoreEntry[] = [
  {
    "score": 36,
    "percentile": 99,
    "tier": "Perfect Score",
    "color": "#34d399",
    "summary": "A 36 is a perfect composite — roughly 1 in every 10,000 test takers achieves it. There is no academic case any admissions committee can make against your testing profile. At this level, the ACT score itself is no longer a differentiator; what separates applicants is GPA, course rigor, essays, and extracurricular depth.",
    "schools": [
      "MIT",
      "Harvard University",
      "Stanford University",
      "Princeton University",
      "Yale University",
      "Caltech"
    ],
    "note": "Even at a perfect score, the most selective schools reject the large majority of applicants — holistic review still applies."
  },
  {
    "score": 35,
    "percentile": 99,
    "tier": "Exceptional",
    "color": "#34d399",
    "summary": "A 35 sits in the top 1% nationally. You are now comfortably inside or above the middle 50% ACT range at every Ivy League school and every elite STEM institute. At this score, admission to the most selective schools is realistic but never guaranteed — these schools reject most applicants regardless of test score.",
    "schools": [
      "Harvard University",
      "Yale University",
      "Princeton University",
      "Stanford University",
      "MIT",
      "Caltech",
      "University of Chicago"
    ],
    "note": "Scores at this level rarely separate applicants at elite schools — your essays, recommendations, and activities carry the most weight from here."
  },
  {
    "score": 34,
    "percentile": 98,
    "tier": "Exceptional",
    "color": "#34d399",
    "summary": "A 34 sits in the top 1% nationally. You are now comfortably inside or above the middle 50% ACT range at every Ivy League school and every elite STEM institute. At this score, admission to the most selective schools is realistic but never guaranteed — these schools reject most applicants regardless of test score.",
    "schools": [
      "Harvard University",
      "Yale University",
      "Princeton University",
      "Stanford University",
      "MIT",
      "Caltech",
      "University of Chicago"
    ],
    "note": "Scores at this level rarely separate applicants at elite schools — your essays, recommendations, and activities carry the most weight from here."
  },
  {
    "score": 33,
    "percentile": 97,
    "tier": "Highly Competitive",
    "color": "#6366f1",
    "summary": "A 33 places you in the top 3–4% of test takers. You're at or above the median for most Ivy League schools and a strong contender at nearly every top-20 national university. Many honors colleges and full-tuition merit scholarship programs at flagship state schools become realistic at this level.",
    "schools": [
      "Columbia University",
      "University of Pennsylvania",
      "Brown University",
      "Dartmouth College",
      "Duke University",
      "Northwestern University",
      "Cornell University"
    ],
    "note": "A 32–33 is often above the 75th percentile at many flagship state honors colleges — a strong lever for merit aid."
  },
  {
    "score": 32,
    "percentile": 96,
    "tier": "Highly Competitive",
    "color": "#6366f1",
    "summary": "A 32 places you in the top 3–4% of test takers. You're at or above the median for most Ivy League schools and a strong contender at nearly every top-20 national university. Many honors colleges and full-tuition merit scholarship programs at flagship state schools become realistic at this level.",
    "schools": [
      "Columbia University",
      "University of Pennsylvania",
      "Brown University",
      "Dartmouth College",
      "Duke University",
      "Northwestern University",
      "Cornell University"
    ],
    "note": "A 32–33 is often above the 75th percentile at many flagship state honors colleges — a strong lever for merit aid."
  },
  {
    "score": 31,
    "percentile": 95,
    "tier": "Very Competitive",
    "color": "#6366f1",
    "summary": "A 31 is roughly top 5–7% nationally. This is comfortably within range for most top-25 national universities and well above the median for most state flagships, where it often qualifies you for honors college admission and significant merit scholarships.",
    "schools": [
      "Georgetown University",
      "University of Michigan",
      "University of Virginia",
      "Vanderbilt University",
      "Rice University",
      "UCLA",
      "University of North Carolina at Chapel Hill"
    ],
    "note": "At many public flagships, a 30+ moves you from \"competitive\" to \"scholarship-eligible\" — check each school's merit aid thresholds directly."
  },
  {
    "score": 30,
    "percentile": 93,
    "tier": "Very Competitive",
    "color": "#6366f1",
    "summary": "A 30 is roughly top 5–7% nationally. This is comfortably within range for most top-25 national universities and well above the median for most state flagships, where it often qualifies you for honors college admission and significant merit scholarships.",
    "schools": [
      "Georgetown University",
      "University of Michigan",
      "University of Virginia",
      "Vanderbilt University",
      "Rice University",
      "UCLA",
      "University of North Carolina at Chapel Hill"
    ],
    "note": "At many public flagships, a 30+ moves you from \"competitive\" to \"scholarship-eligible\" — check each school's merit aid thresholds directly."
  },
  {
    "score": 29,
    "percentile": 91,
    "tier": "Competitive",
    "color": "#a855f7",
    "summary": "A 29 is top 9–12% nationally — a strong, above-average score that's competitive at most top-50 national universities and a solid match for the upper half of state flagship admitted ranges. It's also a common merit-scholarship cutoff at many public universities.",
    "schools": [
      "New York University",
      "Boston College",
      "University of Wisconsin–Madison",
      "University of Texas at Austin",
      "Ohio State University (Honors)",
      "University of Florida"
    ],
    "note": "This range is a sweet spot for \"match\" schools — strong odds at well-regarded universities without needing a perfect profile elsewhere."
  },
  {
    "score": 28,
    "percentile": 88,
    "tier": "Competitive",
    "color": "#a855f7",
    "summary": "A 28 is top 9–12% nationally — a strong, above-average score that's competitive at most top-50 national universities and a solid match for the upper half of state flagship admitted ranges. It's also a common merit-scholarship cutoff at many public universities.",
    "schools": [
      "New York University",
      "Boston College",
      "University of Wisconsin–Madison",
      "University of Texas at Austin",
      "Ohio State University (Honors)",
      "University of Florida"
    ],
    "note": "This range is a sweet spot for \"match\" schools — strong odds at well-regarded universities without needing a perfect profile elsewhere."
  },
  {
    "score": 27,
    "percentile": 85,
    "tier": "Above Average",
    "color": "#a855f7",
    "summary": "A 27 is top 15–18% nationally, clearly above the national average of 21. This score is solidly within range for most state flagship universities and many respected regional and private universities, and frequently qualifies for moderate merit scholarships.",
    "schools": [
      "Pennsylvania State University",
      "Indiana University Bloomington",
      "University of Washington",
      "Texas A&M University",
      "University of South Carolina",
      "Michigan State University"
    ],
    "note": "Many flagships publish their middle-50% ACT range online — a 26–27 typically lands you inside or near the bottom of that range at most."
  },
  {
    "score": 26,
    "percentile": 82,
    "tier": "Above Average",
    "color": "#a855f7",
    "summary": "A 26 is top 15–18% nationally, clearly above the national average of 21. This score is solidly within range for most state flagship universities and many respected regional and private universities, and frequently qualifies for moderate merit scholarships.",
    "schools": [
      "Pennsylvania State University",
      "Indiana University Bloomington",
      "University of Washington",
      "Texas A&M University",
      "University of South Carolina",
      "Michigan State University"
    ],
    "note": "Many flagships publish their middle-50% ACT range online — a 26–27 typically lands you inside or near the bottom of that range at most."
  },
  {
    "score": 25,
    "percentile": 78,
    "tier": "Solid",
    "color": "#f59e0b",
    "summary": "A 25 is top 22–26% nationally and clearly above average. It's a reliable score for admission at the large majority of four-year public universities and many private universities, particularly those outside the most selective tier.",
    "schools": [
      "University of Arizona",
      "University of Alabama",
      "Clemson University",
      "University of Oregon",
      "Auburn University",
      "University of Kansas"
    ],
    "note": "At this range, your application is generally judged on overall academic record rather than the test score alone."
  },
  {
    "score": 24,
    "percentile": 74,
    "tier": "Solid",
    "color": "#f59e0b",
    "summary": "A 24 is top 22–26% nationally and clearly above average. It's a reliable score for admission at the large majority of four-year public universities and many private universities, particularly those outside the most selective tier.",
    "schools": [
      "University of Arizona",
      "University of Alabama",
      "Clemson University",
      "University of Oregon",
      "Auburn University",
      "University of Kansas"
    ],
    "note": "At this range, your application is generally judged on overall academic record rather than the test score alone."
  },
  {
    "score": 23,
    "percentile": 69,
    "tier": "Average",
    "color": "#f59e0b",
    "summary": "A 23 is at or near the national average (the average composite is 21). This score is sufficient for admission to most open and moderately selective four-year universities, though it falls below the middle 50% range at most flagship and selective schools.",
    "schools": [
      "Most state university branch campuses",
      "University of Cincinnati",
      "University of Toledo",
      "Wright State University",
      "Many regional public universities"
    ],
    "note": "A retake with focused prep is often worthwhile here — a 3–4 point gain can shift you into a meaningfully more selective tier."
  },
  {
    "score": 22,
    "percentile": 63,
    "tier": "Average",
    "color": "#f59e0b",
    "summary": "A 22 is at or near the national average (the average composite is 21). This score is sufficient for admission to most open and moderately selective four-year universities, though it falls below the middle 50% range at most flagship and selective schools.",
    "schools": [
      "Most state university branch campuses",
      "University of Cincinnati",
      "University of Toledo",
      "Wright State University",
      "Many regional public universities"
    ],
    "note": "A retake with focused prep is often worthwhile here — a 3–4 point gain can shift you into a meaningfully more selective tier."
  },
  {
    "score": 21,
    "percentile": 57,
    "tier": "Average",
    "color": "#f59e0b",
    "summary": "A 21 is at or near the national average (the average composite is 21). This score is sufficient for admission to most open and moderately selective four-year universities, though it falls below the middle 50% range at most flagship and selective schools.",
    "schools": [
      "Most state university branch campuses",
      "University of Cincinnati",
      "University of Toledo",
      "Wright State University",
      "Many regional public universities"
    ],
    "note": "A retake with focused prep is often worthwhile here — a 3–4 point gain can shift you into a meaningfully more selective tier."
  },
  {
    "score": 20,
    "percentile": 51,
    "tier": "Below Average",
    "color": "#ec4899",
    "summary": "A 20 is below the national average and below the typical admitted range at most four-year universities, though it remains sufficient for many open-enrollment and less selective four-year schools, and for transfer pathways via community college.",
    "schools": [
      "Many open-enrollment state universities",
      "Community colleges with 4-year transfer agreements",
      "Some regional private universities (test-optional admission often available)"
    ],
    "note": "Most colleges in this band are test-optional — submitting essays, GPA, and a strong personal statement may matter more than the score itself."
  },
  {
    "score": 19,
    "percentile": 45,
    "tier": "Below Average",
    "color": "#ec4899",
    "summary": "A 19 is below the national average and below the typical admitted range at most four-year universities, though it remains sufficient for many open-enrollment and less selective four-year schools, and for transfer pathways via community college.",
    "schools": [
      "Many open-enrollment state universities",
      "Community colleges with 4-year transfer agreements",
      "Some regional private universities (test-optional admission often available)"
    ],
    "note": "Most colleges in this band are test-optional — submitting essays, GPA, and a strong personal statement may matter more than the score itself."
  },
  {
    "score": 18,
    "percentile": 38,
    "tier": "Below Average",
    "color": "#ec4899",
    "summary": "A 18 is below the national average and below the typical admitted range at most four-year universities, though it remains sufficient for many open-enrollment and less selective four-year schools, and for transfer pathways via community college.",
    "schools": [
      "Many open-enrollment state universities",
      "Community colleges with 4-year transfer agreements",
      "Some regional private universities (test-optional admission often available)"
    ],
    "note": "Most colleges in this band are test-optional — submitting essays, GPA, and a strong personal statement may matter more than the score itself."
  },
  {
    "score": 17,
    "percentile": 32,
    "tier": "Needs Improvement",
    "color": "#ef4444",
    "summary": "A 17 is well below the national average. Four-year university options narrow considerably at this level, but community colleges and open-admission schools remain accessible, often with guaranteed transfer pathways to four-year universities after building a strong GPA.",
    "schools": [
      "Community colleges (open admission)",
      "Some open-enrollment regional universities",
      "Test-optional four-year schools (consider applying without submitting this score)"
    ],
    "note": "Many colleges are now test-optional — if your GPA and essays are strong, you may be better off not submitting this score at all."
  },
  {
    "score": 16,
    "percentile": 25,
    "tier": "Needs Improvement",
    "color": "#ef4444",
    "summary": "A 16 is well below the national average. Four-year university options narrow considerably at this level, but community colleges and open-admission schools remain accessible, often with guaranteed transfer pathways to four-year universities after building a strong GPA.",
    "schools": [
      "Community colleges (open admission)",
      "Some open-enrollment regional universities",
      "Test-optional four-year schools (consider applying without submitting this score)"
    ],
    "note": "Many colleges are now test-optional — if your GPA and essays are strong, you may be better off not submitting this score at all."
  },
  {
    "score": 15,
    "percentile": 19,
    "tier": "Needs Improvement",
    "color": "#ef4444",
    "summary": "A 15 is well below the national average. Four-year university options narrow considerably at this level, but community colleges and open-admission schools remain accessible, often with guaranteed transfer pathways to four-year universities after building a strong GPA.",
    "schools": [
      "Community colleges (open admission)",
      "Some open-enrollment regional universities",
      "Test-optional four-year schools (consider applying without submitting this score)"
    ],
    "note": "Many colleges are now test-optional — if your GPA and essays are strong, you may be better off not submitting this score at all."
  },
  {
    "score": 14,
    "percentile": 13,
    "tier": "Needs Improvement",
    "color": "#ef4444",
    "summary": "A 14 is well below the national average. Four-year university options narrow considerably at this level, but community colleges and open-admission schools remain accessible, often with guaranteed transfer pathways to four-year universities after building a strong GPA.",
    "schools": [
      "Community colleges (open admission)",
      "Some open-enrollment regional universities",
      "Test-optional four-year schools (consider applying without submitting this score)"
    ],
    "note": "Many colleges are now test-optional — if your GPA and essays are strong, you may be better off not submitting this score at all."
  },
  {
    "score": 13,
    "percentile": 9,
    "tier": "Needs Improvement",
    "color": "#ef4444",
    "summary": "A 13 is well below the national average. Four-year university options narrow considerably at this level, but community colleges and open-admission schools remain accessible, often with guaranteed transfer pathways to four-year universities after building a strong GPA.",
    "schools": [
      "Community colleges (open admission)",
      "Some open-enrollment regional universities",
      "Test-optional four-year schools (consider applying without submitting this score)"
    ],
    "note": "Many colleges are now test-optional — if your GPA and essays are strong, you may be better off not submitting this score at all."
  },
  {
    "score": 12,
    "percentile": 6,
    "tier": "Consider Retesting",
    "color": "#ef4444",
    "summary": "A 12 is far below the national average. At this level, focus on community college pathways, test-optional four-year admission, and a retake after structured prep — ACT composite scores typically rise several points with 2–3 months of targeted practice.",
    "schools": [
      "Community colleges (open admission, guaranteed transfer agreements)",
      "Test-optional four-year universities"
    ],
    "note": "This score is unlikely to be submitted at all — most students in this range apply test-optional and retest before applying further."
  },
  {
    "score": 11,
    "percentile": 3,
    "tier": "Consider Retesting",
    "color": "#ef4444",
    "summary": "A 11 is far below the national average. At this level, focus on community college pathways, test-optional four-year admission, and a retake after structured prep — ACT composite scores typically rise several points with 2–3 months of targeted practice.",
    "schools": [
      "Community colleges (open admission, guaranteed transfer agreements)",
      "Test-optional four-year universities"
    ],
    "note": "This score is unlikely to be submitted at all — most students in this range apply test-optional and retest before applying further."
  },
  {
    "score": 10,
    "percentile": 2,
    "tier": "Consider Retesting",
    "color": "#ef4444",
    "summary": "A 10 is far below the national average. At this level, focus on community college pathways, test-optional four-year admission, and a retake after structured prep — ACT composite scores typically rise several points with 2–3 months of targeted practice.",
    "schools": [
      "Community colleges (open admission, guaranteed transfer agreements)",
      "Test-optional four-year universities"
    ],
    "note": "This score is unlikely to be submitted at all — most students in this range apply test-optional and retest before applying further."
  },
  {
    "score": 9,
    "percentile": 1,
    "tier": "Consider Retesting",
    "color": "#ef4444",
    "summary": "A 9 is far below the national average. At this level, focus on community college pathways, test-optional four-year admission, and a retake after structured prep — ACT composite scores typically rise several points with 2–3 months of targeted practice.",
    "schools": [
      "Community colleges (open admission, guaranteed transfer agreements)",
      "Test-optional four-year universities"
    ],
    "note": "This score is unlikely to be submitted at all — most students in this range apply test-optional and retest before applying further."
  },
  {
    "score": 8,
    "percentile": 1,
    "tier": "Consider Retesting",
    "color": "#ef4444",
    "summary": "A 8 is far below the national average. At this level, focus on community college pathways, test-optional four-year admission, and a retake after structured prep — ACT composite scores typically rise several points with 2–3 months of targeted practice.",
    "schools": [
      "Community colleges (open admission, guaranteed transfer agreements)",
      "Test-optional four-year universities"
    ],
    "note": "This score is unlikely to be submitted at all — most students in this range apply test-optional and retest before applying further."
  },
  {
    "score": 7,
    "percentile": 1,
    "tier": "Consider Retesting",
    "color": "#ef4444",
    "summary": "A 7 is far below the national average. At this level, focus on community college pathways, test-optional four-year admission, and a retake after structured prep — ACT composite scores typically rise several points with 2–3 months of targeted practice.",
    "schools": [
      "Community colleges (open admission, guaranteed transfer agreements)",
      "Test-optional four-year universities"
    ],
    "note": "This score is unlikely to be submitted at all — most students in this range apply test-optional and retest before applying further."
  },
  {
    "score": 6,
    "percentile": 1,
    "tier": "Consider Retesting",
    "color": "#ef4444",
    "summary": "A 6 is far below the national average. At this level, focus on community college pathways, test-optional four-year admission, and a retake after structured prep — ACT composite scores typically rise several points with 2–3 months of targeted practice.",
    "schools": [
      "Community colleges (open admission, guaranteed transfer agreements)",
      "Test-optional four-year universities"
    ],
    "note": "This score is unlikely to be submitted at all — most students in this range apply test-optional and retest before applying further."
  },
  {
    "score": 5,
    "percentile": 1,
    "tier": "Consider Retesting",
    "color": "#ef4444",
    "summary": "A 5 is far below the national average. At this level, focus on community college pathways, test-optional four-year admission, and a retake after structured prep — ACT composite scores typically rise several points with 2–3 months of targeted practice.",
    "schools": [
      "Community colleges (open admission, guaranteed transfer agreements)",
      "Test-optional four-year universities"
    ],
    "note": "This score is unlikely to be submitted at all — most students in this range apply test-optional and retest before applying further."
  },
  {
    "score": 4,
    "percentile": 1,
    "tier": "Consider Retesting",
    "color": "#ef4444",
    "summary": "A 4 is far below the national average. At this level, focus on community college pathways, test-optional four-year admission, and a retake after structured prep — ACT composite scores typically rise several points with 2–3 months of targeted practice.",
    "schools": [
      "Community colleges (open admission, guaranteed transfer agreements)",
      "Test-optional four-year universities"
    ],
    "note": "This score is unlikely to be submitted at all — most students in this range apply test-optional and retest before applying further."
  },
  {
    "score": 3,
    "percentile": 1,
    "tier": "Consider Retesting",
    "color": "#ef4444",
    "summary": "A 3 is far below the national average. At this level, focus on community college pathways, test-optional four-year admission, and a retake after structured prep — ACT composite scores typically rise several points with 2–3 months of targeted practice.",
    "schools": [
      "Community colleges (open admission, guaranteed transfer agreements)",
      "Test-optional four-year universities"
    ],
    "note": "This score is unlikely to be submitted at all — most students in this range apply test-optional and retest before applying further."
  },
  {
    "score": 2,
    "percentile": 1,
    "tier": "Consider Retesting",
    "color": "#ef4444",
    "summary": "A 2 is far below the national average. At this level, focus on community college pathways, test-optional four-year admission, and a retake after structured prep — ACT composite scores typically rise several points with 2–3 months of targeted practice.",
    "schools": [
      "Community colleges (open admission, guaranteed transfer agreements)",
      "Test-optional four-year universities"
    ],
    "note": "This score is unlikely to be submitted at all — most students in this range apply test-optional and retest before applying further."
  },
  {
    "score": 1,
    "percentile": 1,
    "tier": "Consider Retesting",
    "color": "#ef4444",
    "summary": "A 1 is far below the national average. At this level, focus on community college pathways, test-optional four-year admission, and a retake after structured prep — ACT composite scores typically rise several points with 2–3 months of targeted practice.",
    "schools": [
      "Community colleges (open admission, guaranteed transfer agreements)",
      "Test-optional four-year universities"
    ],
    "note": "This score is unlikely to be submitted at all — most students in this range apply test-optional and retest before applying further."
  }
];

export function getCollegeGuideForScore(score: number): ACTCollegeScoreEntry {
  const clamped = Math.max(1, Math.min(36, Math.round(score)));
  return ACT_COLLEGE_GUIDE.find(e => e.score === clamped) ?? ACT_COLLEGE_GUIDE[ACT_COLLEGE_GUIDE.length - 1];
}
