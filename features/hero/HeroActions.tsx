"use client";

import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { usePrefersReducedMotion } from "@/hooks/use-prefers-reduced-motion";
import { cn } from "@/lib/utils";
import type { Profile } from "@/data/profile";

interface HeroActionsProps {
  primary: Profile["cta"]["primary"];
  secondary: Profile["cta"]["secondary"];
}

export default function HeroActions({ primary, secondary }: HeroActionsProps) {
  const reduced = usePrefersReducedMotion();

  const scrollToHash = (hash: string) => {
    const id = hash.replace(/^#/, "");
    const target = document.getElementById(id);
    const lenis = (
      globalThis as typeof globalThis & {
        lenis?: { scrollTo: (t: unknown, o?: unknown) => void };
      }
    ).lenis;

    if (lenis && typeof lenis.scrollTo === "function") {
      lenis.scrollTo(target ?? hash, { offset: -72, immediate: reduced });
      return;
    }

    if (target) {
      const y = target.getBoundingClientRect().top + window.scrollY - 72;
      window.scrollTo({ top: y, behavior: reduced ? "auto" : "smooth" });
    }
  };

  const pillBase = "rounded-full h-11 px-6 text-sm font-semibold gap-2";

  return (
    <div
      className={cn(
        "flex w-full flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center",
      )}
    >
      <a
        href={primary.href}
        onClick={(e) => {
          e.preventDefault();
          scrollToHash(primary.href);
        }}
        className={cn(
          buttonVariants({ variant: "default", size: "lg" }),
          pillBase,
          "bg-gradient-to-br from-[oklch(0.72_0.18_35)] via-[oklch(0.76_0.17_32)] to-[oklch(0.64_0.18_28)]",
          "text-white border border-[oklch(0.78_0.18_35_/_0.45)]",
          "shadow-[0_10px_40px_-12px_oklch(0.60_0.20_30_/_0.60)]",
          "hover:from-[oklch(0.76_0.20_35)] hover:via-[oklch(0.80_0.18_32)] hover:to-[oklch(0.68_0.20_30)]",
          "hover:shadow-[0_14px_48px_-12px_oklch(0.60_0.20_30_/_0.72)]",
          "focus-visible:ring-2 focus-visible:ring-[oklch(0.72_0.18_35)] focus-visible:ring-offset-2 focus-visible:ring-offset-[oklch(0.10_0.02_25)]",
          "transition-all duration-300",
        )}
      >
        <span>{primary.label}</span>
        <span aria-hidden>→</span>
      </a>

      <Link
        href={secondary.href}
        target="_blank"
        rel="noopener noreferrer"
        download
        aria-label={`${secondary.label} (opens in new tab, downloads PDF)`}
        className={cn(
          buttonVariants({ variant: "outline", size: "lg" }),
          pillBase,
          "bg-[oklch(0.14_0.02_25_/_0.55)] border-[oklch(0.68_0.16_32_/_0.42)] text-foreground/95 backdrop-blur-xl",
          "hover:bg-[oklch(0.18_0.03_30_/_0.72)] hover:border-[oklch(0.74_0.18_35_/_0.60)] hover:text-foreground",
          "focus-visible:ring-2 focus-visible:ring-[oklch(0.72_0.18_35)] focus-visible:ring-offset-2 focus-visible:ring-offset-[oklch(0.10_0.02_25)]",
          "transition-all duration-300",
        )}
      >
        <span aria-hidden>↓</span>
        <span>{secondary.label}</span>
      </Link>
    </div>
  );
}
