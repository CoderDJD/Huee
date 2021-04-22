<<<<<<< HEAD
import { Project } from "@/@types/project";
import { User } from "@/@types/user";
=======
import { Project } from "@/../../@types/project";
import { User } from "@/../../@types/user";
import { PROJECTS } from "@/stubs/project";
import { CURRENT_USER } from "@/stubs/users";

>>>>>>> 6d2f02f5c9f93d237bf969eca882d205a174374c
export interface RootSliceState {
  currentUser: User;
  projects: Project[];
}
export default {
<<<<<<< HEAD
  currentUser: {} as User,
  projects: []
=======
  currentUser: CURRENT_USER,
  projects: PROJECTS,
>>>>>>> 6d2f02f5c9f93d237bf969eca882d205a174374c
} as RootSliceState;
