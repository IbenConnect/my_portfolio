import { siteConfig } from "@/config/site";

export default function About() {
  return (
    <section
      id="about"
      className="container mx-auto px-4 py-20 sm:px-6 lg:px-8"
    >
      <div className="mx-auto max-w-3xl">
        <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          About <span className="text-gradient-brand">Me</span>
        </h2>
        <div className="mt-4 h-[3px] w-16 rounded-full bg-gradient-to-r from-[oklch(0.78_0.20_260)] via-[oklch(0.72_0.18_200)] to-[oklch(0.72_0.15_160)]" />
        <div className="mt-8 space-y-5 text-justify text-lg leading-7 text-white sm:text-xl sm:leading-8">
          <p>{siteConfig.shortBio}</p>
          <p>
            I&apos;m committed to writing clean, maintainable code, collaborating
            effectively with product and design teams, and continuously improving
            my engineering, collaboration, and system design skills. When I&apos;m
            not shipping features, I spend time on personal projects, exploring
            new patterns in backend architecture, and contributing to open source.
          </p>
        </div>
      </div>
    </section>
  );
}
