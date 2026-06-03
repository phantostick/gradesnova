// app/exams/gcse/guide/page.tsx
// GCSE COMPLETE GUIDE 2026 — Content Hub Page
// Builds topical authority around the GCSE calculator
// Internal links to: /exams/gcse, /exams/gcse/grade-boundaries-explained,
//                    /exams/gcse/results-day, /exams/gcse/revision-tips,
//                    /exams/gcse/aqa, /exams/gcse/edexcel, /exams/gcse/ocr, /exams/gcse/wjec

import type { Metadata } from 'next';
import Link from 'next/link';
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';

export const metadata: Metadata = {
  title: 'Complete GCSE Guide 2026 | Grades, Boundaries & Results Day | GradesNova',
  description:
    'The complete GCSE guide for 2026. Everything on the 9–1 grading scale, how grade boundaries work, what to expect on results day, how to check your raw marks, and what each grade means for sixth form and university entry.',
  alternates: { canonical: 'https://gradesnova.com/exams/gcse/guide' },
  openGraph: {
    title: 'Complete GCSE Guide 2026 | Grades, Boundaries & Results Day',
    description:
      'Everything you need to know about GCSEs in 2026 — grading, boundaries, results day, sixth form entry requirements, and how to use your raw marks.',
    url: 'https://gradesnova.com/exams/gcse/guide',
    type: 'article',
    siteName: 'GradesNova',
  },
  robots: { index: true, follow: true },
};

const jsonLdBreadcrumb = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://gradesnova.com' },
    { '@type': 'ListItem', position: 2, name: 'GCSE Grade Boundaries', item: 'https://gradesnova.com/exams/gcse' },
    { '@type': 'ListItem', position: 3, name: 'Complete GCSE Guide 2026', item: 'https://gradesnova.com/exams/gcse/guide' },
  ],
};

const jsonLdArticle = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Complete GCSE Guide 2026: Grades, Boundaries, Results Day & More',
  description:
    'The definitive guide to GCSEs in 2026, covering the 9–1 grading scale, how grade boundaries are set, results day timeline, and what your grades mean for sixth form entry.',
  url: 'https://gradesnova.com/exams/gcse/guide',
  author: { '@type': 'Organization', name: 'GradesNova' },
  publisher: { '@type': 'Organization', name: 'GradesNova', url: 'https://gradesnova.com' },
  dateModified: '2026-05-26',
};

const jsonLdFAQ = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is a good GCSE grade?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Grade 5 is considered a "strong pass" and is required by most sixth forms for A-Level entry. Grade 4 is the "standard pass." Grades 7–9 are equivalent to the old A and A* and are considered excellent results. Grade 9 is awarded to roughly the top 3–5% of students nationally in each subject.',
      },
    },
    {
      '@type': 'Question',
      name: 'How many GCSEs should I take?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Most students take between 8 and 11 GCSEs. English Language, English Literature, and Maths are almost universal. Science (either combined or triple) accounts for 2–3 GCSEs. The remaining subjects depend on your school\'s offer and your interests. Most sixth forms require at least 5 GCSEs at grade 4 or above, including English and Maths.',
      },
    },
    {
      '@type': 'Question',
      name: 'When are GCSE results released in 2026?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'GCSE Results Day 2026 is Thursday 27 August 2026. Most schools open from 8:00am. Grade boundaries for all boards (AQA, Edexcel, OCR, WJEC) are published simultaneously at 8:00am on the same day.',
      },
    },
    {
      '@type': 'Question',
      name: 'What do GCSE grades mean for sixth form entry?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Most sixth forms require a minimum of grade 4 in English Language and Maths, plus grade 5 in the subjects you want to study at A-Level. Competitive sixth forms often require grade 6 or 7 in your chosen A-Level subjects. Very selective institutions (grammar school sixth forms, independent school sixth forms) may require grade 7 or above across the board.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the difference between combined science and triple science GCSEs?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Combined science (also called Double Award) gives you two GCSEs covering Biology, Chemistry, and Physics together, with grades awarded as paired grades (e.g. 6-6, 7-8). Triple science gives you three separate GCSEs — one each in Biology, Chemistry, and Physics — with individual grades. Triple science is required or preferred for A-Level Sciences at many sixth forms.',
      },
    },
  ],
};

