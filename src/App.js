import React from "react";

import styles from "./App.module.css";

import NavBar from "./components/NavBar/NavBar";
import Home from "./views/Home/Home";

const App = () => {
  return (
    <div className={styles.App}>
      <NavBar />
      <Home />
    </div>
  );
};

export default App;
