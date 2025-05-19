import { Metadata } from 'next';
import { SectionWrapper } from '@/components/ui/SectionWrapper';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { ListChecks, UserCheck, ClipboardList, Rocket, FileText, ShieldCheck } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Our Process & Terms - Nitin International Bridge',
  description: 'Understand our recruitment process, and review our terms and conditions for a transparent partnership.',
};

const processSteps = [
  {
    icon: ListChecks,
    title: '1. Application & Requirement Submission',
    description: 'Candidates submit their profiles; employers submit their job requirements. We gather all necessary information to initiate the matching process.',
  },
  {
    icon: UserCheck,
    title: '2. Screening & Shortlisting',
    description: 'Our expert team carefully screens applications and requirements, shortlisting the most suitable candidates and opportunities based on skills, experience, and fit.',
  },
  {
    icon: ClipboardList,
    title: '3. Interview Coordination',
    description: 'We facilitate and coordinate interviews between shortlisted candidates and employers, ensuring a smooth and efficient communication flow.',
  },
  {
    icon: Rocket,
    title: '4. Offer, Placement & Onboarding Support',
    description: 'Once a match is made, we assist with the offer negotiation, placement, and provide support for a successful onboarding experience.',
  },
];

export default function ProcessInfoPage() {
  return (
    <>
      <SectionWrapper className="bg-muted">
        <div className="text-center">
          <ListChecks className="mx-auto h-16 w-16 text-[hsl(var(--primary))] mb-4" />
          <h1 className="text-4xl font-bold tracking-tight text-[hsl(var(--heading-blue))] sm:text-5xl">
            Our Recruitment Process
          </h1>
          <p className="mt-6 text-lg leading-8 text-foreground/80 max-w-2xl mx-auto">
            We follow a structured and transparent process to ensure the best outcomes for both candidates and employers.
          </p>
        </div>
      </SectionWrapper>

      <SectionWrapper>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {processSteps.map((step, index) => (
            <Card key={index} className="text-center shadow-md h-full">
              <CardHeader>
                <step.icon className="mx-auto h-12 w-12 text-[hsl(var(--primary))] mb-3" />
                <CardTitle className="text-xl font-semibold text-[hsl(var(--heading-blue))]">{step.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-foreground/80">{step.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </SectionWrapper>

      <SectionWrapper id="terms" className="bg-secondary">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-10">
            <FileText className="mx-auto h-12 w-12 text-[hsl(var(--primary))] mb-3" />
            <h2 className="text-3xl font-bold tracking-tight text-[hsl(var(--heading-blue))] sm:text-4xl">
              Terms and Conditions
            </h2>
          </div>
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger className="text-lg font-medium hover:text-[hsl(var(--primary))]">Service Overview</AccordionTrigger>
              <AccordionContent className="text-foreground/80">
                Nitin International Bridge provides recruitment services connecting job seekers with employers. Our services include sourcing, screening, interview coordination, and placement support. We strive to offer accurate and up-to-date information, but do not guarantee employment or successful placements for all applicants or fulfillment of all employer vacancies.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger className="text-lg font-medium hover:text-[hsl(var(--primary))]">Obligations of Users</AccordionTrigger>
              <AccordionContent className="text-foreground/80">
                Users (both candidates and employers) agree to provide accurate and truthful information. Misrepresentation may lead to termination of services. Users are responsible for their interactions and agreements made through our platform or services.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger className="text-lg font-medium hover:text-[hsl(var(--primary))]">Confidentiality</AccordionTrigger>
              <AccordionContent className="text-foreground/80">
                We are committed to protecting the confidentiality of your personal and business information. Please refer to our Privacy Policy for detailed information on data handling.
              </AccordionContent>
            </AccordionItem>
             <AccordionItem value="item-4">
              <AccordionTrigger className="text-lg font-medium hover:text-[hsl(var(--primary))]">Limitation of Liability</AccordionTrigger>
              <AccordionContent className="text-foreground/80">
                Nitin International Bridge shall not be liable for any indirect, incidental, special, consequential or punitive damages, or any loss of profits or revenues, whether incurred directly or indirectly, or any loss of data, use, goodwill, or other intangible losses, resulting from your access to or use of or inability to access or use the services.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </SectionWrapper>

      <SectionWrapper id="privacy" className="bg-muted">
         <div className="max-w-3xl mx-auto">
          <div className="text-center mb-10">
            <ShieldCheck className="mx-auto h-12 w-12 text-[hsl(var(--primary))] mb-3" />
            <h2 className="text-3xl font-bold tracking-tight text-[hsl(var(--heading-blue))] sm:text-4xl">
              Privacy Policy
            </h2>
          </div>
           <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="privacy-1">
              <AccordionTrigger className="text-lg font-medium hover:text-[hsl(var(--primary))]">Information Collection</AccordionTrigger>
              <AccordionContent className="text-foreground/80">
                We collect personal information such as name, contact details, resume/CV, and employment history from candidates. For employers, we collect company details, job requirements, and contact information. This information is used solely for recruitment purposes.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="privacy-2">
              <AccordionTrigger className="text-lg font-medium hover:text-[hsl(var(--primary))]">Use of Information</AccordionTrigger>
              <AccordionContent className="text-foreground/80">
                Your information is used to match candidates with suitable job opportunities, communicate with you regarding your application or requirements, and improve our services. We do not sell or share your personal data with third parties for marketing purposes.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="privacy-3">
              <AccordionTrigger className="text-lg font-medium hover:text-[hsl(var(--primary))]">Data Security</AccordionTrigger>
              <AccordionContent className="text-foreground/80">
                We implement appropriate technical and organizational measures to protect your personal data against accidental or unlawful destruction, loss, alteration, unauthorized disclosure, or access.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </SectionWrapper>
    </>
  );
}
