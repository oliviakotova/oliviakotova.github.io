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
          <div className="max-w-[1240px] mx-auto p-10 grid md:grid-cols-5 gap-8 py-20">
            <div className="col-span-4 space-y-5">
              <h2 className="text-[hsl(217,56%,45%)]">OLIVIA KOTOVA</h2>
              <p>
                <Link href="https://www.linkedin.com/in/olivia-kotova/">
                  <a
                    p
                    className="py-4 underline cursor-pointer text-[hsl(217,56%,45%)]"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    linkedin.com/in/olivia-kotova
                  </a>
                </Link>
              </p>
              <p>
                <a
                  p="true"
                  className="py-4 underline cursor-pointer text-[hsl(217,56%,45%)]"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() =>
                    router.push("mailto:olivia.kotova@hotmail.com")
                  }
                >
                  olivia.kotova@hotmail.com
                </a>
              </p>

              <h3 className="text-[hsl(217,56%,45%)] uppercase pt-8">
                Eucation:
              </h3>
              <p>
                Diploma in Website Development (TAFE South Bank, QLD) — Jul 2022
              </p>

              <h3 className="text-[hsl(217,56%,45%)] uppercase pt-8">
                Summary
              </h3>
              <p>
                Being full of energy I’m looking for employment in IT industry
                as a Junior Developer. Having genuine interest in IT, began
                exploring deeply that area couple years ago to make a career
                change. Aiming to achieve sufficient foundation to become a
                professional I graduated at TAFE South Bank with Diploma in Web
                Development where I gained hands-on experience with JavaScript,
                ReactJS, NodeJS, Data Structures, APIs, SQL and non SQL
                (MongoDB) database, Bootstrap and tech principles and culture
                via both team/individual projects, code reviews and
                presentations. Looking to launch my career in tech after
                graduating. I believe my passion in solving complex tasks by
                applying modern IT solutions will be an asset to your company.
              </p>
            </div>
            <div className="col-span-4 md:col-span-1 shadow-md  rounded-xl py-4">
              <div className="p-2">
                <p className="text-[hsl(217,56%,45%)] font-bold pb-4 uppercase">
                  Technologies:
                </p>
                <div className="grid grid-cols-2 md:grid-cols-1">
                  <p className="text-gray-600 py-2 flex items-center">
                    <RiRadioButtonFill className="pr-1" /> JavaScript
                  </p>
                  <p className="text-gray-600 py-2 flex items-center">
                    <RiRadioButtonFill className="pr-1" /> HTML/CSS
                  </p>
                  <p className="text-gray-600 py-2 flex items-center">
                    <RiRadioButtonFill className="pr-1" /> React.js
                  </p>
                  <p className="text-gray-600 py-2 flex items-center">
                    <RiRadioButtonFill className="pr-1" /> Next.js
                  </p>
                  <p className="text-gray-600 py-2 flex items-center">
                    <RiRadioButtonFill className="pr-1" /> Node.js
                  </p>
                  <p className="text-gray-600 py-2 flex items-center">
                    <RiRadioButtonFill className="pr-1" /> Express.js
                  </p>
                  <p className="text-gray-600 py-2 flex items-center">
                    <RiRadioButtonFill className="pr-1" /> Restful API
                  </p>
                  <p className="text-gray-600 py-2 flex items-center">
                    <RiRadioButtonFill className="pr-1" /> MySQL
                  </p>
                  <p className="text-gray-600 py-2 flex items-center">
                    <RiRadioButtonFill className="pr-1" /> MongoDB
                  </p>
                  <p className="text-gray-600 py-2 flex items-center">
                    <RiRadioButtonFill className="pr-1" /> Drupal
                  </p>
                  <p className="text-gray-600 py-2 flex items-center">
                    <RiRadioButtonFill className="pr-1" /> WordPress
                  </p>
                  <p className="text-gray-600 py-2 flex items-center">
                    <RiRadioButtonFill className="pr-1" /> Adobe Photoshop
                  </p>
                  <p className="text-gray-600 py-2 flex items-center">
                    <RiRadioButtonFill className="pr-1" /> Bootstrap
                  </p>
                  <p className="text-gray-600 py-2 flex items-center">
                    <RiRadioButtonFill className="pr-1" /> Tailwind
                  </p>
                </div>
              </div>
            </div>
            <div className="col-span-4 space-y-5">
              <h3 className="text-[hsl(217,56%,45%)] uppercase">Experience:</h3>
              <h4 className="text-[hsl(217,56%,45%)] pt-8">
                Casual Photo Retoucher at Koshka Media Pty Ltd (Sydney,
                Australia) — Sep 2019 - Present time
              </h4>
              <p>
                <Link href="https://koshkamedia.com/">
                  <a
                    p
                    className="pr-2 underline cursor-pointer"
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
              <p>• Retouching wedding and family photos </p>
              <p>• Image composition</p>
              <p>
                Builded a website{" "}
                <Link href="https://koshkamedia.com/">
                  <a
                    p
                    className="pr-2 underline cursor-pointer"
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
                Bank towards Diploma in Web Development (2021-2022)
              </p>
              <h4 className="text-[hsl(217,56%,45%)] pt-8">
                Graphic Designer at Africa Studio (Mykolayiv, Ukraine) — Dec
                2014 - Aug 2017
              </h4>
              <p>
                <Link href="https://stock.adobe.com/au/contributor/293313/africa-studio">
                  <a
                    p
                    className="pr-2 underline cursor-pointer"
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
                    className="p-2 underline cursor-pointer"
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
                    className="p-2 underline cursor-pointer"
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
                <p className="underline cursor-pointer hover:scale-10 ease-in pt-16 ">
                  Download CV
                </p>
              </a>

              <Link href="/#main">
                <p className="underline cursor-pointer hover:scale-10 ease-in pt-16 ">
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
