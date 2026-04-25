import type { MetadataRoute } from "next"
import { LANDING_URL } from "../lib/site-urls"

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: LANDING_URL,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
  ]
}
