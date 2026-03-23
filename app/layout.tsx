import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';

const geist = Geist({ subsets: ['latin'], variable: '--font-geist' });
const geistMono = Geist_Mono({ subsets: ['latin'], variable: '--font-geist-mono' });

export const metadata: Metadata = {
  title: {
    default: 'GradesNova — Free Exam Percentile Calculators',
    template: '%s | GradesNova',
  },
  description:
    'Free SAT, ACT, GRE, GMAT, LSAT, GCSE and A-Level percentile calculators. Enter your score and instantly see where you rank nationally. Updated for 2026.',
  keywords: [
    'SAT percentile calculator',
    'ACT percentile calculator',
    'GRE percentile calculator',
    'GMAT percentile calculator',
    'LSAT percentile calculator',
    'GCSE grade predictor',
    'A-Level grade predictor',
    'exam score percentile',
    'test score percentile 2026',
  ],
  authors: [{ name: 'GradesNova' }],
  creator: 'GradesNova',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://gradesnova.com',
    siteName: 'GradesNova',
    title: 'GradesNova — Free Exam Percentile Calculators',
    description:
      'Know your exam percentile before results day. Free calculators for SAT, ACT, GRE, GMAT, LSAT, GCSE and A-Levels.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'GradesNova — Free Exam Percentile Calculators',
    description: 'Know your exam percentile before results day.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 5,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body className={`${geist.variable} ${geistMono.variable} font-sans antialiased bg-[#0a0c14] text-white`}>
        {children}
      </body>
    </html>
  );
}