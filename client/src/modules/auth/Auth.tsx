import { lazy } from "react";
import { Route, RouteComponentProps, Switch } from "react-router";
const SignIn = lazy(() => import("./signin/SignIn")),
  GetStarted = lazy(() => import("./signup/SignUp"));
export default function Auth({ match: { url } }: RouteComponentProps) {
  return (
    <div className="w-full h-full">
      <Switch>
        <Route exact path={`${url}/signin`} component={SignIn} />
        <Route exact path={`${url}/getstarted`} component={GetStarted} />
        <Route />
      </Switch>
    </div>
  );
}
