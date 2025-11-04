import React from "react";
function MarqueeCard() {
  return (
    <div className="p-4 text-left transition bg-white rounded-lg shadow hover:shadow-md">
      <img src="https://res.cloudinary.com/dogdyxazy/image/upload/v1762177734/couples.events_1708056410_3303739077647369371_39867527339_rebrav.jpg" alt="Event Marquee" className="object-cover w-full h-48 mb-4" />
      <h3 className="text-xl font-semibold text-[#594A3D] mb-2">Event Marquee Services</h3>
      <p className="text-sm text-gray-600">
        Premium setups for weddings, corporate events, and public gatherings.
      </p>
    </div>
  );
}
export default MarqueeCard;
