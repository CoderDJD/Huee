import Left from "./components/left";
import Right from "./components/right";
import Center from "./components/center";
import Bottom from "./components/bottom";

export default function Dash() {
  return (
    <div className="bg-gray-400 w-screen h-screen flex flex-col">
      <section className="flex flex-row">
        <Left></Left>
        <Center></Center>
        <Right></Right>
      </section>
      <Bottom></Bottom>
    </div>
  );
}
