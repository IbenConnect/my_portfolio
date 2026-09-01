"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { scaleIn, floatY } from "@/lib/animations";
import { usePrefersReducedMotion } from "@/hooks/use-prefers-reduced-motion";
import { cn } from "@/lib/utils";
import { siteConfig } from "@/config/site";
import type { Profile } from "@/data/profile";

interface HeroVisualProps {
  image: Profile["profileImage"];
}

export default function HeroVisual({ image }: HeroVisualProps) {
  const reduced = usePrefersReducedMotion();

  const fallbackHide = (e: React.SyntheticEvent<HTMLImageElement>) => {
    const target = e.currentTarget;
    target.style.display = "none";
  };

  const frame = (
    <div className="relative mx-auto w-full max-w-[300px] sm:max-w-[340px] lg:max-w-[400px]">
      <div
        aria-hidden
        className="absolute -inset-6 rounded-full bg-[conic-gradient(from_180deg_at_50%_50%,oklch(0.70_0.18_260_/_0.55),oklch(0.70_0.17_200_/_0.35),oklch(0.70_0.15_160_/_0.35),oklch(0.70_0.18_260_/_0.55))] opacity-55 blur-3xl"
      />
      <div
        aria-hidden
        className="absolute -inset-2 rounded-full bg-gradient-to-br from-[oklch(0.70_0.18_260_/_0.28)] via-transparent to-[oklch(0.70_0.15_160_/_0.24)] blur-xl"
      />

      <div
        className={cn(
          "relative aspect-square w-full overflow-hidden rounded-full",
          "border border-[oklch(0.55_0.14_260_/_0.45)]",
          "shadow-[0_12px_32px_-8px_oklch(0.55_0.22_260_/_0.25),0_4px_12px_-4px_oklch(0.00_0.00_0_/_0.40)]",
          "bg-[oklch(0.17_0.03_265_/_0.70)] ring-1 ring-inset ring-white/5 backdrop-blur-sm",
        )}
      >
        <div
          aria-hidden
          className="absolute inset-0 z-0 flex items-center justify-center bg-gradient-to-br from-[oklch(0.22_0.04_265_/_0.95)] via-[oklch(0.20_0.04_265_/_0.95)] to-[oklch(0.18_0.03_265_/_0.95)]"
        >
          <div className="text-5xl font-bold tracking-tight text-gradient-brand sm:text-6xl lg:text-7xl">
            {siteConfig.initials}
          </div>
        </div>

        <Image
          src={image.src}
          alt={image.alt}
          fill
          priority
          sizes="(max-width: 640px) 75vw, (max-width: 1024px) 40vw, 400px"
          className="object-cover"
          onError={fallbackHide}
        />

        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 z-10 rounded-full ring-1 ring-inset ring-white/10"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 z-10 rounded-full bg-[radial-gradient(circle_at_30%_25%,oklch(1_0_0_/_0.12),transparent_45%),linear-gradient(180deg,oklch(0.70_0.18_260_/_0.06)_0%,transparent_45%,transparent_70%,oklch(0.10_0.01_265_/_0.35)_100%)]"
        />
      </div>

      <div
        aria-hidden
        className="pointer-events-none absolute -left-2 top-14 hidden h-11 w-11 rounded-full border border-[oklch(0.55_0.14_260_/_0.45)] bg-[oklch(0.17_0.03_265_/_0.60)] backdrop-blur-xl sm:block"
      >
        <div className="absolute inset-[5px] rounded-full bg-gradient-to-br from-[oklch(0.70_0.18_260_/_0.20)] to-transparent" />
      </div>
      <div
        aria-hidden
        className="pointer-events-none absolute -right-2 bottom-16 hidden h-11 w-11 rounded-full border border-[oklch(0.55_0.14_260_/_0.45)] bg-[oklch(0.17_0.03_265_/_0.60)] backdrop-blur-xl sm:block"
      >
        <div className="absolute inset-[5px] rounded-full bg-gradient-to-br from-[oklch(0.70_0.15_160_/_0.20)] to-transparent" />
      </div>
    </div>
  );

  if (reduced) {
    return <div className="w-full">{frame}</div>;
  }

  return (
    <motion.div
      variants={scaleIn}
      initial="hidden"
      animate="visible"
      className="w-full"
    >
      <motion.div variants={floatY} initial="hidden" animate="visible">
        {frame}
      </motion.div>
    </motion.div>
  );
}
