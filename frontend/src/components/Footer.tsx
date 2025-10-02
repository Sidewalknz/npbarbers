"use client";

import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <p className={styles.copy}>
          © {new Date().getFullYear()} NP Barbers. All rights reserved.
        </p>
        <p className={styles.credit}>
          Made by{" "}
          <a
            href="https://sidewalks.co.nz"
            target="_blank"
            rel="noreferrer"
            className={styles.link}
          >
            Sidewalk
          </a>
        </p>
      </div>
    </footer>
  );
}
