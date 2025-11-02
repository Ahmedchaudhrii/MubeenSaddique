import React from "react";
import BikeCard from "../components/bikes/BikeCard";

function Bikes() {
  const bikeCollection = [
    {
      name: "Honda shadow",
      video: "https://res.cloudinary.com/dogdyxazy/video/upload/v1761919670/beenucars_1664220669_2936017585173349690_54967918883_wcrryq.mp4",
      description: "Reliable classic cruiser with timeless style.",
    },
    {
      name: "Yamaha R6",
      image: "https://res.cloudinary.com/dogdyxazy/image/upload/v1761921829/WhatsApp_Image_2025-10-31_at_16.48.16_xpmnlx.jpg",
      description: "Supersport track champion known for its agility and speed.",
    },
    
    {
      name: "Yamaha R6",
      video: "https://res.cloudinary.com/dogdyxazy/video/upload/v1761922051/beenucars_1720815379_3410768794489544933_54967918883_jkp4ab.mp4",
      description: "Aggressive high-revving thrill machine.",
    },
  ];

  return (
    <div className="bg-[#fdfaf7] py-20 px-4">
      <div className="mx-auto text-center max-w-7xl">
        <h1 className="text-4xl font-bold text-[#594A3D] mb-10">Mubeen’s Bike Collection</h1>
        <p className="mb-12 text-lg text-gray-700">
          A showcase of speed, style, and precision — every bike in Mubeen Saddique’s garage tells a story.
        </p>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3">
          {bikeCollection.map((bike, index) => (
            <BikeCard
              key={index}
              name={bike.name}
              image={bike.image}
              video={bike.video}
              description={bike.description}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Bikes;
