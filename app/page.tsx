import { Navbar } from '@/components/navbar';
import { Hero } from '@/components/hero';
import { ExamGrid } from '@/components/exam-grid';
import { HowItWorks } from '@/components/how-it-works';
import { TrustBar } from '@/components/trust-bar';
import { Testimonials } from '@/components/testimonials';
import { Footer } from '@/components/footer';

export const metadata = {
  title: 'GradesNova - Master Any Exam with AI-Powered Learning',
  description: 'Personalized study plans, intelligent tutoring, and real exam-like practice tests for SAT, ACT, GRE, GMAT, LSAT, GCSE, and A-Levels.',
  openGraph: {
    title: 'GradesNova - Master Any Exam with AI-Powered Learning',
    description: 'Achieve your target exam score with personalized AI-powered learning.',
    type: 'website',
  },
};

export default function Home() {
  return (
    <main className="overflow-hidden">
      <Navbar />
      <Hero />
      <ExamGrid />
      <TrustBar />
      <HowItWorks />
      <Testimonials />
      <Footer />
    </main>
  );
}
