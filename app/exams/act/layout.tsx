// app/exams/act/layout.tsx
// Metadata only — no duplicate schema (page.tsx owns all JSON-LD).
// keywords array retained for completeness but does not affect Google ranking.

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'ACT Score Calculator (Updated for 2026)',
  description:
    'Free ACT score calculator for 2025–2026. Enter your raw correct answers per section to instantly see your scaled scores and national percentile ranking. Includes the 2025 Enhanced ACT format, ACT-to-SAT conversion, college score ranges, and test dates. Updated with official ACT norms.',
  keywords: [
    'ACT score calculator',
    'ACT score calculator 2026',
    'ACT percentile calculator',
    'ACT score percentile 2026',
    'ACT percentile chart 2026',
    'what is a good ACT score 2026',
    'ACT national percentile',
    'national average ACT score 2026',
    'average ACT score class of 2026',
    'ACT composite score percentile',
    'ACT math percentile',
    'ACT English percentile',
    'ACT to SAT conversion',
    'ACT score chart',
    'ACT score ranking',
    '24 ACT score percentile',
    '28 ACT score percentile',
    '30 ACT score percentile',
    '32 ACT score percentile',
    '33 ACT score percentile',
    '35 ACT score percentile',
    '20 ACT percentile',
    '25 ACT percentile',
    'enhanced ACT 2025',
    'ACT format change 2025',
    'ACT test dates 2025 2026',
  ],
  openGraph: {
    title: 'ACT Score Calculator 2026 | GradesNova',
    description:
      'Enter your raw correct answers per section to instantly see your scaled scores, national percentile, ACT-to-SAT conversion, and college admissions ranges. Covers the 2025 Enhanced ACT format. Free, no signup.',
    url: 'https://gradesnova.com/exams/act',
    type: 'website',
    siteName: 'GradesNova',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ACT Score Calculator 2026 | GradesNova',
    description:
      'Free ACT score calculator — see exactly where your score ranks nationally, which colleges you qualify for, and how the 2025 Enhanced ACT format affects your results.',
  },
  alternates: { canonical: 'https://gradesnova.com/exams/act' },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-snippet': -1,
      'max-image-preview': 'large',
    },
  },
};

export default function ACTLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
