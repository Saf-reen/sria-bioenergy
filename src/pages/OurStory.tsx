import { motion } from "framer-motion";
import Hero from "@/components/Hero";
import AnimatedSection from "@/components/AnimatedSection";
import AnimatedCounter from "@/components/AnimatedCounter";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-biomass.jpg";
import sustainabilityImage from "@/assets/sustainability.jpg";
import teamImage from "@/assets/team-member.jpg";

const milestones = [
  { year: 2009, title: "Founded", desc: "Company established to convert biomass into renewable energy." },
  { year: 2014, title: "First Plant", desc: "Commissioned our first large-scale biomass plant." },
  { year: 2019, title: "Tech Innovation", desc: "Introduced advanced pelletization and emission controls." },
  { year: 2023, title: "Global Partnerships", desc: "Expanded distribution and partnerships across continents." },
];

const OurStory = () => {
  return (
    <div className="min-h-screen bg-muted text-slate-900">
      <Hero
        title="Our Story"
        subtitle="Powering a Greener Tomorrow with Bio Energy"
        backgroundImage={heroImage}
        classHeight="h-[60vh]"
      />

      {/* Mission & Vision */}
      <AnimatedSection className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 items-stretch">
            <motion.div
              className="p-8 rounded-lg shadow-lg bg-muted border border-slate-100"
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-semibold mb-3">Mission</h3>
              <p className="text-muted-foreground mb-4">🌍 To create clean, renewable energy solutions that sustain our planet.</p>
            </motion.div>

            <motion.div
              className="p-8 rounded-lg shadow-lg bg-muted border border-slate-100"
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-semibold mb-3">Vision</h3>
              <p className="text-muted-foreground mb-4">⚡ A world where energy is renewable, affordable, and accessible to all.</p>
            </motion.div>
          </div>
        </div>
      </AnimatedSection>

      {/* Timeline / Journey */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="section-title text-center mb-8">Our Journey</h2>
          <div className="grid md:grid-cols-4 gap-6 items-start">
            {milestones.map((m, idx) => (
              <motion.div
                key={m.year}
                className="bg-muted p-6 rounded-lg shadow-sm border border-slate-100"
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.12 }}
              >
                <div className="text-foreground font-bold text-lg">{m.year}</div>
                <h4 className="mt-2 font-semibold">{m.title}</h4>
                <p className="text-sm text-muted-foreground mt-2">{m.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Founder's Message */}
      <AnimatedSection className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 items-center">
            <motion.img
              src={teamImage}
              alt="Founder"
              className="w-full rounded-lg shadow-lg md:col-span-1 object-cover h-64"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            />

            <motion.div
              className="md:col-span-2"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-semibold">A note from our Founder</h3>
              <blockquote className="mt-4 text-lg italic text-muted-foreground">“When we started, our goal was simple — to turn waste into clean power. Today, we’re making that vision a reality.”</blockquote>
              <p className="mt-4 text-sm text-muted-foreground">Our founder's leadership has guided our growth from a local initiative into a global partner for sustainable energy solutions.</p>
            </motion.div>
          </div>
        </div>
      </AnimatedSection>

      {/* Core Values */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <h2 className="section-title text-center mb-8">Our Core Values</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <motion.div className="p-6 rounded-lg shadow-sm bg-background border border-slate-100" initial={{ opacity: 0, y: 8 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <h4 className="font-semibold mb-2">Sustainability</h4>
              <p className="text-sm text-muted-foreground">Protecting our planet through innovation.</p>
            </motion.div>

            <motion.div className="p-6 rounded-lg shadow-sm bg-background border border-slate-100" initial={{ opacity: 0, y: 8 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <h4 className="font-semibold mb-2">Innovation</h4>
              <p className="text-sm text-muted-foreground">Developing advanced renewable solutions.</p>
            </motion.div>

            <motion.div className="p-6 rounded-lg shadow-sm bg-background border border-slate-100" initial={{ opacity: 0, y: 8 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <h4 className="font-semibold mb-2">Integrity</h4>
              <p className="text-sm text-muted-foreground">Building trust through transparency.</p>
            </motion.div>

            <motion.div className="p-6 rounded-lg shadow-sm bg-background border border-slate-100" initial={{ opacity: 0, y: 8 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <h4 className="font-semibold mb-2">Community Impact</h4>
              <p className="text-sm text-muted-foreground">Empowering lives with clean energy.</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Impact Stats - interactive (uses same interface as Home stats) */}
      <section className="relative h-full overflow-hidden pt-4">
        {/* background image (changes on hover) */}
        <div
          className="absolute inset-0 bg-cover bg-center transition-all duration-500"
          style={{ backgroundImage: `url(${heroImage})`, filter: "brightness(0.45)" }}
          id="impact-bg"
        />
        <div className="absolute inset-0 bg-black/10" />

        <div className="relative z-10 w-full h-full">
          <div className="container mx-auto px-4 h-full">
            <div className="grid grid-cols-1 lg:grid-cols-2 h-full items-center">
              {/* left column (can be used for intro or left empty) */}
              <div className="hidden lg:block" />

              {/* right column: counters stacked and aligned to the right edge */}
              <div className="flex items-center justify-end h-full">
                <div className="w-full max-w-2xl text-white">
                  <div className="space-y-12 py-12">
                    <AnimatedCounter
                      end={500}
                      suffix="+ MW"
                      label="Clean Energy Produced"
                      displayMode="integer"
                      onMouseEnter={() => {
                        const el = document.getElementById('impact-bg');
                        if (el) el.style.backgroundImage = `url(${sustainabilityImage})`;
                      }}
                      onMouseLeave={() => {
                        const el = document.getElementById('impact-bg');
                        if (el) el.style.backgroundImage = `url(${heroImage})`;
                      }}
                      align="start"
                    />

                    <AnimatedCounter
                      end={100}
                      suffix="+"
                      label="Communities Empowered"
                      onMouseEnter={() => {
                        const el = document.getElementById('impact-bg');
                        if (el) el.style.backgroundImage = `url(${teamImage})`;
                      }}
                      onMouseLeave={() => {
                        const el = document.getElementById('impact-bg');
                        if (el) el.style.backgroundImage = `url(${heroImage})`;
                      }}
                      align="start"
                    />

                    <AnimatedCounter
                      end={1000000}
                      suffix="+"
                      label="Tons CO₂ Saved Annually"
                      onMouseEnter={() => {
                        const el = document.getElementById('impact-bg');
                        if (el) el.style.backgroundImage = `url(${sustainabilityImage})`;
                      }}
                      onMouseLeave={() => {
                        const el = document.getElementById('impact-bg');
                        if (el) el.style.backgroundImage = `url(${heroImage})`;
                      }}
                      align="start"
                    />

                    <p className="text-sm text-white/70 max-w-2xl">
                      Connecting communities, powering sustainable futures — our work brings clean, reliable biomass solutions from local partners to global markets.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <AnimatedSection className="py-16 bg-background">
        <motion.div className="container mx-auto px-4 text-center" initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <h3 className="text-2xl font-semibold mb-4">Join us in building a sustainable future.</h3>
          <div className="space-x-4">
            <Button asChild>
              <a href="/about">Learn More</a>
            </Button>
            <Button variant="outline" asChild>
              <a href="/contact">Get Involved</a>
            </Button>
          </div>
        </motion.div>
      </AnimatedSection>
    </div>
  );
};

export default OurStory;
