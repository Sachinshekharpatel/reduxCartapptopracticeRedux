import {createSlice , configureStore} from '@reduxjs/toolkit';


const initialState = {
    cartItemsArray : [],    
}
const cartButtonState = {
    cartBtnModal : false,    
}

const cartButtonSlice = createSlice({
    name : 'cartButton',
    initialState:cartButtonState,
    reducers : {
        toggle : (state) => {
            state.cartBtnModal = !state.cartBtnModal
        }
    }
})

const cartSlice = createSlice({
    name : 'cartItems',
    initialState:initialState,
    reducers : {
        addItem : (state,action) => {
            state.cartItems.push(action.payload)
        }
    }
})

const store = configureStore({
    reducer:{
        cartItems :cartSlice.reducer,
        cartButton : cartButtonSlice.reducer
    }
})
 export const cartBtnActions = cartButtonSlice.actions
 export const cartArrayActions = cartSlice.actions

 export default store
