"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { JobApplicationFormSchema, type JobApplicationFormValues } from "@/lib/types";
import { UploadCloud, Send } from "lucide-react";

interface JobApplicationFormProps {
  jobId: string;
  jobTitle: string;
}

export function JobApplicationForm({ jobId, jobTitle }: JobApplicationFormProps) {
  const { toast } = useToast();
  const form = useForm<JobApplicationFormValues>({
    resolver: zodResolver(JobApplicationFormSchema),
    defaultValues: {
      jobId: jobId,
      jobTitle: jobTitle,
      fullName: "",
      email: "",
      phone: "",
      yearsExperience: 0,
      cvFile: undefined,
      coverLetter: "",
    },
  });

  async function onSubmit(data: JobApplicationFormValues) {
    try {
      const res = await fetch('/api/job-application', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error('Failed to submit');
      toast({
        title: `Application for ${data.jobTitle} Submitted!`,
        description: "Thank you for your application. We will review your profile and contact you if there's a suitable opportunity.",
        variant: 'default',
      });
      form.reset();
      form.setValue('jobId', jobId);
      form.setValue('jobTitle', jobTitle);
    } catch (err) {
      console.error(err);
      toast({
        title: 'Submission failed',
        description: 'Please try again later.',
        variant: 'destructive',
      });
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <input type="hidden" {...form.register("jobId")} />
        <input type="hidden" {...form.register("jobTitle")} />

        <div className="grid md:grid-cols-2 gap-x-6 gap-y-4">
          <FormField
            control={form.control}
            name="fullName"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Full Name</FormLabel>
                <FormControl>
                  <Input placeholder="Your Full Name" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email Address</FormLabel>
                <FormControl>
                  <Input type="email" placeholder="your.email@example.com" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="phone"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Phone Number</FormLabel>
                <FormControl>
                  <Input type="tel" placeholder="+1 234 567 8900" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
           <FormField
            control={form.control}
            name="yearsExperience"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Years of Relevant Experience</FormLabel>
                <FormControl>
                  <Input type="number" min="0" {...field} 
                    onChange={e => field.onChange(parseInt(e.target.value,10) || 0)}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
           <FormField
            control={form.control}
            name="cvFile"
            render={({ field: { onChange, value, ...restField }}) => ( 
              <FormItem className="md:col-span-2">
                <FormLabel>CV/Resume (PDF, DOC, DOCX, TXT - Max 5MB)</FormLabel>
                <FormControl>
                  <div className="relative">
                    <Input 
                      type="file" 
                      accept=".pdf,.doc,.docx,.txt"
                      className="pl-10 pr-4 py-2 h-auto" // Adjusted for better file name visibility
                      onChange={(e) => onChange(e.target.files ? e.target.files[0] : null)}
                      {...restField}
                    />
                    <UploadCloud className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                  </div>
                </FormControl>
                <FormDescription>
                  Your CV is essential for this application.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <FormField
          control={form.control}
          name="coverLetter"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Cover Letter (Optional)</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Briefly explain why you are a good fit for this role..."
                  className="min-h-[120px]"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" size="lg" className="w-full md:w-auto">
          Apply Now <Send className="ml-2 h-4 w-4" />
        </Button>
      </form>
    </Form>
  );
}
