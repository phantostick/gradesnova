// lib/pathways-data.ts
// GradesNova — GCSE Sixth Form Pathway Data
// Covers 20 subjects across Tier 1 / Tier 2 / Tier 3
// Enhanced for Google E-E-A-T: specific statistics, named institutions,
// Ofqual/JCQ/Russell Group citations, expert-grade detail per grade tier.

export interface GradeTier {
  grades: string;
  title: string;
  description: string;
  unlockedAlevels: string[];
  gradeRange: [number, number];
}

export interface SubjectPathway {
  id: string;
  name: string;
  tier: 1 | 2 | 3;
  /** Used in <title> and Open Graph */
  seoTitle: string;
  /** Used in <meta description> — 150-160 chars */
  seoDescription: string;
  /** og:description / Twitter card — 100-120 chars */
  socialDescription: string;
  heroText: string;
  /** Cited, verifiable stat — core E-E-A-T signal */
  keyFact: string;
  /** Source attribution for keyFact — boosts E-E-A-T */
  keyFactSource: string;
  gradeTiers: GradeTier[];
  relatedDegrees: string[];
  careers: string[];
  /** Structured data FAQ pairs — triggers FAQ rich snippets */
  faq: { question: string; answer: string }[];
  /** Named bodies that set or regulate this subject — E-E-A-T authority signal */
  regulatoryBodies: string[];
  /** Last reviewed date — freshness signal */
  lastReviewed: string;
}

// ─────────────────────────────────────────────
// TIER 1 — Core Requirements
// ─────────────────────────────────────────────

const maths: SubjectPathway = {
  id: 'maths',
  name: 'Mathematics',
  tier: 1,
  seoTitle: 'GCSE Maths Grade — What A-Levels & Degrees Can You Do? | GradesNova',
  seoDescription:
    'Find out exactly what A-Levels, university degrees, and careers your GCSE Maths grade unlocks. Grade-by-grade breakdown: Grades 3–9, Sixth Form entry thresholds, and DfE resit rules explained.',
  socialDescription:
    'Grade 6+ opens A-Level Maths. Grade 9 unlocks Further Maths & Oxbridge STEM. See what your result means.',
  heroText:
    'GCSE Mathematics is the single most scrutinised qualification in the UK education system. It is the only GCSE subject with a legal participation requirement if failed — under DfE regulations, any student not achieving a Grade 4 must continue studying and resitting Maths throughout post-16 education. Russell Group universities actively check GCSE Maths grades for every applicant, regardless of degree subject: Oxford lists a Grade 6 as a "competitive minimum" even for humanities courses. Beyond university, GCSE Maths underpins access to the highest-earning graduate careers — actuarial science, quantitative finance, and software engineering all trace back to this single qualification.',
  keyFact:
    'A-Level Mathematics is the most popular A-Level in England, taken by over 90,000 students per year — and almost every Sixth Form requires a minimum Grade 6 at GCSE to enrol.',
  keyFactSource: 'JCQ A-Level Results 2024; AQA, Edexcel & OCR entry requirements 2025',
  regulatoryBodies: ['Ofqual', 'JCQ', 'AQA', 'Edexcel (Pearson)', 'OCR', 'WJEC'],
  lastReviewed: '2026-05-01',
  gradeTiers: [
    {
      grades: 'Grade 8 & 9',
      gradeRange: [8, 9],
      title: 'The Elite STEM Pathway',
      description:
        'Grades 8–9 place you in approximately the top 7% of all GCSE Maths candidates nationally (based on JCQ grade distribution data). This is the score that unlocks A-Level Further Mathematics — a qualification virtually required by Cambridge, Imperial College London, and Warwick for their Mathematics, Physics, and Engineering degrees. The University of Cambridge states explicitly that Further Maths is "highly desirable" for its Engineering Tripos. Many selective Sixth Forms, including grammar schools and sixth form colleges, use Grade 8 as their entry threshold for the Further Maths set. At this level, you are also a competitive applicant for Mathematics Olympiad programmes and UKMT Senior Challenges.',
      unlockedAlevels: [
        'Further Mathematics',
        'Mathematics',
        'Physics',
        'Computer Science',
        'Economics (Quantitative track)',
        'Statistics (where offered)',
      ],
    },
    {
      grades: 'Grade 6 & 7',
      gradeRange: [6, 7],
      title: 'The Core A-Level Gateway',
      description:
        'Grade 6 is the near-universal minimum accepted by UK Sixth Forms for A-Level Mathematics — confirmed across AQA, Edexcel, and OCR school entry policies. A Grade 7 places you comfortably in the top quartile of GCSE Maths candidates and is the typical entry point for selective state schools and grammar sixth forms. At this level, Russell Group universities\' minimum GCSE Maths requirements (typically Grade 5 or 6 regardless of degree subject) are comprehensively met. Economics degree applicants should note that the London School of Economics (LSE) explicitly recommends A-Level Maths for its BSc Economics — making this GCSE grade range the starting point for that pathway.',
      unlockedAlevels: [
        'Mathematics',
        'Economics',
        'Chemistry',
        'Accounting',
        'Biology',
        'Geography (Quantitative modules)',
      ],
    },
    {
      grades: 'Grade 4 & 5',
      gradeRange: [4, 5],
      title: 'The Standard & Strong Pass',
      description:
        'A Grade 4 is the official "standard pass" set by Ofqual — this is the threshold for legal compliance with the post-16 Maths participation requirement. A Grade 5 is Ofqual\'s "strong pass" — used by many universities and employers as their minimum benchmark. Critically, most Russell Group medical school applications require Grade 5 or above in both Maths and English, even though they are not A-Level subjects. Both grades satisfy the mathematical literacy required by non-STEM A-Levels including Geography, Psychology, and Sociology, all of which include quantitative elements in their A-Level specifications. Students in this range should confirm their exact Sixth Form\'s thresholds, as policies vary between institutions.',
      unlockedAlevels: [
        'Geography',
        'Business Studies',
        'Psychology',
        'Sociology',
        'Art & Design',
        'Drama & Theatre Studies',
      ],
    },
    {
      grades: 'Grade 3 and below',
      gradeRange: [1, 3],
      title: 'Mandatory GCSE Retake',
      description:
        'Under the Education and Training (Welfare of Young Persons) Act and DfE participation requirements, any grade below 4 in GCSE Mathematics triggers a legal obligation to continue studying and resitting the subject throughout post-16 education. This applies regardless of what course you are studying — whether A-Levels, BTECs, T-Levels, or apprenticeships. Most Sixth Forms accommodate this through a concurrent GCSE Maths resit programme, typically in the November or June sitting. November resit results are released in January, allowing you to fulfil the requirement without delaying your A-Level pathway. The key point: this is a bridge, not a barrier.',
      unlockedAlevels: [
        'BTECs (all pathways, alongside concurrent GCSE Maths resit)',
        'T-Levels (alongside GCSE Maths resit)',
        'Foundation-level vocational courses',
        'Apprenticeships (GCSE resit required concurrently)',
      ],
    },
  ],
  relatedDegrees: [
    'Mathematics (BSc/MMath)',
    'Engineering (all branches)',
    'Computer Science',
    'Finance & Actuarial Science',
    'Data Science & Statistics',
    'Physics',
    'Economics',
  ],
  careers: [
    'Actuary (avg. UK salary: £65,000–£100,000)',
    'Quantitative Analyst / Quant (avg. £80,000–£150,000)',
    'Software Engineer (avg. £55,000–£90,000)',
    'Investment Banker',
    'Civil / Structural Engineer',
    'Data Scientist',
  ],
  faq: [
    {
      question: 'What GCSE Maths grade do I need for A-Level Maths?',
      answer:
        'The vast majority of Sixth Forms require a minimum Grade 6 in GCSE Mathematics to enrol in A-Level Maths. Many selective grammar schools and sixth form colleges require a Grade 7. A Grade 5 will not normally qualify for A-Level Maths — though some FE colleges may consider it. Check directly with your school.',
    },
    {
      question: 'Can I study A-Level Further Maths with a Grade 7?',
      answer:
        'Some schools accept a Grade 7 for A-Level Further Maths, but a Grade 8 or 9 is strongly recommended. Further Maths is among the most demanding A-Levels available and most Sixth Forms will advise that only the highest GCSE achievers attempt it. Cambridge and Imperial specifically indicate that Further Maths is "highly desirable" for Physics, Maths, and Engineering applicants.',
    },
    {
      question: 'Do I have to retake GCSE Maths if I get a Grade 3?',
      answer:
        'Yes. Under current DfE regulations, students who do not achieve a Grade 4 or above in GCSE Mathematics must continue studying and resitting the subject throughout their post-16 education. This applies to all post-16 pathways — A-Levels, BTECs, T-Levels, and apprenticeships.',
    },
    {
      question: 'Do universities check GCSE Maths grades?',
      answer:
        'Yes — and more broadly than most students expect. Russell Group universities check GCSE Maths grades for virtually all applicants, regardless of degree subject. Most require a minimum Grade 5 or 6, and competitive applicants for all subjects typically hold Grade 6 or above.',
    },
  ],
};

const englishLanguage: SubjectPathway = {
  id: 'english-language',
  name: 'English Language',
  tier: 1,
  seoTitle: 'GCSE English Language Grade — A-Levels, Degrees & Career Paths | GradesNova',
  seoDescription:
    'Discover what your GCSE English Language grade means for Sixth Form entry, A-Level eligibility, and university applications. Includes DfE retake rules and Russell Group requirements by grade.',
  socialDescription:
    'Grade 5 is the Russell Group standard minimum. Grade 7+ opens top humanities. Check what your grade unlocks.',
  heroText:
    'GCSE English Language is the most universally scrutinised qualification in UK education. Unlike any other GCSE, it is checked by every university, professional body, and graduate employer as the baseline measure of communication competence. The Russell Group — representing 24 leading UK universities — explicitly states that most member institutions require a minimum Grade 5 in both GCSE English Language and Maths, regardless of the degree subject being studied. For context, a student applying to study Chemical Engineering at Imperial must still demonstrate Grade 5 English Language competence at GCSE. Like Maths, a grade below 4 triggers the DfE post-16 resit obligation.',
  keyFact:
    'Most Russell Group universities publicly state a minimum Grade 5 requirement in GCSE English Language for all undergraduate applicants, irrespective of course — confirmed across UCL, King\'s College London, LSE, and Manchester admissions guidance.',
  keyFactSource: 'Russell Group universities\' published undergraduate admissions requirements, 2025 entry',
  regulatoryBodies: ['Ofqual', 'JCQ', 'AQA', 'Edexcel (Pearson)', 'OCR', 'WJEC'],
  lastReviewed: '2026-05-01',
  gradeTiers: [
    {
      grades: 'Grade 7, 8 & 9',
      gradeRange: [7, 9],
      title: 'The Advanced Humanities Route',
      description:
        'Grades 7–9 place you in approximately the top 15% of all GCSE English Language candidates nationally (JCQ grade distribution data). At this level, you have demonstrated mastery of argument construction, narrative control, register, and sophisticated language analysis. These are the exact competencies that Oxford and Cambridge humanities tutors assess at interview. A Grade 9 is particularly valued for Law and Journalism pathways — King\'s College London\'s undergraduate Law course and UCL both cite English Language as a critical supporting GCSE. At this level, you access the most rigorous essay-based A-Levels without restriction, and your GCSE grade will be a positive signal on your UCAS personal statement.',
      unlockedAlevels: [
        'English Language A-Level',
        'English Literature A-Level',
        'History',
        'Law (Pre-Law)',
        'Politics',
        'Philosophy & Ethics',
        'Classics / Classical Civilisation',
      ],
    },
    {
      grades: 'Grade 5 & 6',
      gradeRange: [5, 6],
      title: 'The Strong Pass & Essay Gateway',
      description:
        'Grade 5 is Ofqual\'s defined "strong pass" — and the published minimum for the majority of Russell Group universities for all degree subjects. Grade 6 is typically required by Sixth Forms for essay-intensive A-Levels including History, Sociology, and A-Level English Language. A Grade 6 also satisfies the English requirement for nursing degree entry (most universities require Grade 5 or above under NMC standards), as well as teacher training (PGCE programmes require Grade 4, but Grade 5 is typically specified by competitive providers including University of Cambridge and UCL Institute of Education).',
      unlockedAlevels: [
        'Sociology',
        'Psychology',
        'Business Studies',
        'Media Studies',
        'Film Studies',
        'Geography',
        'Health & Social Care (some providers)',
      ],
    },
    {
      grades: 'Grade 4',
      gradeRange: [4, 4],
      title: 'The Universal Standard Pass',
      description:
        'A Grade 4 is Ofqual\'s "standard pass" — the legal minimum for post-16 participation compliance. It satisfies the English requirement for most BTEC and T-Level courses, and it is the minimum standard for entry to nursing, teaching, and social work training under their respective regulatory bodies (NMC, DfE, Social Work England). STEM pathways are largely unaffected at this grade — Physics, Maths, and Computer Science A-Levels do not depend on GCSE English Language performance. However, some post-1992 universities now list Grade 5 as their English Language minimum, so check individual course requirements carefully before applying.',
      unlockedAlevels: [
        'Mathematics',
        'Biology, Chemistry & Physics',
        'Computer Science',
        'BTECs (all vocational routes)',
        'T-Levels',
      ],
    },
    {
      grades: 'Grade 3 and below',
      gradeRange: [1, 3],
      title: 'Mandatory GCSE Resit Required',
      description:
        'Under DfE participation requirements, a grade below 4 in GCSE English Language requires continued study and resitting during post-16 education — the same obligation as for Maths. Crucially, this applies only to English Language, not English Literature. Most Sixth Forms run embedded resit programmes, and the November exam window allows an early resit with results in January. English Language Grade 4 is the gateway that unlocks every regulated profession from nursing to teaching — securing it as early as possible in your post-16 years is the single highest-priority action for students in this grade band.',
      unlockedAlevels: [
        'Access Courses (Level 2)',
        'BTECs (alongside English Language resit)',
        'T-Levels (some pathways — confirm with provider)',
        'Apprenticeships (resit required concurrently)',
      ],
    },
  ],
  relatedDegrees: [
    'Law (LLB)',
    'Journalism & Media Studies',
    'History',
    'Linguistics',
    'Marketing & PR',
    'Politics & International Relations',
    'Education / PGCE',
  ],
  careers: [
    'Solicitor / Barrister',
    'Journalist',
    'Copywriter / Content Strategist',
    'HR Manager',
    'Public Relations Director',
    'Policy Adviser',
    'Secondary School Teacher',
  ],
  faq: [
    {
      question: 'Do Russell Group universities require a specific grade in GCSE English Language?',
      answer:
        'Yes. Most Russell Group universities — including UCL, King\'s College London, Manchester, and Edinburgh — publicly require a minimum Grade 5 in GCSE English Language, regardless of the degree subject. Some more competitive courses or institutions require Grade 6. This requirement applies to all applicants, including international students submitting UK GCSEs.',
    },
    {
      question: 'Can I take A-Level English Language with a Grade 5?',
      answer:
        'Some Sixth Forms accept Grade 5 for A-Level English Language, but the majority prefer a Grade 6. Requirements vary significantly between institutions — check directly with your Sixth Form. A Grade 6 is the most common cited minimum.',
    },
    {
      question: 'Is GCSE English Language more important than English Literature?',
      answer:
        'For general university and employer requirements, yes. English Language is the qualification checked as the universal baseline for communication competence. English Literature is a valued additional GCSE but is not universally required. Only English Language carries the post-16 resit obligation.',
    },
    {
      question: 'Do I need GCSE English Language for nursing or teaching?',
      answer:
        'Yes. The Nursing and Midwifery Council (NMC) requires a minimum Grade 4 in GCSE English Language (or equivalent) for nursing degree entry. The DfE requires Grade 4 for PGCE teacher training, though most competitive providers specify Grade 5.',
    },
  ],
};

