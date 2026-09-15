import Link from "next/link";
import { qualityAreas } from "@/data/quality";
import styles from "./QualitySection.module.css";

export default function QualitySection() {
  return (
    <section className={`section section--navy ${styles.section}`} aria-labelledby="quality-heading">
      <div className={`site-container ${styles.grid}`}>
        <div className={styles.intro}>
          
          <h2 id="quality-heading">Quality Built Into Every Stage</h2>
          <Link href="/quality" className="btn btn--secondary">Explore quality <span aria-hidden="true">↗</span></Link>
        </div>
        <ul className={styles.list}>
          {qualityAreas.map((area, index) => (
            <li key={area.title}>
              <span className={styles.number} aria-hidden="true">{String(index + 1).padStart(2, "0")}</span>
              <div><h3>{area.title}</h3><p>{area.description}</p></div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
