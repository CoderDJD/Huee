import { useContext } from "react";
import { UserContext } from "../userContext";
import Top from "./components/top";
import Middle from "./components/middle";
import Bottom from "./components/bottom";
export default function Home() {
  const state = useContext(UserContext);
  return (
    <div className="bg-gray-400 w-screen h-screen flex flex-col">
      <Top user={state.user} />
      <Middle user={state.user} />
      <Bottom user={state.user} />
    </div>
  );
}
