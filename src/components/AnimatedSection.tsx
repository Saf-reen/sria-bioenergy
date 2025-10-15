import React from "react";
import { motion, Variants, MotionProps } from "framer-motion";

type Props = MotionProps & React.HTMLAttributes<HTMLElement> & {
  children: React.ReactNode;
  className?: string;
  threshold?: number;
  once?: boolean;
  stagger?: number; // seconds between child items when using .stagger class
};

const slideUpVariants = (stagger = 0): Variants => ({
  hidden: { opacity: 0, y: 30, scale: 0.995 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      when: "beforeChildren",
      staggerChildren: stagger,
      duration: 0.6,
      ease: [0.2, 0.85, 0.25, 1],
    },
  },
});

const AnimatedSection: React.FC<Props> = ({ children, className = "", threshold = 0.12, once = true, stagger = 0, ...rest }) => {
  const variants = slideUpVariants(stagger);

  return (
    <motion.section
      {...rest}
      className={className}
      initial="hidden"
      whileInView="show"
      viewport={{ once, amount: threshold }}
      variants={variants}
    >
      {children}
    </motion.section>
  );
};

export default AnimatedSection;
