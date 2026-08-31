"use client";

import { motion } from "framer-motion";

const skillGroups = [
  {
    label: "Frontend",
    items: ["TypeScript", "React", "Next.js", "Tailwind CSS", "JavaScript"],
  },
  {
    label: "Backend",
    items: ["Node.js", "NestJS", "Express", "REST APIs", "Authentication"],
  },
  {
    label: "Data & Systems",
    items: ["PostgreSQL", "MongoDB", "Prisma", "Redis", "System Design"],
  },
  {
    label: "Workflow",
    items: ["Git", "Docker", "CI/CD", "Testing", "Product Strategy"],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="container mx-auto px-4 py-20 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="mx-auto max-w-5xl"
      >
        <span className="section-heading">Skills</span>
        <h2 className="mt-6 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
          Tools and systems I use to build reliable software.
        </h2>

        <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {skillGroups.map((group, index) => (
            <motion.div
              key={group.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.45, delay: index * 0.08 }}
              className="section-shell rounded-2xl p-5"
            >
              <div className="mb-5 text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground/80">
                {group.label}
              </div>
              <div className="flex flex-wrap gap-2">
                {group.items.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full border border-orange-500/20 bg-orange-500/5 px-3 py-1.5 text-sm font-medium text-foreground/90"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
