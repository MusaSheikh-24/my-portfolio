"use client";
import Calculators from "@/components/Calculators";
import Hero from "./Hero";
import About from "./About";
import Skills from "./Skills";
import Projects from "./Projects";
import Contact from "./Contact";
import Navbar from "./Navbar"; // Imported new component
import { Reveal } from "./Reveal";

export default function Portfolio() {
  return (
    <>
      <Navbar />

      {/* Added pt-16 to prevent content hiding behind fixed navbar */}
      <main className="pt-16">
        <Hero />
        <About />
        <Skills />
        <Projects />

        {/* TOOLS / CALCULATORS */}
        <section id="tools" className="section">
          <div className="shell">
            <Reveal className="section-head">
              <p className="eyebrow">TRY IT LIVE</p>
              <h2 className="section-title mt-2">Interactive Calculators</h2>
              <p className="prose-p mx-auto mt-4 max-w-[46ch]">A few live tools built in React — instant results, no page reloads.</p>
            </Reveal>
            <Reveal>
              <div className="mx-auto max-w-3xl">
                <Calculators />
              </div>
            </Reveal>
          </div>
        </section>

        <Contact />
      </main>
    </>
  );
}