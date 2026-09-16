import type { MetadataRoute } from "next";
import { pageSeo, siteUrl } from "@/data/seo";
import { products } from "@/src/data/products";

export default function sitemap(): MetadataRoute.Sitemap {
  return [...Object.keys(pageSeo), ...products.map(product => `/products/${product.slug}`)]
    .map(path => ({ url: new URL(path, siteUrl).href }));
}
