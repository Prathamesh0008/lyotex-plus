import Image from "next/image";
import Link from "next/link";
import { companyIntroduction } from "@/data/company";
import science from "@/public/images/company-science.webp";
import styles from "./CompanyIntroduction.module.css";

export default function CompanyIntroduction() {
  return (
    <section className={`section ${styles.section}`} aria-labelledby="company-heading">
      <div className={`site-container ${styles.grid}`}>
        <div className={styles.visual}>
          <div className={styles.imageFrame}>
            <Image
              src={science}
              alt="Two researchers in laboratory coats working with scientific equipment"
              fill
              loading="lazy"
              sizes="(min-width: 1280px) 500px, (min-width: 1024px) 42vw, (min-width: 768px) 640px, calc(100vw - 40px)"
              placeholder="blur"
              className={styles.image}
            />
          </div>
          <span className={styles.imageAccent} aria-hidden="true" />
        </div>
        <div className={styles.content}>
          
          <h2 id="company-heading">{companyIntroduction.heading}</h2>
          <div className={styles.description}>
            {companyIntroduction.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
          </div>
          <Link href="/about" className={styles.link}>
            More about Lyotex <span aria-hidden="true">↗</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
