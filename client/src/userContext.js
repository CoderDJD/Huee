import { createContext } from "react";
export const defaultState = { loggedIn: false, user: null };
export const UserContext = createContext(defaultState);
export const UserProvider = UserContext.Provider;
export const UserConsumer = UserContext.Consumer;
