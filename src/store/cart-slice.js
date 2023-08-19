import { createSlice } from "@reduxjs/toolkit";

const cartInitialState = {
    items: [],
    totalPrice: 0,
    totalAmount: 0,
    changed:false,
}


const cartSlice =  createSlice({
    name:'cart slice',
    initialState: cartInitialState,
    reducers:{
        addItemCart(state,action){
            state.changed = true;
            const newItem = action.payload;
            const currentItem = state.items.find(item => item.id === newItem.id);
            if (currentItem) {
                state.totalAmount = state.totalAmount + 1;
                currentItem.amount = currentItem.amount + 1;
                console.log(currentItem.amount);
               // currentItem.price = currentItem.price + newItem.price;
              state.totalPrice =  currentItem.price + state.totalPrice;
              currentItem.totalPrice = currentItem.price * currentItem.amount
              console.log(currentItem);
              console.log('exist');

            }else{
                state.totalAmount = state.totalAmount + 1;
                state.items.push(action.payload);
                state.totalPrice = newItem.price + state.totalPrice;
                console.log('newS');

            }

        },
        removeItemFromCart(state, action){
            state.changed = true;
            const newItem = action.payload;
            const currentItem = state.items.find(item => item.id === newItem.id);
            if (currentItem) {
                if (currentItem.amount === 1) {
                   state.items =  state.items.filter(item => item.id !== currentItem.id);
                   state.totalAmount --;
                }else{
                state.totalAmount --;
                currentItem.amount = currentItem.amount -1;
                currentItem.totalPrice = currentItem.totalPrice - newItem.price;
                state.totalPrice =  state.totalPrice - currentItem.price;}
            }

        },
        setInitialdata(state,action){
            state.changed =false
            state.items = action.payload.items;
            state.totalAmount = action.payload.totalAmount;
            state.totalPrice = action.payload.totalPrice;
        }
    }
});

export const cartReducer = cartSlice.reducer;
export const cartAction = cartSlice.actions;