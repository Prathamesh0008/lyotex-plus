import { createPageMetadata } from "@/data/seo";
import ProductCatalogue from "./ProductCatalogue";

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
  return <ProductCatalogue />;
}
