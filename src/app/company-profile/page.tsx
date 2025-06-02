
import { Metadata } from 'next';
import Image from 'next/image';
import { SectionWrapper } from '@/components/ui/SectionWrapper';
import { Card, CardHeader, CardTitle, CardContent, CardDescription } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { FeatureCard } from '@/components/ui/FeatureCard';
import { Briefcase, Eye, Handshake, Target, ShieldCheck, Award, FileText } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Company Profile - Nitin International',
  description: 'Learn about Nitin International, an overseas manpower consultant and government-approved recruitment agency. Discover our commitment, vision, mission, core values, authorizations, and policies.',
};

export default function CompanyProfilePage() {
  return (
    <>
      <SectionWrapper className="bg-muted">
        <div className="text-center">
          <Briefcase className="mx-auto h-16 w-16 text-[hsl(var(--primary))] mb-4" />
          <h1 className="text-4xl font-bold tracking-tight text-[hsl(var(--heading-blue))] sm:text-5xl">
            Nitin International Profile
          </h1>
          <p className="mt-6 text-lg leading-8 text-foreground/80 max-w-3xl mx-auto">
            An overseas manpower consultant and Government Approved recognized recruitment agency, we have earned an international reputation for excellence and reliability in connecting talent with opportunity.
          </p>
        </div>
      </SectionWrapper>

      <SectionWrapper>
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-semibold text-[hsl(var(--heading-blue))] mb-4">Our Commitment</h2>
            <p className="text-foreground/80 mb-4 leading-relaxed">
              We, Nitin International, follow a well-established process to screen our candidates which is extensive and thorough. We meticulously provide background checks and references, both academic as well as professional. We value quality and trust as the foundation of our company.
            </p>
            <p className="text-foreground/80 leading-relaxed">
              With a team of dedicated people, we understand your requirements and find the best-possible candidates. We provide the best solutions to your problems. Most importantly, we can handle multiple projects and the team always deliver within the deadline. As professionals, we realize that time is valuable to employers looking for a trained and professional staff.
            </p>
          </div>
          <div>
            <Image
              src="/images/about_us_img.png"
              alt="Team working collaboratively in an office"
              width={500}
              height={350}
              className="rounded-lg shadow-xl mx-auto object-cover"
              data-ai-hint="team collaboration office"
            />
          </div>
        </div>
      </SectionWrapper>

      <SectionWrapper id="vision-mission" className="bg-secondary/30">
        <div className="text-center max-w-3xl mx-auto">
          <Eye className="mx-auto h-12 w-12 text-[hsl(var(--primary))] mb-3" />
          <h2 className="text-3xl font-bold tracking-tight text-[hsl(var(--heading-blue))] sm:text-4xl mb-4">
            Our Vision & Mission
          </h2>
          <p className="text-xl font-medium text-foreground/90 mb-4">
            “We seek to enhance the life experiences of our candidates and clients by coordinating a valuable recruiting experience.”
          </p>
          <p className="text-foreground/80 leading-relaxed">
            Our mission is to ensure expert recruitment across various services and help our clients secure the best talent. In a well-coordinated effort, the entire recruitment process enhances the hiring experience and reduces wastage of time. We constantly strive to meet established expectations of clients and candidates, and maintain work ethics. Even after recruitment, we keep in constant touch with the candidate to help him integrate into a new company and work culture. We serve to satisfy the people we work with.
          </p>
        </div>
      </SectionWrapper>

      <SectionWrapper id="core-values">
        <div className="text-center mb-12">
          <Handshake className="mx-auto h-12 w-12 text-[hsl(var(--primary))] mb-3" />
          <h2 className="text-3xl font-bold tracking-tight text-[hsl(var(--heading-blue))] sm:text-4xl">
            Our Core Values
          </h2>
          <p className="mt-4 text-lg text-foreground/80 max-w-2xl mx-auto">
            Our reputation and business is built on the values we practice. They form the foundations of our company.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          <FeatureCard icon={Target} title="Approach" description="Our clients’ interest comes first. We give a competitive advantage to our clients by first understanding their needs, and then by delivering the best." />
          <FeatureCard icon={ShieldCheck} title="Integrity" description="For a company, the integrity of the candidates they will be hiring is of utmost importance. They trust us to screen and evaluate in order to match the profiles. We ensure this through a multi-step assessment process." />
          <FeatureCard icon={Handshake} title="Respect" description="The core nature of our business is to liaison between candidates and clients. We respect both parties’ wishes and demands, ensuring a fair and transparent process for all involved." />
        </div>
      </SectionWrapper>

      <SectionWrapper id="authorizations" className="bg-muted">
        <div className="max-w-3xl mx-auto">
            <div className="text-center mb-10">
                <Award className="mx-auto h-12 w-12 text-[hsl(var(--primary))] mb-3" />
                <h2 className="text-3xl font-bold tracking-tight text-[hsl(var(--heading-blue))] sm:text-4xl">
                Authorizations & License
                </h2>
            </div>
            <Card className="bg-card p-6 rounded-lg shadow-lg">
                <CardContent className="space-y-4 text-foreground/80">
                    <div>
                        <h3 className="font-semibold text-lg text-foreground mb-1">Authorized by:</h3>
                        <ul className="list-disc list-inside space-y-1 pl-4">
                            <li>“Royal Embassy of Saudi Arabia” New Delhi, India</li>
                            <li>“Embassy of the state of Kuwait” Delhi, India (for dealing with all visa related matters and clearing of visa)</li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="font-semibold text-lg text-foreground mb-1">License:</h3>
                        <p className="pl-4">We are registered with Ministry of Overseas Indian Affairs, Government of India for manpower recruitment.</p>
                        <p className="pl-4">Registration No: B-0717/DEL/PER/1000+/3/3674/93</p>
                        <p className="text-sm text-muted-foreground pl-4">(Original license valid until 4th Aug, 2018 - Please contact us for current status)</p>
                    </div>
                </CardContent>
            </Card>
        </div>
      </SectionWrapper>

      <SectionWrapper id="terms-privacy">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-10">
            <FileText className="mx-auto h-12 w-12 text-[hsl(var(--primary))] mb-3" />
            <h2 className="text-3xl font-bold tracking-tight text-[hsl(var(--heading-blue))] sm:text-4xl">
              Important Information
            </h2>
          </div>
          <Accordion type="multiple" className="w-full bg-background p-4 sm:p-6 rounded-lg shadow" defaultValue={['terms-item-1']}>
            <AccordionItem value="terms-item-1" id="terms">
              <AccordionTrigger className="text-lg font-medium hover:text-[hsl(var(--primary))]">Terms and Conditions</AccordionTrigger>
              <AccordionContent className="text-foreground/80 space-y-2">
                <p>Nitin International provides recruitment services connecting job seekers with employers. Our services include sourcing, screening, interview coordination, and placement support. We strive to offer accurate and up-to-date information, but do not guarantee employment or successful placements for all applicants or fulfillment of all employer vacancies.</p>
                <p>Users (both candidates and employers) agree to provide accurate and truthful information. Misrepresentation may lead to termination of services. Users are responsible for their interactions and agreements made through our platform or services.</p>
                <p>Nitin International shall not be liable for any indirect, incidental, special, consequential or punitive damages, or any loss of profits or revenues, whether incurred directly or indirectly, or any loss of data, use, goodwill, or other intangible losses, resulting from your access to or use of or inability to access or use the services.</p>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="privacy-item-1" id="privacy">
              <AccordionTrigger className="text-lg font-medium hover:text-[hsl(var(--primary))]">Privacy Policy</AccordionTrigger>
              <AccordionContent className="text-foreground/80 space-y-2">
                <p><strong>Information Collection:</strong> We collect personal information such as name, contact details, resume/CV, and employment history from candidates. For employers, we collect company details, job requirements, and contact information. This information is used solely for recruitment purposes.</p>
                <p><strong>Use of Information:</strong> Your information is used to match candidates with suitable job opportunities, communicate with you regarding your application or requirements, and improve our services. We do not sell or share your personal data with third parties for marketing purposes without your explicit consent.</p>
                <p><strong>Confidentiality:</strong> We are committed to protecting the confidentiality of your personal and business information.</p>
                <p><strong>Data Security:</strong> We implement appropriate technical and organizational measures to protect your personal data against accidental or unlawful destruction, loss, alteration, unauthorized disclosure, or access.</p>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </SectionWrapper>
    </>
  );
}
