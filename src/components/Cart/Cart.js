import Card from "../UI/Card";
import { useEffect } from "react";
import classes from "./Cart.module.css";
import CartItem from "./CartItem";
import { useSelector } from "react-redux";

const Cart = (props) => {

  const totalItemInCart = useSelector((state) => state.cartItems.cartItemsArray);
  useEffect(() => {
    console.log(totalItemInCart)
  },[totalItemInCart])
  return (
    <Card className={classes.cart}>
      <h2>Your Shopping Cart</h2>
      <ul>
        {
          totalItemInCart.map((item) => {
          return <CartItem
            item={{ title: item.title, quantity: item.quantity, price: item.price  }}
           />
          })
        }
      </ul>
    </Card>
  );
};

export default Cart;
