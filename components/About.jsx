import React from "react";
import Image from "next/image";
import Link from "next/link";
import AboutImg from "../public/assets/about.jpg";

const About = () => {
  return (
    <div id="about" className="w-full md:h-screen px-6 flex items-center py-16">
      <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
        <div className="col-span-2">
          <p className="uppercase text-xl tracking-widest text-[#4382e8]">
            About
          </p>
          <h2 className="py-4">Who I Am</h2>
          <p className="py-2 text-gray-600"></p>
          <p className="py-2 text-gray-600">
            Being full of energy I’m looking for employment in IT industry as a
            Web Developer. Having genuine interest in IT began exploring deeply
            that area couple years ago to make a career change. Aiming to
            achieve sufficient foundation to become a professional I graduated
            at TAFE South Bank with Diploma in Web Development in Jul 2022 where
            I gained hands-on experience with ReactJS, NodeJS, Git/GitHub, Data
            Structures, APIs, SQL and non SQL (MongoDB) databases, Drupal,
            Wordpress, Bootstrap and tech principles and culture via both
            team/individual projects, code reviews and presentations.
          </p>
          <p className="py-2 text-gray-600"></p>
          <Link href="/cv">
            <p className="py-2 text-gray-600 underline cursor-pointer">my CV</p>
          </Link>
        </div>
        <div className="w-full h-auto m-auto shadow-md rounded-xl flex items-center justify-center p-4 bg-gray-50">
          {" "}
          <Image src={AboutImg} alt="/" width="500" height="550" />
        </div>
      </div>
    </div>
  );
};

export default About;
