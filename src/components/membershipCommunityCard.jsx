function MembershipCommunityCard({ heading, text, icon }) {
  return (
    <div className="shadow-md flex flex-col justify-center items-center p-[16px] w-[80%] lg:w-[290px] md:w-[48%] h-[200px] rounded-[20px] mt-[16px]">
      <img src={icon} alt="Icon" className="w-[60px]"/>
      <div className="flex flex-row">
        <p className="font-bold text-[20px]">{heading}</p>
      </div>
      <p className="text-center mt-[8px] text-[14px]">{text}</p>
    </div>
  );
}

export default MembershipCommunityCard;
