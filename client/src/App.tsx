import { useState, useEffect } from "react";
import { auth } from "./firebase";
import SignUp from "./modules/auth/LogIn";
import DashBoard from "./modules/dashboard/DashBoard";
export default function App() {
  const [currentUser, setCurrentUser] = useState({});
  useEffect(() => {
    var unsubscribeFromAuth: any = null;
    unsubscribeFromAuth = auth.onAuthStateChanged(user => {
      if (user === null) {
        setCurrentUser({});
      } else {
        setCurrentUser({ user });
      }
    });
    return () => {
      unsubscribeFromAuth();
    };
  }, []);

  if (currentUser === {}) {
    return (
      <div className="bg-gray-400 w-screen h-screen">
        <DashBoard />
      </div>
    );
  }
  return (
    <div className="bg-gray-400 w-screen h-screen">
      <SignUp />
    </div>
  );
}
