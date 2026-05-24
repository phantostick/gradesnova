import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import Script from "next/script";
import "./globals.css";

// 1. HIGH-PERFORMANCE FONT LOADING
const inter = Inter({ 
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

// 2. SEPARATED VIEWPORT EXPORT (Next.js 14+ standard)
export const viewport: Viewport = {
  themeColor: "#0a0c14",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

// 3. FULLY OPTIMIZED SEO METADATA
export const metadata: Metadata = {
  metadataBase: new URL('https://gradesnova.com'),
  title: {
    template: '%s | GradesNova',
    default: 'GradesNova — Free Exam Score Percentile Calculators',
  },
  description: 'Free, instant percentile calculators for SAT, ACT, GRE, GMAT, LSAT, GCSE and A-Levels. Know exactly where you stand before results day.',
  keywords: ['SAT percentile', 'ACT score calculator', 'GRE percentiles', 'A-Level grade boundaries', 'GCSE 2025 boundaries'],
  authors: [{ name: 'GradesNova' }],
  icons: {
    icon: [
      { url: '/image.svg', type: 'image/svg+xml' }
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
        url: '/image1.jpg',
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
    <html lang="en" className="dark scroll-smooth">
      <body className={`${inter.className} antialiased bg-[#0a0c14] text-white min-h-screen flex flex-col selection:bg-emerald-500/30 selection:text-emerald-200`}>
        {children}
        
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
