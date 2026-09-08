import { SKILLS, TECHNOLOGIES } from "@/lib/site";
import { Reveal } from "./Reveal";
import type { CSSProperties } from "react";

const R = 34;
const C = 2 * Math.PI * R;

function SkillRing({ name, level, delay = 0 }: { name: string; level: number; delay?: number }) {
    const offset = C - (level / 100) * C;
    return (
        <div className="skill-ring-card">
            <div className="skill-ring" role="img" aria-label={`${name}: ${level}%`}>
                <svg viewBox="0 0 80 80">
                    <circle cx="40" cy="40" r={R} className="skill-ring-track" />
                    <circle
                        cx="40"
                        cy="40"
                        r={R}
                        className="skill-ring-fill"
                        transform="rotate(-90 40 40)"
                        style={{
                            ["--dash" as string]: `${C}`,
                            ["--offset" as string]: `${offset}`,
                            transitionDelay: `${delay}ms`,
                        } as CSSProperties}
                    />
                </svg>
                <span className="skill-ring-value">{level}%</span>
            </div>
            <p className="skill-ring-label">{name}</p>
        </div>
    );
}

export default function Skills() {
    return (
        <section id="skills" className="section py-10 lg:py-14">
            <div className="shell">
                <Reveal className="mb-7 text-center">
                    <p className="eyebrow">WHAT I KNOW</p>
                    <h2 className="section-title mt-2">Skills &amp; Expertise</h2>
                </Reveal>

                {/* Circular skill rings — compact grid */}
                <Reveal>
                    <div className="glass px-2 py-4 sm:px-4">
                        <div className="grid grid-cols-2 gap-1 sm:grid-cols-4 sm:gap-2">
                            {SKILLS.map((s, i) => (
                                <SkillRing key={s.name} name={s.name} level={s.level} delay={i * 90} />
                            ))}
                        </div>
                    </div>
                </Reveal>

                {/* Technologies — tightened spacing */}
                <Reveal>
                    <h3 className="mb-4 mt-8 text-center font-display text-lg font-bold">Technologies I Work With</h3>
                    <div className="flex flex-wrap justify-center gap-2">
                        {TECHNOLOGIES.map((t) => <span key={t} className="chip text-xs sm:text-sm">{t}</span>)}
                    </div>
                </Reveal>
            </div>
        </section>
    );
}