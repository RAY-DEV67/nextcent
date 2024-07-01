import Footer from "../components/footer";
import hero from "../assets/images/nexHero.png";
import hero2 from "../assets/images/hero2.png";
import hero3 from "../assets/images/hero3.png";
import hero4 from "../assets/images/hero4.png";
import care1 from "../assets/images/care1.png";
import care2 from "../assets/images/care2.png";
import care3 from "../assets/images/care3.png";
import clientLogo1 from "../assets/images/clientLogo1.png";
import clientLogo2 from "../assets/images/clientLogo2.png";
import clientLogo3 from "../assets/images/clientLogo3.png";
import clientLogo4 from "../assets/images/clientLogo4.png";
import clientLogo5 from "../assets/images/clientLogo5.png";
import clientLogo6 from "../assets/images/clientLogo6.png";
import clientLogo7 from "../assets/images/clientLogo7.png";
import manageIcon1 from "../assets/icons/manageIcon1.png";
import manageIcon2 from "../assets/icons/manageIcon2.png";
import manageIcon3 from "../assets/icons/manageIcon3.png";
import helpIcon1 from "../assets/icons/helpIcon1.png";
import helpIcon2 from "../assets/icons/helpIcon2.png";
import helpIcon3 from "../assets/icons/helpIcon3.png";
import helpIcon4 from "../assets/icons/helpIcon4.png";
import MembershipCommunityCard from "../components/membershipCommunityCard";
import HelpingLocalBusinessCard from "../components/helpingLocalBusinessCard";
import CaringCard from "../components/caringCard";
import RightArrow from "../assets/icons/rightArrow";

