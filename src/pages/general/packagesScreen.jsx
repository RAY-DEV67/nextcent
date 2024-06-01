import Footer from "../../components/footer";
import HeroSection from "../../components/heroSection";
import Packages from "../../components/packages";
import ComparisonTable from "../../components/packagesComparisonTable";

function PackagesScreen() {
  return (
    <div className="bg-custom-black text-white">
      <HeroSection text="Our Packages" />

      <div className="w-[100vw] flex md:hidden z-10 flex-col items-center justify-center">
        <Packages />
      </div>
      <div className="flex flex-col items-center">
        <div className="w-[90%] mb-[16px] mt-[40px]">
          <ComparisonTable />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default PackagesScreen;
