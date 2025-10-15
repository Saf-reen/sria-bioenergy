import { motion } from "framer-motion";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import Hero from "@/components/Hero";
import AnimatedSection from "@/components/AnimatedSection";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { toast } from "sonner";
import heroImage from "@/assets/hero-biomass.jpg";
import contactLeft from "@/assets/biomass-pellets.jpg";
import { Mail, Phone, MapPin, Linkedin, Twitter, Facebook } from "lucide-react";
import { Link } from "react-router-dom";

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  company: z.string().min(2, "Company name is required"),
  country: z.string().min(1, "Please select a country"),
  subject: z.string().min(5, "Subject must be at least 5 characters"),
  message: z.string().min(10, "Message must be at least 10 characters")
});

type ContactFormData = z.infer<typeof contactSchema>;

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      email: "",
      company: "",
      country: "",
      subject: "",
      message: ""
    }
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    // Mock submission - simulate 2 second delay
    await new Promise(resolve => setTimeout(resolve, 2000));
    console.log("Form data (mock):", data);
    toast.success("Message sent successfully! We'll get back to you soon.");
    form.reset();
    setIsSubmitting(false);
  };

  const offices = [
    {
      region: "Global Headquarters",
      address: "123 Biomass Street, London, UK",
      phone: "+44 20 1234 5678",
      email: "london@sriabioenergy.com"
    },
    {
      region: "European Office",
      address: "456 Energy Avenue, Copenhagen, Denmark",
      phone: "+45 12 34 56 78",
      email: "copenhagen@sriabioenergy.com"
    },
    {
      region: "Americas Office",
      address: "789 Green Boulevard, New York, USA",
      phone: "+1 212 555 0123",
      email: "newyork@sriabioenergy.com"
    }
  ];

  return (
    <div className="min-h-screen">
      <Hero
        title="GET IN TOUCH"
        subtitle="Have questions about our biomass solutions? Want to discuss a partnership? Our team is here to help. Reach out to us today."
        backgroundImage={heroImage}
        classHeight="h-[80vh]"
      />

      {/* Contact Form - two-column card layout */}
      <AnimatedSection className="py-20 ">
        <div className="container mb-2 mx-auto px-4">
          <div className="max-w-6xl mx-auto bg-white rounded-xl overflow-hidden shadow-lg grid grid-cols-1 lg:grid-cols-2">
            {/* left image panel */}
            <div className="relative bg-cover bg-center" style={{ backgroundImage: `url(${contactLeft})` }}>
              <div className="absolute inset-0 bg-black/35" />
              <div className="p-10 h-full flex flex-col justify-between text-white relative">
                <div>
                  <h3 className="text-3xl font-semibold mb-4">Let's Talk</h3>
                </div>

                <div className="space-y-2">
                  <div className="text-sm">Copenhagen / Denmark</div>
                  <div className="text-xs opacity-80">CM Biomass Partners A/S</div>
                  <div className="text-xs opacity-80">Sundkrogsgade 11, 2. 2100</div>
                  <div className="text-sm font-medium mt-4">+45 3226 0300</div>
                </div>
              </div>
            </div>

            {/* middle form panel */}
            <div className="p-12 mx-auto bg-white lg:col-span-1">
              <h2 className="text-2xl font-bold mb-4">Register your Interest</h2>
              <p className="text-sm text-muted-foreground mb-6">Thank you for your interest in CM Biomass. We are committed to being a reliable partner in your renewable energy journey. Please fill out the form and we will respond promptly.</p>

              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-xs">Full name</FormLabel>
                        <FormControl>
                          <Input placeholder="Full name" {...field} />
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
                        <FormLabel className="text-xs">Email address</FormLabel>
                        <FormControl>
                          <Input type="email" placeholder="name@example.com" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="company"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-xs">Phone number</FormLabel>
                        <FormControl>
                          <Input placeholder="Phone number" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="country"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-xs">Country</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Select..." />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="uk">United Kingdom</SelectItem>
                            <SelectItem value="denmark">Denmark</SelectItem>
                            <SelectItem value="usa">United States</SelectItem>
                            <SelectItem value="other">Other</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-xs">Message</FormLabel>
                        <FormControl>
                          <Textarea placeholder="Message" className="min-h-[120px]" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <div className="flex items-center space-x-2">
                    <input id="consent" type="checkbox" className="w-4 h-4" />
                    <label htmlFor="consent" className="text-xs text-muted-foreground">I accept the processing of my personal data <a href="#" className="underline">privacy policy</a>.</label>
                  </div>

                  <div>
                    <Button type="submit" variant="default" size="sm" disabled={isSubmitting}>
                      {isSubmitting ? "Submitting..." : "SUBMIT"}
                    </Button>
                  </div>
                </form>
              </Form>
            </div>

          </div>
        </div>
      </AnimatedSection>

      {/* Full-width banner: theory panel placed below the card (restored position) */}
      <section className="bg-transparent mb-4 ">
        <div className="max-w-screen px-4">
          <div className="relative overflow-hidden mt-6">
            <img src={heroImage} alt="approach banner" className="w-screen h-[50vh] object-cover" />
            <div className="absolute inset-0 bg-black/40" />
            <div className="absolute inset-0 flex items-center">
              <div className="px-4 md:px-8 lg:px-12 max-w-prose text-white">
                <h3 className="text-lg lg:text-xl font-semibold mb-2">Our Approach</h3>
                <p className="text-sm lg:text-base mb-4">We deliver sustainable, certified biomass through reliable sourcing and efficient logistics. Partnering with local suppliers ensures traceability and consistent quality for our customers.</p>
                <Button asChild>
                  <Link to="/leadership" className="inline-flex items-center px-4 py-2 bg-primary text-white rounded">
                    Meet Our Team
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
