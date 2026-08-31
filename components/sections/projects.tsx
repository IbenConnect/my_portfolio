"use client";

import { motion } from "framer-motion";

const projects = [
  {
    name: "UltraPoly",
    summary: "Brand and marketing website for a business focused on modern digital growth and conversion.",
    stack: ["Next.js", "Tailwind", "SEO"],
    href: "https://ultrapoly.com.ng",
  },
  {
    name: "WebSoft Devs",
    summary: "A polished agency-style website for showcasing services, portfolio work, and conversion flows.",
    stack: ["React", "CSS", "Landing UX"],
    href: "https://websoft-devs.netlify.app/",
  },
  {
    name: "Platform Builds",
    summary: "Productivity and internal tooling experiences designed around clean UX and resilient backend systems.",
    stack: ["Node.js", "PostgreSQL", "APIs"],
    href: "#contact",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="container mx-auto px-4 py-20 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="mx-auto max-w-6xl"
      >
        <span className="section-heading">Selected work</span>
        <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <h2 className="max-w-xl text-3xl font-semibold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
            Design-forward builds that balance clarity, performance, and trust.
          </h2>
        </div>

        <div className="mt-10 grid gap-5 lg:grid-cols-3">
          {projects.map((project, index) => (
            <motion.article
              key={project.name}
              initial={{ opacity: 0, y: 26 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.45, delay: index * 0.08 }}
              className="section-shell group rounded-[1.75rem] p-5"
            >
              <div className="rounded-2xl border border-orange-500/15 bg-gradient-to-br from-orange-500/15 via-transparent to-amber-400/8 p-5">
                <div className="mb-4 flex items-center justify-between">
                  <div className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground/80">
                    Case study
                  </div>
                  <span className="inline-flex h-2.5 w-2.5 rounded-full bg-emerald-400 shadow-[0_0_24px_rgba(74,222,128,0.75)]" />
                </div>
                <div className="space-y-4">
                  <div className="text-2xl font-semibold text-foreground">{project.name}</div>
                  <p className="text-sm leading-7 text-muted-foreground">{project.summary}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.stack.map((tag) => (
                      <span key={tag} className="rounded-full border border-white/10 bg-white/4 px-2.5 py-1 text-[0.7rem] font-medium uppercase tracking-[0.12em] text-foreground/80">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <a
                href={project.href}
                target={project.href.startsWith("http") ? "_blank" : undefined}
                rel={project.href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-foreground transition-colors hover:text-white"
              >
                View project
                <span aria-hidden>→</span>
              </a>
            </motion.article>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
