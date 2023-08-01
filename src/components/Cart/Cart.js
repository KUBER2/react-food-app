import React, { useContext } from "react";

import classes from "./Cart.module.css";
import Modal from "../UI/Modal";
import CartItem from "./CartItem";

import CartContext from "../../Store/cart-context";
import MealsContext from "../../Store/meals-context";

const Cart = (props) => {
  const cartCtx = useContext(CartContext);
  const mealsCtx = useContext(MealsContext);
  let totalAmmount = 0;
  let items = [];
  const cartItems = cartCtx.cartItems;
  const meals = mealsCtx.meals;
  let cartLi;
  if (Array.isArray(cartItems) && cartItems.length > 0) {
    cartItems.forEach((element) => {
      let m = meals.find((e) => e.id === element.mealId);
      totalAmmount += Number(m.price) * Number(element.ammount);
      items.push({ ...m, ammount: element.ammount });
    });
    console.log(items);
    cartLi = items.map((i) => <CartItem item={i}></CartItem>);
    console.log(cartLi);
    console.log(totalAmmount);
  } else {
    console.log("NO items in chart");
  }

  return (
    <Modal onBackDropClick={props.onHideCard}>
      <div className={classes["cart-items"]}>
        <ul>{cartLi}</ul>
      </div>
      <div className={classes.total}>
        <span>Total amount</span>
        <span>{totalAmmount.toFixed(2)}</span>
      </div>
      <div className={classes.actions}>
        <button className={classes["button--alt"]} onClick={props.onHideCard}>
          Close
        </button>
        <button className={classes.button}>Order</button>
      </div>
    </Modal>
  );
};

export default Cart;
