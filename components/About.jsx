import React from "react";
import Image from "next/image";
import Link from "next/link";
import AboutImg from "../public/assets/my_desk.png";

const About = () => {
  return (
    <div id="about" className="w-full md:h-screen px-6 flex items-center py-16">
      <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
        <div className="col-span-2">
          <p className="uppercase text-xl tracking-widest text-[#4382e8]">
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
            In addition to my education, I’ve worked as a freelance web
            developer and remote photo retoucher, delivering digital solutions
            that are both creative and functional.{" "}
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
        <div className="w-full h-auto m-auto shadow-md rounded-xl flex items-center justify-center p-4 bg-gray-50">
          {" "}
          <Image src={AboutImg} alt="/" width="500" height="550" />
        </div>
      </div>
    </div>
  );
};

export default About;
