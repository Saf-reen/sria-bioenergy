import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Hero from "@/components/Hero";
import AnimatedCounter from "@/components/AnimatedCounter";
import ProductCard from "@/components/ProductCard";
import ProductsCarousel from "@/components/ProductsCarousel";
import SectionStack from "@/components/SectionStack";
import { Button } from "@/components/ui/button";
import { ArrowRight, Leaf, Globe, Users, TrendingUp } from "lucide-react";
import { stats, products } from "@/data/mockData";
import heroImage from "@/assets/hero-biomass.jpg";
import biomassImage from "@/assets/biomass-pellets.jpg";
import sustainabilityImage from "@/assets/sustainability.jpg";
import teamImage from "@/assets/team-member.jpg";

const Home = () => {
  return (
    <div className="min-h-screen">
      <Hero
        title="GROWING TOGETHER"
        subtitle="BIOENERGY marks our strategic expansion into the renewable energy sector, focusing on biomass, biofuels, and sustainable energy solutions that convert waste into opportunity. This initiative aligns with SRIA’s mission to build a Smart, Resilient, Inclusive, and Agile India, while creating real impact in the lives of rural communities through innovation and sustainability."
        backgroundImage={heroImage}
        primaryCTA={{ text: "About Us", href: "/about" }}
        secondaryCTA={{ text: "Get in Touch", href: "/contact" }}
        classHeight="h-screen"
      />

      {/* About Preview */}
      <SectionStack className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="section-title">Growing Together Towards a Greener Tomorrow</h2>
              <p className="section-subtitle mb-6">
                BioEnergy marks our strategic expansion into the renewable energy sector, focusing on biomass, biofuels, and sustainable energy solutions that convert waste into opportunity. This initiative aligns with SRIA’s mission to build a Smart, Resilient, Inclusive, and Agile India, while creating real impact in the lives of rural communities through innovation and sustainability.
              </p>
              <div className="grid grid-cols-2 gap-6 mb-8">
                <div className="flex items-start space-x-3">
                  <Leaf className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold mb-1">Sustainable</h3>
                    <p className="text-sm text-muted-foreground">100% certified biomass</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Globe className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold mb-1">Global Reach</h3>
                    <p className="text-sm text-muted-foreground">Worldwide delivery network</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Users className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold mb-1">Expert Team</h3>
                    <p className="text-sm text-muted-foreground">Industry leaders</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <TrendingUp className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold mb-1">Innovation</h3>
                    <p className="text-sm text-muted-foreground">Cutting-edge solutions</p>
                  </div>
                </div>
              </div>
              <Button variant="default" size="lg" asChild>
                <Link to="/about">
                  Learn More About Us
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <img
                src={biomassImage}
                alt="Biomass pellets"
                className="rounded-lg shadow-xl w-full"
              />
            </motion.div>
          </div>
        </div>
      </SectionStack>

      {/* Products Preview */}
      <SectionStack className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="section-title">Our Products</h2>
            <p className="section-subtitle max-w-3xl mx-auto">
              SRIA BIOENERGY caters to a broad spectrum of clients, from large-scale producers and utilities to smaller regional distributors. Our diverse portfolio includes both industrial and premium-grade wood pellets.
            </p>
          </motion.div>
          <div>
            <ProductsCarousel hideScrollbar />
          </div>
          <div className="text-center mt-12">
            <Button variant="default" size="lg" asChild>
              <Link to="/products">
                View All Products
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
          </div>
        </div>
      </SectionStack>

      {/* Stats Section - full viewport with hover-change background */}
      <section className="relative h-full overflow-hidden pt-4">
        {/* background image (changes on hover) */}
        <div
          className="absolute inset-0 bg-cover bg-center transition-all duration-500"
          style={{ backgroundImage: `url(${heroImage})`, filter: "brightness(0.45)" }}
          id="stats-bg"
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
                      end={stats.tonnesDelivered}
                      label="Million Tonnes Biomass Delivered Annually"
                      suffix=""
                      displayMode="millions"
                      onMouseEnter={() => {
                        const el = document.getElementById('stats-bg');
                        if (el) el.style.backgroundImage = `url(${heroImage})`;
                      }}
                      onMouseLeave={() => {}}
                      align="start"
                    />

                    <AnimatedCounter
                      end={240}
                      label="Employees Across the Globe"
                      suffix="+"
                      onMouseEnter={() => {
                        const el = document.getElementById('stats-bg');
                        if (el) el.style.backgroundImage = `url(${teamImage})`;
                      }}
                      onMouseLeave={() => {
                        const el = document.getElementById('stats-bg');
                        if (el) el.style.backgroundImage = `url(${heroImage})`;
                      }}
                      align="start"
                    />

                    <AnimatedCounter
                      end={stats.offices}
                      label="Key Markets with Offices"
                      onMouseEnter={() => {
                        const el = document.getElementById('stats-bg');
                        if (el) el.style.backgroundImage = `url(${biomassImage})`;
                      }}
                      onMouseLeave={() => {
                        const el = document.getElementById('stats-bg');
                        if (el) el.style.backgroundImage = `url(${heroImage})`;
                      }}
                      align="start"
                    />

                    <AnimatedCounter
                      end={2009}
                      label="Providing Renewable Energy Since 2009"
                      onMouseEnter={() => {
                        const el = document.getElementById('stats-bg');
                        if (el) el.style.backgroundImage = `url(${sustainabilityImage})`;
                      }}
                      onMouseLeave={() => {
                        const el = document.getElementById('stats-bg');
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

      {/* Global Presence */}
      <SectionStack className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="w-full"
            >
              <img
                src={biomassImage}
                alt="Our team"
                className="rounded-lg shadow-xl w-full h-auto object-cover"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="section-title">Local Connection, Global Strength</h2>
              <p className="section-subtitle max-w-3xl">
                At SRIA BIOENERGY, we believe that having the strength of a global company with local anchoring and representatives is vital to building and maintaining trusting and lasting client relationships.
              </p>

              <div className="mt-8 space-y-6">
                <div className="flex items-start space-x-3">
                  <Leaf className="w-6 h-6 text-muted-foreground flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold mb-1">Regional Expertise</h3>
                    <p className="text-sm text-muted-foreground">Locally-rooted teams with global standards</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <Globe className="w-6 h-6 text-muted-foreground flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold mb-1">Operational Footprint</h3>
                    <p className="text-sm text-muted-foreground">Offices across key markets for fast response</p>
                  </div>
                </div>

                <div className="flex items-center gap-4 mt-2">
                  <Button variant="default" size="lg" asChild>
                    <Link to="/global-presence">
                      Explore Our Offices
                      <ArrowRight className="ml-2 w-5 h-5" />
                    </Link>
                  </Button>

                  <Button variant="outline" size="lg" asChild>
                    <Link to="/contact">Get In Touch</Link>
                  </Button>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </SectionStack>

    </div>
  );
};

export default Home;
