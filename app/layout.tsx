import type { Metadata, Viewport } from 'next';
import { Inter } from 'next/font/google';
import { Analytics } from "@vercel/analytics/react";
import Script from "next/script";

// Import your existing UI components
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import './globals.css';

// 1. HIGH-PERFORMANCE FONT LOADING 
const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

const currentYear = new Date().getFullYear();

// 2. SEPARATED VIEWPORT EXPORT
export const viewport: Viewport = {
  themeColor: '#0a0c14',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
};

// 3. FULLY OPTIMIZED SEO METADATA
export const metadata: Metadata = {
  metadataBase: new URL('https://gradesnova.com'),
  title: {
    default: `GradesNova — ACT Score Calculator, SAT Score Calculator & GCSE Grade Boundaries ${currentYear}`,
    template: `%s | GradesNova`,
  },
  description:
    `Free ACT score calculator, SAT score calculator, and GCSE grade boundary checker (AQA, Edexcel, OCR, WJEC). Enter your score — instantly see your percentile, rank, and what it means. No signup. Updated ${currentYear}.`,
  keywords: [
    'ACT score calculator',
    'SAT score calculator',
    'GCSE grade boundaries',
    'AQA grade boundaries',
    'Edexcel grade boundaries',
    'OCR grade boundaries',
    'WJEC grade boundaries',
    'ACT national percentiles',
    'what is a good ACT score',
    'what is a good SAT score',
    'GRE score calculator',
    'GMAT score calculator',
    'LSAT score calculator',
    'A-level grade boundaries',
    'ACT percentile chart 2026',
    'SAT percentile 2026',
    'GCSE grade boundaries 2025',
  ],
  authors: [{ name: 'GradesNova', url: 'https://gradesnova.com' }],
  creator: 'GradesNova',
  publisher: 'GradesNova',
  icons: {
    icon: [
      { url: '/image.svg', type: 'image/svg+xml' }
    ],
    apple: '/image.svg',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://gradesnova.com',
    siteName: 'GradesNova',
    title: `GradesNova — ACT Score Calculator, SAT Score Calculator & GCSE Grade Boundaries ${currentYear}`,
    description:
      'Free ACT score calculator, SAT score calculator, and GCSE grade boundaries (AQA, Edexcel, OCR, WJEC). Instantly see your percentile and rank. No signup.',
    images: [
      {
        url: '/image1.jpg',
        width: 1200,
        height: 630,
        alt: 'GradesNova — Free exam score calculators',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: `GradesNova — ACT & SAT Score Calculators + GCSE Grade Boundaries`,
    description:
      'Free ACT score calculator, SAT score calculator, and GCSE grade boundary checker. No signup. Updated for 2026.',
    images: ['/image1.jpg'],
  },
  alternates: {
    canonical: 'https://gradesnova.com',
  },
};

/* ── Structured data ──────────────────────────────────────────────── */
const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'GradesNova',
  url: 'https://gradesnova.com',
  description:
    'Free ACT score calculator, SAT score calculator, and GCSE grade boundaries for AQA, Edexcel, OCR, and WJEC.',
  potentialAction: {
    '@type': 'SearchAction',
    target: {
      '@type': 'EntryPoint',
      urlTemplate: 'https://gradesnova.com/exams/{search_term_string}',
    },
    'query-input': 'required name=search_term_string',
  },
};

const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'GradesNova',
  url: 'https://gradesnova.com',
  logo: 'https://gradesnova.com/image.svg',
  sameAs: [],
  contactPoint: {
    '@type': 'ContactPoint',
    contactType: 'customer support',
    url: 'https://gradesnova.com/contact',
  },
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    {
      '@type': 'ListItem',
      position: 1,
      name: 'Home',
      item: 'https://gradesnova.com',
    },
  ],
};


// 4. SERVER-RENDERED ROOT LAYOUT
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`dark scroll-smooth ${inter.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
        />
      </head>
      <body className={`${inter.className} antialiased bg-[#0a0c14] text-white min-h-screen flex flex-col selection:bg-emerald-500/30 selection:text-emerald-200`}>
        
        {/* Global Navbar Component */}
        <Navbar />

        {/* Main Content Wrapper (flex-grow ensures footer stays at bottom on short pages) */}
        <main className="flex-grow">
          {children}
        </main>

        {/* Global Footer Component */}
        <Footer />

        {/* VERCEL ANALYTICS */}
        <Analytics />

        {/* GOOGLE ADSENSE */}
        <Script 
          async 
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8146074127975041" 
          crossOrigin="anonymous"
          strategy="afterInteractive"
        />

        {/* GOOGLE ANALYTICS (Next.js Optimized) */}
        <Script 
          strategy="afterInteractive" 
          src="https://www.googletagmanager.com/gtag/js?id=G-H5FHMWEGLB" 
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-H5FHMWEGLB');
          `}
        </Script>
      </body>
    </html>
  );
}
