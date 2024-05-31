import { Link, useLocation } from "react-router-dom";
import Hamburger from "../assets/icons/hamburger";

function Navbar() {
  const location = useLocation();

  return (
    <div className="flex flex-col items-center">
      <div className="bg-custom-black fixed z-20 w-[100vw] flex justify-between p-[16px] md:hidden">
        <p className="text-white">Logo</p>
        <Hamburger />
      </div>

      <div className="bg-custom-black fixed z-20 md:w-[100vw] max-w-[1500px] lg:w-[100vw] md:flex justify-between items-center p-[16px] hidden">
        <div>
          <p className="text-white">Logo</p>
        </div>

        <div className="flex w-[300px] justify-between items-center">
          <Link to="/">
            <p
              className={`text-white border-custom-white ${
                location.pathname === "/" && "border-b-2"
              }`}
            >
              Home
            </p>
          </Link>

          <Link to="/about">
            <p
              className={`text-white border-custom-white ${
                location.pathname === "/about" && "border-b-2"
              }`}
            >
              About
            </p>
          </Link>

          <Link to="/packages">
            <p
              className={`text-white border-custom-white ${
                location.pathname === "/packages" && "border-b-2"
              }`}
            >
              Packages
            </p>
          </Link>

          <Link to="/contact">
            <p
              className={`text-white border-custom-white ${
                location.pathname === "/contact" && "border-b-2"
              }`}
            >
              Contact
            </p>
          </Link>
        </div>

        <div className="flex w-[150px] justify-between items-center">
          <p className="text-white">Login</p>
          <p className="text-white bg-custom-green px-[16px] py-[4px] rounded-[20px]">
            Sign Up
          </p>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
