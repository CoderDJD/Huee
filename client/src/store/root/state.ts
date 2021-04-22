import { Project } from "@/../../@types/project";
import { User } from "@/../../@types/user";
import { PROJECTS } from "@/stubs/project";
import { CURRENT_USER } from "@/stubs/users";

export interface RootSliceState {
  currentUser: User;
  projects: Project[];
}
export default {
  currentUser: CURRENT_USER,
  projects: PROJECTS,
} as RootSliceState;
