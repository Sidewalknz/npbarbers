"use client";

import styles from "./Services.module.css";

export default function Services() {
  return (
    <section className={styles.services} id="services" aria-labelledby="services-title">
      <div className={styles.inner}>
        <h2 id="services-title" className={styles.heading}>Services</h2>

        <div className={styles.grid}>
          {/* 1) Restyle & Transformation */}
          <article className={styles.card}>
            <div className={styles.icon} aria-hidden="true">
              {/* Spark/refresh icon */}
              <svg viewBox="0 0 24 24" width="48" height="48" fill="currentColor">
                <path d="M11 2a1 1 0 0 1 .92.61l2.28 5.3 5.7.44a1 1 0 0 1 .56 1.75l-4.34 3.78 1.33 5.57a1 1 0 0 1-1.47 1.1L12 17.98l-4.98 2.57a1 1 0 0 1-1.47-1.1l1.33-5.57L2.54 10.1a1 1 0 0 1 .56-1.75l5.7-.44 2.28-5.3A1 1 0 0 1 11 2z"/>
              </svg>
            </div>
            <h3 className={styles.title}>Restyle & Transformation</h3>
            <p className={styles.blurb}>
              Perfect if you’re changing your look or haven’t had a cut in 10+ weeks. Extra time for consultation and fresh styling.
            </p>
          </article>

          {/* 2) Fades & Classic Cuts */}
          <article className={styles.card}>
            <div className={styles.icon} aria-hidden="true">
              {/* Scissors icon */}
              <svg viewBox="0 0 24 24" width="48" height="48" fill="currentColor">
                <path d="M8.5 8A2.5 2.5 0 1 1 6 5.5 2.5 2.5 0 0 1 8.5 8Zm0 8A2.5 2.5 0 1 1 6 13.5 2.5 2.5 0 0 1 8.5 16Zm7.72-3.96L13.41 12l2.81-.04a3 3 0 1 0 0 2.08ZM20 5l-7 7 7 7-1.41 1.41L11.17 12l7.42-8.41Z"/>
              </svg>
            </div>
            <h3 className={styles.title}>Fades & Classic Cuts</h3>
            <p className={styles.blurb}>
              Skin fades, tapers, scissor cuts, buzz cuts, and senior trims — clean, sharp, and tailored to your style.
            </p>
          </article>

          {/* 3) Beard & Combo */}
          <article className={styles.card}>
            <div className={styles.icon} aria-hidden="true">
              {/* Beard icon */}
              <svg viewBox="0 0 24 24" width="48" height="48" fill="currentColor">
                <path d="M12 2a7 7 0 0 0-7 7c0 3.31 2.69 6 6 6h2a6 6 0 0 0 6-6 7 7 0 0 0-7-7Zm-3 9a1 1 0 1 1 2 0 2 2 0 1 0 4 0 1 1 0 1 1 2 0 4 4 0 1 1-8 0Z"/>
                <path d="M6 13c.9 4.67 3.79 7 6 7s5.1-2.33 6-7c-1.32 1.27-3.1 2-6 2s-4.68-.73-6-2Z"/>
              </svg>
            </div>
            <h3 className={styles.title}>Beard & Combo</h3>
            <p className={styles.blurb}>
              Sharp beard trims, fades, and combination services to keep both hair and beard perfectly in sync.
            </p>
          </article>
        </div>
      </div>
    </section>
  );
}
