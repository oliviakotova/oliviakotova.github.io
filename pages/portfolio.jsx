import Image from "next/image";
import React from "react";
import carePulseImg from "../public/assets/projects/carepulse_b.jpg";
import { RiRadioButtonFill } from "react-icons/ri";
import Link from "next/link";
import PhotoSlider from "../components/PhotoSlider";

const portfolio = () => {
  const images = ["/assets/projects/portfolio.png"];

  return (
    <div className="w-full">
      <div className="container mx-auto py-12 ">
        <PhotoSlider images={images} />
      </div>

      <div className="max-w-[1240px] mx-auto p-6 grid md:grid-cols-5 gap-8 py-24">
        {/* Left Column for Text Content */}
        <div className="col-span-4  ">
          <p>In progress</p>
          <h2>Personal Website</h2>
          <Link
            href="https://github.com/oliviakotova/oliviakotova.github.io.git"
            passHref
          >
            <a
              target="_blank"
              rel="noopener noreferrer"
              className=" underline cursor-pointer px-8 mt-4 hover:scale-110 ease-in duration-100 projects-link"
            >
              ⚙️ GitHub
            </a>
          </Link>
        </div>

        {/* Right Column for Tech Stack */}
        <div className="col-span-4 md:col-span-1 shadow-md  rounded-xl py-4">
          <div className="p-2">
            <h4 className="font-bold pb-2">Tech Stack</h4>
            <div className="grid grid-cols-2 md:grid-cols-1">
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Next.js
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Node.js
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> TailwindCSS
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-[1240px] mx-auto p-6 flex justify-between items-center">
        <Link href="/carepulse_admin">
          <p className="underline cursor-pointer py-8 mt-6 hover:scale-110 ease-in duration-100">
            🚀 Visit CarePulse Admin Panel
          </p>
        </Link>

        <Link href="/#projects">
          <p className="underline py-8 cursor-pointer hover:scale-110 transform origin-center ease-in duration-100 mt-6">
            Back to Projects
          </p>
        </Link>
      </div>
    </div>
  );
};
export default portfolio;
