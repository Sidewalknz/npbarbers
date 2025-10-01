// Hero.tsx / Hero.jsx
"use client";

import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.inner}>
        <div className={styles.left} aria-hidden="true">
          <div
            className={styles.carvedLogo}
            role="img"
            aria-label="Brand mark engraved in wood"
          />
        </div>

        <div className={styles.right}>
          <div className={styles.content}>
            <h1 className={styles.title}>
              Where style and precision come together
            </h1>
            <div className={styles.ctaRow}>
              <a
                href="/booking"
                className={styles.bookButton}
                aria-label="Book an appointment now"
              >
                Book Now
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
