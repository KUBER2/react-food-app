import React, { useContext } from "react";

import Card from "../UI/Card";

import classes from "./Meals.module.css";
import MealsContext from "../../Store/meals-context";

const Meals = (props) => {
  const MealsCtx = useContext(MealsContext);

  return (
    <Card>
      <h1>{MealsCtx.meals[0].name}</h1>
      <p>{MealsCtx.meals[0].description}</p>
      <p>{MealsCtx.meals[0].price}</p>
    </Card>
  );
};
export default Meals;
