import { Metadata } from 'next';
import { SectionWrapper } from '@/components/ui/SectionWrapper';
import { RecruiterForm } from '@/components/forms/RecruiterForm';
import { Briefcase, Users, Zap } from 'lucide-react';

export const metadata: Metadata = {
  title: 'For Recruiters - Nitin International Bridge',
  description: 'Partner with us to find top-tier talent for your organization. Submit your job requirements today.',
};

export default function RecruitersPage() {
  return (
    <>
      <SectionWrapper className="bg-muted">
        <div className="text-center">
          <Briefcase className="mx-auto h-16 w-16 text-[hsl(var(--primary))] mb-4" />
          <h1 className="text-4xl font-bold tracking-tight text-[hsl(var(--heading-blue))] sm:text-5xl">
            Find Exceptional Talent
          </h1>
          <p className="mt-6 text-lg leading-8 text-foreground/80 max-w-2xl mx-auto">
            At Nitin International Bridge, we specialize in connecting organizations like yours with highly skilled and motivated professionals.
            Fill out the form below to tell us about your hiring needs.
          </p>
        </div>
      </SectionWrapper>

      <SectionWrapper>
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-semibold text-center text-[hsl(var(--heading-blue))] mb-2">
            Why Partner With Us?
          </h2>
          <div className="grid md:grid-cols-2 gap-6 mb-10 text-center md:text-left">
            <div className="flex flex-col items-center md:items-start p-4 rounded-lg">
                <Users className="h-8 w-8 text-[hsl(var(--primary))] mb-2" />
                <h3 className="text-lg font-medium text-foreground">Access to Global Talent</h3>
                <p className="text-sm text-foreground/70">Tap into our extensive network of professionals from various specialized fields.</p>
            </div>
            <div className="flex flex-col items-center md:items-start p-4 rounded-lg">
                <Zap className="h-8 w-8 text-[hsl(var(--primary))] mb-2" />
                <h3 className="text-lg font-medium text-foreground">Streamlined Process</h3>
                <p className="text-sm text-foreground/70">We simplify your recruitment journey, from sourcing to shortlisting and interviews.</p>
            </div>
          </div>
          
          <h2 className="text-2xl font-semibold text-center text-[hsl(var(--heading-blue))] mb-8">
            Submit Your Requirements
          </h2>
          <RecruiterForm />
        </div>
      </SectionWrapper>
    </>
  );
}
