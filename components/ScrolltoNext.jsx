import { Link } from "react-scroll";
import { FaAngleDoubleDown } from "react-icons/fa";

const ScrollToNext = () => {
  return (
    <div className="absolute bottom-10 right-0">
      <Link to="about" smooth={true} duration={1000} offset={-70}>
        <div className="rounded-full shadow-md p-6 cursor-pointer animate-bounce hover:animate-none hover:scale-110 ease-in duration-600 bg-gray-50">
          <FaAngleDoubleDown />
        </div>
      </Link>
    </div>
  );
};

export default ScrollToNext;
