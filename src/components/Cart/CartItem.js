import React from "react";

const CartItem = (props) => {
  return (
    <li id={props.item.id}>
      <span style={{ float: "left" }}>
        {props.item.name} X {props.item.ammount}
      </span>{" "}
      <span style={{ float: "right" }}>
        {(Number(props.item.ammount) * Number(props.item.price)).toFixed(2)}
      </span>
    </li>
  );
};

export default CartItem;
