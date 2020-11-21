import React from "react";

import styles from "./styles/StarRating.module.scss";

import StarIcon from "@material-ui/icons/Star";

const StarRating = ({ rating }) => {
  return (
    <div className={styles.starRating}>
      {Array(rating)
        .fill()
        .map((star, index) => (
          <StarIcon key={index} />
        ))}
    </div>
  );
};
export default StarRating;
