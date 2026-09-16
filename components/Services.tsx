import SectionArtwork from "./SectionArtwork";
import ScienceIcon, { serviceIcons } from "./ScienceIcon";
import Image from "next/image";
import Link from "next/link";
import { services } from "@/data/services";
import laboratory from "@/public/images/company-science.webp";
import styles from "./Services.module.css";

export default function Services() {
  return (
    <section id="services" className={`section ${styles.section}`} aria-labelledby="services-heading">
      <div className="site-container">
        <div className={styles.heading}>
          <div><h2 className="science-title" id="services-heading">Our Services</h2><p>Expertise across development, manufacturing support, and technology transfer.</p></div>
          <Link href="/services" className="btn btn--secondary">Explore All Services <span aria-hidden="true">&#8599;</span></Link>
        </div>
        <div className={styles.layout}>
          <div className={styles.visualColumn}><div className={styles.visual}>
            <Image src={laboratory} alt="Researchers working with laboratory equipment" fill loading="lazy" placeholder="blur" sizes="(min-width: 1280px) 432px, (min-width: 1024px) 36vw, calc(100vw - 40px)" />
          </div><div className={styles.process}><SectionArtwork kind="process"/><p><span>Develop</span><span>Scale</span><span>Transfer</span></p></div></div>
          <ul className={styles.list}>
            {services.map(service => (
              <li key={service.id} id={`service-${service.id}`}>
                <Link href={`/services#${service.id}`} className={styles.service}>
                  <ScienceIcon name={serviceIcons[service.id]} small /><h3>{service.title}</h3><span aria-hidden="true">&#8599;</span>
                </Link>
              </li>
            ))}
            <li><Link href="/contact" className={`${styles.service} ${styles.project}`}><span>Discuss your project</span><span aria-hidden="true">&rarr;</span></Link></li>
          </ul>
        </div>
      </div>
    </section>
  );
}
