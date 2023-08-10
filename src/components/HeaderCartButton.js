import { useContext } from "react";
import CartIcon from "./Cart/CartIcon";
import classes from "./HeaderCartButton.module.css";
import CartContext from "../Store/cart-context";

const HeaderCartButton = (props) => {
  const cartCtx = useContext(CartContext);
  let numberOfMealsInCart = 0;
  if (cartCtx.cartItems.length > 0) {
    numberOfMealsInCart = cartCtx.cartItems
      .map((m) => m.ammount)
      .reduce((prev, curr) => {
        return prev + curr;
      }, 0);
  }

  return (
    <button className={classes.button} onClick={props.onClick}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>{numberOfMealsInCart}</span>
    </button>
  );
};

export default HeaderCartButton;
