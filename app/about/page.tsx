import { createPageMetadata } from "@/data/seo";
import Image from "next/image";
import Link from "next/link";
import PageIntro from "@/components/PageIntro";
import CoreCapabilities from "@/components/CoreCapabilities";
import Founder from "@/components/Founder";
import Reviews from "@/components/Reviews";
import { reviews } from "@/src/data/reviews";
import styles from "./about.module.css";

const baseMetadata = createPageMetadata("/about");
const title = "About Lyotex Life Sciences";
const description = "Learn about Lyotex Life Sciences, its company focus, core capabilities, research, manufacturing support, quality, and biosimilar technology transfer.";
export const metadata = {
  ...baseMetadata, title: { absolute: title }, description,
  openGraph: { ...baseMetadata.openGraph, title, description },
  twitter: { ...baseMetadata.twitter, title, description },
};

// Source: https://www.lyotexlifesciences.in/index.html.
// Vision: /Input/team.html. No formal mission statement is published.
const areas = [
  { id: "research", title: "Research & Development", text: "Research services include product selection, clone development, upstream and downstream process development, formulation, and analytical methods." },
  { id: "manufacturing", title: "Manufacturing Support", text: "The team’s experience covers upstream and downstream operations, formulation, fill-finish, and quality control. Conceptual facility design is also included in the service offering." },
  { id: "quality", title: "Quality & Regulatory Approach", text: "Quality management systems, analytical method development, dossier preparation, and regulatory support form part of Lyotex’s services. cGMP is listed among its areas of expertise." },
  { id: "transfer", title: "Technology Transfer", text: "Biosimilar technology transfer brings together research, manufacturing, quality, and regulatory expertise. Lyotex emphasizes a careful, systematic process and continual improvement where needed." },
];

export default function AboutPage() {
  return (
    <>
      <PageIntro title="About Lyotex Life Sciences" description="Expertise in biopharmaceutical development, brought together across research, manufacturing, quality, and technology transfer." />
      <Founder />
      <Reviews reviews={reviews} />
      <section className="section" aria-labelledby="overview-heading">
        <div className={"site-container " + styles.row}>
          <div className={styles.copy}>
            <h2 id="overview-heading">Company Overview</h2>
            <p>Lyotex Life Sciences brings together research and development, manufacturing, quality, regulatory, and cGMP expertise. Its services span product selection and clone development through biosimilar technology transfer.</p>
          </div>
          <div className={styles.image}><Image src="/images/about-biologics.webp" alt="Scientific illustration of a researcher at a laboratory bench with molecular forms" fill sizes="(min-width: 1280px) 500px, (min-width: 768px) 42vw, calc(100vw - 40px)" loading="lazy" /></div>
        </div>
      </section>
      <section className={"section " + styles.vision} aria-labelledby="vision-heading">
        <div className={"site-container " + styles.visionContent}>
          <h2 id="vision-heading">Vision</h2>
          <p>The founder’s stated vision is to develop biosimilars and make them available to people who need them.</p>
        </div>
      </section>
      <CoreCapabilities />
      <div>{areas.map((area) => (
        <section key={area.id} className={"section " + styles.area} aria-labelledby={area.id + "-heading"}>
          <div className={"site-container " + styles.editorialRow}>
            <div className={styles.copy}><h2 id={area.id + "-heading"}>{area.title}</h2></div>
            <p className={styles.areaText}>{area.text}</p>
          </div>
        </section>
      ))}</div>
      <section className={"section " + styles.cta} aria-labelledby="about-contact-heading">
        <div className={"site-container " + styles.ctaContent}><div><h2 id="about-contact-heading">Discuss your next project</h2><p>Connect with Lyotex Life Sciences about your development and technology-transfer requirements.</p></div><Link href="/contact" className="btn btn--primary btn--large">Contact Our Team <span aria-hidden="true">&rarr;</span></Link></div>
      </section>
    </>
  );
}
