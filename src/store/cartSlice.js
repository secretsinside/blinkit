import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        items: [],
        selectedItemId: [],
        quantity: 0,
        totalMrp: 0,
        totalDiscountedPrice: 0,
        orderingFromSavedCart: false,
        activeCartName: undefined
    },
    reducers: {
        addItem: (state, action) => {
            let curItem = action.payload;
            let index = state.selectedItemId.indexOf(curItem.id);
            if(index === -1) {
                state.selectedItemId.push(curItem.id);
                state.orderingFromSavedCart = false;
                state.activeCartName = undefined;
            }
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
                    if(count == 0) {
                        state.selectedItemId.splice(itemIndex, 1);
                        state.orderingFromSavedCart = false;
                        state.activeCartName = undefined;
                    }
                    break;
                }
            }
            state.quantity--;
            state.totalDiscountedPrice-=parseInt((curItem.discountedPrice) ? curItem.discountedPrice : curItem.mrp);
            state.totalMrp-= parseInt(curItem.mrp);
            return state;
        },
        switchToSavedCart: (state, action) => {
            state.orderingFromSavedCart = true;
            state.activeCartName = action.payload.name;
            return state;
        },
        clearCart: (state) => {
            state.items = state.items.map((item) => {
                if(state.selectedItemId.includes(item.id)) {
                    item.selectedQuantity = 0;
                }
                return item;
            });
            state.quantity = 0;
            state.totalDiscountedPrice = 0;
            state.totalMrp = 0
            state.selectedItemId.length = 0;
            state.orderingFromSavedCart = false;
            state.activeCartName = false;
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


export const {addItem, removeItem, addInventory, addSingleItemToInventory, clearCart, switchToSavedCart} = cartSlice.actions;

export default cartSlice.reducer;