import { createSlice } from "@reduxjs/toolkit";
const initialState = { isShown: false };
const hamburgerSlice = createSlice({
  name: "hamburgerSlice",
  initialState: initialState,
  reducers: {
    updateHamburger: (state) => {
      state.isShown = !state.isShown;
    },
  },
});
export default hamburgerSlice.reducer;

export const { updateHamburger, updateHeading } = hamburgerSlice.actions;
