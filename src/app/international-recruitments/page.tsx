
import { Metadata } from 'next';
import Link from 'next/link';
import { SectionWrapper } from '@/components/ui/SectionWrapper';
import { Globe } from 'lucide-react';

export const metadata: Metadata = {
  title: 'International Recruitments - Nitin International',
  description: 'Learn about our International Recruitment services at Nitin International. We connect global talent with premier opportunities.',
};

export default function InternationalRecruitmentsPage() {
  return (
    <>
      <SectionWrapper className="bg-muted">
        <div className="text-center">
          <Globe className="mx-auto h-16 w-16 text-[hsl(var(--primary))] mb-4" />
          <h1 className="text-4xl font-bold tracking-tight text-[hsl(var(--heading-blue))] sm:text-5xl">
            International Recruitments
          </h1>
          <p className="mt-6 text-lg leading-8 text-foreground/80 max-w-3xl mx-auto">
            Detailed content for our International Recruitment services will be added here soon.
            Nitin International offers comprehensive solutions for sourcing and placing top-tier global talent.
          </p>
        </div>
      </SectionWrapper>

      <SectionWrapper>
        <div className="text-center">
          <p className="text-lg text-foreground/80">
            Please check back later for more information, or <Link href="/contact" className="text-[hsl(var(--primary))] hover:underline">contact us</Link> for immediate inquiries.
          </p>
        </div>
      </SectionWrapper>
    </>
  );
}
