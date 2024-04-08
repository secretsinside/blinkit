import { configureStore } from "@reduxjs/toolkit";
import themeReducer from "./themeSlice";
import cartReducer from './cartSlice';
import savedCartReducer from './savedCartSlice';

const appStore = configureStore({
    reducer: {
        theme: themeReducer,
        cart: cartReducer,
        savedCart: savedCartReducer
    }
})

export default appStore;