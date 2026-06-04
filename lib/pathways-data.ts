// lib/pathways-data.ts
// GradesNova — GCSE Sixth Form Pathway Data
// Covers all 12 subjects across Tier 1 / Tier 2 / Tier 3
// Each entry is SEO-optimised with unique heroText, rich gradeTiers,
// structured schema hints, relatedDegrees, and careers.

export interface GradeTier {
  grades: string;
  title: string;
  description: string;
  unlockedAlevels: string[];
  /** Optional: short-form badge shown in rich-snippet / structured data */
  gradeRange: [number, number]; // e.g. [8, 9]
}

export interface SubjectPathway {
  id: string;
  name: string;
  tier: 1 | 2 | 3;
  /** Used in <title> and Open Graph */
  seoTitle: string;
  /** Used in <meta description> — 150-160 chars */
  seoDescription: string;
  /** Used in og:description / Twitter card — punchier, 100-120 chars */
  socialDescription: string;
  heroText: string;
  /** One-line stat or fact surfaced in the hero for E-E-A-T */
  keyFact: string;
  gradeTiers: GradeTier[];
  relatedDegrees: string[];
  careers: string[];
  /** Structured data FAQ pairs — boosts FAQ rich snippets */
  faq: { question: string; answer: string }[];
}

// ─────────────────────────────────────────────
// TIER 1 — Core Requirements
// ─────────────────────────────────────────────

const maths: SubjectPathway = {
  id: 'maths',
  name: 'Mathematics',
  tier: 1,
  seoTitle: 'GCSE Maths Grade — What A-Levels & Degrees Can You Do?',
  seoDescription:
    'Find out exactly what A-Levels, university degrees, and careers your GCSE Maths grade unlocks. Covers Grades 3–9, Sixth Form entry requirements, and retake rules.',
  socialDescription:
    'Grade 6+ opens A-Level Maths. Grade 9 unlocks Further Maths & Oxbridge STEM. See what your result means.',
  heroText:
    'GCSE Mathematics is the single most powerful gateway qualification in the UK education system. It is a mandatory entry requirement for virtually every Sixth Form, scrutinised by Russell Group universities regardless of your chosen degree, and the foundation of the highest-earning graduate careers.',
  keyFact: 'A-Level Maths has a minimum entry requirement of Grade 6 at almost all UK Sixth Forms.',
  gradeTiers: [
    {
      grades: 'Grade 8 & 9',
      gradeRange: [8, 9],
      title: 'The Elite STEM Pathway',
      description:
        'Grades 8–9 prove exceptional algebraic reasoning and problem-solving ability. This is the score that unlocks A-Level Further Mathematics — a qualification virtually required by Cambridge, Imperial, and Warwick for Mathematics, Physics, and Engineering degrees. Many top Sixth Forms also use a Grade 8 as the entry bar for their most selective Further Maths sets.',
      unlockedAlevels: [
        'Further Mathematics',
        'Mathematics',
        'Physics',
        'Computer Science',
        'Economics (Quantitative track)',
      ],
    },
    {
      grades: 'Grade 6 & 7',
      gradeRange: [6, 7],
      title: 'The Core A-Level Gateway',
      description:
        'Grade 6 is the minimum accepted by almost every Sixth Form for A-Level Maths — many prefer a 7 for the standard set. A Grade 7 also opens heavily quantitative subjects like Economics and Chemistry without restriction. This band comfortably satisfies the Maths requirements for Russell Group universities across all disciplines.',
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
        'A Grade 4 is the official "standard pass" set by Ofqual. A Grade 5 is a "strong pass" and is the minimum Maths grade demanded by many competitive Russell Group courses (including Medicine and Law). Both grades satisfy the requirement to stop studying Maths at 16, and they cover the quantitative literacy demanded by non-STEM A-Levels.',
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
        'Under the DfE participation rules, any grade below a 4 in Maths triggers a legal requirement to continue studying the subject during post-16 education. Most Sixth Forms accommodate this via a concurrent GCSE retake programme — you can still start BTECs or T-Levels alongside it.',
      unlockedAlevels: [
        'BTECs (all pathways, alongside GCSE retake)',
        'T-Levels (alongside GCSE retake)',
        'Foundation-level vocational courses',
      ],
    },
  ],
  relatedDegrees: [
    'Engineering (all branches)',
    'Computer Science',
    'Finance & Actuarial Science',
    'Data Science & Statistics',
    'Physics',
    'Economics',
  ],
  careers: [
    'Software Engineer',
    'Actuary',
    'Investment Banker',
    'Civil / Structural Engineer',
    'Data Scientist',
    'Quantitative Analyst (Quant)',
  ],
  faq: [
    {
      question: 'What GCSE Maths grade do I need for A-Level Maths?',
      answer:
        'The vast majority of Sixth Forms require a minimum Grade 6. Many selective schools and grammar schools require a Grade 7. A Grade 5 will not normally qualify you for A-Level Maths.',
    },
    {
      question: 'Can I study A-Level Further Maths with a Grade 7?',
      answer:
        'Some schools accept a Grade 7, but a Grade 8 or 9 is strongly recommended. Further Maths is a very demanding A-Level and most schools will advise that only the highest achievers attempt it.',
    },
    {
      question: 'Do I have to retake GCSE Maths if I get a Grade 3?',
      answer:
        'Yes. Under current DfE regulations, students who do not achieve a Grade 4 in GCSE Maths must continue studying and resitting it throughout their post-16 education.',
    },
  ],
};

