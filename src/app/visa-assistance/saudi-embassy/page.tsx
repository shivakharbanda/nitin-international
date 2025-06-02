
import { Metadata } from 'next';
import Image from 'next/image';
import { SectionWrapper } from '@/components/ui/SectionWrapper';
import { ContactForm } from '@/components/forms/ContactForm';
import { FileText, CheckSquare, Mail, ShieldCheck, Building } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Saudi Embassy Visa Assistance - Nitin International',
  description: 'Nitin International offers expert assistance for Saudi Arabia visa applications, document attestation, and stamping. Learn about our services.',
};

const attestationServicesPlaceholder = [
  "Personal Document Attestation (details to be added)",
  "Educational Certificate/Degree/Diploma Attestation (details to be added)",
  "Commercial Paper Attestation (details to be added)",
  "Other relevant document attestations as per Saudi Embassy requirements (details to be added)",
];

const visaStampingDocsPlaceholder = [
  "Original Visa issued by Saudi authorities",
  "Valid Passport",
  "Employment Contract / Offer Letter (if applicable)",
  "Medical Examination Report from approved centers",
  "Police Clearance Certificate (PCC)",
  "Educational and Professional Certificates (attested)",
  "Recent Passport-size Photographs",
  "Other documents as specified by the Saudi Embassy for your visa category",
];

export default function SaudiEmbassyVisaPage() {
  return (
    <>
      <SectionWrapper className="bg-muted">
        <div className="text-center">
          <Building className="mx-auto h-16 w-16 text-[hsl(var(--primary))] mb-4" />
          <h1 className="text-4xl font-bold tracking-tight text-[hsl(var(--heading-blue))] sm:text-5xl">
            Saudi Embassy Visa Assistance
          </h1>
          <p className="mt-6 text-lg leading-8 text-foreground/80 max-w-3xl mx-auto">
            Nitin International provides comprehensive support for all visa application and document attestation procedures pertaining to the Royal Embassy of Saudi Arabia, New Delhi.
          </p>
        </div>
      </SectionWrapper>

      <SectionWrapper id="saudi-visa-overview">
        <div className="grid lg:grid-cols-5 gap-10 items-center">
          <div className="lg:col-span-2">
            <img
              src="/images/Emblem_of_Saudi_Arabia.svg.png"
              alt="Kuwait Emblem"
              width={400}
              height={400}
              className="rounded-lg shadow-md mx-auto object-contain bg-background p-2"
            />
          </div>
          <div className="lg:col-span-3">
            <h2 className="text-2xl font-semibold text-[hsl(var(--heading-blue))] mb-4">
              Our Expertise & Process
            </h2>
            <p className="text-foreground/80 mb-3 leading-relaxed">
              Navigating the visa requirements for the Royal Embassy of Saudi Arabia can be complex. Nitin International is authorized and experienced in handling all visa-related matters, including document attestation and stamping. We stay updated with the latest guidelines to ensure a smooth process for our clients.
            </p>
            <p className="text-foreground/80 leading-relaxed">
              The Kingdom of Saudi Arabia requires various certificates (educational, personal, commercial) issued from India to be attested by relevant authorities before a visa can be granted or for other official purposes within the Kingdom.
            </p>
          </div>
        </div>
      </SectionWrapper>

      <SectionWrapper id="saudi-attestation-services" className="bg-secondary/30">
        <div className="text-center mb-10">
            <CheckSquare className="mx-auto h-12 w-12 text-[hsl(var(--primary))] mb-3" />
            <h2 className="text-3xl font-bold tracking-tight text-[hsl(var(--heading-blue))] sm:text-4xl">
              Certificate Attestation Services for Saudi Arabia
            </h2>
            <p className="mt-4 text-lg text-foreground/80 max-w-2xl mx-auto">
              We facilitate the attestation of a wide range of Indian certificates for use in Saudi Arabia (specific list to be detailed):
            </p>
        </div>
        <div className="max-w-3xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4">
            {attestationServicesPlaceholder.map((service, index) => (
              <div key={index} className="flex items-start">
                <ShieldCheck className="h-5 w-5 text-green-600 mr-2 mt-1 shrink-0" />
                <span className="text-foreground/80">{service}</span>
              </div>
            ))}
        </div>
         <p className="mt-6 text-center text-sm text-muted-foreground max-w-2xl mx-auto">
            Note: Specific services and requirements may vary. Please contact us for a detailed consultation. MEA (Ministry of External Affairs, India) attestation is a prerequisite for many documents.
          </p>
      </SectionWrapper>
      
      <SectionWrapper id="saudi-visa-stamping-docs">
         <div className="text-center mb-10">
            <FileText className="mx-auto h-12 w-12 text-[hsl(var(--primary))] mb-3" />
            <h2 className="text-3xl font-bold tracking-tight text-[hsl(var(--heading-blue))] sm:text-4xl">
              General Documents for Saudi Visa Stamping
            </h2>
             <p className="mt-4 text-lg text-foreground/80 max-w-2xl mx-auto">
              While specific requirements vary by visa type, common documents include (detailed list to be confirmed):
            </p>
        </div>
        <div className="max-w-xl mx-auto">
          <ul className="list-disc list-inside space-y-3 text-foreground/80 pl-4">
            {visaStampingDocsPlaceholder.map((doc, index) => (
              <li key={index}>{doc}</li>
            ))}
          </ul>
           <p className="mt-6 text-sm text-muted-foreground">
            Important: This is a general list. Document requirements can change and are specific to the visa category (e.g., work visa, family visit visa, business visa). Always verify with us or the embassy for the most current and precise requirements.
          </p>
        </div>
      </SectionWrapper>

      <SectionWrapper id="contact-query-saudi" className="bg-muted">
        <div className="text-center mb-10">
          <Mail className="mx-auto h-12 w-12 text-[hsl(var(--primary))] mb-3" />
          <h2 className="text-3xl font-bold tracking-tight text-[hsl(var(--heading-blue))] sm:text-4xl">
            Queries for Saudi Visa or Attestation?
          </h2>
          <p className="mt-4 text-lg text-foreground/80 max-w-xl mx-auto">
            Our expert team is ready to assist you. Fill out the form below, and we'll guide you through the process.
          </p>
        </div>
        <div className="max-w-2xl mx-auto bg-card p-6 sm:p-8 rounded-lg shadow-xl">
          <ContactForm />
        </div>
      </SectionWrapper>
    </>
  );
}
