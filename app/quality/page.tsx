import StructuredData from "@/components/StructuredData";
import { pageData } from "@/data/structuredData";
import Image from "next/image";
import Link from "next/link";
import { createPageMetadata } from "@/data/seo";
import { qualityDetails } from "@/data/qualityDetails";
import styles from "./quality.module.css";

export const metadata = createPageMetadata("/quality");

const titles: Record<string, string> = { "quality-systems": "Quality Management Systems", cgmp: "cGMP Approach" };
const [systems, ...topics] = qualityDetails;

export default function QualityPage() {
  return <div className={`site-container ${styles.page}`}>
    <StructuredData data={pageData("/quality")} />
    <header className={styles.heading}>
      <h1>Quality</h1>
      <p>Careful processes. Clear documentation. Continuous improvement.</p>
    </header>

    <section id={systems.id} className={styles.commitment} aria-labelledby="quality-systems-heading">
      <div>
        <h2 id="quality-systems-heading">Quality starts with the details.</h2>
        <p>Lyotex brings together research, manufacturing, quality, regulatory, and cGMP expertise. Quality policies, manuals, and procedures establish the framework for quality assurance.</p>
        <h3>Quality management systems</h3>
        <ul>{systems.points.map(point => <li key={point}>{point}</li>)}</ul>
      </div>
      <Image src="/images/service-6.webp" alt="Researcher carefully pipetting a sample at a laboratory bench" width={512} height={512} sizes="(min-width: 1280px) 320px, (min-width: 768px) 30vw, (min-width: 400px) 320px, calc(100vw - 40px)" className={styles.photo} />
    </section>

    <div className={styles.topics}>
      {topics.map(topic => <section key={topic.id} id={topic.id} className={styles.topic} aria-labelledby={`${topic.id}-heading`}>
        <h2 id={`${topic.id}-heading`}>{titles[topic.id] ?? topic.title}</h2>
        <div><p>{topic.description}</p><ul>{topic.points.map(point => <li key={point}>{point}</li>)}</ul></div>
      </section>)}
    </div>

    <section className={styles.contact} aria-labelledby="quality-contact-heading">
      <div><h2 id="quality-contact-heading">Let’s discuss your requirements.</h2><p>Connect with our team about quality, development, or technology transfer.</p></div>
      <Link href="/contact">Talk to Our Team <span aria-hidden="true">&rarr;</span></Link>
    </section>
  </div>;
}
