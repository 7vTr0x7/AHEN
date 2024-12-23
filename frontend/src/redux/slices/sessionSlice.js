import { createSlice } from "@reduxjs/toolkit";

const SessionSlice = createSlice({
  name: "session",
  initialState: {
    isSessionBookingOpen: false,
  },
  reducers: {
    toggleOpenSessionBooking: (state, action) => {
      console.log(action.payload);
      return {
        ...state,
        isSessionBookingOpen: action.payload,
      };
    },
  },
});

export const { toggleOpenSessionBooking } = SessionSlice.actions;

export default SessionSlice.reducer;
