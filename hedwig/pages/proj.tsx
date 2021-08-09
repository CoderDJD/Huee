import React from "react";
import Project from "../public/projects";
import Toolbar from "../components/Toolbar";
import Navigator from "../components/Navigator";
import ProjectUnit from "../components/ProjectUnit";
import Twemoji from "../components/Twemoji";

export default function Proj() {
  return (
    <div className="bg-dark-400 w-screen h-screen flex flex-col">
      <Toolbar />
      <div className="flex flex-col items-center w-full scrollbar-thin scrollbar-thumb-accent-disabled scrollbar-thumb-rounded-lg mb-7">
        <article className="relative w-full px-3">
          <div className="flex flex-col flex-1 w-full">
            <div
              className="sticky w-full z-10 bg-dark-400 pt-5 mr-4"
              style={{ top: "0px" }}>
              <div className="flex justify-left items-center mb-5 space-x-2">
                <Project />
                <h3>
                  projects <Twemoji emoji="🧠" />
                </h3>
              </div>
            </div>
            {/* Feed starts */}
            <div className="flex flex-col flex-1 mb-8">
              <div className="flex flex-col space-y-4">
                <ProjectUnit
                  name="Hoot"
                  liveUrl="https://hoot.vercel.app/"
                  description="We help developers gain contributors for thier open source projects. We provide a platform through which we think you can finish your projects easier, and faster."
                />
                <ProjectUnit
                  name="Edify"
                  liveUrl="https://edify.vercel.app/"
                  description="This is an app in the making which helps children in economically challenged families to gain their basic right to education."
                />
              </div>
            </div>
          </div>
        </article>
        <Navigator />
      </div>
    </div>
  );
}
