import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'LSAT Score Calculator 2026 | Percentile & Law Schools | GradesNova',
  description:
    'Free LSAT score percentile calculator with T14 law school median comparison — updated for 2026. Enter any LSAT score (120–180) to instantly see your national percentile ranking and compare against Harvard, Yale, Stanford Law. No signup required.',
  keywords: [
    'LSAT percentile calculator',
    'LSAT score percentile calculator',
    'LSAT score percentile',
    'LSAT percentile chart 2026',
    'LSAT percentile chart',
    'what is a good LSAT score',
    'LSAT score percentile 2026',
    'LSAT national percentile',
    'LSAT score calculator',
    '160 LSAT score percentile',
    '165 LSAT score percentile',
    '170 LSAT score percentile',
    '175 LSAT score percentile',
    'LSAT score chart',
    'LSAT law school comparison',
    'T14 law school LSAT scores',
    'good LSAT score for law school',
    'LSAT score ranking',
    'LSAC percentile',
  ],
  openGraph: {
    title: 'LSAT Score Calculator 2026 | Percentile & Law Schools | GradesNova',
    description:
      'Enter your LSAT score to instantly see your national percentile and compare against T14 law school medians. Free, no signup, 2026 data.',
    url: 'https://gradesnova.com/exams/lsat',
    type: 'website',
    siteName: 'GradesNova',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'LSAT Score Calculator 2026 | Percentile & Law Schools',
    description: 'Free LSAT percentile calculator with T14 law school comparison — see exactly where your score ranks.',
  },
  alternates: { canonical: 'https://gradesnova.com/exams/lsat' },
  robots: {
    index: true, follow: true,
    googleBot: { index: true, follow: true, 'max-snippet': -1, 'max-image-preview': 'large' },
  },
};

export default function LSATLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}