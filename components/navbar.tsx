"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { navigation, type NavItem } from "@/config/navigation";
import { useScrollSpy } from "@/hooks/use-scroll-spy";
import { usePrefersReducedMotion } from "@/hooks/use-prefers-reduced-motion";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";

const SITE_INITIALS = siteConfig.initials;

function smoothNavigateTo(hash: string, reducedMotion: boolean): () => void {
  return () => {
    const id = hash.replace(/^#/, "");
    const target = document.getElementById(id);
    const lenis = (window as unknown as { lenis?: { scrollTo: (t: unknown, o?: unknown) => void } }).lenis;

    if (lenis && typeof lenis.scrollTo === "function") {
      lenis.scrollTo(target ?? hash, { offset: -72, immediate: reducedMotion });
      return;
    }

    if (target) {
      const y =
        target.getBoundingClientRect().top + window.scrollY - 72;
      window.scrollTo({ top: y, behavior: reducedMotion ? "auto" : "smooth" });
    }
  };
}

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const reducedMotion = usePrefersReducedMotion();

  const sectionIds = useMemo(
    () => navigation.map((item) => item.href.replace(/^#/, "")),
    [],
  );
  const activeId = useScrollSpy({ sectionIds });

  useEffect(() => {
    const threshold = 16;

    const onScroll = () => {
      setScrolled(window.scrollY > threshold);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  useEffect(() => {
    if (!open) return;

    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = previous;
    };
  }, [open]);

  const handleNavClick = (href: string) => {
    setOpen(false);
    smoothNavigateTo(href, reducedMotion)();
  };

  const headerClasses = cn(
    "fixed inset-x-0 top-0 z-50",
    !reducedMotion && "transition-all duration-300",
    scrolled
      ? "border-b border-[oklch(0.45_0.10_260_/_0.35)] bg-[oklch(0.12_0.02_265_/_0.78)] backdrop-blur-xl supports-[backdrop-filter]:bg-[oklch(0.12_0.02_265_/_0.65)] shadow-[0_12px_40px_-16px_oklch(0.55_0.22_260_/_0.35)]"
      : "border-b border-transparent bg-[oklch(0.12_0.02_265_/_0.0)] backdrop-blur supports-[backdrop-filter]:bg-[oklch(0.12_0.02_265_/_0.0)]",
  );

  return (
    <>
      <header className={headerClasses}>
        <div className="container mx-auto flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8">
          <Link
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick("#home");
            }}
            className={cn(
              "text-2xl font-semibold tracking-tight transition-colors",
              "text-foreground/95 hover:text-foreground",
            )}
          >
            <span className="md:hidden text-gradient-brand">{SITE_INITIALS}</span>
            <span className="hidden md:inline">
              <span className="text-gradient-brand">{siteConfig.name.split(" ")[0]}</span>
              <span className="text-foreground"> {siteConfig.name.split(" ").slice(1).join(" ")}</span>
            </span>
          </Link>

          <nav className="hidden items-center gap-7 md:flex">
            {navigation.map((item) => {
              const isActive = `#${activeId}` === item.href;
              return (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(item.href);
                  }}
                  className={cn(
                    "relative text-base font-semibold transition-colors",
                    isActive
                      ? "text-foreground"
                      : "text-muted-foreground/90 hover:text-foreground",
                  )}
                >
                  {item.label}
                  {isActive &&
                    (reducedMotion ? (
                      <span className="absolute -bottom-1 left-0 right-0 h-[2px] rounded-full bg-gradient-to-r from-[oklch(0.78_0.20_260)] via-[oklch(0.72_0.18_200)] to-[oklch(0.72_0.15_160)]" />
                    ) : (
                      <motion.span
                        layoutId="navbar-active-indicator"
                        className="absolute -bottom-1 left-0 right-0 h-[2px] rounded-full bg-gradient-to-r from-[oklch(0.78_0.20_260)] via-[oklch(0.72_0.18_200)] to-[oklch(0.72_0.15_160)]"
                        transition={{
                          type: "spring",
                          stiffness: 420,
                          damping: 28,
                          mass: 0.4,
                        }}
                      />
                    ))}
                </a>
              );
            })}
          </nav>

          <button
            type="button"
            aria-label="Toggle menu"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-md text-foreground md:hidden"
          >
            {reducedMotion ? (
              <span className="text-2xl leading-none">
                {open ? "✕" : "☰"}
              </span>
            ) : (
              <AnimatePresence mode="wait" initial={false}>
                <motion.span
                  key={open ? "close" : "open"}
                  initial={{ rotate: open ? -90 : 90, opacity: 0, scale: 0.7 }}
                  animate={{ rotate: 0, opacity: 1, scale: 1 }}
                  exit={{ rotate: open ? 90 : -90, opacity: 0, scale: 0.7 }}
                  transition={{ duration: 0.18, ease: "easeOut" }}
                  className="text-2xl leading-none"
                >
                  {open ? "✕" : "☰"}
                </motion.span>
              </AnimatePresence>
            )}
          </button>
        </div>
      </header>

      {reducedMotion ? (
        open && (
          <MobileMenu
            navItems={navigation}
            activeId={activeId}
            onSelect={handleNavClick}
            onClose={() => setOpen(false)}
            reducedMotion
          />
        )
      ) : (
        <AnimatePresence>
          {open && (
            <MobileMenu
              navItems={navigation}
              activeId={activeId}
              onSelect={handleNavClick}
              onClose={() => setOpen(false)}
              reducedMotion={false}
            />
          )}
        </AnimatePresence>
      )}
    </>
  );
}

