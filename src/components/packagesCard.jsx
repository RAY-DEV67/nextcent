import { Link } from "react-router-dom";
import CheckMark from "../assets/icons/checkMark";

function PackagesCard({
  packageName,
  description,
  price,
  features,
  duration,
  formerPrice,
}) {
  return (
    <div className="">
      <div
        className={`${
          packageName === "Premium" ? "bg-custom-white shadow-custom-green" : "bg-custom-gray2 shadow-white"
        } flex flex-col items-start shadow mt-[16px] w-[80vw] lg:w-[100%] p-[16px] rounded-[10px]`}
      >
        <div className="flex justify-between items-center w-[100%]">
          <p
            className={`text-headingSmall headingFont lg:text-[2vw] ${
              packageName === "Premium" ? "text-black" : "text-white"
            }`}
          >
            {packageName}
          </p>
          {packageName === "Premium" && (
            <p className="bg-custom-black text-white text-[12px] px-[16px] py-[4px] rounded-[20px]">
              Popular
            </p>
          )}
        </div>
        <p
          className={`my-[8px] text-[14px] ${
            packageName === "Premium" ? "text-black" : "text-white"
          }`}
        >
          {description}
        </p>
        <p
          className={`text-headingSmall font-semibold lg:text-[2vw]  ${
            packageName === "Premium" ? "text-black" : "text-white"
          }`}
        >
          {price}
          <span className="text-[10px]">{duration}</span>
        </p>
        {duration === "/year" && (
          <p
            className={`text-[12px] mt-[4px] ${
              packageName === "Premium" ? "text-black" : "text-white"
            }`}
          >
            Instead of
            <span className="text-red-500 line-through ml-1">
              {" "}
              {formerPrice}
            </span>
          </p>
        )}
        <p
          className={`my-[16px] text-[14px] ${
            packageName === "Premium" ? "text-black" : "text-white"
          }`}
        >
          Features:
        </p>
        {features.map((feature, index) => (
          <div className="flex flex-row items-center mt-[8px]" key={index}>
            <CheckMark packageName={packageName} />
            <p
              className={`ml-[8px] text-[14px] ${
                packageName === "Premium" ? "text-black" : "text-white"
              }`}
            >
              {feature}
            </p>
          </div>
        ))}

        <Link className="w-[100%]">
          <p className="bg-custom-black text-white py-[8px] mt-[24px] rounded-[20px]">
            Start now
          </p>
        </Link>
      </div>
    </div>
  );
}

export default PackagesCard;
