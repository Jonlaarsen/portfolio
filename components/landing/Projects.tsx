"use client";
import { ScrollTrigger } from "gsap/all";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ExternalLink } from "lucide-react";
import { Work } from "../../constants/index";

gsap.registerPlugin(ScrollTrigger);

const Projects = () => {
  useGSAP(() => {
    // Animate project cards on scroll
    const cards = gsap.utils.toArray(".project-card");

    cards.forEach((card: any, index: number) => {
      gsap.from(card, {
        y: 80,
        opacity: 0,
        scale: 0.9,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: card,
          start: "top 85%",
          end: "top 50%",
          toggleActions: "play none none reverse",
          markers: false,
        },
      });
    });
  }, []);

  // Transform Work data to match component structure
  const projects = Work.map((work, index) => ({
    id: work.id,
    title: work.title,
    description: work.desc,
    image: work.image,
    tech: work.details.split(", "),
    link: work.link || "#",
    featured: index < 3, // Mark first 3 as featured
  }));

  // Generate structured data for projects
  const projectsStructuredData = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: projects.map((project, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: {
        "@type": "CreativeWork",
        name: project.title,
        description: project.description,
        url: project.link !== "#" ? project.link : undefined,
        keywords: project.tech.join(", "),
      },
    })),
  };

  return (
    <section
      id="portfolio"
      className="projects-wrapper size-full grid-bg min-h-screen noisy border-t-2 border-white/40 py-20 px-8 md:px-20"
      aria-label="Portfolio Projects"
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(projectsStructuredData),
        }}
      />
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <header className="text-center mb-12 md:mb-16 pt-20 md:pt-25 px-4">
          <h2 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-fugaz font-bold mb-4 md:mb-6 text-white">
            Featured <span className="text-red-400">Projects</span>
          </h2>
          <p className="text-base md:text-lg lg:text-xl text-white/70 max-w-2xl mx-auto">
            A collection of projects showcasing my skills in web development,
            design, and innovation
          </p>
        </header>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 px-4 md:px-0">
          {projects.map((project) => (
            <div
              key={project.id}
              className="project-card group relative bg-linear-to-br from-black/40 via-zinc-900/40 to-zinc-950/40 backdrop-blur-2xl border-2 border-white/20 rounded-3xl overflow-hidden cursor-pointer transition-all duration-500 hover:border-red-400/50 hover:shadow-2xl hover:shadow-red-400/20"
            >
              {/* Hover gradient overlay */}
              <div className="absolute inset-0 bg-linear-to-br from-red-400/0 via-red-400/0 to-red-400/0 group-hover:from-red-400/10 group-hover:via-red-400/5 group-hover:to-transparent transition-all duration-500 z-0" />

              {/* Image Section */}
              <div className="relative h-40 md:h-48 bg-linear-to-br from-zinc-800/50 to-zinc-900/50 flex items-center justify-center overflow-hidden">
                {project.image ? (
                  <img
                    src={project.image}
                    alt={`${project.title} - ${project.description.substring(0, 100)}...`}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                    loading="lazy"
                  />
                ) : (
                  <div
                    className="text-6xl md:text-8xl transform group-hover:scale-125 group-hover:rotate-6 transition-transform duration-500"
                    aria-hidden="true"
                  >
                    🎨
                  </div>
                )}
                {/* Shine effect on hover */}
                <div className="absolute inset-0 bg-linear-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 pointer-events-none" />
              </div>

              {/* Content */}
              <div className="p-4 md:p-6 relative z-10">
                <div className="flex items-start justify-between mb-3 md:mb-4 gap-2">
                  <h3 className="text-xl md:text-2xl font-fugaz font-bold text-white group-hover:text-red-400 transition-colors duration-300 flex-1">
                    {project.title}
                  </h3>
                  {project.featured && (
                    <span className="px-2 md:px-3 py-1 bg-red-400/20 text-red-400 text-xs font-semibold rounded-full border border-red-400/30 shrink-0">
                      Featured
                    </span>
                  )}
                </div>

                <p className="text-white/70 text-xs md:text-sm leading-relaxed mb-4 md:mb-6 line-clamp-3">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-4 md:mb-6">
                  {project.tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-2 md:px-3 py-1  bg-white/5 text-white/60 text-xs rounded-lg border border-white/10 group-hover:bg-red-400/10 group-hover:text-red-400 group-hover:border-red-400/30 transition-all duration-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex items-center gap-2 md:gap-4">
                  {project.link && project.link !== "#" && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 md:gap-2 px-3 md:px-4 py-2 bg-white/5 text-white/70 rounded-lg border border-white/10 hover:bg-red-400 hover:text-white hover:border-red-400 transition-all duration-300 group/link text-xs md:text-sm"
                    >
                      <ExternalLink className="w-3 h-3 md:w-4 md:h-4 group-hover/link:translate-x-1 transition-transform" />
                      <span className="font-medium">Live</span>
                    </a>
                  )}
                </div>
              </div>

              {/* Decorative corner accent */}
              <div className="absolute top-0 right-0 w-20 h-20 bg-linear-to-br from-red-400/0 to-transparent group-hover:from-red-400/20 transition-all duration-500" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
