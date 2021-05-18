import Left from "./left";
import Right from "./right";
import Center from "./center";
import Toolbar from "./toolbar";

export default function Dash() {
  return (
    <div className="bg-gray-400 w-screen h-screen flex flex-col">
      <Toolbar />
      <section className="flex flex-row w-full">
        <Left />
        <Center />
        <Right />
      </section>
    </div>
  );
}
