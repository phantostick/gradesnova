import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'A-Level Grade Boundaries 2024 | UCAS Points Calculator | GradesNova',
  description:
    'Free A-Level grade boundaries calculator with UCAS points converter. Enter your raw mark to find your A-Level grade for AQA Maths, Biology, Chemistry, Physics and more. Official 2024 boundaries.',
  keywords: [
    'A-Level grade boundaries',
    'A level grade boundaries 2024',
    'A level grade boundaries calculator',
    'AQA A level grade boundaries 2024',
    'A level grade boundaries maths 2024',
    'A level grade boundaries biology 2024',
    'A level grade boundaries chemistry 2024',
    'A level grade boundaries physics 2024',
    'UCAS points calculator',
    'A level UCAS points',
    'A* A level UCAS points',
    'A level grade calculator',
    'A level marks to grade',
    'what percentage is an A* A level',
    'A level grade boundaries 2026',
    'A level results day 2026',
    'A level grade boundaries AQA Edexcel OCR',
    'A level grade boundaries psychology',
    'A level grade boundaries english',
  ],
  openGraph: {
    title: 'A-Level Grade Boundaries 2024 | UCAS Points Calculator | GradesNova',
    description: 'Enter your A-Level raw mark to find your grade. Includes UCAS points calculator and university entry comparison. AQA 2024 data — free, no signup.',
    url: 'https://gradesnova.com/exams/a-levels',
    type: 'website',
    siteName: 'GradesNova',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'A-Level Grade Boundaries 2024 | UCAS Points Calculator',
    description: 'Free A-Level grade boundaries tool — find your grade from raw marks + UCAS points calculator.',
  },
  alternates: { canonical: 'https://gradesnova.com/exams/a-levels' },
  robots: {
    index: true, follow: true,
    googleBot: { index: true, follow: true, 'max-snippet': -1, 'max-image-preview': 'large' },
  },
};

export default function ALevelsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
