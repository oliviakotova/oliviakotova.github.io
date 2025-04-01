import Image from "next/image";
import React from "react";
import { RiRadioButtonFill } from "react-icons/ri";
import Link from "next/link";
import PhotoSlider from "../components/PhotoSlider";

const dogood_admin = () => {
  const images = [
    "/assets/projects/admin_panel.png",
    "/assets/dogood_adm/adm_dg1.png",
    "/assets/dogood_adm/adm_dg2.png",
    "/assets/dogood_adm/adm_dg3.png",

    "/assets/dogood_adm/adm_dg5.png",
    "/assets/dogood_adm/adm_dg6.png",
    "/assets/dogood_adm/adm_dg7.png",
  ];

  return (
    <div className="w-full">
      <div className="container mx-auto py-12">
        <PhotoSlider images={images} />
      </div>

      <div className="mx-auto grid max-w-[1240px] gap-8 p-6 py-24 md:grid-cols-5">
        {/* Left Column for Text Content */}
        <div className="col-span-4 flex flex-wrap gap-8">
          <h2>
            Admin Panel for Volunteering Application with MERN stack |
            Authentication | Cookies | Real Time Chat
          </h2>
          <Link href="https://github.com/oliviakotova/do-good" passHref>
            <a
              target="_blank"
              rel="noopener noreferrer"
              className="projects-link mt-4 cursor-pointer px-8 underline duration-100 ease-in hover:scale-110"
            >
              ⚙️ GitHub
            </a>
          </Link>

          <Link
            href="https://dogood-admin-b1d5d0ac3f03.herokuapp.com/"
            passHref
          >
            <a
              target="_blank"
              rel="noopener noreferrer"
              className="projects-link mt-4 cursor-pointer px-8 underline duration-100 ease-in hover:scale-110"
            >
              🚀 Visit DoGood Admin Panel
            </a>
          </Link>

          <div>
            <h4 className="py-4">Overview </h4>
            <p>
              DoGood is a platform where people in need can place their request
              of help and its details and volunteers who can see that list of
              tasks in their local and willing to provide help in their free
              time. User authentication is available so you can signup or
              signing to your account with an email address and found volunteers
              or people who need help.
            </p>
            <h4 className="py-4">for testing: </h4>
            <p>USER NAME: admin@gmail.com</p>
            <p>PASSWORD: Admin123</p>
          </div>

          <div>
            <h4 className="mr-8 mt-4 py-4">Features</h4>
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
        <div className="col-span-4 rounded-xl py-4 shadow-md md:col-span-1">
          <div className="p-2">
            <p className="pb-2 font-bold">Tech Stack</p>
            <div className="grid grid-cols-2 md:grid-cols-1">
              <p className="flex items-center py-2 text-gray-600">
                <RiRadioButtonFill className="pr-1" /> MongoDB Atlas
              </p>

              <p className="flex items-center py-2 text-gray-600">
                <RiRadioButtonFill className="pr-1" /> Express.js
              </p>
              <p className="flex items-center py-2 text-gray-600">
                <RiRadioButtonFill className="pr-1" /> React.js
              </p>
              <p className="flex items-center py-2 text-gray-600">
                <RiRadioButtonFill className="pr-1" /> Node.js
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* Video Section */}
      <div className="mx-auto max-w-[1240px] p-6">
        <h4 className="mb-6">
          {" "}
          admin can login with email-password; view all users; delete, update or
          create user
        </h4>
        <video
          controls
          preload="metadata"
          loading="lazy"
          className="w-full rounded-lg bg-gray-50 shadow-lg"
          poster="/assets/dogood_adm/adm_dg3.png" // Thumbnail for the video
        >
          {/* Video Source */}
          <source
            src="/assets/dogood_adm/dogood_adm.mov"
            type="video/quicktime"
          />
          {/* Provide MP4 fallback for wider compatibility */}
          <source src="/assets/dogood_adm/dogood_adm.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      <div className="mx-auto flex max-w-[1240px] items-center justify-between p-6">
        <Link href="/dogood">
          <p className="mt-6 cursor-pointer py-8 underline duration-100 ease-in hover:scale-110">
            🚀 Visit DoGood App
          </p>
        </Link>

        <Link href="/#projects">
          <p className="mt-4 cursor-pointer text-right underline duration-100 ease-in hover:scale-110">
            Back to Projects
          </p>
        </Link>
      </div>
    </div>
  );
};

export default dogood_admin;
