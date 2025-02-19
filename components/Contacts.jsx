// pages/Contacts.jsx

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
                  <a
                    onClick={() =>
                      router.push("mailto:olivia.kotova@hotmail.com")
                    }
                    target="_blank"
                    rel="noreferrer"
                  >
                    <div className="rounded-full shadow-md p-6 cursor-pointer hover:scale-150 ease-in duration-300 bg-gray-50">
                      <FaEnvelope />
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right side - Contact Form */}
          <div className="col-span-3 w-full h-auto shadow-md rounded-xl lg:p-4">
            <div className="py-16">
              <ContactForm />
            </div>
          </div>
        </div>
        {/* Scroll to top button */}
        <div className="absolute bottom-0  py-32  right-40 ">
          {/* <Link href="/">
            <a>
              <div className="rounded-full shadow-md p-6  cursor-pointer animate-bounce hover:animate-none hover:scale-110 ease-in duration-600 bg-gray-50">
                <FaAngleDoubleUp />
              </div>
            </a>
          </Link>*/}
          <ScrollToTopLink />
        </div>
      </div>
    </div>
  );
};

export default Contacts;
