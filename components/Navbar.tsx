"use client";
import { useState } from "react";
import Link from "next/link"; // Next.js ka Link component import kiya
import { WHATSAPP } from "@/lib/site";

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const navLinks = [
        { href: "/#home", label: "Home" },
        { href: "/#about", label: "About" },
        { href: "/#skills", label: "Skills" },
        { href: "/#projects", label: "Projects" },
        { href: "/#tools", label: "Tools" },
    ];

    return (
        <header className="fixed top-0 left-0 right-0 z-50 border-b border-white/6 bg-card/30 backdrop-blur-xl transition-all duration-300">
            <div className="shell flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">

                <Link
                    href="/"
                    className="flex items-center gap-2 text-lg font-bold tracking-tight hover:opacity-80 transition-opacity"
                    onClick={() => {
                        setIsMenuOpen(false);
                        window.scrollTo({
                            top: 0,
                            behavior: "smooth",
                        });
                    }}
                >
                    <span className="grid h-8 w-8 place-items-center rounded-lg bg-accent text-white text-sm shadow-lg shadow-accent/20">
                        M
                    </span>
                    Musa
                </Link>

                {/* Desktop Navigation Links */}
                <nav className="hidden md:flex items-center gap-8" aria-label="Primary">
                    {navLinks.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            className="relative text-sm font-medium text-muted-foreground transition-colors hover:text-foreground group py-2"
                        >
                            {link.label}
                            {/* Animated Underline matching accent color */}
                            <span className="absolute bottom-0 left-0 h-0.5 w-0 bg-accent transition-all duration-300 ease-out group-hover:w-full" />
                        </Link>
                    ))}
                </nav>

                {/* CTA Button - External WhatsApp Link (Still uses <a>) */}
                <a
                    className="hidden md:inline-flex btn text-sm px-4 py-2 bg-accent text-white hover:bg-accent/90 transition-all hover:shadow-lg hover:shadow-accent/20 rounded-md font-medium"
                    href={`https://wa.me/${WHATSAPP}`}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Let's Talk
                </a>

                {/* Mobile Menu Toggle */}
                <button
                    type="button"
                    className="md:hidden grid h-10 w-10 place-items-center rounded-lg border border-white/6 bg-white/3 text-foreground hover:bg-white/8 transition-colors"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    aria-label="Toggle menu"
                >
                    {isMenuOpen ? (
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" /></svg>
                    ) : (
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="3" y1="12" x2="21" y2="12" /><line x1="3" y1="6" x2="21" y2="6" /><line x1="3" y1="18" x2="21" y2="18" /></svg>
                    )}
                </button>
            </div>

            {/* Mobile Dropdown Menu with Animation Support */}
            <div
                className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out border-t border-white/6 bg-card/95 backdrop-blur-xl ${isMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                    }`}
            >
                <nav className="flex flex-col p-4 gap-1">
                    {navLinks.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            className="px-4 py-3 text-base font-medium text-muted-foreground rounded-lg hover:bg-white/5 hover:text-foreground transition-all active:scale-[0.98]"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            {link.label}
                        </Link>
                    ))}
                    <a
                        href={`https://wa.me/${WHATSAPP}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-2 btn w-full justify-center text-base py-3 bg-accent text-white hover:bg-accent/90 transition-all"
                        onClick={() => setIsMenuOpen(false)}
                    >
                        Let's Talk
                    </a>
                </nav>
            </div>
        </header>
    );
}