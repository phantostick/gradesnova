import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'SAT Score Calculator | GradesNova',
  description:
    'Free SAT score calculator — enter any composite (400–1600) to instantly see your 2026 national percentile, SAT-to-ACT conversion, and top college ranges. Math & EBRW breakdowns included. No signup.',
  keywords: [
    'SAT score calculator',
    'SAT score calculator 2026',
    'digital SAT score calculator',
    'SAT percentile calculator',
    'SAT score percentile 2026',
    'SAT percentile chart 2026',
    'what is a good SAT score 2026',
    'SAT national percentile',
    'average SAT score 2026',
    '1200 SAT score percentile',
    '1300 SAT score percentile',
    '1400 SAT score percentile',
    '1500 SAT score percentile',
    '1000 SAT score percentile',
    '1100 SAT score percentile',
    'SAT math percentile',
    'SAT EBRW percentile',
    'SAT to ACT conversion',
    'SAT score ranking',
    'College Board SAT percentile',
    'SAT score chart',
    'SAT composite score',
    'what is a good SAT score for college',
  ],
  openGraph: {
    title: 'SAT Score Calculator | GradesNova',
    description:
      'Enter your SAT score to instantly see your 2026 national percentile, SAT-to-ACT equivalent, and college admissions comparison. Math & EBRW breakdowns included. Free, no signup.',
    url: 'https://gradesnova.com/exams/sat',
    type: 'website',
    siteName: 'GradesNova',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SAT Score Calculator | GradesNova',
    description:
      'Free SAT score calculator — see exactly where your score ranks nationally and which colleges you qualify for. Updated for 2026.',
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
