import Image from "next/image";
import styles from "./PageIntro.module.css";
type Props = { title: string; description: string; variant?: "science" | "about" | "products" | "quality" | "contact" };
export default function PageIntro({ title, description, variant = "science" }: Props) {
  if (variant === "contact") {
    return <header className={`${styles.hero} ${styles.contact}`}>
      <Image src="/images/hero-products.webp" alt="" fill preload sizes="100vw" className={styles.contactBackground} />
      <div className={`site-container ${styles.contactContent}`}><h1>{title}</h1><p>{description}</p></div>
    </header>;
  }
  return <header className={`${styles.hero} ${styles[variant] ?? ""}`}>
    <div className={`site-container ${styles.layout}`}>
      <div className={styles.content}><h1>{title}</h1><p>{description}</p></div>
      <div className={styles.artwork}>
        <Image src={`/images/hero-${variant}-v2.webp`} alt="" width={1536} height={768} preload sizes="(max-width: 767px) calc(100vw - 40px), (max-width: 1279px) 52vw, 640px" className={styles.image} />
      </div>
    </div>
  </header>;
}
