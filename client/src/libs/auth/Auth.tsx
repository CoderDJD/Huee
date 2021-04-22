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
    </div>
  );
}
