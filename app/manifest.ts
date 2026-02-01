import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "JL-Studios - Web Developer & Designer Portfolio",
    short_name: "JL-Studios",
    description:
      "Professional web developer and designer specializing in Next.js, React, and modern web technologies",
    start_url: "/",
    display: "standalone",
    background_color: "#070707",
    theme_color: "#f87171",
    icons: [
      {
        src: "/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
    ],
  };
}
