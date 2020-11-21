import React from "react";
import CurrencyFormat from "react-currency-format";
import { getTheBasketTotal } from "../context/reducer";
import { useStateValue } from "../context/StateProvider";

import styles from "./styles/Subtotal.module.scss";

const Subtotal = () => {
  const [state, dispatch] = useStateValue();
  return (
    <div className={styles.subtotal}>
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              Subtotal ({state.basket?.length} items): <strong>{value}</strong>
            </p>
            <small className={styles.subtotal__gift}>
              <input type="checkbox" /> This order contains a gift
            </small>
          </>
        )}
        decimalScale={2}
        value={getTheBasketTotal(state.basket)}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"$"}
      />
      <button>Proceed to Checkout</button>
    </div>
  );
};

export default Subtotal;
