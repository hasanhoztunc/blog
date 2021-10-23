import React from "react";
import styles from "./navBar.module.css";

const NavBar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.navContainer}>
        <div>Hasan</div>
        <div className={styles.content}>
          <div className="about">About</div>
          <div className="references">References</div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
