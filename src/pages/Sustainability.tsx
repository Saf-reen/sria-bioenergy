import { motion } from "framer-motion";
import { useState } from "react";
import Hero from "@/components/Hero";
import AnimatedSection from "@/components/AnimatedSection";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { certificates } from "@/data/mockData";
import sustainabilityImage from "@/assets/sustainability.jpg";
import { FileDown, Leaf, Recycle, Shield, Trees } from "lucide-react";

const Sustainability = () => {
  const [selectedCert, setSelectedCert] = useState<typeof certificates[0] | null>(null);

  const commitments = [
    {
      icon: Trees,
      title: "Responsible Sourcing",
      description: "100% of our biomass comes from certified sustainable forests with full traceability"
    },
    {
      icon: Recycle,
      title: "Circular Economy",
      description: "Utilizing waste wood and forest residuals to create value and reduce waste"
    },
    {
      icon: Shield,
      title: "Environmental Protection",
      description: "Strict adherence to biodiversity protection and ecosystem preservation standards"
    },
    {
      icon: Leaf,
      title: "Carbon Neutrality",
      description: "Contributing to global carbon reduction goals through renewable biomass energy"
    }
  ];

  return (
    <div className="min-h-screen">
      <Hero
        title="A MORE RESPONSIBLE WAY FORWARD"
        subtitle="At SRIA BIOENERGY, we are not just committed to sustainability — we are passionate about making a meaningful difference in the world. Join us on our journey towards a greener tomorrow."
        backgroundImage={sustainabilityImage}
        classHeight="h-[80vh]"
      />

      {/* Commitment Section */}
      <AnimatedSection className="py-20" id="commitment">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="section-title">Our Sustainability Commitments</h2>
            <p className="section-subtitle max-w-3xl mx-auto">
              We go beyond compliance to lead the industry in environmental stewardship
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {commitments.map((commitment, index) => (
              <motion.div
                key={commitment.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="h-full text-center hover-lift">
                  <CardContent className="pt-8">
                    <div className="w-16 h-16 mx-auto mb-4 bg-accent/10 rounded-full flex items-center justify-center">
                      <commitment.icon className="w-8 h-8 text-muted-foreground" />
                    </div>
                    <h3 className="text-xl font-bold mb-3">{commitment.title}</h3>
                    <p className="text-muted-foreground">{commitment.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Policy Documents */}
          <motion.div
            className="bg-muted p-8 rounded-lg max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold mb-6 text-center">Policy Documents</h3>
            <div className="space-y-4">
              <div className="flex items-center justify-between p-4 bg-background rounded-md">
                <div>
                  <h4 className="font-semibold mb-1">Sustainability Commitment Statement</h4>
                  <p className="text-sm text-muted-foreground">Our comprehensive sustainability policy and goals</p>
                </div>
                <Button variant="ghost" size="sm">
                  <FileDown className="w-4 h-4 mr-2" />
                  PDF
                </Button>
              </div>
              <div className="flex items-center justify-between p-4 bg-background rounded-md">
                <div>
                  <h4 className="font-semibold mb-1">Chain of Custody Policy</h4>
                  <p className="text-sm text-muted-foreground">Complete traceability documentation and procedures</p>
                </div>
                <Button variant="ghost" size="sm">
                  <FileDown className="w-4 h-4 mr-2" />
                  PDF
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </AnimatedSection>

      {/* Certificates Section */}
      <section className="py-20 bg-muted" id="certificates">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="section-title">Our Certifications</h2>
            <p className="section-subtitle max-w-3xl mx-auto">
              Certified by leading international sustainability organizations
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {certificates.map((cert, index) => (
              <motion.div
                key={cert.id}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card
                  className="cursor-pointer hover-lift text-center"
                  onClick={() => setSelectedCert(cert)}
                >
                  <CardContent className="pt-8 pb-8">
                    <div className="w-24 h-24 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center">
                      <Shield className="w-12 h-12 text-primary" />
                    </div>
                    <h3 className="text-lg font-bold mb-2">{cert.name}</h3>
                    <p className="text-sm text-muted-foreground">{cert.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Stats */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            className="max-w-4xl mx-auto text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="section-title mb-12">Our Environmental Impact</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div>
                <div className="text-5xl font-bold text-primary mb-2">100%</div>
                <p className="text-muted-foreground">Certified Sustainable Biomass</p>
              </div>
              <div>
                <div className="text-5xl font-bold text-primary mb-2">2.5M</div>
                <p className="text-muted-foreground">Tonnes CO₂ Offset Annually</p>
              </div>
              <div>
                <div className="text-5xl font-bold text-primary mb-2">Zero</div>
                <p className="text-muted-foreground">Deforestation Footprint</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Certificate Modal */}
      <Dialog open={!!selectedCert} onOpenChange={() => setSelectedCert(null)}>
        <DialogContent className="max-w-2xl">
          <div className="text-center">
            <div className="w-32 h-32 mx-auto mb-6 bg-primary/10 rounded-full flex items-center justify-center">
              <Shield className="w-16 h-16 text-primary" />
            </div>
            <h3 className="text-2xl font-bold mb-4">{selectedCert?.name}</h3>
            <p className="text-muted-foreground mb-6">{selectedCert?.description}</p>
            <Button variant="default">
              <FileDown className="mr-2 w-4 h-4" />
              Download Certificate
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Sustainability;
