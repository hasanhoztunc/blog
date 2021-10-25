import React from "react";
import styles from "./navBar.module.css";

const NavBar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.navItem}>About</div>
      <div className={(styles.navItem, styles.blogTitle)}>Hasan's Blog</div>
      <div className={styles.navItem}>References</div>
    </div>
  );
};

export default NavBar;
