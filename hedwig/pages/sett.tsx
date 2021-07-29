/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState } from "react";
import { Settings } from "react-feather";
import Toolbar from "../../util/Toolbar";
import Button from "../../components/Button";
import SettText from "../../components/SettText";
import SettInput from "../../components/SettInput";

export default function Sett() {
  const [bio, setBio] = useState("");
  const [uname, setUname] = useState("");
  const [dname, setDname] = useState("");
  const [email, setEmail] = useState("");
  const [github, setGithub] = useState("");
  const [twitter, setTwitter] = useState("");
  const [youtube, setYoutube] = useState("");

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
                <Settings className="text-yellow-500" />
                <h3>Settings</h3>
              </div>
            </div>

            <div className="flex flex-col flex-1 mb-8">
              <div className="flex flex-col space-y-4">
                <SettInput
                  text="Username"
                  callback={e => setUname(e.target.value)}
                />
                <SettInput
                  text="Display Name"
                  callback={e => setDname(e.target.value)}
                />
                <SettInput
                  text="Email"
                  callback={e => setEmail(e.target.value)}
                />
                <SettInput
                  text="Github"
                  callback={e => setGithub(e.target.value)}
                />
                <SettInput
                  text="Twitter"
                  callback={e => setTwitter(e.target.value)}
                />
                <SettInput
                  text="Youtube"
                  callback={e => setYoutube(e.target.value)}
                />
                <SettText text="Bio" callback={e => setBio(e.target.value)} />
                <Button>
                  <span className="text-sm">Change Details</span>
                </Button>
              </div>
            </div>
          </div>
        </article>
      </div>
    </div>
  );
}
