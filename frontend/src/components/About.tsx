"use client";

import styles from "./About.module.css";

export default function About() {
  return (
    <section
      className={styles.about}
      id="about"
      aria-labelledby="about-title"
    >
      <div className={styles.inner}>
        <h2 id="about-title" className={styles.heading}>
          <svg
            viewBox="0 0 500 120"
            xmlns="http://www.w3.org/2000/svg"
            className={styles.curvedTitle}
          >
            <defs>
              <path
                id="about-curve"
                d="M 50 100 Q 250 10 450 100"
                fill="transparent"
              />
            </defs>
            <text width="500">
              <textPath
                xlinkHref="#about-curve"
                startOffset="50%"
                textAnchor="middle"
              >
                – About Us –
              </textPath>
            </text>
          </svg>
        </h2>

        <p className={styles.text}>
          At <strong>NP Barbers</strong>, style and precision come together to
          create a look that’s uniquely yours. Our expert haircuts are crafted
          with care, ensuring your individuality shines through. Whether it’s a
          fresh cut or a sharp beard trim, we take pride in every detail. Each
          visit to NP Barbers is more than just a grooming session, it’s a moment
          of transformation. Step into a space where every haircut speaks
          confidence.
        </p>
      </div>
    </section>
  );
}
