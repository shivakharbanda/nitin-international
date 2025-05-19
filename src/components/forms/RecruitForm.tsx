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
import { RecruitFormSchema, type RecruitFormValues } from "@/lib/types";

export function RecruitForm() {
  const { toast } = useToast();
  const form = useForm<RecruitFormValues>({
    resolver: zodResolver(RecruitFormSchema),
    defaultValues: {
      fullName: "",
      email: "",
      phone: "",
      desiredJobCategory: "",
      yearsExperience: 0,
      cvFile: undefined,
      coverLetter: "",
    },
  });

  function onSubmit(data: RecruitFormValues) {
    console.log("Recruit Form Data:", data);
    // Handle file upload logic if a file is present
    // if (data.cvFile && data.cvFile.length > 0) {
    //   const file = data.cvFile[0];
    //   console.log("CV File to upload:", file.name, file.size, file.type);
    //   // Implement actual file upload to a server/storage here
    // }
    toast({
      title: "Application Submitted!",
      description: "Thank you for your application. We will review your profile and contact you if there's a suitable opportunity.",
    });
    form.reset();
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <div className="grid md:grid-cols-2 gap-6">
          <FormField
            control={form.control}
            name="fullName"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Full Name</FormLabel>
                <FormControl>
                  <Input placeholder="Jane Smith" {...field} />
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
                  <Input type="email" placeholder="jane.smith@example.com" {...field} />
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
            name="desiredJobCategory"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Desired Job Category</FormLabel>
                <FormControl>
                  <Input placeholder="e.g., Senior Nurse, Civil Engineer" {...field} />
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
                <FormLabel>Years of Experience</FormLabel>
                <FormControl>
                  <Input type="number" min="0" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
           <FormField
            control={form.control}
            name="cvFile"
            render={({ field }) => (
              <FormItem>
                <FormLabel>CV/Resume (PDF, DOC, DOCX - Max 5MB)</FormLabel>
                <FormControl>
                  {/* Basic file input. For advanced features like preview or progress, a custom component would be needed. */}
                  <Input 
                    type="file" 
                    accept=".pdf,.doc,.docx"
                    onChange={(e) => field.onChange(e.target.files)} // RHF expects FileList or single File
                  />
                </FormControl>
                <FormDescription>
                  Upload your latest CV. This is a crucial part of your application.
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
                  placeholder="Tell us more about yourself and why you're a good fit..."
                  className="min-h-[120px]"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" size="lg" className="w-full md:w-auto bg-[hsl(var(--accent))] hover:bg-[hsl(var(--accent))]/90 text-accent-foreground">
          Submit Application
        </Button>
      </form>
    </Form>
  );
}
