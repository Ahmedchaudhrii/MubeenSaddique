import React from "react";
function FlipCard() {
  return (
    <div className="p-4 text-left transition bg-white rounded-lg shadow hover:shadow-md">
      <img src="/src/assets/business/flipping-cars/flip1.jpg" alt="Flipping Cars" className="object-cover w-full h-48 mb-4" />
      <h3 className="text-xl font-semibold text-[#594A3D] mb-2">Flipping Cars</h3>
      <p className="text-sm text-gray-600">
        Turn undervalued vehicles into profitable assets through smart restoration and resale.
      </p>
    </div>
  );
}
export default FlipCard;
