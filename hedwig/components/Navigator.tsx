import React from "react";
import Proj from "../public/projects";
import Home from "../public/home";
import NavigationUnit from "./NavigationUnit";
import { Bell } from "react-feather";

const tabs = [
  { route: "/dash", icon: <Home /> },
  { route: "/proj", icon: <Proj /> },
  { route: "/notf", icon: <Bell className="text-accent-default" /> },
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
