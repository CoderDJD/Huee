import React, { lazy } from "react";
import { Route, RouteComponentProps, Switch } from "react-router";
const SignIn = lazy(() => import("./sign_in/SignIn"));
const SignUp = lazy(() => import("./sign_up/SignUp"));

const Auth = ({ match: { url } }: RouteComponentProps) => {
  return (
    <div>
      <Switch>
        <Route exact path={`${url}/signin`} component={SignIn} />
        <Route exact path={`${url}/getstarted`} component={SignUp} />
        <Route />
      </Switch>
    </div>
  );
};

export default Auth;
