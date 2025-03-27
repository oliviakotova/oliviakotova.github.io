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

  // 🔹 Force update active section after navigating back to homepage
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
      { threshold: 0.3 }
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
      className={`fixed w-full h-16 z-[100] transition-all duration-300 ${
        shadow
          ? "shadow-md bg-[#ecf0f3] dark:bg-[#353d49]"
          : "dark:bg-[#353d49]"
      }`}
    >
      <div className="flex justify-between items-center w-full h-full px-6 2xl:px-16">
        <Link href="/">
          <div className="pt-2.5 cursor-pointer">
            <Image src={LogoNav} alt="/" width="70" height="75" />
          </div>
        </Link>
        <div className="flex items-center">
          {/* Desktop Menu */}
          <ul className="hidden md:flex space-x-10">
            {[
              { href: "#home", label: "Home" },
              { href: "#about", label: "About" },
              { href: "#projects", label: "Projects" },
              { href: "#skills", label: "Skills" },
              { href: "#contact", label: "Contacts" },
            ].map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href.substring(1))}
                  className={`text-sm uppercase cursor-pointer   dark:text-[#ecf0f3] ${
                    activeSection === item.href.substring(1)
                      ? "border-b border-black dark:border-[#ecf0f3] "
                      : "hover:border-b hover:border-black dark:hover:border-[#ecf0f3] "
                  }`}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Theme Toggle Button */}
          <button
            onClick={() => setIsDarkMode(!isDarkMode)}
            className="ml-10 text-sm uppercase cursor-pointer hidden md:block hover:border-b hover:border-black dark:hover:border-[#ecf0f3]"
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
            <Link href="/">
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

          <div className="py-6 flex flex-col">
            <ul className="uppercase space-y-4">
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
                        ? "border-l-4 border-black pl-4 dark:border-[#ecf0f3] font-semibold"
                        : "hover:border-l-4 hover:border-black pl-4 dark:hover:border-[#ecf0f3] transition"
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
