import Image from "next/image";
import React from "react";
import carePulseImg from "../public/assets/projects/carepulse_b.jpg";
import { RiRadioButtonFill } from "react-icons/ri";
import Link from "next/link";
import PhotoSlider from "../components/PhotoSlider";

const chatbot = () => {
  const images = ["/assets/chatbot/chat_bot.png"];

  return (
    <div className="w-full">
      <div className="container mx-auto py-12 ">
        <PhotoSlider images={images} />
      </div>

      <div className="max-w-[1240px] mx-auto p-6 grid md:grid-cols-5 gap-8 py-24">
        {/* Left Column for Text Content */}
        <div className="col-span-4 flex flex-wrap gap-8">
          <h2>
            Patient Management System with Next.js | Twilio, TypeScript,
            TailwindCSS{" "}
          </h2>
          <Link
            href="https://github.com/oliviakotova/chatbot-jemini.git"
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

          <Link
            href="https://portfoliochatbot-a8cc7bc0ab5c.herokuapp.com"
            passHref
          >
            <a
              target="_blank"
              rel="noopener noreferrer"
              className="underline cursor-pointer px-8 mt-4 hover:scale-110 ease-in duration-100 projects-link"
            >
              🚀 Visit App
            </a>
          </Link>

          <div>
            <h4 className="py-4">Overview </h4>
            <p>
              This project features an AI-powered chatbot built with React JS
              and CSS, designed to provide accurate answers based on a
              predefined set of company information. The chatbot dynamically
              generates responses using the Google Gemini API and can answer
              questions that are relevant to the data available in the
              companyInfo.js file, in addition to providing cost estimates for
              website packages.
            </p>
          </div>

          <div>
            <h4 className="py-4 mt-4 mr-8">Features</h4>
            <p>
              👉 The user interacts with the chatbot by asking questions related
              to the company or website packages.
            </p>
            <p>👉 Input box for sending messages to the chatbot.</p>
            <p>
              👉 The chatbot uses the Google Gemini API to generate dynamic
              responses based on the input.
            </p>
            <p>👉 Loading indicators while waiting for responses.</p>
            <p>👉 Toggleable chatbot popup for easy access.</p>
          </div>
        </div>

        {/* Right Column for Tech Stack */}
        <div className="col-span-4 md:col-span-1 shadow-md  rounded-xl py-4">
          <div className="p-2">
            <h4 className="font-bold pb-2">Tech Stack</h4>
            <div className="grid grid-cols-2 md:grid-cols-1">
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> React.js
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Google Gemini API
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Vite
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> CSS
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* Video Section */}
      <div className=" max-w-[1240px] mx-auto p-6 ">
        <h4 className=" mb-6"> video, Chatbot is answering questions </h4>
        <video
          controls
          preload="metadata"
          loading="lazy"
          className="w-full rounded-lg shadow-lg"
          poster="/assets/chatbot/chat_bot.png" // Thumbnail for the video
        >
          {/* Video Source */}
          <source src="/assets/chatbot/chat_vid.mov" type="video/quicktime" />
          {/* Provide MP4 fallback for wider compatibility */}
          <source src="/assets/chatbot/chat_vid.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      <div className="max-w-[1240px] mx-auto p-6 flex justify-between items-center">
        <Link href="/carepulse_admin">
          <p className="underline cursor-pointer py-8 mt-6 hover:scale-110 ease-in duration-100"></p>
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

export default chatbot;
