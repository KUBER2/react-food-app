import React from "react";

import classes from "./MealItemForm.module.css";
import { useContext } from "react";
import CartContext from "../../Store/cart-context";

const MealItemForm = (props) => {
  const [ammount, setAmmount] = React.useState(1);
  const cartCtx = useContext(CartContext);

  const changeHandler = (e) => {
    console.log(e.target.value);
    setAmmount(e.target.value);
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();
    cartCtx.addToCart({ mealId: props.id, ammount: ammount });
  };

  return (
    <form onSubmit={formSubmitHandler} className={classes.form}>
      <label>Amount</label>
      <input
        type="number"
        min={0}
        step={1}
        defaultValue={ammount}
        onChange={changeHandler}
      ></input>
      <button type="submit">Add +</button>
    </form>
  );
};

export default MealItemForm;
