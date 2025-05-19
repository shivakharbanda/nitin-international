
import { Metadata } from 'next';
import Link from 'next/link';
import { SectionWrapper } from '@/components/ui/SectionWrapper';
import { FeatureCard } from '@/components/ui/FeatureCard';
import { Button } from '@/components/ui/button';
import { Handshake, Globe, Users, Puzzle, Clock, Target, Briefcase, Mail } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Business Alliance - Nitin International',
  description: 'Explore partnership opportunities with Nitin International. We offer flexible, customized recruitment solutions for overseas agencies and businesses seeking Indian manpower.',
};

const whyPartnerPoints = [
  {
    icon: Globe,
    title: 'Geo Advantage',
    description: 'With our expertise & experience, Nitin International is perfectly placed geographically, making us the premier recruitment agency to partner with.',
  },
  {
    icon: Handshake,
    title: 'Overseas Partnerships',
    description: 'We are well-equipped to partner with recruitment agencies overseas and have been commended for successfully completing such alliances.',
  },
  {
    icon: Users,
    title: 'Manpower Driven',
    description: 'Local recruitment agents from abroad and workforce supply companies have often tied up with us for their manpower needs from India.',
  },
  {
    icon: Target,
    title: 'Talent Base',
    description: 'Nitin International will take care of your need for personnel from India, to make you and your people well-equipped to handle the local talent requirement.',
  },
  {
    icon: Puzzle,
    title: 'Customised Service',
    description: 'We have been known for our partnership success stories. You can trust us to provide you perfectly customized and complete recruitment solutions.',
  },
  {
    icon: Briefcase, // Changed from TrendingUp as it was causing issues and Briefcase fits better
    title: 'Better Productivity',
    description: 'Partnering with Nitin International will give your firm access to a resource of skilled manpower which will enhance productivity.',
  },
];

const flexibilityPoints = [
   {
    icon: Handshake, // Re-using icon, can be diversified
    title: 'No Strings Attached',
    description: 'We are willing to enter into a strategic alliance with your company, to recruit suitable personnel, regardless of the employment duration.',
  },
  {
    icon: Clock,
    title: 'Flexible Duration',
    description: 'We will work around your form of contract or employment duration – for temporary or project-based staffing, temp-to-hire (probationary staffing) and permanent employees.',
  },
  {
    icon: Target, // Re-using icon
    title: 'Address Your Needs',
    description: 'We understand that not all industries have definite employment durations. We’re prepared for quick response and timely recruitment while maintaining high standards.',
  },
  {
    icon: Puzzle, // Re-using icon
    title: 'Custom Staffing Solutions',
    description: 'Our expertise and experience give us an edge over other recruitment agencies, making us multifaceted and versatile to devise staffing solutions customized as per your needs.',
  },
];


export default function BusinessAlliancePage() {
  return (
    <>
      <SectionWrapper className="bg-muted">
        <div className="text-center">
          <Handshake className="mx-auto h-16 w-16 text-[hsl(var(--primary))] mb-4" />
          <h1 className="text-4xl font-bold tracking-tight text-[hsl(var(--heading-blue))] sm:text-5xl">
            Strategic Business Alliances
          </h1>
          <p className="mt-6 text-lg leading-8 text-foreground/80 max-w-3xl mx-auto">
            Partner with Nitin International to leverage our extensive experience in sourcing top-tier talent from India. We welcome collaborations with overseas recruitment agencies and businesses worldwide.
          </p>
        </div>
      </SectionWrapper>
      
      <SectionWrapper id="why-partner" className="py-16 md:py-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight text-[hsl(var(--heading-blue))] sm:text-4xl">
            Why Partner With Nitin International?
          </h2>
          <p className="mt-4 text-lg text-foreground/80 max-w-2xl mx-auto">
            Gain a competitive edge with our comprehensive recruitment solutions and deep market understanding.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {whyPartnerPoints.map((point, index) => (
            <FeatureCard
              key={index}
              icon={point.icon}
              title={point.title}
              description={point.description}
              className="bg-card"
            />
          ))}
        </div>
      </SectionWrapper>

       <SectionWrapper id="flexible-partnerships" className="bg-secondary/30 py-16 md:py-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight text-[hsl(var(--heading-blue))] sm:text-4xl">
            Flexible & Tailored Partnership Models
          </h2>
          <p className="mt-4 text-lg text-foreground/80 max-w-2xl mx-auto">
            We adapt to your specific needs, offering versatile collaboration structures.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          {flexibilityPoints.map((point, index) => (
            <FeatureCard
              key={index}
              icon={point.icon}
              title={point.title}
              description={point.description}
              className="bg-card"
            />
          ))}
        </div>
      </SectionWrapper>

      <SectionWrapper id="lets-collaborate" className="py-16 md:py-20">
        <div className="text-center max-w-3xl mx-auto">
          <Mail className="mx-auto h-12 w-12 text-[hsl(var(--primary))] mb-4" />
          <h2 className="text-3xl font-bold tracking-tight text-[hsl(var(--heading-blue))] sm:text-4xl mb-6">
            Let's Build a Successful Alliance
          </h2>
          <p className="text-lg text-foreground/80 mb-4">
            Irrespective of how it is literally termed – association, alliance, partnership or contract – we are open to adjusting our conventional tie-up patterns and welcome every form of business collaboration.
          </p>
          <p className="text-lg text-foreground/80 mb-8">
            Recruitment agencies and businesses worldwide are invited to contact us. Let us show you how partnering with Nitin International can benefit your organization.
          </p>
          <Button asChild size="lg" variant="default">
            <a href="mailto:hr.nitininternational@gmail.com">
              Contact Us: hr.nitininternational@gmail.com
            </a>
          </Button>
          <p className="mt-6 text-sm text-muted-foreground">
            Alternatively, visit our <Link href="/contact" className="underline hover:text-[hsl(var(--primary))]">Contact Page</Link> for more ways to get in touch.
          </p>
        </div>
      </SectionWrapper>
    </>
  );
}
