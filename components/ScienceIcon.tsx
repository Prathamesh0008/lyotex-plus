import styles from "./ScienceIcon.module.css";

const paths = {
  research: "M9 3h6M10 3v6L4 19a1 1 0 0 0 1 2h14a1 1 0 0 0 1-2L14 9V3M7 15h10M10 18h.01",
  manufacturing: "M3 21V10l6 3V9l6 4V3h4l2 18H3ZM7 17h1m4 0h1m4 0h1",
  shield: "m12 3 8 3v6c0 4-4 7-8 9-4-2-8-5-8-9V6l8-3Zm-4 9 3 3 5-6",
  document: "M14 3H5v18h14V8l-5-5Zm0 0v5h5M8 12h8M8 16h6",
  transfer: "M3 7h17m-4-4 4 4-4 4M21 17H4m4-4-4 4 4 4",
  people: "M16 21v-3a4 4 0 0 0-4-4H7a4 4 0 0 0-4 4v3M16 4a4 4 0 0 1 0 8m5 9v-3a4 4 0 0 0-3-4M13 7a4 4 0 1 1-8 0 4 4 0 0 1 8 0Z",
  growth: "M4 19h16M6 15l5-5 4 3 5-8m-5 0h5v5",
  molecule: "m7 7 10 3M7 7l2 11m8-8-8 8M9 5a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm11 5a3 3 0 1 1-6 0 3 3 0 0 1 6 0ZM12 19a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z",
  pin: "M19 10c0 5-7 11-7 11S5 15 5 10a7 7 0 1 1 14 0ZM15 10a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z",
  phone: "M5 3H3v3c0 8 7 15 15 15h3v-5l-5-2-2 3c-4-2-5-3-7-7l3-2-2-5H5Zm9 0a9 9 0 0 1 7 7m-7-3a5 5 0 0 1 3 3",
  mail: "M3 5h18v14H3V5Zm0 0 9 8 9-8",
} as const;
export type ScienceIconName = keyof typeof paths;
export const serviceIcons: Record<string, ScienceIconName> = {
  "product-clone-development": "research", "upstream-development": "growth", "downstream-development": "manufacturing", formulation: "molecule", "fill-finish": "research", "analytical-development": "research", "technology-transfer": "transfer", "regulatory-support": "shield", "dossier-preparation": "document", "facility-design": "manufacturing", "quality-management": "shield",
};
export default function ScienceIcon({ name = "research", path, small = false }: { name?: ScienceIconName; path?: string; small?: boolean }) {
  return <span className={`${styles.badge} ${small ? styles.small : ""}`} aria-hidden="true"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.65" strokeLinecap="round" strokeLinejoin="round"><path d={path ?? paths[name]} /></svg></span>;
}
