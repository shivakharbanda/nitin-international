
import Link from 'next/link';
import Image from 'next/image';
import { Copyright, MapPin, Phone } from 'lucide-react';

export default function SiteFooter() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[hsl(var(--surface-dark))] text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 mb-4">
              <Image
                src="/images/nitin-international logo.png"
                alt="Nitin International Logo"
                width={32}
                height={32}
                className="rounded"
              />
              <h3 className="text-lg font-bold">Nitin International</h3>
            </div>
            <p className="text-stone-400 text-sm leading-relaxed">
              Your trusted partner in connecting exceptional talent with premier global opportunities.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-6">Quick Links</h4>
            <nav className="space-y-3 text-sm text-stone-400">
              <Link href="/" className="block hover:text-[hsl(var(--primary))] transition-colors">Home</Link>
              <Link href="/company-profile" className="block hover:text-[hsl(var(--primary))] transition-colors">About Us</Link>
              <Link href="/specializations" className="block hover:text-[hsl(var(--primary))] transition-colors">Industries</Link>
              <Link href="/recruits" className="block hover:text-[hsl(var(--primary))] transition-colors">Job Seekers</Link>
              <Link href="/contact" className="block hover:text-[hsl(var(--primary))] transition-colors">Contact Us</Link>
            </nav>
          </div>

          {/* Legal Links */}
          <div>
            <h4 className="text-lg font-bold mb-6">Legal</h4>
            <nav className="space-y-3 text-sm text-stone-400">
              <Link href="/company-profile#terms" className="block hover:text-[hsl(var(--primary))] transition-colors">Terms of Service</Link>
              <Link href="/company-profile#privacy" className="block hover:text-[hsl(var(--primary))] transition-colors">Privacy Policy</Link>
              <Link href="/refunds-cancellation" className="block hover:text-[hsl(var(--primary))] transition-colors">Refunds & Cancellation</Link>
              <Link href="/jobs" className="block hover:text-[hsl(var(--primary))] transition-colors">Job Listings</Link>
            </nav>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-bold mb-6">Contact Us</h4>
            <address className="space-y-4 text-sm text-stone-400 not-italic">
              <p className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-[hsl(var(--accent))] mt-0.5 shrink-0" />
                <span>34, Corner Market, Malviya Nagar,<br />New Delhi - 110017, India</span>
              </p>
              <p className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-[hsl(var(--accent))] shrink-0" />
                <a href="tel:+919818001166" className="hover:text-[hsl(var(--primary))] transition-colors">+91 9818001166</a>
              </p>
              <p className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-[hsl(var(--accent))] shrink-0" />
                <a href="tel:+919818968885" className="hover:text-[hsl(var(--primary))] transition-colors">+91 9818968885</a>
              </p>
            </address>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-stone-500 flex items-center gap-2">
            <Copyright className="h-4 w-4" />
            {currentYear} Nitin International. All rights reserved.
          </p>
          <p className="text-sm text-stone-500">
            Website Designed & Developed by <a target="_blank" href="https://shiva.work/" className="hover:text-white transition-colors">Shiva</a>
          </p>
        </div>
      </div>
    </footer>
  );
}
