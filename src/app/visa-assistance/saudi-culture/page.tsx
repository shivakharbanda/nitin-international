
import { Metadata } from 'next';
import Link from 'next/link';
import { SectionWrapper } from '@/components/ui/SectionWrapper';
import { Info } from 'lucide-react'; // Using Info as a placeholder icon

export const metadata: Metadata = {
  title: 'Saudi Culture Visa Information - Nitin International',
  description: 'Information regarding visa procedures related to Saudi Cultural Attaché requirements. Nitin International provides guidance for educational and cultural visas.',
};

export default function SaudiCultureVisaPage() {
  return (
    <>
      <SectionWrapper className="bg-muted">
        <div className="text-center">
          <Info className="mx-auto h-16 w-16 text-[hsl(var(--primary))] mb-4" />
          <h1 className="text-4xl font-bold tracking-tight text-[hsl(var(--heading-blue))] sm:text-5xl">
            Saudi Culture Visa Assistance
          </h1>
          <p className="mt-6 text-lg leading-8 text-foreground/80 max-w-3xl mx-auto">
            Nitin International assists with visa applications that fall under the purview of the Saudi Cultural Attaché, often related to educational pursuits, academic qualifications, and cultural exchange programs.
          </p>
        </div>
      </SectionWrapper>

      <SectionWrapper>
        <div className="text-center max-w-2xl mx-auto">
           <h2 className="text-2xl font-semibold text-[hsl(var(--heading-blue))] mb-4">Support for Cultural & Educational Visas:</h2>
           <ul className="list-disc list-inside text-left text-foreground/80 space-y-2 mb-8">
            <li>Guidance on degree attestation and equivalency processes.</li>
            <li>Assistance for student visas and related documentation.</li>
            <li>Support for visas required for academic or cultural professionals.</li>
            <li>Clarification on requirements set forth by the Saudi Cultural Attaché.</li>
          </ul>
          <p className="text-lg text-foreground/80">
            More detailed information concerning visa processes related to the Saudi Cultural Attaché will be updated on this page.
            If you have specific questions or require assistance, please <Link href="/contact" className="text-[hsl(var(--primary))] hover:underline">get in touch with us</Link>.
          </p>
        </div>
      </SectionWrapper>
    </>
  );
}
