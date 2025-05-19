
import { Metadata } from 'next';
import Image from 'next/image';
import { SectionWrapper } from '@/components/ui/SectionWrapper';
import { UserCircle } from 'lucide-react'; // Or another suitable icon

export const metadata: Metadata = {
  title: 'Our Founder - Nitin International',
  description: 'Meet Mr. Vimal Kumar Jaitly, the founder of Nitin International, and learn about his vision and experience.',
};

export default function FounderPage() {
  return (
    <>
      <SectionWrapper className="bg-muted">
        <div className="text-center">
          <UserCircle className="mx-auto h-16 w-16 text-[hsl(var(--primary))] mb-4" />
          <h1 className="text-4xl font-bold tracking-tight text-[hsl(var(--heading-blue))] sm:text-5xl">
            Meet Our Founder
          </h1>
        </div>
      </SectionWrapper>
      
      <SectionWrapper id="founder" className="py-16 md:py-20">
        <div className="grid lg:grid-cols-5 gap-10 items-center">
          <div className="lg:col-span-2">
            <Image
              src="https://placehold.co/400x500.png"
              alt="Mr. Vimal Kumar Jaitly, Founder of Nitin International"
              width={400}
              height={500}
              className="rounded-lg shadow-2xl mx-auto object-cover"
              data-ai-hint="founder portrait professional"
            />
          </div>
          <div className="lg:col-span-3">
            <h2 className="text-3xl font-bold tracking-tight text-[hsl(var(--heading-blue))] sm:text-4xl mb-4">
              Mr. Vimal Kumar Jaitly
            </h2>
            <h3 className="text-2xl font-semibold text-[hsl(var(--primary))] mb-3">Founder, Nitin International</h3>
            <p className="text-foreground/80 mb-3 leading-relaxed">
              With over 35 years of experience in the travel & trade industries with leading organizations in India, Mr. Jaitly established Nitin International, which has become a reliable pool of resources within a short span of time. From finding a candidate, holding interviews to even providing the visas, Nitin International has been setting an example of exemplary work ethic since 1993.
            </p>
            <p className="text-foreground/80 leading-relaxed">
              Mr. Jaitly has successfully guided the company by building strong foundations of quality, punctuality, dedication and perfectionism. To him, there is no room for error, specially when it comes to job seekers’ and employers’ satisfaction.
            </p>
          </div>
        </div>
      </SectionWrapper>
    </>
  );
}
