import SolutionsCard from "./solutionsCard";
import solution1 from "../assets/images/solution1.jpg";
import solution2 from "../assets/images/solution2.jpg";
import solution3 from "../assets/images/solution3.jpg";
import Asterik from "../assets/icons/asterik";

function Solution() {
  return (
    <div className="text-white flex flex-col items-center px-[16px] mt-[64px]">
      <p className="text-[20px] lg:text-[3vw] headingFont">Our Solution</p>
      {/* <p className="text-[3.5vw] lg:text-[2vw] w-[60%] lg:w-[40%] my-[8px]">
        Aiming To Revolutionalizing The Dining Experience
      </p> */}
      <p className="text-[16px] my-[16px] w-[90%] lg:w-[50%]">
        Our digital platform enable restaurants to streamline their operation,
        enhance customer engagement and boost sale
      </p>

      <div className="flex flex-col lg:w-[80%] justify-between items-center lg:flex-row flex-wrap">
        <SolutionsCard
          heading="In- App Ordering"
          text="Let your customers order directly from your menu page."
        />
        <SolutionsCard
          heading="Analytics Dashboard"
          text="Get comprehensive analytics reports of all sales."
        />
        <SolutionsCard
          heading="Customizable Branding"
          text="Set your branding to what best soothes your style."
        />
        <SolutionsCard
          heading="Menu Boards"
          text="Customize your menu boards to fit your style."
        />
        <SolutionsCard
          heading="Secure Transactions"
          text="Receive payments through secure platforms."
        />
        <SolutionsCard
          heading="Reviews And Feedbacks"
          text="Make decitions from feedbacks and reviews from customers."
        />
      </div>

      <div className="mt-[40px] lg:flex justify-center items-center">
        <div className="lg:w-[50%] lg:ml-[24px] flex flex-col items-center lg:items-start">
          <p className="text-[20px] w-[90%] lg:text-[2.5vw] lg:text-left lg:w-[90%] headingFont">
            Customize your menu boards to power your restaurant.
          </p>
          <p className="text-[16px] my-[16px] w-[90%] lg:text-left lg:w-[70%]">
            ServEase's customizable menu boards are designed to enhance the
            dining experience and streamline restaurant operations.
          </p>
        </div>
        <div className="lg:border-l-[1px]">
          <img
            src={solution1}
            alt="Customize your menu board"
            className="w-[500px] h-[600px] rounded-[20px] lg:ml-[32px]"
          />
        </div>
      </div>

      <div className="mt-[40px] flex flex-col lg:flex-row-reverse justify-center items-center">
        <div className="lg:w-[50%] lg:ml-[24px] flex flex-col items-center lg:items-start">
          <p className="text-[20px] w-[90%] headingFont lg:text-[2.5vw] lg:text-left lg:w-[90%]">
            Take charge of your sales and make the most of your insights
          </p>
          <p className="text-[14px] my-[16px] w-[90%] lg:text-left lg:w-[70%]">
            ServEase is committed to empowering restaurants with the insight you
            need to make a data driven decision
          </p>
          {/* <div className="flex flex-row items-start w-[90%]">
            <Asterik />
            <div className="ml-[8px] mt-[-2px] lg:mt-[-8px]">
              <p className="text-[3.5vw] w-[100%] text-left lg:text-[1.5vw] lg:text-left">
                Order Trends
              </p>
              <p className="text-[14px] mt-[8px] mb-[16px] text-left lg:w-[90%]">
                Monitor daily, weekly, and monthly order volumes to identify
                peak times and adjust staffing accordingly, identify best
                selling menu items to focus on high-demand dishes and optimize
                inventory management.
              </p>
            </div>
          </div> */}

          {/* <div className="flex flex-row items-start w-[90%]">
            <Asterik />
            <div className="ml-[8px] mt-[-2px] lg:mt-[-8px]">
              <p className="text-[3.5vw] w-[100%] text-left lg:text-[1.5vw] lg:text-left">
                Customer Behavior Data
              </p>
              <p className="text-[14px] mt-[8px] mb-[16px] text-left lg:w-[90%]">
                Analyze ordering patterns to understand customer preferences,
                including the most requested customizations and combo deals.
              </p>
            </div>
          </div> */}

          {/* <div className="flex flex-row items-start w-[90%]">
            <Asterik />
            <div className="ml-[8px] mt-[-2px] lg:mt-[-8px]">
              <p className="text-[3.5vw] w-[100%] text-left lg:text-[1.5vw] lg:text-left">
                Sales Performance
              </p>
              <p className="text-[14px] mt-[8px] mb-[16px] text-left lg:w-[90%]">
                Generate detailed revenue reports to track overall sales
                performance and identify growth opportunities. Break down sales
                data by category to see which segments are performing best.
              </p>
            </div>
          </div> */}
        </div>
        <div className="lg:border-r-[1px]">
          <img
            src={solution2}
            alt="Built in analytic tools"
            className="w-[500px] h-[600px] rounded-[20px] lg:mr-[32px]"
          />
        </div>
      </div>

      <div className="mt-[40px] lg:flex justify-center items-center">
        <div className="lg:w-[50%] lg:ml-[24px] flex flex-col items-center lg:items-start">
          <p className="text-[20px] w-[90%] headingFont lg:text-[2.5vw] lg:text-left lg:w-[90%]">
            Experience Swift And Secure Transaction With Ease
          </p>
          <p className="text-[16px] my-[16px] w-[90%] lg:text-left lg:w-[70%]">
            ServEase's is dedicated to providing a seamless and secure payment
            experience for both restaurants and customers. Our platform
            integrates advanced security measures and cutting-edge technology to
            ensure that all transactions are safe, efficient, and reliable.
          </p>
        </div>
        <div className="lg:border-l-[1px]">
          <img
            src={solution3}
            alt="Built in secure payment option"
            className="w-[500px] h-[600px] rounded-[20px] lg:ml-[32px]"
          />
        </div>
      </div>
    </div>
  );
}

export default Solution;
