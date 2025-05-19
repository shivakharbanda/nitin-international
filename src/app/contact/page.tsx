import { Metadata } from 'next';
import { SectionWrapper } from '@/components/ui/SectionWrapper';
import { ContactForm } from '@/components/forms/ContactForm';
import { Mail, Phone, MapPin } from 'lucide-react';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Contact Us - Nitin International',
  description: 'Get in touch with Nitin International for your recruitment needs or career inquiries. We are here to help.',
};

export default function ContactPage() {
  return (
    <>
      <SectionWrapper className="bg-muted">
        <div className="text-center">
          <Mail className="mx-auto h-16 w-16 text-[hsl(var(--primary))] mb-4" />
          <h1 className="text-4xl font-bold tracking-tight text-[hsl(var(--heading-blue))] sm:text-5xl">
            Get in Touch
          </h1>
          <p className="mt-6 text-lg leading-8 text-foreground/80 max-w-2xl mx-auto">
            We're here to assist you with your recruitment needs or career aspirations. Reach out to us through any of the channels below, or use the form to send a direct message.
          </p>
        </div>
      </SectionWrapper>

      <SectionWrapper>
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <h2 className="text-2xl font-semibold text-[hsl(var(--heading-blue))] mb-6">
              Contact Information
            </h2>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <MapPin className="h-6 w-6 text-[hsl(var(--primary))] mt-1 shrink-0" />
                <div>
                  <h3 className="font-semibold text-lg">Our Office</h3>
                  <p className="text-foreground/80">123 Recruitment Drive, Talent City, TC 45678</p>
                  <p className="text-foreground/80">Global Operations Hub</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Phone className="h-6 w-6 text-[hsl(var(--primary))] mt-1 shrink-0" />
                <div>
                  <h3 className="font-semibold text-lg">Phone</h3>
                  <p className="text-foreground/80">
                    <a href="tel:+1234567890" className="hover:text-[hsl(var(--primary))] transition-colors">
                      +1 (234) 567-890
                    </a> (Main Office)
                  </p>
                   <p className="text-foreground/80">
                    <a href="tel:+0987654321" className="hover:text-[hsl(var(--primary))] transition-colors">
                      +0 (987) 654-321
                    </a> (Candidate Support)
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Mail className="h-6 w-6 text-[hsl(var(--primary))] mt-1 shrink-0" />
                <div>
                  <h3 className="font-semibold text-lg">Email</h3>
                  <p className="text-foreground/80">
                    <a href="mailto:info@nitinint.com" className="hover:text-[hsl(var(--primary))] transition-colors">
                      info@nitinint.com
                    </a> (General Inquiries)
                  </p>
                  <p className="text-foreground/80">
                    <a href="mailto:careers@nitinint.com" className="hover:text-[hsl(var(--primary))] transition-colors">
                      careers@nitinint.com
                    </a> (Job Seekers)
                  </p>
                   <p className="text-foreground/80">
                    <a href="mailto:partners@nitinint.com" className="hover:text-[hsl(var(--primary))] transition-colors">
                     partners@nitinint.com
                    </a> (Employers)
                  </p>
                </div>
              </div>
            </div>
            <div className="mt-8">
                 <Image 
                    src="https://placehold.co/600x400.png" 
                    alt="Map illustration showing office location" 
                    width={600}
                    height={400}
                    className="rounded-lg shadow-md w-full object-cover"
                    data-ai-hint="map location"
                 />
            </div>
          </div>
          <div>
            <h2 className="text-2xl font-semibold text-[hsl(var(--heading-blue))] mb-6">
              Send Us a Message
            </h2>
            <ContactForm />
          </div>
        </div>
      </SectionWrapper>
    </>
  );
}
