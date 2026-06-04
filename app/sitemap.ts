import type { MetadataRoute } from 'next';

const BASE_URL = 'https://gradesnova.com';

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  // Static pages
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: BASE_URL,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 1.0,
    },
    {
      url: `${BASE_URL}/about`,
      lastModified: now,
      changeFrequency: 'yearly',
      priority: 0.4,
    },
    {
      url: `${BASE_URL}/contact`,
      lastModified: now,
      changeFrequency: 'yearly',
      priority: 0.3,
    },
    {
      url: `${BASE_URL}/privacy`,
      lastModified: now,
      changeFrequency: 'yearly',
      priority: 0.2,
    },
    {
      url: `${BASE_URL}/terms`,
      lastModified: now,
      changeFrequency: 'yearly',
      priority: 0.2,
    },
  ];

  // Exam calculator pages — high priority, these are the money pages
  const examPages: MetadataRoute.Sitemap = [
    { id: 'sat',      priority: 0.95, freq: 'monthly'  },
    { id: 'act',      priority: 0.95, freq: 'monthly'  },
    { id: 'lsat',     priority: 0.95, freq: 'monthly'  },
    { id: 'gre',      priority: 0.92, freq: 'monthly'  },
    { id: 'gmat',     priority: 0.90, freq: 'monthly'  },
    { id: 'gcse',     priority: 0.95, freq: 'monthly'  }, // spikes on results day
    { id: 'a-levels', priority: 0.95, freq: 'monthly'  },
  ].map(({ id, priority, freq }) => ({
    url: `${BASE_URL}/exams/${id}`,
    lastModified: now,
    changeFrequency: freq as 'monthly',
    priority,
  }));

  // GCSE Board Pages
  const gcseBoardPages: MetadataRoute.Sitemap = [
    'aqa', 'edexcel', 'ocr', 'wjec'
  ].map((board) => ({
    url: `${BASE_URL}/exams/gcse/${board}`,
    lastModified: now,
    changeFrequency: 'monthly',
    priority: 0.9,
  }));

  // GCSE Sixth Form Pathways
  const gcsePathwayPages: MetadataRoute.Sitemap = [
    'maths', 'english-language', 'english-literature', 'biology',
    'chemistry', 'physics', 'history', 'geography', 'religious-studies',
    'computer-science', 'physical-education', 'design-technology'
  ].map((subject) => ({
    url: `${BASE_URL}/exams/gcse/${subject}/sixth-form`,
    lastModified: now,
    changeFrequency: 'monthly',
    priority: 0.85,
  }));

  // Resource Guides (GCSE & ACT)
  const resourcePages: MetadataRoute.Sitemap = [
    '/exams/gcse/guide',
    '/exams/gcse/revision-tips',
    '/exams/gcse/results-day',
    '/exams/gcse/grade-boundaries-explained',
    '/exams/act/guide',
    '/exams/act/revision-tips',
    '/exams/act/results-day',
    '/exams/act/prep-tips',
    '/exams/act/scores'
  ].map((route) => ({
    url: `${BASE_URL}${route}`,
    lastModified: now,
    changeFrequency: 'monthly',
    priority: 0.8,
  }));

  // Articles
  const articlePages: MetadataRoute.Sitemap = [
    'a-level-results-day-2026',
    'a-level-sciences-hardest-papers',
    'do-university-offers-account-for-grade-boundaries',
    'gcse-maths-grade-boundaries-trends',
    'gcse-results-day-2026',
    'gre-vs-cat-for-mba-abroad',
    'gre-vs-gmat-which-exam-should-you-take',
    'sat-vs-act-complete-comparison',
    'sat-vs-ap-exams-explained',
    'sat-vs-jee-for-indian-students',
    'ucas-points-a-level-grades',
    'understanding-grade-boundaries-explained'
  ].map((slug) => ({
    url: `${BASE_URL}/articles/${slug}`,
    lastModified: now,
    changeFrequency: 'monthly',
    priority: 0.7,
  }));

  return [
    ...staticPages,
    ...examPages,
    ...gcseBoardPages,
    ...gcsePathwayPages,
    ...resourcePages,
    ...articlePages,
  ];
}
