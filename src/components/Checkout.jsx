import React from "react";
import { useStateValue } from "../context/StateProvider";
import { BasketAuthBox } from "./BasketAuthBox";
import CheckoutProductCard from "./CheckoutProductCard";

import styles from "./styles/Checkout.module.scss";
import Subtotal from "./Subtotal";

const Checkout = () => {
  const [{ basket, user }, dispatch] = useStateValue();

  return (
    <div className={styles.checkout}>
      <div className={styles.checkout__left}>
        <img
          src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
          alt="Promotion Banner"
          className={styles.checkout__ad}
        />
        <div>
          <h2 className={styles.checkout__title}> Your Shoping Basket</h2>
          {user ? (
            <div className={styles.checkout__products}>
              {basket.map((product, index) => (
                <CheckoutProductCard
                  key={index}
                  id={product.id}
                  image={product.image}
                  title={product.title}
                  imageDescription={product.imageDescription}
                  rating={product.rating}
                  price={product.price}
                />
              ))}
            </div>
          ) : (
            <BasketAuthBox />
          )}
        </div>
      </div>
      <div className={styles.checkout__right}>
        <Subtotal />
      </div>
    </div>
  );
};

export default Checkout;
