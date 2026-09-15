"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { navigation } from "@/data/navigation";
import styles from "./Header.module.css";

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const toggleRef = useRef<HTMLButtonElement>(null);
  const headerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const updateScroll = () => {
      headerRef.current?.classList.toggle(styles.scrolled, window.scrollY > 8);
    };
    updateScroll();
    window.addEventListener("scroll", updateScroll, { passive: true });
    return () => window.removeEventListener("scroll", updateScroll);
  }, []);

  useEffect(() => {
    const media = window.matchMedia("(min-width: 64rem)");
    const closeOnDesktop = () => { if (media.matches) setOpen(false); };
    media.addEventListener("change", closeOnDesktop);
    return () => media.removeEventListener("change", closeOnDesktop);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onPointerDown = (event: PointerEvent) => {
      if (!headerRef.current?.contains(event.target as Node)) setOpen(false);
    };
    document.addEventListener("pointerdown", onPointerDown);
    return () => document.removeEventListener("pointerdown", onPointerDown);
  }, [open]);

  return (
    <header ref={headerRef} className={styles.header}
      onKeyDown={(event) => {
        if (event.key === "Escape" && open) {
          setOpen(false);
          toggleRef.current?.focus();
        }
      }}
      onBlur={(event) => {
        // Touch browsers can blur the toggle without identifying a new focus
        // target before dispatching the link click. Let that click finish.
        if (event.relatedTarget && !event.currentTarget.contains(event.relatedTarget)) setOpen(false);
      }}>
      <a className={styles.skipLink} href="#main-content">Skip to content</a>
      <div className={`site-container ${styles.bar}`}>
        <Link href="/" className={styles.logo} aria-label="Lyotex Life Sciences home" onClick={() => setOpen(false)}>
          <Image src="/lyotex.svg" alt="Lyotex Life Sciences" width={338.88} height={116.4} className={styles.logoImage} loading="eager" />
        </Link>
        <button ref={toggleRef} className={styles.toggle} type="button" aria-expanded={open}
          aria-controls="primary-navigation" aria-label={open ? "Close navigation menu" : "Open navigation menu"}
          onClick={() => setOpen(!open)}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
            {open ? <path d="m6 6 12 12M6 18 18 6" /> : <path d="M4 6h16M4 12h16M4 18h16" />}
          </svg>
        </button>
        <nav id="primary-navigation" aria-label="Main navigation" className={`${styles.nav} ${open ? styles.open : ""}`}>
          <ul className={styles.links}>
            {navigation.filter(({ href }) => href !== "/contact").map(({ label, href }) => (
              <li key={href}><Link href={href} aria-current={pathname === href ? "page" : href !== "/" && pathname.startsWith(`${href}/`) ? "location" : undefined}
                className={styles.navLink} onClick={() => setOpen(false)}>{label}</Link></li>
            ))}
          </ul>
          <div className={styles.ctaGroup}><Link href="/contact" aria-current={pathname === "/contact" ? "page" : undefined} className={`btn btn--primary ${styles.contact}`} onClick={() => setOpen(false)}>Contact Us <span aria-hidden="true">↗</span></Link></div>
        </nav>
      </div>
    </header>
  );
}
