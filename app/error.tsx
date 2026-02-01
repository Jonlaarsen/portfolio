"use client";
import { useEffect } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { AlertTriangle, RefreshCw, Home } from "lucide-react";
import Link from "next/link";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useGSAP(() => {
    // Animate error icon
    gsap.from(".error-icon", {
      scale: 0,
      rotation: -180,
      duration: 1,
      ease: "back.out(1.7)",
    });

    gsap.from(".error-title", {
      y: 50,
      opacity: 0,
      duration: 0.8,
      delay: 0.2,
      ease: "power3.out",
    });

    gsap.from(".error-message", {
      y: 30,
      opacity: 0,
      duration: 0.6,
      delay: 0.4,
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

    // Pulsing animation for icon
    gsap.to(".error-icon", {
      scale: 1.1,
      duration: 1.5,
      repeat: -1,
      yoyo: true,
      ease: "power1.inOut",
    });
  }, []);

  useEffect(() => {
    // Log error to console for debugging
    console.error("Error:", error);
  }, [error]);

  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center relative overflow-hidden noisy">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-32 bg-red-400/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-red-400/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />
        <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-red-400/10 rounded-full blur-2xl animate-pulse" style={{ animationDelay: "0.5s" }} />
      </div>

      {/* Grid background */}
      <div className="absolute inset-0 grid-bg opacity-30" />

      <div className="relative z-10 text-center px-4 max-w-2xl mx-auto">
        {/* Error Icon */}
        <div className="error-icon mb-8 flex justify-center">
          <div className="p-6 bg-red-400/10 rounded-full border-2 border-red-400/30">
            <AlertTriangle className="w-16 h-16 md:w-20 md:h-20 text-red-400" />
          </div>
        </div>

        {/* Error Title */}
        <div className="error-title mb-6">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-fugaz font-bold text-white mb-4">
            Something Went Wrong
          </h1>
          <p className="text-red-400 text-lg md:text-xl font-semibold">
            {error.message || "An unexpected error occurred"}
          </p>
        </div>

        {/* Error Message */}
        <div className="error-message mb-8">
          <p className="text-white/70 text-base md:text-lg max-w-md mx-auto">
            Don't worry, these things happen! You can try refreshing the page
            or return to the homepage. If the problem persists, please try
            again later.
          </p>
          {error.digest && (
            <p className="text-white/40 text-xs mt-4 font-mono">
              Error ID: {error.digest}
            </p>
          )}
        </div>

        {/* Action Buttons */}
        <div className="error-button flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={reset}
            className="group flex items-center gap-2 px-8 py-4 bg-red-400 hover:bg-red-500 text-white font-semibold rounded-xl transition-all duration-300 hover:shadow-2xl hover:shadow-red-400/50 hover:scale-105"
          >
            <RefreshCw className="w-5 h-5 group-hover:rotate-180 transition-transform duration-500" />
            <span>Try Again</span>
          </button>
          <Link
            href="/"
            className="group flex items-center gap-2 px-8 py-4 bg-white/5 hover:bg-white/10 text-white border border-white/20 hover:border-white/40 font-semibold rounded-xl transition-all duration-300 hover:scale-105"
          >
            <Home className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
            <span>Go Home</span>
          </Link>
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
}
