import { ABOUT, AI_WORKFLOW, JOURNEY, STATS } from "@/lib/site";
import { Reveal } from "./Reveal";

/* Small inline icons (stroke = currentColor, matches the theme) */
function Icon({ d }: { d: string }) {
    return (
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d={d} />
        </svg>
    );
}

const ICON_BOLT = "M13 2 4.09 12.97a1 1 0 0 0 .77 1.64h5.02l-1.88 7.39L20.5 11.6a1 1 0 0 0-.77-1.64h-5.02L13 2Z";
const ICON_PIN = "M20 10c0 5.25-8 12-8 12s-8-6.75-8-12a8 8 0 0 1 16 0Z M12 10a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z";
const ICON_SPARK = "M12 3v4 M12 17v4 M3 12h4 M17 12h4 M5.6 5.6l2.8 2.8 M15.6 15.6l2.8 2.8 M18.4 5.6l-2.8 2.8 M8.4 15.6l-2.8 2.8";
const ICON_LAYOUT = "M3 3h18v18H3Z M3 9h18 M9 21V9";
const ICON_GAUGE = "m12 14 4-4 M3.34 19a10 10 0 1 1 17.32 0";
const ICON_REFRESH = "M21 12a9 9 0 1 1-2.64-6.36 M21 3v6h-6";

/* Self-learning story (English) — replaces the old freelance copy */
const SELF_LEARNING = [
    "I'm a self-taught frontend developer. Almost everything I know today I learned by building real projects — breaking things, reading docs, and fixing them again.",
    "That self-learning phase is where I truly learned the work: HTML, CSS, JavaScript, React and Next.js, one commit at a time. Today I pair that foundation with an AI-assisted workflow to ship faster without cutting corners.",
];

/* What I can do for you */
const SERVICES = [
    { icon: ICON_LAYOUT, title: "Landing pages & portfolios", desc: "SEO-friendly, conversion-focused, pixel-perfect builds." },
    { icon: ICON_GAUGE, title: "Dashboards & web apps", desc: "React / Next.js apps with clean, reusable components." },
    { icon: ICON_REFRESH, title: "Redesign & performance fixes", desc: "Modernizing legacy UIs, speed + accessibility audits." },
];

/* Journey: any freelance entry is removed, self-learning chapter added first */
const JOURNEY_ITEMS = [
    {
        role: "Self-Taught Developer",
        org: "Self-Learning Journey",
        period: "The early days",
        desc: "Learned by doing — courses, docs, and dozens of practice projects until the basics became second nature. This is where I truly learned the work.",
        tags: ["HTML", "CSS", "JavaScript", "React"],
    },
    ...JOURNEY.filter((j) => !/freelance/i.test(`${j.role} ${j.org}`)),
];

export default function About() {
    return (
        <section id="about" className="section">
            <div className="shell">
                <Reveal className="section-head">
                    <p className="eyebrow">GET TO KNOW ME</p>
                    <h2 className="section-title mt-2">About Me</h2>
                </Reveal>

                <div className="grid gap-6 lg:grid-cols-2">
                    {/* ── LEFT / FRONTEND CARD ── */}
                    <Reveal>
                        <div className="glass card-hover flex h-full flex-col p-7">
                            <h3 className="font-display text-xl font-extrabold">{ABOUT.title}</h3>
                            {SELF_LEARNING.map((p, i) => <p key={i} className="prose-p mt-4">{p}</p>)}

                            <h4 className="mt-8 font-display text-lg font-bold"><span className="grad-text">AI-Assisted Development</span></h4>
                            <ul className="mt-4 flex flex-col gap-4">
                                {AI_WORKFLOW.map((a) => (
                                    <li key={a.title} className="flex gap-3">
                                        <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-[var(--color-accent)]" />
                                        <span><span className="font-semibold">{a.title}</span><span className="block text-sm muted">{a.desc}</span></span>
                                    </li>
                                ))}
                            </ul>

                            {/* ── BOTTOM FILLER ── */}
                            <div className="mt-auto pt-8">
                                <span className="about-rule" aria-hidden="true" />

                                <p className="eyebrow mt-6 text-[0.72rem]">WHAT I CAN DO FOR YOU</p>
                                <ul className="mt-3 flex flex-col gap-3">
                                    {SERVICES.map((s) => (
                                        <li key={s.title} className="flex items-start gap-2.5">
                                            <span className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-md border border-[color-mix(in_srgb,var(--color-accent)_24%,transparent)] bg-[color-mix(in_srgb,var(--color-accent)_10%,transparent)] text-[var(--color-accent3)]">
                                                <Icon d={s.icon} />
                                            </span>
                                            <span>
                                                <span className="block text-sm font-semibold leading-tight">{s.title}</span>
                                                <span className="mt-0.5 block text-xs muted leading-snug">{s.desc}</span>
                                            </span>
                                        </li>
                                    ))}
                                </ul>

                                <div className="mt-5 grid gap-3 sm:grid-cols-2">
                                    <div className="mini-card">
                                        <span className="mini-icon"><Icon d={ICON_BOLT} /></span>
                                        <span>
                                            <span className="block text-sm font-semibold">Currently building</span>
                                            <span className="block text-xs muted">AI-assisted dashboards &amp; design systems</span>
                                        </span>
                                    </div>
                                    <div className="mini-card">
                                        <span className="mini-icon"><Icon d={ICON_PIN} /></span>
                                        <span>
                                            <span className="block text-sm font-semibold">Gujranwala, Pakistan</span>
                                            <span className="block text-xs muted">PKT (UTC+5)</span>
                                        </span>
                                    </div>
                                </div>

                                <p className="mt-5 flex items-start gap-2 text-xs muted">
                                    <span className="mt-0.5 shrink-0 text-[var(--color-accent3)]"><Icon d={ICON_SPARK} /></span>
                                    Beyond code: tea, long walks, and refactoring old components for fun.
                                </p>
                            </div>
                        </div>
                    </Reveal>

                    {/* ── RIGHT / JOURNEY CARD ── */}
                    <Reveal delay={90}>
                        <div className="glass card-hover flex h-full flex-col p-7">
                            <h3 className="mb-6 font-display text-xl font-extrabold">My Journey</h3>
                            <div className="timeline">
                                {JOURNEY_ITEMS.map((j) => (
                                    <div key={j.role} className="tl-item">
                                        <p className="font-display font-bold">{j.role}</p>
                                        <p className="text-sm"><span className="grad-text font-semibold">{j.org}</span><span className="muted"> · {j.period}</span></p>
                                        <p className="prose-p mt-2 text-sm">{j.desc}</p>
                                        <ul className="mt-2 flex flex-wrap gap-1.5">{j.tags.map((t) => <li key={t} className="tag">{t}</li>)}</ul>
                                    </div>
                                ))}
                            </div>
                            <div className="mt-auto pt-6">
                                <span className="about-rule" aria-hidden="true" />
                                <p className="mt-4 text-sm"><span className="grad-text font-semibold">Next chapter:</span> <span className="muted">senior frontend / product engineering roles, and a few meaningful open-source contributions.</span></p>
                            </div>
                        </div>
                    </Reveal>
                </div>

                <Reveal>
                    <div className="mt-6 grid grid-cols-2 gap-4 md:grid-cols-4">
                        {STATS.map((s) => (
                            <div key={s.label} className="glass stat card-hover"><p className="stat-value grad-text">{s.value}</p><p className="stat-label">{s.label}</p></div>
                        ))}
                    </div>
                </Reveal>
            </div>
        </section>
    );
}