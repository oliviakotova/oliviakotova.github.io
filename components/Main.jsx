import Link from "next/link";
import React from "react";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";
import { HiChevronDoubleDown } from "react-icons/hi";
import useDownloader from "react-use-downloader";
import { useRouter } from "next/router";

const Main = () => {
  const router = useRouter();
  return (
    <div id="home" className=" w-full h-screen text-center">
      <div className=" relative max-w-[1240px] w-full h-full mx-auto  flex justify-center items-center">
        <div>
          <p className="uppercase text-sm tracking-widest text-gray-600"></p>

          <h1 className="py-4 text-gray-700">
            Hi, I am <span className="text-[#4382e8]"> Olivia </span>
          </h1>
          <h1 className="py-2 text-gray-700"> A Web Developer</h1>
          <p className="py-4 text-gray-600 max-w-[70%] m-auto">
            I’m focused on building responsive front-end web applications while
            learning back-end technologies.
          </p>
          <div className="flex items-center justify-between max-w-[330px] m-auto py-4">
            <a
              href="https://www.linkedin.com/in/olivia-kotova"
              target="_blank"
              rel="noreferrer"
            >
              <div className="rounded-full shadow-md p-6 cursor-pointer hover:scale-150 ease-in duration-300 bg-gray-50">
                <FaLinkedinIn />
              </div>
            </a>
            <a
              href="https://github.com/oliviakotova"
              target="_blank"
              rel="noreferrer"
            >
              <div className="rounded-full shadow-md p-6 cursor-pointer hover:scale-150 ease-in duration-300 bg-gray-50">
                <FaGithub />
              </div>
            </a>
            <button
              className="rounded-full shadow-md p-6 cursor-pointer hover:scale-150 ease-in duration-300 bg-gray-50"
              onClick={() => router.push("mailto:olivia.kotova@hotmail.com")}
            >
              <AiOutlineMail />
            </button>
            <Link href="/cv">
              <div className="rounded-full shadow-md p-6 cursor-pointer hover:scale-150 ease-in duration-300 bg-gray-50 ">
                <BsFillPersonLinesFill />
              </div>
            </Link>
          </div>
        </div>
      </div>
      <div className="absolute bottom-10 right-10">
        <Link href="/#about">
          <a>
            <div className="rounded-full shadow-md p-4 cursor-pointer hover:scale-150 ease-in duration-300">
              <svg
                className="animate-bounce w-6 h-6 text-gray-900"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
              </svg>
            </div>
          </a>
        </Link>
      </div>
    </div>
  );
};

export default Main;
