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
  "product-clone-development": { description: "Product selection and clone development connect commercial feasibility with the scientific starting point of a biosimilar project. Support includes market and regulatory assessment, vector selection, gene synthesis, construct design, and clone selection.", capabilities: ["Market and regulatory assessment", "Vector selection and gene synthesis", "Construct design and clone selection"], image: 1 },
  "upstream-development": { description: "Upstream process development focuses on bacterial and mammalian processes, with fermentation experience supporting process scale-up. Discuss your expression system, current development stage, and intended scale with the team.", capabilities: ["Bacterial processes", "Mammalian processes", "Process scale-up"], image: 2 },
  "downstream-development": { description: "Downstream process development addresses purification as part of a biosimilar project. The team?s purification experience complements upstream development and includes insulin and antibody processes.", capabilities: ["Purification development", "Insulin and antibody process experience"], image: 10 },
  "formulation": { description: "Formulation development considers protein stability and comparability through buffer and excipient selection. Stress testing and container-closure studies help inform the formulation approach for the product under development.", capabilities: ["Buffer and excipient selection", "Stress testing", "Container-closure studies"], image: 3 },
  "fill-finish": { description: "Fill-finish development considers the presentation required for the biosimilar, including vials, pens, cartridges, and prefilled syringes. Share the intended format and formulation requirements when discussing the development scope.", capabilities: ["Vial presentations", "Pens and cartridges", "Prefilled syringe formats"], image: 11 },
  "analytical-development": { description: "Analytical method development supports biosimilar quality control and batch-release testing. Capabilities include protein and impurity testing, chromatography, bioassays, and method verification and validation.", capabilities: ["Protein and impurity testing", "Chromatography and bioassays", "Method verification and validation"], image: 4 },
  "dossier-preparation": { description: "Dossier preparation connects development studies with manufacturing, characterization, and control information. Support covers documentation for domestic and international submissions, with the scope discussed for the intended market.", capabilities: ["Manufacturing documentation", "Characterization and control information"], image: 5 },
  "technology-transfer": { description: "Biosimilar technology transfer connects recombinant cell lines, process development, formulation, and finished-product development. Process knowledge and technical documentation support a careful, systematic handover across these disciplines.", capabilities: ["Process and formulation transfer", "Technical documentation"], image: 6 },
  "regulatory-support": { description: "Regulatory support spans research, scale-up, clinical-stage activities, and launch. Discuss the intended market and development stage to identify support for manufacturing and marketing submissions.", capabilities: ["Scale-up support", "Clinical-stage support", "Manufacturing and marketing submissions"], image: 7 },
  "facility-design": { description: "Conceptual facility design considers process flow, capacity, manufacturing flexibility, and applicable cGMP design requirements. The starting point is the process to be accommodated and its intended scale.", capabilities: ["Process-flow planning", "Capacity considerations", "cGMP design requirements"], image: 8 },
  "quality-management": { description: "Quality management systems connect policies and procedures with risk assessment, change management, deviation management, corrective actions, and training. These activities support a documented approach to quality across development and technology transfer.", capabilities: ["Policies and procedures", "Risk, change, and deviation management", "Corrective actions and training"], image: 9 },
};
