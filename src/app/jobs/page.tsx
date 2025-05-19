
"use client";

import type { Metadata } from 'next';
import { useState, useEffect, useMemo } from 'react';
import { SectionWrapper } from '@/components/ui/SectionWrapper';
import { JobCard } from '@/components/ui/JobCard';
import type { JobListing } from '@/lib/types';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Button } from '@/components/ui/button';
import { Search, ListFilter, XIcon, Briefcase } from 'lucide-react';
import { format } from 'date-fns'; // For formatting dates if needed

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
    description: 'Join our dynamic team to build cutting-edge web applications using React, Next.js, and Node.js. You will be responsible for developing new features, maintaining existing code, and collaborating with cross-functional teams.',
    shortDescription: 'Develop and maintain web applications using modern JavaScript frameworks. Focus on React and Next.js development for enterprise clients.',
    requirements: ['5+ years of React experience', 'Strong proficiency in TypeScript', 'Experience with Next.js', 'Knowledge of Node.js and Express'],
    responsibilities: ['Design and implement user-facing features', 'Write clean, scalable, and testable code', 'Mentor junior developers'],
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
    description: 'Seeking an experienced Registered Nurse for our busy Emergency Room. Must be able to handle high-pressure situations and provide excellent patient care. Competitive salary and benefits package.',
    shortDescription: 'Provide critical care in a fast-paced Emergency Room environment. Seeking compassionate and skilled RNs.',
    requirements: ['Bachelor of Science in Nursing (BSN)', '3+ years of ER experience', 'Valid nursing license for KSA', 'BLS, ACLS certifications'],
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
    description: 'Lead and manage large-scale infrastructure projects. Responsibilities include project planning, design review, site supervision, and stakeholder management. Must have a strong background in road and bridge construction.',
    shortDescription: 'Oversee major infrastructure projects, ensuring quality and timely completion. Strong project management skills required.',
    requirements: ['B.Sc. in Civil Engineering', '10+ years in infrastructure projects', 'PMP certification preferred', 'Proficiency in AutoCAD and Civil 3D'],
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
    description: 'Develop and execute comprehensive digital marketing strategies. Manage SEO/SEM, social media, email marketing, and content creation. Analyze campaign performance and optimize for ROI.',
    shortDescription: 'Drive digital marketing initiatives for a fast-growing tech company. Fully remote position with a global team.',
    requirements: ['5+ years in digital marketing', 'Proven experience with SEO, SEM, and social media marketing', 'Strong analytical skills', 'Excellent communication skills'],
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
    description: 'Provide first-level technical support to internal users. Troubleshoot hardware, software, and network issues. Maintain IT inventory and documentation. 6-month contract with potential for extension.',
    shortDescription: 'Entry-level IT support role. Assist users with technical issues and maintain IT systems. Great learning opportunity.',
    requirements: ['Diploma or Degree in IT or related field', 'Basic understanding of networking and OS (Windows/Mac)', 'Good problem-solving skills', 'Customer-service oriented'],
    postedDate: '2024-07-10T16:00:00Z',
    status: 'Open',
  },
];

// Extract unique values for filters
const jobCategories = Array.from(new Set(mockJobs.map(job => job.category))).sort();
const jobLocations = Array.from(new Set(mockJobs.filter(job => !job.location.remote).map(job => `${job.location.city}, ${job.location.country}`))).sort();
jobLocations.unshift("Remote"); // Add Remote option
const jobTypes = Array.from(new Set(mockJobs.map(job => job.type))).sort();
const experienceLevels = Array.from(new Set(mockJobs.map(job => job.experienceLevel))).sort();