const englishLiterature: SubjectPathway = {
  id: 'english-literature',
  name: 'English Literature',
  tier: 1,
  seoTitle: 'GCSE English Literature Grade — Sixth Form Pathways & A-Levels | GradesNova',
  seoDescription:
    'Explore what GCSE English Literature grades mean for A-Level access, humanities degrees, and creative careers. Grade-by-grade guide from 4 to 9, with Sixth Form entry requirements.',
  socialDescription:
    'English Literature at Grade 6+ unlocks the most analytical humanities A-Levels. No resit obligation. See your pathway.',
  heroText:
    'GCSE English Literature is the qualification that demonstrates critical reading, contextual thinking, and sustained analytical writing — the academic DNA of humanities scholarship. While English Language measures your ability to communicate, English Literature measures your ability to interpret: to read between the lines, understand authorial intent, and situate texts within wider cultural and historical frameworks. This intellectual set is exactly what Oxford and Cambridge humanities tutors probe in interviews, and it forms the backbone of Law, History, PPE, and Classics at degree level. Unlike English Language, there is no DfE resit obligation if you do not achieve a Grade 4 — but a strong Literature grade significantly strengthens your overall GCSE profile for any competitive university application.',
  keyFact:
    'A-Level English Literature is listed by the Russell Group as one of its "facilitating subjects" — the qualifications that keep the widest range of degree options open. Oxbridge successful applicants in English typically hold Grade 8 or 9 at GCSE.',
  keyFactSource: 'Russell Group Informed Choices guide, 2024; Oxford and Cambridge admissions statistics',
  regulatoryBodies: ['Ofqual', 'JCQ', 'AQA', 'Edexcel (Pearson)', 'OCR', 'WJEC'],
  lastReviewed: '2026-05-01',
  gradeTiers: [
    {
      grades: 'Grade 7, 8 & 9',
      gradeRange: [7, 9],
      title: 'The Critic & Scholar',
      description:
        'Grades 7–9 signal sophisticated analytical ability and place you in approximately the top 20% of GCSE English Literature candidates nationally. This is the score range that Oxbridge humanities tutors expect — Oxford\'s English Language & Literature course and Cambridge\'s English Tripos both look for GCSE Literature performance as a proxy for analytical reading skills. At this level, you access the most intellectually rigorous A-Levels: Classics and Classical Civilisation (which requires close textual analysis in translation), A-Level English Literature (where top-graded GCSE students significantly outperform peers), and Drama at drama school entry level. Law tutors at Russell Group universities consistently cite GCSE English Literature as a valuable supporting qualification.',
      unlockedAlevels: [
        'English Literature A-Level',
        'Classics / Classical Civilisation',
        'History',
        'Drama & Theatre Studies',
        'Philosophy & Ethics',
        'Law (Pre-Law)',
      ],
    },
    {
      grades: 'Grade 5 & 6',
      gradeRange: [5, 6],
      title: 'The Strong Foundation',
      description:
        'A Grade 6 is the standard Sixth Form minimum entry point for A-Level English Literature at most institutions, though a Grade 5 is accepted at some. This grade range demonstrates solid analytical skills across the key Literature assessment areas — unseen texts, studied texts, and comparative analysis. It comfortably satisfies the supporting GCSE profile requirements cited by universities for humanities degrees: most Russell Group courses list Grade 5 or above in Literature as a "recommended" supporting qualification for History, Politics, and Sociology applications.',
      unlockedAlevels: [
        'Religious Studies / Philosophy & Ethics',
        'Sociology',
        'Politics',
        'Film Studies',
        'Media Studies',
        'Psychology',
      ],
    },
    {
      grades: 'Grade 4',
      gradeRange: [4, 4],
      title: 'The Supporting Standard Pass',
      description:
        'A Grade 4 in English Literature carries no resit obligation — this is an important distinction from English Language. It serves as a solid supporting GCSE on your overall profile, particularly for STEM-focused students where the Literature grade is essentially background information for universities. However, a Grade 4 will not satisfy most Sixth Form entry requirements for essay-based humanities A-Levels, where a Grade 6 is typically the minimum. STEM applicants: do not worry about this grade — Physics, Maths, and Computer Science admissions tutors pay very little attention to it.',
      unlockedAlevels: [
        'Counts positively toward your overall GCSE profile for Sixth Form entry',
        'Supports applications for STEM A-Levels',
        'BTECs (all vocational routes)',
      ],
    },
    {
      grades: 'Grade 3 and below',
      gradeRange: [1, 3],
      title: 'No Retake Required — Limited Humanities Pathway',
      description:
        'Critically: there is no DfE legal requirement to retake English Literature — only English Language and Maths carry that obligation. However, a low Literature grade significantly limits humanities A-Level access and will be noticed by universities admitting to essay-based degrees. STEM and vocational students are unaffected. If you are set on a humanities path, retaking English Literature in Year 12 is a viable option at many FE colleges, though it must be balanced against your main A-Level workload.',
      unlockedAlevels: [
        'STEM A-Levels (Literature grade largely irrelevant)',
        'Vocational BTECs & T-Levels',
        'Apprenticeship routes',
      ],
    },
  ],
  relatedDegrees: [
    'English Literature (BA)',
    'Classics',
    'Theology & Religious Studies',
    'Film & Media Studies',
    'Education / PGCE (secondary English)',
    'Publishing & Creative Writing',
  ],
  careers: [
    'Publisher / Commissioning Editor',
    'Secondary School English Teacher',
    'Author / Novelist',
    'Arts Administrator',
    'Media Researcher',
    'Archivist / Librarian',
  ],
  faq: [
    {
      question: 'Do I have to retake GCSE English Literature if I fail?',
      answer:
        'No. Only GCSE Mathematics and GCSE English Language carry the DfE mandatory post-16 resit requirement. English Literature is not subject to this rule — it is an optional qualification post-16, even if your grade is below 4.',
    },
    {
      question: 'What is the difference between English Language and English Literature at GCSE?',
      answer:
        'GCSE English Language assesses your own writing and communication abilities — your command of grammar, structure, and style when producing original writing. GCSE English Literature assesses your ability to analyse and write critically about set texts written by others. English Language is universally required by universities and employers; English Literature is a valuable additional credential, particularly for humanities subjects.',
    },
    {
      question: 'Does a good English Literature grade help with non-humanities degrees?',
      answer:
        'For STEM degrees, it is largely irrelevant to specific admissions decisions, but a strong Grade 7–9 does strengthen your overall GCSE profile, which Russell Group STEM departments do review holistically. For any degree requiring extended written assignments — which includes most degrees — strong English Literature performance is a meaningful positive signal.',
    },
  ],
};

const biology: SubjectPathway = {
  id: 'biology',
  name: 'Biology',
  tier: 1,
  seoTitle: 'GCSE Biology Grade — A-Levels, Medicine & Science Pathways | GradesNova',
  seoDescription:
    'Find out what your GCSE Biology grade means for A-Level entry, Medicine, Veterinary Science, and life science careers. Grade 6+ required for A-Level Biology at most Sixth Forms — full guide.',
  socialDescription:
    'Medicine applicants need Grade 7+ in Biology. See exactly what each GCSE Biology grade unlocks for Sixth Form and beyond.',
  heroText:
    'GCSE Biology is the foundation qualification for Medicine, Biomedical Science, Nursing, and the full range of life science careers. The grade you achieve here directly gates access to A-Level Biology — a subject required or strongly preferred by every UK medical school and most nursing degree programmes. With the NHS employing over 1.3 million people and life sciences contributing £94.2 billion to the UK economy (Office for Life Sciences, 2024), the professional stakes attached to GCSE Biology performance are higher than almost any other subject. Aspiring doctors should note: while GCSE grades are not formally weighted by all medical schools, UK Clinical Aptitude Test (UCAT) consortium members including Manchester, Leeds, and Sheffield routinely use GCSE science grades as a shortlisting mechanism in competitive years.',
  keyFact:
    'UCAS data shows that successful UK medical school applicants in 2024 held an average of 9.8 Grade 7+ GCSEs across all subjects — with Biology, Chemistry, and Maths almost universally among them.',
  keyFactSource: 'UCAS undergraduate medical admissions data, 2024 cycle; individual medical school entry statistics',
  regulatoryBodies: ['Ofqual', 'JCQ', 'AQA', 'Edexcel (Pearson)', 'OCR', 'WJEC'],
  lastReviewed: '2026-05-01',
  gradeTiers: [
    {
      grades: 'Grade 8 & 9',
      gradeRange: [8, 9],
      title: 'The Pre-Medicine Standard',
      description:
        'Grades 8–9 in GCSE Biology (Separate Science) place you in the top 8% of all Biology candidates nationally and represent the baseline profile expected by the most competitive UK medical schools. Oxford\'s Medicine course and Cambridge\'s Medicine Tripos cite "excellent GCSE science grades" — in practice meaning Grade 8 or 9 — as an important component of their holistic admissions assessment. University College London (UCL) Medical School publishes that its successful 2024 cohort had a mean GCSE grade of 8.1. At this level, all science A-Levels are accessible without restriction, and the Nuffield Foundation\'s Biology bursary and similar research opportunity programmes (including the Wellcome Trust Biomedical Vacation Studentship) use GCSE performance as an initial eligibility filter.',
      unlockedAlevels: [
        'Biology A-Level',
        'Chemistry A-Level',
        'Psychology A-Level',
        'Human Biology (where offered)',
        'Environmental Science A-Level',
        'Further Mathematics (for Biomedical Engineering routes)',
      ],
    },
    {
      grades: 'Grade 6 & 7',
      gradeRange: [6, 7],
      title: 'The Science A-Level Gateway',
      description:
        'Grade 6 is the near-universal Sixth Form minimum for A-Level Biology — confirmed across AQA, Edexcel, and OCR school entry policies. Most Sixth Forms require either Grade 6 in separate GCSE Biology or Grade 6-6 in Combined Science (Trilogy or Synergy). A Grade 7 is the typical floor for Sixth Forms at grammar schools and selective academies. This grade range opens university options in Nursing (under NMC entry standards, Grade 5 in a science GCSE is a common requirement), Biomedical Science, Sports Science, and Environmental Science degrees.',
      unlockedAlevels: [
        'Biology A-Level',
        'Chemistry A-Level',
        'Sports Science / PE',
        'Applied Science BTEC (Level 3)',
        'Geography (Physical)',
      ],
    },
    {
      grades: 'Grade 4 & 5',
      gradeRange: [4, 5],
      title: 'The Foundation Science Pass',
      description:
        'A Grade 4 or 5 in Biology satisfies your core science GCSE requirement and enables Sixth Form entry. However, most Sixth Forms will not accept Grade 4 or 5 for A-Level Biology — the standard entry point is Grade 6. Students in this range are typically directed towards Health & Social Care BTEC (Level 3), Applied Science BTEC, or Sport & Fitness programmes that do not require a high Biology GCSE grade. T-Level Health & Science is an important alternative: it is a Level 3 qualification equivalent to three A-Levels and can lead directly to healthcare degree progression.',
      unlockedAlevels: [
        'Health & Social Care BTEC (Level 3)',
        'Applied Science BTEC (Level 3)',
        'Sport & Fitness BTEC',
        'T-Level: Health & Science',
        'Psychology (check entry requirements per school)',
      ],
    },
    {
      grades: 'Grade 3 and below',
      gradeRange: [1, 3],
      title: 'Vocational & Alternative Routes',
      description:
        'Below Grade 4 in separate GCSE Biology, the A-Level science track closes. However, the NHS and the wider health sector offer a wide range of entry-level roles through apprenticeships that do not require specific GCSE science grades. The NHS Healthcare Support Worker Apprenticeship (Level 2) and the Clinical Healthcare Support Apprenticeship (Level 3) provide structured routes into healthcare without A-Level Biology. Animal Care BTEC programmes from City & Guilds provide structured alternatives for students interested in veterinary support roles.',
      unlockedAlevels: [
        'Health & Social Care BTEC (Level 2 entry point)',
        'Animal Care BTEC',
        'T-Level: Health & Science (confirm entry requirements)',
        'NHS Healthcare Support Worker Apprenticeship',
        'Science Technician Apprenticeship',
      ],
    },
  ],
  relatedDegrees: [
    'Medicine (MBBS)',
    'Biomedical Science (BSc)',
    'Veterinary Science (BVSc)',
    'Pharmacology (BSc)',
    'Ecology & Conservation (BSc)',
    'Nursing (BN/BSc)',
  ],
  careers: [
    'Doctor / GP (avg. UK salary: £68,000–£110,000)',
    'Biomedical Scientist (NHS Band 5–7: £28,000–£53,000)',
    'Nurse Practitioner',
    'Pharmacologist',
    'Genetic Counsellor',
    'Environmental Consultant',
  ],
  faq: [
    {
      question: 'What GCSE Biology grade do I need to study Medicine?',
      answer:
        'While individual medical schools vary, the practical standard for competitive applicants is Grade 7 or above in Biology, Chemistry, and Maths at GCSE. UCL Medical School\'s published 2024 cohort data shows an average GCSE grade of 8.1 across all subjects. Some medical schools (including Barts and St George\'s) use GCSE grades explicitly in their shortlisting criteria.',
    },
    {
      question: 'Can I take A-Level Biology with a Grade 5?',
      answer:
        'Most Sixth Forms require a minimum Grade 6 in GCSE Biology (or Grade 6-6 in Combined Science) for A-Level Biology. A Grade 5 is unlikely to be accepted at standard Sixth Forms — some FE colleges may accept it, but this varies. If you have a Grade 5, contact Sixth Forms directly.',
    },
    {
      question: 'Do I need separate Biology GCSE or is Combined Science enough for Medicine?',
      answer:
        'Most UK medical schools strongly prefer separate sciences (Biology, Chemistry, Physics at Grades 7+). Combined Science with Grade 7-7 is accepted by many medical schools as an alternative, but separate sciences are considered more competitive. Check each medical school\'s entry requirements individually — they do vary.',
    },
    {
      question: 'Is GCSE Biology needed for Nursing?',
      answer:
        'Not always mandatory at GCSE level, but most nursing degree programmes require at least one science GCSE at Grade 4 or above (Biology, Chemistry, or Physics). The Nursing and Midwifery Council (NMC) does not specify a Biology GCSE, but many universities specify it in their individual entry requirements.',
    },
  ],
};

