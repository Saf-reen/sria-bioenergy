import { motion } from "framer-motion";
import Hero from "@/components/Hero";
import AnimatedSection from "@/components/AnimatedSection";
import { Card, CardContent } from "@/components/ui/card";
import heroImage from "@/assets/hero-biomass.jpg";

const Commitments = () => {
  const items = [
    { title: "Sustainability", text: "We adhere to strict sourcing standards and promote responsible forestry." },
    { title: "Quality", text: "Rigorous quality control to ensure consistent product performance." },
    { title: "Transparency", text: "Open communication with customers and partners throughout the supply chain." },
  ];

  return (
    <div className="min-h-screen">
      <Hero
        title="OUR COMMITMENTS"
        subtitle="Principles that guide our operations and relationships."
        backgroundImage={heroImage}
        classHeight="h-[60vh]"
      />

      <AnimatedSection className="py-20">
        <div className="container mx-auto px-4">
          <motion.div className="grid md:grid-cols-3 gap-8" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            {items.map((it, idx) => (
              <Card key={it.title} className="hover-lift">
                <CardContent className="p-8">
                  <h3 className="text-xl font-bold mb-2">{it.title}</h3>
                  <p className="text-muted-foreground">{it.text}</p>
                </CardContent>
              </Card>
            ))}
          </motion.div>
        </div>
      </AnimatedSection>
    </div>
  );
};

export default Commitments;
