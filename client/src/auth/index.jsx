import { FaGithubAlt, FaTwitterSquare, FaGoogle } from "react-icons/fa";
import socialMediaAuth from "../services/auth";
import {
  twitterProvider,
  googleProvider,
  githubProvider,
} from "../services/authProviders";

export default function Auth() {
  const handleOnClick = async provider => {
    const { res } = await socialMediaAuth(provider);
    // Add server side logic things to store data about the user in the database.
  };
  return (
    <div className="bg-gray-400 w-screen h-screen grid grid-cols-1 grid-rows-3 md:grid-cols-3 gap-4">
      <div className="flex flex-col m-auto p-4 rounded-md sm:w-400 bg-gray-300 col-end-2 md:col-start-2 row-start-2 gap-4">
        <div className="flex flex-col gap-2">
          <h1>Welcome</h1>
          <p className="flex-wrap">
            By signing up or logging in, you agree to our{" "}
            <a
              href="https://github.com/coderdjd/hoot/blob/prod/TOS.md"
              className="text-accent font-sans font-bold">
              Terms of Services
            </a>{" "}
            and{" "}
            <a
              href="https://github.com/coderdjd/hoot/blob/prod/PP.md"
              className="text-accent font-sans font-bold">
              Privacy Policy
            </a>
            .
          </p>
        </div>
        <div className="space-y-4">
          <button
            className="flex gap-2 items-center text-lg text-white bg-gray-200 font-body font-bold p-2 rounded-md hover:bg-gray-100 focus:outline-none"
            onClick={() => {
              handleOnClick(githubProvider);
            }}>
            <FaGithubAlt />
            Log in with Github
          </button>
          <button
            className="flex gap-2 items-center text-lg text-white bg-gray-200 font-body font-bold p-2 rounded-md hover:bg-gray-100 focus:outline-none"
            onClick={() => {
              handleOnClick(twitterProvider);
            }}>
            <FaTwitterSquare />
            Log in with Twitter
          </button>
          <button
            className="flex gap-2 items-center text-lg text-white bg-gray-200 font-body font-bold p-2 rounded-md hover:bg-gray-100 focus:outline-none"
            onClick={() => {
              handleOnClick(googleProvider);
            }}>
            <FaGoogle />
            Log in with Google
          </button>
        </div>
      </div>
    </div>
  );
}
