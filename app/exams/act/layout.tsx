import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'ACT Score Calculator 2025–2026 | Percentile, Rank & College Comparison | GradesNova',
  description:
    'Free ACT score percentile calculator — updated for 2025–2026. Enter your ACT composite (1–36) or section scores to instantly see your national percentile. Includes English, Math, Reading, and Science breakdowns, ACT to SAT conversion, and top college ACT ranges. The national average ACT score in 2026 is 21. No signup required.',
  keywords: [
    'ACT percentile calculator',
    'ACT score percentile calculator 2025',
    'ACT score calculator 2026',
    'ACT percentile chart 2025 2026',
    'what is a good ACT score 2026',
    'ACT score percentile 2026',
    'ACT national percentile',
    'national average ACT score 2026',
    'average ACT score class of 2026',
    '24 ACT score percentile',
    '28 ACT score percentile',
    '30 ACT score percentile',
    '32 ACT score percentile',
    '33 ACT score percentile',
    '35 ACT score percentile',
    'ACT composite score percentile',
    'ACT math percentile',
    'ACT English percentile',
    'ACT to SAT conversion',
    'ACT score chart',
    'ACT score ranking',
    'ACT score meaning',
    '20 ACT percentile',
    '25 ACT percentile',
  ],
  openGraph: {
    title: 'ACT Score Calculator 2025–2026 | Percentile & College Comparison | GradesNova',
    description:
      'Enter your ACT composite or section scores to instantly see your national percentile, ACT-to-SAT conversion, and college admissions ranges. English, Math, Reading, Science breakdowns. Free, no signup.',
    url: 'https://gradesnova.com/exams/act',
    type: 'website',
    siteName: 'GradesNova',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ACT Score Calculator 2025–2026 | Percentile & College Comparison',
    description: 'Free ACT percentile calculator — see exactly where your score ranks and what colleges you qualify for.',
  },
  alternates: { canonical: 'https://gradesnova.com/exams/act' },
  robots: {
    index: true, follow: true,
    googleBot: { index: true, follow: true, 'max-snippet': -1, 'max-image-preview': 'large' },
  },
};

export default function ACTLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
