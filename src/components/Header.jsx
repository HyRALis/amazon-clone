import React from "react";

import styles from "./styles/Header.module.scss";

import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";

const Header = () => {
  return (
    <div className={styles.header}>
      <img
        src="/assets/amazon-logo.png"
        alt="Amazon Logo"
        className={styles.header__logo}
      />
      <div className={styles.header__search}>
        <input className={styles.header__searchInput} type="text" />
        <SearchIcon className={styles.header__searchIcon} />
      </div>
      <div className={styles.header__nav}>
        <div className={styles.header__element}>
          <span className={styles.header__optionLineOne}>Hello</span>
          <span className={styles.header__optionLineTwo}>Sign In</span>
        </div>
        <div className={styles.header__element}>
          <span className={styles.header__optionLineOne}>Returns</span>
          <span className={styles.header__optionLineTwo}>& Orders</span>
        </div>
        <div className={styles.header__element}>
          <span className={styles.header__optionLineOne}>Your</span>
          <span className={styles.header__optionLineTwo}>Prime</span>
        </div>
        <div className={styles.header__optionBasket}>
          <ShoppingBasketIcon />
          <span
            className={`${styles.header__optionLineTwo} ${styles.header__basketCount}`}
          >
            0
          </span>
        </div>
      </div>
    </div>
  );
};

export default Header;
