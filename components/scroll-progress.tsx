"use client";

import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { usePrefersReducedMotion } from "@/hooks/use-prefers-reduced-motion";

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const reducedMotion = usePrefersReducedMotion();

  const scaleXSpring = useSpring(scrollYProgress, {
    stiffness: 140,
    damping: 30,
    mass: 0.5,
    restDelta: 0.001,
  });
  const scaleXInstant = useTransform(scrollYProgress, (v) => v);

  const scaleX = reducedMotion ? scaleXInstant : scaleXSpring;

  return (
    <motion.div
      style={{ scaleX }}
      transition={{ duration: reducedMotion ? 0 : undefined }}
      className="fixed left-0 right-0 top-0 z-[60] h-[2px] origin-left bg-gradient-to-r from-foreground/70 via-foreground/50 to-foreground/30 opacity-70"
    />
  );
}
