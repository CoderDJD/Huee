import Auth from "./auth";
import Home from "./home";
import { onAuthStateChange } from "./services/firebase";
import { useState, useEffect } from "react";
import { UserProvider } from "./userContext";
export default function App() {
  const [state, setState] = useState({ user: null });
  useEffect(() => {
    const unsubscribe = onAuthStateChange(setState);
    return () => {
      unsubscribe();
    };
  }, []);
  if (!state.user)
    return (
      <div className="bg-gray-400 w-screen h-screen p-1">
        <Auth />
      </div>
    );
  else
    return (
      <UserProvider value={state}>
        <div className="bg-gray-400 w-screen h-screen p-1">
          <Home />
        </div>
      </UserProvider>
    );
}
