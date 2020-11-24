import React from "react";
import { useHistory } from "react-router-dom";

import styles from "./styles/BasketAuthBox.module.scss";

import Button from "./Button";

export const BasketAuthBox = () => {
  const history = useHistory();

  const redirectToLogin = () => {
    history.push("/login");
  };
  return (
    <div className={styles.basketAuthBox}>
      <div className={styles.basketAuthBox__illustration}>
        <img
          src="https://m.media-amazon.com/images/G/01/cart/empty/kettle-desaturated._CB445243794_.svg"
          alt="Empty Basket"
        />
      </div>
      <div className={styles.basketAuthBox__content}>
        <h1>Your Amazon Basket is empty</h1>
        <div className={styles.basketAuthBox__buttons}>
          <Button onClickAction={redirectToLogin}>
            Sing in to your account
          </Button>
          <Button color={"light"} onClickAction={redirectToLogin}>
            Sing up now
          </Button>
        </div>
      </div>
    </div>
  );
};
