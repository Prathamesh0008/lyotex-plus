import { coreCapabilities } from "@/data/capabilities";
import CapabilityIcon from "./CapabilityIcon";
import styles from "./CoreCapabilities.module.css";

export default function CoreCapabilities() {
  return (
    <section className={`section section--compact ${styles.section}`} aria-labelledby="capabilities-heading">
      <div className="site-container">
        <div className={styles.heading}>
          
          <h2 className="science-title" id="capabilities-heading">Core Capabilities</h2>
        </div>
        <ul className={styles.list}>
          {coreCapabilities.map(({ name }) => (
            <li key={name} className={styles.item}>
              <CapabilityIcon name={name} />
              <h3>{name}</h3>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
