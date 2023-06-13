import React from "react";

import classes from "./MealItemForm.module.css";

const MealItemForm = (props) => {
  console.log(props.id);
  const formSubmitHandler = (event) => {
    event.preventDefault();
  };

  return (
    <form onSubmit={formSubmitHandler} className={classes.form}>
      <label>Amount</label>
      <input type="number" min={0} step={1} defaultValue={1}></input>
      <button type="submit">Add +</button>
    </form>
  );
};

export default MealItemForm;
