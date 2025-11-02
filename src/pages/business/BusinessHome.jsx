// src/pages/business/BusinessHome.jsx
import BusinessOverview from "../../components/business/BusinessOverview";

function BusinessHome() {
  return (
    <div className="bg-[#fdfaf7] py-20 px-4">
      <div className="mx-auto max-w-7xl">
        <h1 className="text-4xl font-bold text-[#594A3D] text-center mb-10">
          Explore My Business Ventures
        </h1>
        <BusinessOverview />
      </div>
    </div>
  );
}

export default BusinessHome;
