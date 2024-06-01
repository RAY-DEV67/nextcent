import Footer from "../../components/footer";
import HeroSection from "../../components/heroSection";
import Packages from "../../components/packages";

function PackagesScreen() {
  return (
    <div className="bg-custom-black text-white">
      <HeroSection text="Our Packages" />

      <div className="w-[100vw] flex md:hidden z-10 flex-col items-center justify-center">
        <Packages />
      </div>

      <Footer />
    </div>
  );
}

export default PackagesScreen;
