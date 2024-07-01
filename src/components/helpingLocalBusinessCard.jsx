function HelpingLocalBusinessCard({ number, text, icon }) {
  return (
    <div className="flex flex-row justify-start items-start  lg:w-[48%] w-[170px] m-[16px]">
      <div className="w-[50px]">
        <img src={icon} alt="Icon" />
      </div>

      <div className="flex flex-col items-start">
        <p className="font-semibold text-[17px]">{number}</p>
        <p className="text-[14px] text-custom-gray">{text}</p>
      </div>
    </div>
  );
}

export default HelpingLocalBusinessCard;
