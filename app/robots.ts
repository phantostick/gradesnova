import type { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: [
          '/api/',      // no API routes to expose
          '/_next/',    // Next.js internals
        ],
      },
    ],
    sitemap: 'https://gradesnova.com/sitemap.xml',
    host: 'https://gradesnova.com',
  };
}
