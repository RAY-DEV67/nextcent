import { Link, useLocation } from "react-router-dom";
import Packages from "./packages";

function HeroSection({ text }) {
  const location = useLocation();

  return (
    <div
      className={`relative z-2 h-[500px] flex flex-col items-center justify-center lg:h-[100vh] ${
        location.pathname === "/"
          ? "heroImage"
          : location.pathname === "/about"
          ? "aboutImage"
          : location.pathname === "/packages"
          ? "packagesImage"
          : location.pathname === "/contact"
          ? "contactImage"
          : null
      }`}
    >
      {location.pathname === "/packages" && (
        <div className="w-[100vw] hidden lg:flex z-10 flex-col items-center justify-center">
          <Packages />
        </div>
      )}

      <p className="text-white headingFont z-10 lg:w-[70vw] w-[90vw] text-[7vw] text-center md:text-[5vw]">
        {text}.
      </p>

      <div className="absolute w-[100%] h-[100%] z-5 bg-black opacity-40"></div>
      {location.pathname === "/" && (
        <div className="items-center justify-between z-5 w-[100vw] px-[16px] absolute bottom-8 hidden lg:flex">
          <div className="flex items-center">
            <p className="text-white bg-custom-green px-[24px] py-[8px] rounded-[20px]">
              Free Trial
            </p>
            <p className="text-white ml-[16px]">
              Experience dining at its finest!
            </p>
          </div>
          <Link to="/about">
            <p className="text-white border rounded-[20px] px-[16px] py-[4px]">
              Learn More
            </p>
          </Link>
        </div>
      )}
    </div>
  );
}

export default HeroSection;
