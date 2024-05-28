import { configureStore } from "@reduxjs/toolkit";
//!slices
import auth from "./slices/auth.slice";

export const store = configureStore({
  reducer: { auth },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
  devTools: process.env.NODE_ENV !== "production",
});
