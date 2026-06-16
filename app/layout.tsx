import type { Metadata, Viewport } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

const currentYear = new Date().getFullYear();

export const viewport: Viewport = {
  themeColor: '#0a0c14',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
};

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

/* ── Nav data ─────────────────────────────────────────────────────── */
const NAV_GROUPS = [
  {
    label: 'US Admissions',
    links: [
      { href: '/exams/act', label: 'ACT Score Calculator' },
      { href: '/exams/act/scores', label: 'What is a Good ACT Score?' },
      { href: '/exams/act/prep-tips', label: 'ACT Prep Tips' },
      { href: '/exams/sat', label: 'SAT Score Calculator' },
      { href: '/exams/sat/scores', label: 'What is a Good SAT Score?' },
    ],
  },
  {
    label: 'GCSE Boundaries',
    links: [
      { href: '/exams/gcse', label: 'GCSE Grade Boundaries' },
      { href: '/exams/gcse/aqa', label: 'AQA Grade Boundaries' },
      { href: '/exams/gcse/edexcel', label: 'Edexcel Grade Boundaries' },
      { href: '/exams/gcse/ocr', label: 'OCR Grade Boundaries' },
      { href: '/exams/gcse/wjec', label: 'WJEC Grade Boundaries' },
      { href: '/exams/gcse/grade-boundaries-explained', label: 'How Boundaries Work' },
    ],
  },
  {
    label: 'UK Qualifications',
    links: [
      { href: '/exams/a-levels', label: 'A-Level Grade Boundaries' },
      { href: '/exams/gcse/results-day', label: 'GCSE Results Day Guide' },
      { href: '/exams/act/results-day', label: 'ACT Results Day Guide' },
    ],
  },
  {
    label: 'Graduate Admissions',
    links: [
      { href: '/exams/gre', label: 'GRE Score Calculator' },
      { href: '/exams/gmat', label: 'GMAT Score Calculator' },
      { href: '/exams/lsat', label: 'LSAT Score Calculator' },
    ],
  },
];

const FOOTER_LEGAL = [
  { href: '/contact', label: 'Contact' },
  { href: '/privacy', label: 'Privacy Policy' },
  { href: '/terms', label: 'Terms of Service' },
];

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
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
      <body className="bg-[#0a0c14] text-white antialiased font-sans">

        {/* ── Navbar ─────────────────────────────────────────────── */}
        <header className="sticky top-0 z-50 border-b border-white/6 bg-[#0a0c14]/90 backdrop-blur-xl">
          <nav
            className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between gap-6"
            aria-label="Main navigation"
          >
            {/* Logo */}
            <a href="/" className="flex items-center gap-2.5 shrink-0" aria-label="GradesNova home">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/image.svg" alt="GradesNova" width={28} height={28} />
              <span className="font-bold text-lg tracking-tight">GradesNova</span>
            </a>

            {/* Desktop nav — primary links */}
            <div className="hidden lg:flex items-center gap-1 text-sm">
              <a
                href="/exams/act"
                className="px-3 py-1.5 rounded-lg text-white/65 hover:text-white hover:bg-white/6 transition-colors"
              >
                ACT Calculator
              </a>
              <a
                href="/exams/sat"
                className="px-3 py-1.5 rounded-lg text-white/65 hover:text-white hover:bg-white/6 transition-colors"
              >
                SAT Calculator
              </a>
              {/* GCSE dropdown trigger (visual only — use JS/state for real dropdown) */}
              <a
                href="/exams/gcse"
                className="px-3 py-1.5 rounded-lg text-white/65 hover:text-white hover:bg-white/6 transition-colors"
              >
                GCSE Boundaries
              </a>
              <a
                href="/exams/a-levels"
                className="px-3 py-1.5 rounded-lg text-white/65 hover:text-white hover:bg-white/6 transition-colors"
              >
                A-Levels
              </a>
              <a
                href="/exams/gre"
                className="px-3 py-1.5 rounded-lg text-white/65 hover:text-white hover:bg-white/6 transition-colors"
              >
                GRE
              </a>
              <a
                href="/exams/gmat"
                className="px-3 py-1.5 rounded-lg text-white/65 hover:text-white hover:bg-white/6 transition-colors"
              >
                GMAT
              </a>
              <a
                href="/exams/lsat"
                className="px-3 py-1.5 rounded-lg text-white/65 hover:text-white hover:bg-white/6 transition-colors"
              >
                LSAT
              </a>
            </div>

            {/* Right side */}
            <div className="flex items-center gap-3 shrink-0">
              <a
                href="/contact"
                className="hidden sm:inline text-sm text-white/50 hover:text-white/80 transition-colors"
              >
                Contact
              </a>
              <a
                href="/exams/act"
                className="rounded-full bg-indigo-600 hover:bg-indigo-500 text-white text-sm font-semibold px-4 py-1.5 transition-colors"
              >
                Get started
              </a>
            </div>
          </nav>
        </header>

        {/* ── Page content ───────────────────────────────────────── */}
        {children}

        {/* ── Footer ─────────────────────────────────────────────── */}
        <footer className="border-t border-white/8 bg-[#080a11] pt-16 pb-10 px-4">
          <div className="max-w-7xl mx-auto">
            {/* Top: logo + nav groups */}
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-8 mb-14">
              {/* Brand col */}
              <div className="col-span-2 sm:col-span-3 lg:col-span-1 mb-2">
                <a href="/" className="flex items-center gap-2 mb-4" aria-label="GradesNova home">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src="/image.svg" alt="GradesNova" width={24} height={24} />
                  <span className="font-bold">GradesNova</span>
                </a>
                <p className="text-sm text-white/40 leading-relaxed max-w-xs">
                  Free ACT score calculator, SAT score calculator, and GCSE grade boundary checker.
                  No account. No ads. Updated for {currentYear}.
                </p>
              </div>

              {/* Nav groups */}
              {NAV_GROUPS.map((group) => (
                <div key={group.label}>
                  <p className="text-xs font-semibold tracking-widest uppercase text-white/35 mb-4">
                    {group.label}
                  </p>
                  <ul className="space-y-2.5">
                    {group.links.map(({ href, label }) => (
                      <li key={href}>
                        <a
                          href={href}
                          className="text-sm text-white/55 hover:text-white transition-colors"
                        >
                          {label}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            {/* Divider */}
            <div className="border-t border-white/6 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/30">
              <p>© {currentYear} GradesNova. All rights reserved. Built for the {currentYear - 1}–{currentYear} admissions cycle.</p>
              <div className="flex items-center gap-5">
                {FOOTER_LEGAL.map(({ href, label }) => (
                  <a key={href} href={href} className="hover:text-white/60 transition-colors">
                    {label}
                  </a>
                ))}
              </div>
            </div>
            <p className="text-[11px] text-white/20 mt-4 text-center sm:text-left">
              GradesNova is not affiliated with, nor endorsed by, the College Board, ACT Inc., ETS, GMAC, LSAC, AQA, Edexcel, OCR, or WJEC.
            </p>
          </div>
        </footer>

      </body>
    </html>
  );
}
