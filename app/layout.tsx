import type { Metadata, Viewport } from "next";
import { Bricolage_Grotesque, Familjen_Grotesk } from "next/font/google";
import "./globals.css";

const display = Bricolage_Grotesque({
  subsets: ["latin"],
  variable: "--font-bricolage",
  display: "swap",
});

const body = Familjen_Grotesk({
  subsets: ["latin"],
  variable: "--font-familjen",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Musa Imran — Frontend Developer & Web Designer",
  description:
    "Frontend developer building fast, responsive, modern web interfaces with Next.js and an AI-assisted workflow.",
  metadataBase: new URL("https://musa-imran.vercel.app"),
  openGraph: {
    title: "Musa Imran — Frontend Developer & Web Designer",
    description:
      "Frontend developer building fast, responsive, modern web interfaces with Next.js.",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#0b0407",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable}`}>
      <body>{children}</body>
    </html>
  );
}
