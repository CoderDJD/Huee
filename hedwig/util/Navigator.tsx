import NavigationUnit from "../components/NavigationUnit";
import Proj from "../pages/proj";
import Home from "../public/home";

const tabs = [
  { route: "/dash", icon: <Home /> },
  { route: "/proj", icon: <Proj /> },
];

export default function Navigator() {
  return (
    <div className="flex fixed inset-x-0 justify-around items-center bottom-0 w-full h-10 bg-dark-500 mt z-10">
      {tabs.map((tab, ind) => {
        return (
          <NavigationUnit routeStr={tab.route} Icon={tab.icon} key={ind} />
        );
      })}
    </div>
  );
}
