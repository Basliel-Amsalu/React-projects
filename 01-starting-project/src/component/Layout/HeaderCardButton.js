import React, { useContext } from "react";
import CartIcon from "../Cart/CartIcon";
import classes from "./HeaderCartButton.module.css";
import CartContext from "../../context/Cart-context";

const HeaderCardButton = (props) => {
  const ctx = useContext(CartContext);

  const numCart = ctx.items.reduce((curNumber, item) => {
    return parseInt(curNumber) + parseInt(item.amount);
  }, 0);
  return (
    <button
      className={classes.button}
      type={props.type}
      onClick={ctx.modalHandler}
    >
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>YOUR CART</span>
      <span className={classes.badge}>{numCart}</span>
      {/* {props.children} */}
    </button>
  );
};

export default HeaderCardButton;
