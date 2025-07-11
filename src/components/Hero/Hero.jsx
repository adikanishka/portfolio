import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Kanishka</h1>
        <p className={styles.description}>
          I am a curious and enthusiastic Computer Science student with a strong interest in software development, 
          data analysis, and machine learning. I enjoy working on real-world projects that solve meaningful problems — 
          where I can combine creativity with logic to build something useful.
        </p>
        <a href="mailto:adikanishka06@gail.com" className={styles.contactBtn}>
          Contact Me
        </a>
      </div>
      <img
        src={getImageUrl("hero/heroImage.png")}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
