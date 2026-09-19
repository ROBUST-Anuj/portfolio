import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Anuj Parashar — Software Engineer | AI/ML & Backend Developer",
  description:
    "Portfolio of Anuj Parashar — Software Engineer specializing in AI/ML, backend systems, and full-stack development. Building intelligent, production-grade applications with Django, FastAPI, Next.js, and TensorFlow.",
  keywords: [
    "Anuj Parashar",
    "Software Engineer",
    "AI/ML Engineer",
    "Backend Developer",
    "Full-Stack Developer",
    "Django",
    "FastAPI",
    "Next.js",
    "Python",
    "TensorFlow",
    "Portfolio",
  ],
  authors: [{ name: "Anuj Parashar" }],
  creator: "Anuj Parashar",
  openGraph: {
    type: "website",
    locale: "en_US",
    title: "Anuj Parashar — Software Engineer | AI/ML & Backend Developer",
    description:
      "Portfolio of Anuj Parashar — Software Engineer specializing in AI/ML, backend systems, and full-stack development.",
    siteName: "Anuj Parashar Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Anuj Parashar — Software Engineer | AI/ML & Backend Developer",
    description:
      "Portfolio of Anuj Parashar — Software Engineer specializing in AI/ML, backend systems, and full-stack development.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${jetbrainsMono.variable} h-full`}
    >
      <body className="min-h-full flex flex-col font-sans">{children}</body>
    </html>
  );
}
