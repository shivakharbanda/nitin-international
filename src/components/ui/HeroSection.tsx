import Image from 'next/image';
import Link from 'next/link';
import type { ReactNode } from 'react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

interface HeroSectionProps {
  title: string | ReactNode;
  subtitle: string | ReactNode;
  ctaText?: string;
  ctaLink?: string;
  ctaVariant?: "default" | "outline" | "secondary" | "ghost" | "link" | "destructive" | null | undefined;
  imageSrc?: string;
  imageAlt?: string;
  imageAiHint?: string;
  children?: ReactNode;
  reverse?: boolean;
  contentAlignment?: 'left' | 'center' | 'right';
}

export function HeroSection({
  title,
  subtitle,
  ctaText,
  ctaLink,
  ctaVariant = "default",
  imageSrc,
  imageAlt = "Hero image",
  imageAiHint,
  children,
  reverse = false,
  contentAlignment = 'left',
}: HeroSectionProps) {
  const textAlignmentClass = {
    left: 'text-left items-start',
    center: 'text-center items-center',
    right: 'text-right items-end',
  }[contentAlignment];

  return (
    <div className={cn("w-full", contentAlignment === 'center' ? 'py-12 md:py-20 lg:py-28' : 'py-10 md:py-16')}>
      <div className="container mx-auto px-4 md:px-6">
        <div className={cn(
          "grid gap-6 lg:grid-cols-2 lg:gap-12 xl:gap-16 items-center",
          reverse && "lg:grid-cols-[1fr_auto]"
        )}>
          <div className={cn(
            "flex flex-col justify-center space-y-4",
            textAlignmentClass,
            reverse && "lg:order-last"
          )}>
            <div className="space-y-3">
              {typeof title === 'string' ? (
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none text-[hsl(var(--heading-blue))]">
                  {title}
                </h1>
              ) : title}
              {typeof subtitle === 'string' ? (
                <p className="max-w-[600px] text-foreground/80 md:text-xl">
                  {subtitle}
                </p>
              ) : subtitle}
            </div>
            {children && <div className={cn("mt-4", contentAlignment === 'center' ? 'mx-auto' : '')}>{children}</div>}
            {ctaText && ctaLink && (
              <div className={cn("mt-6", contentAlignment === 'center' ? 'mx-auto' : '')}>
                <Link href={ctaLink} passHref>
                  <Button size="lg" variant={ctaVariant === "default" ? "default" : ctaVariant} className={ctaVariant === "default" ? "bg-[hsl(var(--accent))] hover:bg-[hsl(var(--accent))]/90 text-accent-foreground" : ""}>
                    {ctaText}
                  </Button>
                </Link>
              </div>
            )}
          </div>
          {imageSrc && (
            <Image
              src={imageSrc}
              alt={imageAlt}
              width={550}
              height={550}
              className={cn(
                "mx-auto aspect-video overflow-hidden rounded-xl object-cover sm:w-full lg:aspect-square",
                reverse ? "lg:order-first" : ""
              )}
              data-ai-hint={imageAiHint}
            />
          )}
        </div>
      </div>
    </div>
  );
}
