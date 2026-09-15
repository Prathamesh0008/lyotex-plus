import type { Metadata } from "next";
import Link from "next/link";
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
  const description = `Enquire about ${product.name} from Lyotex Life Sciences.`;
  const url = `${siteUrl}/products/${product.slug}`;
  return {
    title: { absolute: title }, description, alternates: { canonical: url },
    openGraph: { type: "website", title, description, url, siteName: "Lyotex Life Sciences", images: [{ url: `${siteUrl}/images/social-preview.png`, width: 1200, height: 630, alt: "Lyotex Life Sciences" }] },
    twitter: { card: "summary_large_image", title, description, images: [`${siteUrl}/images/social-preview.png`] },
  };
}

export default async function ProductPage({ params }: Props) {
  const product = getProduct((await params).slug);
  return <>
    <section className={styles.hero} aria-labelledby="product-heading">
      <div className="site-container">
        <nav className={styles.breadcrumb} aria-label="Breadcrumb">
          <Link href="/">Home</Link><span aria-hidden="true">/</span>
          <Link href="/products">Products</Link><span aria-hidden="true">/</span>
          <span aria-current="page">{product.name}</span>
        </nav>
        <div className={styles.content}>
          
          <h1 id="product-heading">{product.name}</h1>
          <dl className={styles.identifier}><dt>{product.abbreviation ? "Abbreviation" : "Product designation"}</dt><dd>{product.abbreviation ?? "Eco Serum (FBS Alternative)"}</dd></dl>
          <Link href="/contact" className="btn btn--primary btn--large">Contact Us About This Product <span aria-hidden="true">↗</span></Link>
        </div>
      </div>
    </section>
    <div className={`site-container ${styles.back}`}><Link href="/products"><span aria-hidden="true">←</span> Back to Products</Link></div>
  </>;
}
