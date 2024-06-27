function CaringCard({ heading, icon }) {
  return (
    <div className="relative rounded-[20px] mt-[100px]">
      <img src={icon} alt="Icon" className="lg:w-[330px] w-[70vw]"/>
      <div className="shadow-lg flex flex-col justify-center absolute top-[180px] left-[7%] lg:top-[150px] lg:left-[15px] bg-custom-silver items-center p-[16px] w-[85%] lg:w-[300px] md:w-[48%] rounded-[20px] mt-[16px]">
        <p className="font-bold text-[16px] lg:w-[80%]">{heading}</p>
        <p className="text-center mt-[16px] text-[13px] w-[90%] text-custom-primary font-bold">
          Read More
        </p>
      </div>
    </div>
  );
}

export default CaringCard;
