
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { HeroSection } from '@/components/ui/HeroSection';
import { SectionWrapper } from '@/components/ui/SectionWrapper';
import { FeatureCard } from '@/components/ui/FeatureCard';
import { Briefcase, Users, Cog, Stethoscope, ArrowRight, Target, BuildingIcon, Globe, FileCheck2 } from 'lucide-react';
import Image from 'next/image';

export default function HomePage() {
  return (
    <>
      <HeroSection
        title="Nitin International"
        subtitle="Bridging exceptional talent with premier global opportunities. Your partner in navigating the future of work, especially in the Middle East."
        ctaText="Discover Your Next Opportunity"
        ctaLink="/specializations"
        ctaVariant="default"
        imageSrc="/images/home_image1.png"
        imageAlt="Global business network"
        imageAiHint="global business"
        contentAlignment="left"
      />

      <SectionWrapper id="for-who" className="bg-secondary/50 py-16 md:py-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight text-[hsl(var(--heading-blue))] sm:text-4xl">
            Tailored Solutions For You
          </h2>
          <p className="mt-4 text-lg text-foreground/80 max-w-2xl mx-auto">
            Whether you're an organization seeking top-tier professionals or an individual ready for a new challenge, we have you covered.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
          <Card className="shadow-xl hover:shadow-2xl transition-shadow duration-300 bg-card flex flex-col">
            <CardHeader>
              <div className="flex items-center gap-4 mb-2">
                <div className="p-3 rounded-full bg-[hsl(var(--primary))] text-primary-foreground">
                  <BuildingIcon className="h-8 w-8" />
                </div>
                <CardTitle className="text-2xl font-semibold text-[hsl(var(--heading-blue))]">For Employers</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="flex-grow">
              <CardDescription className="mb-6 text-foreground/70 text-base">
                Access a curated pool of qualified, vetted professionals ready to drive your organization's success. We streamline your hiring process for specialized roles, ensuring you find the perfect fit.
              </CardDescription>
            </CardContent>
            <CardContent>
              <Link href="/recruiters" passHref>
                <Button variant="outline" className="w-full group border-[hsl(var(--primary))] text-[hsl(var(--primary))] hover:bg-[hsl(var(--primary))] hover:text-primary-foreground">
                  Find Talent <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </CardContent>
          </Card>
          <Card className="shadow-xl hover:shadow-2xl transition-shadow duration-300 bg-card flex flex-col">
            <CardHeader>
              <div className="flex items-center gap-4 mb-2">
                 <div className="p-3 rounded-full bg-[hsl(var(--primary))] text-primary-foreground">
                   <Globe className="h-8 w-8" />
                </div>
                <CardTitle className="text-2xl font-semibold text-[hsl(var(--heading-blue))]">For Job Seekers</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="flex-grow">
              <CardDescription className="mb-6 text-foreground/70 text-base">
                Discover exciting career opportunities in the Middle East and beyond. We connect you with leading employers in your field, supporting your professional journey every step of the way.
              </CardDescription>
            </CardContent>
            <CardContent>
              <Link href="/recruits" passHref>
                <Button variant="outline" className="w-full group border-[hsl(var(--primary))] text-[hsl(var(--primary))] hover:bg-[hsl(var(--primary))] hover:text-primary-foreground">
                  Explore Roles <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </CardContent>
          </Card>
          <Card className="shadow-xl hover:shadow-2xl transition-shadow duration-300 bg-card flex flex-col">
            <CardHeader>
              <div className="flex items-center gap-4 mb-2">
                 <div className="p-3 rounded-full bg-[hsl(var(--accent))] text-accent-foreground">
                   <FileCheck2 className="h-8 w-8" />
                </div>
                <CardTitle className="text-2xl font-semibold text-[hsl(var(--heading-blue))]">For Documentation & Visa Support</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="flex-grow">
              <CardDescription className="mb-6 text-foreground/70 text-base">
                Get hassle-free support with MEA Apostille, Embassy Attestation, and Visa Application services. 
                Whether you're preparing to work abroad or need document legalization for travel, 
                we manage the end-to-end process — document collection, authentication, embassy coordination, and submission.
              </CardDescription>
            </CardContent>
            <CardContent>
              <Link href="/contact" passHref>
                <Button variant="outline" className="w-full group border-[hsl(var(--accent))] text-[hsl(var(--accent))] hover:bg-[hsl(var(--accent))] hover:text-accent-foreground">
                  Start Processing <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </CardContent>
          </Card>
        </div>
      </SectionWrapper>

      <SectionWrapper id="why-us" className="py-16 md:py-20">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-[hsl(var(--heading-blue))] sm:text-4xl">
            Why Partner with Nitin International?
          </h2>
          <p className="mt-4 text-lg text-foreground/80 max-w-2xl mx-auto">
            Your trusted strategic partner in global talent acquisition and career advancement.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          <FeatureCard
            icon={Target}
            title="Market Expertise"
            description="Deep understanding of the Middle East job market and its unique demands for specialized professionals."
          />
          <FeatureCard
            icon={Cog}
            title="Precision Sourcing"
            description="Proven track record in sourcing highly skilled engineers, nurses, and other niche professionals with tailored strategies."
          />
          <FeatureCard
            icon={Stethoscope} 
            title="Dedicated Support"
            description="Comprehensive, personalized support throughout the recruitment process for both employers and candidates."
          />
        </div>
        <div className="text-center mt-16">
          <Link href="/specializations" passHref>
            <Button size="lg" variant="default">
              Learn About Our Specializations
            </Button>
          </Link>
        </div>
      </SectionWrapper>
      
      <SectionWrapper id="cta-contact" className="bg-muted py-16 md:py-20">
         <div className="text-center">
           <h2 className="text-3xl font-bold tracking-tight text-[hsl(var(--heading-blue))] sm:text-4xl">
             Ready to Take the Next Step?
           </h2>
           <p className="mt-4 text-lg text-foreground/80 max-w-2xl mx-auto">
             Whether you're looking to hire top talent or find your dream job abroad, we're here to help. Get in touch with our expert team today.
           </p>
           <div className="mt-10">
             <Link href="/contact" passHref>
               <Button size="lg" variant="default">
                 Contact Us Today
               </Button>
             </Link>
           </div>
         </div>
      </SectionWrapper>
    </>
  );
}
