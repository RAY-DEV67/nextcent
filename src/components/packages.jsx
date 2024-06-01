import PackagesCard from "./packagesCard";

function Packages({
  standardPrice,
  premiumPrice,
  enterprisePrice,
  packageFrequency,
}) {
  const duration =
    packageFrequency === "Monthly"
      ? "/month"
      : packageFrequency === "Annual"
      ? "/year"
      : null;

  return (
    <div className="flex flex-col w-[65%] lg:w-[80%] lg:flex-row items-center justify-between">
      <PackagesCard
        packageName="Standard"
        description="Best for small scale restaurants"
        price={standardPrice}
        duration={duration}
        formerPrice="N600,000"
        features={[
          "Enhanced In-App Ordering",
          "Advanced Table Management",
          "Customer Feedback and review",
          "In-App Payment Option",
        ]}
      />

      <PackagesCard
        packageName="Premium"
        description="Best for Medium scale restaurants"
        price={premiumPrice}
        duration={duration}
        formerPrice="N1,200,000"
        features={[
          "All Features From Standard Tier",
          "Split Payment Functionality",
          "In-App Marketing Tools",
          "Basic-Analytics Dashboard",
        ]}
      />

      <PackagesCard
        packageName="Enterprise"
        description="Best for large scale restaurants"
        price={enterprisePrice}
        duration={duration}
        formerPrice="N1,800,000"
        features={[
          "All Features From Premium Tier",
          "Customizable Menu Boards",
          "Comprehensive Analytics Dashboard",
          "Customizable Branding",
        ]}
      />
    </div>
  );
}

export default Packages;
