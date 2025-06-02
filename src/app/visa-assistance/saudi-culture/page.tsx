
import { Metadata } from 'next';
import Image from 'next/image';
import { SectionWrapper } from '@/components/ui/SectionWrapper';
import { ContactForm } from '@/components/forms/ContactForm';
import { FileText, CheckSquare, Mail, ShieldCheck, BookOpen } from 'lucide-react'; // Using BookOpen for culture/education

export const metadata: Metadata = {
  title: 'Saudi Cultural Attaché Visa & Attestation - Nitin International',
  description: 'Nitin International assists with visa and document attestation procedures related to the Saudi Cultural Attaché, including educational and academic qualifications.',
};

const attestationServicesCulturePlaceholder = [
  "Degree Certificate Attestation for Saudi Culture Mission",
  "Diploma Certificate Attestation for academic use in KSA",
  "Transcript Attestation",
  "Other educational document attestations as required by the Saudi Cultural Attaché (details to be added)",
];

const visaDocsCulturePlaceholder = [
  "Original Educational Certificates (Degree, Diploma, etc.)",
  "Offer Letter from Saudi educational institution (for student visas)",
  "Passport with valid entry visa for Saudi Arabia (if applicable)",
  "Equivalency Certificate from Ministry of Education, KSA (if required)",
  "Other documents as specified by the Saudi Cultural Attaché",
];

export default function SaudiCultureVisaPage() {
  return (
    <>
      <SectionWrapper className="bg-muted">
        <div className="text-center">
          <BookOpen className="mx-auto h-16 w-16 text-[hsl(var(--primary))] mb-4" />
          <h1 className="text-4xl font-bold tracking-tight text-[hsl(var(--heading-blue))] sm:text-5xl">
            Saudi Cultural Attaché Assistance
          </h1>
          <p className="mt-6 text-lg leading-8 text-foreground/80 max-w-3xl mx-auto">
            Nitin International offers specialized guidance for visa applications and document attestations that fall under the purview of the Saudi Cultural Attaché, primarily concerning educational and academic qualifications.
          </p>
        </div>
      </SectionWrapper>

      <SectionWrapper id="saudi-culture-overview">
        <div className="grid lg:grid-cols-5 gap-10 items-center">
          <div className="lg:col-span-2">
            <Image
              src="https://placehold.co/400x400.png" // Placeholder for cultural/educational imagery
              alt="Saudi Cultural Attaché relevant imagery"
              width={350}
              height={350}
              className="rounded-lg shadow-md mx-auto object-contain bg-background p-2"
              data-ai-hint="Saudi Arabia education culture"
            />
          </div>
          <div className="lg:col-span-3">
            <h2 className="text-2xl font-semibold text-[hsl(var(--heading-blue))] mb-4">
              Navigating Cultural & Educational Requirements
            </h2>
            <p className="text-foreground/80 mb-3 leading-relaxed">
              The Saudi Cultural Attaché plays a crucial role in verifying educational documents for individuals planning to study or work in academic or specialized professional fields in Saudi Arabia. Nitin International provides expert assistance in navigating these specific attestation processes.
            </p>
            <p className="text-foreground/80 leading-relaxed">
              We help ensure your degrees, diplomas, and other academic credentials meet the standards and requirements set forth by the Saudi Cultural Mission for recognition within the Kingdom.
            </p>
          </div>
        </div>
      </SectionWrapper>

      <SectionWrapper id="saudi-culture-attestation-services" className="bg-secondary/30">
        <div className="text-center mb-10">
            <CheckSquare className="mx-auto h-12 w-12 text-[hsl(var(--primary))] mb-3" />
            <h2 className="text-3xl font-bold tracking-tight text-[hsl(var(--heading-blue))] sm:text-4xl">
              Services for Saudi Cultural Attestation
            </h2>
            <p className="mt-4 text-lg text-foreground/80 max-w-2xl mx-auto">
              We assist with the attestation of various educational documents required by the Saudi Cultural Attaché (specifics to be detailed):
            </p>
        </div>
        <div className="max-w-3xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4">
            {attestationServicesCulturePlaceholder.map((service, index) => (
              <div key={index} className="flex items-start">
                <ShieldCheck className="h-5 w-5 text-green-600 mr-2 mt-1 shrink-0" />
                <span className="text-foreground/80">{service}</span>
              </div>
            ))}
        </div>
        <p className="mt-6 text-center text-sm text-muted-foreground max-w-2xl mx-auto">
            Note: The process for cultural attestation can be highly specific. We recommend contacting us for personalized guidance.
          </p>
      </SectionWrapper>
      
      <SectionWrapper id="saudi-culture-docs-required">
         <div className="text-center mb-10">
            <FileText className="mx-auto h-12 w-12 text-[hsl(var(--primary))] mb-3" />
            <h2 className="text-3xl font-bold tracking-tight text-[hsl(var(--heading-blue))] sm:text-4xl">
              General Documents for Cultural Attestation
            </h2>
             <p className="mt-4 text-lg text-foreground/80 max-w-2xl mx-auto">
              Commonly required documents include (this list is indicative and subject to change):
            </p>
        </div>
        <div className="max-w-xl mx-auto">
          <ul className="list-disc list-inside space-y-3 text-foreground/80 pl-4">
            {visaDocsCulturePlaceholder.map((doc, index) => (
              <li key={index}>{doc}</li>
            ))}
          </ul>
          <p className="mt-6 text-sm text-muted-foreground">
            Disclaimer: Document requirements are determined by the Saudi Cultural Attaché and can vary. Always confirm the latest requirements for your specific situation.
          </p>
        </div>
      </SectionWrapper>

      <SectionWrapper id="contact-query-saudi-culture" className="bg-muted">
        <div className="text-center mb-10">
          <Mail className="mx-auto h-12 w-12 text-[hsl(var(--primary))] mb-3" />
          <h2 className="text-3xl font-bold tracking-tight text-[hsl(var(--heading-blue))] sm:text-4xl">
            Questions about Saudi Cultural Attestation?
          </h2>
          <p className="mt-4 text-lg text-foreground/80 max-w-xl mx-auto">
            Let our specialists help you. Please fill out the form below for assistance.
          </p>
        </div>
        <div className="max-w-2xl mx-auto bg-card p-6 sm:p-8 rounded-lg shadow-xl">
          <ContactForm />
        </div>
      </SectionWrapper>
    </>
  );
}
