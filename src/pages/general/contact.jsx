import { Link } from "react-router-dom";
import HeroSection from "../../components/heroSection";
import Input from "../../components/input";
import Footer from "../../components/footer";
import Phone from "../../assets/icons/phone";
import Email from "../../assets/icons/email";
import Whatsapp from "../../assets/icons/whatsapp";
import Location from "../../assets/icons/location";

function Contact() {
  return (
    <div className="bg-custom-black text-white">
      <HeroSection text="Contact Us" />

      <div className="flex flex-col items-center">
        <div className="lg:w-[80%] flex flex-col items-center lg:gap-x-10 lg:justify-between lg:flex-row mt-[24px]">
          <div className="p-[16px] rounded-[20px] flex flex-col items-start bg-gradient-to-r from-custom-gray1 to-custom-gray2 w-[80vw] lg:w-[50%]">
            <p className="text-[3.5vw] text-left lg:text-[1.5vw]">
              Get In Touch
            </p>
            <div className="w-[100%] mt-[16px]">
              <p className="text-left mb-[8px]">Name</p>
              <Input placeholder="Your Name" />
            </div>

            <div className="w-[100%] mt-[16px]">
              <p className="text-left mb-[8px]">Email</p>
              <Input placeholder="Your Email Address" />
            </div>

            <div className="w-[100%] mt-[16px]">
              <p className="text-left mb-[8px]">Message</p>
              <Input placeholder="Your Message" multiline={true} />
            </div>

            <Link className="w-[100%] mt-[24px]">
              <p className="bg-transparent border text-white py-[10px] mt-[24px] rounded-[20px]">
                Start now
              </p>
            </Link>
          </div>

          <div className="mt-[24px] lg:mt-[0px] w-[80vw] lg:w-[50%]">
            <div className="">
              <p className="text-[3.5vw] w-[100%] text-left lg:text-[1.5vw] lg:text-left">
                Get In Touch With ServEase
              </p>
              <p className="text-[14px] mt-[8px] mb-[16px] text-left lg:w-[90%]">
                We are here to assist you! Whether you have questions about our
                services, need technical support, or want to provide feedback,
                our team at servEase is ready to help. Reach out to us through
                any of the following channels, and we'll respond promptly.
              </p>
            </div>

            <div className="flex flex-row justify-between lg:w-[80%] mt-[24px]">
              <div className="flex flex-col items-center">
                <Phone />
                <p>Phone Number</p>
                <p>+234901234567</p>
              </div>

              <div className="flex flex-col items-center">
                <Email />
                <p>Email Address</p>
                <p>Serve@gmail.com</p>
              </div>
            </div>

            <div className="flex flex-row justify-between lg:w-[80%] mt-[24px]">
              <div className="flex flex-col items-center">
                <Whatsapp />
                <p>Whatsapp</p>
                <p>+234901234567</p>
              </div>

              <div className="flex flex-col items-center">
                <Location />
                <p>Office</p>
                <p>Ikoyi, lagos, Nigeria</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="relative z-2 h-[300px] mt-[24px] flex flex-col items-center justify-center inAppImage"></div>

      <Footer />
    </div>
  );
}

export default Contact;
