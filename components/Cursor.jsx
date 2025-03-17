// components/Cursor.jsx
import { useState, useEffect, useRef } from "react";

const Cursor = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const cursorRef = useRef(null);
  const delay = 0.1; // Delay factor for cursor transition

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePos({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  useEffect(() => {
    const animateCursor = () => {
      if (!cursorRef.current) return;

      const { x, y } = mousePos;
      const cursor = cursorRef.current;

      const targetX = x - cursor.offsetWidth / 2;
      const targetY = y - cursor.offsetHeight / 2;

      cursor.style.transition = `transform ${delay}s ease-out`;
      cursor.style.transform = `translate(${targetX}px, ${targetY}px)`;
    };

    animateCursor();
  }, [mousePos]);

  return (
    <div
      ref={cursorRef}
      className="absolute w-6 h-6 rounded-full bg-black pointer-events-none transform -translate-x-1/2 -translate-y-1/2 z-50"
    ></div>
  );
};

export default Cursor;
