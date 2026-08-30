import type { Variants, Transition } from "framer-motion";

export const easeOutCubic = [0.33, 1, 0.68, 1] as const;
export const easeOutExpo = [0.16, 1, 0.3, 1] as const;

export interface FadeUpOptions {
  distance?: number;
  duration?: number;
  delay?: number;
  ease?: readonly [number, number, number, number];
}

export function fadeUp(options: FadeUpOptions = {}): Variants {
  const {
    distance = 24,
    duration = 0.6,
    delay = 0,
    ease = easeOutCubic,
  } = options;

  return {
    hidden: {
      opacity: 0,
      y: distance,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration,
        delay,
        ease,
      } satisfies Transition,
    },
  };
}

export const fadeUpSm = fadeUp({ distance: 12, duration: 0.5 });
export const fadeUpMd = fadeUp({ distance: 24, duration: 0.6 });
export const fadeUpLg = fadeUp({ distance: 40, duration: 0.7 });

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.5, ease: easeOutCubic },
  },
};

export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.96 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5, ease: easeOutExpo },
  },
};

export function staggerContainer(
  staggerChildren = 0.1,
  delayChildren = 0,
): Variants {
  return {
    hidden: {},
    visible: {
      transition: {
        staggerChildren,
        delayChildren,
      } satisfies Transition,
    },
  };
}

export const pulseDot: Variants = {
  hidden: { opacity: 0.8, scale: 1 },
  visible: {
    opacity: [0.8, 1, 0.8],
    scale: [1, 1.15, 1],
    transition: {
      duration: 2.2,
      ease: "easeInOut",
      repeat: Infinity,
      repeatType: "mirror",
    } satisfies Transition,
  },
};

export const floatY: Variants = {
  hidden: { y: 0 },
  visible: {
    y: [0, -6, 0],
    transition: {
      duration: 4.5,
      ease: "easeInOut",
      repeat: Infinity,
      repeatType: "mirror",
    } satisfies Transition,
  },
};

export const shimmerBar: Variants = {
  hidden: { x: "-100%" },
  visible: {
    x: "220%",
    transition: {
      duration: 1.2,
      ease: "easeInOut",
      repeat: Infinity,
      repeatType: "loop",
    } satisfies Transition,
  },
};

export const heroSequence = staggerContainer(0.12, 0.05);
