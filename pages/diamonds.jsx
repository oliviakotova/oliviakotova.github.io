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

      <div className="max-w-[1240px] mx-auto p-6 grid md:grid-cols-5 gap-8 py-24">
        {/* Left Column for Text Content */}
        <div className="col-span-4">
          <h2>Jewelry Store, Brisbane - Shopify</h2>

          <a
            href="https://hvzanj-1c.myshopify.com"
            target="_blank"
            rel="noreferrer"
          >
            <button className="underline py-8 mt-6 hover:scale-110 ease-in duration-100">
              🚀 Visit Shopify Website
            </button>
          </a>

          <div>
            <h3 className="py-4">Overview </h3>
            <p>
              A modern, fully responsive business website for O&A Diamonds built
              with Shopify to provide an engaging user experience and
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
        <div className="col-span-4 md:col-span-1 shadow-md rounded-xl py-4">
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

export default diamonds;
