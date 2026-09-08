"use client";
import { useState } from "react";
import { EMAIL, PHONE, WHATSAPP, PROFILE } from "@/lib/site";
import { Reveal } from "./Reveal";

export default function Contact() {
    const [copied, setCopied] = useState(false);

    const copyEmail = async () => {
        try { await navigator.clipboard.writeText(EMAIL); setCopied(true); setTimeout(() => setCopied(false), 1600); } catch { }
    };

    return (
        <>
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

            <footer className="border-t border-white/5">
                <div className="shell flex flex-wrap items-center justify-between gap-4 py-8">
                    <div>
                        <span className="logo"><span className="logo-mark">M</span>Musa</span>
                        <p className="mt-2 max-w-[40ch] text-sm muted">{PROFILE.role} crafting beautiful, responsive websites with modern technologies.</p>
                    </div>
                    <span className="text-sm muted">© {new Date().getFullYear()} Musa — built with Next.js &amp; Tailwind</span>
                </div>
            </footer>
        </>
    );
}