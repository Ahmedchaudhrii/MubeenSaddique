import React from "react";

function EcommerceCard() {
  return (
    <div className="p-4 text-left transition bg-white rounded-lg shadow hover:shadow-md">
      <img src="/src/assets/business/ecommerce-start/brand1.jpg" alt="Ecommerce Startup" className="object-cover w-full h-48 mb-4" />
      <h3 className="text-xl font-semibold text-[#594A3D] mb-2">Ecommerce Startup</h3>
      <p className="text-sm text-gray-600">
        Learn how Mubeen builds online stores that convert — from product sourcing to launch.
      </p>
    </div>
  );
}
export default EcommerceCard;
