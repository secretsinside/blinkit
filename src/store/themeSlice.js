import { createSlice } from "@reduxjs/toolkit";

export const THEME = {
    DARK: 'dark',
    LIGHT: 'light'
}

const themeSlice = createSlice({
    name: 'theme',
    initialState: {
        currentTheme: THEME.LIGHT
    },
    reducers: {
        toggleTheme: (state) => {
            state.currentTheme = state.currentTheme == THEME.LIGHT ? THEME.DARK : THEME.LIGHT;
        }
    }
});

export const {toggleTheme} = themeSlice.actions;
export default themeSlice.reducer;