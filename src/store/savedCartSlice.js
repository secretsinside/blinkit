import { createSlice } from "@reduxjs/toolkit";

const savedCartSlice = createSlice({
    name: 'savedCart',
    initialState: {
        savedCartItems: []
    },
    reducers: {
        updateSavedCart: (state, action) => {
            state.savedCartItems = action.payload;
            return state;
        },
        addSavedCart: (state, action) => {
            state.savedCartItems.push(action.payload);
            return state;
        }
    }
})

export const {updateSavedCart, addSavedCart} = savedCartSlice.actions;

export default savedCartSlice.reducer;