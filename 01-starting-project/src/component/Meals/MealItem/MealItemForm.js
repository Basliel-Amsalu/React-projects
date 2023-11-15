import React, { useRef, useState } from "react";
import classes from "./MealItemForm.module.css";
import Input from "../../UI/Input";

const MealItemForm = (props) => {
  const [amountIsValid, setAmountIsValid] = useState(true);

  const amountInput = useRef();

  const submitHandler = (e) => {
    e.preventDefault();
    const enteredAmount = amountInput.current.value;
    if (
      +enteredAmount < 1 ||
      +enteredAmount > 5 ||
      +enteredAmount.trim().length === 0
    ) {
      setAmountIsValid(false);
      return;
    }
    props.onAddToCart(enteredAmount);
  };
  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <Input
        ref={amountInput}
        label="Amount"
        input={{
          id: "amount_" + props.id,
          type: "number",
          min: "1",
          max: "5",
          step: "1",
          defaultValue: "1",
        }}
      />
      <button>+Add</button>
      {!amountIsValid && <p>please enter amount</p>}
    </form>
  );
};
export default MealItemForm;
