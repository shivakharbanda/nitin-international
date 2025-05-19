
import { Metadata } from 'next';
import Link from 'next/link';
import { SectionWrapper } from '@/components/ui/SectionWrapper';
import { Info } from 'lucide-react'; // Using Info as a placeholder icon

export const metadata: Metadata = {
  title: 'Saudi Embassy Visa Assistance - Nitin International',
  description: 'Expert guidance for visa applications and procedures related to the Royal Embassy of Saudi Arabia. Nitin International is here to help.',
};

export default function SaudiEmbassyVisaPage() {
  return (
    <>
      <SectionWrapper className="bg-muted">
        <div className="text-center">
          <Info className="mx-auto h-16 w-16 text-[hsl(var(--primary))] mb-4" />
          <h1 className="text-4xl font-bold tracking-tight text-[hsl(var(--heading-blue))] sm:text-5xl">
            Saudi Embassy Visa Assistance
          </h1>
          <p className="mt-6 text-lg leading-8 text-foreground/80 max-w-3xl mx-auto">
            Navigating the visa requirements for the Royal Embassy of Saudi Arabia can be complex. Nitin International offers specialized assistance to ensure your application process is seamless and successful.
          </p>
        </div>
      </SectionWrapper>

      <SectionWrapper>
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-2xl font-semibold text-[hsl(var(--heading-blue))] mb-4">How We Assist:</h2>
           <ul className="list-disc list-inside text-left text-foreground/80 space-y-2 mb-8">
            <li>Comprehensive advice on all visa categories (work, visit, family, etc.).</li>
            <li>Assistance with document preparation and attestation requirements.</li>
            <li>Support with online application portals and submissions.</li>
            <li>Updates on policy changes and specific embassy guidelines.</li>
            <li>Guidance for medical examinations and other prerequisites.</li>
          </ul>
          <p className="text-lg text-foreground/80">
            Specific details and up-to-date information for Saudi Embassy visa services are being compiled and will be updated here shortly.
            For immediate support, please <Link href="/contact" className="text-[hsl(var(--primary))] hover:underline">contact our visa experts</Link>.
          </p>
        </div>
      </SectionWrapper>
    </>
  );
}
