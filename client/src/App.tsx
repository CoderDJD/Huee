import React, { lazy } from "react";
import { useSelector } from "react-redux";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import RootSelectors from "./store/root/selector";
const Auth = lazy(() => import("./modules/auth/Auth")),
  Listings = lazy(() => import("./modules/main/general/listings/Listings"));

function App() {
  const user = useSelector(RootSelectors.getCurrentUser);
  return (
    <div className="w-full h-full">
      <Router>
        <Route path="/auth" component={Auth} />
        <Route path="/listings" component={Listings} />
        {!user && (
          <>
            <Redirect from="/" to="/auth" exact />
            <Redirect from="/listings" to="/auth" exact />
          </>
        )}
        <Redirect from="*" to="/auth" exact />
      </Router>
    </div>
  );
}

export default App;
