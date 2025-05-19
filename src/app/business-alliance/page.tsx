
import { Metadata } from 'next';
import { SectionWrapper } from '@/components/ui/SectionWrapper';
import { Handshake } from 'lucide-react'; // Or another suitable icon

export const metadata: Metadata = {
  title: 'Business Alliance - Nitin International',
  description: 'Information about Nitin International\'s business alliances and partnerships.',
};

export default function BusinessAlliancePage() {
  return (
    <>
      <SectionWrapper className="bg-muted">
        <div className="text-center">
          <Handshake className="mx-auto h-16 w-16 text-[hsl(var(--primary))] mb-4" />
          <h1 className="text-4xl font-bold tracking-tight text-[hsl(var(--heading-blue))] sm:text-5xl">
            Business Alliances
          </h1>
        </div>
      </SectionWrapper>
      
      <SectionWrapper className="py-16 md:py-20">
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-lg text-foreground/80">
            Information about our valued business alliances and partnerships will be available here soon. 
            We collaborate with various organizations to enhance our service delivery and extend our reach in the global recruitment market.
          </p>
          <p className="mt-4 text-md text-muted-foreground">
            Please check back later for updates, or contact us for specific inquiries regarding partnerships.
          </p>
        </div>
      </SectionWrapper>
    </>
  );
}
