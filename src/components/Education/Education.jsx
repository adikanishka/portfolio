import React from "react";

import styles from "./Education.module.css";
import education from "../../data/education.json";
import { getImageUrl } from "../../utils";

export const Education = () => {
  return (
    <section className={styles.container} id="education">
      <h2 className={styles.title}>Education</h2>
      <div className={styles.content}>
        <ul className={styles.educationList}>
          {education.map((eduItem, index) => (
            <li key={index} className={styles.educationItem}>
              <img
                src={getImageUrl(eduItem.imageSrc)}
                alt={`${eduItem.institution} Logo`}
              />
              <div className={styles.educationItemDetails}>
                <h3>{`${eduItem.degree}, ${eduItem.institution}`}</h3>
                <p>{`${eduItem.startDate} - ${eduItem.endDate}`}</p>
                <ul>
                  {eduItem.details.map((detail, id) => (
                    <li key={id}>{detail}</li>
                  ))}
                </ul>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};
