import Link from "next/link";
import styles from "./Interior.module.css";

export default function PageIntro({ title, description }: { title: string; description: string }) {
  return <header className={styles.intro}><div className="site-container">
    <nav aria-label="Breadcrumb"><Link href="/">Home</Link><span aria-hidden="true"> / </span><span aria-current="page">{title}</span></nav>
    <h1>{title}</h1><p className={styles.lead}>{description}</p>
  </div></header>;
}
