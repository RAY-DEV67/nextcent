import logo from "../assets/images/footerLogo.png";
import Instagram from "../assets/icons/instagram";
import LinkedIn from "../assets/icons/linkedIn";
import Twitter from "../assets/icons/twitter";

function Footer() {
  return (
    <div className="text-white p-[16px] bg-custom-dark flex flex-col lg:items-center">
      <div className="lg:hidden pt-[16px]">
        <img src={logo} alt="logo" />
      </div>
      <div className="flex flex-col-reverse justify-center lg:w-[85%] lg:flex-row lg:justify-between gap-x-20 ">
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
          <a className="md:text-[1.5vw] font-bold cursor-pointer hover:text-custom-primary">
            Company
          </a>
          <a className="mt-[8px] text-[12px] text-custom-silver cursor-pointer hover:text-custom-primary">
            About Us
          </a>
          <a className="mt-[8px] text-[12px] text-custom-silver cursor-pointer hover:text-custom-primary">
            Blog
          </a>
          <a className="mt-[8px] text-[12px] text-custom-silver cursor-pointer hover:text-custom-primary">
            Contact Us
          </a>
          <a className="mt-[8px] text-[12px] text-custom-silver cursor-pointer hover:text-custom-primary">Pricing</a>
          <a className="mt-[8px] text-[12px] text-custom-silver cursor-pointer hover:text-custom-primary">Testimonies</a>
        </div>

        <div className="flex flex-col justify-start items-start mt-[16px]">
          <a className="md:text-[1.5vw] font-bold cursor-pointer hover:text-custom-primary">Support</a>
          <a className="mt-[8px] text-[12px] text-custom-silver cursor-pointer hover:text-custom-primary">Help center</a>
          <a className="mt-[8px] text-[12px] text-custom-silver cursor-pointer hover:text-custom-primary">
            Terms Of Service
          </a>
          <a className="mt-[8px] text-[12px] text-custom-silver cursor-pointer hover:text-custom-primary">Legal</a>
          <a className="mt-[8px] text-[12px] text-custom-silver cursor-pointer hover:text-custom-primary">
            Privacy Policy
          </a>
          <a className="mt-[8px] text-[12px] text-custom-silver cursor-pointer hover:text-custom-primary">Status</a>
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
