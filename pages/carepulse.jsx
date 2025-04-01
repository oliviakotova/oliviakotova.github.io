import Image from "next/image";
import React from "react";
import carePulseImg from "../public/assets/projects/carepulse_b.jpg";
import { RiRadioButtonFill } from "react-icons/ri";
import Link from "next/link";
import PhotoSlider from "../components/PhotoSlider";

const carepulse = () => {
  const images = [
    "/assets/carepulse_slider/photo1.jpg",
    "/assets/carepulse_slider/photo1_cp.png",
    "/assets/carepulse_slider/photo2_cp.png",
    "/assets/carepulse_slider/photo3_cp.png",
    "/assets/carepulse_slider/photo4_cp.png",
    "/assets/carepulse_slider/photo5_cp.png",
    "/assets/carepulse_slider/photo6_cp.png",
    "/assets/carepulse_slider/photo7_cp.png",
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
            Patient Management System with Next.js | Twilio, TypeScript,
            TailwindCSS{" "}
          </h2>
          <Link href="https://github.com/oliviakotova/carepulse" passHref>
            <a
              target="_blank"
              rel="noopener noreferrer"
              className="projects-link mt-4 cursor-pointer px-8 underline duration-100 ease-in hover:scale-110"
            >
              ⚙️ GitHub
            </a>
          </Link>

          <Link href="https://carepulse-five-rho.vercel.app" passHref>
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
              CarePulse - a healthcare booking application that allows patients
              to easily register, book, and manage their appointments with
              doctors, featuring administrative tools for scheduling,
              confirming, and canceling appointments, along with SMS
              notifications, all built using Next.js.
            </p>
          </div>

          <div>
            <h4 className="mr-8 mt-4 py-4">Features</h4>
            <p>
              👉 Users can sign up and create a personal profile as a patient.
            </p>
            <p>
              👉 Patients can schedule appointments with doctors at their
              convenience and can book multiple appointments.
            </p>
            <p>
              👉 Administrators can efficiently view and handle all scheduled
              appointments.
            </p>
            <p>
              👉 Admins can confirm and set appointment times to ensure they are
              properly scheduled.
            </p>
            <p>
              👉 Administrators have the ability to cancel any appointment if
              needed.
            </p>
            <p>
              👉 Patients receive SMS notifications to confirm their appointment
              details using Twilio.
            </p>
            <p>
              👉 The application works seamlessly on all device types and screen
              sizes.
            </p>
            <p>
              👉 Users can upload and store files securely within the app using
              Appwrite storage services.
            </p>
            <p>
              👉 The application uses Sentry to monitor and track its
              performance and detect any errors.
            </p>
          </div>
        </div>

        {/* Right Column for Tech Stack */}
        <div className="col-span-4 rounded-xl py-4 shadow-md md:col-span-1">
          <div className="p-2">
            <h4 className="pb-2 font-bold">Tech Stack</h4>
            <div className="grid grid-cols-2 md:grid-cols-1">
              <p className="flex items-center py-2 text-gray-600">
                <RiRadioButtonFill className="pr-1" /> Next.js
              </p>
              <p className="flex items-center py-2 text-gray-600">
                <RiRadioButtonFill className="pr-1" /> Appwrite
              </p>
              <p className="flex items-center py-2 text-gray-600">
                <RiRadioButtonFill className="pr-1" /> Typescript
              </p>
              <p className="flex items-center py-2 text-gray-600">
                <RiRadioButtonFill className="pr-1" /> TailwindCSS
              </p>
              <p className="flex items-center py-2 text-gray-600">
                <RiRadioButtonFill className="pr-1" /> ShadCN
              </p>
              <p className="flex items-center py-2 text-gray-600">
                <RiRadioButtonFill className="pr-1" /> Twilio
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* Video Section */}
      <div className="mx-auto max-w-[1240px] p-6">
        <h4 className="mb-6"> Booking part video</h4>
        <video
          controls
          preload="metadata"
          loading="lazy"
          className="w-full rounded-lg shadow-lg"
          poster="/assets/carepulse_slider/photo5_cp.png" // Thumbnail for the video
        >
          {/* Video Source */}
          <source
            src="/assets/carepulse_slider/appoint.mov"
            type="video/quicktime"
          />
          {/* Provide MP4 fallback for wider compatibility */}
          <source src="/assets/carepulse_slider/appoint.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      <div className="mx-auto flex max-w-[1240px] items-center justify-between p-6">
        <Link href="/carepulse_admin">
          <p className="mt-6 cursor-pointer py-8 underline duration-100 ease-in hover:scale-110">
            🚀 Visit CarePulse Admin Panel
          </p>
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

export default carepulse;
