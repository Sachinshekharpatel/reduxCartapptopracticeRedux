import { Fragment, useEffect, useState } from "react";
import Cart from "./components/Cart/Cart";
import Layout from "./components/Layout/Layout";
import Products from "./components/Shop/Products";
import { useSelector } from "react-redux";
import { cartBtnActions } from "./components/reduxreducer";
import axios from "axios";
import Card from "./components/UI/Card";
import { useDispatch } from "react-redux";
import Notification from "./components/UI/notification";
import ProductItem from "./components/Shop/ProductItem";
function App() {
  const dispatch = useDispatch();
  const notificationStatus = useSelector(
    (state) => state.cartButton.notification
  );
  const dataTosend = useSelector((state) => state.cartItems.cartItemsArray);
  const selectBtnModalstatus = useSelector(
    (state) => state.cartButton.cartBtnModal
  );
 
  // const sendingdataBoolean = useSelector(state => state.cartButton.sendingDataState)
  const url = `https://react-project-ftshekhar-default-rtdb.europe-west1.firebasedatabase.app/cartItems.json`;
  useEffect(() => {
    console.log(selectBtnModalstatus);
    const sendcartData = async () => {
      try {
        const response = await axios.put(url, dataTosend);
        if (response.status !== 200) {
          console.log(response);
          dispatch(cartBtnActions.sendingDataState(false));
        } else {
          dispatch(cartBtnActions.sendingDataState(true));
        }
      } catch (error) {
        dispatch(cartBtnActions.sendingDataState(false));
        console.log(error);
      }
    };
    sendcartData();
    console.log(notificationStatus);
  }, [selectBtnModalstatus, dataTosend, notificationStatus]);
  useEffect(() => {
    const sendcartData = async () => {
      const response = await axios.get(`https://react-project-ftshekhar-default-rtdb.europe-west1.firebasedatabase.app/cartItems.json`);
      if (response.status === 200) {
        console.log(response.data);
      }
    }
    sendcartData()
   }, [dataTosend]);
  return (
    <Fragment>
      {notificationStatus === null && (
        <Notification
          status="pending"
          title="Sending..."
          message="Sending cart data!"
        />
      )}
      {notificationStatus === false && (
        <Notification
          status="Failed"
          title="Failed!"
          message="Sent cart data failed!"
        />
      )}
      {notificationStatus && (
        <Notification
          status="success"
          title="Success!"
          message="Sent cart data successfully!"
        />
      )}
      <Layout>
        {selectBtnModalstatus && <Cart />}
        <Products />
      </Layout>
    </Fragment>
  );
}

export default App;
