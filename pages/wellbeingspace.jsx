import Image from "next/image";
import React, { useState } from "react";
import { RiRadioButtonFill } from "react-icons/ri";
import Link from "next/link";
import PhotoSlider from "../components/PhotoSlider";
import koshWebp from "../public/assets/koshka/koshkamedia_webpage.png";

const wellbeingspace = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState("");

  const images = [
    "/assets/projects/wellbeing_devices.jpg",

    "/assets/wellbeing/well-8.png",
    "/assets/wellbeing/well-7.png",
    "/assets/wellbeing/well-6.png",
    "/assets/wellbeing/well-5.png",
    "/assets/wellbeing/well-4.png",
    "/assets/wellbeing/well-3.png",
    "/assets/wellbeing/well-2.png",
    "/assets/wellbeing/well-1.png",
    "/assets/wellbeing/well-0.png",
  ];

  const openModal = (imageSrc) => {
    setSelectedImage(imageSrc);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
    setSelectedImage("");
  };

  return (
    <div className="w-full">
      <div className="container mx-auto py-12">
        <PhotoSlider images={images} />
      </div>

      <div className="mx-auto grid max-w-[1240px] gap-8 p-6 py-24 md:grid-cols-5">
        {/* Left Column for Text Content */}
        <div className="col-span-4">
          <h2 className="py-4"> WELLBEING COUNSELLING, Sydney - Squarespace</h2>

          <Link href="https://www.wellbeingspace.com.au" passHref>
            <a
              target="_blank"
              rel="noopener noreferrer"
              className="projects-link mt-6 cursor-pointer py-8 underline duration-100 ease-in hover:scale-110"
            >
              🚀 Visit Squarespace Website
            </a>
          </Link>

          <div>
            <h4 className="py-4">Overview </h4>
            <p>
              A modern, fully responsive business website for Wellbeing Space
              built with Squarespace to provide an engaging user experience and
              easy-to-navigate interface for potential customers.
            </p>
          </div>

          <div>
            <h4 className="mr-8 mt-4 py-4">Features</h4>
            <p>👉 Testtest</p>
          </div>

          <div className="mx-auto max-w-[1240px] p-6">
            <video
              controls
              className="w-full rounded-lg shadow-lg"
              poster="/assets/wellbeing/well-7.png" // Thumbnail for the video
            >
              <source
                src="/assets/wellbeing/well-screen-rec.mov"
                type="video/quicktime"
              />
              <source
                src="/assets/wellbeing/well-screen-rec.mp4"
                type="video/mp4"
              />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>

        {/* Right Column for Tech Stack */}
        <div className="col-span-4 rounded-xl py-4 shadow-md md:col-span-1">
          <div className="p-2">
            {/* Image clickable to open in full-screen modal */}
            <Image
              src="/assets/wellbeing/wellbeingspace_webpage.png"
              alt="Wellbeing webpage"
              width={300}
              height={700}
              className="cursor-pointer rounded-lg shadow-lg"
              onClick={() =>
                openModal("/assets/wellbeing/wellbeingspace_webpage.png")
              }
            />
          </div>
        </div>
      </div>

      {/* Modal for Fullscreen Image */}
      {isOpen && (
        <div
          className="fixed inset-0 z-50 flex justify-center bg-black bg-opacity-70"
          onClick={closeModal}
        >
          {/* Modal Content Wrapper */}
          <div className="max-h-[90vh] overflow-y-auto p-4">
            <button
              className="absolute right-4 top-4 text-3xl text-white"
              onClick={closeModal}
            >
              ×
            </button>
            {/* Image inside modal */}
            <Image
              src={selectedImage}
              alt="Fullscreen Image"
              width={600}
              height={1600}
              className="h-auto max-h-screen w-full rounded-lg object-contain" // Full width, auto height, maintain aspect ratio
            />
          </div>
        </div>
      )}
      <div className="mx-auto flex max-w-[1240px] items-center justify-between p-6">
        <a
          href="https://oliviakotova-ced1437fd5ca.herokuapp.com/anastasia"
          target="_blank"
          rel="noreferrer"
        >
          <button className="mt-6 py-8 underline duration-100 ease-in hover:scale-110"></button>
        </a>
        <Link href="/#projects">
          <p className="mt-6 origin-center transform cursor-pointer py-8 underline duration-100 ease-in hover:scale-110">
            Back to Projects
          </p>
        </Link>
      </div>
    </div>
  );
};

export default wellbeingspace;
