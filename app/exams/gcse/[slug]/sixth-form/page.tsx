import { notFound } from 'next/navigation';
import { pathwayData, pathwaySlugs } from '@/lib/pathways-data';
import Link from 'next/link';
import { Metadata } from 'next';

const COLOR = '#34d399';

// 1. UPDATE: In Next.js 15, params is a Promise
interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

// Generate Static Params for lightning-fast loading
export async function generateStaticParams() {
  return pathwaySlugs.map((slug) => ({
    slug: slug,
  }));
}

// 2. UPDATE: Make generateMetadata async and await params
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const resolvedParams = await params;
  const data = pathwayData[resolvedParams.slug];
  
  if (!data) return { title: 'Not Found' };

  return {
    title: data.seoTitle,
    description: data.seoDescription,
    openGraph: {
      title: data.seoTitle,
      description: data.socialDescription,
    },
    twitter: {
      title: data.seoTitle,
      description: data.socialDescription,
    }
  };
}

// 3. UPDATE: Make the component async and await params
export default async function SubjectPathwayPage({ params }: PageProps) {
  const resolvedParams = await params;
  const data = pathwayData[resolvedParams.slug];

  if (!data) notFound();

  // Generate FAQ Schema for Google Rich Snippets
  const jsonLdFAQ = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: data.faq.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
  };

  return (
    <>
      {/* Inject FAQ Schema */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdFAQ) }} />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-12">
        
        {/* ── HEADER ── */}
        <header className="border-b border-white/10 pb-8">
          <nav aria-label="Breadcrumb" className="mb-6">
            <ol className="flex items-center gap-2 text-xs text-slate-500">
              <li><Link href="/" className="hover:text-white transition-colors">Home</Link></li>
              <li aria-hidden="true">›</li>
              <li><Link href="/exams/gcse" className="hover:text-white transition-colors">GCSE</Link></li>
              <li aria-hidden="true">›</li>
              <li className="text-slate-400 capitalize" aria-current="page">{data.name}</li>
            </ol>
          </nav>

          <h1 className="text-4xl md:text-5xl font-bold text-white tracking-tight mb-4">
            What can you do with GCSE <span style={{ color: COLOR }}>{data.name}</span>?
          </h1>
          <p className="text-lg text-slate-400 max-w-3xl leading-relaxed mb-6">
            {data.heroText}
          </p>

          {/* Key Fact Callout */}
          <div className="inline-flex items-start gap-3 bg-white/5 border border-white/10 rounded-xl p-4 max-w-3xl">
            <span className="text-xl" aria-hidden="true">💡</span>
            <p className="text-sm text-slate-300 font-medium leading-relaxed">
              <strong className="text-white">Key Fact:</strong> {data.keyFact}
            </p>
          </div>
        </header>

        {/* ── GRADE TIERS MATRIX ── */}
        <section>
          <h2 className="text-2xl font-bold text-white mb-6">Sixth Form & A-Level Eligibility by Grade</h2>
          <div className="space-y-6">
            {data.gradeTiers.map((tier, index) => (
              <div key={index} className="bg-[#12141f] border border-white/8 rounded-2xl p-6 md:p-8 flex flex-col md:flex-row gap-6 md:gap-10 shadow-lg shadow-black/20">
                
                <div className="md:w-1/4 shrink-0">
                  <div className="inline-block px-4 py-2 rounded-lg font-mono font-bold text-lg mb-3"
                       style={{ backgroundColor: `${COLOR}15`, color: COLOR, border: `1px solid ${COLOR}30` }}>
                    {tier.grades}
                  </div>
                  <h3 className="text-xl font-bold text-white">{tier.title}</h3>
                </div>
                
                <div className="md:w-3/4 space-y-4">
                  <p className="text-slate-400 text-sm leading-relaxed">
                    {tier.description}
                  </p>
                  
                  <div>
                    <h4 className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-3">Typically Unlocks A-Levels In:</h4>
                    <div className="flex flex-wrap gap-2">
                      {tier.unlockedAlevels.map((alevel, i) => (
                        <span key={i} className="bg-white/5 border border-white/10 text-slate-300 text-xs px-3 py-1.5 rounded-full">
                          {alevel}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

              </div>
            ))}
          </div>
        </section>

        {/* ── DEGREES & CAREERS ── */}
        <section className="grid md:grid-cols-2 gap-6">
          <div className="bg-gradient-to-br from-[#12141f] to-[#0a0c14] border border-white/8 rounded-2xl p-8">
            <div className="w-12 h-12 rounded-xl bg-indigo-500/10 flex items-center justify-center text-2xl mb-6 border border-indigo-500/20">
              🎓
            </div>
            <h2 className="text-xl font-bold text-white mb-4">Popular University Degrees</h2>
            <p className="text-sm text-slate-400 mb-6">Students who excel in {data.name} often pursue higher education in these fields:</p>
            <ul className="space-y-3">
              {data.relatedDegrees.map((degree, i) => (
                <li key={i} className="flex items-center gap-3 text-slate-300 text-sm">
                  <span className="text-indigo-400">→</span> {degree}
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-gradient-to-br from-[#12141f] to-[#0a0c14] border border-white/8 rounded-2xl p-8">
            <div className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl mb-6 border"
                 style={{ backgroundColor: `${COLOR}10`, borderColor: `${COLOR}20` }}>
              💼
            </div>
            <h2 className="text-xl font-bold text-white mb-4">Career Trajectories</h2>
            <p className="text-sm text-slate-400 mb-6">A strong foundation in {data.name} leads directly to these professional roles:</p>
            <ul className="space-y-3">
              {data.careers.map((career, i) => (
                <li key={i} className="flex items-center gap-3 text-slate-300 text-sm">
                  <span style={{ color: COLOR }}>→</span> {career}
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* ── FAQ SECTION ── */}
        <section className="border-t border-white/10 pt-10">
          <h2 className="text-2xl font-bold text-white mb-6">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {data.faq.map((item, index) => (
              <details key={index} className="bg-[#12141f] border border-white/8 rounded-xl group overflow-hidden">
                <summary className="px-6 py-4 font-semibold text-white cursor-pointer flex justify-between items-center list-none">
                  {item.question}
                  <span className="text-slate-500 group-open:rotate-180 transition-transform">↓</span>
                </summary>
                <div className="px-6 pb-4 text-sm text-slate-400 leading-relaxed border-t border-white/5 pt-3">
                  {item.answer}
                </div>
              </details>
            ))}
          </div>
        </section>

        {/* ── BACK CTA ── */}
        <div className="text-center pt-8">
          <Link href="/exams/gcse" 
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold transition-all hover:scale-105"
                style={{ backgroundColor: `${COLOR}20`, color: COLOR }}>
            ← Back to Grade Calculator
          </Link>
        </div>

      </div>
    </>
  );
}
