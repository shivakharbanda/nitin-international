
import { Metadata } from 'next';
import Link from 'next/link';
import { SectionWrapper } from '@/components/ui/SectionWrapper';
import { PageHeader } from '@/components/ui/PageHeader';
import { Stamp } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Visa Assistance - Nitin International',
  description: 'Explore our expert Visa Assistance services at Nitin International. We streamline the visa application process for candidates and employers.',
};

export default function VisaAssistancePage() {
  return (
    <>
      <PageHeader
        icon={Stamp}
        title="Visa Assistance"
        description="Detailed content for our Visa Assistance services will be added here soon. Nitin International provides end-to-end support for all visa-related formalities."
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
