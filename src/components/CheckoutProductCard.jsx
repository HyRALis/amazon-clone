import React from "react";

import styles from "./styles/CheckoutProductCard.module.scss";

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
        <Button
          id={id}
          image={image}
          title={title}
          rating={rating}
          price={price}
          imageDescription={imageDescription}
          action={"REMOVE_FROM_BASKET"}
        >
          Remove from Basket
        </Button>
      </div>
    </div>
  );
};
export default CheckoutProductCard;
