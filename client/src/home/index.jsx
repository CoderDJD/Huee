import { useContext } from "react";
import { logOut } from "../services/auth";
import { GoCode } from "react-icons/go";
import { UserContext } from "../userContext";
export default function Home() {
  const state = useContext(UserContext);
  return (
    <div className="bg-gray-400 w-full h-full">
      <h1>{state.user.displayName}</h1>
      <button className="flex gap-2 items-center" onClick={logOut}>
        <GoCode />
        Sign Out
      </button>
    </div>
  );
}
