"use client";

import { motion } from "framer-motion";
import { pulseDot, fadeIn } from "@/lib/animations";
import { usePrefersReducedMotion } from "@/hooks/use-prefers-reduced-motion";
import { cn } from "@/lib/utils";
import type { Profile } from "@/data/profile";

interface HeroBadgeProps {
  status: Profile["availability"]["status"];
}

export default function HeroBadge({ status }: HeroBadgeProps) {
  const reduced = usePrefersReducedMotion();

  const dot = reduced ? (
    <span
      aria-hidden
      className="h-2 w-2 rounded-full bg-[oklch(0.70_0.17_160)] shadow-[0_0_0_3px_oklch(0.70_0.17_160_/_0.15)]"
    />
  ) : (
    <motion.span
      aria-hidden
      variants={pulseDot}
      initial="hidden"
      animate="visible"
      className="relative inline-block h-2 w-2 rounded-full bg-[oklch(0.70_0.17_160)]"
    >
      <span
        aria-hidden
        className="absolute inset-0 rounded-full bg-[oklch(0.70_0.17_160)] opacity-45 blur-[2px]"
      />
    </motion.span>
  );

  const label = (
    <span className="text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-foreground/90 sm:text-xs">
      {status}
    </span>
  );

  if (reduced) {
    return (
      <div
        aria-live="polite"
        className={cn(
          "inline-flex items-center gap-2.5 rounded-full border border-[oklch(0.70_0.18_260_/_0.30)]",
          "bg-[oklch(0.17_0.03_265_/_0.60)] px-3.5 py-1.5 backdrop-blur-xl supports-[backdrop-filter]:bg-[oklch(0.17_0.03_265_/_0.40)]",
          "shadow-[0_8px_30px_-10px_oklch(0.55_0.22_260_/_0.35)]",
        )}
      >
        {dot}
        {label}
      </div>
    );
  }

  return (
    <motion.div
      aria-live="polite"
      variants={fadeIn}
      initial="hidden"
      animate="visible"
      className={cn(
        "inline-flex items-center gap-2.5 rounded-full border border-[oklch(0.70_0.18_260_/_0.30)]",
        "bg-[oklch(0.17_0.03_265_/_0.60)] px-3.5 py-1.5 backdrop-blur-xl supports-[backdrop-filter]:bg-[oklch(0.17_0.03_265_/_0.40)]",
        "shadow-[0_8px_30px_-10px_oklch(0.55_0.22_260_/_0.35)]",
      )}
    >
      {dot}
      {label}
    </motion.div>
  );
}
