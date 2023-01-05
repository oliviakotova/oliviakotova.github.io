import Image from "next/image";
import React from "react";
import kristinadImg from "../public/assets/projects/kristina_devises.png";
import { RiRadioButtonFill } from "react-icons/ri";
import Link from "next/link";

const kristina = () => {
  return (
    <div className="w-full">
      <div className="w-screen h-[50vh] relative">
        <div className="absolute top-0 left-0 w-full h-[50vh] bg-black/40 z-10" />
        <Image
          className="absolute z-1"
          layout="fill"
          objectFit="cover"
          src={kristinadImg}
          alt="/"
        />
      </div>

      <div className="max-w-[1240px] mx-auto p-6 grid md:grid-cols-5 gap-8 py-8">
        <div className="col-span-4">
          <h2 className="py-2">Support and Care for Women</h2>

          <h3>Overview</h3>
          <p>
            This app was built using React JS and is hosted on Firebase. Users
            are able to search properties based on an Address, City, or ZIP code
            to retrieve a list of active properties currently for sale. You will
            be able to view property information as well as the specific
            location of the property integrated with the Google Maps API. User
            authentication is available so you can signup and signin to your
            account with an email address in order to save your favorite
            properties. This is made possible with Zillow API.
          </p>
          <a
            href="https://kristina.oliviakotova.com/"
            target="_blank"
            rel="noreferrer"
          >
            <button className="px-8 py-2 mt-4 mr-8 hover:scale-110 ease-in duration-100">
              Code
            </button>
          </a>
          <a
            href="https://kristina.oliviakotova.com/"
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
            <div className="grid grid-cols-3 md:grid-cols-1">
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> WordPress
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

export default kristina;
