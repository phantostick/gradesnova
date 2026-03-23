import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'GRE Score Calculator 2026 | Verbal, Quant & AW Percentiles | GradesNova',
  description:
    'Free GRE score percentile calculator — updated for 2026. Enter your GRE Verbal (130–170), Quantitative (130–170), and Analytical Writing (0–6) scores to instantly see your national percentile and compare by graduate program. No signup required.',
  keywords: [
    'GRE percentile calculator',
    'GRE score percentile calculator',
    'GRE score percentile 2026',
    'GRE percentile chart 2026',
    'GRE percentile chart',
    'what is a good GRE score',
    'GRE verbal percentile',
    'GRE quant percentile',
    'GRE quantitative percentile',
    '160 GRE quant percentile',
    '160 GRE verbal percentile',
    '165 GRE percentile',
    '170 GRE quant percentile',
    'GRE score ranking',
    'GRE score calculator',
    'GRE score by program',
    'ETS GRE percentile',
    'GRE analytical writing percentile',
  ],
  openGraph: {
    title: 'GRE Score Calculator 2026 | Verbal, Quant & AW Percentiles | GradesNova',
    description:
      'Free GRE percentile calculator for Verbal, Quant, and AW scores. See national percentiles and compare against average scores by graduate program.',
    url: 'https://gradesnova.com/exams/gre',
    type: 'website',
    siteName: 'GradesNova',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'GRE Score Calculator 2026 | Verbal, Quant & AW',
    description: 'Free GRE percentile calculator — Verbal, Quant, and AW. See where your score ranks nationally.',
  },
  alternates: { canonical: 'https://gradesnova.com/exams/gre' },
  robots: {
    index: true, follow: true,
    googleBot: { index: true, follow: true, 'max-snippet': -1, 'max-image-preview': 'large' },
  },
};

export default function GRELayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}