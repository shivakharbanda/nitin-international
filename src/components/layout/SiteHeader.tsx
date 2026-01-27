
"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger, SheetClose } from '@/components/ui/sheet';
import { Menu, X, ChevronDown } from 'lucide-react';
import Image from 'next/image';
import { cn } from '@/lib/utils';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSub,
  DropdownMenuSubTrigger,
  DropdownMenuSubContent,
  DropdownMenuPortal,
} from "@/components/ui/dropdown-menu";

// --- Updated Type Definitions ---
interface NavLinkItem {
  href: string;
  label: string;
  isExternal?: boolean;
}

interface NavSubmenuTriggerItem {
  type: 'submenu';
  label: string;
  items: NavLinkItem[];
}

type DropdownContentItem = NavLinkItem | NavSubmenuTriggerItem;

interface NavDropdownItem {
  type: 'dropdown';
  label: string;
  items: DropdownContentItem[];
}

type NavItem = NavLinkItem | NavDropdownItem;
// --- End of Updated Type Definitions ---

const aboutDropdownItems: DropdownContentItem[] = [
  { href: '/company-profile', label: 'Company Profile' },
  { href: '/founder', label: 'The Founder' },
  { href: '/recruitment-procedure', label: 'Recruitment Procedure' },
  { href: '/business-alliance', label: 'Business Alliance' },
];

const internationalRecruitmentSubLinks: NavLinkItem[] = [
  { href: '/recruiters', label: 'For Recruiters' },
  { href: '/recruits', label: 'For Job Seekers' },
  { href: '/specializations', label: 'Our Specializations' },
];

const visaAssistanceSubLinks: NavLinkItem[] = [
  { href: '/visa-assistance/kuwait-embassy', label: 'Kuwait Embassy' },
  { href: '/visa-assistance/saudi-embassy', label: 'Saudi Embassy' },
  { href: '/visa-assistance/saudi-culture', label: 'Saudi Culture' },
];

const servicesDropdownItems: DropdownContentItem[] = [
  {
    type: 'submenu',
    label: 'International Recruitments',
    items: internationalRecruitmentSubLinks,
  },
  {
    type: 'submenu',
    label: 'Visa Assistance',
    items: visaAssistanceSubLinks,
  },
  { href: '/documents-attestation', label: 'Documents Attestation' },
];

