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

  return [...staticPages, ...examPages];
}
