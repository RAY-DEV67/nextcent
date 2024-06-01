import { Link, useLocation } from "react-router-dom";
import Packages from "./packages";
import FadeInAnimatedDiv from "./fadeInAnimation";

function HeroSection({ text }) {
  const location = useLocation();

  return (
    <div
      className={`relative z-2 h-[400px] flex flex-col items-center justify-end md:justify-center md:h-[100vh] ${
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
        <div className="w-[100vw] my-[16px] hidden lg:flex z-10 flex-col items-center justify-center">
          <Packages />
        </div>
      )}

      <div className="z-10">
        <FadeInAnimatedDiv type="text" showType="showtext">
          <p className="text-white leading-tight headingFont md:w-[70vw] w-[95vw] text-[9vw] md:text-center text-left md:text-[5vw] lg:text-headingLarge ">
            {text}.
          </p>
        </FadeInAnimatedDiv>
      </div>

      <div className="absolute w-[100%] h-[100%] z-5 bg-black opacity-40"></div>
      {location.pathname === "/" && (
        <div className="items-center justify-between z-5 w-[100%] px-[16px] absolute bottom-8 hidden lg:flex">
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
