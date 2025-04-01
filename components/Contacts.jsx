import Image from "next/image";
import Link from "next/link";
import React from "react";
import { AiOutlineMail } from "react-icons/ai";

import {
  FaGithub,
  FaLinkedinIn,
  FaEnvelope,
  FaAngleDoubleUp,
} from "react-icons/fa";
import ContactImg from "../public/assets/contact.jpg";
import { useRouter } from "next/router";
import ContactForm from "../components/ContactForm"; // Import the ContactForm component
import ScrollToTopLink from "./ScrollToTop";

const Contacts = () => {
  const router = useRouter();
  const email = process.env.NEXT_PUBLIC_EMAIL;
  const handleEmailClick = () => {
    if (email) {
      router.push(`mailto:${email}`);
    } else {
      console.error("Email is not available");
    }
  };

  return (
    <div id="contact" className="w-full lg:h-screen">
      <div className="relative m-auto w-full max-w-[1240px] rounded-lg px-6 py-16">
        <p className="text-xl uppercase tracking-widest text-[#4382e8]">
          Contact
        </p>
        <h2 className="py-4">Get In Touch</h2>
        <div className="grid gap-8 lg:grid-cols-5">
          {/* Left side */}
          <div className="col-span-3 h-full w-full rounded-xl p-4 shadow-md lg:col-span-2">
            <div className="h-full lg:p-4">
              <div>
                <Image
                  className="rounded-xl duration-300 ease-in hover:scale-105"
                  src={ContactImg}
                  alt="Contact"
                />
              </div>
              <div>
                <h2 className="py-2">Olivia Kotova</h2>
                <p>Web Developer</p>
                <p className="py-4">
                  I am available for freelance or full-time positions. Contact
                  me and let's talk.
                </p>
              </div>
              <div>
                <p className="pt-8 uppercase">Connect With Me</p>
                <div className="flex items-center justify-between py-4">
                  <a
                    href="https://www.linkedin.com/in/olivia-kotova"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <div className="shadow-grey-200 cursor-pointer rounded-full bg-gray-50 p-6 shadow-md duration-300 ease-in hover:scale-150">
                      <FaLinkedinIn />
                    </div>
                  </a>
                  <a
                    href="https://github.com/oliviakotova"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <div className="shadow-grey-200 cursor-pointer rounded-full bg-gray-50 p-6 shadow-md duration-300 ease-in hover:scale-150">
                      <FaGithub />
                    </div>
                  </a>
                  <a
                    onClick={handleEmailClick}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <div className="cursor-pointer rounded-full bg-gray-50 p-6 shadow-md duration-300 ease-in hover:scale-150">
                      <FaEnvelope />
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right side - Contact Form */}
          <div className="col-span-3 h-auto w-full rounded-xl shadow-md lg:p-4">
            <ContactForm />
          </div>
        </div>
      </div>
      <div className="py-32">
        <div className="relative right-0 flex justify-end">
          <ScrollToTopLink />
        </div>
      </div>
    </div>
  );
};

export default Contacts;
