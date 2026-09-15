// Product names supplied by Lyotex. No specifications or claims are inferred.
export const products = [
  { id: "human-growth-hormone", name: "Human Growth Hormone (HGH)", slug: "human-growth-hormone-hgh", abbreviation: "HGH" },
  { id: "insulin-like-growth-factor", name: "Insulin-like Growth Factor (IGF LR3)", slug: "insulin-like-growth-factor-igf-lr3", abbreviation: "IGF LR3" },
  { id: "basic-fibroblast-growth-factor", name: "Basic Fibroblast Growth Factor (BFGF 2)", slug: "basic-fibroblast-growth-factor-bfgf-2", abbreviation: "BFGF 2" },
  { id: "bone-morphogenetic-proteins", name: "Bone Morphogenetic Proteins (BMP)", slug: "bone-morphogenetic-proteins-bmp", abbreviation: "BMP" },
  { id: "epidermal-growth-factor", name: "Epidermal Growth Factor (EGF)", slug: "epidermal-growth-factor-egf", abbreviation: "EGF" },
  { id: "granulocyte-colony-stimulating-factor", name: "Granulocyte Colony-Stimulating Factor (G CSF)", slug: "granulocyte-colony-stimulating-factor-g-csf", abbreviation: "G CSF" },
  { id: "hepatocyte-growth-factor", name: "Hepatocyte Growth Factor (HGF)", slug: "hepatocyte-growth-factor-hgf", abbreviation: "HGF" },
  { id: "keratinocyte-growth-factor", name: "Keratinocyte Growth Factor (KGF)", slug: "keratinocyte-growth-factor-kgf", abbreviation: "KGF" },
  { id: "nerve-growth-factor", name: "Nerve Growth Factor (NGF)", slug: "nerve-growth-factor-ngf", abbreviation: "NGF" },
  { id: "platelet-derived-growth-factor", name: "Platelet-Derived Growth Factor (PDGF)", slug: "platelet-derived-growth-factor-pdgf", abbreviation: "PDGF" },
  { id: "super-bfgf-2", name: "Super BFGF 2 (Basic Fibroblast Growth Factor 2)", slug: "super-bfgf-2", abbreviation: "Super BFGF 2" },
  { id: "eco-serum", name: "Eco Serum (FBS Alternative)", slug: "eco-serum-fbs-alternative", abbreviation: null },
] as const;

export type Product = (typeof products)[number];
