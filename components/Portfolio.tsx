"use client";

import { useEffect, useRef, useState, type ReactNode, type CSSProperties } from "react";
import {
  ABOUT, AI_WORKFLOW, EMAIL, JOURNEY, PHONE, PHOTO, PROFILE, PROJECTS,
  SKILLS, SOCIALS, STATS, TECHNOLOGIES, WHATSAPP, type Project,
} from "@/lib/site";
import Calculators from "@/components/Calculators";

function hostOf(url: string): string {
  try { return new URL(url).host.replace(/^www\./, ""); } catch { return url; }
}
function shot(url: string): string {
  return `https://s.wordpress.com/mshots/v1/${encodeURIComponent(url)}?w=1280&h=800`;
}

function Reveal({ children, className = "", delay = 0 }: { children: ReactNode; className?: string; delay?: number; }) {
  const ref = useRef<HTMLDivElement>(null);
  const [shown, setShown] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) { setShown(true); return; }
    const io = new IntersectionObserver((entries) => {
      for (const e of entries) if (e.isIntersecting) { setShown(true); io.disconnect(); }
    }, { threshold: 0.12 });
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return (
    <div ref={ref} className={`reveal ${shown ? "is-visible" : ""} ${className}`} style={delay ? { transitionDelay: `${delay}ms` } : undefined}>
      {children}
    </div>
  );
}

function Photo() {
  const [err, setErr] = useState(false);
  if (!PHOTO || err) return <div className="photo-fallback">MI</div>;
  return <img src={PHOTO} alt={PROFILE.name} onError={() => setErr(true)} />;
}

