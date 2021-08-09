import React from "react";
import Toolbar from "../components/Toolbar";
import ProjectUnit from "../components/ProjectUnit";
import NotificationUnit from "../components/NotificationUnit";
import Navigator from "../components/Navigator";
import Twemoji from "../components/Twemoji";

export default function Dash() {
  return (
    <div className="bg-dark-400 w-screen h-screen flex flex-col">
      <Toolbar />
      <div className="flex flex-col items-center w-full scrollbar-thin scrollbar-thumb-accent-hover scrollbar-thumb-rounded-md mb-7">
        <article className="relative w-full px-3">
          <div className="flex flex-col flex-1 w-full">
            <div
              className="sticky w-full z-10 bg-dark-400 pt-5 mr-4"
              style={{ top: "0px" }}>
              <div className="flex justify-between items-center mb-5">
                <h3>
                  dash <Twemoji emoji="🏡" />
                </h3>
              </div>
            </div>
            {/* Feed starts */}
            <div className="flex flex-col flex-1 mb-8">
              <div className="flex flex-col space-y-4">
                <div className="space-y-2">
                  <h4>Notifications</h4>
                  <NotificationUnit
                    plat="gh"
                    project="Hoot"
                    content="Issue #9 closed with pull request #66"
                  />
                  <NotificationUnit
                    plat="in-ch"
                    project="Hoot"
                    content="Evan You sent you a message."
                  />
                  <NotificationUnit
                    plat="in-ta"
                    project="Dogehouse"
                    content="Ben Awad alloted you #2866"
                  />
                </div>
                <div className="space-y-2">
                  <h4>Projects</h4>
                  <ProjectUnit
                    name="Tesla"
                    liveUrl="https://tesla.com/"
                    description="Here to accelerate the world’s transition to sustainable energy."
                  />
                  <ProjectUnit
                    name="Dogehouse"
                    liveUrl="https://dogehouse.tv/"
                    description="Taking voice conversations to the moon. Written in the refined hypebeast stack."
                  />
                </div>
              </div>
            </div>
          </div>
        </article>
        <Navigator />
      </div>
    </div>
  );
}
