"use client";
import { useState } from "react";
import { ScrollTrigger } from "gsap/all";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { Mail, Phone, MapPin, Send, Github, Linkedin } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  useGSAP(() => {
    // Animate contact elements on scroll
    gsap.fromTo(
      ".contact-header",
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".contact-header",
          start: "top 85%",
          end: "top 50%",
          toggleActions: "play none none reverse",
          markers: false,
        },
      },
    );

    gsap.fromTo(
      ".contact-card",
      { y: 60, opacity: 0, scale: 0.95 },
      {
        y: 0,
        opacity: 1,
        scale: 1,
        duration: 0.8,
        stagger: 0.1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".contact-cards",
          start: "top 85%",
          end: "top 50%",
          toggleActions: "play none none reverse",
          markers: false,
        },
      },
    );

    gsap.fromTo(
      ".contact-form",
      { x: -50, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".contact-form",
          start: "top 85%",
          end: "top 50%",
          toggleActions: "play none none reverse",
          markers: false,
        },
      },
    );
  }, []);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setFormData({ name: "", email: "", message: "" });
      alert("Thank you for your message! I'll get back to you soon.");
    }, 1000);
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      content: "jontoftdallarsen@icloud.com",
      link: "mailto:jontoftdallarsen@icloud.com",
      color: "hover:text-red-400",
    },
    {
      icon: Phone,
      title: "Phone",
      content: "+86-131-2774-8621",
      link: "tel:+15551234567",
      color: "hover:text-blue-400",
    },
    {
      icon: MapPin,
      title: "Location",
      content: "Remote • Worldwide",
      link: "#",
      color: "hover:text-green-400",
    },
  ];

  const socialLinks = [
    {
      icon: Github,
      name: "GitHub",
      href: "https://github.com/Jonlaarsen",
      color: "hover:text-white",
    },
    {
      icon: Linkedin,
      name: "LinkedIn",
      href: "https://www.linkedin.com/in/jon-larsen-48b928187/",
      color: "hover:text-blue-400",
    },
  ];

  return (
    <section
      id="contact"
      className="contact-wrapper size-full min-h-screen grid-bg border-t-2 border-white/40 py-20 px-8 md:px-20"
      aria-label="Contact Section"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="contact-header text-center mb-12 md:mb-16 px-4">
          <h2 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-fugaz font-bold mb-4 md:mb-6 text-white">
            Get In <span className="text-red-400">Touch</span>
          </h2>
          <p className="text-base md:text-lg lg:text-xl text-white/70 max-w-2xl mx-auto">
            Have a project in mind? Let's collaborate and bring your ideas to
            life. I'm always open to discussing new opportunities.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 md:gap-12">
          {/* Contact Info Cards */}
          <div className="contact-cards lg:col-span-1 space-y-4 md:space-y-6">
            {contactInfo.map((info, index) => {
              const Icon = info.icon;
              return (
                <a
                  key={index}
                  href={info.link}
                  className="contact-card group block bg-gradient-to-br from-black/40 via-zinc-900/40 to-zinc-950/40 backdrop-blur-2xl border-2 border-white/20 rounded-2xl md:rounded-3xl p-6 transition-all duration-500 hover:border-red-400/50 hover:shadow-2xl hover:shadow-red-400/10 hover:-translate-y-1 opacity-100"
                >
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-red-400/10 rounded-xl border border-red-400/20 group-hover:bg-red-400/20 transition-colors duration-300">
                      <Icon className="w-6 h-6 text-red-400" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-white font-semibold mb-1 text-sm md:text-base">
                        {info.title}
                      </h3>
                      <p
                        className={`text-white/70 text-xs md:text-sm ${info.color} transition-colors duration-300`}
                      >
                        {info.content}
                      </p>
                    </div>
                  </div>
                </a>
              );
            })}

            {/* Social Links */}
            <div className="contact-card bg-gradient-to-br from-black/40 via-zinc-900/40 to-zinc-950/40 backdrop-blur-2xl border-2 border-white/20 rounded-2xl md:rounded-3xl p-6 opacity-100">
              <h3 className="text-white font-semibold mb-4 text-sm md:text-base">
                Follow Me
              </h3>
              <div className="flex gap-4">
                {socialLinks.map((social, index) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`p-3 bg-white/5 rounded-xl border border-white/10 ${social.color} transition-all duration-300 hover:bg-white/10 hover:border-red-400/30 group`}
                    >
                      <Icon className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <form
              onSubmit={handleSubmit}
              className="contact-form bg-gradient-to-br from-black/40 via-zinc-900/40 to-zinc-950/40 backdrop-blur-2xl border-2 border-white/20 rounded-2xl md:rounded-3xl p-6 md:p-8 lg:p-10"
            >
              <div className="space-y-6">
                {/* Name Field */}
                <div>
                  <label
                    htmlFor="name"
                    className="block text-white font-medium mb-2 text-sm md:text-base"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-black/30 border border-white/20 rounded-xl text-white placeholder-white/40 focus:outline-none focus:border-red-400/50 focus:ring-2 focus:ring-red-400/20 transition-all duration-300 text-sm md:text-base"
                    placeholder="Your name"
                  />
                </div>

                {/* Email Field */}
                <div>
                  <label
                    htmlFor="email"
                    className="block text-white font-medium mb-2 text-sm md:text-base"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-black/30 border border-white/20 rounded-xl text-white placeholder-white/40 focus:outline-none focus:border-red-400/50 focus:ring-2 focus:ring-red-400/20 transition-all duration-300 text-sm md:text-base"
                    placeholder="your.email@example.com"
                  />
                </div>

                {/* Message Field */}
                <div>
                  <label
                    htmlFor="message"
                    className="block text-white font-medium mb-2 text-sm md:text-base"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 bg-black/30 border border-white/20 rounded-xl text-white placeholder-white/40 focus:outline-none focus:border-red-400/50 focus:ring-2 focus:ring-red-400/20 transition-all duration-300 resize-none text-sm md:text-base"
                    placeholder="Tell me about your project..."
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full md:w-auto px-8 py-3 bg-red-400 hover:bg-red-500 text-white font-semibold rounded-xl transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed hover:shadow-lg hover:shadow-red-400/30 group"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      <span>Sending...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                      <span>Send Message</span>
                    </>
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