const GitHubIcon = () => (<svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 .5C5.7.5.5 5.7.5 12c0 5.1 3.3 9.4 7.9 10.9.6.1.8-.2.8-.6v-2c-3.2.7-3.9-1.4-3.9-1.4-.5-1.3-1.3-1.7-1.3-1.7-1.1-.7.1-.7.1-.7 1.2.1 1.8 1.2 1.8 1.2 1 1.8 2.7 1.3 3.4 1 .1-.8.4-1.3.7-1.6-2.6-.3-5.3-1.3-5.3-5.7 0-1.3.5-2.3 1.2-3.1-.1-.3-.5-1.5.1-3.1 0 0 1-.3 3.3 1.2a11.5 11.5 0 0 1 6 0c2.3-1.5 3.3-1.2 3.3-1.2.6 1.6.2 2.8.1 3.1.8.8 1.2 1.8 1.2 3.1 0 4.4-2.7 5.4-5.3 5.7.4.4.8 1.1.8 2.2v3.3c0 .3.2.7.8.6 4.6-1.5 7.9-5.8 7.9-10.9C23.5 5.7 18.3.5 12 .5z"/></svg>);
const LinkedInIcon = () => (<svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M20.4 3H3.6C3 3 2.5 3.5 2.5 4.1v15.8c0 .6.5 1.1 1.1 1.1h16.8c.6 0 1.1-.5 1.1-1.1V4.1c0-.6-.5-1.1-1.1-1.1zM8.3 18.3H5.6V9.7h2.7v8.6zM7 8.5A1.6 1.6 0 1 1 7 5.3a1.6 1.6 0 0 1 0 3.2zm11.3 9.8h-2.7v-4.2c0-1 0-2.3-1.4-2.3s-1.6 1.1-1.6 2.2v4.3h-2.7V9.7h2.6v1.2h.1c.4-.7 1.2-1.4 2.5-1.4 2.7 0 3.2 1.8 3.2 4.1v4.7z"/></svg>);
const XIcon = () => (<svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M18.9 2h3.3l-7.2 8.3L23.5 22h-6.6l-5.2-6.8L5.7 22H2.4l7.7-8.8L1.8 2h6.8l4.7 6.2L18.9 2zm-1.2 18h1.8L7.4 3.9H5.5L17.7 20z"/></svg>);

function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <Reveal delay={index * 90}>
      <article className="glass card-hover flex h-full flex-col overflow-hidden">
        <a className="frame group" href={project.live} target="_blank" rel="noopener noreferrer" aria-label={`Open ${project.name}`}>
          <span className="frame-bar" aria-hidden="true"><i /><i /><i /><span className="frame-url">{hostOf(project.live)}</span></span>
          <span className="frame-shot">
            {project.featured && <span className="feat-label">★ Featured</span>}
            <img src={shot(project.live)} alt={`Screenshot of ${project.name}`} loading="lazy" />
          </span>
        </a>
        <div className="flex flex-1 flex-col p-6">
          <p className="text-sm muted">{project.kind}</p>
          <h3 className="mt-1 font-display text-2xl font-extrabold">{project.name}</h3>
          <p className="prose-p mt-2">{project.desc}</p>
          <ul className="my-5 flex flex-wrap gap-2">{project.tags.map((t) => <li key={t} className="tag">{t}</li>)}</ul>
          <div className="mt-auto flex flex-wrap gap-3">
            <a className="btn" href={project.live} target="_blank" rel="noopener noreferrer">View Live</a>
            <a className="btn btn-ghost" href={project.code} target="_blank" rel="noopener noreferrer">Code</a>
          </div>
        </div>
      </article>
    </Reveal>
  );
}

export default function Portfolio() {
  const heroRef = useRef<HTMLElement>(null);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const el = heroRef.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const move = (e: PointerEvent) => {
      const r = el.getBoundingClientRect();
      el.style.setProperty("--mx", `${((e.clientX - r.left) / r.width) * 100}%`);
      el.style.setProperty("--my", `${((e.clientY - r.top) / r.height) * 100}%`);
    };
    el.addEventListener("pointermove", move);
    return () => el.removeEventListener("pointermove", move);
  }, []);

  const copyEmail = async () => {
    try { await navigator.clipboard.writeText(EMAIL); setCopied(true); setTimeout(() => setCopied(false), 1600); } catch {}
  };

  return (
    <>
      {/* NAV */}
      <header className="nav">
        <a href="#home" className="logo"><span className="logo-mark">M</span>Musa</a>
        <nav className="ml-auto hidden gap-7 text-[0.95rem] md:flex" aria-label="Primary">
          <a href="#home" className="muted transition-colors hover:text-text">Home</a>
          <a href="#about" className="muted transition-colors hover:text-text">About</a>
          <a href="#skills" className="muted transition-colors hover:text-text">Skills</a>
          <a href="#projects" className="muted transition-colors hover:text-text">Projects</a>
          <a href="#tools" className="muted transition-colors hover:text-text">Tools</a>
        </nav>
        <a className="btn ml-auto md:ml-0" href={`https://wa.me/${WHATSAPP}`} target="_blank" rel="noopener noreferrer">Let&rsquo;s Talk</a>
      </header>

      <main>
        {/* HERO */}
        <section id="home" ref={heroRef} className="hero section">
          <div className="aurora" aria-hidden="true"><span className="blob blob-1" /><span className="blob blob-2" /></div>
          <div className="hero-glow" aria-hidden="true" />
          <div className="shell relative z-10 grid items-center gap-12 lg:grid-cols-[1.15fr_0.85fr]">
            <div>
              {PROFILE.available && <span className="pill mb-6"><span className="status-dot" />AVAILABLE FOR WORK</span>}
              <h1 className="display-1">Building Modern<br /><span className="grad-text">Web Experiences</span></h1>
              <p className="lead mt-5"><span className="muted">I&rsquo;m </span><strong>{PROFILE.name}</strong><span className="muted">, a {PROFILE.role}</span></p>
              <p className="prose-p mt-4 max-w-[48ch]">{PROFILE.intro}</p>
              <ul className="mt-6 flex flex-wrap gap-2">{PROFILE.heroTech.map((t) => <li key={t} className="chip">{t}</li>)}</ul>
              <div className="mt-8 flex flex-wrap gap-3">
                <a href="#projects" className="btn">View Projects →</a>
                <a href="#contact" className="btn btn-ghost">Contact Me</a>
              </div>
              <div className="mt-8 flex items-center gap-3">
                <a className="icon-btn" href={SOCIALS.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub"><GitHubIcon /></a>
                <a className="icon-btn" href={SOCIALS.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><LinkedInIcon /></a>
                <a className="icon-btn" href={SOCIALS.x} target="_blank" rel="noopener noreferrer" aria-label="X"><XIcon /></a>
                <span className="ml-1 text-sm muted">Follow me</span>
              </div>
            </div>

            <div className="relative mx-auto w-full max-w-[360px]">
              <div className="code-card hidden sm:block" aria-hidden="true">
                <div className="mb-1"><span className="code-dot" style={{ background: "#ff5f56" }} /><span className="code-dot" style={{ background: "#ffbd2e" }} /><span className="code-dot" style={{ background: "#27c93f" }} /></div>
                <div><span style={{ color: "#c586c0" }}>const</span> <span style={{ color: "#9cdcfe" }}>dev</span> = {"{"}</div>
                <div>&nbsp;&nbsp;<span style={{ color: "#9cdcfe" }}>stack</span>: <span style={{ color: "#ce9178" }}>&apos;Next.js&apos;</span>,</div>
                <div>&nbsp;&nbsp;<span style={{ color: "#dcdcaa" }}>ship</span>: () =&gt; <span style={{ color: "#4ec9b0" }}>&lt;Portfolio/&gt;</span></div>
                <div>{"}"};</div>
              </div>
              <div className="photo-card card-hover"><Photo /></div>
              <div className="badge-card" aria-hidden="true">
                <span style={{ color: "#facc15" }}>★</span>
                <span><span className="block text-sm font-semibold">Client Loved</span><span className="block text-xs muted">Quality Work</span></span>
              </div>
            </div>
          </div>
        </section>

        {/* MARQUEE */}
        <div className="marquee border-y border-white/5 py-5">
          <div className="marquee-track">{[...TECHNOLOGIES, ...TECHNOLOGIES].map((t, i) => <span key={i} className="marquee-item">{t}</span>)}</div>
        </div>

        {/* ABOUT */}
        <section id="about" className="section">
          <div className="shell">
            <Reveal className="section-head"><p className="eyebrow">GET TO KNOW ME</p><h2 className="section-title mt-2">About Me</h2></Reveal>
            <div className="grid gap-6 lg:grid-cols-2">
              <Reveal>
                <div className="glass h-full p-7">
                  <h3 className="font-display text-xl font-extrabold">{ABOUT.title}</h3>
                  {ABOUT.paragraphs.map((p, i) => <p key={i} className="prose-p mt-4">{p}</p>)}
                  <h4 className="mt-8 font-display text-lg font-bold"><span className="grad-text">AI-Assisted Development</span></h4>
                  <ul className="mt-4 flex flex-col gap-4">
                    {AI_WORKFLOW.map((a) => (
                      <li key={a.title} className="flex gap-3">
                        <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-[var(--color-accent)]" />
                        <span><span className="font-semibold">{a.title}</span><span className="block text-sm muted">{a.desc}</span></span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
              <Reveal delay={90}>
                <div className="glass h-full p-7">
                  <h3 className="mb-6 font-display text-xl font-extrabold">My Journey</h3>
                  <div className="timeline">
                    {JOURNEY.map((j) => (
                      <div key={j.role} className="tl-item">
                        <p className="font-display font-bold">{j.role}</p>
                        <p className="text-sm"><span className="grad-text font-semibold">{j.org}</span><span className="muted"> · {j.period}</span></p>
                        <p className="prose-p mt-2 text-sm">{j.desc}</p>
                        <ul className="mt-2 flex flex-wrap gap-1.5">{j.tags.map((t) => <li key={t} className="tag">{t}</li>)}</ul>
                      </div>
                    ))}
                  </div>
                </div>
              </Reveal>
            </div>
            <Reveal>
              <div className="mt-6 grid grid-cols-2 gap-4 md:grid-cols-4">
                {STATS.map((s) => (
                  <div key={s.label} className="glass stat"><p className="stat-value grad-text">{s.value}</p><p className="stat-label">{s.label}</p></div>
                ))}
              </div>
            </Reveal>
          </div>
        </section>

        {/* SKILLS */}
        <section id="skills" className="section">
          <div className="shell">
            <Reveal className="section-head"><p className="eyebrow">WHAT I KNOW</p><h2 className="section-title mt-2">Skills &amp; Expertise</h2></Reveal>
            <div className="grid gap-x-8 gap-y-6 md:grid-cols-2">
              {SKILLS.map((s, i) => (
                <Reveal key={s.name} delay={i * 60}>
                  <div className="glass p-5">
                    <div className="flex items-center justify-between">
                      <span className="font-semibold">{s.name}</span>
                      <span className="text-sm muted">{s.level}%</span>
                    </div>
                    <div className="skill-track"><div className="skill-fill" style={{ ["--lvl" as string]: `${s.level}%` } as CSSProperties} /></div>
                  </div>
                </Reveal>
              ))}
            </div>
            <Reveal>
              <h3 className="mb-5 mt-14 text-center font-display text-xl font-bold">Technologies I Work With</h3>
              <div className="flex flex-wrap justify-center gap-2.5">{TECHNOLOGIES.map((t) => <span key={t} className="chip">{t}</span>)}</div>
            </Reveal>
          </div>
        </section>

        {/* PROJECTS */}
        <section id="projects" className="section">
          <div className="aurora opacity-40" aria-hidden="true"><span className="blob blob-1" /></div>
          <div className="shell relative z-10">
            <Reveal className="section-head"><p className="eyebrow">MY RECENT WORK</p><h2 className="section-title mt-2">Featured Projects</h2></Reveal>
            <div className="grid gap-7 md:grid-cols-2">{PROJECTS.map((p, i) => <ProjectCard key={p.name} project={p} index={i} />)}</div>
          </div>
        </section>

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

        {/* CONTACT */}
        <section id="contact" className="hero section overflow-hidden">
          <div className="aurora" aria-hidden="true"><span className="blob blob-1" /><span className="blob blob-2" /></div>
          <div className="shell relative z-10">
            <Reveal className="section-head">
              <p className="eyebrow">GET IN TOUCH</p>
              <h2 className="cta-title mt-2">Let&rsquo;s Work Together</h2>
              <p className="prose-p mx-auto mt-4 max-w-[46ch]">Have a project in mind? I&rsquo;m available for freelance work. Let&rsquo;s connect and create something amazing!</p>
            </Reveal>
            <Reveal>
              <div className="glass mx-auto max-w-2xl p-8 text-center">
                <div className="flex flex-wrap justify-center gap-4">
                  <a className="btn btn-wa" href={`https://wa.me/${WHATSAPP}?text=${encodeURIComponent("Hi Musa! I saw your portfolio and would like to discuss a project.")}`} target="_blank" rel="noopener noreferrer">Chat on WhatsApp</a>
                  <button type="button" onClick={copyEmail} className="btn btn-ghost">{copied ? "Email Copied ✓" : "Copy Email"}</button>
                </div>
                <div className="mt-7 flex flex-wrap justify-center gap-x-8 gap-y-2 text-sm muted">
                  <span>{PHONE}</span><span>Available for freelance projects</span>
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        {/* FOOTER */}
        <footer className="border-t border-white/5">
          <div className="shell flex flex-wrap items-center justify-between gap-4 py-8">
            <div>
              <span className="logo"><span className="logo-mark">M</span>Musa</span>
              <p className="mt-2 max-w-[40ch] text-sm muted">{PROFILE.role} crafting beautiful, responsive websites with modern technologies.</p>
            </div>
            <span className="text-sm muted">© {new Date().getFullYear()} Musa — built with Next.js &amp; Tailwind</span>
          </div>
        </footer>
      </main>
    </>
  );
}
