import Link from 'next/link';
import { Copyright } from 'lucide-react';

export default function SiteFooter() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t bg-background text-muted-foreground">
      <div className="container mx-auto flex flex-col items-center justify-between gap-4 px-4 py-10 md:flex-row md:px-6">
        <div className="flex items-center gap-2 text-sm">
          <Copyright className="h-4 w-4" />
          <span>{currentYear} Nitin International. All rights reserved.</span>
        </div>
        <nav className="flex flex-wrap justify-center gap-x-6 gap-y-2 md:gap-4">
          <Link href="/process-info#terms" className="text-sm hover:text-foreground transition-colors">
            Terms of Service
          </Link>
          <Link href="/process-info#privacy" className="text-sm hover:text-foreground transition-colors">
            Privacy Policy
          </Link>
          <Link href="/contact" className="text-sm hover:text-foreground transition-colors">
            Contact Us
          </Link>
        </nav>
      </div>
    </footer>
  );
}
