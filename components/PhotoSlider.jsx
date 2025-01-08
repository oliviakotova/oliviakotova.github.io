import { useState, useEffect, useRef } from "react";

const PhotoSlider = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [transitioning, setTransitioning] = useState(false); // Flag for handling the loop transition
  const intervalRef = useRef(null);
  const sliderWidth = images.length * 100; // To calculate the width of the entire slider

  // Automatic slide effect
  useEffect(() => {
    if (isPaused) return; // Stop auto-sliding if paused

    intervalRef.current = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length); // Infinite loop using modulo
    }, 3000); // Slide every 3 seconds

    return () => clearInterval(intervalRef.current); // Clean up interval on unmount
  }, [isPaused, images.length]);

  // Handle dot click
  const handleDotClick = (index) => {
    setCurrentIndex(index);
    setIsPaused(true); // Pause the slider when a dot is clicked
  };

  // Handle image click to stop the sliding and resume after 5 seconds
  const handleImageClick = () => {
    if (!isPaused) {
      setIsPaused(true);

      if (intervalRef.current) {
        clearInterval(intervalRef.current); // Clear interval on image click
      }

      setTimeout(() => setIsPaused(false), 5000); // Resume after 5 seconds
    } else {
      setIsPaused(false);
    }
  };

  // Navigate to the previous slide
  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    ); // Wrap around
  };

  // Navigate to the next slide
  const nextSlide = () => {
    if (currentIndex === images.length - 1) {
      setTransitioning(true); // Trigger transition when we reach the last slide
    }
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length); // Wrap around
  };

  // Reset the transition effect after the loop completes
  useEffect(() => {
    if (currentIndex === 0 && transitioning) {
      setTimeout(() => {
        setTransitioning(false); // Reset the transition flag after the loop finishes
      }, 1000); // Match the duration of the transition (1000ms or 1 second)
    }
  }, [currentIndex, transitioning]);

  return (
    <div className="relative w-full flex justify-center items-center flex-col">
      {/* Image container with 80% of the viewport width */}
      <div
        className="relative w-[80vw] h-[60vh] md:h-[500px] overflow-hidden"
        onClick={handleImageClick}
      >
        <div
          className={`absolute top-0 left-0 w-full h-full flex transition-transform duration-1000 ease-in-out ${
            transitioning ? "transition-none" : "" // Disable transition during wraparound
          }`}
          style={{
            transform: `translateX(-${currentIndex * 100}%)`, // Slide transition
          }}
        >
          {images.map((src, index) => (
            <div key={index} className="w-full h-full flex-shrink-0">
              <img
                src={src}
                alt={`Slide ${index + 1}`}
                className="w-full h-full object-contain"
              />
            </div>
          ))}
          {/* Duplicate the first image to simulate seamless loop */}
          <div className="w-full h-full flex-shrink-0">
            <img
              src={images[0]}
              alt={`Slide 1`}
              className="w-full h-full object-contain"
            />
          </div>
        </div>
      </div>

      {/* Left triangle for previous slide */}
      <button
        onClick={prevSlide}
        className="absolute left-[-50px] top-1/2 transform -translate-y-1/2 text-white text-3xl z-10 opacity-70 hover:opacity-100 transition-opacity duration-300 ease-in-out"
      >
        &#9664;
      </button>

      {/* Right triangle for next slide */}
      <button
        onClick={nextSlide}
        className="absolute right-[-50px] top-1/2 transform -translate-y-1/2 text-white text-3xl z-10 opacity-70 hover:opacity-100 transition-opacity duration-300 ease-in-out"
      >
        &#9654;
      </button>

      {/* Dots container placed below the entire slider */}
      <div className="mt-4 w-full flex justify-center space-x-6">
        {images.map((_, index) => (
          <button
            key={index}
            className={`h-2 w-2 rounded-full ${
              currentIndex === index ? "bg-white" : "bg-gray-500"
            }`}
            onClick={() => handleDotClick(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default PhotoSlider;