const GRADE_DATA = [
  { grade: '9', color: '#34d399', old: 'A* (top)', pct: '~3–5%', desc: 'Exceptional — top performers only', sixth: 'All sixth forms, competitive courses' },
  { grade: '8', color: '#34d399', old: 'A*', pct: '~9%', desc: 'Excellent — high distinction', sixth: 'Strong sixth form entry' },
  { grade: '7', color: '#6366f1', old: 'A', pct: '~18%', desc: 'Very strong — university standard', sixth: 'University-level standard at 16' },
  { grade: '6', color: '#6366f1', old: 'B', pct: '~31%', desc: 'Good — merit level', sixth: 'Most sixth forms for most subjects' },
  { grade: '5', color: '#a855f7', old: 'B/C', pct: '~43%', desc: 'Strong pass — required for most A-Levels', sixth: '✓ Most A-Level entry requirements' },
  { grade: '4', color: '#f59e0b', old: 'C', pct: '~56%', desc: 'Standard pass — prevents resit obligation', sixth: '✓ Minimum for college & employment' },
  { grade: '3', color: '#f97316', old: 'D', pct: '~68%', desc: 'Below standard pass', sixth: '✗ Must resit English/Maths post-16' },
  { grade: '2', color: '#ef4444', old: 'E/F', pct: '~79%', desc: 'Low grade', sixth: '✗ Must resit English/Maths post-16' },
  { grade: '1', color: '#6b7280', old: 'F/G', pct: '~90%', desc: 'Minimum grade', sixth: '✗ Must resit English/Maths post-16' },
];

const SUBJECTS_OVERVIEW = [
  { subject: 'English Language', icon: '📝', compulsory: true, note: 'Grade 4 legally required; resit mandatory post-16 if below. Single most important GCSE.' },
  { subject: 'English Literature', icon: '📚', compulsory: true, note: 'Usually taken alongside Language. Assessed separately. Required by many competitive sixth forms.' },
  { subject: 'Mathematics', icon: '📐', compulsory: true, note: 'Grade 4 legally required; resit mandatory post-16 if below. Grade 5+ needed for most A-Level Maths entry.' },
  { subject: 'Combined Science', icon: '🔬', compulsory: true, note: 'Counts as 2 GCSEs. Covers Biology, Chemistry, Physics. Maximum grade 8-8. Awarded as a paired grade.' },
  { subject: 'Triple Science', icon: '⚗️', compulsory: false, note: 'Optional; 3 separate GCSEs. Required or preferred for A-Level Sciences at most sixth forms.' },
  { subject: 'History / Geography', icon: '🌍', compulsory: false, note: 'One humanities usually required or expected by selective sixth forms as evidence of broader academic breadth.' },
  { subject: 'Modern Languages', icon: '🗣️', compulsory: false, note: 'French, Spanish, German, etc. Required for Ebacc. Valued highly by Russell Group universities.' },
  { subject: 'Religious Studies', icon: '✝️', compulsory: false, note: 'Often a full GCSE. Part of Ebacc humanities offer at many schools.' },
];