const navItems: NavItem[] = [
  { href: '/', label: 'Home' },
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
        "text-sm font-medium w-full md:w-auto justify-start px-3 py-2 md:px-4 hover:bg-white/10",
        pathname === href
          ? "text-[hsl(var(--primary))]"
          : "text-stone-300 hover:text-white",
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

  const isLinkActive = (href: string) => {
    return pathname === href || pathname.startsWith(href + '/');
  };

  const isSubmenuActive = (items: NavLinkItem[]) => {
    return items.some(item => isLinkActive(item.href));
  };

  const isDropdownActive = (items: DropdownContentItem[]) => {
    return items.some(item => {
      if (item.type === 'submenu') {
        return isSubmenuActive(item.items);
      }
      return isLinkActive(item.href);
    });
  };

  if (!isMounted) {
    return (
      <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-[hsl(var(--surface-dark))]">
        <div className="container mx-auto flex h-20 items-center justify-between px-4 md:px-6">
          <Link href="/" className="flex items-center gap-3">
            <Image
              src="/images/nitin-international logo.png"
              alt="Nitin International Logo"
              width={40}
              height={40}
              className="rounded"
            />
            <span className="text-white text-xl font-bold tracking-tight">Nitin International</span>
          </Link>
          <div className="h-8 w-8 animate-pulse rounded-md bg-white/10 md:hidden" />
        </div>
      </header>
    );
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-[hsl(var(--surface-dark))] backdrop-blur supports-[backdrop-filter]:bg-[hsl(var(--surface-dark))]/95">
      <div className="container mx-auto flex h-20 items-center justify-between px-4 md:px-6">
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/images/nitin-international logo.png"
            alt="Nitin International Logo"
            width={40}
            height={40}
            className="rounded"
          />
          <span className="text-white text-xl font-bold tracking-tight">Nitin International</span>
        </Link>

        <nav className="hidden md:flex items-center space-x-1">
          {navItems.map((item) => {
            if (item.type === 'dropdown') {
              return (
                <DropdownMenu key={item.label}>
                  <DropdownMenuTrigger asChild>
                    <Button
                      variant="ghost"
                      className={cn(
                        "text-sm font-medium flex items-center gap-1 px-3 py-2 md:px-4 hover:bg-white/10",
                        isDropdownActive(item.items)
                          ? "text-[hsl(var(--primary))]"
                          : "text-stone-300 hover:text-white"
                      )}
                    >
                      {item.label}
                      <ChevronDown className="h-4 w-4" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="start" className="bg-[hsl(var(--surface-dark))] border-white/10 shadow-lg">
                    {item.items.map((subItem) => {
                      if (subItem.type === 'submenu') {
                        return (
                          <DropdownMenuSub key={subItem.label}>
                            <DropdownMenuSubTrigger
                              className={cn(
                                "w-full text-left cursor-pointer flex justify-between hover:bg-white/10",
                                isSubmenuActive(subItem.items) ? "text-[hsl(var(--primary))]" : "text-stone-300 hover:text-white"
                              )}
                            >
                              <span>{subItem.label}</span>
                            </DropdownMenuSubTrigger>
                            <DropdownMenuPortal>
                              <DropdownMenuSubContent className="bg-[hsl(var(--surface-dark))] border-white/10 shadow-lg">
                                {subItem.items.map((subSubItem) => (
                                  <DropdownMenuItem key={subSubItem.href} asChild className="hover:bg-white/10 focus:bg-white/10">
                                    <Link
                                      href={subSubItem.href}
                                      className={cn(
                                        "w-full text-left cursor-pointer",
                                        isLinkActive(subSubItem.href) ? "text-[hsl(var(--primary))]" : "text-stone-300 hover:text-white"
                                      )}
                                      target={subSubItem.isExternal ? "_blank" : undefined}
                                      rel={subSubItem.isExternal ? "noopener noreferrer" : undefined}
                                    >
                                      {subSubItem.label}
                                    </Link>
                                  </DropdownMenuItem>
                                ))}
                              </DropdownMenuSubContent>
                            </DropdownMenuPortal>
                          </DropdownMenuSub>
                        );
                      }
                      return (
                        <DropdownMenuItem key={subItem.href} asChild className="hover:bg-white/10 focus:bg-white/10">
                          <Link
                            href={subItem.href}
                            className={cn(
                              "w-full text-left cursor-pointer",
                              isLinkActive(subItem.href) ? "text-[hsl(var(--primary))]" : "text-stone-300 hover:text-white"
                            )}
                            target={subItem.isExternal ? "_blank" : undefined}
                            rel={subItem.isExternal ? "noopener noreferrer" : undefined}
                          >
                            {subItem.label}
                          </Link>
                        </DropdownMenuItem>
                      );
                    })}
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
              <Button variant="ghost" size="icon" className="text-white hover:bg-white/10">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Open menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-full max-w-xs bg-[hsl(var(--surface-dark))] border-white/10 p-6 overflow-y-auto">
              <div className="mb-6 flex items-center justify-between">
                <Link href="/" className="flex items-center gap-3" onClick={() => setIsMobileMenuOpen(false)}>
                  <Image
                    src="/images/nitin-international logo.png"
                    alt="Nitin International Logo"
                    width={32}
                    height={32}
                    className="rounded"
                  />
                  <span className="text-white text-lg font-bold">Nitin International</span>
                </Link>
                <SheetClose asChild>
                   <Button variant="ghost" size="icon" className="text-white hover:bg-white/10" onClick={() => setIsMobileMenuOpen(false)}>
                    <X className="h-6 w-6" />
                    <span className="sr-only">Close menu</span>
                  </Button>
                </SheetClose>
              </div>
              <nav className="flex flex-col space-y-1">
                {navItems.flatMap((item) => {
                  if (item.type === 'dropdown') {
                    const sectionLinks: React.ReactNode[] = [];
                    sectionLinks.push(<div key={`${item.label}-header`} className="px-3 py-2 mt-2 text-sm font-semibold text-white/50">{item.label}</div>);

                    item.items.forEach(subItem => {
                      if (subItem.type === 'submenu') {
                        sectionLinks.push(<div key={`${subItem.label}-subheader`} className="pl-6 px-3 py-1 text-xs font-semibold text-white/40">{subItem.label}</div>);
                        subItem.items.forEach(subSubItem => {
                          sectionLinks.push(
                            <NavLink
                              key={subSubItem.href}
                              href={subSubItem.href}
                              label={subSubItem.label}
                              isExternal={subSubItem.isExternal}
                              onClick={() => setIsMobileMenuOpen(false)}
                              className="pl-9"
                            />
                          );
                        });
                      } else {
                        sectionLinks.push(
                          <NavLink
                            key={subItem.href}
                            href={subItem.href}
                            label={subItem.label}
                            isExternal={subItem.isExternal}
                            onClick={() => setIsMobileMenuOpen(false)}
                            className="pl-6"
                          />
                        );
                      }
                    });
                    return sectionLinks;
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
