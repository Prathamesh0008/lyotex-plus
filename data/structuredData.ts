import { company } from "@/src/data/company";
import { pageSeo, siteUrl } from "./seo";

export const organizationId = `${siteUrl}/#organization`;
export const organizationGraph = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization", "@id": organizationId,
      name: "Lyotex Life Sciences", legalName: company.name, url: siteUrl,
      logo: `${siteUrl}/logo.png`, email: company.email,
      telephone: `+91${company.mobile[0]}`,
      address: { "@type": "PostalAddress", streetAddress: "Unit No. 21, Bhoomi Raj Woods, Sector 20, Kharghar", addressLocality: "Navi Mumbai", addressRegion: "Maharashtra", postalCode: "410210", addressCountry: "IN" },
      contactPoint: company.mobile.map(number => ({ "@type": "ContactPoint", telephone: `+91${number}`, contactType: "sales", email: company.email })),
    },
    { "@type": "WebSite", "@id": `${siteUrl}/#website`, url: siteUrl, name: "Lyotex Life Sciences", publisher: { "@id": organizationId }, inLanguage: "en-IN" },
  ],
};

export function pageData(path: keyof typeof pageSeo, type = "WebPage") {
  return { "@context": "https://schema.org", "@type": type, "@id": `${siteUrl}${path}#webpage`, url: `${siteUrl}${path}`, name: pageSeo[path].title, description: pageSeo[path].description, inLanguage: "en-IN", isPartOf: { "@id": `${siteUrl}/#website` }, about: { "@id": organizationId } };
}
