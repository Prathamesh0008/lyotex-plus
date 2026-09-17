import type { Metadata } from "next";
import type { ReactNode } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";
import { siteUrl } from "@/data/seo";
import "./globals.css";
import StructuredData from "@/components/StructuredData";
import { organizationGraph } from "@/data/structuredData";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Lyotex Life Sciences",
    template: "%s | Lyotex Life Sciences",
  },
  description: "Lyotex Life Sciences official website.",
  icons: {
    icon: [
      { url: "/favicon/favicon.ico", type: "image/x-icon" },
      { url: "/favicon/favicon-16x16.png", type: "image/png", sizes: "16x16" },
      { url: "/favicon/favicon-32x32.png", type: "image/png", sizes: "32x32" },
    ],
    apple: { url: "/favicon/apple-touch-icon.png", type: "image/png", sizes: "180x180" },
  },
  manifest: "/favicon/site.webmanifest",
};

export default function RootLayout({
  children,
}: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <StructuredData data={organizationGraph} />
        <Header />
        <main id="main-content" tabIndex={-1}>{children}</main>
        <Footer />
        <BackToTop />
      </body>
    </html>
  );
}
