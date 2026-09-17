import { createPageMetadata } from "@/data/seo";
import StructuredData from "@/components/StructuredData";
import { pageData } from "@/data/structuredData";
import ProductCatalogue from "./ProductCatalogue";
export const metadata = createPageMetadata("/products");
export default function ProductsPage() {
  return <><StructuredData data={pageData("/products", "CollectionPage")} /><ProductCatalogue /></>;
}
