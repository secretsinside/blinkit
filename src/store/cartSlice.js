import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        items: [],
        quantity: 0,
        totalMrp: 0,
        totalDiscountedPrice: 0
    },
    reducers: {
        addItem: (state, action) => {
            let curItem = action.payload;
            let found = false;
            for(let item of state.items) {
                if(item.id === curItem.id) {
                    item.quantity = item.quantity+1;
                    found = true;
                    break;
                }
            }
            if(!found) {
                curItem.quantity = 1;
                state.items.push(curItem);
            }
            state.quantity++;
            state.totalDiscountedPrice+= parseInt((curItem.discountedPrice) ? curItem.discountedPrice : curItem.mrp);
            state.totalMrp+= parseInt(curItem.mrp);
            return state;
        },
        removeItem: (state, action) => {
            let curItem = action.payload;
            for(let index = 0; index < state.items.length; index++) {
                let item = state.items[index];
                if(item.id === curItem.id) {
                    item.quantity--;
                    if(item.quantity === 0) {
                        state.items = state.items.filter((i) => i.id !== curItem.id);
                    }
                    break;
                }
            }
            state.quantity--;
            state.totalDiscountedPrice-=parseInt((curItem.discountedPrice) ? curItem.discountedPrice : curItem.mrp);

            return state;
        }
    }
});


export const {addItem, removeItem} = cartSlice.actions;

export default cartSlice.reducer;