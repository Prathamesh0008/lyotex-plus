// Source: https://www.lyotexlifesciences.in/Input/services.html.
// Describes published services, not a certification or approval status.
export const qualityDetails = [
  { id: "quality-systems", title: "Quality Systems", description: "Quality policies, manuals, and procedures establish the framework for quality assurance.", points: ["Risk assessment and mitigation", "Change and deviation management", "Investigations, corrective actions, and training"] },
  { id: "cgmp", title: "Our cGMP Approach", description: "Facility concepts consider applicable cGMP requirements alongside process needs and manufacturing flexibility.", points: ["Process-flow planning", "Capacity and scale considerations"] },
  { id: "analytical", title: "Analytical Development", description: "Analytical methods support biosimilar quality control and batch release.", points: ["Protein, impurity, and microbiological testing", "Chromatographic and biological assays", "Method verification and validation"] },
  { id: "regulatory", title: "Regulatory Support", description: "Regulatory assistance spans research, scale-up, clinical studies, and launch.", points: ["Support for manufacturing and marketing submissions", "Domestic and international dossier preparation"] },
  { id: "documentation", title: "Documentation", description: "Development studies inform documentation for drug substance and finished-product dossiers.", points: ["Manufacturing and control information", "Product characterization", "Quality procedures and manuals"] },
  { id: "transfer", title: "Technology Transfer", description: "Transfer packages connect recombinant cell lines, process development, formulation, and finished products.", points: ["Technical information across development disciplines", "Careful, systematic transfer", "Continual improvement where needed"] },
] as const;
