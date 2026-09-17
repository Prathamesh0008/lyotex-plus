import Image from "next/image";
import Link from "next/link";
import ScienceIcon from "./ScienceIcon";
import styles from "./Hero.module.css";
export default function Hero() {
  return <section aria-labelledby="hero-heading">
    <div className={styles.hero}>
      <Image src="/images/hero-science.webp" alt="" fill preload sizes="100vw" className={styles.background} />
      <div className={`site-container ${styles.content}`}>
        <h1 id="hero-heading">Science for<br />a Healthier<br />Tomorrow</h1>
        <p>Advancing biopharmaceutical innovation, manufacturing excellence and reliable life science solutions.</p>
        <Link href="/services" className={`btn btn--primary ${styles.button}`}>Explore Our Services <span aria-hidden="true">&rarr;</span></Link>
      </div>
    </div>
    <ul className={`site-container ${styles.expertise}`}>
      <li><ScienceIcon name="research" /><span>Innovation<br />Driven</span></li>
      <li><ScienceIcon name="shield" /><span>Quality<br />Focused</span></li>
      <li><ScienceIcon path="M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0ZM3 12h18M12 3c5 5 5 13 0 18-5-5-5-13 0-18ZM5 6h14M5 18h14" /><span>Global<br />Impact</span></li>
    </ul>
  </section>;
}
