"use client";

import { useParams } from 'next/navigation';
import type { Metadata } from 'next';
import { SectionWrapper } from '@/components/ui/SectionWrapper';
import { JobApplicationForm } from '@/components/forms/JobApplicationForm';
import type { JobListing } from '@/lib/types';
import { Briefcase, MapPin, CalendarDays, Info, Building, Users, DollarSign, CheckCircle } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { useEffect, useState } from 'react';

// Mock Data - In a real app, this would come from an API
const mockJobs: JobListing[] = [
   {
    id: '1',
    title: 'Senior Software Engineer (React)',
    company: 'Tech Solutions Inc.',
    location: { city: 'Dubai', country: 'UAE', remote: false },
    category: 'IT & Technology',
    type: 'Full-time',
    experienceLevel: 'Senior',
    salaryRange: 'AED 20,000 - AED 28,000/month',
    description: `<p>Join our dynamic team to build cutting-edge web applications using React, Next.js, and Node.js. You will be responsible for developing new features, maintaining existing code, and collaborating with cross-functional teams to deliver high-quality software solutions.</p>
                  <p>We are looking for a proactive individual who is passionate about technology and eager to contribute to a fast-paced environment. This role offers opportunities for growth and leadership.</p>`,
    shortDescription: 'Develop and maintain web applications using modern JavaScript frameworks. Focus on React and Next.js development for enterprise clients.',
    requirements: ['5+ years of React experience', 'Strong proficiency in TypeScript and JavaScript', 'Proven experience with Next.js framework', 'Knowledge of Node.js and Express for backend development', 'Experience with state management libraries (e.g., Redux, Zustand)', 'Familiarity with RESTful APIs and GraphQL', 'Understanding of CI/CD pipelines and DevOps practices'],
    responsibilities: ['Design, develop, and implement user-facing features for complex web applications.', 'Write clean, scalable, maintainable, and testable code.', 'Collaborate with product managers, designers, and other engineers to define project requirements and timelines.', 'Mentor junior developers and conduct code reviews.', 'Stay up-to-date with emerging technologies and industry best practices.'],
    postedDate: '2024-07-15T10:00:00Z',
    status: 'Open',
    companyLogoUrl: 'https://placehold.co/100x100.png?text=TSI',
  },
  {
    id: '2',
    title: 'Registered Nurse - ER',
    company: 'Global Health Group',
    location: { city: 'Riyadh', country: 'Saudi Arabia', remote: false },
    category: 'Healthcare & Nursing',
    type: 'Full-time',
    experienceLevel: 'Mid-level',
    description: `<p>Seeking an experienced and compassionate Registered Nurse for our busy Emergency Room. The ideal candidate must be able to handle high-pressure situations, make quick decisions, and provide excellent patient care. You will work as part of a multidisciplinary team to assess, plan, implement, and evaluate nursing care for patients of all ages with various conditions.</p>
                  <p>We offer a competitive salary and benefits package, along with opportunities for professional development.</p>`,
    shortDescription: 'Provide critical care in a fast-paced Emergency Room environment. Seeking compassionate and skilled RNs.',
    requirements: ['Bachelor of Science in Nursing (BSN) or equivalent', 'Minimum 3 years of recent experience in an Emergency Room setting', 'Valid nursing license for practice in Saudi Arabia (or eligible)', 'BLS, ACLS, and PALS certifications required', 'Excellent communication and interpersonal skills', 'Ability to work effectively in a team and independently'],
    postedDate: '2024-07-20T14:30:00Z',
    status: 'Open',
    companyLogoUrl: 'https://placehold.co/100x100.png?text=GHG',
  },
   {
    id: '3',
    title: 'Civil Engineer - Infrastructure',
    company: 'Construct ME',
    location: { city: 'Abu Dhabi', country: 'UAE', remote: false },
    category: 'Engineering',
    type: 'Full-time',
    experienceLevel: 'Senior',
    description: '<p>We are looking for a seasoned Civil Engineer to lead and manage large-scale infrastructure projects. Responsibilities include project planning, design review, site supervision, quality control, and stakeholder management. The successful candidate must have a strong background in road, bridge, and utility construction projects.</p>',
    shortDescription: 'Oversee major infrastructure projects, ensuring quality and timely completion. Strong project management skills required.',
    requirements: ['B.Sc. in Civil Engineering or higher', 'Minimum 10 years of experience in managing complex infrastructure projects', 'PMP or equivalent project management certification preferred', 'Proficiency in AutoCAD, Civil 3D, and project management software', 'Strong leadership and communication skills'],
    postedDate: '2024-06-28T09:00:00Z',
    status: 'Open',
  },
   {
    id: '4',
    title: 'Marketing Manager (Remote)',
    company: 'Digital Growth Ltd.',
    location: { city: 'Anywhere', country: 'Global', remote: true },
    category: 'Marketing & Sales',
    type: 'Full-time',
    experienceLevel: 'Mid-level',
    salaryRange: '$60,000 - $80,000/year',
    description: '<p>We are seeking a highly motivated and results-oriented Marketing Manager to develop and execute comprehensive digital marketing strategies. This is a fully remote position, and you will manage SEO/SEM, social media campaigns, email marketing, content creation, and online advertising. You will be responsible for analyzing campaign performance and optimizing for ROI to drive customer acquisition and brand growth.</p>',
    shortDescription: 'Drive digital marketing initiatives for a fast-growing tech company. Fully remote position with a global team.',
    requirements: ['5+ years of experience in digital marketing roles', 'Proven track record of successful SEO, SEM, and social media marketing campaigns', 'Strong analytical skills and experience with Google Analytics, Google Ads, etc.', 'Excellent written and verbal communication skills', 'Ability to work independently and manage multiple projects simultaneously'],
    postedDate: '2024-07-25T11:00:00Z',
    status: 'Open',
    companyLogoUrl: 'https://placehold.co/100x100.png?text=DGL',
  },
   {
    id: '5',
    title: 'IT Support Specialist',
    company: 'Innovate Solutions',
    location: { city: 'Doha', country: 'Qatar', remote: false },
    category: 'IT & Technology',
    type: 'Contract',
    experienceLevel: 'Entry',
    description: '<p>Join our IT team as a Support Specialist on a 6-month contract with potential for extension. You will provide first-level technical support to internal users, troubleshoot hardware, software, and network issues. Responsibilities also include maintaining IT inventory, assisting with user onboarding, and documenting IT procedures. This is an excellent opportunity for an entry-level candidate to gain hands-on experience in a corporate IT environment.</p>',
    shortDescription: 'Entry-level IT support role. Assist users with technical issues and maintain IT systems. Great learning opportunity.',
    requirements: ['Diploma or Degree in Information Technology or a related field', 'Basic understanding of computer hardware, software, operating systems (Windows/Mac), and networking concepts', 'Good problem-solving and troubleshooting skills', 'Strong customer-service orientation and communication skills', 'Ability to learn quickly and work as part of a team'],
    postedDate: '2024-07-10T16:00:00Z',
    status: 'Open',
  },
];

