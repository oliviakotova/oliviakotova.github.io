import { FaAngleDoubleDown } from "react-icons/fa";

const ScrollToNext = () => {
  const scrollToNext = () => {
    const nextSection = document.getElementById("about");

    // Scroll smoothly
    if (nextSection) {
      nextSection.scrollIntoView({
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="absolute bottom-10 right-0">
      <div
        onClick={scrollToNext} // Trigger scroll to the next section
        className="rounded-full shadow-md p-6 cursor-pointer animate-bounce hover:animate-none hover:scale-110 ease-in duration-600 bg-gray-50"
      >
        <FaAngleDoubleDown />
      </div>
    </div>
  );
};

export default ScrollToNext;
