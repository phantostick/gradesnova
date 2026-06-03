// app/exams/gcse/results-day/page.tsx
// GCSE RESULTS DAY 2026 — Deep Dive Content Page
// Targets: "gcse results day 2026", "gcse results day time", "what to do if you miss your grades gcse",
//          "gcse remark deadline", "gcse results day august 2026", "gcse clearing 2026"

import type { Metadata } from 'next';
import Link from 'next/link';
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';

export const metadata: Metadata = {
  title: 'GCSE Results Day 2026 | Date, Time & What To Do | GradesNova',
  description:
    'Everything you need to know about GCSE Results Day 2026. The date is Thursday 27 August 2026. What time grades are released, what to do if you miss your sixth form offer, remark deadlines, and how to read your results slip.',
  alternates: { canonical: 'https://gradesnova.com/exams/gcse/results-day' },
  openGraph: {
    title: 'GCSE Results Day 2026 | Date, Time & What To Do',
    description:
      'GCSE Results Day is Thursday 27 August 2026. Everything on timings, what to do if results disappoint, appeals, remarks, and next steps.',
    url: 'https://gradesnova.com/exams/gcse/results-day',
    type: 'article',
    siteName: 'GradesNova',
  },
  robots: { index: true, follow: true },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'GCSE Results Day 2026: Date, Time, What To Do & Remark Deadlines',
  description:
    'The complete guide to GCSE Results Day 2026 — when grades are released, how to read your results, what to do if you miss your sixth form offer, and how to request a remark.',
  url: 'https://gradesnova.com/exams/gcse/results-day',
  author: { '@type': 'Organization', name: 'GradesNova' },
  publisher: { '@type': 'Organization', name: 'GradesNova', url: 'https://gradesnova.com' },
  dateModified: '2026-05-26',
};

const jsonLdEvent = {
  '@context': 'https://schema.org',
  '@type': 'Event',
  name: 'GCSE Results Day 2026',
  startDate: '2026-08-27T08:00:00+01:00',
  endDate: '2026-08-27T17:00:00+01:00',
  description: 'GCSE results released across England, Wales and Northern Ireland. Grade boundaries published simultaneously by AQA, Edexcel, OCR and WJEC at 8:00am.',
  location: { '@type': 'VirtualLocation', url: 'https://gradesnova.com/exams/gcse/results-day' },
  organizer: { '@type': 'Organization', name: 'GradesNova', url: 'https://gradesnova.com' },
};

const jsonLdFAQ = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'When is GCSE Results Day 2026?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'GCSE Results Day 2026 is Thursday 27 August 2026. Most schools open from 8:00am to distribute results. Grade boundaries for all exam boards — AQA, Edexcel, OCR, and WJEC — are published simultaneously at 8:00am on the same day.',
      },
    },
    {
      '@type': 'Question',
      name: 'What time are GCSE results released in 2026?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'GCSE results are available from 8:00am on 27 August 2026. Most schools open their doors at 8:00am for students to collect results in person. Grade boundaries are also published at 8:00am by AQA, Edexcel, OCR and WJEC.',
      },
    },
    {
      '@type': 'Question',
      name: 'What should I do if I miss my sixth form grade requirements?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'If you miss your grades, contact your chosen sixth form immediately — most hold places until mid-morning on Results Day. If they cannot accommodate you, look at alternative sixth forms with vacancies, consider resitting in November (English Language and Maths) or May/June 2027 (all subjects), or explore BTEC and T-Level alternatives. Do not panic — options always exist.',
      },
    },
    {
      '@type': 'Question',
      name: 'How do I request a GCSE remark in 2026?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Remarks must be requested through your school — you cannot apply directly to the exam board as an individual student. Ask your exam officer on Results Day or the following days. There are two types: a clerical check (checking marks were added up correctly, free) and a priority review (a senior examiner re-marks your paper, costs around £40–£60 and is refunded if your grade changes). Deadlines are typically 2–3 weeks after Results Day.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can I collect my GCSE results online in 2026?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'This depends on your school. Some schools provide access via an online portal (such as the Results Plus portal for Edexcel schools) alongside in-person collection. Check with your school in advance. Most schools still encourage students to collect in person and most results slips are handed out physically on the day.',
      },
    },
  ],
};

