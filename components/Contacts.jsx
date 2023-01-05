import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { AiOutlineMail } from "react-icons/ai";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { HiOutlineChevronDoubleUp } from "react-icons/hi";
import ContactImg from "../public/assets/contact.jpg";
import { useRouter } from "next/router";

const Contacts = () => {
  const router = useRouter();
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Sending");

    let data = {
      name,
      phone,
      email,
      subject,
      message,
    };
    fetch("/api/contact", {
      method: "POST",
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }).then((res) => {
      console.log("Response received");
      if (res.status === 200) {
        console.log("Response succeeded!");
        setSubmitted(true);
        setName("");
        setPhone("");
        setEmail("");
        setSubject("");
        setMessage("");
      }
    });
  };

  return (
    <div id="contact" className="w-full lg:h-screen ">
      <div className="relative max-w-[1240px] m-auto px-6 py-16 w-full">
        <p className="text-xl tracking-widest uppercase text-[#4382e8]">
          Contact
        </p>
        <h2 className="py-4">Get In Touch</h2>
        <div className="grid lg:grid-cols-5 gap-8">
          {/* left side */}
          <div className="col-span-3 lg:col-span-2 w-full h-full shadow-md rounded-xl p-4">
            <div className="lg:p-4 h-full ">
              <div>
                <Image
                  className="rounded-xl hover:scale-105 ease-in duration-300"
                  src={ContactImg}
                  alt="/"
                />
              </div>
              <div>
                <h2 className="py-2">Olivia Kotova</h2>
                <p>Web Developer</p>
                <p className="py-4">
                  I am available for freelance or full-time positions. Contact
                  me and let&apos;s talk.
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
                    <div className="rounded-full shadow-md shadow-grey-200  p-6 cursor-pointer hover:scale-150 ease-in duration-300 bg-gray-50">
                      <FaLinkedinIn />
                    </div>
                  </a>
                  <a
                    href="https://github.com/oliviakotova"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <div className="rounded-full shadow-md shadow-grey-200  p-6 cursor-pointer hover:scale-150 ease-in duration-300 bg-gray-50">
                      <FaGithub />
                    </div>
                  </a>

                  {/* <div className="rounded-full shadow-md shadow-grey-200  p-6 cursor-pointer hover:scale-150 ease-in duration-300 bg-gray-50">
                    <AiOutlineMail />
                  </div> */}
                  <button
                    className="rounded-full shadow-md shadow-grey-200  p-6 cursor-pointer hover:scale-150 ease-in duration-300 bg-gray-50"
                    onClick={() =>
                      router.push("mailto:olivia.kotova@hotmail.com")
                    }
                  >
                    <AiOutlineMail />
                  </button>
                  <Link href="/cv">
                    <a>
                      <div className="rounded-full shadow-md shadow-grey-200  p-6 cursor-pointer hover:scale-150 ease-in duration-300 bg-gray-50">
                        <BsFillPersonLinesFill />
                      </div>
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* right side*/}
          <div className="col-span-3 w-full h-auto shadow-md rounded-xl lg:p-4">
            <div className="p-4">
              <form>
                <div className="grid md:grid-cols-2 gap-4 w-full py-2">
                  <div className="flex flex-col">
                    <label className="uppercase text-sm py-2">Name</label>
                    <input
                      className="border-2 rounded-lg p-3 flex border-gray-300"
                      type="text"
                      name="name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                  </div>
                  <div className="flex flex-col">
                    <label className="uppercase text-sm py-2">
                      Phone Number
                    </label>
                    <input
                      className="border-2 rounded-lg p-3 flex border-gray-300"
                      type="text"
                      name="phone"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                    />
                  </div>
                </div>
                <div className="flex flex-col py-2">
                  <label className="uppercase text-sm py-2">Email</label>
                  <input
                    className="border-2 rounded-lg p-3 flex border-gray-300"
                    type="email"
                    name="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className="flex flex-col py-2">
                  <label className="uppercase text-sm py-2">Subject</label>
                  <input
                    className="border-2 rounded-lg p-3 flex border-gray-300"
                    type="text"
                    name="subject"
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                  />
                </div>
                <div className="flex flex-col py-2">
                  <label className="uppercase text-sm py-2">Message</label>
                  <textarea
                    className="border-2 rounded-lg p-3 border-gray-300"
                    rows="10"
                    name="message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                  ></textarea>
                </div>
                <button
                  className="w-full p-4 text-gray-100 mt-4 cursor-pointer hover:scale-105 ease-in duration-300
                shadow-xl shadow-gray-400 rounded-xl uppercase bg-gradient-to-r from-[#4382e8] to-[#1373c7]"
                  onClick={(e) => {
                    handleSubmit(e);
                  }}
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
        {/* <div className="flex justify-center py-12">
          <Link href="/">
            <a>
              <div className="rounded-full shadow-md shadow-grey-200 p-4 cursor-pointer hover:scale-150 ease-in duration-300">
                <HiOutlineChevronDoubleUp
                  className="text-[#4382e8]"
                  size={30}
                />
              </div>
            </a>
          </Link>
        </div> */}
        <div className="absolute bottom-0 right-10">
          <Link href="/">
            <a>
              <div className="rounded-full shadow-md p-4 cursor-pointer hover:scale-150 ease-in duration-300 ">
                <svg
                  className=" animate-bounce w-6 h-6 text-gray-900"
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
