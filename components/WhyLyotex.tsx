import { strengths } from "@/data/strengths";
import styles from "./WhyLyotex.module.css";

export default function WhyLyotex() {
  return (
    <section className="section" aria-labelledby="why-heading">
      <div className="site-container">
        <div className={styles.heading}>
          
          <h2 id="why-heading">Why Lyotex</h2>
        </div>
        <ul className={styles.grid}>
          {strengths.map((strength) => (
            <li key={strength.title}>
              <span className={styles.accent} aria-hidden="true" />
              <h3>{strength.title}</h3>
              <p>{strength.description}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
