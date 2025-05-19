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
import { UploadCloud, Send } from "lucide-react";

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
      variant: "default",
    });
    form.reset();
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <div className="grid md:grid-cols-2 gap-x-6 gap-y-4">
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
            render={({ field }) => ( // RHF requires field.onChange to handle FileList
              <FormItem>
                <FormLabel>CV/Resume (PDF, DOC, DOCX - Max 5MB)</FormLabel>
                <FormControl>
                  <div className="relative">
                    <Input 
                      type="file" 
                      accept=".pdf,.doc,.docx,.txt"
                      className="pl-10"
                      onChange={(e) => field.onChange(e.target.files ? e.target.files[0] : null)}
                    />
                    <UploadCloud className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                  </div>
                </FormControl>
                <FormDescription>
                  Upload your latest CV. This is crucial for your application.
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
        <Button type="submit" size="lg" className="w-full md:w-auto">
          Submit Application <Send className="ml-2 h-4 w-4" />
        </Button>
      </form>
    </Form>
  );
}
