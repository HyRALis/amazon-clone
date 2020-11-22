import React from "react";

import styles from "./styles/Button.module.scss";

const Button = ({ children, onClickAction, width }) => {
  return (
    <button
      onClick={() => onClickAction()}
      className={`${styles.button} ${
        width === "fullWidth" && styles.fullWidth
      }`}
    >
      {children}
    </button>
  );
};

export default Button;
