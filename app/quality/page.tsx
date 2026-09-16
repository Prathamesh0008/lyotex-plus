import { createPageMetadata } from "@/data/seo";
import Image from "next/image";
import Link from "next/link";
import { qualityDetails as sourceTopics } from "@/data/qualityDetails";
import styles from "@/components/Interior.module.css";
import pageStyles from "./quality.module.css";

export const metadata = createPageMetadata("/quality");

// Preserve source-supported content; use the requested page headings.
const qualityDetails = sourceTopics.map(topic => ({
  ...topic,
  title: topic.id === "quality-systems" ? "Quality Management Systems" : topic.id === "cgmp" ? "cGMP Approach" : topic.title,
}));

export default function QualityPage() {
  return <>
    <h1 className="sr-only">Quality</h1>
    <section className={`section section--compact ${pageStyles.overview}`} aria-labelledby="quality-approach-heading">
      <div className={`site-container ${pageStyles.overviewGrid}`}>
        <div><h2 id="quality-approach-heading">Quality across development</h2><p>Lyotex brings together research, manufacturing, quality, regulatory, and cGMP expertise. Its approach to technology transfer emphasizes careful execution and continual improvement where needed.</p></div>
        <div className={pageStyles.image}><Image src="/images/product-2.webp" alt="Abstract scientific illustration of purple molecular forms" fill sizes="(min-width: 1280px) 420px, (min-width: 768px) 38vw, calc(100vw - 40px)" loading="lazy" /></div>
      </div>
    </section>
    <nav className={`site-container ${styles.jump}`} aria-label="Quality topics">{qualityDetails.map(q => <a key={q.id} href={`#${q.id}`}>{q.title}</a>)}</nav>
    <div>{qualityDetails.map((topic) => <section key={topic.id} id={topic.id} className={styles.detail} aria-labelledby={`${topic.id}-heading`}>
      <div className={`site-container ${styles.row}`}>
        <div className={styles.copy}><h2 id={`${topic.id}-heading`}>{topic.title}</h2><p>{topic.description}</p></div>
        <div className={styles.copy}><h3>Areas of focus</h3><ul>{topic.points.map(point => <li key={point}>{point}</li>)}</ul></div>
      </div>
    </section>)}</div>
    <section className={`section ${pageStyles.cta}`} aria-labelledby="quality-contact-heading">
      <div className={`site-container ${pageStyles.ctaContent}`}><div><h2 id="quality-contact-heading">Discuss your quality requirements</h2><p>Connect with Lyotex Life Sciences about quality systems, analytical development, documentation, or technology transfer.</p></div><Link href="/contact" className="btn btn--primary btn--large">Contact Our Team <span aria-hidden="true">↗</span></Link></div>
    </section>
  </>;
}
