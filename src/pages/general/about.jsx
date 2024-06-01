import HeroSection from "../../components/heroSection";
import aboutUsImage from "../../assets/images/aboutUsImage.jpg";
import Footer from "../../components/footer";
import FadeInAnimatedDiv from "../../components/fadeInAnimation";

function About() {
  return (
    <div className="bg-custom-black text-white">
      <HeroSection text="About Us" />

      <div className="mt-[24px] md:flex justify-center items-center">
        <div className="md:w-[50%] md:ml-[24px] flex flex-col items-center md:items-start">
          <FadeInAnimatedDiv type="fade" showType="showFade">
            <div className="w-[100vw] flex flex-col items-center md:w-[90%]">
              <p className="text-headingSmall headingFont w-[90%] hidden md:flex md:text-[4vw] lg:text-headingLarge2 md:text-left md:w-[90%]">
                About Us
              </p>
            </div>

            <div className="w-[100vw] flex flex-col items-center md:items-start md:w-[90%]">
              <p className="text-[16px] my-[16px] w-[90%] md:text-left md:w-[90%] ">
                At servEase, we are dedicated to revolutionizing the dining
                experience through innovative technology solutions. Our platform
                empowers restaurants to enhance customer engagement, streamline
                operations, and drive growth with a suite of tools designed for
                the modern dining landscape. Join us in our mission to create
                exceptional dining experiences, one order at a time.
              </p>
            </div>
          </FadeInAnimatedDiv>
        </div>
        <div className="flex flex-col items-center">
          <img
            src={aboutUsImage}
            alt="Customize your menu board"
            className="rounded-[20px] w-[500px] "
          />
        </div>
      </div>

      <div className="mt-[24px] md:flex md:flex-row-reverse justify-center items-center">
        <div className="md:w-[50%] md:ml-[24px] flex flex-col items-center md:items-end">
          <FadeInAnimatedDiv type="fade" showType="showFade">
            <div className="w-[100vw] flex flex-col items-center md:w-[90%]">
              <p className="text-headingSmall headingFont w-[90%] lg:text-headingLarge2 md:text-[4vw] md:text-right md:w-[90%]">
                Our Mission
              </p>
            </div>
            <div className="w-[100vw] flex flex-col items-center md:items-end md:w-[90%]">
              <p className="text-[16px] my-[16px] w-[90%] md:text-right md:w-[90%]">
                Our mission is to offers a wide range of solutions designed to
                transform the dining experience and optimize restaurant
                operations. From secure payment processing and in-app ordering
                to customizable menu boards and advanced analytics, our platform
                provides the tools needed to meet the demands of modern
                customers and drive business growth.
              </p>
            </div>
          </FadeInAnimatedDiv>
        </div>
        <div className="flex flex-col items-center">
          <img
            src={aboutUsImage}
            alt="Customize your menu board"
            className="rounded-[20px] w-[500px] "
          />
        </div>
      </div>

      <div className="relative z-2 h-[300px] mt-[24px] flex flex-col items-center justify-center aboutLastImage">
        <div className="z-10 flex flex-col w-[80vw] md:w-[60%] items-center">
          <FadeInAnimatedDiv type="text" showType="showtext">
            <p className="text-white headingFont z-10 mt-[16px] text-[6vw] lg:text-headingLarge2 md:text-[4vw]">
              Take your restaurant service to the next level
            </p>
          </FadeInAnimatedDiv>
        </div>

        <p className="text-white z-[10] mt-[24px] bg-custom-green px-[24px] py-[8px] rounded-[20px]">
          Start Free Trial
        </p>
        <div className="absolute w-[100%] h-[100%] z-5 bg-black opacity-70"></div>
      </div>

      <Footer />
    </div>
  );
}

export default About;
