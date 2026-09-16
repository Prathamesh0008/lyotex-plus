"use client";

import Image from "next/image";
import { useEffect, useRef, useState, type PointerEvent } from "react";
import type { Review } from "@/src/data/reviews";
import styles from "./Reviews.module.css";

export default function Reviews({ reviews }: { reviews: Review[] }) {
  const track = useRef<HTMLDivElement>(null);
  const [canScroll, setCanScroll] = useState(false);

  const drag = useRef<{ id: number; x: number; left: number } | null>(null);
  const resumeAt = useRef(0);

  function delayAutoplay() {
    resumeAt.current = Date.now() + 4000;
  }

  function endDrag(event: PointerEvent<HTMLDivElement>) {
    if (drag.current?.id !== event.pointerId) return;
    drag.current = null;
    delete event.currentTarget.dataset.dragging;
    if (event.currentTarget.hasPointerCapture(event.pointerId)) {
      event.currentTarget.releasePointerCapture(event.pointerId);
    }
    delayAutoplay();
  }

  function move(direction: number) {
    const element = track.current;
    if (!element) return;
    const first = element.firstElementChild as HTMLElement | null;
    if (!first) return;
    const step = first.offsetWidth + parseFloat(getComputedStyle(element).columnGap);
    const end = element.scrollWidth - element.clientWidth;
    const position = element.scrollLeft;
    const left = direction > 0
      ? (position >= end - 2 ? 0 : Math.min(end, (Math.round(position / step) + 1) * step))
      : (position <= 2 ? end : Math.max(0, (Math.ceil(position / step) - 1) * step));
    element.scrollTo({ left, behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "instant" : "smooth" });
  }

  useEffect(() => {
    const element = track.current;
    if (!element) return;
    const observer = new ResizeObserver(() => setCanScroll(element.scrollWidth > element.clientWidth + 2));
    observer.observe(element);
    return () => observer.disconnect();
  }, [reviews.length]);

  useEffect(() => {
    if (!canScroll) return;
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const timer = window.setInterval(() => {
      const element = track.current;
      if (!element || reducedMotion.matches || document.hidden || drag.current || Date.now() < resumeAt.current) return;
      const bounds = element.getBoundingClientRect();
      if (bounds.bottom <= 0 || bounds.top >= window.innerHeight) return;
      move(1);
      delayAutoplay();
    }, 250);
    delayAutoplay();
    return () => window.clearInterval(timer);
  }, [canScroll]);

  if (!reviews.length) return null;

  return <section className={`section ${styles.section}`} aria-label="Reviews">
    <div className="site-container">
      <div id="reviews-track" className={styles.track} tabIndex={0} role="region" aria-roledescription="carousel" aria-label="Reviews" ref={track}
        onWheel={delayAutoplay}
        onTouchStart={delayAutoplay}
        onTouchMove={delayAutoplay}
        onTouchEnd={delayAutoplay}
        onPointerDown={event => {
          delayAutoplay();
          if (event.pointerType !== "mouse" || event.button !== 0) return;
          const element = event.currentTarget;
          element.dataset.dragging = "true";
          element.scrollTo({ left: element.scrollLeft, behavior: "instant" });
          drag.current = { id: event.pointerId, x: event.clientX, left: element.scrollLeft };
          element.setPointerCapture(event.pointerId);
        }}
        onPointerMove={event => {
          if (drag.current?.id !== event.pointerId) return;
          event.currentTarget.scrollLeft = drag.current.left - (event.clientX - drag.current.x);
        }}
        onPointerUp={endDrag}
        onPointerCancel={endDrag}
        onLostPointerCapture={endDrag}
        onKeyDown={event => {
          if (event.key === "ArrowLeft" || event.key === "ArrowRight") {
            event.preventDefault();
            delayAutoplay();
            move(event.key === "ArrowLeft" ? -1 : 1);
          }
        }}>
        {reviews.map(review => <article className={styles.card} key={review.id}>
          <div className={styles.profile}>
            {review.photo ? <div className={styles.photo}><Image src={review.photo.src} alt={review.photo.alt} fill loading="lazy" sizes="72px" draggable={false} /></div>
              : <div className={styles.demoPortrait} aria-hidden="true">{review.name.split(" ").map(part => part[0]).slice(0, 2).join("")}</div>}
            <div><h3>{review.name}</h3>
              {(review.role || review.company) && <p className={styles.role}>{[review.role, review.company].filter(Boolean).join(" · ")}</p>}
            </div>
          </div>
          <blockquote><span className={styles.quote} aria-hidden="true">“</span><p>{review.text}</p></blockquote>
        </article>)}
      </div>
    </div>
  </section>;
}

