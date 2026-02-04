"use client";
import { Github, Linkedin, Mail, ExternalLink } from "lucide-react";
import { navLinks } from "../constants/index";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      name: "GitHub",
      icon: Github,
      href: "https://github.com/Jonlaarsen",
      color: "hover:text-white",
    },
    {
      name: "LinkedIn",
      icon: Linkedin,
      href: "https://www.linkedin.com/in/jon-larsen-48b928187/",
      color: "hover:text-blue-400",
    },
    {
      name: "Email",
      icon: Mail,
      href: "mailto:jontoftdallarsen@icloud.com",
      color: "hover:text-red-400",
    },
  ];

  return (
    <footer className="relative w-full border-t-2 border-white/40 bg-black/40 backdrop-blur-xl">
      {/* Decorative gradient overlay */}
      <div className="absolute inset-0 bg-linear-to-t from-red-400/5 to-transparent pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-8 lg:px-20 py-8 md:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-6 md:mb-8">
          {/* Brand Section */}
          <div className="space-y-3 md:space-y-4">
            <h3 className="text-xl md:text-2xl font-fugaz font-bold text-white mb-3 md:mb-4">
              JL-Studios
            </h3>
            <p className="text-white/70 text-xs md:text-sm leading-relaxed">
              Creating innovative web experiences and bringing digital visions
              to life through code and design.
            </p>
          </div>

          {/* Navigation Links */}
          <div className="space-y-3 md:space-y-4">
            <h4 className="text-base md:text-lg font-semibold text-white mb-3 md:mb-4">
              Navigation
            </h4>
            <ul className="space-y-2 md:space-y-3">
              {navLinks.map((link) => (
                <li key={link.id}>
                  <a
                    href={`#${link.name}`}
                    className="text-white/70 hover:text-red-400 transition-colors duration-300 text-xs md:text-sm flex items-center gap-2 group"
                  >
                    <span>{link.title}</span>
                    <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Links */}
          <div className="space-y-3 md:space-y-4 sm:col-span-2 lg:col-span-1">
            <h4 className="text-base md:text-lg font-semibold text-white mb-3 md:mb-4">
              Connect
            </h4>
            <div className="flex flex-row sm:flex-col space-x-4 sm:space-x-0 sm:space-y-3">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`text-white/70 ${social.color} transition-all duration-300 text-xs md:text-sm flex items-center gap-2 md:gap-3 group`}
                  >
                    <Icon className="w-4 h-4 md:w-5 md:h-5 group-hover:scale-110 transition-transform duration-300" />
                    <span>{social.name}</span>
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-6 md:pt-8 flex flex-col md:flex-row items-center justify-center md:justify-between gap-3 md:gap-4 text-center md:text-left">
          <p className="text-white/50 text-xs md:text-sm">
            © {currentYear} JL-Studios. All rights reserved.
          </p>
          <div className="flex items-center gap-2 text-white/50 text-xs md:text-sm">
            <span>Built with</span>
            <span className="text-red-400">❤️</span>
            <span>using Next.js & GSAP</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
