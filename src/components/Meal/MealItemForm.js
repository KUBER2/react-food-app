import React from "react";

import classes from "./MealItemForm.module.css";

const MealItemForm = (props) => {
  const [ammount, setAmmount] = React.useState(1);

  const changeHandler = (e) => {
    console.log(e.target.value);
    setAmmount(e.target.value);
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();
    console.log(event);
    console.log(event.target.value);
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
