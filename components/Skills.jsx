import React from "react";
import Image from "next/image";
import Link from "next/link";
import autoprefixer from "autoprefixer";
import Html from "../public/assets/skills/html.png";
import Css from "../public/assets/skills/css.png";
import Javascript from "../public/assets/skills/javascript.png";
import ReactImg from "../public/assets/skills/react.png";
import NextJS from "../public/assets/skills/nextjs.png";
import GitHub from "../public/assets/skills/github.png";
import MySql from "../public/assets/skills/mysql.png";
import Mongo from "../public/assets/skills/mongo.png";
import NodeJs from "../public/assets/skills/node.png";
import Drupal from "../public/assets/skills/drupal.png";
import Docker from "../public/assets/skills/docker.png";
import Bootstrap from "../public/assets/skills/bootstrap.png";
import Tailwind from "../public/assets/skills/tailwind.png";
import Photoshop from "../public/assets/skills/photoshop.png";
import Wordpress from "../public/assets/skills/wordpress.png";
import Shopify from "../public/assets/skills/shopify.png";

const Skills = () => {
  return (
    <div id="skills" className="w-full lg:h-screen  ">
      <div className="max-w-[1240px] mx-auto flex flex-col justify-center p-6 py-20 h-full">
        <p className="uppercase text-xl tracking-widest text-[#4382e8]">
          Skills
        </p>
        <h2 className="py-4">What I Can Do</h2>
        <div className="grid grid-cols-3 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6">
          <a
            href="https://html.spec.whatwg.org/multipage/"
            target="_blank"
            rel="noreferrer"
          >
            <div className="p-6 shadow-md rounded-md hover:scale-105 ease-in duration-300 bg-gray-50">
              <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-4 sm:grid-cols-2 justify-center items-center">
                <div className="m-auto">
                  <Image src={Html} width="64px" height="64px" alt="/" />
                </div>
                <div className="flex flex-col items-center justify-center">
                  <h3>HTML</h3>
                </div>
              </div>
            </div>
          </a>
          <a
            href="https://developer.mozilla.org/en-US/docs/Web/CSS"
            target="_blank"
            rel="noreferrer"
          >
            <div className="p-6 shadow-md rounded-md hover:scale-105 ease-in duration-300 bg-gray-50">
              <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-4 sm:grid-cols-2 justify-center items-center">
                <div className="m-auto">
                  <Image src={Css} width="64px" height="64px" alt="/" />
                </div>
                <div className="flex flex-col items-center justify-center">
                  <h3>CSS</h3>
                </div>
              </div>
            </div>
          </a>
          <a
            href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"
            target="_blank"
            rel="noreferrer"
          >
            <div className="p-6 shadow-md rounded-md hover:scale-105 ease-in duration-300 bg-gray-50">
              <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-4 sm:grid-cols-2 justify-center items-center">
                <div className="m-auto">
                  <Image src={Javascript} width="64px" height="64px" alt="/" />
                </div>
                <div className="flex flex-col items-center justify-center">
                  <h3>JavaScript</h3>
                </div>
              </div>
            </div>
          </a>
          <a
            href="https://reactjs.org/docs/getting-started.html"
            target="_blank"
            rel="noreferrer"
          >
            <div className="p-6 shadow-md rounded-md hover:scale-105 ease-in duration-300 bg-gray-50">
              <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-4 sm:grid-cols-2 justify-center items-center">
                <div className="m-auto">
                  <Image src={ReactImg} width="64px" height="64px" alt="/" />
                </div>
                <div className="flex flex-col items-center justify-center">
                  <h3>React JS</h3>
                </div>
              </div>
            </div>
          </a>
          <a
            href="https://nextjs.org/docs/getting-started"
            target="_blank"
            rel="noreferrer"
          >
            <div className="p-6 shadow-md rounded-md hover:scale-105 ease-in duration-300 bg-gray-50">
              <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-4 sm:grid-cols-2 justify-center items-center">
                <div className="m-auto">
                  <Image src={NextJS} width="64px" height="64px" alt="/" />
                </div>
                <div className="flex flex-col items-center justify-center">
                  <h3>Next JS</h3>
                </div>
              </div>
            </div>
          </a>
          <a
            href="https://github.com/oliviakotova"
            target="_blank"
            rel="noreferrer"
          >
            <div className="p-6 shadow-md rounded-md hover:scale-105 ease-in duration-300 bg-gray-50">
              <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-4 sm:grid-cols-2 justify-center items-center">
                <div className="m-auto">
                  <Image src={GitHub} width="64px" height="64px" alt="/" />
                </div>
                <div className="flex flex-col items-center justify-center">
                  <h3>GitHub</h3>
                </div>
              </div>
            </div>
          </a>
          <a href="https://www.mysql.com/" target="_blank" rel="noreferrer">
            <div className="p-6 shadow-md rounded-md hover:scale-105 ease-in duration-300 bg-gray-50">
              <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-4 sm:grid-cols-2 justify-center items-center">
                <div className="m-auto">
                  <Image src={MySql} width="64px" height="64px" alt="/" />
                </div>
                <div className="flex flex-col items-center justify-center">
                  <h3>MySQL</h3>
                </div>
              </div>
            </div>
          </a>
          <a
            href="https://www.mongodb.com/home"
            target="_blank"
            rel="noreferrer"
          >
            <div className="p-6 shadow-md rounded-md hover:scale-105 ease-in duration-300 bg-gray-50">
              <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-4 sm:grid-cols-2 justify-center items-center">
                <div className="m-auto">
                  <Image src={Mongo} width="64px" height="64px" alt="/" />
                </div>
                <div className="flex flex-col items-center justify-center">
                  <h3>MongoDB</h3>
                </div>
              </div>
            </div>
          </a>
          <a href="https://nodejs.org/en/" target="_blank" rel="noreferrer">
            <div className="p-6 shadow-md rounded-md hover:scale-105 ease-in duration-300 bg-gray-50">
              <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-4 sm:grid-cols-2 justify-center items-center">
                <div className="m-auto">
                  <Image src={NodeJs} width="64px" height="64px" alt="/" />
                </div>
                <div className="flex flex-col items-center justify-center">
                  <h3>Node JS</h3>
                </div>
              </div>
            </div>
          </a>
          <a href="https://www.drupal.org/" target="_blank" rel="noreferrer">
            <div className="p-6 shadow-md rounded-md hover:scale-105 ease-in duration-300 bg-gray-50">
              <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-4 sm:grid-cols-2 justify-center items-center">
                <div className="m-auto">
                  <Image src={Drupal} width="64px" height="64px" alt="/" />
                </div>
                <div className="flex flex-col items-center justify-center">
                  <h3>Drupal</h3>
                </div>
              </div>
            </div>
          </a>
          <a href="https://www.shopify.com/" target="_blank" rel="noreferrer">
            <div className="p-6 shadow-md rounded-md hover:scale-105 ease-in duration-300 bg-gray-50">
              <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-4 sm:grid-cols-2 justify-center items-center">
                <div className="m-auto">
                  <Image src={Shopify} width="64px" height="64px" alt="/" />
                </div>
                <div className="flex flex-col items-center justify-center">
                  <h3>Shopify</h3>
                </div>
              </div>
            </div>
          </a>
          <a href="https://getbootstrap.com/" target="_blank" rel="noreferrer">
            <div className="p-6 shadow-md rounded-md hover:scale-105 ease-in duration-300 bg-gray-50">
              <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-4 sm:grid-cols-2 justify-center items-center">
                <div className="m-auto">
                  <Image src={Bootstrap} width="64px" height="64px" alt="/" />
                </div>
                <div className="flex flex-col items-center justify-center">
                  <h3>Bootstrap</h3>
                </div>
              </div>
            </div>
          </a>
          <a href="https://tailwindcss.com/" target="_blank" rel="noreferrer">
            <div className="p-6 shadow-md rounded-md hover:scale-105 ease-in duration-300 bg-gray-50">
              <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-4 sm:grid-cols-2 justify-center items-center">
                <div className="m-auto">
                  <Image src={Tailwind} width="64px" height="64px" alt="/" />
                </div>
                <div className="flex flex-col items-center justify-center">
                  <h3>Tailwind</h3>
                </div>
              </div>
            </div>
          </a>
          <a
            href="https://www.adobe.com/au/products/photoshop.html"
            target="_blank"
            rel="noreferrer"
          >
            <div className="p-6 shadow-md rounded-md hover:scale-105 ease-in duration-300 bg-gray-50">
              <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-4 sm:grid-cols-2 justify-center items-center">
                <div className="m-auto">
                  <Image src={Photoshop} width="64px" height="64px" alt="/" />
                </div>
                <div className="flex flex-col items-center justify-center">
                  <h3>Photoshop</h3>
                </div>
              </div>
            </div>
          </a>
          <a
            href="https://en-au.wordpress.org/"
            target="_blank"
            rel="noreferrer"
          >
            <div className="p-6 shadow-md rounded-md hover:scale-105 ease-in duration-300 bg-gray-50">
              <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-4 sm:grid-cols-2 justify-center items-center">
                <div className="m-auto">
                  <Image src={Wordpress} width="64px" height="64px" alt="/" />
                </div>
                <div className="flex flex-col items-center justify-center">
                  <h3>WordPress</h3>
                </div>
              </div>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Skills;
