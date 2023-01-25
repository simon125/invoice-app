import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "store";
import { ThemeModeEnum, ThemeState } from "./types";

const initialState: ThemeState = {
  mode: ThemeModeEnum.LIGHT,
};

export const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    toggleTheme: (state) => {
      state.mode =
        state.mode === ThemeModeEnum.DARK
          ? ThemeModeEnum.LIGHT
          : ThemeModeEnum.DARK;
    },
  },
});

export const selectTheme = (state: RootState) => state.theme.mode;

export const { toggleTheme } = themeSlice.actions;
export default themeSlice.reducer;
