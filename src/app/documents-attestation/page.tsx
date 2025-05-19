
import { Metadata } from 'next';
import Link from 'next/link';
import { SectionWrapper } from '@/components/ui/SectionWrapper';
import { FileCheck2 } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Documents Attestation - Nitin International',
  description: 'Discover our Documents Attestation services at Nitin International. We assist with the verification and attestation of all necessary documents.',
};

export default function DocumentsAttestationPage() {
  return (
    <>
      <SectionWrapper className="bg-muted">
        <div className="text-center">
          <FileCheck2 className="mx-auto h-16 w-16 text-[hsl(var(--primary))] mb-4" />
          <h1 className="text-4xl font-bold tracking-tight text-[hsl(var(--heading-blue))] sm:text-5xl">
            Documents Attestation
          </h1>
          <p className="mt-6 text-lg leading-8 text-foreground/80 max-w-3xl mx-auto">
            Detailed content for our Documents Attestation services will be added here soon.
            Nitin International ensures all your important documents are correctly attested for overseas employment.
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
