import Link from "next/link";
import styles from "./ProjectQuestions.module.css";

export default function ProjectQuestions() {
  return <section className={`site-container ${styles.section}`} aria-labelledby="project-questions-heading">
    <h2 id="project-questions-heading">Planning a biosimilar development project?</h2>
    <p>Useful starting points for discussing your requirements with Lyotex in India.</p>
    <details><summary>Which stages of development can I discuss with Lyotex?</summary><p>Our services cover product and clone development, upstream and downstream processes, formulation, fill-finish, analytical methods, documentation, and technology transfer. Share your current development stage so the team can discuss the relevant scope.</p></details>
    <details><summary>What information should I include in a project enquiry?</summary><p>Include the product or molecule, current development stage, intended market, available process information, required support, and target timeline. For a product enquiry, add the quantity, format, and documentation you need. <Link href="/contact">Send your requirements to our team</Link>.</p></details>
    <details><summary>How do analytical development and quality systems fit together?</summary><p>Analytical development addresses testing methods, while quality systems cover procedures, risk assessment, change management, investigations, and training. Both support a documented approach to development. <Link href="/quality">Explore our quality approach</Link>.</p></details>
    <details><summary>What does biosimilar technology transfer involve?</summary><p>Technology transfer connects process knowledge and technical documentation across development stages. Lyotex’s offering includes process and formulation transfer, with the scope discussed for the recombinant cell line, drug substance, and finished product involved.</p></details>
  </section>;
}
