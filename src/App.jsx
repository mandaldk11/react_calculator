import React, { useState } from "react";
import styles from "../src/projects/Calculator/componrents/App.module.css";
import Display from "./projects/Calculator/componrents/Display";
import BtnContainer from "./projects/Calculator/componrents/BtnContainer";

function App() {
  const [calVal, setCalVal] = useState(" ");
  const onButtonClick = (buttonText) => {
    if (buttonText === "C") {
      setCalVal("");
    } else if (buttonText === "=") {
      let result = eval(calVal);
      setCalVal(result);
    } else {
      let newDisplayVal = calVal + buttonText;
      setCalVal(newDisplayVal);
    }
  };
  return (
    <center>
      <div className={styles.calculator}>
        <h2 className={styles.heading}>Calculator</h2>
        <Display displayVal={calVal} />
        <BtnContainer onButtonClick={onButtonClick} />
      </div>
    </center>
  );
}

export default App;
