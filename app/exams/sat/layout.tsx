import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'SAT Score Calculator 2026 | Percentile & Rank | GradesNova',
  description:
    'Free SAT score percentile calculator — updated for 2026. Enter any SAT composite score (400–1600) to instantly see your national percentile ranking. Includes Math and EBRW section breakdowns. No signup required.',
  keywords: [
    'SAT percentile calculator',
    'SAT score percentile calculator',
    'SAT score calculator',
    'SAT percentile chart 2026',
    'SAT percentile chart',
    'what is a good SAT score',
    'SAT score percentile 2026',
    'SAT national percentile',
    'SAT score calculator',
    '1200 SAT score percentile',
    '1400 SAT score percentile',
    '1500 SAT score percentile',
    'SAT math percentile',
    'SAT EBRW percentile',
    'SAT score ranking',
    'College Board SAT percentile',
  ],
  openGraph: {
    title: 'SAT Score Calculator 2026 | Percentile & Rank | GradesNova',
    description:
      'Enter your SAT score to instantly see your national percentile ranking. Math and EBRW section breakdowns. Free, no signup, 2026 data.',
    url: 'https://gradesnova.com/exams/sat',
    type: 'website',
    siteName: 'GradesNova',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SAT Score Calculator 2026 | Percentile & Rank',
    description: 'Free SAT percentile calculator — see exactly where your score ranks nationally.',
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