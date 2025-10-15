import React from "react";
import AnimatedSection from "./AnimatedSection";

type Props = {
  children: React.ReactNode;
  className?: string;
};

const SectionStack: React.FC<Props> = ({ children, className = "" }) => {
  return (
    <AnimatedSection className={className}>
      <div className="section-stack-panel">{children}</div>
    </AnimatedSection>
  );
};

export default SectionStack;
