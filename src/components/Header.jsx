import React from "react";
import { Link } from "react-router-dom";

import styles from "./styles/Header.module.scss";

import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import { useStateValue } from "../context/StateProvider";
import { auth } from "../firebase";

const Header = () => {
  const [{ basket, user }, dispatch] = useStateValue();

  const handleAuthentication = () => {
    if (user) {
      auth.signOut();
      alert("You have Signed Out! 😢  Hope to see you soon !");
    }
  };

  return (
    <div className={styles.header}>
      <Link to="/">
        <img
          src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
          alt="Amazon Logo"
          className={styles.header__logo}
        />
      </Link>
      <div className={styles.header__search}>
        <input className={styles.header__searchInput} type="text" />
        <SearchIcon className={styles.header__searchIcon} />
      </div>
      <div className={styles.header__nav}>
        <Link to={!user && "/login"}>
          <div
            onClick={handleAuthentication}
            className={styles.header__element}
          >
            <span className={styles.header__optionLineOne}>
              Hello {user ? `${user.email}` : "Guest"}
            </span>
            <span className={styles.header__optionLineTwo}>
              {user ? "Sign Out" : "Sign In"}
            </span>
          </div>
        </Link>
        <div className={styles.header__element}>
          <span className={styles.header__optionLineOne}>Returns</span>
          <span className={styles.header__optionLineTwo}>& Orders</span>
        </div>
        <div className={styles.header__element}>
          <span className={styles.header__optionLineOne}>Your</span>
          <span className={styles.header__optionLineTwo}>Prime</span>
        </div>
        <Link to="/checkout">
          <div className={styles.header__optionBasket}>
            <ShoppingBasketIcon />
            <span
              className={`${styles.header__optionLineTwo} ${styles.header__basketCount}`}
            >
              {basket.length}
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Header;
