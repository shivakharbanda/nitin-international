import { Metadata } from 'next';
import { SectionWrapper } from '@/components/ui/SectionWrapper';
import { RecruiterForm } from '@/components/forms/RecruiterForm';
import { Briefcase, Users, Zap, Building } from 'lucide-react';

export const metadata: Metadata = {
  title: 'For Employers - Nitin International',
  description: 'Partner with Nitin International to find top-tier talent for your organization. Submit your job requirements today.',
};

export default function RecruitersPage() {
  return (
    <>
      <SectionWrapper className="bg-muted">
        <div className="text-center">
          <Building className="mx-auto h-16 w-16 text-[hsl(var(--primary))] mb-4" />
          <h1 className="text-4xl font-bold tracking-tight text-[hsl(var(--heading-blue))] sm:text-5xl">
            Find Exceptional Talent
          </h1>
          <p className="mt-6 text-lg leading-8 text-foreground/80 max-w-2xl mx-auto">
            At Nitin International, we specialize in connecting organizations like yours with highly skilled and motivated professionals.
            Fill out the form below to tell us about your hiring needs.
          </p>
        </div>
      </SectionWrapper>

      <SectionWrapper>
        <div className="grid lg:grid-cols-5 gap-12 items-start">
          <div className="lg:col-span-2">
            <h2 className="text-2xl font-semibold text-[hsl(var(--heading-blue))] mb-6">
              Why Partner With Us?
            </h2>
            <div className="space-y-6">
              <div className="flex items-start gap-4 p-4 rounded-lg bg-secondary/30 shadow">
                  <div className="p-2 rounded-full bg-[hsl(var(--primary))] text-primary-foreground mt-1">
                    <Users className="h-6 w-6 " />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground">Access Global Talent Pools</h3>
                    <p className="text-sm text-foreground/70">Tap into our extensive network of professionals across diverse specialized fields, ready to contribute to your success.</p>
                  </div>
              </div>
              <div className="flex items-start gap-4 p-4 rounded-lg bg-secondary/30 shadow">
                  <div className="p-2 rounded-full bg-[hsl(var(--primary))] text-primary-foreground mt-1">
                    <Zap className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground">Streamlined & Efficient Process</h3>
                    <p className="text-sm text-foreground/70">We simplify your recruitment journey, from initial sourcing and rigorous screening to interview coordination and final placement.</p>
                  </div>
              </div>
               <div className="flex items-start gap-4 p-4 rounded-lg bg-secondary/30 shadow">
                  <div className="p-2 rounded-full bg-[hsl(var(--primary))] text-primary-foreground mt-1">
                    <Briefcase className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground">Industry Specialization</h3>
                    <p className="text-sm text-foreground/70">Our deep expertise in key sectors ensures we understand your specific needs and can find candidates with the right skills.</p>
                  </div>
              </div>
            </div>
          </div>
          <div className="lg:col-span-3 bg-card p-6 sm:p-8 rounded-lg shadow-xl">
            <h2 className="text-2xl font-semibold text-center text-[hsl(var(--heading-blue))] mb-8">
              Submit Your Requirements
            </h2>
            <RecruiterForm />
          </div>
        </div>
      </SectionWrapper>
    </>
  );
}
