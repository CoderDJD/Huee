import { FaGithubAlt, FaTwitterSquare } from "react-icons/fa";
import { authWithGithub } from "../../firebase";
export default function SignUp() {
  return (
    <div className="bg-gray-400 w-full h-full grid grid-cols-1 grid-rows-3 md:grid-cols-3 gap-4">
      <div className="flex flex-col m-auto p-4 rounded-md w-full sm:w-400 bg-gray-300 col-end-2 md:col-start-2 row-start-2 gap-4">
        <div className="flex flex-col gap-2">
          <h1>Welcome</h1>
          <p className="flex-wrap">
            By signing up or logging in, you agree to our{" "}
            <a href="https://github.com/coderdjd/hoot/blob/prod/TOS.md">
              Terms of Services
            </a>{" "}
            and{" "}
            <a href="https://github.com/coderdjd/hoot/blob/prod/PP.md">
              Privacy Policy
            </a>
            .
          </p>
        </div>
        <div className="flex flex-col items-start space-y-4">
          <button className="flex gap-2 items-center" onClick={authWithGithub}>
            <FaGithubAlt />
            Github
          </button>
          <button className="flex gap-2 items-center">
            <FaTwitterSquare />
            Twitter
          </button>
        </div>
      </div>
    </div>
  );
}
