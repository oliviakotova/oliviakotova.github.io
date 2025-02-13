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

      <div className="max-w-[1240px] mx-auto p-6 grid md:grid-cols-5 gap-8 py-24">
        {/* Left Column for Text Content */}
        <div className="col-span-4">
          <h2>WELLBEING COUNSELLING, Sydney - Squarespace</h2>

          <a
            href="https://www.wellbeingspace.com.au"
            target="_blank"
            rel="noreferrer"
          >
            <button className="underline py-8 mt-6 hover:scale-110 ease-in duration-100">
              🚀 Visit Squarespace Website
            </button>
          </a>

          <div>
            <h3 className="py-4">Overview </h3>
            <p>
              A modern, fully responsive business website for Wellbeing Space
              built with Squarespace to provide an engaging user experience and
              easy-to-navigate interface for potential customers.
            </p>
          </div>

          <div>
            <h3 className="py-4 mt-4 mr-8">Features</h3>
            <p>👉 Testtest</p>
          </div>

          <div className=" max-w-[1240px] mx-auto p-6 ">
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
        <div className="col-span-4 md:col-span-1 shadow-md rounded-xl py-4">
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
          className="fixed inset-0 bg-black bg-opacity-70 z-50 flex justify-center "
          onClick={closeModal}
        >
          {/* Modal Content Wrapper */}
          <div className=" max-h-[90vh] overflow-y-auto p-4">
            <button
              className="absolute top-4 right-4 text-white text-3xl"
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
              className="w-full h-auto max-h-screen object-contain rounded-lg" // Full width, auto height, maintain aspect ratio
            />
          </div>
        </div>
      )}
      <div className="max-w-[1240px] mx-auto p-6 flex justify-between items-center">
        <a
          href="https://oliviakotova-ced1437fd5ca.herokuapp.com/anastasia"
          target="_blank"
          rel="noreferrer"
        >
          <button className="underline py-8 mt-6 hover:scale-110 ease-in duration-100"></button>
        </a>
        <Link href="/#projects">
          <p className="underline py-8 cursor-pointer hover:scale-110 transform origin-center ease-in duration-100 mt-6">
            Back to Projects
          </p>
        </Link>
      </div>
    </div>
  );
};

export default wellbeingspace;
