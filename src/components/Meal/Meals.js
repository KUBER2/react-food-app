import React, { useContext } from "react";

import Card from "../UI/Card";

import classes from "./Meals.module.css";
import MealsContext from "../../Store/meals-context";
import MealItem from "./MealItem";

const Meals = (props) => {
  const MealsCtx = useContext(MealsContext);
  const mealList = MealsCtx.meals.map((meal) => (
    <MealItem
      key={meal.id}
      description={meal.description}
      name={meal.name}
      id={meal.id}
      price={meal.price}
    ></MealItem>
  ));

  return (
    <div className={classes.meals}>
      <Card className={classes.card}>
        <ul>{mealList}</ul>
      </Card>
    </div>
  );
};
export default Meals;
