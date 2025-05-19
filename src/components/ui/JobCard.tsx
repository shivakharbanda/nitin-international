import type { JobListing } from '@/lib/types';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { MapPin, Briefcase, CalendarDays, ArrowRight, Building, Users,DollarSign } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

interface JobCardProps {
  job: JobListing;
}

export function JobCard({ job }: JobCardProps) {
  const timeSincePosted = (dateString: string): string => {
    const date = new Date(dateString);
    const now = new Date();
    const seconds = Math.floor((now.getTime() - date.getTime()) / 1000);
    let interval = seconds / 31536000;
    if (interval > 1) return Math.floor(interval) + " years ago";
    interval = seconds / 2592000;
    if (interval > 1) return Math.floor(interval) + " months ago";
    interval = seconds / 86400;
    if (interval > 1) return Math.floor(interval) + " days ago";
    interval = seconds / 3600;
    if (interval > 1) return Math.floor(interval) + " hours ago";
    interval = seconds / 60;
    if (interval > 1) return Math.floor(interval) + " minutes ago";
    return Math.floor(seconds) + " seconds ago";
  };


  return (
    <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col h-full bg-card">
      <CardHeader className="pb-3">
        {job.companyLogoUrl && (
            <div className="flex items-center mb-2">
                 {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={job.companyLogoUrl} alt={`${job.company} logo`} className="h-10 w-10 mr-3 object-contain rounded-sm" />
                <CardTitle className="text-xl font-semibold text-[hsl(var(--heading-blue))] leading-tight">{job.title}</CardTitle>
            </div>
        )}
        {!job.companyLogoUrl &&  <CardTitle className="text-xl font-semibold text-[hsl(var(--heading-blue))]">{job.title}</CardTitle>}
        <CardDescription className="text-sm text-muted-foreground flex items-center">
          <Building className="h-4 w-4 mr-1.5" /> {job.company}
        </CardDescription>
      </CardHeader>
      <CardContent className="flex-grow space-y-3 pt-0">
        <div className="flex items-center text-sm text-foreground/80">
          <MapPin className="h-4 w-4 mr-1.5 text-[hsl(var(--primary))]" />
          <span>{job.location.remote ? 'Remote' : `${job.location.city}, ${job.location.country}`}</span>
        </div>
        <div className="flex items-center text-sm text-foreground/80">
          <Briefcase className="h-4 w-4 mr-1.5 text-[hsl(var(--primary))]" />
          <span>{job.type}</span>
        </div>
         <div className="flex items-center text-sm text-foreground/80">
          <Users className="h-4 w-4 mr-1.5 text-[hsl(var(--primary))]" />
          <span>{job.experienceLevel}</span>
        </div>
        {job.salaryRange && (
          <div className="flex items-center text-sm text-foreground/80">
            <DollarSign className="h-4 w-4 mr-1.5 text-[hsl(var(--primary))]" />
            <span>{job.salaryRange}</span>
          </div>
        )}
        <p className="text-sm text-foreground/70 line-clamp-3 pt-1">
          {job.shortDescription}
        </p>
        <div className="pt-1">
            <Badge variant="secondary">{job.category}</Badge>
        </div>
      </CardContent>
      <CardFooter className="pt-2 flex-col items-start space-y-3">
        <div className="text-xs text-muted-foreground flex items-center w-full">
          <CalendarDays className="h-3.5 w-3.5 mr-1.5" />
          Posted {timeSincePosted(job.postedDate)}
        </div>
        <Link href={`/jobs/${job.id}`} passHref className="w-full">
          <Button variant="outline" className="w-full group border-[hsl(var(--primary))] text-[hsl(var(--primary))] hover:bg-[hsl(var(--primary))] hover:text-primary-foreground">
            View Details & Apply
            <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Button>
        </Link>
      </CardFooter>
    </Card>
  );
}
