import { useRouter } from "next/router";
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
  const router = useRouter();

  useEffect(() => {
    const handleShadow = () => {
      setShadow(window.scrollY >= 10);
    };
    window.addEventListener("scroll", handleShadow);
    return () => window.removeEventListener("scroll", handleShadow);
  }, []);

  // Force update active section after navigating back to homepage
  useEffect(() => {
    if (router.pathname === "/") {
      setTimeout(() => {
        const sections = document.querySelectorAll("section");
        let found = false;
        sections.forEach((section) => {
          if (
            !found &&
            section.getBoundingClientRect().top >= 0 &&
            section.getBoundingClientRect().top < window.innerHeight * 0.5
          ) {
            setActiveSection(section.id);
            found = true;
          }
        });
      }, 300);
    }
  }, [router.pathname]);

  // Detect Active Section on Scroll
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
      { threshold: 0.3 },
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  // Handle navigation click & ensure active section updates (Desktop & Mobile)
  const handleNavClick = (e, section) => {
    e.preventDefault();
    setActiveSection(section); // Immediate UI update
    setNav(false); //Close the mobile menu after clicking a link

    if (router.pathname !== "/") {
      router.push("/").then(() => {
        setTimeout(() => {
          document
            .getElementById(section)
            ?.scrollIntoView({ behavior: "smooth" });
          setActiveSection(section);
        }, 500);
      });
    } else {
      document.getElementById(section)?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div
      className={`fixed z-[100] h-16 w-full transition-all duration-300 ${
        shadow
          ? "bg-[#ecf0f3] shadow-md dark:bg-[#353d49]"
          : "dark:bg-[#353d49]"
      }`}
    >
      <div className="flex h-full w-full items-center justify-between px-6 2xl:px-16">
        <Link href="/">
          <div className="cursor-pointer pt-2.5">
            <Image src={LogoNav} alt="/" width="70" height="75" />
          </div>
        </Link>
        <div className="flex items-center">
          {/* Desktop Menu */}
          <ul className="hidden space-x-10 md:flex">
            {[
              { href: "#home", label: "Home" },
              { href: "#about", label: "About" },
              { href: "#projects", label: "Projects" },
              { href: "#skills", label: "Skills" },
              { href: "#contact", label: "Contact" },
            ].map((item) => (
              <li key={item.href} className="group relative">
                <a
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href.substring(1))}
                  className="relative cursor-pointer pb-1 text-sm uppercase dark:text-[#ecf0f3]"
                >
                  {item.label}

                  {/* Active Section Underline */}
                  {activeSection === item.href.substring(1) && (
                    <span className="absolute -bottom-[1px] left-0 h-[1px] w-full bg-black dark:bg-[#ecf0f3]"></span>
                  )}

                  {/* Hover Animated Underline */}
                  <span
                    className={`absolute -bottom-[1px] left-0 h-[1px] bg-black transition-all duration-300 ease-in-out group-hover:w-full dark:bg-[#ecf0f3] ${
                      activeSection === item.href.substring(1)
                        ? "w-full"
                        : "w-0"
                    }`}
                  ></span>
                </a>
              </li>
            ))}
          </ul>

          {/* Theme Toggle Button */}
          <button
            onClick={() => setIsDarkMode(!isDarkMode)}
            className="ml-10 hidden cursor-pointer text-sm uppercase hover:border-b hover:border-black dark:hover:border-[#ecf0f3] md:block"
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
        className={`fixed left-0 top-0 h-screen w-full bg-black/70 transition duration-500 ${
          nav ? "block" : "hidden"
        }`}
      >
        {/* Side Mobile Menu */}
        <div
          className={`fixed left-0 top-0 h-screen w-[75%] bg-[#ecf0f3] p-10 transition-transform duration-300 dark:bg-[#353d49] dark:text-white sm:w-[60%] md:w-[45%] ${
            nav ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <div className="flex w-full items-center justify-between">
            <Link href="/">
              <div className="cursor-pointer pt-2.5">
                <Image src={LogoNav} alt="/" width="70" height="75" />
              </div>
            </Link>
            <div
              onClick={() => setNav(false)}
              className="cursor-pointer rounded-full bg-gray-50 p-6 shadow-md transition duration-300 hover:scale-110"
            >
              <AiOutlineClose className="dark:text-[#1f2937]" />
            </div>
          </div>

          <div className="flex flex-col py-6">
            <ul className="space-y-4 uppercase">
              {[
                { href: "#home", label: "Home" },
                { href: "#about", label: "About" },
                { href: "#projects", label: "Projects" },
                { href: "#skills", label: "Skills" },
                { href: "#contact", label: "Contact" },
              ].map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    onClick={(e) => handleNavClick(e, item.href.substring(1))}
                    className={`block py-3 text-sm tracking-wider dark:text-[#ecf0f3] ${
                      activeSection === item.href.substring(1)
                        ? "border-l-2 border-black pl-2 font-semibold dark:border-[#ecf0f3]"
                        : "pl-2 transition hover:border-l-2 hover:border-black dark:hover:border-[#ecf0f3]"
                    }`}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
            <div className="pt-20">
              <button
                onClick={() => setIsDarkMode(!isDarkMode)}
                className="text-sm uppercase tracking-widest"
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
