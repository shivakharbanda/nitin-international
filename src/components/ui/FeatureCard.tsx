import type { LucideIcon } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { cn } from '@/lib/utils';

interface FeatureCardProps {
  icon?: LucideIcon;
  title: string;
  description: string;
  className?: string;
  children?: React.ReactNode;
}

export function FeatureCard({ icon: Icon, title, description, className, children }: FeatureCardProps) {
  return (
    <Card className={cn("shadow-lg hover:shadow-xl transition-shadow duration-300 h-full", className)}>
      <CardHeader className="pb-4">
        <div className="flex items-start gap-4">
          {Icon && <Icon className="h-8 w-8 text-[hsl(var(--primary))]" />}
          <div className="flex-1">
            <CardTitle className="text-xl font-semibold text-[hsl(var(--heading-blue))]">{title}</CardTitle>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <CardDescription className="text-foreground/80 leading-relaxed">
          {description}
        </CardDescription>
        {children && <div className="mt-4">{children}</div>}
      </CardContent>
    </Card>
  );
}
