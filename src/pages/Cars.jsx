import React from "react";
import CarCard from "../components/cars/CarCard";

function Cars() {
  const carCollection = [
    {
      name: "Mercedes-Benz C63 AMG",
      image: "https://res.cloudinary.com/dogdyxazy/image/upload/v1761915632/WhatsApp_Image_2025-10-31_at_14.49.27_nm85ie.jpg",
      description: "Brutal V8, German muscle, track-ready performance.",
    },
    {
      name: "Mercedes C 180 (2017)",
      image: "https://res.cloudinary.com/dogdyxazy/image/upload/v1761916594/WhatsApp_Image_2025-10-31_at_14.49.29_2_prbyke.jpg",
      description: "Modern, executive, comfortable luxury.",
    },
    {
      name: "Chevrolet Impala 1967",
      image: "https://res.cloudinary.com/dogdyxazy/image/upload/v1761917219/Screenshot_2025-10-31_at_6.19.55_PM_f1writ.png",
      description: "Iconic, large, American classic with timeless appeal.",
    },
    {
      name: "Audi A6",
      image: "https://res.cloudinary.com/dogdyxazy/image/upload/v1761916981/WhatsApp_Image_2025-10-31_at_14.49.25_timkxe.jpg",
      description: "Sleek, refined, executive sedan.",
    },
    {
      name: "Civic X",
      image: "https://res.cloudinary.com/dogdyxazy/image/upload/v1761917706/beenucars_1712008115_3336888386996402612_54967918883_kpeidv.jpg",
      description: "Sharp, reliable, sporty compact with urban flair.",
    },
    {
      name: "Oshan X7",
      image: "https://res.cloudinary.com/dogdyxazy/image/upload/v1761922048/beenucars_1700209109_3237911151426280088_54967918883_bkupma.jpg",
      description: "Spacious, tech-loaded, family SUV.",
    },
  ];

  return (
    <div className="bg-[#fdfaf7] py-20 px-4">
      <div className="mx-auto text-center max-w-7xl">
        {/* 🧭 Page Intro */}
        <h1 className="text-4xl font-bold text-[#594A3D] mb-4">Mubeen’s Car Collection</h1>
        <p className="mb-6 text-lg italic text-gray-700">
          “Cars aren’t just machines — they’re stories on wheels.” — Mubeen Saddique
        </p>
        <p className="mb-12 text-gray-600">
          A curated garage of speed, luxury, and legacy. Each car reflects a chapter in Mubeen’s journey — from classic muscle to modern elegance.
        </p>

        {/* 🎥 Car Grid */}
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3">
          {carCollection.map((car, index) => (
            <CarCard
              key={index}
              name={car.name}
              image={car.image}
              video={car.video}
              description={car.description}
            />
          ))}
        </div>

        {/* 📢 Call to Action */}
        <div className="mt-16 text-center">
          <h2 className="text-2xl font-semibold text-[#594A3D] mb-2">Want to feature your car?</h2>
          <p className="mb-4 text-gray-600">Reach out to Mubeen to showcase your ride in the next collection.</p>
          <a
            href="/contact"
            className="inline-block px-6 py-2 text-white bg-[#594A3D] rounded hover:bg-[#3f362c] transition"
          >
            Contact Mubeen
          </a>
        </div>
      </div>
    </div>
  );
}

export default Cars;
