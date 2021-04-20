import React from "react";
import { useSelector } from "react-redux";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import { getCurrentUser } from "./store/user/selector";
const Auth = React.lazy(() => import("./modules/auth/Auth"));
const Listings = React.lazy(() => import("./modules/main/Listings"));

function App() {
  const user = useSelector(getCurrentUser);
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