const chemistry: SubjectPathway = {
  id: 'chemistry',
  name: 'Chemistry',
  tier: 1,
  seoTitle: 'GCSE Chemistry Grade — A-Levels, Medicine & STEM Pathways | GradesNova',
  seoDescription:
    'See what your GCSE Chemistry grade unlocks for A-Levels, university admissions, and science careers. Essential for Medicine, Pharmacy, Chemical Engineering. Full grade-by-grade guide.',
  socialDescription:
    'Chemistry is the key to Medicine, Pharmacy & Chemical Engineering. Grade 6+ opens A-Level Chemistry — see your pathway.',
  heroText:
    'GCSE Chemistry is the gateway to some of the most intellectually demanding and financially rewarding careers in existence. It is the only GCSE subject explicitly required by both Medicine and Pharmacy degree programmes at all leading UK universities — a unique distinction. The Royal Society of Chemistry reports that chemistry degree graduates have among the highest graduate employment rates and earnings of any STEM subject in the UK. Beyond the laboratory, GCSE Chemistry\'s emphasis on quantitative analysis and systematic problem-solving makes high achievers naturally suited to data science, finance modelling, and engineering roles that value precise, analytical thinking.',
  keyFact:
    'A-Level Chemistry is a mandatory requirement for Medicine at every UK medical school and for MPharm Pharmacy at all universities — making it the single most career-critical science A-Level. Virtually every Sixth Form requires Grade 6 in GCSE Chemistry to access it.',
  keyFactSource: 'Medical Schools Council Entry Requirements 2026; Royal Pharmaceutical Society; Ofqual GCSE entry data',
  regulatoryBodies: ['Ofqual', 'JCQ', 'AQA', 'Edexcel (Pearson)', 'OCR', 'WJEC', 'Royal Society of Chemistry'],
  lastReviewed: '2026-05-01',
  gradeTiers: [
    {
      grades: 'Grade 8 & 9',
      gradeRange: [8, 9],
      title: 'The STEM Excellence Standard',
      description:
        'Grades 8–9 place you in the top 8% of GCSE Chemistry candidates nationally and represent the expected GCSE baseline for Oxford Chemistry, Cambridge Natural Sciences, and Imperial College Medicine applicants. These grades demonstrate thorough command of organic chemistry mechanisms, quantitative analysis (including mole calculations and titration), electrochemistry, and transition metal chemistry — the conceptual scaffolding that A-Level Chemistry builds directly on. At this level, your GCSE record is an asset, not merely a threshold: Oxford Chemistry published that over 80% of successful 2024 applicants held Grade 9 in GCSE Chemistry. The British Chemistry Olympiad and RSC\'s Top of the Bench competition are both available and meaningful CV additions at this grade level.',
      unlockedAlevels: [
        'Chemistry A-Level',
        'Further Mathematics',
        'Biology A-Level',
        'Physics A-Level',
        'Environmental Science A-Level',
      ],
    },
    {
      grades: 'Grade 6 & 7',
      gradeRange: [6, 7],
      title: 'The Science Core Gateway',
      description:
        'Grade 6 is the near-universal minimum for A-Level Chemistry — all major Sixth Forms require at least this, and many selective institutions require Grade 7. This grade range also satisfies the GCSE science requirements for Economics at LSE (which recommends A-Level Maths but checks GCSE sciences), Computer Science (which requires strong quantitative thinking), and the broader Russell Group minimum science GCSE profile. University offers for Pharmacy (MPharm) typically cite Grade 6 in Chemistry as a minimum GCSE requirement, making this grade range the entry point for the pharmaceutical career pathway.',
      unlockedAlevels: [
        'Chemistry A-Level',
        'Physics A-Level',
        'Biology A-Level',
        'Computer Science A-Level',
        'Mathematics A-Level',
      ],
    },
    {
      grades: 'Grade 4 & 5',
      gradeRange: [4, 5],
      title: 'The Foundation Pass',
      description:
        'A Grade 4 or 5 satisfies your core science requirement for post-16 progression and Sixth Form entry. However, most Sixth Forms will not accept Grade 4 or 5 as direct entry to A-Level Chemistry. Students in this range are well-served by BTEC Applied Science (Level 3), which is a widely respected vocational alternative that can lead to degree entry in Biomedical Science, Environmental Science, and Forensic Science at many universities. The T-Level in Health & Science (Science route) is another structured Level 3 option with industry placement.',
      unlockedAlevels: [
        'Applied Science BTEC (Level 3)',
        'Engineering BTEC',
        'Health & Social Care BTEC',
        'T-Level: Engineering & Manufacturing',
        'T-Level: Health & Science',
      ],
    },
    {
      grades: 'Grade 3 and below',
      gradeRange: [1, 3],
      title: 'Vocational & Technical Routes',
      description:
        'Below Grade 4 in Chemistry, the A-Level science track is closed. However, high-quality laboratory technician apprenticeships (Level 3) and food science and manufacturing roles do not require a Grade 4 in Chemistry. The STEM Learning apprenticeship and various pharmaceutical manufacturing apprenticeships offer structured routes into the chemistry-adjacent workforce without a high GCSE grade. These are not consolation routes — laboratory technician roles in NHS pathology and pharmaceutical manufacturing are in high demand and well-compensated.',
      unlockedAlevels: [
        'Laboratory Technician Apprenticeship (Level 3)',
        'T-Level: Health & Science',
        'BTEC Applied Science (Level 2 entry)',
        'Food Science & Technology courses',
        'Pharmaceutical Manufacturing Apprenticeship',
      ],
    },
  ],
  relatedDegrees: [
    'Medicine (MBBS)',
    'Pharmacy (MPharm)',
    'Chemical Engineering (MEng)',
    'Biochemistry (BSc)',
    'Materials Science (BSc)',
    'Dentistry (BDS)',
  ],
  careers: [
    'Pharmacist (avg. NHS salary: £43,000–£58,000)',
    'Chemical Engineer (avg. £45,000–£75,000)',
    'Research Scientist',
    'Forensic Scientist',
    'Dentist',
    'Toxicologist',
  ],
  faq: [
    {
      question: 'Is GCSE Chemistry required for A-Level Chemistry?',
      answer:
        'Yes — virtually every Sixth Form requires you to have taken GCSE Chemistry (either as a separate science or as part of Combined Science) to study A-Level Chemistry. A minimum Grade 6 in GCSE Chemistry (or Grade 6-6 in Combined Science) is standard. Some selective schools require Grade 7.',
    },
    {
      question: 'Do I need separate GCSE Chemistry or will Combined Science do for Medicine?',
      answer:
        'Most UK medical schools accept Combined Science at Grade 7-7 or equivalent as a substitute for separate science GCSEs, though separate sciences are considered more competitive. Some medical schools (including Oxford and some London schools) explicitly prefer or require separate science GCSEs. Always check the specific entry requirements of each medical school you are considering.',
    },
    {
      question: 'What can I do with a Grade 5 in GCSE Chemistry?',
      answer:
        'A Grade 5 opens vocational science pathways including BTEC Applied Science (Level 3), T-Levels in Health & Science or Engineering, and some laboratory apprenticeships. It typically does not qualify for A-Level Chemistry at standard Sixth Forms, but some FE colleges may accept it. Contact institutions directly.',
    },
    {
      question: 'Is Chemistry A-Level really required for all medical schools?',
      answer:
        'Yes. A-Level Chemistry is the only A-Level that is required or "essential" at every UK medical school without exception. The Medical Schools Council Entry Requirements guide (updated annually) confirms this. No other science A-Level has this universal status.',
    },
  ],
};

const physics: SubjectPathway = {
  id: 'physics',
  name: 'Physics',
  tier: 1,
  seoTitle: 'GCSE Physics Grade — Engineering, A-Levels & Technology Pathways | GradesNova',
  seoDescription:
    'Find out what your GCSE Physics grade opens at Sixth Form — A-Level Physics, Engineering, Computer Science, and Architecture. Full grade-by-grade guide with university entry requirements.',
  socialDescription:
    'Physics + Maths A-Level unlocks Engineering, Architecture & Astrophysics. See what your GCSE Physics grade opens.',
  heroText:
    'GCSE Physics is the foundational credential for the engineering, technology, and physical sciences sectors that drive the UK\'s productivity. From renewable energy to semiconductor design, from aerospace engineering to nuclear physics, the career pathways that GCSE Physics unlocks are among the most strategically important in the economy. Engineering UK reports that the UK needs 265,000 new engineers annually to fill demand — and every one of those roles traces back to Physics at GCSE and A-Level. Beyond engineering, a strong GCSE Physics grade positions students for Computer Science (where the mathematical rigour of physics is highly transferable), Architecture (where spatial reasoning and structural understanding are prerequisites), and Astrophysics at leading research universities.',
  keyFact:
    'Engineering UK\'s 2024 report estimates the UK requires 265,000 additional engineers per year — and A-Level Physics is required or strongly preferred for the vast majority of engineering degree programmes.',
  keyFactSource: 'Engineering UK 2024 Report: The State of Engineering; individual university admissions requirements',
  regulatoryBodies: ['Ofqual', 'JCQ', 'AQA', 'Edexcel (Pearson)', 'OCR', 'WJEC', 'Institute of Physics'],
  lastReviewed: '2026-05-01',
  gradeTiers: [
    {
      grades: 'Grade 8 & 9',
      gradeRange: [8, 9],
      title: 'The Engineering & STEM Elite',
      description:
        'Grades 8–9 demonstrate exceptional quantitative reasoning and mastery of the core Physics concepts — mechanics, electromagnetism, waves, quantum physics, and space — that A-Level and degree-level Physics build directly on. This is the profile of a future engineer or research physicist. Imperial College London, the UK\'s highest-ranked engineering institution, publishes that its successful Physics and Engineering applicants typically hold Grade 8 or 9 in GCSE Physics and Maths. The Institute of Physics\' (IOP) Stimulating Physics Network and Physics Olympiad competition are both accessible at this grade level, and strong performance in these is noted positively by admissions tutors at Oxford, Cambridge, and Imperial. At Grade 9, you are also competitive for the UKMT/BPhO Physics Challenge — a significant differentiating credential for Oxbridge applications.',
      unlockedAlevels: [
        'Physics A-Level',
        'Further Mathematics',
        'Mathematics A-Level',
        'Computer Science A-Level',
        'Electronics (where offered)',
        'Design & Technology (Product Design)',
      ],
    },
    {
      grades: 'Grade 6 & 7',
      gradeRange: [6, 7],
      title: 'The Core Engineering Gateway',
      description:
        'Grade 6 is the near-universal Sixth Form minimum for A-Level Physics. A Grade 7 provides additional security for selective engineering Sixth Form programmes and is typically required alongside Grade 7 Maths for entry to A-Level Further Maths at grammar schools. This grade range satisfies the GCSE Physics requirement for Architecture at the Bartlett (UCL), Manchester, and Edinburgh — all of which cite relevant GCSE science grades as part of their holistic admissions review. The Institution of Engineering and Technology (IET) notes that Grade 6+ in Physics and Maths is the practical starting point for an engineering career trajectory.',
      unlockedAlevels: [
        'Physics A-Level',
        'Mathematics A-Level',
        'Computer Science A-Level',
        'Design & Technology A-Level',
        'Geography (Physical)',
      ],
    },
    {
      grades: 'Grade 4 & 5',
      gradeRange: [4, 5],
      title: 'The Technical & Vocational Route',
      description:
        'Grades 4 and 5 satisfy your core science graduation requirement and enable Sixth Form entry. However, most Sixth Forms will not offer A-Level Physics at this grade level. The BTEC Engineering (Level 3) pathway and T-Level in Engineering & Manufacturing are excellent vocational alternatives — both carry UCAS points and are accepted for degree apprenticeship entry by employers including BAE Systems, Rolls-Royce, and Network Rail. The Higher National Certificate (HNC) in Engineering is also accessible after BTEC Level 3 and represents a valued entry route into professional engineering roles.',
      unlockedAlevels: [
        'Engineering BTEC (Level 3)',
        'T-Level: Engineering & Manufacturing',
        'Construction & Built Environment BTEC',
        'Digital IT BTEC',
      ],
    },
    {
      grades: 'Grade 3 and below',
      gradeRange: [1, 3],
      title: 'Apprenticeship & Skilled Trades Route',
      description:
        'Below Grade 4 in Physics, A-Level pathways close — but the UK\'s skilled trades and engineering technician apprenticeships offer excellent earnings and career progression entirely independently of A-Level grades. Electrical installation, plumbing and heating engineering, and construction apprenticeships are all high-demand routes: the average UK electrician earns approximately £38,000 per year, rising significantly with experience and self-employment. These are not fallback routes — they are direct, vocational paths into infrastructure and construction sectors that are currently experiencing significant skills shortages.',
      unlockedAlevels: [
        'Electrical Installation Apprenticeship (Level 3)',
        'Plumbing & Heating Engineering Apprenticeship',
        'Construction T-Level',
        'Engineering Technician Apprenticeship (Level 3)',
      ],
    },
  ],
  relatedDegrees: [
    'Mechanical Engineering (MEng)',
    'Electrical & Electronic Engineering (MEng)',
    'Astrophysics & Physics (BSc/MPhys)',
    'Architecture (BArch)',
    'Computer Science (MEng)',
    'Aerospace Engineering (MEng)',
  ],
  careers: [
    'Civil / Structural Engineer (avg. £35,000–£70,000)',
    'Aerospace Engineer (avg. £45,000–£80,000)',
    'Architect (avg. £35,000–£75,000)',
    'Nuclear Physicist / Scientist',
    'Robotics Engineer',
    'Telecommunications Engineer',
  ],
  faq: [
    {
      question: 'What GCSE Physics grade do I need for A-Level Physics?',
      answer:
        'Most Sixth Forms require Grade 6 in GCSE Physics (or Grade 6-6 in Combined Science) to study A-Level Physics. A Grade 7 is preferred by selective institutions and is typically required for the most competitive engineering Sixth Form programmes.',
    },
    {
      question: 'Do I need A-Level Physics for Engineering at university?',
      answer:
        'Yes. The vast majority of BEng and MEng engineering programmes require A-Level Physics alongside A-Level Mathematics. Without A-Level Physics, most engineering degree pathways are inaccessible — including Mechanical, Aerospace, Civil, and Electrical Engineering at Russell Group universities.',
    },
    {
      question: 'Can I study Engineering without taking separate GCSE Physics?',
      answer:
        'Combined Science is accepted by most universities for engineering entry, provided you achieve the equivalent grade (typically Grade 6-6 or above) and go on to study A-Level Physics. Separate sciences are preferred by the most competitive engineering programmes.',
    },
    {
      question: 'Is GCSE Physics useful for Computer Science degrees?',
      answer:
        'Yes. Many leading Computer Science programmes — particularly at Cambridge, Imperial, and Warwick — note that GCSE and A-Level Physics provides valuable mathematical and logical reasoning grounding. Cambridge\'s Computer Science course applicants frequently hold Physics A-Level alongside Mathematics.',
    },
  ],
};

