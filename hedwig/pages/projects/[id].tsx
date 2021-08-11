/* eslint-disable react/no-unescaped-entities */
import React from "react";
import Patreon from "../../public/patreon";
import Toast from "../../components/Toast";
import Button from "../../components/Button";
import Toolbar from "../../components/Toolbar";
import Navigator from "../../components/Navigator";
import NotificationUnit from "../../components/NotificationUnit";
import {
  GitHub,
  Twitter,
  Youtube,
  Coffee,
  ArrowRightCircle,
} from "react-feather";

export default function Project() {
  const hashes = ["#react", "#graphql", "#elixir"];
  return (
    <div className="bg-dark-400 w-screen h-screen flex flex-col">
      <Toolbar />
      <div className="flex flex-col items-center w-full scrollbar-thin scrollbar-thumb-accent-hover scrollbar-thumb-rounded-md mb-7">
        <article className="relative w-full px-3 mb-5">
          <div
            className="sticky w-full z-10 bg-dark-400 pt-5 mr-4"
            style={{ top: "0px" }}>
            <div className="flex justify-between items-center mb-5 p-2">
              <article className="flex items-center justify-center space-x-2">
                <img src="/dghouse.png" width={32} height={32} />
                <a href="https://dogehouse.tv/">
                  <h3>dogehouse</h3>
                </a>
              </article>
              <Button clickHandler={() => console.log()}>
                <ArrowRightCircle className="text-white h-4 w-4" />
                <h4>join</h4>
              </Button>
            </div>
          </div>
          <h3 className="text-accent-default">$des</h3>
          <p className="small">
            DogeHouse is taking voice conversations to the moon. It's somewhat
            of a Clubhouse clone with open sign ups, cross platform support (yes
            it works on Android!), a dark theme, text chat. It's open-source and
            powered by Doge.
          </p>
          <section className="flex items-center justify-center space-x-3 mt-2">
            {hashes.map(hash => (
              <div key={hash}>
                <Toast text={hash} />
              </div>
            ))}
          </section>
          <section className="bg-gray-700 p-2 rounded-sm mt-3">
            <h4>latest</h4>
            <article className="space-y-2 mt-2">
              <NotificationUnit
                plat="in-ch"
                content="Ben Awad said, I'm done with dogehouse."
                project="Dogehouse"
              />
              <NotificationUnit
                plat="bmc"
                content="Jason Calacanis donated $1M."
                project="Dogehouse"
              />
              <NotificationUnit
                plat="tw"
                content="RT: @benawad dogehouse is going to crush discord"
                project="Dogehouse"
              />
            </article>
          </section>
          <section className="flex items-center justify-center space-x-3 mt-3 p-2">
            <a href="https://github.com/benawad/dogehouse">
              <GitHub className="text-white" />
            </a>
            <a href="https://twitter.com/benawad">
              <Twitter className="text-blue-500" />
            </a>
            <a href="https://www.youtube.com/user/99baddawg">
              <Youtube className="text-accent-default" />
            </a>
            <a href="discord.gg/ninja">
              <img
                src="/discord-purple.svg"
                width={28}
                className="text-purple-500"
              />
            </a>
            <a href="buymeacoffee.com">
              <Coffee className="text-yellow-500" />
            </a>
            <a href="patreon.com">
              <Patreon width={32} height={24} fill="#f93973" />
            </a>
          </section>
        </article>
        <Navigator />
      </div>
    </div>
  );
}
