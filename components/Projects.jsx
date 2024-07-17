import React from "react";
import Link from "next/link";
import AnastImg from "../public/assets/projects/anastasia_laptop.jpg";
import dogoodImg from "../public/assets/projects/dogood_mobile.png";
import koshImg from "../public/assets/projects/koshkalaptop.jpg";
import dogoodadmImg from "../public/assets/projects/admin_panel.png";
import { HiOutlineChevronDoubleUp } from "react-icons/hi";
import Project from "./Project";

const Projects = () => {
  return (
    <div id="projects" className="w-full">
      <div className="max-w-[1240px] mx-auto px-6 py-16">
        <p className="text-xl tracking-widest uppercase text-[#4382e8]">
          Projects
        </p>
        <h2 className="py-4">{/* What I've Built */}</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <Project
            title="Photography and Videography, Sydney"
            backgroundImg={koshImg}
            projectUrl="/koshkamedia"
            tech="WordPress, Elementor"
          />
          <Project
            title="Volunteering App"
            backgroundImg={dogoodImg}
            projectUrl="/dogood"
            tech="MongoDB, Express.js, React.js, Node.js"
          />
          <Project
            title="Admin Panel for Volunteering App"
            backgroundImg={dogoodadmImg}
            projectUrl="/dogood_admin"
            tech="MongoDB, Express.js, React.js, Node.js"
          />
          <Project
            title="Anastasia Cosmeting Tatooing"
            backgroundImg={AnastImg}
            projectUrl="/anastasia"
            tech="WordPress"
          />
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
      </div>
    </div>
  );
};

export default Projects;
