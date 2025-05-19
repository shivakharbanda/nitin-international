
import { Metadata } from 'next';
import Link from 'next/link';
import { SectionWrapper } from '@/components/ui/SectionWrapper';
import { Stamp } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Visa Assistance - Nitin International',
  description: 'Explore our expert Visa Assistance services at Nitin International. We streamline the visa application process for candidates and employers.',
};

export default function VisaAssistancePage() {
  return (
    <>
      <SectionWrapper className="bg-muted">
        <div className="text-center">
          <Stamp className="mx-auto h-16 w-16 text-[hsl(var(--primary))] mb-4" />
          <h1 className="text-4xl font-bold tracking-tight text-[hsl(var(--heading-blue))] sm:text-5xl">
            Visa Assistance
          </h1>
          <p className="mt-6 text-lg leading-8 text-foreground/80 max-w-3xl mx-auto">
            Detailed content for our Visa Assistance services will be added here soon.
            Nitin International provides end-to-end support for all visa-related formalities.
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
