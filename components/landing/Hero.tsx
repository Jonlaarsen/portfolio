"use client";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger, SplitText } from "gsap/all";
import gsap from "gsap";
import { useMediaQuery } from "react-responsive";
import { ArrowBigDown } from "lucide-react";

gsap.registerPlugin(ScrollTrigger, SplitText);

const Hero = () => {
  const isMobile = useMediaQuery({ maxWidth: 767 });

  useGSAP(() => {
    const heroSplit = new SplitText("#title", { type: "chars, words" });
    const paraSplit = new SplitText(".subtitle", { type: "lines" });

    heroSplit.chars.forEach((char) => char.classList.add("text-gradient"));
    gsap.from(heroSplit.chars, {
      yPercent: 100,
      duration: 1.8,
      ease: "expo.out",
      stagger: 0.1,
    });

    gsap.from(paraSplit.lines, {
      opacity: 0,
      yPercent: 100,
      duration: 1.8,
      ease: "expo.out",
      stagger: 0.1,
      delay: 1,
    });

    // gsap.from(".right-icon", {
    //   opacity: 0,
    //   duration: 1,
    //   delay: 1.8,
    //   yPercent: 100,
    // });
    // gsap.from(".left-icon", {
    //   opacity: 0,
    //   duration: 1,
    //   delay: 1.8,
    //   yPercent: -100,
    // });
    // gsap
    //   .timeline({
    //     scrollTrigger: {
    //       trigger: "#hero",
    //       start: "top top",
    //       end: "bottom top",
    //       scrub: true,
    //     },
    //   })
    //   .to(".right-icon", { y: 200, scale: 0.5, opacity: 0 }, 0)
    //   .to(".left-icon", { y: -200, scale: 0.5, opacity: 0 }, 0);
  }, []);

  return (
    <div className="h-[80vh] md:h-screen overflow-hidden border-b-2 border-white">
      <section
        id="hero"
        className="overflow-hidden absolute max-h-[80vh] md:max-h-screen size-full"
        aria-label="Hero Section"
      >
        <div className="absolute inset-0 size-full bg-[url('/noise.png')] opacity-100" />
        <h1
          id="title"
          className="md:mt-62 mt-40 text-6xl md:text-[13vw] overflow-y-hidden leading-none text-center font-fugaz "
        >
          JL-Studios
        </h1>
        <img
          src="/Motiv 9.png"
          alt="Jon Larsen - Professional Web Developer and Designer"
          className="hidden md:block absolute  bottom-0 top-18 left-1/2 md:left-2/3 -translate-x-1/2 md:translate-x-0 z-[-1] w-auto  h-250 object-contain grayscale contrast-200 opacity-100"
        />
        {/* <SiReact className="left-icon absolute left-5 top-64 h-35 w-35 " />

        <SiNextdotjs className="right-icon absolute right-5 top-64 h-35 w-35 " /> */}

        <div className="container mx-auto absolute left-1/2 -translate-x-1/2 bottom-40 md:bottom-20 top-auto md:top-[30vh] flex justify-between items-end px-4 md:px-5">
          <div className="flex lg:flex-row flex-col w-full gap-6 md:gap-10 justify-between items-center lg:items-end mx-auto">
            <div className="space-y-3 md:space-y-5 text-center md:text-left">
              <p className="font-felipa text-sm md:text-base">
                Modern, Intuitiv, Responsive
              </p>
              <p className="subtitle text-xl md:text-3xl font-bold text-red-400 font-bungee">
                Create professional websites <br className="hidden md:block" />
                with Jon Larsen
              </p>
            </div>
            <div className="space-y-3 md:space-y-5 text-sm md:text-lg lg:max-w-2xs md:max-w-xs w-full text-center md:text-left">
              <p className="subtitle text-xs md:text-sm">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia
                dolor saepe sint rerum, odio accusamus culpa molestias beatae!
              </p>
              <a
                className="flex items-center justify-center gap-1 uppercase leading-tight font-light text-xs md:text-sm"
                href="#down"
              >
                <p>scroll down</p>
                <ArrowBigDown
                  strokeWidth={1}
                  className="h-6 md:h-8 w-fit animate-bounce"
                />
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
