export default function Skills() {
  const skills = [
    "TypeScript",
    "JavaScript",
    "React",
    "Next.js",
    "Node.js",
    "NestJS",
    "Express",
    "RESTful APIs",
    "PostgreSQL",
    "MongoDB",
    "Prisma",
    "Tailwind CSS",
    "Git",
    "Docker",
  ];

  return (
    <section
      id="skills"
      className="container mx-auto px-4 py-20 sm:px-6 lg:px-8"
    >
      <div className="mx-auto max-w-3xl">
        <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          <span className="text-gradient-brand">Skills</span> &amp; Tools
        </h2>
        <p className="mt-4 text-lg leading-7 text-white sm:text-xl">
          A curated stack I use daily to design, ship, and scale production
          software.
        </p>
        <div className="mt-10 flex flex-wrap gap-3">
          {skills.map((skill) => (
            <div
              key={skill}
              className="group rounded-full border border-[oklch(0.45_0.10_260_/_0.40)] bg-[oklch(0.17_0.03_265_/_0.55)] px-5 py-2.5 text-base font-semibold text-white backdrop-blur-xl transition-all duration-300 hover:-translate-y-0.5 hover:border-[oklch(0.70_0.18_260_/_0.60)] hover:bg-[oklch(0.70_0.18_260_/_0.10)] hover:text-white hover:shadow-[0_10px_30px_-12px_oklch(0.55_0.22_260_/_0.45)]"
            >
              <span className="inline-flex items-center gap-2">
                <span
                  aria-hidden
                  className="h-1.5 w-1.5 rounded-full bg-gradient-to-r from-[oklch(0.78_0.20_260)] to-[oklch(0.70_0.15_160)]"
                />
                {skill}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
