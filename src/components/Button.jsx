import React from "react";

import styles from "./styles/Button.module.scss";

const Button = ({ children, onClickAction, type, width, color }) => {
  return (
    <button
      type={type}
      onClick={(e) => onClickAction(e)}
      className={`${styles.button} ${
        width === "fullWidth" && styles.fullWidth
      } ${color === "light" && styles.light}`}
    >
      {children}
    </button>
  );
};

export default Button;
