import { configureStore } from "@reduxjs/toolkit";
import channelSlice from "./channelSlice";
import generalInfoSlice from "./generalInfoSlice";
import rezervationSlice from "./rezervationSlice";
import roomSlice from "./roomSlice";
import loginSlice from "./loginSlice";

export const store = configureStore({
  reducer: {
    channelSlice: channelSlice,
    generalInfoSlice: generalInfoSlice,
    rezervation: rezervationSlice,
    RoomsSlice: roomSlice,
    loginSlice: loginSlice,
  },
});
