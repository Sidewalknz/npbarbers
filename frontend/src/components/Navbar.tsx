"use client";

import Image from "next/image";
import Link from "next/link";
import styles from "./Navbar.module.css";

export default function Navbar() {
  return (
    <header className={styles.navbar}>
      <div className={styles.inner}>
        {/* Pole */}
        <div className={styles.pole}>
          {/* Logo */}
          <Link href="/" className={styles.brand} aria-label="NPBarbers Home">
            <Image
              src="/logo4.svg"
              alt="NPBarbers Logo"
              width={200}
              height={50}
              priority
            />
          </Link>

          {/* Nav + CTA */}
          <nav className={styles.nav} aria-label="Primary">
            <ul className={styles.links}>
              <li>
                <Link
                  href="https://www.facebook.com/npthebarber"
                  target="_blank"
                  rel="noreferrer"
                  className={styles.iconLink}
                  aria-label="Facebook"
                >
                  <Image
                    src="/icons/facebook.svg"
                    alt="Facebook"
                    width={20}
                    height={20}
                  />
                </Link>
              </li>
              <li>
                <Link
                  href="https://www.instagram.com/npbarbers/"
                  target="_blank"
                  rel="noreferrer"
                  className={styles.iconLink}
                  aria-label="Instagram"
                >
                  <Image
                    src="/icons/instagram.svg"
                    alt="Instagram"
                    width={20}
                    height={20}
                  />
                </Link>
              </li>
            </ul>

            {/* CTA button */}
            <Link
              href="https://www.fresha.com/a/np-barbers-nelson-530a-main-road-stoke-hidqwqfg/booking?allOffer=true&cartId=fcd8e461-6c4a-43eb-b68f-c534755725dc"
              target="_blank"
              rel="noreferrer"
              className={styles.cta}
            >
              Book Now
            </Link>
          </nav>
        </div>

        {/* Left cap */}
        <div className={`${styles.cap} ${styles.capLeft}`} aria-hidden="true">
          <Image
            src="/icons/end.svg"
            alt=""
            width={82}
            height={82}
            priority
          />
        </div>

        {/* Right cap */}
        <div className={`${styles.cap} ${styles.capRight}`} aria-hidden="true">
          <Image
            src="/icons/end.svg"
            alt=""
            width={82}
            height={82}
            priority
          />
        </div>
      </div>
    </header>
  );
}
