import { motion } from "framer-motion";
import Hero from "@/components/Hero";
import AnimatedSection from "@/components/AnimatedSection";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-biomass.jpg";
import sustainabilityImage from "@/assets/sustainability.jpg";
import teamImage from "@/assets/team-member.jpg";

const pillars = [
  { icon: "🌿", title: "Sustainability", desc: "Promoting renewable energy that protects the planet." },
  { icon: "⚙️", title: "Innovation", desc: "Investing in cutting-edge clean technologies." },
  { icon: "🤝", title: "Community Impact", desc: "Empowering people through green job creation and local energy access." },
  { icon: "♻️", title: "Transparency", desc: "Operating with responsibility and ethical standards." },
];

const Commitments = () => {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Hero
        title="Our Commitments"
        subtitle="Dedicated to a cleaner, greener, and more sustainable world."
        backgroundImage={heroImage}
        classHeight="h-[60vh]"
      />

      {/* Introduction */}
      <AnimatedSection className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="section-title">What Commitment Means to Us</h2>
            <p className="text-muted-foreground mt-4">
              At SRIA BIOENERGY, our commitment goes beyond energy production. We aim to preserve nature, empower communities, and innovate for a sustainable tomorrow.
            </p>
          </div>
        </div>
      </AnimatedSection>

      {/* Commitment Pillars */}
      <section className="py-12 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {pillars.map((p) => (
              <motion.div key={p.title} className="bg-white rounded-lg p-6 shadow-sm text-center" initial={{ opacity: 0, y: 8 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                <div className="text-4xl">{p.icon}</div>
                <h4 className="mt-4 font-semibold">{p.title}</h4>
                <p className="text-sm text-muted-foreground mt-2">{p.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Environmental Goals */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <h3 className="section-title text-center mb-6">Environmental Goals</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <motion.div className="p-6 rounded-lg bg-background text-center" initial={{ opacity: 0, y: 8 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <div className="text-3xl font-bold">50%</div>
              <p className="text-sm text-muted-foreground">Reduction in CO₂ emissions by 2030</p>
            </motion.div>

            <motion.div className="p-6 rounded-lg bg-background text-center" initial={{ opacity: 0, y: 8 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <div className="text-3xl font-bold">100%</div>
              <p className="text-sm text-muted-foreground">Renewable energy sourcing in all operations</p>
            </motion.div>

            <motion.div className="p-6 rounded-lg bg-background text-center" initial={{ opacity: 0, y: 8 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <div className="text-3xl font-bold">0</div>
              <p className="text-sm text-muted-foreground">Zero waste by 2028</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CSR & Community Initiatives */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <h3 className="section-title text-center mb-6">CSR & Community Initiatives</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <motion.div className="bg-white rounded-lg shadow-sm overflow-hidden" initial={{ opacity: 0, y: 8 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <img src={teamImage} alt="Rural Electrification" className="w-full h-40 object-cover" />
              <div className="p-4">
                <h4 className="font-semibold">Rural Electrification Program</h4>
                <p className="text-sm text-muted-foreground mt-2">Bringing reliable energy access to off-grid communities.</p>
              </div>
            </motion.div>

            <motion.div className="bg-white rounded-lg shadow-sm overflow-hidden" initial={{ opacity: 0, y: 8 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <img src={sustainabilityImage} alt="Tree Plantation" className="w-full h-40 object-cover" />
              <div className="p-4">
                <h4 className="font-semibold">Tree Plantation Drives</h4>
                <p className="text-sm text-muted-foreground mt-2">Supporting reforestation and carbon sequestration projects.</p>
              </div>
            </motion.div>

            <motion.div className="bg-white rounded-lg shadow-sm overflow-hidden" initial={{ opacity: 0, y: 8 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <img src={teamImage} alt="Training" className="w-full h-40 object-cover" />
              <div className="p-4">
                <h4 className="font-semibold">Women Empowerment Training</h4>
                <p className="text-sm text-muted-foreground mt-2">Training programs to build green skills and livelihoods.</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Certifications & Standards */}
      <AnimatedSection className="py-12 bg-white">
        <motion.div className="container mx-auto px-4 text-center" initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <h3 className="section-title mb-6">Certifications & Standards</h3>
          <p className="text-muted-foreground mb-6">We meet global standards for renewable energy excellence.</p>
          <div className="flex items-center justify-center gap-6">
            <motion.div className="w-32 h-20 bg-gray-100 rounded flex items-center justify-center" initial={{ scale: 0.95, opacity: 0 }} whileInView={{ scale: 1, opacity: 1 }} viewport={{ once: true }}>ISO</motion.div>
            <motion.div className="w-32 h-20 bg-gray-100 rounded flex items-center justify-center" initial={{ scale: 0.95, opacity: 0 }} whileInView={{ scale: 1, opacity: 1 }} viewport={{ once: true }}>Energy Star</motion.div>
            <motion.div className="w-32 h-20 bg-gray-100 rounded flex items-center justify-center" initial={{ scale: 0.95, opacity: 0 }} whileInView={{ scale: 1, opacity: 1 }} viewport={{ once: true }}>B Corp</motion.div>
          </div>
        </motion.div>
      </AnimatedSection>

      {/* Testimonial */}
      <AnimatedSection className="py-12 bg-background">
        <motion.div className="container mx-auto px-4 text-center" initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <blockquote className="text-lg italic text-muted-foreground max-w-3xl mx-auto">“Their commitment to sustainable energy has transformed local livelihoods.”</blockquote>
          <p className="mt-4 text-sm text-muted-foreground">— Community Partner</p>
        </motion.div>
      </AnimatedSection>

      {/* CTA */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-2xl font-semibold mb-4">Together, we can power a sustainable tomorrow.</h3>
          <Button asChild>
            <a href="/contact">Join Our Mission</a>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Commitments;

