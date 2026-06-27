// app/exams/act/page.tsx
// SERVER COMPONENT — no 'use client' directive.
// Only the interactive calculator island (ACTCalculatorClient) and FAQ accordion
// (FAQSection) are client components. All static text, tables, and schema scripts
// are server-rendered HTML, visible to crawlers without hydration.

import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import Link from 'next/link';
import ACTCalculatorClient, { FAQSection } from './calculator-client';
import { ACT_LAST_MODIFIED, ACT_DATE_PUBLISHED, ACT_SAT_CROSSWALK, ACT_FAQS } from '@/lib/act-meta';

const COLOR = '#06b6d4';

// ─── Ordinal helper (server-side copy; client has its own) ────────────────────
function ordinal(n: number): string {
  const abs = Math.abs(Math.floor(n));
  const v = abs % 100;
  if (v >= 11 && v <= 13) return n + 'th';
  switch (abs % 10) {
    case 1: return n + 'st';
    case 2: return n + 'nd';
    case 3: return n + 'rd';
    default: return n + 'th';
  }
}

// ─── Static data (server-only — not shipped to client bundle) ─────────────────

const ACT_FULL_TABLE = [
  { score: 36, pct: 99, tier: 'Perfect score',     schools: 'All universities' },
  { score: 35, pct: 99, tier: 'Top 1%',            schools: 'All Ivy League, MIT, Stanford' },
  { score: 34, pct: 98, tier: 'Top 2%',            schools: 'All highly selective' },
  { score: 33, pct: 97, tier: 'Top 3%',            schools: 'Ivy League, top 10 universities' },
  { score: 32, pct: 96, tier: 'Top 4%',            schools: 'Top 15 universities' },
  { score: 31, pct: 95, tier: 'Top 5%',            schools: 'Top 20 universities' },
  { score: 30, pct: 93, tier: 'Top 7%',            schools: 'Top 25 universities' },
  { score: 29, pct: 91, tier: 'Top 9%',            schools: 'Top 30 universities' },
  { score: 28, pct: 88, tier: 'Top 12%',           schools: 'Selective universities' },
  { score: 27, pct: 85, tier: 'Top 15%',           schools: 'Selective universities' },
  { score: 26, pct: 82, tier: 'Top 18%',           schools: 'Above average colleges' },
  { score: 25, pct: 78, tier: 'Top 22%',           schools: 'Above average colleges' },
  { score: 24, pct: 74, tier: 'Top 26%',           schools: 'Many four-year colleges' },
  { score: 23, pct: 69, tier: 'Top 31%',           schools: 'Many four-year colleges' },
  { score: 22, pct: 63, tier: 'Top 37%',           schools: 'Most four-year colleges' },
  { score: 21, pct: 57, tier: 'National average',  schools: 'Most four-year colleges' },
  { score: 20, pct: 49, tier: 'Average range',     schools: 'Most four-year colleges' },
  { score: 19, pct: 43, tier: 'Average range',     schools: 'Many four-year colleges' },
  { score: 18, pct: 38, tier: 'Below average',     schools: 'Less selective colleges' },
  { score: 17, pct: 31, tier: 'Below average',     schools: 'Less selective colleges' },
  { score: 16, pct: 25, tier: 'Below average',     schools: 'Community colleges' },
  { score: 15, pct: 19, tier: 'Needs improvement', schools: 'Community colleges' },
  { score: 14, pct: 13, tier: 'Needs improvement', schools: 'Community colleges' },
  { score: 12, pct: 6,  tier: 'Needs improvement', schools: 'Community colleges' },
];

const COLLEGES = [
  { school: 'MIT',                     range: '35–36', lo: 35, hi: 36, rate: '4%' },
  { school: 'Harvard University',      range: '34–36', lo: 34, hi: 36, rate: '4%' },
  { school: 'Yale University',         range: '34–36', lo: 34, hi: 36, rate: '5%' },
  { school: 'Princeton University',    range: '34–36', lo: 34, hi: 36, rate: '5%' },
  { school: 'Stanford University',     range: '34–36', lo: 34, hi: 36, rate: '4%' },
  { school: 'Duke University',         range: '33–35', lo: 33, hi: 35, rate: '7%' },
  { school: 'Northwestern University', range: '33–35', lo: 33, hi: 35, rate: '7%' },
  { school: 'Georgetown University',   range: '32–35', lo: 32, hi: 35, rate: '12%' },
  { school: 'Univ. of Michigan',       range: '31–34', lo: 31, hi: 34, rate: '18%' },
  { school: 'UCLA',                    range: '28–34', lo: 28, hi: 34, rate: '9%' },
  { school: 'Univ. of Virginia',       range: '31–34', lo: 31, hi: 34, rate: '18%' },
  { school: 'Boston University',       range: '31–34', lo: 31, hi: 34, rate: '14%' },
  { school: 'Univ. of Texas Austin',   range: '25–32', lo: 25, hi: 32, rate: '29%' },
  { school: 'Penn State',              range: '25–31', lo: 25, hi: 31, rate: '54%' },
];

const ACT_TEST_DATES = [
  { date: 'September 13, 2025',  deadline: 'August 8, 2025',      scores: 'September 23, 2025' },
  { date: 'October 25, 2025',    deadline: 'September 19, 2025',  scores: 'November 4, 2025' },
  { date: 'December 13, 2025',   deadline: 'November 7, 2025',    scores: 'December 23, 2025' },
  { date: 'February 7, 2026',    deadline: 'January 9, 2026',     scores: 'February 17, 2026' },
  { date: 'April 18, 2026',      deadline: 'March 13, 2026',      scores: 'April 28, 2026' },
  { date: 'June 13, 2026',       deadline: 'May 8, 2026',         scores: 'June 23, 2026' },
  { date: 'July 18, 2026',       deadline: 'June 12, 2026',       scores: 'July 28, 2026' },
];

const STATE_AVERAGES = [
  { state: 'Connecticut',    avg: 26.0, participation: '100%' },
  { state: 'Massachusetts',  avg: 25.5, participation: '72%'  },
  { state: 'New Hampshire',  avg: 25.1, participation: '18%'  },
  { state: 'Minnesota',      avg: 24.8, participation: '100%' },
  { state: 'Colorado',       avg: 23.9, participation: '100%' },
  { state: 'Wisconsin',      avg: 23.5, participation: '100%' },
  { state: 'Illinois',       avg: 23.4, participation: '100%' },
  { state: 'Michigan',       avg: 23.1, participation: '100%' },
  { state: 'Tennessee',      avg: 21.1, participation: '100%' },
  { state: 'Alabama',        avg: 18.6, participation: '100%' },
  { state: 'Mississippi',    avg: 17.9, participation: '100%' },
  { state: 'Nevada',         avg: 17.8, participation: '100%' },
];

const IMPROVEMENT_DATA = [
  { hours: '1–5 hrs',   gain: '+1 pt',  pct: 15 },
  { hours: '6–10 hrs',  gain: '+2 pts', pct: 30 },
  { hours: '11–20 hrs', gain: '+3 pts', pct: 50 },
  { hours: '21–40 hrs', gain: '+4 pts', pct: 70 },
  { hours: '40+ hrs',   gain: '+5 pts', pct: 90 },
];

const TOC_ITEMS = [
  { href: '#calculator',       label: 'ACT score calculator' },
  { href: '#enhanced-act',     label: '2025 Enhanced ACT format' },
  { href: '#how-scored',       label: 'How ACT scoring works' },
  { href: '#national-average', label: 'National average ACT score' },
  { href: '#what-is-good',     label: 'What is a good ACT score?' },
  { href: '#percentile-table', label: 'Full percentile chart' },
  { href: '#colleges',         label: 'College score ranges' },
  { href: '#test-dates',       label: 'ACT test dates 2025–2026' },
  { href: '#act-sat',          label: 'ACT to SAT conversion' },
  { href: '#state-averages',   label: 'Average ACT score by state' },
  { href: '#improve',          label: 'How to improve your score' },
  { href: '#faq',              label: 'FAQs' },
];

