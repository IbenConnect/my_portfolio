"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const teamMembers = [
  {
    id: "mentor",
    name: "Mr. Itoro Philip",
    title: "Snr. FullStack/DevOps/AI Engineer",
    image: "/itoro.jpg",
    linkedin: "https://www.linkedin.com/in/mr-philip-1b2182225/",
    isMentor: true,
  },
  {
    id: "sylvester",
    name: "Mr. Sylvester",
    title: "Full Stack Developer",
    image: "/sly.png",
    linkedin: null,
    isMentor: false,
  },
  {
    id: "edima",
    name: "Miss. Edima",
    title: "Frontend Developer",
    image: "/edy.jpeg",
    linkedin: null,
    isMentor: false,
  },
  {
    id: "team",
    name: "Development Team",
    title: "Collaborative Excellence",
    image: "/team.jpg",
    linkedin: null,
    isMentor: false,
  },
];

export default function Team() {
  return (
    <section id="team" className="container mx-auto px-4 py-20 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="mx-auto max-w-6xl"
      >
        <span className="section-heading">Team & Mentorship</span>
        <h2 className="mt-6 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
          The people behind the craft.
        </h2>
        <p className="mt-4 max-w-2xl text-base leading-7 text-muted-foreground sm:text-lg">
          Working with exceptional developers and mentors who share a commitment to quality, innovation, and continuous growth.
        </p>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.id}
              initial={{ opacity: 0, y: 24, scale: 0.95 }}
              whileInView={{ 
                opacity: 1, 
                y: 0, 
                scale: 1,
                transition: {
                  type: "spring",
                  damping: 20,
                  stiffness: 100,
                  delay: index * 0.1,
                },
              }}
              whileHover={{
                y: -8,
                transition: {
                  type: "spring",
                  damping: 12,
                  stiffness: 200,
                },
              }}
              viewport={{ once: true, amount: 0.3 }}
              className="group section-shell rounded-2xl overflow-hidden backdrop-blur-sm"
            >
              {/* Image Container */}
              <div className="relative aspect-square w-full overflow-hidden bg-gradient-to-br from-orange-500/20 to-amber-400/10">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                {member.isMentor && (
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                )}
                {member.isMentor && (
                  <motion.div
                    initial={{ opacity: 0, y: 4 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 + 0.2 }}
                    className="absolute top-3 right-3 px-2.5 py-1 rounded-full bg-gradient-to-r from-orange-500 to-amber-400 text-[0.65rem] font-bold uppercase tracking-widest text-white shadow-lg"
                  >
                    Mentor
                  </motion.div>
                )}
              </div>

              {/* Content Container */}
              <div className="space-y-4 p-5">
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 + 0.1 }}
                >
                  <h3 className="text-lg font-semibold text-foreground">
                    {member.name}
                  </h3>
                  <p className="mt-1 text-sm leading-6 text-muted-foreground">
                    {member.title}
                  </p>
                </motion.div>

                {member.linkedin && (
                  <motion.a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.98 }}
                    className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-orange-500/20 to-amber-400/10 border border-orange-500/30 px-3 py-2 text-xs font-semibold text-orange-400 transition-all hover:border-orange-400/60 hover:bg-orange-500/10 hover:text-orange-300"
                  >
                    <span>LinkedIn</span>
                    <span aria-hidden>→</span>
                  </motion.a>
                )}
              </div>

              {/* Glow Effect on Hover */}
              <motion.div
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
                className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-br from-orange-500/0 via-transparent to-orange-500/0 group-hover:from-orange-500/5 group-hover:to-orange-500/5"
              />
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
