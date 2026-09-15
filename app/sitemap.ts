import type { MetadataRoute } from "next";
import { pageSeo, siteUrl } from "@/data/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  return Object.keys(pageSeo).map(path => ({ url: new URL(path, siteUrl).href }));
}
