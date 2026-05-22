import type { Metadata } from 'next';

// ─── TARGET KEYWORDS (from search console data, May 2026) ────────────────────
// High-impression, low-click opportunities (positions 5-10, need to break top 3):
//   wjec grade boundaries (465 impressions, pos 5.2)
//   grade boundaries wjec (136, pos 4.9)
//   aqa grade boundaries 2026 (121, pos 9.9)
//   wjec grade boundaries 2026 (41, pos 7.1)
//   aqa gcse grade boundaries 2026 (41, pos 8.7)
//   wjec gcse grade boundaries (31, pos 8.3)
//   ocr gcse grade boundaries 2026 (12, pos 8.1)
//   Converting well already: grade boundary calculator (4.76%), ocr (8.33%)
// ─────────────────────────────────────────────────────────────────────────────

export const metadata: Metadata = {
  title: 'GCSE Grade Boundaries 2025–2026 | AQA Edexcel OCR WJEC Calculator',
  description:
    'Free GCSE grade boundaries calculator for AQA, Edexcel, OCR and WJEC. Enter your raw mark to instantly find your grade. Updated with 2025 boundaries — AQA, Edexcel, OCR, WJEC Maths, English, Science and more. 2026 boundaries published Results Day 21 August 2026.',

  keywords: [
    // Board-specific — biggest impression winners
    'wjec grade boundaries',
    'wjec grade boundaries 2026',
    'wjec gcse grade boundaries',
    'wjec gcse grade boundaries 2025',
    'grade boundaries wjec',
    'wjec grade boundaries 2025',
    // AQA
    'aqa grade boundaries 2026',
    'aqa gcse grade boundaries 2026',
    'aqa gcse grade boundaries 2025',
    'aqa grade boundaries gcse',
    'aqa raw mark grade boundaries',
    'aqa raw grade boundaries',
    'aqa raw grade boundaries 2025',
    'raw grade boundaries aqa',
    'raw mark grade boundaries aqa',
    // Edexcel
    'edexcel gcse grade boundaries',
    'edexcel grade boundaries 2026',
    'edexcel gcse grade boundaries 2025',
    'edexcel grade boundaries calculator',
    // OCR
    'ocr gcse grade boundaries 2026',
    'ocr gcse maths grade boundaries 2026',
    'ocr grade boundaries 2026',
    'ocr grade boundaries calculator',
    // Calculators (high CTR)
    'grade boundary calculator',
    'gcse grade boundaries calculator',
    'gcse grade boundary calculator',
    'grade calculator gcse',
    'grades calculator gcse',
    'grade boundaries calculator gcse',
    'grade boundary converter',
    'calculator grade boundaries',
    // Maths-specific (huge search volume)
    'gcse maths grade boundaries 2026',
    'gcse maths boundaries for 9 2026',
    'maths grade boundaries 2026 aqa',
    'gcse higher maths grade boundary',
    'gcse maths predicted grade boundaries',
    // General 2026
    'gcse grade boundaries 2026',
    'gcse grade boundaries 2025',
    'grade boundaries 2026',
    'predicted grade boundaries 2026',
    'gcse 2026 grade boundaries predictions',
    'what are the grade boundaries for gcse 2026',
    'grade boundaries 2026 aqa',
    'gcse grades 2026',
    // Results day
    'gcse results day 2026',
    'when do grade boundaries get released 2026',
    // Raw marks
    'gcse raw marks',
    'gcse marks to grade',
    'what percentage is a grade 9 gcse',
    'gcse grade 4 how many marks',
    'gcse grade 5 how many marks',
  ],

  openGraph: {
    title: 'GCSE Grade Boundaries 2025–2026 | AQA Edexcel OCR WJEC Calculator',
    description:
      'Free GCSE grade boundaries calculator for AQA, Edexcel, OCR and WJEC. Enter your raw mark to find your grade instantly. 2025 data — updated Results Day 21 Aug 2026.',
    url: 'https://gradesnova.com/exams/gcse',
    type: 'website',
    siteName: 'GradesNova',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'GCSE Grade Boundaries 2025–2026 | AQA Edexcel OCR WJEC',
    description:
      'Free GCSE grade boundaries calculator — find your grade from raw marks instantly. AQA, Edexcel, OCR, WJEC. Updated 2025 data.',
  },
  alternates: { canonical: 'https://gradesnova.com/exams/gcse' },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-snippet': -1,
      'max-image-preview': 'large',
      'max-video-preview': -1,
    },
  },
};

export default function GCSELayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
