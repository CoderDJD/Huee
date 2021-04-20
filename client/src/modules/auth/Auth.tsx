import React, { lazy } from "react";
import { Route, RouteComponentProps, Switch } from "react-router";
const SignIn = lazy(() => import("./sign_in/SignIn"));
const GetStarted = lazy(() => import("./get_started/GetStarted"));

const Auth = ({ match: { url } }: RouteComponentProps) => {
  return (
    <div>
      <Switch>
        <Route exact path={`${url}/signin`} component={SignIn} />
        <Route exact path={`${url}/getstarted`} component={GetStarted} />
        <Route />
      </Switch>
    </div>
  );
};

export default Auth;
