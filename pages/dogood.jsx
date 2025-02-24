import Image from "next/image";
import React from "react";
import { RiRadioButtonFill } from "react-icons/ri";
import Link from "next/link";
import PhotoSlider from "../components/PhotoSlider";

const dogood = () => {
  const images = [
    "/assets/projects/dogood_mobile.png",
    "/assets/dogood_adm/dogood_1.png",
    "/assets/dogood_adm/dogood_2.png",
    "/assets/dogood_adm/dogood_3.png",
    "/assets/dogood_adm/dogood_4.png",
  ];

  return (
    <div className="w-full">
      <div className="container mx-auto py-12">
        <PhotoSlider images={images} />
      </div>

      <div className="max-w-[1240px] mx-auto p-6 grid md:grid-cols-5 gap-8 py-24">
        {/* Left Column for Text Content */}
        <div className="col-span-4 flex flex-wrap gap-8">
          <h2>
            Volunteering Appication with MERN stack | Authentication | Cookies |
            Real Time Chat
          </h2>
          <Link href="https://github.com/oliviakotova/do-good" passHref>
            <a
              target="_blank"
              rel="noopener noreferrer"
              className=" underline cursor-pointer px-8 mt-4 hover:scale-110 ease-in duration-100 projects-link"
            >
              ⚙️ GitHub
            </a>
          </Link>

          <Link
            href="https://dogood-client-c0dd5e308b90.herokuapp.com"
            passHref
          >
            <a
              target="_blank"
              rel="noopener noreferrer"
              className="underline cursor-pointer px-8 mt-4 hover:scale-110 ease-in duration-100 projects-link"
            >
              🚀 Visit DoGood App
            </a>
          </Link>

          <div>
            <h4 className="py-4">Overview </h4>
            <p>
              Do good is a platform where people in need can place their request
              of help and its details and volunteers who can see that list of
              tasks in their local and willing to provide help in their free
              time. User authentication is available so you can signup or
              signing to your account with an email address and found volunteers
              or people who need help.
            </p>
          </div>

          <div>
            <h4 className="py-4 mt-4 mr-8">Features</h4>
            <p>
              👉 Users can sign up and create a personal profile as a volunteer
              or person who need help.
            </p>
            <p>
              👉 Volunteer can see all people who need help and start
              conversation/chat about time and place the help needed.
            </p>
            <p>
              👉 Administrators have the ability to efficiently view, edit and
              delete and create accounts or messages if needed.
            </p>
          </div>
        </div>

        {/* Right Column for Tech Stack */}
        <div className="col-span-4 md:col-span-1 shadow-md  rounded-xl py-4">
          <div className="p-2">
            <p className="font-bold pb-2">Tech Stack</p>
            <div className="grid grid-cols-2 md:grid-cols-1">
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> MongoDB Atlas
              </p>

              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Express.js
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> React.js
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Node.js
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* Video Section */}
      <div className=" max-w-[1240px] mx-auto p-6 ">
        <h4 className=" mb-6"> swipes and messages</h4>
        <video
          controls
          preload="metadata"
          loading="lazy"
          className="w-full rounded-lg shadow-lg"
          poster="/assets/dogood_adm/dogood_3.png" // Thumbnail for the video
        >
          {/* Video Source */}
          <source src="/assets/dogood_adm/dogood.mov" type="video/quicktime" />
          {/* Provide MP4 fallback for wider compatibility */}
          <source src="/assets/dogood_adm/dogood.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      <div className="max-w-[1240px] mx-auto p-6 flex justify-between items-center">
        <Link href="/dogood_admin">
          <p className="underline cursor-pointer py-8 mt-6 hover:scale-110 ease-in duration-100">
            🚀 Visit DoGood Admin Panel
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

export default dogood;
