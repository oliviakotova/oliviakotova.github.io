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
      <div className="container mx-auto py-12">
        <PhotoSlider images={images} />
      </div>

      <div className="mx-auto grid max-w-[1240px] gap-8 p-6 py-24 md:grid-cols-5">
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
              className="projects-link mt-4 cursor-pointer px-8 underline duration-100 ease-in hover:scale-110"
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
              className="projects-link mt-4 cursor-pointer px-8 underline duration-100 ease-in hover:scale-110"
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
            <h4 className="mr-8 mt-4 py-4">Features</h4>
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
        <div className="col-span-4 rounded-xl py-4 shadow-md md:col-span-1">
          <div className="p-2">
            <h4 className="pb-2 font-bold">Tech Stack</h4>
            <div className="grid grid-cols-2 md:grid-cols-1">
              <p className="flex items-center py-2 text-gray-600">
                <RiRadioButtonFill className="pr-1" /> React.js
              </p>
              <p className="flex items-center py-2 text-gray-600">
                <RiRadioButtonFill className="pr-1" /> Google Gemini API
              </p>
              <p className="flex items-center py-2 text-gray-600">
                <RiRadioButtonFill className="pr-1" /> Vite
              </p>
              <p className="flex items-center py-2 text-gray-600">
                <RiRadioButtonFill className="pr-1" /> CSS
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* Video Section */}
      <div className="mx-auto max-w-[1240px] p-6">
        <h4 className="mb-6"> video, Chatbot is answering questions </h4>
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

export default chatbot;
