import React, { useState } from "react";

const CartContext = React.createContext({
  mealId: "",
  ammount: 0,
});

export const CartContextProvider = (props) => {
  const [cartItems, setCartItems] = useState([]);

  function addToCart(mealToAdd) {
    setCartItems((items) => {
      let i = items.findIndex((e) => e.mealId === mealToAdd.mealId);
      if (i < 0) {
        return [...items, mealToAdd];
      } else {
        items[i] = {
          mealId: mealToAdd.mealId,
          ammount: items[i].ammount + parseInt(mealToAdd.ammount),
        };
        return items;
      }
    });
  }
  const clearCart = () => {
    setCartItems([]);
  };

  const cartContextValue = {
    cartItems,
    addToCart,
    clearCart,
  };
  return (
    <CartContext.Provider value={cartContextValue}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartContext;
