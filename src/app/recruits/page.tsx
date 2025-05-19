import { Metadata } from 'next';
import { SectionWrapper } from '@/components/ui/SectionWrapper';
import { RecruitForm } from '@/components/forms/RecruitForm';
import { UserCheck, Globe, Award, ArrowTrendingUp } from 'lucide-react';

export const metadata: Metadata = {
  title: 'For Job Seekers - Nitin International',
  description: 'Explore exciting career opportunities in the Middle East and beyond with Nitin International. Submit your profile to get started.',
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
            Your next career adventure starts here. Nitin International connects talented professionals like you with leading employers in dynamic industries.
            Submit your profile by filling out the form below.
          </p>
        </div>
      </SectionWrapper>

      <SectionWrapper>
         <div className="grid lg:grid-cols-5 gap-12 items-start">
          <div className="lg:col-span-2">
            <h2 className="text-2xl font-semibold text-[hsl(var(--heading-blue))] mb-6">
              Why Apply Through Us?
            </h2>
            <div className="space-y-6">
              <div className="flex items-start gap-4 p-4 rounded-lg bg-secondary/30 shadow">
                  <div className="p-2 rounded-full bg-[hsl(var(--primary))] text-primary-foreground mt-1">
                    <Globe className="h-6 w-6 " />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground">Access Exclusive Opportunities</h3>
                    <p className="text-sm text-foreground/70">Gain access to job openings not advertised elsewhere, with reputable companies in the Middle East and other global hubs.</p>
                  </div>
              </div>
              <div className="flex items-start gap-4 p-4 rounded-lg bg-secondary/30 shadow">
                  <div className="p-2 rounded-full bg-[hsl(var(--primary))] text-primary-foreground mt-1">
                     <Award className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground">Expert Guidance & Support</h3>
                    <p className="text-sm text-foreground/70">Receive personalized support from our experienced recruiters throughout your application process, from CV tips to interview preparation.</p>
                  </div>
              </div>
               <div className="flex items-start gap-4 p-4 rounded-lg bg-secondary/30 shadow">
                  <div className="p-2 rounded-full bg-[hsl(var(--primary))] text-primary-foreground mt-1">
                    <ArrowTrendingUp className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground">Career Advancement</h3>
                    <p className="text-sm text-foreground/70">We focus on matching you with roles that align with your career goals and offer long-term growth potential.</p>
                  </div>
              </div>
            </div>
          </div>
          <div className="lg:col-span-3 bg-card p-6 sm:p-8 rounded-lg shadow-xl">
            <h2 className="text-2xl font-semibold text-center text-[hsl(var(--heading-blue))] mb-8">
              Submit Your Profile
            </h2>
            <RecruitForm />
          </div>
        </div>
      </SectionWrapper>
    </>
  );
}
