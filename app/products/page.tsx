import { createPageMetadata } from "@/data/seo";
import Link from "next/link";
import PageIntro from "@/components/PageIntro";
import { products } from "@/src/data/products";
import styles from "./products.module.css";

const title = "Our Products | Lyotex Life Sciences";
const description = "Explore the 12 products in the Lyotex Life Sciences portfolio, including HGH, IGF LR3, growth factors, Super BFGF 2, and Eco Serum.";
const baseMetadata = createPageMetadata("/products");

export const metadata = {
  ...baseMetadata,
  title: { absolute: title },
  description,
  openGraph: { ...baseMetadata.openGraph, title, description },
  twitter: { ...baseMetadata.twitter, title, description },
};

export default function ProductsPage() {
  return (
    <>
      <PageIntro title="Our Products" description="Explore the Lyotex Life Sciences product portfolio. Discover our range below and contact our team to discuss your product requirements." />
      <section className="section" aria-labelledby="portfolio-heading">
        <div className="site-container">
          <div className={styles.heading}>
            <div><h2 id="portfolio-heading">Product portfolio</h2></div>
            <span className={styles.count}>{products.length} products</span>
          </div>
          <ol className={styles.list}>
            {products.map((product, index) => (
              <li key={product.id} id={product.id} className={styles.product}>
                <span className={styles.number} aria-hidden="true">{String(index + 1).padStart(2, "0")}</span>
                <h3><Link href={`/products/${product.slug}`}>{product.name}</Link></h3>
              </li>
            ))}
          </ol>
        </div>
      </section>
      <section className={"section " + styles.cta} aria-labelledby="product-contact-heading">
        <div className={"site-container " + styles.ctaContent}>
          <div><h2 id="product-contact-heading">Discuss your product requirements</h2><p>Contact Lyotex Life Sciences for enquiries about our product portfolio.</p></div>
          <Link href="/contact" className="btn btn--primary btn--large">Contact Us <span aria-hidden="true">&rarr;</span></Link>
        </div>
      </section>
    </>
  );
}
