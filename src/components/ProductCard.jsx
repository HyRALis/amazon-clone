import React from "react";
import styles from "./styles/ProductCard.module.scss";

import StarIcon from "@material-ui/icons/Star";

export const ProductCard = ({
  id,
  title,
  image,
  imageDescription,
  price,
  rating,
}) => {
  return (
    <div className={styles.product}>
      <div className={styles.product__info}>
        <p>{title}</p>
        <p className={styles.product__price}>
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className={styles.product__rating}>
          {Array(rating)
            .fill()
            .map((star, i) => (
              <StarIcon />
            ))}
        </div>
      </div>
      <img src={image} alt={imageDescription} />
      <button>Add To Basket</button>
    </div>
  );
};

export default ProductCard;
