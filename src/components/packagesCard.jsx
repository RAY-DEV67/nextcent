import { Link } from "react-router-dom";
import CheckMark from "../assets/icons/checkMark";
import ReactCardFlip from "react-card-flip";
import { useState, useEffect, useRef } from "react";

function PackagesCard({
  packageName,
  description,
  price,
  features,
  duration,
  formerPrice,
}) {
  const [flip, setFlip] = useState(false);
  const cardRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setFlip(true);
          observer.unobserve(cardRef.current);
        }
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: 0.7, // Change this to change when the animation fires
      }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current);
      }
    };
  }, []);

  return (
    <div ref={cardRef} className="">
      <ReactCardFlip isFlipped={flip} flipDirection="horizontal">
        <div
          className={`${
            packageName === "Premium"
              ? "bg-custom-white shadow-custom-green"
              : "bg-custom-gray2 shadow-white"
          } flex flex-col items-start shadow mt-[16px] w-[80vw] h-[450px] md:h-[400px] md:w-[330px] p-[16px] rounded-[10px]`}
        ></div>

        <div
          className={`${
            packageName === "Premium"
              ? "bg-custom-white shadow-custom-green"
              : "bg-custom-gray2 shadow-white"
          } flex flex-col items-start justify-center md:h-[400px] md:w-[330px] shadow mt-[16px] w-[80vw] h-[450px] p-[16px] rounded-[10px]`}
        >
          <div className="flex justify-between items-center w-[100%]">
            <p
              className={`text-headingSmall headingFont md:text-[3vw] lg:text-headingLarge2 ${
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
            className={`text-headingSmall font-semibold md:text-[4vw] lg:text-headingLarge2 ${
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

          <Link className="w-[100%]" onClick={() => setFlip(!flip)}>
            <p className="bg-custom-black text-white py-[8px] mt-[24px] rounded-[20px]">
              Start now
            </p>
          </Link>
        </div>
      </ReactCardFlip>
    </div>
  );
}

export default PackagesCard;
