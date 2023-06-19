import { createSlice } from "@reduxjs/toolkit";
const searchVideoSlice = createSlice({
  name: "searchVideoSlice",
  initialState: {
    searchedKeyword: "",
  },
  reducers: {
    userSearchedData: (state, action) => {
      state.searchedKeyword = action.payload;
    },
  },
});
export default searchVideoSlice.reducer;
export const { userSearchedData } = searchVideoSlice.actions;
