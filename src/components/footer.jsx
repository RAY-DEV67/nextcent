import logo from "../assets/images/footerLogo.png";
import Instagram from "../assets/icons/instagram";
import LinkedIn from "../assets/icons/linkedIn";
import Twitter from "../assets/icons/twitter";

function Footer() {
  return (
    <div className="text-white p-[16px] bg-custom-dark">
      <div className="lg:hidden pt-[16px]">
        <img src={logo} alt="logo" />
      </div>
      <div className="flex flex-col-reverse md:flex-row justify-center gap-x-20 ">
        <div className="mt-[16px] lg:mt-[8px] flex flex-row lg:flex-col lg:items-start lg:justify-start lg:gap-y-5 justify-between items-center py-[16px]">
          <div className="hidden lg:block">
            <img src={logo} alt="logo" />
          </div>
          <p className="text-[10px]">
            2020 Landify UI Kit. All rights reserved.
          </p>
          <div className="flex">
            <Instagram />
            <Twitter />
            <LinkedIn />
          </div>
        </div>

        <div className="flex flex-col justify-start items-start mt-[16px]">
          <p className="md:text-[1.5vw] font-bold">Company</p>
          <p className="mt-[8px] text-[12px] text-custom-silver">About Us</p>
          <p className="mt-[8px] text-[12px] text-custom-silver">Blog</p>
          <p className="mt-[8px] text-[12px] text-custom-silver">Contact Us</p>
          <p className="mt-[8px] text-[12px] text-custom-silver">Pricing</p>
          <p className="mt-[8px] text-[12px] text-custom-silver">Testimonies</p>
        </div>

        <div className="flex flex-col justify-start items-start mt-[16px]">
          <p className="md:text-[1.5vw] font-bold">Support</p>
          <p className="mt-[8px] text-[12px] text-custom-silver">Help center</p>
          <p className="mt-[8px] text-[12px] text-custom-silver">
            Terms Of Service
          </p>
          <p className="mt-[8px] text-[12px] text-custom-silver">Legal</p>
          <p className="mt-[8px] text-[12px] text-custom-silver">
            Privacy Policy
          </p>
          <p className="mt-[8px] text-[12px] text-custom-silver">Status</p>
        </div>

        <div className="flex flex-col justify-start items-start mt-[16px]">
          <p className="md:text-[1.5vw] font-bold">Stay up to date</p>
          <div>
            <input
              type="text"
              className="bg-transparent border mt-[8px] p-[10px] w-[200px] rounded-[5px] text-[10px]"
              placeholder="Your email address"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
