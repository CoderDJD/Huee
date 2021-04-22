import React, { lazy } from "react";
import { useSelector } from "react-redux";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import DefaultFallback from "./components/DefaultFallback";
import RootSelectors from "./store/root/selector";

const Auth = lazy(() => import("./modules/auth/Auth"));
const General = lazy(() => import("./modules/main/general/General"));

const App = () => {
  const isLoggedIn = useSelector(RootSelectors.isLoggedIn);
  return (
    <DefaultFallback>
      <div className="w-full h-full">
        <Router>
          <Route path="/auth" component={Auth} />
          {isLoggedIn && <Route path="/listings" exact component={General} />}
          <p>{String(isLoggedIn)}</p>
          {!isLoggedIn && <Redirect from="/" to="/auth" exact />}
          {!isLoggedIn && <Redirect from="/listings" to="/auth" exact />}

          <Redirect from="*" to="/auth" exact />
        </Router>
      </div>
    </DefaultFallback>
  );
};

export default App;
