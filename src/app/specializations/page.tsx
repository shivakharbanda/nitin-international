import { Metadata } from 'next';
import { SectionWrapper } from '@/components/ui/SectionWrapper';
import { FeatureCard } from '@/components/ui/FeatureCard';
import { Cog, Stethoscope, TerminalSquare, ConciergeBell, Users, Building, Lightbulb, Briefcase } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

export const metadata: Metadata = {
  title: 'Our Specializations - Nitin International',
  description: 'Expertise in sourcing engineers, nurses, IT professionals, hospitality, HR, construction and more for the Middle East job market and beyond. Discover our specialized recruitment areas.',
};

const specializations = [
  {
    icon: Cog,
    title: 'Engineering Professionals',
    description: 'Sourcing diverse engineering talent: Civil, Mechanical, Electrical, Software. For infrastructure, tech development, and more, tailored to global demands.',
    details: 'Network includes PEs, chartered engineers, project managers, skilled technicians.'
  },
  {
    icon: Stethoscope,
    title: 'Healthcare & Nursing Staff',
    description: 'Connecting healthcare institutions with qualified nurses (RNs, Specialists, NPs) and allied health professionals for compassionate, skilled care.',
    details: 'Ensuring local licensing compliance and experience in varied clinical settings.'
  },
  {
    icon: TerminalSquare,
    title: 'IT & Technology Experts',
    description: 'Fueling tech hubs with top-tier IT talent: developers, cybersecurity analysts, data scientists, cloud architects, and IT project managers.',
    details: 'Candidates proficient in latest technologies and agile methodologies.'
  },
  {
    icon: ConciergeBell,
    title: 'Hospitality Professionals',
    description: 'Providing skilled personnel for hotels, resorts, F&B: management, chefs, guest service agents, event coordinators for the booming tourism sector.',
    details: 'Focus on strong customer service skills and international experience.'
  },
  {
    icon: Users,
    title: 'Human Resources & Admin',
    description: 'Sourcing HR Managers, Recruitment Specialists, Office Managers, Executive Assistants, and crucial support roles for organizational efficiency.',
    details: 'Candidates with strong organizational skills for multicultural environments.'
  },
  {
    icon: Building,
    title: 'Construction & Real Estate',
    description: 'Supplying Project Managers, Site Supervisors, Quantity Surveyors for thriving construction and real estate sectors worldwide.',
    details: 'Professionals with proven track records on large-scale projects.'
  }
];

export default function SpecializationsPage() {
  return (
    <>
      <SectionWrapper className="bg-muted">
        <div className="text-center">
          <Lightbulb className="mx-auto h-16 w-16 text-[hsl(var(--primary))] mb-4" />
          <h1 className="text-4xl font-bold tracking-tight text-[hsl(var(--heading-blue))] sm:text-5xl">
            Our Recruitment Specializations
          </h1>
          <p className="mt-6 text-lg leading-8 text-foreground/80 max-w-3xl mx-auto">
            Nitin International excels in sourcing and placing highly skilled professionals across a diverse range of industries, with a keen focus on the dynamic needs of the Middle East job market and other global employment hubs.
          </p>
        </div>
      </SectionWrapper>

      <SectionWrapper>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {specializations.map((spec, index) => (
            <FeatureCard
              key={index}
              icon={spec.icon}
              title={spec.title}
              description={spec.description}
              className="flex flex-col"
            >
              {spec.details && <p className="mt-auto pt-3 text-sm text-foreground/70 font-medium">{spec.details}</p>}
            </FeatureCard>
          ))}
        </div>
      </SectionWrapper>

      <SectionWrapper className="bg-secondary/50">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div>
                <h2 className="text-3xl font-bold tracking-tight text-[hsl(var(--heading-blue))] sm:text-4xl mb-4">
                    Targeting Global Job Markets
                </h2>
                <p className="text-lg text-foreground/80 mb-3">
                    Our deep understanding of economic landscapes and evolving talent requirements, particularly in the Middle East, allows us to effectively meet diverse market demands. We navigate cultural nuances and regulatory frameworks for successful placements worldwide.
                </p>
                <ul className="list-disc list-inside space-y-2 text-foreground/70">
                    <li>Expertise in visa processing and local labor laws.</li>
                    <li>Strong network with leading employers across GCC & beyond.</li>
                    <li>Focus on long-term career growth for candidates.</li>
                    <li>Tailored solutions for diverse industry sectors.</li>
                </ul>
                 <div className="mt-8">
                    <Link href="/contact" passHref>
                        <Button variant="default" size="lg">
                            Partner With Us
                            <Briefcase className="ml-2 h-5 w-5" />
                        </Button>
                    </Link>
                </div>
            </div>
            <div>
                <Image
                    src="https://placehold.co/600x450.png"
                    alt="Global business connections"
                    width={600}
                    height={450}
                    className="rounded-lg shadow-xl mx-auto object-cover"
                    data-ai-hint="global connections world"
                />
            </div>
        </div>
      </SectionWrapper>
       <SectionWrapper>
        <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-[hsl(var(--heading-blue))] sm:text-4xl">
                Our Advantage
            </h2>
            <p className="mt-4 text-lg text-foreground/80 max-w-2xl mx-auto">
                We pride ourselves on a client-centric approach, ensuring transparency, efficiency, and successful outcomes. Our dedicated team works tirelessly to bridge the gap between exceptional talent and outstanding opportunities across the globe.
            </p>
        </div>
      </SectionWrapper>
    </>
  );
}
