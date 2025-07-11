import React from "react";

import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About me</h2>
      
      <div className={styles.content}>
        <img
          src={getImageUrl("about/aboutImage.png")}
          alt="Me sitting with a laptop"
          className={styles.aboutImage}
        />
        <ul className={styles.aboutItems}>
  <li className={styles.aboutItem}>
    <img src={getImageUrl("about/cursorIcon.png")} alt="Cursor icon" />
    <div className={styles.aboutItemText}>
      <h3>Full-Stack Developer</h3>
      <p>
        I build responsive web applications with clean frontends and efficient
        backend systems using modern frameworks and tools.
      </p>
    </div>
  </li>
  <li className={styles.aboutItem}>
    <img src={getImageUrl("about/serverIcon.png")} alt="Server icon" />
    <div className={styles.aboutItemText}>
      <h3>Machine Learning Enthusiast</h3>
      <p>
        I’ve worked on projects involving churn prediction, RNNs, Transformers,
      and Retrieval-Augmented Generation (RAG) using Hugging Face, scikit-learn,
      and Python-based ML tools.
      </p>
    </div>
  </li>
  <li className={styles.aboutItem}>
    <img src={getImageUrl("about/cursorIcon.png")} alt="Cursor icon" />
    <div className={styles.aboutItemText}>
      <h3>Data Analyst</h3>
      <p>
        I enjoy working with data — analyzing trends, cleaning datasets, and
        drawing insights using tools like Pandas, NumPy, and Matplotlib.
      </p>
    </div>
  </li>
</ul>

      </div>
    </section>
  );
};
