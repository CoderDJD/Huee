import { RootState } from "..";

export default class RootSelectors {
  static getCurrentUser = (state: RootState) => {
    return state.root.currentUser;
  };
}
export class RootSelectorMethods {}
