import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

const Project = ({ title, backgroundImg, tech, projectUrl }) => {
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setCursorPos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <Link href={projectUrl} passHref>
      <div
        className="relative flex items-center justify-center h-auto w-full shadow-md rounded-xl group hover:bg-gradient-to-r from-[#1b3463] to-[#5076c7] ease-in duration-300 bg-gray-50 hover:scale-105 delay-150 transition-all overflow-hidden cursor-pointer"
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <Image
          className="rounded-xl group-hover:opacity-20 transition-all duration-300"
          src={backgroundImg}
          alt={title}
        />
        <div className="hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-center">
          <h2 className="text-2xl text-white tracking-wider">{title}</h2>
          <p className="pb-4 pt-2 text-white">{tech}</p>
        </div>

        {/* Hide orange button on mobile */}
        {isHovered && (
          <motion.div
            className="absolute flex items-center justify-center px-8 py-4 bg-orange-500 text-white rounded-full text-md cursor-pointer shadow-md hidden md:flex"
            style={{
              top: cursorPos.y,
              left: cursorPos.x,
              whiteSpace: "nowrap",
              minWidth: "120px",
            }}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ type: "spring", stiffness: 150, damping: 15 }}
          >
            View Details
          </motion.div>
        )}
      </div>
    </Link>
  );
};

export default Project;
