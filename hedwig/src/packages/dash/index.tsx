import Main from "./main";
import Toolbar from "../../util/Toolbar";

export default function Dash() {
  return (
    <div className="bg-dark-400 w-screen h-screen flex flex-col">
      <Toolbar />
      <Main />
    </div>
  );
}
