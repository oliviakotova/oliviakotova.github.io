import Image from "next/image";
import React, { useState } from "react";
import { RiRadioButtonFill } from "react-icons/ri";
import Link from "next/link";
import PhotoSlider from "../components/PhotoSlider";
import koshWebp from "../public/assets/koshka/koshkamedia_webpage.png";

const koshkamedia = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState("");

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
          <h2 className="py-4">
            Photography and Videography, Sydney - Custom WordPress Website Built
            with Elementor
          </h2>

          <Link href="https://koshkamedia.com.au" passHref>
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
              For this project, I designed and developed a fully customized
              WordPress website using Elementor, ensuring a modern and
              user-friendly experience. The goal was to create a fresh,
              optimized website while seamlessly integrating the existing client
              database from the company's previous site to retain customer
              relationships and business continuity.
            </p>
          </div>

          <div>
            <h4 className="mr-8 mt-4 py-4">Key Features</h4>
            <p className="p-2">
              👉 Built from Scratch: Developed a completely new website
              structure while maintaining essential business data.
            </p>
            <p className="p-2">
              👉 Instagram Integration: Embedded a live Instagram feed to
              enhance engagement and showcase recent updates.
            </p>
            <p className="p-2">
              👉 SEO Optimization: Structured content and implemented SEO best
              practices to improve search visibility.
            </p>
            <p className="p-2">
              👉 Responsive & Fast: Ensured mobile responsiveness and optimized
              performance for a smooth user experience.
            </p>
          </div>

          <div className="mx-auto max-w-[1240px] p-6">
            <video
              controls
              preload="metadata"
              loading="lazy"
              className="w-full rounded-lg shadow-lg"
              poster="/assets/projects/koshkaldevices.jpg" // Thumbnail for the video
            >
              <source src="/assets/koshka/koshka.mov" type="video/quicktime" />
              <source src="/assets/koshka/koshka.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
          <div className="mx-auto flex max-w-[1240px] items-center justify-between p-6">
            <Link href="/anastasia">
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
              src="/assets/koshka/koshkamedia_webpage.png"
              alt="Koshkamedia webpage"
              width={300}
              height={2300}
              className="cursor-pointer rounded-lg shadow-lg"
              onClick={() =>
                openModal("/assets/koshka/koshkamedia_webpage.png")
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

export default koshkamedia;
