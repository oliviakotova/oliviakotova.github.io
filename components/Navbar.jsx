import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { useRouter } from "next/router";
import LogoNav from "../public/assets/logospiralsmall3.png";
import { useContext } from "react";
import ThemeContext from "../context/ThemeContext";

const Navbar = () => {
  const { isDarkMode, setIsDarkMode } = useContext(ThemeContext);
  const [nav, setNav] = useState(false);
  const [shadow, setShadow] = useState(false);
  const [navBg, setNavBg] = useState("#ecf0f3");
  const [linkColor, setLinkColor] = useState("#1f2937");

  const router = useRouter();

  useEffect(() => {
    if (isDarkMode) {
      setNavBg("#1f2937");
      setLinkColor("#ecf0f3");
    } else {
      setNavBg("#ecf0f3");
      setLinkColor("#1f2937");
    }

    if (router.asPath === "/kristina") {
      setLinkColor("#ecf0f3");
    } else {
      setNavBg(isDarkMode ? "#353d49" : "#ecf0f3");
      setLinkColor(isDarkMode ? "#ecf0f3" : "#1f2937");
    }
  }, [router, isDarkMode]); // Add isDarkMode as dependency

  // Toggle theme
  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode); // Toggle theme state
  };

  useEffect(() => {
    // Check for saved theme preference in localStorage and apply it on load
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
      setIsDarkMode(true);
      document.documentElement.classList.add("dark");
    }
  }, []);

  useEffect(() => {
    // Save the theme preference in localStorage
    localStorage.setItem("theme", isDarkMode ? "dark" : "light");
  }, [isDarkMode]);

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
          ? "fixed w-full h-16 shadow-md shadow-grey-200 z-[100] ease-in-out duration-300 dark:bg-[#333333] dark:text-white" // Updated dark styles
          : "fixed w-full h-16 z-[100] dark:bg-[#333333] dark:text-white"
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
        <div className="flex items-center">
          <ul style={{ color: `${linkColor}` }} className="hidden md:flex">
            <Link href="/">
              <li className="ml-10 text-sm uppercase hover:border-d cursor-pointer hover:scale-110 ease-in duration-300 dark:hover:text-[#ecf0f3]">
                Home
              </li>
            </Link>
            <Link href="/#about">
              <li className="ml-10 text-sm uppercase hover:border-b cursor-pointer hover:scale-110 ease-in duration-300 dark:hover:text-[#ecf0f3]">
                About
              </li>
            </Link>

            <Link href="/#projects">
              <li className="ml-10 text-sm uppercase hover:border-b cursor-pointer hover:scale-110 ease-in duration-300 dark:hover:text-[#ecf0f3]">
                Projects
              </li>
            </Link>
            <Link href="/#skills">
              <li className="ml-10 text-sm uppercase hover:border-b cursor-pointer hover:scale-110 ease-in duration-300 dark:hover:text-[#ecf0f3]">
                Skills
              </li>
            </Link>
          </ul>

          {/* Add theme toggle button */}
          <button
            onClick={toggleTheme}
            className="ml-10 text-sm uppercase cursor-pointer hidden md:block"
          >
            {isDarkMode ? "Light Mode" : "Dark Mode"}
          </button>

          {/* Mobile Menu Toggle */}
          <div onClick={mobileNav} className="md:hidden">
            <AiOutlineMenu size={29} />
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
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
              ? " fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#ecf0f3] p-10 ease-in duration-300 dark:bg-[#353d49] dark:text-white" // Dark background for mobile menu
              : "fixed left-[-100%] top-0 p-10 ease-in duration-500"
          }
        >
          <div>
            <div className="flex w-full items-center justify-between">
              {/* Mobile Logo */}
              <Link href="/">
                <a>
                  <Image
                    src="/../public/assets/logospiralsmall2.png"
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
              <button
                onClick={toggleTheme}
                className="uppercase tracking-widest text-sm"
              >
                {isDarkMode ? "Light Mode" : "Dark Mode"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
