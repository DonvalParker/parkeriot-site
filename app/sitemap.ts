import type { MetadataRoute } from "next";
import { getAllArticleMeta } from "@/lib/resources";

const SITE_URL = "https://parkeriot.uk";

export default function sitemap(): MetadataRoute.Sitemap {
  const articles = getAllArticleMeta();

  return [
    {
      url: SITE_URL,
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${SITE_URL}/services`,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${SITE_URL}/resources`,
      changeFrequency: "weekly",
      priority: 0.85,
    },
    ...articles.map((article) => ({
      url: `${SITE_URL}/resources/${article.slug}`,
      lastModified: new Date(article.date),
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
    {
      url: `${SITE_URL}/about`,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${SITE_URL}/contact`,
      changeFrequency: "yearly",
      priority: 0.8,
    },
  ];
}
