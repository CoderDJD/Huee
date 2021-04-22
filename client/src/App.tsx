import React, { lazy } from "react";
import { useSelector } from "react-redux";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import DefaultFallback from "./components/DefaultFallback";
import RootSelectors from "./store/root/selector";

const Auth = lazy(() => import("./libs/auth/Auth"));
const General = lazy(() => import("./libs/main/General"));

const App = () => {
  const isLoggedIn = useSelector(RootSelectors.isLoggedIn);
  return (
    <DefaultFallback>
      <div className="w-full h-full">
        <Router>
          <Route path="/auth" component={Auth} />
          {isLoggedIn && <Route path="/listings" exact component={General} />}
          {!isLoggedIn && (
            <>
              <Redirect from="/" to="/auth" exact />
              <Redirect from="/listings" to="/auth" exact />
            </>
          )}
        </Router>
      </div>
    </DefaultFallback>
  );
};
export default App;
