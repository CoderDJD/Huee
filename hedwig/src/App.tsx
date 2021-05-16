import { useState, useEffect, lazy, Suspense } from "react";
import { onAuthStateChange } from "./.firebase";
import { UserProvider } from "./contexts/auth";
const Auth = lazy(() => import("./packages/auth"));
const Home = lazy(() => import("./packages/dash"));
export default function App() {
  const [state, setState] = useState({ user: null });
  useEffect(() => {
    const unsubscribe = onAuthStateChange(setState);
    return () => {
      unsubscribe();
    };
  }, []);
  return (
    <UserProvider value={state}>
      {state.user ? (
        <Suspense
          fallback={<div className="bg-gray-400 w-screen h-screen"></div>}>
          <Home />
        </Suspense>
      ) : (
        <Suspense
          fallback={<div className="bg-gray-400 w-screen h-screen"></div>}>
          <Auth />
        </Suspense>
      )}
    </UserProvider>
  );
}
