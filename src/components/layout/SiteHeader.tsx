
"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger, SheetClose } from '@/components/ui/sheet';
import { Menu, X, Briefcase, ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

interface NavLinkItem {
  href: string;
  label: string;
  isExternal?: boolean;
}

interface NavDropdownItem {
  type: 'dropdown';
  label: string;
  items: NavLinkItem[];
}

type NavItem = NavLinkItem | NavDropdownItem;

const aboutDropdownItems: NavLinkItem[] = [
  { href: '/company-profile', label: 'Company Profile' },
  { href: '/founder', label: 'The Founder' },
  { href: '/recruitment-procedure', label: 'Recruitment Procedure' },
  { href: '/business-alliance', label: 'Business Alliance' },
];

const servicesDropdownItems: NavLinkItem[] = [
  { href: '/specializations', label: 'Our Specializations' },
  // Add more service links here if needed
];

const navItems: NavItem[] = [
  { href: '/', label: 'Home' },
  { href: '/jobs', label: 'Jobs' },
  { href: '/recruiters', label: 'For Employers' },
  { href: '/recruits', label: 'For Job Seekers' },
  { type: 'dropdown', label: 'About', items: aboutDropdownItems },
  { type: 'dropdown', label: 'Services', items: servicesDropdownItems },
  { href: '/contact', label: 'Contact Us' },
];

export default function SiteHeader() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const NavLink = ({ href, label, onClick, className, isExternal }: NavLinkItem & { onClick?: () => void, className?: string }) => (
    <Button
      variant="ghost"
      asChild
      className={cn(
        "text-sm font-medium w-full md:w-auto justify-start px-3 py-2 md:px-4",
        pathname === href
          ? "text-[hsl(var(--primary))] hover:text-[hsl(var(--primary))]/90"
          : "text-foreground/80 hover:text-foreground",
        className
      )}
      onClick={onClick}
    >
      {isExternal ? (
        <a href={href} target="_blank" rel="noopener noreferrer">{label}</a>
      ) : (
        <Link href={href}>{label}</Link>
      )}
    </Button>
  );

  const isDropdownActive = (items: NavLinkItem[]) => {
    return items.some(item => pathname === item.href || pathname.startsWith(item.href + '/'));
  };
  
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
          {navItems.map((item, index) => {
            if (item.type === 'dropdown') {
              return (
                <DropdownMenu key={index}>
                  <DropdownMenuTrigger asChild>
                    <Button
                      variant="ghost"
                      className={cn(
                        "text-sm font-medium flex items-center gap-1 px-3 py-2 md:px-4",
                        isDropdownActive(item.items)
                          ? "text-[hsl(var(--primary))] hover:text-[hsl(var(--primary))]/90"
                          : "text-foreground/80 hover:text-foreground"
                      )}
                    >
                      {item.label}
                      <ChevronDown className="h-4 w-4" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="start" className="bg-background shadow-lg">
                    {item.items.map((subItem) => (
                      <DropdownMenuItem key={subItem.href} asChild>
                        <Link 
                          href={subItem.href} 
                          className={cn(
                            "w-full text-left cursor-pointer",
                            pathname === subItem.href ? "text-[hsl(var(--primary))]" : "text-foreground/80"
                          )}
                          target={subItem.isExternal ? "_blank" : undefined}
                          rel={subItem.isExternal ? "noopener noreferrer" : undefined}
                        >
                          {subItem.label}
                        </Link>
                      </DropdownMenuItem>
                    ))}
                  </DropdownMenuContent>
                </DropdownMenu>
              );
            }
            return <NavLink key={item.href} href={item.href} label={item.label} isExternal={item.isExternal} />;
          })}
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
              <nav className="flex flex-col space-y-1">
                {navItems.flatMap((item) => {
                  if (item.type === 'dropdown') {
                    return [
                      <div key={`${item.label}-header`} className="px-3 py-2 text-sm font-semibold text-muted-foreground">{item.label}</div>,
                      ...item.items.map(subItem => (
                        <NavLink 
                          key={subItem.href} 
                          href={subItem.href} 
                          label={subItem.label}
                          isExternal={subItem.isExternal}
                          onClick={() => setIsMobileMenuOpen(false)}
                          className="pl-6" 
                        />
                      ))
                    ];
                  }
                  return (
                    <NavLink 
                      key={item.href} 
                      href={item.href} 
                      label={item.label} 
                      isExternal={item.isExternal}
                      onClick={() => setIsMobileMenuOpen(false)} 
                    />
                  );
                })}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
