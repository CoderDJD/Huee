import { UserProvider } from "./util/AuthContext";
import { Route, useHistory } from "react-router-dom";
import { onAuthStateChange } from "./services/firebase";
import Navigator from "./util/Navigator";
import { useState, useEffect, lazy, Suspense } from "react";
const Auth = lazy(() => import("./packages/auth"));
const Home = lazy(() => import("./packages/dash"));
const Project = lazy(() => import("./packages/notf"));

export default function App() {
  const [state, setState] = useState({ user: null });
  const history = useHistory();
  useEffect(() => {
    const unsubscribe = onAuthStateChange(setState);
    return () => unsubscribe();
  }, []);
  useEffect(() => {
    state.user != null ? history.push("/dash") : console.log();
  });
  return (
    <div className="bg-dark-400 w-screen h-screen">
      <UserProvider value={state}>
        {state.user ? (
          <Suspense
            fallback={<div className="bg-dark-400 w-screen h-screen"></div>}>
            <Route component={Home} path="/dash" />
            <Route component={Project} path="/projects" />
            <Navigator></Navigator>
          </Suspense>
        ) : (
          <Suspense
            fallback={<div className="bg-gray-400 w-screen h-screen"></div>}>
            <Auth />
          </Suspense>
        )}
      </UserProvider>
    </div>
  );
}
