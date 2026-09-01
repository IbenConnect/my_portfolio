export default function Testimonials() {
  const testimonials = [
    {
      quote:
        "I have had the opportunity to work with Imoh Ben for several years, and during this time, I have witnessed his growth, dedication, and strong technical abilities firsthand. Imoh is a hardworking, reliable, and highly motivated individual with a genuine passion for technology and software development. He learns quickly, approaches problems effectively, works well with others, and adapts easily to new technologies and environments. I strongly recommend Imoh Ben to any organization looking for a committed and capable software engineer, and I am confident he will be a valuable addition to any technical team.",
      author: "Mr. Philip",
      title: "Snr. FullStack/DevOps/AI Engineer",
      subtitle: "Mentor",
      linkedinUrl: "https://www.linkedin.com/in/mr-philip-1b2182225/",
    },
    {
      quote:
        "I have had the opportunity to mentor Iben throughout his journey as a Full-Stack Developer, and I have watched him grow from someone learning individual technologies into a developer capable of thinking through complete software solutions. I recommend Imoh Ben as a dedicated and continuously developing Full-Stack Developer. He is curious, resilient, practical, and willing to put in the work required to improve. His journey is still evolving, but the growth I've witnessed demonstrates that he has the mindset and determination to become an excellent software engineer. I am proud to have been part of his development journey, and I look forward to seeing what he builds next.",
      author: "AI Development Mentor",
      title: "Technical Mentor & Software Development Coach",
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
              <blockquote className="text-base leading-7 text-muted-foreground">
                &ldquo;{t.quote}&rdquo;
              </blockquote>
              <figcaption className="mt-4">
                {t.linkedinUrl ? (
                  <a
                    href={t.linkedinUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-semibold text-foreground hover:text-orange-400 transition-colors"
                  >
                    {t.author}
                  </a>
                ) : (
                  <div className="font-semibold text-foreground">{t.author}</div>
                )}
                <div className="text-sm text-muted-foreground">{t.title}</div>
                {t.subtitle && <div className="text-xs text-muted-foreground/70 mt-1">{t.subtitle}</div>}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
