import React from "react";

import styles from "./Skills.module.css";
import skills from "../../data/skills.json";
import { getImageUrl } from "../../utils";

export const Skills = () => {
  return (
    <section className={styles.container} id="experience">
      <h2 className={styles.title}>Skills</h2>
      <br></br>
      <h5>Click on the icon to view certificates</h5>
      <div className={styles.content}>
        <div className={styles.skills}>
          {skills.map((skill, id) => {
            return (
              <div key={id} className={styles.skill}>
                <div className={styles.skillImageContainer}>
                  
                  <a
                    href={skill.certificateUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.skillItem}
                    title={`View ${skill.title} Certificate`}
                    >
                    <img src={getImageUrl(skill.imageSrc)} alt={skill.title} />
                    </a>
                </div>
                <p>{skill.title}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

