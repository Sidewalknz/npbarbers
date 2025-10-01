"use client";

import Image from "next/image";
import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <section className={styles.hero}>
      {/* Left column: logo only */}
      <div className={styles.left}>
        {/* If logo2.svg has intrinsic size, Next/Image is fine. Otherwise, <img> is simplest for SVGs. */}
        <img
          src="/logo2.svg"
          alt="NPBarbers logo"
          className={styles.logo}
          decoding="async"
        />
      </div>

      {/* Right column: text + CTA + image */}
      <div className={styles.right}>
        <div className={styles.content}>
          <h1 className={styles.title}>Where style and precision come together</h1>
          <div className={styles.ctaRow}>
            <a href="/booking" className={styles.bookButton} aria-label="Book an appointment now">
              Book Now
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
