import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next";

// 1. HIGH-PERFORMANCE FONT LOADING
// Subsetting to latin only, and using 'swap' prevents text from being invisible while loading
const inter = Inter({ 
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

// 2. SEPARATED VIEWPORT EXPORT (Next.js 14+ standard for faster parsing)
export const viewport: Viewport = {
  themeColor: "#0a0c14",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5, // Allows accessibility zooming, but starts at 1x
};

// 3. FULLY OPTIMIZED SEO METADATA
export const metadata: Metadata = {
  metadataBase: new URL('https://gradesnova.com'), // Speeds up OpenGraph crawling
  title: {
    template: '%s | GradesNova',
    default: 'GradesNova — Free Exam Score Percentile Calculators',
  },
  description: 'Free, instant percentile calculators for SAT, ACT, GRE, GMAT, LSAT, GCSE and A-Levels. Know exactly where you stand before results day.',
  keywords: ['SAT percentile', 'ACT score calculator', 'GRE percentiles', 'A-Level grade boundaries', 'GCSE 2025 boundaries'],
  authors: [{ name: 'GradesNova' }],
  icons: {
    icon: [
      { url: '/image.svg', type: 'image/svg+xml' } // Your crisp vector favicon
    ],
    apple: '/image.svg',
  },
  openGraph: {
    title: 'GradesNova — Know your score before results day',
    description: 'Free percentile calculators for SAT, ACT, GRE, GMAT, LSAT, GCSE and A-Levels.',
    type: 'website',
    url: 'https://gradesnova.com',
    siteName: 'GradesNova',
    images: [
      {
        url: '/image1.jpg', // Your social sharing card
        width: 1200,
        height: 630,
        alt: 'GradesNova Percentile Calculators',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'GradesNova — Know your score before results day',
    description: 'Free percentile calculators for SAT, ACT, GRE, GMAT, LSAT, GCSE and A-Levels.',
    images: ['/image1.jpg'],
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
};

// 4. SERVER-RENDERED ROOT LAYOUT
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // 'scroll-smooth' gives you smooth anchor linking with 0kb of JavaScript
    <html lang="en" className="dark scroll-smooth">
      {/* 'antialiased' optimizes font rendering on macOS/iOS */}
      <body className={`${inter.className} antialiased bg-[#0a0c14] text-white min-h-screen flex flex-col selection:bg-emerald-500/30 selection:text-emerald-200`}>
        {children}
      </body>
    </html>
  );
}