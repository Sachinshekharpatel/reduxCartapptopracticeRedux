import classes from "./CartItem.module.css";
import {useDispatch , useSelector } from "react-redux";
import { useEffect } from "react";
import { cartArrayActions } from "../reduxreducer";
const CartItem = (props) => {
  const { title, quantity, price, id } = props.item;
  const dispatch = useDispatch();
  const totalItemInCart = useSelector((state) => state.cartItems.cartItemsArray);
  useEffect(() => {
      console.log(totalItemInCart)
  },[totalItemInCart])
  return (
    <li key={Math.random()} className={classes.item}>
      <header>
        <h3>{title}</h3>
        <div className={classes.price}>
          ${price*quantity}
          <span className={classes.itemprice}>(${price}/item)</span>
        </div>
      </header>
      <div className={classes.details}>
        <div className={classes.quantity}>
          x <span>{quantity}</span>
        </div>
        <div className={classes.actions}>
          <button onClick={() => dispatch(cartArrayActions.removeItem(title))} >-</button>
          <button onClick={() => dispatch(cartArrayActions.addItem({title:title,price:price,id:id,quantity:1}))}>+</button>
        </div>
      </div>
    </li>
  );
};

export default CartItem;
