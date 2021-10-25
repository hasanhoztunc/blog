import React from "react";

import styles from "./HomeBlog.module.css";

import Button from "../../utils/toolbox/Button/Button";

const HomeBlog = () => {
  return (
    <div>
      <div className={styles.homeBlog}>
        <img src="" height="200" width="230" />
        <div className={styles.content}>
          <div className={styles.topInfo}>
            <div>#Guides</div>
            <div className={styles.readTime}>9 Minutes Reading</div>
          </div>
          <div className={styles.blogTitle}>
            Coventry City Guide Including Coventry Hotels
          </div>
          <div className={styles.blogSummary}>
            The diseases most commonly seen in travellers are diarrhoea, malaria
            (if you travel in a malaria-infested area), accidents (when
            travelling by automobile or swimming), wound infections and…
          </div>
          <div>
            <Button title="Read More" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeBlog;
