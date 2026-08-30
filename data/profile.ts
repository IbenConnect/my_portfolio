export const profile = {
  firstName: "Imoh",
  lastName: "Ben",
  fullName: "Imoh Ben",
  legalFullName: "Imoh Sylvester Ben",
  professionalTitle: "Mr",
  role: "Full-Stack Developer & Backend Engineer",
  greeting: "Hi, I'm",
  tagline:
    "I specialize in building scalable, secure, and user-focused web applications — primarily with React, Next.js, Node.js, NestJS, PostgreSQL, and MongoDB. I turn real-world problems into reliable software solutions.",
  availability: {
    status: "Available for opportunities",
    tone: "positive",
  },
  cta: {
    primary: {
      label: "View My Work",
      href: "#projects",
    },
    secondary: {
      label: "Download Resume",
      href: "/resume/imoh-ben-resume.pdf",
    },
  },
  scroll: {
    target: "#about",
    label: "Scroll to explore",
  },
  profileImage: {
    src: "/profile.jpg",
    alt: "Portrait of Imoh Ben",
  },
} as const;

export type Profile = typeof profile;
