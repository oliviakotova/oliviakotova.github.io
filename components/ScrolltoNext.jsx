import { Link } from "react-scroll";
import { FaAngleDoubleDown } from "react-icons/fa";

const ScrollToNext = () => {
  return (
    <div className="absolute bottom-10 right-0">
      <Link to="about" smooth={true} duration={1000} offset={-70}>
        <div className="duration-600 animate-bounce cursor-pointer rounded-full bg-gray-50 p-6 shadow-md ease-in hover:scale-110 hover:animate-none">
          <FaAngleDoubleDown />
        </div>
      </Link>
    </div>
  );
};

export default ScrollToNext;
