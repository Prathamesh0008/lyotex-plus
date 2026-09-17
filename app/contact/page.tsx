import StructuredData from "@/components/StructuredData";
import { pageData } from "@/data/structuredData";
import { createPageMetadata } from "@/data/seo";
import ScienceIcon from "@/components/ScienceIcon";
import PageIntro from "@/components/PageIntro";
import ContactForm from "@/components/ContactForm";
import { company } from "@/src/data/company";
import styles from "./contact.module.css";

export const metadata = createPageMetadata("/contact");

export default function ContactPage() {
  return <>
      <StructuredData data={pageData("/contact", "ContactPage")} />
    <PageIntro title="Get in Touch" description="We are here to support your journey in biopharmaceutical innovation." variant="contact" />
    <section className="section"><div className={`site-container ${styles.layout}`}>
      <div className={styles.details}>
        
        <h2>{company.name}</h2>
        <address>
          <div className={styles.detail}><ScienceIcon name="pin" small /><h3>Office address</h3><p>{company.address}</p></div>
          <div className={styles.detail}><ScienceIcon name="phone" small /><h3>Call us</h3>{company.mobile.map(number => <a key={number} href={`tel:+91${number}`}>{number}</a>)}</div>
          <div className={styles.detail}><ScienceIcon name="mail" small /><h3>Email us</h3><a href={`mailto:${company.email}`}>{company.email}</a></div>
        </address>
      </div>
      <ContactForm />
    </div></section>
    <section className={`section ${styles.location}`} aria-labelledby="location-heading">
      <div className={`site-container ${styles.locationGrid}`}>
        <div><h2 id="location-heading">Kharghar office</h2><p>{company.address}</p></div>
        <div className={styles.mapLink}>
          <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true"><path d="M19 10c0 5-7 11-7 11S5 15 5 10a7 7 0 1 1 14 0Z" /><circle cx="12" cy="10" r="2.5" /></svg>
          <h3>Kharghar, Navi Mumbai</h3><p>Find our office using the address on Google Maps.</p>
          <a href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(company.address)}`} target="_blank" rel="noopener noreferrer">View address on Google Maps <span className={styles.newTab}>(opens in a new tab)</span></a>
        </div>
      </div>
    </section>
  </>;
}
