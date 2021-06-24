import Navigator from "./util/Navigator";
import { UserProvider } from "./util/AuthContext";
import { Route, useHistory } from "react-router-dom";
import { onAuthStateChange } from "./services/firebase";
import { useState, useEffect, lazy, Suspense } from "react";
const Auth = lazy(() => import("./packages/auth"));
const Home = lazy(() => import("./packages/dash"));
const Notf = lazy(() => import("./packages/notf"));
const Proj = lazy(() => import("./packages/proj"));
const Sett = lazy(() => import("./packages/sett"));

export default function App() {
  const [state, setState] = useState({ user: null });
  const history = useHistory();
  useEffect(() => {
    const unsubscribe = onAuthStateChange(setState);
    return () => unsubscribe();
  }, []);
  useEffect(() => {
    state.user != null ? history.push("/dash") : console.log();
  }, [history, state]);
  return (
    <div className="bg-dark-400 w-screen h-screen">
      <UserProvider value={state}>
        {state.user ? (
          <Suspense
            fallback={<div className="bg-dark-400 w-screen h-screen"></div>}>
            <Route component={Home} path="/dash" />
            <Route component={Notf} path="/notf" />
            <Route component={Proj} path="/proj" />
            <Route component={Sett} path="/sett" />
            <Navigator />
          </Suspense>
        ) : (
          <Suspense
            fallback={<div className="bg-dark-400 w-screen h-screen"></div>}>
            <Auth />
          </Suspense>
        )}
      </UserProvider>
    </div>
  );
}
