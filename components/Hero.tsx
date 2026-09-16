import Image from "next/image";
import Link from "next/link";
import ScienceIcon from "./ScienceIcon";
import laboratory from "@/public/images/laboratory.webp";
import researcher from "@/public/images/service-1.webp";
import styles from "./Hero.module.css";

export default function Hero() {
  return <section className={styles.hero} aria-labelledby="hero-heading">
    <div className={styles.artwork} aria-hidden="true">
      <svg viewBox="0 0 1440 800" preserveAspectRatio="none" fill="none">
        <path d="M0 0h620C432 124 260 5 0 107Z" fill="#eef7fd"/>
        <path d="M1010 0c198 72 125 250 430 282V0Z" fill="#eaf5fd"/>
        <path d="M0 642c156 184 310 57 464 158H0Z" fill="#e4f3ff"/>
        <path d="M978 800c92-171 321-97 462-330v330Z" fill="#e5f3fd"/>
        <g stroke="#a9d3ef" strokeWidth="5" opacity=".55"><path d="m1312 41 28 48-48 37-41-24m41 24 6 43m42-80 76-39"/></g>
        <g fill="#cee7f8"><circle cx="1312" cy="41" r="17"/><circle cx="1340" cy="89" r="18"/><circle cx="1292" cy="126" r="14"/><circle cx="1251" cy="102" r="13"/><circle cx="1298" cy="169" r="12"/></g>
      </svg>
      <div className={styles.dnaArtwork}/>
    </div>
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
        <figure className={styles.lab}>
          <div className={styles.labImage}><Image src={laboratory} alt="Analytical instruments and workstations in a biotechnology laboratory" fill preload placeholder="blur" sizes="(min-width: 1280px) 475px, (min-width: 1024px) 40vw, (min-width: 640px) 70vw, 86vw"/></div>
          <figcaption><span>Science with purpose.</span><span>Expertise at every stage.</span></figcaption>
        </figure>
        <div className={styles.researcher}><Image src={researcher} alt="Researcher using a pipette at a laboratory bench" fill placeholder="blur" sizes="(min-width: 1024px) 170px, 120px"/></div>
      </div>
    </div>
  </section>;
}
