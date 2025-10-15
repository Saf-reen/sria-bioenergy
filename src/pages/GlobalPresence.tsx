import { motion } from "framer-motion";
import Hero from "@/components/Hero";
import AnimatedSection from "@/components/AnimatedSection";
import MapComponent from "@/components/MapComponent";
import { offices } from "@/data/mockData";
import heroImage from "@/assets/hero-biomass.jpg";
import { MapPin, Users } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const GlobalPresence = () => {
  return (
    <div className="min-h-screen">
      <Hero
        title="LOCAL CONNECTION, GLOBAL STRENGTH"
        subtitle="At SRIA BIOENERGY, we believe that having the strength of a global company with local anchoring and representatives is vital to building and maintaining trusting and lasting client relationships."
        backgroundImage={heroImage}
        classHeight="h-[80vh]"
      />

      {/* Map Section */}
      <AnimatedSection className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            className="mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="section-title text-center mb-6">Our Global Network</h2>
            <p className="section-subtitle text-center max-w-3xl mx-auto mb-12">
              Our extensive network spans offices in 11 countries, strategically positioned in key markets around the world. This ensures that we can deliver tailored solutions with the agility and responsiveness our clients expect and deserve.
            </p>
            <MapComponent />
          </motion.div>
        </div>
      </AnimatedSection>

      {/* Office List */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="section-title">Office Locations</h2>
            <p className="section-subtitle max-w-3xl mx-auto">
              Find your local SRIA BIOENERGY representative
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {offices.map((office, index) => (
              <motion.div
                key={office.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
              >
                <Card className="hover-lift">
                  <CardContent className="pt-6">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-start space-x-3">
                        <MapPin className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                        <div>
                          <h3 className="text-lg font-bold">{office.name}</h3>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2 text-muted-foreground">
                      <Users className="w-4 h-4" />
                      <span className="text-sm">{office.employees} employees</span>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Regional Coverage */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            className="max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="section-title text-center mb-12">Regional Coverage</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-5xl font-bold text-primary mb-2">EMEA</div>
                <p className="text-muted-foreground">
                  Strong presence across Europe, Middle East, and Africa with dedicated teams
                </p>
              </div>
              <div className="text-center">
                <div className="text-5xl font-bold text-primary mb-2">APAC</div>
                <p className="text-muted-foreground">
                  Growing operations in Asia Pacific markets serving diverse energy needs
                </p>
              </div>
              <div className="text-center">
                <div className="text-5xl font-bold text-primary mb-2">Americas</div>
                <p className="text-muted-foreground">
                  Established footprint in North and South America with local expertise
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default GlobalPresence;