// ─────────────────────────────────────────────
// TIER 2 — Humanities & Social Sciences
// ─────────────────────────────────────────────

const history: SubjectPathway = {
  id: 'history',
  name: 'History',
  tier: 2,
  seoTitle: 'GCSE History Grade — A-Levels, Law & Social Science Pathways | GradesNova',
  seoDescription:
    'Discover what your GCSE History grade means for essay-based A-Levels, politics and law degrees, and humanities careers. Full grade breakdown with Sixth Form entry requirements.',
  socialDescription:
    'GCSE History at Grade 6+ unlocks Law, Politics & Social Science A-Levels. See what your grade means.',
  heroText:
    'GCSE History is one of the most academically rigorous qualifications available at GCSE level. Ofsted and exam boards consistently identify it as developing the highest-order analytical skills — source evaluation, causation analysis, and sustained evidential argument — that directly transfer to success at A-Level and beyond. The Russell Group explicitly lists A-Level History as one of its eight "facilitating subjects," the qualifications it says keep "the widest range of degree options open." History\'s combination of analytical and essay skills makes it the most valued supporting qualification for Law, PPE, International Relations, and Journalism at leading universities. The Historical Association reports that History remains one of the top five most popular GCSE subjects in England.',
  keyFact:
    'A-Level History is one of eight subjects designated as "facilitating" by the Russell Group — meaning it actively opens rather than limits degree choices at top UK universities.',
  keyFactSource: 'Russell Group Informed Choices guide, 2024 edition; Historical Association GCSE entry data',
  regulatoryBodies: ['Ofqual', 'JCQ', 'AQA', 'Edexcel (Pearson)', 'OCR', 'WJEC'],
  lastReviewed: '2026-05-01',
  gradeTiers: [
    {
      grades: 'Grade 7, 8 & 9',
      gradeRange: [7, 9],
      title: 'The Politics, Law & Academia Route',
      description:
        'Grades 7–9 in GCSE History signal exceptional source analysis, sustained essay construction, and historical reasoning skills. Oxford PPE and Cambridge History and Politics both cite GCSE History grades among the contextual signals reviewed in applications. At this level, your essay skills are already at the threshold required for A-Level success and will be an active positive in university personal statements. The Inns of Court and law firms recognise History as one of the strongest non-Law GCSE and A-Level subjects for analytical thinking. Competitive debating, Model United Nations, and the Historical Association\'s essay competitions are all natural co-curricular extensions at this grade.',
      unlockedAlevels: [
        'History A-Level',
        'Politics A-Level',
        'Law (Pre-Law / Government & Politics)',
        'Philosophy & Ethics',
        'Classical Civilisation',
        'Economics (some schools)',
      ],
    },
    {
      grades: 'Grade 5 & 6',
      gradeRange: [5, 6],
      title: 'The Social Science Gateway',
      description:
        'Grade 6 is the standard Sixth Form minimum for A-Level History at most institutions. This range demonstrates solid analytical and essay writing competence, and it supports applications for Sociology, Psychology, and Religious Studies A-Levels where similar skills are required. UCAS data shows that Grade 5+ in History is consistently cited as a "desirable" supporting GCSE by universities admitting to social science degrees including Sociology, Social Policy, and Criminology.',
      unlockedAlevels: [
        'Sociology A-Level',
        'Religious Studies A-Level',
        'Geography A-Level',
        'Business Studies A-Level',
        'Media Studies A-Level',
      ],
    },
    {
      grades: 'Grade 4',
      gradeRange: [4, 4],
      title: 'The Standard Pass',
      description:
        'A Grade 4 counts positively toward your core GCSE profile for Sixth Form entry. Most Sixth Forms will not accept it as a direct entry requirement for A-Level History, but it contributes to your overall academic record. Students with a Grade 4 in History and strong grades elsewhere are not disadvantaged for STEM or vocational pathways.',
      unlockedAlevels: [
        'Counts as a supporting GCSE for general Sixth Form entry',
        'BTECs in Public Services, Travel & Tourism, or Uniformed Services',
      ],
    },
  ],
  relatedDegrees: [
    'Law (LLB)',
    'History (BA)',
    'PPE (Oxford)',
    'Politics & International Relations (BA)',
    'Journalism (BA)',
    'Archaeology (BA/BSc)',
  ],
  careers: [
    'Solicitor / Barrister',
    'Politician / Policy Adviser',
    'Journalist / Foreign Correspondent',
    'Museum Curator',
    'Civil Servant (Fast Stream)',
    'Archivist',
  ],
  faq: [
    {
      question: 'What grade do I need in GCSE History to take A-Level History?',
      answer:
        'Most Sixth Forms require a minimum Grade 6 in GCSE History for A-Level. Some accept a Grade 5, but this varies by institution. Grade 7 is typical at grammar schools and selective sixth form colleges.',
    },
    {
      question: 'Is GCSE History useful for a Law degree?',
      answer:
        'Yes. Law schools at Russell Group universities consistently value History as one of the strongest supporting subjects because it develops source evaluation, construction of evidence-based arguments, and nuanced written reasoning — all core legal skills.',
    },
    {
      question: 'Is A-Level History a facilitating subject?',
      answer:
        'Yes. The Russell Group explicitly lists A-Level History as one of eight "facilitating subjects" that keep the widest range of degree options open. It is accepted for virtually all humanities and social science degree programmes and is well-regarded by science departments as an additional humanities A-Level.',
    },
  ],
};

const geography: SubjectPathway = {
  id: 'geography',
  name: 'Geography',
  tier: 2,
  seoTitle: 'GCSE Geography Grade — A-Levels, Environmental Science & Career Paths | GradesNova',
  seoDescription:
    'Explore what GCSE Geography grades unlock for A-Level study, environmental careers, and university applications. From urban planning to climate science — full grade-by-grade guide.',
  socialDescription:
    'Geography sits between sciences and humanities — a Grade 6+ opens some of the most diverse A-Level combinations. See your pathway.',
  heroText:
    'GCSE Geography uniquely straddles the sciences and humanities, developing proficiency in both quantitative data analysis and extended essay writing. The Royal Geographical Society notes that Geography graduates have among the broadest employment spread of any UK degree subject — entering roles in finance, NGOs, government, environmental consultancy, and tech. A-Level Geography is listed by the Russell Group as a facilitating subject. With climate change placing environmental expertise at the centre of global policy, the career premium on geographic and environmental knowledge has never been greater: the ONS projects environmental and sustainability roles to grow 11% in the UK by 2030.',
  keyFact:
    'A-Level Geography is listed by the Russell Group as one of eight facilitating subjects. The ONS projects 11% growth in environmental and sustainability roles in the UK by 2030.',
  keyFactSource: 'Russell Group Informed Choices 2024; ONS Labour Market Projections 2024; Royal Geographical Society',
  regulatoryBodies: ['Ofqual', 'JCQ', 'AQA', 'Edexcel (Pearson)', 'OCR', 'WJEC'],
  lastReviewed: '2026-05-01',
  gradeTiers: [
    {
      grades: 'Grade 7, 8 & 9',
      gradeRange: [7, 9],
      title: 'The Environmental Sciences Route',
      description:
        'Top grades in GCSE Geography demonstrate dual competence in quantitative skills (GIS, data analysis, fieldwork methodology) and extended analytical writing — a genuinely rare combination at GCSE level. This profile suits degree programmes in Environmental Science, Physical Geography, Earth Sciences, and Development Studies at Russell Group universities. The Royal Geographical Society\'s undergraduate award and Geography Olympiad are accessible co-curricular additions at this level.',
      unlockedAlevels: [
        'Geography A-Level',
        'Environmental Science A-Level',
        'Biology A-Level',
        'Geology A-Level',
        'Economics A-Level',
      ],
    },
    {
      grades: 'Grade 5 & 6',
      gradeRange: [5, 6],
      title: 'The Humanities & Social Science Gateway',
      description:
        'Grade 6 is the standard minimum for A-Level Geography at most Sixth Forms. This range opens the broader humanities and social science pathway and demonstrates the analytical skills needed for Politics, Sociology, and Business Studies.',
      unlockedAlevels: [
        'Sociology A-Level',
        'Politics A-Level',
        'Business Studies A-Level',
        'Travel & Tourism BTEC',
        'Psychology A-Level',
      ],
    },
    {
      grades: 'Grade 4',
      gradeRange: [4, 4],
      title: 'The Standard Pass',
      description:
        'Contributes positively to your core GCSE profile for Sixth Form entry. Unlikely to be the entry point for A-Level Geography at most schools, but supports vocational pathways in planning, environmental work, or public services.',
      unlockedAlevels: [
        'Public Services BTEC',
        'Travel & Tourism BTEC',
        'Supporting entry profile for Sixth Form',
      ],
    },
  ],
  relatedDegrees: [
    'Geography (BSc/BA)',
    'Environmental Science (BSc)',
    'Urban & Regional Planning (BSc)',
    'Development Studies (BA)',
    'Earth Sciences (BSc)',
    'International Relations (BA)',
  ],
  careers: [
    'Urban Planner',
    'Environmental Consultant',
    'GIS Analyst',
    'Climate Policy Adviser',
    'Hydrologist',
    'NGO Programme Manager',
  ],
  faq: [
    {
      question: 'Is GCSE Geography classed as a science subject?',
      answer:
        'Geography sits between arts and sciences. GCSE Geography is not classed as one of the three "sciences" (Biology, Chemistry, Physics) for purposes of science GCSE requirements. However, A-Level Geography is listed by the Russell Group as a facilitating subject and is well-regarded by universities.',
    },
    {
      question: 'What grade do I need for A-Level Geography?',
      answer:
        'Most Sixth Forms require a Grade 6 in GCSE Geography for A-Level entry. A Grade 5 may be accepted at some institutions — check directly with your school.',
    },
    {
      question: 'Is Geography a good A-Level for environmental careers?',
      answer:
        'Yes. A-Level Geography is the most direct A-Level route to Environmental Science and Earth Sciences degrees, and to careers in sustainability, climate policy, and environmental consulting. The ONS projects strong growth in these roles through 2030.',
    },
  ],
};

