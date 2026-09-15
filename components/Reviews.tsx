"use client";

import Image from "next/image";
import { useRef, useState } from "react";
import type { Review } from "@/src/data/reviews";
import styles from "./Reviews.module.css";

export default function Reviews({ reviews }: { reviews: Review[] }) {
  const track = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);
  const [canScroll, setCanScroll] = useState(false);
  const [atEnd, setAtEnd] = useState(false);

  function updatePosition() {
    const element = track.current;
    if (!element) return;
    const cards = Array.from(element.children) as HTMLElement[];
    const position = element.scrollLeft;
    let closest = 0;
    cards.forEach((card, index) => {
      if (Math.abs(card.offsetLeft - position) < Math.abs(cards[closest].offsetLeft - position)) closest = index;
    });
    setActive(closest);
    setCanScroll(element.scrollWidth > element.clientWidth + 2);
    setAtEnd(position + element.clientWidth >= element.scrollWidth - 2);
  }

  function goTo(index: number) {
    const element = track.current;
    const card = element?.children[index] as HTMLElement | undefined;
    if (!element || !card) return;
    element.scrollTo({ left: card.offsetLeft, behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "instant" : "smooth" });
  }

  if (!reviews.length) return null;

  return <section className={`section ${styles.section}`} aria-labelledby="reviews-heading">
    <div className="site-container">
      <div className={styles.heading}>
        <h2 id="reviews-heading">Reviews</h2>
        {canScroll && <div className={styles.controls}>
          <button type="button" aria-label="Previous reviews" aria-controls="reviews-track" disabled={active === 0} onClick={() => goTo(active - 1)}>←</button>
          <button type="button" aria-label="Next reviews" aria-controls="reviews-track" disabled={atEnd} onClick={() => goTo(active + 1)}>→</button>
        </div>}
      </div>
      {reviews.some(review => review.isDemo) && <p className={styles.demoNote}>Sample profiles with fictional names and reviews. Photos are illustrative and do not depict Lyotex customers or endorsements.</p>}
      <div id="reviews-track" className={styles.track} tabIndex={0} aria-label="Reviews carousel" onScroll={updatePosition}
        ref={(element) => {
          track.current = element;
          if (!element) return;
          const observer = new ResizeObserver(updatePosition);
          observer.observe(element);
          return () => observer.disconnect();
        }}>
        {reviews.map(review => <article className={styles.card} key={review.id}>
          {review.isDemo && !review.photo && <div className={styles.demoPortrait} aria-hidden="true"><svg width="88" height="88" viewBox="0 0 88 88" fill="none"><circle cx="44" cy="29" r="15" fill="currentColor" /><path d="M14 79a30 30 0 0 1 60 0" fill="currentColor" /></svg></div>}
          {review.photo && <div className={styles.photo}><Image src={review.photo.src} alt={review.photo.alt} fill loading="lazy" sizes="(min-width: 1280px) 340px, (min-width: 1024px) 28vw, (min-width: 640px) 42vw, 80vw" /></div>}
          <h3>{review.name}</h3>
          {(review.role || review.company) && <p className={styles.role}>{[review.role, review.company].filter(Boolean).join(" · ")}</p>}
          <blockquote><p>{review.text}</p></blockquote>
        </article>)}
      </div>
    </div>
  </section>;
}
