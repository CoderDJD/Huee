import React from "react";
import Link from "next/link";
import Twemoji from "../components/Twemoji";

export default function Error() {
  return (
    <div className="w-screen h-screen bg-dark-400">
      <article className="flex flex-row items-center justify-center w-full h-full">
        <div className=" bg-dark-300 p-3">
          <article>
            <h1 className="text-transparent bg-clip-text bg-gradient-to-tr from-accent-default via-orange-500 to-yellow-500">
              There are no time machines as of now.
            </h1>
            <p className="text-gray-300">
              We might get one in a few years. But as of now, we&apos;re not
              delving into that problem space. We can only{" "}
              <Link href="/">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-default to-purple-500">
                  help you manage projects in peace
                </span>
              </Link>
              . Oh, and did you know Hoot is powered by a flabby teenager who
              codes in his free time? <Twemoji emoji="🤯" />
            </p>
          </article>
        </div>
      </article>
    </div>
  );
}
