import { User } from "@/../../types/user";
import { PayloadAction } from "@reduxjs/toolkit";
import { RootSliceState } from "./state";

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  UPDATE_CURRENT_USER(state: RootSliceState, action: PayloadAction<User>) {
    state.currentUser = action.payload;
  },
};
