import { configureStore, createSlice, PayloadAction } from "@reduxjs/toolkit";
import rootSlice from "./root";

export const store = configureStore({
  reducer: {
    root: rootSlice.reducer
  }
});

export type RootState = ReturnType<typeof store.getState>;
export type RootDispatch = typeof store.dispatch;
export default store;
