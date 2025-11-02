import React from "react";
function GallerySection() {
  const images = [
    "/src/assets/cars/car1.jpg",
    "/src/assets/cars/car2.jpg",
    "/src/assets/events-marquee/event1.jpg",
    "/src/assets/events-marquee/event2.jpg",
    "/src/assets/podcast/podcast1.jpg",
    "/src/assets/business/flipping-cars/flip1.jpg",
    "/src/assets/business/ecommerce-start/brand1.jpg",
    "/src/assets/business/become-influencer/influencer1.jpg",
  ];

  return (
    <section className="py-20 bg-white">
      <div className="px-4 mx-auto text-center max-w-7xl">
        <h2 className="text-3xl md:text-4xl font-bold text-[#594A3D] mb-12">
          Gallery Highlights
        </h2>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-4">
          {images.map((src, index) => (
            <div key={index} className="overflow-hidden transition rounded-lg shadow hover:shadow-md">
              <img
                src={src}
                alt={`Gallery ${index + 1}`}
                className="object-cover w-full h-56 transition-transform hover:scale-105"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default GallerySection;