const RESULTS_DAY_TIMELINE = [
  { time: '6:00am', icon: '⏰', title: 'Wake up (probably)', detail: 'Most students are awake long before schools open. Use the time to eat breakfast — you will need energy for the day regardless of how results go.', color: '#6366f1' },
  { time: '8:00am', icon: '🏫', title: 'Schools open & results available', detail: 'Most schools open from 8:00am. Results slips are distributed in-person. Grade boundaries published simultaneously by AQA, Edexcel, OCR and WJEC. Some schools use online portals — check with yours in advance.', color: '#34d399' },
  { time: '8:00am', icon: '📊', title: 'Grade boundaries published', detail: 'All four exam boards release official grade boundary documents. Use the GradesNova calculator to instantly convert your raw marks to grades.', color: '#34d399' },
  { time: '8:00–10:00am', icon: '📞', title: 'Contact sixth form if needed', detail: 'If you have missed your offer, call or visit your chosen sixth form immediately. Most hold places until mid-morning. Do not wait — vacancies fill fast.', color: '#ec4899' },
  { time: '10:00am+', icon: '🔍', title: 'Request raw marks & consider remarks', detail: 'Ask your exam officer for your raw mark breakdown. If you are 1–3 marks below a grade boundary, discuss a priority review with your school. Remark deadlines are typically 2–3 weeks after Results Day.', color: '#f59e0b' },
  { time: 'By end of Aug', icon: '📝', title: 'Remark deadline', detail: 'Priority review and clerical check requests must be submitted through your school before the exam board deadlines — typically around 10–14 September 2026. Check your board\'s specific deadline.', color: '#a855f7' },
  { time: 'Sep 2026', icon: '🎓', title: 'Sixth form begins', detail: 'A-Level, BTEC, and T-Level courses start. November resit window opens for English Language and Maths (results January 2027).', color: '#34d399' },
];

const MISSED_GRADES_OPTIONS = [
  {
    icon: '📞',
    title: 'Contact your first-choice sixth form immediately',
    color: '#34d399',
    body: 'Most sixth forms hold places until 10:00–11:00am on Results Day even if you have missed the stated requirement. Call or go in person. Explain your situation calmly — many are flexible, especially if you are close to the requirement or have strong predicted grades in the subjects you want to study.',
  },
  {
    icon: '🔄',
    title: 'Look at alternative sixth forms with vacancies',
    color: '#6366f1',
    body: 'If your first choice cannot accommodate you, contact other local sixth forms. Many publish vacancy lists on Results Day. School admissions advisors and local authority clearing lines can help you identify places available.',
  },
  {
    icon: '📋',
    title: 'Consider a BTEC or T-Level alternative',
    color: '#a855f7',
    body: 'BTECs and T-Levels are rigorous vocational qualifications that lead to university and careers. Entry requirements are often more flexible than A-Levels. If your GCSE results open a vocational route you hadn\'t considered, it is worth exploring seriously.',
  },
  {
    icon: '📅',
    title: 'Plan to resit',
    color: '#f59e0b',
    body: 'English Language and Maths can be resit in November 2026 (results January 2027). All subjects can be resit in May/June 2027. Many students resit one or two subjects in the November window while continuing with sixth form. It does not hold your place at risk.',
  },
  {
    icon: '🔍',
    title: 'Request a priority review',
    color: '#ec4899',
    body: 'If you are 1–3 marks below a grade boundary in a critical subject, a priority review (re-mark) is worth requesting through your school. Around 30% of priority reviews result in a grade change. Deadlines are tight — act on Results Day or the day after.',
  },
];

const REMARK_TYPES = [
  {
    type: 'Clerical check',
    cost: 'Free',
    what: 'Verifies all marks were recorded and totalled correctly. Does not involve re-reading your answers.',
    when: 'Worth requesting first — errors occasionally occur in mark addition.',
    color: '#34d399',
  },
  {
    type: 'Priority review (re-mark)',
    cost: '~£40–£60',
    what: 'A senior examiner re-reads and re-marks your paper against the mark scheme. Refunded if your grade changes.',
    when: 'Best if you are 1–3 marks above a lower boundary. Less likely to help if you are more than 4 marks into a grade band.',
    color: '#6366f1',
  },
  {
    type: 'Access to scripts',
    cost: '~£10–£20',
    what: 'You can request a copy of your marked paper to see what the examiner awarded and why.',
    when: 'Useful before deciding whether to request a full review. Available after the clerical check/review window.',
    color: '#a855f7',
  },
];

