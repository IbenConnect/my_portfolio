"use client";

import { useEffect, useRef } from "react";
import Lenis from "lenis";
import { usePrefersReducedMotion } from "@/hooks/use-prefers-reduced-motion";

type LenisWindow = typeof globalThis extends { lenis?: infer L }
  ? { lenis?: L }
  : { lenis?: Lenis };

export default function SmoothScroll({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const lenisRef = useRef<Lenis | null>(null);
  const reducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    if (reducedMotion) return;

    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    });

    lenisRef.current = lenis;
    (globalThis as LenisWindow).lenis = lenis;

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      delete (globalThis as LenisWindow).lenis;
      lenis.destroy();
    };
  }, [reducedMotion]);

  return children;
}


