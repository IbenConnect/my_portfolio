import { siteConfig } from "@/config/site";

export default function Contact() {
  return (
    <section id="contact" className="container mx-auto px-4 py-20 sm:px-6 lg:px-8">
      <div className="section-shell rounded-[2rem] p-6 sm:p-8 lg:p-10">
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <span className="section-heading">Contact</span>
            <h2 className="mt-6 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
              Let’s build something useful, thoughtful, and lasting.
            </h2>
            <p className="mt-5 max-w-lg text-base leading-8 text-muted-foreground sm:text-lg">
              Whether you’re launching a product, improving an existing platform, or just
              exploring ideas, I’d love to hear what you’re building.
            </p>

            <div className="mt-7 flex flex-wrap gap-3">
              <a
                href={siteConfig.social.email}
                className="rounded-full bg-gradient-to-r from-orange-500 to-amber-400 px-5 py-2.5 text-sm font-semibold text-white shadow-[0_16px_48px_-18px_rgba(249,115,22,0.85)] transition-transform hover:-translate-y-0.5"
              >
                Email me
              </a>
              <a
                href={siteConfig.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-orange-500/30 bg-white/3 px-5 py-2.5 text-sm font-semibold text-foreground transition-colors hover:border-orange-400/60 hover:text-white"
              >
                LinkedIn
              </a>
            </div>
          </div>

          <form className="rounded-3xl border border-white/10 bg-[oklch(0.09_0.02_25_/_0.82)] p-5 shadow-[0_12px_30px_-18px_rgba(249,115,22,0.18)] sm:p-6">
            <div className="grid gap-4 sm:grid-cols-2">
              <label className="text-sm font-medium text-foreground/85">
                Name
                <input
                  type="text"
                  placeholder="Your name"
                  className="mt-2 w-full rounded-xl border border-white/10 bg-[oklch(0.13_0.02_25_/_0.8)] px-3.5 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:border-orange-400 focus:outline-none"
                />
              </label>
              <label className="text-sm font-medium text-foreground/85">
                Email
                <input
                  type="email"
                  placeholder="you@example.com"
                  className="mt-2 w-full rounded-xl border border-white/10 bg-[oklch(0.13_0.02_25_/_0.8)] px-3.5 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:border-orange-400 focus:outline-none"
                />
              </label>
            </div>

            <label className="mt-4 block text-sm font-medium text-foreground/85">
              Project details
              <textarea
                rows={5}
                placeholder="Tell me about your project..."
                className="mt-2 w-full rounded-xl border border-white/10 bg-[oklch(0.13_0.02_25_/_0.8)] px-3.5 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:border-orange-400 focus:outline-none"
              />
            </label>

            <button
              type="submit"
              className="mt-5 w-full rounded-full bg-gradient-to-r from-orange-500 to-amber-400 px-5 py-3 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:brightness-110"
            >
              Send message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
