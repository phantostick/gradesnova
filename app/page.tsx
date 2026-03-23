import type { Metadata } from 'next';
import { Navbar } from '@/components/navbar';
import { Hero } from '@/components/hero';
import { ExamGrid } from '@/components/exam-grid';
import { HowItWorks } from '@/components/how-it-works';
import { TrustBar } from '@/components/trust-bar';
import { Testimonials } from '@/components/testimonials';
import { Footer } from '@/components/footer';

export const metadata: Metadata = {
  title: 'GradesNova — Free Exam Score Percentile Calculators 2026',
  description:
    'Free SAT, ACT, GRE, GMAT, LSAT, GCSE and A-Level percentile calculators. Enter your score, instantly see your percentile. No signup. Updated for 2026.',
  openGraph: {
    title: 'GradesNova — Know your score before results day',
    description:
      'Free percentile calculators for SAT, ACT, GRE, GMAT, LSAT, GCSE and A-Levels. Instantly see where you rank.',
    type: 'website',
    url: 'https://gradesnova.com',
  },
};

export default function Home() {
  return (
    <main className="overflow-hidden bg-[#0a0c14]">
      <Navbar />
      <Hero />
      <TrustBar />
      <ExamGrid />
      <HowItWorks />
      <Testimonials />
      <Footer />
    </main>
  );
}