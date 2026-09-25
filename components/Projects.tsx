import { useState } from "react";
import { PROJECTS, type Project } from "@/lib/site";
import { Reveal } from "./Reveal";

function ProjectCover({ project }: { project: Project }) {
    const [error, setError] = useState(false);
    const src = project.cover || "";

    return (
        <div className="relative aspect-video overflow-hidden bg-muted/20 border-b border-white/5 group">
            {/* Featured Badge */}
            {project.featured && (
                <span className="absolute top-3 right-3 z-10 text-[0.6rem] font-bold px-2.5 py-1 rounded-full bg-accent text-white shadow-lg backdrop-blur-md border border-white/10">
                    ★ Featured
                </span>
            )}

            {/* Browser Bar - Only on Hover */}
            <div className="absolute top-0 left-0 right-0 z-20 flex items-center gap-1.5 px-3 py-2 bg-linear-to-b from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <i className="block h-2 w-2 rounded-full bg-red-500/90" />
                <i className="block h-2 w-2 rounded-full bg-yellow-500/90" />
                <i className="block h-2 w-2 rounded-full bg-green-500/90" />
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
            ) : (
                <div className="h-full w-full flex items-center justify-center text-muted-foreground/20 text-5xl font-bold select-none">
                    {project.name.charAt(0)}
                </div>
            )}
        </div>
    );
}

function ProjectCard({ project, index }: { project: Project; index: number }) {
    return (
        <Reveal delay={index * 80}>
            <article className="glass card-hover flex h-full flex-col overflow-hidden rounded-2xl border border-white/8 bg-card/30 backdrop-blur-md transition-all duration-300 hover:border-accent/30 hover:bg-card/50 hover:-translate-y-1 hover:shadow-xl hover:shadow-accent/5">

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

                {/* Content Body - Balanced Spacing */}
                <div className="flex flex-1 flex-col p-5 gap-3">

                    {/* Project Kind */}
                    <p className="text-[0.65rem] uppercase tracking-widest text-muted-foreground font-semibold">
                        {project.kind}
                    </p>

                    {/* Project Name */}
                    <h3 className="font-display text-lg font-bold leading-tight text-foreground group-hover:text-accent transition-colors">
                        {project.name}
                    </h3>

                    {/* Description (flex-1 pushes tags/buttons to the bottom evenly) */}
                    <p className="text-[0.75rem] leading-relaxed text-muted-foreground line-clamp-3 flex-1">
                        {project.desc}
                    </p>

                    {/* Tags */}
                    <ul className="flex flex-wrap gap-2 mt-1">
                        {project.tags.slice(0, 4).map((t) => (
                            <li
                                key={t}
                                className="text-[0.65rem] px-2 py-1 rounded-md bg-white/5 text-muted-foreground border border-white/5 font-medium"
                            >
                                {t}
                            </li>
                        ))}
                    </ul>

                    {/* Action Buttons - Equal Width & Clean */}
                    <div className="flex items-center gap-3 pt-4 mt-1 border-t border-white/5">
                        <a
                            className="flex-1 inline-flex items-center justify-center text-[0.7rem] font-semibold px-3 py-2.5 rounded-lg bg-accent text-white hover:bg-accent/90 transition-all hover:shadow-lg hover:shadow-accent/20"
                            href={project.live}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            View Live
                        </a>
                        <a
                            className="flex-1 inline-flex items-center justify-center text-[0.7rem] font-semibold px-3 py-2.5 rounded-lg bg-white/5 text-foreground hover:bg-white/10 border border-white/5 transition-all"
                            href={project.code}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Source Code
                        </a>
                    </div>

                </div>
            </article>
        </Reveal>
    );
}

export default function Projects() {
    return (
        <section id="projects" className="section py-12 md:py-16">
            <div className="shell relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Centered Heading */}
                <Reveal className="mb-10 text-center">
                    <p className="eyebrow">MY RECENT WORK</p>
                    <h2 className="section-title mt-2">Featured Projects</h2>
                </Reveal>

                {/* 2-Column Grid Layout */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {PROJECTS.map((p, i) => (
                        <ProjectCard key={p.name} project={p} index={i} />
                    ))}
                </div>

            </div>
        </section>
    );
}