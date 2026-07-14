import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "SamCerts Ltd",
    short_name: "SamCerts",
    description:
      "Property certificates and compliance reports for landlords, agents, property managers and homeowners.",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#0369a1",
    icons: [
      {
        src: "/favicon.png",
        sizes: "any",
        type: "image/png",
      },
    ],
  };
}