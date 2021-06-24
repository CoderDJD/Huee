import Project from "../assets/projects";
import Avatar from "../components/Avatar";
import { useContext, useState } from "react";
import { logOut } from "../services/firebase";
import { UserContext } from "../util/AuthContext";
import ModalButton from "../components/ModalButton";
import { Fade, Modal, Backdrop } from "@material-ui/core";
import { Search, Settings, Bell, GitHub, LogOut } from "react-feather";

export default function Toolbar() {
  const user = useContext(UserContext).user;
  const [mshow, setShow] = useState(false);
  return (
    <div
      className="flex w-full p-3 h-8 justify-between items-center"
      style={{ marginTop: 10 }}>
      <button className="focus:outline-none">
        <Avatar
          imgUrl={user.photoURL}
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
            <div className="bg-dark-500 rounded-md p-3 w-9/12 h-4/6 space-y-2 flex flex-col items-center justify-center justify-items-center">
              <article>
                <h3>Hey 👋</h3>
                <p>Where do you want to go?</p>
              </article>
              <div className="bg-dark-400 p-3 rounded-md space-y-4">
                <ModalButton
                  Icon={<Settings className="text-yellow-500" />}
                  Text="Settings"
                  Route="/sett"
                />
                <ModalButton
                  Icon={<Bell className="text-accent-default" />}
                  Text="Notifications"
                  Route="/notf"
                />
                <ModalButton
                  Icon={<Project width={22} height={22} fill="#10B981" />}
                  Text="Projects"
                  Route="/proj"
                />
                <ModalButton
                  Icon={<LogOut className="text-blue-500" />}
                  Text="Log Out"
                  Route="/"
                  onClick={() => {
                    logOut();
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
