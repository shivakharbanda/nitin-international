import { z } from 'zod';

const MAX_FILE_SIZE_MB = 5;
const MAX_FILE_SIZE_BYTES = MAX_FILE_SIZE_MB * 1024 * 1024;
const ACCEPTED_CV_TYPES = ["application/pdf", "application/msword", "application/vnd.openxmlformats-officedocument.wordprocessingml.document", "text/plain"];


// Recruiter Form Schema
export const RecruiterFormSchema = z.object({
  companyName: z.string().min(2, { message: "Company name must be at least 2 characters." }).max(100, {message: "Company name too long."}),
  contactPerson: z.string().min(2, { message: "Contact person name must be at least 2 characters." }).max(100, {message: "Contact person name too long."}),
  email: z.string().email({ message: "Please enter a valid email address." }).max(100, {message: "Email address too long."}),
  phone: z.string().min(10, { message: "Phone number must be at least 10 digits." }).regex(/^\+?[0-9\s-()]{10,20}$/, { message: "Invalid phone number format." }),
  jobCategory: z.string().min(3, { message: "Job category is required." }).max(100, {message: "Job category too long."}),
  numVacancies: z.coerce.number().int().positive({ message: "Number of vacancies must be a positive number." }).min(1, {message: "Minimum 1 vacancy."}).max(1000, {message: "Maximum 1000 vacancies."}),
  jobDescription: z.string().min(20, { message: "Job description must be at least 20 characters." }).max(2000, { message: "Job description cannot exceed 2000 characters." }),
  requirements: z.string().min(20, { message: "Requirements must be at least 20 characters." }).max(2000, { message: "Requirements cannot exceed 2000 characters." }),
});
export type RecruiterFormValues = z.infer<typeof RecruiterFormSchema>;

// Recruit Form Schema
export const RecruitFormSchema = z.object({
  fullName: z.string().min(2, { message: "Full name must be at least 2 characters." }).max(100, {message: "Full name too long."}),
  email: z.string().email({ message: "Please enter a valid email address." }).max(100, {message: "Email address too long."}),
  phone: z.string().min(10, { message: "Phone number must be at least 10 digits." }).regex(/^\+?[0-9\s-()]{10,20}$/, { message: "Invalid phone number format." }),
  desiredJobCategory: z.string().min(3, { message: "Desired job category is required." }).max(100, {message: "Desired job category too long."}),
  yearsExperience: z.coerce.number().int().min(0, { message: "Years of experience cannot be negative." }).max(50, {message: "Years of experience seem too high."}),
  cvFile: z
    .any()
    .refine((file) => file === null || file === undefined || (file instanceof File && file.size <= MAX_FILE_SIZE_BYTES), `Max file size is ${MAX_FILE_SIZE_MB}MB.`)
    .refine(
      (file) => file === null || file === undefined || (file instanceof File && ACCEPTED_CV_TYPES.includes(file.type)),
      "Only .pdf, .doc, .docx, and .txt files are accepted."
    )
    .nullable()
    .optional(),
  coverLetter: z.string().max(2500, { message: "Cover letter cannot exceed 2500 characters." }).optional(),
});
export type RecruitFormValues = z.infer<typeof RecruitFormSchema>;

// Contact Form Schema
export const ContactFormSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }).max(100, {message: "Name too long."}),
  email: z.string().email({ message: "Please enter a valid email address." }).max(100, {message: "Email address too long."}),
  subject: z.string().min(5, { message: "Subject must be at least 5 characters." }).max(150, {message: "Subject too long."}),
  message: z.string().min(10, { message: "Message must be at least 10 characters." }).max(2000, { message: "Message cannot exceed 2000 characters." }),
});
export type ContactFormValues = z.infer<typeof ContactFormSchema>;
