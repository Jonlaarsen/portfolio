"use client";
import { ScrollTrigger } from "gsap/all";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { Baby, BookUser, LeafyGreen, Rocket, Star } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  useGSAP(() => {
    const container = document.querySelector(".about-container");
    const sections = gsap.utils.toArray(".life-stage");

    if (container && sections.length > 0) {
      // Function to calculate and setup scroll
      const setupScroll = () => {
        const startSpacer = container?.querySelector(
          ".start-spacer",
        ) as HTMLElement;
        const endSpacer = container?.querySelector(
          ".end-spacer",
        ) as HTMLElement;

        // Calculate total width
        let totalWidth = 0;

        if (startSpacer) {
          totalWidth += startSpacer.offsetWidth || window.innerWidth * 0.2;
        }

        sections.forEach((section: any, index: number) => {
          totalWidth += section.offsetWidth || 500;
          if (index < sections.length - 1) {
            totalWidth += 80; // gap
          }
        });

        if (endSpacer) {
          totalWidth += endSpacer.offsetWidth || window.innerWidth * 0.2;
        }

        const scrollDistance = totalWidth - window.innerWidth;

        // Set container width
        gsap.set(container, { width: totalWidth });

        // Create horizontal scroll animation
        const horizontalScroll = gsap.timeline({
          scrollTrigger: {
            trigger: ".about-wrapper",
            start: "top top",
            end: () => `+=${scrollDistance}`,
            pin: true,
            scrub: 1,
            markers: false,
          },
        });

        horizontalScroll.to(container, {
          x: -scrollDistance,
          ease: "none",
        });

        return horizontalScroll;
      };

      // Wait for layout then setup
      setTimeout(() => {
        setupScroll();
      }, 100);

      // Animate each stage as it enters viewport
      sections.forEach((stage: any, index: number) => {
        gsap.set(stage, {
          x: 100,
          opacity: 0,
          scale: 0.9,
        });

        gsap.to(stage, {
          x: 0,
          opacity: 1,
          scale: 1,
          duration: 0.6,
          ease: "power2.out",
          scrollTrigger: {
            trigger: stage,
            start: "left 75%",
            end: "left 25%",
            toggleActions: "play none none reverse",
            markers: false,
          },
        });
      });
    }
  }, []);

  const lifeStages = [
    {
      title: "Early Years",
      year: "2012-2016",
      description:
        "Growing up with a passion for creativity and technology. Building my first websites, creating fashion designs and discovering the world of digital design.",
      icon: <Baby className="h-15 w-15" />,
    },
    {
      title: "Education",
      year: "2022-2025",
      description:
        "Pursuing formal education in AI, frontend development and design. Learning the fundamentals of programming, UI/UX design, and web development.",
      icon: <BookUser className="h-15 w-15" />,
    },
    {
      title: "First Steps",
      year: "2022-2024",
      description:
        "Starting my professional journey. Working on freelance projects, building real-world applications, and refining my skills in modern web technologies and AI.",
      icon: <Rocket className="h-15 w-15" />,
    },
    {
      title: "Growth",
      year: "2024-currently",
      description:
        "Expanding expertise in React, Next.js, AI, and full-stack development. Collaborating with teams, leading projects, and delivering impactful solutions.",
      icon: <LeafyGreen className="h-15 w-15" />,
    },
    {
      title: "Today",
      year: "2025-currently",
      description:
        "Creating innovative web experiences and continuously learning. Focused on building scalable, beautiful, and user-centric applications.",
      icon: <Star className="h-15 w-15" />,
    },
  ];

  return (
    <section
      id="about"
      className="about-wrapper size-full min-h-screen noisy border-t-2 border-white/40 overflow-hidden"
      aria-label="About Section"
    >
      <div className="about-container flex h-screen items-center gap-8 md:gap-12 lg:gap-20">
        {/* Spacer at the start */}
        <div className="start-spacer shrink-0 w-[10vw] sm:w-[20vw]" />
        {lifeStages.map((stage, index) => (
          <div
            key={index}
            className="life-stage shrink-0 w-[85vw] sm:w-125 h-auto min-h-125 sm:h-150 bg-gradient-to-br from-black/40 via-zinc-900/40 to-zinc-950/40 backdrop-blur-2xl border-2 border-white/20 rounded-3xl p-6 md:p-8 lg:p-10 flex flex-col justify-between relative overflow-hidden group"
          >
            {/* Background decoration */}
            <div className="absolute inset-0 bg-gradient-to-br from-red-400/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            {/* Content */}
            <div className="relative z-10">
              <div className="text-6xl md:text-8xl mb-4 md:mb-6">
                {stage.icon}
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-fugaz font-bold mb-3 md:mb-4 text-white">
                {stage.title}
              </h2>
              <p className="text-red-400 text-lg md:text-xl font-semibold mb-4 md:mb-6">
                {stage.year}
              </p>
            </div>

            <p className="text-base md:text-lg text-white/80 leading-relaxed relative z-10">
              {stage.description}
            </p>

            {/* Decorative line */}
            <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-red-400/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          </div>
        ))}
        {/* Spacer at the end */}
        <div className="end-spacer shrink-0 w-[10vw] sm:w-[20vw]" />
      </div>
    </section>
  );
};

export default About;
