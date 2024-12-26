import { configureStore } from "@reduxjs/toolkit";
import wishlistReducer from "./slices/wishlistSlice";
import userReducer from "./slices/userSlice";
import reportReducer from "./slices/reportSlice";
import sessionReducer from "./slices/sessionSlice";
import notificationReducer from "./slices/notificationSlice";

export const store = configureStore({
  reducer: {
    user: userReducer,
    wishlist: wishlistReducer,
    report: reportReducer,
    notification: notificationReducer,
    session: sessionReducer,
  },
});