export default function JobsPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string | undefined>(undefined);
  const [selectedLocation, setSelectedLocation] = useState<string | undefined>(undefined);
  const [selectedType, setSelectedType] = useState<string | undefined>(undefined);
  const [selectedExperience, setSelectedExperience] = useState<string | undefined>(undefined);

  const [isMounted, setIsMounted] = useState(false);
  useEffect(() => setIsMounted(true), []);

  const filteredJobs = useMemo(() => {
    return mockJobs.filter(job => {
      const matchesSearch = job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                            job.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
                            job.shortDescription.toLowerCase().includes(searchTerm.toLowerCase()) ||
                            job.category.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = !selectedCategory || job.category === selectedCategory;
      const matchesLocation = !selectedLocation || 
                              (selectedLocation === "Remote" && job.location.remote) ||
                              (`${job.location.city}, ${job.location.country}` === selectedLocation && !job.location.remote);
      const matchesType = !selectedType || job.type === selectedType;
      const matchesExperience = !selectedExperience || job.experienceLevel === selectedExperience;
      
      return job.status === 'Open' && matchesSearch && matchesCategory && matchesLocation && matchesType && matchesExperience;
    }).sort((a, b) => new Date(b.postedDate).getTime() - new Date(a.postedDate).getTime()); // Sort by most recent
  }, [searchTerm, selectedCategory, selectedLocation, selectedType, selectedExperience]);

  const resetFilters = () => {
    setSearchTerm('');
    setSelectedCategory(undefined);
    setSelectedLocation(undefined);
    setSelectedType(undefined);
    setSelectedExperience(undefined);
  };

  if (!isMounted) {
    // Basic skeleton or loading state
    return (
      <SectionWrapper>
        <div className="text-center">
          <h1 className="text-3xl font-bold tracking-tight text-[hsl(var(--heading-blue))] sm:text-4xl">Loading Jobs...</h1>
          <Briefcase className="mx-auto h-12 w-12 text-[hsl(var(--primary))] mt-4 animate-pulse" />
        </div>
      </SectionWrapper>
    );
  }

  return (
    <>
      <SectionWrapper className="bg-muted/50 pt-12 pb-8">
        <div className="text-center">
          <Briefcase className="mx-auto h-16 w-16 text-[hsl(var(--primary))] mb-4" />
          <h1 className="text-4xl font-bold tracking-tight text-[hsl(var(--heading-blue))] sm:text-5xl">
            Find Your Next Opportunity
          </h1>
          <p className="mt-4 text-lg leading-8 text-foreground/80 max-w-2xl mx-auto">
            Browse through our current job openings and take the next step in your career.
          </p>
        </div>
      </SectionWrapper>

      <SectionWrapper className="py-8">
        {/* Filters Section */}
        <div className="mb-8 p-6 bg-card rounded-lg shadow-md">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 items-end">
            <div className="xl:col-span-2">
              <label htmlFor="search" className="block text-sm font-medium text-foreground/90 mb-1">Search Jobs</label>
              <div className="relative">
                <Input
                  id="search"
                  type="text"
                  placeholder="Keywords, title, company..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
                <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              </div>
            </div>
            <div>
              <label htmlFor="category" className="block text-sm font-medium text-foreground/90 mb-1">Category</label>
              <Select 
                value={selectedCategory || "all_categories_placeholder"} 
                onValueChange={(value) => setSelectedCategory(value === "all_categories_placeholder" ? undefined : value)}
              >
                <SelectTrigger id="category" className="w-full">
                  <SelectValue placeholder="All Categories" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all_categories_placeholder">All Categories</SelectItem>
                  {jobCategories.map(cat => <SelectItem key={cat} value={cat}>{cat}</SelectItem>)}
                </SelectContent>
              </Select>
            </div>
             <div>
              <label htmlFor="location" className="block text-sm font-medium text-foreground/90 mb-1">Location</label>
              <Select 
                value={selectedLocation || "all_locations_placeholder"} 
                onValueChange={(value) => setSelectedLocation(value === "all_locations_placeholder" ? undefined : value)}
              >
                <SelectTrigger id="location" className="w-full">
                  <SelectValue placeholder="All Locations" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all_locations_placeholder">All Locations</SelectItem>
                  {jobLocations.map(loc => <SelectItem key={loc} value={loc}>{loc}</SelectItem>)}
                </SelectContent>
              </Select>
            </div>
             <div className="flex space-x-2">
                <div className="flex-grow">
                  <label htmlFor="type" className="block text-sm font-medium text-foreground/90 mb-1">Job Type</label>
                  <Select 
                    value={selectedType || "all_types_placeholder"} 
                    onValueChange={(value) => setSelectedType(value === "all_types_placeholder" ? undefined : value)}
                  >
                    <SelectTrigger id="type" className="w-full">
                      <SelectValue placeholder="All Types" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all_types_placeholder">All Types</SelectItem>
                      {jobTypes.map(type => <SelectItem key={type} value={type}>{type}</SelectItem>)}
                    </SelectContent>
                  </Select>
                </div>
                 <Button onClick={resetFilters} variant="outline" className="self-end p-2" aria-label="Reset filters">
                    <XIcon className="h-5 w-5" />
                 </Button>
             </div>
            {/* Future filters like experience level can be added here */}
            {/* 
            <div>
              <label htmlFor="experience" className="block text-sm font-medium text-foreground/90 mb-1">Experience Level</label>
              <Select 
                value={selectedExperience || "all_experience_placeholder"} 
                onValueChange={(value) => setSelectedExperience(value === "all_experience_placeholder" ? undefined : value)}
              >
                <SelectTrigger id="experience" className="w-full">
                  <SelectValue placeholder="All Levels" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all_experience_placeholder">All Levels</SelectItem>
                  {experienceLevels.map(level => <SelectItem key={level} value={level}>{level}</SelectItem>)}
                </SelectContent>
              </Select>
            </div>
            */}
          </div>
        </div>

        {/* Job Listings */}
        {filteredJobs.length > 0 ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredJobs.map(job => (
              <JobCard key={job.id} job={job} />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <Search className="mx-auto h-12 w-12 text-muted-foreground mb-4" />
            <p className="text-xl font-semibold text-foreground/90">No jobs found matching your criteria.</p>
            <p className="text-muted-foreground mt-2">Try adjusting your search or filters.</p>
            <Button onClick={resetFilters} variant="link" className="mt-4 text-[hsl(var(--primary))]">
              Clear all filters
            </Button>
          </div>
        )}
      </SectionWrapper>
    </>
  );
}

    