"use client";

import { motion } from "framer-motion";
import { siteConfig } from "@/config/site";

const stats = [
  { value: "Full-stack", label: "Product engineering" },
  { value: "API-first", label: "Architecture mindset" },
  { value: "Productive", label: "Cross-functional collaboration" },
];

export default function About() {
  return (
    <section id="about" className="container mx-auto px-4 py-20 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="section-shell rounded-[2rem] p-6 sm:p-8 lg:p-10"
      >
        <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-start">
          <div>
            <span className="section-heading">About</span>
            <h2 className="mt-6 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
              I build thoughtful digital systems that feel as strong as they look.
            </h2>
            <div className="mt-6 space-y-5 text-base leading-8 text-muted-foreground sm:text-lg text-justify">
              <p>{siteConfig.shortBio}</p>
              <p>
                I’m committed to writing maintainable code, shipping reliable experiences,
                and working closely with product and design teams to turn ambitious ideas into
                products people trust.
              </p>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1">
            {stats.map((item) => (
              <div
                key={item.label}
                className="metric-card rounded-2xl p-5"
              >
                <div className="text-xl font-semibold tracking-tight text-foreground">
                  {item.value}
                </div>
                <div className="mt-2 text-sm text-muted-foreground">{item.label}</div>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
