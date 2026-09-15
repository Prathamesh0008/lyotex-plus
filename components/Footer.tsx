import Link from "next/link";
import Image from "next/image";
import { navigation } from "@/data/navigation";
import { services } from "@/data/services";
import { company } from "@/src/data/company";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className="site-container">
        <div className={styles.grid}>
          <div className={styles.company}>
            <Link href="/" className={styles.brand} aria-label="Lyotex Life Sciences home"><Image src="/lyotex.svg" alt="Lyotex Life Sciences" width={338.88} height={116.4} className={styles.logoImage} /></Link>
            <p>Expertise in research and development, manufacturing, quality, and regulatory support.</p>
          </div>
          <nav aria-label="Footer navigation">
            <h2>Quick Links</h2>
            <ul>{navigation.map((item) => <li key={item.href}><Link href={item.href}>{item.label}</Link></li>)}</ul>
          </nav>
          <nav aria-label="Footer services">
            <h2>Services</h2>
            <ul>{services.map((service) => <li key={service.id}><Link href={`/services#${service.id}`}>{service.title}</Link></li>)}</ul>
          </nav>
          <div className={styles.contact}>
            <h2>Get in touch</h2>
            <address className={styles.address}>
              <p>{company.name}</p>
              <p>{company.address}</p>
              <div>{company.mobile.map(number => <a key={number} href={`tel:+91${number}`}>{number}</a>)}</div>
              <a href={`mailto:${company.email}`}>{company.email}</a>
            </address>
            <Link href="/contact" className={styles.contactLink}>Contact Us <span aria-hidden="true">↗</span></Link>
          </div>
        </div>
        <div className={styles.bottom}>© 2026 Lyotex Life Sciences Pvt. Ltd. All Rights Reserved.</div>
      </div>
    </footer>
  );
}
