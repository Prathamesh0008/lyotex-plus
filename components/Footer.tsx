import Link from "next/link";
import Image from "next/image";
import { navigation } from "@/data/navigation";
import { company } from "@/src/data/company";
import styles from "./Footer.module.css";

const capabilities = [
  { title: "Contract Manufacturing", href: "/services#upstream-development" },
  { title: "Product Development", href: "/services#product-clone-development" },
  { title: "Regulatory Support", href: "/services#regulatory-support" },
  { title: "Quality Assurance", href: "/quality" },
  { title: "Global Sourcing", href: "/contact" },
  { title: "Custom Solutions", href: "/contact" },
];

type IconKind = "office" | "phone" | "email" | "science" | "leaf" | "people";
function FooterIcon({ kind }: { kind: IconKind }) {
  return <span className={styles.icon} aria-hidden="true"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
    {kind === "office" && <><path fill="currentColor" stroke="none" d="M12 2a8 8 0 0 0-8 8c0 6 8 13 8 13s8-7 8-13a8 8 0 0 0-8-8Z"/><circle cx="12" cy="10" r="3" fill="#e3f2fc" stroke="none"/></>}
    {kind === "phone" && <path fill="currentColor" d="M5 3H3c-1 0-1 2-1 3 0 8 8 16 16 16 1 0 3 0 3-1v-3l-5-2-2 2c-4-2-6-4-8-8l2-2-2-5Z"/>}
    {kind === "email" && <><rect x="2" y="4" width="20" height="16" rx="1" fill="currentColor"/><path d="m2 5 10 8L22 5" stroke="#e3f2fc"/></>}
    {kind === "science" && <><path d="M9 2h6M10 2v8L4 21h16l-6-11V2"/><path fill="currentColor" d="m7 15-3 6h16l-3-6Z"/><circle cx="11" cy="17" r=".7" fill="white" stroke="none"/></>}
    {kind === "leaf" && <><path fill="currentColor" d="M21 3C9 2 3 7 4 14c1 7 13 8 17-11Z"/><path d="M3 22 17 7" stroke="#e3f2fc"/></>}
    {kind === "people" && <><circle cx="12" cy="6" r="3" fill="currentColor"/><circle cx="4" cy="8" r="2.3" fill="currentColor"/><circle cx="20" cy="8" r="2.3" fill="currentColor"/><path fill="currentColor" d="M7 21v-6a5 5 0 0 1 10 0v6ZM1 20v-5a3 3 0 0 1 5-2v7Zm17 0v-7a3 3 0 0 1 5 2v5Z"/></>}
  </svg></span>;
}

function ScienceBackground() {
  return <svg className={styles.artwork} viewBox="0 0 2048 588" preserveAspectRatio="none" aria-hidden="true">
    <path d="M0 40C170 18 256 133 430 140S711 45 880 0H0Z" fill="#eef7fd" opacity=".5"/>
    <path d="M1500 0c235 68 122 226 375 256 87 10 127-58 173-103V0Z" fill="white"/>
    <path d="M0 458c88 118 160 104 264 113l74 17H0Z" fill="#e4f3ff"/>
    <path d="M1662 588c48-92 140-102 193-170 64-80 15-235 193-322v492Z" fill="#e8f5ff"/>
    <g fill="none" stroke="#8ec7ed" strokeWidth="8" opacity=".2">
      <path d="m1929 73 38 68-60 48-55-32m55 32 8 57m52-105 83-43"/>
    </g>
    <g fill="#c7e3f7" opacity=".45"><circle cx="1929" cy="73" r="24"/><circle cx="1967" cy="141" r="23"/><circle cx="1907" cy="189" r="18"/><circle cx="1852" cy="157" r="18"/><circle cx="1915" cy="246" r="16"/></g>
  </svg>;
}

export default function Footer() {
  return <footer className={styles.footer}>
    <div className={styles.main}>
      <ScienceBackground />
      <div className={styles.dnaArtwork} aria-hidden="true" />
      <div className={`${styles.container} ${styles.grid}`}>
        <div className={styles.identity}>
          <Link href="/" className={styles.brand} aria-label="Lyotex Life Sciences home"><Image src="/lyotex.svg" alt="Lyotex Lifesciences Pvt. Ltd." width={338.88} height={116.4} className={styles.logoImage} /></Link>
          <p className={styles.tagline}>Science for a healthier tomorrow</p>
          <span className={styles.brandRule} aria-hidden="true" />
          <p className={styles.description}>Lyotex Life Sciences Pvt. Ltd. is committed to advancing healthcare through innovation, quality and reliable life sciences solutions.</p>
          <ul className={styles.values}>
            <li><FooterIcon kind="science"/><span>Better<br/>Science</span></li>
            <li><FooterIcon kind="leaf"/><span>Healthier<br/>Lives</span></li>
            <li><FooterIcon kind="people"/><span>A Brighter<br/>Tomorrow</span></li>
          </ul>
        </div>
        <nav className={styles.linkColumn} aria-label="Footer navigation"><h2>Quick Links</h2><ul>{navigation.map(item => <li key={item.href}><Link href={item.href}>{item.label}</Link></li>)}</ul></nav>
        <nav className={styles.linkColumn} aria-label="Footer capabilities"><h2>Our Capabilities</h2><ul>{capabilities.map(item => <li key={item.title}><Link href={item.href}>{item.title}</Link></li>)}</ul></nav>
        <div className={styles.contactColumn}>
          <h2>Get in Touch</h2>
          <address className={styles.contact}>
            <div className={styles.contactItem}><FooterIcon kind="office"/><div><h3>Visit our office</h3><p>{company.address}</p></div></div>
            <div className={styles.contactItem}><FooterIcon kind="phone"/><div><h3>Call us</h3><div className={styles.phones}>{company.mobile.map(number => <a key={number} href={`tel:+91${number}`}>+91 {number}</a>)}</div></div></div>
            <div className={styles.contactItem}><FooterIcon kind="email"/><div><h3>Email us</h3><a href={`mailto:${company.email}`}>{company.email}</a></div></div>
          </address>
        </div>
      </div>
      <p className={styles.progress} aria-hidden="true">People<br/>Science<br/>Progress<span/></p>
    </div>
    <div className={styles.bottom}><div className={`${styles.container} ${styles.bottomContent}`}>
      <p>&copy; 2026 Lyotex Life Sciences Pvt. Ltd. All Rights Reserved.</p>
      <p className={styles.closing}>A healthier tomorrow, together.<span aria-hidden="true"/></p>
    </div></div>
  </footer>;
}
