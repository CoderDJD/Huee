import { FaGithubAlt, FaGoogle, FaDiscord } from "react-icons/fa";
import logo from "./icon.svg";
export default function Auth() {
  return (
    <div className="bg-primary-100 flex flex-col justify-center items-center w-screen h-screen cursor-default">
      <section className="bg-primary-200 flex flex-col space-y-8 p-12 rounded-md w-3/5">
        <article className="flex flex-col space-y-8">
          <span className="text-secondary-100 font-bold font-sans text-4xl">
            Welcome
          </span>
          <span className="text-secondary-100 font-ubuntu text-2xl">
            By logging in, you accept our{" "}
            <a href="/auth" className="text-secondary-300">
              Terms of Service
            </a>{" "}
            and our{" "}
            <a href="/auth" className="text-secondary-300">
              Privacy policy
            </a>
            .
          </span>
        </article>

        <article className="space-y-4">
          <div className="bg-secondary-200 flex align-middle items-center text-secondary-100 rounded-sm font-ubuntu w-max p-2 space-x-2 cursor-pointer">
            <FaGoogle />
            <span className="text-2xl">Google</span>
          </div>
          <div className=" bg-secondary-200 flex align-middle items-center text-secondary-100 rounded-sm font-ubuntu w-max p-2 space-x-2 cursor-pointer">
            <FaGithubAlt />
            <span className="text-2xl">Github</span>
          </div>
        </article>
      </section>
      <div className="flex flex-row justify-between items-center absolute bottom-0 w-full p-5">
        <a
          className="text-secondary-100 font-ubuntu flex justify-center items-center space-x-1 p-1"
          href="https://hoot.vercel.app/"
        >
          <img src={logo} alt="logo" className="w-8 rounded-xl" />
          <span className="text-4xl">Hoot</span>
        </a>

        <section className="flex space-x-8">
          <a
            className="text-secondary-200 font-ubuntu flex justify-center items-center space-x-1 p-1"
            href="https://github.com/CoderDJD/Hoot"
          >
            <FaGithubAlt className="w-auto h-16" />
          </a>
          <a
            className="text-secondary-400 flex justify-center items-center space-x-1 p-1"
            href="https://discord.gg/ybTdpSApTQ"
          >
            <FaDiscord className="w-auto h-16" />
          </a>
        </section>
      </div>
    </div>
  );
}
