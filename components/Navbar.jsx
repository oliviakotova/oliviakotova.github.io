import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { useContext } from "react";
import ThemeContext from "../context/ThemeContext";
import LogoNav from "../public/assets/logospiralsmall3.png";

const Navbar = () => {
  const { isDarkMode, setIsDarkMode } = useContext(ThemeContext);
  const [nav, setNav] = useState(false);
  const [shadow, setShadow] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleShadow = () => {
      setShadow(window.scrollY >= 10);
    };
    window.addEventListener("scroll", handleShadow);
    return () => window.removeEventListener("scroll", handleShadow);
  }, []);

  useEffect(() => {
    const sections = document.querySelectorAll("section");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.3 }
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  return (
    <div
      className={`fixed w-full h-16 z-[100] transition-all duration-300 ${
        shadow
          ? "shadow-md bg-[#ecf0f3] dark:bg-[#353d49]"
          : "dark:bg-[#353d49]"
      }`}
    >
      <div className="flex justify-between items-center w-full h-full px-6 2xl:px-16">
        <Link href="#home">
          <div className="pt-2.5 cursor-pointer">
            <Image src={LogoNav} alt="/" width="70" height="75" />
          </div>
        </Link>
        <div className="flex items-center">
          <ul className="hidden md:flex space-x-10">
            {[
              { href: "#home", label: "Home" },
              { href: "#about", label: "About" },
              { href: "#projects", label: "Projects" },
              { href: "#skills", label: "Skills" },
              { href: "#contact", label: "Contacts" },
            ].map((item) => (
              <Link key={item.href} href={item.href}>
                <li
                  className={`text-sm uppercase cursor-pointer hover:scale-110 transition duration-300 ${
                    activeSection === item.href.substring(1)
                      ? "border-b-2 border-black dark:border-[#ecf0f3] font-bold"
                      : "hover:border-b hover:border-black dark:hover:border-[#ecf0f3]"
                  }`}
                >
                  {item.label}
                </li>
              </Link>
            ))}
          </ul>

          {/* Theme Toggle Button */}
          <button
            onClick={() => setIsDarkMode(!isDarkMode)}
            className="ml-10 text-sm uppercase cursor-pointer hidden md:block hover:border-b hover:scale-110 transition duration-300 hover:border-black dark:hover:border-[#ecf0f3]"
          >
            {isDarkMode ? "Light Mode" : "Dark Mode"}
          </button>

          {/* Mobile Menu Toggle */}
          <div onClick={() => setNav(!nav)} className="md:hidden">
            <AiOutlineMenu size={29} />
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed left-0 top-0 w-full h-screen bg-black/70 transition duration-500 ${
          nav ? "block" : "hidden"
        }`}
      >
        {/* Side Mobile Menu */}
        <div
          className={`fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#ecf0f3] p-10 dark:bg-[#353d49] dark:text-white transition-transform duration-300 ${
            nav ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <div className="flex w-full items-center justify-between">
            <Link href="#home">
              <div className="pt-2.5 cursor-pointer">
                <Image src={LogoNav} alt="/" width="70" height="75" />
              </div>
            </Link>
            <div
              onClick={() => setNav(false)}
              className="rounded-full shadow-md p-6 cursor-pointer hover:scale-110 transition duration-300 bg-gray-50"
            >
              <AiOutlineClose className="dark:text-[#1f2937]" />
            </div>
          </div>

          <div className="py-4 flex flex-col">
            <ul className="uppercase">
              {[
                { href: "#home", label: "Home" },
                { href: "#about", label: "About" },
                { href: "#projects", label: "Projects" },
                { href: "#skills", label: "Skills" },
                { href: "#contact", label: "Contact" },
              ].map((item) => (
                <Link key={item.href} href={item.href}>
                  <li
                    onClick={() => setNav(false)}
                    className={`py-4 text-sm ${
                      activeSection === item.href.substring(1)
                        ? "font-bold border-l-4 border-black pl-2 dark:border-[#ecf0f3]"
                        : "hover:border-l-4 hover:border-black pl-2 dark:hover:border-[#ecf0f3]"
                    }`}
                  >
                    {item.label}
                  </li>
                </Link>
              ))}
            </ul>
            <div className="pt-40">
              <button
                onClick={() => setIsDarkMode(!isDarkMode)}
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
