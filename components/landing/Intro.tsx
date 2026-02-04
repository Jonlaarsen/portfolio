"use client";
import { ScrollTrigger, SplitText } from "gsap/all";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger, SplitText);

const Intro = () => {
  useGSAP(() => {
    gsap.from(".left-title", {
      yPercent: 100,
      opacity: 0,
      scale: 0.5,
      delay: 0.2,
    });

    // Set initial states for fact-text divs
    gsap.set(".fact-text", {
      opacity: 0,
      y: 50,
      scale: 0.9,
    });

    // Set initial states for connection balls
    gsap.set(".connection-ball", {
      opacity: 0,
      scale: 0,
    });

    // Set initial states
    gsap.set(".text-one", {
      opacity: 1,
      scale: 1,
      rotation: 0,
      y: 0,
      filter: "blur(0px)",
    });
    gsap.set(".text-two", {
      opacity: 0,
      scale: 0.3,
      rotation: -90,
      y: 100,
      filter: "blur(10px)",
    });
    gsap.set(".text-third", {
      opacity: 0,
      scale: 0.3,
      rotation: -90,
      y: 100,
      filter: "blur(10px)",
    });
    // Scroll-triggered transformation from "hello" to "hi"
    gsap
      .timeline({
        scrollTrigger: {
          trigger: ".grid",
          start: "top top",
          end: "bottom bottom", // 1/3 of viewport height
          scrub: 1, // Smooth scrubbing
          markers: false, // Set to true for debugging
        },
      })
      .to(
        ".text-one",
        {
          opacity: 0,
          scale: 0.2,
          rotation: 90,
          y: -150,
          filter: "blur(15px)",
          ease: "power2.in",
        },
        0,
      )
      .to(
        ".text-two",
        {
          opacity: 1,
          scale: 1,
          rotation: 0,
          y: 0,
          filter: "blur(0px)",
          ease: "back.out(1.2)",
        },
        0.3, // Start slightly after "hello" begins fading
      )
      .to(
        ".text-two",
        {
          opacity: 0,
          scale: 0.2,
          rotation: 90,
          y: -150,
          filter: "blur(15px)",
          ease: "power2.in",
        },
        0.7, // Start fading out "hi" slightly before "nihao" appears
      )
      .to(
        ".text-third",
        {
          opacity: 1,
          scale: 1,
          rotation: 0,
          y: 0,
          filter: "blur(0px)",
          ease: "back.out(1.2)",
        },
        0.9, // "nihao" fades in as "hi" fades out
      );
    // Animate connecting line on scroll
    const line = document.getElementById("connecting-line");
    if (line) {
      // Set initial state - line is clipped at top
      gsap.set(line, {
        opacity: 0.5,
        clipPath: "inset(0 0 100% 0)",
      });
      // Animate line revealing on scroll
      gsap.to(line, {
        clipPath: "inset(0 0 0% 0)",
        opacity: 1,
        scrollTrigger: {
          trigger: ".right-container",
          start: "top 40%",
          end: "bottom 20%",
          scrub: 1,
          markers: false,
        },
      });
    }

    // Animate balls appearing at connection points between cards
    const balls = document.querySelectorAll(".connection-ball");
    const factCards = document.querySelectorAll(".fact-text");

    // Ball 1: appears between card 1 and card 2 (triggered by card 2 entering)
    if (balls[0] && factCards[1]) {
      gsap.to(balls[0], {
        opacity: 1,
        scale: 1,
        duration: 0.5,
        ease: "back.out(1.5)",
        scrollTrigger: {
          trigger: factCards[1],
          start: "top 80%",
          end: "top 60%",
          toggleActions: "play none none reverse",
          markers: false,
        },
      });
    }

    // Ball 2: appears between card 2 and card 3 (triggered by card 3 entering)
    if (balls[1] && factCards[2]) {
      gsap.to(balls[1], {
        opacity: 1,
        scale: 1,
        duration: 0.5,
        ease: "back.out(1.5)",
        scrollTrigger: {
          trigger: factCards[2],
          start: "top 80%",
          end: "top 60%",
          toggleActions: "play none none reverse",
          markers: false,
        },
      });
    }

    // Animate each fact-text div when it enters the viewport
    gsap.utils.toArray(".fact-text").forEach((element: any, index: number) => {
      gsap.to(element, {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.3,
        ease: "power2.out",
        scrollTrigger: {
          trigger: element,
          start: "top 50%", // Start animation when element is 80% down the viewport
          end: "top 60%",
          toggleActions: "play none none reverse", // Play on enter, reverse on leave
          markers: false, // Set to true for debugging
        },
      });
    });
  }, []);
  return (
    <div className="size-full h-[120vh] md:min-h-[300vh] grid grid-cols-1 lg:grid-cols-2 noisy grid-bg">
      <div className="left-container hidden md:block relative col-span-1 h-full w-full  ">
        <div className="left-title left-0 top-0 sticky w-full h-screen flex text-start flex-col items-start justify-center px-4 md:px-0">
          <div className="relative -mt-20 md:-mt-50 ml-4 md:ml-20 font-fugaz">
            <h1 className="text-one absolute inset-0 text-9xl lg:text-[10rem]">
              Design
            </h1>
            <h1 className="text-two absolute inset-0 text-9xl xl:text-[10rem]">
              Coding
            </h1>
            <h1 className="text-third absolute inset-0 text-9xl xl:text-[10rem]">
              Connect
            </h1>
          </div>
        </div>
      </div>
      <div className="right-container h-full w-full md:col-span-1 flex flex-col justify-evenly items-center relative px-4 md:px-0">
        {/* Animated connecting line with balls - hidden on mobile */}
        <div
          id="connecting-line"
          className="hidden lg:block connector-line absolute left-1/2 -translate-x-1/2 top-[10%] bottom-[25%] w-0.5 pointer-events-none z-0 bg-linear-to-b from-red-400/60 via-red-400 to-red-400/60 opacity-50"
          style={{
            clipPath: "inset(0 0 100% 0)",
          }}
        />

        {/* Balls at connection points between cards - hidden on mobile */}
        <div className="hidden lg:block connection-ball ball-1 absolute left-1/2 -translate-x-1/2 top-[33%] w-4 h-4 rounded-full bg-red-400 opacity-0 z-10" />
        <div className="hidden lg:block connection-ball ball-2 absolute left-1/2 -translate-x-1/2 top-[67%] w-4 h-4 rounded-full bg-red-400 opacity-0 z-10" />

        <div className="h-[60] md:min-h-[80vh] flex items-center justify-center relative z-20 py-8 ">
          <div className="fact-text bg-linear-to-bl from-black/20 backdrop-blur-2xl via-zinc-900/20 rounded-[10%] to-zinc-950/20 border-2 text-start border-white/50 p-6 md:p-8 lg:px-4 lg:py-0 text-white bg-blend-color-burn w-full max-w-md lg:h-120 lg:w-120 flex flex-col items-start justify-center">
            <h1 className="text-3xl md:text-4xl lg:text-6xl font-fugaz font-bold pb-4 md:pb-5">
              UI/UX <span className="text-red-400">Design</span>
            </h1>
            <p className="text-sm md:text-base lg:text-lg leading-relaxed">
              Crafting intuitive and beautiful user experiences that blend form
              with function. I design interfaces that are not just visually
              appealing, but also accessible, responsive, and optimized for
              seamless user journeys across all devices.
            </p>
          </div>
        </div>
        <div className="h-[60] md:min-h-[80vh] flex items-center justify-center relative z-20 py-8 ">
          <div className="fact-text bg-linear-to-bl from-black/20 backdrop-blur-2xl via-zinc-900/20 rounded-[10%] to-zinc-950/20 border-2 text-start border-white/50 p-6 md:p-8 lg:px-4 lg:py-0 text-white bg-blend-color-burn w-full max-w-md lg:h-120 lg:w-120 flex flex-col items-start justify-center">
            <h1 className="text-3xl md:text-4xl lg:text-6xl font-fugaz font-bold pb-4 md:pb-5">
              Full-Stack <span className="text-red-400">Development</span>
            </h1>
            <p className="text-sm md:text-base lg:text-lg leading-relaxed">
              Building robust, scalable applications from the ground up.{" "}
              <br className="hidden md:block" />I develop custom solutions using
              modern frameworks and best practices, ensuring clean code, optimal
              performance, and seamless integration between frontend and backend
              systems.
            </p>
          </div>
        </div>
        <div className="h-[60] md:min-h-[80vh] flex items-center justify-center relative z-20 py-8 ">
          <div className="fact-text bg-linear-to-bl from-black/20 backdrop-blur-2xl via-zinc-900/20 rounded-[10%] to-zinc-950/20 border-2 text-start border-white/50 p-6 md:p-8 lg:px-4 lg:py-0 text-white bg-blend-color-burn w-full max-w-md lg:h-120 lg:w-120 flex flex-col items-start justify-center">
            <h1 className="text-3xl md:text-4xl lg:text-6xl font-fugaz font-bold pb-4 md:pb-5">
              Frontend <span className="text-red-400">Development</span>
            </h1>
            <p className="text-sm md:text-base lg:text-lg leading-relaxed">
              Transforming designs into pixel-perfect, interactive web
              experiences. I specialize in React, Next.js, and modern CSS
              techniques to create fast, responsive, and engaging user
              interfaces that bring your vision to life.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Intro;
