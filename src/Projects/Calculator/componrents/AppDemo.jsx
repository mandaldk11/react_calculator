import React from "react";
import styles from "./App.module.css";
import Display from "./projects/Calculator/componrents/Display";
import BtnContainer from "./projects/Calculator/componrents/BtnContainer";

function App() {
  return (
    <div className={styles.calculator}>
      <Display />
      <BtnContainer />
    </div>
  );
}

export default App;
