import { configureStore } from "@reduxjs/toolkit";
import countrySlice from "../slices/countrySlice";

export const store = configureStore({
  reducer: {
    countries: countrySlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
