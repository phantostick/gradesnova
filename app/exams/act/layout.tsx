import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'ACT Score Calculator 2026 | Composite Percentile | GradesNova',
  description:
    'Free ACT score percentile calculator — updated for 2026. Enter your ACT composite (1–36) or section scores to instantly see your national percentile. English, Math, Reading, and Science breakdowns. No signup required.',
  keywords: [
    'ACT percentile calculator',
    'ACT score percentile calculator',
    'ACT score calculator',
    'ACT percentile chart 2026',
    'ACT percentile chart',
    'what is a good ACT score',
    'ACT score percentile 2026',
    'ACT national percentile',
    'ACT score calculator',
    '24 ACT score percentile',
    '28 ACT score percentile',
    '30 ACT score percentile',
    '33 ACT score percentile',
    'ACT composite score percentile',
    'ACT math percentile',
    'ACT English percentile',
    'ACT score ranking',
  ],
  openGraph: {
    title: 'ACT Score Calculator 2026 | Composite Percentile | GradesNova',
    description:
      'Enter your ACT composite or section scores to instantly see your national percentile. English, Math, Reading, Science breakdowns. Free, no signup, 2026 data.',
    url: 'https://gradesnova.com/exams/act',
    type: 'website',
    siteName: 'GradesNova',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ACT Score Calculator 2026 | Composite Percentile',
    description: 'Free ACT percentile calculator — see exactly where your score ranks nationally.',
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