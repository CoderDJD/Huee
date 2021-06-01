import { useContext } from "react";
import { Search } from "react-feather";
import Avatar from "../components/Avatar";
import { UserContext } from "../util/AuthContext";

export default function Toolbar() {
  const user = useContext(UserContext).user;
  return (
    <div
      className="flex w-full p-3 h-8 justify-between items-center"
      style={{ marginTop: 10 }}>
      <button className="focus:outline-none">
        <Avatar imgUrl={user.photoURL} />
      </button>
      <button className="focus:outline-none">
        <Search className="text-accent-default" />
      </button>
    </div>
  );
}
