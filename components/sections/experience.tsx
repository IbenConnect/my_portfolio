export default function Experience() {
  const experiences = [
    {
      role: "Senior Developer",
      company: "Company A",
      period: "2023 — Present",
      description:
        "Leading development of scalable web applications and mentoring junior developers.",
    },
    {
      role: "Full Stack Developer",
      company: "Company B",
      period: "2021 — 2023",
      description:
        "Built and maintained multiple production applications across the stack.",
    },
  ];

  return (
    <section
      id="experience"
      className="container mx-auto px-4 py-20 sm:px-6 lg:px-8"
    >
      <div className="mx-auto max-w-3xl">
        <h2 className="text-3xl font-bold tracking-tight text-foreground">
          Experience
        </h2>
        <div className="mt-8 space-y-6">
          {experiences.map((exp) => (
            <div
              key={`${exp.company}-${exp.period}`}
              className="rounded-lg border border-border/50 p-6"
            >
              <div className="flex flex-col justify-between gap-2 sm:flex-row sm:items-baseline">
                <h3 className="text-lg font-semibold text-foreground">
                  {exp.role} · {exp.company}
                </h3>
                <span className="text-base text-white">
                  {exp.period}
                </span>
              </div>
              <p className="mt-2 text-base text-white">
                {exp.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
