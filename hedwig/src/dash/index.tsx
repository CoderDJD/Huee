import Left from "./layouts/left";
import Center from "./layouts/center";
import Right from "./layouts/right";
import Bottom from "./layouts/bottom";
export default function Home() {
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
