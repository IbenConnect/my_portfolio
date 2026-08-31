import Link from "next/link";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";

function GithubIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden {...props}>
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
    </svg>
  );
}

function LinkedinIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden {...props}>
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 110-4.124 2.062 2.062 0 010 4.124zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

function MailIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
      {...props}
    >
      <rect width="20" height="16" x="2" y="4" rx="2" />
      <path d="m22 7-10 5L2 7" />
    </svg>
  );
}

const socials = [
  {
    label: "GitHub",
    href: siteConfig.social.github,
    Icon: GithubIcon,
    external: true,
  },
  {
    label: "LinkedIn",
    href: siteConfig.social.linkedin,
    Icon: LinkedinIcon,
    external: true,
  },
  {
    label: "Email",
    href: siteConfig.social.email,
    Icon: MailIcon,
    external: false,
  },
] as const;

export default function HeroSocials({
  className,
}: {
  className?: string;
}) {
  return (
    <ul
      className={cn("flex flex-wrap items-center gap-2.5", className)}
      aria-label="Social links and contact"
    >
      {socials.map(({ label, href, Icon, external }) => {
        const linkProps = external
          ? {
              target: "_blank" as const,
              rel: "noopener noreferrer",
            }
          : {};

        const Comp = external ? "a" : Link;

        return (
          <li key={label}>
            <Comp
              href={href}
              aria-label={label}
              title={label}
              className={cn(
                "inline-flex h-11 w-11 items-center justify-center rounded-full",
                "border border-[oklch(0.60_0.15_35_/_0.40)] bg-[oklch(0.15_0.02_25_/_0.58)] text-foreground/85 backdrop-blur-xl",
                "transition-all duration-300",
                "hover:border-[oklch(0.75_0.18_35_/_0.60)] hover:bg-[oklch(0.74_0.18_35_/_0.10)] hover:text-foreground",
                "hover:shadow-[0_10px_30px_-12px_oklch(0.65_0.20_30_/_0.45)]",
                "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[oklch(0.72_0.18_35)] focus-visible:ring-offset-2 focus-visible:ring-offset-[oklch(0.10_0.02_25)]",
              )}
              {...linkProps}
            >
              <Icon aria-hidden className="h-[1.05rem] w-[1.05rem]" />
            </Comp>
          </li>
        );
      })}
    </ul>
  );
}
