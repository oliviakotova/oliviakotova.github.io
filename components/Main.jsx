import React from "react";

import {
  FaGithub,
  FaLinkedinIn,
  FaEnvelope,
  FaAngleDoubleDown,
} from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";
import { HiChevronDoubleDown } from "react-icons/hi";
import useDownloader from "react-use-downloader";
import { useRouter } from "next/router";
import ScrollToNext from "./ScrolltoNext";

const Main = () => {
  const router = useRouter();
  const email = process.env.NEXT_PUBLIC_EMAIL;
  const handleEmailClick = () => {
    if (email) {
      router.push(`mailto:${email}`);
    } else {
      console.error("Email is not available");
    }
  };

  return (
    <div id="home" className="h-screen w-full text-center">
      <div className="relative mx-auto flex h-full w-full max-w-[1240px] items-center justify-center">
        <div>
          <p className="text-sm uppercase tracking-widest text-gray-600"></p>

          <h1 className="py-4 text-gray-700">
            Hey, I am{" "}
            <span className="text-[#4382e8] dark:text-[#cb6d50]"> Olivia </span>
          </h1>
          <h1 className="py-2 text-gray-700"> A Web Developer</h1>
          <p className="m-auto max-w-[70%] py-4 text-gray-600">
            I’m focused on building responsive front-end web applications while
            learning back-end technologies.
          </p>
          <div className="m-auto flex max-w-[330px] items-center justify-between py-4">
            <a
              href="https://www.linkedin.com/in/olivia-kotova"
              target="_blank"
              rel="noreferrer"
            >
              <div className="cursor-pointer rounded-full bg-gray-50 p-6 shadow-md duration-300 ease-in hover:scale-150">
                <FaLinkedinIn />
              </div>
            </a>
            <a
              href="https://github.com/oliviakotova"
              target="_blank"
              rel="noreferrer"
            >
              <div className="cursor-pointer rounded-full bg-gray-50 p-6 shadow-md duration-300 ease-in hover:scale-150">
                <FaGithub />
              </div>
            </a>

            <a onClick={handleEmailClick} target="_blank" rel="noreferrer">
              <div className="cursor-pointer rounded-full bg-gray-50 p-6 shadow-md duration-300 ease-in hover:scale-150">
                <FaEnvelope />
              </div>
            </a>
          </div>
        </div>
      </div>
      {/* <div className="absolute bottom-10 right-10 cursor-pointer animate-bounce hover:animate-none hover:scale-110 ease-in duration-600">
        <Link href="/#about">
          <a>
            <div className="rounded-full shadow-md p-6   bg-gray-50">
              <FaAngleDoubleDown />
              <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
            </div>
          </a>
        </Link>
      </div>*/}
      <div>
        <ScrollToNext />
      </div>
    </div>
  );
};

export default Main;
