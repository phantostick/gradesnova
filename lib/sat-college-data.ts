// lib/sat-college-data.ts
// Auto-structured SAT score → college fit guide, in 10-point increments (400–1600).
// Tiering reflects published middle-50% SAT ranges and national percentile data.
// Source for percentiles: lib/sat-data.ts (SAT_COMPOSITE_PERCENTILES). School examples
// are illustrative of each tier's typical admitted range, not exhaustive lists.

export interface SATCollegeScoreEntry {
  score: number;
  percentile: number;
  tier: string;
  color: string;
  summary: string;
  schools: string[];
  note: string;
}

export const SAT_COLLEGE_GUIDE: SATCollegeScoreEntry[] = [
  {
    "score": 1600,
    "percentile": 99,
    "tier": "Perfect / Near-Perfect",
    "color": "#34d399",
    "summary": "A 1600 is in the top 1% nationally — at or within a hair of a perfect score. There is no academic case against your testing profile at any university in the country. From here, GPA, course rigor, essays, and extracurriculars are what actually separate applicants.",
    "schools": [
      "MIT",
      "Harvard University",
      "Stanford University",
      "Princeton University",
      "Yale University",
      "Caltech"
    ],
    "note": "At this level the test score stops being a differentiator at elite schools — the rest of your application carries the weight."
  },
  {
    "score": 1590,
    "percentile": 99,
    "tier": "Perfect / Near-Perfect",
    "color": "#34d399",
    "summary": "A 1590 is in the top 1% nationally — at or within a hair of a perfect score. There is no academic case against your testing profile at any university in the country. From here, GPA, course rigor, essays, and extracurriculars are what actually separate applicants.",
    "schools": [
      "MIT",
      "Harvard University",
      "Stanford University",
      "Princeton University",
      "Yale University",
      "Caltech"
    ],
    "note": "At this level the test score stops being a differentiator at elite schools — the rest of your application carries the weight."
  },
  {
    "score": 1580,
    "percentile": 99,
    "tier": "Perfect / Near-Perfect",
    "color": "#34d399",
    "summary": "A 1580 is in the top 1% nationally — at or within a hair of a perfect score. There is no academic case against your testing profile at any university in the country. From here, GPA, course rigor, essays, and extracurriculars are what actually separate applicants.",
    "schools": [
      "MIT",
      "Harvard University",
      "Stanford University",
      "Princeton University",
      "Yale University",
      "Caltech"
    ],
    "note": "At this level the test score stops being a differentiator at elite schools — the rest of your application carries the weight."
  },
  {
    "score": 1570,
    "percentile": 99,
    "tier": "Perfect / Near-Perfect",
    "color": "#34d399",
    "summary": "A 1570 is in the top 1% nationally — at or within a hair of a perfect score. There is no academic case against your testing profile at any university in the country. From here, GPA, course rigor, essays, and extracurriculars are what actually separate applicants.",
    "schools": [
      "MIT",
      "Harvard University",
      "Stanford University",
      "Princeton University",
      "Yale University",
      "Caltech"
    ],
    "note": "At this level the test score stops being a differentiator at elite schools — the rest of your application carries the weight."
  },
  {
    "score": 1560,
    "percentile": 99,
    "tier": "Perfect / Near-Perfect",
    "color": "#34d399",
    "summary": "A 1560 is in the top 1% nationally — at or within a hair of a perfect score. There is no academic case against your testing profile at any university in the country. From here, GPA, course rigor, essays, and extracurriculars are what actually separate applicants.",
    "schools": [
      "MIT",
      "Harvard University",
      "Stanford University",
      "Princeton University",
      "Yale University",
      "Caltech"
    ],
    "note": "At this level the test score stops being a differentiator at elite schools — the rest of your application carries the weight."
  },
  {
    "score": 1550,
    "percentile": 99,
    "tier": "Exceptional",
    "color": "#34d399",
    "summary": "A 1550 is top 1–3% nationally. You're at or above the middle 50% range for every Ivy League school and every top STEM institute. Admission to the most selective schools is realistic, though never guaranteed given how many qualified applicants they turn away.",
    "schools": [
      "Harvard University",
      "Yale University",
      "Princeton University",
      "Columbia University",
      "University of Pennsylvania",
      "Duke University"
    ],
    "note": "Scores at this level rarely differentiate applicants at elite schools — essays and recommendations matter most from here."
  },
  {
    "score": 1540,
    "percentile": 99,
    "tier": "Exceptional",
    "color": "#34d399",
    "summary": "A 1540 is top 1–3% nationally. You're at or above the middle 50% range for every Ivy League school and every top STEM institute. Admission to the most selective schools is realistic, though never guaranteed given how many qualified applicants they turn away.",
    "schools": [
      "Harvard University",
      "Yale University",
      "Princeton University",
      "Columbia University",
      "University of Pennsylvania",
      "Duke University"
    ],
    "note": "Scores at this level rarely differentiate applicants at elite schools — essays and recommendations matter most from here."
  },
  {
    "score": 1530,
    "percentile": 98,
    "tier": "Exceptional",
    "color": "#34d399",
    "summary": "A 1530 is top 1–3% nationally. You're at or above the middle 50% range for every Ivy League school and every top STEM institute. Admission to the most selective schools is realistic, though never guaranteed given how many qualified applicants they turn away.",
    "schools": [
      "Harvard University",
      "Yale University",
      "Princeton University",
      "Columbia University",
      "University of Pennsylvania",
      "Duke University"
    ],
    "note": "Scores at this level rarely differentiate applicants at elite schools — essays and recommendations matter most from here."
  },
  {
    "score": 1520,
    "percentile": 98,
    "tier": "Exceptional",
    "color": "#34d399",
    "summary": "A 1520 is top 1–3% nationally. You're at or above the middle 50% range for every Ivy League school and every top STEM institute. Admission to the most selective schools is realistic, though never guaranteed given how many qualified applicants they turn away.",
    "schools": [
      "Harvard University",
      "Yale University",
      "Princeton University",
      "Columbia University",
      "University of Pennsylvania",
      "Duke University"
    ],
    "note": "Scores at this level rarely differentiate applicants at elite schools — essays and recommendations matter most from here."
  },
  {
    "score": 1510,
    "percentile": 98,
    "tier": "Exceptional",
    "color": "#34d399",
    "summary": "A 1510 is top 1–3% nationally. You're at or above the middle 50% range for every Ivy League school and every top STEM institute. Admission to the most selective schools is realistic, though never guaranteed given how many qualified applicants they turn away.",
    "schools": [
      "Harvard University",
      "Yale University",
      "Princeton University",
      "Columbia University",
      "University of Pennsylvania",
      "Duke University"
    ],
    "note": "Scores at this level rarely differentiate applicants at elite schools — essays and recommendations matter most from here."
  },
  {
    "score": 1500,
    "percentile": 97,
    "tier": "Exceptional",
    "color": "#34d399",
    "summary": "A 1500 is top 1–3% nationally. You're at or above the middle 50% range for every Ivy League school and every top STEM institute. Admission to the most selective schools is realistic, though never guaranteed given how many qualified applicants they turn away.",
    "schools": [
      "Harvard University",
      "Yale University",
      "Princeton University",
      "Columbia University",
      "University of Pennsylvania",
      "Duke University"
    ],
    "note": "Scores at this level rarely differentiate applicants at elite schools — essays and recommendations matter most from here."
  },
  {
    "score": 1490,
    "percentile": 97,
    "tier": "Exceptional",
    "color": "#34d399",
    "summary": "A 1490 is top 1–3% nationally. You're at or above the middle 50% range for every Ivy League school and every top STEM institute. Admission to the most selective schools is realistic, though never guaranteed given how many qualified applicants they turn away.",
    "schools": [
      "Harvard University",
      "Yale University",
      "Princeton University",
      "Columbia University",
      "University of Pennsylvania",
      "Duke University"
    ],
    "note": "Scores at this level rarely differentiate applicants at elite schools — essays and recommendations matter most from here."
  },
  {
    "score": 1480,
    "percentile": 96,
    "tier": "Highly Competitive",
    "color": "#6366f1",
    "summary": "A 1480 places you in the top 4–7% nationally. You're a strong contender at most top-20 national universities and well above the median at most flagship honors colleges, where significant merit scholarships often become realistic.",
    "schools": [
      "Brown University",
      "Dartmouth College",
      "Northwestern University",
      "Cornell University",
      "Rice University",
      "Vanderbilt University"
    ],
    "note": "This range frequently clears merit scholarship thresholds at flagship state honors colleges — check each school's aid pages directly."
  },
  {
    "score": 1470,
    "percentile": 96,
    "tier": "Highly Competitive",
    "color": "#6366f1",
    "summary": "A 1470 places you in the top 4–7% nationally. You're a strong contender at most top-20 national universities and well above the median at most flagship honors colleges, where significant merit scholarships often become realistic.",
    "schools": [
      "Brown University",
      "Dartmouth College",
      "Northwestern University",
      "Cornell University",
      "Rice University",
      "Vanderbilt University"
    ],
    "note": "This range frequently clears merit scholarship thresholds at flagship state honors colleges — check each school's aid pages directly."
  },
  {
    "score": 1460,
    "percentile": 95,
    "tier": "Highly Competitive",
    "color": "#6366f1",
    "summary": "A 1460 places you in the top 4–7% nationally. You're a strong contender at most top-20 national universities and well above the median at most flagship honors colleges, where significant merit scholarships often become realistic.",
    "schools": [
      "Brown University",
      "Dartmouth College",
      "Northwestern University",
      "Cornell University",
      "Rice University",
      "Vanderbilt University"
    ],
    "note": "This range frequently clears merit scholarship thresholds at flagship state honors colleges — check each school's aid pages directly."
  },
  {
    "score": 1450,
    "percentile": 95,
    "tier": "Highly Competitive",
    "color": "#6366f1",
    "summary": "A 1450 places you in the top 4–7% nationally. You're a strong contender at most top-20 national universities and well above the median at most flagship honors colleges, where significant merit scholarships often become realistic.",
    "schools": [
      "Brown University",
      "Dartmouth College",
      "Northwestern University",
      "Cornell University",
      "Rice University",
      "Vanderbilt University"
    ],
    "note": "This range frequently clears merit scholarship thresholds at flagship state honors colleges — check each school's aid pages directly."
  },
  {
    "score": 1440,
    "percentile": 94,
    "tier": "Highly Competitive",
    "color": "#6366f1",
    "summary": "A 1440 places you in the top 4–7% nationally. You're a strong contender at most top-20 national universities and well above the median at most flagship honors colleges, where significant merit scholarships often become realistic.",
    "schools": [
      "Brown University",
      "Dartmouth College",
      "Northwestern University",
      "Cornell University",
      "Rice University",
      "Vanderbilt University"
    ],
    "note": "This range frequently clears merit scholarship thresholds at flagship state honors colleges — check each school's aid pages directly."
  },
  {
    "score": 1430,
    "percentile": 93,
    "tier": "Highly Competitive",
    "color": "#6366f1",
    "summary": "A 1430 places you in the top 4–7% nationally. You're a strong contender at most top-20 national universities and well above the median at most flagship honors colleges, where significant merit scholarships often become realistic.",
    "schools": [
      "Brown University",
      "Dartmouth College",
      "Northwestern University",
      "Cornell University",
      "Rice University",
      "Vanderbilt University"
    ],
    "note": "This range frequently clears merit scholarship thresholds at flagship state honors colleges — check each school's aid pages directly."
  },
  {
    "score": 1420,
    "percentile": 93,
    "tier": "Highly Competitive",
    "color": "#6366f1",
    "summary": "A 1420 places you in the top 4–7% nationally. You're a strong contender at most top-20 national universities and well above the median at most flagship honors colleges, where significant merit scholarships often become realistic.",
    "schools": [
      "Brown University",
      "Dartmouth College",
      "Northwestern University",
      "Cornell University",
      "Rice University",
      "Vanderbilt University"
    ],
    "note": "This range frequently clears merit scholarship thresholds at flagship state honors colleges — check each school's aid pages directly."
  },
  {
    "score": 1410,
    "percentile": 92,
    "tier": "Very Competitive",
    "color": "#6366f1",
    "summary": "A 1410 is roughly top 9–13% nationally. This is comfortably within range for top-30 national universities and well above the median for most state flagships, often unlocking honors college admission and merit aid.",
    "schools": [
      "Georgetown University",
      "University of Michigan",
      "University of Virginia",
      "UCLA",
      "University of North Carolina at Chapel Hill",
      "University of Florida (Honors)"
    ],
    "note": "At many public flagships, this range moves you from \"competitive\" into \"scholarship-eligible\" territory."
  },
  {
    "score": 1400,
    "percentile": 91,
    "tier": "Very Competitive",
    "color": "#6366f1",
    "summary": "A 1400 is roughly top 9–13% nationally. This is comfortably within range for top-30 national universities and well above the median for most state flagships, often unlocking honors college admission and merit aid.",
    "schools": [
      "Georgetown University",
      "University of Michigan",
      "University of Virginia",
      "UCLA",
      "University of North Carolina at Chapel Hill",
      "University of Florida (Honors)"
    ],
    "note": "At many public flagships, this range moves you from \"competitive\" into \"scholarship-eligible\" territory."
  },
  {
    "score": 1390,
    "percentile": 90,
    "tier": "Very Competitive",
    "color": "#6366f1",
    "summary": "A 1390 is roughly top 9–13% nationally. This is comfortably within range for top-30 national universities and well above the median for most state flagships, often unlocking honors college admission and merit aid.",
    "schools": [
      "Georgetown University",
      "University of Michigan",
      "University of Virginia",
      "UCLA",
      "University of North Carolina at Chapel Hill",
      "University of Florida (Honors)"
    ],
    "note": "At many public flagships, this range moves you from \"competitive\" into \"scholarship-eligible\" territory."
  },
  {
    "score": 1380,
    "percentile": 90,
    "tier": "Very Competitive",
    "color": "#6366f1",
    "summary": "A 1380 is roughly top 9–13% nationally. This is comfortably within range for top-30 national universities and well above the median for most state flagships, often unlocking honors college admission and merit aid.",
    "schools": [
      "Georgetown University",
      "University of Michigan",
      "University of Virginia",
      "UCLA",
      "University of North Carolina at Chapel Hill",
      "University of Florida (Honors)"
    ],
    "note": "At many public flagships, this range moves you from \"competitive\" into \"scholarship-eligible\" territory."
  },
  {
    "score": 1370,
    "percentile": 89,
    "tier": "Very Competitive",
    "color": "#6366f1",
    "summary": "A 1370 is roughly top 9–13% nationally. This is comfortably within range for top-30 national universities and well above the median for most state flagships, often unlocking honors college admission and merit aid.",
    "schools": [
      "Georgetown University",
      "University of Michigan",
      "University of Virginia",
      "UCLA",
      "University of North Carolina at Chapel Hill",
      "University of Florida (Honors)"
    ],
    "note": "At many public flagships, this range moves you from \"competitive\" into \"scholarship-eligible\" territory."
  },
  {
    "score": 1360,
    "percentile": 88,
    "tier": "Very Competitive",
    "color": "#6366f1",
    "summary": "A 1360 is roughly top 9–13% nationally. This is comfortably within range for top-30 national universities and well above the median for most state flagships, often unlocking honors college admission and merit aid.",
    "schools": [
      "Georgetown University",
      "University of Michigan",
      "University of Virginia",
      "UCLA",
      "University of North Carolina at Chapel Hill",
      "University of Florida (Honors)"
    ],
    "note": "At many public flagships, this range moves you from \"competitive\" into \"scholarship-eligible\" territory."
  },
  {
    "score": 1350,
    "percentile": 87,
    "tier": "Very Competitive",
    "color": "#6366f1",
    "summary": "A 1350 is roughly top 9–13% nationally. This is comfortably within range for top-30 national universities and well above the median for most state flagships, often unlocking honors college admission and merit aid.",
    "schools": [
      "Georgetown University",
      "University of Michigan",
      "University of Virginia",
      "UCLA",
      "University of North Carolina at Chapel Hill",
      "University of Florida (Honors)"
    ],
    "note": "At many public flagships, this range moves you from \"competitive\" into \"scholarship-eligible\" territory."
  },
  {
    "score": 1340,
    "percentile": 86,
    "tier": "Competitive",
    "color": "#a855f7",
    "summary": "A 1340 is top 15–20% nationally — solidly above average and competitive at most top-50 national universities, as well as a strong match for the upper half of most state flagship admitted ranges.",
    "schools": [
      "New York University",
      "Boston College",
      "University of Wisconsin–Madison",
      "University of Texas at Austin",
      "Ohio State University (Honors)",
      "Penn State University"
    ],
    "note": "A solid \"match school\" range — strong admission odds at well-regarded universities without needing a flawless profile elsewhere."
  },
  {
    "score": 1330,
    "percentile": 85,
    "tier": "Competitive",
    "color": "#a855f7",
    "summary": "A 1330 is top 15–20% nationally — solidly above average and competitive at most top-50 national universities, as well as a strong match for the upper half of most state flagship admitted ranges.",
    "schools": [
      "New York University",
      "Boston College",
      "University of Wisconsin–Madison",
      "University of Texas at Austin",
      "Ohio State University (Honors)",
      "Penn State University"
    ],
    "note": "A solid \"match school\" range — strong admission odds at well-regarded universities without needing a flawless profile elsewhere."
  },
  {
    "score": 1320,
    "percentile": 84,
    "tier": "Competitive",
    "color": "#a855f7",
    "summary": "A 1320 is top 15–20% nationally — solidly above average and competitive at most top-50 national universities, as well as a strong match for the upper half of most state flagship admitted ranges.",
    "schools": [
      "New York University",
      "Boston College",
      "University of Wisconsin–Madison",
      "University of Texas at Austin",
      "Ohio State University (Honors)",
      "Penn State University"
    ],
    "note": "A solid \"match school\" range — strong admission odds at well-regarded universities without needing a flawless profile elsewhere."
  },
  {
    "score": 1310,
    "percentile": 83,
    "tier": "Competitive",
    "color": "#a855f7",
    "summary": "A 1310 is top 15–20% nationally — solidly above average and competitive at most top-50 national universities, as well as a strong match for the upper half of most state flagship admitted ranges.",
    "schools": [
      "New York University",
      "Boston College",
      "University of Wisconsin–Madison",
      "University of Texas at Austin",
      "Ohio State University (Honors)",
      "Penn State University"
    ],
    "note": "A solid \"match school\" range — strong admission odds at well-regarded universities without needing a flawless profile elsewhere."
  },
  {
    "score": 1300,
    "percentile": 82,
    "tier": "Competitive",
    "color": "#a855f7",
    "summary": "A 1300 is top 15–20% nationally — solidly above average and competitive at most top-50 national universities, as well as a strong match for the upper half of most state flagship admitted ranges.",
    "schools": [
      "New York University",
      "Boston College",
      "University of Wisconsin–Madison",
      "University of Texas at Austin",
      "Ohio State University (Honors)",
      "Penn State University"
    ],
    "note": "A solid \"match school\" range — strong admission odds at well-regarded universities without needing a flawless profile elsewhere."
  },
  {
    "score": 1290,
    "percentile": 81,
    "tier": "Competitive",
    "color": "#a855f7",
    "summary": "A 1290 is top 15–20% nationally — solidly above average and competitive at most top-50 national universities, as well as a strong match for the upper half of most state flagship admitted ranges.",
    "schools": [
      "New York University",
      "Boston College",
      "University of Wisconsin–Madison",
      "University of Texas at Austin",
      "Ohio State University (Honors)",
      "Penn State University"
    ],
    "note": "A solid \"match school\" range — strong admission odds at well-regarded universities without needing a flawless profile elsewhere."
  },
  {
    "score": 1280,
    "percentile": 80,
    "tier": "Competitive",
    "color": "#a855f7",
    "summary": "A 1280 is top 15–20% nationally — solidly above average and competitive at most top-50 national universities, as well as a strong match for the upper half of most state flagship admitted ranges.",
    "schools": [
      "New York University",
      "Boston College",
      "University of Wisconsin–Madison",
      "University of Texas at Austin",
      "Ohio State University (Honors)",
      "Penn State University"
    ],
    "note": "A solid \"match school\" range — strong admission odds at well-regarded universities without needing a flawless profile elsewhere."
  },
  {
    "score": 1270,
    "percentile": 78,
    "tier": "Above Average",
    "color": "#a855f7",
    "summary": "A 1270 is top 22–30% nationally, clearly above the national average of roughly 1050. This score is solidly within range for most state flagships and many respected regional and private universities.",
    "schools": [
      "Indiana University Bloomington",
      "University of Washington",
      "Texas A&M University",
      "University of South Carolina",
      "Michigan State University",
      "Clemson University"
    ],
    "note": "Most flagships publish their middle 50% SAT range online — this score typically lands inside or near the bottom of that range."
  },
  {
    "score": 1260,
    "percentile": 77,
    "tier": "Above Average",
    "color": "#a855f7",
    "summary": "A 1260 is top 22–30% nationally, clearly above the national average of roughly 1050. This score is solidly within range for most state flagships and many respected regional and private universities.",
    "schools": [
      "Indiana University Bloomington",
      "University of Washington",
      "Texas A&M University",
      "University of South Carolina",
      "Michigan State University",
      "Clemson University"
    ],
    "note": "Most flagships publish their middle 50% SAT range online — this score typically lands inside or near the bottom of that range."
  },
  {
    "score": 1250,
    "percentile": 76,
    "tier": "Above Average",
    "color": "#a855f7",
    "summary": "A 1250 is top 22–30% nationally, clearly above the national average of roughly 1050. This score is solidly within range for most state flagships and many respected regional and private universities.",
    "schools": [
      "Indiana University Bloomington",
      "University of Washington",
      "Texas A&M University",
      "University of South Carolina",
      "Michigan State University",
      "Clemson University"
    ],
    "note": "Most flagships publish their middle 50% SAT range online — this score typically lands inside or near the bottom of that range."
  },
  {
    "score": 1240,
    "percentile": 74,
    "tier": "Above Average",
    "color": "#a855f7",
    "summary": "A 1240 is top 22–30% nationally, clearly above the national average of roughly 1050. This score is solidly within range for most state flagships and many respected regional and private universities.",
    "schools": [
      "Indiana University Bloomington",
      "University of Washington",
      "Texas A&M University",
      "University of South Carolina",
      "Michigan State University",
      "Clemson University"
    ],
    "note": "Most flagships publish their middle 50% SAT range online — this score typically lands inside or near the bottom of that range."
  },
  {
    "score": 1230,
    "percentile": 73,
    "tier": "Above Average",
    "color": "#a855f7",
    "summary": "A 1230 is top 22–30% nationally, clearly above the national average of roughly 1050. This score is solidly within range for most state flagships and many respected regional and private universities.",
    "schools": [
      "Indiana University Bloomington",
      "University of Washington",
      "Texas A&M University",
      "University of South Carolina",
      "Michigan State University",
      "Clemson University"
    ],
    "note": "Most flagships publish their middle 50% SAT range online — this score typically lands inside or near the bottom of that range."
  },
  {
    "score": 1220,
    "percentile": 71,
    "tier": "Above Average",
    "color": "#a855f7",
    "summary": "A 1220 is top 22–30% nationally, clearly above the national average of roughly 1050. This score is solidly within range for most state flagships and many respected regional and private universities.",
    "schools": [
      "Indiana University Bloomington",
      "University of Washington",
      "Texas A&M University",
      "University of South Carolina",
      "Michigan State University",
      "Clemson University"
    ],
    "note": "Most flagships publish their middle 50% SAT range online — this score typically lands inside or near the bottom of that range."
  },
  {
    "score": 1210,
    "percentile": 70,
    "tier": "Above Average",
    "color": "#a855f7",
    "summary": "A 1210 is top 22–30% nationally, clearly above the national average of roughly 1050. This score is solidly within range for most state flagships and many respected regional and private universities.",
    "schools": [
      "Indiana University Bloomington",
      "University of Washington",
      "Texas A&M University",
      "University of South Carolina",
      "Michigan State University",
      "Clemson University"
    ],
    "note": "Most flagships publish their middle 50% SAT range online — this score typically lands inside or near the bottom of that range."
  },
  {
    "score": 1200,
    "percentile": 69,
    "tier": "Solid",
    "color": "#f59e0b",
    "summary": "A 1200 is well above the national average (~1050) and a reliable score for admission at the large majority of four-year public and private universities outside the most selective tier.",
    "schools": [
      "University of Arizona",
      "University of Alabama",
      "University of Oregon",
      "Auburn University",
      "University of Kansas",
      "University of Cincinnati (Honors)"
    ],
    "note": "At this range your application is generally judged on overall academic record rather than the test score alone."
  },
  {
    "score": 1190,
    "percentile": 67,
    "tier": "Solid",
    "color": "#f59e0b",
    "summary": "A 1190 is well above the national average (~1050) and a reliable score for admission at the large majority of four-year public and private universities outside the most selective tier.",
    "schools": [
      "University of Arizona",
      "University of Alabama",
      "University of Oregon",
      "Auburn University",
      "University of Kansas",
      "University of Cincinnati (Honors)"
    ],
    "note": "At this range your application is generally judged on overall academic record rather than the test score alone."
  },
  {
    "score": 1180,
    "percentile": 65,
    "tier": "Solid",
    "color": "#f59e0b",
    "summary": "A 1180 is well above the national average (~1050) and a reliable score for admission at the large majority of four-year public and private universities outside the most selective tier.",
    "schools": [
      "University of Arizona",
      "University of Alabama",
      "University of Oregon",
      "Auburn University",
      "University of Kansas",
      "University of Cincinnati (Honors)"
    ],
    "note": "At this range your application is generally judged on overall academic record rather than the test score alone."
  },
  {
    "score": 1170,
    "percentile": 64,
    "tier": "Solid",
    "color": "#f59e0b",
    "summary": "A 1170 is well above the national average (~1050) and a reliable score for admission at the large majority of four-year public and private universities outside the most selective tier.",
    "schools": [
      "University of Arizona",
      "University of Alabama",
      "University of Oregon",
      "Auburn University",
      "University of Kansas",
      "University of Cincinnati (Honors)"
    ],
    "note": "At this range your application is generally judged on overall academic record rather than the test score alone."
  },
  {
    "score": 1160,
    "percentile": 62,
    "tier": "Solid",
    "color": "#f59e0b",
    "summary": "A 1160 is well above the national average (~1050) and a reliable score for admission at the large majority of four-year public and private universities outside the most selective tier.",
    "schools": [
      "University of Arizona",
      "University of Alabama",
      "University of Oregon",
      "Auburn University",
      "University of Kansas",
      "University of Cincinnati (Honors)"
    ],
    "note": "At this range your application is generally judged on overall academic record rather than the test score alone."
  },
  {
    "score": 1150,
    "percentile": 60,
    "tier": "Solid",
    "color": "#f59e0b",
    "summary": "A 1150 is well above the national average (~1050) and a reliable score for admission at the large majority of four-year public and private universities outside the most selective tier.",
    "schools": [
      "University of Arizona",
      "University of Alabama",
      "University of Oregon",
      "Auburn University",
      "University of Kansas",
      "University of Cincinnati (Honors)"
    ],
    "note": "At this range your application is generally judged on overall academic record rather than the test score alone."
  },
  {
    "score": 1140,
    "percentile": 59,
    "tier": "Solid",
    "color": "#f59e0b",
    "summary": "A 1140 is well above the national average (~1050) and a reliable score for admission at the large majority of four-year public and private universities outside the most selective tier.",
    "schools": [
      "University of Arizona",
      "University of Alabama",
      "University of Oregon",
      "Auburn University",
      "University of Kansas",
      "University of Cincinnati (Honors)"
    ],
    "note": "At this range your application is generally judged on overall academic record rather than the test score alone."
  },
  {
    "score": 1130,
    "percentile": 57,
    "tier": "Average",
    "color": "#f59e0b",
    "summary": "A 1130 is at or near the national average (around 1050). This score is sufficient for admission to most open and moderately selective four-year universities, though below the middle 50% range at most flagship and selective schools.",
    "schools": [
      "Most state university branch campuses",
      "University of Toledo",
      "Wright State University",
      "Many regional public universities"
    ],
    "note": "A retake with focused prep is often worthwhile — a 50–100 point gain can shift you into a meaningfully more selective tier."
  },
  {
    "score": 1120,
    "percentile": 55,
    "tier": "Average",
    "color": "#f59e0b",
    "summary": "A 1120 is at or near the national average (around 1050). This score is sufficient for admission to most open and moderately selective four-year universities, though below the middle 50% range at most flagship and selective schools.",
    "schools": [
      "Most state university branch campuses",
      "University of Toledo",
      "Wright State University",
      "Many regional public universities"
    ],
    "note": "A retake with focused prep is often worthwhile — a 50–100 point gain can shift you into a meaningfully more selective tier."
  },
  {
    "score": 1110,
    "percentile": 53,
    "tier": "Average",
    "color": "#f59e0b",
    "summary": "A 1110 is at or near the national average (around 1050). This score is sufficient for admission to most open and moderately selective four-year universities, though below the middle 50% range at most flagship and selective schools.",
    "schools": [
      "Most state university branch campuses",
      "University of Toledo",
      "Wright State University",
      "Many regional public universities"
    ],
    "note": "A retake with focused prep is often worthwhile — a 50–100 point gain can shift you into a meaningfully more selective tier."
  },
  {
    "score": 1100,
    "percentile": 52,
    "tier": "Average",
    "color": "#f59e0b",
    "summary": "A 1100 is at or near the national average (around 1050). This score is sufficient for admission to most open and moderately selective four-year universities, though below the middle 50% range at most flagship and selective schools.",
    "schools": [
      "Most state university branch campuses",
      "University of Toledo",
      "Wright State University",
      "Many regional public universities"
    ],
    "note": "A retake with focused prep is often worthwhile — a 50–100 point gain can shift you into a meaningfully more selective tier."
  },
  {
    "score": 1090,
    "percentile": 50,
    "tier": "Average",
    "color": "#f59e0b",
    "summary": "A 1090 is at or near the national average (around 1050). This score is sufficient for admission to most open and moderately selective four-year universities, though below the middle 50% range at most flagship and selective schools.",
    "schools": [
      "Most state university branch campuses",
      "University of Toledo",
      "Wright State University",
      "Many regional public universities"
    ],
    "note": "A retake with focused prep is often worthwhile — a 50–100 point gain can shift you into a meaningfully more selective tier."
  },
  {
    "score": 1080,
    "percentile": 48,
    "tier": "Average",
    "color": "#f59e0b",
    "summary": "A 1080 is at or near the national average (around 1050). This score is sufficient for admission to most open and moderately selective four-year universities, though below the middle 50% range at most flagship and selective schools.",
    "schools": [
      "Most state university branch campuses",
      "University of Toledo",
      "Wright State University",
      "Many regional public universities"
    ],
    "note": "A retake with focused prep is often worthwhile — a 50–100 point gain can shift you into a meaningfully more selective tier."
  },
  {
    "score": 1070,
    "percentile": 46,
    "tier": "Average",
    "color": "#f59e0b",
    "summary": "A 1070 is at or near the national average (around 1050). This score is sufficient for admission to most open and moderately selective four-year universities, though below the middle 50% range at most flagship and selective schools.",
    "schools": [
      "Most state university branch campuses",
      "University of Toledo",
      "Wright State University",
      "Many regional public universities"
    ],
    "note": "A retake with focused prep is often worthwhile — a 50–100 point gain can shift you into a meaningfully more selective tier."
  },
  {
    "score": 1060,
    "percentile": 44,
    "tier": "Average",
    "color": "#f59e0b",
    "summary": "A 1060 is at or near the national average (around 1050). This score is sufficient for admission to most open and moderately selective four-year universities, though below the middle 50% range at most flagship and selective schools.",
    "schools": [
      "Most state university branch campuses",
      "University of Toledo",
      "Wright State University",
      "Many regional public universities"
    ],
    "note": "A retake with focused prep is often worthwhile — a 50–100 point gain can shift you into a meaningfully more selective tier."
  },
  {
    "score": 1050,
    "percentile": 43,
    "tier": "Average",
    "color": "#f59e0b",
    "summary": "A 1050 is at or near the national average (around 1050). This score is sufficient for admission to most open and moderately selective four-year universities, though below the middle 50% range at most flagship and selective schools.",
    "schools": [
      "Most state university branch campuses",
      "University of Toledo",
      "Wright State University",
      "Many regional public universities"
    ],
    "note": "A retake with focused prep is often worthwhile — a 50–100 point gain can shift you into a meaningfully more selective tier."
  },
  {
    "score": 1040,
    "percentile": 41,
    "tier": "Average",
    "color": "#f59e0b",
    "summary": "A 1040 is at or near the national average (around 1050). This score is sufficient for admission to most open and moderately selective four-year universities, though below the middle 50% range at most flagship and selective schools.",
    "schools": [
      "Most state university branch campuses",
      "University of Toledo",
      "Wright State University",
      "Many regional public universities"
    ],
    "note": "A retake with focused prep is often worthwhile — a 50–100 point gain can shift you into a meaningfully more selective tier."
  },
  {
    "score": 1030,
    "percentile": 39,
    "tier": "Average",
    "color": "#f59e0b",
    "summary": "A 1030 is at or near the national average (around 1050). This score is sufficient for admission to most open and moderately selective four-year universities, though below the middle 50% range at most flagship and selective schools.",
    "schools": [
      "Most state university branch campuses",
      "University of Toledo",
      "Wright State University",
      "Many regional public universities"
    ],
    "note": "A retake with focused prep is often worthwhile — a 50–100 point gain can shift you into a meaningfully more selective tier."
  },
  {
    "score": 1020,
    "percentile": 37,
    "tier": "Average",
    "color": "#f59e0b",
    "summary": "A 1020 is at or near the national average (around 1050). This score is sufficient for admission to most open and moderately selective four-year universities, though below the middle 50% range at most flagship and selective schools.",
    "schools": [
      "Most state university branch campuses",
      "University of Toledo",
      "Wright State University",
      "Many regional public universities"
    ],
    "note": "A retake with focused prep is often worthwhile — a 50–100 point gain can shift you into a meaningfully more selective tier."
  },
  {
    "score": 1010,
    "percentile": 36,
    "tier": "Average",
    "color": "#f59e0b",
    "summary": "A 1010 is at or near the national average (around 1050). This score is sufficient for admission to most open and moderately selective four-year universities, though below the middle 50% range at most flagship and selective schools.",
    "schools": [
      "Most state university branch campuses",
      "University of Toledo",
      "Wright State University",
      "Many regional public universities"
    ],
    "note": "A retake with focused prep is often worthwhile — a 50–100 point gain can shift you into a meaningfully more selective tier."
  },
  {
    "score": 1000,
    "percentile": 34,
    "tier": "Average",
    "color": "#f59e0b",
    "summary": "A 1000 is at or near the national average (around 1050). This score is sufficient for admission to most open and moderately selective four-year universities, though below the middle 50% range at most flagship and selective schools.",
    "schools": [
      "Most state university branch campuses",
      "University of Toledo",
      "Wright State University",
      "Many regional public universities"
    ],
    "note": "A retake with focused prep is often worthwhile — a 50–100 point gain can shift you into a meaningfully more selective tier."
  },
  {
    "score": 990,
    "percentile": 32,
    "tier": "Below Average",
    "color": "#ec4899",
    "summary": "A 990 is below the national average and below the typical admitted range at most four-year universities, though it remains sufficient for many open-enrollment and less selective four-year schools, and for transfer pathways via community college.",
    "schools": [
      "Many open-enrollment state universities",
      "Community colleges with 4-year transfer agreements",
      "Some regional private universities (often test-optional)"
    ],
    "note": "Most colleges in this band are test-optional — a strong GPA and personal statement may matter more than this score."
  },
  {
    "score": 980,
    "percentile": 30,
    "tier": "Below Average",
    "color": "#ec4899",
    "summary": "A 980 is below the national average and below the typical admitted range at most four-year universities, though it remains sufficient for many open-enrollment and less selective four-year schools, and for transfer pathways via community college.",
    "schools": [
      "Many open-enrollment state universities",
      "Community colleges with 4-year transfer agreements",
      "Some regional private universities (often test-optional)"
    ],
    "note": "Most colleges in this band are test-optional — a strong GPA and personal statement may matter more than this score."
  },
  {
    "score": 970,
    "percentile": 29,
    "tier": "Below Average",
    "color": "#ec4899",
    "summary": "A 970 is below the national average and below the typical admitted range at most four-year universities, though it remains sufficient for many open-enrollment and less selective four-year schools, and for transfer pathways via community college.",
    "schools": [
      "Many open-enrollment state universities",
      "Community colleges with 4-year transfer agreements",
      "Some regional private universities (often test-optional)"
    ],
    "note": "Most colleges in this band are test-optional — a strong GPA and personal statement may matter more than this score."
  },
  {
    "score": 960,
    "percentile": 27,
    "tier": "Below Average",
    "color": "#ec4899",
    "summary": "A 960 is below the national average and below the typical admitted range at most four-year universities, though it remains sufficient for many open-enrollment and less selective four-year schools, and for transfer pathways via community college.",
    "schools": [
      "Many open-enrollment state universities",
      "Community colleges with 4-year transfer agreements",
      "Some regional private universities (often test-optional)"
    ],
    "note": "Most colleges in this band are test-optional — a strong GPA and personal statement may matter more than this score."
  },
  {
    "score": 950,
    "percentile": 26,
    "tier": "Below Average",
    "color": "#ec4899",
    "summary": "A 950 is below the national average and below the typical admitted range at most four-year universities, though it remains sufficient for many open-enrollment and less selective four-year schools, and for transfer pathways via community college.",
    "schools": [
      "Many open-enrollment state universities",
      "Community colleges with 4-year transfer agreements",
      "Some regional private universities (often test-optional)"
    ],
    "note": "Most colleges in this band are test-optional — a strong GPA and personal statement may matter more than this score."
  },
  {
    "score": 940,
    "percentile": 24,
    "tier": "Below Average",
    "color": "#ec4899",
    "summary": "A 940 is below the national average and below the typical admitted range at most four-year universities, though it remains sufficient for many open-enrollment and less selective four-year schools, and for transfer pathways via community college.",
    "schools": [
      "Many open-enrollment state universities",
      "Community colleges with 4-year transfer agreements",
      "Some regional private universities (often test-optional)"
    ],
    "note": "Most colleges in this band are test-optional — a strong GPA and personal statement may matter more than this score."
  },
  {
    "score": 930,
    "percentile": 23,
    "tier": "Below Average",
    "color": "#ec4899",
    "summary": "A 930 is below the national average and below the typical admitted range at most four-year universities, though it remains sufficient for many open-enrollment and less selective four-year schools, and for transfer pathways via community college.",
    "schools": [
      "Many open-enrollment state universities",
      "Community colleges with 4-year transfer agreements",
      "Some regional private universities (often test-optional)"
    ],
    "note": "Most colleges in this band are test-optional — a strong GPA and personal statement may matter more than this score."
  },
  {
    "score": 920,
    "percentile": 21,
    "tier": "Below Average",
    "color": "#ec4899",
    "summary": "A 920 is below the national average and below the typical admitted range at most four-year universities, though it remains sufficient for many open-enrollment and less selective four-year schools, and for transfer pathways via community college.",
    "schools": [
      "Many open-enrollment state universities",
      "Community colleges with 4-year transfer agreements",
      "Some regional private universities (often test-optional)"
    ],
    "note": "Most colleges in this band are test-optional — a strong GPA and personal statement may matter more than this score."
  },
  {
    "score": 910,
    "percentile": 20,
    "tier": "Below Average",
    "color": "#ec4899",
    "summary": "A 910 is below the national average and below the typical admitted range at most four-year universities, though it remains sufficient for many open-enrollment and less selective four-year schools, and for transfer pathways via community college.",
    "schools": [
      "Many open-enrollment state universities",
      "Community colleges with 4-year transfer agreements",
      "Some regional private universities (often test-optional)"
    ],
    "note": "Most colleges in this band are test-optional — a strong GPA and personal statement may matter more than this score."
  },
  {
    "score": 900,
    "percentile": 19,
    "tier": "Below Average",
    "color": "#ec4899",
    "summary": "A 900 is below the national average and below the typical admitted range at most four-year universities, though it remains sufficient for many open-enrollment and less selective four-year schools, and for transfer pathways via community college.",
    "schools": [
      "Many open-enrollment state universities",
      "Community colleges with 4-year transfer agreements",
      "Some regional private universities (often test-optional)"
    ],
    "note": "Most colleges in this band are test-optional — a strong GPA and personal statement may matter more than this score."
  },
  {
    "score": 890,
    "percentile": 17,
    "tier": "Below Average",
    "color": "#ec4899",
    "summary": "A 890 is below the national average and below the typical admitted range at most four-year universities, though it remains sufficient for many open-enrollment and less selective four-year schools, and for transfer pathways via community college.",
    "schools": [
      "Many open-enrollment state universities",
      "Community colleges with 4-year transfer agreements",
      "Some regional private universities (often test-optional)"
    ],
    "note": "Most colleges in this band are test-optional — a strong GPA and personal statement may matter more than this score."
  },
  {
    "score": 880,
    "percentile": 16,
    "tier": "Below Average",
    "color": "#ec4899",
    "summary": "A 880 is below the national average and below the typical admitted range at most four-year universities, though it remains sufficient for many open-enrollment and less selective four-year schools, and for transfer pathways via community college.",
    "schools": [
      "Many open-enrollment state universities",
      "Community colleges with 4-year transfer agreements",
      "Some regional private universities (often test-optional)"
    ],
    "note": "Most colleges in this band are test-optional — a strong GPA and personal statement may matter more than this score."
  },
  {
    "score": 870,
    "percentile": 15,
    "tier": "Below Average",
    "color": "#ec4899",
    "summary": "A 870 is below the national average and below the typical admitted range at most four-year universities, though it remains sufficient for many open-enrollment and less selective four-year schools, and for transfer pathways via community college.",
    "schools": [
      "Many open-enrollment state universities",
      "Community colleges with 4-year transfer agreements",
      "Some regional private universities (often test-optional)"
    ],
    "note": "Most colleges in this band are test-optional — a strong GPA and personal statement may matter more than this score."
  },
  {
    "score": 860,
    "percentile": 14,
    "tier": "Below Average",
    "color": "#ec4899",
    "summary": "A 860 is below the national average and below the typical admitted range at most four-year universities, though it remains sufficient for many open-enrollment and less selective four-year schools, and for transfer pathways via community college.",
    "schools": [
      "Many open-enrollment state universities",
      "Community colleges with 4-year transfer agreements",
      "Some regional private universities (often test-optional)"
    ],
    "note": "Most colleges in this band are test-optional — a strong GPA and personal statement may matter more than this score."
  },
  {
    "score": 850,
    "percentile": 12,
    "tier": "Below Average",
    "color": "#ec4899",
    "summary": "A 850 is below the national average and below the typical admitted range at most four-year universities, though it remains sufficient for many open-enrollment and less selective four-year schools, and for transfer pathways via community college.",
    "schools": [
      "Many open-enrollment state universities",
      "Community colleges with 4-year transfer agreements",
      "Some regional private universities (often test-optional)"
    ],
    "note": "Most colleges in this band are test-optional — a strong GPA and personal statement may matter more than this score."
  },
  {
    "score": 840,
    "percentile": 11,
    "tier": "Consider Retesting",
    "color": "#ef4444",
    "summary": "A 840 is well below the national average. Four-year options narrow considerably here, but community colleges and open-admission schools remain accessible, often with guaranteed transfer pathways after building a strong GPA. A retake after structured prep is usually the better path.",
    "schools": [
      "Community colleges (open admission, guaranteed transfer agreements)",
      "Test-optional four-year universities"
    ],
    "note": "Most students in this range apply test-optional and retest before applying further — this score is unlikely to be the one submitted."
  },
  {
    "score": 830,
    "percentile": 10,
    "tier": "Consider Retesting",
    "color": "#ef4444",
    "summary": "A 830 is well below the national average. Four-year options narrow considerably here, but community colleges and open-admission schools remain accessible, often with guaranteed transfer pathways after building a strong GPA. A retake after structured prep is usually the better path.",
    "schools": [
      "Community colleges (open admission, guaranteed transfer agreements)",
      "Test-optional four-year universities"
    ],
    "note": "Most students in this range apply test-optional and retest before applying further — this score is unlikely to be the one submitted."
  },
  {
    "score": 820,
    "percentile": 9,
    "tier": "Consider Retesting",
    "color": "#ef4444",
    "summary": "A 820 is well below the national average. Four-year options narrow considerably here, but community colleges and open-admission schools remain accessible, often with guaranteed transfer pathways after building a strong GPA. A retake after structured prep is usually the better path.",
    "schools": [
      "Community colleges (open admission, guaranteed transfer agreements)",
      "Test-optional four-year universities"
    ],
    "note": "Most students in this range apply test-optional and retest before applying further — this score is unlikely to be the one submitted."
  },
  {
    "score": 810,
    "percentile": 8,
    "tier": "Consider Retesting",
    "color": "#ef4444",
    "summary": "A 810 is well below the national average. Four-year options narrow considerably here, but community colleges and open-admission schools remain accessible, often with guaranteed transfer pathways after building a strong GPA. A retake after structured prep is usually the better path.",
    "schools": [
      "Community colleges (open admission, guaranteed transfer agreements)",
      "Test-optional four-year universities"
    ],
    "note": "Most students in this range apply test-optional and retest before applying further — this score is unlikely to be the one submitted."
  },
  {
    "score": 800,
    "percentile": 7,
    "tier": "Consider Retesting",
    "color": "#ef4444",
    "summary": "A 800 is well below the national average. Four-year options narrow considerably here, but community colleges and open-admission schools remain accessible, often with guaranteed transfer pathways after building a strong GPA. A retake after structured prep is usually the better path.",
    "schools": [
      "Community colleges (open admission, guaranteed transfer agreements)",
      "Test-optional four-year universities"
    ],
    "note": "Most students in this range apply test-optional and retest before applying further — this score is unlikely to be the one submitted."
  },
  {
    "score": 790,
    "percentile": 6,
    "tier": "Consider Retesting",
    "color": "#ef4444",
    "summary": "A 790 is well below the national average. Four-year options narrow considerably here, but community colleges and open-admission schools remain accessible, often with guaranteed transfer pathways after building a strong GPA. A retake after structured prep is usually the better path.",
    "schools": [
      "Community colleges (open admission, guaranteed transfer agreements)",
      "Test-optional four-year universities"
    ],
    "note": "Most students in this range apply test-optional and retest before applying further — this score is unlikely to be the one submitted."
  },
  {
    "score": 780,
    "percentile": 6,
    "tier": "Consider Retesting",
    "color": "#ef4444",
    "summary": "A 780 is well below the national average. Four-year options narrow considerably here, but community colleges and open-admission schools remain accessible, often with guaranteed transfer pathways after building a strong GPA. A retake after structured prep is usually the better path.",
    "schools": [
      "Community colleges (open admission, guaranteed transfer agreements)",
      "Test-optional four-year universities"
    ],
    "note": "Most students in this range apply test-optional and retest before applying further — this score is unlikely to be the one submitted."
  },
  {
    "score": 770,
    "percentile": 5,
    "tier": "Consider Retesting",
    "color": "#ef4444",
    "summary": "A 770 is well below the national average. Four-year options narrow considerably here, but community colleges and open-admission schools remain accessible, often with guaranteed transfer pathways after building a strong GPA. A retake after structured prep is usually the better path.",
    "schools": [
      "Community colleges (open admission, guaranteed transfer agreements)",
      "Test-optional four-year universities"
    ],
    "note": "Most students in this range apply test-optional and retest before applying further — this score is unlikely to be the one submitted."
  },
  {
    "score": 760,
    "percentile": 4,
    "tier": "Consider Retesting",
    "color": "#ef4444",
    "summary": "A 760 is well below the national average. Four-year options narrow considerably here, but community colleges and open-admission schools remain accessible, often with guaranteed transfer pathways after building a strong GPA. A retake after structured prep is usually the better path.",
    "schools": [
      "Community colleges (open admission, guaranteed transfer agreements)",
      "Test-optional four-year universities"
    ],
    "note": "Most students in this range apply test-optional and retest before applying further — this score is unlikely to be the one submitted."
  },
  {
    "score": 750,
    "percentile": 4,
    "tier": "Consider Retesting",
    "color": "#ef4444",
    "summary": "A 750 is well below the national average. Four-year options narrow considerably here, but community colleges and open-admission schools remain accessible, often with guaranteed transfer pathways after building a strong GPA. A retake after structured prep is usually the better path.",
    "schools": [
      "Community colleges (open admission, guaranteed transfer agreements)",
      "Test-optional four-year universities"
    ],
    "note": "Most students in this range apply test-optional and retest before applying further — this score is unlikely to be the one submitted."
  },
  {
    "score": 740,
    "percentile": 3,
    "tier": "Consider Retesting",
    "color": "#ef4444",
    "summary": "A 740 is well below the national average. Four-year options narrow considerably here, but community colleges and open-admission schools remain accessible, often with guaranteed transfer pathways after building a strong GPA. A retake after structured prep is usually the better path.",
    "schools": [
      "Community colleges (open admission, guaranteed transfer agreements)",
      "Test-optional four-year universities"
    ],
    "note": "Most students in this range apply test-optional and retest before applying further — this score is unlikely to be the one submitted."
  },
  {
    "score": 730,
    "percentile": 3,
    "tier": "Consider Retesting",
    "color": "#ef4444",
    "summary": "A 730 is well below the national average. Four-year options narrow considerably here, but community colleges and open-admission schools remain accessible, often with guaranteed transfer pathways after building a strong GPA. A retake after structured prep is usually the better path.",
    "schools": [
      "Community colleges (open admission, guaranteed transfer agreements)",
      "Test-optional four-year universities"
    ],
    "note": "Most students in this range apply test-optional and retest before applying further — this score is unlikely to be the one submitted."
  },
  {
    "score": 720,
    "percentile": 2,
    "tier": "Consider Retesting",
    "color": "#ef4444",
    "summary": "A 720 is well below the national average. Four-year options narrow considerably here, but community colleges and open-admission schools remain accessible, often with guaranteed transfer pathways after building a strong GPA. A retake after structured prep is usually the better path.",
    "schools": [
      "Community colleges (open admission, guaranteed transfer agreements)",
      "Test-optional four-year universities"
    ],
    "note": "Most students in this range apply test-optional and retest before applying further — this score is unlikely to be the one submitted."
  },
  {
    "score": 710,
    "percentile": 2,
    "tier": "Consider Retesting",
    "color": "#ef4444",
    "summary": "A 710 is well below the national average. Four-year options narrow considerably here, but community colleges and open-admission schools remain accessible, often with guaranteed transfer pathways after building a strong GPA. A retake after structured prep is usually the better path.",
    "schools": [
      "Community colleges (open admission, guaranteed transfer agreements)",
      "Test-optional four-year universities"
    ],
    "note": "Most students in this range apply test-optional and retest before applying further — this score is unlikely to be the one submitted."
  },
  {
    "score": 700,
    "percentile": 2,
    "tier": "Consider Retesting",
    "color": "#ef4444",
    "summary": "A 700 is well below the national average. Four-year options narrow considerably here, but community colleges and open-admission schools remain accessible, often with guaranteed transfer pathways after building a strong GPA. A retake after structured prep is usually the better path.",
    "schools": [
      "Community colleges (open admission, guaranteed transfer agreements)",
      "Test-optional four-year universities"
    ],
    "note": "Most students in this range apply test-optional and retest before applying further — this score is unlikely to be the one submitted."
  },
  {
    "score": 690,
    "percentile": 1,
    "tier": "Consider Retesting",
    "color": "#ef4444",
    "summary": "A 690 is well below the national average. Four-year options narrow considerably here, but community colleges and open-admission schools remain accessible, often with guaranteed transfer pathways after building a strong GPA. A retake after structured prep is usually the better path.",
    "schools": [
      "Community colleges (open admission, guaranteed transfer agreements)",
      "Test-optional four-year universities"
    ],
    "note": "Most students in this range apply test-optional and retest before applying further — this score is unlikely to be the one submitted."
  },
  {
    "score": 680,
    "percentile": 1,
    "tier": "Consider Retesting",
    "color": "#ef4444",
    "summary": "A 680 is well below the national average. Four-year options narrow considerably here, but community colleges and open-admission schools remain accessible, often with guaranteed transfer pathways after building a strong GPA. A retake after structured prep is usually the better path.",
    "schools": [
      "Community colleges (open admission, guaranteed transfer agreements)",
      "Test-optional four-year universities"
    ],
    "note": "Most students in this range apply test-optional and retest before applying further — this score is unlikely to be the one submitted."
  },
  {
    "score": 670,
    "percentile": 1,
    "tier": "Consider Retesting",
    "color": "#ef4444",
    "summary": "A 670 is well below the national average. Four-year options narrow considerably here, but community colleges and open-admission schools remain accessible, often with guaranteed transfer pathways after building a strong GPA. A retake after structured prep is usually the better path.",
    "schools": [
      "Community colleges (open admission, guaranteed transfer agreements)",
      "Test-optional four-year universities"
    ],
    "note": "Most students in this range apply test-optional and retest before applying further — this score is unlikely to be the one submitted."
  },
  {
    "score": 660,
    "percentile": 1,
    "tier": "Consider Retesting",
    "color": "#ef4444",
    "summary": "A 660 is well below the national average. Four-year options narrow considerably here, but community colleges and open-admission schools remain accessible, often with guaranteed transfer pathways after building a strong GPA. A retake after structured prep is usually the better path.",
    "schools": [
      "Community colleges (open admission, guaranteed transfer agreements)",
      "Test-optional four-year universities"
    ],
    "note": "Most students in this range apply test-optional and retest before applying further — this score is unlikely to be the one submitted."
  },
  {
    "score": 650,
    "percentile": 1,
    "tier": "Consider Retesting",
    "color": "#ef4444",
    "summary": "A 650 is well below the national average. Four-year options narrow considerably here, but community colleges and open-admission schools remain accessible, often with guaranteed transfer pathways after building a strong GPA. A retake after structured prep is usually the better path.",
    "schools": [
      "Community colleges (open admission, guaranteed transfer agreements)",
      "Test-optional four-year universities"
    ],
    "note": "Most students in this range apply test-optional and retest before applying further — this score is unlikely to be the one submitted."
  },
  {
    "score": 640,
    "percentile": 1,
    "tier": "Consider Retesting",
    "color": "#ef4444",
    "summary": "A 640 is well below the national average. Four-year options narrow considerably here, but community colleges and open-admission schools remain accessible, often with guaranteed transfer pathways after building a strong GPA. A retake after structured prep is usually the better path.",
    "schools": [
      "Community colleges (open admission, guaranteed transfer agreements)",
      "Test-optional four-year universities"
    ],
    "note": "Most students in this range apply test-optional and retest before applying further — this score is unlikely to be the one submitted."
  },
  {
    "score": 630,
    "percentile": 1,
    "tier": "Consider Retesting",
    "color": "#ef4444",
    "summary": "A 630 is well below the national average. Four-year options narrow considerably here, but community colleges and open-admission schools remain accessible, often with guaranteed transfer pathways after building a strong GPA. A retake after structured prep is usually the better path.",
    "schools": [
      "Community colleges (open admission, guaranteed transfer agreements)",
      "Test-optional four-year universities"
    ],
    "note": "Most students in this range apply test-optional and retest before applying further — this score is unlikely to be the one submitted."
  },
  {
    "score": 620,
    "percentile": 1,
    "tier": "Consider Retesting",
    "color": "#ef4444",
    "summary": "A 620 is well below the national average. Four-year options narrow considerably here, but community colleges and open-admission schools remain accessible, often with guaranteed transfer pathways after building a strong GPA. A retake after structured prep is usually the better path.",
    "schools": [
      "Community colleges (open admission, guaranteed transfer agreements)",
      "Test-optional four-year universities"
    ],
    "note": "Most students in this range apply test-optional and retest before applying further — this score is unlikely to be the one submitted."
  },
  {
    "score": 610,
    "percentile": 1,
    "tier": "Consider Retesting",
    "color": "#ef4444",
    "summary": "A 610 is well below the national average. Four-year options narrow considerably here, but community colleges and open-admission schools remain accessible, often with guaranteed transfer pathways after building a strong GPA. A retake after structured prep is usually the better path.",
    "schools": [
      "Community colleges (open admission, guaranteed transfer agreements)",
      "Test-optional four-year universities"
    ],
    "note": "Most students in this range apply test-optional and retest before applying further — this score is unlikely to be the one submitted."
  },
  {
    "score": 600,
    "percentile": 1,
    "tier": "Consider Retesting",
    "color": "#ef4444",
    "summary": "A 600 is well below the national average. Four-year options narrow considerably here, but community colleges and open-admission schools remain accessible, often with guaranteed transfer pathways after building a strong GPA. A retake after structured prep is usually the better path.",
    "schools": [
      "Community colleges (open admission, guaranteed transfer agreements)",
      "Test-optional four-year universities"
    ],
    "note": "Most students in this range apply test-optional and retest before applying further — this score is unlikely to be the one submitted."
  },
  {
    "score": 590,
    "percentile": 1,
    "tier": "Consider Retesting",
    "color": "#ef4444",
    "summary": "A 590 is well below the national average. Four-year options narrow considerably here, but community colleges and open-admission schools remain accessible, often with guaranteed transfer pathways after building a strong GPA. A retake after structured prep is usually the better path.",
    "schools": [
      "Community colleges (open admission, guaranteed transfer agreements)",
      "Test-optional four-year universities"
    ],
    "note": "Most students in this range apply test-optional and retest before applying further — this score is unlikely to be the one submitted."
  },
  {
    "score": 580,
    "percentile": 1,
    "tier": "Consider Retesting",
    "color": "#ef4444",
    "summary": "A 580 is well below the national average. Four-year options narrow considerably here, but community colleges and open-admission schools remain accessible, often with guaranteed transfer pathways after building a strong GPA. A retake after structured prep is usually the better path.",
    "schools": [
      "Community colleges (open admission, guaranteed transfer agreements)",
      "Test-optional four-year universities"
    ],
    "note": "Most students in this range apply test-optional and retest before applying further — this score is unlikely to be the one submitted."
  },
  {
    "score": 570,
    "percentile": 1,
    "tier": "Consider Retesting",
    "color": "#ef4444",
    "summary": "A 570 is well below the national average. Four-year options narrow considerably here, but community colleges and open-admission schools remain accessible, often with guaranteed transfer pathways after building a strong GPA. A retake after structured prep is usually the better path.",
    "schools": [
      "Community colleges (open admission, guaranteed transfer agreements)",
      "Test-optional four-year universities"
    ],
    "note": "Most students in this range apply test-optional and retest before applying further — this score is unlikely to be the one submitted."
  },
  {
    "score": 560,
    "percentile": 1,
    "tier": "Consider Retesting",
    "color": "#ef4444",
    "summary": "A 560 is well below the national average. Four-year options narrow considerably here, but community colleges and open-admission schools remain accessible, often with guaranteed transfer pathways after building a strong GPA. A retake after structured prep is usually the better path.",
    "schools": [
      "Community colleges (open admission, guaranteed transfer agreements)",
      "Test-optional four-year universities"
    ],
    "note": "Most students in this range apply test-optional and retest before applying further — this score is unlikely to be the one submitted."
  },
  {
    "score": 550,
    "percentile": 1,
    "tier": "Consider Retesting",
    "color": "#ef4444",
    "summary": "A 550 is well below the national average. Four-year options narrow considerably here, but community colleges and open-admission schools remain accessible, often with guaranteed transfer pathways after building a strong GPA. A retake after structured prep is usually the better path.",
    "schools": [
      "Community colleges (open admission, guaranteed transfer agreements)",
      "Test-optional four-year universities"
    ],
    "note": "Most students in this range apply test-optional and retest before applying further — this score is unlikely to be the one submitted."
  },
  {
    "score": 540,
    "percentile": 1,
    "tier": "Consider Retesting",
    "color": "#ef4444",
    "summary": "A 540 is well below the national average. Four-year options narrow considerably here, but community colleges and open-admission schools remain accessible, often with guaranteed transfer pathways after building a strong GPA. A retake after structured prep is usually the better path.",
    "schools": [
      "Community colleges (open admission, guaranteed transfer agreements)",
      "Test-optional four-year universities"
    ],
    "note": "Most students in this range apply test-optional and retest before applying further — this score is unlikely to be the one submitted."
  },
  {
    "score": 530,
    "percentile": 1,
    "tier": "Consider Retesting",
    "color": "#ef4444",
    "summary": "A 530 is well below the national average. Four-year options narrow considerably here, but community colleges and open-admission schools remain accessible, often with guaranteed transfer pathways after building a strong GPA. A retake after structured prep is usually the better path.",
    "schools": [
      "Community colleges (open admission, guaranteed transfer agreements)",
      "Test-optional four-year universities"
    ],
    "note": "Most students in this range apply test-optional and retest before applying further — this score is unlikely to be the one submitted."
  },
  {
    "score": 520,
    "percentile": 1,
    "tier": "Consider Retesting",
    "color": "#ef4444",
    "summary": "A 520 is well below the national average. Four-year options narrow considerably here, but community colleges and open-admission schools remain accessible, often with guaranteed transfer pathways after building a strong GPA. A retake after structured prep is usually the better path.",
    "schools": [
      "Community colleges (open admission, guaranteed transfer agreements)",
      "Test-optional four-year universities"
    ],
    "note": "Most students in this range apply test-optional and retest before applying further — this score is unlikely to be the one submitted."
  },
  {
    "score": 510,
    "percentile": 1,
    "tier": "Consider Retesting",
    "color": "#ef4444",
    "summary": "A 510 is well below the national average. Four-year options narrow considerably here, but community colleges and open-admission schools remain accessible, often with guaranteed transfer pathways after building a strong GPA. A retake after structured prep is usually the better path.",
    "schools": [
      "Community colleges (open admission, guaranteed transfer agreements)",
      "Test-optional four-year universities"
    ],
    "note": "Most students in this range apply test-optional and retest before applying further — this score is unlikely to be the one submitted."
  },
  {
    "score": 500,
    "percentile": 1,
    "tier": "Consider Retesting",
    "color": "#ef4444",
    "summary": "A 500 is well below the national average. Four-year options narrow considerably here, but community colleges and open-admission schools remain accessible, often with guaranteed transfer pathways after building a strong GPA. A retake after structured prep is usually the better path.",
    "schools": [
      "Community colleges (open admission, guaranteed transfer agreements)",
      "Test-optional four-year universities"
    ],
    "note": "Most students in this range apply test-optional and retest before applying further — this score is unlikely to be the one submitted."
  },
  {
    "score": 490,
    "percentile": 1,
    "tier": "Consider Retesting",
    "color": "#ef4444",
    "summary": "A 490 is well below the national average. Four-year options narrow considerably here, but community colleges and open-admission schools remain accessible, often with guaranteed transfer pathways after building a strong GPA. A retake after structured prep is usually the better path.",
    "schools": [
      "Community colleges (open admission, guaranteed transfer agreements)",
      "Test-optional four-year universities"
    ],
    "note": "Most students in this range apply test-optional and retest before applying further — this score is unlikely to be the one submitted."
  },
  {
    "score": 480,
    "percentile": 1,
    "tier": "Consider Retesting",
    "color": "#ef4444",
    "summary": "A 480 is well below the national average. Four-year options narrow considerably here, but community colleges and open-admission schools remain accessible, often with guaranteed transfer pathways after building a strong GPA. A retake after structured prep is usually the better path.",
    "schools": [
      "Community colleges (open admission, guaranteed transfer agreements)",
      "Test-optional four-year universities"
    ],
    "note": "Most students in this range apply test-optional and retest before applying further — this score is unlikely to be the one submitted."
  },
  {
    "score": 470,
    "percentile": 1,
    "tier": "Consider Retesting",
    "color": "#ef4444",
    "summary": "A 470 is well below the national average. Four-year options narrow considerably here, but community colleges and open-admission schools remain accessible, often with guaranteed transfer pathways after building a strong GPA. A retake after structured prep is usually the better path.",
    "schools": [
      "Community colleges (open admission, guaranteed transfer agreements)",
      "Test-optional four-year universities"
    ],
    "note": "Most students in this range apply test-optional and retest before applying further — this score is unlikely to be the one submitted."
  },
  {
    "score": 460,
    "percentile": 1,
    "tier": "Consider Retesting",
    "color": "#ef4444",
    "summary": "A 460 is well below the national average. Four-year options narrow considerably here, but community colleges and open-admission schools remain accessible, often with guaranteed transfer pathways after building a strong GPA. A retake after structured prep is usually the better path.",
    "schools": [
      "Community colleges (open admission, guaranteed transfer agreements)",
      "Test-optional four-year universities"
    ],
    "note": "Most students in this range apply test-optional and retest before applying further — this score is unlikely to be the one submitted."
  },
  {
    "score": 450,
    "percentile": 1,
    "tier": "Consider Retesting",
    "color": "#ef4444",
    "summary": "A 450 is well below the national average. Four-year options narrow considerably here, but community colleges and open-admission schools remain accessible, often with guaranteed transfer pathways after building a strong GPA. A retake after structured prep is usually the better path.",
    "schools": [
      "Community colleges (open admission, guaranteed transfer agreements)",
      "Test-optional four-year universities"
    ],
    "note": "Most students in this range apply test-optional and retest before applying further — this score is unlikely to be the one submitted."
  },
  {
    "score": 440,
    "percentile": 1,
    "tier": "Consider Retesting",
    "color": "#ef4444",
    "summary": "A 440 is well below the national average. Four-year options narrow considerably here, but community colleges and open-admission schools remain accessible, often with guaranteed transfer pathways after building a strong GPA. A retake after structured prep is usually the better path.",
    "schools": [
      "Community colleges (open admission, guaranteed transfer agreements)",
      "Test-optional four-year universities"
    ],
    "note": "Most students in this range apply test-optional and retest before applying further — this score is unlikely to be the one submitted."
  },
  {
    "score": 430,
    "percentile": 1,
    "tier": "Consider Retesting",
    "color": "#ef4444",
    "summary": "A 430 is well below the national average. Four-year options narrow considerably here, but community colleges and open-admission schools remain accessible, often with guaranteed transfer pathways after building a strong GPA. A retake after structured prep is usually the better path.",
    "schools": [
      "Community colleges (open admission, guaranteed transfer agreements)",
      "Test-optional four-year universities"
    ],
    "note": "Most students in this range apply test-optional and retest before applying further — this score is unlikely to be the one submitted."
  },
  {
    "score": 420,
    "percentile": 1,
    "tier": "Consider Retesting",
    "color": "#ef4444",
    "summary": "A 420 is well below the national average. Four-year options narrow considerably here, but community colleges and open-admission schools remain accessible, often with guaranteed transfer pathways after building a strong GPA. A retake after structured prep is usually the better path.",
    "schools": [
      "Community colleges (open admission, guaranteed transfer agreements)",
      "Test-optional four-year universities"
    ],
    "note": "Most students in this range apply test-optional and retest before applying further — this score is unlikely to be the one submitted."
  },
  {
    "score": 410,
    "percentile": 1,
    "tier": "Consider Retesting",
    "color": "#ef4444",
    "summary": "A 410 is well below the national average. Four-year options narrow considerably here, but community colleges and open-admission schools remain accessible, often with guaranteed transfer pathways after building a strong GPA. A retake after structured prep is usually the better path.",
    "schools": [
      "Community colleges (open admission, guaranteed transfer agreements)",
      "Test-optional four-year universities"
    ],
    "note": "Most students in this range apply test-optional and retest before applying further — this score is unlikely to be the one submitted."
  },
  {
    "score": 400,
    "percentile": 1,
    "tier": "Consider Retesting",
    "color": "#ef4444",
    "summary": "A 400 is well below the national average. Four-year options narrow considerably here, but community colleges and open-admission schools remain accessible, often with guaranteed transfer pathways after building a strong GPA. A retake after structured prep is usually the better path.",
    "schools": [
      "Community colleges (open admission, guaranteed transfer agreements)",
      "Test-optional four-year universities"
    ],
    "note": "Most students in this range apply test-optional and retest before applying further — this score is unlikely to be the one submitted."
  }
];

export function getCollegeGuideForSATScore(score: number): SATCollegeScoreEntry {
  const clamped = Math.max(400, Math.min(1600, Math.round(score / 10) * 10));
  return SAT_COLLEGE_GUIDE.find(e => e.score === clamped) ?? SAT_COLLEGE_GUIDE[SAT_COLLEGE_GUIDE.length - 1];
}
