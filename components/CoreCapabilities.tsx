import { coreCapabilities } from "@/data/capabilities";
import styles from "./CoreCapabilities.module.css";

export default function CoreCapabilities() {
  return (
    <section className={`section section--compact ${styles.section}`} aria-labelledby="capabilities-heading">
      <div className="site-container">
        <div className={styles.heading}>
          
          <h2 id="capabilities-heading">Core Capabilities</h2>
        </div>
        <ul className={styles.list}>
          {coreCapabilities.map(({ name, iconPath }) => (
            <li key={name} className={styles.item}>
              <svg className={styles.icon} width="28" height="28" viewBox="0 0 24 24"
                fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"
                strokeLinejoin="round" aria-hidden="true" focusable="false">
                <path d={iconPath} />
              </svg>
              <h3>{name}</h3>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
