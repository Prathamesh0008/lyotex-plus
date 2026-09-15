import type { Metadata } from "next";

export const siteUrl = "https://www.lyotexlifesciences.in";
export const pageSeo = {
  "/": { title: "Biopharmaceutical Development | Lyotex Life Sciences", description: "Explore Lyotex Life Sciences’ biopharmaceutical services, product expertise, quality approach, and technology transfer from concept to commercialization." },
  "/about": { title: "About Lyotex | Lyotex Life Sciences", description: "Learn about Lyotex Life Sciences, its biosimilar development focus, mission, founder, capabilities, and approach to quality and technology transfer." },
  "/services": { title: "Biosimilar Development Services | Lyotex Life Sciences", description: "Explore product and clone development, upstream and downstream processes, formulation, analytics, regulatory support, and biosimilar technology transfer." },
  "/products": { title: "Biopharmaceutical Products | Lyotex Life Sciences", description: "Discover Lyotex’s product expertise in insulin and analogues, monoclonal antibodies, peptides, and cytokines, and discuss your project requirements." },
  "/quality": { title: "Quality Systems & cGMP Approach | Lyotex Life Sciences", description: "Explore Lyotex’s quality systems, cGMP approach, analytical development, regulatory support, documentation, and systematic technology transfer." },
  "/contact": { title: "Contact Lyotex | Biopharmaceutical Project Enquiries", description: "Prepare your biopharmaceutical project enquiry for Lyotex Life Sciences, including company details, development goals, and technology-transfer needs." },
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
