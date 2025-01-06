import Image from "next/image";
import React from "react";
import diamonImg from "../public/assets/projects/diamonds_d.png";
import { RiRadioButtonFill } from "react-icons/ri";
import Link from "next/link";

const diamonds = () => {
  return (
    <div className="w-full">
      <div className="w-screen h-[50vh] relative">
        <div className="absolute top-0 left-0 w-full h-[50vh] bg-black/10 z-10" />
        <Image
          className="absolute z-1"
          layout="fill"
          objectFit="cover"
          src={diamonImg}
          alt="/"
        />
        <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-6">
          {/* <h2 className="py-2">Anastasia Cosmeting Tattooing</h2> */}
        </div>
      </div>

      <div className="max-w-[1240px] mx-auto p-6 grid md:grid-cols-5 gap-8 py-8">
        <div className="col-span-4">
          <p>In progress</p>
          <h2>Project: O&A Diamonds Shop </h2>
          {/* <p>bla-bla</p> */}
          <a href="" target="_blank" rel="noreferrer">
            {/* <button className="px-8 py-2 mt-4 mr-8 hover:scale-110 ease-in duration-100">
              Code
            </button> */}
          </a>
          <a
            href="https://hvzanj-1c.myshopify.com"
            target="_blank"
            rel="noreferrer"
          >
            <button className="px-8 py-2 mt-4 hover:scale-110 ease-in duration-100">
              Demo
            </button>
          </a>
        </div>
        <div className="col-span-4 md:col-span-1 shadow-md  rounded-xl py-4">
          <div className="p-2">
            <p className="text-center font-bold pb-2">Technologies</p>
            <div className="grid grid-cols-2 md:grid-cols-1">
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Shopyfi
              </p>
            </div>
          </div>
        </div>
        <Link href="/#projects">
          <p className="underline cursor-pointer hover:scale-110 ease-in duration-100">
            Back
          </p>
        </Link>
      </div>
    </div>
  );
};

export default diamonds;
