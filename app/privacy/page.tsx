// app/privacy/page.tsx
import type { Metadata } from 'next';
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';

export const metadata: Metadata = {
  title: 'Privacy Policy | GradesNova',
  description: 'GradesNova privacy policy — how we handle data, cookies, and advertising.',
  alternates: { canonical: 'https://gradesnova.com/privacy' },
  robots: { index: true, follow: true },
};

const LAST_UPDATED = 'March 2026';

export default function PrivacyPage() {
  return (
    <main className="bg-[#0a0c14] min-h-screen">
      <Navbar />

      <header className="bg-[#0d0f1a] border-b border-white/6 py-14">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-xl bg-indigo-500/15 flex items-center justify-center text-xl">🔒</div>
            <span className="text-xs font-mono text-indigo-400/70 uppercase tracking-widest">Legal</span>
          </div>
          <h1 className="text-4xl font-bold text-white tracking-tight mb-3">Privacy Policy</h1>
          <p className="text-sm text-slate-500">Last updated: {LAST_UPDATED}</p>
        </div>
      </header>

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="space-y-10 text-slate-400 leading-relaxed">

          <section aria-labelledby="operator-heading">
            <h2 id="operator-heading" className="text-xl font-bold text-white mb-3">About the operator</h2>
            <p>
              GradesNova is built and maintained by the GradesNova team, led by a data analyst with prior experience running an education platform that grew to over 500,000 monthly users. GradesNova applies the same principle to exam data: every figure comes from an official source, not an estimate.
            </p>
          </section>

          <section aria-labelledby="overview-heading">
            <h2 id="overview-heading" className="text-xl font-bold text-white mb-3">Overview</h2>
            <p>
              GradesNova ("we", "our", "the site") is committed to protecting your privacy. This policy explains what information we collect, how we use it, and your rights regarding that information.
            </p>
            <p className="mt-3">
              The short version: GradesNova does not require you to create an account or provide personal information to use any calculator. We do not sell your data. We use Google AdSense to display ads, which involves Google setting cookies on your device.
            </p>
          </section>

          <section aria-labelledby="collect-heading">
            <h2 id="collect-heading" className="text-xl font-bold text-white mb-3">Information we collect</h2>
            <div className="space-y-4">
              <div className="bg-[#12141f] border border-white/8 rounded-xl p-5">
                <h3 className="text-sm font-semibold text-white mb-2">Information you provide</h3>
                <p className="text-sm">
                  GradesNova calculators do not require any personal information. Scores you enter into the calculators are processed entirely in your browser and are not transmitted to our servers.
                </p>
                <p className="text-sm mt-2">
                  If you contact us by email, we receive your email address and the content of your message. We use this only to respond to you.
                </p>
              </div>
              <div className="bg-[#12141f] border border-white/8 rounded-xl p-5">
                <h3 className="text-sm font-semibold text-white mb-2">Information collected automatically</h3>
                <p className="text-sm">
                  When you visit GradesNova, our hosting provider and analytics tools may automatically collect standard web log information, including your IP address, browser type, referring URL, and pages visited. We use Google Analytics to understand aggregate traffic patterns. This data is anonymised and not used to identify individual visitors.
                </p>
              </div>
            </div>
          </section>

          <section aria-labelledby="cookies-heading">
            <h2 id="cookies-heading" className="text-xl font-bold text-white mb-3">Cookies and advertising</h2>
            <p>
              GradesNova uses Google AdSense to display advertisements. Google AdSense uses cookies to serve ads based on your prior visits to this and other websites. Google's use of advertising cookies enables it and its partners to serve ads based on your visit to GradesNova and other sites on the internet.
            </p>
            <p className="mt-3">
              You may opt out of personalised advertising by visiting <a href="https://www.google.com/settings/ads" target="_blank" rel="noopener noreferrer" className="text-indigo-400 hover:text-indigo-300 underline underline-offset-2">Google Ads Settings</a>. You can also opt out via the <a href="https://www.networkadvertising.org/choices/" target="_blank" rel="noopener noreferrer" className="text-indigo-400 hover:text-indigo-300 underline underline-offset-2">Network Advertising Initiative opt-out page</a>.
            </p>
            <p className="mt-3">
              We also use Google Analytics cookies to understand how visitors use the site. These cookies do not contain personally identifiable information. You can prevent Google Analytics from recognising you on return visits by disabling cookies in your browser.
            </p>
          </section>

          <section aria-labelledby="sharing-heading">
            <h2 id="sharing-heading" className="text-xl font-bold text-white mb-3">How we share information</h2>
            <p>
              We do not sell, trade, or rent your personal information to third parties. We share data only in these limited circumstances:
            </p>
            <ul className="mt-3 space-y-2">
              {[
                'With Google, for analytics and advertising as described above',
                'With our hosting provider, for the purpose of operating the website',
                'If required by law, to comply with a legal obligation',
              ].map(item => (
                <li key={item} className="flex items-start gap-2 text-sm">
                  <span className="text-indigo-400 mt-0.5 shrink-0">→</span>
                  {item}
                </li>
              ))}
            </ul>
          </section>

          <section aria-labelledby="rights-heading">
            <h2 id="rights-heading" className="text-xl font-bold text-white mb-3">Your rights</h2>
            <p>
              Depending on your location, you may have rights under GDPR (EU/UK), CCPA (California), or other applicable laws, including the right to access, correct, or delete personal data we hold about you.
            </p>
            <p className="mt-3">
              Since GradesNova does not collect personal data beyond what is described above, most requests can be addressed by clearing cookies in your browser. For any other requests, contact us at <a href="mailto:jeepredictor.in@gmail.com" className="text-indigo-400 hover:text-indigo-300 underline underline-offset-2">jeepredictor.in@gmail.com</a>.
            </p>
          </section>

          <section aria-labelledby="children-heading">
            <h2 id="children-heading" className="text-xl font-bold text-white mb-3">Children's privacy</h2>
            <p>
              GradesNova is intended for students of all ages. We do not knowingly collect personal information from children under 13. If you believe we have inadvertently collected information from a child under 13, please contact us and we will delete it promptly.
            </p>
          </section>

          <section aria-labelledby="changes-heading">
            <h2 id="changes-heading" className="text-xl font-bold text-white mb-3">Changes to this policy</h2>
            <p>
              We may update this privacy policy from time to time. Changes will be posted on this page with an updated date at the top. Continued use of GradesNova after any changes constitutes acceptance of the updated policy.
            </p>
          </section>

          <section aria-labelledby="contact-heading">
            <h2 id="contact-heading" className="text-xl font-bold text-white mb-3">Contact</h2>
            <p>
              Questions about this privacy policy? Email us at{' '}
              <a href="mailto:jeepredictor.in@gmail.com" className="text-indigo-400 hover:text-indigo-300 underline underline-offset-2">
                jeepredictor.in@gmail.com
              </a>.
            </p>
          </section>

        </div>
      </div>

      <Footer />
    </main>
  );
}
