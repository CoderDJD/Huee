import Avatar from "./Avatar";
import ModalButton from "./ModalButton";
import React, { useState } from "react";
import { Fade, Modal, Backdrop } from "@material-ui/core";
import { Search, Settings, GitHub, LogOut } from "react-feather";
import Twemoji from "./Twemoji";

export default function Toolbar() {
  const [mshow, setShow] = useState(false);
  return (
    <div
      className="flex w-full p-3 h-8 justify-between items-center"
      style={{ marginTop: 10 }}>
      <button className="focus:outline-none">
        <Avatar
          imgUrl={
            "https://avatars.githubusercontent.com/u/70089411?s=400&u=8753d76752a6dd95972cc87d2b186c8794fe9dfe&v=4"
          }
          notify={true}
          onClick={() => {
            setShow(true);
          }}
        />
        <Modal
          open={mshow}
          onClose={() => {
            setShow(false);
          }}
          closeAfterTransition
          BackdropComponent={Backdrop}
          BackdropProps={{
            timeout: 500,
          }}
          className="flex items-center justify-center justify-items-center">
          <Fade in={mshow}>
            <div className="bg-dark-500 rounded-md p-3 w-9/12 h-4/6 space-y-2 flex flex-col items-center justify-between">
              <article>
                <h3>
                  helloooo <Twemoji emoji="👋" />
                </h3>
                <p>where dya wanna go?</p>
              </article>
              <div className="bg-dark-400 p-3 rounded-md space-y-4">
                <ModalButton
                  Icon={<Settings className="text-accent-default" />}
                  Text="settings"
                  Route="/sett"
                />
                <ModalButton
                  Icon={<LogOut className="text-accent-default" />}
                  Text="exit"
                  Route="/"
                  onClick={() => {
                    // logOut();
                  }}
                />
              </div>
              <article className="flex space-x-4 justify-center justify-items-center">
                <a
                  href="https://www.termsofservicegenerator.net/live.php?token=ncJ7hUXfgDM9UDva9rEWkeO6Ps6JQ6Ch"
                  target="_blank"
                  rel="noreferrer">
                  <p>TOS</p>
                </a>
                <a
                  href="https://www.privacypolicies.com/live/0326131b-f979-4fc5-aa5e-d3d20e72aa10"
                  target="_blank"
                  rel="noreferrer">
                  <p>Privacy Policy</p>
                </a>
                <a
                  href="https://github.com/CoderDJD/Hoot/"
                  target="_blank"
                  rel="noreferrer">
                  <GitHub className="text-dark-100" />
                </a>
              </article>
            </div>
          </Fade>
        </Modal>
      </button>
      <button className="focus:outline-none">
        <Search className="text-accent-default" />
      </button>
    </div>
  );
}
