import { useContext } from "react";
import { UserContext } from "../../contexts/auth";
import Avatar from "./components/Avatar";

export default function Toolbar() {
  const user = useContext(UserContext).user;
  return (
    <div className="fixed left-0 w-full z-10" style={{ top: "0px" }}>
      <div className="flex w-full h-8 mt-2 p-3 justify-between items-center">
        <button className="focus:outline-none">
          <Avatar imgUrl={user.photoURL} />
        </button>
      </div>
    </div>
  );
}
