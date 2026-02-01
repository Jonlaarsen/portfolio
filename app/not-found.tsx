"use client";
import { useEffect } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { Home, ArrowLeft } from "lucide-react";
import Link from "next/link";

const NotFound = () => {
  useGSAP(() => {
    // Animate the 404 text
    gsap.from(".error-number", {
      scale: 0,
      rotation: 360,
      duration: 1,
      ease: "back.out(1.7)",
    });

    gsap.from(".error-text", {
      y: 50,
      opacity: 0,
      duration: 0.8,
      delay: 0.3,
      ease: "power3.out",
    });

    gsap.from(".error-button", {
      y: 30,
      opacity: 0,
      duration: 0.6,
      delay: 0.6,
      stagger: 0.1,
      ease: "power3.out",
    });

    // Floating animation for decorative elements
    gsap.to(".floating-element", {
      y: -20,
      duration: 2,
      repeat: -1,
      yoyo: true,
      ease: "power1.inOut",
      stagger: 0.2,
    });
  }, []);

  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center relative overflow-hidden noisy">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="floating-element absolute top-20 left-10 w-32 h-32 bg-red-400/10 rounded-full blur-3xl" />
        <div className="floating-element absolute bottom-20 right-10 w-40 h-40 bg-red-400/5 rounded-full blur-3xl" />
        <div className="floating-element absolute top-1/2 left-1/4 w-24 h-24 bg-red-400/10 rounded-full blur-2xl" />
      </div>

      {/* Grid background */}
      <div className="absolute inset-0 grid-bg opacity-30" />

      <div className="relative z-10 text-center px-4 max-w-2xl mx-auto">
        {/* 404 Number */}
        <h1 className="error-number text-9xl md:text-[12rem] lg:text-[15rem] font-fugaz font-bold text-red-400 mb-4 leading-none">
          404
        </h1>

        {/* Error Message */}
        <div className="error-text mb-8">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-fugaz font-bold text-white mb-4">
            Page Not Found
          </h2>
          <p className="text-white/70 text-lg md:text-xl max-w-md mx-auto">
            Oops! The page you're looking for seems to have wandered off into
            the digital void. Let's get you back on track.
          </p>
        </div>

        {/* Action Buttons */}
        <div className="error-button flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/"
            className="group flex items-center gap-2 px-8 py-4 bg-red-400 hover:bg-red-500 text-white font-semibold rounded-xl transition-all duration-300 hover:shadow-2xl hover:shadow-red-400/50 hover:scale-105"
          >
            <Home className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
            <span>Go Home</span>
          </Link>
          <button
            onClick={() => window.history.back()}
            className="group flex items-center gap-2 px-8 py-4 bg-white/5 hover:bg-white/10 text-white border border-white/20 hover:border-white/40 font-semibold rounded-xl transition-all duration-300 hover:scale-105"
          >
            <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform duration-300" />
            <span>Go Back</span>
          </button>
        </div>

        {/* Decorative elements */}
        <div className="mt-16 flex justify-center gap-2">
          {[...Array(3)].map((_, i) => (
            <div
              key={i}
              className="w-2 h-2 bg-red-400/50 rounded-full animate-pulse"
              style={{ animationDelay: `${i * 0.2}s` }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default NotFound;
