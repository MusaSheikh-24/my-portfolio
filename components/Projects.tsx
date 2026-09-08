import { useState } from "react";
import { PROJECTS, type Project } from "@/lib/site";
import { Reveal } from "./Reveal";

function hostOf(url: string): string {
    try { return new URL(url).host.replace(/^www./, ""); } catch { return url; }
}

/* Professional Cover: Matches theme's glass aesthetic */
function ProjectCover({ project }: { project: Project }) {
    const [error, setError] = useState(false);
    const src = project.cover || "";

    return (
        <div className="relative aspect-16/10 overflow-hidden bg-muted/20 group border-b border-white/4">
            {/* Featured Badge - Minimalist Pill */}
            {project.featured && (
                <span className="absolute top-2.5 right-2.5 z-10 text-[0.5rem] font-semibold px-2 py-0.5 rounded-full bg-accent text-white shadow-md backdrop-blur-sm">
                    ★ Featured
                </span>
            )}

            {/* Browser Bar - Only on Hover for clean look */}
            <div className="absolute top-0 left-0 right-0 z-20 flex items-center gap-1.5 px-3 py-2 bg-linear-to-b from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <i className="block h-1.5 w-1.5 rounded-full bg-red-500/90" />
                <i className="block h-1.5 w-1.5 rounded-full bg-yellow-500/90" />
                <i className="block h-1.5 w-1.5 rounded-full bg-green-500/90" />
            </div>

            {src && !error ? (
                <img
                    src={src}
                    alt={`${project.name} screenshot`}
                    loading="lazy"
                    decoding="async"
                    className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105 group-hover:brightness-110"
                    onError={() => setError(true)}
                />
            ) : null}
        </div>
    );
}

function ProjectCard({ project, index }: { project: Project; index: number }) {
    return (
        <Reveal delay={index * 60}>
            {/* THEME UPDATE: Added 'glass' and 'card-hover' classes to match About/Calculator cards */}
            <article className="glass card-hover flex h-full flex-col overflow-hidden rounded-xl border border-white/6 bg-card/40 backdrop-blur-md transition-all duration-300 hover:border-white/12     hover:bg-card/60">

                {/* Image Area */}
                <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block relative overflow-hidden"
                    aria-label={`Open ${project.name}`}
                >
                    <ProjectCover project={project} />
                </a>

                {/* Content Body - Tighter & Mature Typography */}
                <div className="flex flex-1 flex-col p-4 gap-2">
                    {/* THEME UPDATE: Using muted-foreground instead of accent/70 for consistency */}
                    <p className="text-[0.55rem] uppercase tracking-widest text-muted-foreground font-semibold">
                        {project.kind}
                    </p>

                    {/* THEME UPDATE: font-display matches your headings style */}
                    <h3 className="font-display text-sm font-bold leading-snug text-foreground group-hover:text-accent transition-colors">
                        {project.name}
                    </h3>

                    {/* THEME UPDATE: prose-p class for consistent paragraph spacing/color */}
                    <p className="prose-p text-[0.65rem] leading-relaxed text-muted-foreground line-clamp-2">
                        {project.desc}
                    </p>

                    {/* Tags - Subtle Pills matching theme */}
                    <ul className="flex flex-wrap gap-1.5 mt-auto pt-2">
                        {project.tags.map((t) => (
                            <li key={t} className="text-[0.5rem] px-1.5 py-0.5 rounded bg-white/3 text-muted-foreground border border-white/4">
                                {t}
                            </li>
                        ))}
                    </ul>

                    {/* Actions - Clean Row */}
                    <div className="flex items-center gap-2 pt-3 mt-1 border-t border-white/4">
                        <a
                            className="inline-flex items-center justify-center text-[0.6rem] font-medium px-2.5 py-1 rounded bg-accent text-white hover:bg-accent/90 transition-colors"
                            href={project.live}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            View Live
                        </a>
                        <a
                            className="inline-flex items-center justify-center text-[0.6rem] font-medium px-2.5 py-1 rounded bg-white/4 text-foreground hover:bg-white/8 transition-colors"
                            href={project.code}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Code
                        </a>
                    </div>
                </div>
            </article>
        </Reveal>
    );
}

export default function Projects() {
    return (
        <section id="projects" className="section py-8 md:py-12">
            <div className="shell relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Centered Heading with Larger Title Size (Unchanged as requested) */}
                <Reveal className="mb-7 text-center">
                    <p className="eyebrow">MY RECENT WORK</p>
                    <h2 className="section-title mt-2">Featured Projects</h2>
                </Reveal>

                {/* Dense 3-Column Grid (Unchanged as requested) */}
                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                    {PROJECTS.map((p, i) => (
                        <ProjectCard key={p.name} project={p} index={i} />
                    ))}
                </div>
            </div>
        </section>
    );
}