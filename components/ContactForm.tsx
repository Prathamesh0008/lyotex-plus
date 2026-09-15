"use client";

import { useState, type FormEvent } from "react";
import styles from "./ContactForm.module.css";

const fields = [
  { name: "fullName", label: "Full Name", type: "text", autoComplete: "name", max: 100 },
  { name: "company", label: "Company Name", type: "text", autoComplete: "organization", max: 150 },
  { name: "email", label: "Work Email", type: "email", autoComplete: "email", max: 254 },
  { name: "phone", label: "Phone", type: "tel", autoComplete: "tel", max: 40 },
  { name: "subject", label: "Subject", type: "text", autoComplete: "off", max: 200 },
  { name: "message", label: "Message", type: "textarea", autoComplete: "off", max: 5000 },
] as const;

export default function ContactForm() {
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [status, setStatus] = useState("");

  function validate(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    const next: Record<string, string> = {};
    for (const field of fields) {
      const value = String(data.get(field.name) ?? "").trim();
      if (!value && field.name !== "phone") next[field.name] = `Enter your ${field.label.toLowerCase()}.`;
      else if (field.name === "email" && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) next.email = "Enter a valid email address.";
      else if (field.name === "phone" && value && (!/^\+?[\d\s().-]+$/.test(value) || value.replace(/\D/g, "").length < 7 || value.replace(/\D/g, "").length > 15)) next.phone = "Enter a phone number with 7–15 digits, including country code if needed.";
      else if (value.length > field.max) next[field.name] = `Use ${field.max} characters or fewer.`;
    }
    setErrors(next);
    if (Object.keys(next).length) {
      setStatus("Please correct the highlighted fields.");
      (form.elements.namedItem(Object.keys(next)[0]) as HTMLElement)?.focus();
    } else {
      setStatus("Your details are valid. Your message has not been sent: online enquiries are not available yet.");
    }
  }

  return <form className={styles.form} noValidate onSubmit={validate} onChange={() => setStatus("")} aria-labelledby="enquiry-heading">
    <h2 id="enquiry-heading">Your enquiry</h2>
    <p id="form-note" className={styles.note}>Online enquiries are not available yet. You can prepare and check your details here, but this form does not send messages.</p>
    <p className={styles.note}>All fields are required except Phone.</p>
    <div className={styles.fields}>{fields.map(field => {
      const common = { id: field.name, name: field.name, required: field.name !== "phone", maxLength: field.max, autoComplete: field.autoComplete, "aria-invalid": !!errors[field.name], "aria-describedby": errors[field.name] ? `${field.name}-error` : undefined };
      return <div key={field.name} className={field.name === "subject" || field.name === "message" ? styles.full : undefined}>
        <label htmlFor={field.name}>{field.label}{field.name === "phone" ? " (optional)" : ""}</label>
        {field.type === "textarea" ? <textarea {...common} rows={6} /> : <input {...common} type={field.type} />}
        {errors[field.name] && <p className={styles.error} id={`${field.name}-error`}>{errors[field.name]}</p>}
      </div>;
    })}</div>
    <button type="submit" className="btn btn--primary" aria-describedby="form-note">Check enquiry details</button>
    <p role="status" className={styles.status}>{status}</p>
  </form>;
}
