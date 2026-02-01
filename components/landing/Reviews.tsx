"use client";
import { ScrollTrigger } from "gsap/all";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { Star, Quote } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const Reviews = () => {
  useGSAP(() => {
    // Animate review cards on scroll
    const cards = gsap.utils.toArray(".review-card");

    cards.forEach((card: any, index: number) => {
      gsap.from(card, {
        y: 60,
        opacity: 0,
        scale: 0.95,
        duration: 0.8,
        ease: "power3.out",
        delay: index * 0.1,
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

  const reviews = [
    {
      name: "Alex Rivera",
      role: "Founder & CEO",
      company: "Haiven",
      image: "👨‍💻",
      rating: 5,
      review:
        "Working with JL-Studios on Haiven was exceptional. They built an AI-powered platform that perfectly captures our vision for artists and creators. The integration with Replicate AI and Supabase is seamless, and the user experience is intuitive and beautiful. The attention to detail in both design and functionality exceeded our expectations.",
      project: "Haiven",
    },
    {
      name: "Tommy Choi",
      role: "Creative Director",
      company: "Tommy Choi Visuals",
      image: "👨‍🎨",
      rating: 5,
      review:
        "JL-Studios created an outstanding media portfolio that showcases our work beautifully. The dynamic galleries, smooth animations, and optimized performance make it a joy to use. The site has become an essential tool for client presentations and has significantly improved our workflow. Highly professional and creative team!",
      project: "Tommy Choi Visuals",
    },
    {
      name: "Sarah Martinez",
      role: "Director",
      company: "Posted Productions",
      image: "👩‍💼",
      rating: 5,
      review:
        "The portfolio website JL-Studios built for Posted Productions is outstanding. It perfectly reflects our brand's creative excellence with its modern design and smooth user experience. The content management system is intuitive, and the site's performance is exceptional. Our clients are consistently impressed, and it has become a powerful tool for showcasing our work.",
      project: "Posted Productions",
    },
  ];

  return (
    <section
      className="reviews-wrapper size-full min-h-screen noisy border-t-2 border-white/40 py-20 px-8 md:px-20"
      aria-label="Client Reviews"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16 px-4">
          <h2 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-fugaz font-bold mb-4 md:mb-6 text-white">
            Client <span className="text-red-400">Reviews</span>
          </h2>
          <p className="text-base md:text-lg lg:text-xl text-white/70 max-w-2xl mx-auto">
            What our partners and clients say about working with us
          </p>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 px-4 md:px-0 max-w-6xl mx-auto">
          {reviews.map((review, index) => (
            <div
              key={index}
              className="review-card group relative bg-linear-to-br from-black/40 via-zinc-900/40 to-zinc-950/40 backdrop-blur-2xl border-2 border-white/20 rounded-2xl md:rounded-3xl p-4 md:p-6 flex flex-col h-full transition-all duration-500 hover:border-red-400/50 hover:shadow-2xl hover:shadow-red-400/10 hover:-translate-y-1 md:hover:-translate-y-2"
            >
              {/* Hover gradient overlay */}
              <div className="absolute inset-0 bg-linear-to-br from-red-400/0 via-red-400/0 to-red-400/0 group-hover:from-red-400/5 group-hover:via-red-400/3 group-hover:to-transparent transition-all duration-500 rounded-3xl" />

              {/* Quote Icon */}
              <div className="relative z-10 mb-3 md:mb-4">
                <Quote className="w-6 h-6 md:w-8 md:h-8 text-red-400/30 group-hover:text-red-400/50 transition-colors duration-300" />
              </div>

              {/* Review Text */}
              <p className="text-white/80 text-xs md:text-sm leading-relaxed mb-4 md:mb-6 relative z-10 grow">
                "{review.review}"
              </p>

              {/* Rating Stars */}
              <div className="flex items-center gap-1 mb-4 md:mb-6 relative z-10">
                {[...Array(review.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-3 h-3 md:w-4 md:h-4 fill-red-400 text-red-400"
                  />
                ))}
              </div>

              {/* Project Badge */}
              <div className="mb-3 md:mb-4 relative z-10">
                <span className="inline-block px-2 md:px-3 py-1 bg-red-400/10 text-red-400 text-xs font-semibold rounded-full border border-red-400/20">
                  {review.project}
                </span>
              </div>

              {/* Author Info */}
              <div className="flex items-center gap-3 md:gap-4 relative z-10 pt-3 md:pt-4 border-t border-white/10">
                <div className="text-3xl md:text-4xl">{review.image}</div>
                <div className="flex-1 min-w-0">
                  <h4 className="text-white font-semibold text-xs md:text-sm truncate">
                    {review.name}
                  </h4>
                  <p className="text-white/60 text-xs truncate">
                    {review.role} • {review.company}
                  </p>
                </div>
              </div>

              {/* Decorative corner accent */}
              <div className="absolute top-0 right-0 w-16 h-16 bg-linear-to-br from-red-400/0 to-transparent group-hover:from-red-400/10 transition-all duration-500 rounded-tl-3xl rounded-br-3xl" />
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-12 md:mt-20 grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 px-4 md:px-0">
          {[
            { number: "Many", label: "Happy Clients" },
            { number: "20+", label: "Projects Completed" },
            { number: "100%", label: "Satisfaction Rate" },
            { number: "5★", label: "Average Rating" },
          ].map((stat, index) => (
            <div
              key={index}
              className="text-center p-4 md:p-6 bg-linear-to-br from-black/30 via-zinc-900/30 to-zinc-950/30 backdrop-blur-xl border border-white/10 rounded-xl md:rounded-2xl hover:border-red-400/30 transition-all duration-300"
            >
              <div className="text-2xl md:text-4xl lg:text-5xl font-fugaz font-bold text-red-400 mb-1 md:mb-2">
                {stat.number}
              </div>
              <div className="text-white/70 text-xs md:text-sm">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reviews;
