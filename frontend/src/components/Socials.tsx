"use client";

import Image from "next/image";
import Link from "next/link";
import styles from "./Socials.module.css";

export default function Socials() {
  return (
    <section
      className={styles.socials}
      id="socials"
      aria-labelledby="socials-title"
    >
      <div className={styles.inner}>
        <h2 id="socials-title" className={styles.heading}>
          <svg
            viewBox="0 0 500 120"
            xmlns="http://www.w3.org/2000/svg"
            className={styles.curvedTitle}
          >
            <defs>
              <path
                id="socials-curve"
                d="M 50 100 Q 250 10 450 100"
                fill="transparent"
              />
            </defs>
            <text width="500">
              <textPath
                xlinkHref="#socials-curve"
                startOffset="50%"
                textAnchor="middle"
              >
                – Follow Our Socials –
              </textPath>
            </text>
          </svg>
        </h2>

        <ul className={styles.links}>
          <li>
            <Link
              href="https://www.facebook.com/npthebarber"
              target="_blank"
              rel="noreferrer"
              aria-label="Facebook"
              className={styles.iconLink}
            >
              <Image
                src="/icons/facebook.svg"
                alt="Facebook"
                width={40}
                height={40}
              />
            </Link>
          </li>
          <li>
            <Link
              href="https://www.instagram.com/npbarbers/"
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
              className={styles.iconLink}
            >
              <Image
                src="/icons/instagram.svg"
                alt="Instagram"
                width={40}
                height={40}
              />
            </Link>
          </li>
        </ul>
      </div>
    </section>
  );
}
