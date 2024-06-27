import { Link, useLocation } from "react-router-dom";
import Hamburger from "../assets/icons/hamburger";
import { useState } from "react";
import Close from "../assets/icons/close";
import RightArrow from "../assets/icons/rightArrow";
import logo from "../assets/images/nexLogo.png";

function Navbar() {
  const location = useLocation();
  const [showMobile, setshowMobile] = useState(false);

  const removeNavOverlay = () => {
    setshowMobile(false);
  };

  return (
    <div className="flex flex-col items-center">
      <div className="bg-white shadow-md fixed z-20 w-[100vw] flex justify-between p-[16px] md:hidden">
        <img src={logo} />
        <div
          onClick={() => {
            setshowMobile(true);
          }}
          className="cursor-pointer"
        >
          <Hamburger />
        </div>
      </div>

      <div className="bg-white shadow-md fixed z-20 md:w-[100vw] max-w-[1500px] md:flex justify-between items-center py-[16px] px-[64px] hidden">
        <img src={logo} />

        <div className="flex w-[600px] justify-between items-center">
          <div>
            <p>Home</p>
          </div>

          <div>
            <p>Features</p>
          </div>

          <div>
            <p>Community</p>
          </div>

          <div>
            <p>Blog</p>
          </div>

          <div>
            <p>Pricing</p>
          </div>

          <div className="text-white flex items-center bg-custom-primary px-[32px] py-[12px] rounded-[5px]">
            <p className="mr-[8px]">Register Now</p>
            <RightArrow />
          </div>
        </div>
      </div>

      <div
        className={
          showMobile
            ? `bg-black z-20 nav landing2 h-[100vh] top-0 w-[100vw] flex flex-col items-center justify-center fixed show`
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
        <div className="nav" onClick={removeNavOverlay}>
          <p className="text-[4vw] md:text-[2vw] text-white mb-[1rem] headingfont font-bold">
            Home
          </p>
        </div>

        <div className="nav" onClick={removeNavOverlay}>
          <p className="text-[4vw] md:text-[2vw] text-white mb-[1rem] headingfont font-bold">
            Features
          </p>
        </div>
        <div className="nav" onClick={removeNavOverlay}>
          <p className="text-[4vw] md:text-[2vw] text-white mb-[1rem] headingfont font-bold">
            Community
          </p>
        </div>
        <div className="nav" onClick={removeNavOverlay}>
          <p className="text-[4vw] md:text-[2vw] text-white mb-[1rem] headingfont font-bold">
            Blog
          </p>
        </div>
        <div className="nav" onClick={removeNavOverlay}>
          <p className="text-[4vw] md:text-[2vw] text-white mb-[1rem] headingfont font-bold">
            Pricing
          </p>
        </div>
        <div className="text-white mt-[32px] flex items-center bg-custom-primary px-[32px] py-[12px] rounded-[5px]">
          <p className="mr-[8px]">Register Now</p>
          <RightArrow />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
