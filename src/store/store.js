import { configureStore } from "@reduxjs/toolkit";
import { shinGroupReducer } from "./Slices/ShinGroupSlice/shinSlices";

export const store = configureStore({
  reducer: {
    shinGroup: shinGroupReducer,
  },
});