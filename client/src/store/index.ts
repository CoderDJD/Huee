import { configureStore, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { User } from "../../../types/user";
const rootSlice = createSlice({
  name: "root",
  initialState: {
    currentUser: {} as User,
  },
  reducers: {
    UPDATE_CURRENT_USER(state, action: PayloadAction<User>) {
      state.currentUser = action.payload;
    },
  },
});

export const store = configureStore({
  reducer: {
    root: rootSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type RootDispatch = typeof store.dispatch;
export default store;
