import Image from "next/image";
import React from "react";
import carePulseImg from "../public/assets/projects/carepulse_b.jpg";
import { RiRadioButtonFill } from "react-icons/ri";
import Link from "next/link";
import PhotoSlider from "../components/PhotoSlider";

const koshkamedia = () => {
  const images = [
    "/assets/projects/koshkalaptop.jpg",
    "/assets/projects/koshkaldevices.jpg",
    "/assets/koshka/kosh_1.png",
    "/assets/koshka/kosh_2.png",
    "/assets/koshka/kosh_3.png",
    "/assets/koshka/kosh_4.png",
    "/assets/koshka/kosh_5.png",
    "/assets/koshka/kosh_6.png",
    "/assets/koshka/kosh_7.png",
    "/assets/koshka/kosh_8.png",
    "/assets/koshka/kosh_9.png",
    "/assets/koshka/kosh_10.png",
  ];

  return (
    <div className="w-full">
      <div className="container mx-auto py-12">
        <PhotoSlider images={images} />
      </div>

      <div className="max-w-[1240px] mx-auto p-6 grid md:grid-cols-5 gap-8 py-24">
        {/* Left Column for Text Content */}
        <div className="col-span-4">
          <h2>Photography and Videography, Sydney Wordpress, Elementor</h2>

          <a
            href="hhttps://dogood-client-c0dd5e308b90.herokuapp.com/"
            target="_blank"
            rel="noreferrer"
          >
            <button className="underline py-8 mt-6 hover:scale-110 ease-in duration-100">
              🚀 Visit Website
            </button>
          </a>

          <div>
            <h3 className="py-4">Overview </h3>
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
            <h3 className="py-4 mt-4 mr-8">Features</h3>
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
        <div className="col-span-4 md:col-span-1 shadow-md rounded-xl py-4">
          <div className="p-2">
            <p className="font-bold pb-2">Tech Stack</p>
            <div className="grid grid-cols-2 md:grid-cols-1">
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Wordpress, Elementor
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* Video Section */}
      <div className=" max-w-[1240px] mx-auto p-6 ">
        <h3 className=" mb-6"></h3>
        <video
          controls
          className="w-full rounded-lg shadow-lg"
          poster="/assets/projects/koshkaldevices.jpg" // Thumbnail for the video
        >
          {/* Video Source */}
          <source src="/assets/koshka/koshka.mov" type="video/quicktime" />
          {/* Provide MP4 fallback for wider compatibility */}
          <source src="/assets/koshka/koshka.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      <div className=" max-w-[1240px] mx-auto p-6 ">
        <a
          href="https://dogood-admin-b1d5d0ac3f03.herokuapp.com/"
          target="_blank"
          rel="noreferrer"
        ></a>
        <Link href="/#projects">
          <p className="underline cursor-pointer hover:scale-110 ease-in duration-100 mt-4 text-right">
            Back
          </p>
        </Link>
      </div>
    </div>
  );
};

export default koshkamedia;
