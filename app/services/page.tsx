import ProjectQuestions from "@/components/ProjectQuestions";
import { organizationId } from "@/data/structuredData";
import { siteUrl } from "@/data/seo";
import StructuredData from "@/components/StructuredData";
import { pageData } from "@/data/structuredData";
import { createPageMetadata } from "@/data/seo";
import ScienceIcon, { serviceIcons } from "@/components/ScienceIcon";
import Image from "next/image";
import Link from "next/link";
import { serviceDetails, serviceImageAlt } from "@/data/serviceDetails";
import styles from "@/components/Interior.module.css";
import pageStyles from "./services.module.css";

export const metadata = createPageMetadata("/services");

// Source: https://www.lyotexlifesciences.in/Input/services.html.
// Combined process and formulation/fill-finish services are separated for browsing.
const services = [
  { id: "product-clone-development", title: "Product Selection & Clone Development" },
  { id: "upstream-development", title: "Upstream Process Development" },
  { id: "downstream-development", title: "Downstream Process Development" },
  { id: "formulation", title: "Formulation Development" },
  { id: "fill-finish", title: "Fill-Finish Development" },
  { id: "analytical-development", title: "Analytical Method Development" },
  { id: "dossier-preparation", title: "Dossier Preparation" },
  { id: "technology-transfer", title: "Biosimilar Technology Transfer" },
  { id: "regulatory-support", title: "Regulatory Support" },
  { id: "facility-design", title: "Conceptual Facility Design" },
  { id: "quality-management", title: "Quality Management Systems" },
] as const;

export default function ServicesPage() {
  return <>
      <StructuredData data={pageData("/services", "CollectionPage")} />
    <StructuredData data={{ "@context": "https://schema.org", "@type": "ItemList", itemListElement: services.map((service, index) => ({ "@type": "ListItem", position: index + 1, item: { "@type": "Service", name: service.title, description: serviceDetails[service.id].description, url: siteUrl + "/services#" + service.id, provider: { "@id": organizationId } } })) }} />
    <div className={"site-container " + pageStyles.introduction}><h1>Biosimilar development services</h1><p>Discuss your biopharmaceutical project with Lyotex Life Sciences in India. Our services connect clone development, process development, formulation, analytical methods, and technology transfer. Explore the stages below to identify the support your project needs.</p><p>For product enquiries, <Link href="/products">browse our protein and growth factor portfolio</Link>.</p></div>
    <div className={pageStyles.sections}>{services.map((service) => {
      const detail = serviceDetails[service.id];
      return <section key={service.id} id={service.id} className={styles.detail} aria-labelledby={`${service.id}-heading`}>
        <div className={`site-container ${styles.row}`}>
          <div className={styles.copy}><ScienceIcon name={serviceIcons[service.id]} /><h2 id={`${service.id}-heading`}>{service.title}</h2><p>{detail.description}</p><h3>Key capabilities</h3><ul>{detail.capabilities.map(c => <li key={c}>{c}</li>)}</ul></div>
          <div className={styles.visual}><Image src={detail.image === 10 ? "/images/product-3.webp" : detail.image === 11 ? "/images/product-1.webp" : `/images/service-${detail.image}.webp`} alt={serviceImageAlt[detail.image]} fill loading="lazy" sizes="(min-width: 1280px) 470px, (min-width: 768px) 40vw, calc(100vw - 40px)" /></div>
        </div>
      </section>;
    })}</div>
    <ProjectQuestions />
    <section className={`section ${pageStyles.cta}`} aria-labelledby="services-contact-heading">
      <div className={`site-container ${pageStyles.content}`}>
        <div><h2 id="services-contact-heading">Discuss Your Project</h2><p>Connect with Lyotex Life Sciences about your development, quality, and technology-transfer requirements.</p></div>
        <Link href="/contact" className="btn btn--primary btn--large">Discuss Your Project <span aria-hidden="true">↗</span></Link>
      </div>
    </section>
  </>;
}
