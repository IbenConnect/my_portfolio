import Container from "@/components/common/Container";
import { cn } from "@/lib/utils";
import { profile } from "@/data/profile";
import HeroContent from "./HeroContent";
import HeroVisual from "./HeroVisual";

function HeroScrollIndicator({
  target,
  label,
}: {
  target: string;
  label: string;
}) {
  return (
    <a
      href={target}
      aria-label={`${label} (jump to next section)`}
      className={cn(
        "group absolute inset-x-0 bottom-6 z-10 mx-auto flex w-max flex-col items-center justify-center gap-1.5",
        "text-xs font-semibold uppercase tracking-[0.22em] text-muted-foreground/85",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background focus-visible:rounded-md focus-visible:px-2 focus-visible:py-1",
        "hover:text-foreground transition-colors",
      )}
    >
      <span aria-hidden className="inline-block origin-bottom animate-hero-bounce">
        ↓
      </span>
      <span>{label}</span>
      <style>{`
        @keyframes hero-bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-4px); }
        }
        .animate-hero-bounce {
          animation: hero-bounce 2.4s ease-in-out infinite;
        }
      `}</style>
    </a>
  );
}

export default function Hero() {
  return (
    <section
      id="home"
      aria-label="Introduction"
      className="relative isolate flex min-h-[100svh] w-full items-center overflow-hidden pt-24 pb-24 sm:pt-28 lg:pt-32 lg:pb-28"
    >
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-20 overflow-hidden">
        <div
          className="absolute inset-0 scale-105 bg-cover bg-center opacity-50"
          style={{
            backgroundImage: "url('/tech1111.jpg')",
            backgroundPosition: "center center",
          }}
        />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(10,13,18,0.25),rgba(10,13,18,0.68)_42%,rgba(5,7,11,0.92)_100%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(6,8,12,0.94)_0%,rgba(6,8,12,0.72)_38%,rgba(6,8,12,0.76)_100%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(249,115,22,0.16),transparent_22%),radial-gradient(circle_at_80%_30%,rgba(251,146,60,0.12),transparent_20%)]" />
      </div>
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 bottom-0 -z-10 h-48 bg-gradient-to-t from-[#070b12] via-[#070b12]/80 to-transparent"
      />

      <Container className="relative">
        <div
          className={cn(
            "grid w-full items-center gap-12",
            "lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] lg:gap-16 xl:gap-20",
          )}
        >
          <div className="order-2 lg:order-1">
            <HeroContent profile={profile} />
          </div>
          <div className="order-1 flex w-full justify-center lg:order-2">
            <HeroVisual image={profile.profileImage} />
          </div>
        </div>

        <div className="mt-12 grid gap-4 sm:grid-cols-3">
          {[
            { value: "5+", label: "Years building products" },
            { value: "12+", label: "End-to-end launches" },
            { value: "99%", label: "Focus on quality" },
          ].map((item) => (
            <div
              key={item.label}
              className="metric-card rounded-2xl px-5 py-4 text-left"
            >
              <div className="text-2xl font-semibold tracking-tight text-foreground">
                {item.value}
              </div>
              <div className="mt-1 text-sm text-muted-foreground">{item.label}</div>
            </div>
          ))}
        </div>
      </Container>

      <HeroScrollIndicator
        target={profile.scroll.target}
        label={profile.scroll.label}
      />
    </section>
  );
}