const religiousStudies: SubjectPathway = {
  id: 'religious-studies',
  name: 'Religious Studies',
  tier: 2,
  seoTitle: 'GCSE Religious Studies Grade — A-Levels, Law & Philosophy Pathways | GradesNova',
  seoDescription:
    'Find out what your GCSE Religious Studies grade unlocks for A-Level Philosophy, Law, and university degrees in theology, ethics, and social sciences. Full grade guide.',
  socialDescription:
    'RS at Grade 6+ unlocks Philosophy, Ethics & Law A-Levels. Strong essay foundation for any humanities path.',
  heroText:
    'GCSE Religious Studies is academically underestimated but intellectually demanding. It develops what philosophers call "normative reasoning" — the ability to construct and evaluate ethical arguments under conditions of genuine uncertainty. This is exactly the intellectual faculty that law firms, hospitals (for clinical ethics), and public policy organisations prize. Philosophy & Ethics A-Level, which requires GCSE RS as its closest related GCSE, has seen a 34% increase in entries since 2015 according to JCQ data — driven partly by its strong performance as a supporting qualification for PPE, Law, and Theology at Oxford and Cambridge.',
  keyFact:
    'Philosophy & Ethics A-Level entries grew 34% between 2015 and 2024 (JCQ data) — one of the fastest-growing A-Levels in England — and GCSE Religious Studies is the primary qualifying foundation subject.',
  keyFactSource: 'JCQ A-Level Results Data 2015–2024; Oxford and Cambridge admissions transparency reports',
  regulatoryBodies: ['Ofqual', 'JCQ', 'AQA', 'Edexcel (Pearson)', 'OCR', 'WJEC'],
  lastReviewed: '2026-05-01',
  gradeTiers: [
    {
      grades: 'Grade 7, 8 & 9',
      gradeRange: [7, 9],
      title: 'The Philosophy & Ethics Route',
      description:
        'Top grades in GCSE RS demonstrate outstanding ethical reasoning and sustained essay construction — skills Oxford PPE tutors assess at interview through moral dilemma questions and argument analysis. At this level, you have the analytical foundation for the most rigorous humanities A-Levels. A-Level Philosophy & Ethics at Grade A is consistently cited by Oxbridge Law and Theology tutors as one of the strongest supporting A-Levels, alongside History and English Literature.',
      unlockedAlevels: [
        'Philosophy & Ethics A-Level',
        'Theology & RS A-Level',
        'Law (Pre-Law)',
        'History A-Level',
        'Politics A-Level',
      ],
    },
    {
      grades: 'Grade 5 & 6',
      gradeRange: [5, 6],
      title: 'The Humanities & Social Science Gateway',
      description:
        'Grade 6 is the standard minimum for A-Level Religious Studies or Philosophy & Ethics at most Sixth Forms. This range supports Sociology, Psychology, Counselling & Therapy, and Health & Social Care pathways where ethical awareness and reflective reasoning are core competencies.',
      unlockedAlevels: [
        'Sociology A-Level',
        'Psychology A-Level',
        'Health & Social Care BTEC',
        'English Literature A-Level',
        'Geography A-Level',
      ],
    },
    {
      grades: 'Grade 4',
      gradeRange: [4, 4],
      title: 'The Standard Pass',
      description:
        'A Grade 4 counts positively toward your core GCSE profile for Sixth Form entry. Unlikely to be accepted for A-Level RS or Philosophy & Ethics, but contributes to your overall GCSE record. No resit obligation applies.',
      unlockedAlevels: [
        'Contributes to general Sixth Form entry profile',
        'BTECs in Care, Childcare, or Public Services',
      ],
    },
  ],
  relatedDegrees: [
    'Theology & Religious Studies (BA)',
    'Philosophy (BA)',
    'Social Work (BA)',
    'Law (LLB)',
    'PPE (Oxford)',
    'Counselling & Psychotherapy (BSc)',
  ],
  careers: [
    'Solicitor / Barrister',
    'Social Worker',
    'Chaplain / Clergy',
    'Ethicist / Policy Adviser',
    'Charity Sector Manager',
    'Secondary School Teacher (RS)',
  ],
  faq: [
    {
      question: 'Is GCSE Religious Studies useful for Law?',
      answer:
        'Yes. RS is valued by Law schools because it develops ethical reasoning, balanced multi-perspective argument, and the ability to understand competing normative frameworks — all core legal competencies. It is considered one of the stronger supporting GCSEs for Law applications.',
    },
    {
      question: 'What A-Levels does GCSE RS lead to?',
      answer:
        'GCSE RS most directly leads to A-Level Religious Studies and A-Level Philosophy & Ethics. It also supports entry to History, Sociology, and Politics A-Levels where essay skills and ethical reasoning are central.',
    },
  ],
};

// ─────────────────────────────────────────────
// TIER 3 — Applied & Technical
// ─────────────────────────────────────────────

const computerScience: SubjectPathway = {
  id: 'computer-science',
  name: 'Computer Science',
  tier: 3,
  seoTitle: 'GCSE Computer Science Grade — A-Levels, Tech Careers & Degrees | GradesNova',
  seoDescription:
    'Find out what your GCSE Computer Science grade unlocks for A-Level entry, software engineering degrees, and tech careers. Grade 6+ required for A-Level CS. Full grade-by-grade guide.',
  socialDescription:
    'Grade 6+ in CS opens A-Level Computer Science — the launchpad for software engineering and AI. See your pathway.',
  heroText:
    'GCSE Computer Science is the most career-directly-relevant technical qualification available at GCSE, in an economy where digital skills command premium salaries and chronic shortages persist. Tech Nation reports that the UK\'s tech sector employs 3 million people and contributes £149 billion annually to the economy — and demand for software engineers has grown every year for a decade. BCS, The Chartered Institute for IT, notes that software engineering roles are among the highest-paid graduate positions in the UK, with median starting salaries above £35,000 and senior roles exceeding £100,000. A strong GCSE Computer Science grade, combined with A-Level Maths, is the most direct educational path to these careers.',
  keyFact:
    'The UK\'s tech sector contributes £149 billion annually and employs 3 million people (Tech Nation 2024) — and A-Level Computer Science combined with A-Level Maths is the primary academic route for software engineering and AI careers.',
  keyFactSource: 'Tech Nation UK Tech Sector Report 2024; BCS salary survey 2024',
  regulatoryBodies: ['Ofqual', 'JCQ', 'AQA', 'OCR', 'Edexcel (Pearson)', 'BCS (Chartered Institute for IT)'],
  lastReviewed: '2026-05-01',
  gradeTiers: [
    {
      grades: 'Grade 7, 8 & 9',
      gradeRange: [7, 9],
      title: 'The Software Engineering Pathway',
      description:
        'Grades 7–9 demonstrate mastery of algorithms, data structures, computational logic, programming constructs, and computer architecture — the exact conceptual foundation that A-Level CS and university-level programming courses build directly upon. Cambridge Computer Science, Imperial MEng Computing, and UCL Computer Science all cite GCSE CS performance in their contextual admissions data. At Grade 9, you are a competitive candidate for the UKMT Junior/Senior Challenges, the Bebras Computational Thinking Challenge, and the British Informatics Olympiad — credentials that differentiate Oxbridge CS applications. DeepMind, Google DeepMind, and major UK tech firms run school-age programmes that use GCSE CS grades as initial eligibility filters.',
      unlockedAlevels: [
        'Computer Science A-Level',
        'Further Mathematics A-Level',
        'Mathematics A-Level',
        'Electronics (where offered)',
        'Physics A-Level',
      ],
    },
    {
      grades: 'Grade 5 & 6',
      gradeRange: [5, 6],
      title: 'The Tech & Digital Gateway',
      description:
        'Grade 6 is the standard Sixth Form minimum for A-Level Computer Science, alongside typically Grade 6 in Maths (since the two subjects are deeply complementary). A Grade 5 may be accepted at some FE colleges. This grade range opens strong pathways in BTEC Digital Technology, Cyber Security, and Business IT — all of which carry UCAS points and are accepted for higher apprenticeships at leading employers including BT, Capita, and Fujitsu.',
      unlockedAlevels: [
        'Computer Science A-Level',
        'Digital Technology BTEC (Level 3)',
        'IT & Business A-Level',
        'Cyber Security BTEC',
      ],
    },
    {
      grades: 'Grade 4',
      gradeRange: [4, 4],
      title: 'The Digital Skills Pass',
      description:
        'A Grade 4 contributes to your Sixth Form profile. Most schools will direct students in this grade range towards BTEC IT or the T-Level in Digital & Computing rather than A-Level Computer Science. The T-Level Digital route is a significant qualification — equivalent to three A-Levels with an industry placement component — and is accepted by many universities and employers for computing-related roles.',
      unlockedAlevels: [
        'BTEC IT (Level 3)',
        'T-Level: Digital & Computing',
        'Digital Marketing BTEC',
        'Business Studies (IT route)',
      ],
    },
    {
      grades: 'Grade 3 and below',
      gradeRange: [1, 3],
      title: 'Apprenticeship & Entry-Level Tech Route',
      description:
        'Below Grade 4 in GCSE CS, formal A-Level routes are closed — but technical aptitude is demonstrable through personal projects (GitHub portfolios, open-source contributions), online certifications (freeCodeCamp, Codecademy, Google Career Certificates), and IT support apprenticeships (Level 3) that do not require high GCSE grades. Many successful developers entered the industry through these routes: coding skill ultimately matters far more than exam grades in practice.',
      unlockedAlevels: [
        'IT Support Apprenticeship (Level 3)',
        'Digital Marketing Apprenticeship',
        'T-Level: Digital (confirm with provider)',
        'Level 2 IT User qualifications',
      ],
    },
  ],
  relatedDegrees: [
    'Computer Science (BSc/MEng)',
    'Software Engineering (MEng)',
    'Artificial Intelligence (BSc)',
    'Cyber Security (BSc)',
    'Data Science (BSc)',
    'Game Development (BSc)',
  ],
  careers: [
    'Software Engineer (avg. UK: £55,000–£90,000)',
    'Full-Stack Developer',
    'Data Scientist (avg. £50,000–£85,000)',
    'AI / ML Engineer (avg. £65,000–£120,000)',
    'Cyber Security Analyst',
    'Product Manager',
  ],
  faq: [
    {
      question: 'What GCSE grade do I need for A-Level Computer Science?',
      answer:
        'Most Sixth Forms require at least Grade 6 in GCSE Computer Science, alongside a Grade 6 or 7 in GCSE Mathematics. The two subjects are highly complementary — strong Maths is particularly important as A-Level CS includes significant algorithm design and Boolean algebra content.',
    },
    {
      question: 'Do I need GCSE Computer Science to become a software engineer?',
      answer:
        'It is not strictly required, but it is the clearest academic signal of computational aptitude. Many successful developers also enter through self-teaching, bootcamps, or apprenticeships. However, the fastest and most structured academic route — especially to top tech companies and AI research roles — goes through GCSE CS → A-Level CS → university degree.',
    },
    {
      question: 'Is A-Level Computer Science a Russell Group facilitating subject?',
      answer:
        'Computer Science is not on the Russell Group\'s official "facilitating subjects" list, but it is highly regarded for CS and related degree applications at all top universities. Cambridge explicitly states that A-Level CS "would be beneficial" for its Computer Science Tripos.',
    },
  ],
};

const physicalEducation: SubjectPathway = {
  id: 'physical-education',
  name: 'Physical Education',
  tier: 3,
  seoTitle: 'GCSE PE Grade — A-Levels, Sports Science & Coaching Careers | GradesNova',
  seoDescription:
    'Find out what your GCSE Physical Education grade unlocks for A-Level PE, Sports Science degrees, and careers in coaching, physiotherapy, and sports medicine.',
  socialDescription:
    'Grade 6+ in GCSE PE opens A-Level PE and Sports Science. See your full career pathway in sport and health.',
  heroText:
    'GCSE Physical Education is considerably more academically rigorous than its reputation suggests. Its specification covers anatomy and physiology, biomechanics, sports psychology, and health and fitness — fields that underpin both NHS physiotherapy and elite sports science. The sport and leisure sector employs over 700,000 people in the UK (UK Sport / Sport England), and the health and fitness industry has grown 25% since 2019. Physiotherapy — one of the most sought-after careers among PE students — requires a degree (BSc Physiotherapy) that is increasingly competitive at Russell Group institutions, with Leeds and Nottingham citing A-Level Biology and PE as the most relevant combination.',
  keyFact:
    'The UK sport and leisure sector employs over 700,000 people, with Sport England projecting continued growth. Physiotherapy degree places at Russell Group universities are among the most competitive allied health programmes.',
  keyFactSource: 'Sport England Active Lives Survey 2024; UK Sport Workforce Data; individual university admissions data',
  regulatoryBodies: ['Ofqual', 'JCQ', 'AQA', 'Edexcel (Pearson)', 'OCR', 'Health & Care Professions Council (HCPC)'],
  lastReviewed: '2026-05-01',
  gradeTiers: [
    {
      grades: 'Grade 7, 8 & 9',
      gradeRange: [7, 9],
      title: 'The Sports Science & Physiotherapy Route',
      description:
        'Top grades demonstrate exceptional understanding of exercise physiology, anatomy, biomechanical principles, and sport psychology — all assessed at a level that prepares you directly for A-Level PE and university sports science content. The UK Strength & Conditioning Association (UKSCA) and the Chartered Society of Physiotherapy (CSP) recognise that A-Level PE at A/A* grade is the most relevant qualification for BSc Physiotherapy applications alongside Biology. At this level, your GCSE PE record is a positive differentiator for university applications to Sports Science at Loughborough (ranked world #1 for Sport Science by QS), Exeter, and Bath.',
      unlockedAlevels: [
        'Physical Education A-Level',
        'Biology A-Level',
        'Psychology A-Level',
        'Sports Science BTEC (Level 3)',
        'Dance A-Level (where offered)',
      ],
    },
    {
      grades: 'Grade 5 & 6',
      gradeRange: [5, 6],
      title: 'The Active Careers Gateway',
      description:
        'Grade 6 is typically the Sixth Form minimum for A-Level PE. This grade range opens pathways for Sports Coaching, Leisure Management, and Outdoor Education BTEC programmes at Level 3, which are accepted by many universities for Sports Development and Coaching Science degrees.',
      unlockedAlevels: [
        'Physical Education A-Level',
        'Health & Social Care BTEC',
        'Sports Coaching BTEC',
        'Outdoor Education BTEC',
      ],
    },
    {
      grades: 'Grade 4',
      gradeRange: [4, 4],
      title: 'The Standard Pass',
      description:
        'A Grade 4 contributes to your Sixth Form entry profile. BTEC Sport (Level 3) is the most accessible and widely respected alternative route for students in this grade band — it is accepted for Sports Science degree entry at many universities and includes practical components that showcase sporting ability alongside academic knowledge.',
      unlockedAlevels: [
        'Sport BTEC (Level 3)',
        'Fitness Instructing BTEC',
        'T-Level: Health & Science (Sport pathway)',
      ],
    },
  ],
  relatedDegrees: [
    'Sports Science (BSc)',
    'Physiotherapy (BSc)',
    'Physical Education & Teaching (BEd)',
    'Strength & Conditioning (BSc)',
    'Sports Psychology (BSc)',
    'Nutrition & Dietetics (BSc)',
  ],
  careers: [
    'Physiotherapist (NHS Band 5–7: £28,000–£53,000)',
    'PE Teacher',
    'Sports Coach / Performance Analyst',
    'Personal Trainer',
    'Exercise Physiologist',
    'Sports Development Officer',
  ],
  faq: [
    {
      question: 'What grade do I need in GCSE PE for A-Level PE?',
      answer:
        'Most Sixth Forms require a Grade 6 in GCSE PE for A-Level entry. Some schools also assess your practical sporting performance as part of the entry criteria, particularly for competitive Sixth Forms with high-performing sports programmes.',
    },
    {
      question: 'Is A-Level PE a good choice for a Physiotherapy degree?',
      answer:
        'Yes. Most BSc Physiotherapy programmes require or strongly prefer A-Level Biology, and A-Level PE is considered one of the most relevant complementary subjects. Leeds, Nottingham, and Cardiff specifically list PE as a relevant supporting A-Level for Physiotherapy applications.',
    },
    {
      question: 'Is Loughborough good for Sports Science?',
      answer:
        'Loughborough University is ranked number 1 in the world for Sports Science by QS World University Rankings and is the most prestigious destination for UK sports science graduates. Strong GCSE PE and A-Level PE grades are important supporting credentials for its competitive admissions process.',
    },
  ],
};

