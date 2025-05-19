
import { Metadata } from 'next';
import Image from 'next/image';
import { SectionWrapper } from '@/components/ui/SectionWrapper';
import { Card, CardHeader, CardTitle, CardContent, CardDescription } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { FeatureCard } from '@/components/ui/FeatureCard';
import { Briefcase, CheckCircle, Cog, Stethoscope, TerminalSquare, ConciergeBell, Users, Building, HardHat, Car, Lightbulb, Target, UserCheck, ClipboardList, Rocket, FileText, ShieldCheck, Eye, GitCommit, Handshake, Award } from 'lucide-react';

export const metadata: Metadata = {
  title: 'About Nitin International - Our Story, Values, and Expertise',
  description: 'Learn about Nitin International, an overseas manpower consultant and government-approved recruitment agency. Discover our process, vision, mission, core values, founder, and specializations.',
};

const specializationsList = [
  {
    icon: Cog,
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

const processSteps = [
  {
    icon: ClipboardList,
    title: '1. Requirement Analysis',
    description: 'Employers submit job requirements; candidates submit profiles. We thoroughly understand needs to initiate precise matching.',
  },
  {
    icon: UserCheck,
    title: '2. Candidate Sourcing & Screening',
    description: 'We source candidates through our extensive network and meticulously screen them, including background and reference checks.',
  },
  {
    icon: CheckCircle,
    title: '3. Interview & Shortlisting',
    description: 'We coordinate interviews and shortlist the most suitable candidates based on skills, experience, and cultural fit.',
  },
  {
    icon: Rocket,
    title: '4. Offer, Placement & Onboarding',
    description: 'We assist with offer negotiation, visa processing, placement, and provide post-placement support for smooth integration.',
  },
];


export default function AboutUsPage() {
  return (
    <>
      <SectionWrapper className="bg-muted">
        <div className="text-center">
          <Briefcase className="mx-auto h-16 w-16 text-[hsl(var(--primary))] mb-4" />
          <h1 className="text-4xl font-bold tracking-tight text-[hsl(var(--heading-blue))] sm:text-5xl">
            About Nitin International
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
              src="https://placehold.co/500x350.png"
              alt="Team working together"
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
          <GitCommit className="mx-auto h-12 w-12 text-[hsl(var(--primary))] mb-3" />
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

      <SectionWrapper id="founder" className="bg-muted">
        <div className="grid lg:grid-cols-5 gap-10 items-center">
          <div className="lg:col-span-2">
            <Image
              src="https://placehold.co/400x500.png"
              alt="Mr. Vimal Kumar Jaitly, Founder of Nitin International"
              width={400}
              height={500}
              className="rounded-lg shadow-2xl mx-auto object-cover"
              data-ai-hint="founder portrait professional"
            />
          </div>
          <div className="lg:col-span-3">
            <h2 className="text-3xl font-bold tracking-tight text-[hsl(var(--heading-blue))] sm:text-4xl mb-4">
              Meet Our Founder
            </h2>
            <h3 className="text-2xl font-semibold text-[hsl(var(--primary))] mb-3">Mr. Vimal Kumar Jaitly</h3>
            <p className="text-foreground/80 mb-3 leading-relaxed">
              With over 35 years of experience in the travel & trade industries with leading organizations in India, Mr. Jaitly established Nitin International, which has become a reliable pool of resources within a short span of time. From finding a candidate, holding interviews to even providing the visas, Nitin International has been setting an example of exemplary work ethic since 1993.
            </p>
            <p className="text-foreground/80 leading-relaxed">
              Mr. Jaitly has successfully guided the company by building strong foundations of quality, punctuality, dedication and perfectionism. To him, there is no room for error, specially when it comes to job seekers’ and employers’ satisfaction.
            </p>
          </div>
        </div>
      </SectionWrapper>
      
      <SectionWrapper id="specializations">
        <div className="text-center mb-12">
            <Lightbulb className="mx-auto h-12 w-12 text-[hsl(var(--primary))] mb-3" />
            <h2 className="text-3xl font-bold tracking-tight text-[hsl(var(--heading-blue))] sm:text-4xl">
                Our Recruitment Specializations
            </h2>
            <p className="mt-4 text-lg text-foreground/80 max-w-3xl mx-auto">
                Nitin International excels in sourcing and placing highly skilled professionals across a diverse range of industries, with a keen focus on the dynamic needs of the Middle East job market and other global employment hubs.
            </p>
        </div>
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

      <SectionWrapper id="recruitment-process" className="bg-secondary/30">
        <div className="text-center mb-12">
          <Cog className="mx-auto h-12 w-12 text-[hsl(var(--primary))] mb-3" />
          <h2 className="text-3xl font-bold tracking-tight text-[hsl(var(--heading-blue))] sm:text-4xl">
            Our Recruitment Process
          </h2>
          <p className="mt-4 text-lg text-foreground/80 max-w-2xl mx-auto">
            We follow a structured and transparent process to ensure the best outcomes for both candidates and employers.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {processSteps.map((step, index) => (
            <Card key={index} className="text-center shadow-md hover:shadow-lg transition-shadow duration-300 h-full bg-card">
              <CardHeader>
                <div className="p-3 rounded-full bg-[hsl(var(--primary))] text-primary-foreground inline-block mb-4">
                  <step.icon className="h-8 w-8" />
                </div>
                <CardTitle className="text-xl font-semibold text-[hsl(var(--heading-blue))]">{step.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-foreground/80">{step.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </SectionWrapper>

      <SectionWrapper id="authorizations">
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
                        <ul className="list-disc list-inside space-y-1 pl-2">
                            <li>“Royal Embassy of Saudi Arabia” New Delhi, India</li>
                            <li>“Embassy of the state of Kuwait” Delhi, India (for dealing with all visa related matters and clearing of visa)</li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="font-semibold text-lg text-foreground mb-1">License:</h3>
                        <p>We are registered with Ministry of Overseas Indian Affairs, Government of India for manpower recruitment.</p>
                        <p>Registration No: B-0717/DEL/PER/1000+/3/3674/93</p>
                        <p className="text-sm text-muted-foreground">(Original license valid until 4th Aug, 2018 - Please contact us for current status)</p>
                    </div>
                </CardContent>
            </Card>
        </div>
      </SectionWrapper>

      <SectionWrapper id="terms-privacy" className="bg-muted">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-10">
            <FileText className="mx-auto h-12 w-12 text-[hsl(var(--primary))] mb-3" />
            <h2 className="text-3xl font-bold tracking-tight text-[hsl(var(--heading-blue))] sm:text-4xl">
              Important Information
            </h2>
          </div>
          <Accordion type="multiple" className="w-full bg-background p-4 sm:p-6 rounded-lg shadow" defaultValue={['terms-item-1']}>
            <AccordionItem value="terms-item-1">
              <AccordionTrigger className="text-lg font-medium hover:text-[hsl(var(--primary))]">Terms and Conditions</AccordionTrigger>
              <AccordionContent className="text-foreground/80 space-y-2">
                <p>Nitin International provides recruitment services connecting job seekers with employers. Our services include sourcing, screening, interview coordination, and placement support. We strive to offer accurate and up-to-date information, but do not guarantee employment or successful placements for all applicants or fulfillment of all employer vacancies.</p>
                <p>Users (both candidates and employers) agree to provide accurate and truthful information. Misrepresentation may lead to termination of services. Users are responsible for their interactions and agreements made through our platform or services.</p>
                <p>Nitin International shall not be liable for any indirect, incidental, special, consequential or punitive damages, or any loss of profits or revenues, whether incurred directly or indirectly, or any loss of data, use, goodwill, or other intangible losses, resulting from your access to or use of or inability to access or use the services.</p>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="privacy-item-1">
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

    