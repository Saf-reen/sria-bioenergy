import { motion } from "framer-motion";
import { useState } from "react";
import Hero from "@/components/Hero";
import AnimatedSection from "@/components/AnimatedSection";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Card, CardContent } from "@/components/ui/card";
import { teamMembers } from "@/data/mockData";
import heroImage from "@/assets/hero-biomass.jpg";
import teamImage from "@/assets/team-member.jpg";
import { Award, Target, Users, Zap } from "lucide-react";

const About = () => {
  const [selectedMember, setSelectedMember] = useState<typeof teamMembers[0] | null>(null);

  const timeline = [
    { year: "2009", title: "Foundation", description: "SRIA BIOENERGY founded with a vision for sustainable energy" },
    { year: "2012", title: "European Expansion", description: "Opened offices across major European markets" },
    { year: "2015", title: "Global Reach", description: "Expanded operations to Asia and Americas" },
    { year: "2018", title: "Industry Leader", description: "Became world's largest biomass trading company" },
    { year: "2020", title: "Sustainability Milestone", description: "Achieved 100% certified biomass portfolio" },
    { year: "2024", title: "Innovation Hub", description: "Launched advanced biomass research facilities" }
  ];

  const values = [
    {
      icon: Target,
      title: "Excellence",
      description: "We set the highest standards in everything we do, from product quality to client service."
    },
    {
      icon: Users,
      title: "Partnership",
      description: "Building lasting relationships with clients, suppliers, and communities worldwide."
    },
    {
      icon: Zap,
      title: "Innovation",
      description: "Driving industry forward through cutting-edge solutions and continuous improvement."
    },
    {
      icon: Award,
      title: "Sustainability",
      description: "Committed to environmental stewardship and responsible sourcing practices."
    }
  ];

  return (
    <div className="min-h-screen">
      <Hero
        title="A VISION FOR SUSTAINABLE ENERGY"
        subtitle="Since 2009, SRIA BIOENERGY has been driving the renewable energy evolution by providing high-quality biomass solutions. We prioritize our clients and always go the extra mile to meet their needs."
        backgroundImage={heroImage}
        classHeight="h-[80vh]"
      />

      {/* Mission Section */}
      <AnimatedSection className="py-20" id="story">
        <div className="container mx-auto px-4">
          <motion.div
            className="max-w-4xl mx-auto text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="section-title mb-6">Our Mission</h2>
            <p className="text-xl text-muted-foreground leading-relaxed">
              To enable a greener tomorrow by setting the pace in the marketplace and leading innovation and excellence in producing, trading, and delivering biomass solutions. We are fuelled by passion, ambition, and a commitment to sustainability.
            </p>
          </motion.div>

          {/* Values Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="h-full hover-lift text-center">
                  <CardContent className="pt-8">
                    <div className="w-16 h-16 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center">
                      <value.icon className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="text-xl font-bold mb-2">{value.title}</h3>
                    <p className="text-muted-foreground">{value.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Timeline */}
          <motion.div
            className="mb-20"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="section-title text-center mb-12">Our Journey</h2>
            <div className="max-w-4xl mx-auto">
              {timeline.map((item, index) => (
                <motion.div
                  key={item.year}
                  className="flex gap-8 mb-8 last:mb-0"
                  initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className="flex-shrink-0 w-24 text-right">
                    <span className="text-2xl font-bold text-primary">{item.year}</span>
                  </div>
                  <div className="flex-shrink-0 w-px bg-border relative">
                    <div className="absolute top-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-primary rounded-full border-4 border-background" />
                  </div>
                  <div className="flex-1 pb-8">
                    <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                    <p className="text-muted-foreground">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </AnimatedSection>

      {/* Leadership Section */}
      <section className="py-20 bg-muted" id="leadership">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="section-title">Meet Our Leadership</h2>
            <p className="section-subtitle max-w-3xl mx-auto">
              Our success is driven by a team of experienced professionals dedicated to excellence and innovation.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card
                  className="cursor-pointer hover-lift overflow-hidden"
                  onClick={() => setSelectedMember(member)}
                >
                  <div className="aspect-[3/4] overflow-hidden">
                    <img
                      src={teamImage}
                      alt={member.name}
                      className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <CardContent className="pt-6">
                    <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                    <p className="text-muted-foreground">{member.position}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Member Modal */}
      <Dialog open={!!selectedMember} onOpenChange={() => setSelectedMember(null)}>
        <DialogContent className="max-w-2xl">
          <DialogHeader>
            <DialogTitle className="text-2xl">{selectedMember?.name}</DialogTitle>
          </DialogHeader>
          <div className="mt-4">
            <p className="text-primary font-semibold mb-4">{selectedMember?.position}</p>
            <p className="text-muted-foreground">{selectedMember?.bio}</p>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default About;
