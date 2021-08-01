import React from "react";
import { GitHub } from "react-feather";
import Image from "next/image";
import AuthButton from "../components/AuthButton";

export default function Auth() {
  return (
    <div className="bg-dark-400 w-screen h-screen grid grid-cols-1 grid-rows-3 md:grid-cols-3 gap-4">
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
          <AuthButton onClick={() => {}} pStr="GitHub" Icon={<GitHub />} />
          <AuthButton
            onClick={() => {}}
            pStr="Google"
            Icon={<Image src="/google.svg" width={24} height={24} />}
          />
        </div>
      </div>
    </div>
  );
}
