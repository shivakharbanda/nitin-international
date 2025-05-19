import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { HeroSection } from '@/components/ui/HeroSection';
import { SectionWrapper } from '@/components/ui/SectionWrapper';
import { FeatureCard } from '@/components/ui/FeatureCard';
import { Briefcase, Users, Cog, Stethoscope, ArrowRight, Target } from 'lucide-react';
import Image from 'next/image';

export default function HomePage() {
  return (
    <>
      <HeroSection
        title="Nitin International Bridge"
        subtitle="Connecting exceptional talent with premier opportunities in the Middle East and beyond. We bridge the gap for professionals and employers."
        ctaText="Explore Opportunities"
        ctaLink="/specializations"
        ctaVariant="default"
        imageSrc="https://placehold.co/600x600.png"
        imageAlt="Global connections"
        imageAiHint="global network connection"
        contentAlignment="left"
      />

      <SectionWrapper id="for-who" className="bg-secondary">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight text-[hsl(var(--heading-blue))] sm:text-4xl">
            Are You a Recruiter or a Job Seeker?
          </h2>
          <p className="mt-4 text-lg text-foreground/80">
            We cater to both sides of the employment equation. Find what you're looking for.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300">
            <CardHeader>
              <div className="flex items-center gap-4">
                <Briefcase className="h-10 w-10 text-[hsl(var(--primary))]" />
                <CardTitle className="text-2xl font-semibold text-[hsl(var(--heading-blue))]">For Recruiters</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <CardDescription className="mb-6 text-foreground/80">
                Access a pool of qualified and vetted professionals ready to make an impact. We streamline your hiring process for specialized roles.
              </CardDescription>
              <Link href="/recruiters" passHref>
                <Button variant="outline" className="w-full md:w-auto group">
                  Find Talent <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </CardContent>
          </Card>
          <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300">
            <CardHeader>
              <div className="flex items-center gap-4">
                <Users className="h-10 w-10 text-[hsl(var(--primary))]" />
                <CardTitle className="text-2xl font-semibold text-[hsl(var(--heading-blue))]">For Job Seekers</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <CardDescription className="mb-6 text-foreground/80">
                Discover exciting career opportunities in the Middle East. We connect you with leading employers in your field of expertise.
              </CardDescription>
              <Link href="/recruits" passHref>
                <Button variant="outline" className="w-full md:w-auto group">
                  Find Opportunities <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </CardContent>
          </Card>
        </div>
      </SectionWrapper>

      <SectionWrapper id="why-us">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight text-[hsl(var(--heading-blue))] sm:text-4xl">
            Why Choose Nitin International Bridge?
          </h2>
          <p className="mt-4 text-lg text-foreground/80">
            Your trusted partner in international recruitment.
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
            title="Specialized Sourcing"
            description="Proven track record in sourcing highly skilled engineers, nurses, and other niche professionals."
          />
          <FeatureCard
            icon={Stethoscope}
            title="Dedicated Support"
            description="Comprehensive support throughout the recruitment process for both employers and candidates."
          />
        </div>
        <div className="text-center mt-12">
          <Link href="/specializations" passHref>
            <Button size="lg" variant="default" className="bg-[hsl(var(--accent))] hover:bg-[hsl(var(--accent))]/90 text-accent-foreground">
              Learn More About Our Specializations
            </Button>
          </Link>
        </div>
      </SectionWrapper>
      
      <SectionWrapper id="cta-contact" className="bg-muted">
         <div className="text-center">
           <h2 className="text-3xl font-bold tracking-tight text-[hsl(var(--heading-blue))] sm:text-4xl">
             Ready to Take the Next Step?
           </h2>
           <p className="mt-4 text-lg text-foreground/80 max-w-2xl mx-auto">
             Whether you're looking to hire top talent or find your dream job abroad, we're here to help. Get in touch with our expert team today.
           </p>
           <div className="mt-8">
             <Link href="/contact" passHref>
               <Button size="lg" variant="default" className="bg-[hsl(var(--accent))] hover:bg-[hsl(var(--accent))]/90 text-accent-foreground">
                 Contact Us Today
               </Button>
             </Link>
           </div>
         </div>
      </SectionWrapper>
    </>
  );
}
