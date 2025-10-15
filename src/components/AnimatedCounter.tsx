import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

interface AnimatedCounterProps {
  end: number;
  duration?: number;
  label: string;
  suffix?: string;
  prefix?: string;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
  /** displayMode: 'integer' => whole numbers (default), 'millions' => show value divided by 1_000_000 with one decimal */
  displayMode?: "integer" | "millions";
  /** alignment for text inside the counter: 'start' or 'center' or 'end' */
  align?: "start" | "center" | "end";
}

const AnimatedCounter = ({
  end,
  duration = 2,
  label,
  suffix = "",
  prefix = "",
  onMouseEnter,
  onMouseLeave,
  displayMode = "integer",
  align = "center",
}: AnimatedCounterProps) => {
  const [count, setCount] = useState(0);
  const [hover, setHover] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (!isInView) return;

    let startTime: number;
    let animationFrame: number;

    // target value depends on displayMode
    const target = displayMode === "millions" ? end / 1_000_000 : end;

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min(1, (currentTime - startTime) / (duration * 1000));

      if (progress < 1) {
        setCount(target * progress);
        animationFrame = requestAnimationFrame(animate);
      } else {
        setCount(target);
      }
    };

    animationFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrame);
  }, [end, duration, isInView]);

  const formatNumber = (num: number) => {
    if (displayMode === "millions") {
      // show one decimal place for millions
      return num.toFixed(1);
    }
    return Math.floor(num).toLocaleString();
  };

  return (
    <motion.div
      ref={ref}
      className={
        `cursor-pointer outline-none ` +
        (align === "start" ? "text-left" : align === "end" ? "text-right" : "text-center")
      }
      onMouseEnter={(e) => {
        setHover(true);
        onMouseEnter && onMouseEnter();
      }}
      onMouseLeave={(e) => {
        setHover(false);
        onMouseLeave && onMouseLeave();
      }}
      onFocus={() => setHover(true)}
      onBlur={() => setHover(false)}
      tabIndex={0}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6 }}
    >
      <motion.div
        className="mb-2 font-bold text-white"
        style={{ lineHeight: 1 }}
        animate={hover ? { fontSize: "5rem" } : { fontSize: "2.25rem" }}
        transition={{ type: "tween", duration: 0.22 }}
      >
        <span className={`inline-block ${displayMode === "millions" ? "leading-none" : "leading-tight"}`}>
          {prefix}{formatNumber(count)}{suffix}
        </span>
      </motion.div>

      {/* label with horizontal rule behind */}
      <div className="relative w-full mt-2">
        <hr className="border-t border-white/40" />
        <motion.div
          className={`absolute mt-4 top-1/2 transform -translate-y-1/2 px-4 bg-transparent text-xs text-white uppercase tracking-wider ${
            align === "start" ? "left-0 -translate-x-0" : align === "end" ? "right-0 translate-x-0" : "left-1/2 -translate-x-1/2"
          }`}
          animate={hover ? { scale: 0.9, opacity: 0.9 } : { scale: 1, opacity: 1 }}
          transition={{ type: "tween", duration: 0.18 }}
        >
          {label}
        </motion.div>
      </div>
    </motion.div>
  );
};

export default AnimatedCounter;
