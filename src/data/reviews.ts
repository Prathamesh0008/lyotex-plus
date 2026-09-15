export type Review = {
  id: string;
  name: string;
  text: string;
  isDemo?: boolean;
  role?: string;
  company?: string;
  photo?: { src: string; alt: string };
};

// Fictional sample profiles requested by the site owner, not real endorsements.
// Illustrative portraits: https://randomuser.me/api/portraits/ (women/44,
// men/32, women/68, men/46, women/65). Names do not identify the pictured people.
export const reviews: Review[] = [
  {
    id: "demo-research",
    name: "Ananya Mehta",
    photo: { src: "/images/sample-reviewer-1.webp", alt: "Illustrative portrait for a fictional sample reviewer" },
    role: "Research collaboration",
    text: "Clear communication and a thoughtful approach made it easy to discuss our research priorities and explore the next steps together.",
    isDemo: true,
  },
  {
    id: "demo-development",
    name: "Rohan Desai",
    photo: { src: "/images/sample-reviewer-2.webp", alt: "Illustrative portrait for a fictional sample reviewer" },
    role: "Process development",
    text: "We appreciated the structured discussions, attention to detail, and collaborative approach throughout our project planning conversations.",
    isDemo: true,
  },
  {
    id: "demo-transfer",
    name: "Priya Kapoor",
    photo: { src: "/images/sample-reviewer-3.webp", alt: "Illustrative portrait for a fictional sample reviewer" },
    role: "Technology transfer",
    text: "Having development and technology-transfer considerations discussed together helped us build a clearer picture of the proposed project.",
    isDemo: true,
  },
  {
    id: "sample-planning",
    name: "Arjun Shah",
    role: "Project planning",
    photo: { src: "/images/sample-reviewer-4.webp", alt: "Illustrative portrait for a fictional sample reviewer" },
    text: "The planning conversations gave us a useful way to organize our questions and consider the different stages of a development project.",
    isDemo: true,
  },
  {
    id: "sample-communication",
    name: "Neha Joshi",
    role: "Scientific collaboration",
    photo: { src: "/images/sample-reviewer-5.webp", alt: "Illustrative portrait for a fictional sample reviewer" },
    text: "We valued the open discussions and the opportunity to explore our requirements in detail before considering the next steps.",
    isDemo: true,
  },
];
