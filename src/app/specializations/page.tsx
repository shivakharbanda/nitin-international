
import { Metadata } from 'next';
import { SectionWrapper } from '@/components/ui/SectionWrapper';
import { FeatureCard } from '@/components/ui/FeatureCard';
import { Stethoscope, TerminalSquare, ConciergeBell, Users, Building, HardHat, Car, Lightbulb } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Our Specializations - Nitin International',
  description: 'Discover the diverse range of industries Nitin International specializes in for recruitment, including engineering, healthcare, IT, construction, hospitality, and more.',
};

const specializationsList = [
  {
    icon: TerminalSquare, 
    title: 'Engineering Professionals',
    description: 'Sourcing diverse engineering talent: Civil, Mechanical, Electrical, Software. For infrastructure, tech development, and more, tailored to global demands.',
    details: 'Network includes PEs, chartered engineers, project managers, skilled technicians.'
  },
  {
    icon: Stethoscope,
    title: 'Medical, Pharmaceutical & Healthcare',
    description: 'Connecting institutions with qualified medical doctors, pharmacists, nurses (RNs, Specialists, NPs), and allied health professionals for compassionate, skilled care.',
    details: 'Ensuring local licensing compliance and experience in varied clinical settings.'
  },
  {
    icon: TerminalSquare,
    title: 'IT & Technology Experts',
    description: 'Fueling tech hubs with top-tier IT talent: developers, cybersecurity analysts, data scientists, cloud architects, and IT project managers.',
    details: 'Candidates proficient in latest technologies and agile methodologies.'
  },
  {
    icon: HardHat, 
    title: 'Oil & Gas / Steel Professionals',
    description: 'Specializing in recruitment for the oil & gas and steel industries, from technical roles to project management and specialized labor.',
    details: 'Expertise in sourcing for demanding and high-risk environments.'
  },
  {
    icon: Building,
    title: 'Construction & Civil Engineering',
    description: 'Supplying Project Managers, Civil Engineers, Site Supervisors, Quantity Surveyors, and skilled labor for thriving construction sectors worldwide.',
    details: 'Professionals with proven track records on large-scale infrastructure and building projects.'
  },
  {
    icon: ConciergeBell,
    title: 'Hospitality Professionals',
    description: 'Providing skilled personnel for hotels, resorts, F&B: management, chefs, guest service agents, event coordinators for the booming tourism sector.',
    details: 'Focus on strong customer service skills and international experience.'
  },
  {
    icon: Car,
    title: 'Automotive Professionals',
    description: 'Sourcing skilled professionals for the automotive industry, including technicians, engineers, sales personnel, and management.',
    details: 'Covering manufacturing, repair, and dealership sectors.'
  },
  {
    icon: Users,
    title: 'Human Resources & Admin',
    description: 'Sourcing HR Managers, Recruitment Specialists, Office Managers, Executive Assistants, and crucial support roles for organizational efficiency.',
    details: 'Candidates with strong organizational skills for multicultural environments.'
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

      <SectionWrapper id="specializations-list" className="py-16 md:py-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {specializationsList.map((spec, index) => (
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
    </>
  );
}
