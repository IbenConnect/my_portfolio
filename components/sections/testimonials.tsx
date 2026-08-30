export default function Testimonials() {
  const testimonials = [
    {
      quote:
        "Delivered exceptional work on time and exceeded expectations. Would highly recommend.",
      author: "Client One",
      title: "CEO, Company X",
    },
    {
      quote:
        "A reliable and talented developer who brings both technical skill and creative thinking to every project.",
      author: "Client Two",
      title: "Product Manager, Company Y",
    },
  ];

  return (
    <section
      id="testimonials"
      className="container mx-auto px-4 py-20 sm:px-6 lg:px-8"
    >
      <div className="mx-auto max-w-3xl">
        <h2 className="text-3xl font-bold tracking-tight text-foreground">
          Testimonials
        </h2>
        <div className="mt-8 space-y-6">
          {testimonials.map((t) => (
            <figure
              key={t.author}
              className="rounded-lg border border-border/50 p-6"
            >
              <blockquote className="text-lg italic leading-7 text-white">
                &ldquo;{t.quote}&rdquo;
              </blockquote>
              <figcaption className="mt-4">
                <div className="font-semibold text-foreground">{t.author}</div>
                <div className="text-base text-white">{t.title}</div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
