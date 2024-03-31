import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        items: [],
        selectedItemId: [],
        quantity: 0,
        totalMrp: 0,
        totalDiscountedPrice: 0
    },
    reducers: {
        addItem: (state, action) => {
            let curItem = action.payload;
            let index = state.selectedItemId.indexOf(curItem.id);
            if(index === -1) state.selectedItemId.push(curItem.id);
            for(let item of state.items) {
                if(item.id === curItem.id) {
                    item["selectedQuantity"] = item.selectedQuantity != undefined ? item.selectedQuantity+1 : 1;
                    break;
                }
            }
            state.quantity++;
            state.totalDiscountedPrice+= parseInt((curItem.discountedPrice) ? curItem.discountedPrice : curItem.mrp);
            state.totalMrp+= parseInt(curItem.mrp);
            return state;
        },
        removeItem: (state, action) => {
            let curItem = action.payload;
            let itemIndex = state.selectedItemId.indexOf(curItem.id);
            for(let index = 0; index < state.items.length; index++) {
                let item = state.items[index];
                if(item.id === curItem.id) {
                    let count = --item.selectedQuantity;
                    if(count == 0) state.selectedItemId.splice(itemIndex, 1);
                    break;
                }
            }
            state.quantity--;
            state.totalDiscountedPrice-=parseInt((curItem.discountedPrice) ? curItem.discountedPrice : curItem.mrp);
            state.totalMrp-= parseInt(curItem.mrp);
            return state;
        },
        addInventory: (state, action) => {
            state.items.push(...action.payload);
            return state;
        },
        addSingleItemToInventory: (state, action) => {
            state.items.push(action.payload);
            return state;
        }
    }
});


export const {addItem, removeItem, addInventory, addSingleItemToInventory} = cartSlice.actions;

export default cartSlice.reducer;