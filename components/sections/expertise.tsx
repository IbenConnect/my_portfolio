export default function Expertise() {
  const expertise = [
    {
      title: "Frontend Development",
      description:
        "Building responsive, accessible, and performant user interfaces with modern frameworks.",
    },
    {
      title: "Backend Development",
      description:
        "Designing and implementing scalable APIs and database architectures.",
    },
    {
      title: "DevOps & Deployment",
      description:
        "Setting up CI/CD pipelines, containerization, and cloud infrastructure.",
    },
  ];

  return (
    <section
      id="expertise"
      className="container mx-auto px-4 py-20 sm:px-6 lg:px-8"
    >
      <div className="mx-auto max-w-3xl">
        <h2 className="text-3xl font-bold tracking-tight text-foreground">
          Expertise
        </h2>
        <div className="mt-8 space-y-6">
          {expertise.map((item) => (
            <div
              key={item.title}
              className="rounded-lg border border-border/50 p-6"
            >
              <h3 className="text-lg font-semibold text-foreground">
                {item.title}
              </h3>
              <p className="mt-2 text-base text-white">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
