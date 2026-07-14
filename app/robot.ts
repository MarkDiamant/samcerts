import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/api/"],
    },
    sitemap: "https://samcerts.co.uk/sitemap.xml",
    host: "https://samcerts.co.uk",
  };
}