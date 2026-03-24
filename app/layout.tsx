import type { Metadata, Viewport } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';

const geist = Geist({
  subsets: ['latin'],
  variable: '--font-geist',
  display: 'swap', // prevents FOIT — text shows immediately in fallback font
  preload: true,
});

const geistMono = Geist_Mono({
  subsets: ['latin'],
  variable: '--font-geist-mono',
  display: 'swap',
  preload: false, // mono only used in code/score elements, not critical path
});

export const metadata: Metadata = {
  title: {
    default: 'GradesNova — Free Exam Percentile Calculators',
    template: '%s | GradesNova',
  },
  description:
    'Free SAT, ACT, GRE, GMAT, LSAT, GCSE and A-Level percentile calculators. Enter your score and instantly see where you rank nationally. Updated for 2026.',
  keywords: [
    'SAT score calculator',
    'ACT score calculator',
    'GRE score calculator',
    'LSAT score calculator',
    'GCSE grade boundaries 2026',
    'A-level grade boundaries 2026',
    'exam score percentile',
    'test score percentile 2026',
  ],
  authors: [{ name: 'GradesNova' }],
  creator: 'GradesNova',
  metadataBase: new URL('https://gradesnova.com'),
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
    googleBot: { index: true, follow: true, 'max-snippet': -1, 'max-image-preview': 'large' },
  },
};

// Separate viewport export — required in Next.js 14+, fixes the deprecation warning
export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  themeColor: '#0a0c14',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark" style={{ scrollBehavior: 'smooth' }}>
      <head>
        {/*
          scroll-restoration: 'manual' fixes the back-navigation blank page bug.
          Next.js App Router doesn't restore scroll by default when navigating back;
          this tells the browser to use its native scroll restoration instead.
        */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              if ('scrollRestoration' in history) {
                history.scrollRestoration = 'auto';
              }
            `,
          }}
        />
      </head>
      <body
        className={`${geist.variable} ${geistMono.variable} font-sans antialiased bg-[#0a0c14] text-white`}
        // Prevent layout shift from scrollbar appearing/disappearing
        style={{ overflowY: 'scroll' }}
      >
        {children}
      </body>
    </html>
  );
}
