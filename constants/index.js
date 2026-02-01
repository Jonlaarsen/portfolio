import {
  SiJavascript,
  SiNextdotjs,
  SiPython,
  SiReact,
  SiTypescript,
} from "react-icons/si";

export const Skills = [
  { id: 1, name: "React", logo: <SiReact /> },
  { id: 2, name: "NextJS", logo: <SiNextdotjs /> },
  { id: 3, name: "JavaScript", logo: <SiJavascript /> },
  { id: 4, name: "TypeScript", logo: <SiTypescript /> },
  { id: 5, name: "Python", logo: <SiPython /> },
];

export const navLinks = [
  { id: 1, name: "about", title: "About me" },
  { id: 2, name: "portfolio", title: "See my work" },
  { id: 3, name: "contact", title: "Contact me" },
];

export const Work = [
  {
    id: 1,
    title: "Haiven",
    desc: "A cutting-edge AI-powered platform for generating high-quality images and videos using custom-trained machine learning models. Built for artists, designers, and content creators, Haiven offers advanced style transfer, real-time generation capabilities, and an intuitive interface. The platform integrates seamlessly with Replicate AI's API for powerful model inference, features user authentication and project management via Supabase, and delivers a responsive, modern UI with smooth animations and optimized performance.",
    link: "https://aitopia-brown.vercel.app/",
    image: "/images/haiven.png",
    details: "Next.js 14, TypeScript, Replicate AI, Supabase, Tailwind CSS, Server Actions, React Hook Form",
  },
  // {
  //   id: 2,
  //   title: "Jon's Designs",
  //   desc: "A stunning personal design portfolio that showcases creative work through an immersive, minimalist interface. The site features interactive galleries, smooth scroll animations, and dynamic layouts that bring design projects to life. Built with modern web technologies, it demonstrates expertise in both frontend development and visual design, with carefully crafted typography, color schemes, and user interactions that create an engaging browsing experience.",
  //   image: "/images/jondesign.png",
  //   details: "Next.js, React, TypeScript, Tailwind CSS, Framer Motion, GSAP, Procreate, Figma",
  // },

  {
    id: 3,
    title: "Tommy Choi Visuals",
    desc: "A professional media portfolio website designed to showcase creative video and photography work with elegance and impact. The platform features a sophisticated content management system, dynamic project galleries with filtering and search capabilities, and seamless video playback integration. Built with performance in mind, it includes optimized image loading, smooth page transitions, and a fully responsive design that works flawlessly across all devices. The site leverages AWS for media storage and Neon Database for efficient data management.",
    link: "https://www.tommychoivisuals.com/",
    image: "/images/tommycvs.png",
    details: "Next.js 14, TypeScript, Neon PostgreSQL, AWS S3, Tailwind CSS, Server Components, Image Optimization",
  },
  {
    id: 4,
    title: "Posted Productions",
    desc: "A high-performance portfolio website for a leading media production company, featuring dynamic content management, interactive project showcases, and seamless client collaboration tools. The platform includes advanced filtering systems, real-time content updates, and integrated contact forms with automated email notifications. Built with modern architecture principles, it delivers exceptional loading speeds, SEO optimization, and a polished user experience that reflects the company's creative excellence. Deployed on Vercel with Google Cloud integration for scalable infrastructure.",
    link: "https://postedproductions.vercel.app/",
    image: "/images/posted2.png",
    details: "Next.js 14, TypeScript, Neon Database, Google CS, Vercel, Tailwind CSS, Server Actions, Email API",
  },

  {
    id: 5,
    title: "Dashi Website",
    desc: "An immersive restaurant website that beautifully blends Vietnamese and Japanese culinary traditions through thoughtful design and storytelling. The site features an elegant menu presentation with interactive elements, cultural narrative sections, and stunning food photography galleries. Built with attention to detail, it includes online reservation systems, location integration, and a mobile-first responsive design that ensures an exceptional dining experience discovery. The platform showcases modern web development practices while honoring traditional culinary heritage.",
    link: "https://dashifinalv2.vercel.app/",
    image: "/images/dashi-site.png",
    details: "Next.js, React, TypeScript, Tailwind CSS, Framer Motion, Google Maps API, Responsive Design",
  },
  {
    id: 6,
    title: "InternConnect (internship)",
    desc: "A comprehensive internship matching platform that connects talented students with innovative companies. The platform features advanced job search and filtering capabilities, user profile management, application tracking systems, and real-time notifications. Built with Material-UI for a polished, professional interface, it includes secure authentication, role-based access control, and analytics dashboards. The platform optimizes the internship discovery process with intelligent matching algorithms and provides both students and employers with powerful tools for successful connections.",
    link: "https://internconnect.se/",
    image: "/images/internconnect.png",
    details: "Next.js, TypeScript, Material-UI (MUI), PostgreSQL, Authentication, Server Actions, Email Integration",
  },
  {
    id: 7,
    title: "Xedrix (internship)",
    desc: "A comprehensive educational platform and course management system designed to streamline student learning experiences and administrative workflows. Built on WordPress with a fully integrated CRM system, Xedrix provides course enrollment management, student progress tracking, payment processing, and automated communication tools. The platform features an intuitive dashboard for both students and administrators, responsive design for mobile and desktop access, and robust content management capabilities. The CRM integration enables seamless student relationship management, automated email campaigns, and detailed analytics for course performance and student engagement.",
    link: "https://www.xedrix.se/",
    image: "/images/xedrix.png",
    details: "WordPress, PHP, MySQL, Custom CRM Integration, Elementor, REST API, Email Automation",
  },
];

//  "React",
//   "TypeScript",
//   "JavaScrip",
//   "Html",
//   "Css",
//   "Next.js",
//   "Tailwind CSS",
//   "python",
//   "And more...",
