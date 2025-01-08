import Image from "next/image";
import React from "react";
import carePulseImg from "../public/assets/projects/carepulse_b.jpg";
import { RiRadioButtonFill } from "react-icons/ri";
import Link from "next/link";
import PhotoSlider from "../components/PhotoSlider";

const carepulse_admin = () => {
  return (
    <div className="w-full">
      <div className="w-screen h-[50vh] relative">
        <div className="absolute top-0 left-0 w-full h-[50vh] bg-black/10 z-10" />
        <Image
          className="absolute z-1"
          layout="fill"
          objectFit="cover"
          src={carePulseImg}
          alt="/"
        />
        <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-6">
          {/* <h2 className="py-2">Anastasia Cosmeting Tattooing</h2> */}
        </div>
      </div>

      <div className="max-w-[1240px] mx-auto p-6 grid md:grid-cols-5 gap-8 py-24">
        <div className="col-span-4">
          {/* <p>In progress</p> */}
          <h2>Project: CarePulse, medical booking App </h2>
          {/* <p>bla-bla</p> */}
          <a href="" target="_blank" rel="noreferrer">
            {/* <button className="px-8 py-2 mt-4 mr-8 hover:scale-110 ease-in duration-100">
              Code
            </button> */}
          </a>
          <a
            href="https://carepulse-five-rho.vercel.app"
            target="_blank"
            rel="noreferrer"
          >
            <button className=" underline  py-8 mt-6 hover:scale-110 ease-in duration-100">
              🚀 Visit CarePulse App
            </button>
          </a>
          <div>
            <h3>Overview</h3>
            <p>
              A healthcare patient management application that allows patients
              to easily register, book, and manage their appointments with
              doctors, featuring administrative tools for scheduling,
              confirming, and canceling appointments, along with SMS
              notifications, all built using Next.js.
            </p>
          </div>
          <div>
            <h3>Features</h3>
            <p>
              👉 Users can sign up and create a personal profile as a patient.
            </p>
            <p>
              👉 Patients can schedule appointments with doctors at their
              convenience and can book multiple appointments.{" "}
            </p>
            <p>
              {" "}
              👉 Administrators can efficiently view and handle all scheduled
              appointments.{" "}
            </p>
            <p>
              {" "}
              👉 Admins can confirm and set appointment times to ensure they are
              properly scheduled.{" "}
            </p>
            <p>
              👉 Administrators have the ability to cancel any appointment if
              needed.{" "}
            </p>
            <p>
              {" "}
              👉 Patients receive SMS notifications to confirm their appointment
              details.{" "}
            </p>
            <p>
              {" "}
              👉 The application works seamlessly on all device types and screen
              sizes.{" "}
            </p>
            <p>
              {" "}
              👉 Users can upload and store files securely within the app using
              Appwrite storage services.{" "}
            </p>
            <p>
              {" "}
              👉 The application uses Sentry to monitor and track its
              performance and detect any errors.
            </p>
          </div>
        </div>
        <div className="col-span-4 md:col-span-1 shadow-md  rounded-xl py-4">
          <div className="p-2">
            <p className=" font-bold pb-2">Tech Stack</p>
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

        <Link href="/#projects">
          <p className="underline cursor-pointer hover:scale-110 ease-in duration-100">
            Back
          </p>
        </Link>
      </div>
    </div>
  );
};

export default carepulse_admin;
