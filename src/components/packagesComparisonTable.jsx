import CheckMark from "../assets/icons/checkMark";

function ComparisonTable() {
  const features = [
    "Enhanced App Ordering",
    "Number Of Tables Allowed",
    "Customer feedback/review",
    "In-App payment option",
    "Number of food per categories",
    "Split payment functionality",
    "In-App marketing tool",
    "Basic Analytics Dashboard",
    "Customizable menu boards",
    "Comprehensive analytic dashboards",
    "Customizable branding",
    "Pricing",
  ];

  const packages = {
    standard: [
      true,
      10,
      true,
      true,
      10,
      false,
      false,
      false,
      false,
      false,
      false,
      "N50,000/m",
    ],
    premium: [
      true,
      20,
      true,
      true,
      20,
      true,
      true,
      true,
      false,
      false,
      false,
      "N100,000/m",
    ],
    enterprise: [
      true,
      "Unlimited",
      true,
      true,
      "Unlimited",
      true,
      true,
      true,
      true,
      true,
      true,
      "N150,000/m",
    ],
  };

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full bg-white">
        <thead>
          <tr>
            <th className="border text-black border-gray-300 px-4 py-2 text-left">
              Features
            </th>
            <th className="border text-black text-center border-gray-300 px-4 py-2">
              Standard
            </th>
            <th className="border text-black border-gray-300 px-4 py-2 text-center">
              Premium
            </th>
            <th className="border text-black border-gray-300 px-4 py-2 text-center">
              Enterprise
            </th>
          </tr>
        </thead>
        <tbody>
          {features.map((feature, index) => (
            <tr key={index}>
              <td className="border text-left border-gray-300 px-4 py-2 text-black">
                {feature}
              </td>
              <td className="border border-gray-300 px-4 py-2 text-black">
                <div className="flex flex-col items-center">
                  {packages.standard[index] === true ? (
                    <CheckMark packageName="Premium" />
                  ) : packages.standard[index] === false ? (
                    "-"
                  ) : (
                    packages.standard[index]
                  )}
                </div>
              </td>
              <td className="border border-gray-300 px-4 py-2 text-black">
                <div className="flex flex-col items-center">
                  {packages.premium[index] === true ? (
                    <CheckMark packageName="Premium" />
                  ) : packages.premium[index] === false ? (
                    "-"
                  ) : (
                    packages.premium[index]
                  )}
                </div>
              </td>
              <td className="border border-gray-300 px-4 py-2 text-black">
                <div className="flex flex-col items-center">
                  {packages.enterprise[index] === true ? (
                    <CheckMark packageName="Premium" />
                  ) : packages.enterprise[index] === false ? (
                    "-"
                  ) : (
                    packages.enterprise[index]
                  )}
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ComparisonTable;
