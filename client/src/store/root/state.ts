import { Project } from "@/@types/project";
import { User } from "@/@types/user";
export interface RootSliceState {
  currentUser: User;
  projects: Project[];
}
export default {
  currentUser: {} as User,
  projects: []
} as RootSliceState;
