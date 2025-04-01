import { Link } from "react-scroll";
import { FaAngleDoubleUp } from "react-icons/fa";

const ScrollToTopLink = () => {
  return (
    <div className="absolute bottom-10">
      <Link to="home" smooth={true} duration={1800} offset={-70}>
        <div className="animate-bounce cursor-pointer rounded-full bg-gray-50 p-6 shadow-md duration-700 ease-in-out hover:scale-110 hover:animate-none">
          <FaAngleDoubleUp />
        </div>
      </Link>
    </div>
  );
};

export default ScrollToTopLink;
