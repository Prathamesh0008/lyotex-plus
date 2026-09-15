export type Service = {
  readonly id: string;
  readonly title: string;
  readonly scope?: string;
};

export const servicesSource = "https://www.lyotexlifesciences.in/index.html";

// Based on the source's Our Services list, reviewed September 15, 2026.
// Combined upstream/downstream and formulation/fill-finish entries are split
// for browsing. Scope clarifies the original offering without adding claims.
export const services = [
  { id: "product-clone-development", title: "Product & Clone Development", scope: "Product selection and clone development" },
  { id: "upstream-development", title: "Upstream Development", scope: "Upstream process development" },
  { id: "downstream-development", title: "Downstream Development", scope: "Downstream process development" },
  { id: "formulation", title: "Formulation" },
  { id: "fill-finish", title: "Fill-Finish" },
  { id: "analytical-development", title: "Analytical Development", scope: "Analytical method development" },
  { id: "technology-transfer", title: "Technology Transfer", scope: "Biosimilar technology transfer" },
  { id: "regulatory-support", title: "Regulatory Support" },
  { id: "dossier-preparation", title: "Dossier Preparation" },
  { id: "facility-design", title: "Conceptual Facility Design" },
  { id: "quality-management", title: "Quality Management System" },
] as const satisfies readonly Service[];
