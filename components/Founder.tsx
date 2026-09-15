import Image from "next/image";
import portrait from "@/public/images/fenil-shah.png";
import styles from "./Founder.module.css";

// Name, role, and statements supplied in the owner's founder reference slide.
const strengths = [
  { title: "Scientific Foundation", text: "Deep understanding of recombinant proteins and biologics." },
  { title: "Commercial Mindset", text: "Building scalable businesses, not isolated products." },
  { title: "Integrated Execution", text: "Technology transfer, manufacturing and commercialisation under one strategy." },
  { title: "Long-Term Vision", text: "Creating a multi-product recombinant biologics company." },
];

export default function Founder() {

  return (
    <section className={`section ${styles.section}`} aria-labelledby="founder-heading">
      <div className="site-container">
        <div className={styles.layout}>
          <div>
            <div className={styles.portrait}>
              <Image src={portrait} alt="Fenil Shah" fill loading="lazy" placeholder="blur" sizes="(min-width: 1280px) 420px, (min-width: 768px) 38vw, calc(100vw - 40px)" />
            </div>
            <h2 id="founder-heading" className={styles.name}>Fenil Shah</h2>
            <p className={styles.role}>Founder · Researcher. Builder. Entrepreneur.</p>
          </div>
          <div>
            <div className={styles.strengths}>
              {strengths.map((strength, index) => <article key={strength.title} className={styles.strength}>
                <span className={styles.marker} aria-hidden="true">{String(index + 1).padStart(2, "0")}</span>
                <h3>{strength.title}</h3>
                <p>{strength.text}</p>
              </article>)}
            </div>
            <p className={styles.statement}>Building Capability. Not Just Products.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
