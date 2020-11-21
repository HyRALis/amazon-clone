import React from "react";
import styles from "./styles/ProductCard.module.scss";

import { useStateValue } from "../context/StateProvider";
import StarRating from "./StarRating";
import Button from "./Button";

export const ProductCard = ({
  id,
  title,
  image,
  imageDescription,
  price,
  rating,
}) => {
  const [{ basket }, dispatch] = useStateValue();

  return (
    <div className={styles.product}>
      <div className={styles.product__info}>
        <p>{title}</p>
        <p className={styles.product__price}>
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <StarRating rating={rating} />
      </div>
      <img src={image} alt={imageDescription} />
      <Button
        id={id}
        title={title}
        price={price}
        rating={rating}
        image={image}
        imageDescription={imageDescription}
        action={"ADD_TO_BASKET"}
      >
        Add To Basket
      </Button>
    </div>
  );
};

export default ProductCard;
