"use client";

import Link from "next/link";
import styles from "./BookNow.module.css";

export default function BookNow() {
  return (
    <section
      className={styles.bookNow}
      id="book"
      aria-labelledby="book-title"
    >
      <div className={styles.inner}>
        <h2 id="book-title" className={styles.heading}>
          <svg
            viewBox="0 0 500 120"
            xmlns="http://www.w3.org/2000/svg"
            className={styles.curvedTitle}
          >
            <defs>
              <path
                id="book-curve"
                d="M 50 100 Q 250 10 450 100"
                fill="transparent"
              />
            </defs>
            <text width="500">
              <textPath
                xlinkHref="#book-curve"
                startOffset="50%"
                textAnchor="middle"
              >
                – Book Now –
              </textPath>
            </text>
          </svg>
        </h2>

        <p className={styles.text}>
          Secure your spot today and experience a fresh cut in a space where{" "}
          <strong>style meets precision</strong>.
        </p>

        <Link
          href="https://www.fresha.com/a/np-barbers-nelson-530a-main-road-stoke-hidqwqfg/booking?allOffer=true"
          target="_blank"
          rel="noreferrer"
          className={styles.button}
        >
          Book an Appointment
        </Link>
      </div>
    </section>
  );
}
