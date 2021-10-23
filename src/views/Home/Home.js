import React from "react";
import styles from "./Home.module.css";

import HomeBlog from "../../components/HomeBlog/HomeBlog";

const Home = () => {
  return (
    <div className={styles.homeWrapper}>
      <HomeBlog />
      <HomeBlog />
      <HomeBlog />
      <HomeBlog />
    </div>
  );
};

export default Home;
