import { motion } from "framer-motion";
import { useState } from "react";
import Hero from "@/components/Hero";
import AnimatedSection from "@/components/AnimatedSection";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { jobs } from "@/data/mockData";
import heroImage from "@/assets/hero-biomass.jpg";
import { MapPin, Briefcase, Clock, ArrowRight } from "lucide-react";

const Careers = () => {
  const [selectedJob, setSelectedJob] = useState<typeof jobs[0] | null>(null);

  const benefits = [
    "Competitive salary and benefits package",
    "Professional development opportunities",
    "Global career advancement paths",
    "Flexible work arrangements",
    "Health and wellness programs",
    "Pension and retirement plans",
    "Collaborative work environment",
    "Make a real impact on sustainability"
  ];

  return (
    <div className="min-h-screen">
      <Hero
        title="SHAPE THE FUTURE WITH SRIA BIOENERGY"
        subtitle="We believe that our greatest strength is the talented and dedicated people of SRIA BIOENERGY. Our diverse workforce brings exceptional expertise to deliver biomass solutions worldwide. When you join us, you become part of a company that values your contributions, supports your growth, and empowers you to make a real impact."
        backgroundImage={heroImage}
        classHeight="h-[80vh]"
      />

      {/* Why Join Us */}
      <AnimatedSection className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="section-title">Why Join SRIA BIOENERGY?</h2>
            <p className="section-subtitle max-w-3xl mx-auto">
              Be part of a team that's leading the renewable energy revolution
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit}
                className="bg-muted p-6 rounded-lg"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
              >
                <div className="flex items-start space-x-3">
                  <span className="text-accent text-xl font-bold">✓</span>
                  <p className="text-foreground">{benefit}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* Job Listings */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="section-title">Current Openings</h2>
            <p className="section-subtitle max-w-3xl mx-auto">
              Explore exciting opportunities across our global operations
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto space-y-6">
            {jobs.map((job, index) => (
              <motion.div
                key={job.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="hover-lift cursor-pointer" onClick={() => setSelectedJob(job)}>
                  <CardHeader>
                    <div className="flex flex-wrap items-start justify-between gap-4 mb-2">
                      <div>
                        <CardTitle className="text-2xl mb-2">{job.title}</CardTitle>
                        <CardDescription className="flex flex-wrap gap-4 text-base">
                          <span className="flex items-center">
                            <MapPin className="w-4 h-4 mr-1" />
                            {job.location}
                          </span>
                          <span className="flex items-center">
                            <Clock className="w-4 h-4 mr-1" />
                            {job.type}
                          </span>
                          <span className="flex items-center">
                            <Briefcase className="w-4 h-4 mr-1" />
                            {job.department}
                          </span>
                        </CardDescription>
                      </div>
                      <Badge variant="secondary" className="text-sm">{job.department}</Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">{job.description}</p>
                    <Button variant="ghost" className="group/btn">
                      View Details
                      <ArrowRight className="ml-2 w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <motion.div
            className="text-center mt-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-muted-foreground mb-6">
              Don't see the right position? We're always looking for talented individuals.
            </p>
            <Button variant="outline" size="lg">
              Submit General Application
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Job Detail Modal */}
      <Dialog open={!!selectedJob} onOpenChange={() => setSelectedJob(null)}>
        <DialogContent className="max-w-3xl max-h-[80vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="text-3xl mb-4">{selectedJob?.title}</DialogTitle>
            <div className="flex flex-wrap gap-4 text-muted-foreground">
              <span className="flex items-center">
                <MapPin className="w-4 h-4 mr-1" />
                {selectedJob?.location}
              </span>
              <span className="flex items-center">
                <Clock className="w-4 h-4 mr-1" />
                {selectedJob?.type}
              </span>
              <span className="flex items-center">
                <Briefcase className="w-4 h-4 mr-1" />
                {selectedJob?.department}
              </span>
            </div>
          </DialogHeader>
          <div className="mt-6 space-y-6">
            <div>
              <h4 className="text-xl font-semibold mb-3">About the Role</h4>
              <p className="text-muted-foreground">{selectedJob?.description}</p>
            </div>
            <div>
              <h4 className="text-xl font-semibold mb-3">Requirements</h4>
              <ul className="space-y-2">
                {selectedJob?.requirements.map((req, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-accent mr-2">✓</span>
                    <span className="text-muted-foreground">{req}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="pt-4 border-t">
              <Button variant="default" size="lg" className="w-full md:w-auto">
                Apply for this Position
              </Button>
              <p className="text-sm text-muted-foreground mt-4">
                * Application submission is currently a mock feature for demonstration
              </p>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Careers;
