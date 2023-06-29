import { useContext } from "react";
import "./App.css";
import Header from "./components/Header";
import MealsContext from "./Store/meals-context";
import Meals from "./components/Meal/Meals";
import Cart from "./components/Cart/Cart";

function App() {
  const ctx = useContext(MealsContext);
  console.log(ctx.meals);
  return (
    <>
      <Cart></Cart>
      <Header></Header>
      <main>
        <Meals />
      </main>
    </>
  );
}

export default App;
