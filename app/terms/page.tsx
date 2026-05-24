import type { Metadata } from 'next';
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Terms of Service | GradesNova',
  description: 'Terms of service for GradesNova — free exam score percentile calculators for SAT, ACT, GRE, GMAT, LSAT, GCSE and A-Levels.',
  alternates: { canonical: 'https://gradesnova.com/terms' },
  robots: { index: true, follow: true },
};

const LAST_UPDATED = 'May 2026';

const sections = [
  {
    id: 'acceptance',
    icon: '✅',
    title: '1. Acceptance of terms',
    content: (
      <>
        <p>
          By accessing or using GradesNova ("the site", "we", "our"), you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use the site.
        </p>
        <p className="mt-3">
          These terms apply to all visitors and users of gradesnova.com, including any subdomains and associated pages.
        </p>
      </>
    ),
  },
  {
    id: 'service',
    icon: '🎓',
    title: '2. What GradesNova provides',
    content: (
      <>
        <p>
          GradesNova is a free educational tool that provides exam score percentile calculators and grade boundary information for standardised tests including SAT, ACT, GRE, GMAT, LSAT, GCSE and A-Levels.
        </p>
        <p className="mt-3">
          All percentile data and grade boundary figures are sourced from official exam board publications — College Board, ACT Inc., ETS, GMAC, LSAC, AQA, Edexcel, OCR and WJEC. We make reasonable efforts to keep this data accurate and up to date, but we do not guarantee that all figures are current at any given time.
        </p>
        <p className="mt-3">
          <strong className="text-white">GradesNova is not affiliated with, endorsed by, or officially associated with any of the above exam boards or organisations.</strong> All trademarks are the property of their respective owners.
        </p>
      </>
    ),
  },
  {
    id: 'accuracy',
    icon: '📊',
    title: '3. Accuracy and disclaimer',
    content: (
      <>
        <p>
          Calculators and data on GradesNova are provided for informational and educational purposes only. While we take care to ensure accuracy, results should not be used as the sole basis for academic decisions, university applications, or any consequential choices.
        </p>
        <p className="mt-3">
          Grade boundaries and percentile data change each exam year. Always verify your results with the official exam board before making any important decisions.
        </p>
        <p className="mt-3">
          GradesNova is provided "as is" without warranties of any kind, express or implied. We do not guarantee that the site will be available at all times, error-free, or that results will be perfectly accurate.
        </p>
      </>
    ),
  },
  {
    id: 'data',
    icon: '🔒',
    title: '4. Data we collect',
    content: (
      <>
        <p>
          GradesNova does not require you to create an account or provide any personal information to use the calculators. Scores you enter are processed entirely in your browser and are not transmitted to our servers.
        </p>
        <p className="mt-3">
          We do collect <strong className="text-white">anonymous performance and usage metrics</strong> to help us understand how the site is used and to improve the experience. This includes:
        </p>
        <ul className="mt-3 space-y-2">
          {[
            'Time spent on the site and individual pages',
            'Number of pages visited per session',
            'General geographic region (country or region level only, not precise location)',
            'Device type, browser, and operating system',
            'Referring source (how you arrived at the site)',
            'Pages visited and navigation patterns',
          ].map(item => (
            <li key={item} className="flex items-start gap-2 text-sm">
              <span className="text-emerald-400 mt-0.5 shrink-0">→</span>
              {item}
            </li>
          ))}
        </ul>
        <p className="mt-3">
          None of this data is personally identifiable. It is collected in aggregate to understand overall usage patterns, not to track individual users. This data is processed via Google Analytics.
        </p>
      </>
    ),
  },
  {
    id: 'advertising',
    icon: '📢',
    title: '5. Advertising and Google AdSense',
    content: (
      <>
        <p>
          GradesNova displays advertisements served by <strong className="text-white">Google AdSense</strong> and may display ads from third-party advertising networks. These ads help us keep the site free.
        </p>
        <p className="mt-3">
          By using GradesNova, you acknowledge that:
        </p>
        <ul className="mt-3 space-y-2">
          {[
            'Google and its advertising partners may use cookies to serve ads based on your prior visits to this and other websites',
            'Third-party vendors, including Google, use cookies to serve ads based on your interest in the subject matter of our content',
            'You can opt out of personalised advertising by visiting Google Ads Settings at google.com/settings/ads',
            'You can opt out of third-party vendor advertising via the Network Advertising Initiative at networkadvertising.org/choices',
            'We do not control the content of third-party advertisements shown on the site',
            'We do not receive or store any data collected by Google AdSense directly',
          ].map(item => (
            <li key={item} className="flex items-start gap-2 text-sm">
              <span className="text-emerald-400 mt-0.5 shrink-0">→</span>
              {item}
            </li>
          ))}
        </ul>
        <p className="mt-3">
          GradesNova does not sell your data to advertisers. We do not allow advertisers to influence calculator results, data presentation, or editorial content on the site.
        </p>
      </>
    ),
  },
  {
    id: 'cookies',
    icon: '🍪',
    title: '6. Cookies',
    content: (
      <>
        <p>
          GradesNova uses cookies for the following purposes:
        </p>
        <div className="mt-4 bg-[#0a0c14] border border-white/8 rounded-xl overflow-hidden">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-white/4 border-b border-white/8">
                <th scope="col" className="text-left px-4 py-3 text-xs font-semibold text-slate-400 uppercase tracking-wider">Type</th>
                <th scope="col" className="text-left px-4 py-3 text-xs font-semibold text-slate-400 uppercase tracking-wider">Purpose</th>
                <th scope="col" className="text-left px-4 py-3 text-xs font-semibold text-slate-400 uppercase tracking-wider">Provider</th>
              </tr>
            </thead>
            <tbody>
              {[
                ['Analytics', 'Understand how the site is used — page views, session duration, navigation paths', 'Google Analytics'],
                ['Advertising', 'Serve relevant ads based on your interests and browsing behaviour', 'Google AdSense'],
                ['Performance', 'Measure site loading speed and identify technical issues', 'Vercel Analytics'],
              ].map(([type, purpose, provider], i) => (
                <tr key={type} className={`border-b border-white/5 last:border-0 ${i % 2 === 0 ? '' : 'bg-white/2'}`}>
                  <td className="px-4 py-3 text-white font-medium text-xs">{type}</td>
                  <td className="px-4 py-3 text-slate-400 text-xs">{purpose}</td>
                  <td className="px-4 py-3 text-slate-500 text-xs">{provider}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="mt-3">
          You can manage or disable cookies through your browser settings. Disabling cookies may affect the display of advertisements but will not affect the calculators themselves.
        </p>
      </>
    ),
  },
  {
    id: 'intellectual-property',
    icon: '©️',
    title: '7. Intellectual property',
    content: (
      <>
        <p>
          The design, layout, code, and original content of GradesNova are the property of GradesNova. You may not reproduce, copy, or redistribute any part of the site without permission.
        </p>
        <p className="mt-3">
          Grade boundary data and percentile tables are sourced from official exam board publications. These remain the intellectual property of their respective organisations. We present this data in good faith for educational purposes.
        </p>
        <p className="mt-3">
          Exam board names (AQA, Edexcel, OCR, WJEC, College Board, ACT Inc., ETS, GMAC, LSAC) and related trademarks are the property of their respective owners. Use of these names on GradesNova is purely descriptive and does not imply any affiliation or endorsement.
        </p>
      </>
    ),
  },
  {
    id: 'prohibited',
    icon: '🚫',
    title: '8. Prohibited uses',
    content: (
      <>
        <p>You agree not to use GradesNova to:</p>
        <ul className="mt-3 space-y-2">
          {[
            'Scrape, copy, or republish calculator data or boundary tables without attribution',
            'Attempt to reverse engineer, disable, or interfere with the site\'s functionality',
            'Use automated bots or scripts to access the site at scale',
            'Represent GradesNova results as official exam board communications',
            'Reproduce or redistribute our content for commercial purposes without permission',
          ].map(item => (
            <li key={item} className="flex items-start gap-2 text-sm">
              <span className="text-red-400 mt-0.5 shrink-0">✗</span>
              {item}
            </li>
          ))}
        </ul>
      </>
    ),
  },
  {
    id: 'limitation',
    icon: '⚖️',
    title: '9. Limitation of liability',
    content: (
      <p>
        To the fullest extent permitted by law, GradesNova and its operators shall not be liable for any direct, indirect, incidental, or consequential damages arising from your use of the site, including but not limited to reliance on calculator results, data inaccuracies, or site unavailability. Your use of GradesNova is entirely at your own risk.
      </p>
    ),
  },
  {
    id: 'changes',
    icon: '🔄',
    title: '10. Changes to these terms',
    content: (
      <p>
        We may update these Terms of Service from time to time. Changes will be posted on this page with an updated date at the top. Continued use of GradesNova after changes are posted constitutes acceptance of the revised terms.
      </p>
    ),
  },
  {
    id: 'contact',
    icon: '✉️',
    title: '11. Contact',
    content: (
      <p>
        Questions about these terms? Email us at{' '}
        <a href="mailto:jeepredictor.in@gmail.com"
          className="text-emerald-400 hover:text-emerald-300 underline underline-offset-2 transition-colors">
          jeepredictor.in@gmail.com
        </a>. We aim to respond within 48 hours.
      </p>
    ),
  },
];

export default function TermsPage() {
  return (
    <main className="bg-[#0a0c14] min-h-screen">
      <Navbar />

      <header className="bg-[#0d0f1a] border-b border-white/6 py-14 mt-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-xl bg-emerald-500/15 flex items-center justify-center text-xl">⚖️</div>
            <span className="text-xs font-mono text-emerald-400/70 uppercase tracking-widest">Legal</span>
          </div>
          <h1 className="text-4xl font-bold text-white tracking-tight mb-3">Terms of Service</h1>
          <p className="text-sm text-slate-500">Last updated: {LAST_UPDATED}</p>
          <p className="text-slate-400 text-sm mt-3 leading-relaxed">
            These terms govern your use of GradesNova. The short version: use the site fairly, don't misrepresent our data, and understand that while we try hard to be accurate, always verify important results with the official exam board.
          </p>
        </div>
      </header>

      {/* Quick nav */}
      <div className="bg-[#0d0f1a] border-b border-white/6 py-4">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-2">
            {sections.map(s => (
              <a key={s.id} href={`#${s.id}`}
                className="text-xs text-slate-500 hover:text-white transition-colors px-2 py-1 rounded-lg hover:bg-white/5">
                {s.title.split('. ')[1]}
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-14 space-y-10">
        {sections.map(section => (
          <section key={section.id} id={section.id} aria-labelledby={`${section.id}-heading`}>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center text-base shrink-0">
                {section.icon}
              </div>
              <h2 id={`${section.id}-heading`} className="text-xl font-bold text-white">
                {section.title}
              </h2>
            </div>
            <div className="text-slate-400 leading-relaxed pl-11">
              {section.content}
            </div>
          </section>
        ))}

        {/* Bottom nav */}
        <div className="border-t border-white/8 pt-8 flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
          <p className="text-xs text-slate-600">
            © {new Date().getFullYear()} GradesNova. Not affiliated with College Board, ACT Inc., ETS, GMAC, LSAC, AQA, Edexcel, OCR, or WJEC.
          </p>
          <div className="flex gap-4">
            <Link href="/privacy" className="text-xs text-slate-500 hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/contact" className="text-xs text-slate-500 hover:text-white transition-colors">Contact</Link>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}
