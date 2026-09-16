import Image from "next/image";
import Link from "next/link";
import { products } from "@/src/data/products";
import { productDetails } from "@/src/data/productDetails";
import styles from "./products.module.css";

export default function ProductCatalogue() {
  return <section className={styles.catalogue} aria-labelledby="products-heading">
    <div className="site-container">
      <div className={styles.heading}>
        <h1 id="products-heading">Our products</h1>
      </div>
      <ul className={styles.gallery}>
        {products.map((product, index) => {
          const detail = productDetails[product.id];
          return <li key={product.id}>
            <Link href={`/products/${product.slug}`} className={styles.product}>
              <div className={styles.imageFrame}>
                <Image src={detail.image} alt="" fill sizes="(min-width: 1280px) 384px, (min-width: 1024px) 30vw, (min-width: 640px) 46vw, calc(100vw - 40px)" loading={index < 3 ? "eager" : "lazy"} />
                <span className={styles.imageAction} aria-hidden="true">&#8599;</span>
              </div>
              <div className={styles.productInfo}>
                <h2>{product.name}</h2>
                <p>{detail.category}</p>
              </div>
            </Link>
          </li>;
        })}
      </ul>
      <p className={styles.imageNote}>Images are representative scientific illustrations.</p>
      <div className={styles.contact}>
        <div><h2>Find out more about our products</h2><p>Contact our team for specifications, availability, and product enquiries.</p></div>
        <Link href="/contact" className="btn btn--primary">Contact Us <span aria-hidden="true">&#8599;</span></Link>
      </div>
    </div>
  </section>;
}
