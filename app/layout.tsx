import type { Metadata } from "next";
import { Fira_Sans_Condensed, Fugaz_One } from "next/font/google";
import "./globals.css";
import Header from "@/components/nav/Header";
import Chatbot from "@/components/Chatbot";
import { ScrollTrigger, SplitText } from "gsap/all";
import gsap from "gsap";

gsap.registerPlugin(ScrollTrigger, SplitText);

const fugazOne = Fugaz_One({
  variable: "--font-fugaz-one",
  subsets: ["latin"],
  weight: "400",
});

const firaSans = Fira_Sans_Condensed({
  variable: "--font-fira",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: {
    default: "JL-Studios | Web Developer & Designer Portfolio",
    template: "%s | JL-Studios",
  },
  description:
    "Professional web developer and designer specializing in Next.js, React, and modern web technologies. Creating innovative, responsive, and high-performance websites and applications. View my portfolio of projects including AI platforms, media portfolios, and enterprise solutions.",
  keywords: [
    "web developer",
    "frontend developer",
    "Next.js developer",
    "React developer",
    "web designer",
    "UI/UX designer",
    "full-stack developer",
    "TypeScript",
    "portfolio",
    "web development",
    "custom websites",
    "responsive design",
  ],
  authors: [{ name: "Jon Larsen", url: "https://jl-studios.com" }],
  creator: "Jon Larsen",
  publisher: "JL-Studios",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://jl-studios.com"),
  alternates: {
    canonical: "/",
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 5,
  },
  themeColor: "#f87171",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://jl-studios.com",
    siteName: "JL-Studios",
    title: "JL-Studios | Web Developer & Designer Portfolio",
    description:
      "Professional web developer and designer specializing in Next.js, React, and modern web technologies. Creating innovative, responsive websites and applications.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "JL-Studios Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "JL-Studios | Web Developer & Designer Portfolio",
    description:
      "Professional web developer and designer specializing in Next.js, React, and modern web technologies.",
    images: ["/og-image.png"],
    creator: "@jlstudios",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    // Add your verification codes here when available
    // google: "your-google-verification-code",
    // yandex: "your-yandex-verification-code",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Jon Larsen",
    jobTitle: "Web Developer & Designer",
    url: "https://jl-studios.com",
    sameAs: [
      "https://github.com",
      "https://linkedin.com",
    ],
    knowsAbout: [
      "Web Development",
      "Frontend Development",
      "UI/UX Design",
      "Next.js",
      "React",
      "TypeScript",
      "Full-Stack Development",
    ],
    description:
      "Professional web developer and designer specializing in modern web technologies and creating innovative digital experiences.",
  };

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${fugazOne.variable} ${firaSans.variable} antialiased`}>
        <Header />
        {children}
        <Chatbot />
      </body>
    </html>
  );
}
