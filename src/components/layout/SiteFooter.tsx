
import Link from 'next/link';
import { Copyright, MapPin, Phone } from 'lucide-react';

export default function SiteFooter() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t bg-background text-muted-foreground">
      <div className="container mx-auto px-4 py-10 md:px-6">
        <div className="grid gap-8 md:grid-cols-3">
          <div className="md:col-span-1">
            <h3 className="text-lg font-semibold text-foreground mb-3">Nitin International</h3>
            <p className="text-sm">
              Your trusted partner in connecting exceptional talent with premier global opportunities.
            </p>
          </div>

          <div className="md:col-span-1">
            <h4 className="text-md font-semibold text-foreground mb-3">Contact Us</h4>
            <address className="text-sm not-italic space-y-2">
              <p className="flex items-start">
                <MapPin className="h-4 w-4 mr-2 mt-0.5 shrink-0 text-[hsl(var(--primary))]"/>
                <span>34, Corner Market, Malviya Nagar, New Delhi - 110017, India</span>
              </p>
              <p className="flex items-center">
                <Phone className="h-4 w-4 mr-2 shrink-0 text-[hsl(var(--primary))]"/>
                <a href="tel:+919818001166" className="hover:text-foreground transition-colors">+91 9818001166</a>
              </p>
              <p className="flex items-center">
                <Phone className="h-4 w-4 mr-2 shrink-0 text-[hsl(var(--primary))]"/>
                <a href="tel:+919818968885" className="hover:text-foreground transition-colors">+91 9818968885</a>
              </p>
            </address>
          </div>

          <div className="md:col-span-1">
            <h4 className="text-md font-semibold text-foreground mb-3">Quick Links</h4>
            <nav className="flex flex-col space-y-2">
              <Link href="/company-profile#terms" className="text-sm hover:text-foreground transition-colors">
                Terms of Service
              </Link>
              <Link href="/company-profile#privacy" className="text-sm hover:text-foreground transition-colors">
                Privacy Policy
              </Link>
              <Link href="/contact" className="text-sm hover:text-foreground transition-colors">
                Contact Us
              </Link>
               <Link href="/jobs" className="text-sm hover:text-foreground transition-colors">
                Job Listings
              </Link>
            </nav>
          </div>
        </div>
        <div className="mt-8 border-t pt-6 flex flex-col items-center justify-between gap-2 text-sm md:flex-row">
          <div className="flex items-center gap-2">
            <Copyright className="h-4 w-4" />
            <span>{currentYear} Nitin International. All rights reserved.</span>
          </div>
          <p className="text-xs text-center md:text-right">
            Website Designed & Developed by AI
          </p>
        </div>
      </div>
    </footer>
  );
}
