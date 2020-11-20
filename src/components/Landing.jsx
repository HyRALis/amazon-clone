import React from "react";
import ProductCard from "./ProductCard";

import styles from "./styles/Landing.module.scss";

const Landing = () => {
  return (
    <div className={styles.landing}>
      <div className={styles.landing__container}>
        <img
          className={styles.landing__heroImage}
          src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
          alt="Hero section amazon"
        />
        <div className={styles.landing__productRow}>
          <ProductCard
            id="12321341"
            title={
              "The Lean Startup: How Constant Innovation Creates Radically Successful Businesses Paperback"
            }
            price={25.99}
            image="https://images-na.ssl-images-amazon.com/images/I/81jgCiNJPUL.jpg"
            rating={4}
            imageDescription={"The lean startup"}
          />
          <ProductCard
            id="49538094"
            title="Kenwood kMix Stand Mixer for Baking, Stylish Kitchen Mixer with K-beater, Dough Hook and Whisk, 5 Litre Glass Bowl"
            price={239.0}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/81O%2BGNdkzKL._AC_SX450_.jpg"
            imageDescription={"Kenwood kMix Stand Mixer"}
          />
        </div>
        <div className={styles.landing__productRow}>
          <ProductCard
            id="4903850"
            title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor"
            price={199.99}
            rating={3}
            image="https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SX466_.jpg"
            imageDescription={"Samsung LC49RG90SSUXEN"}
          />
          <ProductCard
            id="23445930"
            title="Amazon Echo (3rd generation) | Smart speaker with Alexa, Charcoal Fabric"
            price={98.99}
            rating={5}
            image="https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?$300x400_retinamobilex2$"
          />
          <ProductCard
            id="3254354345"
            title="New Apple iPad Pro (12.9-inch, Wi-Fi, 128GB) - Silver (4th Generation)"
            price={598.99}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/816ctt5WV5L._AC_SX385_.jpg"
            imageDescription={"Apple iPad Pro"}
          />
        </div>
        <div className={styles.landing__productRow}>
          <ProductCard
            id="90829332"
            title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor - Super Ultra Wide Dual WQHD 5120 x 1440"
            price={1094.98}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/6125mFrzr6L._AC_SX355_.jpg"
            imageDescription={"Apple iPad Pro"}
          />
        </div>
      </div>
    </div>
  );
};

export default Landing;