const HUB_PAGES = [
  {
    title: 'GCSE Grade Boundary Calculator',
    desc: 'Enter your raw mark → get your exact grade in 3 seconds. AQA, Edexcel, OCR, WJEC. All subjects.',
    href: '/exams/gcse',
    color: '#34d399',
    icon: '🧮',
    badge: 'Calculator',
  },
  {
    title: 'How Grade Boundaries Work',
    desc: 'Why do boundaries change every year? How does Ofqual set them? Everything explained, clearly.',
    href: '/exams/gcse/grade-boundaries-explained',
    color: '#6366f1',
    icon: '📊',
    badge: 'Deep dive',
  },
  {
    title: 'GCSE Results Day 2026',
    desc: 'Everything for 27 August 2026: times, what to do, remark deadlines, and what happens if you miss your grades.',
    href: '/exams/gcse/results-day',
    color: '#ec4899',
    icon: '📅',
    badge: '27 Aug 2026',
  },
  {
    title: 'GCSE Revision Tips & Strategy',
    desc: 'Evidence-based study methods, subject-by-subject advice, and how to build a revision plan that actually works.',
    href: '/exams/gcse/revision-tips',
    color: '#f59e0b',
    icon: '📖',
    badge: 'Strategy',
  },
];

export default function GCSEResultsDayPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdEvent) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdFAQ) }} />

      <main className="bg-[#0a0c14] min-h-screen text-white">
        <Navbar />

        {/* ── HEADER ── */}
        <header className="bg-[#0d0f1a] border-b border-white/6 py-12 mt-16">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <nav aria-label="Breadcrumb" className="mb-5">
              <ol className="flex items-center gap-2 text-xs text-slate-500">
                <li><Link href="/" className="hover:text-white transition-colors">Home</Link></li>
                <li aria-hidden="true">›</li>
                <li><Link href="/exams/gcse" className="hover:text-white transition-colors">GCSE Grade Boundaries</Link></li>
                <li aria-hidden="true">›</li>
                <li><Link href="/exams/gcse/guide" className="hover:text-white transition-colors">GCSE Guide</Link></li>
                <li aria-hidden="true">›</li>
                <li className="text-slate-400" aria-current="page">Results Day 2026</li>
              </ol>
            </nav>

            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-pink-500/15 flex items-center justify-center text-xl" aria-hidden="true">📅</div>
              <span className="text-xs font-mono text-pink-400/70 uppercase tracking-widest">GCSE · Results Day · 27 Aug 2026</span>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold text-white tracking-tight mb-4 leading-tight">
              GCSE Results Day 2026: Everything You Need to Know
            </h1>
            <p className="text-lg text-slate-400 leading-relaxed max-w-2xl">
              Results Day is Thursday 27 August 2026. This guide covers exactly what happens, when, what to do if results disappoint, how to request a remark, and what your grades mean for your next steps.
            </p>

            <div className="flex items-center gap-4 mt-5 text-xs text-slate-500">
              <span>Updated May 2026</span>
              <span>·</span>
              <span>~8 min read</span>
            </div>
          </div>
        </header>

        <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-14">

          {/* ── KEY DATE STRIP ── */}
          <section aria-labelledby="key-facts-heading">
            <h2 id="key-facts-heading" className="sr-only">Key facts about GCSE Results Day 2026</h2>
            <div className="grid sm:grid-cols-3 gap-4">
              {[
                { icon: '📅', label: 'Results Day', value: '27 Aug 2026', sub: 'Thursday', color: '#ec4899' },
                { icon: '⏰', label: 'Results available from', value: '8:00am', sub: 'Most schools open from 8am', color: '#34d399' },
                { icon: '📊', label: 'Boundaries published', value: '8:00am', sub: 'AQA, Edexcel, OCR, WJEC', color: '#6366f1' },
              ].map(card => (
                <div key={card.label} className="bg-[#12141f] border border-white/8 rounded-xl p-5">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-lg" aria-hidden="true">{card.icon}</span>
                    <span className="text-xs text-slate-400 font-medium">{card.label}</span>
                  </div>
                  <p className="text-2xl font-bold font-mono" style={{ color: card.color }}>{card.value}</p>
                  <p className="text-xs text-slate-500 mt-0.5">{card.sub}</p>
                </div>
              ))}
            </div>
          </section>

          {/* ── WHAT HAPPENS ON RESULTS DAY ── */}
          <section aria-labelledby="what-happens-heading">
            <h2 id="what-happens-heading" className="text-2xl font-bold text-white mb-4">What happens on GCSE Results Day?</h2>
            <div className="space-y-4 text-slate-400 leading-relaxed">
              <p>
                GCSE Results Day 2026 falls on <strong className="text-white">Thursday 27 August 2026</strong>. This is the fixed date set by the Joint Council for Qualifications (JCQ) — all schools in England, Wales, and Northern Ireland release results on the same day.
              </p>
              <p>
                At <strong className="text-white">8:00am</strong>, exam boards publish official grade boundary documents and schools gain access to student results through their portals. Most schools open their doors at 8:00am and distribute results slips in person, though some supplement this with an online portal. Check with your school in advance about their specific arrangements.
              </p>
              <p>
                Your results slip shows each subject, the exam board, the tier (Foundation or Higher where applicable), and your final grade. It will <strong className="text-white">not</strong> show your raw mark — you need to request that separately from your exam officer.
              </p>
            </div>

            <div className="mt-6 bg-pink-500/10 border border-pink-500/20 rounded-xl p-5 flex gap-4 items-start">
              <span className="text-xl shrink-0" aria-hidden="true">💡</span>
              <div>
                <p className="text-sm font-semibold text-white mb-1">Prepare the night before</p>
                <p className="text-sm text-slate-400 leading-relaxed">
                  Know your sixth form's contact number before Results Day. Have your student number and exam board details to hand. If you want to check your raw marks against boundaries on the day, use the GradesNova calculator — it's faster than downloading the official PDFs.
                </p>
              </div>
            </div>
          </section>

          {/* ── RESULTS DAY HOUR BY HOUR ── */}
          <section aria-labelledby="timeline-heading">
            <h2 id="timeline-heading" className="text-2xl font-bold text-white mb-6">Results Day: hour by hour</h2>

            <div className="relative">
              <div className="absolute left-[19px] top-0 bottom-0 w-0.5 bg-white/8 hidden sm:block" aria-hidden="true" />
              <div className="space-y-5">
                {RESULTS_DAY_TIMELINE.map((item, i) => (
                  <div key={i} className="flex gap-5 items-start">
                    <div className="relative shrink-0 hidden sm:flex">
                      <div
                        className="w-10 h-10 rounded-full flex items-center justify-center text-sm z-10 border-2"
                        style={{
                          backgroundColor: `${item.color}20`,
                          borderColor: `${item.color}40`,
                          color: item.color,
                        }}
                      >
                        {item.icon}
                      </div>
                    </div>
                    <div className="flex-1 bg-[#12141f] border border-white/8 rounded-xl p-4">
                      <div className="flex flex-wrap items-center gap-2 mb-1">
                        <span className="text-xs font-mono font-bold" style={{ color: item.color }}>{item.time}</span>
                        {item.time === '8:00am' && i === 1 && (
                          <span className="text-[10px] bg-pink-500/20 text-pink-300 px-2 py-0.5 rounded-full font-medium">Key moment</span>
                        )}
                      </div>
                      <h3 className="text-sm font-bold text-white mb-1">{item.title}</h3>
                      <p className="text-xs text-slate-400 leading-relaxed">{item.detail}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* ── HOW TO READ YOUR RESULTS SLIP ── */}
          <section aria-labelledby="results-slip-heading">
            <h2 id="results-slip-heading" className="text-2xl font-bold text-white mb-4">How to read your results slip</h2>
            <div className="space-y-4 text-slate-400 leading-relaxed">
              <p>
                Your results slip lists each subject, the awarding body, and the grade you achieved. For most subjects, grades are 9–1. Combined science results appear as a paired grade (e.g. 7-6). Here is what to check immediately:
              </p>
            </div>
            <div className="mt-5 space-y-3">
              {[
                { n: '1', title: 'Check English Language and Maths first', body: 'These are the two most critical grades. Grade 4+ in both is required for most sixth forms and exempts you from the legal resit obligation. Grade 5+ in both is the standard threshold for competitive sixth forms.', color: '#34d399' },
                { n: '2', title: 'Check grades for your intended A-Level subjects', body: 'Most sixth forms require grade 5 in the subjects you want to study at A-Level. Some competitive sixth forms require grade 6 or 7. Compare your grades directly against your sixth form offer.', color: '#6366f1' },
                { n: '3', title: 'Note your total grade count at 4+ and 5+', body: 'Some sixth forms have a minimum number of grade 4s or 5s across all subjects — e.g. "five grade 5s including English and Maths." Count your grades carefully to verify you meet the overall threshold.', color: '#a855f7' },
                { n: '4', title: 'Request your raw marks', body: 'Your results slip does not include raw marks. Ask your exam officer for your raw mark breakdown. You need this to check whether a remark is worth pursuing (if you are 1–3 marks from the next grade boundary).', color: '#f59e0b' },
              ].map(item => (
                <div key={item.n} className="flex gap-4 bg-[#12141f] border border-white/8 rounded-xl p-4">
                  <div className="w-7 h-7 rounded-full text-xs font-bold flex items-center justify-center shrink-0 font-mono"
                    style={{ backgroundColor: `${item.color}20`, color: item.color }}>
                    {item.n}
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-white mb-1">{item.title}</p>
                    <p className="text-xs text-slate-400 leading-relaxed">{item.body}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Calculator CTA */}
            <div className="mt-6 bg-emerald-500/10 border border-emerald-500/20 rounded-xl p-5 flex gap-4 items-start">
              <span className="text-xl shrink-0" aria-hidden="true">🧮</span>
              <div>
                <p className="text-sm font-semibold text-white mb-1">Check your grade from your raw mark instantly</p>
                <p className="text-sm text-slate-400 leading-relaxed mb-3">
                  Once you have your raw mark from your exam officer, enter it into the GradesNova calculator to see exactly where you sit against the official boundaries — and how close you are to the next grade.
                </p>
                <Link href="/exams/gcse"
                  className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white px-4 py-2 rounded-xl font-semibold text-sm transition-all">
                  GCSE Grade Boundary Calculator →
                </Link>
              </div>
            </div>
          </section>

          {/* ── IF YOU MISS YOUR GRADES ── */}
          <section aria-labelledby="missed-heading">
            <h2 id="missed-heading" className="text-2xl font-bold text-white mb-4">What to do if you miss your sixth form grades</h2>
            <div className="space-y-4 text-slate-400 leading-relaxed">
              <p>
                Missing a grade requirement is stressful, but it is almost never the end of the road. The single most important thing is to <strong className="text-white">act quickly</strong> — sixth form places fill on the morning of Results Day, and most institutions will not hold spaces past mid-morning without contact from you.
              </p>
            </div>

            <div className="mt-6 space-y-3">
              {MISSED_GRADES_OPTIONS.map(option => (
                <div key={option.title} className="bg-[#12141f] border border-white/8 rounded-xl p-5 flex gap-4">
                  <span className="text-2xl shrink-0" aria-hidden="true">{option.icon}</span>
                  <div>
                    <h3 className="text-sm font-bold text-white mb-1.5">{option.title}</h3>
                    <p className="text-sm text-slate-400 leading-relaxed">{option.body}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6 bg-amber-500/10 border border-amber-500/20 rounded-xl px-5 py-4 flex gap-3 items-start">
              <span className="text-lg shrink-0" aria-hidden="true">⚠️</span>
              <p className="text-sm text-slate-300">
                <strong className="text-amber-300">Do not wait.</strong> If you have missed your offer, call your sixth form before 9:30am. Most decisions are made by mid-morning and places are offered to other students if they do not hear from you.
              </p>
            </div>
          </section>

          {/* ── WHAT TO DO IF RESULTS ARE BETTER THAN EXPECTED ── */}
          <section aria-labelledby="better-heading">
            <h2 id="better-heading" className="text-2xl font-bold text-white mb-4">What to do if your results are better than expected</h2>
            <div className="space-y-4 text-slate-400 leading-relaxed">
              <p>
                Good news is easier to handle — but there are still things worth acting on quickly.
              </p>
            </div>
            <div className="mt-5 grid sm:grid-cols-2 gap-4">
              {[
                { icon: '🎯', title: 'Request more competitive subject choices', body: 'If your grades significantly exceeded your sixth form\'s expectations, you may be able to switch to a more challenging or competitive A-Level combination. Contact your sixth form on the day.', color: '#34d399' },
                { icon: '🏫', title: 'Apply to a more selective sixth form', body: 'If you have outperformed the entry requirements for your current choice, it is worth contacting more selective sixth forms — many retain some places for Results Day applicants.', color: '#6366f1' },
                { icon: '📋', title: 'Check your predicted grade assumptions', body: 'If your teachers significantly underpredicted you, make sure your predicted grades for any future applications (e.g. to colleges or early programmes) are updated immediately.', color: '#a855f7' },
                { icon: '🎉', title: 'Take a moment to be proud', body: 'GCSE exams are a significant achievement regardless of outcome. Stronger-than-expected results are worth celebrating — the next steps can wait until after breakfast.', color: '#ec4899' },
              ].map(tip => (
                <div key={tip.title} className="bg-[#12141f] border border-white/8 rounded-xl p-4">
                  <span className="text-2xl block mb-2" aria-hidden="true">{tip.icon}</span>
                  <h3 className="text-sm font-semibold text-white mb-1.5">{tip.title}</h3>
                  <p className="text-xs text-slate-400 leading-relaxed">{tip.body}</p>
                </div>
              ))}
            </div>
          </section>

          {/* ── REMARKS ── */}
          <section aria-labelledby="remarks-heading">
            <h2 id="remarks-heading" className="text-2xl font-bold text-white mb-4">Requesting a remark: what you need to know</h2>
            <div className="space-y-4 text-slate-400 leading-relaxed">
              <p>
                If you believe your paper was marked incorrectly, or if you are very close to the next grade boundary, you can request a review through your school. You cannot apply to the exam board directly — all requests must go through your exam officer.
              </p>
            </div>

            <div className="mt-6 space-y-4">
              {REMARK_TYPES.map(r => (
                <div key={r.type} className="bg-[#12141f] border border-white/8 rounded-xl p-5">
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="text-sm font-bold text-white">{r.type}</h3>
                    <span className="text-xs font-mono font-semibold px-2 py-0.5 rounded-full border"
                      style={{ backgroundColor: `${r.color}15`, borderColor: `${r.color}30`, color: r.color }}>
                      {r.cost}
                    </span>
                  </div>
                  <p className="text-xs text-slate-400 leading-relaxed mb-1.5"><strong className="text-slate-300">What it involves:</strong> {r.what}</p>
                  <p className="text-xs text-slate-400 leading-relaxed"><strong className="text-slate-300">When to use it:</strong> {r.when}</p>
                </div>
              ))}
            </div>

            <div className="mt-5 space-y-3">
              {[
                { n: '1', title: 'Check your raw mark first', body: 'Before requesting a remark, get your raw mark from your exam officer and compare it to the official grade boundary. A remark is only worth pursuing if you are 1–3 marks above a lower boundary — a mark lower than 4 into the boundary band rarely changes outcome.' },
                { n: '2', title: 'Act quickly — deadlines are tight', body: 'Priority review and clerical check deadlines are typically 10–14 September 2026. This sounds far away on Results Day but these weeks pass quickly with sixth form enrolment. Do not delay.' },
                { n: '3', title: 'Know that grades can go down', body: 'On a priority review, a senior examiner re-marks your paper from scratch. In rare cases, grades can decrease as well as increase. This is uncommon, but worth knowing before requesting a review on a subject where your current grade already meets your requirements.' },
              ].map(item => (
                <div key={item.n} className="flex gap-4 bg-[#12141f] border border-white/8 rounded-xl p-4">
                  <div className="w-7 h-7 rounded-full bg-pink-500/20 text-pink-400 text-xs font-bold flex items-center justify-center shrink-0 font-mono">
                    {item.n}
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-white mb-1">{item.title}</p>
                    <p className="text-xs text-slate-400 leading-relaxed">{item.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* ── GRADE BOUNDARIES ON RESULTS DAY ── */}
          <section aria-labelledby="boundaries-day-heading">
            <h2 id="boundaries-day-heading" className="text-2xl font-bold text-white mb-4">Grade boundaries on Results Day</h2>
            <div className="space-y-4 text-slate-400 leading-relaxed">
              <p>
                At 8:00am on 27 August 2026, all four exam boards — AQA, Edexcel, OCR, and WJEC — simultaneously publish their official grade boundary documents. These are the raw marks required for each grade in every subject.
              </p>
              <p>
                Downloading and searching these PDFs manually is slow. The GradesNova calculator lets you enter any raw mark and instantly see the corresponding grade — covering all boards and all subjects.
              </p>
            </div>

            <div className="mt-6 grid sm:grid-cols-2 gap-4">
              {[
                { name: 'AQA', color: '#34d399', href: '/exams/gcse/aqa', icon: '📗', share: '~49%', desc: 'England\'s largest board. Most state schools.' },
                { name: 'Edexcel', color: '#6366f1', href: '/exams/gcse/edexcel', icon: '📘', share: '~31%', desc: 'Pearson Edexcel. Strong in London and South East.' },
                { name: 'OCR', color: '#a855f7', href: '/exams/gcse/ocr', icon: '📙', share: '~14%', desc: 'Oxford Cambridge and RSA. Popular with grammars.' },
                { name: 'WJEC', color: '#f59e0b', href: '/exams/gcse/wjec', icon: '📒', share: '~6%', desc: 'Welsh board. Eduqas brand used in England.' },
              ].map(board => (
                <Link key={board.name} href={board.href}
                  className="bg-[#12141f] border border-white/8 rounded-xl p-4 hover:border-white/20 transition-all hover:-translate-y-0.5 group flex gap-3">
                  <span className="text-2xl shrink-0" aria-hidden="true">{board.icon}</span>
                  <div>
                    <h3 className="text-sm font-bold group-hover:brightness-110 transition-all" style={{ color: board.color }}>{board.name}</h3>
                    <p className="text-[10px] text-slate-500 font-mono mb-1">{board.share} of GCSE entries</p>
                    <p className="text-xs text-slate-400">{board.desc}</p>
                    <span className="text-xs font-semibold mt-2 inline-block" style={{ color: board.color }}>
                      View {board.name} boundaries 2026 →
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </section>

          {/* ── FAQ ── */}
          <section aria-labelledby="faq-heading">
            <h2 id="faq-heading" className="text-2xl font-bold text-white mb-5">Frequently asked questions</h2>
            <div className="space-y-3">
              {[
                { q: 'When is GCSE Results Day 2026?', a: 'Thursday 27 August 2026. Most schools open from 8:00am. This is the same day grade boundaries are published by all exam boards.' },
                { q: 'What time are GCSE results released?', a: 'Results are available from 8:00am on 27 August 2026. Schools distribute results slips from opening time. Some schools also allow online access via portals — check with your school in advance.' },
                { q: 'Can I collect results if I\'m away on holiday?', a: 'You can usually nominate a parent or guardian to collect on your behalf — contact your school before Results Day to arrange this. Some schools also offer postal results or online portals. You cannot collect another student\'s results without written authorisation.' },
                { q: 'What should I do if I miss my sixth form offer?', a: 'Contact your sixth form immediately — most hold places until mid-morning. If they cannot accommodate you, explore alternative sixth forms with vacancies, consider BTEC or T-Level routes, or plan to resit the subject(s) you need in November.' },
                { q: 'How long do I have to request a remark?', a: 'Priority review and clerical check deadlines are typically around 10–14 September 2026 (approximately 2–3 weeks after Results Day). Check the specific deadline for your board. Requests must go through your school\'s exam officer, not direct to the board.' },
                { q: 'Can results go down on a remark?', a: 'Yes, in rare cases. On a priority review, a senior examiner re-marks the paper from scratch. Grades can decrease as well as increase. This is uncommon — but do not request a remark on a subject where your current grade already meets your requirements unless you have a strong reason to believe marking was incorrect.' },
                { q: 'What is a clerical check and is it free?', a: 'A clerical check verifies that all marks were correctly recorded and totalled — it does not involve re-reading your answers. It is free and worth requesting as a first step before a full priority review.' },
                { q: 'When do the November GCSE resits take place?', a: 'GCSE English Language and Maths November resit exams typically take place in early November, with results released in January. This window is available to students who did not achieve grade 4 in the May/June sitting, and who are continuing in post-16 education.' },
              ].map((faq, i) => (
                <details key={i} className="bg-[#12141f] border border-white/7 rounded-xl overflow-hidden group">
                  <summary className="px-5 py-4 text-sm font-medium text-white cursor-pointer list-none flex items-center justify-between gap-4">
                    {faq.q}
                    <span className="text-slate-400 shrink-0 group-open:rotate-180 transition-transform duration-200" aria-hidden="true">↓</span>
                  </summary>
                  <div className="px-5 pb-4 pt-3 border-t border-white/6">
                    <p className="text-sm text-slate-400 leading-relaxed">{faq.a}</p>
                  </div>
                </details>
              ))}
            </div>
          </section>

          {/* ── CTA ── */}
          <div className="bg-[#12141f] border border-emerald-500/20 rounded-2xl p-7 flex gap-5 items-start">
            <div className="text-2xl shrink-0" aria-hidden="true">🧮</div>
            <div>
              <h3 className="text-base font-semibold text-white mb-1">Check your grade from a raw mark on Results Day</h3>
              <p className="text-sm text-slate-400 leading-relaxed mb-3">
                Get your raw mark from your exam officer, then enter it into the GradesNova calculator. Instantly see your grade under official 2026 boundaries — AQA, Edexcel, OCR, and WJEC, all subjects, in seconds.
              </p>
              <Link href="/exams/gcse"
                className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white px-5 py-2.5 rounded-xl font-semibold text-sm transition-all hover:shadow-lg hover:-translate-y-0.5">
                GCSE Grade Boundary Calculator →
              </Link>
            </div>
          </div>

          {/* ── RELATED ── */}
          <section aria-labelledby="related-heading" className="border-t border-white/8 pt-10">
            <h2 id="related-heading" className="text-sm font-semibold text-slate-500 uppercase tracking-wider mb-4">Continue reading</h2>
            <div className="grid sm:grid-cols-2 gap-3">
              {[
                { title: 'How GCSE Grade Boundaries Work', href: '/exams/gcse/grade-boundaries-explained', color: '#6366f1' },
                { title: 'GCSE Revision Tips & Strategy', href: '/exams/gcse/revision-tips', color: '#f59e0b' },
                { title: 'AQA Grade Boundaries 2026 — All Subjects', href: '/exams/gcse/aqa', color: '#34d399' },
                { title: 'Complete GCSE Guide 2026', href: '/exams/gcse/guide', color: '#ec4899' },
              ].map(a => (
                <Link key={a.href} href={a.href}
                  className="bg-[#12141f] border border-white/8 rounded-xl p-4 hover:border-white/16 transition-colors group">
                  <p className="text-sm font-semibold text-white group-hover:brightness-110 transition-all leading-snug">{a.title}</p>
                  <span className="text-xs mt-2 inline-block font-medium" style={{ color: a.color }}>Read →</span>
                </Link>
              ))}
            </div>
          </section>

          {/* ── BOTTOM HUB ── */}
          <section aria-labelledby="hub-heading" className="border-t border-white/8 pt-10">
            <h2 id="hub-heading" className="text-sm font-semibold text-slate-500 uppercase tracking-wider mb-4">Full GCSE hub</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
              {HUB_PAGES.map(page => (
                <Link key={page.href} href={page.href}
                  className="bg-[#12141f] border border-white/8 rounded-xl p-4 hover:border-white/20 transition-all group text-center">
                  <span className="text-2xl block mb-2" aria-hidden="true">{page.icon}</span>
                  <p className="text-xs font-semibold text-white group-hover:brightness-110 leading-snug">{page.title}</p>
                  <p className="text-[10px] mt-1 font-medium" style={{ color: page.color }}>Go →</p>
                </Link>
              ))}
            </div>
          </section>

        </article>
        <Footer />
      </main>
    </>
  );
}
