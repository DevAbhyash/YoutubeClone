import { createSlice } from "@reduxjs/toolkit";
const searchSlice = createSlice({
  name: "searchSlice",
  initialState: {},
  reducers: {
    addCache: (state, action) => {
      state = Object.assign(state, action.payload);
    },
  },
});
export default searchSlice.reducer;
export const { addCache } = searchSlice.actions;
