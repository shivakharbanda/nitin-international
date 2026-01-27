
import { Metadata } from 'next';
import Link from 'next/link';
import { SectionWrapper } from '@/components/ui/SectionWrapper';
import { PageHeader } from '@/components/ui/PageHeader';
import { Globe } from 'lucide-react';

export const metadata: Metadata = {
  title: 'International Recruitments - Nitin International',
  description: 'Learn about our International Recruitment services at Nitin International. We connect global talent with premier opportunities.',
};

export default function InternationalRecruitmentsPage() {
  return (
    <>
      <PageHeader
        icon={Globe}
        title="International Recruitments"
        description="Detailed content for our International Recruitment services will be added here soon. Nitin International offers comprehensive solutions for sourcing and placing top-tier global talent."
      />

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
