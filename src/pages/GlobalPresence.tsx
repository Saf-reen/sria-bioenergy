import React from "react";
import { motion } from "framer-motion";
import Hero from "@/components/Hero";
import AnimatedSection from "@/components/AnimatedSection";
const MapComponent = React.lazy(() => import("@/components/MapComponent"));
import { offices } from "@/data/mockData";
import heroImage from "@/assets/hero-biomass.jpg";
import { MapPin, Users } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const GlobalPresence = () => {
  const [selectedOfficeId, setSelectedOfficeId] = React.useState<number | null>(null);

  const handleOfficeClick = (id: number) => {
    setSelectedOfficeId(id);
    const el = document.getElementById("global-map");
    if (el) el.scrollIntoView({ behavior: "smooth", block: "center" });
  };

  return (
    <div className="min-h-screen">
      <Hero
        title="Global Presence"
        subtitle="Empowering the world with sustainable energy solutions."
        backgroundImage={heroImage}
        classHeight="h-[80vh]"
      />

      {/* Introduction */}
      <AnimatedSection className="py-12">
        <div className="container mx-auto px-4 max-w-3xl">
          <p className="section-subtitle text-center">
            From Asia to Europe and beyond, our footprint spans continents. Our mission is to deliver renewable energy solutions that power progress while protecting the planet.
          </p>
        </div>
      </AnimatedSection>

      {/* Map Section */}
      <AnimatedSection className="py-20">
        <div className="container mx-auto px-4">
          <div className="mb-12">
            <h2 className="section-title text-center mb-6">Our Global Network</h2>
            <p className="section-subtitle text-center max-w-3xl mx-auto mb-12">
              Our extensive network spans offices in 11 countries, strategically positioned in key markets around the world. This ensures that we can deliver tailored solutions with the agility and responsiveness our clients expect and deserve.
            </p>
            <React.Suspense fallback={<div className="w-full h-[600px] flex items-center justify-center">Loading map…</div>}>
              <MapComponent selectedOfficeId={selectedOfficeId} />
            </React.Suspense>
          </div>
        </div>
      </AnimatedSection>

      {/* Office List */}
      <AnimatedSection className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="section-title">Office Locations</h2>
            <p className="section-subtitle max-w-3xl mx-auto">Find your local SRIA BIOENERGY representative</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {offices.map((office, index) => (
              <motion.div
                key={office.id}
                className="will-change-transform"
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  show: { opacity: 1, y: 0 },
                }}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.12 }}
                transition={{ delay: index * 0.04, duration: 0.5, ease: [0.2, 0.85, 0.25, 1] }}
              >
                <Card className="hover-lift cursor-pointer" onClick={() => handleOfficeClick(office.id)}>
                  <CardContent className="pt-6">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex ittems-start space-x-3">
                        <MapPin className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                        <div>
                          <h3 className="text-lg font-bold">{office.name}</h3>
                          <div className="text-sm text-muted-foreground">{office.city}, {office.country}</div>
                        </div>
                      </div>
                    </div>
                    <div className="mt-3 text-sm text-muted-foreground">
                      <div>{office.address}</div>
                      <div className="space-x-3 mt-2">
                        <div className="flex items-center space-x-2 mt-2 text-muted-foreground">
                          <Users className="w-4 h-4" />
                          <span className="text-sm">{office.employees} employees</span>
                        </div>
                        <div className="flex flex-col justify-end space-x-3">
                          <div className="text-sm">📞 {office.phone}</div>
                          <div className="text-sm">✉️ {office.email}</div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* Regional Coverage */}
      <AnimatedSection className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
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
          </div>
        </div>
      </AnimatedSection>
    </div>
  );
};

export default GlobalPresence;
