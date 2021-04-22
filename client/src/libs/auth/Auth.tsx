import { Route, Switch, RouteComponentProps } from "react-router";
import SignIn from "./signin/SignIn";
import SignUp from "./signup/SignUp";

export default function Auth({ match: { url } }: RouteComponentProps) {
  return (
    <div className="w-full h-full">
      <Switch>
        <Route exact path={`${url}/signin`} component={SignIn} />
        <Route exact path={`${url}/signup`} component={SignUp} />
      </Switch>
      {/* <Router>
        <Route path="/auth" component={Auth} />
        <Route path="/listings" component={Listings} />
        {!user && (
          <>
            <Redirect from="/" to="/auth" exact />
            <Redirect from="/listings" to="/auth" exact />
          </>
        )}
        <Redirect from="*" to="/auth" exact />
      </Router> */}
    </div>
  );
}
