import React from "react";
import Image from "next/image";
import Link from "next/link";
import AboutImg from "../public/assets/my_desk.png";

const About = () => {
  return (
    <div id="about" className="flex w-full items-center md:h-screen">
      <div className="py-16gap-8 m-auto max-w-[1240px] grid-cols-3 px-6 md:grid">
        <div className="col-span-2">
          <p className="text-xl uppercase tracking-widest text-[#4382e8]">
            About me
          </p>

          <p className="py-2 text-gray-600 md:font-bold">
            Hello, I’m Olivia – a creative and driven Web Developer with a
            passion for crafting intuitive digital experiences.
          </p>
          <p className="py-2 text-gray-600">
            With a background in Mechanical Engineering, I honed my
            problem-solving skills and ranked at the top of my class during my
            Master’s. Although I was offered a promising engineering role, I
            decided to follow my true passion for design. This led me to spend
            over five years as a Graphic Designer in Ukraine, where my work was
            recognised for its high quality and strong impact on performance
            metrics—often exceeding sales targets.
          </p>
          <p className="py-2 text-gray-600">
            My genuine interest in technology and innovation eventually steered
            me toward web development. I pursued a Diploma in Web Development at
            TAFE South Bank, where I gained practical expertise in ReactJS,
            NodeJS, Git/GitHub, APIs, SQL/NoSQL (MongoDB), and popular platforms
            like Drupal, WordPress, and Shopify.
          </p>
          <p className="py-2 text-gray-600">
            {" "}
            In addition to my education, I’ve worked as a freelance Web
            Disigner/ Web Developer and remote Photo Retoucher, delivering
            digital solutions that are both creative and functional.{" "}
          </p>
          <p className="py-2 text-gray-600">
            I’m now ready to bring my diverse skill set—combining technical
            expertise with a keen design eye—into the role of Junior Web
            Developer. My goal is to create user-centric, impactful websites
            that blend innovation with seamless functionality.
          </p>
          <p className="py-2 text-gray-600">
            {" "}
            Let’s connect and bring your vision to life with cutting-edge web
            development solutions.
          </p>
          <p className="py-2 text-gray-600"></p>
          {/* <Link href="/cv">
            <p className="py-2 text-gray-600 underline cursor-pointer">my CV</p>
          </Link> */}
        </div>
        <div className="m-auto flex h-auto w-full items-center justify-center rounded-xl shadow-md">
          {" "}
          <Image
            className="rounded-xl transition-all duration-300 group-hover:opacity-20"
            src={AboutImg}
            alt="Olivia's Workspace"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
