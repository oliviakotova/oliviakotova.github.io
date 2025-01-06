import React from "react";
import Link from "next/link";
import AnastImg from "../public/assets/projects/anastasia_laptop.jpg";
import dogoodImg from "../public/assets/projects/dogood_mobile.png";
import koshImg from "../public/assets/projects/koshkalaptop.jpg";
import dogoodadmImg from "../public/assets/projects/admin_panel.png";
import carePulseImg from "../public/assets/projects/carepulse_d.jpg";
import diamImg from "../public/assets/projects/diamonds_b.png";
import portfImg from "../public/assets/projects/portfolio.png";
import admcareImg from "../public/assets/projects/admin_care.png";
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
            title="CarePulse, Medical Booking App"
            backgroundImg={carePulseImg}
            projectUrl="/carepulse"
            tech="Next.js, Appwright, Typescript, TailwindCSS"
          />
          <Project
            title="Admin Panel for Medical Booking App"
            backgroundImg={admcareImg}
            projectUrl="/carepulse_admin"
            tech="Next.js, Appwright, Typescript, TailwindCSS"
          />

          <Project
            title="Volunteering App"
            backgroundImg={dogoodImg}
            projectUrl="/dogood"
            tech="Express.js, React.js, Node.js, MongoDB"
          />
          <Project
            title="Admin Panel for Volunteering App"
            backgroundImg={dogoodadmImg}
            projectUrl="/dogood_admin"
            tech="Express.js, React.js, Node.js, MongoDB"
          />
          <Project
            title="Photography and Videography, Sydney"
            backgroundImg={koshImg}
            projectUrl="/koshkamedia"
            tech="WordPress, Elementor"
          />
          <Project
            title="Anastasia Cosmeting Tattooing"
            backgroundImg={AnastImg}
            projectUrl="/anastasia"
            tech="WordPress, Elementor"
          />
          <Project
            title="O&A Diamonds"
            backgroundImg={diamImg}
            projectUrl="/diamonds"
            tech="Shopify"
          />
          <Project
            title="Personal Website"
            backgroundImg={portfImg}
            projectUrl="/portfolio"
            tech="Nextjs, TailwindCSS"
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
