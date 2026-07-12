// app/exams/[slug]/page.tsx
import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { exams } from '@/lib/exam-data';
import ExamClientPage from './exam-client';

// 1. DYNAMIC METADATA GENERATION
export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const exam = exams.find((e) => e.id === params.slug);

  if (!exam) {
    return {
      title: 'Exam Not Found | GradesNova',
    };
  }

  return {
    title: `${exam.name} — Calculator Coming Soon | GradesNova`,
    description: `${exam.name} exam information and percentile data. Our full ${exam.name} calculator is in progress — see current exam details below.`,
    alternates: {
      canonical: `https://gradesnova.com/exams/${params.slug}`,
    },
    openGraph: {
      title: `${exam.name} | GradesNova`,
      description: `${exam.name} exam information. Full percentile calculator coming soon.`,
      url: `https://gradesnova.com/exams/${params.slug}`,
      type: 'website',
    },
    // Don't let Google index/serve unbuilt calculator pages as if they were live tools
    robots: { index: false, follow: true },
  };
}

// 2. SERVER PAGE RENDER & JSON-LD
export default function ExamPage({ params }: { params: { slug: string } }) {
  const exam = exams.find((e) => e.id === params.slug);

  if (!exam) {
    notFound(); // Triggers Next.js 404 page if slug is invalid
  }

  // No WebApplication schema here — this page has no functional calculator yet.
  // Adding "app" structured data for a tool that doesn't exist misrepresents the page to Google.

  return (
    <>
      {/* Render the interactive UI as a Client Component */}
      <ExamClientPage exam={exam} allExams={exams} />
    </>
  );
}