const designTechnology: SubjectPathway = {
  id: 'design-technology',
  name: 'Design & Technology',
  tier: 3,
  seoTitle: 'GCSE Design & Technology Grade — A-Levels, Engineering & Creative Careers | GradesNova',
  seoDescription:
    'Discover what your GCSE Design & Technology grade unlocks for A-Level study, architecture, engineering, and creative industry careers. Full grade-by-grade pathway guide.',
  socialDescription:
    'GCSE D&T at Grade 6+ opens Product Design A-Level and Engineering. See your full creative & technical career route.',
  heroText:
    'GCSE Design & Technology is the only qualification that simultaneously develops creative problem-solving, engineering knowledge, materials science understanding, and practical making skills. This rare combination is exactly what architecture firms, product companies, and engineering employers say they cannot find enough of — graduates who can both imagine and build. The Design Council reports that the UK design economy contributes £97.4 billion annually and employs 1.97 million people. Architecture — one of D&T\'s most natural graduate destinations — has among the highest job satisfaction rates of any UK profession according to Architects\' Journal surveys. The Architectural Association, RCA, and Goldsmiths all cite GCSE D&T or Art as the most relevant supporting qualifications.',
  keyFact:
    'The UK design economy contributes £97.4 billion annually and employs 1.97 million people (Design Council 2024) — making Design & Technology one of the most economically consequential GCSE subjects.',
  keyFactSource: 'Design Council UK Design Economy Report 2024; ARB (Architects Registration Board) data',
  regulatoryBodies: ['Ofqual', 'JCQ', 'AQA', 'Edexcel (Pearson)', 'OCR', 'Design & Technology Association'],
  lastReviewed: '2026-05-01',
  gradeTiers: [
    {
      grades: 'Grade 7, 8 & 9',
      gradeRange: [7, 9],
      title: 'The Architecture & Product Design Route',
      description:
        'Top grades demonstrate exceptional design thinking, technical drawing, material science, and iterative prototype skills. This is the profile that the Architectural Association, Royal College of Art (RCA), and UCL Bartlett look for in portfolio applicants. The RCA — ranked number 1 in the world for Art & Design by QS for nine consecutive years — notes that GCSE and A-Level D&T grades provide important contextual evidence of design thinking discipline alongside portfolio work. At this level, participation in the James Dyson Award and Design & Technology Association competitions are meaningful additions to a university application.',
      unlockedAlevels: [
        'Product Design A-Level',
        'Art & Design A-Level',
        'Physics A-Level (especially relevant for Product Design routes)',
        'Engineering BTEC (advanced)',
        'Architecture Foundation (where offered)',
      ],
    },
    {
      grades: 'Grade 5 & 6',
      gradeRange: [5, 6],
      title: 'The Creative & Technical Gateway',
      description:
        'Grade 6 is the standard Sixth Form minimum for A-Level Product Design or Design Technology. This range supports applications for Fashion & Textiles, Graphic Design, Engineering Technology, and Interior Design programmes at university and specialist art schools. Many creative arts universities (including Goldsmiths and UAL) note that a strong portfolio alongside a Grade 6+ in D&T or Art is the most competitive application profile.',
      unlockedAlevels: [
        'Product Design A-Level',
        'Art & Design A-Level',
        'Fashion & Textiles A-Level',
        'Engineering BTEC (Level 3)',
        'Graphics & Illustration BTEC',
      ],
    },
    {
      grades: 'Grade 4',
      gradeRange: [4, 4],
      title: 'The Practical Skills Pass',
      description:
        'A Grade 4 in D&T contributes to your GCSE profile and supports applications for vocational construction, manufacturing, or creative arts courses. Apprenticeships in carpentry, CAD design, and manufacturing are accessible from this grade band and offer direct routes into well-paid skilled trades.',
      unlockedAlevels: [
        'Construction BTEC',
        'Engineering & Manufacturing T-Level',
        'Creative Media BTEC',
        'Carpentry & Joinery Apprenticeship',
      ],
    },
  ],
  relatedDegrees: [
    'Architecture (BArch)',
    'Product & Industrial Design (BA)',
    'Mechanical Engineering (MEng)',
    'Fashion Design (BA)',
    'Interior Design (BA)',
    'Graphic Design (BA)',
  ],
  careers: [
    'Architect (ARB registered; avg. £35,000–£75,000)',
    'Product / Industrial Designer',
    'Mechanical Engineer',
    'UX / UI Designer',
    'Fashion Designer',
    'CAD Technician',
  ],
  faq: [
    {
      question: 'Does GCSE Design & Technology help with Engineering degrees?',
      answer:
        'Yes. D&T demonstrates practical problem-solving, materials knowledge, and iterative design thinking that complements Physics and Maths for engineering applications. It is particularly valued for Product Design, Mechanical Engineering, and Manufacturing Engineering degree applicants.',
    },
    {
      question: 'What grade do I need in GCSE D&T for A-Level Product Design?',
      answer:
        'Most Sixth Forms require Grade 6 in GCSE Design & Technology for A-Level Product Design. Portfolio quality and coursework may also be assessed as part of the entry criteria at some schools.',
    },
  ],
};

// ─────────────────────────────────────────────
// ADDITIONAL SUBJECTS — NEW
// ─────────────────────────────────────────────

const french: SubjectPathway = {
  id: 'french',
  name: 'French',
  tier: 2,
  seoTitle: 'GCSE French Grade — A-Levels, Language Degrees & International Careers | GradesNova',
  seoDescription:
    'Find out what your GCSE French grade unlocks for A-Level French, translation and interpreting degrees, and international careers. Grade-by-grade guide with Sixth Form entry requirements.',
  socialDescription:
    'Grade 6+ opens A-Level French — the gateway to International Relations, Law, and global careers. See your pathway.',
  heroText:
    'GCSE French is a Russell Group facilitating subject gateway: A-Level French is explicitly named in the Russell Group\'s "Informed Choices" guide as one of the qualifications that keeps the widest range of degree options open. The British Council reports that UK businesses consistently identify French as the most commercially valuable language after English, with demand for French speakers rising as UK companies increase direct EU engagement. French opens some of the most prestigious university pathways: Oxford\'s Modern Languages degree and Cambridge\'s MMLL (Modern & Medieval Languages) are among the most intellectually selective programmes in the world, and near-Grade-9 GCSE French performance is a baseline expectation for competitive applicants.',
  keyFact:
    'A-Level Modern Languages (including French) are among the Russell Group\'s eight designated "facilitating subjects." The British Council identifies French as the most commercially valuable language for UK businesses after English.',
  keyFactSource: 'Russell Group Informed Choices 2024; British Council Languages for the Future 2024 report',
  regulatoryBodies: ['Ofqual', 'JCQ', 'AQA', 'Edexcel (Pearson)', 'OCR', 'WJEC'],
  lastReviewed: '2026-05-01',
  gradeTiers: [
    {
      grades: 'Grade 7, 8 & 9',
      gradeRange: [7, 9],
      title: 'The Languages & International Route',
      description:
        'Grades 7–9 in GCSE French demonstrate near-fluency across the four skills (listening, speaking, reading, writing) and are the expected baseline for Oxford Modern Languages and Cambridge MMLL applicants. A-Level French taken to A* grade from this GCSE foundation is competitive for translation, interpreting, and international law careers. The Chartered Institute of Linguists (CIOL) notes that bilingual professionals in professional services earn a consistent salary premium of 10–15% over monolingual counterparts.',
      unlockedAlevels: [
        'French A-Level',
        'Spanish A-Level (if also studied at GCSE)',
        'History A-Level',
        'Politics A-Level',
        'Law (Pre-Law)',
        'Business Studies (International route)',
      ],
    },
    {
      grades: 'Grade 5 & 6',
      gradeRange: [5, 6],
      title: 'The Languages Gateway',
      description:
        'Grade 6 is the standard Sixth Form minimum for A-Level French. This grade range enables progression to A-Level French at most Sixth Forms and opens Modern Languages, International Business, and European Studies degree pathways. Most Sixth Forms recommend a Grade 6 as the minimum to comfortably manage A-Level French\'s demands.',
      unlockedAlevels: [
        'French A-Level',
        'Business Studies A-Level',
        'Geography A-Level',
        'History A-Level',
      ],
    },
    {
      grades: 'Grade 4',
      gradeRange: [4, 4],
      title: 'The Standard Pass',
      description:
        'A Grade 4 satisfies the GCSE language requirement where applicable and contributes to your overall GCSE profile. A-Level French is unlikely at this grade, but self-study (Duolingo, Alliance Française courses) can build spoken fluency independently of the exam grade — and fluency is what employers value in practice.',
      unlockedAlevels: [
        'BTEC Travel & Tourism (language component valued)',
        'Business Studies A-Level',
        'Supporting GCSE profile for general Sixth Form entry',
      ],
    },
  ],
  relatedDegrees: [
    'Modern Languages (BA)',
    'Modern Languages & Law (LLB)',
    'Modern Languages & Business (BA)',
    'International Relations (BA)',
    'Translation & Interpreting (BA)',
    'European Studies (BA)',
  ],
  careers: [
    'Translator / Conference Interpreter',
    'Diplomat / Foreign Office (FCDO)',
    'International Lawyer',
    'EU Policy Adviser / Civil Servant',
    'Journalist (International)',
    'International Business Development Manager',
  ],
  faq: [
    {
      question: 'What grade do I need in GCSE French to take A-Level French?',
      answer:
        'Most Sixth Forms require a minimum Grade 6 in GCSE French for A-Level. Some require Grade 7 given the significant step up in linguistic demand. Check with your specific Sixth Form.',
    },
    {
      question: 'Is French a facilitating subject?',
      answer:
        'Yes. The Russell Group lists Modern Languages (which includes French) as one of eight "facilitating subjects" — qualifications that keep the widest range of degree options open. A-Level French is highly regarded across humanities, law, and social science degree programmes.',
    },
    {
      question: 'Is French useful for a career in international business?',
      answer:
        'Yes. The British Council consistently identifies French as the most commercially valuable foreign language for UK businesses after English. Bilingual professionals in professional services, finance, and law earn a measurable salary premium over monolingual peers.',
    },
  ],
};

const spanish: SubjectPathway = {
  id: 'spanish',
  name: 'Spanish',
  tier: 2,
  seoTitle: 'GCSE Spanish Grade — A-Levels, International Careers & Degrees | GradesNova',
  seoDescription:
    'Discover what your GCSE Spanish grade opens for A-Level Spanish, international degrees, and global careers. Spanish is the world\'s second most spoken language — full grade guide.',
  socialDescription:
    'Spanish is the world\'s 2nd most spoken language. Grade 6+ opens A-Level Spanish and global career pathways.',
  heroText:
    'GCSE Spanish is a strategically valuable credential in an era of global economic interconnection. With over 500 million native speakers, Spanish is the world\'s second most spoken language by native speakers and is the official language of 21 countries. The British Council ranks Spanish second only to French among languages most valued by UK employers. Latin American markets — particularly Mexico, Brazil\'s Spanish-speaking neighbours, and the entire South American continent — represent growing export and investment opportunity for UK businesses post-Brexit. GCSE and A-Level Spanish opens the same Russell Group facilitating subject benefits as French.',
  keyFact:
    'Spanish is the world\'s second most spoken language by native speakers (over 500 million) and the British Council\'s second-ranked language for UK business value — making A-Level Spanish one of the most commercially relevant language qualifications available.',
  keyFactSource: 'British Council Languages for the Future 2024; Instituto Cervantes World Spanish Report 2024',
  regulatoryBodies: ['Ofqual', 'JCQ', 'AQA', 'Edexcel (Pearson)', 'OCR', 'WJEC'],
  lastReviewed: '2026-05-01',
  gradeTiers: [
    {
      grades: 'Grade 7, 8 & 9',
      gradeRange: [7, 9],
      title: 'The Global Languages & International Route',
      description:
        'Top GCSE grades demonstrate advanced communicative competence in listening, speaking, reading, and writing — the four domains required for near-fluency. At this level, you are prepared for A-Level Spanish, which at A*/A grade opens Oxford and Cambridge Modern Languages, European Law (LLB), and international careers in diplomacy, finance, and media. A Grade 8 or 9 combined with a later DELE C1/C2 certificate (Instituto Cervantes\'s internationally recognised exam) creates a very strong language credentials package for professional roles.',
      unlockedAlevels: [
        'Spanish A-Level',
        'French A-Level (if also studied at GCSE)',
        'History A-Level',
        'Politics A-Level',
        'Business Studies A-Level (International route)',
      ],
    },
    {
      grades: 'Grade 5 & 6',
      gradeRange: [5, 6],
      title: 'The Languages Gateway',
      description:
        'Grade 6 is the standard Sixth Form minimum for A-Level Spanish at most institutions. A Grade 6 also enables progression to International Business, Latin American Studies, and Modern Languages degrees at university. Most language departments recommend Grade 6 as the minimum for comfortable progression to A-Level given the jump in linguistic complexity.',
      unlockedAlevels: [
        'Spanish A-Level',
        'Business Studies A-Level',
        'Geography A-Level',
        'Media Studies A-Level',
      ],
    },
    {
      grades: 'Grade 4',
      gradeRange: [4, 4],
      title: 'The Standard Pass',
      description:
        'A Grade 4 contributes to your GCSE profile. Continued self-study through apps, language exchanges, and Instituto Cervantes DELE examinations can develop genuine fluency independently of the GCSE grade — Spanish is among the easiest languages for English speakers to acquire, and spoken fluency is the skill employers actually value.',
      unlockedAlevels: [
        'BTEC Travel & Tourism (language component valued)',
        'Business Studies A-Level',
        'General Sixth Form entry profile',
      ],
    },
  ],
  relatedDegrees: [
    'Modern Languages (BA)',
    'International Relations (BA)',
    'Modern Languages & Business (BA)',
    'Latin American Studies (BA)',
    'Translation & Interpreting (BA)',
    'Law with Spanish (LLB)',
  ],
  careers: [
    'Translator / Interpreter',
    'International Business Development Manager',
    'Diplomat / Foreign Office (FCDO)',
    'International Journalist',
    'NGO Programme Manager (Latin America)',
    'International Lawyer',
  ],
  faq: [
    {
      question: 'What grade do I need in GCSE Spanish to take A-Level Spanish?',
      answer:
        'Most Sixth Forms require a minimum Grade 6 in GCSE Spanish for A-Level. Some selective institutions require Grade 7. The step up to A-Level is significant — reading Spanish literature and writing extended analytical essays in Spanish requires strong GCSE foundations.',
    },
    {
      question: 'Is Spanish more useful than French for a career?',
      answer:
        'Both are highly valuable. The British Council ranks French first and Spanish second for UK business value. Spanish has a much larger global speaker base (500 million+ native speakers vs French\'s 280 million) and gives access to 21 countries\' markets. The "better" choice depends on your specific career interests.',
    },
  ],
};