const englishLanguage: SubjectPathway = {
  id: 'english-language',
  name: 'English Language',
  tier: 1,
  seoTitle: 'GCSE English Language Grade — A-Levels, Degrees & Career Paths',
  seoDescription:
    'Discover what your GCSE English Language grade means for Sixth Form entry, A-Level eligibility, and university applications. Includes retake rules and Russell Group requirements.',
  socialDescription:
    'Grade 5 is the Russell Group minimum. Grade 7+ opens the top humanities pathways. Check what your grade unlocks.',
  heroText:
    'GCSE English Language is arguably the most universally scrutinised qualification in the UK. Every university, employer, and Sixth Form uses it to assess your baseline communication ability. A strong grade here not only opens essay-heavy A-Levels but also sends a powerful signal to every admissions tutor — regardless of your subject.',
  keyFact:
    'A Grade 5 in GCSE English Language is the minimum "standard" demanded by most Russell Group universities, whatever degree you study.',
  gradeTiers: [
    {
      grades: 'Grade 7, 8 & 9',
      gradeRange: [7, 9],
      title: 'The Advanced Humanities Route',
      description:
        'Top grades prove mastery of argument construction, narrative control, and language analysis. These are the scores that Oxford and Cambridge expect for humanities subjects, and which allow you to take the most rigorous essay-based A-Levels without restriction. A Grade 9 is particularly valued for Law and Journalism pathways.',
      unlockedAlevels: [
        'English Language A-Level',
        'English Literature A-Level',
        'History',
        'Law',
        'Politics',
        'Philosophy',
        'Classics / Classical Civilisation',
      ],
    },
    {
      grades: 'Grade 5 & 6',
      gradeRange: [5, 6],
      title: 'The Strong Pass & Essay Gateway',
      description:
        'Grade 5 is the defined "strong pass" under the new grading system, and it is the de facto minimum for the majority of Russell Group universities — including for STEM degrees. A Grade 6 is typically required to take A-Level English Language or essay-heavy humanities subjects like History and Sociology.',
      unlockedAlevels: [
        'Sociology',
        'Psychology',
        'Business Studies',
        'Media Studies',
        'Film Studies',
        'Geography',
      ],
    },
    {
      grades: 'Grade 4',
      gradeRange: [4, 4],
      title: 'The Universal Standard Pass',
      description:
        'A Grade 4 satisfies the minimum graduation requirement and allows Sixth Form entry. It is sufficient for STEM and vocational pathways that do not depend on essay writing. However, many post-1992 universities now require a Grade 5, so check entry requirements carefully for your intended course.',
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
      title: 'Mandatory GCSE Retake',
      description:
        'A grade below 4 means you are legally required to retake GCSE English Language during post-16 study. Most Sixth Forms run dedicated resit programmes that you attend alongside your main A-Level or BTEC course.',
      unlockedAlevels: [
        'Access Courses (Level 2)',
        'Specific BTECs (alongside English Language retake)',
        'T-Levels (some — confirm with provider)',
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
  ],
  careers: [
    'Solicitor / Barrister',
    'Journalist',
    'Copywriter / Content Strategist',
    'HR Manager',
    'Public Relations Director',
    'Policy Adviser',
  ],
  faq: [
    {
      question: 'Do Russell Group universities require a specific grade in GCSE English Language?',
      answer:
        'Most Russell Group universities require a minimum Grade 5 in both GCSE English Language and Maths, regardless of the degree subject. Some more competitive courses require a Grade 6.',
    },
    {
      question: 'Can I take A-Level English Language with a Grade 5?',
      answer:
        'Some schools accept a Grade 5 for A-Level English Language, but most prefer a Grade 6. Check directly with your Sixth Form as requirements vary.',
    },
    {
      question: 'Is GCSE English Language more important than English Literature?',
      answer:
        'For general university and employer requirements, yes. English Language is the qualification checked as standard. English Literature is a bonus but is not universally required.',
    },
  ],
};

const englishLiterature: SubjectPathway = {
  id: 'english-literature',
  name: 'English Literature',
  tier: 1,
  seoTitle: 'GCSE English Literature Grade — Sixth Form Pathways & A-Levels',
  seoDescription:
    'Explore what GCSE English Literature grades mean for A-Level access, humanities degrees, and creative careers. Find out how each grade from 4 to 9 shapes your academic options.',
  socialDescription:
    'English Literature at Grade 6+ unlocks the most analytical humanities A-Levels. See what your grade opens.',
  heroText:
    'GCSE English Literature demonstrates something distinct from its Language counterpart: the ability to interpret complex narratives, understand historical context, and construct sustained critical arguments. These are the skills that elite universities prize for humanities, and which form the intellectual backbone of careers in law, publishing, and academia.',
  keyFact:
    'A-Level English Literature requires a minimum Grade 6 at most Sixth Forms, with Oxbridge applicants typically achieving Grade 8 or 9.',
  gradeTiers: [
    {
      grades: 'Grade 7, 8 & 9',
      gradeRange: [7, 9],
      title: 'The Critic & Scholar',
      description:
        'Top grades in Literature signal sophisticated analytical ability — the capacity to read between the lines, understand authorial intent, and situate texts within wider cultural and historical frameworks. This is exactly what Oxbridge tutors look for at interview. It also positions you perfectly for the most rigorous reading-intensive A-Levels.',
      unlockedAlevels: [
        'English Literature A-Level',
        'Classics / Classical Civilisation',
        'History',
        'Drama & Theatre Studies',
        'Philosophy & Ethics',
      ],
    },
    {
      grades: 'Grade 5 & 6',
      gradeRange: [5, 6],
      title: 'The Strong Foundation',
      description:
        'A Grade 6 is the standard minimum entry point for A-Level English Literature. This grade range also demonstrates strong analytical skills that complement other humanities A-Levels. It is well-received by universities considering any essay-based course.',
      unlockedAlevels: [
        'Religious Studies',
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
        'Unlike English Language, a Grade 4 in Literature carries no retake obligation. It serves as a solid supporting GCSE on your overall profile, particularly for STEM-focused students. It will not, however, satisfy most Sixth Form entry requirements for essay-based A-Levels.',
      unlockedAlevels: [
        'Counts toward your overall GCSE profile for Sixth Form entry',
        'Supports applications for STEM A-Levels',
        'BTECs (all vocational routes)',
      ],
    },
    {
      grades: 'Grade 3 and below',
      gradeRange: [1, 3],
      title: 'No Retake Required — But Limited Pathway',
      description:
        'Unlike English Language and Maths, there is no legal requirement to retake English Literature. However, a low grade significantly limits your humanities A-Level options and may weaken your university application profile.',
      unlockedAlevels: [
        'STEM A-Levels (grade in Literature largely irrelevant)',
        'Vocational BTECs & T-Levels',
        'Apprenticeship routes',
      ],
    },
  ],
  relatedDegrees: [
    'English Literature',
    'Classics',
    'Theology & Religious Studies',
    'Film & Media Studies',
    'Education / PGCE',
    'Publishing & Creative Writing',
  ],
  careers: [
    'Publisher / Commissioning Editor',
    'Secondary School Teacher',
    'Author / Novelist',
    'Arts Administrator',
    'Media Researcher',
    'Archivist / Librarian',
  ],
  faq: [
    {
      question: 'Do I have to retake GCSE English Literature if I fail?',
      answer:
        'No. Only GCSE Maths and GCSE English Language have mandatory retake requirements. English Literature is optional post-16.',
    },
    {
      question: 'What is the difference between English Language and English Literature at GCSE?',
      answer:
        'English Language assesses your own writing and communication skills. English Literature assesses your ability to analyse and write about set texts written by others. Language is universally required; Literature is an additional qualification.',
    },
    {
      question: 'Does a good English Literature grade help with non-humanities degrees?',
      answer:
        'It demonstrates analytical and essay-writing skills that are useful across many subjects. For STEM degrees, admissions tutors pay little attention to it specifically, but it strengthens your overall GCSE profile.',
    },
  ],
};

const biology: SubjectPathway = {
  id: 'biology',
  name: 'Biology',
  tier: 1,
  seoTitle: 'GCSE Biology Grade — A-Levels, Medicine & Science Pathways',
  seoDescription:
    'Find out what your GCSE Biology grade means for A-Level entry, Medicine, Veterinary Science, and life science careers. Grade-by-grade breakdown of Sixth Form requirements.',
  socialDescription:
    'Want to study Medicine? Grade 7+ in Biology is essential. See exactly what each grade unlocks for Sixth Form.',
  heroText:
    'GCSE Biology is the launchpad for some of the most prestigious and socially impactful careers in the world — from medicine to biomedical research. The grade you achieve here directly determines which science A-Levels and degree pathways are accessible to you.',
  keyFact:
    'A-Level Biology requires a minimum Grade 6 at most Sixth Forms, but competitive medical school applicants typically hold Grade 8 or 9.',
  gradeTiers: [
    {
      grades: 'Grade 8 & 9',
      gradeRange: [8, 9],
      title: 'The Pre-Medicine Standard',
      description:
        'Grades 8–9 in Biology are effectively the baseline expectation for aspiring medical, dental, and veterinary students. They signal an outstanding grasp of complex biological processes — from cellular respiration to genetics — and are needed to access the most demanding Science A-Levels without restriction.',
      unlockedAlevels: [
        'Biology A-Level',
        'Chemistry A-Level',
        'Psychology A-Level',
        'Human Biology (where offered)',
        'Environmental Science',
      ],
    },
    {
      grades: 'Grade 6 & 7',
      gradeRange: [6, 7],
      title: 'The Science A-Level Gateway',
      description:
        'A Grade 6 is the standard minimum to take A-Level Biology at most Sixth Forms. This range also qualifies you for the broader applied science pathway and opens up strong university options in life sciences, sports science, and nursing.',
      unlockedAlevels: [
        'Biology A-Level',
        'Chemistry A-Level',
        'Sports Science / PE',
        'Applied Science BTEC',
        'Geography (Physical)',
      ],
    },
    {
      grades: 'Grade 4 & 5',
      gradeRange: [4, 5],
      title: 'The Foundation Science Pass',
      description:
        'These grades satisfy your core science GCSE requirements and allow progression to Sixth Form. However, most Sixth Forms will not admit you onto A-Level Biology with a 4 or 5. Vocational science courses, health and social care, and some BTECs remain accessible.',
      unlockedAlevels: [
        'Health & Social Care BTEC',
        'Applied Science BTEC (Level 3)',
        'Sport & Fitness BTEC',
        'Psychology (check entry requirements)',
      ],
    },
    {
      grades: 'Grade 3 and below',
      gradeRange: [1, 3],
      title: 'Vocational & Alternative Routes',
      description:
        'A grade below 4 in Biology (if taken as a separate science) closes the direct A-Level science route. However, there are strong vocational pathways in health, care, and animal science that do not require a Biology GCSE pass.',
      unlockedAlevels: [
        'Health & Social Care BTEC (Level 2 first)',
        'Animal Care BTEC',
        'T-Level: Health & Science',
        'Science Technician Apprenticeship',
      ],
    },
  ],
  relatedDegrees: [
    'Medicine (MBBS)',
    'Biomedical Science',
    'Veterinary Science',
    'Pharmacology',
    'Ecology & Conservation',
    'Nursing (BN)',
  ],
  careers: [
    'Doctor / GP',
    'Biomedical Scientist',
    'Nurse Practitioner',
    'Pharmacologist',
    'Genetic Counsellor',
    'Environmental Consultant',
  ],
  faq: [
    {
      question: 'What GCSE Biology grade do I need to study Medicine?',
      answer:
        'Medical schools require strong A-Levels (usually AAA including Chemistry), but at GCSE level, most expect at least Grade 7 in Biology, Chemistry, and Maths. Grade 8 or 9 is typical for successful applicants to top medical schools.',
    },
    {
      question: 'Can I take A-Level Biology with a Grade 5?',
      answer:
        'Most Sixth Forms require a minimum Grade 6 for A-Level Biology. A Grade 5 is unlikely to be accepted. Some less selective FE colleges may accept a 5 — check directly.',
    },
    {
      question: 'Do I need separate Biology GCSE or is Combined Science enough?',
      answer:
        'For Medicine and Veterinary Science, separate sciences (Biology, Chemistry, Physics) are strongly preferred. Combined Science gives you a dual award grade and may be accepted for other life science degrees, but check individual university requirements.',
    },
  ],
};

const chemistry: SubjectPathway = {
  id: 'chemistry',
  name: 'Chemistry',
  tier: 1,
  seoTitle: 'GCSE Chemistry Grade — A-Levels, Medicine & STEM Pathways',
  seoDescription:
    'See what your GCSE Chemistry grade unlocks for A-Levels, university admissions, and science careers. Essential reading for anyone considering Medicine, Engineering, or Pharmacy.',
  socialDescription:
    'Chemistry is the key to Medicine, Engineering & Pharmacy. Grade 6+ opens A-Level Chemistry. See your full pathway.',
  heroText:
    'GCSE Chemistry is the gateway to some of the most intellectually demanding and financially rewarding careers available. Its emphasis on quantitative reasoning, practical method, and molecular understanding makes it a prerequisite for a wide range of competitive degree courses — most notably Medicine.',
  keyFact:
    'A-Level Chemistry is a prerequisite for Medicine at every UK medical school and for Pharmacy, Chemical Engineering, and Biochemistry at the leading universities.',
  gradeTiers: [
    {
      grades: 'Grade 8 & 9',
      gradeRange: [8, 9],
      title: 'The STEM Excellence Standard',
      description:
        'Grades 8–9 indicate a thorough command of organic chemistry, quantitative analysis, and physical chemistry fundamentals. This is the benchmark expected by Russell Group universities for Chemistry, Chemical Engineering, and Medicine degrees. It unlocks the full range of science A-Levels without any qualification.',
      unlockedAlevels: [
        'Chemistry A-Level',
        'Further Mathematics',
        'Biology A-Level',
        'Physics A-Level',
        'Environmental Science',
      ],
    },
    {
      grades: 'Grade 6 & 7',
      gradeRange: [6, 7],
      title: 'The Science Core Gateway',
      description:
        'Grade 6 is the near-universal minimum for A-Level Chemistry. A Grade 7 gives you comfortable access to the top Sixth Forms and satisfies the quantitative demands of Economics, Computer Science, and similar subjects. University offers for science degrees almost always cite Grade 6 as a minimum GCSE baseline.',
      unlockedAlevels: [
        'Chemistry A-Level',
        'Physics A-Level',
        'Biology A-Level',
        'Computer Science',
        'Mathematics A-Level',
      ],
    },
    {
      grades: 'Grade 4 & 5',
      gradeRange: [4, 5],
      title: 'The Foundation Pass',
      description:
        'A Grade 4 or 5 satisfies the core science graduation requirement. It is insufficient for A-Level Chemistry at most schools but may allow you to pivot to applied science routes or BTEC programmes in health or engineering technician roles.',
      unlockedAlevels: [
        'Applied Science BTEC (Level 3)',
        'Engineering BTEC',
        'Health & Social Care BTEC',
        'T-Level: Engineering & Manufacturing',
      ],
    },
    {
      grades: 'Grade 3 and below',
      gradeRange: [1, 3],
      title: 'Vocational & Technical Routes',
      description:
        'Below Grade 4 in Chemistry closes the A-Level science track. However, strong lab technician, apprenticeship, and technical training routes exist that do not require a high Chemistry grade — particularly in manufacturing, food science, and environmental monitoring.',
      unlockedAlevels: [
        'Laboratory Technician Apprenticeship',
        'T-Level: Health & Science',
        'BTEC Applied Science (Level 2 entry)',
        'Food Science & Technology courses',
      ],
    },
  ],
  relatedDegrees: [
    'Medicine (MBBS)',
    'Pharmacy (MPharm)',
    'Chemical Engineering',
    'Biochemistry',
    'Materials Science',
    'Dentistry (BDS)',
  ],
  careers: [
    'Pharmacist',
    'Chemical Engineer',
    'Research Scientist',
    'Forensic Scientist',
    'Dentist',
    'Toxicologist',
  ],
  faq: [
    {
      question: 'Is GCSE Chemistry required for A-Level Chemistry?',
      answer:
        'Yes — virtually every school requires you to have taken GCSE Chemistry (either separate or as part of Combined Science) to study A-Level Chemistry. A minimum Grade 6 is standard.',
    },
    {
      question: 'Do I need separate GCSE Chemistry or will Combined Science do for Medicine?',
      answer:
        'Most medical schools strongly prefer separate science GCSEs. Combined Science with a grade equivalent to 6-6 or above is typically accepted, but separate sciences (Grade 7+) are far more competitive.',
    },
    {
      question: 'What can I do with a Grade 5 in GCSE Chemistry?',
      answer:
        'A Grade 5 opens vocational science pathways including BTEC Applied Science, T-Levels in Health & Science, and some apprenticeships. It does not typically qualify for A-Level Chemistry.',
    },
  ],
};

const physics: SubjectPathway = {
  id: 'physics',
  name: 'Physics',
  tier: 1,
  seoTitle: 'GCSE Physics Grade — Engineering, A-Levels & Technology Pathways',
  seoDescription:
    'Find out what your GCSE Physics grade opens at Sixth Form, from A-Level Physics and Engineering to Computer Science and Architecture. Full grade-by-grade guide.',
  socialDescription:
    'Physics + Maths A-Level is the combination for Engineering, Architecture & Astrophysics. See what your grade unlocks.',
  heroText:
    'GCSE Physics is the foundation of the engineering and technology sectors that drive economic growth. Whether you want to build bridges, write AI software, or understand the universe, a strong Physics grade is your first credential. Its unique combination of mathematical rigour and conceptual breadth makes it one of the most respected A-Level entry qualifications.',
  keyFact:
    'A-Level Physics is required or strongly preferred for Engineering, Architecture, and Astrophysics degree entry at all leading UK universities.',
  gradeTiers: [
    {
      grades: 'Grade 8 & 9',
      gradeRange: [8, 9],
      title: 'The Engineering & STEM Elite',
      description:
        'Grades 8–9 demonstrate exceptional quantitative reasoning and a deep intuitive grasp of forces, energy, waves, and space physics. This is the profile of a future engineer or physicist. Top-tier programmes at Imperial, UCL, and Oxbridge for Physics, Aerospace Engineering, and Computer Science specifically look for this grade range at GCSE.',
      unlockedAlevels: [
        'Physics A-Level',
        'Further Mathematics',
        'Mathematics A-Level',
        'Computer Science A-Level',
        'Electronics (where offered)',
      ],
    },
    {
      grades: 'Grade 6 & 7',
      gradeRange: [6, 7],
      title: 'The Core Engineering Gateway',
      description:
        'Grade 6 is the standard Sixth Form minimum for A-Level Physics. A Grade 7 offers additional flexibility and satisfies the entry requirements for the most competitive engineering Sixth Form programmes. This band is also sufficient for taking A-Level Maths and Computer Science alongside Physics.',
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
        'A Grade 4 or 5 passes your core science requirement and enables Sixth Form entry, but most schools will direct you toward Engineering BTEC or T-Level programmes rather than A-Level Physics. These vocational routes are excellent pathways to degree apprenticeships.',
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
      title: 'Apprenticeship & Trades Route',
      description:
        'Below Grade 4, the A-Level pathway closes but skilled trades and technical apprenticeships offer excellent earning potential. Electrical, plumbing, and construction apprenticeships do not require a high Physics GCSE and lead to well-paid, in-demand careers.',
      unlockedAlevels: [
        'Electrical Installation Apprenticeship',
        'Plumbing & Heating Engineering Apprenticeship',
        'Construction T-Level',
        'Engineering Technician Apprenticeship',
      ],
    },
  ],
  relatedDegrees: [
    'Mechanical Engineering (MEng)',
    'Electrical & Electronic Engineering',
    'Astrophysics & Physics',
    'Architecture (BArch)',
    'Computer Science',
    'Aerospace Engineering',
  ],
  careers: [
    'Civil / Structural Engineer',
    'Aerospace Engineer',
    'Architect',
    'Nuclear Scientist',
    'Robotics Engineer',
    'Telecommunications Specialist',
  ],
  faq: [
    {
      question: 'What GCSE Physics grade do I need for A-Level Physics?',
      answer:
        'Most Sixth Forms require Grade 6 in GCSE Physics (or Grade 6-6 in Combined Science). A Grade 7 is preferred by selective institutions and is needed for the most competitive Engineering programmes.',
    },
    {
      question: 'Do I need A-Level Physics for Engineering at university?',
      answer:
        'Yes. The majority of BEng and MEng programmes require A-Level Physics alongside A-Level Maths. Without Physics A-Level, most engineering degrees are inaccessible.',
    },
    {
      question: 'Can I do Engineering without taking separate GCSE Physics?',
      answer:
        'Yes, Combined Science is accepted by most universities for engineering entry, provided you achieve the equivalent grade (typically 6-6 or above) and go on to study A-Level Physics.',
    },
  ],
};

// ─────────────────────────────────────────────
// TIER 2 — Humanities
// ─────────────────────────────────────────────

const history: SubjectPathway = {
  id: 'history',
  name: 'History',
  tier: 2,
  seoTitle: 'GCSE History Grade — A-Levels, Law & Social Science Pathways',
  seoDescription:
    'Discover what your GCSE History grade means for essay-based A-Levels, politics and law degrees, and humanities careers. Full grade breakdown for Sixth Form entry.',
  socialDescription:
    'GCSE History at Grade 6+ unlocks Law, Politics & Social Science A-Levels. See what your grade opens.',
  heroText:
    'GCSE History is not just about the past — it is one of the most rigorous critical thinking qualifications available at GCSE. The ability to evaluate sources, construct evidence-based arguments, and understand cause and consequence is prized by the most competitive universities and professions, from law to journalism.',
  keyFact:
    'History is one of the most facilitating A-Level subjects recommended by the Russell Group for keeping degree options open.',
  gradeTiers: [
    {
      grades: 'Grade 7, 8 & 9',
      gradeRange: [7, 9],
      title: 'The Politics, Law & Academia Route',
      description:
        'Top grades in History signal exceptional essay and source analysis skills. This is the profile universities look for in Law, Politics, PPE, and History applicants. It demonstrates the kind of sustained argumentative writing that is the basis of almost all humanities degrees.',
      unlockedAlevels: ['History A-Level', 'Politics', 'Law (Pre-Law)', 'Philosophy', 'Classical Civilisation'],
    },
    {
      grades: 'Grade 5 & 6',
      gradeRange: [5, 6],
      title: 'The Social Science Gateway',
      description:
        'Grade 6 is typically the minimum for A-Level History at most Sixth Forms. This range also signals sufficient essay-writing competence for Sociology, Psychology, and Religious Studies. Many universities cite a Grade 5 in History as a desirable supporting GCSE.',
      unlockedAlevels: ['Sociology', 'Religious Studies', 'Geography', 'Business Studies', 'Media Studies'],
    },
    {
      grades: 'Grade 4',
      gradeRange: [4, 4],
      title: 'The Standard Pass',
      description:
        'A Grade 4 counts toward your core GCSE profile for Sixth Form entry. Most Sixth Forms will not accept it as an entry point for A-Level History, but it contributes to your overall profile positively.',
      unlockedAlevels: [
        'Serves as a supporting GCSE for general entry requirements',
        'BTECs in Public Services or Travel & Tourism',
      ],
    },
  ],
  relatedDegrees: ['Law (LLB)', 'History', 'PPE (Oxford)', 'Politics & IR', 'Journalism', 'Archaeology'],
  careers: ['Solicitor', 'Politician / Policy Adviser', 'Journalist', 'Museum Curator', 'Civil Servant (Fast Stream)', 'Archivist'],
  faq: [
    {
      question: 'What grade do I need in GCSE History to take A-Level History?',
      answer: 'Most Sixth Forms require a minimum Grade 6 in GCSE History for A-Level. Some accept a Grade 5, but this varies.',
    },
    {
      question: 'Is GCSE History useful for a Law degree?',
      answer: 'Yes. Law schools value strong essay-based subjects like History because they demonstrate the analytical and writing skills essential for legal study.',
    },
  ],
};

const geography: SubjectPathway = {
  id: 'geography',
  name: 'Geography',
  tier: 2,
  seoTitle: 'GCSE Geography Grade — A-Levels, Environmental Science & Career Paths',
  seoDescription:
    'Explore what GCSE Geography grades unlock for A-Level study, environmental careers, and university applications. From urban planning to climate science — full grade guide.',
  socialDescription:
    'Geography sits between sciences and humanities — a Grade 6+ unlocks some of the most diverse A-Level combinations. See your pathway.',
  heroText:
    'GCSE Geography occupies a unique academic niche, blending scientific data analysis with the critical thinking of humanities. This makes it one of the most versatile subjects in the curriculum, opening pathways into environmental science, international development, and urban planning — fields of growing global importance.',
  keyFact:
    'Geography A-Level is listed by the Russell Group as a facilitating subject, keeping the widest range of university options open.',
  gradeTiers: [
    {
      grades: 'Grade 7, 8 & 9',
      gradeRange: [7, 9],
      title: 'The Environmental Sciences Route',
      description:
        'Top grades signal proficiency in both data handling and extended writing — a rare combination. This is the profile for Environmental Science, Physical Geography, and Earth Sciences degrees. It also positions you well for the quantitative elements of Economics and Geology.',
      unlockedAlevels: ['Geography A-Level', 'Environmental Science', 'Biology', 'Geology', 'Economics'],
    },
    {
      grades: 'Grade 5 & 6',
      gradeRange: [5, 6],
      title: 'The Humanities & Social Science Gateway',
      description:
        'Grade 6 is the standard minimum for A-Level Geography at most Sixth Forms. This grade range opens the broader humanities pathway and demonstrates the analytical skills needed for Politics, Sociology, and Business Studies.',
      unlockedAlevels: ['Sociology', 'Politics', 'Business Studies', 'Travel & Tourism', 'Psychology'],
    },
    {
      grades: 'Grade 4',
      gradeRange: [4, 4],
      title: 'The Standard Pass',
      description:
        'Contributes to your core GCSE profile for Sixth Form entry. Unlikely to be accepted as a direct entry point for A-Level Geography, but may support vocational pathways in planning, environmental work, or public services.',
      unlockedAlevels: ['Public Services BTEC', 'Travel & Tourism BTEC', 'Supporting entry profile for Sixth Form'],
    },
  ],
  relatedDegrees: ['Geography (BSc/BA)', 'Environmental Science', 'Urban & Regional Planning', 'Development Studies', 'Earth Sciences', 'International Relations'],
  careers: ['Urban Planner', 'Environmental Consultant', 'GIS Analyst', 'Climate Policy Adviser', 'Hydrologist', 'NGO Programme Manager'],
  faq: [
    {
      question: 'Is GCSE Geography classed as a science?',
      answer: 'Geography sits between arts and sciences. GCSE Geography is not a recognised science GCSE, but A-Level Geography is listed as a facilitating subject by the Russell Group.',
    },
    {
      question: 'What grade do I need for A-Level Geography?',
      answer: 'Most Sixth Forms require a Grade 6 in GCSE Geography. A Grade 5 may be accepted at some schools — check with your specific institution.',
    },
  ],
};

const religiousStudies: SubjectPathway = {
  id: 'religious-studies',
  name: 'Religious Studies',
  tier: 2,
  seoTitle: 'GCSE Religious Studies Grade — A-Levels, Law & Philosophy Pathways',
  seoDescription:
    'Find out what your GCSE Religious Studies grade unlocks for A-Level Philosophy, Law, and university degrees in theology, ethics, and social sciences.',
  socialDescription:
    'RS at Grade 6+ unlocks Philosophy, Ethics & Law A-Levels. Strong essay foundation for any humanities path.',
  heroText:
    'GCSE Religious Studies is often underestimated, yet it develops the most sophisticated form of academic argument: ethical reasoning under conditions of uncertainty. The ability to weigh competing moral claims, understand global belief systems, and write balanced essays is prized across Law, Philosophy, Medicine (for ethics), and Social Policy.',
  keyFact:
    'Philosophy & Ethics A-Level — one of the fastest-growing A-Levels in the UK — typically requires a strong GCSE RS grade as the closest related subject.',
  gradeTiers: [
    {
      grades: 'Grade 7, 8 & 9',
      gradeRange: [7, 9],
      title: 'The Philosophy & Ethics Route',
      description:
        'Top grades signal outstanding ethical reasoning and extended essay skills. This opens the most academically rigorous humanities A-Levels, particularly Philosophy & Ethics, which is increasingly valued by Oxford and Cambridge for PPE, Theology, and Law applications.',
      unlockedAlevels: ['Philosophy & Ethics A-Level', 'Theology & RS A-Level', 'Law', 'History', 'Politics'],
    },
    {
      grades: 'Grade 5 & 6',
      gradeRange: [5, 6],
      title: 'The Humanities & Social Science Gateway',
      description:
        'Grade 6 is typically the minimum for A-Level Religious Studies or Philosophy & Ethics. This range demonstrates solid essay competence and ethical awareness, supporting Sociology, Psychology, and Counselling & Therapy pathways.',
      unlockedAlevels: ['Sociology', 'Psychology', 'Health & Social Care', 'English Literature', 'Geography'],
    },
    {
      grades: 'Grade 4',
      gradeRange: [4, 4],
      title: 'The Standard Pass',
      description:
        'A Grade 4 counts toward your core GCSE profile. It is unlikely to be accepted as the direct qualifying GCSE for essay-heavy A-Levels but contributes to your overall academic record for Sixth Form entry.',
      unlockedAlevels: ['Contributes to general Sixth Form entry profile', 'BTECs in Care, Childcare or Public Services'],
    },
  ],
  relatedDegrees: ['Theology & Religious Studies', 'Philosophy', 'Social Work', 'Law (LLB)', 'PPE', 'Counselling & Psychotherapy'],
  careers: ['Solicitor / Barrister', 'Social Worker', 'Chaplain / Clergy', 'Ethicist / Policy Adviser', 'Charity Sector Manager', 'Secondary School Teacher (RS)'],
  faq: [
    {
      question: 'Is GCSE Religious Studies useful for Law?',
      answer: 'Yes. Law schools value RS because it demonstrates ethical reasoning, balanced argument construction, and the ability to understand multiple perspectives — all core legal skills.',
    },
    {
      question: 'What A-Levels does GCSE RS lead to?',
      answer: 'GCSE RS most directly leads to A-Level Religious Studies, Philosophy & Ethics, and supports entry to History, Sociology, and Politics.',
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
  seoTitle: 'GCSE Computer Science Grade — A-Levels, Tech Careers & Degrees',
  seoDescription:
    'Find out what your GCSE Computer Science grade unlocks for A-Level entry, software engineering degrees, and tech careers. Grade-by-grade breakdown including Sixth Form requirements.',
  socialDescription:
    'Grade 6+ in CS opens A-Level Computer Science — the launchpad for software engineering and AI. See what your grade unlocks.',
  heroText:
    'GCSE Computer Science is the most career-directly-relevant technical qualification available at GCSE. In a labour market where software skills command premium salaries, achieving a strong grade here is a clear signal to universities and employers that you can think computationally — an increasingly rare and valuable ability.',
  keyFact:
    'The average salary for a UK software engineer is over £55,000 — and A-Level Computer Science is the most direct educational path to this career.',
  gradeTiers: [
    {
      grades: 'Grade 7, 8 & 9',
      gradeRange: [7, 9],
      title: 'The Software Engineering Pathway',
      description:
        'Grades 7–9 demonstrate mastery of algorithms, data structures, programming logic, and computational theory. This is the profile that Cambridge, Imperial, and UCL expect for their Computer Science programmes. It unlocks the most demanding A-Level CS courses and positions you for competitive tech internships even before university.',
      unlockedAlevels: ['Computer Science A-Level', 'Further Mathematics', 'Mathematics A-Level', 'Electronics (where offered)', 'Physics A-Level'],
    },
    {
      grades: 'Grade 5 & 6',
      gradeRange: [5, 6],
      title: 'The Tech & Digital Gateway',
      description:
        'Grade 6 is the standard Sixth Form minimum for A-Level Computer Science. A Grade 5 may be accepted at some institutions. This range also supports strong applications for Digital IT, Business with IT, and Cyber Security vocational pathways.',
      unlockedAlevels: ['Computer Science A-Level', 'Digital Technology BTEC', 'IT & Business A-Level', 'Applied ICT'],
    },
    {
      grades: 'Grade 4',
      gradeRange: [4, 4],
      title: 'The Digital Skills Pass',
      description:
        'A Grade 4 satisfies the GCSE requirement and contributes to your Sixth Form entry profile. Most schools will direct you toward BTEC IT or Digital Technology programmes rather than A-Level Computer Science.',
      unlockedAlevels: ['BTEC IT (Level 3)', 'Digital Marketing BTEC', 'Business Studies (IT route)', 'T-Level: Digital & Computing'],
    },
    {
      grades: 'Grade 3 and below',
      gradeRange: [1, 3],
      title: 'Apprenticeship & Entry-Level Tech Route',
      description:
        'Below Grade 4, formal IT apprenticeships and entry-level digital support roles remain very accessible — technical aptitude can also be demonstrated through personal projects, portfolios, and online certifications independently of exam grades.',
      unlockedAlevels: ['IT Support Apprenticeship', 'Digital Marketing Apprenticeship', 'T-Level: Digital (confirm with provider)', 'Level 2 IT User courses'],
    },
  ],
  relatedDegrees: ['Computer Science (BSc/MEng)', 'Software Engineering', 'Artificial Intelligence', 'Cyber Security', 'Data Science', 'Game Development'],
  careers: ['Software Engineer', 'Full-Stack Developer', 'Data Scientist', 'AI/ML Engineer', 'Cyber Security Analyst', 'Product Manager'],
  faq: [
    {
      question: 'What GCSE grade do I need for A-Level Computer Science?',
      answer: 'Most Sixth Forms require at least Grade 6 in GCSE Computer Science. Many also require a Grade 6 or 7 in GCSE Mathematics, as the two subjects are highly complementary.',
    },
    {
      question: 'Do I need GCSE Computer Science to become a software engineer?',
      answer: 'It is not strictly required, but it is the clearest signal of computational aptitude. Many successful developers also enter through self-teaching, bootcamps, or apprenticeships.',
    },
    {
      question: 'Is A-Level Computer Science a facilitating subject?',
      answer: "Computer Science is not on the Russell Group's official facilitating subjects list, but it is highly regarded and accepted for Computer Science and related degrees at all top universities.",
    },
  ],
};

const physicalEducation: SubjectPathway = {
  id: 'physical-education',
  name: 'Physical Education',
  tier: 3,
  seoTitle: 'GCSE PE Grade — A-Levels, Sports Science & Coaching Careers',
  seoDescription:
    'Find out what your GCSE Physical Education grade unlocks for A-Level PE, Sports Science degrees, and careers in coaching, physiotherapy, and sports medicine.',
  socialDescription:
    'Grade 6+ in GCSE PE opens A-Level PE and Sports Science. See what every grade unlocks for your career in sport.',
  heroText:
    'GCSE Physical Education is far more academically rigorous than its reputation suggests. It blends exercise physiology, biomechanics, and sports psychology with practical performance assessment — laying the groundwork for highly rewarding careers in health, sport, and education. The sports and health sector is one of the fastest-growing areas of the UK economy.',
  keyFact:
    'A-Level PE is the primary entry qualification for Sports Science, Physiotherapy, and Physical Education teacher training degrees at UK universities.',
  gradeTiers: [
    {
      grades: 'Grade 7, 8 & 9',
      gradeRange: [7, 9],
      title: 'The Sports Science & Physiotherapy Route',
      description:
        'Top grades demonstrate exceptional understanding of anatomy, physiology, and sports performance analysis. This is the profile needed for competitive Sports Science, Physiotherapy, and Sports Medicine degree applications. It opens A-Level PE without restriction and signals a strong academic commitment to the field.',
      unlockedAlevels: ['PE A-Level', 'Biology A-Level', 'Psychology A-Level', 'Sports Science BTEC', 'Dance (where offered)'],
    },
    {
      grades: 'Grade 5 & 6',
      gradeRange: [5, 6],
      title: 'The Active Careers Gateway',
      description:
        'Grade 6 is typically the Sixth Form minimum for A-Level PE. This grade range supports applications for Sports Coaching, Leisure Management, and Outdoor Education programmes. Most universities will see A-Level PE and Biology together as a strong health sciences combination.',
      unlockedAlevels: ['PE A-Level', 'Health & Social Care BTEC', 'Sports Coaching BTEC', 'Outdoor Education BTEC'],
    },
    {
      grades: 'Grade 4',
      gradeRange: [4, 4],
      title: 'The Standard Pass',
      description:
        'A Grade 4 contributes to your Sixth Form entry profile. Most schools will recommend Sports BTEC programmes over A-Level PE, which are equally valued by many sports universities and are more practically oriented.',
      unlockedAlevels: ['Sport BTEC (Level 3)', 'Fitness Instructing BTEC', 'T-Level: Health & Science (Sport pathway)'],
    },
  ],
  relatedDegrees: ['Sports Science (BSc)', 'Physiotherapy (BSc)', 'Physical Education & Teaching', 'Strength & Conditioning', 'Sports Psychology', 'Nutrition & Dietetics'],
  careers: ['Physiotherapist', 'PE Teacher', 'Sports Coach / Analyst', 'Personal Trainer', 'Exercise Physiologist', 'Sports Development Officer'],
  faq: [
    {
      question: 'What grade do I need in GCSE PE for A-Level PE?',
      answer: 'Most Sixth Forms require Grade 6 in GCSE PE for A-Level. Some also assess your practical sporting performance as part of the entry criteria.',
    },
    {
      question: 'Is A-Level PE a good choice for a Physiotherapy degree?',
      answer: 'Yes. Most Physiotherapy degree programmes require or strongly prefer A-Level Biology, and A-Level PE is an excellent complementary subject that demonstrates practical health knowledge.',
    },
  ],
};

const designTechnology: SubjectPathway = {
  id: 'design-technology',
  name: 'Design & Technology',
  tier: 3,
  seoTitle: 'GCSE Design & Technology Grade — A-Levels, Engineering & Creative Careers',
  seoDescription:
    'Discover what your GCSE Design & Technology grade unlocks for A-Level study, architecture, engineering, and creative industry careers. Full grade-by-grade pathway guide.',
  socialDescription:
    'GCSE D&T at Grade 6+ opens Product Design A-Level and Engineering pathways. See your full creative & technical career route.',
  heroText:
    'GCSE Design & Technology is the only qualification that simultaneously develops creativity, engineering knowledge, and practical making skills. It bridges the arts and sciences in a way that is highly valued by architecture firms, product companies, and engineering employers who need graduates who can both imagine and build.',
  keyFact:
    'Product Design A-Level is the primary route to Architecture, Industrial Design, and Fashion Design degree programmes at leading art and design schools.',
  gradeTiers: [
    {
      grades: 'Grade 7, 8 & 9',
      gradeRange: [7, 9],
      title: 'The Architecture & Product Design Route',
      description:
        'Top grades demonstrate exceptional design thinking, technical drawing ability, and material science understanding. This is the profile that the Architectural Association, RCA, and leading design schools look for. It unlocks the full range of creative and technical A-Levels.',
      unlockedAlevels: ['Product Design A-Level', 'Art & Design A-Level', 'Physics A-Level', 'Engineering BTEC (advanced)', 'Architecture Foundation (where offered)'],
    },
    {
      grades: 'Grade 5 & 6',
      gradeRange: [5, 6],
      title: 'The Creative & Technical Gateway',
      description:
        'Grade 6 is the standard Sixth Form minimum for A-Level Product Design or Design Technology. This range supports applications for Fashion & Textiles, Graphic Design, and Engineering Technology programmes at university and art school.',
      unlockedAlevels: ['Product Design A-Level', 'Art & Design A-Level', 'Fashion & Textiles A-Level', 'Engineering BTEC', 'Graphics & Illustration BTEC'],
    },
    {
      grades: 'Grade 4',
      gradeRange: [4, 4],
      title: 'The Practical Skills Pass',
      description:
        'A Grade 4 in D&T contributes to your GCSE profile and may support applications for vocational construction, manufacturing, or creative arts courses. Apprenticeships in carpentry, CAD design, and manufacturing are accessible.',
      unlockedAlevels: ['Construction BTEC', 'Engineering & Manufacturing T-Level', 'Creative Media BTEC', 'Carpentry & Joinery Apprenticeship'],
    },
  ],
  relatedDegrees: ['Architecture (BArch)', 'Product & Industrial Design', 'Mechanical Engineering', 'Fashion Design', 'Interior Design', 'Graphic Design (BA)'],
  careers: ['Architect', 'Product Designer', 'Mechanical Engineer', 'UX / UI Designer', 'Fashion Designer', 'CAD Technician'],
  faq: [
    {
      question: 'Does GCSE Design & Technology help with Engineering degrees?',
      answer: 'Yes. D&T demonstrates practical problem-solving and materials knowledge that complements Physics and Maths for engineering applications. It is especially useful for Product and Mechanical Engineering.',
    },
    {
      question: 'What grade do I need in GCSE D&T for A-Level Product Design?',
      answer: 'Most Sixth Forms require Grade 6 in GCSE Design & Technology for A-Level Product Design. Coursework quality may also be assessed.',
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
};

/** Typed array of all slugs — useful for generateStaticParams() */
export const pathwaySlugs = Object.keys(pathwayData) as (keyof typeof pathwayData)[];
