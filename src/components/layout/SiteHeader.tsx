
"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger, SheetClose } from '@/components/ui/sheet';
import { Menu, X, Briefcase } from 'lucide-react';
import { cn } from '@/lib/utils';

interface NavLinkItem {
  href: string;
  label: string;
}

const navItems: NavLinkItem[] = [
  { href: '/', label: 'Home' },
  { href: '/jobs', label: 'Jobs' },
  { href: '/about', label: 'About Us' },
  { href: '/recruiters', label: 'For Employers' },
  { href: '/recruits', label: 'For Job Seekers' },
  { href: '/contact', label: 'Contact Us' },
];

export default function SiteHeader() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);


  const NavLink = ({ href, label, onClick, className }: NavLinkItem & { onClick?: () => void, className?: string }) => (
    <Link href={href} passHref>
      <Button
        variant="ghost"
        className={cn(
          "text-sm font-medium",
          pathname === href
            ? "text-[hsl(var(--primary))] hover:text-[hsl(var(--primary))]/90"
            : "text-foreground/80 hover:text-foreground",
          "justify-start w-full md:w-auto px-3 py-2 md:px-4",
          className
        )}
        onClick={onClick}
      >
        {label}
      </Button>
    </Link>
  );
  
  if (!isMounted) {
    return (
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
          <Link href="/" className="flex items-center gap-2 text-lg font-semibold text-[hsl(var(--heading-blue))]">
            <Briefcase className="h-6 w-6 text-[hsl(var(--primary))]" />
            <span>Nitin International</span>
          </Link>
          <div className="h-8 w-8 animate-pulse rounded-md bg-muted md:hidden" /> {/* Skeleton for menu button */}
        </div>
      </header>
    );
  }


  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
        <Link href="/" className="flex items-center gap-2 text-lg font-semibold text-[hsl(var(--heading-blue))]">
          <Briefcase className="h-6 w-6 text-[hsl(var(--primary))]" />
          <span>Nitin International</span>
        </Link>

        <nav className="hidden md:flex items-center space-x-1">
          {navItems.map((item) => (
             <NavLink key={item.href} href={item.href} label={item.label} />
          ))}
        </nav>

        <div className="md:hidden">
          <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Open menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-full max-w-xs bg-background p-6">
              <div className="mb-6 flex items-center justify-between">
                <Link href="/" className="flex items-center gap-2 text-lg font-semibold text-[hsl(var(--heading-blue))]" onClick={() => setIsMobileMenuOpen(false)}>
                 <Briefcase className="h-6 w-6 text-[hsl(var(--primary))]" />
                  <span>Nitin International</span>
                </Link>
                <SheetClose asChild>
                   <Button variant="ghost" size="icon" onClick={() => setIsMobileMenuOpen(false)}>
                    <X className="h-6 w-6" />
                    <span className="sr-only">Close menu</span>
                  </Button>
                </SheetClose>
              </div>
              <nav className="flex flex-col space-y-2">
                {navItems.map((link) => ( // Use the simplified navItems directly
                  <NavLink 
                    key={link.href} 
                    href={link.href} 
                    label={link.label} 
                    onClick={() => setIsMobileMenuOpen(false)} 
                  />
                ))}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}

    