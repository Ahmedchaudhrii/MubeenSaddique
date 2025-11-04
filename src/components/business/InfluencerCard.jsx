import React from "react";
function InfluencerCard() {
  return (
    <div className="p-4 text-left transition bg-white rounded-lg shadow hover:shadow-md">
      <img src="https://res.cloudinary.com/dogdyxazy/image/upload/v1762188360/mubeentiktok2_n2xyrd.jpg" alt="Influencer Branding" className="object-cover w-full h-48 mb-4" />
      <h3 className="text-xl font-semibold text-[#594A3D] mb-2">Influencer Branding</h3>
      <p className="text-sm text-gray-600">
        Build your personal brand, monetize your influence, and launch digital products.
      </p>
    </div>
  );
}
export default InfluencerCard;
