"use client";
import { useEffect, useRef, useState, type CSSProperties } from "react";
import { PROFILE, SOCIALS, TECHNOLOGIES, PHOTO } from "@/lib/site";
import { GitHubIcon, LinkedInIcon, XIcon } from "./icons";
import Link from "next/link"; // Next.js ka Link component import kiya

function Photo() {
    const [err, setErr] = useState(false);
    if (!PHOTO || err) return <div className="photo-fallback">MI</div>;
    return (
        <img
            src={PHOTO}
            alt={PROFILE.name}
            onError={() => setErr(true)}
            className="w-full h-full object-cover"
        />
    );
}

export default function Hero() {
    const heroRef = useRef<HTMLElement>(null);

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

    return (
        <section
            id="home"
            ref={heroRef}
            // Laptop padding unchanged (pt-16), Mobile adjusted for navbar
            className="hero section pt-20 pb-12 min-h-screen flex flex-col justify-center lg:pt-12 lg:pb-0"
            style={{ ["--mx" as string]: "50%", ["--my" as string]: "50%" } as CSSProperties}
        >
            <div className="aurora" aria-hidden="true"><span className="blob blob-1" /><span className="blob blob-2" /></div>
            <div className="hero-glow" aria-hidden="true" />

            {/* Grid: Stacked on Mobile, Side-by-side on Laptop (Unchanged) */}
            <div className="shell relative z-10 grid items-center gap-8 lg:grid-cols-[1fr_0.9fr] lg:gap-10 px-4 sm:px-6">

                {/* TEXT COLUMN */}
                <div className="order-2 lg:order-1 text-center lg:text-left flex flex-col items-center lg:items-start">
                    {PROFILE.available && (
                        <span className="pill mb-4 inline-flex items-center gap-2 text-xs font-semibold tracking-wide uppercase">
                            <span className="status-dot" /> AVAILABLE FOR WORK
                        </span>
                    )}

                    {/* Heading: Same size on laptop, responsive on mobile */}
                    <h1 className="display-1 text-4xl sm:text-5xl lg:text-7xl xl:text-7xl leading-none">
                        Building Modern<br />
                        <span className="grad-text">Web Experiences</span>
                    </h1>

                    <p className="lead mt-4 text-base sm:text-lg lg:text-xl text-muted-foreground">
                        I'm <strong className="text-foreground">{PROFILE.name}</strong>, a {PROFILE.role}
                    </p>

                    <p className="prose-p mt-4 max-w-[50ch] mx-auto lg:mx-0 text-sm sm:text-base text-muted-foreground/80">
                        {PROFILE.intro}
                    </p>

                    {/* Tech Chips */}
                    <ul className="mt-6 flex flex-wrap justify-center lg:justify-start gap-2">
                        {PROFILE.heroTech.map((t) => (
                            <li key={t} className="chip text-xs sm:text-sm px-3 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm">
                                {t}
                            </li>
                        ))}
                    </ul>

                    {/* Buttons: Full width on mobile, auto on laptop */}
                    <div className="mt-8 flex flex-col sm:flex-row flex-wrap justify-center lg:justify-start gap-3 w-full sm:w-auto">
                        {/* Primary Resume Button - VIEW (opens in new tab) */}
                        <a
                            href="/Musa_Imran_Resume.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn text-sm sm:text-base px-6 py-3 w-full sm:w-auto justify-center gap-2 group inline-flex items-center"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="transition-transform group-hover:scale-110">
                                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                                <polyline points="14 2 14 8 20 8" />
                                <line x1="16" y1="13" x2="8" y2="13" />
                                <line x1="16" y1="17" x2="8" y2="17" />
                                <polyline points="10 9 9 9 8 9" />
                            </svg>
                            View Resume
                        </a>

                        {/* Secondary Projects Button */}
                        <Link
                            href="#projects"
                            className="btn btn-ghost text-sm sm:text-base px-6 py-3 w-full sm:w-auto justify-center gap-2 group inline-flex items-center"
                        >
                            View Projects
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="transition-transform group-hover:translate-x-0.5">
                                <line x1="5" y1="12" x2="19" y2="12" />
                                <polyline points="12 5 19 12 12 19" />
                            </svg>
                        </Link>
                    </div>
                    {/* Social Icons */}
                    <div className="mt-8 flex items-center justify-center lg:justify-start gap-4">
                        {[
                            { icon: <GitHubIcon />, href: SOCIALS.github, label: "GitHub" },
                            { icon: <LinkedInIcon />, href: SOCIALS.linkedin, label: "LinkedIn" },
                            { icon: <XIcon />, href: SOCIALS.x, label: "X" },
                        ].map((s) => (
                            <a
                                key={s.label}
                                className="icon-btn p-2.5 rounded-lg border border-white/10 hover:border-accent/50 hover:bg-accent/10 transition-all"
                                href={s.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label={s.label}
                            >
                                {s.icon}
                            </a>
                        ))}
                        <span className="ml-2 text-sm text-muted-foreground hidden sm:inline">Follow me</span>
                    </div>
                </div>

                {/* PHOTO COLUMN - Optimized for Mobile/Tablet */}
                <div className="order-1 lg:order-3 relative mx-auto w-full max-w-70 sm:max-w-85 lg:max-w-97.5 hero-photo-col">
                    <div className="animated-border-wrapper card-hover mb-4">
                        <Photo />
                    </div>

                    {/* Floating Elements - Hidden on mobile to prevent overlap/clutter */}
                    <div className="code-card-floating hidden lg:block" aria-hidden="true">
                        <div className="mb-1 flex gap-1.5">
                            <span className="code-dot h-2.5 w-2.5 rounded-full" style={{ background: "#ff5f56" }} />
                            <span className="code-dot h-2.5 w-2.5 rounded-full" style={{ background: "#ffbd2e" }} />
                            <span className="code-dot h-2.5 w-2.5 rounded-full" style={{ background: "#27c93f" }} />
                        </div>
                        <div className="font-mono text-xs leading-relaxed">
                            <div><span style={{ color: "#c586c0" }}>const</span> <span style={{ color: "#9cdcfe" }}>dev</span> = {"{"}</div>
                            <div>&nbsp;&nbsp;<span style={{ color: "#9cdcfe" }}>stack</span>: <span style={{ color: "#ce9178" }}>'Next.js'</span>,</div>
                            <div>&nbsp;&nbsp;<span style={{ color: "#dcdcaa" }}>ship</span>: () =&gt; <span style={{ color: "#4ec9b0" }}>&lt;Portfolio/&gt;</span></div>
                            <div>{"}"};</div>
                        </div>
                    </div>

                    <div className="badge-card hidden lg:flex items-center gap-2 p-2 rounded-lg border border-white/10 bg-black/60 backdrop-blur-md shadow-lg" aria-hidden="true">
                        <span className="text-yellow-400 text-lg">★</span>
                        <div>
                            <span className="block text-xs font-semibold text-foreground">Client Loved</span>
                            <span className="block text-[0.65rem] text-muted-foreground">Quality Work</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* MARQUEE - Adjusted padding for mobile */}
            <div className="marquee border-y border-white/10 py-3 mt-8 lg:mt-12">
                <div className="marquee-track">
                    {[...TECHNOLOGIES, ...TECHNOLOGIES].map((t, i) => (
                        <span key={i} className="marquee-item text-sm sm:text-base px-4">{t}</span>
                    ))}
                </div>
            </div>
        </section>
    );
}