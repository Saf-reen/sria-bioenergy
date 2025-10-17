import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

interface HeroProps {
  title: string;
  subtitle: string;
  backgroundImage: string;
  primaryCTA?: { text: string; href: string };
  secondaryCTA?: { text: string; href: string };
  classHeight?: string;
}

const Hero = ({ title, subtitle, backgroundImage, primaryCTA, secondaryCTA, classHeight }: HeroProps) => {
  return (
    <section className={`relative ${classHeight} flex items-center justify-center overflow-hidden`}>
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      />
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-hero-overlay" />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4">
        <div className="max-w-4xl">
          <motion.h1
            className="hero-title text-primary-foreground mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            {title}
          </motion.h1>
          
          <motion.p
            className="hero-subtitle text-primary-foreground/90 mb-8 max-w-2xl"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          >
            {subtitle}
          </motion.p>

          {(primaryCTA || secondaryCTA) && (
            <motion.div
              className="flex flex-wrap gap-4"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            >
              {primaryCTA && (
                <Button variant="hero" size="lg" asChild>
                  <Link to={primaryCTA.href}>
                    {primaryCTA.text}
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Link>
                </Button>
              )}
              {secondaryCTA && (
                <Button variant="hero-outline" size="lg" asChild>
                  <Link to={secondaryCTA.href}>
                    {secondaryCTA.text}
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Link>
                </Button>
              )}
            </motion.div>
          )}
        </div>
      </div>

    </section>
  );
};

export default Hero;
