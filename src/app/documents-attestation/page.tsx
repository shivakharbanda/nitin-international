
import { Metadata } from 'next';
import Link from 'next/link';
import { SectionWrapper } from '@/components/ui/SectionWrapper';
import { PageHeader } from '@/components/ui/PageHeader';
import { FileCheck2 } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Documents Attestation - Nitin International',
  description: 'Discover our Documents Attestation services at Nitin International. We assist with the verification and attestation of all necessary documents.',
};

export default function DocumentsAttestationPage() {
  return (
    <>
      <PageHeader
        icon={FileCheck2}
        title="Documents Attestation"
        description="Detailed content for our Documents Attestation services will be added here soon. Nitin International ensures all your important documents are correctly attested for overseas employment."
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
