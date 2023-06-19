import { createSlice } from "@reduxjs/toolkit";
const liveChatSlice = createSlice({
  name: "liveChat",
  initialState: [],
  reducers: {
    addChat: (state, action) => {
      state.splice(10, 1);
      state.unshift(action.payload);
    },
  },
});
export default liveChatSlice.reducer;
export const { addChat } = liveChatSlice.actions;
