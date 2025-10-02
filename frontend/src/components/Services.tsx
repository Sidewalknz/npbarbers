"use client";

import Image from "next/image";
import styles from "./Services.module.css";

export default function Services() {
  return (
    <section
      className={styles.services}
      id="services"
      aria-labelledby="services-title"
    >
      <div className={styles.inner}>
        <h2 id="services-title" className={styles.heading}>
          <svg
            viewBox="0 0 500 120"
            xmlns="http://www.w3.org/2000/svg"
            className={styles.curvedTitle}
          >
            <defs>
              <path
                id="curve"
                d="M 50 100 Q 250 10 450 100"
                fill="transparent"
              />
            </defs>
            <text width="500">
              <textPath
                xlinkHref="#curve"
                startOffset="50%"
                textAnchor="middle"
              >
                – Services –
              </textPath>
            </text>
          </svg>
        </h2>

        <div className={styles.grid}>
          {/* 1) Restyle & Transformation */}
          <article className={styles.card}>
            <div className={styles.icon} aria-hidden="true">
              <Image
                src="/icons/restyle.svg"
                alt=""
                width={48}
                height={48}
                priority
              />
            </div>
            <h3 className={styles.title}>Restyle & Transformation</h3>
            <p className={styles.blurb}>
              Perfect if you’re changing your look or haven’t had a cut in 10+
              weeks. Extra time for consultation and fresh styling.
            </p>
          </article>

          {/* 2) Fades & Classic Cuts */}
          <article className={styles.card}>
            <div className={styles.icon} aria-hidden="true">
              <Image src="/icons/cuts.svg" alt="" width={48} height={48} />
            </div>
            <h3 className={styles.title}>Fades & Classic Cuts</h3>
            <p className={styles.blurb}>
              Skin fades, tapers, scissor cuts, buzz cuts, and senior trims —
              clean, sharp, and tailored to your style.
            </p>
          </article>

          {/* 3) Beard & Combo */}
          <article className={styles.card}>
            <div className={styles.icon} aria-hidden="true">
              <Image src="/icons/beard.svg" alt="" width={48} height={48} />
            </div>
            <h3 className={styles.title}>Beard & Combo</h3>
            <p className={styles.blurb}>
              Sharp beard trims, fades, and combination services to keep both
              hair and beard perfectly in sync.
            </p>
          </article>
        </div>
      </div>
    </section>
  );
}
