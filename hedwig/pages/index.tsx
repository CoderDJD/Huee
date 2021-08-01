import React from "react";
import Link from "next/link";
import Head from "next/head";
import Image from "next/image";
import Button from "../components/Button";
import { Box, ThumbsDown, Slash, GitHub, Twitter } from "react-feather";

export default function Home() {
  return (
    <div className="bg-dark-400 w-screen h-screen scrollbar-thin scrollbar-thumb-accent-hover scrollbar-thumb-rounded-md">
      <Head>
        <title>Hoot</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section className="bg-gradient-to-r from-accent-default via-blue-500 to-indigo-500 p-5">
        <h4 className="text-center">Beta out in a month. 🎉</h4>
      </section>
      <main className="bg-dark-400 p-6">
        <div className="bg-dark-400 flex p-1.5 items-center justify-between">
          <section className="flex flex-row space-x-2 itemss-center justify-center">
            <Image src="/logo.svg" width={32} height={32} />
            <h1 className="text-white text-2xl">Hoot</h1>
          </section>
          <section className="flex flex-row space-x-6 items-center justify-center p-1.5">
            <a href="https://github.com/CoderDJD/Hoot" className="text-white">
              GitHub
            </a>
            <Link href="/auth">
              <span className="text-white cursor-pointer">Log In</span>
            </Link>
          </section>
        </div>
        <div className="p-6 mt-16 flex flex-col space-y-14">
          <h1 className="text-6xl text-white text-center">
            Helping projects{" "}
            <span className="text-transparent bg-gradient-to-r from-accent-default to-indigo-500 bg-clip-text">
              take off
            </span>
            , in{" "}
            <a href="https://github.com/CoderDJD/Hoot">
              <span className="text-transparent bg-gradient-to-r from-blue-500 to-green-500 bg-clip-text">
                style
              </span>
            </a>
            .
          </h1>
          <p className="text-xl text-center p-5">
            Create, manage & maintain and your projects, all while being 😎.
          </p>
        </div>
        <div className="flex items-center justify-center space-x-4">
          <Button
            clickHandler={() => {
              window.location.replace("https://forms.gle/ocexeo6dnkbbWVYM6");
            }}>
            GET STARTED
          </Button>
        </div>
        <div className="bg-gray-800 rounded-md p-5 mt-10">
          <h1 className="text-center">
            Maintain, your projects with{" "}
            <span className="text-transparent bg-gradient-to-r from-accent-default to-blue-500 bg-clip-text">
              peace.
            </span>
          </h1>
          <p className="text-white text-center mt-5">
            We ship a lot of features, with no ads, and a good UI, so you can
            focus on your project.
          </p>
          <div className="grid grid-rows-3 grid-cols-1 md:grid-rows-1 md:grid-cols-3 gap-1">
            <div className="flex flex-col items-center justify-center p-1.5 space-y-2 mt-5 md:cols-start-1">
              <Box className="text-pink-500" />
              <h2 className="text-xl">Cross Platform</h2>
              <p>
                Responsive, for all the storagephiles out there, with default
                dark theme, so that we're light on your eyes. PWA available, and
                apps on the app store and play store.
              </p>
            </div>
            <div className="flex flex-col items-center justify-center p-1.5 space-y-2 md:cols-start-2">
              <ThumbsDown className="text-indigo-500" />
              <h2 className="text-xl">No Ads</h2>
              <p>
                Elon took traffic, so we're going no ads, as they are the most
                soul destroying thing after "Big T". We appreciate your
                contributions on GitHub, and just even using the app.
              </p>
            </div>
            <div className="flex flex-col items-center justify-center p-1.5 space-y-2 md:cols-start-3">
              <Slash className="text-blue-500" />
              <h2 className="text-xl">You're private</h2>
              <p>
                We respect your privacy, and you can trust that none of your
                data is ever selled to any person, and we don't serve ads too.
                We're also open source, so you can check our code out.
              </p>
            </div>
          </div>
        </div>
      </main>
      <div className="bg-gray-800 mt-5 p-3 flex flex-col items-center justify-center">
        <section className="flex space-x-2">
          <Image src="/logo.svg" width={32} height={32} />
          <h1>Hoot</h1>
        </section>
        <section className="flex space-x-2 items-center justify-center p-1.5">
          <a href="https://github.com/CoderDJD/Hoot" className="text-white">
            <h3>GitHub</h3>
          </a>
          <h4>|</h4>
          <a href="https://discord.gg/z33ySCHGHK" className="text-white">
            <h3>Discord</h3>
          </a>
          <h4>|</h4>
          <a href="https://twitter.com/CoderDJD" className="text-white">
            <h3>Twitter(Dev)</h3>
          </a>
        </section>
        <section className="flex space-x-4 items-center justify-between p-1.5">
          <a href="https://github.com/CoderDJD/Hoot/">
            <GitHub className="text-white" />
          </a>
          <a href="https://discord.gg/z33ySCHGHK">
            <img src="/discord.svg" width={32} height={32} alt="Discord" />
          </a>
          <a href="https://twitter.com/CoderDJD">
            <Twitter className="text-white" />
          </a>
        </section>
      </div>
    </div>
  );
}
