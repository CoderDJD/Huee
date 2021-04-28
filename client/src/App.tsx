import { lazy, useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import DefaultFallback from "./components/DefaultFallback";
import ScreenSizeContext from "./screenSizeContext";
import { Screen, screensAsArray } from "@/lib/mediaQueryUtils";
import RootSelectors from "./store/root/selector";
const Auth = lazy(() => import("./modules/auth/Auth"));
const Dashboard = lazy(() => import("./modules/home/Home"));

const App = () => {
  const isLoggedIn = useSelector(RootSelectors.isLoggedIn);
  const [screenSize, setScreenSize] = useState<Screen>("desktop");
  useEffect(() => {
    let t: any = null;
    function callSetTimeout(this: Window & typeof globalThis) {
      t = setTimeout(() => {
        const res = screensAsArray.find(x => x.size < this.innerWidth);
        if (res) setScreenSize(res.screen);
      }, 500);
    }
    window.onresize = function() {
      if (!!t) callSetTimeout.apply(this);
      else {
        clearTimeout(t);
        callSetTimeout.apply(this);
      }
    };
  }, []);
  return (
    <ScreenSizeContext.Provider value={screenSize}>
      <DefaultFallback>
        <div className="w-screen h-screen">
          <Router>
            <Route path="/auth" component={Auth} />
            {!isLoggedIn && (
              <Route path="/listings" exact component={Dashboard} />
            )}
            {isLoggedIn && (
              <>
                <Redirect from="/" to="/auth" exact />
                <Redirect from="/listings" to="/auth" exact />
              </>
            )}
          </Router>
        </div>
      </DefaultFallback>
    </ScreenSizeContext.Provider>
  );
};
export default App;
