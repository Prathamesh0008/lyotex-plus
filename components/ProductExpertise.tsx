import Image from "next/image";
import Link from "next/link";
import { products } from "@/src/data/products";
import styles from "./ProductExpertise.module.css";

export default function ProductExpertise() {
  return (
    <section className={`section ${styles.section}`} aria-labelledby="products-heading">
      <div className="site-container">
        <div className={styles.heading}><div><h2 className="science-title" id="products-heading">Product Expertise</h2></div><Link href="/products" className="btn btn--secondary">Explore All Products <span aria-hidden="true">↗</span></Link></div>
        <div className={styles.layout}>
          <div className={styles.imageFrame}><Image src="/images/product-4.webp" alt="Scientific illustration of pink cellular forms" fill loading="lazy" sizes="(min-width: 1280px) 360px, (min-width: 1024px) 30vw, calc(100vw - 40px)" /><span className={styles.imageLabel}>Lyotex Life Sciences</span></div>
          <ul className={styles.grid}>
            {products.map(product => <li key={product.id} className={styles.product}><h3><Link href={`/products/${product.slug}`}>{product.name}</Link></h3></li>)}
          </ul>
        </div>
      </div>
    </section>
  );
}
