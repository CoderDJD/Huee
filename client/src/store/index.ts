import { configureStore, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { User } from "../../../types/user";
const usersReducer = createSlice({
  name: "user",
  initialState: {
    data: {} as User
  },
  reducers: {
    UPDATE_CURRENT_USER(state, action: PayloadAction<User>) {
      state.data = action.payload;
    }
  }
});

export const store = configureStore({
  reducer: {
    users: usersReducer.reducer
  }
});

export type RootState = ReturnType<typeof store.getState>;
export type RootDispatch = typeof store.dispatch;
export default store;