const TIMELINE = [
  { month: 'Sep–Oct 2025', event: 'Year 11 begins', detail: 'Final year of GCSEs. Most schools complete new content by Christmas and shift to revision from January.' },
  { month: 'Oct–Nov 2025', event: 'Mock exams (first round)', detail: 'Full past-paper conditions at most schools. Results used by teachers to refine predicted grades.' },
  { month: 'Jan–Feb 2026', event: 'Predicted grades submitted', detail: 'Teachers submit predicted grades to UCAS (for any Year 11 applying to college courses) and for internal tracking.' },
  { month: 'Mar–Apr 2026', event: 'Mock exams (second round)', detail: 'Final practice before the real thing. Many schools run mock grade boundaries against past-year data.' },
  { month: 'Apr 2026', event: 'Easter revision period', detail: 'Two-week intensive revision window. Prioritise topics identified as weak in second mock round.' },
  { month: 'May–Jun 2026', event: 'Exam season', detail: 'GCSE written exams. Most run from early May to late June. Check your individual timetable carefully.' },
  { month: '27 Aug 2026', event: '🎓 Results Day', detail: 'All GCSE results released from 8:00am. Grade boundaries published simultaneously by AQA, Edexcel, OCR and WJEC.' },
  { month: 'Sep 2026', event: 'Sixth form begins', detail: 'A-Level or BTEC courses start. November resit window opens for Maths and English Language.' },
];

