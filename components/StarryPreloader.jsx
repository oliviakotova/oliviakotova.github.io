"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import dynamic from "next/dynamic";

const MotionPathPlugin = dynamic(() => import("gsap/MotionPathPlugin"), {
  ssr: false,
});

gsap.registerPlugin(MotionPathPlugin);

const StarryPreloader = () => {
  const containerRef = useRef(null);
  const starsRef = useRef([]);

  useEffect(() => {
    const stars = starsRef.current;
    const numStars = 200;
    const layers = 5;
    const radii = [50, 100, 150, 200, 250];

    stars.forEach((star, i) => {
      const layerIndex = i % layers;
      const radius = radii[layerIndex];
      const angle = (i / numStars) * Math.PI * 2;

      const startX = Math.cos(angle) * radius;
      const startY = Math.sin(angle) * radius;

      gsap.set(star, {
        x: startX,
        y: startY,
        opacity: 0.7,
        scale: Math.random() * 0.8 + 0.2,
      });

      gsap.to(star, {
        x: `+=${Math.random() * 10 - 5}`,
        y: `+=${Math.random() * 10 - 5}`,
        duration: 3 + Math.random() * 3,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      gsap.to(star, {
        rotation: 360,
        duration: 10 + Math.random() * 10,
        repeat: -1,
        ease: "linear",
        modifiers: {
          x: (x) => `${parseFloat(x) + Math.cos(angle) * radius}px`,
          y: (y) => `${parseFloat(y) + Math.sin(angle) * radius}px`,
        },
      });
    });

    // Cursor interaction: Smooth avoidance effect
    const handleMouseMove = (e) => {
      if (!containerRef.current) return;

      const { clientX, clientY } = e;
      const { left, top, width, height } =
        containerRef.current.getBoundingClientRect();
      const centerX = left + width / 2;
      const centerY = top + height / 2;

      stars.forEach((star) => {
        const starRect = star.getBoundingClientRect();
        const dx = starRect.left - clientX;
        const dy = starRect.top - clientY;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < 80) {
          const angle = Math.atan2(dy, dx);
          const force = (80 - distance) / 80; // The closer the stronger the effect
          const moveX = Math.cos(angle) * force * 30;
          const moveY = Math.sin(angle) * force * 30;

          gsap.to(star, {
            x: `+=${moveX}`,
            y: `+=${moveY}`,
            duration: 1.5,
            ease: "power3.out",
          });
        }
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div
      ref={containerRef}
      className="absolute left-0 top-0 flex h-full w-full items-center justify-center bg-black"
    >
      {[...Array(200)].map((_, i) => (
        <div
          key={i}
          ref={(el) => (starsRef.current[i] = el)}
          className="absolute h-1 w-1 rounded-full bg-yellow-300 shadow-lg"
        />
      ))}
    </div>
  );
};

export default StarryPreloader;
