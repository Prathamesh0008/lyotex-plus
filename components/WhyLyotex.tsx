import { strengths } from "@/data/strengths";
import ScienceIcon, { type ScienceIconName } from "./ScienceIcon";
import styles from "./WhyLyotex.module.css";

export default function WhyLyotex() {
  return (
    <section className="section" aria-labelledby="why-heading">
      <div className="site-container">
        <div className={styles.heading}>
          
          <h2 className="science-title" id="why-heading">Why Lyotex</h2>
        </div>
        <ul className={styles.grid}>
          {strengths.map((strength, index) => (
            <li key={strength.title}>
              <ScienceIcon name={(["people", "manufacturing", "transfer", "growth"] as ScienceIconName[])[index]} />
              <h3>{strength.title}</h3>
              <p>{strength.description}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
