import { Twitter, GitHub } from "react-feather";
import socialMediaAuth from "../services/auth";
import { TwitterProvider, GithubProvider } from "../services/authProviders";

export default function Auth() {
  const handleOnClick = async (provider: any) => {
    const res = await socialMediaAuth(provider);
    console.log(res);
  };
  return (
    <div className="bg-gray-400 w-screen h-screen grid grid-cols-1 grid-rows-3 md:grid-cols-3 gap-4">
      <div className="flex flex-col m-auto p-4 rounded-md sm:w-300 md:w-200 bg-gray-300 col-end-2 md:col-start-2 row-start-2 gap-4">
        <div className="flex flex-col gap-2">
          <h1>Welcome</h1>
          <p className="flex-wrap text-gray-200">
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
          <button
            className="flex gap-2 items-center text-lg text-white font-body font-bold p-2 rounded-md bg-accent-default hover:bg-accent-hover focus:outline-none"
            onClick={() => {
              handleOnClick(GithubProvider);
            }}>
            <GitHub />
            Log in with Github
          </button>
          <button
            className="flex gap-2 items-center text-lg text-white font-body font-bold p-2 rounded-md bg-accent-default hover:bg-accent-hover focus:outline-none"
            onClick={() => {
              handleOnClick(TwitterProvider);
            }}>
            <Twitter />
            Log in with Twitter
          </button>
        </div>
      </div>
    </div>
  );
}
