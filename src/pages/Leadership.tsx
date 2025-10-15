import { motion } from "framer-motion";
import Hero from "@/components/Hero";
import AnimatedSection from "@/components/AnimatedSection";
import { Card, CardContent } from "@/components/ui/card";
import { teamMembers } from "@/data/mockData";
import heroImage from "@/assets/hero-biomass.jpg";
import teamImage from "@/assets/team-member.jpg";

const Leadership = () => {
  return (
    <div className="min-h-screen">
      <Hero
        title="LEADERSHIP"
        subtitle="Experienced professionals guiding our strategy and operations."
        backgroundImage={heroImage}
        classHeight="h-[60vh]"
      />

      <AnimatedSection className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="section-title">Our Leadership Team</h2>
            <p className="section-subtitle max-w-3xl mx-auto">Meet the people driving SRIA BIOENERGY forward.</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, i) => (
              <motion.div key={member.id} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}>
                <Card className="hover-lift">
                  <div className="aspect-[3/4] overflow-hidden">
                    <img src={teamImage} alt={member.name} className="w-full h-full object-cover" />
                  </div>
                  <CardContent className="pt-6">
                    <h3 className="text-lg font-bold">{member.name}</h3>
                    <p className="text-muted-foreground">{member.position}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </AnimatedSection>
    </div>
  );
};

export default Leadership;
