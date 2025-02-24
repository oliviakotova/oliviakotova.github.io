import Image from "next/image";
import React from "react";
import carePulseImg from "../public/assets/projects/carepulse_b.jpg";
import { RiRadioButtonFill } from "react-icons/ri";
import Link from "next/link";
import PhotoSlider from "../components/PhotoSlider";

const carepulse_admin = () => {
  const images = [
    "/assets/carepulse_slider/aphoto4_cp.png",
    "/assets/carepulse_slider/aphoto1_cp.png",
    "/assets/carepulse_slider/aphoto2_cp.png",
    "/assets/carepulse_slider/aphoto3_cp.png",
    "/assets/carepulse_slider/aphoto4_cp.png",
    "/assets/carepulse_slider/aphoto5_cp.png",
    "/assets/carepulse_slider/aphoto6_cp.png",
  ];

  return (
    <div className="w-full">
      <div className="container mx-auto py-12">
        <PhotoSlider images={images} />
      </div>

      <div className="max-w-[1240px] mx-auto p-6 grid md:grid-cols-5 gap-8 py-24">
        {/* Left Column for Text Content */}
        <div className="col-span-4 flex flex-wrap gap-8">
          <h2>
            Admin Panel for Medical Booking App with Next.js | Twilio,
            TypeScript, TailwindCSS, SMS Notifications{" "}
          </h2>

          <Link href="https://github.com/oliviakotova/carepulse" passHref>
            <a
              target="_blank"
              rel="noopener noreferrer"
              className=" underline cursor-pointer px-8 mt-4 hover:scale-110 ease-in duration-100 projects-link"
            >
              ⚙️ GitHub
            </a>
          </Link>

          <Link href="https://carepulse-five-rho.vercel.app" passHref>
            <a
              target="_blank"
              rel="noopener noreferrer"
              className="underline cursor-pointer px-8 mt-4 hover:scale-110 ease-in duration-100 projects-link"
            >
              🚀 Visit CarePulse Admin App
            </a>
          </Link>

          <div>
            <h4 className="py-4">Overview </h4>
            <p>
              CarePulse Admin Panel - admin page for healthcare booking
              application that has featuring administrative tools for
              scheduling, confirming, and canceling appointments, along with SMS
              notifications, all built using Next.js.
            </p>
          </div>

          <div>
            <h4 className="py-4 mt-4 mr-8">Features</h4>

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
              details.
            </p>
            <p>
              👉 The application works seamlessly on all device types and screen
              sizes.
            </p>
            <p>
              👉 The application uses Sentry to monitor and track its
              performance and detect any errors.
            </p>
          </div>
        </div>

        {/* Right Column for Tech Stack */}
        <div className="col-span-4 md:col-span-1 shadow-md   rounded-xl py-4">
          <div className="p-2">
            <p className="font-bold pb-2">Tech Stack</p>
            <div className="grid grid-cols-2 md:grid-cols-1">
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Next.js
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Appwrite
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Typescript
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> TailwindCSS
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> ShadCN
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Twilio
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* Video Section */}
      <div className=" max-w-[1240px] mx-auto p-6 ">
        <h4 className=" mb-6">
          {" "}
          Admin canceled and sheduled appointments,sms sent automatically to the
          patient
        </h4>
        <video
          controls
          preload="metadata"
          loading="lazy"
          className="w-full rounded-lg shadow-lg"
          poster="/assets/carepulse_slider/aphoto3_cp.png" // Thumbnail for the video
        >
          {/* Video Source */}
          <source
            src="/assets/carepulse_slider/admin.mov"
            type="video/quicktime"
          />
          {/* Provide MP4 fallback for wider compatibility */}
          <source src="/assets/carepulse_slider/admin.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      <div className="max-w-[1240px] mx-auto p-6 flex justify-between items-center">
        <Link href="/carepulse">
          <p className="underline cursor-pointer py-8 mt-6 hover:scale-110 ease-in duration-100">
            🚀 Visit CarePulse App
          </p>
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

export default carepulse_admin;