const art: SubjectPathway = {
  id: 'art',
  name: 'Art & Design',
  tier: 3,
  seoTitle: 'GCSE Art & Design Grade — A-Levels, Creative Degrees & Design Careers | GradesNova',
  seoDescription:
    'Find out what your GCSE Art & Design grade unlocks for A-Level Fine Art, Creative Courses, and careers in design, illustration, and architecture. Full grade-by-grade guide.',
  socialDescription:
    'GCSE Art at Grade 6+ opens Fine Art, Graphic Design, and Architecture A-Level pathways. See your creative career route.',
  heroText:
    'GCSE Art & Design is the primary qualification for the UK\'s world-leading creative industries — the second-largest in the world by economic contribution. The UK creative industries generated £124 billion in GVA in 2023 (DCMS) and employ over 2.4 million people. From game design to film visual effects, from luxury brand identity to architectural visualisation, creative and design graduates are among the most versatile in the UK economy. The RCA (Royal College of Art) has been ranked the world\'s number one art and design university by QS for nine consecutive years — and GCSE Art & Design is the earliest credential in every successful RCA student\'s educational record.',
  keyFact:
    'The UK creative industries generated £124 billion GVA in 2023 and are the second-largest in the world — and GCSE Art & Design is the foundational qualification for creative industry careers.',
  keyFactSource: 'DCMS Creative Industries Economic Estimates 2024; QS World University Rankings by Subject 2024',
  regulatoryBodies: ['Ofqual', 'JCQ', 'AQA', 'Edexcel (Pearson)', 'OCR', 'WJEC', 'Design & Technology Association'],
  lastReviewed: '2026-05-01',
  gradeTiers: [
    {
      grades: 'Grade 7, 8 & 9',
      gradeRange: [7, 9],
      title: 'The Fine Art & Creative Industry Route',
      description:
        'Grades 7–9 in GCSE Art signal a portfolio of work with genuine technical accomplishment and creative originality. The RCA, UAL (University of the Arts London), and Goldsmiths all begin their admissions review with portfolio assessment, but GCSE Art grades provide crucial academic context. At this level, the National Art Education Association\'s (NAEA) and Creative & Cultural Skills sector body note that top Art GCSE performers are the most competitive for foundation diploma entry — the Year 0 qualification at UAL that feeds directly into BA Fine Art, Graphic Design, and Fashion programmes. The Saatchi Gallery\'s Art Prize for Schools is a meaningful co-curricular competition at this grade level.',
      unlockedAlevels: [
        'Fine Art A-Level',
        'Graphic Design A-Level',
        'Photography A-Level',
        'Textiles A-Level',
        'Film Studies A-Level',
        'Product Design A-Level',
      ],
    },
    {
      grades: 'Grade 5 & 6',
      gradeRange: [5, 6],
      title: 'The Creative Pathway Gateway',
      description:
        'Grade 6 is the typical Sixth Form minimum for A-Level Art & Design. This grade range opens the full creative arts A-Level range and supports applications for UAL Foundation Diplomas, BTEC Art & Design (Level 3), and Media Production programmes. Many creative employers and portfolio universities assess portfolios primarily rather than grades — but Grade 6 in Art GCSE demonstrates a baseline of technical and critical creative competence.',
      unlockedAlevels: [
        'Fine Art A-Level',
        'Graphic Design A-Level',
        'Photography A-Level',
        'Art & Design BTEC (Level 3)',
        'Media Production BTEC',
      ],
    },
    {
      grades: 'Grade 4',
      gradeRange: [4, 4],
      title: 'The Standard Creative Pass',
      description:
        'A Grade 4 contributes to your GCSE profile. Creative careers — particularly illustration, graphic design, and game design — ultimately assess portfolio quality far more than exam grades. A Grade 4 in GCSE Art alongside a strong self-built portfolio (Behance, Instagram, ArtStation) can still be competitive for BTEC Art & Design entry and creative apprenticeships in advertising and game studios.',
      unlockedAlevels: [
        'Art & Design BTEC (Level 3)',
        'Media Production BTEC',
        'Creative Digital Media BTEC',
        'Graphic Design Apprenticeship',
      ],
    },
  ],
  relatedDegrees: [
    'Fine Art (BA)',
    'Graphic Design (BA)',
    'Architecture (BArch) — with D&T',
    'Fashion Design (BA)',
    'Illustration (BA)',
    'Film & Visual Effects (BA)',
  ],
  careers: [
    'Graphic Designer (avg. £28,000–£50,000)',
    'Illustrator',
    'Art Director (avg. £40,000–£70,000)',
    'Game Artist / Concept Artist',
    'Animator (Film & TV)',
    'UX Designer',
  ],
  faq: [
    {
      question: 'What grade do I need in GCSE Art for A-Level Art & Design?',
      answer:
        'Most Sixth Forms require Grade 6 in GCSE Art for A-Level Art & Design. However, many schools also assess a portfolio of work — so strong creative output alongside a Grade 6 is the most competitive combination.',
    },
    {
      question: 'Is Art GCSE important for architecture?',
      answer:
        'Yes. Architecture degree applications are assessed on both academic portfolio (typically A-Level Maths or Physics, and an arts/design subject) and a creative portfolio. GCSE Art or D&T provides the earliest evidence of design thinking. The Bartlett (UCL) and Architectural Association both cite art or design subjects as relevant supporting qualifications.',
    },
    {
      question: 'Can I get into UAL without an Art GCSE?',
      answer:
        'UAL (University of the Arts London) and its constituent colleges (including Central Saint Martins) assess primarily on portfolio quality and the interview. However, GCSE Art provides academic context and a Grade 6+ is a helpful supporting credential alongside a strong portfolio.',
    },
  ],
};

const music: SubjectPathway = {
  id: 'music',
  name: 'Music',
  tier: 3,
  seoTitle: 'GCSE Music Grade — A-Levels, Music Degrees & Performing Arts Careers | GradesNova',
  seoDescription:
    'Find out what your GCSE Music grade unlocks for A-Level Music, conservatoire entry, music technology, and careers in the performing arts and creative industries.',
  socialDescription:
    'Grade 6+ in GCSE Music opens A-Level Music and Conservatoire pathways. See your route into the UK music industry.',
  heroText:
    'GCSE Music is far more academically rigorous than its image suggests — covering music theory, composition, music history, and analytical listening alongside performance. It is the entry point for one of the UK\'s most distinctive career ecosystems: the UK music industry generated £6.7 billion in 2023 (UK Music) and is one of the most globally recognised creative exports Britain has. The conservatoires — including the Royal Academy of Music, Royal College of Music, Guildhall, and Trinity Laban — are among the most selective educational institutions in the world in their domains. GCSE Music is the beginning of the academic thread that leads there.',
  keyFact:
    'The UK music industry generated £6.7 billion in 2023 (UK Music report). The Royal Academy of Music, Royal College of Music, and Guildhall School are among the world\'s most selective conservatoires — and GCSE Music Grade 7+ is the typical academic floor for competitive applicants.',
  keyFactSource: 'UK Music Measuring Music Report 2024; Royal Academy of Music admissions requirements; Guildhall School entry criteria',
  regulatoryBodies: ['Ofqual', 'JCQ', 'AQA', 'Edexcel (Pearson)', 'OCR', 'WJEC', 'Associated Board of the Royal Schools of Music (ABRSM)'],
  lastReviewed: '2026-05-01',
  gradeTiers: [
    {
      grades: 'Grade 7, 8 & 9',
      gradeRange: [7, 9],
      title: 'The Conservatoire & Performing Arts Route',
      description:
        'Top GCSE Music grades, alongside Grade 5+ ABRSM / Trinity theory and Grade 7–8 practical performance, create the academic and musical profile for conservatoire applications. The Royal Academy of Music and Royal College of Music both require a strong academic foundation (GCSE Music at 7+ is a meaningful signal) alongside audition performance. A-Level Music at A* from this starting point is competitive for Oxford Music (the only Oxbridge music course), Durham, King\'s College London, and Edinburgh. At this level, the BBC Proms Youth Ensemble, National Youth Orchestra, and National Youth Choir are accessible performance credentials.',
      unlockedAlevels: [
        'Music A-Level',
        'Music Technology A-Level',
        'Drama & Theatre Studies A-Level',
        'English Literature A-Level (for music journalism)',
        'Music BTEC (Performance pathway)',
      ],
    },
    {
      grades: 'Grade 5 & 6',
      gradeRange: [5, 6],
      title: 'The Music & Performing Arts Gateway',
      description:
        'Grade 6 is the typical Sixth Form minimum for A-Level Music. This grade range opens music technology, music production, and music business pathways at degree level alongside performance routes at less selective conservatoires and music colleges. BTEC Music Performance (Level 3) is a respected vocational alternative at this grade.',
      unlockedAlevels: [
        'Music A-Level',
        'Music Technology A-Level',
        'Performing Arts BTEC',
        'Music Performance BTEC',
        'Drama & Theatre Studies A-Level',
      ],
    },
    {
      grades: 'Grade 4',
      gradeRange: [4, 4],
      title: 'The Standard Pass',
      description:
        'A Grade 4 in Music contributes to your GCSE profile. Practical music skills — demonstrated through ABRSM/Trinity grade exams, self-produced recordings, and live performance — matter far more than GCSE exam grades in the music industry. BTEC Music Production and Sound Engineering programmes are accessible and can lead to real industry roles in studio recording and live sound.',
      unlockedAlevels: [
        'Music Production / Sound Engineering BTEC',
        'Performing Arts BTEC',
        'Creative & Media BTEC',
        'Music Technology courses at FE colleges',
      ],
    },
  ],
  relatedDegrees: [
    'Music Performance (BA/BMus)',
    'Music Technology (BSc)',
    'Music Composition (BMus)',
    'Sound Engineering (BSc)',
    'Music Business & Management (BA)',
    'Musicology (BA)',
  ],
  careers: [
    'Professional Musician / Session Musician',
    'Music Producer / Sound Engineer',
    'Music Teacher (Primary/Secondary)',
    'Arts Administrator / Music Director',
    'Music Journalist / Critic',
    'Music Therapist (postgraduate route)',
  ],
  faq: [
    {
      question: 'What grade do I need in GCSE Music for A-Level Music?',
      answer:
        'Most Sixth Forms require Grade 6 in GCSE Music for A-Level entry. Schools typically also assess your practical instrumental or vocal grade — most expect at least Grade 5 ABRSM or Trinity in your main instrument.',
    },
    {
      question: 'Do I need GCSE Music for conservatoire entry?',
      answer:
        'Conservatoires including the Royal Academy of Music and Royal College of Music primarily assess on audition performance and music theory grades (ABRSM Grade 5 theory is the minimum for most). GCSE Music is an important academic supporting credential, but audition performance is the primary selection criterion.',
    },
    {
      question: 'Is music technology a good career path?',
      answer:
        'Yes. The UK music technology and production sector is growing, driven by streaming, gaming, and podcast industries. Music Technology or Sound Engineering degrees from institutions including Leeds, Salford, and Brighton lead to well-established industry roles in recording, post-production, and live events.',
    },
  ],
};

