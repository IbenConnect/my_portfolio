import Link from "next/link";
import { siteConfig } from "@/config/site";
import { navigation } from "@/config/navigation";

function GithubIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden
      {...props}
    >
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

export default function Footer() {
  const conciseNav = navigation.filter((item) =>
    ["About", "Skills", "Projects", "Contact"].includes(item.label),
  );

  const year = new Date().getFullYear();

  return (
    <footer className="relative z-0 border-t border-[oklch(0.45_0.10_260_/_0.30)] bg-[oklch(0.11_0.02_265_/_0.85)] backdrop-blur-xl py-14">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-40 bg-[radial-gradient(ellipse_60%_80%_at_50%_0%,oklch(0.45_0.15_260_/_0.18),transparent_65%)]"
      />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto flex max-w-3xl flex-col items-center gap-10 text-center">
          <div className="space-y-3">
            <p className="text-3xl font-semibold tracking-tight">
              <span className="text-gradient-brand">{siteConfig.name.split(" ")[0]}</span>
              <span className="text-white"> {siteConfig.name.split(" ").slice(1).join(" ")}</span>
            </p>
            <p className="max-w-sm text-base leading-7 text-white">
              {siteConfig.role} building scalable
              <br />
              and reliable digital experiences.
            </p>
          </div>

          <nav aria-label="Social links" className="flex items-center gap-3">
            <a
              href={siteConfig.social.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[oklch(0.45_0.10_260_/_0.35)] bg-[oklch(0.17_0.03_265_/_0.55)] text-muted-foreground backdrop-blur transition-all hover:border-[oklch(0.65_0.18_260_/_0.55)] hover:bg-[oklch(0.70_0.18_260_/_0.10)] hover:text-foreground"
            >
              <GithubIcon className="h-[1.05rem] w-[1.05rem]" />
            </a>
            <a
              href={siteConfig.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[oklch(0.45_0.10_260_/_0.35)] bg-[oklch(0.17_0.03_265_/_0.55)] text-muted-foreground backdrop-blur transition-all hover:border-[oklch(0.65_0.18_260_/_0.55)] hover:bg-[oklch(0.70_0.18_260_/_0.10)] hover:text-foreground"
            >
              <LinkedinIcon className="h-[1.05rem] w-[1.05rem]" />
            </a>
            <a
              href={siteConfig.social.email}
              aria-label="Email"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[oklch(0.45_0.10_260_/_0.35)] bg-[oklch(0.17_0.03_265_/_0.55)] text-muted-foreground backdrop-blur transition-all hover:border-[oklch(0.65_0.18_260_/_0.55)] hover:bg-[oklch(0.70_0.18_260_/_0.10)] hover:text-foreground"
            >
              <MailIcon className="h-[1.05rem] w-[1.05rem]" />
            </a>
          </nav>

          <nav aria-label="Footer navigation">
            <ul className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-base font-medium text-white">
              {conciseNav.map((item, idx) => (
                <li key={item.href} className="flex items-center gap-4">
                  <Link
                    href={item.href}
                    className="transition-colors hover:text-foreground"
                  >
                    {item.label}
                  </Link>
                  {idx < conciseNav.length - 1 && (
                    <span
                      aria-hidden
                      className="h-1 w-1 rounded-full bg-[oklch(0.70_0.18_260_/_0.55)]"
                    />
                  )}
                </li>
              ))}
            </ul>
          </nav>

          <p className="text-sm font-medium text-white">
            © {year} {siteConfig.name}
          </p>
        </div>
      </div>
    </footer>
  );
}