const BOARDS = [
  { name: 'AQA', color: '#34d399', href: '/exams/gcse/aqa', share: '~49%', desc: "England's largest GCSE board. Used by the majority of state schools in England. Known for accessible question styles.", icon: '📗' },
  { name: 'Edexcel', color: '#6366f1', href: '/exams/gcse/edexcel', share: '~31%', desc: 'Pearson Edexcel. Second largest. Strong in London and Southeast England. International GCSE also available.', icon: '📘' },
  { name: 'OCR', color: '#a855f7', href: '/exams/gcse/ocr', share: '~14%', desc: 'Oxford Cambridge and RSA. Popular with grammar schools. Uses 300-mark total for Maths (3 × 100 papers).', icon: '📙' },
  { name: 'WJEC', color: '#f59e0b', href: '/exams/gcse/wjec', share: '~6%', desc: 'Welsh Joint Education Committee (CBAC). Used in Welsh schools. Eduqas brand used in England.', icon: '📒' },
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

export default function GCSEGuidePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdBreadcrumb) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdArticle) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdFAQ) }} />

      <main className="bg-[#0a0c14] min-h-screen text-white">
        <Navbar />

        {/* ── HEADER ── */}
        <header className="bg-[#0d0f1a] border-b border-white/6 py-12 mt-16">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <nav aria-label="Breadcrumb" className="mb-5">
              <ol className="flex items-center gap-2 text-xs text-slate-500">
                <li><Link href="/" className="hover:text-white transition-colors">Home</Link></li>
                <li aria-hidden="true">›</li>
                <li><Link href="/exams/gcse" className="hover:text-white transition-colors">GCSE Grade Boundaries</Link></li>
                <li aria-hidden="true">›</li>
                <li className="text-slate-400" aria-current="page">Complete GCSE Guide</li>
              </ol>
            </nav>

            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-emerald-500/15 flex items-center justify-center text-xl" aria-hidden="true">🏫</div>
              <span className="text-xs font-mono text-emerald-400/70 uppercase tracking-widest">GCSE · Complete Guide · 2026</span>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold text-white tracking-tight mb-4 leading-tight">
              Complete GCSE Guide 2026
            </h1>
            <p className="text-lg text-slate-400 max-w-2xl leading-relaxed">
              Everything you need to know about GCSEs in 2026 — the 9–1 grading scale, how grade boundaries work, what to expect on results day, how to check your raw marks, and what each grade means for your next steps.
            </p>

            <div className="flex flex-wrap gap-3 mt-5">
              {[
                ['9–1 grading scale explained', '#34d399'],
                ['How grade boundaries are set', '#6366f1'],
                ['Results Day: 27 Aug 2026', '#ec4899'],
                ['All 4 exam boards covered', '#f59e0b'],
              ].map(([label, color]) => (
                <span key={label} className="text-xs px-3 py-1 rounded-full font-medium border"
                  style={{ backgroundColor: `${color}15`, borderColor: `${color}30`, color }}>
                  {label}
                </span>
              ))}
            </div>
          </div>
        </header>

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-20">

          {/* ── HUB NAVIGATION ── */}
          <section aria-labelledby="hub-heading">
            <h2 id="hub-heading" className="text-xl font-bold text-white mb-2">Everything in this guide</h2>
            <p className="text-slate-400 text-sm mb-6">Jump to the section you need, or read through from start to finish.</p>
            <div className="grid sm:grid-cols-2 gap-4">
              {HUB_PAGES.map(page => (
                <Link
                  key={page.href}
                  href={page.href}
                  className="bg-[#12141f] border border-white/8 rounded-2xl p-5 hover:border-white/20 transition-all hover:-translate-y-0.5 group flex gap-4"
                >
                  <div className="text-2xl shrink-0 mt-0.5" aria-hidden="true">{page.icon}</div>
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full border"
                        style={{ backgroundColor: `${page.color}15`, borderColor: `${page.color}30`, color: page.color }}>
                        {page.badge}
                      </span>
                    </div>
                    <h3 className="text-sm font-bold text-white group-hover:brightness-110 transition-all leading-snug mb-1">
                      {page.title}
                    </h3>
                    <p className="text-xs text-slate-500 leading-relaxed">{page.desc}</p>
                  </div>
                </Link>
              ))}
            </div>
          </section>

          {/* ── WHAT ARE GCSEs ── */}
          <section aria-labelledby="what-heading">
            <h2 id="what-heading" className="text-3xl font-bold text-white mb-6">What are GCSEs?</h2>
            <div className="space-y-4 text-slate-400 leading-relaxed">
              <p>
                GCSEs (General Certificate of Secondary Education) are the main qualifications taken by students in England, Wales, and Northern Ireland at the end of Year 11, typically at age 15–16. They are the primary qualification that determines access to sixth form (Year 12–13), where students study A-Levels, BTECs, or T-Levels before university.
              </p>
              <p>
                In England and Wales, GCSEs are regulated by <strong className="text-white">Ofqual</strong> (in England) and <strong className="text-white">Qualifications Wales</strong>. They are awarded by four main exam boards: AQA, Pearson Edexcel, OCR, and WJEC. Each board writes its own papers, sets its own grade boundaries, and awards its own grades — though all use the same 9–1 grading scale and the same national grade standards.
              </p>
              <p>
                Most students sit GCSEs in 8–11 subjects simultaneously during May and June of Year 11. English Language and Maths are compulsory. The remaining subjects depend on the school's curriculum offer and the student's choices, usually made in Year 9.
              </p>
            </div>

            {/* Key stats strip */}
            <div className="grid sm:grid-cols-3 gap-4 mt-8">
              {[
                { icon: '📅', label: 'When taken', value: 'Year 11 (age 15–16)', sub: 'May–June exam season', color: '#34d399' },
                { icon: '📚', label: 'Typical number', value: '8–11 subjects', sub: 'English + Maths compulsory', color: '#6366f1' },
                { icon: '🎓', label: 'Results Day 2026', value: '27 Aug 2026', sub: 'From 8:00am, all boards', color: '#ec4899' },
              ].map(card => (
                <div key={card.label} className="bg-[#12141f] border border-white/8 rounded-xl p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-lg" aria-hidden="true">{card.icon}</span>
                    <span className="text-xs text-slate-400 font-medium">{card.label}</span>
                  </div>
                  <p className="text-xl font-bold" style={{ color: card.color }}>{card.value}</p>
                  <p className="text-xs text-slate-500 mt-0.5">{card.sub}</p>
                </div>
              ))}
            </div>
          </section>

          {/* ── GRADING SCALE ── */}
          <section aria-labelledby="grades-heading">
            <h2 id="grades-heading" className="text-3xl font-bold text-white mb-2">The GCSE 9–1 grading scale explained</h2>
            <p className="text-slate-400 text-sm mb-6 leading-relaxed">
              England replaced the old A*–G grading scale with the 9–1 system between 2017 and 2020. Grade 9 is the highest. The two most important benchmarks are <strong className="text-white">grade 4 (standard pass)</strong> and <strong className="text-white">grade 5 (strong pass)</strong>.
            </p>

            <div className="overflow-x-auto rounded-xl border border-white/8">
              <table className="w-full text-sm min-w-[640px]" aria-label="GCSE 9 to 1 grade scale with old equivalents and sixth form requirements">
                <thead>
                  <tr className="bg-white/4 border-b border-white/8">
                    <th scope="col" className="text-left px-4 py-3 text-xs font-semibold text-slate-400 uppercase tracking-wider">Grade</th>
                    <th scope="col" className="text-left px-4 py-3 text-xs font-semibold text-slate-400 uppercase tracking-wider">Old grade</th>
                    <th scope="col" className="text-left px-4 py-3 text-xs font-semibold text-slate-400 uppercase tracking-wider">Approx. national %</th>
                    <th scope="col" className="text-left px-4 py-3 text-xs font-semibold text-slate-400 uppercase tracking-wider">Description</th>
                    <th scope="col" className="text-left px-4 py-3 text-xs font-semibold text-slate-400 uppercase tracking-wider">Sixth form implications</th>
                  </tr>
                </thead>
                <tbody>
                  {GRADE_DATA.map((row, i) => (
                    <tr key={row.grade} className={`border-b border-white/5 last:border-0 ${i % 2 === 0 ? '' : 'bg-white/2'}`}>
                      <td className="px-4 py-3">
                        <span className="text-2xl font-bold font-mono" style={{ color: row.color }}>{row.grade}</span>
                      </td>
                      <td className="px-4 py-3 text-slate-300 text-xs">{row.old}</td>
                      <td className="px-4 py-3 text-slate-400 text-xs font-mono">{row.pct}</td>
                      <td className="px-4 py-3 text-slate-400 text-xs">{row.desc}</td>
                      <td className="px-4 py-3 text-xs" style={{ color: row.color }}>{row.sixth}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-xs text-slate-600 mt-3">
              Source: Ofqual. National percentages are approximate and vary by subject and year.
            </p>

            {/* Grade 4 vs 5 callout */}
            <div className="mt-6 grid sm:grid-cols-2 gap-4">
              <div className="bg-amber-500/10 border border-amber-500/20 rounded-xl p-5">
                <p className="text-sm font-bold text-amber-400 mb-2">Grade 4 — Standard pass</p>
                <p className="text-sm text-slate-400 leading-relaxed">
                  The minimum pass. Students below grade 4 in English Language or Maths are legally required to continue studying and resitting those subjects in post-16 education. Grade 4 is the floor for most employers and colleges.
                </p>
              </div>
              <div className="bg-purple-500/10 border border-purple-500/20 rounded-xl p-5">
                <p className="text-sm font-bold text-purple-400 mb-2">Grade 5 — Strong pass</p>
                <p className="text-sm text-slate-400 leading-relaxed">
                  The real benchmark for competitive sixth form entry. Most schools require grade 5 in the subjects you want to study at A-Level. Grade 5 in English and Maths is the standard threshold for the most sought-after sixth forms.
                </p>
              </div>
            </div>
          </section>

          {/* ── SUBJECTS ── */}
          <section aria-labelledby="subjects-heading">
            <h2 id="subjects-heading" className="text-3xl font-bold text-white mb-2">GCSE subjects: what you study and why it matters</h2>
            <p className="text-slate-400 text-sm mb-6 leading-relaxed">
              Not all GCSEs carry equal weight for sixth form and university entry. Here is what you need to know about the most important subjects.
            </p>

            <div className="space-y-3">
              {SUBJECTS_OVERVIEW.map(subj => (
                <div key={subj.subject} className="bg-[#12141f] border border-white/8 rounded-xl p-4 flex gap-4 items-start">
                  <span className="text-2xl shrink-0" aria-hidden="true">{subj.icon}</span>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <h3 className="text-sm font-bold text-white">{subj.subject}</h3>
                      {subj.compulsory && (
                        <span className="text-[10px] bg-emerald-500/15 text-emerald-400 border border-emerald-500/20 px-2 py-0.5 rounded-full font-medium">
                          Compulsory
                        </span>
                      )}
                    </div>
                    <p className="text-xs text-slate-400 leading-relaxed">{subj.note}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6 bg-[#12141f] border border-white/8 rounded-xl p-5 flex gap-4 items-start">
              <span className="text-xl shrink-0" aria-hidden="true">🏛️</span>
              <div>
                <p className="text-sm font-semibold text-white mb-1">The EBacc (English Baccalaureate)</p>
                <p className="text-sm text-slate-400 leading-relaxed">
                  The EBacc is a government measure (not a qualification) tracking whether students study a core set of subjects: English Language, English Literature, Maths, at least two sciences, a humanity (History or Geography), and a modern or ancient language. Achieving EBacc subjects with grades 5 and above signals broad academic foundations to university admissions teams.
                </p>
              </div>
            </div>
          </section>

          {/* ── EXAM BOARDS ── */}
          <section aria-labelledby="boards-heading">
            <h2 id="boards-heading" className="text-3xl font-bold text-white mb-2">The four GCSE exam boards</h2>
            <p className="text-slate-400 text-sm mb-6 leading-relaxed">
              Your school chooses which exam board to use for each subject. Each board sets its own papers and grade boundaries independently. Always use your school's specific board when looking up boundaries or past papers.
            </p>

            <div className="grid sm:grid-cols-2 gap-4">
              {BOARDS.map(board => (
                <Link
                  key={board.name}
                  href={board.href}
                  className="bg-[#12141f] border border-white/8 rounded-2xl p-5 hover:border-white/20 transition-all hover:-translate-y-0.5 group"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-2xl" aria-hidden="true">{board.icon}</span>
                    <div>
                      <h3 className="text-base font-bold group-hover:brightness-110 transition-all" style={{ color: board.color }}>
                        {board.name}
                      </h3>
                      <p className="text-[10px] text-slate-500 font-mono">~{board.share} of GCSE entries</p>
                    </div>
                  </div>
                  <p className="text-xs text-slate-400 leading-relaxed mb-3">{board.desc}</p>
                  <span className="text-xs font-semibold" style={{ color: board.color }}>
                    View {board.name} grade boundaries 2026 →
                  </span>
                </Link>
              ))}
            </div>
            <p className="text-xs text-slate-600 mt-3">
              Market share figures are approximate. Check with your school if you are unsure which board you are entered for.
            </p>
          </section>

          {/* ── HOW GRADE BOUNDARIES WORK ── */}
          <section aria-labelledby="boundaries-heading">
            <h2 id="boundaries-heading" className="text-3xl font-bold text-white mb-2">How GCSE grade boundaries work</h2>
            <p className="text-slate-400 text-sm mb-6 leading-relaxed">
              Grade boundaries are one of the most misunderstood aspects of GCSEs. Here is the essential knowledge every student needs.
            </p>

            <div className="space-y-4">
              {[
                {
                  icon: '🔢',
                  title: 'Boundaries are raw marks, not percentages',
                  body: 'A grade boundary is the minimum number of marks you need to achieve a grade — not a percentage target. For AQA Maths Higher (240 marks total), the grade 4 boundary in 2025 was 63 marks — just 26% of the paper. The subject, board, and difficulty of that year\'s paper all determine where the boundary lands.',
                },
                {
                  icon: '📉',
                  title: 'Boundaries change every year',
                  body: 'Harder papers produce lower boundaries; easier papers produce higher boundaries. This is intentional — Ofqual uses a process called comparable outcomes to ensure the same proportion of students achieves each grade each year, regardless of paper difficulty. A boundary drop is not a grade devaluation.',
                },
                {
                  icon: '🏫',
                  title: 'Each board sets boundaries independently',
                  body: 'AQA, Edexcel, OCR, and WJEC all set their own boundaries after their own papers are marked. In 2025, AQA Maths Higher grade 4 was 63/240 while Edexcel was 53/240. Never apply one board\'s boundary to another board\'s paper.',
                },
                {
                  icon: '⏰',
                  title: 'Boundaries are secret until Results Day',
                  body: 'Grade boundaries are published at 8:00am on Results Day (27 August 2026 for GCSE). Nobody — not teachers, not exam boards publicly — knows the exact boundaries before this. Any "predicted boundaries" circulating before Results Day are unofficial estimates.',
                },
              ].map(item => (
                <div key={item.title} className="bg-[#12141f] border border-white/8 rounded-xl p-5 flex gap-4">
                  <span className="text-2xl shrink-0" aria-hidden="true">{item.icon}</span>
                  <div>
                    <h3 className="text-sm font-bold text-white mb-1.5">{item.title}</h3>
                    <p className="text-sm text-slate-400 leading-relaxed">{item.body}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6 bg-emerald-500/10 border border-emerald-500/20 rounded-xl p-5 flex gap-4 items-start">
              <span className="text-xl shrink-0" aria-hidden="true">🧮</span>
              <div>
                <p className="text-sm font-semibold text-white mb-1">Check your grade from a raw mark</p>
                <p className="text-sm text-slate-400 leading-relaxed mb-3">
                  Enter any raw mark into the GradesNova calculator to instantly see your grade under 2025 official boundaries for AQA, Edexcel, OCR and WJEC — for all subjects.
                </p>
                <Link href="/exams/gcse"
                  className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white px-4 py-2 rounded-xl font-semibold text-sm transition-all">
                  GCSE Grade Boundary Calculator →
                </Link>
              </div>
            </div>

            <div className="mt-4">
              <Link href="/exams/gcse/grade-boundaries-explained"
                className="text-sm text-emerald-400 hover:text-emerald-300 transition-colors">
                Read the full guide: How grade boundaries work and why they change every year →
              </Link>
            </div>
          </section>

          {/* ── RESULTS DAY TIMELINE ── */}
          <section aria-labelledby="timeline-heading">
            <h2 id="timeline-heading" className="text-3xl font-bold text-white mb-2">Year 11 timeline: from September to Results Day</h2>
            <p className="text-slate-400 text-sm mb-8 leading-relaxed">
              Understanding the full Year 11 calendar helps you allocate revision time intelligently and avoid the common mistake of leaving serious preparation too late.
            </p>

            <div className="relative">
              {/* Vertical line */}
              <div className="absolute left-[19px] top-0 bottom-0 w-0.5 bg-white/8 hidden sm:block" aria-hidden="true" />

              <div className="space-y-6">
                {TIMELINE.map((item, i) => (
                  <div key={i} className="flex gap-5 items-start">
                    <div className="relative shrink-0 hidden sm:flex">
                      <div className={`w-10 h-10 rounded-full flex items-center justify-center text-xs font-bold z-10 border-2 ${
                        item.month.includes('Aug') ? 'bg-emerald-500 border-emerald-400 text-white' : 'bg-[#12141f] border-white/15 text-slate-400'
                      }`}>
                        {i + 1}
                      </div>
                    </div>
                    <div className="flex-1 bg-[#12141f] border border-white/8 rounded-xl p-4">
                      <div className="flex flex-wrap items-center gap-2 mb-1">
                        <span className="text-xs font-mono font-semibold text-emerald-400">{item.month}</span>
                        {item.month.includes('Aug') && (
                          <span className="text-[10px] bg-emerald-500/20 text-emerald-300 px-2 py-0.5 rounded-full font-medium">
                            Key date
                          </span>
                        )}
                      </div>
                      <h3 className="text-sm font-bold text-white mb-1">{item.event}</h3>
                      <p className="text-xs text-slate-400 leading-relaxed">{item.detail}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-6">
              <Link href="/exams/gcse/results-day"
                className="text-sm text-pink-400 hover:text-pink-300 transition-colors">
                Full Results Day guide: what to do on 27 August 2026 →
              </Link>
            </div>
          </section>

          {/* ── FAQ ── */}
          <section aria-labelledby="faq-heading">
            <h2 id="faq-heading" className="text-3xl font-bold text-white mb-2">Frequently asked questions</h2>
            <p className="text-slate-400 text-sm mb-6">The questions students and parents ask most about GCSEs.</p>

            <div className="space-y-3">
              {[
                {
                  q: 'What is a good GCSE grade?',
                  a: 'Grade 5 is the strong pass — required by most sixth forms for A-Level entry. Grades 7–9 are considered excellent (equivalent to the old A/A*). Grade 9, awarded to roughly the top 3–5% nationally, is the highest achievable.',
                },
                {
                  q: 'How many GCSEs should I take?',
                  a: 'Most students take between 8 and 11 GCSEs. English Language, English Literature, and Maths are almost universal. Science (combined or triple) accounts for 2–3 more. Most sixth forms require at least 5 grades of 4 or above, including English and Maths.',
                },
                {
                  q: 'When are GCSE results released in 2026?',
                  a: 'GCSE Results Day 2026 is Thursday 27 August 2026. Most schools open from 8:00am. Grade boundaries for all boards are published simultaneously at 8:00am.',
                },
                {
                  q: 'What do GCSE grades mean for sixth form entry?',
                  a: 'Most sixth forms require a minimum of grade 4 in English and Maths, plus grade 5 in the subjects you want to study at A-Level. Competitive sixth forms may require grade 6 or 7 in your chosen subjects. Very selective institutions may require grade 7 across the board.',
                },
                {
                  q: 'What is the difference between combined and triple science?',
                  a: 'Combined science (Double Award) gives you two GCSEs covering Biology, Chemistry, and Physics, with grades awarded as a paired grade (e.g. 6-6). Triple science gives three separate GCSEs. Triple science is required or preferred for A-Level Sciences at most sixth forms.',
                },
                {
                  q: 'Can I resit GCSEs?',
                  a: 'Yes. GCSE English Language and Maths can be resit in the November series (results in January) or the following May/June series. Other subjects can only be resit in the May/June series. Students below grade 4 in English or Maths are required to resit post-16.',
                },
                {
                  q: 'What happens if I do better than expected?',
                  a: 'Your results are yours — no one can reduce them. If you significantly exceeded expectations, you may qualify for more selective sixth form courses. Contact your chosen sixth form on Results Day if you want to discuss changing subject choices based on stronger-than-anticipated results.',
                },
                {
                  q: 'What is the Ebacc and does it matter?',
                  a: "The English Baccalaureate (EBacc) is a government measure tracking whether students achieve grade 5+ in English, Maths, sciences, a humanity (History or Geography), and a modern language. It's not a separate qualification — it's a performance metric. Achieving EBacc subjects signals broad academic foundations to universities and employers.",
                },
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

          {/* ── BOTTOM CTA HUB ── */}
          <section aria-labelledby="next-steps-heading" className="border-t border-white/8 pt-12">
            <h2 id="next-steps-heading" className="text-2xl font-bold text-white mb-2">Next: explore the full GCSE hub</h2>
            <p className="text-slate-400 text-sm mb-6">Use all the tools and guides in the GradesNova GCSE hub.</p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
              {HUB_PAGES.map(page => (
                <Link
                  key={page.href}
                  href={page.href}
                  className="bg-[#12141f] border border-white/8 rounded-xl p-4 hover:border-white/20 transition-all group text-center"
                >
                  <span className="text-2xl block mb-2" aria-hidden="true">{page.icon}</span>
                  <p className="text-xs font-semibold text-white group-hover:brightness-110 leading-snug">{page.title}</p>
                  <p className="text-[10px] mt-1 font-medium" style={{ color: page.color }}>Go →</p>
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
