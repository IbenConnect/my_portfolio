export default function Process() {
  const steps = [
    { step: "01", title: "Discovery", description: "Understanding your vision and requirements." },
    { step: "02", title: "Design", description: "Crafting wireframes and visual designs." },
    { step: "03", title: "Development", description: "Building the product with clean, maintainable code." },
    { step: "04", title: "Delivery", description: "Testing, deploying, and launching to production." },
  ];

  return (
    <section
      id="process"
      className="container mx-auto px-4 py-20 sm:px-6 lg:px-8"
    >
      <div className="mx-auto max-w-3xl">
        <h2 className="text-3xl font-bold tracking-tight text-foreground">
          Process
        </h2>
        <div className="mt-8 space-y-6">
          {steps.map((item) => (
            <div
              key={item.step}
              className="flex gap-4 rounded-lg border border-border/50 p-6"
            >
              <span className="text-3xl font-bold text-white">
                {item.step}
              </span>
              <div>
                <h3 className="text-lg font-semibold text-foreground">
                  {item.title}
                </h3>
                <p className="mt-2 text-base text-white">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
