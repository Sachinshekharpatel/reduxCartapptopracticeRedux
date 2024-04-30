import { createSlice, configureStore } from "@reduxjs/toolkit";
import axios from "axios";

let dataCart ; 
const dataFromapi = async ()=>{
  const response = await axios.get(`https://react-project-ftshekhar-default-rtdb.europe-west1.firebasedatabase.app/cartItems.json`);
  if (response.status === 200) {
    console.log(response.data);
    dataCart = response.data
  }
}
await dataFromapi();

const initialState = {
  cartItemsArray: dataCart || [],
};
const cartButtonState = {
  cartBtnModal: false,
  notification: null,
};

const cartButtonSlice = createSlice({
  name: "cartButton",
  initialState: cartButtonState,
  reducers: {
    toggle: (state) => {
      state.cartBtnModal = !state.cartBtnModal;
    },
    sendingDataState: (state, action) => {
      state.notification = action.payload;
    },
  },
});

const cartSlice = createSlice({
  name: "cartItems",
  initialState: initialState,
  reducers: {
    addItem: (state, action) => {
      console.log(action.payload);

      const existingItemIndex = state.cartItemsArray.findIndex(
        (item) => item.title === action.payload.title
      );

      if (existingItemIndex !== -1) {
        state.cartItemsArray[existingItemIndex].quantity += 1;
      } else {
        state.cartItemsArray.push(action.payload);
      }
    },
    removeItem: (state, action) => {
      // console.log(action.payload);

      const existingItemIndex = state.cartItemsArray.findIndex(
        (item) => item.title === action.payload
      );

      if (existingItemIndex !== -1) {
        if (state.cartItemsArray[existingItemIndex].quantity > 1) {
          state.cartItemsArray[existingItemIndex].quantity -= 1;
        } else if (state.cartItemsArray[existingItemIndex].quantity === 1) {
          state.cartItemsArray.splice(existingItemIndex, 1);
        }
      }
    },
  },
});

const store = configureStore({
  reducer: {
    cartItems: cartSlice.reducer,
    cartButton: cartButtonSlice.reducer,
  },
});

export const SendCartData = async (cart) => {
  return async (dispatch) => {
    dispatch(cartBtnActions.sendingDataState(false));
    const sendRequest = async () => {
      const response = await axios.put(
        'https://react-project-ftshekhar-default-rtdb.europe-west1.firebasedatabase.app/cartItems.json',
        cart
      );

    }

    try {
      if (response.status !== 200) {
        console.log(response);
        dispatch(cartBtnActions.sendingDataState(false));
        await sendRequest();
      }
    } catch (error) {
      dispatch(cartBtnActions.sendingDataState(true));
    }
 
  };
};

export const cartBtnActions = cartButtonSlice.actions;
export const cartArrayActions = cartSlice.actions;

export default store;
