import type { Metadata } from "next";

export const siteUrl = "https://www.lyotexlifesciences.in";
export const pageSeo = {
  "/": { title: "Biosimilar Development in India | Lyotex Life Sciences", description: "Explore biosimilar development, analytical methods, quality systems and technology transfer with Lyotex Life Sciences, based in Navi Mumbai, India." },
  "/about": { title: "About Lyotex | Lyotex Life Sciences", description: "Learn about Lyotex Life Sciences, its biosimilar development focus, mission, founder, capabilities, and approach to quality and technology transfer." },
  "/services": { title: "Biosimilar Development Services in India | Lyotex", description: "Discuss clone development, upstream and downstream processes, formulation, analytical testing and biosimilar technology transfer with Lyotex in India." },
  "/products": { title: "Growth Factors & Protein Products | Lyotex India", description: "Explore Lyotex’s HGH, IGF LR3, growth factors and Eco Serum portfolio. Request product specifications, documentation and availability from our India team." },
  "/quality": { title: "Quality Systems & cGMP Approach | Lyotex Life Sciences", description: "Explore Lyotex’s quality systems, cGMP approach, analytical development, regulatory support, documentation, and systematic technology transfer." },
  "/contact": { title: "Contact Lyotex Life Sciences | Navi Mumbai, India", description: "Contact Lyotex Life Sciences in Kharghar, Navi Mumbai for product enquiries, biosimilar development and technology transfer. Share your project requirements." },
} as const;

export function createPageMetadata(path: keyof typeof pageSeo): Metadata {
  const { title, description } = pageSeo[path];
  const url = new URL(path, siteUrl).href;
  const images = [{ url: `${siteUrl}/images/social-preview.png`, width: 1200, height: 630, alt: "Lyotex Life Sciences — biopharmaceutical development" }];
  return {
    title: { absolute: title }, description, alternates: { canonical: url },
    openGraph: { type: "website", locale: "en_IN", siteName: "Lyotex Life Sciences", title, description, url, images },
    twitter: { card: "summary_large_image", title, description, images: images.map(image => image.url) },
  };
}
