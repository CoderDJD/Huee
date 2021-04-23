import { FaGithubAlt, FaTwitter } from "react-icons/fa";
export default function Auth() {
  return (
    <div className="bg-primary-100 flex justify-center items-center flex-col w-full h-full">
      <div className="flex justify-center items-center flex-col w-full h-full">
        <section className="bg-primary-200 flex flex-col space-y-2 w-80 p-5 rounded-lg">
          <article className="flex flex-col space-y-2">
            <h1 className="text-secondary-100 text-2xl font-bold font-sans">
              Hello
            </h1>
            <h3 className="text-secondary-100 font-ubuntu">
              By logging in, you accept our{" "}
              <a href="/auth" className="text-secondary-300">
                Terms of Service
              </a>{" "}
              and our{" "}
              <a href="/auth" className="text-secondary-300">
                Privacy policy
              </a>
              .
            </h3>
          </article>

          <article className="space-y-2">
            <div className="flex align-middle items-center text-secondary-100 bg-secondary-200 rounded-sm font-ubuntu w-max p-2 space-x-2">
              <FaGithubAlt className="w-3" />
              <h1>Log in with Github</h1>
            </div>
            <div className="flex align-middle items-center text-secondary-100 bg-secondary-200 rounded-sm font-ubuntu w-max p-2 space-x-2">
              <FaTwitter className="w-3" />
              <h1>Log in with Twitter</h1>
            </div>
          </article>
        </section>
      </div>
      <div className="bg-secondary-200 w-full h-10 flex justify-center items-center" />
    </div>
  );
}
