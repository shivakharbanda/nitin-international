import { Metadata } from 'next';
import { SectionWrapper } from '@/components/ui/SectionWrapper';
import { FeatureCard } from '@/components/ui/FeatureCard';
import { Cog, Stethoscope, TerminalSquare, ConciergeBell, Users, Building, Lightbulb } from 'lucide-react';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Our Specializations - Nitin International Bridge',
  description: 'Expertise in sourcing engineers, nurses, IT professionals, and more for the Middle East job market. Discover our specialized recruitment areas.',
};

const specializations = [
  {
    icon: Cog,
    title: 'Engineering Professionals',
    description: 'We excel in sourcing a wide range of engineering talent, including Civil, Mechanical, Electrical, and Software Engineers. Our candidates have experience in diverse projects, from large-scale infrastructure to cutting-edge technology development, meeting the specific demands of the Middle East construction and tech sectors.',
    details: 'Our network includes PEs, chartered engineers, project managers, and skilled technicians ready for deployment.'
  },
  {
    icon: Stethoscope,
    title: 'Healthcare & Nursing Staff',
    description: 'Nitin International Bridge is a trusted partner for healthcare institutions seeking qualified nurses (Registered Nurses, Specialist Nurses, Nurse Practitioners) and allied health professionals. We understand the critical importance of compassionate and skilled care in the region.',
    details: 'We ensure candidates meet local licensing requirements and have experience in various hospital and clinical settings.'
  },
  {
    icon: TerminalSquare,
    title: 'IT & Technology Experts',
    description: 'The Middle East is a rapidly growing tech hub. We connect companies with top-tier IT professionals, including software developers, cybersecurity analysts, data scientists, cloud architects, and IT project managers who can drive innovation.',
    details: 'Our candidates are proficient in the latest technologies and agile methodologies.'
  },
  {
    icon: ConciergeBell,
    title: 'Hospitality Professionals',
    description: 'With a booming tourism and hospitality sector, we provide skilled personnel for hotels, resorts, and food & beverage establishments. This includes management roles, chefs, guest service agents, and event coordinators.',
    details: 'We focus on candidates with strong customer service skills and international experience.'
  },
  {
    icon: Users,
    title: 'Human Resources & Admin',
    description: 'Efficient HR and administrative staff are crucial for any organization. We source HR Managers, Recruitment Specialists, Office Managers, Executive Assistants, and other support roles.',
    details: 'Candidates possess strong organizational skills and experience in multicultural environments.'
  },
  {
    icon: Building,
    title: 'Construction & Real Estate',
    description: 'Beyond engineers, we also source Project Managers, Site Supervisors, Quantity Surveyors, and other key personnel for the thriving construction and real estate sectors in the Middle East.',
    details: 'We focus on professionals with a proven track record on large-scale projects.'
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
            Nitin International Bridge has a proven track record of successfully sourcing and placing highly skilled professionals across a diverse range of industries, with a particular focus on the dynamic needs of the Middle East job market.
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
            >
              {spec.details && <p className="mt-3 text-sm text-foreground/70 font-medium">{spec.details}</p>}
            </FeatureCard>
          ))}
        </div>
      </SectionWrapper>

      <SectionWrapper className="bg-secondary">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div>
                <h2 className="text-3xl font-bold tracking-tight text-[hsl(var(--heading-blue))] sm:text-4xl mb-4">
                    Targeting the Middle East Job Market
                </h2>
                <p className="text-lg text-foreground/80 mb-3">
                    Our deep understanding of the Middle East's economic landscape and evolving talent requirements allows us to effectively meet the demands of this vibrant market. We navigate cultural nuances and regulatory frameworks to ensure successful placements.
                </p>
                <ul className="list-disc list-inside space-y-2 text-foreground/70">
                    <li>Expertise in visa processing and local labor laws.</li>
                    <li>Strong network with leading employers across GCC countries.</li>
                    <li>Focus on long-term career growth for candidates.</li>
                    <li>Tailored solutions for diverse industry sectors.</li>
                </ul>
            </div>
            <div>
                <Image
                    src="https://placehold.co/600x400.png"
                    alt="Middle East Skyline"
                    width={600}
                    height={400}
                    className="rounded-lg shadow-xl mx-auto"
                    data-ai-hint="Middle East skyline"
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
                We pride ourselves on a client-centric approach, ensuring transparency, efficiency, and successful outcomes. Our dedicated team works tirelessly to bridge the gap between exceptional talent and outstanding opportunities.
            </p>
        </div>
      </SectionWrapper>
    </>
  );
}
