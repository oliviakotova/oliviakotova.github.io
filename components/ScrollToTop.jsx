import { FaAngleDoubleUp } from "react-icons/fa";

const ScrollToTopLink = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="absolute bottom-0 left-30 ">
      <div
        onClick={scrollToTop} // Trigger scroll to top on click
        className="rounded-full shadow-md p-6 cursor-pointer animate-bounce hover:animate-none hover:scale-110 ease-in duration-600 bg-gray-50"
      >
        <FaAngleDoubleUp />
      </div>
    </div>
  );
};

export default ScrollToTopLink;
