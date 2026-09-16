import Image from "next/image";
import Link from "next/link";
import laboratory from "@/public/images/laboratory.webp";
import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <section className={styles.hero} aria-labelledby="hero-heading">
      <div className={`site-container ${styles.grid}`}>
        <div className={styles.content}>
          <h1 id="hero-heading" className={styles.heading}>Biopharmaceutical Development <span>From Concept to Commercialization</span></h1>
          <p className={styles.description}>Lyotex brings together research and development, manufacturing support, quality, and regulatory expertise for biopharmaceutical development and technology transfer.</p>
          <div className={`button-group ${styles.actions}`}>
            <Link href="/services" className="btn btn--primary">Explore Our Services <span aria-hidden="true">↗</span></Link>
            <Link href="/contact" className="btn btn--secondary">Contact Our Team</Link>
          </div>
          <div className={styles.footnote}><span aria-hidden="true" /> Advancing science. Enabling possibility.</div>
        </div>
        <figure className={styles.visual}>
          <div className={styles.imageFrame}>
            <Image src={laboratory} alt="Scientist working with analytical equipment in a biotechnology laboratory" fill
              sizes="(min-width: 1280px) 530px, (min-width: 1024px) 44vw, calc(100vw - 40px)" preload placeholder="blur" className={styles.image} />
            <div className={styles.imageShade} />
            <div className={styles.imageLabel}><span aria-hidden="true" /> A closer look at possibility</div>
          </div>
        </figure>
      </div>
    </section>
  );
}
