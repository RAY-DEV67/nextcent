import DiagonalArrow from "../assets/icons/diagonalArrow";

function SolutionsCard({ heading, text }) {
  return (
    <div className="bg-custom-gray2 shadow shadow-white flex flex-col justify-start items-start p-[16px] w-[90%] lg:w-[30%] h-[120px] rounded-[20px] mt-[16px]">
      <div className="flex flex-row">
        <p className="font-bold text-[20px]">{heading}</p>
        <DiagonalArrow />
      </div>
      <p className="text-left mt-[8px] text-[14px] w-[90%]">{text}</p>
    </div>
  );
}

export default SolutionsCard;
