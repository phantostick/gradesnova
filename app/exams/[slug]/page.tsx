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
    title: `${exam.name} Percentile Calculator 2026 | GradesNova`,
    description: `Free ${exam.name} percentile calculator to estimate grade boundaries and scores. Enter your score to instantly see your percentile.`,
    alternates: {
      canonical: `https://gradesnova.com/exams/${params.slug}`,
    },
    openGraph: {
      title: `${exam.name} Percentile Calculator | GradesNova`,
      description: `Calculate your exact ${exam.name} percentile instantly. See how your score compares to all test takers.`,
      url: `https://gradesnova.com/exams/${params.slug}`,
      type: 'website',
    },
  };
}

// 2. SERVER PAGE RENDER & JSON-LD
export default function ExamPage({ params }: { params: { slug: string } }) {
  const exam = exams.find((e) => e.id === params.slug);

  if (!exam) {
    notFound(); // Triggers Next.js 404 page if slug is invalid
  }

  // Generate the Rich Snippet Schema for Google
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    "name": `${exam.name} Percentile Calculator`,
    "applicationCategory": "EducationalApplication",
    "operatingSystem": "Any",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD"
    },
    "description": `Free ${exam.name} percentile calculator to estimate grade boundaries and scores.`,
    "url": `https://gradesnova.com/exams/${params.slug}`
  };

  return (
    <>
      {/* Inject JSON-LD into the head of the document */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      {/* Render the interactive UI as a Client Component */}
      <ExamClientPage exam={exam} allExams={exams} />
    </>
  );
}