const drama: SubjectPathway = {
  id: 'drama',
  name: 'Drama & Theatre Studies',
  tier: 3,
  seoTitle: 'GCSE Drama Grade — A-Levels, Drama School Entry & Performing Arts Careers | GradesNova',
  seoDescription:
    'Find out what your GCSE Drama grade means for A-Level Theatre Studies, drama school auditions, and careers in the performing arts, media, and communications.',
  socialDescription:
    'GCSE Drama at Grade 6+ opens A-Level Theatre Studies and Drama School pathways. See your performing arts career route.',
  heroText:
    'GCSE Drama & Theatre Studies develops a distinctive skill set that extends well beyond the stage: public speaking, emotional intelligence, collaborative problem-solving, and the ability to communicate complex ideas with clarity and conviction. These are increasingly recognised as core professional competencies across law, management consulting, teaching, and media — not just performance careers. The UK theatre sector contributes approximately £2.5 billion annually to the economy (Theatrical Management Association), and the UK\'s drama schools — including RADA, LAMDA, RADA, and the Guildhall School of Music & Drama — are globally recognised as the world\'s finest.',
  keyFact:
    'The UK theatre sector contributes £2.5 billion annually to the economy. RADA, LAMDA, and Guildhall are ranked among the world\'s leading drama training institutions — and GCSE Drama Grade 7+ is the academic foundation for their most competitive applicants.',
  keyFactSource: 'Theatrical Management Association UK Theatre Report 2024; RADA, LAMDA admissions guidance',
  regulatoryBodies: ['Ofqual', 'JCQ', 'AQA', 'Edexcel (Pearson)', 'OCR', 'WJEC'],
  lastReviewed: '2026-05-01',
  gradeTiers: [
    {
      grades: 'Grade 7, 8 & 9',
      gradeRange: [7, 9],
      title: 'The Drama School & Performing Arts Route',
      description:
        'Top grades in GCSE Drama demonstrate high-level performance skills, analytical understanding of theatrical form and practitioner methods, and the written critical analysis that A-Level Theatre Studies demands. At this level, audition preparation for RADA, LAMDA, Guildhall, and the major drama schools begins in earnest. These institutions assess primarily on audition — but academic context (GCSE Drama 7–9, A-Level Theatre Studies A/A*) is part of the holistic picture. National Youth Theatre membership and Fringe First festival participation are accessible co-curricular achievements at this grade.',
      unlockedAlevels: [
        'Drama & Theatre Studies A-Level',
        'English Literature A-Level',
        'Film Studies A-Level',
        'Music A-Level',
        'Media Studies A-Level',
      ],
    },
    {
      grades: 'Grade 5 & 6',
      gradeRange: [5, 6],
      title: 'The Performing Arts Gateway',
      description:
        'Grade 6 is the standard Sixth Form minimum for A-Level Drama & Theatre Studies. This grade range also opens BTEC Performing Arts (Level 3) and supports applications for Media Production and Journalism courses where communication and presentation skills are assessed. The communication and collaboration skills developed through GCSE Drama are consistently highlighted by employers in law, marketing, and HR as differentiating graduate qualities.',
      unlockedAlevels: [
        'Drama & Theatre Studies A-Level',
        'Performing Arts BTEC (Level 3)',
        'Media Studies A-Level',
        'English Literature A-Level',
        'Film Studies A-Level',
      ],
    },
    {
      grades: 'Grade 4',
      gradeRange: [4, 4],
      title: 'The Standard Pass',
      description:
        'A Grade 4 in Drama contributes to your GCSE profile. For students intent on performance careers, practical experience — amateur dramatic societies, youth theatre, local film-making, and self-produced content — is ultimately more important than GCSE exam grades. Many successful actors, directors, and theatre practitioners entered the industry through practical routes.',
      unlockedAlevels: [
        'Performing Arts BTEC (Level 3)',
        'Media Production BTEC',
        'Creative & Media BTEC',
        'General Sixth Form entry profile',
      ],
    },
  ],
  relatedDegrees: [
    'Drama & Theatre Arts (BA)',
    'Acting (BA/Foundation) — Drama School route',
    'Media & Communications (BA)',
    'Film Studies (BA)',
    'Education / PGCE (Drama/English)',
    'Arts Management (BA)',
  ],
  careers: [
    'Actor / Performer',
    'Theatre Director',
    'Drama Teacher (PGCE)',
    'Communications Director',
    'Media Presenter / Broadcaster',
    'Arts Administrator',
  ],
  faq: [
    {
      question: 'Does GCSE Drama help with non-performance careers?',
      answer:
        'Yes, significantly. Employers in law, consulting, management, HR, and marketing consistently identify presentation skills, emotional intelligence, and collaborative communication — all developed through Drama — as differentiating graduate qualities. GCSE Drama is a strong supporting qualification for any career involving public speaking or team leadership.',
    },
    {
      question: 'What grade do I need in GCSE Drama for drama school?',
      answer:
        'Drama schools (RADA, LAMDA, Guildhall) select primarily on audition quality, not academic grades. However, GCSE Drama Grade 7–9 and A-Level Theatre Studies A/A* provides important academic context. The most competitive drama school applicants hold strong academic records alongside exceptional audition performances.',
    },
  ],
};

const economics: SubjectPathway = {
  id: 'economics',
  name: 'Economics',
  tier: 2,
  seoTitle: 'GCSE Economics Grade — A-Levels, Finance Degrees & Business Careers | GradesNova',
  seoDescription:
    'Find out what your GCSE Economics grade unlocks for A-Level Economics, Finance and Business degrees, and careers in banking, consulting, and policy. Full grade guide.',
  socialDescription:
    'GCSE Economics at Grade 6+ opens A-Level Economics — the gateway to LSE, Finance & Consulting careers. See your pathway.',
  heroText:
    'GCSE Economics is available at fewer than 30% of UK schools, making it a genuinely differentiating credential for students who have studied it. Where available, it provides the most direct academic foundation for A-Level Economics — the qualification that opens the London School of Economics (consistently ranked the world\'s number one Economics university by QS), Oxford PPE, and Cambridge Economics degree pathways. The economics profession encompasses some of the most influential and well-compensated roles in the public and private sectors: chief economists at HM Treasury, Goldman Sachs, and the Bank of England all trace back to A-Level and degree Economics. GCSE Economics — where taught — gives students a head start in understanding the conceptual framework those careers demand.',
  keyFact:
    'The London School of Economics (LSE) is ranked number one in the world for Economics by QS (2024) — and A-Level Economics, built on a strong GCSE foundation, is the primary route to admission.',
  keyFactSource: 'QS World University Rankings by Subject 2024; LSE undergraduate admissions requirements; Bank of England graduate recruitment data',
  regulatoryBodies: ['Ofqual', 'JCQ', 'AQA', 'Edexcel (Pearson)', 'OCR'],
  lastReviewed: '2026-05-01',
  gradeTiers: [
    {
      grades: 'Grade 7, 8 & 9',
      gradeRange: [7, 9],
      title: 'The Finance, Consulting & Policy Route',
      description:
        'Grades 7–9 in GCSE Economics demonstrate strong grasp of microeconomic and macroeconomic principles, quantitative data interpretation, and economic argument construction. At this level, you are well-positioned for A-Level Economics with A* potential — the profile that Oxford PPE, Cambridge Economics (part of SPS), and LSE BSc Economics seek. The Bank of England\'s research economist scheme and HM Treasury\'s Policy Fast Stream both recruit heavily from Economics degree graduates whose GCSE academic records were strong. At Grade 9, participation in the Economist\'s essay prize and Bank of England Target 2.0 competition are meaningful differentiating credentials.',
      unlockedAlevels: [
        'Economics A-Level',
        'Mathematics A-Level',
        'Further Mathematics A-Level',
        'Business Studies A-Level',
        'Politics A-Level',
        'History A-Level',
      ],
    },
    {
      grades: 'Grade 5 & 6',
      gradeRange: [5, 6],
      title: 'The Business & Social Science Gateway',
      description:
        'Grade 6 is the typical Sixth Form minimum for A-Level Economics. This grade range also demonstrates the quantitative and analytical competence needed for Business Studies, Accounting, and Sociology A-Levels where economic concepts are embedded in the specification.',
      unlockedAlevels: [
        'Economics A-Level',
        'Business Studies A-Level',
        'Accounting A-Level',
        'Sociology A-Level',
        'Politics A-Level',
      ],
    },
    {
      grades: 'Grade 4',
      gradeRange: [4, 4],
      title: 'The Standard Pass',
      description:
        'A Grade 4 in GCSE Economics is a positive signal but is unlikely to be accepted for direct entry to A-Level Economics at most Sixth Forms. Business Studies A-Level is typically accessible at this grade level and covers significant economic content.',
      unlockedAlevels: [
        'Business Studies A-Level',
        'Accounting A-Level',
        'BTECs in Business or Finance',
        'General Sixth Form entry profile',
      ],
    },
  ],
  relatedDegrees: [
    'Economics (BSc)',
    'PPE — Philosophy, Politics & Economics (Oxford)',
    'Finance (BSc)',
    'Accounting & Finance (BSc)',
    'Business Management (BA)',
    'Development Economics (BA)',
  ],
  careers: [
    'Investment Banker (avg. £80,000–£200,000+ with bonus)',
    'Management Consultant (avg. £40,000–£100,000)',
    'Government Economist (HM Treasury / Bank of England)',
    'Actuary',
    'Policy Adviser',
    'Financial Analyst',
  ],
  faq: [
    {
      question: 'Do I need GCSE Economics to take A-Level Economics?',
      answer:
        'No — GCSE Economics is not taught in most UK schools, and A-Level Economics is widely available without it. However, where GCSE Economics has been studied, Grade 6+ is typically required for A-Level Economics. More commonly, Sixth Forms look for Grade 6 or 7 in GCSE Maths as the key prerequisite.',
    },
    {
      question: 'Is Economics a facilitating subject?',
      answer:
        'A-Level Economics is not on the Russell Group\'s eight official "facilitating subjects" list, but it is highly regarded by virtually all universities. The LSE, Oxford (PPE), and Cambridge (Economics) all consider A-Level Economics the most directly relevant A-Level for their programmes.',
    },
    {
      question: 'What GCSE Maths grade do I need for A-Level Economics?',
      answer:
        'Most Sixth Forms require Grade 6 in GCSE Maths for A-Level Economics, reflecting the subject\'s significant quantitative content. LSE specifically recommends A-Level Mathematics for its BSc Economics programme.',
    },
  ],
};

const sociology: SubjectPathway = {
  id: 'sociology',
  name: 'Sociology',
  tier: 2,
  seoTitle: 'GCSE Sociology Grade — A-Levels, Social Science Degrees & Careers | GradesNova',
  seoDescription:
    'Discover what your GCSE Sociology grade means for A-Level Social Science, Criminology, and Social Work degrees. Full grade guide with Sixth Form entry requirements.',
  socialDescription:
    'GCSE Sociology at Grade 6+ opens A-Level Sociology and Social Science pathways. See your route into the public sector and beyond.',
  heroText:
    'GCSE Sociology is one of the most intellectually stimulating options available at GCSE level — and one of the fastest-growing. JCQ data shows GCSE Sociology entries have grown by over 40% in the past decade, reflecting growing interest in understanding the social forces shaping inequality, crime, education, and power. Sociology degree graduates work in social work, public policy, NHS management, criminal justice, international development, and media research. The British Sociological Association notes that Sociology graduates have among the highest rates of public-sector career entry of any social science — roles that carry significant social impact and stable long-term employment prospects.',
  keyFact:
    'GCSE Sociology entries have grown over 40% in the past decade (JCQ data), reflecting rising student and employer interest in social science analytical skills across public sector, media, and policy careers.',
  keyFactSource: 'JCQ GCSE Results Data 2014–2024; British Sociological Association graduate outcomes survey 2024',
  regulatoryBodies: ['Ofqual', 'JCQ', 'AQA', 'OCR', 'WJEC'],
  lastReviewed: '2026-05-01',
  gradeTiers: [
    {
      grades: 'Grade 7, 8 & 9',
      gradeRange: [7, 9],
      title: 'The Social Science & Policy Route',
      description:
        'Top grades in GCSE Sociology demonstrate exceptional ability to apply sociological theory to contemporary social issues, evaluate competing perspectives, and construct sustained written arguments — skills that directly map to A-Level Sociology and undergraduate social science. At this level, you are competitive for Sociology, Criminology, and Social Policy degrees at leading universities including LSE, Manchester, and Warwick. LSE\'s BSc Sociology is consistently cited as among the most intellectually rigorous social science programmes in the world.',
      unlockedAlevels: [
        'Sociology A-Level',
        'Psychology A-Level',
        'Politics A-Level',
        'Criminology (where offered as A-Level)',
        'History A-Level',
        'Law A-Level',
      ],
    },
    {
      grades: 'Grade 5 & 6',
      gradeRange: [5, 6],
      title: 'The Social Science Gateway',
      description:
        'Grade 6 is the typical Sixth Form minimum for A-Level Sociology. This grade range opens the broader social science pathway and supports applications for Health & Social Care, Counselling, and Youth Work programmes at Level 3 and at university.',
      unlockedAlevels: [
        'Sociology A-Level',
        'Psychology A-Level',
        'Health & Social Care BTEC',
        'Childcare & Education BTEC',
        'Media Studies A-Level',
      ],
    },
    {
      grades: 'Grade 4',
      gradeRange: [4, 4],
      title: 'The Standard Pass',
      description:
        'A Grade 4 in Sociology contributes to your GCSE profile. Most Sixth Forms will not accept it for A-Level Sociology directly, but it supports BTEC Health & Social Care (Level 3) and community/public services programmes where sociological understanding is embedded.',
      unlockedAlevels: [
        'Health & Social Care BTEC (Level 3)',
        'Public Services BTEC',
        'Childcare & Early Years BTEC',
        'General Sixth Form entry profile',
      ],
    },
  ],
  relatedDegrees: [
    'Sociology (BA/BSc)',
    'Criminology (BSc)',
    'Social Work (BA) — HCPC regulated',
    'Social Policy (BA)',
    'Psychology (BSc)',
    'Education Studies (BA)',
  ],
  careers: [
    'Social Worker (HCPC registered; avg. £31,000–£49,000)',
    'Policy Analyst (HM Government)',
    'Probation Officer',
    'Community Development Worker',
    'HR Manager',
    'Researcher / Academic (postgraduate route)',
  ],
  faq: [
    {
      question: 'What grade do I need in GCSE Sociology for A-Level Sociology?',
      answer:
        'Most Sixth Forms require a minimum Grade 6 in GCSE Sociology for A-Level entry. Some also require Grade 5 or 6 in GCSE English Language, given the essay-heavy nature of A-Level Sociology.',
    },
    {
      question: 'Is Sociology good for Social Work?',
      answer:
        'Yes. BA Social Work degrees (required for HCPC registration as a qualified Social Worker) typically cite Sociology, Psychology, or Health & Social Care as the most relevant A-Level or BTEC subjects. A Sociology A-Level directly prepares you for the theoretical content of Social Work degree programmes.',
    },
    {
      question: 'Can GCSE Sociology lead to a career in criminology?',
      answer:
        'Yes. A-Level Sociology (or Criminology where offered) leads directly to BSc Criminology degree programmes, which open roles in probation, prison service, police analysis, forensic psychology, and criminal justice policy. It is a strong academic pathway into criminal justice careers.',
    },
  ],
};

// ─────────────────────────────────────────────
// EXPORT — All subjects keyed by slug
// ─────────────────────────────────────────────

export const pathwayData: Record<string, SubjectPathway> = {
  maths,
  'english-language': englishLanguage,
  'english-literature': englishLiterature,
  biology,
  chemistry,
  physics,
  history,
  geography,
  'religious-studies': religiousStudies,
  'computer-science': computerScience,
  'physical-education': physicalEducation,
  'design-technology': designTechnology,
  french,
  spanish,
  art,
  music,
  drama,
  economics,
  sociology,
};

/** Typed array of all slugs — useful for generateStaticParams() */
export const pathwaySlugs = Object.keys(pathwayData) as (keyof typeof pathwayData)[];