function LandingPage() {
  return (
    <div className="">
      <div className="relative bg-custom-silver flex flex-col items-center">
        <div className="lg:w-[85%] z-2 h-[600px] py-[16px] flex flex-col lg:flex-row-reverse items-center justify-end lg:justify-center lg:h-[100vh]">
          <img src={hero} alt="Hero" className="lg:w-[300px]" />
          <div className="flex flex-col items-start lg:w-[70vw] w-[92vw]">
            <p className="text-black text-[9vw] lg:w-[700px] leading-[10vw] sm:leading-[8vw] md:leading-[50px] lg:leading-[72px] text-left sm:text-[6vw] md:text-[5vw] lg:text-headingLarge ">
              Lessons and insights{" "}
              <span className="text-custom-primary">from 8 years</span>
            </p>
            <p className="mt-[8px] text-left">
              Where to grow your business as a photographer: site or social
              media?
            </p>
            <div className="text-white mt-[16px] flex flex-col items-center bg-custom-primary w-[100px] py-[12px] rounded-[5px]">
              <p>Register</p>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-[32px] flex flex-col items-center">
        <p className="text-[6vw] sm:text-[3.5vw] md:text-[4vw] font-semibold lg:text-[30px]">
          Our Clients
        </p>
        <p className="text-custom-gray">
          We have been with some fortune 500+ clients
        </p>
        <div className="slider mt-[16px] lg:w-[80%]">
          <div className="slide-track">
            {/* SLIDES///// */}

            <div className="slide softtools">
              <img src={clientLogo1} />
            </div>

            <div className="slide softtools">
              <img src={clientLogo2} />
            </div>

            <div className="slide softtools">
              <img src={clientLogo3} />
            </div>

            <div className="slide softtools">
              <img src={clientLogo4} />
            </div>

            <div className="slide softtools">
              <img src={clientLogo5} />
            </div>
            <div className="slide softtools">
              <img src={clientLogo6} />
            </div>
            <div className="slide softtools">
              <img src={clientLogo7} />
            </div>

            {/* SAME SLIDES (DOUBLED)//////// */}

            <div className="slide softtools">
              <img src={clientLogo1} />
            </div>

            <div className="slide softtools">
              <img src={clientLogo2} />
            </div>

            <div className="slide softtools">
              <img src={clientLogo3} />
            </div>

            <div className="slide softtools">
              <img src={clientLogo4} />
            </div>

            <div className="slide softtools">
              <img src={clientLogo5} />
            </div>
            <div className="slide softtools">
              <img src={clientLogo6} />
            </div>
            <div className="slide softtools">
              <img src={clientLogo7} />
            </div>
          </div>
        </div>
      </div>

      <div className="mt-[64px] flex flex-col items-center">
        <p className="text-[6vw] sm:text-[3.5vw] md:text-[4vw] font-semibold lg:text-[30px] leading-[8vw] md:leading-[50px] sm:leading-[30px] w-[90vw] lg:w-[45vw] sm:w-[60vw]">
          Manage your entire community in a single system
        </p>
        <p className="text-custom-gray mt-[16px]">
          Who is Nextcent suitable for?
        </p>

        <div className="flex flex-col lg:flex-row lg:justify-between items-center lg:w-[85%] mt-[16px]">
          <MembershipCommunityCard
            icon={manageIcon3}
            heading="Membership Organisations"
            text="Our membership management software provides full automation of membership renewals and payments"
          />
          <MembershipCommunityCard
            icon={manageIcon2}
            heading="National Associations"
            text="Our membership management software provides full automation of membership renewals and payments"
          />
          <MembershipCommunityCard
            icon={manageIcon1}
            heading="Clubs And Groups"
            text="Our membership management software provides full automation of membership renewals and payments"
          />
        </div>
      </div>

      <div className="flex flex-col items-center mt-[64px] ">
        <div className="lg:w-[85%] flex flex-col lg:flex-row items-center justify-end lg:justify-between">
          <img src={hero2} alt="Hero" className="lg:w-[300px]" />
          <div className="flex flex-col lg:ml-[72px] items-center lg:items-start md:w-[60%] w-[95vw] mt-[16px] lg:mt-[0px]">
            <p className="text-black text-[6vw] sm:text-[3.5vw] md:text-[4vw] sm:w-[500px] lg:text-left leading-[8vw] md:leading-[50px] sm:leading-[30px] lg:leading-[50px] text-center lg:text-[30px] font-semibold ">
              The unseen of spending three years at Pixelgrade
            </p>
            <p className="my-[16px] lg:text-left w-[90%] lg:w-[100%]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit
              amet justo ipsum. Sed accumsan quam vitae est varius fringilla.
              Pellentesque placerat vestibulum lorem sed porta. Nullam mattis
              tristique iaculis. Nullam pulvinar sit amet risus pretium auctor.
              Etiam quis massa pulvinar, aliquam quam vitae, tempus sem. Donec
              elementum pulvinar odio.{" "}
            </p>
            <div className="text-white mt-[16px] flex flex-col items-center bg-custom-primary w-[120px] py-[12px] rounded-[5px]">
              <p>Learn More</p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-custom-silver mt-[24px] z-2 py-[16px] flex flex-col lg:flex-row items-center justify-center lg:justify-center">
        <div className="lg:w-[85%] flex flex-col lg:flex-row items-center justify-end lg:justify-between">
          <div className="flex flex-col items-center lg:items-start md:w-[40%] w-[95vw]">
            <p className="text-black w-[90%] text-[6vw] sm:text-[3.5vw] md:text-[4vw] sm:w-[400px] lg:w-[350px] lg:text-left leading-[8vw] md:leading-[50px] sm:leading-[30px] lg:leading-[40px] text-center lg:text-[30px] font-semibold">
              Helping a local
              <span className="text-custom-primary">
                {" "}
                business reinvent itself
              </span>
            </p>
            <p className="mt-[16px]">
              We reached here with our hard work and dedication
            </p>
          </div>
          <div className="lg:w-[50%]">
            <div className="flex justify-between">
              <HelpingLocalBusinessCard
                icon={helpIcon1}
                number="2,245,341"
                text="Members"
              />
              <HelpingLocalBusinessCard
                icon={helpIcon2}
                number="46,328"
                text="Clubs"
              />
            </div>
            <div className="flex">
              <HelpingLocalBusinessCard
                icon={helpIcon3}
                number="828,868"
                text="Event Bookings"
              />
              <HelpingLocalBusinessCard
                icon={helpIcon4}
                number="1,926,436"
                text="Members"
              />
            </div>
          </div>
        </div>{" "}
      </div>

      <div className="flex flex-col items-center mt-[64px] ">
        <div className="lg:w-[85%] flex flex-col lg:flex-row items-center justify-end lg:justify-between">
          <img src={hero3} alt="Hero" className="lg:w-[300px]" />
          <div className="flex flex-col lg:ml-[72px] items-center lg:items-start md:w-[60%] w-[95vw] mt-[16px] lg:mt-[0px]">
            <p className="text-black text-[6vw] sm:text-[3.5vw] md:text-[4vw] lg:w-[500px] lg:text-left leading-[8vw] md:leading-[50px] sm:leading-[30px] text-center lg:text-[30px] font-semibold ">
              How to design your site footer like we did
            </p>
            <p className="my-[16px] lg:text-left w-[90%] lg:w-[100%]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit
              amet justo ipsum. Sed accumsan quam vitae est varius fringilla.
              Pellentesque placerat vestibulum lorem sed porta. Nullam mattis
              tristique iaculis. Nullam pulvinar sit amet risus pretium auctor.
              Etiam quis massa pulvinar, aliquam quam vitae, tempus sem. Donec
              elementum pulvinar odio.{" "}
            </p>
            <div className="text-white mt-[16px] flex flex-col items-center bg-custom-primary w-[120px] py-[12px] rounded-[5px]">
              <p>Learn More</p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center mt-[64px] py-[16px] bg-custom-silver">
        <div className="lg:w-[85%] flex flex-col lg:flex-row items-center justify-end lg:justify-between">
          <img src={hero4} alt="Hero" className="lg:w-[300px]" />
          <div className="flex flex-col lg:ml-[72px] items-center lg:items-start md:w-[60%] w-[95vw] mt-[16px] lg:mt-[0px]">
            <p className="my-[16px] lg:text-left w-[90%] lg:w-[100%]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit
              amet justo ipsum. Sed accumsan quam vitae est varius fringilla.
              Pellentesque placerat vestibulum lorem sed porta. Nullam mattis
              tristique iaculis. Nullam pulvinar sit amet risus pretium auctor.
              Etiam quis massa pulvinar, aliquam quam vitae, tempus sem. Donec
              elementum pulvinar odio.{" "}
            </p>
            <p className="mt-[8px] text-left w-[90%] lg:w-[100%] text-custom-primary font-semibold">
              Tim Smith
            </p>
            <p className="text-left w-[90%] lg:w-[100%] text-custom-gray">
              British Dragon Boat Racing Association
            </p>
          </div>
        </div>
      </div>

      <div className="mt-[24px] flex flex-col justify-center w-[100%] items-center">
        <p className="text-[6vw] sm:text-[3.5vw] md:text-[4vw] font-semibold lg:text-[30px] leading-[8vw] md:leading-[50px] sm:leading-[30px] w-[90vw] lg:w-[45vw] md:w-[60vw]">
          Caring is the new marketing
        </p>
        <p className="text-custom-gray mt-[16px] mx-[16px] lg:w-[50%]">
          The Nextcent blog is the best place to read about the latest
          membership insights, trends and more. See who's joining the community,
          read about how our community are increasing their membership income
          and lot's more.​
        </p>

        <div className="flex flex-col gap-x-5 md:flex-row md:justify-center lg:justify-between items-center md:w-[85%] mt-[-80px]">
          <CaringCard
            icon={care1}
            heading="Creating streamlined safegaurding processes with OneRen"
          />
          <CaringCard
            icon={care2}
            heading="What are your safegaurding responsibilities and how can you manage them"
          />
          <CaringCard
            icon={care3}
            heading="Revamping the membership Model with Triathion Austrailia"
          />
        </div>
      </div>

      <div className="mt-[100px] bg-custom-silver py-[24px] flex flex-col items-center">
        <p className="text-[6vw] sm:text-[3.5vw] md:text-[4vw] font-semibold lg:text-[30px] leading-[8vw] md:leading-[50px] sm:leading-[30px] w-[90vw] lg:w-[35vw] md:w-[60vw]">
          Pellentesque suscipit fringilla libero eu.
        </p>
        <div className="text-white mt-[32px] flex items-center bg-custom-primary px-[32px] py-[12px] rounded-[5px]">
          <p className="mr-[8px]">Get a Demo</p>
          <RightArrow />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default LandingPage;
