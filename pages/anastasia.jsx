import Image from "next/image";
import React, { useState } from "react";
import Link from "next/link";
import PhotoSlider from "../components/PhotoSlider";

const anastasia = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState("");

  const images = [
    "/assets/anastasia/anas-1.png",
    "/assets/anastasia/anas-2.png",
    "/assets/anastasia/anas-3.png",
    "/assets/anastasia/anas-4.png",
    "/assets/anastasia/anas-5.png",
    "/assets/anastasia/anas-6.png",
    "/assets/anastasia/anas-7.png",
    "/assets/anastasia/anas-8.png",
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
          <p>In progress</p>
          <h2 className="py-4">
            Anastasia Cosmeting Tattooing - Wordpress, Elementor
          </h2>
          <Link href="http://anastasiacosmetictattoo.com/" passHref>
            <a
              target="_blank"
              rel="noopener noreferrer"
              className="projects-link mt-6 cursor-pointer py-8 underline duration-100 ease-in hover:scale-110"
            >
              🚀 Visit Wordpress Website
            </a>
          </Link>

          <div>
            <h4 className="py-4">Overview </h4>
            <p>
              A modern, fully responsive business website for Anastatsia
              Cosmetic Studio built with WordPress and Elementor to provide an
              engaging user experience and easy-to-navigate interface for
              potential customers.
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
              poster="/assets/anastasia/anas-1.png" // Thumbnail for the video
            >
              <source
                src="/assets/anastasia/anast.mov"
                type="video/quicktime"
              />
              <source src="/assets/anastasia/anast.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
          <div className="mx-auto flex max-w-[1240px] items-center justify-between p-6">
            <Link href="/koshkamedia">
              <p className="mt-6 cursor-pointer py-8 underline duration-100 ease-in hover:scale-110">
                🚀 Visit Another Wordpress Website
              </p>
            </Link>
            <Link href="/#projects">
              <p className="mt-6 origin-center transform cursor-pointer py-8 underline duration-100 ease-in hover:scale-110">
                Back to Projects
              </p>
            </Link>
          </div>
        </div>

        {/* Right Column for Tech Stack */}
        <div className="col-span-4 rounded-xl py-4 shadow-md md:col-span-1">
          <div className="p-2">
            {/* Image clickable to open in full-screen modal */}
            <Image
              src="/assets/anastasia/anastasia_webpage.png"
              alt="Anastasia full screen webpage"
              width={300}
              height={2300}
              className="cursor-pointer rounded-lg shadow-lg"
              onClick={() =>
                openModal("/assets/anastasia/anastasia_webpage.png")
              }
            />
          </div>
        </div>
      </div>

      {/* Modal for Fullscreen Image */}
      {isOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70"
          onClick={closeModal}
        >
          {/* Modal Content Wrapper */}
          <div className="relative max-h-[90vh] overflow-y-auto p-4">
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
              width={600} // No specific width, use w-full for scaling
              height={3300} // No specific height, let it scale based on aspect ratio
              className="h-auto max-h-screen w-full rounded-lg object-contain" // Full width, auto height, maintain aspect ratio
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default anastasia;
