
import { Metadata } from 'next';
import { SectionWrapper } from '@/components/ui/SectionWrapper';
import { ContactForm } from '@/components/forms/ContactForm';
import { FileText, CheckSquare, Mail, ShieldCheck, Building } from 'lucide-react';
import Image from 'next/image';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';

export const metadata: Metadata = {
  title: 'Kuwait Embassy Visa & Attestation Services - Nitin International',
  description: 'Nitin International offers expert assistance for Kuwait visa applications, document attestation, and stamping. Learn about our comprehensive services and required documents.',
};

const attestationServices = [
  "Personal Document Attestation",
  "Experience/Employment Certificate Attestation",
  "All Educational certificate/Degree/Diploma Attestation",
  "Birth Certificate Attestation",
  "Death Certificate Attestation",
  "Marriage Certificate Attestation",
  "Divorce Certificate Attestation",
  "Medical Certificate Attestation",
  "Affidavit Attestation",
  "Commercial Paper Attestation",
  "PCC (Police Clearance Certificate)",
];

const visaStampingDocs = [
  "Original Visa",
  "Employment Agreement",
  "Medical report with Gamca Slip",
  "Original Passport",
  "Colour Photographs",
  "PCC (Police Clearance Certificate)",
  "MEA attestation is mandatory for relevant documents",
];

export default function KuwaitEmbassyVisaPage() {
  return (
    <>
      <SectionWrapper className="bg-muted">
        <div className="text-center">
          <Building className="mx-auto h-16 w-16 text-[hsl(var(--primary))] mb-4" />
          <h1 className="text-4xl font-bold tracking-tight text-[hsl(var(--heading-blue))] sm:text-5xl">
            Kuwait Embassy Visa Assistance
          </h1>
          <p className="mt-6 text-lg leading-8 text-foreground/80 max-w-3xl mx-auto">
            Nitin International provides comprehensive support for all visa application and document attestation procedures pertaining to the Embassy of the State of Kuwait, New Delhi.
          </p>
        </div>
      </SectionWrapper>

      <SectionWrapper id="kuwait-visa-overview">
        <div className="grid lg:grid-cols-5 gap-10 items-center">
          <div className="lg:col-span-2">
            <img
              src="/images/Emblem_of_the_State_of_Kuwait.svg"
              alt="Kuwait Emblem"
              width={400}
              height={400}
              className="rounded-lg shadow-md mx-auto object-contain bg-background p-2"
            />
          </div>
          <div className="lg:col-span-3">
            <h2 className="text-2xl font-semibold text-[hsl(var(--heading-blue))] mb-4">
              Our Authorization & Attestation Process
            </h2>
            <p className="text-foreground/80 mb-3 leading-relaxed">
              We hold valid authorization from the Embassy of the State of Kuwait, New Delhi, India, for dealing with all visa-related matters, including the stamping of papers, which manages the administrative function of the attestation process. We promise to provide you with the latest information and guidelines on the attestation/Apostille attestation procedures.
            </p>
            <p className="text-foreground/80 leading-relaxed">
              Before the grant of a Kuwait Visa, the Government of Kuwait requires all kinds of certificates—such as Degree/Diploma certificates, Education Papers (Degree/Diploma in any field), Marriage Certificates, Birth or Death Certificates, Commercial Papers, PCC, and Affidavits issued from India—to be attested by the Indian Embassy/Consulate in Kuwait for further attestation by the Ministry of Foreign Affairs of the Kuwait Government.
            </p>
          </div>
        </div>
      </SectionWrapper>

      <SectionWrapper id="attestation-services" className="bg-secondary/30">
        <div className="text-center mb-10">
            <CheckSquare className="mx-auto h-12 w-12 text-[hsl(var(--primary))] mb-3" />
            <h2 className="text-3xl font-bold tracking-tight text-[hsl(var(--heading-blue))] sm:text-4xl">
              Certificate Attestation Services
            </h2>
            <p className="mt-4 text-lg text-foreground/80 max-w-2xl mx-auto">
              Nitin International undertakes the attestation of a wide range of Indian certificates for use in Kuwait:
            </p>
        </div>
        <div className="max-w-3xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4">
            {attestationServices.map((service, index) => (
              <div key={index} className="flex items-start">
                <ShieldCheck className="h-5 w-5 text-green-600 mr-2 mt-1 shrink-0" />
                <span className="text-foreground/80">{service}</span>
              </div>
            ))}
        </div>
      </SectionWrapper>
      
      <SectionWrapper id="visa-stamping-docs">
         <div className="text-center mb-10">
            <FileText className="mx-auto h-12 w-12 text-[hsl(var(--primary))] mb-3" />
            <h2 className="text-3xl font-bold tracking-tight text-[hsl(var(--heading-blue))] sm:text-4xl">
              Required Documents for Kuwait Visa Stamping
            </h2>
             <p className="mt-4 text-lg text-foreground/80 max-w-2xl mx-auto">
              Ensure you have the following documents ready for the visa stamping process:
            </p>
        </div>
        <div className="max-w-xl mx-auto">
          <ul className="list-disc list-inside space-y-3 text-foreground/80 pl-4">
            {visaStampingDocs.map((doc, index) => (
              <li key={index}>{doc}</li>
            ))}
          </ul>
        </div>
      </SectionWrapper>

      <SectionWrapper id="contact-query" className="bg-muted">
        <div className="text-center mb-10">
          <Mail className="mx-auto h-12 w-12 text-[hsl(var(--primary))] mb-3" />
          <h2 className="text-3xl font-bold tracking-tight text-[hsl(var(--heading-blue))] sm:text-4xl">
            Have Questions or Need Assistance?
          </h2>
          <p className="mt-4 text-lg text-foreground/80 max-w-xl mx-auto">
            Our team is ready to help you with your Kuwait visa and attestation queries. Fill out the form below, and we'll get back to you shortly.
          </p>
        </div>
        <div className="max-w-2xl mx-auto bg-card p-6 sm:p-8 rounded-lg shadow-xl">
          <ContactForm />
        </div>
      </SectionWrapper>
    </>
  );
}
