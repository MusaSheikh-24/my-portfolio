/**
 * Single source of truth for all content.
 */

// --- CONTACT ---
export const WHATSAPP = "923066358436";
export const PHONE = "+92 306 6358436";
export const EMAIL = "your@email.com";
export const PHOTO: string | null = "/musa.jpg";

export const PROFILE = {
  name: "Musa Imran",
  role: "Next.js Developer & UI Designer",
  available: true,
  intro: "I build fast, responsive, and beautiful web applications using Next.js and Tailwind CSS — combining clean code with modern design.",
  heroTech: ["Next.js", "React", "TypeScript", "Framer Motion"],
};

export const SOCIALS = {
  github: "https://github.com/MusaSheikh-24",
  linkedin: "https://www.linkedin.com/in/musa-imran-172s/",
  x: "https://x.com/MusaSheikh07",
};

export const ABOUT = {
  title: "Frontend Developer & Web Designer",
  paragraphs: [
    "I'm a passionate Frontend Developer specializing in Next.js and modern web design. I create beautiful, responsive websites that look amazing on every device.",
    "I leverage AI-powered tools like Cursor to write cleaner code faster, combining human creativity with AI efficiency to deliver high-quality projects.",
  ],
};

export const AI_WORKFLOW = [
  { title: "Cursor AI", desc: "AI-powered code editor for faster development." },
  { title: "AI Code Generation", desc: "Leveraging AI agents for efficient coding." },
  { title: "Smart Workflows", desc: "Combining creativity with AI assistance." },
];

export interface JourneyEntry {
  role: string;
  org: string;
  period: string;
  desc: string;
  tags: string[];
}

export const JOURNEY: JourneyEntry[] = [
  {
    role: "Frontend Developer",
    org: "SyncOps",
    period: "2025 — Present",
    desc: "Building modern web applications with Next.js and creating responsive, beautiful interfaces for real-world products.",
    tags: ["Next.js", "TypeScript", "Tailwind", "Web Design"],
  },
  {
    role: "Freelance Developer",
    org: "Independent",
    period: "2024 — 2025",
    desc: "Developed client projects using Next.js, React, and Tailwind CSS. Focused on responsive design and performance optimization.",
    tags: ["Next.js", "React", "Tailwind", "HTML/CSS"],
  },
  {
    role: "Continuous Learning",
    org: "Self Development",
    period: "2026 — Present",
    desc: "Expanding skills in advanced Next.js patterns, Framer Motion animations, and AI-assisted development workflows.",
    tags: ["Next.js", "Framer Motion", "AI Tools"],
  },
  {
    role: "Future Goals",
    org: "Looking Ahead",
    period: "2026 & Beyond",
    desc: "Building scalable SaaS products, mastering full-stack development, and contributing to open-source AI projects.",
    tags: ["Full-Stack", "SaaS", "Open Source"],
  },
];

export const STATS = [
  { value: "7", label: "Projects Completed" },
  { value: "1.5+", label: "Years Experience" },
  { value: "95%", label: "Client Satisfaction" },
  { value: "Always", label: "Available for Work" },
];

export interface Skill {
  name: string;
  level: number;
}

export const SKILLS: Skill[] = [
  { name: "Next.js", level: 90 },
  { name: "React", level: 85 },
  { name: "TypeScript", level: 80 },
  { name: "JavaScript", level: 85 },
  { name: "Tailwind CSS", level: 95 },
  { name: "HTML / CSS", level: 95 },
  { name: "Responsive Design", level: 95 },
  { name: "Web Design", level: 92 },
];

export const TECHNOLOGIES = [
  "Next.js", "React", "TypeScript", "JavaScript", "HTML5", "CSS3",
  "Tailwind CSS", "Framer Motion", "Git", "GitHub", "Cursor AI", "Responsive Design",
];

// --- PROJECTS ---
export interface Project {
  name: string;
  kind: string;
  desc: string;
  tags: string[];
  live: string;
  code: string;
  featured?: boolean;
  cover?: string;
}

export const PROJECTS: Project[] = [
  {
    name: "Shop-Verse",
    kind: "E-commerce platform",
    desc: "A modern full-featured e-commerce platform with a seamless shopping experience — product catalog, shopping cart, checkout, and responsive design.",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "E-Commerce"],
    live: "https://shop-verse-five-ashen.vercel.app/",
    code: "https://github.com/MusaSheikh-24/shop-verse",
    featured: true,
    cover: "/shop-verse.png",
  },
  {
    name: "Star-Cut",
    kind: "Salon Website",
    desc: "A modern and responsive salon website showcasing services, pricing, and essential business details with a clean, user-friendly UI/UX.",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Web Design"],
    live: "https://star-cut.vercel.app/",
    code: "https://github.com/MusaSheikh-24/starcut",
    featured: true,
    cover: "/star-cut.png",
  },
  {
    name: "3D Printer Hub",
    kind: "Services platform",
    desc: "An innovative platform showcasing 3D-printing technology and services — product listings, printing service details, and a modern UI/UX.",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "3D Technology"],
    live: "https://3d-printer-one.vercel.app/",
    code: "https://github.com/MusaSheikh-24/3dPrinter",
    featured: true,
    cover: "/3dprinter.png",
  },
  {
    name: "travelCo",
    kind: "Travel Platform",
    desc: "Modern international travel website featuring destinations, travel packages, and a clean, user-friendly interface.",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Travel"],
    live: "https://travel-co-mu.vercel.app/",
    code: "https://github.com/MusaSheikh-24/travelCo",
    featured: true,
    cover: "/travelCo.png",
  }
];