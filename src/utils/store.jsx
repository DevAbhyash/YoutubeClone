import { configureStore } from "@reduxjs/toolkit";
import searchVideoSlice from "./searchVideoSlice";
import hamburgerSlice from "./hamburgerSlice";
import searchSlice from "./searchSlice";
import liveChatSlice from "./liveChatSlice";
const Store = configureStore({
  reducer: {
    app: hamburgerSlice,
    search: searchSlice,
    liveChat: liveChatSlice,
    searchVideo: searchVideoSlice,
  },
});
export default Store;
