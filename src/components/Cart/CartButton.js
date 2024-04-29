import classes from './CartButton.module.css';
import { useDispatch, useSelector } from "react-redux";
import { cartBtnActions } from "../reduxreducer";
import { useEffect } from 'react';
import { cartArrayActions } from '../reduxreducer';
const CartButton = (props) => {
  const dispatch = useDispatch();
  const totalItemInCart = useSelector((state) => state.cartItems.cartItemsArray);
  const quantity = totalItemInCart.reduce((prev, curr) => prev + curr.quantity, 0);
  useEffect(() => {
    console.log(totalItemInCart)
  },[totalItemInCart])
  return (
    <button onClick={() => dispatch(cartBtnActions.toggle())} className={classes.button}>
      <span>My Cart</span>
      <span className={classes.badge}>{quantity ? quantity : 0}</span>
    </button>
  );
};

export default CartButton;
