import React, { useContext } from "react";

import Card from "../UI/Card";

import classes from "./Meals.module.css";
import MealsContext from "../../Store/meals-context";
import MealItem from "./MealItem";

const Meals = (props) => {
  const MealsCtx = useContext(MealsContext);
  console.log(MealsCtx.meals);
  const mealList = MealsCtx.meals.map((meal) => (
    <MealItem
      description={meal.description}
      name={meal.name}
      id={meal.id}
      price={meal.price}
    ></MealItem>
  ));

  console.log(mealList);
  return (
    <div className={classes.meals}>
      <Card className={classes.card}>
        <ul>{mealList}</ul>
      </Card>
    </div>
  );
};
export default Meals;
