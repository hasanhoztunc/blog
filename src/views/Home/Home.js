import React from "react";
import styles from "./Home.module.css";

import HomeBlog from "../../components/app/HomeBlog/HomeBlog";

const Home = () => {
  return (
    <div className={styles.homeWrapper}>
      <div className={styles.home}>
        <HomeBlog />
        <HomeBlog />
      </div>
    </div>
  );
};

export default Home;
