import { useState } from "react";
import HeroSection from "../../components/heroSection";
import Packages from "../../components/packages";
import Solution from "../../components/solution";
import Footer from "../../components/footer";
import FadeInAnimatedDiv from "../../components/fadeInAnimation";

function LandingPage() {
  const [packageFrequency, setpackageFrequency] = useState("Monthly");
  const [standardPrice, setstandardPrice] = useState("N50,000");
  const [premiumPrice, setpremiumPrice] = useState("N100,000");
  const [enterprisePrice, setenterprisePrice] = useState("N150,000");

  return (
    <div className="bg-custom-black">
      <HeroSection text="Creating A Unique Dining Experience For Everyone" />

      <div className="mb-[24px] mt-[40px] flex flex-col items-center">
        <div className="flex w-[250px] justify-between">
          <p
            onClick={() => {
              setpackageFrequency("Monthly");
              setstandardPrice("N50,000");
              setenterprisePrice("N150,000");
              setpremiumPrice("N100,000");
            }}
            className={`text-white w-[125px] cursor-pointer pb-[8px] ${
              packageFrequency === "Monthly" && "border-b-2 border-custom-white"
            }`}
          >
            Monthly
          </p>
          <p
            onClick={() => {
              setpackageFrequency("Annual");
              setstandardPrice("N550,000");
              setenterprisePrice("N1,100,000");
              setpremiumPrice("N1,650,000");
            }}
            className={`text-white w-[125px] cursor-pointer pb-[8px] ${
              packageFrequency === "Annual" && "border-b-2 border-custom-white"
            }`}
          >
            Annual
          </p>
        </div>

        <Packages
          standardPrice={standardPrice}
          premiumPrice={premiumPrice}
          enterprisePrice={enterprisePrice}
          packageFrequency={packageFrequency}
        />
      </div>

      <Solution />

      <div className="relative z-10 h-[300px] mt-[24px] flex flex-col items-center justify-center inAppImage">
        <div className="z-10">
          <FadeInAnimatedDiv type="text" showType="showtext">
            <p className="text-custom-white headingFont w-[70vw] text-[7vw] md:text-[4vw] lg:text-headingLarge">
              In App Ordering
            </p>
          </FadeInAnimatedDiv>
        </div>

        <p className="text-white z-10 w-[80vw] mt-[16px]">
          Simplify the order placement process with a few taps, and experience
          fine dining with ease.
        </p>
        <p className="text-white z-[10] mt-[24px] bg-custom-green px-[24px] py-[8px] rounded-[20px]">
          Start Free Trial
        </p>
        <div className="absolute w-[100%] h-[100%] z-5 bg-black opacity-70"></div>
      </div>

      <Footer />
    </div>
  );
}

export default LandingPage;
