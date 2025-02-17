// pages/Contacts.jsx

import Image from "next/image";
import Link from "next/link";
import React from "react";
import { AiOutlineMail } from "react-icons/ai";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import ContactImg from "../public/assets/contact.jpg";
import { useRouter } from "next/router";
import ContactForm from "../components/ContactForm"; // Import the ContactForm component

const Contacts = () => {
  const router = useRouter();

  return (
    <div id="contact" className="w-full lg:h-screen">
      <div className="relative max-w-[1240px] m-auto px-6 py-16 w-full">
        <p className="text-xl tracking-widest uppercase text-[#4382e8]">
          Contact
        </p>
        <h2 className="py-4">Get In Touch</h2>
        <div className="grid lg:grid-cols-5 gap-8">
          {/* Left side */}
          <div className="col-span-3 lg:col-span-2 w-full h-full shadow-md rounded-xl p-4">
            <div className="lg:p-4 h-full">
              <div>
                <Image
                  className="rounded-xl hover:scale-105 ease-in duration-300"
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
                <p className="uppercase pt-8">Connect With Me</p>
                <div className="flex items-center justify-between py-4">
                  <a
                    href="https://www.linkedin.com/in/olivia-kotova"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <div className="rounded-full shadow-md shadow-grey-200 p-6 cursor-pointer hover:scale-150 ease-in duration-300 bg-gray-50">
                      <FaLinkedinIn />
                    </div>
                  </a>
                  <a
                    href="https://github.com/oliviakotova"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <div className="rounded-full shadow-md shadow-grey-200 p-6 cursor-pointer hover:scale-150 ease-in duration-300 bg-gray-50">
                      <FaGithub />
                    </div>
                  </a>
                  <button
                    className="rounded-full shadow-md shadow-grey-200 p-6 cursor-pointer hover:scale-150 ease-in duration-300 bg-gray-50"
                    onClick={() =>
                      router.push("mailto:olivia.kotova@hotmail.com")
                    }
                  >
                    <AiOutlineMail />
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Right side - Contact Form */}
          <div className="col-span-3 w-full h-auto shadow-md rounded-xl lg:p-4">
            <div className="p-4">
              {/* Render the ContactForm component here */}
              <ContactForm />
            </div>
          </div>
        </div>

        {/* Scroll to top button */}
        <div className="absolute bottom-0 right-10">
          <Link href="/">
            <a>
              <div className="rounded-full shadow-md p-4 cursor-pointer hover:scale-150 ease-in duration-300 ">
                <svg
                  className="animate-bounce w-6 h-6 text-gray-900"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M5 10l7-7m0 0l7 7m-7-7v18"></path>
                </svg>
              </div>
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Contacts;
