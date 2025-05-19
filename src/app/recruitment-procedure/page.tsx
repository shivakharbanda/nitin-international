
import { Metadata } from 'next';
import { SectionWrapper } from '@/components/ui/SectionWrapper';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { GitBranch, Briefcase, Users } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Our Recruitment Procedure - Nitin International',
  description: 'Understand the detailed recruitment procedure followed by Nitin International, for both employers and the agency.',
};

export default function RecruitmentProcedurePage() {
  return (
    <>
      <SectionWrapper className="bg-muted">
        <div className="text-center">
          <GitBranch className="mx-auto h-16 w-16 text-[hsl(var(--primary))] mb-4" />
          <h1 className="text-4xl font-bold tracking-tight text-[hsl(var(--heading-blue))] sm:text-5xl">
            Our Recruitment Procedure
          </h1>
          <p className="mt-6 text-lg leading-8 text-foreground/80 max-w-3xl mx-auto">
            We follow a meticulous and collaborative process to ensure a seamless experience for both employers and candidates. Our procedure is designed for efficiency, transparency, and successful placements.
          </p>
        </div>
      </SectionWrapper>

      <SectionWrapper id="recruitment-steps" className="py-16 md:py-20">
        <Card className="mb-10 shadow-md bg-card">
          <CardHeader>
            <CardTitle className="text-xl text-[hsl(var(--heading-blue))]">Process Overview</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-foreground/80 mb-4">The recruitment journey typically follows these key stages:</p>
            <ol className="list-decimal list-inside space-y-2 text-foreground/80 pl-4">
              <li>Client Requirement Submission</li>
              <li>Nitin International's Initial Processing & Sourcing</li>
              <li>Candidate Screening & Shortlisting of Candidates</li>
              <li>Interviews (conducted by employer or representative)</li>
              <li>Medical Examination</li>
              <li>Immigration & Visa Formalities</li>
              <li>Ticketing & Travel Arrangements</li>
              <li>Candidate Departure & Arrival Confirmation</li>
            </ol>
          </CardContent>
        </Card>

        <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-8">
          <Card className="shadow-md bg-card">
            <CardHeader>
              <div className="flex items-center gap-3">
                <Briefcase className="h-8 w-8 text-[hsl(var(--primary))]" />
                <CardTitle className="text-xl text-[hsl(var(--heading-blue))]">Our Responsibilities (Agency's Role)</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <ul className="list-disc list-inside space-y-3 text-foreground/80 pl-4">
                <li>We always prefer selection of applicant either by oral or practical test to be conducted by the employer or his authorized representative.</li>
                <li>Final screening and short listing of candidates we accumulate enough no of potential candidates qualifying the requirement by qualification, experience, employee specifications and etc.</li>
                <li>We send resume to the employer for FINAL SCREENING AND SHORTLISTING of candidates.</li>
                <li>On obtaining the list of final shortlisted candidates, we FINALIZE THE INTERVIEW DATES and obtain necessary legal permission from emigration authorities.</li>
                <li>After final selection we send the candidates for MEDICAL CHECK UP by the authorized medical center of the respective Embassies of the country of Employment.</li>
                <li>Verification, Attestation of certificates.</li>
                <li>Prepare the necessary documentation for visa process.</li>
                <li>Apply for emigration clearance.</li>
                <li>The employer send confirmed Air Tickets to facilitate travelling as scheduled.</li>
                <li>Handover all the documents to candidate.</li>
                <li>Confirm receipt of candidate arrival.</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="shadow-md bg-card">
            <CardHeader>
               <div className="flex items-center gap-3">
                <Users className="h-8 w-8 text-[hsl(var(--primary))]" />
                <CardTitle className="text-xl text-[hsl(var(--heading-blue))]">Employer's Responsibilities</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="space-y-4 text-foreground/80">
              <div>
                <h4 className="font-semibold text-foreground mb-1">1. Demand Letter:</h4>
                <p className="pl-4">The Employer will formally issue a Demand Letter in Favor of “Nitin International” on the company letter head duly stamped & sign mentioning job categories, Number of Workers required monthly salary, Contract period & other benefits etc.</p>
              </div>
              <div>
                <h4 className="font-semibold text-foreground mb-1">2. Letter of Authority:</h4>
                <p className="pl-4">The Employer will issue letter of Authority in favor of “Nitin International” on the company letter head duly stamped & sign addressed to concern Embassy in India, giving authority to Placement Agency to deal with Interviews, visa related matters, etc.</p>
              </div>
              <div>
                <h4 className="font-semibold text-foreground mb-1">3. Agreement of Employment:</h4>
                <p className="pl-4">This is a standard employment contract on the company letter head duly stamped & sign between Employer & Employee which is required to get immigration from immigration authorities in India.</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </SectionWrapper>
    </>
  );
}
