import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Hero from "@/components/Hero";
import AnimatedCounter from "@/components/AnimatedCounter";
import ProductCard from "@/components/ProductCard";
import { Button } from "@/components/ui/button";
import { ArrowRight, Leaf, Globe, Users, TrendingUp } from "lucide-react";
import { stats, products } from "@/data/mockData";
import heroImage from "@/assets/hero-biomass.jpg";
import biomassImage from "@/assets/biomass-pellets.jpg";
import sustainabilityImage from "@/assets/sustainability.jpg";

const Home = () => {
  return (
    <div className="min-h-screen">
      <Hero
        title="GROWING TOGETHER"
        subtitle="At SRIA BIOENERGY, the world's leading biomass trading company, we enable a greener tomorrow by setting the pace in the marketplace and leading innovation and excellence in producing, trading, and delivering biomass solutions. At the heart of our mission is a team of industry frontrunners – fuelled by passion and ambition."
        backgroundImage={heroImage}
        primaryCTA={{ text: "About Us", href: "/about" }}
        secondaryCTA={{ text: "Get in Touch", href: "/contact" }}
      />

      {/* Stats Section */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <AnimatedCounter
              end={stats.tonnesDelivered}
              label="Tonnes Delivered Annually"
              suffix="+"
            />
            <AnimatedCounter
              end={stats.offices}
              label="Global Offices"
            />
            <AnimatedCounter
              end={stats.employees}
              label="Expert Team Members"
            />
            <AnimatedCounter
              end={stats.countries}
              label="Countries Served"
            />
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section className="py-20">
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
                Since 2009, SRIA BIOENERGY has been driving the renewable energy evolution by providing high-quality biomass solutions. We prioritize our clients and always go the extra mile to meet their needs. Join us in our mission to grow together towards a greener tomorrow, one pellet at a time.
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
      </section>

      {/* Products Preview */}
      <section className="py-20 bg-muted">
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
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <ProductCard key={product.id} product={product} index={index} />
            ))}
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
      </section>

      {/* Global Presence */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="section-title">Local Connection, Global Strength</h2>
            <p className="section-subtitle max-w-3xl mx-auto">
              At SRIA BIOENERGY, we believe that having the strength of a global company with local anchoring and representatives is vital to building and maintaining trusting and lasting client relationships.
            </p>
          </motion.div>
          <div className="text-center">
            <Button variant="default" size="lg" asChild>
              <Link to="/global-presence">
                Explore Our Offices
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Sustainability */}
      <section className="py-20 relative overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${sustainabilityImage})` }}
        />
        <div className="absolute inset-0 bg-primary/90" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center text-primary-foreground">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="section-title text-primary-foreground mb-6">
                A More Responsible Way Forward
              </h2>
              <p className="text-lg md:text-xl mb-8 text-primary-foreground/90">
                At SRIA BIOENERGY, we are not just committed to sustainability — we are passionate about making a meaningful difference in the world. Join us on our journey towards a greener tomorrow.
              </p>
              <Button variant="hero" size="lg" asChild>
                <Link to="/sustainability">
                  Learn About Our Commitment
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="section-title mb-6">Ready to Partner With Us?</h2>
              <p className="section-subtitle mb-8">
                Let's work together towards a sustainable energy future. Get in touch with our team today.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button variant="default" size="lg" asChild>
                  <Link to="/contact">
                    Contact Us
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Link>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <Link to="/careers">
                    Join Our Team
                  </Link>
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
