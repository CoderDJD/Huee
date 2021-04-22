import { useSelector } from "react-redux";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import RootSelectors from "./store/root/selector";
import Auth from "./libs/auth/Auth";
import Listings from "./libs/main/projectfeed/Feed";
export default function App() {
  const user = useSelector(RootSelectors.getCurrentUser);
  return (
    <div className="w-full h-full">
      <Router>
        <Route path="/auth/signin" component={Auth} />
        <Route path="/listings" component={Listings} />
        {!user && (
          <>
            <Redirect from="/" to="/auth/signin" exact />
            <Redirect from="/listings" to="/auth" exact />
          </>
        )}
        <Redirect from="*" to="/auth" exact />
      </Router>
    </div>
  );
}
