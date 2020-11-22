import React from "react";

import styles from "./styles/CheckoutProductCard.module.scss";

import { useStateValue } from "../context/StateProvider";
import StarRating from "./StarRating";
import Button from "./Button";

const CheckoutProductCard = ({
  id,
  image,
  title,
  rating,
  price,
  imageDescription,
}) => {
  const [{ basket }, dispatch] = useStateValue();

  const basketManipulation = () => {
    const REMOVE_FROM_BASKET = "REMOVE_FROM_BASKET";
    dispatch({
      type: REMOVE_FROM_BASKET,
      item: {
        id,
      },
    });
  };

  return (
    <div className={styles.productCard}>
      <img
        className={styles.productCard__image}
        src={image}
        alt={imageDescription}
      />
      <div className={styles.productCard__info}>
        <p className={styles.productCard__title}>{title}</p>
        <p className={styles.productCard__price}>
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <StarRating rating={rating} />
        <Button id={id} onClickAction={basketManipulation}>
          Remove from Basket
        </Button>
      </div>
    </div>
  );
};
export default CheckoutProductCard;
