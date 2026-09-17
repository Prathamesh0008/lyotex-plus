import StructuredData from "@/components/StructuredData";
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { productDetails } from "@/src/data/productDetails";
import { company } from "@/src/data/company";
import { notFound } from "next/navigation";
import { products } from "@/src/data/products";
import { siteUrl } from "@/data/seo";
import styles from "./product.module.css";

type Props = { params: Promise<{ slug: string }> };

function getProduct(slug: string) {
  const product = products.find(product => product.slug === slug);
  if (!product) notFound();
  return product;
}

export function generateStaticParams() {
  return products.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const product = getProduct((await params).slug);
  const title = `${product.name} | Lyotex Life Sciences`;
  const description = `${product.name}: request specifications, availability and technical documentation from Lyotex Life Sciences in India.`;
  const url = `${siteUrl}/products/${product.slug}`;
  return {
    title: { absolute: title }, description, alternates: { canonical: url },
    openGraph: { type: "website", title, description, url, siteName: "Lyotex Life Sciences", images: [{ url: `${siteUrl}/images/social-preview.png`, width: 1200, height: 630, alt: "Lyotex Life Sciences" }] },
    twitter: { card: "summary_large_image", title, description, images: [`${siteUrl}/images/social-preview.png`] },
  };
}

export default async function ProductPage({ params }: Props) {
  const product = getProduct((await params).slug);
  const detail = productDetails[product.id];
  const related = products.filter(item => item.id !== product.id).sort((a, b) => Number(productDetails[b.id].category === detail.category) - Number(productDetails[a.id].category === detail.category)).slice(0, 3);
  const email = `mailto:${company.email}?subject=${encodeURIComponent('Product enquiry: ' + product.name)}&body=${encodeURIComponent('Hello Lyotex team,\n\nI would like to enquire about ' + product.name + '.\n\nIntended application: \nRequired quantity: \nTechnical documentation needed: \nTarget timeline: \n\nName and company: ')}`;
  const specifications = [
    ["Product name", product.name],
    ["Designation", product.abbreviation ?? "Eco Serum"],
    ["Category", detail.category],
    ["Product form / variant", "Confirm with Lyotex"],
    ["Purity & biological activity", "Request product-specific specifications"],
    ["Pack size & availability", "Confirm for your required quantity"],
    ["Storage & handling", "Request product-specific instructions"],
    ["Documentation", "Ask about specification sheet and certificate of analysis availability"],
  ];
  return <div className={styles.page}>
    <StructuredData data={{ "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [{ "@type": "ListItem", position: 1, name: "Home", item: siteUrl }, { "@type": "ListItem", position: 2, name: "Products", item: siteUrl + "/products" }, { "@type": "ListItem", position: 3, name: product.name, item: siteUrl + "/products/" + product.slug }] }} />
    <header className={`${styles.hero}`}>
      <div className="site-container">
        <nav className={styles.breadcrumb} aria-label="Breadcrumb">
          <Link href="/">Home</Link><span aria-hidden="true">/</span>
          <Link href="/products">Products</Link><span aria-hidden="true">/</span>
          <span aria-current="page">{product.abbreviation ?? "Eco Serum"}</span>
        </nav>
        <div className={styles.heroGrid}>
          <figure className={styles.visual}>
            <div className={styles.imageFrame}><Image src={detail.image} alt="Abstract biological illustration" fill preload sizes="(min-width: 1280px) 480px, (min-width: 768px) 40vw, calc(100vw - 40px)" /></div>
            <figcaption>Representative illustration</figcaption>
          </figure>
          <div className={styles.heroCopy}>
            <span className={styles.category}>{detail.category}</span><h1>{product.name}</h1>
            <p>{detail.summary}</p>
            <div className={styles.heroActions}><a href={email} className="btn btn--primary">Inquire Now <span aria-hidden="true">&rarr;</span></a><a href="#specifications" className={styles.textLink}>View specifications <span aria-hidden="true">&darr;</span></a></div>
          </div>
        </div>
      </div>
    </header>
    <div className={`site-container ${styles.layout}`}>
      <div className={styles.main}>
        <section className={styles.overview} aria-labelledby="overview-heading">
          <h2 id="overview-heading">Product overview</h2>
          <p>{detail.overview}</p>
          <ul className={styles.focusList}>{detail.discussion.map(item => <li key={item}>{item}</li>)}</ul>
        </section>
        <section id="specifications" className={styles.specifications} aria-labelledby="specifications-heading">
          <h2 id="specifications-heading">Technical specifications</h2>
          <p className={styles.sectionNote}>Product identity is listed below. Contact Lyotex to confirm specifications for your application.</p>
          <table className={styles.table}><caption className={styles.srOnly}>Technical information for {product.name}</caption><tbody>{specifications.map(([label, value], index) => <tr key={label}><th scope="row">{label}</th><td className={index > 2 ? styles.unconfirmed : undefined}>{value}</td></tr>)}</tbody></table>
        </section>
        <section className={styles.documents} aria-labelledby="documents-heading">
          <div><h2 id="documents-heading">Technical documents</h2><p>Ask our team about available specifications, analysis certificates, and handling information.</p></div>
          <a href={email} className={styles.textLink}>Request documents <span aria-hidden="true">&#8599;</span></a>
        </section>
        <section className={styles.faq} aria-labelledby="questions-heading">
          <h2 id="questions-heading">Ordering &amp; product support</h2>
          {[
            ["How do I request a quotation?", "Email the team with the product name, required quantity, preferred format, and delivery timeline. Lyotex will confirm availability and quotation details."],
            ["What should I confirm before evaluation?", "Confirm product identity, specifications, storage and handling instructions, and documentation relevant to your application."],
            ["Can I discuss development support?", "Lyotex offers services across product and clone development, process development, formulation, analytical development, and technology transfer. Share your project scope to discuss the relevant support."],
          ].map(([question, answer]) => <details key={question}><summary>{question}<span aria-hidden="true">+</span></summary><p>{answer}</p></details>)}
        </section>
      </div>
      <aside className={styles.sidebar} aria-labelledby="enquiry-heading">
        <div className={styles.enquiry}>
          <h2 id="enquiry-heading">Product enquiry</h2>
          <p>Get specifications, availability, and quotation details for <strong>{product.abbreviation ?? "Eco Serum"}</strong>.</p>
          <a href={email} className={`btn btn--primary ${styles.enquiryButton}`}>Request a Quote <span aria-hidden="true">&#8599;</span></a>
          <div className={styles.checklist}><h3>Include in your enquiry</h3><ul><li>Intended application</li><li>Required quantity &amp; format</li><li>Documentation needed</li><li>Target timeline</li></ul></div>
          <div className={styles.contact}><h3>Speak with our team</h3><a href={`tel:+91${company.mobile[0]}`}>+91 {company.mobile[0]}</a><a href={email}>{company.email}</a></div>
        </div>
        <Link href="/services" className={styles.serviceLink}>Explore development services <span aria-hidden="true">&#8599;</span></Link>
      </aside>
    </div>
    <section className={styles.related} aria-labelledby="related-heading"><div className="site-container">
      <div className={styles.relatedHeading}><h2 id="related-heading">Related products</h2><Link href="/products" className={styles.textLink}>View all products <span aria-hidden="true">&#8599;</span></Link></div>
      <div className={styles.relatedGrid}>{related.map(item => <Link key={item.id} href={`/products/${item.slug}`} className={styles.relatedItem}><div><h3>{item.name}</h3><p>{productDetails[item.id].category}</p></div><span aria-hidden="true">&#8599;</span></Link>)}</div>
    </div></section>
  </div>;
}
