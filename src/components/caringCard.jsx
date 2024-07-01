function CaringCard({ heading, icon }) {
  return (
    <div className="relative rounded-[20px] mt-[100px]">
      <img src={icon} alt="Icon" className="sm:w-[330px] w-[70vw]"/>
      <div className="shadow-lg flex flex-col justify-center absolute top-[50%] left-[7%] sm:top-[20vw] md:top-[10vw] lg:top-[150px] bg-custom-silver items-center p-[16px] w-[85%] rounded-[20px] mt-[16px] h-[150px]">
        <p className="font-bold text-[14px] md:text-[1.5vw] lg:text-[14px] lg:w-[80%]">{heading}</p>
        <p className="text-center mt-[16px] text-[13px] w-[90%] text-custom-primary font-bold">
          Read More
        </p>
      </div>
    </div>
  );
}

export default CaringCard;
