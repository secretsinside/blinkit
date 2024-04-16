import { configureStore } from "@reduxjs/toolkit";
import theme from "./themeSlice";
import cart from './cartSlice';
import savedCart from './savedCartSlice';
import category from './categorySlice';

const appStore = configureStore({
    reducer: {
        theme,
        cart,
        savedCart,
        category
    }
})

export default appStore;