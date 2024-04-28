import classes from './CartButton.module.css';
import { useDispatch, useSelector } from "react-redux";
import { cartBtnActions } from "../reduxreducer";
import { useEffect } from 'react';
const CartButton = (props) => {
  const dispatch = useDispatch();
 
  return (
    <button onClick={() => dispatch(cartBtnActions.toggle())} className={classes.button}>
      <span>My Cart</span>
      <span className={classes.badge}>1</span>
    </button>
  );
};

export default CartButton;
