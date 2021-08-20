import Head from "next/head";
import { GitHub } from "react-feather";
import React, { useState } from "react";
import Button from "../components/Button";
import Input from "../components/SettInput";
import { useSession } from "../hooks/useSession";
import AuthButton from "../components/AuthButton";
import { Modal, Fade, Backdrop } from "@material-ui/core";

export default function Auth() {
  const [mshow, setShow] = useState(false);
  const [uname, setUser] = useState("");
  const user = useSession();
  if (!user)
    return (
      <div className="bg-dark-400 w-screen h-screen grid grid-cols-1 grid-rows-3 md:grid-cols-3 gap-4">
        <Head>
          <title>hoot.auth()</title>
        </Head>
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
            <div className="bg-dark-500 rounded-md p-3 w-9/12 h-2/6 space-y-2 flex flex-col items-center justify-between">
              <div className="flex flex-col bg-dark-400 p-3 rounded-md space-y-4 items-center justify-center">
                <Input
                  callback={e => {
                    setUser(e.target.value);
                  }}
                  text="username"
                />
                <Button
                  clickHandler={async () => {
                    fetch("http://localhost:4000/auth/github?uname=" + uname)
                      .then(res => {
                        return res.json();
                      })
                      .then(user => {
                        localStorage.setItem("user", JSON.stringify(user));
                        console.log(JSON.parse(localStorage.user));
                      });
                  }}>
                  submit
                </Button>
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
        <div className="flex flex-col m-auto p-4 rounded-md sm:w-300 md:w-200 bg-dark-300 col-end-2 md:col-start-2 row-start-2 gap-4">
          <div className="flex flex-col gap-2">
            <h1>Welcome</h1>
            <p className="flex-wrap text-dark-200">
              By signing up or logging in, you agree to our{" "}
              <a
                href="https://github.com/coderdjd/hoot/blob/prod/TOS.md"
                className="text-accent-default font-sans font-bold">
                Terms of Services
              </a>{" "}
              and{" "}
              <a
                href="https://github.com/coderdjd/hoot/blob/prod/PP.md"
                className="text-accent-default font-sans font-bold">
                Privacy Policy
              </a>
              .
            </p>
          </div>
          <div className="space-y-4">
            <AuthButton
              pStr="GitHub"
              Icon={<GitHub />}
              onClick={() => setShow(true)}
            />
          </div>
        </div>
      </div>
    );
  else return location.replace("/dash");
}
