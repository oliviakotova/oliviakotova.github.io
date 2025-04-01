import Image from "next/image";
import Head from "next/head";
import React from "react";
import dogoodadmImg from "../public/assets/projects/admin_panel.png";
import { RiRadioButtonFill } from "react-icons/ri";
import Link from "next/link";
import { useRouter } from "next/router";

const cv = () => {
  //   const router = useRouter();
  return (
    <>
      <div>
        <Head>
          <title className="pb-6">Olivia Kotova</title>
        </Head>
        <div className="w-full">
          <div className="mx-auto grid max-w-[1240px] gap-8 p-10 py-20 md:grid-cols-5">
            <div className="col-span-4 space-y-5">
              <h2 className="text-[hsl(217,56%,45%)]">OLIVIA KOTOVA</h2>

              <p>
                <Link href="https://www.linkedin.com/in/olivia-kotova/">
                  <a
                    p
                    className="cursor-pointer py-4 text-[hsl(217,56%,45%)] underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    linkedin.com/in/olivia-kotova
                  </a>
                </Link>
              </p>
              <p>
                <a
                  //p="true"
                  className="cursor-pointer py-4 text-[hsl(217,56%,45%)] underline"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() =>
                    router.push("mailto:olivia.kotova@hotmail.com")
                  }
                >
                  olivia.kotova@hotmail.com
                </a>
              </p>

              <h3 className="pt-8 uppercase text-[hsl(217,56%,45%)]">
                Eucation:
              </h3>
              <p>Website Development Diploma(TAFE South Bank, QLD)</p>

              <h3 className="pt-8 uppercase text-[hsl(217,56%,45%)]">
                Summary
              </h3>
              <p>
                Being full of energy I’m looking for employment in IT industry
                as a Website Developer. Having genuine interest in IT, began
                exploring deeply that area couple years ago to make a career
                change. Aiming to achieve sufficient foundation to become a
                professional I graduated at TAFE South Bank with Diploma in Web
                Development where I gained hands-on experience with JavaScript,
                ReactJS, NodeJS, Data Structures, APIs, SQL and non SQL
                (MongoDB) database, Bootstrap, Wordpress and tech principles and
                culture via both team/individual projects, code reviews and
                presentations.
              </p>
            </div>
            <div className="col-span-4 rounded-xl py-4 shadow-md md:col-span-1">
              <div className="p-2">
                <p className="pb-4 font-bold uppercase text-[hsl(217,56%,45%)]">
                  Technologies:
                </p>
                <div className="grid grid-cols-2 md:grid-cols-1">
                  <p className="flex items-center py-2 text-gray-600">
                    <RiRadioButtonFill className="pr-1" /> JavaScript
                  </p>
                  <p className="flex items-center py-2 text-gray-600">
                    <RiRadioButtonFill className="pr-1" /> HTML/CSS
                  </p>
                  <p className="flex items-center py-2 text-gray-600">
                    <RiRadioButtonFill className="pr-1" /> React.js
                  </p>
                  <p className="flex items-center py-2 text-gray-600">
                    <RiRadioButtonFill className="pr-1" /> Next.js
                  </p>
                  <p className="flex items-center py-2 text-gray-600">
                    <RiRadioButtonFill className="pr-1" /> Node.js
                  </p>
                  <p className="flex items-center py-2 text-gray-600">
                    <RiRadioButtonFill className="pr-1" /> Express.js
                  </p>
                  <p className="flex items-center py-2 text-gray-600">
                    <RiRadioButtonFill className="pr-1" /> Restful API
                  </p>
                  <p className="flex items-center py-2 text-gray-600">
                    <RiRadioButtonFill className="pr-1" /> MySQL
                  </p>
                  <p className="flex items-center py-2 text-gray-600">
                    <RiRadioButtonFill className="pr-1" /> MongoDB
                  </p>
                  <p className="flex items-center py-2 text-gray-600">
                    <RiRadioButtonFill className="pr-1" /> Drupal
                  </p>
                  <p className="flex items-center py-2 text-gray-600">
                    <RiRadioButtonFill className="pr-1" /> WordPress
                  </p>
                  <p className="flex items-center py-2 text-gray-600">
                    <RiRadioButtonFill className="pr-1" /> Adobe Photoshop
                  </p>
                  <p className="flex items-center py-2 text-gray-600">
                    <RiRadioButtonFill className="pr-1" /> Bootstrap
                  </p>
                  <p className="flex items-center py-2 text-gray-600">
                    <RiRadioButtonFill className="pr-1" /> Tailwind
                  </p>
                </div>
              </div>
            </div>
            <div className="col-span-4 space-y-5">
              <h3 className="uppercase text-[hsl(217,56%,45%)]">Experience:</h3>
              <h4 className="pt-8 text-[hsl(217,56%,45%)]">
                Graphic Designer and Photo Editor at Koshka Media Pty Ltd
                (Sydney, Australia) — Sep 2019 - Present time
              </h4>
              <p>
                <Link href="https://koshkamedia.com/">
                  <a
                    p
                    className="cursor-pointer pr-2 underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Koshka Media
                  </a>
                </Link>
                is one of the greatest company to provide high quality services
                for wedding and family photos and films in Sydney. I’m honoured
                to help casually and remotely at the Prema Photo & Video and
                give a hand when necessary by utilising my expertise and
                knowledge in:
              </p>
              <p>• Photo Editing </p>
              <p>• Image Composition</p>
              <p>
                Builded a website{" "}
                <Link href="https://koshkamedia.com/">
                  <a
                    p
                    className="cursor-pointer pr-2 underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    koshkamedia.com
                  </a>
                </Link>
              </p>
              <p>
                During this time I started exploring online tutorials for Web
                Development (html/ css/ js) and studied full- time at TAFE South
                Bank towards Diploma in Web Development
              </p>
              <h4 className="pt-8 text-[hsl(217,56%,45%)]">
                Warehouse Manager (Brisbane, Australia) — Dec 2022 - Oct 2024
              </h4>
              <p>
                <Link href="https://www.drummondgolf.com.au">
                  <a
                    p
                    className="cursor-pointer pr-2 underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Drummond Golf
                  </a>
                </Link>
                is Australia's premier golf retailer for over 40 years, Drummond
                Golf has been providing the largest range of the world's leading
                golf brands at competitive prices to golfers of all levels and
                ages.
              </p>
              <p>Responsibilities:</p>
              <p>• Managing warehouse stock and warehouse database</p>
              <p>• Dealing with suppliers</p>
              <p>
                • Recording the arrival of products using warehouse management
                system
              </p>
              <p>
                • Processing orders by incpecting quantaty, quality, checking
                specs, cost, price, notifying customers
              </p>

              <h4 className="pt-8 text-[hsl(217,56%,45%)]">
                Graphic Designer at Africa Studio (Mykolayiv, Ukraine) — Dec
                2014 - Aug 2017
              </h4>
              <p>
                <Link href="https://stock.adobe.com/au/contributor/293313/africa-studio">
                  <a
                    p
                    className="cursor-pointer pr-2 underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Afrika Studio
                  </a>
                </Link>
                is one of the leading companies producing and selling tens of
                thousands professional stock photos and designs within
                impressive variety of topics at platforms such as Shutterstock
                <Link href="https:// www.shutterstock.com/g/belchonock">
                  <a
                    //p
                    className="cursor-pointer p-2 underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    https:// www.shutterstock.com/g/belchonock
                  </a>
                </Link>
                and Adobe Stock
                <Link href="https://stock.adobe.com/contributor/293313/">
                  <a
                    p={true}
                    className="cursor-pointer p-2 underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    https://stock.adobe.com/contributor/293313/
                  </a>
                </Link>
                africa-studio and others as well.
              </p>
              <p>
                • Prepared various artwork for digital development and
                commercial use
              </p>
              <p>
                • Creating designs by mixing different photos for specified
                topics and making them seamless and immaculate
              </p>
              <p>• Was mentoring new employees when required</p>
              <p className="font-bold">Achievements:</p>
              <p>• My final designed work were the highest selling items</p>
              <p>• Increased company’s standards of quality</p>
              <p>• Reduced the cost of design due to fast work</p>
              <a href="/cv.pdf" download="olivia_kotova_cv">
                <h4 className="pt-8 text-[hsl(217,56%,45%)]">
                  References available upon request
                </h4>
                <h4 className="pt-8 text-[hsl(217,56%,45%)]">
                  Australian Citizen, full workink rights
                </h4>

                {/*  <p className="underline cursor-pointer hover:scale-10 ease-in pt-16 ">
                  Download Olivia's CV
                </p> */}
              </a>

              <Link href="/#main">
                <p className="hover:scale-10 cursor-pointer pt-16 underline ease-in">
                  Back
                </p>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default cv;
