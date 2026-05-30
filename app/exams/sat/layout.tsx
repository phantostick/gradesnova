import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'SAT Score Calculator 2025–2026 | Percentile, Rank & College Comparison | GradesNova',
  description:
    'Free SAT score percentile calculator — updated for 2025–2026. Enter any SAT composite (400–1600) to instantly see your national percentile, college admissions comparison, and what your score means. Includes Math and EBRW breakdowns, SAT to ACT conversion, and top college SAT ranges. No signup required.',
  keywords: [
    'SAT percentile calculator',
    'SAT score percentile calculator 2025',
    'SAT score calculator 2026',
    'SAT percentile chart 2025 2026',
    'what is a good SAT score',
    'SAT score percentile 2026',
    'SAT national percentile',
    '1200 SAT score percentile',
    '1400 SAT score percentile',
    '1500 SAT score percentile',
    '1300 SAT score percentile',
    '1100 SAT score percentile',
    '1000 SAT score percentile',
    'SAT math percentile',
    'SAT EBRW percentile',
    'SAT to ACT conversion',
    'SAT score ranking',
    'College Board SAT percentile',
    'digital SAT score calculator',
    'average SAT score 2026',
    'what is a good SAT score for college',
    'SAT score chart',
    'SAT composite score',
  ],
  openGraph: {
    title: 'SAT Score Calculator 2025–2026 | Percentile & College Comparison | GradesNova',
    description:
      'Enter your SAT score to instantly see your national percentile, college admissions comparison, and SAT-to-ACT equivalent. Math and EBRW breakdowns included. Free, no signup, 2025–2026 data.',
    url: 'https://gradesnova.com/exams/sat',
    type: 'website',
    siteName: 'GradesNova',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SAT Score Calculator 2025–2026 | Percentile & College Comparison',
    description: 'Free SAT percentile calculator — see exactly where your score ranks nationally and which colleges you qualify for.',
  },
  alternates: { canonical: 'https://gradesnova.com/exams/sat' },
  robots: {
    index: true, follow: true,
    googleBot: { index: true, follow: true, 'max-snippet': -1, 'max-image-preview': 'large' },
  },
};

export default function SATLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
