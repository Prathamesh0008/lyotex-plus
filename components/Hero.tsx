import Image from "next/image";
import Link from "next/link";
import ScienceIcon from "./ScienceIcon";
import SectionArtwork from "./SectionArtwork";
import laboratory from "@/public/images/laboratory.webp";
import researcher from "@/public/images/service-1.webp";
import styles from "./Hero.module.css";

export default function Hero() {
  return <section className={styles.hero} aria-labelledby="hero-heading">
    <div className={`site-container ${styles.grid}`}>
      <div className={styles.content}>
        <h1 id="hero-heading">Biopharmaceutical<br className={styles.desktopBreak}/> Development<span>From concept to<br className={styles.desktopBreak}/> commercialization.</span></h1>
        <p className={styles.description}>Bring your next breakthrough closer. Lyotex connects research, process development, and manufacturing support with quality and regulatory expertise.</p>
        <div className={styles.actions}>
          <Link href="/services" className="btn btn--primary btn--large">Explore Our Services <span aria-hidden="true">&#8599;</span></Link>
          <Link href="/contact" className={styles.contact}>Talk to Our Team <span aria-hidden="true">&rarr;</span></Link>
        </div>
        <ul className={styles.expertise}>
          <li><ScienceIcon name="research" small/><span>Research &amp;<br/>development</span></li>
          <li><ScienceIcon name="manufacturing" small/><span>Manufacturing<br/>support</span></li>
          <li><ScienceIcon name="shield" small/><span>Quality &amp;<br/>regulatory</span></li>
        </ul>
      </div>
      <div className={styles.visual}>
        <div className={styles.molecule}><SectionArtwork kind="molecule"/></div>
        <figure className={styles.lab}>
          <div className={styles.labImage}><Image src={laboratory} alt="Analytical instruments and workstations in a biotechnology laboratory" fill preload placeholder="blur" sizes="(min-width: 1280px) 475px, (min-width: 1024px) 40vw, (min-width: 640px) 70vw, 86vw"/></div>
          <figcaption><span>Science with purpose.</span><span>Expertise at every stage.</span></figcaption>
        </figure>
        <div className={styles.researcher}><Image src={researcher} alt="Researcher using a pipette at a laboratory bench" fill placeholder="blur" sizes="(min-width: 1024px) 170px, 120px"/></div>
      </div>
    </div>
  </section>;
}
