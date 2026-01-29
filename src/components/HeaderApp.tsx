import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon } from "@fortawesome/free-regular-svg-icons";
import { faSun } from "@fortawesome/free-regular-svg-icons";

const HeaderApp = () => {
  return (
    <div>
      <div className="font-text-main font-bold text-[16px] text-text flex items-center customhome justify-between uppercase pt-5">
        <Link to="/">Bùi Văn Huy</Link>
        <nav>
          <ul className="flex items-center gap-5">
            <li className="p-1.25 hover:customshadow hover:text-white transition-all duration-200">
              <Link to="/">Home</Link>
            </li>
            <li className="p-1.25 hover:customshadow hover:text-white transition-all duration-200">
              <Link to="/skills">Skills</Link>
            </li>
            <li className="p-1.25 hover:customshadow hover:text-white transition-all duration-200">
              <Link to="/projects">Projects</Link>
            </li>
            <li className="p-1.25 hover:customshadow hover:text-white transition-all duration-200">
              <Link to="/about">About</Link>
            </li>
            <li className="p-1.25 hover:customshadow hover:text-white transition-all duration-200">
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </nav>
        <div className="flex items-center gap-5">
          <div>
            <div>
              {/* <button className="px-2 py-1">
                <FontAwesomeIcon icon={faMoon} />
              </button> */}
              <button className="px-2 py-1 border-2 border-solid border-text rounded-xl hover:cursor-pointer hover:bg-primery hover:border-primery hover:text-black hover:shadow-[0px 0px 15px bg-primery] hover:text-shadow-[0px 0px 10px #FFFFFF] transition duration-200 ">
                <FontAwesomeIcon icon={faSun} />
              </button>
            </div>
          </div>
          <div>
            <button className="px-2 py-1 border-2 border-solid border-text rounded-xl hover:cursor-pointer hover:bg-primery hover:border-primery hover:text-black hover:shadow-[0px 0px 15px bg-primery] hover:text-shadow-[0px 0px 10px #FFFFFF]  transition duration-200 ">En</button>
            {/* <button className="px-2 py-1">Vi</button> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderApp;
