import { RootState } from "..";
export class RootSelectorMethods {}
export default class RootSelectors {
  static isLoggedIn({ root: { currentUser } }: RootState) {
    return currentUser !== undefined && Object.keys(currentUser).length === 0;
  }
  static getCurrentUser(state: RootState) {
    return state.root.currentUser;
  }
  static getProjects(state: RootState) {
    return state.root.projects;
  }
}
