
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
  DropdownMenuSub,
  DropdownMenuSubTrigger,
  DropdownMenuSubContent,
  DropdownMenuPortal, // Added for sub-menus
} from "@/components/ui/dropdown-menu";

// --- Updated Type Definitions ---
interface NavLinkItem {
  href: string;
  label: string;
  isExternal?: boolean;
}

// Represents an item that, when clicked in a dropdown, opens a sub-dropdown
interface NavSubmenuTriggerItem {
  type: 'submenu';
  label: string;
  items: NavLinkItem[]; // Submenu items are direct links
}

// An item in a top-level dropdown can now be a direct link or a submenu trigger
type DropdownContentItem = NavLinkItem | NavSubmenuTriggerItem;

// Represents a top-level dropdown menu in the main navbar
interface NavDropdownItem {
  type: 'dropdown';
  label: string;
  items: DropdownContentItem[];
}

// A top-level navigation item can be a direct link or a dropdown
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

const servicesDropdownItems: DropdownContentItem[] = [
  {
    type: 'submenu',
    label: 'International Recruitments',
    items: internationalRecruitmentSubLinks,
  },
  { href: '/visa-assistance', label: 'Visa Assistance' },
  { href: '/documents-attestation', label: 'Documents Attestation' },
];

const navItems: NavItem[] = [
  { href: '/', label: 'Home' },
  { href: '/jobs', label: 'Jobs' },
  { href: '/recruiters', label: 'For Employers' }, // Direct link, also in submenu
  { href: '/recruits', label: 'For Job Seekers' },   // Direct link, also in submenu
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
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
          <Link href="/" className="flex items-center gap-2 text-lg font-semibold text-[hsl(var(--heading-blue))]">
            <Briefcase className="h-6 w-6 text-[hsl(var(--primary))]" />
            <span>Nitin International</span>
          </Link>
          <div className="h-8 w-8 animate-pulse rounded-md bg-muted md:hidden" />
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
          {navItems.map((item) => {
            if (item.type === 'dropdown') {
              return (
                <DropdownMenu key={item.label}>
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
                    {item.items.map((subItem) => {
                      if (subItem.type === 'submenu') {
                        return (
                          <DropdownMenuSub key={subItem.label}>
                            <DropdownMenuSubTrigger
                              className={cn(
                                "w-full text-left cursor-pointer flex justify-between",
                                isSubmenuActive(subItem.items) ? "text-[hsl(var(--primary))]" : "text-foreground/80"
                              )}
                            >
                              <span>{subItem.label}</span>
                              {/* ChevronRight is default in DropdownMenuSubTrigger */}
                            </DropdownMenuSubTrigger>
                            <DropdownMenuPortal>
                              <DropdownMenuSubContent className="bg-background shadow-lg">
                                {subItem.items.map((subSubItem) => (
                                  <DropdownMenuItem key={subSubItem.href} asChild>
                                    <Link 
                                      href={subSubItem.href} 
                                      className={cn(
                                        "w-full text-left cursor-pointer",
                                        isLinkActive(subSubItem.href) ? "text-[hsl(var(--primary))]" : "text-foreground/80"
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
                      // Regular NavLinkItem in dropdown
                      return (
                        <DropdownMenuItem key={subItem.href} asChild>
                          <Link 
                            href={subItem.href} 
                            className={cn(
                              "w-full text-left cursor-pointer",
                              isLinkActive(subItem.href) ? "text-[hsl(var(--primary))]" : "text-foreground/80"
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
            // Top-level NavLinkItem
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
            <SheetContent side="right" className="w-full max-w-xs bg-background p-6 overflow-y-auto">
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
                    const sectionLinks: React.ReactNode[] = [];
                    sectionLinks.push(<div key={`${item.label}-header`} className="px-3 py-2 mt-2 text-sm font-semibold text-muted-foreground">{item.label}</div>);
                    
                    item.items.forEach(subItem => {
                      if (subItem.type === 'submenu') {
                        sectionLinks.push(<div key={`${subItem.label}-subheader`} className="pl-6 px-3 py-1 text-xs font-semibold text-muted-foreground/80">{subItem.label}</div>);
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
                      } else { // NavLinkItem
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
                  // Top-level NavLinkItem
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

