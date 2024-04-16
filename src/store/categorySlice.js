import {createSlice} from '@reduxjs/toolkit';

const categorySlice = createSlice({
    name: 'category',
    initialState: {
        category: []
    },
    reducers: {
        updateCategories: (state, action) => {
            state.category.push(...action.payload);
            return state;
        }
    }
});

export const {updateCategories} = categorySlice.actions;

export default categorySlice.reducer;