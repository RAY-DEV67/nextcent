import { Link } from "react-router-dom";
import Instagram from "../assets/icons/instagram";
import LinkedIn from "../assets/icons/linkedIn";
import Twitter from "../assets/icons/twitter";

function Footer() {
  return (
    <div className="text-white mt-[24px] px-[16px] border-t-[0.5px]">
      <div className="flex justify-center gap-x-10">
        <div className="flex flex-col justify-start items-start mt-[16px]">
          <p className="lg:text-[1.5vw]">ServEase</p>
          <Link to="/about">
            <p className="mt-[8px] text-[12px]">About Us</p>
          </Link>
          <p className="mt-[8px] text-[12px]">Careers</p>
          <p className="mt-[8px] text-[12px]">Become A Partner</p>
          <p className="mt-[8px] text-[12px]">Legal</p>
          <p className="mt-[8px] text-[12px]">Service Status</p>
          <p className="mt-[8px] text-[12px]">Blog</p>
        </div>

        <div className="flex flex-col justify-start items-start mt-[16px]">
          <p className="lg:text-[1.5vw]">Support</p>
          <p className="mt-[8px] text-[12px]">Help center</p>
          <p className="mt-[8px] text-[12px]">FAQ</p>
          <p className="mt-[8px] text-[12px]">Privacy Policy</p>
          <p className="mt-[8px] text-[12px]">Terms Of Use</p>
        </div>
      </div>

      <div className="mt-[16px] flex flex-row justify-between items-center py-[16px]">
        <p className="text-[10px]">
          2024 ServEase Company. All rights reserved.
        </p>
        <div className="flex">
          <Instagram />
          <Twitter />
          <LinkedIn />
        </div>
      </div>
    </div>
  );
}

export default Footer;
