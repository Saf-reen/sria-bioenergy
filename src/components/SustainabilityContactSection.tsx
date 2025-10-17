import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import sustainabilityImage from "@/assets/sustainability.jpg";

const SustainabilityContactSection = () => (
  <>
    {/* Sustainability - full bleed with left-aligned content */}
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${sustainabilityImage})` }} />
      <div className="absolute inset-0 bg-black/55" />
      <div className="container mx-auto px-4 relative z-10">
        <div className="min-h-[520px] flex items-center">
          <motion.div
            className="max-w-2xl lg:max-w-xl text-white"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">Sustainability is our<br />License to Operate</h2>
            <p className="text-base md:text-lg text-white/90 mb-6">
              We believe that driving sustainability and documenting the industry’s high standards are key to the successful development of the biomass sector. At SRIA BIOENERGY, we are on a journey to decarbonize energy-intensive companies all over the world.
            </p>
            <p className="text-sm md:text-base text-white/80 mb-8">
              We understand that transparency in our supply chains is essential for maintaining credibility and public support. That is why we have positioned ourselves as frontrunners in biomass practices since our foundation.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button variant="default" size="lg" asChild>
                <Link to="/sustainability">
                  SUSTAINABILITY
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
              <Button variant="white-outline" size="lg" asChild>
                <Link to="/certificates">
                  CERTIFICATES
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
            </div>
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
  </>
);

export default SustainabilityContactSection;
