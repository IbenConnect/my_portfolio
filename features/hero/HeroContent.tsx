"use client";

import { motion } from "framer-motion";
import {
  heroSequence,
  fadeUpSm,
  fadeUpMd,
  fadeUpLg,
} from "@/lib/animations";
import { usePrefersReducedMotion } from "@/hooks/use-prefers-reduced-motion";
import { cn } from "@/lib/utils";
import HeroBadge from "./HeroBadge";
import HeroActions from "./HeroActions";
import HeroSocials from "./HeroSocials";
import type { Profile } from "@/data/profile";

interface HeroContentProps {
  profile: Profile;
}

export default function HeroContent({ profile }: HeroContentProps) {
  const reduced = usePrefersReducedMotion();

  const motionState = {
    initial: reduced ? false : ("hidden" as const),
    animate: reduced ? false : ("visible" as const),
  };

  return (
    <motion.div
      variants={heroSequence}
      {...motionState}
      className="flex w-full flex-col items-start gap-5 text-left sm:gap-6"
    >
      <motion.div variants={fadeUpSm} {...motionState}>
        <HeroBadge status={profile.availability.status} />
      </motion.div>

      <motion.h1
        variants={fadeUpLg}
        {...motionState}
        className="flex max-w-2xl flex-col gap-1.5 font-semibold tracking-tight text-foreground"
      >
        <span className="text-lg font-medium text-muted-foreground sm:text-xl">
          {profile.greeting}
        </span>
        <span className="text-4xl leading-[1.05] sm:text-5xl lg:text-[3.75rem]">
          <span className="text-gradient-brand">{profile.firstName}</span>{" "}
          <span className="text-foreground drop-shadow-[0_2px_12px_oklch(0.70_0.18_260_/_0.18)]">
            {profile.lastName}
          </span>
        </span>
      </motion.h1>

      <motion.p
        variants={fadeUpMd}
        {...motionState}
        className={cn(
          "text-lg font-semibold tracking-tight text-foreground sm:text-xl",
          "before:mr-3 before:inline-block before:h-[3px] before:w-8 before:rounded-full before:bg-[oklch(0.70_0.18_260)] before:align-middle sm:before:w-10",
        )}
        aria-label={profile.role}
      >
        {profile.role}
      </motion.p>

      <motion.p
        variants={fadeUpSm}
        {...motionState}
        className="max-w-2xl text-base leading-7 text-muted-foreground/95 sm:text-lg sm:leading-8"
      >
        {profile.tagline}
      </motion.p>

      <motion.div
        variants={fadeUpSm}
        {...motionState}
        className="w-full pt-1"
      >
        <HeroActions
          primary={profile.cta.primary}
          secondary={profile.cta.secondary}
        />
      </motion.div>

      <motion.div variants={fadeUpSm} {...motionState} className="pt-1">
        <HeroSocials />
      </motion.div>
    </motion.div>
  );
}
