"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { RecruiterFormSchema, type RecruiterFormValues } from "@/lib/types";
import { Send } from "lucide-react";

export function RecruiterForm() {
  const { toast } = useToast();
  const form = useForm<RecruiterFormValues>({
    resolver: zodResolver(RecruiterFormSchema),
    defaultValues: {
      companyName: "",
      contactPerson: "",
      email: "",
      phone: "",
      jobCategory: "",
      numVacancies: 1,
      jobDescription: "",
      requirements: "",
    },
  });

  function onSubmit(data: RecruiterFormValues) {
    console.log("Recruiter Form Data:", data);
    // Here you would typically send the data to your backend
    toast({
      title: "Form Submitted!",
      description: "Thank you, we have received your requirements and will be in touch shortly.",
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
            name="companyName"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Company Name</FormLabel>
                <FormControl>
                  <Input placeholder="Your Company Ltd." {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="contactPerson"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Contact Person</FormLabel>
                <FormControl>
                  <Input placeholder="John Doe" {...field} />
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
                  <Input type="email" placeholder="contact@company.com" {...field} />
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
            name="jobCategory"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Job Category Needed</FormLabel>
                <FormControl>
                  <Input placeholder="e.g., Software Engineer, Registered Nurse" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="numVacancies"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Number of Vacancies</FormLabel>
                <FormControl>
                   <Input type="number" min="1" {...field} 
                    onChange={e => field.onChange(parseInt(e.target.value,10) || 1)}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <FormField
          control={form.control}
          name="jobDescription"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Job Description</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Provide a detailed description of the job role..."
                  className="min-h-[120px]"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="requirements"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Key Requirements & Qualifications</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="List essential skills, experience, and qualifications..."
                  className="min-h-[120px]"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" size="lg" className="w-full md:w-auto">
          Submit Requirements <Send className="ml-2 h-4 w-4" />
        </Button>
      </form>
    </Form>
  );
}
