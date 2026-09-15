// Summarized from /Input/services.html on the existing Lyotex website.
// IDs match the reusable homepage list; each service has its own image.
export const serviceImageAlt: Record<number, string> = {
  10: "Scientific illustration of a molecular structure",
  11: "Scientific illustration of a syringe surrounded by molecular forms",
  1: "Researcher in protective glasses using a pipette at a laboratory bench",
  2: "Scientist handling a pipette beside flasks of yellow liquid",
  3: "Gloved researcher preparing a laboratory sample with a pipette",
  4: "Laboratory researcher working beside bottles of prepared solutions",
  5: "Researcher in protective clothing examining a sample at a lab bench",
  6: "Scientist carefully pipetting a sample into a small laboratory tube",
  7: "Two researchers collaborating on sample preparation in a laboratory",
  8: "Laboratory team working beside scientific equipment and glassware",
  9: "Researcher using a microscope beside laboratory sample racks",
};
export const serviceDetails: Record<string, { description: string; capabilities: string[]; image: number }> = {
  "product-clone-development": { description: "Product selection considers commercial feasibility before progressing to clone development.", capabilities: ["Market and regulatory assessment", "Vector selection and gene synthesis", "Construct design and clone selection"], image: 1 },
  "upstream-development": { description: "Fermentation experience supports bacterial and mammalian process development.", capabilities: ["Bacterial processes", "Mammalian processes", "Process scale-up"], image: 2 },
  "downstream-development": { description: "Purification experience complements upstream development across biosimilar projects.", capabilities: ["Purification development", "Insulin and antibody process experience"], image: 10 },
  "formulation": { description: "Formulations are optimized for protein stability and comparability.", capabilities: ["Buffer and excipient selection", "Stress testing", "Container-closure studies"], image: 3 },
  "fill-finish": { description: "Fill-finish formats are selected to suit the biosimilar.", capabilities: ["Vial presentations", "Pens and cartridges", "Prefilled syringe formats"], image: 11 },
  "analytical-development": { description: "Methods support biosimilar testing and batch release.", capabilities: ["Protein and impurity testing", "Chromatography and bioassays", "Method verification and validation"], image: 4 },
  "dossier-preparation": { description: "Development studies inform dossiers for domestic and international submissions.", capabilities: ["Manufacturing documentation", "Characterization and control information"], image: 5 },
  "technology-transfer": { description: "Transfer support connects recombinant cell lines with finished-product development.", capabilities: ["Process and formulation transfer", "Technical documentation"], image: 6 },
  "regulatory-support": { description: "Regulatory assistance spans research through launch.", capabilities: ["Scale-up support", "Clinical-stage support", "Manufacturing and marketing submissions"], image: 7 },
  "facility-design": { description: "Facility concepts reflect process needs and manufacturing flexibility.", capabilities: ["Process-flow planning", "Capacity considerations", "cGMP design requirements"], image: 8 },
  "quality-management": { description: "Quality systems connect procedures, people, and improvement.", capabilities: ["Policies and procedures", "Risk, change, and deviation management", "Corrective actions and training"], image: 9 },
};
