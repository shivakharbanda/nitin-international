
import { Metadata } from 'next';
import Link from 'next/link';
import { SectionWrapper } from '@/components/ui/SectionWrapper';
import { Info } from 'lucide-react'; // Using Info as a placeholder icon

export const metadata: Metadata = {
  title: 'Kuwait Embassy Visa Assistance - Nitin International',
  description: 'Information and assistance for visa processes related to the Kuwait Embassy. Nitin International guides you through every step.',
};

export default function KuwaitEmbassyVisaPage() {
  return (
    <>
      <SectionWrapper className="bg-muted">
        <div className="text-center">
          <Info className="mx-auto h-16 w-16 text-[hsl(var(--primary))] mb-4" />
          <h1 className="text-4xl font-bold tracking-tight text-[hsl(var(--heading-blue))] sm:text-5xl">
            Kuwait Embassy Visa Assistance
          </h1>
          <p className="mt-6 text-lg leading-8 text-foreground/80 max-w-3xl mx-auto">
            Nitin International provides comprehensive support for all visa application procedures pertaining to the Embassy of Kuwait. We ensure a smooth and efficient process for your travel and employment needs.
          </p>
        </div>
      </SectionWrapper>

      <SectionWrapper>
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-2xl font-semibold text-[hsl(var(--heading-blue))] mb-4">Our Services Include:</h2>
          <ul className="list-disc list-inside text-left text-foreground/80 space-y-2 mb-8">
            <li>Guidance on required documentation for various visa types.</li>
            <li>Application form filling assistance.</li>
            <li>Scheduling appointments and managing submissions.</li>
            <li>Tracking application status and follow-ups.</li>
            <li>Advisory on embassy-specific requirements and procedures.</li>
          </ul>
          <p className="text-lg text-foreground/80">
            Detailed content specific to Kuwait Embassy visa processes will be available here soon.
            In the meantime, please <Link href="/contact" className="text-[hsl(var(--primary))] hover:underline">contact us</Link> for personalized assistance or immediate inquiries.
          </p>
        </div>
      </SectionWrapper>
    </>
  );
}
