import { configureStore } from "@reduxjs/toolkit";
import wishlistReducer from "./slices/wishlistSlice";
import reportReducer from "./slices/reportSlice";
import sessionReducer from "./slices/sessionSlice";

export const store = configureStore({
  reducer: {
    wishlist: wishlistReducer,
    report: reportReducer,
    session: sessionReducer,
  },
});
