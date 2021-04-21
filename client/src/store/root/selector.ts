import { RootState } from "..";

export default class RootSelectors {
  static getCurrentUser = (state: RootState) => {
    return state.root.currentUser;
  };
  static getProjects(state: RootState) {
    return state.root.projects;
  }
}
export class RootSelectorMethods {}
