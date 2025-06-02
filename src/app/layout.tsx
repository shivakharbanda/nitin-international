import type { Metadata } from 'next';
import { Inter, Roboto_Mono } from 'next/font/google';
import './globals.css';
import { Toaster } from "@/components/ui/toaster";
import SiteHeader from '@/components/layout/SiteHeader';
import SiteFooter from '@/components/layout/SiteFooter';

import { Analytics } from "@vercel/analytics/next"

const inter = Inter({
  variable: '--font-geist-sans', // Keep CSS variable name for compatibility
  subsets: ['latin'],
});

const robotoMono = Roboto_Mono({
  variable: '--font-geist-mono', // Keep CSS variable name for compatibility
  subsets: ['latin'],
  weight: ['400', '700'], // Ensure weights are available if used
});

export const metadata: Metadata = {
  title: 'Nitin International - Connecting Talent with Opportunity',
  description: 'Specialized recruitment agency for engineers, nurses, and other professions in the Middle East and beyond.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${robotoMono.variable} antialiased flex flex-col min-h-screen`}>
        <SiteHeader />
        <main className="flex-grow">
          {children}
          <Analytics />
        </main>
        <SiteFooter />
        <Toaster />
      </body>
    </html>
  );
}
