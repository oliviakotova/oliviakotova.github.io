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
      <div className="container mx-auto py-12">
        <PhotoSlider images={images} />
      </div>

      <div className="mx-auto grid max-w-[1240px] gap-8 p-6 py-24 md:grid-cols-5">
        {/* Left Column for Text Content */}
        <div className="col-span-4">
          <p>In progress</p>
          <h2>Personal Website</h2>
          <Link
            href="https://github.com/oliviakotova/oliviakotova.github.io.git"
            passHref
          >
            <a
              target="_blank"
              rel="noopener noreferrer"
              className="projects-link mt-4 cursor-pointer px-8 underline duration-100 ease-in hover:scale-110"
            >
              ⚙️ GitHub
            </a>
          </Link>
        </div>

        {/* Right Column for Tech Stack */}
        <div className="col-span-4 rounded-xl py-4 shadow-md md:col-span-1">
          <div className="p-2">
            <h4 className="pb-2 font-bold">Tech Stack</h4>
            <div className="grid grid-cols-2 md:grid-cols-1">
              <p className="flex items-center py-2 text-gray-600">
                <RiRadioButtonFill className="pr-1" /> Next.js
              </p>
              <p className="flex items-center py-2 text-gray-600">
                <RiRadioButtonFill className="pr-1" /> Node.js
              </p>
              <p className="flex items-center py-2 text-gray-600">
                <RiRadioButtonFill className="pr-1" /> TailwindCSS
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="mx-auto flex max-w-[1240px] items-center justify-between p-6">
        <Link href="/carepulse_admin">
          <p className="mt-6 cursor-pointer py-8 underline duration-100 ease-in hover:scale-110"></p>
        </Link>

        <Link href="/#projects">
          <p className="mt-6 origin-center transform cursor-pointer py-8 underline duration-100 ease-in hover:scale-110">
            Back to Projects
          </p>
        </Link>
      </div>
    </div>
  );
};
export default portfolio;
