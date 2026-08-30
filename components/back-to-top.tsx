"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { usePrefersReducedMotion } from "@/hooks/use-prefers-reduced-motion";

const HOME_ID = "home";

export default function BackToTop() {
  const [show, setShow] = useState(false);
  const reducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    const threshold = 480;

    const onScroll = () => {
      setShow(window.scrollY > threshold);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  const handleClick = () => {
    const home = document.getElementById(HOME_ID);
    const target = home ?? document.body;
    const lenis = (window as unknown as { lenis?: { scrollTo: (t: unknown) => void } }).lenis;

    if (lenis && typeof lenis.scrollTo === "function") {
      lenis.scrollTo(target);
      return;
    }

    target.scrollIntoView({ behavior: reducedMotion ? "auto" : "smooth", block: "start" });
  };

  if (!show) return null;

  if (reducedMotion) {
    return (
      <button
        type="button"
        aria-label="Back to top"
        onClick={handleClick}
        className="fixed bottom-5 right-5 z-50 inline-flex h-11 w-11 items-center justify-center rounded-full border border-border/60 bg-background/85 text-foreground shadow-sm backdrop-blur hover:bg-background md:bottom-8 md:right-8"
      >
        <span aria-hidden className="text-lg leading-none">
          ↑
        </span>
      </button>
    );
  }

  return (
    <AnimatePresence>
      {show && (
        <motion.button
          type="button"
          aria-label="Back to top"
          onClick={handleClick}
          initial={{ opacity: 0, y: 12, scale: 0.92 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 12, scale: 0.92 }}
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: "spring", stiffness: 320, damping: 22 }}
          className="fixed bottom-5 right-5 z-50 inline-flex h-11 w-11 items-center justify-center rounded-full border border-border/60 bg-background/85 text-foreground shadow-sm backdrop-blur transition-colors hover:bg-background md:bottom-8 md:right-8"
        >
          <span aria-hidden className="text-lg leading-none">
            ↑
          </span>
        </motion.button>
      )}
    </AnimatePresence>
  );
}
