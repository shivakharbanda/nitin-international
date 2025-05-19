import { Metadata } from 'next';
import { SectionWrapper } from '@/components/ui/SectionWrapper';
import { RecruitForm } from '@/components/forms/RecruitForm';
import { UserCheck, Globe, Award } from 'lucide-react';

export const metadata: Metadata = {
  title: 'For Job Seekers - Nitin International Bridge',
  description: 'Explore exciting career opportunities in the Middle East and beyond. Submit your profile to get started.',
};

export default function RecruitsPage() {
  return (
    <>
      <SectionWrapper className="bg-muted">
        <div className="text-center">
          <UserCheck className="mx-auto h-16 w-16 text-[hsl(var(--primary))] mb-4" />
          <h1 className="text-4xl font-bold tracking-tight text-[hsl(var(--heading-blue))] sm:text-5xl">
            Unlock Your Career Potential
          </h1>
          <p className="mt-6 text-lg leading-8 text-foreground/80 max-w-2xl mx-auto">
            Your next career adventure starts here. Nitin International Bridge connects talented professionals like you with leading employers in dynamic industries.
            Submit your profile by filling out the form below.
          </p>
        </div>
      </SectionWrapper>

      <SectionWrapper>
        <div className="max-w-3xl mx-auto">
           <h2 className="text-2xl font-semibold text-center text-[hsl(var(--heading-blue))] mb-2">
            Why Apply Through Us?
          </h2>
          <div className="grid md:grid-cols-2 gap-6 mb-10 text-center md:text-left">
            <div className="flex flex-col items-center md:items-start p-4 rounded-lg">
                <Globe className="h-8 w-8 text-[hsl(var(--primary))] mb-2" />
                <h3 className="text-lg font-medium text-foreground">Access Exclusive Opportunities</h3>
                <p className="text-sm text-foreground/70">Gain access to job openings not advertised elsewhere, with reputable companies.</p>
            </div>
            <div className="flex flex-col items-center md:items-start p-4 rounded-lg">
                <Award className="h-8 w-8 text-[hsl(var(--primary))] mb-2" />
                <h3 className="text-lg font-medium text-foreground">Expert Guidance</h3>
                <p className="text-sm text-foreground/70">Receive support from our experienced recruiters throughout your application process.</p>
            </div>
          </div>
          <h2 className="text-2xl font-semibold text-center text-[hsl(var(--heading-blue))] mb-8">
            Submit Your Profile
          </h2>
          <RecruitForm />
        </div>
      </SectionWrapper>
    </>
  );
}