function findJobById(id: string): JobListing | undefined {
  return mockJobs.find(job => job.id === id);
}

// This is a client component, so metadata should be handled differently if dynamic
// export const metadata: Metadata = {
//   title: 'Apply for Job - Nitin International', // This will be generic
// };

export default function JobDetailPage() {
  const params = useParams();
  const jobId = typeof params.jobId === 'string' ? params.jobId : '';
  
  const [job, setJob] = useState<JobListing | undefined>(undefined);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    if (jobId) {
      const foundJob = findJobById(jobId);
      setJob(foundJob);
    }
  }, [jobId]);
  
  useEffect(() => {
    if (job && typeof window !== 'undefined') {
      document.title = `${job.title} - Nitin International`;
    } else if (!job && jobId && typeof window !== 'undefined') {
       document.title = `Job Not Found - Nitin International`;
    }
  }, [job, jobId]);


  if (!isMounted) {
     return (
      <SectionWrapper>
        <div className="text-center py-20">
          <Briefcase className="mx-auto h-16 w-16 text-[hsl(var(--primary))] mb-4 animate-pulse" />
          <p className="text-xl text-muted-foreground">Loading job details...</p>
        </div>
      </SectionWrapper>
    );
  }

  if (!job) {
    return (
      <>
        <SectionWrapper className="bg-destructive/10 text-center py-10">
            <Info className="mx-auto h-16 w-16 text-destructive mb-4" />
            <h1 className="text-3xl font-bold tracking-tight text-destructive sm:text-4xl">
                Job Not Found
            </h1>
            <p className="mt-4 text-lg leading-8 text-destructive/80 max-w-md mx-auto">
                The job you are looking for either does not exist or is no longer available.
            </p>
            <Link href="/jobs" className="mt-8 inline-block">
                <Button variant="default">
                    Back to Job Listings
                </Button>
            </Link>
        </SectionWrapper>
      </>
    );
  }

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
    <>
      <SectionWrapper className="bg-muted/30 pt-12 pb-8">
        <div className="max-w-4xl mx-auto text-center">
          {job.companyLogoUrl && (
             // eslint-disable-next-line @next/next/no-img-element
            <img src={job.companyLogoUrl} alt={`${job.company} logo`} className="h-20 w-20 mx-auto mb-4 object-contain rounded-md shadow-sm bg-background p-1" />
          )}
          <h1 className="text-3xl font-bold tracking-tight text-[hsl(var(--heading-blue))] sm:text-4xl lg:text-5xl">
            {job.title}
          </h1>
          <p className="mt-3 text-lg text-foreground/80">
            <Building className="inline-block h-5 w-5 mr-1.5 mb-0.5 text-[hsl(var(--primary))]" />
            {job.company}
          </p>
          <div className="mt-4 flex flex-wrap justify-center items-center gap-x-4 gap-y-2 text-muted-foreground text-sm">
            <span className="flex items-center"><MapPin className="h-4 w-4 mr-1.5 text-[hsl(var(--primary))]" /> {job.location.remote ? 'Remote' : `${job.location.city}, ${job.location.country}`}</span>
            <span className="flex items-center"><Briefcase className="h-4 w-4 mr-1.5 text-[hsl(var(--primary))]" /> {job.type}</span>
            <span className="flex items-center"><Users className="h-4 w-4 mr-1.5 text-[hsl(var(--primary))]" /> {job.experienceLevel}</span>
            <span className="flex items-center"><CalendarDays className="h-4 w-4 mr-1.5 text-[hsl(var(--primary))]" /> Posted {timeSincePosted(job.postedDate)}</span>
          </div>
           {job.salaryRange && (
            <p className="mt-2 text-sm text-foreground/70 flex items-center justify-center">
                <DollarSign className="h-4 w-4 mr-1 text-[hsl(var(--primary))]" /> {job.salaryRange}
            </p>
            )}
          <div className="mt-3">
            <Badge variant="secondary" className="text-sm px-3 py-1">{job.category}</Badge>
          </div>
        </div>
      </SectionWrapper>

      <SectionWrapper className="py-10">
        <div className="max-w-4xl mx-auto grid lg:grid-cols-3 gap-8 items-start">
          <div className="lg:col-span-2 space-y-6">
            <Card className="shadow-md">
              <CardHeader>
                <CardTitle className="text-2xl text-[hsl(var(--heading-blue))]">Job Description</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="prose prose-sm sm:prose-base max-w-none text-foreground/80" dangerouslySetInnerHTML={{ __html: job.description }} />
              </CardContent>
            </Card>

            {job.responsibilities && job.responsibilities.length > 0 && (
                 <Card className="shadow-md">
                    <CardHeader>
                        <CardTitle className="text-xl text-[hsl(var(--heading-blue))]">Key Responsibilities</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <ul className="list-disc list-inside space-y-1.5 text-foreground/80">
                        {job.responsibilities.map((item, index) => (
                            <li key={index} className="flex items-start">
                                <CheckCircle className="h-4 w-4 text-green-600 mr-2 mt-1 shrink-0" />
                                <span>{item}</span>
                            </li>
                        ))}
                        </ul>
                    </CardContent>
                </Card>
            )}

            <Card className="shadow-md">
              <CardHeader>
                <CardTitle className="text-xl text-[hsl(var(--heading-blue))]">Requirements</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc list-inside space-y-1.5 text-foreground/80">
                  {job.requirements.map((req, index) => (
                     <li key={index} className="flex items-start">
                        <CheckCircle className="h-4 w-4 text-green-600 mr-2 mt-1 shrink-0" />
                        <span>{req}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>

          <div className="lg:col-span-1 sticky top-24">
            <Card className="shadow-xl bg-card">
              <CardHeader>
                <CardTitle className="text-2xl text-center text-[hsl(var(--heading-blue))]">Apply for this Job</CardTitle>
                <CardDescription className="text-center text-sm">Fill out the form below to submit your application.</CardDescription>
              </CardHeader>
              <CardContent>
                <JobApplicationForm jobId={job.id} jobTitle={job.title} />
              </CardContent>
            </Card>
          </div>
        </div>
      </SectionWrapper>
    </>
  );
}
