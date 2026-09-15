import Link from "next/link";
import { services, type Service } from "@/data/services";
import styles from "./Services.module.css";

export default function Services() {
  return (
    <section id="services" className="section" aria-labelledby="services-heading">
      <div className="site-container">
        <div className={styles.heading}>
          <div>
            
            <h2 id="services-heading">Our Services</h2>
          </div>
          <Link href="/services" className={`btn btn--secondary ${styles.contact}`}>
            Explore All Services <span aria-hidden="true">↗</span>
          </Link>
        </div>
        <ol className={styles.list}>
          {services.map((service: Service, index) => (
            <li key={service.id} id={`service-${service.id}`} className={styles.item}>
              <span className={styles.number} aria-hidden="true">{String(index + 1).padStart(2, "0")}</span>
              <div>
                <h3><Link href={`/services#${service.id}`}>{service.title}</Link></h3>
                {service.scope && <p>{service.scope}</p>}
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
