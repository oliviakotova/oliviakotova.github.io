import React from "react";
import Link from "next/link";
// import krisImg from "../public/assets/projects/kristina.png";
import Image from "next/image";

const Project = ({ title, backgroundImg, tech, projectUrl }) => {
  return (
    <div className="relative flex items-center justify-center  h-auto w-full shadow-md rounded-xl group hover:bg-gradient-to-r from-[#1b3463] to-[#5076c7]  ease-in duration-300 bg-gray-50  hover:scale-105 delay-150 transition-all">
      <Image
        className="rounded-xl group-hover:opacity-20 transition-all duration-300"
        // className="transition ease-in-out duration-300 group-hover:opacity-20"
        src={backgroundImg}
        alt="/"
      />
      <div className="hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] ">
        <h3 className="text-2xl text-white tracking-wider text-center">
          {title}
        </h3>
        <p className="pb-4 pt-2 text-white text-center">{tech}</p>
        <Link href={projectUrl}>
          <p className="text-center py-3 rounded-lg bg-white text-gray-700 font-bold text-lg cursor-pointer hover:scale-105 ease-in duration-300">
            More Info
          </p>
        </Link>
      </div>
    </div>
  );
};

export default Project;
