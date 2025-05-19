import { z } from 'zod';

// Recruiter Form Schema
export const RecruiterFormSchema = z.object({
  companyName: z.string().min(2, { message: "Company name must be at least 2 characters." }),
  contactPerson: z.string().min(2, { message: "Contact person name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  phone: z.string().min(10, { message: "Phone number must be at least 10 digits." }).regex(/^\+?[0-9\s-()]+$/, { message: "Invalid phone number format." }),
  jobCategory: z.string().min(3, { message: "Job category is required." }),
  numVacancies: z.coerce.number().int().positive({ message: "Number of vacancies must be a positive number." }),
  jobDescription: z.string().min(20, { message: "Job description must be at least 20 characters." }).max(2000, { message: "Job description cannot exceed 2000 characters." }),
  requirements: z.string().min(20, { message: "Requirements must be at least 20 characters." }).max(2000, { message: "Requirements cannot exceed 2000 characters." }),
});
export type RecruiterFormValues = z.infer<typeof RecruiterFormSchema>;

// Recruit Form Schema
export const RecruitFormSchema = z.object({
  fullName: z.string().min(2, { message: "Full name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  phone: z.string().min(10, { message: "Phone number must be at least 10 digits." }).regex(/^\+?[0-9\s-()]+$/, { message: "Invalid phone number format." }),
  desiredJobCategory: z.string().min(3, { message: "Desired job category is required." }),
  yearsExperience: z.coerce.number().int().min(0, { message: "Years of experience cannot be negative." }),
  cvFile: z.any().optional(), // Placeholder for file upload
  // cvFile: z.instanceof(File).optional().refine(file => file ? file.size <= 5 * 1024 * 1024 : true, `Max file size is 5MB.`), // Example for client-side validation
  coverLetter: z.string().max(2000, { message: "Cover letter cannot exceed 2000 characters." }).optional(),
});
export type RecruitFormValues = z.infer<typeof RecruitFormSchema>;

// Contact Form Schema
export const ContactFormSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  subject: z.string().min(5, { message: "Subject must be at least 5 characters." }),
  message: z.string().min(10, { message: "Message must be at least 10 characters." }).max(1000, { message: "Message cannot exceed 1000 characters." }),
});
export type ContactFormValues = z.infer<typeof ContactFormSchema>;
