import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'GCSE Grade Boundaries 2026 | AQA Edexcel OCR Calculator | GradesNova',
  description:
    'Free GCSE grade boundaries calculator for AQA, Edexcel, OCR and WJEC. Enter your raw mark to instantly find your GCSE grade. 2025 boundaries shown — updated on Results Day 20 August 2026.',
  keywords: [
    'GCSE grade boundaries 2026',
    'GCSE grade boundaries',
    'GCSE grade boundaries 2025',
    'AQA GCSE grade boundaries 2025',
    'AQA GCSE grade boundaries 2026',
    'Edexcel GCSE grade boundaries 2025',
    'Edexcel GCSE grade boundaries 2026',
    'OCR GCSE grade boundaries 2025',
    'GCSE grade boundaries maths 2025',
    'GCSE grade boundaries maths 2026',
    'GCSE grade boundaries calculator',
    'GCSE grade calculator',
    'GCSE marks to grade',
    'what percentage is a grade 9 GCSE',
    'GCSE grade 4 how many marks',
    'GCSE grade 5 how many marks',
    'GCSE results day 2026',
    'GCSE grade boundaries biology',
    'GCSE grade boundaries chemistry',
    'GCSE grade boundaries physics',
    'GCSE grade boundaries english',
  ],
  openGraph: {
    title: 'GCSE Grade Boundaries 2026 | AQA Edexcel OCR | GradesNova',
    description: 'Free GCSE grade boundaries calculator. Enter your raw mark to find your grade across AQA, Edexcel, OCR and WJEC. 2025 data — updated Results Day 20 Aug 2026.',
    url: 'https://gradesnova.com/exams/gcse',
    type: 'website',
    siteName: 'GradesNova',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'GCSE Grade Boundaries 2026 | AQA Edexcel OCR',
    description: 'Free GCSE grade boundaries calculator — find your grade from raw marks instantly.',
  },
  alternates: { canonical: 'https://gradesnova.com/exams/gcse' },
  robots: {
    index: true, follow: true,
    googleBot: { index: true, follow: true, 'max-snippet': -1, 'max-image-preview': 'large' },
  },
};

export default function GCSELayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}