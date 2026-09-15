import Link from "next/link";
import styles from "./ContactCTA.module.css";

export default function ContactCTA() {
  return (
    <section className={`section ${styles.section}`} aria-labelledby="contact-cta-heading">
      <div className={`site-container ${styles.content}`}>
        
        <h2 id="contact-cta-heading">Let&apos;s Discuss Your Biopharmaceutical Project</h2>
        <p className={styles.description}>Tell us about your project, development goals, and technology-transfer needs. Start a conversation with Lyotex Life Sciences.</p>
        <Link href="/contact" className="btn btn--primary btn--large">Contact Us <span aria-hidden="true">↗</span></Link>
      </div>
    </section>
  );
}
