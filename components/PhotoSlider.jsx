import { useState, useEffect, useRef } from "react";
import { useSwipeable } from "react-swipeable";

const PhotoSlider = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [isHovered, setIsHovered] = useState(false); // Track hover state

  // Handle auto-sliding with pause/resume logic
  useEffect(() => {
    if (isPaused || isHovered) return; // Stop auto-sliding when paused or hovered

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length); // Loop through images
    }, 3000);

    return () => clearInterval(interval); // Clean up interval on unmount or when paused/hovered
  }, [isPaused, isHovered, images.length]);

  // Handle dot click to change image and pause the slider
  const handleDotClick = (index) => {
    setCurrentIndex(index);
    setIsPaused(true); // Pause on dot click
  };

  // Handle image click to toggle pause/resume
  const handleImageClick = () => {
    setIsPaused((prev) => !prev); // Toggle the state to pause/resume the slider
  };

  // Stop sliding on hover
  const handleMouseEnter = () => {
    setIsHovered(true); // Set isHovered to true when mouse enters
    setIsPaused(true); // Pause the slider on hover
  };

  // Resume sliding when hover ends
  const handleMouseLeave = () => {
    setIsHovered(false); // Set isHovered to false when mouse leaves
    setIsPaused(false); // Resume the slider when mouse leaves
  };

  // Navigate to the previous slide
  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  // Navigate to the next slide
  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };
  // Swipe handlers using react-swipeable
  const swipeHandlers = useSwipeable({
    onSwipedLeft: nextSlide,
    onSwipedRight: prevSlide,
    trackMouse: true, // Allow mouse tracking for swipe-like gestures on desktop
  });

  return (
    <div
      className="relative flex justify-center items-center flex-col w-full"
      onMouseEnter={handleMouseEnter} // Stop sliding on hover
      onMouseLeave={handleMouseLeave} // Resume sliding when hover ends
    >
      {/* Image container with responsive width */}
      <div
        className="relative w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] xl:h-[700px] max-w-screen-xl overflow-hidden mb-0 sm:mb-0"
        onClick={handleImageClick}
        {...swipeHandlers} // Add swipe handlers to the image container
      >
        <div
          className="absolute top-0 left-0 w-full h-full flex transition-transform duration-1000 ease-in-out"
          style={{
            transform: `translateX(-${currentIndex * 100}%)`, // Slide transition
          }}
        >
          {images.map((src, index) => (
            <div key={index} className="w-full h-full flex-shrink-0">
              <img
                src={src}
                alt={`Slide ${index + 1}`}
                className="w-full h-full object-contain" // Ensures the whole image is visible without cropping
              />
            </div>
          ))}
        </div>
      </div>

      {/* Dots navigation */}
      <div className="mt-4 sm:mt-4 w-full flex justify-center space-x-6 sm:space-x-3">
        {" "}
        {/* Adjusted spacing for mobile */}
        {images.map((_, index) => (
          <button
            key={index}
            className={`h-2 w-2 rounded-full ${
              currentIndex === index ? "bg-gray-700" : "bg-white"
            }`}
            onClick={() => handleDotClick(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default PhotoSlider;
