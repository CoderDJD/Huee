import { User } from "@/../../types/user";

export interface RootSliceState {
  currentUser: User;
}
export default {
  currentUser: {} as User,
} as RootSliceState;
