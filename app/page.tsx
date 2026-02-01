import About from "@/components/landing/About";
import Hero from "@/components/landing/Hero";
import Intro from "@/components/landing/Intro";
import Projects from "@/components/landing/Projects";
import Reviews from "@/components/landing/Reviews";
import Contact from "@/components/landing/Contact";
import Footer from "@/components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home",
  description:
    "Professional web developer and designer portfolio showcasing innovative projects built with Next.js, React, and modern web technologies.",
  openGraph: {
    title: "JL-Studios | Web Developer & Designer Portfolio",
    description:
      "Professional web developer and designer specializing in Next.js, React, and modern web technologies.",
    url: "https://jl-studios.com",
  },
};

export default function Home() {
  return (
    <main className="text-white">
      <Hero />
      <Intro />
      <About />
      <Projects />
      <Reviews />
      <Contact />
      <Footer />
    </main>
  );
}
