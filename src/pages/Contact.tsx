import { motion } from "framer-motion";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import Hero from "@/components/Hero";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { toast } from "sonner";
import heroImage from "@/assets/hero-biomass.jpg";
import { Mail, Phone, MapPin, Linkedin, Twitter, Facebook } from "lucide-react";

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
      />

      {/* Contact Form & Info */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="section-title mb-6">Send us a Message</h2>
              <Card>
                <CardContent className="pt-6">
                  <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                      <div className="grid md:grid-cols-2 gap-4">
                        <FormField
                          control={form.control}
                          name="name"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Name *</FormLabel>
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
                              <FormLabel>Email *</FormLabel>
                              <FormControl>
                                <Input type="email" placeholder="john@example.com" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>

                      <div className="grid md:grid-cols-2 gap-4">
                        <FormField
                          control={form.control}
                          name="company"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Company *</FormLabel>
                              <FormControl>
                                <Input placeholder="Your Company" {...field} />
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
                              <FormLabel>Country *</FormLabel>
                              <Select onValueChange={field.onChange} defaultValue={field.value}>
                                <FormControl>
                                  <SelectTrigger>
                                    <SelectValue placeholder="Select country" />
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
                      </div>

                      <FormField
                        control={form.control}
                        name="subject"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Subject *</FormLabel>
                            <FormControl>
                              <Input placeholder="How can we help?" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="message"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Message *</FormLabel>
                            <FormControl>
                              <Textarea
                                placeholder="Tell us about your needs..."
                                className="min-h-[150px]"
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <Button type="submit" size="lg" className="w-full" disabled={isSubmitting}>
                        {isSubmitting ? "Sending..." : "Send Message"}
                      </Button>
                      <p className="text-sm text-muted-foreground text-center">
                        * This is a demonstration form - submissions are mocked
                      </p>
                    </form>
                  </Form>
                </CardContent>
              </Card>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="section-title mb-6">Contact Information</h2>
              <div className="space-y-6">
                {offices.map((office) => (
                  <Card key={office.region}>
                    <CardContent className="pt-6">
                      <h3 className="text-xl font-bold mb-4">{office.region}</h3>
                      <div className="space-y-3">
                        <div className="flex items-start space-x-3">
                          <MapPin className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                          <span className="text-muted-foreground">{office.address}</span>
                        </div>
                        <div className="flex items-center space-x-3">
                          <Phone className="w-5 h-5 text-primary flex-shrink-0" />
                          <a href={`tel:${office.phone}`} className="text-muted-foreground hover:text-primary transition-colors">
                            {office.phone}
                          </a>
                        </div>
                        <div className="flex items-center space-x-3">
                          <Mail className="w-5 h-5 text-primary flex-shrink-0" />
                          <a href={`mailto:${office.email}`} className="text-muted-foreground hover:text-primary transition-colors">
                            {office.email}
                          </a>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}

                {/* Social Media */}
                <Card>
                  <CardContent className="pt-6">
                    <h3 className="text-xl font-bold mb-4">Connect With Us</h3>
                    <div className="flex space-x-4">
                      <a
                        href="#"
                        className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
                        aria-label="LinkedIn"
                      >
                        <Linkedin className="w-6 h-6" />
                      </a>
                      <a
                        href="#"
                        className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
                        aria-label="Twitter"
                      >
                        <Twitter className="w-6 h-6" />
                      </a>
                      <a
                        href="#"
                        className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
                        aria-label="Facebook"
                      >
                        <Facebook className="w-6 h-6" />
                      </a>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
