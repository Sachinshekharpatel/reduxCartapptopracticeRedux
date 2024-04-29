import { createSlice, configureStore } from "@reduxjs/toolkit";

const initialState = {
  cartItemsArray: [],
};
const cartButtonState = {
  cartBtnModal: false,
};

const cartButtonSlice = createSlice({
  name: "cartButton",
  initialState: cartButtonState,
  reducers: {
    toggle: (state) => {
      state.cartBtnModal = !state.cartBtnModal;
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
       
        if(state.cartItemsArray[existingItemIndex].quantity > 1){
          state.cartItemsArray[existingItemIndex].quantity -= 1;
        }else if (state.cartItemsArray[existingItemIndex].quantity === 1){
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
export const cartBtnActions = cartButtonSlice.actions;
export const cartArrayActions = cartSlice.actions;

export default store;
