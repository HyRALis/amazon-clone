import React from "react";
import { useStateValue } from "../context/StateProvider";

import styles from "./styles/Button.module.scss";

const Button = ({
  children,
  id,
  title,
  image,
  imageDescription,
  price,
  rating,
  action,
}) => {
  const [{ basket }, dispatch] = useStateValue();

  const actionOnClick = (action) => {
    dispatch({
      type: action,
      item: {
        id,
        title,
        image,
        price,
        rating,
        imageDescription,
      },
    });
  };

  return (
    <button onClick={() => actionOnClick(action)} className={styles.button}>
      {children}
    </button>
  );
};

export default Button;
