import { Link, useLocation } from "react-router-dom";
import Hamburger from "../assets/icons/hamburger";
import { useState } from "react";
import Close from "../assets/icons/cloase";

function Navbar() {
  const location = useLocation();
  const [showMobile, setshowMobile] = useState(false);

  const removeNavOverlay = () => {
    setshowMobile(false);
  };

  return (
    <div className="flex flex-col items-center">
      <div className="bg-custom-black fixed z-20 w-[100vw] flex justify-between p-[16px] md:hidden">
        <Link to="/">
          <p className="text-white">Logo</p>
        </Link>
        <div
          onClick={() => {
            setshowMobile(true);
          }}
          className="cursor-pointer"
        >
          <Hamburger />
        </div>
      </div>

      <div className="bg-custom-black fixed z-20 md:w-[100vw] max-w-[1500px] md:flex justify-between items-center p-[16px] hidden">
        <Link to="/">
          <p className="text-white">Logo</p>
        </Link>

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

      <div
        className={
          showMobile
            ? `bg-custom-black z-20 nav landing2 h-[100vh] top-0 w-[100vw] flex flex-col items-center justify-center ml-[-1rem] fixed show`
            : "bg-[#000009] h-[100vh] nav no top-0 w-[100vw] flex flex-col items-center justify-center fixed"
        }
      >
        <div
          className="absolute md:text-[2vw] headingfont text-white top-6 nav text-[4vw] left-[85%]"
          onClick={() => {
            setshowMobile(false);
          }}
        >
          <Close />
        </div>
        <Link to="/" className="nav" onClick={removeNavOverlay}>
          <p className="text-[4vw] md:text-[2vw] text-white mb-[1rem] headingfont font-bold">
            Home
          </p>
        </Link>

        <Link className="nav" to="/about" onClick={removeNavOverlay}>
          <p className="text-[4vw] md:text-[2vw] text-white mb-[1rem] headingfont font-bold">
            About
          </p>
        </Link>
        <Link className="nav" to="/packages" onClick={removeNavOverlay}>
          <p className="text-[4vw] md:text-[2vw] text-white mb-[1rem] headingfont font-bold">
            Packages
          </p>
        </Link>
        <Link className="nav" to="/contact" onClick={removeNavOverlay}>
          <p className="text-[4vw] md:text-[2vw] text-white mb-[1rem] headingfont font-bold">
            Contact
          </p>
        </Link>
        <div className="flex w-[150px] mt-[24px] justify-between items-center">
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
