import React from "react";
import { useHistory } from "react-router-dom";

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
  const [{ basket, user }, dispatch] = useStateValue();

  const history = useHistory();

  const basketManipulation = () => {
    const ADD_TO_BASKET = "ADD_TO_BASKET";
    if (user !== null) {
      dispatch({
        type: ADD_TO_BASKET,
        item: {
          id,
          title,
          image,
          price,
          rating,
          imageDescription,
        },
      });
    } else {
      history.push("/login");
    }
  };

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
      <Button onClickAction={basketManipulation}>Add To Basket</Button>
    </div>
  );
};

export default ProductCard;
