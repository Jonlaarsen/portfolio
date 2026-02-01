"use client";
import { useState, useEffect } from "react";
import { StarHalf, Menu, X } from "lucide-react";
import { navLinks } from "../../constants/index";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  // Handle scroll effect and progress indicator
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      // Update scroll progress indicator
      const windowHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const scrolled = window.scrollY;
      const progress = (scrolled / windowHeight) * 100;

      const progressBar = document.querySelector(
        ".header-progress",
      ) as HTMLElement;
      if (progressBar) {
        progressBar.style.transform = `scaleX(${progress / 100})`;
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial call
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Detect active section
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100; // Offset for header height + margin

      // Check each section
      for (let i = navLinks.length - 1; i >= 0; i--) {
        const link = navLinks[i];
        const element = document.getElementById(link.name);

        if (element) {
          const elementTop = element.offsetTop;
          const elementBottom = elementTop + element.offsetHeight;

          if (scrollPosition >= elementTop && scrollPosition < elementBottom) {
            setActiveSection(link.name);
            return;
          }
        }
      }

      // If at top, set hero as active
      if (window.scrollY < 100) {
        setActiveSection("hero");
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial check
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Animate header on mount
  useGSAP(() => {
    // Animate logo
    gsap.fromTo(
      ".header-logo",
      { y: -50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        ease: "power3.out",
      },
    );

    // Animate nav links with a small delay to ensure they're rendered
    setTimeout(() => {
      gsap.from(".nav-link", {
        y: 0,
        opacity: 1,
        duration: 0.5,
        stagger: 0.1,
        ease: "power2.out",
      });
    }, 100);
  }, []);

  // Smooth scroll handler
  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    id: string,
  ) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const headerHeight = 56; // h-14 = 56px
      const elementPosition =
        element.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = elementPosition - headerHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 z-50 w-full h-14 transition-all duration-500 ${
          isScrolled
            ? "bg-black/80 backdrop-blur-xl border-b-2 border-white/30 shadow-lg shadow-black/20"
            : "bg-black/40 backdrop-blur-sm border-b-2 border-white/20"
        }`}
      >
        {/* Scroll progress indicator */}
        <div className="absolute bottom-0 left-0 h-0.5 bg-linear-to-r from-red-400 via-red-500 to-red-400 origin-left scale-x-0 transition-transform duration-300 header-progress" />

        <div className="max-w-7xl mx-auto h-full flex items-center justify-between px-6 md:px-10">
          {/* Logo */}
          <a
            href="#hero"
            onClick={(e) => handleNavClick(e, "hero")}
            className="header-logo flex items-center gap-2 group cursor-pointer"
          >
            <StarHalf className="h-8 w-8 text-red-400 group-hover:rotate-12 transition-transform duration-300" />
            <h1 className="font-fugaz text-2xl md:text-3xl text-white group-hover:text-red-400 transition-colors duration-300">
              JL-Studios
            </h1>
            <StarHalf className="h-8 w-8 text-red-400 rotate-180 group-hover:-rotate-12 transition-transform duration-300" />
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={`#${link.name}`}
                onClick={(e) => handleNavClick(e, link.name)}
                className={`nav-link relative px-3 py-2 text-sm font-medium transition-all duration-300 ${
                  activeSection === link.name
                    ? "text-red-400"
                    : "text-white/80 hover:text-red-400"
                }`}
                style={{ opacity: 1 }}
              >
                {link.title}
                {activeSection === link.name && (
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-red-400 animate-pulse" />
                )}
                <span className="absolute inset-0 bg-red-400/10 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left rounded" />
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-white hover:text-red-400 transition-colors duration-300 p-2"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden absolute top-14 left-0 w-full bg-black/95 backdrop-blur-xl border-b-2 border-white/20 transition-all duration-300 overflow-hidden ${
            isMobileMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="flex flex-col py-4">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={`#${link.name}`}
                onClick={(e) => handleNavClick(e, link.name)}
                className={`px-6 py-3 text-white/80 hover:text-red-400 hover:bg-red-400/10 transition-all duration-300 ${
                  activeSection === link.name
                    ? "text-red-400 bg-red-400/10"
                    : ""
                }`}
              >
                {link.title}
              </a>
            ))}
          </div>
        </div>
      </nav>

      {/* Spacer to prevent content from going under fixed header */}
      <div className="h-14" />
    </>
  );
};

export default Header;
