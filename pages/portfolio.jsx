import Image from "next/image";
import React from "react";
import koshkaImg from "../public/assets/projects/koshkaldevices.jpg";
import { RiRadioButtonFill } from "react-icons/ri";
import Link from "next/link";

const portfolio = () => {
  return (
    <div className="w-full">
      <div className="w-screen h-[50vh] relative">
        <div className="absolute top-0 left-0 w-full h-[50vh] bg-black/40 z-10" />
        <Image
          className="absolute z-1"
          layout="fill"
          objectFit="cover"
          src={koshkaImg}
          alt="/"
        />
      </div>

      <div className="max-w-[1240px] mx-auto p-6 grid md:grid-cols-5 gap-8 py-24">
        <div className="col-span-4">
          <h2 className="py-2">Personal Website</h2>

          <h3>Overview</h3>
          <p>testtest</p>
          <a
            href="https://github.com/oliviakotova/oliviakotova.github.io"
            target="_blank"
            rel="noreferrer"
          >
            <button className="px-8 py-2 mt-4 mr-8 hover:scale-110 ease-in duration-100">
              Code
            </button>
          </a>
          <a
            href="https://github.com/oliviakotova/oliviakotova.github.io"
            target="_blank"
            rel="noreferrer"
          ></a>
        </div>
        <div className="col-span-4 md:col-span-1 shadow-md  rounded-xl py-4">
          <div className="p-2">
            <p className="text-center font-bold pb-2">Technologies</p>
            <div className="grid grid-cols-3 md:grid-cols-1">
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Next.js
              </p>
            </div>
          </div>
        </div>
        <Link href="/#projects" legacyBehavior>
          <p className="underline cursor-pointer hover:scale-110 ease-in duration-100">
            Back
          </p>
        </Link>
      </div>
    </div>
  );
};

export default portfolio;
