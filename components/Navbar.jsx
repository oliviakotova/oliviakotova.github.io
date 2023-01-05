import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { AiOutlineClose, AiOutlineMenu, AiOutlineMail } from "react-icons/ai";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { useRouter } from "next/router";
import LogoNav from "../public/assets/logospiralsmall3.png";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [shadow, setShadow] = useState(false);
  const [navBg, setNavBg] = useState("#ecf0f3");
  const [linkColor, setLinkColor] = useState("#1f2937");
  const router = useRouter();

  useEffect(() => {
    if (
      router.asPath === "/kristina" ||
      router.asPath === "/dogood" ||
      router.asPath === "/dogood_admin" ||
      router.asPath === "/portfolio"
    ) {
      setNavBg("transparent");
      setLinkColor("#ecf0f3");
    } else {
      setNavBg("#ecf0f3");
      setLinkColor("#1f2937");
    }
  }, [router]);

  const mobileNav = () => {
    setNav(!nav);
  };

  useEffect(() => {
    const handleShadow = () => {
      if (window.scrollY >= 10) {
        setShadow(true);
      } else {
        setShadow(false);
      }
    };
    window.addEventListener("scroll", handleShadow);
  }, []);

  return (
    <div
      style={{ backgroundColor: `${navBg}` }}
      className={
        shadow
          ? "fixed w-full h-16 shadow-md shadow-grey-200 z-[100] ease-in-out duration-300"
          : "fixed w-full h-16 z-[100]"
      }
    >
      <div className="flex justify-between items-center w-full h-full px-6 2xl:px-16">
        <Link href="/">
          <div className="pt-2.5">
            <a>
              <Image
                src={LogoNav}
                alt="/"
                width="70"
                height="75"
                className="cursor-pointer"
              />
            </a>
          </div>
        </Link>
        <div>
          <ul style={{ color: `${linkColor}` }} className="hidden md:flex">
            <Link href="/">
              <li className="ml-10 text-sm uppercase hover:border-d cursor-pointer hover:scale-110 ease-in duration-300">
                Home
              </li>
            </Link>
            <Link href="/#about">
              <li className="ml-10 text-sm uppercase hover:border-b cursor-pointer hover:scale-110 ease-in duration-300">
                About
              </li>
            </Link>
            <Link href="/#skills">
              <li className="ml-10 text-sm uppercase hover:border-b cursor-pointer hover:scale-110 ease-in duration-300">
                Skills
              </li>
            </Link>
            <Link href="/#projects">
              <li className="ml-10 text-sm uppercase hover:border-b cursor-pointer hover:scale-110 ease-in duration-300">
                Projects
              </li>
            </Link>
            {/* <Link href="/#contact">
              <li className="ml-10 text-sm uppercase hover:border-b cursor-pointer hover:scale-110 ease-in duration-300">
                Contact
              </li>
            </Link> */}
          </ul>
          <div onClick={mobileNav} className="md:hidden">
            <AiOutlineMenu size={29} />
          </div>
        </div>
      </div>

      {/* ------------- Mobile Menu ------------- */}
      {/*overlay under side menu*/}
      <div
        className={
          nav
            ? "md:hidden fixed left-0 top-0 w-full h-screen duration-500 bg-black/70"
            : "duration-500"
        }
      >
        {/* Side Mobile Menu */}
        <div
          className={
            nav
              ? " fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#ecf0f3] p-10 ease-in duration-300"
              : "fixed left-[-100%] top-0 p-10 ease-in duration-500"
          }
        >
          <div>
            <div className="flex w-full items-center justify-between">
              {/* Mobile Logo */}
              <Link href="/">
                <a>
                  <Image
                    src="/../public/assets/logoblue-yellow.png"
                    width="55"
                    height="60"
                    alt="/"
                  />
                </a>
              </Link>
              <div
                onClick={mobileNav}
                className="rounded-full shadow-md shadow-gray-400 p-3.5 hover:scale-110 cursor-pointer"
              >
                <AiOutlineClose />
              </div>
            </div>
            <div className="border-b border-gray-300 my-4">
              <p className="w-[85%] md:w-[90%] py-4"></p>
            </div>
          </div>
          <div className="py-4 flex flex-col">
            <ul className="uppercase">
              <Link href="/">
                <li onClick={() => setNav(false)} className="py-4 text-sm">
                  Home
                </li>
              </Link>
              <Link href="/#about">
                <li onClick={() => setNav(false)} className="py-4 text-sm">
                  About
                </li>
              </Link>
              <Link href="/#skills">
                <li onClick={() => setNav(false)} className="py-4 text-sm">
                  Skills
                </li>
              </Link>
              <Link href="/#projects">
                <li onClick={() => setNav(false)} className="py-4 text-sm">
                  Projects
                </li>
              </Link>
              <Link href="/#contact">
                <li onClick={() => setNav(false)} className="py-4 text-sm">
                  Contact
                </li>
              </Link>
            </ul>
            <div className="pt-40">
              <p className="uppercase tracking-widest text-[#4382e8]">
                {/* Let's Connect */}
              </p>
              <div className="flex items-center justify-between my-4 w-full sm:w-[80%]">
                <a
                  href="https://www.linkedin.com/in/olivia-kotova"
                  target="_blank"
                  rel="noreferrer"
                >
                  <div className="rounded-full shadow-md shadow-gray-400 p-3.5 cursor-pointer hover:scale-150 ease-in duration-300">
                    <FaLinkedinIn />
                  </div>
                </a>
                <div className="rounded-full shadow-md shadow-gray-400 p-3.5 cursor-pointer hover:scale-150 ease-in duration-300">
                  <AiOutlineMail />
                </div>
                <a
                  href="https://github.com/oliviakotova"
                  target="_blank"
                  rel="noreferrer"
                >
                  <div className="rounded-full shadow-md shadow-gray-400 p-3.5 cursor-pointer hover:scale-150 ease-in duration-300">
                    <FaGithub />
                  </div>
                </a>
                <div className="rounded-full shadow-md shadow-gray-400 p-3.5 cursor-pointer hover:scale-150 ease-in duration-300">
                  <BsFillPersonLinesFill />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
