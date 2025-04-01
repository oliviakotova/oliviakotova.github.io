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
        className="group relative flex h-auto w-full cursor-pointer items-center justify-center overflow-hidden rounded-xl bg-gray-50 from-[#1b3463] to-[#5076c7] shadow-md transition-all delay-150 duration-300 ease-in hover:scale-105 hover:bg-gradient-to-r"
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <Image
          className="rounded-xl transition-all duration-300 group-hover:opacity-20"
          src={backgroundImg}
          alt={title}
        />
        <div className="absolute left-[50%] top-[50%] hidden translate-x-[-50%] translate-y-[-50%] text-center group-hover:block">
          <h2 className="text-2xl tracking-wider text-white">{title}</h2>
          <p className="pb-4 pt-2 text-white">{tech}</p>
        </div>

        {/* Hide orange button on mobile */}
        {isHovered && (
          <motion.div
            className="text-md absolute flex hidden cursor-pointer items-center justify-center rounded-full bg-orange-500 px-8 py-4 text-white shadow-md md:flex"
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
