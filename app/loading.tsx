"use client";

import { motion } from "framer-motion";
import { siteConfig } from "@/config/site";
import { usePrefersReducedMotion } from "@/hooks/use-prefers-reduced-motion";

export default function Loading() {
  const reducedMotion = usePrefersReducedMotion();

  const logoEl = (
    <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-border/60 bg-background/80 text-lg font-semibold tracking-tight text-foreground shadow-sm backdrop-blur">
      {siteConfig.initials}
    </div>
  );

  const progressEl = reducedMotion ? (
    <span className="h-[3px] w-10 rounded-full bg-foreground/30" />
  ) : (
    <motion.span
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4, delay: 0.1 }}
      className="h-[3px] w-10 overflow-hidden rounded-full bg-foreground/10"
    >
      <motion.span
        initial={{ x: "-100%" }}
        animate={{ x: "220%" }}
        transition={{
          duration: 1.2,
          ease: "easeInOut",
          repeat: Infinity,
          repeatType: "loop",
        }}
        className="block h-full w-1/2 rounded-full bg-gradient-to-r from-transparent via-foreground/40 to-transparent"
      />
    </motion.span>
  );

  return (
    <div className="pointer-events-none flex min-h-[60vh] flex-col items-center justify-center gap-4 px-4">
      {reducedMotion ? (
        logoEl
      ) : (
        <motion.div
          initial={{ opacity: 0, y: 4, scale: 0.97 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.35, ease: "easeOut" }}
        >
          {logoEl}
        </motion.div>
      )}
      {progressEl}
    </div>
  );
}
