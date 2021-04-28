import { FaGithubAlt, FaGoogle, FaDiscord } from "react-icons/fa";
import logo from "../icon.svg";
import Button from "./components/Button";
import devIcon from "./assets/Coding_SVG.svg";
export default function Auth() {
  return (
    <article className="bg-accent w-screen h-screen cursor-default">
      <article className="flex rounded-md w-full h-screen">
        <section className="bg-white flex flex-col w-full h-full p-5">
          <article className="flex space-x-4">
            <img src={logo} alt="Hoot Logo" className="w-auto h-14" />
            <h1 className="text-accent text-6xl font-sans font-bold">Hoot</h1>
          </article>
          <img src={devIcon} alt="Landing Page Icon" className="w-full h-4/5" />
          <h1 className="text-6xl text-primary-100 font-sans font-bold ">
            Helping you blast off 🚀
          </h1>
        </section>

        <article className="w-full p-12">
          <section className="flex flex-col space-y-4 overflow-hidden p-2">
            <h1 className="text-white font-bold font-sans text-8xl">Welcome</h1>
            <p className="text-white font-ubuntu text-4xl flex-wrap">
              By logging in, you accept our{" "}
              <a href="/auth" className="text-primary-100">
                Terms of Service
              </a>{" "}
              and our{" "}
              <a href="/auth" className="text-primary-100">
                Privacy policy
              </a>
              .
            </p>
          </section>

          <section className="space-y-10 mt-10 flex-wrap text-white">
            <Button>
              <FaGoogle className="w-auto h-10" />
              <h1 className="text-6xl">Google</h1>
            </Button>
            <Button color="primary-200">
              <FaGithubAlt className="w-auto h-10" />
              <h1 className="text-6xl">Github</h1>
            </Button>
          </section>
          <article className="flex align-center justify-center space-x-4 m-10">
            <a
              href="https://github.com/CoderDJD/Hoot"
              className="text-white flex align-center items-center">
              <FaGithubAlt className="w-auto h-24" />
            </a>
            <a
              href="https://discord.gg/ybTdpSApTQ"
              className="text-primary-200 flex align-center items-center">
              <FaDiscord className="w-auto h-24" />
            </a>
          </article>
        </article>
      </article>
    </article>
  );
}
