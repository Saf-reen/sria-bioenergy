import { motion } from "framer-motion";
import Hero from "@/components/Hero";
import AnimatedSection from "@/components/AnimatedSection";
import heroImage from "@/assets/hero-biomass.jpg";

const OurStory = () => {
  return (
    <div className="min-h-screen">
      <Hero
        title="OUR STORY"
        subtitle="From humble beginnings to a global presence — our journey is rooted in sustainability and innovation."
        backgroundImage={heroImage}
        classHeight="h-[60vh]"
      />

      <AnimatedSection className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            className="max-w-3xl mx-auto text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="section-title mb-6">Our Roots</h2>
            <p className="text-muted-foreground leading-relaxed">
              SRIA BIOENERGY began with a simple mission: to deliver reliable, sustainable biomass to customers around the globe. Over the years we have expanded our capabilities while maintaining a commitment to quality and environmental responsibility.
            </p>
          </motion.div>
        </div>
      </AnimatedSection>
    </div>
  );
};

export default OurStory;
