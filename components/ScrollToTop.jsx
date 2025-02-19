import { Link } from "react-scroll";
import { FaAngleDoubleUp } from "react-icons/fa";

const ScrollToTopLink = () => {
  return (
    <div className="absolute bottom-10 left-10">
      <Link to="home" smooth={true} duration={1800} offset={-70}>
        <div className="rounded-full shadow-md p-6 cursor-pointer animate-bounce hover:animate-none hover:scale-110 ease-in-out duration-700 bg-gray-50">
          <FaAngleDoubleUp />
        </div>
      </Link>
    </div>
  );
};

export default ScrollToTopLink;
