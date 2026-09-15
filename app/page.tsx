import { createPageMetadata } from "@/data/seo";
import Hero from "@/components/Hero";
import CompanyIntroduction from "@/components/CompanyIntroduction";
import CoreCapabilities from "@/components/CoreCapabilities";
import Services from "@/components/Services";
import ProductExpertise from "@/components/ProductExpertise";
import QualitySection from "@/components/QualitySection";
import WhyLyotex from "@/components/WhyLyotex";
import ContactCTA from "@/components/ContactCTA";

export const metadata = createPageMetadata("/");

export default function HomePage() {
  return (
    <>
      <Hero />
      <CompanyIntroduction />
      <CoreCapabilities />
      <Services />
      <ProductExpertise />
      <QualitySection />
      <WhyLyotex />
      <ContactCTA />
    </>
  );
}
