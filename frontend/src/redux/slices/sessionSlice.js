import { createSlice } from "@reduxjs/toolkit";

const SessionSlice = createSlice({
  name: "session",
  initialState: {
    isSessionBookingOpen: false,
    isStartSessionOpen: false,
    isEndSessionOpen: false,
    isRateInstructorOpen: false,
  },
  reducers: {
    toggleOpenSessionBooking: (state, action) => {
      return {
        ...state,
        isSessionBookingOpen: action.payload,
      };
    },
    toggleOpenStartSession: (state, action) => {
      return {
        ...state,
        isStartSessionOpen: action.payload,
      };
    },
    toggleOpenEndSession: (state, action) => {
      return {
        ...state,
        isEndSessionOpen: action.payload,
      };
    },
    toggleOpenRateInstructor: (state, action) => {
      return {
        ...state,
        isRateInstructorOpen: action.payload,
      };
    },
  },
});

export const {
  toggleOpenSessionBooking,
  toggleOpenStartSession,
  toggleOpenEndSession,
  toggleOpenRateInstructor,
} = SessionSlice.actions;

export default SessionSlice.reducer;