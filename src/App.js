import { useContext } from "react";
import "./App.css";
import Header from "./components/Header";
import MealsContext from "./Store/meals-context";
import Meals from "./components/Meal/Meals";

function App() {
  const ctx = useContext(MealsContext);
  console.log(ctx.meals);
  return (
    <>
      <Header></Header>
      <Meals></Meals>
    </>
  );
}

export default App;
