import React, { useContext } from "react";
import classes from "./MealItem.module.css";
import MealItemForm from "./MealItemForm";
import CartContext from "../../../context/Cart-context";

const MealItem = (props) => {
  const ctx = useContext(CartContext);
  const price = `$${props.price.toFixed(2)}`;

  const onAddToCartHandler = (amount) => {
    ctx.addItem({
      key: props.id,
      id: props.id,
      name: props.name,
      price: props.price,
      amount: amount,
    });
  };

  return (
    <li className={classes.meal}>
      <div>
        <h3>{props.name}</h3>
        <div className={classes.description}>{props.description}</div>
        <div className={classes.price}> {price} </div>
      </div>
      <div>
        <MealItemForm onAddToCart={onAddToCartHandler} id={props.id} />
      </div>
    </li>
  );
};

export default MealItem;