interface MobileMenuProps {
  navItems: NavItem[];
  activeId: string;
  onSelect: (href: string) => void;
  onClose: () => void;
  reducedMotion: boolean;
}

function MobileMenu({ navItems, activeId, onSelect, onClose, reducedMotion }: MobileMenuProps) {
  const menuContent = (
    <>
      <div
        className="fixed inset-0 top-16 -z-10 bg-black/45 backdrop-blur-[2px]"
        onClick={onClose}
      />
      <div className="container mx-auto flex flex-col gap-1 px-4 py-5 sm:px-6">
        {navItems.map((item) => {
          const isActive = `#${activeId}` === item.href;
          const linkClass = cn(
            "rounded-md px-3 py-3 text-lg font-semibold transition-colors",
            isActive
              ? "bg-[oklch(0.70_0.18_260_/_0.12)] text-foreground border border-[oklch(0.70_0.18_260_/_0.28)]"
              : "text-muted-foreground/90 hover:bg-[oklch(0.70_0.18_260_/_0.08)] hover:text-foreground",
          );
          const linkProps = {
            key: item.href,
            href: item.href,
            onClick: (e: React.MouseEvent<HTMLAnchorElement>) => {
              e.preventDefault();
              onSelect(item.href);
            },
            className: linkClass,
          };

          return reducedMotion ? (
            <a {...linkProps}>{item.label}</a>
          ) : (
            <motion.a
              {...linkProps}
              variants={{
                hidden: { opacity: 0, x: -10 },
                show: { opacity: 1, x: 0 },
              }}
              transition={{ type: "spring", stiffness: 360, damping: 28 }}
            >
              {item.label}
            </motion.a>
          );
        })}

        {reducedMotion ? (
          <div className="mt-3">
            <a
              href="#resume"
              onClick={(e) => {
                e.preventDefault();
                onSelect("#resume");
              }}
              className="inline-flex w-full items-center justify-center rounded-full bg-gradient-to-br from-[oklch(0.72_0.20_260)] to-[oklch(0.58_0.22_260)] px-5 py-2.5 text-base font-semibold text-white transition-all hover:brightness-110"
            >
              Download Resume
            </a>
          </div>
        ) : (
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 8 },
              show: { opacity: 1, y: 0 },
            }}
            transition={{ type: "spring", stiffness: 340, damping: 26, delay: 0.1 }}
            className="mt-3"
          >
            <a
              href="#resume"
              onClick={(e) => {
                e.preventDefault();
                onSelect("#resume");
              }}
              className="inline-flex w-full items-center justify-center rounded-full bg-gradient-to-br from-[oklch(0.72_0.20_260)] to-[oklch(0.58_0.22_260)] px-5 py-2.5 text-2xl font-semibold text-white shadow-[0_10px_36px_-12px_oklch(0.55_0.22_260_/_0.65)] transition-all hover:brightness-110"
            >
              Download Resume
            </a>
          </motion.div>
        )}
      </div>
    </>
  );

  if (reducedMotion) {
    return (
      <div className="fixed inset-x-0 top-16 z-40 border-b border-[oklch(0.45_0.10_260_/_0.35)] bg-[oklch(0.13_0.02_265_/_0.96)] backdrop-blur-xl supports-[backdrop-filter]:bg-[oklch(0.13_0.02_265_/_0.88)] md:hidden">
        {menuContent}
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: -8 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -8 }}
      transition={{ duration: 0.22, ease: "easeOut" }}
      className="fixed inset-x-0 top-16 z-40 border-b border-[oklch(0.45_0.10_260_/_0.35)] bg-[oklch(0.13_0.02_265_/_0.96)] backdrop-blur-xl supports-[backdrop-filter]:bg-[oklch(0.13_0.02_265_/_0.88)] md:hidden"
    >
      <motion.div
        initial="hidden"
        animate="show"
        exit="hidden"
        variants={{
          hidden: {},
          show: { transition: { staggerChildren: 0.05, delayChildren: 0.04 } },
        }}
      >
        {menuContent}
      </motion.div>
    </motion.div>
  );
}
