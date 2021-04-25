import { Project } from '@/../../@types/project';
import { User } from '@/../../@types/user';
import { PROJECTS } from '@/stubs/project';
import { CURRENT_USER } from '@/stubs/users';

export interface RootSliceState {
  currentUser: User;
  projects: Project[];
}
const state: RootSliceState = {
  currentUser: CURRENT_USER as User,
  projects: PROJECTS
};

export default state;