// ─── Page ─────────────────────────────────────────────────────────────────────
export default function ACTCalculatorPage() {

  // ── JSON-LD schema — all dateModified driven from ACT_LAST_MODIFIED ──────────
  const schemaBreadcrumb = {
    '@context': 'https://schema.org', '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://gradesnova.com' },
      { '@type': 'ListItem', position: 2, name: 'Exam Calculators', item: 'https://gradesnova.com/#exams' },
      { '@type': 'ListItem', position: 3, name: 'ACT Score Calculator', item: 'https://gradesnova.com/exams/act' },
    ],
  };

  const schemaFAQ = {
    '@context': 'https://schema.org', '@type': 'FAQPage',
    mainEntity: ACT_FAQS.map(f => ({
      '@type': 'Question', name: f.question,
      acceptedAnswer: { '@type': 'Answer', text: f.answer },
    })),
  };

  const schemaTool = {
    '@context': 'https://schema.org', '@type': 'WebApplication',
    name: 'ACT Score Calculator',
    url: 'https://gradesnova.com/exams/act',
    description: 'Free ACT score calculator. Enter your raw correct answers per section to instantly calculate your scaled scores and national percentile ranking. Includes the 2025 Enhanced ACT format, ACT-to-SAT conversion and top college score ranges. Updated for 2025–2026.',
    applicationCategory: 'EducationalApplication', operatingSystem: 'Any',
    offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
    provider: { '@type': 'Organization', name: 'GradesNova', url: 'https://gradesnova.com' },
    dateModified: ACT_LAST_MODIFIED,
  };

  const schemaDataset = {
    '@context': 'https://schema.org', '@type': 'Dataset',
    name: 'ACT Score Calculator & Percentile Chart 2026',
    description: 'Complete ACT composite score to national percentile mapping based on official ACT national norms. Free ACT score calculator for 2025–2026. Includes section percentiles for English, Math, Reading, and Science, plus 2025 Enhanced ACT format changes.',
    url: 'https://gradesnova.com/exams/act',
    creator: { '@type': 'Organization', name: 'GradesNova' },
    dateModified: ACT_LAST_MODIFIED,
    keywords: 'ACT score calculator, ACT score calculator 2026, ACT score percentile, ACT national average, ACT score chart, enhanced ACT 2025',
    spatialCoverage: 'United States',
  };

  const schemaArticle = {
    '@context': 'https://schema.org', '@type': 'Article',
    headline: 'ACT Score Calculator — National Percentile, College Ranges & Score Guide',
    description: 'Free ACT score calculator for 2025–2026. Includes the 2025 Enhanced ACT format change, raw-to-scaled conversion, national percentile rankings, college ranges, and expert prep tips.',
    url: 'https://gradesnova.com/exams/act',
    dateModified: ACT_LAST_MODIFIED,
    datePublished: ACT_DATE_PUBLISHED,
    publisher: { '@type': 'Organization', name: 'GradesNova', url: 'https://gradesnova.com' },
    author: { '@type': 'Organization', name: 'GradesNova Editorial Team' },
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaBreadcrumb) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaFAQ) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaTool) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaDataset) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaArticle) }} />

      <main className="bg-[#0a0c14] min-h-screen text-white">
        <Navbar />

        {/* ── HEADER ── */}
        <header className="bg-[#0d0f1a] border-b border-white/6 py-10">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <nav aria-label="Breadcrumb" className="mb-4">
              <ol className="flex items-center gap-2 text-xs text-slate-500">
                <li><Link href="/" className="hover:text-white transition-colors">Home</Link></li>
                <li aria-hidden="true">›</li>
                <li><Link href="/#exams" className="hover:text-white transition-colors">Calculators</Link></li>
                <li aria-hidden="true">›</li>
                <li className="text-slate-400" aria-current="page">ACT Score Calculator</li>
              </ol>
            </nav>

            {/* Trust / freshness badges */}
            <div className="flex items-center gap-2 mb-4 flex-wrap">
              <span className="text-[11px] px-2.5 py-1 rounded-full border font-medium"
                style={{ backgroundColor: '#34d39915', borderColor: '#34d39930', color: '#34d399' }}>
                ✓ Updated June 2026
              </span>
              <span className="text-[11px] px-2.5 py-1 rounded-full border font-medium"
                style={{ backgroundColor: `${COLOR}15`, borderColor: `${COLOR}30`, color: COLOR }}>
                Based on official ACT national norms
              </span>
              <span className="text-[11px] px-2.5 py-1 rounded-full border font-medium"
                style={{ backgroundColor: '#f59e0b15', borderColor: '#f59e0b30', color: '#fbbf24' }}>
                Covers 2025 Enhanced ACT format
              </span>
              <span className="text-[11px] px-2.5 py-1 rounded-full border font-medium"
                style={{ backgroundColor: '#a855f715', borderColor: '#a855f730', color: '#c084fc' }}>
                Free · No sign-up required
              </span>
            </div>

            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 rounded-xl flex items-center justify-center text-xl"
                style={{ backgroundColor: `${COLOR}18` }} aria-hidden="true">✏️</div>
              <span className="text-xs font-mono uppercase tracking-widest" style={{ color: `${COLOR}aa` }}>
                ACT · ACT, Inc. · Composite 1–36 · Updated June 2026
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white tracking-tight mb-3">
              ACT Score Calculator
            </h1>
            <p className="text-lg text-slate-400 max-w-2xl mb-4">
              Enter your raw correct answers and this{' '}
              <strong className="text-white font-medium">ACT score calculator</strong> instantly
              converts them into scaled section scores, a composite, and your national percentile.
              It's built for the{' '}
              <strong className="text-white font-medium">2025 Enhanced ACT</strong> format, but
              also supports the classic 4-section test if you're working from older practice scores.
            </p>
            <p className="text-sm text-slate-500 max-w-2xl mb-4">
              The national average ACT score is currently <strong className="text-white">21</strong> —
              once you run the calculator below, scroll down to see exactly how your result compares,
              what it means for college admissions, and how to improve it.
            </p>
            <div className="flex flex-wrap gap-2">
              {[
                ['Official ACT norms 2025–2026', COLOR],
                ['Raw → scaled score converter', '#a855f7'],
                ['2025 Enhanced ACT covered', '#f59e0b'],
                ['ACT → SAT conversion', '#6366f1'],
                ['Last updated: June 2026', '#34d399'],
              ].map(([label, color]) => (
                <span key={label} className="text-xs px-3 py-1 rounded-full font-medium border"
                  style={{ backgroundColor: `${color}15`, borderColor: `${color}30`, color }}>
                  {label}
                </span>
              ))}
            </div>
          </div>
        </header>

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-16">

          {/* ── TABLE OF CONTENTS ── */}
          <nav aria-label="Page contents" className="bg-[#12141f] border border-white/8 rounded-2xl p-6">
            <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-4">On this page</p>
            <ol className="grid sm:grid-cols-2 gap-x-8 gap-y-1.5 list-none">
              {TOC_ITEMS.map((item, i) => (
                <li key={item.href} className="flex items-center gap-2">
                  <span className="text-[10px] font-mono text-slate-600 w-5 shrink-0">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <a href={item.href}
                    className="text-sm text-slate-400 hover:text-white transition-colors hover:underline underline-offset-2">
                    {item.label}
                  </a>
                </li>
              ))}
            </ol>
          </nav>

          {/* ── HUB NAV ── */}
          <nav aria-label="ACT hub pages">
            <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-3">
              ACT resources on GradesNova
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
              {[
                {
                  href: '/exams/act/guide',
                  icon: '📘',
                  color: COLOR,
                  badge: 'Full guide',
                  title: 'Complete ACT Guide 2026',
                  desc: 'ACT format, Enhanced ACT changes, section breakdowns, and ACT vs SAT comparison.',
                },
                {
                  href: '/exams/act/colleges',
                  icon: '🎓',
                  color: '#a855f7',
                  badge: 'College match',
                  title: 'What Colleges Can I Get Into?',
                  desc: 'Every ACT score 1–36, broken down with example schools and percentile.',
                },
                {
                  href: '/exams/act/prep-tips',
                  icon: '🎯',
                  color: '#f59e0b',
                  badge: 'Strategy',
                  title: 'ACT Prep Tips 2026',
                  desc: 'Section-by-section strategies, timing tactics, and a 10-week study plan.',
                },
                {
                  href: '/exams/act/scores',
                  icon: '📅',
                  color: '#34d399',
                  badge: 'Score release',
                  title: 'ACT Score Release Guide',
                  desc: 'When scores come out, how to read your report, superscoring, and what to do next.',
                },
              ].map(page => (
                <Link key={page.href} href={page.href}
                  className="bg-[#12141f] border border-white/8 rounded-xl p-4 hover:border-white/20 transition-all hover:-translate-y-0.5 group flex gap-3">
                  <span className="text-xl shrink-0 mt-0.5" aria-hidden="true">{page.icon}</span>
                  <div>
                    <span className="text-[10px] font-semibold px-1.5 py-0.5 rounded-full border mb-1 inline-block"
                      style={{ backgroundColor: `${page.color}15`, borderColor: `${page.color}30`, color: page.color }}>
                      {page.badge}
                    </span>
                    <p className="text-xs font-bold text-white group-hover:brightness-110 leading-snug mb-0.5">
                      {page.title}
                    </p>
                    <p className="text-[10px] text-slate-500 leading-relaxed">{page.desc}</p>
                  </div>
                </Link>
              ))}
            </div>
          </nav>

          {/* ── TRUST / AUTHOR BLOCK ── */}
          <aside className="bg-[#12141f] border border-white/8 rounded-2xl p-5 flex flex-col sm:flex-row gap-5 items-start">
            <div className="w-12 h-12 rounded-xl shrink-0 flex items-center justify-center text-2xl"
              style={{ backgroundColor: `${COLOR}15` }} aria-hidden="true">🎓</div>
            <div>
              <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-1">About this calculator</p>
              <p className="text-sm text-slate-300 leading-relaxed mb-2">
                This ACT score calculator is maintained by the{' '}
                <strong className="text-white">GradesNova Editorial Team</strong> — a group of test
                prep researchers and college admissions specialists. Score conversion data is derived
                from official{' '}
                <strong className="text-white">ACT, Inc. national norms</strong>, updated annually.
                Percentile tables are sourced from the ACT National Norms report (2025–2026 testing
                year). College score ranges are drawn from Common Data Set filings and institutional
                admissions pages for the admitted class of 2024–2025.
              </p>
              <div className="flex flex-wrap gap-2">
                {[
                  ['📊 Official ACT national norms', '#34d399'],
                  ['🏫 Common Data Set college ranges', '#6366f1'],
                  ['🔄 Updated June 2026', COLOR],
                ].map(([label, color]) => (
                  <span key={label} className="text-[10px] px-2.5 py-1 rounded-full border font-medium"
                    style={{ backgroundColor: `${color}12`, borderColor: `${color}25`, color }}>
                    {label}
                  </span>
                ))}
              </div>
            </div>
          </aside>

          {/* ── CALCULATOR (client island) ── */}
          <section id="calculator" aria-labelledby="calculator-heading">
            <h2 id="calculator-heading" className="text-2xl font-bold text-white mb-2">
              ACT Score Calculator: Enter Your Raw Scores
            </h2>
            <p className="text-slate-400 text-sm mb-6 max-w-3xl">
              Enter the number of questions you answered correctly in each section of the{' '}
              <strong className="text-white">Enhanced ACT</strong> (post-April 2025: English 50 Q,
              Math 45 Q, Reading 36 Q, Science 40 Q optional). The ACT score calculator converts
              your raw correct answers to scaled scores (1–36) and computes your composite and
              national percentile instantly.
            </p>
            <ACTCalculatorClient />
          </section>

          {/* ── 2025 ENHANCED ACT ── */}
          <section id="enhanced-act" aria-labelledby="enhanced-heading">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-xs font-bold px-2.5 py-1 rounded-full border"
                style={{ backgroundColor: '#f59e0b15', borderColor: '#f59e0b30', color: '#f59e0b' }}>
                🆕 2025 Format Change
              </span>
              <h2 id="enhanced-heading" className="text-2xl font-bold text-white">
                The 2025 Enhanced ACT: What Changed?
              </h2>
            </div>
            <p className="text-slate-400 text-sm mb-6 max-w-3xl leading-relaxed">
              Starting in <strong className="text-white">September 2025</strong>, ACT, Inc. began
              rolling out the <strong className="text-white">Enhanced ACT</strong> (sometimes
              referred to as ACT Next). This is the most significant format change to the test since
              2015. If you are testing in the 2025–2026 academic year, you will likely take the
              Enhanced ACT — here is exactly what changed.
            </p>

            <div className="grid sm:grid-cols-2 gap-4 mb-6">
              {/* Classic format */}
              <div className="bg-[#12141f] border border-white/8 rounded-2xl p-6">
                <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-4">
                  Classic ACT (before Sept 2025)
                </p>
                <div className="space-y-3">
                  {[
                    { section: 'English',     q: 75, time: '45 min' },
                    { section: 'Mathematics', q: 60, time: '60 min' },
                    { section: 'Reading',     q: 40, time: '35 min' },
                    { section: 'Science',     q: 40, time: '35 min' },
                  ].map(r => (
                    <div key={r.section}
                      className="flex items-center justify-between py-1.5 border-b border-white/5 last:border-0">
                      <span className="text-sm text-slate-300">{r.section}</span>
                      <div className="text-right">
                        <span className="text-xs font-mono text-slate-400">{r.q} Q</span>
                        <span className="text-[10px] text-slate-600 ml-2">{r.time}</span>
                      </div>
                    </div>
                  ))}
                  <div className="pt-2 flex items-center justify-between">
                    <span className="text-sm font-semibold text-white">Total</span>
                    <span className="text-sm font-bold text-white">215 Q · ~2h 55min</span>
                  </div>
                  <p className="text-[10px] text-slate-600 pt-1">
                    Composite = average of all 4 sections (English, Math, Reading, Science).
                  </p>
                </div>
              </div>

              {/* Enhanced format */}
              <div className="bg-[#12141f] border rounded-2xl p-6" style={{ borderColor: `${COLOR}40` }}>
                <p className="text-xs font-semibold uppercase tracking-wider mb-4" style={{ color: COLOR }}>
                  Enhanced ACT (Sept 2025 onwards)
                </p>
                <div className="space-y-3">
                  {[
                    { section: 'English',     q: 50, time: '35 min', change: '-25 Q' },
                    { section: 'Mathematics', q: 45, time: '50 min', change: '-15 Q' },
                    { section: 'Reading',     q: 36, time: '40 min', change: '-4 Q' },
                    { section: 'Science',     q: 40, time: '40 min', change: 'optional in US', optional: true },
                  ].map(r => (
                    <div key={r.section}
                      className="flex items-center justify-between py-1.5 border-b border-white/5 last:border-0">
                      <div>
                        <span className="text-sm text-slate-300">{r.section}</span>
                        {r.optional && (
                          <span className="ml-2 text-[10px] text-amber-400/80 font-medium">(optional)</span>
                        )}
                      </div>
                      <div className="text-right">
                        <span className="text-xs font-mono text-slate-400">{r.q} Q</span>
                        <span className="text-[10px] ml-2 font-semibold" style={{ color: COLOR }}>
                          {r.change}
                        </span>
                      </div>
                    </div>
                  ))}
                  <div className="pt-2 flex items-center justify-between">
                    <span className="text-sm font-semibold text-white">Total</span>
                    <span className="text-sm font-bold text-white">~171 Q · ~2h 05min</span>
                  </div>
                  <p className="text-[10px] pt-1" style={{ color: '#fbbf24' }}>
                    Composite = average of only 3 sections (English, Math, Reading). Science is
                    scored separately and does not count toward your composite, even if you take it.
                  </p>
                </div>
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-4 mb-6">
              {[
                {
                  icon: '⏱',
                  title: 'Shorter test overall',
                  desc: 'Total testing time dropped from approximately 2 hours 55 minutes to approximately 2 hours 5 minutes. Students still receive a break between sections.',
                  color: COLOR,
                },
                {
                  icon: '🔬',
                  title: 'Science no longer counts toward your composite',
                  desc: 'On the Enhanced ACT, the composite is the average of English, Math, and Reading only. US students can still choose to take the optional Science section — it produces a separate Science score and a combined STEM score with Math, but neither affects your composite.',
                  color: '#f59e0b',
                },
                {
                  icon: '💻',
                  title: 'Computer or paper testing',
                  desc: 'Students can now choose to test digitally or on paper at most test centres. The digital version uses a similar interface to the paper test — no adaptive difficulty (unlike the Digital SAT).',
                  color: '#a855f7',
                },
                {
                  icon: '📊',
                  title: 'Same 1–36 scoring scale',
                  desc: 'Each section is still scored on a 1–36 scale. The conversion tables changed to reflect fewer questions per section, but the percentile benchmarks remain comparable across formats.',
                  color: '#34d399',
                },
              ].map(c => (
                <div key={c.title} className="bg-[#12141f] border border-white/8 rounded-xl p-5 flex gap-4">
                  <span className="text-2xl shrink-0 mt-0.5" aria-hidden="true">{c.icon}</span>
                  <div>
                    <h3 className="text-sm font-semibold text-white mb-1.5">{c.title}</h3>
                    <p className="text-xs text-slate-500 leading-relaxed">{c.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <h3 className="text-lg font-semibold text-white mb-3">
              Classic ACT → Enhanced ACT Raw Score Conversion
            </h3>
            <p className="text-slate-400 text-sm mb-5 leading-relaxed max-w-3xl">
              Because each section now has fewer questions, the raw score needed to reach a given
              scaled score has changed. Use this table if you have practice test results from the
              classic ACT format and want to estimate your equivalent Enhanced ACT score.
            </p>
            <div className="overflow-x-auto rounded-xl border border-white/8 mb-3">
              <table className="w-full text-sm min-w-[580px]"
                aria-label="Classic ACT to Enhanced ACT raw score conversion by section">
                <thead>
                  <tr className="bg-white/4 border-b border-white/8">
                    <th scope="col" className="text-left px-4 py-3 text-xs font-semibold text-slate-400 uppercase">
                      Scaled score
                    </th>
                    <th scope="col" className="text-center px-4 py-3 text-xs font-semibold text-slate-400 uppercase">
                      English<br />
                      <span className="font-normal normal-case text-slate-500">Classic 75 → Enhanced 50</span>
                    </th>
                    <th scope="col" className="text-center px-4 py-3 text-xs font-semibold text-slate-400 uppercase">
                      Math<br />
                      <span className="font-normal normal-case text-slate-500">Classic 60 → Enhanced 45</span>
                    </th>
                    <th scope="col" className="text-center px-4 py-3 text-xs font-semibold text-slate-400 uppercase">
                      Reading<br />
                      <span className="font-normal normal-case text-slate-500">Classic 40 → Enhanced 36</span>
                    </th>
                    <th scope="col" className="text-center px-4 py-3 text-xs font-semibold text-slate-400 uppercase">
                      Science<br />
                      <span className="font-normal normal-case text-slate-500">Classic 40 → Enhanced 40</span>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { sc: 36, ec: '50',    em: '45',    er: '36',    es: '40',    cc: '75',    cm: '60',    cr: '40',    cs: '40' },
                    { sc: 34, ec: '48–49', em: '43–44', er: '34–35', es: '37–38', cc: '72–73', cm: '56–57', cr: '38',    cs: '38' },
                    { sc: 32, ec: '44–46', em: '39–41', er: '31–33', es: '33–34', cc: '68–69', cm: '52–53', cr: '36',    cs: '36' },
                    { sc: 30, ec: '39–42', em: '35–37', er: '27–29', es: '29–30', cc: '63–65', cm: '47–49', cr: '34',    cs: '33–34' },
                    { sc: 28, ec: '34–37', em: '30–32', er: '23–26', es: '25–26', cc: '58–60', cm: '43–45', cr: '31–32', cs: '30–31' },
                    { sc: 26, ec: '29–32', em: '26–28', er: '19–22', es: '21–22', cc: '52–55', cm: '38–40', cr: '27–29', cs: '26–28' },
                    { sc: 24, ec: '24–27', em: '21–23', er: '16–18', es: '17–18', cc: '46–49', cm: '33–35', cr: '24–26', cs: '23–24' },
                    { sc: 22, ec: '19–22', em: '17–19', er: '13–15', es: '13–14', cc: '40–43', cm: '28–30', cr: '20–22', cs: '19–21' },
                    { sc: 20, ec: '15–17', em: '13–15', er: '10–12', es: '10–11', cc: '33–36', cm: '23–25', cr: '17–19', cs: '16–18' },
                    { sc: 18, ec: '11–13', em: '9–11',  er: '7–9',   es: '7–8',   cc: '27–30', cm: '18–20', cr: '14–15', cs: '13–14' },
                    { sc: 16, ec: '7–9',   em: '6–7',   er: '5–6',   es: '5–6',   cc: '21–24', cm: '13–15', cr: '11–12', cs: '10–11' },
                  ].map((row, i) => (
                    <tr key={row.sc}
                      className={`border-b border-white/5 last:border-0 ${i % 2 === 0 ? '' : 'bg-white/2'}`}>
                      <td className="px-4 py-2.5 font-mono font-bold" style={{ color: COLOR }}>{row.sc}</td>
                      <td className="px-4 py-2.5 text-center text-xs font-mono">
                        <span className="text-white">{row.ec}</span>
                        <span className="text-slate-600 ml-1">({row.cc})</span>
                      </td>
                      <td className="px-4 py-2.5 text-center text-xs font-mono">
                        <span className="text-white">{row.em}</span>
                        <span className="text-slate-600 ml-1">({row.cm})</span>
                      </td>
                      <td className="px-4 py-2.5 text-center text-xs font-mono">
                        <span className="text-white">{row.er}</span>
                        <span className="text-slate-600 ml-1">({row.cr})</span>
                      </td>
                      <td className="px-4 py-2.5 text-center text-xs font-mono">
                        <span className="text-white">{row.es}</span>
                        <span className="text-slate-600 ml-1">({row.cs})</span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-xs text-slate-600">
              Enhanced ACT raw counts are approximate and based on{' '}
              <a
                href="https://www.act.org/content/dam/act/unsecured/documents/ACT-Ntl-Enhancements-Scoring-Key-and-Conversion-Tables.pdf"
                className="text-slate-500 hover:text-slate-300 underline underline-offset-2"
                target="_blank" rel="noopener noreferrer">
                ACT, Inc. published score guides
              </a>
              . Classic ACT raw counts shown in parentheses for comparison. Actual conversions vary
              by test form due to statistical equating.
            </p>
          </section>

          {/* ── HOW IS YOUR ACT SCORE CALCULATED ── */}
          <section id="how-scored" aria-labelledby="scoring-heading">
            <h2 id="scoring-heading" className="text-2xl font-bold text-white mb-4">
              How Does the ACT Score Calculator Work?
            </h2>
            <p className="text-slate-400 text-sm mb-5 max-w-3xl leading-relaxed">
              Understanding how ACT scoring works helps you set realistic improvement targets and
              interpret your score report accurately. The ACT uses a two-stage process — raw scores
              are first tallied, then converted to scaled scores — before a final composite is
              calculated from your section scores. The ACT score calculator above automates all
              three steps below.
            </p>
            <div className="space-y-5 mb-8">
              <div className="bg-[#12141f] border border-white/8 rounded-2xl p-6">
                <h3 className="text-base font-semibold text-white mb-3">Step 1: Raw Score</h3>
                <p className="text-sm text-slate-400 leading-relaxed mb-3">
                  Your raw score for each section is simply the number of questions you answered
                  correctly. There is{' '}
                  <strong className="text-white">no penalty for wrong or skipped answers</strong> on
                  the ACT, which means you should always fill in every answer — even a guess gives
                  you a 20–25% chance of earning a point.
                </p>
                <p className="text-sm text-slate-400 leading-relaxed">
                  Because different test forms can vary slightly in difficulty, ACT, Inc. uses a
                  statistical process called <strong className="text-white">equating</strong> to
                  ensure that a 28 earned in April represents exactly the same level of achievement
                  as a 28 earned in October.
                </p>
              </div>

              <div className="bg-[#12141f] border border-white/8 rounded-2xl p-6">
                <h3 className="text-base font-semibold text-white mb-3">
                  Step 2: Scaled Section Scores (1–36)
                </h3>
                <p className="text-sm text-slate-400 leading-relaxed mb-3">
                  Each raw score is converted to a scaled score on the 1–36 range using a conversion
                  table specific to that test form. The conversion is not linear — it shifts
                  depending on the difficulty of a particular form.
                </p>
                <p className="text-sm text-slate-400 leading-relaxed">
                  Each section produces its own 1–36 score plus sub-scores and cross-test scores
                  that appear on your detailed score report. These supplemental scores do not affect
                  your composite.
                </p>
              </div>

              <div className="bg-[#12141f] border border-white/8 rounded-2xl p-6">
                <h3 className="text-base font-semibold text-white mb-3">Step 3: ACT Composite Score</h3>
                <p className="text-sm text-slate-400 leading-relaxed mb-2">
                  On the <strong className="text-white">Enhanced ACT (2025 onward)</strong>, your
                  composite is the{' '}
                  <strong className="text-white">simple arithmetic average of English, Math, and
                  Reading only</strong>, rounded to the nearest whole number. For example: English 28
                  + Math 30 + Reading 26 = 84 ÷ 3 = <strong className="text-white">28.0</strong>.
                  Science is reported separately and does not factor into the composite, even if you
                  take it.
                </p>
                <p className="text-sm text-slate-400 leading-relaxed">
                  If you tested before September 2025 (classic ACT), the composite instead averages
                  all <strong className="text-white">four</strong> sections, including Science. This
                  rounding rule matters either way — improving one section by a few points can move
                  your composite up by a full point.
                </p>
              </div>
            </div>

            <h3 className="text-lg font-semibold text-white mb-4">
              ACT Raw Score to Scaled Score Conversion (Classic Format)
            </h3>
            <p className="text-slate-400 text-sm mb-5 leading-relaxed max-w-3xl">
              Approximate raw-score-to-scaled-score conversions per section on a typical test form.
              See the Enhanced ACT section above for updated question counts effective September 2025.
            </p>
            <div className="overflow-x-auto rounded-xl border border-white/8 mb-4">
              <table className="w-full text-sm min-w-[540px]"
                aria-label="ACT raw score to scaled score conversion table">
                <thead>
                  <tr className="bg-white/4 border-b border-white/8">
                    <th scope="col"
                      className="text-left px-4 py-3 text-xs font-semibold text-slate-400 uppercase tracking-wider">
                      Scaled score
                    </th>
                    {['English (75 Q)', 'Math (60 Q)', 'Reading (40 Q)', 'Science (40 Q)'].map(h => (
                      <th key={h} scope="col"
                        className="text-center px-4 py-3 text-xs font-semibold text-slate-400 uppercase tracking-wider">
                        {h.split(' (')[0]}<br /><span className="font-normal normal-case">({h.split('(')[1]}</span>
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {[
                    { scaled: 36, eng: '75',    math: '60',    read: '40',    sci: '40' },
                    { scaled: 35, eng: '74',    math: '58–59', read: '39',    sci: '39' },
                    { scaled: 34, eng: '72–73', math: '56–57', read: '38',    sci: '38' },
                    { scaled: 33, eng: '70–71', math: '54–55', read: '37',    sci: '37' },
                    { scaled: 32, eng: '68–69', math: '52–53', read: '36',    sci: '36' },
                    { scaled: 31, eng: '66–67', math: '50–51', read: '35',    sci: '35' },
                    { scaled: 30, eng: '63–65', math: '47–49', read: '34',    sci: '33–34' },
                    { scaled: 28, eng: '58–60', math: '43–45', read: '31–32', sci: '30–31' },
                    { scaled: 26, eng: '52–55', math: '38–40', read: '27–29', sci: '26–28' },
                    { scaled: 24, eng: '46–49', math: '33–35', read: '24–26', sci: '23–24' },
                    { scaled: 22, eng: '40–43', math: '28–30', read: '20–22', sci: '19–21' },
                    { scaled: 20, eng: '33–36', math: '23–25', read: '17–19', sci: '16–18' },
                    { scaled: 18, eng: '27–30', math: '18–20', read: '14–15', sci: '13–14' },
                    { scaled: 16, eng: '21–24', math: '13–15', read: '11–12', sci: '10–11' },
                    { scaled: 14, eng: '15–18', math: '9–11',  read: '8–9',   sci: '7–8' },
                    { scaled: 12, eng: '9–12',  math: '5–7',   read: '5–6',   sci: '4–5' },
                  ].map((row, i) => (
                    <tr key={row.scaled}
                      className={`border-b border-white/5 last:border-0 ${i % 2 === 0 ? '' : 'bg-white/2'}`}>
                      <td className="px-4 py-2.5 font-mono font-bold" style={{ color: COLOR }}>
                        {row.scaled}
                      </td>
                      <td className="px-4 py-2.5 text-center text-xs text-slate-300 font-mono">{row.eng}</td>
                      <td className="px-4 py-2.5 text-center text-xs text-slate-300 font-mono">{row.math}</td>
                      <td className="px-4 py-2.5 text-center text-xs text-slate-300 font-mono">{row.read}</td>
                      <td className="px-4 py-2.5 text-center text-xs text-slate-300 font-mono">{row.sci}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-xs text-slate-600">
              Approximate values based on typical ACT test-form difficulty. Actual conversions vary
              by administration date. Source:{' '}
              <a href="https://www.act.org/content/dam/act/unsecured/documents/ACT-Ntl-Enhancements-Scoring-Key-and-Conversion-Tables.pdf"
                className="text-slate-500 hover:text-slate-300 underline underline-offset-2"
                target="_blank" rel="noopener noreferrer">
                ACT, Inc. published score conversion guides
              </a>
              .
            </p>
          </section>

          {/* ── NATIONAL AVERAGE ── */}
          <section id="national-average" aria-labelledby="avg-heading">
            <h2 id="avg-heading" className="text-2xl font-bold text-white mb-4">
              National Average ACT Score (2025–2026)
            </h2>
            <p className="text-slate-400 text-sm mb-6 leading-relaxed max-w-3xl">
              The national average ACT composite score in 2025–2026 is{' '}
              <strong className="text-white">21 out of 36</strong>, placing the average student at
              the <strong className="text-white">51st percentile</strong> nationally. Scoring above
              21 means you have outperformed more than half of all ACT test takers. The national
              average has stayed between 20 and 21 for several consecutive years.
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
              {[
                { icon: '📊', label: 'National avg composite', value: '21', sub: '51st percentile', color: COLOR },
                { icon: '📝', label: 'Avg English score',      value: '20', sub: '49th percentile', color: '#a855f7' },
                { icon: '📐', label: 'Avg Math score',         value: '20', sub: '37th percentile', color: '#6366f1' },
                { icon: '📖', label: 'Avg Reading score',      value: '21', sub: '46th percentile', color: '#34d399' },
              ].map(card => (
                <article key={card.label} className="bg-[#12141f] border border-white/8 rounded-xl p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-lg" aria-hidden="true">{card.icon}</span>
                    <span className="text-xs text-slate-400 font-medium">{card.label}</span>
                  </div>
                  <p className="text-2xl font-bold font-mono" style={{ color: card.color }}>{card.value}</p>
                  <p className="text-xs text-slate-500 mt-0.5">{card.sub}</p>
                </article>
              ))}
            </div>
          </section>

          {/* ── WHAT IS A GOOD ACT SCORE ── */}
          <section id="what-is-good" aria-labelledby="tiers-heading">
            <h2 id="tiers-heading" className="text-2xl font-bold text-white mb-4">
              What Is a Good ACT Score?
            </h2>
            <p className="text-slate-400 text-sm mb-6 max-w-3xl">
              A good ACT score depends entirely on your target colleges. Here is how score ranges
              break down nationally for the 2025–2026 admissions cycle.
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
              {[
                { range: '33–36', label: 'Exceptional',   desc: 'Top 3% nationally. Competitive at Ivy League, MIT, Stanford, and all highly selective universities. Qualifies for merit aid at virtually every school.', color: '#34d399' },
                { range: '28–32', label: 'Strong',        desc: 'Top 4–12%. Competitive at selective schools — Michigan, UCLA, Georgetown, Notre Dame, and most top-30 universities.', color: COLOR },
                { range: '24–27', label: 'Above average', desc: 'Top 15–26%. Competitive at many solid four-year universities. At or above the median for most state flagship schools.', color: '#6366f1' },
                { range: '21–23', label: 'Average',       desc: 'Around the national average of 21. Sufficient for many four-year colleges. Most students see meaningful improvement with focused prep.', color: '#a855f7' },
                { range: '18–20', label: 'Below average', desc: 'Below the national average. Many four-year schools accept this range. A 3–5 point gain is common with structured preparation.', color: '#f59e0b' },
                { range: '1–17',  label: 'Needs work',    desc: 'Significantly below average. Community college pathways available. Structured prep with a tutor yields consistent improvement.', color: '#ef4444' },
              ].map(tier => (
                <article key={tier.range} className="bg-[#12141f] border border-white/7 rounded-xl p-5">
                  <div className="text-xs font-mono font-semibold mb-1.5 px-2 py-1 rounded-md w-fit"
                    style={{ backgroundColor: `${tier.color}15`, color: tier.color }}>
                    {tier.range}
                  </div>
                  <h3 className="text-sm font-semibold text-white mb-1.5">{tier.label}</h3>
                  <p className="text-xs text-slate-500 leading-relaxed">{tier.desc}</p>
                </article>
              ))}
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                { icon: '📊', label: 'National average',  value: '21',    sub: 'Composite (51st pct)',        color: COLOR },
                { icon: '🎯', label: 'Top 10% threshold', value: '29',    sub: '91st percentile',            color: '#34d399' },
                { icon: '🏆', label: 'Ivy League range',  value: '34–36', sub: '98th–99th percentile',       color: '#a855f7' },
                { icon: '📅', label: 'Test dates / year', value: '7',     sub: 'Feb Apr Jun Jul Sep Oct Dec', color: '#f59e0b' },
              ].map(card => (
                <article key={card.label} className="bg-[#12141f] border border-white/8 rounded-xl p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-lg" aria-hidden="true">{card.icon}</span>
                    <span className="text-xs text-slate-400 font-medium">{card.label}</span>
                  </div>
                  <p className="text-2xl font-bold font-mono" style={{ color: card.color }}>{card.value}</p>
                  <p className="text-xs text-slate-500 mt-0.5">{card.sub}</p>
                </article>
              ))}
            </div>
          </section>

          {/* ── FULL PERCENTILE TABLE ── */}
          <section id="percentile-table" aria-labelledby="chart-heading">
            <h2 id="chart-heading" className="text-2xl font-bold text-white mb-2">
              ACT Score Percentile Chart — Full Table
            </h2>
            <p className="text-slate-400 text-sm mb-6">
              Complete ACT composite score to national percentile table based on official ACT, Inc.
              national norms. The national average ACT score is 21. A score of 28 equals the{' '}
              {ordinal(88)} percentile. A score of 33 equals the {ordinal(97)} percentile.
            </p>
            <div className="overflow-hidden rounded-xl border border-white/8">
              <table className="w-full text-sm"
                aria-label="ACT composite score percentile chart 2025-2026">
                <thead>
                  <tr className="bg-white/4 border-b border-white/8">
                    {['ACT score', 'Percentile', 'Description', 'Typical schools'].map((h, i) => (
                      <th key={h} scope="col"
                        className={`text-left px-4 py-3 text-xs font-semibold text-slate-400 uppercase tracking-wider${i >= 2 ? (i === 2 ? ' hidden sm:table-cell' : ' hidden md:table-cell') : ''}`}>
                        {h}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {ACT_FULL_TABLE.map((row, i) => (
                    <tr key={row.score}
                      className={`border-b border-white/5 last:border-0 ${i % 2 === 0 ? '' : 'bg-white/2'}`}>
                      <td className="px-4 py-2.5 font-mono font-medium" style={{ color: COLOR }}>
                        {row.score}
                      </td>
                      <td className="px-4 py-2.5 font-semibold text-slate-200">{ordinal(row.pct)}</td>
                      <td className="px-4 py-2.5 text-slate-500 hidden sm:table-cell text-xs">{row.tier}</td>
                      <td className="px-4 py-2.5 text-slate-500 hidden md:table-cell text-xs">{row.schools}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-xs text-slate-600 mt-2">
              Source:{' '}
              <a href="https://www.act.org/content/dam/act/unsecured/documents/ACT-Ntl-Enhancements-Scoring-Key-and-Conversion-Tables.pdf"
                className="text-slate-500 hover:text-slate-300 underline underline-offset-2"
                target="_blank" rel="noopener noreferrer">
                ACT National Norms
              </a>
              , updated for 2025–2026 admissions cycle.
            </p>
          </section>

          {/* ── COLLEGES ── */}
          <section id="colleges" aria-labelledby="colleges-heading">
            <h2 id="colleges-heading" className="text-2xl font-bold text-white mb-2">
              ACT Scores for Top Colleges (2025–2026)
            </h2>
            <p className="text-slate-400 text-sm mb-6">
              Middle 50% ACT composite ranges for admitted students at competitive US universities.
              Data from Common Data Set filings for the 2024–2025 admitted class.
            </p>
            <div className="overflow-x-auto rounded-xl border border-white/8">
              <table className="w-full text-sm min-w-[500px]"
                aria-label="ACT scores for top colleges 2025-2026">
                <thead>
                  <tr className="bg-white/4 border-b border-white/8">
                    <th scope="col"
                      className="text-left px-4 py-3 text-xs font-semibold text-slate-400 uppercase tracking-wider">
                      University
                    </th>
                    <th scope="col"
                      className="text-center px-4 py-3 text-xs font-semibold text-slate-400 uppercase tracking-wider">
                      Middle 50% ACT
                    </th>
                    <th scope="col"
                      className="text-center px-4 py-3 text-xs font-semibold text-slate-400 uppercase tracking-wider hidden sm:table-cell">
                      Admit rate
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {COLLEGES.map((row, i) => (
                    <tr key={row.school}
                      className={`border-b border-white/5 last:border-0 ${i % 2 === 0 ? '' : 'bg-white/2'}`}>
                      <td className="px-4 py-2.5 font-medium text-slate-200 text-sm">{row.school}</td>
                      <td className="px-4 py-2.5 text-center">
                        <span className="font-mono text-xs font-semibold px-2 py-0.5 rounded-md"
                          style={{ backgroundColor: 'rgba(255,255,255,0.06)', color: '#64748b' }}>
                          {row.range}
                        </span>
                      </td>
                      <td className="px-4 py-2.5 text-center text-xs text-slate-500 hidden sm:table-cell">
                        {row.rate}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-xs text-slate-600 mt-2">
              Data: Common Data Set filings and institutional websites, 2024–2025 admitted class.
            </p>
          </section>

          {/* ── ACT TEST DATES 2025–2026 ── */}
          <section id="test-dates" aria-labelledby="test-dates-heading">
            <h2 id="test-dates-heading" className="text-2xl font-bold text-white mb-2">
              ACT Test Dates 2025–2026
            </h2>
            <p className="text-slate-400 text-sm mb-6 max-w-3xl leading-relaxed">
              The ACT is offered seven times per year. Most students register at least 4–6 weeks
              before their preferred test date. Scores are typically available within 2–8 business
              days for the multiple-choice sections. Always verify dates and deadlines at{' '}
              <strong className="text-white">act.org</strong>.
            </p>
            <div className="overflow-x-auto rounded-xl border border-white/8">
              <table className="w-full text-sm"
                aria-label="ACT test dates and registration deadlines 2025-2026">
                <thead>
                  <tr className="bg-white/4 border-b border-white/8">
                    <th scope="col"
                      className="text-left px-4 py-3 text-xs font-semibold text-slate-400 uppercase tracking-wider">
                      Test date
                    </th>
                    <th scope="col"
                      className="text-left px-4 py-3 text-xs font-semibold text-slate-400 uppercase tracking-wider hidden sm:table-cell">
                      Registration deadline
                    </th>
                    <th scope="col"
                      className="text-left px-4 py-3 text-xs font-semibold text-slate-400 uppercase tracking-wider">
                      Score release (approx.)
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {ACT_TEST_DATES.map((row, i) => (
                    <tr key={row.date}
                      className={`border-b border-white/5 last:border-0 ${i % 2 === 0 ? '' : 'bg-white/2'}`}>
                      <td className="px-4 py-2.5 text-sm text-slate-200 font-medium">{row.date}</td>
                      <td className="px-4 py-2.5 text-sm text-slate-500 hidden sm:table-cell">{row.deadline}</td>
                      <td className="px-4 py-2.5 text-sm text-slate-500">{row.scores}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-xs text-slate-600 mt-2">
              Source: ACT, Inc. official test dates for the 2025–2026 academic year. Late
              registration fees apply after the standard deadline. Always verify at{' '}
              <a href="https://act.org" className="text-slate-500 hover:text-slate-300 underline underline-offset-2"
                target="_blank" rel="noopener noreferrer">
                act.org
              </a>
              .
            </p>
          </section>

          {/* ── ACT TO SAT CONVERSION ── */}
          <section id="act-sat" aria-labelledby="crosswalk-heading">
            <h2 id="crosswalk-heading" className="text-2xl font-bold text-white mb-2">
              ACT to SAT Score Conversion Chart
            </h2>
            <p className="text-slate-400 text-sm mb-6">
              Official College Board and ACT concordance table. Convert your ACT score to its SAT
              equivalent when deciding which test to submit or comparing scores across applications.
            </p>
            <div className="overflow-x-auto rounded-xl border border-white/8">
              <table className="w-full text-sm min-w-[300px]"
                aria-label="ACT to SAT score conversion chart 2025">
                <thead>
                  <tr className="bg-white/4 border-b border-white/8">
                    <th scope="col" className="text-center px-6 py-3 text-xs font-semibold uppercase tracking-wider"
                      style={{ color: COLOR }}>
                      ACT composite
                    </th>
                    <th scope="col"
                      className="text-center px-6 py-3 text-xs font-semibold text-indigo-400 uppercase tracking-wider">
                      SAT equivalent
                    </th>
                    <th scope="col"
                      className="text-center px-6 py-3 text-xs font-semibold text-slate-400 uppercase tracking-wider hidden sm:table-cell">
                      Percentile
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {ACT_SAT_CROSSWALK.map((row, i) => (
                    <tr key={row.act}
                      className={`border-b border-white/5 last:border-0 ${i % 2 === 0 ? '' : 'bg-white/2'}`}>
                      <td className="px-6 py-2.5 text-center font-mono font-semibold text-slate-200">
                        {row.act}
                      </td>
                      <td className="px-6 py-2.5 text-center font-mono font-bold text-indigo-400">
                        {row.sat}
                      </td>
                      <td className="px-6 py-2.5 text-center text-xs text-slate-500 hidden sm:table-cell">
                        {ordinal(row.pct)}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-xs text-slate-600 mt-2">
              Source: Official College Board / ACT concordance tables. Use our{' '}
              <Link href="/exams/sat" className="text-indigo-400 hover:text-indigo-300">
                SAT percentile calculator
              </Link>{' '}
              for full SAT score breakdowns.
            </p>
          </section>

          {/* ── AVERAGE ACT SCORE BY STATE ── */}
          <section id="state-averages" aria-labelledby="state-heading">
            <h2 id="state-heading" className="text-2xl font-bold text-white mb-2">
              Average ACT Score by State (2025–2026)
            </h2>
            <p className="text-slate-400 text-sm mb-6 leading-relaxed max-w-3xl">
              Average ACT scores vary widely by state, largely because states with mandatory ACT
              testing for all students tend to show lower average composites — the pool includes all
              students, not just college-bound ones. States with optional or low-participation ACT
              testing tend to score higher because only highly motivated students opt in.
            </p>
            <div className="overflow-x-auto rounded-xl border border-white/8 mb-3">
              <table className="w-full text-sm" aria-label="Average ACT score by state 2025-2026">
                <thead>
                  <tr className="bg-white/4 border-b border-white/8">
                    <th scope="col"
                      className="text-left px-4 py-3 text-xs font-semibold text-slate-400 uppercase tracking-wider">
                      State
                    </th>
                    <th scope="col"
                      className="text-center px-4 py-3 text-xs font-semibold text-slate-400 uppercase tracking-wider">
                      Avg ACT composite
                    </th>
                    <th scope="col"
                      className="text-center px-4 py-3 text-xs font-semibold text-slate-400 uppercase tracking-wider hidden sm:table-cell">
                      Participation rate
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {STATE_AVERAGES.map((row, i) => (
                    <tr key={row.state}
                      className={`border-b border-white/5 last:border-0 ${i % 2 === 0 ? '' : 'bg-white/2'}`}>
                      <td className="px-4 py-2.5 text-sm text-slate-200">{row.state}</td>
                      <td className="px-4 py-2.5 text-center font-mono font-semibold"
                        style={{ color: row.avg >= 25 ? '#34d399' : row.avg >= 21 ? COLOR : '#f59e0b' }}>
                        {row.avg.toFixed(1)}
                      </td>
                      <td className="px-4 py-2.5 text-center text-xs text-slate-500 hidden sm:table-cell">
                        {row.participation}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-xs text-slate-600">
              Source:{' '}
              <a href="https://www.act.org/content/dam/act/unsecured/documents/ACT-Ntl-Enhancements-Scoring-Key-and-Conversion-Tables.pdf"
                className="text-slate-500 hover:text-slate-300 underline underline-offset-2"
                target="_blank" rel="noopener noreferrer">
                ACT National Profile Report
              </a>
              . States with lower participation have a self-selection bias that inflates average scores.
            </p>
          </section>

          {/* ── ESSENTIAL RESOURCES ── */}
          <section aria-labelledby="resources-heading">
            <h2 id="resources-heading" className="text-2xl font-bold text-white mb-4">
              Essential ACT Resources
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-3">
              {[
                { name: 'ACT Study Guide',     path: '/guide',         icon: '📘' },
                { name: 'Revision Tips',       path: '/revision-tips', icon: '💡' },
                { name: 'Results Day Guide',   path: '/results-day',   icon: '📅' },
                { name: 'Prep Tips',           path: '/prep-tips',     icon: '🎯' },
                { name: 'Understanding Scores', path: '/scores',       icon: '📊' },
              ].map(res => (
                <Link key={res.path} href={`/exams/act${res.path}`}
                  className="bg-[#12141f] border border-white/8 rounded-xl p-4 flex flex-col items-center justify-center text-center hover:bg-white/5 transition-colors group">
                  <span className="text-2xl mb-2 group-hover:scale-110 transition-transform" aria-hidden="true">
                    {res.icon}
                  </span>
                  <span className="text-sm font-medium text-slate-300 group-hover:text-white transition-colors">
                    {res.name}
                  </span>
                </Link>
              ))}
            </div>
          </section>

          {/* ── HOW TO IMPROVE ── */}
          <section id="improve" aria-labelledby="improve-heading"
            className="bg-[#12141f] border border-white/7 rounded-2xl p-6 md:p-8">
            <h2 id="improve-heading" className="text-2xl font-bold text-white mb-4">
              How to Improve Your ACT Score
            </h2>
            <p className="text-slate-400 text-sm mb-6 max-w-3xl">
              Most students improve their ACT composite by 2–5 points on a retake with targeted
              preparation. On the Enhanced ACT, the composite averages only three sections, so
              improving even one section by 3 points moves your composite by a full point.
            </p>

            <div className="mb-6">
              <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-3">
                Average ACT score gain by hours of official practice
              </p>
              <div className="space-y-2.5">
                {IMPROVEMENT_DATA.map(s => (
                  <div key={s.hours} className="flex items-center gap-3">
                    <span className="text-xs text-slate-400 w-20 shrink-0">{s.hours}</span>
                    <div className="flex-1 h-2 bg-white/8 rounded-full overflow-hidden">
                      <div className="h-full rounded-full"
                        style={{ width: `${s.pct}%`, backgroundColor: COLOR }} />
                    </div>
                    <span className="text-xs font-semibold w-14 text-right shrink-0" style={{ color: COLOR }}>
                      {s.gain}
                    </span>
                  </div>
                ))}
              </div>
              <p className="text-[10px] text-slate-600 mt-2">
                Based on ACT research on official practice test usage. Gains are averages; individual
                results vary.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              {[
                {
                  step: '01',
                  title: 'Identify your weakest section',
                  desc: 'Use official ACT practice tests to identify which section is limiting your composite. On the Enhanced ACT, a 3-point gain in one section raises your composite by a full point — focused prep beats studying everything equally.',
                },
                {
                  step: '02',
                  title: 'Time yourself strictly',
                  desc: "The ACT is faster-paced than the SAT. English is only 36 seconds per question. Practice under strict time conditions from day one. Pacing is the #1 factor that separates students who improve from those who don't.",
                },
                {
                  step: '03',
                  title: 'Use official ACT prep materials',
                  desc: 'ACT, Inc. publishes official practice tests on act.org. These are the most accurate representation of what you will see on test day. Third-party materials vary widely in quality — always anchor your prep to official tests.',
                },
                {
                  step: '04',
                  title: 'Retake strategically',
                  desc: 'Many colleges superscore the ACT. If your school superscores, retaking even with improvement in just one section can meaningfully raise your effective composite. Always answer every question — there is no wrong-answer penalty.',
                },
              ].map(item => (
                <div key={item.step} className="flex gap-4">
                  <div className="text-2xl font-black font-mono shrink-0 mt-0.5"
                    style={{ color: `${COLOR}50` }}>
                    {item.step}
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-white mb-1.5">{item.title}</h3>
                    <p className="text-xs text-slate-500 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-6 pt-5 border-t border-white/8 flex flex-wrap gap-3">
              <Link href="/exams/act/prep-tips"
                className="text-xs px-3.5 py-1.5 rounded-full font-medium border transition-all hover:scale-105"
                style={{ backgroundColor: '#f59e0b12', borderColor: '#f59e0b25', color: '#f59e0b' }}>
                Full ACT Prep Tips Guide →
              </Link>
              <Link href="/exams/act/guide"
                className="text-xs px-3.5 py-1.5 rounded-full font-medium border transition-all hover:scale-105"
                style={{ backgroundColor: `${COLOR}12`, borderColor: `${COLOR}25`, color: COLOR }}>
                Complete ACT Guide →
              </Link>
            </div>
          </section>

          {/* ── FAQ (client island — needs accordion state) ── */}
          <FAQSection />

          {/* ── OTHER CALCULATORS ── */}
          <section className="bg-[#12141f] border border-white/7 rounded-2xl p-6"
            aria-labelledby="other-tools-heading">
            <h2 id="other-tools-heading" className="text-sm font-semibold text-slate-300 mb-4">
              More free score calculators — SAT, GRE, GMAT &amp; more
            </h2>
            <div className="flex flex-wrap gap-2">
              {[
                { id: 'sat',      name: 'SAT Score Calculator',  color: '#6366f1' },
                { id: 'gre',      name: 'GRE Score Calculator',  color: '#a855f7' },
                { id: 'gmat',     name: 'GMAT Score Calculator', color: '#f59e0b' },
                { id: 'lsat',     name: 'LSAT Score Calculator', color: '#ef4444' },
                { id: 'gcse',     name: 'GCSE Grade Calculator', color: '#34d399' },
                { id: 'a-levels', name: 'A-Level Calculator',    color: '#ec4899' },
                { id: 'psat',     name: 'PSAT Score Calculator', color: '#6366f1' },
                { id: 'ap',       name: 'AP Score Calculator',   color: '#f59e0b' },
              ].map(e => (
                <Link key={e.id} href={`/exams/${e.id}`}
                  className="px-3.5 py-1.5 rounded-full text-xs font-medium border transition-all hover:scale-105"
                  style={{ backgroundColor: `${e.color}12`, borderColor: `${e.color}25`, color: e.color }}>
                  {e.name}
                </Link>
              ))}
            </div>
          </section>

        </div>
        <Footer />
      </main>
    </>
  );
}
