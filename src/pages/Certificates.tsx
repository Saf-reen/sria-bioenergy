import { motion } from "framer-motion";
import Hero from "@/components/Hero";
import AnimatedSection from "@/components/AnimatedSection";
import { Card, CardContent } from "@/components/ui/card";
import { certificates } from "@/data/mockData";
import heroImage from "@/assets/hero-biomass.jpg";

const Certificates = () => {
  return (
    <div className="min-h-screen">
      <Hero
        title="CERTIFICATES"
        subtitle="Our certifications and accreditations that demonstrate our commitment to quality and sustainability."
        backgroundImage={heroImage}
        classHeight="h-[60vh]"
      />

      <AnimatedSection className="py-20">
        <div className="container mx-auto px-4">
          <motion.div className="grid md:grid-cols-3 gap-8" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            {certificates.map((c) => (
              <Card key={c.id} className="hover-lift">
                <div className="aspect-[3/2] overflow-hidden">
                  <img src={c.image} alt={c.name} className="w-full h-full object-cover" />
                </div>
                <CardContent>
                  <h3 className="text-lg font-bold">{c.name}</h3>
                  <p className="text-muted-foreground">{c.description}</p>
                </CardContent>
              </Card>
            ))}
          </motion.div>
        </div>
      </AnimatedSection>
    </div>
  );
};

export default Certificates;
