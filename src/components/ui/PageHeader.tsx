import type { LucideIcon } from 'lucide-react';

interface PageHeaderProps {
  icon: LucideIcon;
  title: string;
  description?: string;
}

export function PageHeader({ icon: Icon, title, description }: PageHeaderProps) {
  return (
    <section className="bg-[hsl(var(--surface-warm))] py-12 md:py-16 border-t-4 border-[hsl(var(--primary))]">
      <div className="container mx-auto px-4 md:px-6 text-center">
        <Icon className="mx-auto h-12 w-12 md:h-16 md:w-16 text-[hsl(var(--primary))] mb-4" />
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-[hsl(var(--heading-blue))]">
          {title}
        </h1>
        {description && (
          <p className="mt-4 md:mt-6 text-base md:text-lg leading-7 md:leading-8 text-foreground/80 max-w-2xl mx-auto">
            {description}
          </p>
        )}
      </div>
    </section>
  );
}
