import Image from "next/image";
import React, { useState } from "react";
import Link from "next/link";
import PhotoSlider from "../components/PhotoSlider";

const diamonds = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState("");

  const images = [
    "/assets/projects/diamonds_d.png",
    "/assets/diamonds/shopi_1.png",
    "/assets/diamonds/shopi_2.1.png",
    "/assets/diamonds/shopi_9.png",
    "/assets/diamonds/shopi_11.png",
    "/assets/diamonds/shopi_2.png",
    "/assets/diamonds/shopi_3.png",
    "/assets/diamonds/shopi_4.png",
    "/assets/diamonds/shopi_5.png",
    "/assets/diamonds/shopi_6.png",
    "/assets/diamonds/shopi_7.png",
    "/assets/diamonds/shopi_8.png",
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
          <h2 className="py-4">Jewelry Store, Brisbane - Shopify</h2>

          <Link href="https://hvzanj-1c.myshopify.com" passHref>
            <a
              target="_blank"
              rel="noopener noreferrer"
              className="projects-link mt-6 cursor-pointer py-8 underline duration-100 ease-in hover:scale-110"
            >
              🚀 Visit Shopify Website
            </a>
          </Link>

          <div>
            <h4 className="py-4">Overview </h4>
            <p>
              A modern, fully responsive business website for O&A Diamonds built
              with Shopify to provide an engaging user experience and
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
              preload="metadata"
              loading="lazy"
              className="w-full rounded-lg shadow-lg"
              poster="/assets/diamonds/ahopi-3.png" // Thumbnail for the video
            >
              <source
                src="/assets/diamonds/diamond-rec.mov"
                type="video/quicktime"
              />
              <source src="/assets/diamonds/diamond-rec.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>

        {/* Right Column for Tech Stack */}
        <div className="col-span-4 rounded-xl py-4 shadow-md md:col-span-1">
          <div className="p-2">
            {/* Image clickable to open in full-screen modal */}
            <Image
              src="/assets/diamonds/diamonds_webpage.png"
              alt="Wellbeing webpage"
              width={300}
              height={1300}
              className="cursor-pointer rounded-lg shadow-lg"
              onClick={() => openModal("/assets/diamonds/diamonds_webpage.png")}
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

export default diamonds;
