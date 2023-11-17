import React from "react";
import styles from "./BtnContainer.module.css";
function BtnContainer({ onButtonClick }) {
  const buttonNames = [
    "C",
    "1",
    "2",
    "+",
    "3",
    "4",
    "-",
    "5",
    "6",
    "*",
    "7",
    "8",
    "/",
    "=",
    "9",
    "0",
    ".",
  ];
  return (
    <div className={styles.btnContainer}>
      {buttonNames.map((item) => (
        <button
          key={item}
          className={styles.button}
          onClick={() => onButtonClick(item)}
        >
          {item}
        </button>
      ))}
    </div>
  );
}

export default BtnContainer;
