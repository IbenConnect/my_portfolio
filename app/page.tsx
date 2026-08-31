import Hero from "@/features/hero";
import About from "@/components/sections/about";
import Skills from "@/components/sections/skills";
import Projects from "@/components/sections/projects";
import Expertise from "@/components/sections/expertise";
import Process from "@/components/sections/process";
import Experience from "@/components/sections/experience";
import Team from "@/components/sections/team";
import Testimonials from "@/components/sections/testimonials";
import Github from "@/components/sections/github";
import Contact from "@/components/sections/contact";

export default function HomePage() {
  return (
    <>
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Expertise />
      <Process />
      <Experience />
      <Team />
      <Testimonials />
      <Github />
      <Contact />
    </>
  );
}
