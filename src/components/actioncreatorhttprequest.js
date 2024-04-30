import axios from "axios";
import { cartBtnActions } from "./reduxreducer";
import { useDispatch } from "react-redux";

export const SendCartData = async (dataToSend) => {
  const dispatch = useDispatch();
  console.log('add')
  const url =`https://react-http-5f9b7-default-rtdb.firebaseio.com/cart.json`;
    return async () => {
    try {
      const response = await axios.post(url, dataToSend);
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
 
};
