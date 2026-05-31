import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'ACT Score Calculator | GradesNova',
  description:
    'Free ACT score calculator — enter your composite (1–36) or section scores to instantly see your 2026 national percentile, ACT-to-SAT conversion, and top college ranges. English, Math, Reading & Science breakdowns. No signup.',
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
  ],
  openGraph: {
    title: 'ACT Score Calculator | GradesNova',
    description:
      'Enter your ACT composite or section scores to instantly see your 2026 national percentile, ACT-to-SAT conversion, and college admissions ranges. English, Math, Reading & Science breakdowns. Free, no signup.',
    url: 'https://gradesnova.com/exams/act',
    type: 'website',
    siteName: 'GradesNova',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ACT Score Calculator | GradesNova',
    description:
      'Free ACT score calculator — see exactly where your score ranks nationally and which colleges you qualify for. Updated for 2026.',
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
