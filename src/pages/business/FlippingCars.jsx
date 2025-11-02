// src/pages/business/FlippingCars.jsx
import React from "react";

function FlippingCars() {
  const flippedCars = [
    {
      name: "Toyota Corolla 2010",
      before: "https://res.cloudinary.com/dogdyxazy/image/upload/v1761925000/corolla-before.jpg",
      after: "https://res.cloudinary.com/dogdyxazy/image/upload/v1761925100/corolla-after.jpg",
      description: "Restored paint, new tires, engine tune-up. Bought for PKR 1.2M, sold for PKR 1.65M.",
    },
    {
      name: "Suzuki Mehran 2016",
      before: "https://res.cloudinary.com/dogdyxazy/image/upload/v1761925200/mehran-before.jpg",
      after: "https://res.cloudinary.com/dogdyxazy/image/upload/v1761925300/mehran-after.jpg",
      description: "Interior detailing, bumper fix, resale boost. Bought for PKR 650K, sold for PKR 820K.",
    },
  ];

  return (
    <div className="bg-[#fdfaf7] py-20 px-4">
      <div className="mx-auto text-center max-w-7xl">
        <h1 className="text-4xl font-bold text-[#594A3D] mb-6">Flipping Cars by Mubeen</h1>
        <p className="mb-4 text-lg italic text-gray-700">
          “Every car has potential — you just need the eye to flip it right.”
        </p>
        <p className="mb-12 text-gray-600">
          Mubeen Saddique shares his journey of buying undervalued cars, restoring them, and selling for profit.
        </p>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3">
          {flippedCars.map((car, i) => (
            <div key={i} className="p-4 text-left bg-white rounded-lg shadow">
              <h3 className="text-xl font-semibold text-[#594A3D] mb-2">{car.name}</h3>
              <div className="flex gap-4 mb-4">
                <img src={car.before} alt="Before" className="object-cover w-1/2 h-32 rounded" />
                <img src={car.after} alt="After" className="object-cover w-1/2 h-32 rounded" />
              </div>
              <p className="text-sm text-gray-600">{car.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default FlippingCars;
