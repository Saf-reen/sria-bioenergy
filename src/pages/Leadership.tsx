import { motion } from "framer-motion";
import Hero from "@/components/Hero";
import AnimatedSection from "@/components/AnimatedSection";
import { Button } from "@/components/ui/button";
import AnimatedCounter from "@/components/AnimatedCounter";
import heroImage from "@/assets/hero-biomass.jpg";
import teamImage from "@/assets/team-member.jpg";
import sustainabilityImage from "@/assets/sustainability.jpg";

const leaders = [
  {
    name: "Dr. Ananya Rao",
    title: "CEO & Founder",
    bio: "With over 15 years of experience in biofuel and sustainability, she leads our mission to develop clean energy solutions.",
    photo: teamImage,
  },
  {
    name: "Mr. Vikram Singh",
    title: "CTO",
    bio: "An expert in renewable systems and process engineering with a focus on scalable technologies.",
    photo: teamImage,
  },
  {
    name: "Ms. Leena Kapoor",
    title: "Head of Operations",
    bio: "Oversees global operations and supply chain, ensuring sustainability and quality across our plants.",
    photo: teamImage,
  },
  {
    name: "Dr. Raj Patel",
    title: "Chief Sustainability Officer",
    bio: "Leads our environmental strategy and carbon-reduction initiatives worldwide.",
    photo: teamImage,
  },
];

const advisors = [
  { name: "Prof. Maya Iyer", title: "Environmental Policy Advisor", photo: teamImage },
  { name: "Eng. Omar Khan", title: "Renewable Systems Engineer", photo: teamImage },
  { name: "Dr. Susan Park", title: "Bioenergy Researcher", photo: teamImage },
];

const Leadership = () => {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Hero
        title="Leadership"
        subtitle="Meet the minds powering the Bio Energy revolution."
        backgroundImage={heroImage}
        classHeight="h-[60vh]"
      />

      {/* Introduction */}
      <AnimatedSection className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="section-title">Our Leadership</h2>
            <p className="text-muted-foreground mt-4">
              Our leadership team is united by a shared vision — to transform renewable energy into a sustainable force for the planet. With decades of experience in energy innovation, they guide us toward a greener future.
            </p>
          </div>
        </div>
      </AnimatedSection>

      {/* Profiles Grid */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {leaders.map((l) => (
              <motion.div key={l.name} className="bg-white rounded-lg p-6 shadow-md" initial={{ opacity: 0, y: 8 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                <img src={l.photo} alt={l.name} className="w-28 h-28 rounded-full object-cover mx-auto" />
                <h3 className="text-lg font-semibold text-center mt-4">{l.name}</h3>
                <p className="text-sm text-muted-foreground text-center">{l.title}</p>
                <p className="text-sm text-muted-foreground mt-3">{l.bio}</p>
                <div className="mt-4 text-right">
                  <a href="#" className="text-emerald-600 hover:underline text-sm">LinkedIn</a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Executive Message */}
      <AnimatedSection className="py-12">
        <motion.div className="container mx-auto px-4" initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <div className="bg-background p-8 rounded-lg shadow-sm flex flex-col md:flex-row items-center gap-6">
            <motion.img src={teamImage} alt="Founder" className="w-40 h-40 rounded-lg object-cover" initial={{ opacity: 0, x: -10 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} />
            <div>
              <h3 className="text-2xl font-semibold">A message from our Founder</h3>
              <blockquote className="mt-4 text-lg italic text-muted-foreground">“We believe that clean energy isn’t just the future — it’s our responsibility today.”</blockquote>
              <p className="mt-4 text-sm text-muted-foreground">— Dr. Ananya Rao</p>
            </div>
          </div>
        </motion.div>
      </AnimatedSection>

      {/* Advisory Board */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <h3 className="section-title text-center mb-6">Advisory Board</h3>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
            {advisors.map((a) => (
              <motion.div key={a.name} className="p-4 rounded-lg bg-gray-50 shadow-sm text-center" initial={{ opacity: 0, y: 8 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                <img src={a.photo} alt={a.name} className="w-20 h-20 rounded-full object-cover mx-auto" />
                <h4 className="mt-3 font-semibold">{a.name}</h4>
                <p className="text-sm text-muted-foreground">{a.title}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Culture & Team Spirit */}
      <AnimatedSection className="py-12 bg-background">
        <motion.div className="container mx-auto px-4 text-center" initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <h3 className="section-title mb-4">Driven by purpose, powered by innovation</h3>
          <p className="text-muted-foreground mb-6">A glimpse into our day-to-day — from field visits to R&D labs.</p>
          <div className="grid sm:grid-cols-3 gap-4">
            <motion.img src={teamImage} alt="team" className="w-full h-48 object-cover rounded-lg shadow-md" initial={{ opacity: 0, y: 8 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} />
            <motion.img src={sustainabilityImage} alt="field" className="w-full h-48 object-cover rounded-lg shadow-md" initial={{ opacity: 0, y: 8 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} />
            <motion.img src={teamImage} alt="lab" className="w-full h-48 object-cover rounded-lg shadow-md" initial={{ opacity: 0, y: 8 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} />
          </div>
        </motion.div>
      </AnimatedSection>

      {/* CTA */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-2xl font-semibold mb-4">Join our mission</h3>
          <p className="text-muted-foreground mb-6">If you share our passion for sustainable energy, we'd love to hear from you.</p>
          <Button asChild>
            <a href="/careers">View Careers</a>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Leadership;

