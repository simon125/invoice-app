import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "store";

export interface CounterState {
  isFormOpen: boolean;
}

const initialState: CounterState = {
  isFormOpen: false,
};

export const formDrawer = createSlice({
  name: "formDrawer",
  initialState,
  reducers: {
    toggleFormDrawer: (state) => {
      state.isFormOpen = !state.isFormOpen;
    },
  },
});

export const selectIsFormDrawerOpen = (state: RootState) =>
  state.formDrawer.isFormOpen;

export const { toggleFormDrawer } = formDrawer.actions;

export default formDrawer.reducer;
