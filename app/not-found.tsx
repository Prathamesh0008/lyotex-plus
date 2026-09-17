import Link from "next/link";
import styles from "./not-found.module.css";

export default function NotFound() {
  return <section className={`site-container ${styles.page}`} aria-labelledby="not-found-heading">
    <p className={styles.code}>404</p>
    <h1 id="not-found-heading">Page not found</h1>
    <p className={styles.message}>This page may have moved or doesn’t exist.</p>
    <Link href="/" className="btn btn--primary">Back to Home <span aria-hidden="true">&rarr;</span></Link>
  </section>;
}
