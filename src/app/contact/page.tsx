
import { Metadata } from 'next';
import Link from 'next/link';
import { SectionWrapper } from '@/components/ui/SectionWrapper';
import { ContactForm } from '@/components/forms/ContactForm';
import { Mail, Phone, MapPin, Globe } from 'lucide-react';
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
                  <p className="text-foreground/80">34, Corner Market, Malviya Nagar,</p>
                  <p className="text-foreground/80">New Delhi - 110017, India</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Phone className="h-6 w-6 text-[hsl(var(--primary))] mt-1 shrink-0" />
                <div>
                  <h3 className="font-semibold text-lg">Mobile</h3>
                  <p className="text-foreground/80">
                    <a href="tel:+919818001166" className="hover:text-[hsl(var(--primary))] transition-colors">
                      +91 9818001166
                    </a>
                  </p>
                   <p className="text-foreground/80">
                    <a href="tel:+919818968885" className="hover:text-[hsl(var(--primary))] transition-colors">
                      +91 9818968885
                    </a>
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Mail className="h-6 w-6 text-[hsl(var(--primary))] mt-1 shrink-0" />
                <div>
                  <h3 className="font-semibold text-lg">Email</h3>
                  <p className="text-foreground/80">
                    <a href="mailto:hr.nitininternational@gmail.com" className="hover:text-[hsl(var(--primary))] transition-colors">
                      hr.nitininternational@gmail.com
                    </a>
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Globe className="h-6 w-6 text-[hsl(var(--primary))] mt-1 shrink-0" />
                <div>
                  <h3 className="font-semibold text-lg">Website</h3>
                  <p className="text-foreground/80">
                    <a href="http://www.nitininternational.com" target="_blank" rel="noopener noreferrer" className="hover:text-[hsl(var(--primary))] transition-colors">
                      www.nitininternational.com
                    </a>
                  </p>
                </div>
              </div>
            </div>
            <div className="mt-8">
                 <Image
                    src="/images/contact_us.png"
                    alt="Map illustration showing office location"
                    width={600}
                    height={400}
                    className="rounded-lg shadow-md w-full object-cover"
                    data-ai-hint="map location India"
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
